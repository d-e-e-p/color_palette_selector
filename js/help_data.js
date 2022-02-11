/*
 *
 * help data
 *
 */

function getHelpData(){
   
  var data = {
    "#okhsl_hs_manipulator": `
        <p>Step1: Select Background Color</p>
          `,

    "#hex_input": "You can also directly enter rgb hex to set the background color",
    '#slider-mesh-oneside': `
         <p>Step2: Select Palette Lightness Range</p>
        <details>
    <summary>Details</summary>
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
        </details>
          `,
    "#slider-image-viewer": `
          <p>Step3: Select Number of Colors in Palette</p>
        <details>
    <summary>Details</summary>
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
        </details>
          `,
    'select#sortby': `
          <p>Step4: Sort Colors by Hue/Lightness</p>
        <details>
    <summary>Details</summary>
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
        </details>
          `,
    '#json_link': `
        <p>Step5: Copy Results</p>
        <details>
    <summary>Details</summary>
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
    Something small enough to escape casual notice.
        </details>
          `
  };

   return data;
}

function dump_help_data(){
      data = getHelpData();
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          console.log(key + " -> " + data[key]);
        }
      }
}

//dump_help_data();
