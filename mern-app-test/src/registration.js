/* eslint-disable no-useless-escape */
import React from 'react'
import { useForm } from 'react-hook-form'

function Registration () {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-holder">
          <label htmlFor="reg-email">
                        Email:
          </label>
          <input id="reg-email"
            type="email"
            placeholder="email@email.com"
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          <label htmlFor="reg-password">Password:</label>
          <input id="reg-password" type="password" placeholder="Password"/>
          <label htmlFor="reg-rep-password">Repeat password:</label>
          <input id="reg-rep-password" type="password" placeholder="Repeat Password"/>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Registration
