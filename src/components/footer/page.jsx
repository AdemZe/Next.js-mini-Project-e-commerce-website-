import styles from "@/components/footer/footer.module.css"
import Image from "next/image"
import {Media} from "@/components/footer/data"


export default function Footer(){
    return (
 /*
    <div className={styles.container}>
        <div>
             <p>
                Ce contenu est protégé par le droit d'auteur © 2024
             </p>           
        </div>
        
        
       
         <div className={styles.social}> 
            <Image
            src="/img/facebook.png"
            width={20}
            height={20}
            className={styles.icon}
            alt= " hexashop facebook link "
            />

            <Image
            src="/img/linkedin.png"
            width={20}
            height={20}
            className={styles.icon}
            alt= " hexashop linkedin link "
            />

            <Image
            src="/img/social.png"
            width={20}
            height={20}
            className={styles.icon}
            alt= " hexashop social link "
            />

            <Image
            src="/img/twitter.png"
            width={20}
            height={20}
            className={styles.icon}
            alt= " hexashop twitter link "
            />

            <Image
            src="/img/whatsapp.png"
            width={20}
            height={20}
            className={styles.icon}
            alt= " hexashop whatsapp link "
            />
            

        </div>
        

    </div>

 */


        <div className={styles.container}>
                <div>
                    <p>
                        Ce contenu est protégé par le droit d'auteur © 2024
                    </p>           
                </div>

                <div className={styles.social} >
                    {Media.map((item)=>(
                        
                        <Image
                        key= {item.id}
                        src= {`/img/${item.title}.png`}
                        width= {20}
                        height= {20}
                        className= {styles.icon}
                        alt= {item.decription}  /> 
                   
                        )) }    



                   

                </div>




        </div>    


    );



}