import React from 'react'
import { auth,signIn } from '@/auth'
export default function page() {
  return (
    <div>
        <form action={
                  async (formData)=>{
                    "use server"
                    formData.set("type","register")
                    await signIn("credentials",formData)
                  }
                }>

          <input type="text" placeholder='firstName'  name='text' />
          <input type="text" placeholder='lastName'  name='lastName' />
          <input type="email" placeholder='Add your Email' name='email' />
          <input type="password" placeholder='password' name='password' />
          <select>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
           <button>Sign Up</button>
        </form>
    </div>
  )
}
