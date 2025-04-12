
import React from "react"
import { Mail, Search, Settings, Menu } from "lucide-react"

const EmailHeader = () => (
  <div className="flex items-center justify-between bg-white border-b border-gray-200 px-3 py-1.5">
    <div className="flex items-center gap-2">
      <Menu className="w-5 h-5 text-gray-600" />
      <div className="flex items-center">
        <Mail className="w-5 h-5 text-red-500" />
        <span className="font-medium text-gray-700 text-lg ml-1">Gmail</span>
      </div>
    </div>
    
    <div className="flex-1 mx-4">
      <div className="bg-gray-100 rounded-lg flex items-center px-4 py-1.5 max-w-xl mx-auto">
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

export default EmailHeader
