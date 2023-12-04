function Nav() {
  return(
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Products/">Products</Link>
        </li>
      </ul>
    </nav>
  );
}