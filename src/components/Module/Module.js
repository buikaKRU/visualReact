import React from 'react';

import './Module.scss';
import ButtonAdd from './ButtonAdd/ButtonAdd';


const module = (props) => {

    return(
        <div className="module">
            <div className="moduleName">
                {"<"+props.type+">"}
            </div>
            <p>ID: {props.id}</p>

            <div className="moduleContent">
                {props.children}
              <ButtonAdd/>  
            </div>
        </div>
    )
}

export default module;