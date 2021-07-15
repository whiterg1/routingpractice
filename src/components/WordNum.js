import React from 'react'

export const WordNum = (props) => {

//Sets the default variable of num as true. If the prop that is passed is a number it remains true.    
let num = true

//If the prop being passed is not a number then the value of num is changed to false.
if(isNaN(props.value)== true){
    let num = false;
}
    return (
        <div>
            {/* If the value of num is true then the page will render the prop as a number, and if the value is false it will render it as a string */}
            {num ? <p>{props.value}</p> : <p>{props.value}</p>}
        </div>
    )
}
