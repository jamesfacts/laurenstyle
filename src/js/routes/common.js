import viewport from '../util/viewport'
import socialIcons from '../paths/social-icons';

export default {
  init() {
    // JavaScript to be fired on the home page

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS

    const footerHTML = `© Colin Beavan ${ new Date().getFullYear() } &ensp;&ensp;&ensp;&ensp;&ensp; Photography: <a href="https://www.thomasbrunot.com/">Thomas Brunot</a>`;

    let $fbAnchor = $('<a/>').attr('href', 'https://www.facebook.com/ColinBeavan/').append( socialIcons.fb );
    let $igAnchor = $('<a/>').attr('href', 'https://www.instagram.com/colinbeavan/?hl=en').append( socialIcons.ig );
    let $twitterAnchor = $('<a/>').attr('href', 'https://twitter.com/colinbeavan?lang=en').append( socialIcons.twitter );

    let $smallSocialHtml = $( '<li/>', { class: 'small-menu-social' })
                           .append( $fbAnchor.clone() )
                           .append( $igAnchor.clone() )
                           .append( $twitterAnchor.clone() );

    $('.menu.menu-primary').append( $smallSocialHtml );

    let $bigSocialHtml = $( '<div>', { class: 'big-menu-social' })
                          .append( $fbAnchor.clone() )
                          .append( $igAnchor.clone() )
                          .append( $twitterAnchor.clone() );

    $('.site-header > .wrap').append( $bigSocialHtml );

    $('.site-footer p').html( footerHTML );
  },
};
