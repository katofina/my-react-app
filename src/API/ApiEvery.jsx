function ApiEvery(props) {
    return (<div>
            <ul>
            {props.data.map((item) => (
                <div className="cardDiv" key={item.id}>
                    <a><img src={item.image} className="itemPhoto" alt="thing"></img></a>
                    <div>
                        <p>{item.title}</p>
                        <p className="description">{item.description}</p>
                        <div className="divBottom">
                            <div>
                                <p className="priceP">Price</p>
                                <p className="priceP">{'$' + item.price}</p>
                            </div>
                            <div>
                                <button>Add to Favourite</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </ul>
    </div>)
}

export default ApiEvery;