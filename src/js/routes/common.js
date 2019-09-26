import viewport from '../util/viewport'

export default {
  init() {
    // JavaScript to be fired on the home page

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    const footerHTML = `© Colin Beavan ${ new Date().getFullYear() } &ensp;&ensp;&ensp;&ensp;&ensp; Photography: <a href="https://www.thomasbrunot.com/">Thomas Brunot</a>`;
    jQuery('.site-footer p').html( footerHTML );
  },
};
