
import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Search, Settings, Inbox, Star, Clock, Archive, Trash2, Tag, ChevronDown, Menu, MoreVertical, Briefcase, SendHorizontal, Copy, Bot, FileText, Database } from "lucide-react"

interface EmailDraftSlideProps {
  active: boolean
}

const EmailDraftSlide: React.FC<EmailDraftSlideProps> = ({ active }) => {
  return (
    <div 
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${active ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      <div className="w-full max-w-4xl h-[300px] md:h-[400px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden">
        <div className="flex flex-col h-full bg-white text-gray-800">
          <EmailHeader />
          
          <div className="flex flex-1 overflow-hidden">
            <EmailSidebar />
            <EmailDraftContent />
          </div>
        </div>
      </div>
    </div>
  )
}

const EmailHeader = () => (
  <div className="flex items-center justify-between bg-white border-b border-gray-200 px-3 py-2">
    <div className="flex items-center gap-2">
      <Menu className="w-5 h-5 text-gray-600" />
      <div className="flex items-center">
        <Mail className="w-5 h-5 text-red-500" />
        <span className="font-medium text-gray-700 text-lg ml-1">Gmail</span>
      </div>
    </div>
    
    <div className="flex-1 mx-4">
      <div className="bg-gray-100 rounded-lg flex items-center px-4 py-2 max-w-xl mx-auto">
        <Search className="w-4 h-4 text-gray-500 mr-2" />
        <span className="text-sm text-gray-500">Search mail</span>
      </div>
    </div>
    
    <div className="flex items-center gap-3">
      <Settings className="w-5 h-5 text-gray-600" />
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
        <span className="text-sm">K</span>
      </div>
    </div>
  </div>
)

const EmailSidebar = () => (
  <div className="hidden md:block w-48 bg-white border-r border-gray-200 py-2 pr-1">
    <Button variant="outline" className="mb-4 ml-2 bg-blue-50 text-gray-700 border border-gray-300 rounded-2xl pl-2 pr-4 py-1.5 h-auto flex justify-start items-center w-36">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-gray-600"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
      <span className="text-sm font-medium">Compose</span>
    </Button>
    
    <div className="space-y-1">
      <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full bg-blue-100 text-blue-800">
        <Inbox className="w-4 h-4 mr-3" />
        <span className="text-sm font-medium">Inbox</span>
        <Badge className="ml-auto bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">4</Badge>
      </div>
      
      <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full text-gray-700 hover:bg-gray-100">
        <Star className="w-4 h-4 mr-3" />
        <span className="text-sm">Starred</span>
      </div>
      
      <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full text-gray-700 hover:bg-gray-100">
        <Clock className="w-4 h-4 mr-3" />
        <span className="text-sm">Snoozed</span>
      </div>
      
      <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full text-gray-700 hover:bg-gray-100">
        <Archive className="w-4 h-4 mr-3" />
        <span className="text-sm">Archived</span>
      </div>
      
      <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full text-gray-700 hover:bg-gray-100">
        <Trash2 className="w-4 h-4 mr-3" />
        <span className="text-sm">Trash</span>
      </div>
    </div>
    
    <div className="mt-3 pt-2 border-t border-gray-200">
      <div className="flex items-center pl-2 pr-3 py-1.5 text-gray-700 justify-between">
        <span className="text-sm font-medium">Labels</span>
        <ChevronDown className="w-4 h-4" />
      </div>
      
      <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full text-gray-700 hover:bg-gray-100">
        <Tag className="w-4 h-4 mr-3 text-green-600" />
        <span className="text-sm">Clients</span>
      </div>
      
      <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full text-gray-700 hover:bg-gray-100">
        <Tag className="w-4 h-4 mr-3 text-yellow-600" />
        <span className="text-sm">Important</span>
      </div>
    </div>
  </div>
)

const EmailDraftContent = () => (
  <div className="flex-1 flex flex-col overflow-auto">
    <div className="p-4 flex-1 overflow-auto">
      {/* Original Client Email */}
      <div className="mb-4 p-3 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
            <span className="text-sm text-gray-700">JL</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">James Liu (TechCorp)</h3>
              <span className="text-xs text-gray-500">Apr 12, 2025, 9:32 AM</span>
            </div>
            <p className="text-xs text-gray-500">to me</p>
          </div>
        </div>
        
        <div className="pt-2 pb-1">
          <p className="text-gray-800 mb-4">Hi there,</p>
          <p className="text-gray-800 mb-4">We've been trying to set up the Slack integration as discussed in our last call, but we're running into some issues. The documentation mentions we need to create a Slack app and generate an API token, but the steps don't seem to match the current Slack interface.</p>
          <p className="text-gray-800 mb-4">Could you provide updated instructions or maybe set up a quick call to walk us through the process? We're eager to get this working as it's a key feature for our team.</p>
          <p className="text-gray-800 mb-1">Thanks,</p>
          <p className="text-gray-800">James</p>
        </div>
      </div>
      
      {/* Klippi Assistant Draft Response */}
      <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-800">Klippi Assistant</h3>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">Auto-Generated Response</Badge>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="text-xs bg-green-100 text-green-700 border-green-200">
            Using Product Documentation
          </Badge>
        </div>

        {/* Contextual Information Panel */}
        <div className="mb-3 bg-gray-50 rounded-md p-2 border border-gray-200">
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
            <Database className="w-3 h-3" /> 
            <span className="font-semibold">Context Sources:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-gray-100 rounded text-xs text-gray-600">
              <FileText className="w-3 h-3 text-blue-500" />
              <span>Slack Integration Guide v2.3</span>
            </div>
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-gray-100 rounded text-xs text-gray-600">
              <FileText className="w-3 h-3 text-green-500" />
              <span>API Documentation</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-md p-3 mb-3">
          <p className="text-gray-800 mb-3">Hi James,</p>
          <p className="text-gray-800 mb-3">Thanks for reaching out about the Slack integration setup. I understand you're having trouble with the documentation not matching the current Slack interface. This is a common issue as Slack recently updated their developer portal.</p>
          <p className="text-gray-800 mb-3">Here are the updated steps to get your integration working:</p>
          <ol className="list-decimal ml-5 mb-3 space-y-2 text-gray-800">
            <li>Go to <span className="text-blue-600">api.slack.com/apps</span> and click "Create New App"</li>
            <li>Select "From scratch" and name your app "TechCorp Integration"</li>
            <li>Under "OAuth & Permissions" section, scroll to "Scopes" and add the following Bot Token Scopes:
              <ul className="list-disc ml-5 mt-1 text-gray-700">
                <li>chat:write</li>
                <li>channels:read</li>
                <li>channels:join</li>
              </ul>
            </li>
            <li>Install the app to your workspace and copy the "Bot User OAuth Token"</li>
            <li>Paste this token in our platform's integration page</li>
          </ol>
          <p className="text-gray-800 mb-3">If you'd prefer a walkthrough, I'd be happy to set up a 15-minute call this week. I have availability tomorrow between 1-4pm PST or Thursday morning.</p>
          <p className="text-gray-800 mb-1">Best regards,</p>
          <p className="text-gray-800">[Your name]</p>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <Bot className="w-3 h-3 text-blue-500" />
            <span>Generated in 3.2s from product documentation</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-8 px-3 border-gray-300 text-gray-700 hover:bg-gray-50">
              <Copy className="w-3.5 h-3.5 mr-1" />
              Copy
            </Button>
            <Button variant="outline" size="sm" className="h-8 px-3 border-gray-300 text-gray-700 hover:bg-gray-50">
              Edit
            </Button>
            <Button size="sm" className="h-8 px-3 bg-blue-600 hover:bg-blue-700 text-white">
              <SendHorizontal className="w-3.5 h-3.5 mr-1" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default EmailDraftSlide
