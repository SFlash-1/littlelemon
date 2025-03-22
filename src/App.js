import React from 'react';

function App() {
  return (
    <div className="grid-container">
      <header className="header">Welcome to Little Lemon</header>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className="main">This is the main content area.</main>
      <footer className="footer">© 2024 Little Lemon. All rights reserved.</footer>
    </div>
  );
}

export default App;