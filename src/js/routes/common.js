import viewport from '../util/viewport';
import socialIcons from '../paths/social-icons';
import searchIcon from '../paths/search';
import searchForm from '../util/searchForm';

export default {
  init() {
    // JavaScript to be fired on the home page

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS

    const footerHTML =
      `<small class="credits"><ul><li>Photo: <a href="https://www.thomasbrunot.com/">Thomas Brunot</a></li><li class="pipe">|</li><li>Design Direction: <a href="https://www.tamarsamir.com/">Tamar Samir</a></li><li class="pipe">|</li><li>Development: <a href="https://jamesfacts.com">James White</a></li></ul></small><div class="copyright"><small>© Colin Beavan ${ new Date().getFullYear() }</small></div>`;

    let $seachLink = $( '<a/>' ).append( searchIcon );
    let $searchToggle = $( '<li/>', { class: 'search-toggle' })
                        .append( $seachLink );

    $searchToggle.click( () => {
      $('.wrap > #searchform').toggleClass('show');
    });

    let $mobileSearchWrapper = $( '<li/>', { class: 'mobile-search-wrapper' })
                                .append( searchForm );

    $('.wrap > .menu-primary').append( $mobileSearchWrapper )
                              .append( $searchToggle );

    $('.nav-primary > .wrap').append( searchForm );

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

    // Remove the 'XX comments' and 'by Colin Beavan' while retaining a date

    $('article.post').each((index, post) => {
      let entryHeader = $(post).find('.entry-header');
      let timeStamp = $(post).find('.entry-time');

      entryHeader.append(timeStamp);
    });
  },
};
