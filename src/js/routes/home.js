export default {
  init() {
    // JavaScript to be fired on the home page

    // Just to be thorough, let's pull the node for the homepage 'title'
    $('header.entry-header').remove();
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    const emailForm = `<form action="https://colinbeavan.us20.list-manage.com/subscribe/post?u=036e19ab640b0668e258a31d2&amp;id=694d104a77" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll" class="mc-field-container">

    		<div class="mc-field-group">
    			<!-- <label for="mce-EMAIL">Email Address </label> -->
    			<input type="email" value="" placeholder="Your email address" name="EMAIL" class="required email mc-input" id="mce-EMAIL">
    		</div>

        <!-- <div id="mce-responses">
    			<div class="response" id="mce-error-response" style="display:none"></div>
    			<div class="response" id="mce-success-response" style="display:none"></div>
    		</div> -->

        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->

        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_036e19ab640b0668e258a31d2_694d104a77" tabindex="-1" value=""></div>

        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn mc-button">
      </div>
    </form>`;

    $('.home-email .colin-quote').append(emailForm);
  },
};
