import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div class="field">
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mpzljllv"
        method="POST"
      >

        <div class="control has-icons-left">
        <input class="input is-medium" type="email" placeholder="Email" name="email"/>
        <FontAwesomeIcon icon={faEnvelope} className="icon is-left"/>
        </div>
        <br></br>

        <div class="field">
        <div class="control">
        <textarea class="textarea" placeholder="Your message" name="message"></textarea>
        </div>
        </div>
        {status === "SUCCESS" ? <h2 class="subtitle"> Thanks! </h2> :
                 <div class="field">
                 <p class="control">
                 <button class="button is-success">
                    Send
                 </button>
                 </p>
                </div> }
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}