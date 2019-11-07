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


/**
 * Create a shortcode to embed a Genesis search form
 *
 * @author James White
 * @param string The form markup.
 * @param string Submit button value.
 * @param string Form label value.
 */

function genesisSearch( $atts ) {
  $atts = shortcode_atts( ['submit' => 'Search',
                          'placeholder' => 'Search here. . .' ],
                          $atts) ;

  $search_query = apply_filters( 'the_search_query', get_search_query() );

  $search_button_text = $atts['submit'] ?? apply_filters( 'genesis_search_button_text', esc_attr__( 'Search', 'genesis' ) );

  $search_text = $atts['placeholder'] ?? apply_filters( 'genesis_search_text', __( 'Search this website', 'genesis' ) );

  $search_label = apply_filters( 'genesis_search_form_label', '' );

  $strings = [
  	'label'        => $search_label,
  	'placeholder'  => $search_query ?: $search_text,
  	'input_value'  => $search_query,
  	'submit_value' => $search_button_text,
  ];

  $form = new \Genesis_Search_Form( $strings );

  // Used for filter param 2.
  $search_query_or_text = $search_query ?: $search_text;

  // echo "****";
  // var_dump($search_query_or_text);

  $searchform = apply_filters( 'genesis_search_form', $form->get_form(),
    $search_query_or_text, $strings['submit_value'], $strings['label'] );

  echo $searchform;
}

add_shortcode( 'genesis-search', __NAMESPACE__ . '\genesisSearch' );
