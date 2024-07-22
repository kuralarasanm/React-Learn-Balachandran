import React from 'react'
import Itemlist from './Itemlist';


const Content1 = ({ items, handleCheck, handleDelete }) => {

    return (
        <div className='content1'>
            <h1>Content1</h1>
            {(items.length) ? (
                <Itemlist
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (<p>your list is empty</p>)}
        </div>
    );
}

export default Content1;