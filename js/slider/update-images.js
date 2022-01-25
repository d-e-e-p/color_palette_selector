
const SEVERITY_MAP = ['Errors', 'Warnings', 'Infos', 'Hints'];

export class UpdateImages {

  /**
   * @param  {Element} el
   */
  constructor () {
    this.path = "/assets/res";
    this.image = document.getElementsByClassName("image-plot")[0];
    this.table = document.getElementsByClassName("results-txt")[0];
    /* use window. method instead 
    this.range_from = 0;
    this.range_to = 100;
    this.num_colors = 5;
    */
  }


  /**
   * update visible elements of graph based on slider
   */
  update_image () {
      var filename = this.get_image_filename_from_range_and_num();
      this.image.src = filename;
  }

  /** 
  * 
  */
   get_image_filename_from_range_and_num() { 

       // TODO: check color-scheme is valid before using it directly for filename
       let color_theme = document.getElementsByName('color-theme')[0].getAttribute('content')
       let range_from  = window.range_from;
       let range_to    = window.range_to;
       let num_colors  = window.num_colors;

       // construct pathname like assets/res/images_50_to_60/dark/img5.png 
       //let filename = `${this.path}/images_${this.range_from}_to_${this.range_to}/${color_scheme}/img${this.num_colors}.png`;
       // eg res/images/plot/dark/plot_0_to_10_n8.png
       let filename = `${this.path}/images/plot/${color_theme}/plot_${range_from}_to_${range_to}_n${num_colors}.png`
       
       return filename;
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
      
      //
      //TODO: use the URL() UI
      //TODO: or at least strip off http:/kkjsddf/ and compare naked filenames

      var filename = this.get_txt_filename_from_range_and_num();
      if (filename == null) {
          return;
      }

      var url = window.location.protocol + "//" + window.location.host + filename 
      if (this.table.src != url) {
        console.log(`${this.table.src} updated from ${url} to ${filename}`);
        this.table.src = filename;
        // alternative to frame is using something like jquery load
        //this.load("results-txt2",url);
        console.log(`table updated to ${filename}`);
      }

    }

   get_txt_filename_from_range_and_num() { 

       // TODO: check color-scheme is valid before using it directly for filename
       let range_from  = window.range_from;
       let range_to    = window.range_to;
       let num_colors  = window.num_colors;
       let color_theme = document.getElementsByName('color-theme')[0].getAttribute('content')
       let sortby      = document.getElementsByName('sortby')[0].getAttribute('content')
       if (color_theme == 'undefined') {
            return null;
        }

       // res/html/swatch/dark/lightness/res_lightness_0_to_10_ncolors_1.html
       let filename = `${this.path}/html/swatch/${color_theme}/${sortby}/res_lightness_${range_from}_to_${range_to}_ncolors_${num_colors}.html`;
       
       return filename;
    }


  }





