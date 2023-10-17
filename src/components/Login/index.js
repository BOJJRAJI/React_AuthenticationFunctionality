import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  login = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      console.log(data)
      const jwtToke = data.jwt_token
      const {history} = this.props
      Cookies.set('jwt_token', jwtToke, {expires: 10})
      history.replace('/')
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <div className="button-text-container">
          <h1>Please Login</h1>
          <button onClick={this.login} type="button">
            Login with Sample Creds
          </button>
        </div>
      </div>
    )
  }
}

export default Login
