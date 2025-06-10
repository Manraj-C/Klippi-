import React, { useState } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const plans = [{
    name: "Individual",
    description: "Ideal for individual CSMs who want to augment their workflow using Klippi as their personal assistant",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: ["AI-powered workflow automation", "Personal CSM assistant capabilities", "Client interaction support", "Meeting preparation and follow-up", "Personalized insights and recommendations", "Basic integrations with your existing tools"],
    highlight: false,
    cta: "Contact Sales for More Info"
  }, {
    name: "Team",
    description: "Designed for teams that want to hire Klippi as a full-time AI-powered Customer Success Manager across multiple accounts or roles",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: ["Everything in Individual", "Multi-account management", "Team collaboration features", "Advanced workflow automation", "Cross-functional CS operations", "Comprehensive analytics and reporting", "Priority support and training", "Custom integrations"],
    highlight: true,
    cta: "Contact Sales for More Info"
  }, {
    name: "Consultant",
    description: "For organizations seeking to co-create bespoke AI workflows using Klippi—essentially working with Klippi as an AI consultant",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: ["Everything in Team", "Bespoke AI workflow creation", "Custom strategy development", "Dedicated AI consultant partnership", "Advanced customization capabilities", "Strategic CS transformation guidance", "Executive-level support", "Unlimited integrations and customizations"],
    highlight: false,
    cta: "Contact Sales for More Info"
  }];
  return <SiteLayout>
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground mb-8">Choose the plan that's right for you or your team. Hire Klippi as your virtual Customer Success Manager.</p>
          
          <div className="inline-flex items-center p-1 border rounded-lg bg-muted/30 mb-2">
            
            
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => <Card key={index} className={`transition-all ${plan.highlight ? "border-primary/50 shadow-md relative" : "border-border"}`}>
              {plan.highlight && <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <div className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>}
              
              <CardHeader>
                <CardTitle className="text-center">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-center">
                      {plan.monthlyPrice}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Pricing tailored to your needs
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button className={`w-full ${plan.highlight ? "bg-primary text-white hover:bg-primary/90" : ""}`} variant={plan.highlight ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>)}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2 flex items-center">
                How does Klippi work as a virtual CSM?
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground ml-1" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-80">Klippi integrates with your existing tools and processes to provide AI-powered customer success management.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </h3>
              <p className="text-muted-foreground text-sm">Klippi acts as your AI-powered Customer Success Manager, automating workflows, providing insights, and helping you manage customer relationships more effectively.</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">What's included in the custom pricing?</h3>
              <p className="text-muted-foreground text-sm">Our pricing is tailored to your specific needs, team size, and use case. Contact our sales team to discuss a plan that works best for your organization.</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Can I switch between plans?</h3>
              <p className="text-muted-foreground text-sm">Yes, you can upgrade or modify your plan as your needs evolve. Our team will work with you to ensure a smooth transition.</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Do you offer implementation support?</h3>
              <p className="text-muted-foreground text-sm">Absolutely! All plans include dedicated support to help you get the most out of Klippi. Higher-tier plans include more comprehensive onboarding and strategic guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>;
};
export default Pricing;