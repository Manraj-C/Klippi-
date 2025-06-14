
import React from "react";
import ContactFormPopup from "./contact/ContactFormPopup";
import { useContactFormPopup } from "@/hooks/useContactFormPopup";

const GlobalContactForm: React.FC = () => {
  const { isOpen, closePopup } = useContactFormPopup();

  return (
    <ContactFormPopup 
      isOpen={isOpen} 
      onClose={closePopup} 
    />
  );
};

export default GlobalContactForm;
