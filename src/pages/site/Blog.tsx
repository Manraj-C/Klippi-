
import React, { useEffect } from "react";
import SiteLayout from "@/components/site/SiteLayout";

const Blog = () => {
  useEffect(() => {
    // Load the Retainable RSS embed script
    const script = document.createElement("script");
    script.src = "https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Customer Success Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights, strategies, and best practices to help you excel in customer success.
          </p>
        </div>
        
        <div id="retainable-rss-embed" 
          data-rss="https://medium.com/feed/@klippi.ai
          https://medium.com/feed/vue-mastery"
          data-maxcols="3" 
          data-layout="grid" 
          data-poststyle="inline" 
          data-readmore="Read the rest" 
          data-buttonclass="btn btn-primary" 
          data-offset="-100">
        </div>
      </div>
    </SiteLayout>
  );
};

export default Blog;
