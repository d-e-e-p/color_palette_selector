
/* TODO: move somewwhere else */

function update_sortby(sortby) {
    var el = document.getElementsByName('sortby')[0];
    el.setAttribute('content',sortby);
    // need to manually trigger the event
    var event = new Event('change');
    el.dispatchEvent(event);
    // console.log(`update_sortby: updated sortby to ${sortby}`);
}
