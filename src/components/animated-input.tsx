"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { ArrowUp } from "lucide-react"

interface OrbInputProps {
  value?: string
  onChange?: (value: string) => void
  onSubmit?: () => void
  disabled?: boolean
  placeholder?: string
  isLoading?: boolean
  showOrb?: boolean
}

export function OrbInput({
  value: externalValue,
  onChange,
  onSubmit,
  disabled,
  placeholder: customPlaceholder,
  isLoading,
  showOrb = true
}: OrbInputProps) {
  const [internalValue, setInternalValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  // Use external value if provided, otherwise use internal state
  const value = externalValue !== undefined ? externalValue : internalValue
  const setValue = onChange || setInternalValue

  // Keep the placeholders stable across renders
  const placeholders = useMemo(
    () => [
      "Ask anything...",
      "What's on your mind?",
      "How can I help you?",
      "What would you like to know?",
    ],
    []
  )

  // Config: tweak the animation to taste
  const CHAR_DELAY = 75 // ms between characters while typing
  const IDLE_DELAY_AFTER_FINISH = 2200 // ms to wait after a full sentence is shown

  // Refs to hold active timers so they can be cleaned up
  const intervalRef = useRef<number | null>(null)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    // If custom placeholder is provided, skip animation
    if (customPlaceholder) {
      setDisplayedText(customPlaceholder)
      setIsTyping(false)
      return
    }

    // clear any stale timers (helps with StrictMode double-invoke in dev)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    const current = placeholders[placeholderIndex]
    if (!current) {
      setDisplayedText("")
      setIsTyping(false)
      return
    }

    const chars = Array.from(current)

    // reset state for a new round
    setDisplayedText("")
    setIsTyping(true)

    let charIndex = 0

    // type character-by-character using a derived slice to avoid any chance of appending undefined
    intervalRef.current = window.setInterval(() => {
      if (charIndex < chars.length) {
        const next = chars.slice(0, charIndex + 1).join("")
        setDisplayedText(next)
        charIndex += 1
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        setIsTyping(false)

        // after a brief pause, advance to the next placeholder
        timeoutRef.current = window.setTimeout(() => {
          setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
        }, IDLE_DELAY_AFTER_FINISH)
      }
    }, CHAR_DELAY)

    // Cleanup on unmount or when placeholderIndex changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [placeholderIndex, placeholders, customPlaceholder])

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim() && onSubmit && !disabled) {
      onSubmit()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && value.trim() && onSubmit && !disabled) {
      e.preventDefault()
      onSubmit()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl">
      {/* Animated gradient border */}
      <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 via-green-300 via-yellow-200 via-pink-300 to-purple-400 opacity-75 blur-sm animate-gradient-x" />
      <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 via-green-400 via-yellow-300 via-pink-400 to-purple-500 animate-gradient-x" />

      <div
        className={`relative flex items-center gap-3 p-3 md:p-4 bg-white shadow-lg transition-all duration-300 ease-out rounded-full ${isFocused ? "shadow-xl" : "shadow-lg"
          }`}
      >
        {showOrb && (
          <>
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden transition-all duration-300 scale-100">
                {/* Animated blue orb with CSS */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 animate-pulse relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 via-transparent to-transparent" />
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-300 via-cyan-300 to-blue-500 animate-spin-slow" />
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-200 via-cyan-200 to-blue-400" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </div>
              </div>
            </div>

            <div className="w-px h-8 md:h-10 bg-gradient-to-b from-blue-200 via-cyan-200 to-blue-200" />
          </>
        )}

        <div className="flex-1">
          <input
            ref={inputRef}
            data-testid="orb-input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder={customPlaceholder || `${displayedText}${isTyping ? "|" : ""}`}
            aria-label="Ask a question"
            disabled={disabled}
            className="w-full text-base md:text-lg text-gray-800 placeholder-gray-400 bg-transparent border-none outline-none font-light disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={disabled || !value.trim() || isLoading}
          aria-label="Submit question"
          className="flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-2 md:p-2.5 text-white transition-all hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>
    </form>
  )
}

export default OrbInput