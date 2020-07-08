const News = (props) => (
    <>
    <div className='row'>
        <h3 className='mx-auto col-auto'>{props.data.title}</h3>
    </div>
    <div className='row'>
        <iframe className='mx-auto col-auto' src={props.data.source} height="500" width="800"  />
    </div>
    </>
)

export default News;
