import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
		<button className="color-mode__btn light--hidden" aria-label="Toggle light mode">Toggle Light Mode
			<svg aria-hidden="true">
				<use href="#sun"></use>
			</svg>
		</button>

		<button className="color-mode__btn dark--hidden" aria-label="Toggle dark mode">Toggle Dark Mode
			<svg aria-hidden="true">
				<use href="#moon"></use>
			</svg>
		</button>
    </div>
  </header>
)


export default Header
