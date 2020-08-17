<?php

namespace Lauren\Lauren_Style;

function enqueue_lauren_style()
{
    $style_path = '/dist/style.css';
    $script_path = '/dist/index.js';

    wp_enqueue_style(
        'lauren-styles-css',
        _get_plugin_url() . $style_path,
        [ ],
        filemtime(_get_plugin_directory() . $style_path)
    );

    wp_enqueue_script(
        'lauren-styles-js',
        _get_plugin_url() . $script_path,
        [ ],
        filemtime(_get_plugin_directory() . $script_path)
    );
}

add_action('wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_lauren_style', 0);

function add_google_font_raleway()
{
    wp_enqueue_style('google-font-raleway', 'https://fonts.googleapis.com/css?family=Raleway:200,300,400,500&display=swap', false);
}

// add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\add_google_font_raleway' );

//Page Slug Body Class
function add_slug_body_class($classes)
{
    global $post;

    if (isset($post)) {
        $classes[] = $post->post_type . '-' . $post->post_name;
    }

    return $classes;
}

add_filter('body_class', __NAMESPACE__ . '\add_slug_body_class');
