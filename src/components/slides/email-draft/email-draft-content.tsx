
import React from "react"
import ClientEmail from "./client-email"
import AssistantResponse from "./assistant-response"

const EmailDraftContent = () => (
  <div className="flex-1 flex flex-col overflow-auto">
    <div className="p-2 flex-1 overflow-auto grid grid-cols-1 md:grid-cols-2 gap-2">
      <ClientEmail />
      <AssistantResponse />
    </div>
  </div>
)

export default EmailDraftContent
