import React, {useState, useEffect} from 'react';

function DropDownList(props) {

    const [names, setNames] = useState(['adam', 'ben', 'charlie', 'elliot', 'meri']);
    const [list, setList] = useState("");

    useEffect(() => {
        makeList(names);
    }, [names]);
    
    useEffect(() => {
        let filtered_list = names.filter(name => name.includes(props.input));
        makeList(filtered_list);
    }, [props.input]);

    const makeList = (items) => {
        let counter = 0;
        setList(items.map(item => {
            counter++
            return <li key={counter}>{item}</li>
        }));
    }

    return (
        <ul id="list" style={{color: "#fff"}}>
            {list}
        </ul>    
    )
}

export default DropDownList;
