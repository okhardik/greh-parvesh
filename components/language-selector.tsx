"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface LanguageSelectorProps {
  onSelectLanguage: (lang: "en" | "hi") => void
}

export default function LanguageSelector({ onSelectLanguage }: LanguageSelectorProps) {
  const [selected, setSelected] = useState<boolean>(false)
  const [shiningButton, setShiningButton] = useState<string | null>(null)

  const handleSelect = (lang: "en" | "hi") => {
    setShiningButton(lang) // Set which button is shining
    setSelected(true)
    setTimeout(() => {
      onSelectLanguage(lang)
      setShiningButton(null) // Reset shine after animation
    }, 800) // Allow time for shine animation
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 100%)", // Deep dark gradient background
      }}
    >
      <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8 text-center">
        Select Language
        <br />
        भाषा चुनें
      </h1>
      <div className="flex gap-6">
        <Button
          onClick={() => handleSelect("en")}
          className={`px-8 py-4 text-xl rounded-lg font-bold shadow-lg transition-all duration-300 ${shiningButton === "en" ? "animate-shine" : ""}`}
          style={{
            background: "linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%)", // Antique Gold gradient
            color: "var(--primary-foreground)", // Dark text on gold
          }}
        >
          English
        </Button>
        <Button
          onClick={() => handleSelect("hi")}
          className={`px-8 py-4 text-xl rounded-lg font-bold shadow-lg transition-all duration-300 ${shiningButton === "hi" ? "animate-shine" : ""}`}
          style={{
            background: "linear-gradient(90deg, var(--secondary) 0%, #3a3a3a 100%)", // Darker Silver/Grey gradient
            color: "var(--secondary-foreground)", // Light text on silver
          }}
        >
          हिंदी
        </Button>
      </div>
    </div>
  )
}
