import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const Home = props => {
  const {history} = props
  const logout = () => {
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <div>
      <Header />
      <div className="button-text-container">
        <h1>Home Route</h1>
        <button onClick={logout} type="button">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Home
