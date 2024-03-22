"use client"
import styles from "@/elements/boutton/boutton.module.css"
import Link from "next/link"

export default function Boutton (){
    return(

    <div>
        <Link   href={"/"}      >
            <button
                className={styles.logout}
                onClick={()=>{ console.log("logout") }}           
            >Logout


            </button>
        </Link>    
    </div>
    )

}