
import { useState, useEffect } from "react";

export const useContactFormPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleContactClick = (event: Event) => {
      const target = event.target as HTMLElement;
      
      // Check if the clicked element or its text content includes "contact"
      const isContactElement = 
        target.textContent?.toLowerCase().includes("contact") ||
        target.getAttribute("id")?.toLowerCase().includes("contact") ||
        target.className?.toLowerCase().includes("contact") ||
        target.closest('[id*="contact"], [class*="contact"]') ||
        target.closest('a, button')?.textContent?.toLowerCase().includes("contact");

      if (isContactElement) {
        event.preventDefault();
        setIsOpen(true);
      }
    };

    // Add event listener to document
    document.addEventListener("click", handleContactClick);

    return () => {
      document.removeEventListener("click", handleContactClick);
    };
  }, []);

  const closePopup = () => setIsOpen(false);

  return {
    isOpen,
    closePopup,
  };
};
