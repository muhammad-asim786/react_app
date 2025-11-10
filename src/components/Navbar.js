import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
  const mergedProps = { ...Navbar.defaultProps, ...props }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
       {mergedProps.title}
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
            {mergedProps.home}
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              {mergedProps.about}
            </a>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="modeSwitch"
              checked={props.mode === 'dark'}
              onChange={props.toggleMode || (() => {})}
            />
            <label className={`form-check-label ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`} htmlFor="modeSwitch" style={{ cursor: 'pointer' }}>
              {props.mode === 'light' ? 'Light Mode' : 'Dark Mode'}
            </label>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

// Specifies the default values for props:
Navbar.defaultProps = {
  title: 'Set TextUtils',
  home: 'Set Home',
  about: 'Set About'
}

Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string
}

export default Navbar