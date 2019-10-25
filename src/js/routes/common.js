import viewport from '../util/viewport'
import fbSource from '../../img/fb.png';

export default {
  init() {
    // JavaScript to be fired on the home page

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    const footerHTML = `© Colin Beavan ${ new Date().getFullYear() } &ensp;&ensp;&ensp;&ensp;&ensp; Photography: <a href="https://www.thomasbrunot.com/">Thomas Brunot</a>`;

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
    const fbImg = new Image(28, 28);
    const igImg = new Image(28, 28);
    const twitterImg = new Image(28, 28);
    fbImg.src = fbSource;
    igImg.src = fbSource;
    twitterImg.src = fbSource;
    // element.appendChild(img);

    // const socialHTML = '<li><a href="https://facebook.com">' + fbImg + '</a></li>';

    let $fbAnchor = $('<a/>').attr('href', 'https://facebook.com');
    $fbAnchor.append( fbImg );

    $('.menu.menu-primary').append( $fbAnchor );
    $('.site-footer p').html( footerHTML );
  },
};
