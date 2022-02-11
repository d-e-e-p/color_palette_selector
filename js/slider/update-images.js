
const SEVERITY_MAP = ['Errors', 'Warnings', 'Infos', 'Hints'];

export class UpdateImages {

  /**
   * @param  {Element} el
   */
  constructor () {
    this.path = "/assets/res";
    this.image_delta_plot = document.getElementById("image-delta-plot");
    this.image_examples_plot = document.getElementById("image-examples-plot");
    this.last_url = "";
    // TODO: put range along with sortby and num_colors in meta
    /* use window. method instead 
    this.range_from = 0;
    this.range_to = 100;
    */
  }


  /**
   * update visible elements of graph based on slider
   */
  update_image () {
      var filenames = this.get_image_filenames_from_range_and_num();
      this.image_delta_plot.src = filenames[0];
      this.image_examples_plot.src = filenames[1];
  }

  /** 
  * 
  */
   get_image_filenames_from_range_and_num() { 

       // TODO: check color-scheme is valid before using it directly for filename
       var color_theme = document.getElementsByName('color-theme')[0].getAttribute('content')
       var range_from  = window.range_from;
       var range_to    = window.range_to;
       var num_colors  = document.getElementsByName('num_colors')[0].getAttribute('content')

       if (num_colors == null) {
           return null;
       }

       // eg /assets/res/plots/delta/dark/pl  ot_0_to_100_n5.png
       var f_delta    = `${this.path}/plots/delta/${color_theme}/plot_${range_from}_to_${range_to}_n${num_colors}.png`;
       var f_examples = `${this.path}/plots/examples/${color_theme}/plot_${range_from}_to_${range_to}_n${num_colors}.png`;
       console.log(`updating to ${f_delta} and ${f_examples}`);
      
       return [f_delta, f_examples];
    }

    /* from  https://stackoverflow.com/questions/32144399/is-there-a-native-javascript-equivalent-to-jquery-load */
    load(id, url) {
        var target = document.getElementById(id);
        var r = new XMLHttpRequest();
        r.open("GET", url, true);
        r.onreadystatechange = function () {
        console.log(`load target=${target} url=${url} r=${r}`);
        if (r.readyState != 4 || r.status != 200) return;
            target.innerHTML = r.responseText;
        };
        r.send();
    }


    /*
     *  load html side file
     */

    update_text() {

      // update title of mesh
      document.getElementById("selected_color_range").innerHTML = `Palette Color Range: L=${window.range_from} to ${window.range_to}`; 
      
      //
      //TODO: use the URL() UI
      //TODO: or at least strip off http:/kkjsddf/ and compare naked filenames

      var filename = this.get_txt_filename_from_range_and_num();
      if (filename == null) {
          return;
      }
      console.log(`update_text: filename not null =  ${filename} `);

      var url = window.location.protocol + "//" + window.location.host + filename 
      if (this.last_url != url) {
        this.last_url = url;
        console.log(`${this.last_url} updated to ${url} `);
        // using iframe or using something like jquery's load
        //this.table.src = filename;
        this.load("results-txt2",url);
      }

    }

   get_txt_filename_from_range_and_num() { 

       // TODO: check color-scheme is valid before using it directly for filename
       let range_from  = window.range_from;
       let range_to    = window.range_to;
       let color_theme = document.getElementsByName('color-theme')[0].getAttribute('content')
       let sortby      = document.getElementsByName('sortby')[0].getAttribute('content')
       let num_colors  = document.getElementsByName('num_colors')[0].getAttribute('content')
       if (color_theme == 'undefined') {
            return null;
        }
       if (num_colors == null) {
           return null;
       }

       // res/html/swatch/saturation/res_lightness_90_to_120_ncolors_25.html
       let filename = `${this.path}/html/swatch/${sortby}/res_lightness_${range_from}_to_${range_to}_n${num_colors}.html`;
       
       return filename;
    }

   get_json_filename_from_range_and_sortby() { 

       // TODO: check color-scheme is valid before using it directly for filename
       let range_from  = window.range_from;
       let range_to    = window.range_to;
       let color_theme = document.getElementsByName('color-theme')[0].getAttribute('content');
       let sortby      = document.getElementsByName('sortby')[0].getAttribute('content');
       let num_colors  = document.getElementsByName('num_colors')[0].getAttribute('content')
       if (color_theme == 'undefined') {
            return null;
        }
       if (num_colors == null) {
           return null;
       }

       // res/html/json/dark/lightness/res_lightness_0_to_10.html
       let filename = `${this.path}/html/json/${color_theme}/${sortby}/res_lightness_${range_from}_to_${range_to}.html`;
       
       return filename;
    }

    update_json_link() {
    
      //var s = document.getElementById("sortby");
      var filename = this.get_json_filename_from_range_and_sortby();
      if (filename == null) {
          return;
      }

      //var url = window.location.protocol + "//" + window.location.host + filename 
      if (this.last_json_link != filename) {
        this.last_json_link = filename;
        console.log(`${this.last_json_link} updated to ${filename} `);
        var link = document.getElementById("json_link"); 
        link.setAttribute('href', filename);
      }

    }



  }





