/*
 *
 *
 *
 */

function startIntro(){
  var intro = introJs();
    intro.setOptions({
      steps: [
        {
          element: "#okhsl_hs_manipulator",
          position: 'auto',
          intro: `
          <h1>Select Background Color</h1>
          <ol>
          <li> Select background color using this <a href=https://bottosson.github.io/posts/colorpicker/>OKHSL</a> color wheel
          <li> The lightness value has a major impact on which colors can be used with good contrast.
          </ol>
          `
        },
        {
          element: "#hex_input",
          position: 'auto',
          intro: "You can also directly enter an rgb hex color here to set the background"
        },
        {
          element: '#slider-mesh-oneside',
          position: 'auto',
          intro: `
          <h1>Select Lightness Range</h1>
          <ol>
          <li> Select a range of lightness for target color palette. This should be separated from background lightness by a comfortable margin for sufficient contrast.  
          <li> For example for a background lightness of 20, you would want to generate a palette in the 50 to 80 range.
          <li> It's better not to have too large a range unless you need a LOT of distinct colors.

          </ol>
            `
        },
        {
          element: '#slider-image-viewer',
          position: 'auto',
          intro: `
          <h1>Select Number of Colors in Palette</h1>
          <ol>
          <li> Larger numbers might need more available color space and a background that is clearly dark or light.
          <li> For backgrounds in the middle lightness range, you will need to run twice with palletes much darker and much lighter than the background.
          </ol>

          `
        },
        {
         // doesn't work in iframe
         // element: document.getElementById('results-txt').contentWindow.document.getElementById('sortby'),
          element: '#results-txt',
          position: 'auto',
          intro: `
          <h1>Sort Colors and View Json</h1>
          <ol>
          <li> It might be useful to generate extra colors and only select ones in a narrower hue range.
          <li> Eg you could generate 10 colors and then select 5 in the H=100° to H=300° range.
          <li> It's easiest to copy and paste the colors from Json view of palette.
          </ol>
          `


        }
      ]
    });

    intro.setOptions({
    hints: [
        { hint: 'First hint', element: "#okhsl_hs_manipulator" },
        { hint: 'Second hint', element:'#slider-mesh-oneside', hintAnimation: false }
    ]
    });

    intro.setOption('showProgress', true);
    intro.setOption('overlayOpacity', 0.9);
    intro.start();
    //intro.showHints();
}

//startIntro();

