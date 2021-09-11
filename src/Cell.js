import React, { Component } from 'react';

//he Cell component will give us our first chance to use state
//We want each Cell to keep track of a single state value: color, (which will be a 3 digit hex value i.e. '#FFF')


//Create a click listener which, when activated, updates the state to the following hex value: '#333'
export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value}
        } // ...define initial state with a key of 'color' set to the 'value' prop


    clickListener = () => {
        this.setState({
            color: '#333'
        })
    }

    //Cell should render a single <div> with a className of cell
    //In render, the cell should set the background color in-line for the <div> by adding the following attribute: style={{backgroundColor: '#FFF'}} 
        //#FFF will be equal to this.state.color
    //Create a click listener which, when activated, updates the state to the following hex value: '#333'

    render() {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.clickListener}>

            </div>
        )
    }

}