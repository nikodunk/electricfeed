import React from 'react';


export default class ListingCrumb extends React.Component {


  render() {
    return (
      <div class="box" id="theForm">
        
        <p class=""><b>Add your EV Listing:</b></p>
        <form action="https://formspree.io/hello@sunboxlabs.com"
              method="POST"
              id="formspree">
            <input type="text" placeholder="Your Car" name="name" />&nbsp;
            <input type="email" placeholder="your email" name="_replyto" />&nbsp;
            <button type="submit" value="Submit"><b>+ Submit</b></button>
        </form>

      </div>
    )
  }
}



