import List from "src/dataTypes/lists/List";
import Interval from "src/dataTypes/numeric/Interval";
import NumberList from "src/dataTypes/numeric/NumberList";

IntervalList.prototype = new List();
IntervalList.prototype.constructor = IntervalList;

/**
 * @classdesc List structure for Intervals. Provides basic data type for
 * storing and working with intervals in a List.
 *
 * Additional functions that work on IntervalList can be found in:
 * <ul>
 *  <li>Operators:   {@link IntervalListOperators}</li>
 * </ul>
 *
 * @constructor
 * @description Creates a new IntervalList.
 * @category numbers
 */
function IntervalList() {
  var args = [];
  var l = arguments.length;

  for(var i = 0; i < l; i++) {
    args[i] = arguments[i];
  }
  var array = List.apply(this, args);
  array = IntervalList.fromArray(array);

  return array;
}
export default IntervalList;


/**
 * Creates a new IntervalList from a raw array of intervals.
 *
 * @param {Interval[]} array The array of numbers to create the list from.
 * @return {IntervalList} New IntervalList containing values in array
 */
IntervalList.fromArray = function(array) {
  var result = List.fromArray(array);
  //var l = result.length;

	// for(var i = 0; i < l; i++) {
	//   result[i] = result[i];
	// }

  result.type = "IntervalList";

  result.getInterval = IntervalList.prototype.getInterval;
  result.getAmplitudes = IntervalList.prototype.getAmplitudes;

  return result;
};


 /**
 * builds an Interval with min and max value from the NumberList
 * @return {Interval}
 */
IntervalList.prototype.getInterval = function() {
  if(this.length === 0) return null;

  var max = Math.max(this[0].x, this[0].y);
  var min = Math.min(this[0].x, this[0].y);
  var l = this.length;
  var i;
  for(i = 1; i<l; i++) {
    max = Math.max(max, this[i].x, this[i].y);
    min = Math.min(min, this[i].x, this[i].y);
  }
  var interval = new Interval(min, max);
  return interval;
};

/**
 * return the Intervals amplitudes
 * @return {NumberList}
 * tags:
 */
IntervalList.prototype.getAmplitudes = function() {
  if(this.length === 0) return null;

  var i;
  var numberList = new NumberList();

  for(i=0; i<this.length; i++){
    numberList[i] = this[i].getAmplitude();
  }

  return numberList;
};



