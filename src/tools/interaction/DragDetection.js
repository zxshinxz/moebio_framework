/* global clearInterval, setInterval */

import Point from "src/dataStructures/geometry/Point";
import { mX, mY, addInteractionEventListener } from 'src/Global';

DragDetection.prototype.constructor = DragDetection;

/**
 * DragDetection -
 * @param {Object} configuration
 * @param {Number} configuration.mode Mode the DragDetection tool should work under.
 * Possible options:
 * <ul>
 * <li><strong>0</strong>: frame to frame dragging vector (draggingInstance.dragVector register the vectorial change each frame).</li>
 * <li><strong>1</strong>: from click point dragging (draggingInstance.dragVector register the vectorial change from the clicking point).</li>
 * <li><strong>2</strong>: polar (draggingInstance.dragVector.x is dR, draggingInstance.dragVector.y is dA, according to the center).</li>
 * </ul>
 * @param {Object} configuration.target
 * @param {Function} configuration.listenerFunction Callback function executed each time drag is detected.
 * @param {Function} configuration.areaVerificationFunction
 * @param {Number} configuration.factor
 * @constructor
 * @category interactions
 */
function DragDetection(configuration) { //mode, listenerFunction, target, areaVerificationFunction){
  this.mode = configuration.mode || 0;
  this.listenerFunction = configuration.listenerFunction;
  this.target = configuration.target;
  this.areaVerificationFunction = configuration.areaVerificationFunction;

  this.factor = configuration.factor == null ? 1 : configuration.factor;
  this.center = new Point(0, 0);

  addInteractionEventListener("mousedown", this.onMouse, this);
  addInteractionEventListener("mouseup", this.onMouse, this);

  this.dragging = false;
  this.mouseClickPosition = new Point();
  this.mousePosition = new Point();
  this.r = 0;
  this.a = 0;

  this.idInterval = null;

  this.dragVector = new Point();
}
export default DragDetection;

/**
* @todo write docs
*/
DragDetection.prototype.enterframe = function(draggingInstance) {

  switch(draggingInstance.mode) {
    case 0:
      draggingInstance.dragVector.x = (mX - draggingInstance.mousePosition.x) * draggingInstance.factor;
      draggingInstance.dragVector.y = (mY - draggingInstance.mousePosition.y) * draggingInstance.factor;
      draggingInstance.mousePosition.x = mX;
      draggingInstance.mousePosition.y = mY;
      break;
    case 1:
      draggingInstance.dragVector.x = mX - draggingInstance.mouseClickPosition.x;
      draggingInstance.dragVector.y = mY - draggingInstance.mouseClickPosition.y;
      break;
    case 2:
      var dX = mX - draggingInstance.center.x;
      var dY = mY - draggingInstance.center.y;
      var r = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
      var a = Math.atan2(dY, dX);
      draggingInstance.dragVector.x = r - draggingInstance.r;
      draggingInstance.dragVector.y = a - draggingInstance.a;
      draggingInstance.r = r;
      draggingInstance.a = a;
      break;
  }
  //c.log(draggingInstance, draggingInstance.target, draggingInstance.dragVector);
  draggingInstance.listenerFunction.call(draggingInstance.target, draggingInstance.dragVector);

};

/**
* @todo write docs
*/
DragDetection.prototype.onMouse = function(event) {
  switch(event.type) {
    case 'mousedown':
      if(this.areaVerificationFunction != null && !this.areaVerificationFunction.call(this.target))
      {
        return;
      }

      this.dragging = true;

      this.mouseClickPosition.x = mX;
      this.mouseClickPosition.y = mY;
      this.mousePosition.x = mX;
      this.mousePosition.y = mY;

      var dX = mX - this.center.x;
      var dY = mY - this.center.y;
      this.r = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
      this.a = Math.atan2(dY, dX);

      this.dragVector.x = 0;
      this.dragVector.y = 0;

      if(this.idInterval != null) {
        clearInterval(this.idInterval);
      }
      this.idInterval = setInterval(this.enterframe, 30, this); //[!] this won't work on IE, it´s better to create a new Listener for setInterval
      break;
    case 'mouseup':
      this.simulateMouseUp();
      break;
  }
};

/**
* @todo write docs
*/
DragDetection.prototype.simulateMouseUp = function() {
  this.dragging = false;
  clearInterval(this.idInterval);
  this.idInterval = null;
};
