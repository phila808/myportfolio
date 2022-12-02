import Head from 'next/head'
import Image from 'next/image'
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar';
import FootNav from '../comps/FootNav';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div>
        <h1>Homepage </h1>
        
        <Navbar/>
    </div>

    <div className="details">
    <h1>Philani Zikalala </h1>
    <h1>Mini Portfolio</h1>
    <br></br>

    <h6>Email: phila.zikalala@gmail.com</h6>
    <Link href="Resume-Philani-Zikalala.pdf" target="_blank" className="mylink" > <h6>Click to Download CV</h6></Link><br />
    <Link href="https://www.linkedin.com/in/philani-zikalala-55131b1b3/" target="_blank" className="linkin">linkedin</Link>
    


    </div>
    <div className="myimage">
    <img src="/78-PhilaniZikalala.jpg" width={428} height={477} alt="" className="img2"></img>

    </div>
    <br />
    
    
    <div className='moti'>
<h4>Why SovTech</h4>
  <p>I chose to apply to the SovTech Graduate Program,<br></br>
because I believe that SovTech will help me further <br></br>
my education. I will be able to gain valuable work<br></br>
experience and coding ability.</p>
  <br></br>
    </div>
    
    
    <div className="skills">
    <h4>My Skills</h4><br />

        <ul>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVA</li>
            <li>JavaScript</li>
            <li>Flutter</li>
            <li>Dart</li>
            <li>Reach</li>
        </ul> 

        {/* <h2><i>Skills</i></h2>
  <table border="2">
    <tr>
      <td><b>Technologies</b></td>
      <td>Python</td>
      <td>Java</td>
      <td>HTML</td>
                <td>CSS</td>
                <td>Javascript</td>
                <td>Flutter</td>
                <td>Dart</td>
                <td>Reach</td>
    </tr>
    <tr>
      <td><b>Soft Skills</b></td>
      <td>Problem Solving</td>
      <td>Team Work</td>
      <td>Time Management</td>
                <td>Design</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
    </tr>
  </table> */}
    </div>


    </>
 );
}