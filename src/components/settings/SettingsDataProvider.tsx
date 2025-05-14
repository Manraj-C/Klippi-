
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
      description: "Connect your Gmail account to receive and send emails directly from Klippi."
    },
    {
      id: "2",
      name: "Slack",
      category: "Communication",
      status: "connected",
      icon: "message-circle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
      description: "Receive notifications and interact with Klippi through Slack."
    },
    {
      id: "3",
      name: "Salesforce",
      category: "CRM",
      status: "connected",
      icon: "database",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      description: "Sync customer data, manage contacts, and track sales opportunities."
    },
    {
      id: "4",
      name: "Zoom",
      category: "Meetings",
      status: "disconnected",
      icon: "video",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Zoom_logo.svg",
      description: "Schedule and join meetings directly from Klippi."
    },
    {
      id: "5",
      name: "Google Calendar",
      category: "Calendar",
      status: "connected",
      icon: "calendar",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
      description: "Sync your calendar to schedule meetings and get reminders."
    },
    {
      id: "6",
      name: "Hubspot",
      category: "CRM",
      status: "disconnected",
      icon: "database",
      logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg",
      description: "Manage contacts, track customer journeys, and analyze marketing performance."
    },
    {
      id: "7",
      name: "Zendesk",
      category: "Support",
      status: "disconnected",
      icon: "help-circle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg",
      description: "Track and resolve customer support tickets efficiently."
    },
    {
      id: "8",
      name: "Intercom",
      category: "Support",
      status: "disconnected",
      icon: "message-square",
      logo: "https://cdn.worldvectorlogo.com/logos/intercom-1.svg",
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
