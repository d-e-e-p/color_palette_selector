
const SEVERITY_MAP = ['Errors', 'Warnings', 'Infos', 'Hints'];

export class UpdateGraphs {

  /**
   * @param  {Element} el
   */
  constructor () {
    this.id_to_mesh = null

  }

  /**
   * update visible elements of graph based on slider
   */
  update_rgb (values) {
      //console.log("values = " + values)
      this.make_graphs_visible(values[0] / 10, values[1] / 10);
  }

  /** 
  * map id based on name
  */
  get_id_to_mesh_map() { 

    var modelViewer = null;
    var mv = null;

    if ((modelViewer = document.querySelector("model-viewer#mesh")) &&
		(mv = modelViewer.model)) {
            //console.log("mv valid");
    } else {
        return null;
    }

    var id_to_mesh = new Map();

    var key = Object.getOwnPropertySymbols(mv).find(s => s.toString() == 'Symbol(threeScene)');
    var scene = mv[key]
    // find all children of the scene of type Mesh (ignore lighting)
    var meshes = scene.children.filter((c) => { return c.type == "Mesh";});
    meshes.forEach(m => {
        console.log(`found mesh name: ${m.name} visibility: ${m.visible}`);
        //m.name = data_rgb_0_to_10_color
        // extract the index from name
        var arr = m.name.split("_");
        var start_index = arr[2] / 10;
        var end_index   = arr[4];
        id_to_mesh[start_index] = m;
    });
    //console.log("id_to_mesh = ")
    //console.log(id_to_mesh)
    return id_to_mesh;
  }

  /**
   * given 2 limits between 0 and 10, return the number of steps between them
   */
  make_graphs_visible (min, max) {

    if (this.id_to_mesh === null) {
      this.id_to_mesh = this.get_id_to_mesh_map();
    }

    if (this.id_to_mesh === null) {
        return null;
    }

    console.log("make_graphs_visible: " + min + " to " + max);
    for (var i = 0; i < 10; i++) {
      if (i < min || i > max) {
        this.id_to_mesh[i].visible = false;
      } else {
        this.id_to_mesh[i].visible = true;
      }
    }
    /*
    for (var i = 0; i < 10; i++) {
       console.log(`${i} v = ${this.id_to_mesh[i].visible}`)
    }
    console.log("this.id_to_mesh = ")
    console.log(this.id_to_mesh)
    */

  }




}
