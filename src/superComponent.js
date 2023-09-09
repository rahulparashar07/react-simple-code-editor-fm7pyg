import React, { Component } from 'react';

class ApiCall extends Component {
  constructor() {
    super();
    this.state = {
      title: 'hiinr',
    };
  }

  UNSAFE_componentWillUpdate() {
    console.log('hiii i am updated');
  }

  render() {
    const todo = this.state;
    return (
      <div>
        <p>API call : {this.props.apiCall}</p>
        Todo title : <p>{this.state.title}</p>
        Todo completed : <p>{todo.completed === true ? 'true' : 'false'}</p>
        <button onClick={() => (this.setState({ title: this.state.title+'ji' }))}>
          jiiii{' '}
        </button>
      </div>
    );
  }
}

export default ApiCall;
