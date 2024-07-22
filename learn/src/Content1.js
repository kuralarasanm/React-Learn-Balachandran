import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
const Content1 = () => {
    const [items,setItems]=useState(
        [
        {
            id:1,
            checked: true,
            item:"practice coding"
        },
        {
            id:2,
            checked: false,
            item:"play cricket"
        },
        {
            id:3,
            checked: false,
            item:"read about react"
        }
    ])
    // const numbers=[-2,-1,0,1,2,3,]
    // const itemss=numbers.filter(n=>n>=0).map(n=>({number:n}))
    // console.log(itemss);

    const handlecheck=(id)=>{
        // console.log(`id:${id}`)
        const listItems= items.map((item)=> 
        item.id===id ? {...item, checked:!item.checked} :item)
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems))
    }
    const handledelete=(id)=>{
        const listItems= items.filter((item)=>
    item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
    }
    return ( 
        <div className='content1'>
            <h1>Content1</h1> 
            {(items.length)?(
             <ul>
                {items.map((item) =>(
                    <li className='item' key={item.id}>
                        <input
                        type='checkbox'
                        onChange={()=> handlecheck(item.id)}
                        checked={item.checked}
                        />
                        <label 
                        style={(item.checked)?{textDecoration:'line-through'}:null}
                        onDoubleClick={()=>handlecheck(item.id)}
                        >{item.item}</label>
                        {/* <button>delete</button> */}
                        <FaTrashAlt role='button'
                         onClick={()=> handledelete(item.id)}
                         tabIndex={"0"} />
                    </li>
                ))}
            </ul>
            ):( <p>your list is empty</p>)}
        </div>
     );
}
 
export default Content1;