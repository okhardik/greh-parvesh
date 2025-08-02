"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import domToImage from "dom-to-image-more"
import { jsPDF } from "jspdf"

interface DownloadButtonProps {
  targetId: string
}

export default function DownloadButton({ targetId }: DownloadButtonProps) {
  const [selectedFormat, setSelectedFormat] = useState<"png" | "jpeg" | "pdf">("png")
  const [isDownloading, setIsDownloading] = useState(false)
  const [isShining, setIsShining] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    setIsShining(true) // Start shine animation
    try {
      const element = document.getElementById(targetId)
      if (!element) {
        alert("Invitation not found!")
        setIsDownloading(false)
        setIsShining(false) // Stop shine animation
        return
      }

      let dataUrl: string | null = null
      const filename = `griha-pravesh-invitation.${selectedFormat}`

      if (selectedFormat === "png") {
        dataUrl = await domToImage.toPng(element, {
          quality: 1.0,
          bgcolor: "#ffffff", // Ensure white background for transparent areas
        })
      } else if (selectedFormat === "jpeg") {
        dataUrl = await domToImage.toJpeg(element, {
          quality: 0.95, // High quality JPEG
          bgcolor: "#ffffff", // Ensure white background
        })
      } else if (selectedFormat === "pdf") {
        // Convert to PNG first, then embed in PDF
        const imgData = await domToImage.toPng(element, {
          quality: 1.0,
          bgcolor: "#ffffff",
        })

        const imgWidth = element.offsetWidth
        const imgHeight = element.offsetHeight

        const pdf = new jsPDF({
          orientation: imgWidth > imgHeight ? "l" : "p", // Landscape or portrait
          unit: "px",
          format: [imgWidth, imgHeight], // Set PDF size to image size
        })

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
        pdf.save(filename)
        setIsDownloading(false)
        setIsShining(false) // Stop shine animation
        return // Exit early as jsPDF handles download
      } else {
        alert("Unsupported format selected.")
        setIsDownloading(false)
        setIsShining(false) // Stop shine animation
        return
      }

      // For PNG/JPEG, create a link and trigger download
      if (dataUrl) {
        const link = document.createElement("a")
        link.href = dataUrl
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } catch (error) {
      console.error("Error generating file:", error)
      alert(
        `Error generating ${selectedFormat.toUpperCase()}: ${error instanceof Error ? error.message : String(error)}`,
      )
    } finally {
      setIsDownloading(false)
      setIsShining(false) // Ensure shine animation stops
    }
  }

  return (
    <DropdownMenu>
      
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={() => setSelectedFormat("png")}>PNG</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedFormat("jpeg")}>JPEG</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedFormat("pdf")}>PDF</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
