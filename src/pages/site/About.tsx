
import React from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-founder",
      bio: "Former VP of Customer Success at SaaS scale-up with 12+ years in CS"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-founder",
      bio: "AI researcher and engineer with background in machine learning"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      bio: "Product leader focused on customer-centric design and innovation"
    },
    {
      name: "David Williams",
      role: "VP of Customer Success",
      bio: "CS veteran with experience scaling teams from 3 to 50+ CSMs"
    }
  ];

  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Klippi</h1>
          <p className="text-lg text-muted-foreground">
            We're on a mission to transform customer success with AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Klippi was founded in 2023 by a team of customer success veterans and AI specialists who saw firsthand the challenges facing modern CS teams.
            </p>
            <p className="mb-4 text-muted-foreground">
              We noticed that CSMs were spending too much time on administrative tasks and not enough time building meaningful relationships with customers. At the same time, CS leaders lacked the tools to effectively scale their operations and demonstrate value to executives.
            </p>
            <p className="text-muted-foreground">
              We built Klippi to solve these challenges, creating an AI-powered platform that helps CSMs work more efficiently while giving leaders the insights they need to optimize their operations.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <Card className="bg-muted/10 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-xl font-medium italic mb-4">
                  "To empower customer success teams to deliver exceptional experiences through intuitive, intelligent tools that amplify human connection rather than replace it."
                </p>
                <p className="text-muted-foreground">
                  We believe that the best customer success is achieved through a combination of human empathy and technological efficiency. Our platform is designed to handle the routine so CSMs can focus on what matters most: building relationships and delivering value.
                </p>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Link to="/contact" className="text-primary flex items-center hover:underline">
                Get in touch with our team <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Leadership Team</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex gap-4 p-4 border rounded-lg">
                <div className="w-16 h-16 bg-muted rounded-full shrink-0"></div>
                <div>
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <div className="text-primary text-sm mb-2">{member.role}</div>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default About;
