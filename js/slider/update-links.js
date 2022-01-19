
const SEVERITY_MAP = ['Errors', 'Warnings', 'Infos', 'Hints'];

export class UpdateLinks {

  /**
   * @param  {Element} el
   */
  constructor () {
    this.path = "/assets/res";
    this.link = document.getElementById('results');

  }

  /**
   * update visible elements of graph based on slider
   */
  update_link () {
      //this.make_graphs_visible(values[0] / 10, values[1] / 10);
      var filename = this.get_filename_from_rangenum();
      //console.log(`rvalues = ${range_values} num = ${num_value} filename=${filename}`)
      this.link.href = filename;
  }

  /** 
  * 
  */
   get_filename_from_rangenum(range_values, num_value) { 

    // construct pathname like assets/res/rgb_50_to_60_color_list.json
    var range_from = window.range_from;
    var range_to   = window.range_to;
    var filename = `${this.path}/rgb_${range_from}_to_${range_to}_color_list.json`;
    return filename;

  }




}
