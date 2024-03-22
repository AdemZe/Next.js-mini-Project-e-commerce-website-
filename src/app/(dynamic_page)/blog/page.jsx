import Image from "next/image";
import Link from "next/link";
import styles from"@/app/(dynamic_page)/blog/blog.module.css";



async function getData() {
    const res = await fetch('https://dummyjson.com/products')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    else {
        console.log (res)
    }
    
   
    return res.json()

}
  

  



export default async function Blog(){


    const data = await getData()
    const produits = data.products; 
    /*console.log(produits) */




    return(
        <div className= {styles.MainContainer} >


            { produits.map((item)=>(

            <Link  href={`/blog/${item.id}`}       key={`${item.id}`}        className={styles.post}  >
                <div className={styles.ImageContainer}>
                    <Image 
                    className={styles.image}
                    src= {item.thumbnail}
                    width={200}
                    height={200}
                    alt ={item.decription}                     
                    />
                </div>
                <div className={styles.content} >
                    <h1 className={styles.title}>{item.title}</h1>
                    <p className={styles.text} >{item.description}  </p>
                    
                </div>   


            
            </Link>

            ))}
              
        </div>



    )
}