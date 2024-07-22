import React from "react"
import { useState } from "react"

const Content = () => {
    const [name,setName]=useState("welcome")
    function handlenamechange() {
      const names=["learn","see","do"]
      const int=Math.floor(Math.random()*3)
      setName( names[int])
    }

    // function handlenamechange() {
    //     const names=["learn","see","do"]
    //     const int=Math.floor(Math.random()*3)
    //     return names[int]
    //   }


      const handleclick=(e)=>{
        // console.log('thanks for the support');
        // here target is to target the element
        console.log(e.target.innerText);
      }
      const handleclick2=(name)=>{
        console.log(`thanks for the support ${name}`)
      }
      //to run one time
      // function namee(){
      //   return console.log("hi kural");
      // }
      // const [namee,setNamee]=useState(()=>namee())
      // const [count,setCount]=useState(99);
      

      // function increment() {
      //   setCount(prevcount=>prevcount +1)
      // }

      // function decrement() {
      //   setCount(prevcount=>prevcount - 1)
      // }

      
    return ( 
    <div className="content">
        {/* <p onDoubleClick={()=>handleclick2('kural')}>Let's {handlenamechange()} more</p>
        <button onClick={(e)=>handleclick(e)}>subscribe</button> */}

        {/* <p>content Let's {handlenamechange()} more</p>
        <button>subscribe</button><br/> */}
        {/* <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button> */}


        <p>let's {name} more</p>
        <button onClick={handlenamechange}>subscribe</button>
        
    </div>
        
     );
}
 
export default Content;