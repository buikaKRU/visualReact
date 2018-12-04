import React from 'react';

import './Module.scss';
import AddModule from './AddModule/AddModule';


const module = (props) => {

    return(
        <div className="module">
            <div className="moduleName">
                {"<"+props.type+">"}
            </div>
            <p>ID: {props.id}</p>

            <div className="moduleContent">
                {props.children}
               <AddModule data={props.data}>

               </AddModule>
            </div>
        </div>
    )
}

export default module;