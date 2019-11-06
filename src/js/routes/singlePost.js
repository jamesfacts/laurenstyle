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

    const allPostsHtml = `<div class="wp-block-button aligncenter landing-cta-btn"><a class="wp-block-button__link" href="https://${ colinUrl }/blog/">SEE ALL POSTS</a></div>`;

    $('.entry-content').append(allPostsHtml);
  },
};
