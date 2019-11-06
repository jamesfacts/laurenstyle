export default {
  init() {
    // JavaScript to be fired on the home page

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS

    // makin' a custom 'footer' for every blog post!

    const getHostname = (url) => {
      return new URL(url).hostname;
    }

    let colinUrl = getHostname(window.location.href);

    const allPostsHtml = `<div class="wp-block-button aligncenter landing-cta-btn all-posts-btn"><a class="wp-block-button__link" href="https://${ colinUrl }/blog/">SEE ALL POSTS</a></div>`;

    const signupEmail =
    `<div class="in-post-email">
				<h4 class="email-hed">Join the Good Life Conversation</h4>
					<p class="join-in-text blog-signup">I'm excited to let you know when I have news that will help you in your quest for a safe, healthy, happy, meaningful life that also helps the world.</p>

          <form action="https://colinbeavan.us20.list-manage.com/subscribe/post?u=036e19ab640b0668e258a31d2&amp;id=694d104a77" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll" class="mc-field-container">

          		<div class="mc-field-group">
          			<!-- <label for="mce-EMAIL">Email Address </label> -->
          			<input type="email" value="" placeholder="Your email address" name="EMAIL" class="required email mc-input" id="mce-EMAIL">
          		</div>

              <!-- <div id="mce-responses">
          			<div class="response" id="mce-error-response" style="display:none"></div>
          			<div class="response" id="mce-success-response" style="display:none"></div>
          		</div> -->

              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_036e19ab640b0668e258a31d2_694d104a77" tabindex="-1" value=""></div>

              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn mc-button">
            </div>
          </form>
			</div>`;

    $('.entry-content').append(allPostsHtml);
    $('.entry-content').append(signupEmail);
  },
};
