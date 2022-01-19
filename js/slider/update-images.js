
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
       let color_scheme = document.getElementsByName('color-scheme')[0].getAttribute('content')
       let range_from  = window.range_from;
       let range_to    = window.range_to;
       let num_colors  = window.num_colors;

       // construct pathname like assets/res/images_50_to_60/dark/img5.png 
       //let filename = `${this.path}/images_${this.range_from}_to_${this.range_to}/${color_scheme}/img${this.num_colors}.png`;
       let filename = `${this.path}/images_${range_from}_to_${range_to}/${color_scheme}/img${num_colors}.png`;
       
       return filename;
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
        console.log(`table updated to ${filename}`);
      }

    }

   get_txt_filename_from_range_and_num() { 

       // TODO: check color-scheme is valid before using it directly for filename
       let range_from  = window.range_from;
       let range_to    = window.range_to;
       let num_colors  = window.num_colors;
       let color_scheme = document.getElementsByName('color-scheme')[0].getAttribute('content')
       if (color_scheme == 'undefined') {
            return null;
        }

       let filename = `${this.path}/html/${color_scheme}/res_lightness_${range_from}_to_${range_to}_ncolors_${num_colors}.html`;
       
       return filename;
    }


  }





