import React from 'react'

export const WordDecoration = (props) => {

    //This is the CSS styling that is applied only if a word is passed through props.
    const style = {
        color:props.textColor,
        backgroundColor: props.bgColor
    }
    
    //This is an edge case which only allows a word to be styled, if a number is passed it returns "This is not a Word, Try Again."
    if (isNaN(props.word) == false){
        return (
            <div>This is Not a Word, Try Again.</div>
        )
    }else {
        return (
        <div>
            <p style={style}>{props.word}</p>
        </div>
        )
    }
}
