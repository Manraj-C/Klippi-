
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
