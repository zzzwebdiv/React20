import React, { Component } from 'react';
//import './App.css';

import Components1 from './Components1';
import Add from './Add';


class App extends Component {
  state = {
    components1 : [
      {name: 'Ray', age: 23, eye:'black', id:1},
      {name: 'Jay', age: 23, eye:'blue', id:2},
      {name: 'Joy', age: 29, eye:'green', id:3}
    ]
  }
  addRecord = (record) =>{
    //console.log(record);
    record.id = Math.random();
    let records = [...this.state.components1, record]; //copy array components1 to this new array and push the new one
    this.setState({
      components1: records
    })
  }

  //19- Deleting Data
  deleteRecord = (id) =>{
    //console.log(id); 
    let records = this.state.components1.filter(record =>{  // remove the record with that id
      return record.id !== id;
    })
    this.setState({
      components1:records
    })
  }
  // componentDidMount(){
  //   console.log('component mounted');
  // }
  componentDidUpdate(prevProps, prevState){
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render(){
    return (
      <div className="App">
      <h1>Test</h1>
        <p>Welcome</p>
        <Components1 deleteRecord={this.deleteRecord} components1={this.state.components1}/>
        <Add addRecord={this.addRecord} />
      </div>
    );
  }
}  

export default App;
