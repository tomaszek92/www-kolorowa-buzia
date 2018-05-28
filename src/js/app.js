// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(solid.faUser)

import 'magnific-popup/dist/magnific-popup.css';

import '../css/site.css';
import '../css/parallax.css';
import '../css/animations.css';

// JS
import $ from 'jquery';
window.jQuery = window.$ = $;
import 'popper.js';
import 'bootstrap';
import 'magnific-popup';

$('.gallery-item').magnificPopup({
    type: 'image',
    tClose: 'Zamknij',
    tLoading: 'Wczytywanie...',
    gallery: {
        enabled: true,
        tPrev: 'Poprzedni',
        tNext: 'Następny',
        tCounter: '<span class="mfp-counter">%curr% z %total%</span>'
    },
    callbacks: {
        beforeOpen: function () {
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = 'mfp-3d-unfold';
        }
    }
});

console.log('running');