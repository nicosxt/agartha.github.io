// //create library
// vec3 = function(x, y, z) {
//   this._init(x, y, z);
// };
// vec3.prototype = {

//   /**
//    * Fixed Constructor.
//    */
//   constructor: vec3,

//   x: null,

//   y: null,

//   z: null,

//   /**
//    * Add documentation!
//    */
//   _init: function(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   },

//   /**
//    * Add documentation!
//    */
//   add: function(othervec3) {
//     return new vec3(this.x + othervec3.x,
//         this.y + othervec3.y, this.z + othervec3.z);
//   },

//   /**
//    * Add documentation!
//    */
//   scalarProduct: function(othervec3) {
//     return this.x * othervec3.x + this.y * othervec3.y
//         + this.z * othervec3.z;
//   },

//   /**
//    * From Asad's answer. Returns the distance between this vec3
//    * and <code>othervec3</code>.
//    * @param othervec3 {vec3}
//    * @returns {Number}
//    */
//   distance: function(othervec3) {
//     return Math.sqrt(Math.pow((this.x-othervec3.x),2)
//         + Math.pow((this.y-othervec3.y),2)
//         + Math.pow((this.z-othervec3.z),2));
//   }
//   // and so on....
// };

// // function MeshObj(_mesh, _angle){
// //   this.mesh = _mesh;
// //   this.angle = _angle;
// // }
  
// function vec2(x, y){
//     this.x = x;
//     this.y = y;
// }

//Scene Variables
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({antialias: true});
// const canvas = renderer.domElement;

const lightColor = new THREE.Color("#ffffff");
const ambientLightColor = new THREE.Color("#ffffff");
var newC = "#333333";
