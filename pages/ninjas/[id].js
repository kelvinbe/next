export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()


    const paths = data.map((buda) => {
        return {
            params: {id: buda.id.toString()}
        }
    })


    return {

        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {

    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()


    return {
        props: {buda: data}
    }
}




const Details = ({buda}) => {

    console.log('budaaa', buda)
    return ( <div>
        <h1>{buda.name}</h1>
        <p>{buda.email}</p>
        <p>{buda.website}</p>
        <p>{buda.address.city}</p>
    </div> );
}
 
export default Details;