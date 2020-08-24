import React from 'react';
import logo from './logo.svg';
import './App.css';
//第一種寫法
function App1() {
  return (<div></div>);
}

const UnitControl = () => (
  <div className="unit-control">
    <div className="unit">Mbps</div>
    <span className="exchange-icon fa-fw fa-stack">
      <i className="far fa-circle fa-stack-2x" ></i>
      <i className="fas fa-exchange-alt fa-stack-1x" ></i>
    </span>
    <div className="unit">MB/s</div>
  </div>
)
const CardFooter = ({ value }) => {
  // STEP 1：inputValue 是使用者輸入的數值，暫時先設成 30
  let inputValue = value;
  // STEP 2：定義 criteria 物件
  let criteria;
  // STEP 3：根據 inputValue 改變要顯示的內容和背景色
  if (!inputValue) {
    criteria = {
      title: '---',
      backgroundColor: '#d3d8e2',
    };
  } else if (inputValue < 15) {
    criteria = {
      title: 'SLOW',
      backgroundColor: '#ee362d',
    };
  } else if (inputValue < 40) {
    criteria = {
      title: 'GOOD',
      backgroundColor: '#1b82f1',
    };
  } else if (inputValue >= 40) {
    criteria = {
      title: 'FAST',
      backgroundColor: '#13d569',
    };
  }
  return (
    <div
      className="card-footer"
      style={{
        backgroundColor: criteria.backgroundColor
      }}
    >
      {criteria.title}
    </div>
  )
}


//第二種寫法
const SpeedConverter = () => {
  //取出useState
  const { useState } = React;
  //設定state的初始值與改變state的方法setInputValue
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    //取出使用者輸入值
    const { value } = e.target;
    //改變state
    setInputValue(value);
  }
  return (
    <div className="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl></UnitControl>
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            {/* 取得使用者輸入的內容 */}
            <input
              type="number"
              onChange={handleInputChange}
              value={inputValue}
              className="input-number"
              min="0" />
          </div>
          <span className="angle-icon fa-2x" style={{ margintop: 30, }} >
            <i className="fas fa-angle-right" ></i>
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input
              type="text"
              className="input-number text-right"
              //顯示轉換結果
              value={inputValue / 8}
            />
          </div>
        </div>
      </div>
      <CardFooter value={inputValue}></CardFooter>
    </div >
  );
}

export default SpeedConverter;
