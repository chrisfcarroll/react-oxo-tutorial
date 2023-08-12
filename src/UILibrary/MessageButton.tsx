import React, {MouseEventHandler, useState} from "react";
import {Button} from "semantic-ui-react";

type mouseEvent = React.MouseEvent<Element,MouseEvent>

export default function MessageButton({globalCount,onGlobalClick}:{globalCount:number,onGlobalClick:MouseEventHandler}){
    const [count,setCount] = useState(0);
    let labelText=`Global count: ${globalCount} times`
    let buttonText= `Clicked Count: ${count}`
    function handleClick(event: mouseEvent){
        setCount(count+1)
        onGlobalClick(event)
    }
    return (<span>
        <label>
            <Button className="ui primary button" onClick={handleClick}>
                <Button.Content data-testid='button-content'>{buttonText}</Button.Content>
            </Button>
            {labelText}
        </label>
    </span>)
}