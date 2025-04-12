
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Copy, SendHorizontal, Database, FileText } from "lucide-react"

const AssistantResponse = () => (
  <div className="p-2 rounded-lg bg-blue-50 border border-blue-100">
    <div className="flex items-center justify-between mb-1.5">
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
          <Bot className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-sm text-gray-800">Klippi Assistant</h3>
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">Auto-Generated Response</Badge>
          </div>
        </div>
      </div>
      <Badge variant="outline" className="text-xs bg-green-100 text-green-700 border-green-200">
        Using Product Documentation
      </Badge>
    </div>

    <ContextualInformationPanel />
    <ResponseContent />
    
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1 text-xs text-gray-600">
        <Bot className="w-3 h-3 text-blue-500" />
        <span>Generated in 3.2s from product documentation</span>
      </div>
      <div className="flex gap-1.5">
        <Button variant="outline" size="sm" className="h-7 px-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-xs">
          <Copy className="w-3 h-3 mr-1" />
          Copy
        </Button>
        <Button variant="outline" size="sm" className="h-7 px-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-xs">
          Edit
        </Button>
        <Button size="sm" className="h-7 px-2 bg-blue-600 hover:bg-blue-700 text-white text-xs">
          <SendHorizontal className="w-3 h-3 mr-1" />
          Send
        </Button>
      </div>
    </div>
  </div>
)

const ContextualInformationPanel = () => (
  <div className="mb-2 bg-gray-50 rounded-md p-1.5 border border-gray-200">
    <div className="flex items-center gap-1 text-xs text-gray-500 mb-0.5">
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
)

const ResponseContent = () => (
  <div className="bg-white border border-gray-200 rounded-md p-2 mb-1.5 text-sm">
    <p className="text-gray-800 mb-2">Hi James,</p>
    <p className="text-gray-800 mb-2">Thanks for reaching out about the Slack integration setup. I understand you're having trouble with the documentation not matching the current Slack interface. This is a common issue as Slack recently updated their developer portal.</p>
    <p className="text-gray-800 mb-2">Here are the updated steps to get your integration working:</p>
    <ol className="list-decimal ml-5 mb-2 space-y-1 text-gray-800">
      <li>Go to <span className="text-blue-600">api.slack.com/apps</span> and click "Create New App"</li>
      <li>Select "From scratch" and name your app "TechCorp Integration"</li>
      <li>Under "OAuth & Permissions" section, scroll to "Scopes" and add the following Bot Token Scopes:
        <ul className="list-disc ml-5 mt-0.5 text-gray-700">
          <li>chat:write</li>
          <li>channels:read</li>
          <li>channels:join</li>
        </ul>
      </li>
      <li>Install the app to your workspace and copy the "Bot User OAuth Token"</li>
      <li>Paste this token in our platform's integration page</li>
    </ol>
    <p className="text-gray-800 mb-2">If you'd prefer a walkthrough, I'd be happy to set up a 15-minute call this week. I have availability tomorrow between 1-4pm PST or Thursday morning.</p>
    <p className="text-gray-800 mb-0.5">Best regards,</p>
    <p className="text-gray-800">[Your name]</p>
  </div>
)

export default AssistantResponse
