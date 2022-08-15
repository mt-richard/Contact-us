
import { useState } from "react";
import Buttons from "./Buttons.js";
const Home = () => {

let links = [
    {name:"Home",link:"/"},
    {name:"Services",link:"/ser"},
    {name:"Packages",link:"/"},
    {name:"About us",link:"/"},
    {name:"Contact",link:"/"}
];


let [open,setOpen]=useState(false);
    return (  
            <div className="bg-white-600 w-100 h-screen">
                <div className="md:flex py-4 px-6 pt-4 justify-between w-100 bg-white">
                    <div className="text-3xl font-bold md:ml-10 ">
                        <span>'' Trad<span className="text-yellow-500">ing.</span></span>
                    </div>
                    <div className="links">
                        <div onClick ={()=>setOpen(!open)} className="absolute right-8 top-6 text-3xl cursor-pointer md:hidden">
                            <ion-icon name={open ? 'close':'menu'}></ion-icon>
                        </div>
                        <ul className={`md:flex py-2 px-6 left-0 absolute md:static bg-white w-full md:z-auto z-[-1] transition-all duration-500 ease-in   ${open ? 'top-20 opacity-100':'top-[-490px] opacity-100 '}  `}>
                            {
                                links.map((lin)=>(
                                    <li key={lin.name} className="navlink md:my-0 my-3 text-gray-500 hover:text-gray-900 md:ml-5 text-xl">
                                        <a href={lin.link}>{lin.name}</a></li>
                                ))
                            }
                            <Buttons/>
                        </ul>
                        
                    </div>
                </div> 
                
                <div className="cont">
                        <div className="rela bg-yellow-500 w-100 h-60"> </div>
                        <div className="photoo">
                            <div className="photo">
                               
                            </div>
                            <div className="contact flex">
                                    <div className="bg-grey-900 forms">
                                        <h1 className="text-white text-3xl py-5">CONTACT US</h1>
                                        <form >
                                            <input type="text" placeholder="Enter your Name"></input><br/>
                                            <input type="text" placeholder="Enter your Email Address"></input><br/>
                                            <textarea placeholder="Enter message"></textarea><br/>
                                            <input type="submit" value="Submit"></input>
                                        </form>
                                     
                                    </div>
                                    <div className="text-grey px-20 m-20 text">
                                        <h2 className="ext-grey-900 ">Blockchain Services</h2>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                           </p>
                                        <p>Image from <a class="text-yellow-500 underline" href="#">Freepk</a></p>
                                        <div className="btn"><Buttons /></div>
                                    </div>
                            </div>
                           
                        </div>
                </div>

                <div className="footer w-100 h-60">
                        <div className="footcontent h-60 flex">    
                            <div className="box box1">
                                <h2>ABOUT US</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                                <li><span className="icon text-yellow-500"><ion-icon  name="location-outline"></ion-icon></span><a href="#">Kg 100 st Kigali</a></li>
                                <li><span className="icon text-yellow-500"><ion-icon  name="call-outline"></ion-icon></span><a href="#">(+250)787 654 212</a></li>
                                <li><span className="icon text-yellow-500"><ion-icon  name="mail-outline"></ion-icon></span><a href="#">mbanzatrichard@gmail.com</a></li>
                            </div>
                            <div className="box">
                                <h2>CATEGORIES</h2>
                                <li><a href="#">Hot deals</a></li>
                                <li><a href="#">Trending</a></li>
                                <li><a href="#">Buying</a></li>
                                <li><a href="#">Selling</a></li>
                                <li><a href="#">My FF</a></li>
                            </div>
                            <div className="box">
                                <h2>INFORMATION</h2>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Conditions</a></li>
                            </div>
                            <div className="box">
                                <h2>SERVICE</h2>
                                <li><a href="#">Trading</a></li>
                                <li><a href="#">Teaching</a></li>
                                <li><a href="#">Buying</a></li>
                                <li><a href="#">Selling</a></li>
                                <li><a href="#">Mentorship</a></li>
                            </div>
                        </div>  
                        <p className="text-center py-8">Copyright ©2022 All rights reserved | This template is made with  <span className="px-1 "><ion-icon name="heart-half-outline"></ion-icon></span>by <span className="text-yellow-500">#Richard</span></p>  
                </div>
                                
                
            </div>

           

    );
}
 
export default Home;
