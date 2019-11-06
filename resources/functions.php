<?php

namespace Colin\Colin_Styles;

/**
 * Allow all posts to appear in the blog page in chronological order,
 * regardless of sticky status
 *
 * @author James White
 * @param object $query
 */
function deprioritize_sticky_posts( $query ) {

  if ( $query->is_home() && $query->is_main_query() ) {
    $query->set( 'ignore_sticky_posts', 1 );
  }
}
add_action( 'pre_get_posts', __NAMESPACE__ . '\deprioritize_sticky_posts' );
