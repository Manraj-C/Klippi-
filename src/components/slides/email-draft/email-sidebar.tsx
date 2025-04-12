
import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Inbox, Star, Clock, Archive, Trash2, Tag, ChevronDown } from "lucide-react"

const EmailSidebar = () => (
  <div className="hidden md:block w-36 bg-white border-r border-gray-200 py-2 pr-1">
    <Button variant="outline" className="mb-3 ml-1 bg-blue-50 text-gray-700 border border-gray-300 rounded-2xl pl-2 pr-3 py-1 h-auto flex justify-start items-center w-32 text-xs">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-600"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
      <span className="font-medium">Compose</span>
    </Button>
    
    <div className="space-y-0.5">
      <div className="flex items-center pl-2 pr-3 py-1 rounded-r-full bg-blue-100 text-blue-800">
        <Inbox className="w-3.5 h-3.5 mr-2" />
        <span className="text-xs font-medium">Inbox</span>
        <Badge className="ml-auto bg-red-500 text-white text-xs px-1 py-0.5 rounded-full">4</Badge>
      </div>
      
      <div className="flex items-center pl-2 pr-3 py-1 rounded-r-full text-gray-700 hover:bg-gray-100">
        <Star className="w-3.5 h-3.5 mr-2" />
        <span className="text-xs">Starred</span>
      </div>
      
      <div className="flex items-center pl-2 pr-3 py-1 rounded-r-full text-gray-700 hover:bg-gray-100">
        <Clock className="w-3.5 h-3.5 mr-2" />
        <span className="text-xs">Snoozed</span>
      </div>
      
      <div className="flex items-center pl-2 pr-3 py-1 rounded-r-full text-gray-700 hover:bg-gray-100">
        <Archive className="w-3.5 h-3.5 mr-2" />
        <span className="text-xs">Archived</span>
      </div>
      
      <div className="flex items-center pl-2 pr-3 py-1 rounded-r-full text-gray-700 hover:bg-gray-100">
        <Trash2 className="w-3.5 h-3.5 mr-2" />
        <span className="text-xs">Trash</span>
      </div>
    </div>
    
    <div className="mt-2 pt-1 border-t border-gray-200">
      <div className="flex items-center pl-2 pr-3 py-1 text-gray-700 justify-between">
        <span className="text-xs font-medium">Labels</span>
        <ChevronDown className="w-3 h-3" />
      </div>
      
      <div className="flex items-center pl-2 pr-3 py-1 rounded-r-full text-gray-700 hover:bg-gray-100">
        <Tag className="w-3.5 h-3.5 mr-2 text-green-600" />
        <span className="text-xs">Clients</span>
      </div>
      
      <div className="flex items-center pl-2 pr-3 py-1 rounded-r-full text-gray-700 hover:bg-gray-100">
        <Tag className="w-3.5 h-3.5 mr-2 text-yellow-600" />
        <span className="text-xs">Important</span>
      </div>
    </div>
  </div>
)

export default EmailSidebar
