import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
    <div>
        <Head>
            <title>Peng's News</title>
            <link rel="Stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
        <Footer />


    </div>
);

export default Layout;
