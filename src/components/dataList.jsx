import React, { useState } from 'react';

function ListBlock(props) {
    const { id, name, detail, status , editLogic , deleteLogic} = props;
    const [isAppear, setAppear] = useState(false);
  
    const st = status.toLowerCase();
    let colorname = st === "open" ? "green" :
    st === "close" ? "red" :
    st === "pending" ? "gray" :
    null;

    

    return (
        <div
            className="list-block"
            onClick={() => setAppear(prev => !prev)} 
        
        >
            <div className="id">{id}</div>
            <div className="username">{name}</div>
            <div className={`status-color-${colorname}`}></div>
            <div className="title">{detail}</div>
            {isAppear && (
                <div className='appear-div'>
                    <div className="hover-detail">Additional details on hover</div>
                    <div className='edit-div' onClick={editLogic}>edit</div>
                    <div className='delete-div' onClick={deleteLogic}>delete</div>
                </div>
            )}
        </div>
    );
}

export default ListBlock;
