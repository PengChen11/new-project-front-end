
class Previous extends React.Component{

    listItem(news){

        return (
            <li key={[news.id]} className='p-2'>
                <a href={news.source}>{news.title}</a>

            </li>
        )
    }

    render(){
        let lists = [];
        for (let i = 0; i<this.props.data.length; i++){
            lists.push(this.props.data[i]);
        }
        return (
            <>
            {/* <div className='row m-3'>
                <h3 className="mx-auto col-auto">Other News</h3>
            </div> */}
            <div className="row">
                <ul className="mx-auto col-auto list-unstyled">
                    {lists.map(news => this.listItem(news))}
                </ul>
            </div>
            </>
        )}
}


export default Previous;



