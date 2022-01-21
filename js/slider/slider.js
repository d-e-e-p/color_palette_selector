
// for node:
//import noUiSlider from 'nouislider';
//
// see https://refreshless.com/nouislider/more/
//  to destroy and  recreate with 2 ranges


//import noUiSlider from 'https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.0/nouislider.min.js';
import { UpdateGraphs } from './update-graph.js';
import { UpdateImages } from './update-images.js';
import { UpdateLinks  } from './update-links.js';
var update_graphs = new UpdateGraphs();
var update_images = new UpdateImages();
var update_links  = new UpdateLinks();


// 0-100 slider

var range = document.getElementById('slider-mesh-oneside');

noUiSlider.create(range, {
    orientation: "vertical",
    direction: 'rtl',
    start: [0, 100],
    connect: true,
    step: 10,
    range: {
        'min': [0],
        'max': [100]
    },

    // Move handle on tap, bars are draggable
    behaviour: 'tap-drag',
    tooltips: true,

        format: {
        // 'to' the formatted value. Receives a number.
        to: function (value) {
            return Math.round(value*100)/100;
        },
        // 'from' the formatted value.
        // Receives a string, should return a number.
        from: function (value) {
            return Number(value);
        }
    },


    // Show a scale with the slider
    /*
    pips: {
        mode: 'steps',
        stepped: true,
        density: 10
    },
    */

    pips: {
        mode: 'values',
        values: [0,50,100],
        density: 10,
        stepped: true
    }

});

// create connection elements see https://refreshless.com/nouislider/examples/
// .noUi-connect { .noUi-horizontal .noUi-handle, .noUi-vertical .noUi-handle .noUi-target.noUi-horizontal .noUi-tooltip 

range.style.background = "linear-gradient(white, black)"
var connect = range.querySelectorAll('.noUi-connect');
connect[0].style.background = "linear-gradient(white, black)"
// use connect[0].classList.add("classname") to change in css




//TODO: make everything relative
//range.style.margin = '0 auto 30px';
//range.style.height = '20px';
//range.style.margin = '10%';
range.style.height = '80%';
range.style.position = 'absolute';
range.style.right = '40px';
range.style.top = '10%';
range.style.width = '20px';
range.style.margin = '20px';

var toggleSlider1 = document.getElementById('slider-mesh-toggle');

noUiSlider.create(toggleSlider1, {
    orientation: "horizontal",
    start: 0,
    range: {
        'min': [0, 1],
        'max': 1
    },
    /*
    format: wNumb({
        decimals: 0
    })
    */
});


toggleSlider1.noUiSlider.on('update', function (values, handle) {
    console.log("toggle handle = " + handle + ' values: ' + values)
    if (values[handle] > 0) {
        toggleSlider1.classList.add('on');
        toggleSlider1.classList.remove('off');
    } else {
        toggleSlider1.classList.add('off');
        toggleSlider1.classList.remove('on');
    }
});

var toggleSlider2 = document.getElementById('slider-results-toggle');

noUiSlider.create(toggleSlider2, {
    orientation: "horizontal",
    start: 1,
    range: {
        'min': [0, 1],
        'max': 1
    },
    /*
    format: wNumb({
        decimals: 0
    })
    */
});


toggleSlider2.noUiSlider.on('update', function (values, handle) {
    console.log("toggle handle = " + handle + ' values: ' + values)
    if (values[handle] > 0) {
        document.getElementsByName('sortby')[0].setAttribute('content','lightness')
        toggleSlider2.classList.add('on');
        toggleSlider2.classList.remove('off');
    } else {
        document.getElementsByName('sortby')[0].setAttribute('content','hue')
        toggleSlider2.classList.add('off');
        toggleSlider2.classList.remove('on');
    }
    update_images.update_text();
});


//toggleSlider.style.height = '20px';
//toggleSlider.style.margin = '0 auto 30px';


// image viewer
var viewer = document.getElementById('slider-image-viewer');

noUiSlider.create(viewer, {
    orientation: "horizontal",
    direction: 'ltr',
    start: 5,
    connect: true,
    step: 1,
    range: {
        'min': [1],
        'max': [25]
    },

    // Move handle on tap, bars are draggable
    behaviour: 'tap-drag',
    tooltips: true,

        format: {
        // 'to' the formatted value. Receives a number.
        to: function (value) {
            return Math.round(value*100)/100;
        },
        // 'from' the formatted value.
        // Receives a string, should return a number.
        from: function (value) {
            return Number(value);
        }
    },

    // Show a scale with the slider
    pips: {
        mode: 'steps',
        stepped: true,
        density: 10
    },
});



viewer.style.height = '20px';
viewer.style.position = 'relative';
viewer.style.right = '0px';
viewer.style.top = '80%';
viewer.style.width = '80%';
viewer.style.margin = '20px';


// callbacks

// When the slider value changes, update the input and span
range.noUiSlider.on('update', function (values, handle) {
    //console.log("handle = " + handle + ' values' + values);
    update_graphs.update_rgb(values);
    window.range_from = values[0];
    window.range_to   = values[1];

    //update_links.update_link();
    update_images.update_image();
    update_images.update_text();
});

viewer.noUiSlider.on('update', function (values, handle) {
    //console.log("handle = " + handle + ' values' + values);
    window.num_colors = values[0];

    update_images.update_image();
    update_images.update_text();
});
