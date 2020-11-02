import React, {useState, useEffect} from 'react';
import URLparser from '../scripts/URLparser';

function Selector(props) {
    const handleClick = (event) => {
        let c_name = props.cuisines.filter(cuisine => cuisine === event.target.id)

        fetch(`${URLparser.getURL()}/cuisines/${c_name[0]}.json`)
        .then(res => res.json())
        .then(res => {
            res.title = c_name[0];
            setCurrentCuisine(res);
        })
    }

    const [currentCuisine, setCurrentCuisine] = useState(""); 
    const [dishes, setDishes] = useState("");
    const [ingredients, setIngredients] = useState("");

    let counter = 0;

    useEffect(() => {
        if(currentCuisine !== ""){
            let counter = 0;
            let dishes = currentCuisine.dishes.map(dish => {
                counter++;
                return <li key={counter}><a href={dish.href} target="_blank" rel="noopener noreferrer">{dish.name}</a></li>;
            });
            setDishes(dishes);

            console.log(currentCuisine.ingredients);

            if(currentCuisine.ingredients !== undefined){
                let ingredients = currentCuisine.ingredients.map(ingredient => {
                    counter++;
                    return <li key={counter}>{ingredient}</li>
                });
                setIngredients(ingredients);
            }
        }
    }, [currentCuisine]);

    let list = props.cuisines.map(cuisine => {
        counter++;
        return (
            <div key={counter} className="selection">
                <input 
                        type="radio" 
                        id={cuisine} 
                        name="cuisine" 
                        value={cuisine} 
                        className="selector_button"
                        onClick={handleClick}
                    />
                    <label htmlFor={cuisine}>{cuisine.replace(/_/g," ")}</label>
            </div>
        )
    }); 

    return (
        <div>
            <div id="selector">
                {list}
            </div>
            {
                currentCuisine !== "" && 
                <div id="modal_body">
                    <header id="cuisine_title">{currentCuisine.title.replace(/_/g, " ")}</header>
                    <img id="cuisine_img" src={`./img/cuisines/${currentCuisine.title}.jpg`} alt={`${currentCuisine.title}`.replace(/_/g, " ")   } width="220px" height="160px"></img>
                    <div id="modal_content">
                    {currentCuisine.paragraph !== undefined && 
                        <div>
                            <h5 className="cuisine_subheading">Description:</h5>
                            <p id="cuisine_description">{currentCuisine.paragraph}</p>
                        </div>
                    }
                        <div id="modal_lists">
                            {ingredients !== "" && 
                                <div>
                                    <h5 className="cuisine_subheading">Popular Ingredients or Condiments:</h5>
                                    <ul className="bullet_list">{ingredients}</ul>
                                </div>
                            }
                            {
                                dishes !== "" &&
                                <div>
                                    <h5 className="cuisine_subheading">Famous dishes:</h5>
                                    <ul className="bullet_list">{dishes}</ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Selector;
