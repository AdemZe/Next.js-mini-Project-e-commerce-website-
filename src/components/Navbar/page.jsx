"use client"
import {links} from "@/components/Navbar/data"
import Link from "next/link"
import styles from "@/components/Navbar/Navbar.module.css"
import Boutton from "@/elements/boutton/page"
import DarkModeToggle from "@/components/DarkModeToggle/DarkModeToggle"
import { Lobster, Montserrat } from "next/font/google"


const LogoFont = Montserrat({ subsets: ["latin"] ,
weight : "900" 
});



export default function Navbar(){

    return(


    <div className= {styles.container}>
            
            <Link  href="/"  className={`${styles.logo} ${LogoFont.className} `}> Hexashop </Link>


           

            <div className={styles.links}>
                
                 <DarkModeToggle />   
                {links.map((item)=>(
                
                   <Link key={item.id} href={item.url}   className={styles.links} >{item.title}</Link>

                )   )}

                <Boutton/>      
                
                
                

            </div>
             

                    

    </div>
 

    )





}