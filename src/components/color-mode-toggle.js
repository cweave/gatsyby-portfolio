import React, { useCallback, useEffect, useState } from "react"

const ColorModeToggle = ({ defaultColor}) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    console.log('defaultColor', defaultColor)
    updateDefault()
  }, [defaultColor])

  const updateDefault = useCallback(() => {
    return (defaultColor === 'dark') ? setIsDark(true) : setIsDark(false);
  }, [defaultColor]);

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
