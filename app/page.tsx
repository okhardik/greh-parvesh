"use client"

import { useState } from "react"
import GrihaPraveshInvitation from "../invitation"
import DownloadButton from "../download-button"
import LanguageSelector from "../components/language-selector" // Import the new component

export default function Page() {
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "hi" | null>(null)

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #FFFBEB 0%, #FDE68A 50%, #FCD34D 100%)" }}
    >
      {!selectedLanguage ? (
        <LanguageSelector onSelectLanguage={setSelectedLanguage} />
      ) : (
        <>
          {/* Download button positioned at top right */}
          <div className="fixed top-4 right-4 z-50">
            <DownloadButton targetId="invitation-card" />
          </div>

          {/* Invitation with ID for targeting */}
          <div id="invitation-card">
            <GrihaPraveshInvitation language={selectedLanguage} />
          </div>
        </>
      )}
    </div>
  )
}
