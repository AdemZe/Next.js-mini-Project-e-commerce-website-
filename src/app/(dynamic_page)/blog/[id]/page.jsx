import Image from "next/image";
import styles from "./id.module.css";
import { Suspense } from "react";
import { Console } from "console";
import Link from "next/link";


async function getData(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()

}
  

export default async function Post({params}){

    const data = await getData(params.id)
    console.log(params.id)
    console.log(data)



    const returnjsx = (
        <div>
          <h1> loading </h1>
        </div>
      )
    
    
    return(
    

    <div className={styles.container}   style={{ margin : "150px"}} >
        <Suspense      fallback={returnjsx}                    >    
            <header className={styles.header}   >

                <div className={styles.info} >
                    <h1 className={styles.title}   >
                        {data.title}
                    </h1>

                    <p   className={styles.description} >
                        {data.description}
                    </p>
                </div>

                <div   className={styles.ImageContainer}  >
                       <Image
                       src={data.thumbnail}
                       alt={data.title}
                       width={300}
                       height={300}

                       
                       
                       
                       />     
                
                   

                </div>


            </header>
            <div  className={styles.ffffff}  >
                    
            {data.images.map((items)=>(
                                <Image
                                key={data.id}
                                src={items}
                                alt={data.title}
                                width={100}
                                height={100}
          
                                />       



            ))


                    }



            </div>


             <div    className={styles.content}  >
                <p    className={styles.text}  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex voluptas rerum iusto 
                    reprehenderit atque quos sunt suscipit. Modi molestiae ad facere. Non cum voluptatem labore consequatur totam deserunt quisquam pariatur?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet architecto ea sed tempora! Perferendis obcaecati sapiente autem 
                    a culpa veniam consequuntur. Vel dicta quaerat non, sit doloribus ea sequi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit blanditiis earum praesentium. Cupiditate, sunt vel minus, 
                    blanditiis delectus quaerat, quisquam dolorum excepturi nemo quis officia quae impedit nesciunt ullam.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error vitae pariatur ab earum explicabo sed
                     voluptas doloribus corrupti recusandae consequuntur ea, at ad reprehenderit soluta libero nesciunt quidem quia dolore.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, laboriosam explicabo totam sit dignissimos sapiente 
                     voluptatem voluptas ea nostrum quibusdam ipsum? Harum ab labore dolores unde. Corporis odio labore deleniti.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam distinctio facilis voluptate aperiam, 
                     quaerat eius debitis fugiat temporibus dolorem optio quis quas animi sed provident autem impedit? Eos, vitae.
                </p>

             </div>

            <div>
                <br/>
                <br/>
                <br/>
                    <Link  href={'/blog'}   >
                        <button        className={styles.buttons}           >
                            Retour
                        </button>
                    
                    
                    </Link>
            </div>       



        </Suspense>
       
    </div>

    

    )
}


