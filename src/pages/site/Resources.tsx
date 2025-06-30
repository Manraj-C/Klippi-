import React, { useEffect } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, GraduationCap } from "lucide-react";

const Resources = () => {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  const caseStudies = [
    {
      title: "How Acme Inc. Improved Customer Retention by 35%",
      company: "Acme Inc.",
      industry: "Technology",
      slug: "acme-inc-retention"
    },
    {
      title: "Global Industries: Scaling CS Operations with AI",
      company: "Global Industries",
      industry: "Manufacturing",
      slug: "global-industries-scaling"
    },
    {
      title: "Tech Corp's Journey to Proactive Customer Success",
      company: "Tech Corp",
      industry: "Software",
      slug: "tech-corp-journey"
    }
  ];

  const guides = [
    {
      title: "The Complete Guide to Customer Health Scoring",
      description: "Learn how to build an effective customer health scoring system",
      slug: "customer-health-scoring"
    },
    {
      title: "Mastering QBRs with Klippi",
      description: "Step-by-step guide to perfect quarterly business reviews",
      slug: "mastering-qbrs"
    },
    {
      title: "Onboarding New Customers: The First 90 Days",
      description: "Best practices for successful customer onboarding",
      slug: "onboarding-first-90-days"
    }
  ];

  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-lg text-muted-foreground">
            Explore case studies, guides, and best practices to level up your customer success.
          </p>
        </div>
        
        {/* RSS Feed Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Latest from Our Blog</h2>
          <div className="max-w-4xl mx-auto">
            <div className="elfsight-app-12b58294-205b-46a2-ae14-4cd9c1f4cc27" data-elfsight-app-lazy></div>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Case Studies
            </h2>
            <Link to="/resources/case-studies" className="text-primary hover:underline flex items-center">
              View all case studies <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>
                    {study.company} · {study.industry}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link 
                    to={`/resources/case-studies/${study.slug}`}
                    className="text-primary flex items-center hover:underline"
                  >
                    Read case study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Guides & Best Practices
            </h2>
            <Link to="/resources/guides" className="text-primary hover:underline flex items-center">
              View all guides <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{guide.description}</p>
                </CardContent>
                <CardFooter>
                  <Link 
                    to={`/resources/guides/${guide.slug}`}
                    className="text-primary flex items-center hover:underline"
                  >
                    Read guide <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default Resources;
