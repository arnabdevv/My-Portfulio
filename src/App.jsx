import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Portfolio from "@/pages/Portfolio";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/not-found";

// Main App component: provides global context and routing
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* 2. Uncomment this line by removing the curly braces and slashes */}
        <Toaster />

        <Switch>
          <Route path="/" component={Portfolio} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route component={NotFound} />
        </Switch>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
