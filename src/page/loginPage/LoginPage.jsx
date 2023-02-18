import React from 'react'
import LoginForm from '../../Component/loginForm/LoginForm'

export default function LoginPage() {
  document.title = 'Nike. Login'

  return (
    <div className='h-[70vh]'>
      <LoginForm></LoginForm>
    </div>
  )
}
