
import Link from "next/link";

const Home = () =>{
  return (
      <div>
        <h1>Home page</h1>
        <Link href="/service">Service</Link>
        <br />
        <Link href="/about">About</Link>
      </div>
  );
}

export default Home;
