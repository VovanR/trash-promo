define([
    'jquery',
], function (
    $
) {

    'use strict';

    var $body = $(document.body);
    $('#toggler').on('click', function () {
        $body.toggleClass('stage-buynow');
    });

});
