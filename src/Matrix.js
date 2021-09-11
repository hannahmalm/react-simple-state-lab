import React, { Component } from 'react';
//need to import the cell component 
import Cell from './Cell.js'


export default class Matrix extends Component {

  //genRow instance method
  //every row will map through its vals to create an array of <div className="cell"> in JSX
  //Once you have made your Cell component, replace the return value in genRow's map to: <Cell value={val} />
  //delete out the <div> in the vals map
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  }
  
  //genMatrix instance method
  //This method maps the values to an array of JSX
  //Every row in this.props.values will create a <div className="row">
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  //render method shows us what our Matrix component looks like
  //its has a <div> tag with id=matrix
  //inside the div invoke the genMatrix() instance

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

//Make a default values prop for Matrix, which is a 10x10 array filled with the values '#F00' (red). 
//return a new array
//the array should have 10 values
//fill the array with the newly defined variable, defRow
Matrix.defaultProps = {
  values:(() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}

//The is what will print out in HTML

/* <div id="root">
  <div id="matrix">
    <div class="row">
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
        ...
    </div>
    <div class="row">
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
        ...
    </div>
  </div>
</div> */