<?php
/**
 * Plugin Name: ColinStyles - Custom styles for ColinBeavan dot com
 * Plugin URI: https://github.com/jamesfacts/colin-blocks
 * Description: CSS / JS assets to modify the Genesis Infinity Pro theme.
 * Text Domain: colinstyles
 * Domain Path: resources/languages
 * Author: James White
 * Author URI: https://jamesfacts.com
 * Version: 0.1.0
 * License: MIT
 * License URI: https://opensource.org/licenses/MIT
 *
 * @package colinstyles
 */

namespace Colin\Colin_Styles;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 * Why? Because we enqueue the block assets from a subdir
 *
 * @since  0.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  0.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/resources/enqueue-scripts.php';

// Add special functions
include __DIR__ . '/resources/functions.php';
