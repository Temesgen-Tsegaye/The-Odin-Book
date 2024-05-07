import Image from "next/image";
import {auth,signIn} from "@/auth"
import Link from "next/link";
export default async function Home() {
  
  return (
   <div className="flex flex-col gap-8 justify-center  items-center bg-slate-800 h-[100vh]">

    
     <div className="relative flex justify-center">
     <div className="w-24 h-28 bg-green-700 absolute top-[-7rem]"></div>
     <div className="w-24 h-28 bg-red-600 absolute top-[-7rem]"></div>
     <div className="w-24 h-28 bg-yellow-500 absolute top-[-7rem]"></div>
     <h1 className="font-bold text-3xl text-primary-foreground">OdinBook</h1>
     </div>
                <form   action={
                  async (formData)=>{
                    "use server"
                    formData.set("type","login")
                    // await signIn("credentials",formData)
                  }
                } className="flex flex-col bg-slate-100 px-4 py-16 rounded-md ">
                  <input type="email" name="email"/>
                  <input type="password" name="password" />
                  <button>SignIn</button>
                <Link href="/reset">forgot yor Password? </Link>
                  <Link href="/register">Dont have account?</Link>
                </form>
   </div>
  );
}
