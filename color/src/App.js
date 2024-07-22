// import logo from './logo.svg';
// // import './App.css';
// import Square from './Square';
// import Input from './Input';
// import {useState} from 'react'
// function App() {
//   const [colorvalue,setColorValue]=useState('')
//   const [hexValue,setHexValue]=useState('')
//   const [isDarkText,setIsDarkText]=useState(true)
//   return (
//     <div className="App">
//       <Square
//       colorValue={colorvalue}
//       hexValue={hexValue}
//       setColorValue={setColorValue}
//       />
//       <Input 
//       colorValue={colorvalue}
//       setColorValue={setColorValue}
//       setHexValue={setHexValue}
//       isDarkText={isDarkText}
//       setIsDarkText={setIsDarkText}
//        />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Square from "./Square";
import Input from "./Input";

function App() {
  const [colorValue,setColorValue]=useState('');
  const[hexValue,setHexValue]=useState('');
  const [isDarkText,setIsDarkText]=useState(true);
  return (
    <div className="App">
     <Square
     colorValue={colorValue}
     hexValue={hexValue}
     isDarkText={isDarkText}
     />
     <Input
     colorValue={colorValue}
     setColorValue={setColorValue}
     setHexValue={setHexValue}
     isDarkText={isDarkText}
     setIsDarkText={setIsDarkText}
     />
    </div>
  );
}

export default App;