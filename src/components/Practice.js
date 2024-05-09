import React from "react";

export default function Practice() {

    //const isGoingOut = true;

    //Ternary Method
    //let answer = isGoingOut ? "Yes" : "No";

/*     if(isGoingOut === true) {
        answer = "Yes"
    }
    else {
        answer = "No"
    } */

                    /* Method 01 */
/*     const [isGoingOut, stateChangeFunction] = React.useState("Yes");

    function changeState() {
        stateChangeFunction(isGoingOut === "Yes" ? "No" : "Yes");
    } */

                    /* Method 02 */
    const [isGoingOut, stateChangeFunction] = React.useState(true);

    function changeState() {
        stateChangeFunction(prevState => !prevState);
    }

    /* Add Item Challenge */
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

    const thingElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    function addItem() {
        setThingsArray(prevThingsArray => {
            return (
                [...prevThingsArray], `Thing ${prevThingsArray.length + 1}`
            )
        })
    }

    return(
        <div>
{/*             <h1>{isGoingOut ? "Yes" : "No"}</h1> */}
            <div onClick={changeState}>
                <h1>{isGoingOut ? "No" : "Yes"}</h1>
            </div>
            <div>
                <button onClick={addItem}>Add Item</button>
                {thingElements}
            </div>
        </div>
    )
}