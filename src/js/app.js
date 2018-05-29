// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF';
fontawesome.library.add(solid.faUser)
fontawesome.library.add(faFacebookF);

import 'magnific-popup/dist/magnific-popup.css';
import 'animate.css';

import '../css/site.css';
import '../css/parallax.css';
import '../css/animations.css';

// JS
import $ from 'jquery';
window.jQuery = window.$ = $;
import 'popper.js';
import 'bootstrap';
import 'magnific-popup';
import '../js/jquery.viewportchecker.min.js';

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

$(document).ready(() => {
    $('.card.single-benefit, .card.single-offer')
        .viewportChecker({
            classToAdd: 'animated bounceInRight',
            offset: 100
        });
});


console.log('running');