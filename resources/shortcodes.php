<?php

namespace Lauren\Lauren_Style;

/**
 * Create a shortcode to embed a mailchimp subscribe form
 *
 * @author James White
 * @param object $atts
 */

function mcSubForm($atts)
{
    $atts = shortcode_atts(
        ['action-url' => 'https://laurenkrauze.us17.list-manage.com/subscribe/post?u=05bb414ea67886909d9c6ef90&amp;id=d357f69d5b',
                           'sub-call' => 'I\'m excited to share new writing.',
                           'hed' => 'Sign Up For My Newsletter' ],
        $atts
    ) ;

    $markup = '<div class="shortcode-email">';
    $markup .= '<h4 class="email-hed">' . $atts['hed'] . '</h4>';
    $markup .= '<p class="join-in-text blog-signup">' .
              $atts['sub-call'] . '</p>';

    $markup .= '<form action="' . $atts['action-url'] .  '" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>';
    $markup .= '<div id="mc_embed_signup_scroll" class="mc-field-container">';
    $markup .= '<div class="mc-field-group"> <label class="sr-only" for="mce-EMAIL">Email Address </label> <input type="email" value="" placeholder="Your email address" name="EMAIL" class="required email mc-input" id="mce-EMAIL"></div>';
    $markup .= '<div class="mc-field-group"> <label class="sr-only" for="mce-FNAME">First Name </label> <input type="text" value="" name="FNAME" class="" id="mce-FNAME" placeholder="First Name"></div>';
    $markup .= '<div class="mc-field-group"> <label class="sr-only" for="mce-LNAME">Last Name </label><input type="text" value="" name="LNAME" class="" id="mce-LNAME" placeholder="Last Name"></div>';

    $markup .= '<!-- <div id="mce-responses"><div class="response" id="mce-error-response" style="display:none"></div> <div class="response" id="mce-success-response" style="display:none"></div> </div> -->';

    $markup .= '<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_05bb414ea67886909d9c6ef90_d357f69d5b" tabindex="-1" value=""></div>';

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

function genesisSearch($atts)
{
    $atts = shortcode_atts(
        ['submit' => 'Search',
                          'placeholder' => 'Search here. . .' ],
        $atts
    ) ;

    $search_query = apply_filters('the_search_query', get_search_query());

    $search_button_text = $atts['submit'] ?? apply_filters('genesis_search_button_text', esc_attr__('Search', 'genesis'));

    $search_text = $atts['placeholder'] ?? apply_filters('genesis_search_text', __('Search here. . .', 'genesis'));

    $search_label = apply_filters('genesis_search_form_label', '');

    $strings = [
    'label'        => $search_label,
    'placeholder'  => $search_query ?: $search_text,
    'input_value'  => $search_query,
    'submit_value' => $search_button_text,
  ];

    $form = new \Genesis_Search_Form($strings);

    // Used for filter param 2.
    $search_query_or_text = $search_query ?: $search_text;

    $searchform = apply_filters(
        'genesis_search_form',
        $form->get_form(),
        $search_query_or_text,
        $strings['submit_value'],
        $strings['label']
    );

    return $searchform;
}

// add_shortcode( 'genesis-search', __NAMESPACE__ . '\genesisSearch' );
