import React, { Component } from 'react';
import _, {debounce} from 'lodash';

class Parent extends Component {
  
constructor(props){
    super(props);
    this.state={TextBoxValue: ""}
}   

    
   onChange= debounce((e) => {
     console.log("call");
    this.setState({ TextBoxValue:e });
  }, 500);

  render() {
    return (
      <div className="">
        <input type="text" name="TextBox"  onChange={(e)=>this.onChange(e.target.value)}
         />
         {this.state.TextBoxValue}
      </div>
    );
  }
}

export default Parent;
