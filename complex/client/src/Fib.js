import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndicies: [],
    values: [],
    value: ''
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndices();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.date });
  }

  async fetchIndicies() {
    const seenIndicies = await axios.get('/api/values/all');
    this.setState({
      seenIndicies: seenIndicies.data
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    await axios.post('/api/value', {
      index: this.state.value
    });
    this.setState({ value: '' });
  };

  renderSeenIndicies() {
    return this.state.seenIndicies.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];
    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          />
          <button>Submit</button>
        </form>

        <h3>Indicies I have seen:</h3>
        {this.renderSeenIndicies()}

        <h3>Calculated Values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
