import { Link } from 'react-router-dom';

import React from 'react'

export default function Navbar() {
  return (
    <header>
        <div className="container">
            <Link to="/">
                <h1>Navbar</h1>
            </Link>
        </div>
    </header>
  )
}
