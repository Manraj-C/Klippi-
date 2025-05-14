
import React from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import { Check, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Platform = () => {
  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">The Klippi Platform</h1>
          <p className="text-lg text-muted-foreground">
            Built for reliability, security, and seamless integration with your existing tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Security & Compliance
            </h2>
            <p className="mb-6 text-muted-foreground">
              Your customer data is sensitive. That's why we've built Klippi with enterprise-grade security and compliance features.
            </p>
            <Card className="border border-muted bg-muted/10">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>SOC 2 Type 2 Compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>GDPR Compliant Data Handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>End-to-end Encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Role-based Access Control</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <div className="mt-6">
              <Link to="/platform/security" className="text-primary hover:underline">
                Learn more about our security
              </Link>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Integrations</h2>
            <p className="mb-6 text-muted-foreground">
              Klippi connects with the tools you already use, creating a seamless workflow for your customer success operations.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {["Salesforce", "HubSpot", "Slack", "Zoom", "Intercom", "Zendesk"].map((tool) => (
                <div key={tool} className="bg-muted/30 rounded p-3 text-center">
                  <div className="h-12 flex items-center justify-center mb-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full"></div>
                  </div>
                  <p className="text-sm font-medium">{tool}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link to="/platform/integrations" className="text-primary hover:underline">
                See all integrations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default Platform;
