
/* TODO: move somewwhere else */

function update_sortby(sortby) {
    var el = document.getElementsByName('sortby')[0];
    el.setAttribute('content',sortby);
    // need to manually trigger the event
    var event = new Event('change');
    el.dispatchEvent(event);
    // console.log(`update_sortby: updated sortby to ${sortby}`);
}

function update_num_colors(num_colors) {
    var el = document.getElementsByName('num_colors')[0];
    el.setAttribute('content',num_colors);
    // need to manually trigger the event
    var event = new Event('change');
    el.dispatchEvent(event);
    console.log(`update_num_colors: updated num_colors to ${num_colors}`);
}


function update_color_theme(color_theme) {
    var el = document.getElementsByName('color-theme')[0];
    el.setAttribute('content',color_theme);
    // need to manually trigger the event
    var event = new Event('change');
    el.dispatchEvent(event);
    console.log(`update_color_theme: updated color_theme to ${color_theme}`);
}

