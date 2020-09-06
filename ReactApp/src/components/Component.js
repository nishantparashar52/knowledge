import React, { Component } from 'react';
export default class CarsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carsList: [{ id: 1, name: "Ferrari" }]
        }
    }
    addNew(name) {
      const { carsList } = this.state;
      carsList.push({ name, id: carsList.length });
      // [Ferrari (1), Test (1)]
      this.setState({ carsList });
    }
  
    render() {
      console.log('render');
    
      const { carsList } = this.state;
      return (
        <div>
          {carsList.map((car, index) => {
            return (<div key={index}>{car.name}</div>);
          })}
          <button onClick={this.addNew.bind(this, "test")}>Add new</button>
        </div>
      );
    }
  }
  
