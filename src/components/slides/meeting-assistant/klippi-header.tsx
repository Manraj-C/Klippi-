
import React from "react"

const KlippiHeader = () => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
        <span className="text-primary font-bold">K</span>
      </div>
      <h3 className="text-lg font-semibold text-white">Klippi Meeting Assistant</h3>
    </div>
  )
}

export default KlippiHeader
