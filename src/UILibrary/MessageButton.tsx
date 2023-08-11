import {MouseEventHandler, useState} from "react";
import {Button, Icon} from "semantic-ui-react";

type mouseEvent = React.MouseEvent<Element,MouseEvent>

function MessageButton({globalCount,onGlobalClick}:{globalCount:number,onGlobalClick:MouseEventHandler}){
    const [count,setCount] = useState(0);
    let labelText=`Global count: ${globalCount} times`
    let buttonText= `Clicked Count: ${count}`
    let lengthOfButtonText= 9999
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

export default MessageButton