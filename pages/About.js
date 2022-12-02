import Navbar from "../comps/Navbar";
import Image from "next/image";
import Head from 'next/head'

const About = () => {
    return ( 
        <body className="abouybody">
        <div>
        <Head>
        <title>
          About Philani?
        </title>

      </Head>
         <Navbar/>
         <img src="/78-PhilaniZikalala.jpg" width={228} height={177} className="img1"></img>
            
            <h1>About me</h1>
            
    
            
        </div>
        <br />
        <br />
     
        <div class="container">
        <h3>Currently</h3>
        <div class="box">
            <div class = "icon"><i class="fa fa-search" aria-hidden="true"></i></div>
            <div class="content">
                
                <p>Currently: 
I am currently doing my final year at WeThinkCode,
finishing in December and Hoping to get an internship 
at SovTech.</p>
            </div>     
        </div>
     
      
        <div class="container">
        <h3>BackGround</h3>
        <div class="box">
            <div class = "icon"><i class="fa fa-search" aria-hidden="true"></i></div>
            <div class="content">
              
                <p>Background:
I have a Diploma in Information Technology, and have 
some experience working with Computer Hardware.</p>
            </div>     
        </div>
        <div class="container">
        <h3>Future</h3>
          
            <div class="box">
                <div class = "icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                <div class="content">
                   
                    <p>Future:
I am hoping to be a Software Developer in the future.</p>
                </div>     
            </div>
        </div>
        </div>
        </div>
        
        </body>
    );
}
 
export default About;