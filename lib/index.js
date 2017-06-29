'use strict';
var React = require('react');
var ReactNative = require('react-native');

const { Text, View, StyleSheet } = ReactNative

const propTypes = {
  // options: React.PropTypes.array.isRequired,
  // testOptionEqual: React.PropTypes.func,
  // renderOption: React.PropTypes.func,
  // renderContainer: React.PropTypes.func,
  // onSelection: React.PropTypes.func,
}

const style =  StyleSheet.create({
  container: {
    BackgroundColor: 'red',
    width: 100,
    height: 100,
  }
})

class RadioButtons extends React.Component {
  constructor(){
    super()
    this.state = {
      title: null,
      text: null
    }
  }

  componentWillMount(){
    
  }

  componentWillReceiveProps(newProps){
    
  }

  render() {
    

    return (
      <View style={style}>
        <Text>{title}</Text>
        <Text>{text}</Text>
      </View>
    )
  }

}

RadioButtons.propTypes = propTypes;

module.exports = RadioButtons;

