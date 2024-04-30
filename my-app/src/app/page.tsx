import Image from "next/image";

import {auth} from "@/auth"
export default async function Home() {
  const session=await auth()
  console.log(session,'sess')
  return (
   <div className="">
   <div className="text-white">{session?.user?.email}</div>
ldfjkdlkfjdklfjsdlkfjsdklfjsdlkfjsdklfjlk
   </div>
  );
}
