import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound404 = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
        console.log('use Effect ran')
    }, [])
    return ( 

        <div className="not-found">
            <h1>Oooooops ....</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>

        </div>
     );
}
 
export default NotFound404;