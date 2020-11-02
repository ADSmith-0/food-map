import React, {useEffect} from 'react';
import Navbar from '../baseComponents/Navbar';
import Search from '../baseComponents/Search';

function SearchPage() {
    useEffect(() => {
        window.location.hash = "#3";
    }, []);

    return (
        <div>
            <Navbar />
            <Search />
        </div>
    )
}

export default SearchPage;