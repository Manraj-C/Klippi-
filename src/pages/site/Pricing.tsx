
import React, { useState } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  
  const plans = [{
    name: "Assistant",
    description: "Ideal for individual CSMs who want to augment their workflow using Klippi as their personal assistant",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      "AI-powered workflow automation", 
      "Personal CSM assistant capabilities", 
      "Client interaction support", 
      "Meeting preparation and follow-up", 
      "Personalized insights and recommendations", 
      "Basic integrations with your existing tools"
    ],
    highlight: false,
    cta: "Contact Sales for More Info"
  }, {
    name: "Full-Time CSM",
    description: "Designed for teams that want to hire Klippi as a full-time AI-powered Customer Success Manager across multiple accounts or roles",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      "Everything in Assistant", 
      "Multi-account management", 
      "Team collaboration features", 
      "Advanced workflow automation", 
      "Cross-functional CS operations", 
      "Comprehensive analytics and reporting", 
      "Priority support and training", 
      "Custom integrations"
    ],
    highlight: true,
    cta: "Contact Sales for More Info"
  }, {
    name: "Consultant",
    description: "For organizations seeking to co-create bespoke AI workflows using Klippi—essentially working with Klippi as an AI consultant",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      "Everything in Full-Time CSM", 
      "Bespoke AI workflow creation", 
      "Custom strategy development", 
      "Dedicated AI consultant partnership", 
      "Advanced customization capabilities", 
      "Strategic CS transformation guidance", 
      "Executive-level support", 
      "Unlimited integrations and customizations"
    ],
    highlight: false,
    cta: "Contact Sales for More Info"
  }];

  return (
    <SiteLayout>
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose the plan that's right for you or your team. Hire Klippi as your virtual Customer Success Manager.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative transition-all duration-200 ${
                  plan.highlight 
                    ? "border-primary shadow-lg scale-105" 
                    : "border-gray-200 hover:border-purple-300 hover:shadow-md"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <div className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pb-6">
                  <div className="mb-8">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {plan.monthlyPrice}
                    </div>
                    <div className="text-sm text-gray-500">
                      Pricing tailored to your needs
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={`w-full h-12 font-medium ${
                      plan.highlight 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                        : "bg-white text-gray-900 border border-gray-300 hover:bg-purple-50"
                    }`}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-sm hover:border-purple-200 transition-all">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  How does Klippi work as a virtual CSM?
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-gray-400 ml-2" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80">Klippi integrates with your existing tools and processes to provide AI-powered customer success management.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </h3>
                <p className="text-gray-600">
                  Klippi acts as your AI-powered Customer Success Manager, automating workflows, providing insights, and helping you manage customer relationships more effectively.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-sm hover:border-purple-200 transition-all">
                <h3 className="font-semibold text-gray-900 mb-3">What's included in the custom pricing?</h3>
                <p className="text-gray-600">
                  Our pricing is tailored to your specific needs, team size, and use case. Contact our sales team to discuss a plan that works best for your organization.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-sm hover:border-purple-200 transition-all">
                <h3 className="font-semibold text-gray-900 mb-3">Can I switch between plans?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or modify your plan as your needs evolve. Our team will work with you to ensure a smooth transition.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-sm hover:border-purple-200 transition-all">
                <h3 className="font-semibold text-gray-900 mb-3">Do you offer implementation support?</h3>
                <p className="text-gray-600">
                  Absolutely! All plans include dedicated support to help you get the most out of Klippi. Higher-tier plans include more comprehensive onboarding and strategic guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default Pricing;
