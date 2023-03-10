import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    // @TODO: add sign up logic
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign up</button>
      </form>
      <br />

      {/* Add this 👇 */}
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </>
  )
}
export default Signup;
