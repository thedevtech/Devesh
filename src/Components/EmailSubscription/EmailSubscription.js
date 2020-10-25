import React from 'react';

const EmailSubscription = () => {
    return (
      <div id="mc_embed_signup">
         <form acion="https://gmail.us2.list-manage.com/subscribe/post?
           u=f8079b53284429a5fc4d009a3b&amp;id=4a013a5ea4"
           method="post"
           id="mc-embedded-subscribe-from"
           name="mc-embedded-subscribe-form"
           className="validate"
           target="_blank"
           noValidate>
        <div is="mc embeded signup scroll">
            <label for="mce-Email">subscribe</label>
            <input type="email"
            name="EMAIL"
            class="email"
            id="mce-EMAIL"
            placeholder="email address"
            required></input>
        <div className="clear">
            <input
            type="Submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
            >
            </input>
            
        </div>
        </div>
         </form>
      </div>
    );
}
           
export default EmailSubscription;