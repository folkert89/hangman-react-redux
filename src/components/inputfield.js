import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './inputfield.css'


class InputField extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }
  render() {
    return (
      <h1 className="InputField">{ this.props.content }</h1>
    )
  }
}

export default InputField
