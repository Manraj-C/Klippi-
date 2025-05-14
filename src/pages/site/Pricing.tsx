
import React, { useState } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  
  const plans = [
    {
      name: "Individual",
      description: "For solo CSMs looking to boost productivity",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "AI writing assistant",
        "Meeting preparation and notes",
        "Email templates",
        "Basic client management",
        "Limited AI flows (3)",
      ],
      highlight: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "Perfect for growing CS professionals",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Everything in Individual",
        "Unlimited AI flows",
        "Advanced analytics",
        "CS knowledge base",
        "Priority support",
        "2 integrations"
      ],
      highlight: true,
      cta: "Start Free Trial"
    },
    {
      name: "Team",
      description: "Ideal for CS teams of any size",
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        "Everything in Professional",
        "Team collaboration features",
        "Workflow automation",
        "Custom reporting",
        "Dedicated success manager",
        "Unlimited integrations",
        "SOC 2 compliance"
      ],
      highlight: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the plan that's right for you or your team.
          </p>
          
          <div className="inline-flex items-center p-1 border rounded-lg bg-muted/30 mb-2">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "monthly" 
                  ? "bg-background text-foreground shadow-sm" 
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "annual" 
                  ? "bg-background text-foreground shadow-sm" 
                  : "text-muted-foreground"
              }`}
            >
              Annual <span className="text-xs text-emerald-500 ml-1">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`transition-all ${plan.highlight 
                ? "border-primary/50 shadow-md relative" 
                : "border-border"}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <div className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  {billingCycle === "annual" && (
                    <div className="text-xs text-muted-foreground mt-1">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${plan.highlight 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : ""}`}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2 flex items-center">
                Can I change plans later?
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground ml-1" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-80">You can upgrade or downgrade your plan at any time.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </h3>
              <p className="text-muted-foreground text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated for your billing period.</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Do you offer a free trial?</h3>
              <p className="text-muted-foreground text-sm">Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">We accept all major credit cards, including Visa, Mastercard, and American Express. For Team plans, we can also provide invoicing.</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Can I get a custom plan for my enterprise?</h3>
              <p className="text-muted-foreground text-sm">Absolutely! Contact our sales team to discuss custom enterprise pricing and features tailored to your specific needs.</p>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default Pricing;
