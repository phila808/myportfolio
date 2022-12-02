import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="navb">
               
            
            </div>
            <Link href="/">Home</Link><br></br>
           <Link href="/About">About</Link><br></br>
        </nav>
     );
}
 
export default Navbar;