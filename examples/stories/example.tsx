import { action } from '@storybook/addon-actions'
import Sample from 'or-sample'
import React, { PureComponent } from 'react'

const handleClick = action('sample-click')

export default class Example extends PureComponent<{}, {}> {
  render() {
    return (
      <div>
        <h1>button type:</h1>
        <div>
          <Sample type="primary" onClick={handleClick}>
            ADD TO CART
          </Sample>
          <Sample onClick={handleClick}>SIGN UP</Sample>
          <Sample type="warning" onClick={handleClick}>
            DELETE
          </Sample>
          <Sample onClick={handleClick}>TOO LOOOOOOOOOOOOOOOOOOG</Sample>
        </div>
        <h1>test for image</h1>
        <div>
          <h3>img tag</h3>
          <img
            className="logo-img"
            src={require('./assets/logo@2x.png')}
            alt="logo"
          />
          <h3>background image</h3>
          <div className="logo-bg" />
        </div>
      </div>
    )
  }
}
