import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Main/History.css';

function History() {
    const [hist, setHist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const nick = JSON.parse(localStorage.getItem("authUser")).nick + "_hist";
        const hist = localStorage.getItem(nick);
        if(hist) setHist(JSON.parse(hist));
    }, []);

    if(hist.length) {
        return (
            <div>
                <p className="pHist">Your history. You can go to the desired results.</p>
                <ul>
                    {hist.map((item, index) => (
                        <div key={index} className="divHist">
                            <p className="divHist_p" onClick={() => {navigate('/search/' + item)}}>{item}</p>
                        </div>
                    ))}
                </ul>
            </div>
        )
    } else {
        return (<p className="pHist">You haven't searched for anything yet</p>)
    }
}
export default History;