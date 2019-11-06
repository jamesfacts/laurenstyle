<?php

namespace Colin\Colin_Styles;

/**
 * Create a shortcode to embed a mailchimp subscribe form
 *
 * @author James White
 * @param object $atts
 */

function mcSubForm( $atts ) {
   $atts = shortcode_atts( ['action-url' => 'https://colinbeavan.us20.list-manage.com/subscribe/post?u=036e19ab640b0668e258a31d2&amp;id=694d104a77',
                           'sub-call' => 'I\'m excited to let you know when I have news that will help you in your quest for a safe, healthy, happy, meaningful life that also helps the world.',
                           'hed' => 'Join the Good Life Conversation' ],
                           $atts) ;

  $markup = '<div class="shortcode-email">';
  $markup .= '<h4 class="email-hed">' . $atts['hed'] . '</h4>';
  $markup .= '<p class="join-in-text blog-signup">' .
              $atts['sub-call'] . '</p>';

  $markup .= '<form action="' . $atts['action-url'] .  '" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>';
  $markup .= '<div id="mc_embed_signup_scroll" class="mc-field-container">';
  $markup .= '<div class="mc-field-group"> <!-- <label for="mce-EMAIL">Email Address </label> --> <input type="email" value="" placeholder="Your email address" name="EMAIL" class="required email mc-input" id="mce-EMAIL"></div>';

  $markup .= '<!-- <div id="mce-responses"><div class="response" id="mce-error-response" style="display:none"></div> <div class="response" id="mce-success-response" style="display:none"></div> </div> -->';

  $markup .= '<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_036e19ab640b0668e258a31d2_694d104a77" tabindex="-1" value=""></div>';

  $markup .= '<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn mc-button"> </div> </form> </div>';

  return $markup;

}

add_shortcode( 'mc-embed', __NAMESPACE__ . '\mcSubForm' );
