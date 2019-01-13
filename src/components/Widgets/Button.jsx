import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export default class Button extends Component {
  static displayName = 'Button'

  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    flat: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    secondary: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    withinInput: PropTypes.bool
  }

  static defaultProps = {
    disabled: false,
    error: false,
    flat: false,
    loading: false,
    secondary: false,
    type: 'button',
    withinInput: false
  }

  render() {
    const { children } = this.props

    return (
      <StyledButton {...this.props} className="Button">
        {children}
      </StyledButton>
    )
  }
}

const StyledButton = styled.button`
  background-color: #f9f9f9;
  border: 1px solid #00aafa;
  border-radius: 4px;
  color: white;
  padding: 6px 12px;
  text-transform: capitalize;
  font-size: 14px;
  cursor: pointer;

  ${props =>
    props.secondary &&
    css`
      background-color: white;
      color: #00aafa;
    `}

  ${props =>
    props.flat &&
    css`
      background-color: inherit;
      border: none;
      color: #00aafa;
      font-weight: ${props.secondary ? 'inherit' : 'bold'};
    `};

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}

  ${props =>
    props.withinInput &&
    css`
      margin: 4px;
    `}

  ${props =>
    props.error &&
    css`
      border: 1px solid #f66d6f;
      background-color: #f66d6f;
    `}
`
