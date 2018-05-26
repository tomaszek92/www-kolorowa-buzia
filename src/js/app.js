// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(solid.faUser)

import '../css/site.css';
import '../css/parallax.css';

// JS
import $ from 'jquery';
window.jQuery = window.$ = $;
import 'popper.js';
import 'bootstrap';

console.log('running');