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
                      ID: 2342,
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



  renderChildren = (data, i) => {
    
    console.log('data = ', data, "for i = ", i);
    

    if (data.children) {
      const jsxChildren = data.children.map(element => {

        //return (<p>{element.type} {this.renderChildren(element, i+1)}</p>)

        return (
          <Module id={element.ID}
          type={element.type}
          children={this.renderChildren(element, i+1)}
          key={element.id}>
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
        id={this.state.data.ID}
        type={this.state.data.type}
        children={this.renderChildren(this.state.data, 1)}>
      </Module>)

    return (
      <div className="App">
        
       {content}

      </div>
    );
  }
}

export default App;
