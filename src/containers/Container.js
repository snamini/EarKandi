 import React from 'react'
import { Jumbotron } from 'react-bootstrap'
//import styles from '../styles/styles.module.css'

export class Container extends React.Component {
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }

    return (
      <Jumbotron>

        {children}
      </Jumbotron>
    )
  }
}

export default Container;


