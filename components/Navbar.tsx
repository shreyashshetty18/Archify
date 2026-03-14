import { Box } from "lucide-react"

const Navbar = () => {
  const handleAuthClick = async () => {}
  return (
    <header className='navbar'>
      <nav className='inner'>
        <div className='left'>
          <div className='brand'>
            <Box className="logo" />
            <span className="name">
              Archify
            </span>
          </div>

          <ul className="links"> 
            <li><a href="#">Products</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Enterprise</a></li>
          </ul>
        </div>

        <div className="actions">
          <button onClick={handleAuthClick} className="login">Log In</button>
          <a href="#upload" className="cta">Get Started</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar