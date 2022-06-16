import React, { useState} from 'react';

export function AdjustButton(props){
    const [item, setItem] = useState(props.item);

    const minus = () => {
        setItem(item - 1)
    }

    const plus = () => {
        setItem(item + 1)

    }

    return <>
    <button onClick={minus}>-</button>{item}{props.kg}<button onClick={plus}>+</button>
    </>

}