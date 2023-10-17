import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const About = props => {
  const {history} = props
  const logout = () => {
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <div>
      <Header />
      <div className="button-text-container">
        <h1>About Route</h1>
        <button onClick={logout} type="button">
          Logout
        </button>
      </div>
    </div>
  )
}

export default About
