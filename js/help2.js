
// from http://www.javascriptkit.com/javatutors/loadjavascriptcss2.shtml
function createjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    return fileref
}
 
function replacejscssfile(oldfilename, newfilename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist using
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null) {
            //console.log(`sus  t=${allsuspects[i].getAttribute(targetattr)}`);
        }
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1){
            //console.log(`match! with ${oldfilename} `);
            var newelement=createjscssfile(newfilename, filetype)
            allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i])
        }
    }
}



/*
 *
 * help system using new layout on help
 *
 */

let instances = [];
let helpToggle = false;
let helpDefined = false;

function defineHelp(){

    tippy.setDefaultProps({
        arrow: true, 
        trigger: 'manual',
        allowHTML: true,
        animation: 'fade',
        inertia: true,
        interactive: true,
        showOnCreate: false,
        theme: 'light',
        hideOnClick: false
    });
    console.log(tippy.defaultProps);

    var instance;
    var data = getHelpData();
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
          console.log(key + " -> " + data[key]);
          [instance] = tippy(key, { content: data[key], });
          instances.push(instance);
        }
    }

}

function showHelp() {

    if (helpDefined == false) {
        helpDefined = true;
        defineHelp();
    } 

    if (helpToggle == false) {
        replacejscssfile("css/flex.css", "css/help.css", "css") //Replace all occurences "oldstyle.css" with "newstyle.css"
    } else {
        replacejscssfile("css/help.css", "css/flex.css", "css") //Replace all occurences "oldstyle.css" with "newstyle.css"
    }
    helpToggle = !helpToggle;


}


//instance.setProps({theme: 'custom-light'});
// tippy.hideAll().
