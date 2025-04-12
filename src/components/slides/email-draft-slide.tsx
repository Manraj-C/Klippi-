
import React from "react"
import EmailHeader from "./email-draft/email-header"
import EmailSidebar from "./email-draft/email-sidebar"
import EmailDraftContent from "./email-draft/email-draft-content"

interface EmailDraftSlideProps {
  active: boolean
}

const EmailDraftSlide: React.FC<EmailDraftSlideProps> = ({ active }) => {
  return (
    <div 
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${active ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      <div className="w-full max-w-5xl h-[400px] md:h-[500px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden">
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

export default EmailDraftSlide
