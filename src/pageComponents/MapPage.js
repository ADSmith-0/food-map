import React, {useEffect, useState} from 'react';
import Navbar from '../baseComponents/Navbar';
import Map from '../baseComponents/Map';
import Modal from '../baseComponents/Modal';

function MapPage() {
    const [country, setCountry] = useState("");

    useEffect(() => {
        window.location.hash = "#1";
    }, []);

    useEffect(() => {
        if((window.location.hash !== "#1") || (window.location.hash !== "#2")){
            setCountry(window.location.hash.substr(1));
        }
    }, [window.location.hash]);

    const resetCountry = () => {
        setCountry("");
    }

    return (
        <div>
            <Navbar />
            <Map />
            {
                country !== "" && <Modal country={country} resetCountry={resetCountry}/>
            }
            
        </div>
    )
}

export default MapPage;