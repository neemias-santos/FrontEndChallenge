/**
 * Created by Neemias on 30/09/2017.
 */

$(document).ready(function () {
    sizeDiv('#top1');
    sizeDiv('#top2');
    sizeDiv('#menu');
    sizeDiv('#middle');
    sizeDiv('#footer');

    //language=JQuery-CSS
    $(window).resize(function () {
        sizeDiv('#top1');
        sizeDiv('#top2');
        sizeDiv('#menu');
        sizeDiv('#middle');
        sizeDiv('#footer');

    });

    print_me('------------Fist call------------');
    print_me('foo', 'bar');
    print_me('------------Second call------------');
    print_me('foo', ['bar', 'baz']);
    print_me('------------Third call------------');
    print_me('foo')('bar');
});

function sizeDiv(id) {
    var top1 = $(id);
    $(id).find('p').html(top1.outerHeight() + 'x' + top1.outerWidth());
}

function print_me(data, arr) {
    function second_print_me(seconddata) {
        console.log(seconddata);
    }

    console.log(data);
    if (Array.isArray(arr) && arr !== null) {
        for (var i = 0, len = arr.length; i < len; i++) {
            console.log(arr[i]);
        }
    } else if (typeof arr !== 'undefined'){
        console.log(arr);
    }

    return second_print_me
}

