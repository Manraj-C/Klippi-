
import React from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, User, Users } from "lucide-react";

const Solutions = () => {
  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Customer Success Solutions</h1>
          <p className="text-lg text-muted-foreground">
            Klippi offers tailored solutions for both individual CSMs and customer success teams, helping you deliver exceptional customer experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border border-primary/20 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <User className="w-5 h-5 text-primary" />
              </div>
              <CardTitle>For Individual CSMs</CardTitle>
              <CardDescription>
                Tools to help you serve your customers better and boost efficiency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>AI-powered meeting assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Automated email drafting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Customer health monitoring</span>
                </li>
              </ul>
              <Link to="/solutions/individual-csm" className="text-primary flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          
          <Card className="border border-secondary/20 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <CardTitle>For CS Teams</CardTitle>
              <CardDescription>
                Scale your customer success operations with powerful team tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  <span>Streamlined team workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  <span>Customer success analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  <span>Centralized knowledge management</span>
                </li>
              </ul>
              <Link to="/solutions/cs-teams" className="text-secondary flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </SiteLayout>
  );
};

export default Solutions;
