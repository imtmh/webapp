import React, { Component } from 'react';
import { Form, TextArea, Input } from 'semantic-ui-react';

class Contact extends Component {
  render() {
    return (
      <form className="ui form">
        <h4 className="ui dividing header">Got Questions?</h4>
        <div className="two fields">
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <input type="text" name="first-name" placeholder="First Name" />
              </div>
              <div className="field">
                <input type="text" name="last-name" placeholder="Last Name" />
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <label>Description</label>
          <textarea />
        </div>

        <div className="ui error message">
          <div className="header">We noticed some issues</div>
        </div>
        <div className="ui submit button">Send</div>
      </form>
    );
  }
}
export default Contact;
