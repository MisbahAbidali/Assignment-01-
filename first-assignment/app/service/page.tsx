
import Link from "next/link";

const service = () =>{
  return (
    <div>
        <h1>This is service page</h1>
        <br />
        <Link href="/service/app-development">App Development</Link>
        <br />
        <Link href="/service/website-development">Website Development</Link>
    </div>
  )    
}

export default service;
