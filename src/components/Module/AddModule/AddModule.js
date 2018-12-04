import React, {Component} from 'react';

import './AddModule.scss';

class AddModule extends Component{

    state = {
        formBoxVisible: false,
    }


    addButtonHandler = () => {
        console.log("button clicked");
        
        console.log('this.props.data = ', this.props.data);
        
        

        const formBoxVisibility = !this.state.formBoxVisible;

        this.setState({
            formBoxVisible: formBoxVisibility
        })


    }

    render(){

    
        return (
            <div className="addModule">
                <div onClick={this.addButtonHandler} className="buttonAdd">
                    +
                </div>
        
                <div className="formBox" hidden={!this.state.formBoxVisible}>
                    <form>
                        <input type="text">
                        
                        </input>

                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}


export default AddModule;

