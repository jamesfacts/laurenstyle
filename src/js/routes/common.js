import viewport from '../util/viewport';
import socialIcons from '../paths/social-icons';
import searchIcon from '../paths/search';
import searchForm from '../util/searchForm';

export default {
  init() {

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS

    const footerHTML =
      `<small class="credits">Copyright ${ new Date().getFullYear() } © Lauren Krauze. All Rights Reserved.</small></div>`;

    let $seachLink = $( '<a/>' ).append( searchIcon );
    let $searchToggle = $( '<li/>', { class: 'search-toggle' })
                        .append( $seachLink );

    $searchToggle.click( () => {
      $('.wrap > #searchform').toggleClass('show');
    });

    let $mobileSearchWrapper = $( '<li/>', { class: 'mobile-search-wrapper' })
                                .append( searchForm );

    // $('.wrap > .menu-primary').append( $mobileSearchWrapper )
    //                           .append( $searchToggle );

    // $('.nav-primary > .wrap').append( searchForm );

    let $fbAnchor = $('<a/>').attr('href', 'https://facebook.com/lauren').append( socialIcons.fb );
    let $igAnchor = $('<a/>').attr('href', 'https://instagram.com/laurenkrauze').append( socialIcons.ig );
    let $emailAnchor = $('<a/>').attr('href:', 'mailto:laurenkz@gmail.com').append( socialIcons.email );

    let $smallSocialHtml = $( '<li/>', { class: 'small-menu-social' })
                           .append( $fbAnchor.clone() )
                           .append( $igAnchor.clone() )
                           .append( $emailAnchor.clone() );

    $('.menu.menu-primary').append( $smallSocialHtml );

    let $bigSocialHtml = $( '<div>', { class: 'big-menu-social' })
                          .append( $fbAnchor.clone() )
                          .append( $igAnchor.clone() )
                          .append( $emailAnchor.clone() );

    $('.site-header > .wrap').append( $bigSocialHtml );

    $('.site-footer p').html( footerHTML );
  },
};
