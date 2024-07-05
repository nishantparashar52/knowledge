import React, {useEffect, useState, useRef} from "react";
import './Boxes.css';

const Box = ({isActive, clickHandler, classes = ''}) => (
    <div
    className={`box${classes} ${isActive ? 'active': ''}`}
    onClick={clickHandler}
    ></div>
)

const createBox = (i, index, boxClicked, boxState) => {
    if(i === 4 || i === 5) {
        return (<Box key={index}/>);
    } else {
        return (<Box classes=" border" key={index} clickHandler={() => boxClicked(i)} isActive={boxState.includes(i) && 'active'}/>) 
    }
}
export const Boxes = ({len}) => {
    const [boxState, setBoxState] = useState([]);
    const timerRef = useRef();
    const boxClicked = (i) => {
        setBoxState(prevState => [...prevState, i]);
    }
    useEffect(() => {
        if(boxState.length === len - 2) {
            timerRef.current = setInterval(() => {
                setBoxState(prevState => prevState.slice(0, -1));
            }, 1000);
        }
        return () => {
            clearInterval(timerRef.current);
        }
    }, [boxState]);
    const boxes = Array.from(Array(Number(len)).keys());

    return (
        <div className="box-wrapper">
            {
                boxes.map((item, index) => (
                    createBox(item, index, boxClicked, boxState)
                ))
            }
            </div>
    )
}