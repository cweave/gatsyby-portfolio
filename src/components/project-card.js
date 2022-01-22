import React, { useCallback, useEffect, useState } from "react"
import "../styles/components/project-cards.scss"

const ProjectCards = () => {
  const [filteredProjects, setFilteredProjects] = useState([])

  const filterGitResults = useCallback(async params => {
    const cloneFilter = [...filteredProjects]
    const days = 90
    const currentDate = new Date(Date.now()).toISOString().slice(0, 10)
    const maxDateTime = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)

    params
      .filter(event => event.updated_at.slice(0, 10) >= maxDateTime && event.updated_at.slice(0, 10) <= currentDate)
      .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
      .map(i => {
        const { name, html_url, description, language, updated_at } = i
        const date = updated_at.slice(0, 10)
        const dateObj = new Date(date + "T00:00:00")
        const formattedDate = new Intl.DateTimeFormat("en-US").format(dateObj)

        return cloneFilter.push({
          name,
          html_url,
          description,
          language,
          lastUpdated: formattedDate,
        })
      })

    setFilteredProjects(cloneFilter)
  }, [])

  useEffect(() => {
    const api = "https://api.github.com/users/cweave/repos"
    fetch(api)
      .then(response => response.json())
      .then(data => {
        filterGitResults(data)
      })
  }, [filterGitResults])

  const renderCards = () =>
    filteredProjects.map(proj => (
      <div className="day-night-transition" key={proj.name}>
        <div className="heading">
          <h1>{proj.name}</h1>
        </div>
        <div className="explanation">
          <p>{proj.description ? proj.description : <i>This project doesn't have a description.</i>}</p>
          <ul className="project__technologies">
            <li>
              <span className="accent">{proj.language}</span>
            </li>
            <li>
              <a href={proj.html_url} className="accent" target="_blank" title={`View ${proj.name} repository on Github`}>
                View Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    ))

  return <div className="project-cards">{renderCards()}</div>
}

export default ProjectCards
