import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const Lineitem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className='item' key={item.id}>
            <input
                type='checkbox'
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>
            {/* <button>delete</button> */}
            <FaTrashAlt role='button'
                onClick={() => handleDelete(item.id)}
                tabIndex={"0"} />
        </li>
    );
}

export default Lineitem;