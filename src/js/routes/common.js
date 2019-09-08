import viewport from '../util/viewport'

export default {
  init() {
    // JavaScript to be fired on the home page

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    const footerHTML = `© Colin Beaven ${ new Date().getFullYear() } &ensp;&ensp;&ensp;&ensp;&ensp; Photography: Thomas Brunot`;
    jQuery('.site-footer p').html( footerHTML );
  },
};
