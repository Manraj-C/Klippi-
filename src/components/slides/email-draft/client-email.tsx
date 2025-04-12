
import React from "react"

const ClientEmail = () => (
  <div className="p-2 border-b md:border-b-0 md:border-r border-gray-200">
    <div className="flex items-center gap-1.5 mb-1.5">
      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
        <span className="text-xs text-gray-700">JL</span>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-sm">James Liu (TechCorp)</h3>
          <span className="text-xs text-gray-500">Apr 12, 2025, 9:32 AM</span>
        </div>
        <p className="text-xs text-gray-500">to me</p>
      </div>
    </div>
    
    <div className="pt-1 pb-1">
      <p className="text-sm text-gray-800 mb-3">Hi there,</p>
      <p className="text-sm text-gray-800 mb-3">We've been trying to set up the Slack integration as discussed in our last call, but we're running into some issues. The documentation mentions we need to create a Slack app and generate an API token, but the steps don't seem to match the current Slack interface.</p>
      <p className="text-sm text-gray-800 mb-3">Could you provide updated instructions or maybe set up a quick call to walk us through the process? We're eager to get this working as it's a key feature for our team.</p>
      <p className="text-sm text-gray-800 mb-1">Thanks,</p>
      <p className="text-sm text-gray-800">James</p>
    </div>
  </div>
)

export default ClientEmail
