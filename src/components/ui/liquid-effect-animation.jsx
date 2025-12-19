"use client";
import { useEffect, useRef, useState } from "react";

export function LiquidEffectAnimation() {
  const canvasRef = useRef(null);
  const appRef = useRef(null);
  const [isSupported, setIsSupported] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Detect mobile device
    const checkMobile = () => {
      return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768
      );
    };

    const isMobile = checkMobile();

    // Skip liquid effect on mobile devices
    if (isMobile) {
      setIsLoading(false);
      setIsSupported(false);
      return;
    }

    // Wait a bit to ensure canvas is ready
    const initTimeout = setTimeout(() => {
      if (!canvasRef.current) {
        setIsLoading(false);
        return;
      }

      // Load the script dynamically with better error handling
      const script = document.createElement("script");
      script.type = "module";
      script.async = true;

      script.textContent = `
        (async () => {
          try {
            const isMobile = ${isMobile};
            let LiquidBackground;
            
            // Try to import the library
            try {
              const module = await import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js');
              LiquidBackground = module.default || module;
            } catch (importError) {
              console.error('Failed to import liquid background:', importError);
              throw importError;
            }
            
            const canvas = document.getElementById('liquid-canvas');
            if (!canvas) {
              throw new Error('Canvas not found');
            }
            
            // Properly set canvas dimensions for mobile
            const setCanvasDimensions = () => {
              const dpr = window.devicePixelRatio || 1;
              const rect = canvas.getBoundingClientRect();
              canvas.width = rect.width * dpr;
              canvas.height = rect.height * dpr;
            };
            
            setCanvasDimensions();
            
            // Initialize the liquid background
            const app = typeof LiquidBackground === 'function' 
              ? LiquidBackground(canvas)
              : new LiquidBackground(canvas);
            
            if (!app) {
              throw new Error('Failed to initialize liquid background');
            }
            
            // Use optimized image for mobile
            const imageUrl = isMobile 
              ? 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'
              : 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
            
            // Load image with error handling
            if (app.loadImage) {
              try {
                await app.loadImage(imageUrl);
              } catch (imgError) {
                console.warn('Failed to load image, using default:', imgError);
              }
            }
            
            // Optimize settings for mobile performance
            try {
              if (app.liquidPlane) {
                // Material optimizations
                if (app.liquidPlane.material) {
                  app.liquidPlane.material.metalness = isMobile ? 0.5 : 0.75;
                  app.liquidPlane.material.roughness = isMobile ? 0.4 : 0.25;
                }
                
                // Reduce displacement for better mobile performance
                if (app.liquidPlane.uniforms && app.liquidPlane.uniforms.displacementScale) {
                  app.liquidPlane.uniforms.displacementScale.value = isMobile ? 2.5 : 5;
                }
              }
              
              // Disable rain effect
              if (app.setRain) {
                app.setRain(false);
              }
              
              // Renderer optimizations for mobile
              if (isMobile && app.renderer) {
                // Limit pixel ratio for better performance
                const maxPixelRatio = 1.5;
                if (app.renderer.setPixelRatio) {
                  app.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio));
                } else if (app.renderer.domElement) {
                  // Manual scaling if setPixelRatio not available
                  const scale = Math.min(window.devicePixelRatio || 1, maxPixelRatio);
                  app.renderer.domElement.style.transform = \`scale(\${1/scale})\`;
                  app.renderer.domElement.style.transformOrigin = '0 0';
                }
              }
            } catch (optError) {
              console.warn('Some optimizations failed, continuing with defaults:', optError);
            }
            
            // Handle window resize for mobile
            const handleResize = () => {
              if (!app) return;
              setCanvasDimensions();
              if (app.renderer) {
                const width = isMobile ? window.innerWidth * window.devicePixelRatio : window.innerWidth;
                const height = isMobile ? window.innerHeight * window.devicePixelRatio : window.innerHeight;
                if (app.renderer.setSize) {
                  app.renderer.setSize(width, height);
                }
              }
            };
            
            window.addEventListener('resize', handleResize, false);
            
            // Allow scrolling to work properly on mobile - only prevent default on canvas itself
            if (isMobile && canvas) {
              canvas.addEventListener('touchmove', function(e) {
                e.preventDefault();
              }, { passive: false });
              
              // Prevent pinch zoom
              canvas.addEventListener('gesturestart', function(e) {
                e.preventDefault();
              }, false);
            }
            
            window.__liquidApp = app;
            window.__liquidResizeHandler = handleResize;
            console.log('Liquid effect loaded successfully', { isMobile });
            
          } catch (error) {
            console.error('Error loading liquid effect:', error);
            // Fallback: show an animated gradient background
            const canvas = document.getElementById('liquid-canvas');
            if (canvas) {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
              const ctx = canvas.getContext('2d');
              if (ctx) {
                // Create animated gradient fallback
                let time = 0;
                const animate = () => {
                  time += 0.01;
                  const gradient = ctx.createRadialGradient(
                    canvas.width / 2 + Math.sin(time) * 100,
                    canvas.height / 2 + Math.cos(time) * 100,
                    0,
                    canvas.width / 2,
                    canvas.height / 2,
                    Math.max(canvas.width, canvas.height) * 1.5
                  );
                  gradient.addColorStop(0, 'rgba(6, 208, 1, 0.15)');
                  gradient.addColorStop(0.5, 'rgba(70, 53, 177, 0.2)');
                  gradient.addColorStop(1, 'rgba(183, 113, 229, 0.15)');
                  ctx.fillStyle = gradient;
                  ctx.fillRect(0, 0, canvas.width, canvas.height);
                  requestAnimationFrame(animate);
                };
                animate();
              }
            }
          }
        })();
      `;

      // Add error handling
      script.onerror = (error) => {
        console.error("Failed to load liquid effect script:", error);
        setIsSupported(false);
        setIsLoading(false);
      };

      document.body.appendChild(script);

      // Set loading to false after a delay
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      if (window.__liquidResizeHandler) {
        window.removeEventListener(
          "resize",
          window.__liquidResizeHandler,
          false
        );
        window.__liquidResizeHandler = null;
      }
      if (window.__liquidApp && window.__liquidApp.dispose) {
        window.__liquidApp.dispose();
        window.__liquidApp = null;
      }
    };
  }, []);

  // Fallback for unsupported devices
  if (!isSupported) {
    return (
      <div
        className="fixed inset-0 m-0 w-full h-full overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6, 208, 1, 0.1) 0%, rgba(70, 53, 177, 0.15) 50%, rgba(183, 113, 229, 0.1) 100%)",
          zIndex: -1,
        }}
      />
    );
  }

  return (
    <div
      className="fixed inset-0 m-0 w-full h-full overflow-hidden pointer-events-none"
      style={{
        fontFamily: '"Montserrat", serif',
        zIndex: -1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        top: 0,
        left: 0,
      }}
    >
      <canvas
        ref={canvasRef}
        id="liquid-canvas"
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: -1,
          display: "block",
          WebkitTouchCallout: "none",
          top: 0,
          left: 0,
        }}
      />
      <div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.7) 100%)",
          zIndex: 1,
        }}
      />
    </div>
  );
}
