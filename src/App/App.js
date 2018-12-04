import React, { Component } from 'react';
import './App.scss';


import Module from '../components/Module/Module';




class App extends Component {





  state={
    data: {
      type: "App",
      ID: 1234,
      children: [
        {
          type: "Layout",
          ID: 3414,
          children:[
            {
              type: "Header",
              ID: 4423,
              children:
              [
                {
                  type: "Navbar",
                  ID: 44534,
                  children: null
                }
              ]
            },
            {
              type: "Switch",
              ID: 2342,
              children: [
                {
                  type: "Route",
                  ID: 2342,
                  children: [
                    {
                      type: "SinglePage",
                      ID: 2342,
                      children: null
                    },
                  ]
                },
                {
                  type: "Route",
                  ID: 23342,
                  children: [
                    {
                      type: "SingleProject",
                      ID: 2342243232,
                      children: [
                        {
                          type: "Image",
                          ID: 443345,
                          children: 
                          [
                            {
                              type: "img",
                              ID: 34234,
                              children: null
                            }
                          ]
                        }
                      ]
                    },
                  ]
                }
              ]
            },
            {
              type: "Footer",
              ID: 2342,
              children: null
            }
          ]
        }
      ]
    }
  }


  addModuleHandler = (newType, parent) => {
    const newModule = {
      type: newType,
      created:  new Date().getTime(),
    }

    newModule.ID = newModule.type +'-'+ newModule.created;

    console.log('newModule = ', newModule);

    this.findID(this.state.data, parent, newModule)
    
  }


  findID = (data, parentID, newModule) => {
    console.log('parent = ', parentID);

    if (data.children){
      data.children.map(element => {
        console.log('current element.id is = ', element.ID);
        if (element.ID === parentID){
          console.log("*************** We've got it! on ", element.type)
          return;
        } else {
          console.log('another loop');
          this.findID(element, parentID, newModule)
        }
      })
    } else {
      console.log(data, 'has no children');
      
    }
  }



  renderChildren = (data, i) => {
    console.log('data = ', data, "for i = ", i);
    

    if (data.children) {
      const jsxChildren = data.children.map(element => {

        //return (<p>{element.type} {this.renderChildren(element, i+1)}</p>)

        return (
          <Module id={element.ID}
          type={element.type}
          children={this.renderChildren(element, i+1)}
          data={element}
          key={element.ID}>
          </Module>
        )
      })
      return jsxChildren
    }
    console.log('no children for = ', data.type);
    return null;
  }



  render() {

    const content = (
      <Module
        type={this.state.data.type}
        children={this.renderChildren(this.state.data, 1)}>
      </Module>
      )


    return (
      <div className="App">
        
       {content}

       <button onClick={()=> {
         this.addModuleHandler("div", 3414)
       }}>TEST</button>

      </div>
    );
  }
}

export default App;
