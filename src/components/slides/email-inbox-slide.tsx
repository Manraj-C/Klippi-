
import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Zap, Edit2, Search, Settings, Inbox, Star, Clock, Archive, Trash2, Tag, ChevronDown, Menu, Paperclip, MoreVertical, Newspaper } from "lucide-react"

interface EmailInboxSlideProps {
  active: boolean
}

const EmailInboxSlide: React.FC<EmailInboxSlideProps> = ({ active }) => {
  return (
    <div 
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${active ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      <div className="w-full max-w-4xl h-[300px] md:h-[400px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden">
        <div className="flex flex-col h-full bg-white text-gray-800">
          <EmailHeader />
          
          <div className="flex flex-1 overflow-hidden">
            <EmailSidebar />
            <EmailContent />
          </div>
          
          <EmailAssistantBar />
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
      <Edit2 className="w-4 h-4 mr-3 text-gray-600" />
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

const EmailContent = () => (
  <div className="flex-1 flex flex-col">
    <div className="flex items-center justify-between py-1 px-3 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" className="h-8 w-8 p-1" title="Refresh">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-1" title="More actions">
            <MoreVertical className="w-4 h-4 text-gray-600" />
          </Button>
        </div>
      </div>
      
      <div className="text-xs text-gray-500">1-10 of 356</div>
    </div>
    
    <div className="flex-1 overflow-auto">
      <div className="flex items-center px-3 py-2 border-b border-gray-100 bg-gray-50 hover:shadow-md hover:z-10 relative transition-shadow cursor-pointer">
        <div className="flex items-center gap-3 min-w-0">
          <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
          <Star className="w-4 h-4 text-gray-400 hover:text-gray-600" />
          <Tag className="w-4 h-4 text-yellow-400" />
          
          <div className="flex-shrink-0 font-medium w-48 truncate">Anna Chen (Acme Corp)</div>
          
          <div className="flex flex-1 min-w-0">
            <span className="font-medium mr-1.5">API sync delays and upgrade discussion</span>
            <span className="text-gray-600 truncate"> - We've been using the API integration for a few weeks now and have run into some issues with the data syncing...</span>
          </div>
          
          <div className="flex items-center gap-2 ml-2">
            <Paperclip className="w-4 h-4 text-gray-400" />
            <span className="text-xs whitespace-nowrap font-medium">11:42 AM</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center px-3 py-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
        <div className="flex items-center gap-3 min-w-0">
          <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
          <Star className="w-4 h-4 text-gray-400 hover:text-gray-600" />
          <div className="flex-shrink-0 w-48 truncate">TechCorp Team</div>
          <div className="flex flex-1 min-w-0">
            <span className="mr-1.5">Monthly usage report</span>
            <span className="text-gray-500 truncate"> - Your April usage report is now available. Total API calls: 243,500...</span>
          </div>
          <div className="text-xs whitespace-nowrap ml-2">10:15 AM</div>
        </div>
      </div>
      
      <div className="flex items-center px-3 py-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
        <div className="flex items-center gap-3 min-w-0">
          <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
          <Star className="w-4 h-4 text-gray-400 hover:text-gray-600" />
          <div className="flex-shrink-0 w-48 truncate">DataFlow Solutions</div>
          <div className="flex flex-1 min-w-0">
            <span className="mr-1.5">RE: Integration partnership</span>
            <span className="text-gray-500 truncate"> - Thank you for your interest in partnering with us. We'd love to schedule a call...</span>
          </div>
          <div className="text-xs whitespace-nowrap ml-2">Apr 11</div>
        </div>
      </div>
      
      <div className="flex items-center px-3 py-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
        <div className="flex items-center gap-3 min-w-0">
          <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
          <Star className="w-4 h-4 text-yellow-400" />
          <Tag className="w-4 h-4 text-green-400" />
          <div className="flex-shrink-0 w-48 truncate">Sarah Johnson</div>
          <div className="flex flex-1 min-w-0">
            <span className="mr-1.5">Customer success metrics</span>
            <span className="text-gray-500 truncate"> - I've attached the latest customer success metrics for Q1. Notable improvements in...</span>
          </div>
          <div className="text-xs whitespace-nowrap ml-2">Apr 10</div>
        </div>
      </div>

      <div className="flex items-center px-3 py-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
        <div className="flex items-center gap-3 min-w-0">
          <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
          <Star className="w-4 h-4 text-gray-400 hover:text-gray-600" />
          <div className="flex-shrink-0 w-48 truncate">Product Updates</div>
          <div className="flex flex-1 min-w-0">
            <span className="mr-1.5">New features released</span>
            <span className="text-gray-500 truncate"> - We're excited to announce our latest feature updates including improved analytics...</span>
          </div>
          <div className="text-xs whitespace-nowrap ml-2">Apr 9</div>
        </div>
      </div>
    </div>
  </div>
)

const EmailAssistantBar = () => (
  <div className="bg-blue-50 border-t border-blue-100 py-2 px-3 flex items-center justify-between">
    <div className="flex items-center">
      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white mr-2">
        <span className="text-xs">K</span>
      </div>
      <span className="text-sm text-blue-800">Klippi Assistant is active</span>
      <Badge className="ml-2 bg-green-100 text-green-700 border-green-200">Auto-responses enabled</Badge>
    </div>
    <div className="flex gap-2">
      <Button size="sm" variant="outline" className="h-7 px-2 border-gray-300 text-gray-600 hover:bg-gray-100">
        <Settings className="w-3.5 h-3.5 mr-1" />
        Configure
      </Button>
      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 h-7 px-2 text-white">
        <Zap className="w-3.5 h-3.5 mr-1" />
        Analyze Emails
      </Button>
    </div>
  </div>
)

export default EmailInboxSlide
