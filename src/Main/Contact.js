import React, { Component } from 'react';
import { Form, TextArea, Input } from 'semantic-ui-react';

class Contact extends Component {
  render() {
    return (
      <form class="ui form">
        <h4 class="ui dividing header">Got Questions</h4>
        <div class="two fields">
          <div class="field">
            <label>Name</label>
            <div class="two fields">
              <div class="field">
                <input type="text" name="first-name" placeholder="First Name" />
              </div>
              <div class="field">
                <input type="text" name="last-name" placeholder="Last Name" />
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label>Description</label>
          <textarea />
        </div>

        <div class="ui error message">
          <div class="header">We noticed some issues</div>
        </div>
        <div class="ui submit button">Register</div>
      </form>
    );
  }
}
export default Contact;
