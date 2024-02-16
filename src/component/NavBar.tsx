import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <nav style={{ background: '#333', padding: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <Link style={{ color: 'white', textDecoration: 'none', margin: '0 90px' }} to='/'>HOME</Link>
            <Link style={{ color: 'white', textDecoration: 'none', margin: '0 90px' }} to='/choicenav'>CHOICE NAVIGATION METRICS</Link>
            <Link style={{ color: 'white', textDecoration: 'none', margin: '0 90px' }} to='/solutionSpace'>SOLUTION SPACE METRICS</Link>
        </nav>
    </div>
  )
}

export default NavBar