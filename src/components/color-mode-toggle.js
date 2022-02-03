import React, { useState } from "react"

const ColorModeToggle = () => {
	const windowGlobal = typeof window !== 'undefined' && window.localStorage
  const [isDark, setIsDark] = useState(windowGlobal && (localStorage.getItem("color-mode") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches))
  const toggleMode = e => {
    setIsDark(!isDark)
    if (e.target.parentElement.classList.contains("theme--night")) {
      document.documentElement.setAttribute("color-mode", "light")
    } else {
      document.documentElement.setAttribute("color-mode", "dark")
    }
  }
  return (
    <button className={`color-mode-toggle  ${isDark ? "theme--night" : null}`} onClick={e => toggleMode(e)} aria-label="dark mode toggle" role="switch" aria-checked={isDark}>
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
