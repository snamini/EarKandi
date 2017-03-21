import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthService from '../utils/AuthService'
import styles from '../styles/styles.module.css'

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
            <div>
{/*-------------------------Register Section------------------*/}      
      <div className={styles.root}>
        <h2>Login </h2>
        <ButtonToolbar className={styles.toolbar}>
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login or Register</Button>
          <Button bsStyle="primary" onClick={auth.getToken.bind(this)}>Get Token</Button>
        </ButtonToolbar>
      </div>
{/*-------------------------Footer-----------------------*/}
                <Footer/>
                </div>
    )
  }
}

export default Login;

