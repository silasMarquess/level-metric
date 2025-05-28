'use client'

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function ToogleTheme() {
  const [isDark, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const root = document.documentElement
    const theme = localStorage.getItem('theme')
    if(theme === 'dark' || (theme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark')
      setIsDarkMode(true)
    } else {
      root.classList.remove('dark')
      setIsDarkMode(false)
    }
  },[])
   
  const handleToggleTheme = () => {
    const root = document.documentElement
    const newTheme = isDark ? 'light' : 'dark'
    root.classList.toggle('dark',!isDark)
    localStorage.setItem('theme', newTheme)
    setIsDarkMode(!isDark)
  }

  return (
   <Button onClick={handleToggleTheme} size={'icon'} variant={'ghost'}>
    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
   </Button>
  )
}