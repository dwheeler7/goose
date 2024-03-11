import React, { Component } from "react"
import { signUp } from '../../utilities/users-service'

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const formData = { ...this.state }
      delete formData.confirm
      delete formData.error

      const user = await signUp(formData)
      this.props.setUser(user)
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' })
    }
  }

  render() {
    const { name, email, password, confirm, error } = this.state
    const disable = password !== confirm || !name || !email || !password || !confirm

    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} required />
            <label>Confirm Password</label>
            <input type="password" name="confirm" value={confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>Sign Up</button>
          </form>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    )
  }
}
