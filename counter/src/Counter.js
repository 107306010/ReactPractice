import React from 'react';
const { useState } = React;//透過 useState 讓 React 知道有東西變了

const Counter = (props) => {
    const { startingAt } = props;

    const [number, setNumber] = useState(startingAt);

    const handleNumber = type => () => { //return可省略
        setNumber(type === 'increment' ? number + 1 : number - 1)
    }
    //最初始寫法
    const handleClicked = type => {
        return function () {
            if (type === 'increment') {
                setNumber(number + 1);
            }
            if (type === 'decrement') {
                setNumber(number - 1);
            }
        }
    }
    //精簡一點
    const handleClicked1 = type => () => {
        if (type === 'increment') {
            setNumber(number + 1);
        }
        if (type === 'decrement') {
            setNumber(number - 1);
        }
    }
    return (
        <div className="container">
            <div className="chevron chevron-up " //{ number<10 && (<div...../> )}//隱藏整個DOM
                style={{ visibility: number >= startingAt * 5 && 'hidden', }} //隱藏CSS(元素仍看得到)
                onClick={handleNumber('increment')} />   {/* onClick = { 
                                                                ()=>{ setNumber(number +1); }
                                                            } */}
            <div className="number">{number}</div>
            <div className="chevron chevron-down"
                style={{ visibility: number <= 0 && 'hidden', }}
                onClick={handleNumber('decrement')} />
        </div>
    )
}
export default Counter;