export default {
  init() {
    // JavaScript to be fired on the home page

    // Just to be thorough, let's pull the node for the homepage 'title'
    $('header.entry-header').remove();
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS

  },
};
