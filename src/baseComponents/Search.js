import React, {useState} from 'react';
import DropDownList from './DropDownList';

function Search() {

    const [query, setQuery] = useState("");

    const filterContent = (event) => {
        setQuery(event.target.value);
    }

    return (
        <div>
            <input type="input" placeholder="Search..." id="search" onKeyUp={filterContent} autoComplete="no"/>
            <DropDownList input={query}/>
        </div>
    )
}

export default Search;
