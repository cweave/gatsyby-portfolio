import React from "react"
import "../styles/components/technologies.scss"

const Technologies = () => {
  return (
    <section className="technologies-container">
      <hr />
      <h2>Technologies</h2>

      <h3>
        Technologies I've <strong>worked</strong> & <em className="dabbled">dabbled</em> with.
      </h3>

      <ul className="technologies-list">
        <li>HTML</li>
        <li>CSS / SCSS / LESS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Vue</li>
        <li>Jest / Mocha</li>
        <li>Enzyme</li>
        <li>Express</li>
        <li>Node</li>
        <li>MongoDB</li>
        <li>Git / Github / Gitlab</li>
        <li className="dabbled">Mongoose</li>
        <li className="dabbled">Chai</li>
        <li className="dabbled">Gatsby</li>
        <li className="dabbled">GraphQL</li>
        <li className="dabbled">Webpack</li>
        <li className="dabbled">Parcel</li>
      </ul>
    </section>
  )
}

export default Technologies
