import React from 'react'
import Button from './Button'

import './Caculator.less'

export default React.createClass({
  getInitialState: function () {
    return {
      screen: '_',
      keyboard: [
        {letter: 'C', position: [0, 0], size: [1, 1]},
        {letter: '±', position: [0, 1], size: [1, 1]},
        {letter: '/', position: [0, 2], size: [1, 1]},
        {letter: '×', position: [0, 3], size: [1, 1]},
        {letter: '7', position: [1, 0], size: [1, 1]},
        {letter: '8', position: [1, 1], size: [1, 1]},
        {letter: '9', position: [1, 2], size: [1, 1]},
        {letter: '-', position: [1, 3], size: [1, 1]},
        {letter: '4', position: [2, 0], size: [1, 1]},
        {letter: '5', position: [2, 1], size: [1, 1]},
        {letter: '6', position: [2, 2], size: [1, 1]},
        {letter: '+', position: [2, 3], size: [1, 1]},
        {letter: '1', position: [3, 0], size: [1, 1]},
        {letter: '2', position: [3, 1], size: [1, 1]},
        {letter: '3', position: [3, 2], size: [1, 1]},
        {letter: '0', position: [4, 0], size: [2, 1]},
        {letter: '.', position: [4, 2], size: [1, 1]},
        {letter: '=', position: [3, 3], size: [1, 2]}
      ]
    }
  },
  onPress: function (letter) {

  },
  render: function () {
    var that = this
    var buttons = this.state.keyboard.map(function (key) {
      return (<Button
                onPress={that.onPress}
                key={key.letter}
                letter={key.letter}
                position={key.position}
                size={key.size}></Button>)
    })
    return (
      <div className={'caculator'}>
        <div className="screen">{this.state.screen}</div>
        <div className="keyboard">
          {buttons}
        </div>
      </div>
    )
  }
})
