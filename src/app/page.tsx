import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.col}>
            <h1 className= {styles.title}>
            Your one-stop e-commerce destination 
            </h1>
            <p className={styles.desc}>
            Discover a world of endless shopping possibilités at our online store. 
            </p>
            <Link     href={'/blog'}     >
            <button className={styles.boutton}>
            Shop Now
            </button>
            </Link> 
        </div>
        <div   className={styles.col}>
          <Image 
           src= "/img/HomeImage.svg"
           alt= "Hexa shop"
           height={750}
           width={750}
           />



        </div>
      
    </div>
  );
}
