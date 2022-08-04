import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/apple.jpg" width={70} height={50}/>
      <h1>Ninjas Baby</h1>

      </div>

      <Link href="/">
        <a> Home    </a>
      </Link>
      <Link href="/about">
        <a> About   </a>
      </Link>
      <Link href="/ninjas">
        <a> Ninja Listing </a>
      </Link>
    </nav>
  );
};

export default Navbar;
