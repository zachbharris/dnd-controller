import React, { Component, Fragment } from 'react'
import { Button, Input } from 'semantic-ui-react';

class Dice extends Component {
  state = {
    roll: 0
  }

  handleRoll = (value, amount) => {
    const dice = Math.floor(Math.random() * value) + 1;
    this.setState({ roll: dice });
  }

  render() {
    const { roll } = this.state;
    return (
      <Fragment>
        <Input value={roll} />
        <Button onClick={() => this.handleRoll(20)} icon="random" />
      </Fragment>
    )
  }
}

export default Dice;