import './ApiOne.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ApiOne() {
    const res = useParams();
    const [one, setOne] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + res.id)
            .then(res=>res.json())
            .then(json=>setOne(json));
    }, [])

    if(one) {
        return (
            <section className='sectionOne'>
                <div className='oneDiv'>
                    <img src={one.image} alt="item" className='photoOne'/>
                    <div className='textDiv'>
                        <p className='pTitle'>{one.title}</p>
                        <p className='pDesc'>{one.description}</p>
                        <p className='pTitle'>Price: {one.price}</p>
                    </div>
                </div>
            </section>)
    }
};

export default ApiOne;