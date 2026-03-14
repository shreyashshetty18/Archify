import { Box } from "lucide-react"
import Button from "./ui/Button";

interface NavbarProps {
  isSignedIn?: boolean;
  username?: string;
}

const Navbar = ({ isSignedIn = false, username }: NavbarProps) => {
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
          {isSignedIn ? (
            <>
              <span className="greeting"> 
               {username ? `Hello, ${username}` : "Signed In"}
              </span>
              <Button onClick={handleAuthClick} className="btn" size="sm">
                Log Out
              </Button>
            </>
          ) : (
            <Button onClick={handleAuthClick} className="login" size="sm" variant="ghost">
              Log In
            </Button>
          )}
          <a href="#upload" className="cta">Get Started</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar