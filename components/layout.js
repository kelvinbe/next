import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";

const Layout = ({children}) => {
    return ( <div className="content">
    
        <Head>  
      <title>Ninja list | Home</title>
      <meta name="keyword" content='ninjas' />
      
    </Head>
        <Navbar/>
        {children}
        <Footer/>

    </div>);
}
 
export default Layout;