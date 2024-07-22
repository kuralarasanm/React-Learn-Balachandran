
import { FaTrashAlt } from "react-icons/fa";
import Lineitem from "./Lineitem";
const Itemlist = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                // <li className='item' key={item.id}>
                //     <input
                //         type='checkbox'
                //         onChange={() => handleCheck(item.id)}
                //         checked={item.checked}
                //     />
                //     <label
                //         style={(item.checked) ? { textDecoration: 'line-through' } : null}
                //         onDoubleClick={() => handleCheck(item.id)}
                //     >{item.item}</label>
                //     {/* <button>delete</button> */}
                //     <FaTrashAlt role='button'
                //         onClick={() => handleDelete(item.id)}
                //         tabIndex={"0"} />
                // </li>

                <Lineitem 
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
}

export default Itemlist;