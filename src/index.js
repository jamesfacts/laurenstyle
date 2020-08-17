/** import external dependencies */
import 'jquery';

/** import local dependencies */
import Router from './js/util/Router';
import common from './js/routes/common';
import home from './js/routes/home';
// import singlePost from './js/routes/singlePost';

/**
 * Populate Router instance with DOM routes
 * @type {Router} routes - An instance of our router
 */
const routes = new Router({
  /** All pages */
  common,
  /** Home page */
  home,
});

/** Load Events */
jQuery(document).ready(() => routes.loadEvents());
