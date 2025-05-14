
import { ReactNode, createContext, useContext, useState } from "react";
import { Integration } from "@/types/integration";
import { usePreloadIntegrationLogos } from "@/utils/image-utils";

// Define the context type
interface SettingsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
  userData: {
    name: string;
    email: string;
    role: string;
    company: string;
    avatar: null | string;
    timezone: string;
  };
  integrations: Integration[];
}

// Create the context with default values
const SettingsContext = createContext<SettingsContextType>({
  activeTab: "profile",
  setActiveTab: () => {},
  userData: {
    name: "",
    email: "",
    role: "",
    company: "",
    avatar: null,
    timezone: "",
  },
  integrations: [],
});

// Custom hook to use the settings context
export const useSettings = () => useContext(SettingsContext);

interface SettingsDataProviderProps {
  children: ReactNode;
}

export const SettingsDataProvider = ({ children }: SettingsDataProviderProps) => {
  const [activeTab, setActiveTab] = useState("profile");
  
  // Preload all integration logos when the settings page loads
  usePreloadIntegrationLogos();

  // Mock user data
  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "Customer Success Manager",
    company: "TechCorp Inc.",
    avatar: null,
    timezone: "America/New_York"
  };

  const integrations: Integration[] = [
    {
      id: "1",
      name: "Gmail",
      category: "Email",
      status: "connected",
      icon: "mail",
      logo: "gmail",
      description: "Connect your Gmail account to receive and send emails directly from Klippi."
    },
    {
      id: "2",
      name: "Slack",
      category: "Communication",
      status: "connected",
      icon: "message-circle",
      logo: "slack",
      description: "Receive notifications and interact with Klippi through Slack."
    },
    {
      id: "3",
      name: "Salesforce",
      category: "CRM",
      status: "connected",
      icon: "database",
      logo: "salesforce",
      description: "Sync customer data, manage contacts, and track sales opportunities."
    },
    {
      id: "4",
      name: "Zoom",
      category: "Meetings",
      status: "disconnected",
      icon: "video",
      logo: "zoom",
      description: "Schedule and join meetings directly from Klippi."
    },
    {
      id: "5",
      name: "Google Calendar",
      category: "Calendar",
      status: "connected",
      icon: "calendar",
      logo: "google-calendar",
      description: "Sync your calendar to schedule meetings and get reminders."
    },
    {
      id: "6",
      name: "Hubspot",
      category: "CRM",
      status: "disconnected",
      icon: "database",
      logo: "hubspot",
      description: "Manage contacts, track customer journeys, and analyze marketing performance."
    },
    {
      id: "7",
      name: "Zendesk",
      category: "Support",
      status: "disconnected",
      icon: "help-circle",
      logo: "zendesk",
      description: "Track and resolve customer support tickets efficiently."
    },
    {
      id: "8",
      name: "Intercom",
      category: "Support",
      status: "disconnected",
      icon: "message-square",
      logo: "intercom",
      description: "Engage with customers through live chat, help articles, and product tours."
    }
  ];

  return (
    <SettingsContext.Provider
      value={{
        activeTab,
        setActiveTab,
        userData,
        integrations,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
