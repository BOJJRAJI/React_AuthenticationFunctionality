import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">Home</Link>
    <Link to="/about" className="link">
      About
    </Link>
  </div>
)

export default Header
