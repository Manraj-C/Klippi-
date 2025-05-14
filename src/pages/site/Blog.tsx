
import React from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      title: "5 Ways AI is Transforming Customer Success",
      excerpt: "Explore how artificial intelligence is changing the way CS teams operate and deliver value to customers.",
      date: "May 10, 2025",
      author: "Sarah Johnson",
      category: "AI & Automation",
      slug: "ai-transforming-customer-success"
    },
    {
      title: "Building a Customer Health Score That Actually Works",
      excerpt: "Learn the key components of an effective customer health scoring system that predicts churn and identifies growth opportunities.",
      date: "May 5, 2025",
      author: "Michael Chen",
      category: "Best Practices",
      slug: "effective-customer-health-scoring"
    },
    {
      title: "The Future of Customer Success: Trends to Watch in 2025",
      excerpt: "Stay ahead of the curve with these emerging trends that will shape the customer success landscape this year.",
      date: "April 28, 2025",
      author: "David Williams",
      category: "Industry Trends",
      slug: "customer-success-trends-2025"
    },
    {
      title: "From Reactive to Proactive: Evolving Your CS Strategy",
      excerpt: "Shift your customer success approach from putting out fires to preventing them in the first place.",
      date: "April 21, 2025",
      author: "Emily Rodriguez",
      category: "Strategy",
      slug: "reactive-to-proactive-cs"
    },
    {
      title: "How to Run QBRs That Customers Actually Value",
      excerpt: "Transform your quarterly business reviews from dreaded meetings to valuable strategic sessions.",
      date: "April 14, 2025",
      author: "Alex Thompson",
      category: "Best Practices",
      slug: "valuable-qbrs"
    },
    {
      title: "Measuring What Matters: CS Metrics That Drive Growth",
      excerpt: "Focus on the right customer success metrics to demonstrate value and secure executive buy-in.",
      date: "April 7, 2025",
      author: "Sarah Johnson",
      category: "Metrics & Analytics",
      slug: "cs-metrics-drive-growth"
    }
  ];

  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Customer Success Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights, strategies, and best practices to help you excel in customer success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="transition-all hover:shadow-md flex flex-col">
              <CardHeader className="pb-2">
                <div className="text-sm text-muted-foreground mb-1">{post.category}</div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between items-center text-sm">
                <div>
                  <span className="font-medium">{post.author}</span>
                  <span className="text-muted-foreground"> · {post.date}</span>
                </div>
                <Link to={`/blog/${post.slug}`} className="text-primary hover:underline flex items-center">
                  Read <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
};

export default Blog;
