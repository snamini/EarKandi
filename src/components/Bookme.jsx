import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import './Bookme.css';

export default class Bookme extends React.Component {

  render() {
    return (
        <Modal
  header='Modal Header'
  trigger={
    <Button waves='light'>Book Me</Button>
  }>
  
<div id="modal">
  <div id="header">
    <h1>Enter Payment Details</h1>
  </div>
  <div className="object"> <img src="http://www.cbwconline.com/IMG/Codepen/Couch.jpg"/><span>$2,587.98</span></div>
  <form>
    <input type="radio" id="Master" name="card" required="required"/>
    <label className="card" for="Master"></label>
    <input type="radio" id="Visa" name="card" required="required"/>
    <label className="card" for="Visa"></label>
    <input type="radio" id="Discover" name="card" required="required"/>
    <label className="card" for="Discover"></label><br/>
    <label for="name">Name  </label>
    <input type="text" placeholder="John Grey" id="name" Required="Required"/><br/>
    <label for="number">Card Number </label>
    <input type="number" maxlength="16" placeholder="2872 1369 4201 9432" id="number" Required="Required"/><br/>
    <label for="expire">Expiration</label>
    <input type="text" maxlength="5" placeholder="MM/YY" id="expire" Required="Required"/>
    <label for="cvc">CVC</label>
    <input type="number" maxlength="3" placeholder="385" id="cvc" Required="Required"/><br/>
    <button type="submit">Confirm Pament of $2,587.98</button>
  </form>
</div>
</Modal>
    );
  }
}
