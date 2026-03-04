import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const response = await signIn({ email, password })

    if (!response.ok) {
      setError(response.message)
      return
    }

    navigate('/home')
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="signin-email">Email</label>
          <input
            id="signin-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="signin-password">Password</label>
          <input
            id="signin-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error ? <p className="auth-error">{error}</p> : null}

          <button type="submit">Sign In</button>
        </form>
        <p className="auth-switch">
          Not registered? <Link to="/signup">Go to Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default SignInPage
