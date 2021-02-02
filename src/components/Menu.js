import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <nav class="navbar navbar-expand-lg">
          <ul class="navbar-nav nav-fill nav-pill mr-auto">
            <li class="nav-item ml-3">
              <Link to="/">Home</Link>
            </li>
            <li class="nav-item ml-3">
              <Link to="/ideas">Ideas</Link>
            </li>
            <li class="nav-item ml-3">
              <Link to="/metadata">Some Metadata</Link>
            </li>
            <li class="nav-item ml-3">
              <Link to="/weather">Weather API</Link>
            </li>
            <li class="nav-item ml-3">
              <Link to="/demos">React Demos</Link>
            </li>
          </ul>
        </nav>
        
    )
}