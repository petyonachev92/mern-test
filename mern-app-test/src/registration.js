/* eslint-disable no-useless-escape */
import React from 'react'
import { useForm } from 'react-hook-form'

function Registration () {
  const { register, handleSubmit } = useForm()

  const data = {
    email: '',
    password: ''
  }

  const onSubmit = (formData) => {
    console.log(formData)
    fetch('http://localhost:5000/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json)
      .then(console.log('User registered succesfully'))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-holder">
          <label htmlFor="reg-email">
                        Email:
          </label>
          <input name="email" id="reg-email"
            type="email"
            placeholder="email@email.com"
            ref={register({
              required: true,
              unique: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          <label htmlFor="reg-password">Password:</label>
          <input name="password"
            id="reg-password"
            type="password"
            placeholder="Password"
            ref={register({
              required: true
            })}
          />
          <label htmlFor="reg-rep-password">Repeat password:</label>
          <input id="reg-rep-password" type="password" placeholder="Repeat Password"/>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Registration
