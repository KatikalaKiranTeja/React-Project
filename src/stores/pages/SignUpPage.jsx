import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    const response = register({ name, email, password })

    if (!response.ok) {
      setError(response.message)
      return
    }

    setSuccess(response.message)
    setTimeout(() => {
      navigate('/signin')
    }, 800)
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="signup-name">Name</label>
          <input
            id="signup-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error ? <p className="auth-error">{error}</p> : null}
          {success ? <p className="auth-success">{success}</p> : null}

          <button type="submit">Create Account</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/signin">Go to Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
