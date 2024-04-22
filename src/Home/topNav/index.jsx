import React from 'react';

function TopNav() {
  return (
    <nav style={{ backgroundColor: 'black' }}>
        <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <li><a href="/">Home</a></li>
            <li><a href="/movies">Profile</a></li>
            <li><a href="/reviews">Movies</a></li>
        </ul>
    </nav>
  );
}

export default TopNav;
