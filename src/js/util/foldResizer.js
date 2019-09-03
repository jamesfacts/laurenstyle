import viewport from './viewport'

const adjustMetaHeight = () => {
  let bootstrapBreakpointMd = 768;


  // Check if the 'vh' styles of a magazine '.meta-wrap' are too small to contain the text elements within

  // are we in a magazine story? just a single magazine story, not a loop
  // that features a magazine story?
  if ( $('.single-article').length ) {

    // outerHeight(true) measures height including margin, in px
    let metaContentsHeight = $('.author-meta').outerHeight(true) +
                             $('.entry-title').outerHeight(true) +
                             $('.entry-subtitle').outerHeight(true);

    let headerHeight = $('.header-contain').height();
    let heroHeight = $('.image-contain').height();

    if ( viewport().width <= bootstrapBreakpointMd ) {
      $('.meta-wrap').css('min-height', metaContentsHeight + 'px');
    } else {
      // we must be in a wide layout, this means we need a to determine the negative margin in use on the image
      if ( (heroHeight + metaContentsHeight) > headerHeight ) {
          // outerHeight is actually smaller here due to a negative margin
          let heroMargin = $('.image-contain').height() - $('.image-contain').outerHeight(true);
          let wrapperMinHeight = metaContentsHeight + ( heroMargin * 1.65 );
          $('.meta-wrap').css('min-height', wrapperMinHeight);
      }
    }
  } // End magazine meta info height test
}


export default adjustMetaHeight
