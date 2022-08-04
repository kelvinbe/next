import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
export const getStaticProps = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        return {
            props: {
                budas: data
            }
        }
}


const Ninjas = ({ budas }) => {
    console.log('budas', budas)
    return ( 


        <div>
            <h1>Nijas in the hood</h1>
            <div>

            {
                budas.map((buda) => {
                  return (
                  <Link  href={'/ninjas/' + buda.id}key={buda.id}>

                      <a className={styles.single}><h3>{buda.name}</h3></a>  
                    </Link>)
                })
            }
            </div>


        </div>
     );
}
 
export default Ninjas;