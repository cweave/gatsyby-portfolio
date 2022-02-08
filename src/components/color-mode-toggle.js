import React, { useCallback, useEffect, useState } from "react"

const ColorModeToggle = ({ defaultColor }) => {
  const [isDark, setIsDark] = useState(false)

  const updateDefault = useCallback(() => {
    return defaultColor === "dark" ? setIsDark(true) : setIsDark(false)
  }, [defaultColor])

  useEffect(() => {
    console.log("defaultColor", defaultColor)
    updateDefault()
  }, [defaultColor, updateDefault])

  const toggleMode = e => {
    setIsDark(!isDark)

    if (e.target.parentElement.classList.contains("theme--night")) {
      document.documentElement.setAttribute("color-mode", "light")
      localStorage.setItem("color-mode", "light")
    } else {
      document.documentElement.setAttribute("color-mode", "dark")
      localStorage.setItem("color-mode", "dark")
    }
  }

  const handleKey = e => {
    if ((e.keyCode && e.keyCode === 13) || (e.keyCode && e.keyCode === 32)) {
      e.preventDefault()
      e.stopPropagation()
      setIsDark(!isDark)

      if (e.target.classList.contains("theme--night")) {
        document.documentElement.setAttribute("color-mode", "light")
        localStorage.setItem("color-mode", "light")
      } else {
        document.documentElement.setAttribute("color-mode", "dark")
        localStorage.setItem("color-mode", "dark")
      }
    }
  }

  return (
    <button className={`color-mode-toggle  ${isDark ? "theme--night" : null}`} onClick={e => toggleMode(e)} onKeyDown={e => handleKey(e)} aria-label="dark mode toggle" aria-pressed={isDark}>
      <span className="moon"></span>
      <span className="sun">
        <span className="sun__ray"></span>
        <span className="sun__ray"></span>
        <span className="sun__ray"></span>
        <span className="sun__ray"></span>
      </span>
    </button>
  )
}

export default ColorModeToggle
