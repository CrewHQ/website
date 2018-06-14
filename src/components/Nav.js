import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

export default ({ handlePopupOpen }) => (
  <nav className="Nav">
    <div className="Nav--Container">
      {1 === 2 && (
        <Link to="/">
          <Logo />
        </Link>
      )}
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/roadmap" exact>
        Roadmap
      </NavLink>
      <NavLink to="/whitepaper" exact>
        Whitepaper
      </NavLink>
      <NavLink to="/team" exact>
        Team
      </NavLink>
      <NavLink to="/faq" exact>
        FAQ
      </NavLink>
    </div>
  </nav>
)
