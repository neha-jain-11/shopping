import React from 'react';
import axios from 'axios';

class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inp: ''
    };
  }

  componentDidMount() {
    axios.get('/api/test-tt')
      .then(res => {
        console.log('res', res);
        this.setState({
          inp: res.data.name
        });
      });
  }

  render() {
    return (<div id='test-container'>
      <input type='text' id='name' val={this.state.inp} onChange={(e) => (this.setState({ inp: e.target.value }))} />
      <span> hi i am  {this.state.inp} </span>
    </div>);
  }
}

export default Test;