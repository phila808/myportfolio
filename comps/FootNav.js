import Link from "next/link";

const FootNav = () => {
    return ( 
        <>
        <div className="foot">
            <Link href="/">myhome</Link>
            <Link href="https://www.linkedin.com/in/philani-zikalala-55131b1b3/">Linkin</Link>
            <Link href="Resume-Philani-Zikalala.pdf">CV</Link>
           

        </div>
        </>
     );
}
 
export default FootNav;