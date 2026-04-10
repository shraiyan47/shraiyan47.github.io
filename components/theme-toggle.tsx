"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { use, useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme()
    //   const [mounted, setMounted] = useState(false)

    //   useEffect(() => {
    //     setMounted(true)
    //   }, [])

    const currentTheme = theme === "system" ? resolvedTheme : theme
    const isDark = currentTheme === "dark"

    useEffect(() => {
        console.log("Current theme:", currentTheme)
    }, [currentTheme])

    //   if (!mounted) {
    //     return (
    //       <button
    //         type="button"
    //         className="p-2 rounded-md border border-border hover:bg-muted transition-colors"
    //         aria-label="Toggle theme"
    //       >
    //         <div className="w-4 h-4" /> {/* Placeholder to prevent layout shift */}
    //       </button>
    //     )
    //   }

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-md border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            {isDark ? (
                <Sun className="w-4 h-4 text-muted-foreground hover:text-primary" />
            ) : (
                <Moon className="w-4 h-4 text-muted-foreground hover:text-primary" />
            )}
        </button>
    )
}
