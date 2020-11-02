import React, {useState, useEffect} from 'react';
import Selector from './Selector';

 function Modal(props) {
    const [cuisines, setCuisines] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        if(props.country !== "2"){
            //Set Country.
            setCountry(props.country);

            //Fetch the JSON country.
            fetch(`http://localhost:3000/countries/${props.country}.json`)
            .then(res => res.json())
            .then(response => setCuisines(response.cuisines));

            //Change hash
            window.location.hash = "#2";
        }
    }, [props.country]);

    const handleClick = (event) => {
        props.resetCountry();
    }

    return (
        <div>
            {
                cuisines !== "" && 
                <div id="modal">
                    <div id="modal_head">
                        <button className="close" onClick={handleClick}>x</button>
                        <header id="modal_header">
                            <img id="modal_img" src={`../img/countries/${country}.jpg`} alt={`${country} Flag`} height="36px" width="72px"/>
                            {country.replace(/_/g, " ")}
                        </header>
                    </div>
                    <hr/>
                    <div>
                        <Selector cuisines={cuisines}/>
                    </div> 
                </div>
            }
        </div>
       
    )
}

export default Modal;
