
import React from 'react';

export default class Counter extends React.Component
{
  constructor(props) {
    super(props);
  }
  asyncIncrement()
  {
    this.props.onAsyncIncrement().then(function(num){
        this.props.setNum(num);

    }.bind(this))
  }
  asyncDecrement()
  {
      this.props.onAsyncDecrement().then(function(num){
        this.props.setNum(num);
      
    }.bind(this))
  }
  render() {

    return(
            <p>
                Clicked: {this.props.value.value} times
                <button onClick={this.asyncIncrement.bind(this)}>
                    async +
                </button>
                <button onClick={this.asyncDecrement.bind(this)}>
                    async -
                </button>
            </p>
            );
  }
}
