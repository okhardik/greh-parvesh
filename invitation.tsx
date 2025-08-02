"use client"

import { Calendar, Clock, MapPin, Star } from "lucide-react"

interface GrihaPraveshInvitationProps {
  language: "en" | "hi"
}

export default function GrihaPraveshInvitation({ language }: GrihaPraveshInvitationProps) {
  const content = {
    en: {
      title: "🌿 Griha Pravesh Ceremony 🌿",
      subtitle: "✨ A Sacred Beginning ✨",
      intro1: "With hearts full of gratitude and joy, 💖",
      intro2: "we invite you to grace the auspicious occasion of our",
      pujaTitle: "Griha Pravesh Puja",
      pujaDesc: "as we step into our new home and begin a beautiful new chapter. 🌟",
      blessings: "Your presence and blessings would mean the world to us. 🌍",
      specialDay: "Let this day be made more special with your company. ✨",
      dateLabel: "Date",
      date: "Thursday, 7th August",
      timeLabel: "Time",
      time: "11:00 AM to 1:00 PM",
      venueLabel: "Venue",
      venue: (
        <>
          Plot 117, Puri Kohinoor,
          <br />
          Sector 89, Near Amrita Hospital,
          <br />
          Faridabad – 121002
        </>
      ),
      rsvp: (
        <>
          We would be grateful if you could confirm your presence, 📞
          <br />
          so we may plan this cherished day with care. 💝
        </>
      ),
      closing: "With warmth and love, 💕",
      hosts: "Your Hosts",
      backgroundText: "WELCOME HOME",
    },
    hi: {
      title: "🌿 गृह प्रवेश समारोह 🌿",
      subtitle: "✨ एक पवित्र शुरुआत ✨",
      intro1: "कृतज्ञता और आनंद से भरे दिलों के साथ, 💖",
      intro2: "हम आपको हमारे शुभ अवसर पर आमंत्रित करते हैं",
      pujaTitle: "गृह प्रवेश पूजा",
      pujaDesc: "जैसे ही हम अपने नए घर में कदम रखते हैं और एक सुंदर नया अध्याय शुरू करते हैं। 🌟",
      blessings: "आपकी उपस्थिति और आशीर्वाद हमारे लिए पूरी दुनिया होगी। 🌍",
      specialDay: "आपकी संगति से यह दिन और भी खास बने। ✨",
      dateLabel: "दिनांक",
      date: "गुरुवार, 7 अगस्त",
      timeLabel: "समय",
      time: "सुबह 11:00 बजे से दोपहर 1:00 बजे तक",
      venueLabel: "स्थान",
      venue: (
        <>
          प्लॉट 117, पुरी कोहिनूर,
          <br />
          सेक्टर 89, अमृता अस्पताल के पास,
          <br />
          फरीदाबाद – 121002
        </>
      ),
      rsvp: (
        <>
          यदि आप अपनी उपस्थिति की पुष्टि कर सकें तो हम आभारी होंगे, 📞
          <br />
          ताकि हम इस प्रिय दिन की सावधानीपूर्वक योजना बना सकें। 💝
        </>
      ),
      closing: "स्नेह और प्रेम सहित, 💕",
      hosts: "आपके मेजबान",
      backgroundText: "गृह प्रवेश",
    },
  }

  const currentContent = content[language]

  return (
    <div
      className="min-h-screen p-4 flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 100%)", // Deep dark gradient background
      }}
    >
      <div
        key={language} // Key changes to re-trigger animation on language switch
        className="relative w-full max-w-2xl shadow-2xl border border-border overflow-hidden rounded-xl animate-fade-in-up-smooth" // Apply single entrance animation here
        style={{
          background: "linear-gradient(180deg, var(--card) 0%, var(--background) 100%)", // Dark card background
          backgroundImage: "url('/images/royal-pattern-intricate.png')", // Intricate pattern
          backgroundSize: "cover",
          backgroundBlendMode: "overlay", // Blend pattern subtly
          boxShadow: "0 15px 30px rgba(0,0,0,0.6), 0 0 0 2px var(--primary)", // Stronger shadow with gold outline
          willChange: "transform, opacity",
        }}
      >
        {/* Large faded background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          style={{
            fontSize: "clamp(8rem, 20vw, 18rem)", // Responsive font size
            fontWeight: "bold",
            color: "var(--secondary)", // Darker silver/grey for faded effect
            opacity: 0.05, // Even more subtle
            transform: "rotate(-10deg)", // Slight rotation for dynamic feel
            userSelect: "none",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "clip",
            willChange: "transform, opacity",
          }}
        >
          {currentContent.backgroundText}
        </div>

        {/* Header with decorative elements */}
        <div
          className="relative p-6 text-center rounded-t-xl z-10"
          style={{
            background: "linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 50%, var(--primary) 100%)", // Deeper Gold gradient
            boxShadow: "0 8px 16px rgba(0,0,0,0.6)", // More pronounced shadow
            borderBottom: "2px solid var(--primary-dark)", // Stronger border
            willChange: "transform, opacity",
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%)",
            }}
          ></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl drop-shadow-lg">✨</span>
              <Star className="w-7 h-7 text-white drop-shadow-lg" /> {/* Icons now white on gold */}
              <span className="text-3xl drop-shadow-lg">🏛️</span>
              <Star className="w-7 h-7 text-white drop-shadow-lg" />
              <span className="text-3xl drop-shadow-lg">✨</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-3 tracking-wide w-full" // Added w-full for explicit centering
              style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.7)" }} // Stronger text shadow
            >
              {currentContent.title}
            </h1>
            <div
              className="w-32 h-1 mx-auto mb-2 rounded-full"
              style={{
                background: "linear-gradient(90deg, transparent 0%, var(--foreground) 50%, transparent 100%)", // Light grey divider
              }}
            ></div>
            <p className="text-lg sm:text-xl font-light italic tracking-wide" style={{ color: "var(--foreground)" }}>
              {currentContent.subtitle}
            </p>
          </div>
        </div>

        {/* Main content */}
        <div
          className="p-6 sm:p-8 space-y-6 sm:space-y-8 relative z-10" // Increased padding and space-y for more breathing room
          style={{
            background: "linear-gradient(180deg, var(--card) 0%, var(--background) 100%)",
          }}
        >
          <div className="text-center space-y-5">
            {" "}
            {/* Increased space-y */}
            <div className="flex justify-center mb-2">
              <span className="text-4xl drop-shadow-lg">🙏</span>
            </div>
            <p className="leading-relaxed text-base sm:text-lg font-medium" style={{ color: "var(--foreground)" }}>
              {currentContent.intro1}
              <br />
              {currentContent.intro2}
            </p>
            <div
              className="p-6 rounded-xl border-2 shadow-xl" // Stronger shadow
              style={{
                background: "linear-gradient(90deg, var(--muted) 0%, var(--card) 100%)", // Darker background for puja section
                borderColor: "var(--secondary)", // Subtle border
                boxShadow: "0 6px 12px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex justify-center mb-2">
                <span className="text-3xl drop-shadow-lg">🏠</span>
              </div>
              <p className="text-2xl sm:text-3xl font-serif mb-2 tracking-wide" style={{ color: "var(--primary)" }}>
                {currentContent.pujaTitle}
              </p>
              <p className="text-base sm:text-lg" style={{ color: "var(--foreground)" }}>
                {currentContent.pujaDesc}
              </p>
            </div>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: "var(--foreground)" }}>
              {currentContent.blessings}
              <br />
              {currentContent.specialDay}
            </p>
          </div>

          {/* Event details */}
          <div
            className="border-2 rounded-2xl p-6 shadow-xl"
            style={{
              background: "linear-gradient(135deg, var(--card) 0%, var(--muted) 100%)", // Darker background for event details
              borderColor: "var(--secondary)", // Subtle border
              boxShadow: "0 6px 12px rgba(0,0,0,0.5)",
            }}
          >
            <div className="grid gap-4 sm:gap-5">
              {" "}
              {/* Increased gap */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", // Gold gradient for icon background
                    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg flex items-center gap-2" style={{ color: "var(--foreground)" }}>
                    {currentContent.dateLabel}
                  </p>
                  <p className="text-base sm:text-lg font-medium" style={{ color: "var(--muted-foreground)" }}>
                    {currentContent.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, var(--secondary) 0%, #3a3a3a 100%)", // Silver gradient for icon background
                    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg flex items-center gap-2" style={{ color: "var(--foreground)" }}>
                    {currentContent.timeLabel}
                  </p>
                  <p className="text-base sm:text-lg font-medium" style={{ color: "var(--muted-foreground)" }}>
                    {currentContent.time}
                  </p>
                </div>
              </div>
              
            </div>
          </div>

          {/* RSVP message */}
          <div
            className="p-5 rounded-xl border-2 shadow-xl" // Increased padding, stronger shadow
            style={{
              background: "linear-gradient(90deg, var(--muted) 0%, var(--card) 100%)", // Darker background for RSVP
              borderColor: "var(--secondary)", // Subtle border
              boxShadow: "0 6px 12px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex justify-center mb-2 sm:mb-3">
              {" "}
              {/* Increased margin */}
              <span className="text-2xl drop-shadow-lg">💌</span>
            </div>
            <p
              className="text-center leading-relaxed text-base sm:text-lg font-medium"
              style={{ color: "var(--primary)" }}
            >
              {currentContent.rsvp}
            </p>
          </div>

          {/* Closing */}
          <div className="text-center pt-4 sm:pt-6">
            {" "}
            {/* Increased padding */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2 sm:mb-3">
              {" "}
              {/* Increased gap and margin */}
              <span className="text-2xl drop-shadow-lg">🌟</span>
              <div
                className="w-24 h-1 rounded-full"
                style={{
                  background: "linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%)", // Gold divider
                }}
              ></div>
              <span className="text-3xl drop-shadow-lg">🏡</span>
              <div
                className="w-24 h-1 rounded-full"
                style={{
                  background: "linear-gradient(90deg, var(--primary-dark) 0%, var(--primary) 100%)", // Gold divider
                }}
              ></div>
              <span className="text-2xl drop-shadow-lg">🌟</span>
            </div>
            <p className="font-bold text-base sm:text-lg mb-2" style={{ color: "var(--foreground)" }}>
              {currentContent.closing}
            </p>
            <p className="font-serif text-xl sm:text-2xl tracking-wide" style={{ color: "var(--primary)" }}>
              {currentContent.hosts}
            </p>
            <div className="flex justify-center mt-3 sm:mt-4">
              {" "}
              {/* Increased margin */}
              <span className="text-2xl drop-shadow-lg">🙏✨</span>
            </div>
          </div>
        </div>

        {/* Decorative footer */}
        <div
          className="h-4 rounded-b-xl" // Slightly taller footer
          style={{
            background:
              "linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 25%, var(--primary) 50%, var(--secondary) 75%, var(--primary) 100%)", // Gold and silver gradient
            boxShadow: "0 -4px 10px rgba(0,0,0,0.5)", // Shadow for footer
          }}
        ></div>
      </div>
    </div>
  )
}
