import { signIn } from "@/auth"
 
export default  function SignIn() {
  return (

    <div className="flex min-h-[100v] bg-red-500 justify-center items-center">
 <form   
 className="flex flex-col"
      action={async () => {
        "use server"
       
        await signIn("credentials",{
            redirectTo:'/',
            email:'temesgen@gmail.com',
            password:'AAA',
            
            
        })
      }}
    >     
      <input type="text" placeholder="email"  className="bg-blue-500"  name="email"/>
      <input type="text" placeholder="password" className="bg-blue-500"  name="password"/>
      <button type="submit">Sign in</button>
    </form>
    </div>
   
  )
}