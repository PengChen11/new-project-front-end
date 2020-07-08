import Layout from '../components/Layout';
import News from '../components/News';
import Previous from '../components/Previous';

const Home = (props) => (
    <Layout>
        <div className='container'>
            <div className='row'>
                <h1 className='mx-auto col-lg-auto'>Welcome to Peng's News Site</h1>
            </div>
            {/* <News data={props.data}/> */}
            <Previous data={props.data}/>

        </div>
    </Layout>
)

export async function getServerSideProps (context){

    const url = 'https://chen-news-api.herokuapp.com/api/';
    const response = await fetch(url);
    const data = await response.json();

    return {
        props: {
            data : data,
        },
    }
}

export default Home;
