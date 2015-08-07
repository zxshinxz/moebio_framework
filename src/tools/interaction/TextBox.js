import { addInteractionEventListener,
  removeInteractionEventListener,
  context,
  mX,
  mY
} from 'src/Global';
import { setText } from "src/tools/graphic/SimpleGraphics";
import StringOperators from "src/operators/strings/StringOperators";
import DrawTexts from "src/tools/graphic/DrawTexts";
import StringList from "src/dataStructures/strings/StringList";
import Interval from "src/dataStructures/numeric/Interval";
import List from "src/dataStructures/lists/List";

TextBox.prototype.constructor = TextBox;

/**
 * @classdesc Instanciable class that manages and renders a text on the canvas.
 *
 * @description create new TextBox.
 * @param configuration configuration Object with parameters (x, y, width, text, fontColor, fontSize, fontName, fontStyle, warnFunction, target…)
 * @constructor
 * @category strings
 */
function TextBox(configuration) {
  configuration = configuration == null ? {} : configuration;

  this.x = configuration.x == null ? 300 : configuration.x;
  this.y = configuration.y == null ? 2 : configuration.y;
  this.width = configuration.width == null ? 200 : configuration.width;

  this.text = configuration.text == null ? '' : configuration.text;

  this.fontColor = configuration.fontColor == null ? 'black' : configuration.fontColor;
  this.fontSize = configuration.fontSize == null ? '14' : configuration.fontSize;
  // TODO track down LOADED_FONT
  this.fontName = configuration.fontName == null ? LOADED_FONT : configuration.fontName;
  //this.fontStyle =  configuration.fontStyle==null?null:configuration.fontStyle;

  this.warnFunction = configuration.warnFunction;
  this.target = configuration.target;

  this.lineHeight = configuration.lineHeight == null ? 14 : configuration.lineHeight;

  this.backgroundColor = configuration.backgroundColor;
  this.boxMargin = configuration.boxMargin == null ? 5 : configuration.boxMargin;

  this.lineWidth = configuration.lineWidth == null ? 1 : configuration.lineWidth;

  this.maxWidth;
  this.links;
  this.linksType;
  this.pointPairs;
  this.overLink;

  this.setText(this.text);

  addInteractionEventListener('mouseup', this.mouseUp, this);
}
export default TextBox;

/**
 * @todo write docs
 */
TextBox.prototype.getMaxWidth = function() {
  return DrawTexts.getMaxTextWidth(this.lines);
};

/**
 * @todo write docs
 */
TextBox.prototype.update = function() {
  this.setText(this.text);
};

/**
 * @todo write docs
 */
TextBox.prototype.setText = function(text) {
  this.text = String(text);

  this.text = TextBox.replaceWikiLinks(this.text);

  var i;
  var j;
  var blocks = this.text.split('<e');
  if(blocks.length > 1) {
    var index0;
    var index0b;
    var index1;

    var names = [];
    this.links = new StringList();
    this.linksType = new StringList();
    var indexesPairs = new List();
    var lengthBefore;

    var link;
    var text;
    var extra;
    var rest;

    for(i = 1; blocks[i] != null; i++) {
      index0 = blocks[i].indexOf("*");
      index1 = blocks[i].indexOf(">");
      index0b = blocks[i].indexOf("*", index0 + 1);
      if(index0 != -1 && index1 != -1 && index0 < index1) {
        link = blocks[i].substr(0, index0);
        //c.log("LINK:{"+link+"}");

        this.links.push(link);

        if(index0b != -1 && index0b < index1 && !blocks[i].charAt(index0b + 1) == "b") {
          extra = blocks[i].charAt(index0b + 1);
          //c.log("EXTRA:{"+extra+"}");

          blocks[i] = blocks[i].substring(index0 + 1, index0b) + blocks[i].substr(index1 + 1);
          this.linksType.push('self');
        } else {
          text = blocks[i].substring(index0 + 1, index1);
          //c.log("TEXT:{"+text+"}");

          rest = blocks[i].substr(index1 + 1);
          //c.log("REST:{"+rest+"}");

          blocks[i] = text + rest;
          this.linksType.push('blank');
        }

        lengthBefore = blocks[i - 1].length;
        lengthBefore -= 1 * (blocks[i - 1].split('\\n').length - 1);
        for(j = 0; j < i - 1; j++) {
          lengthBefore += blocks[j].length;
          lengthBefore -= 1 * (blocks[j].split('\\n').length - 1);
        }

        indexesPairs.push(new Interval(lengthBefore, index1 - index0 - 1));
      }
    }

    this.text = blocks.join('');

  } else {
    this.links = null;
    this.pointPairs = null;
  }

  //DrawTexts.setContextTextProperties(this.fontColor, this.fontSize, this.fontName, null, null, this.fontStyle);

  setText(this.fontColor, this.fontSize, this.fontName, null, null, this.fontStyle);

  this.lines = DrawTexts.textWordWrapReturnLines(this.text, this.width, 0, this.lineHeight);
  this.height = this.lines.length * this.lineHeight;


  if(this.links != null) {
    var interval;
    var lengthAccumulated = 0;
    this.pointPairs = [];
    var w0;
    var w1;
    var y;
    var line;
    for(i = 0; this.links[i] != null; i++) {
      interval = indexesPairs[i];
      lengthAccumulated = 0;
      for(j = 0; this.lines[j] != null; j++) {
        line = this.lines[j];
        if(interval.x >= lengthAccumulated && interval.x < lengthAccumulated + line.length) {
          w0 = context.measureText(line.substr(0, interval.x - lengthAccumulated)).width;
          w1 = context.measureText(line.substr(0, interval.x + interval.y - lengthAccumulated)).width;
          y = j * this.lineHeight + 0.5;

          this.pointPairs.push({
            "x0": w0,
            "x1": w1,
            "y": y
          });

          break;
        }
        lengthAccumulated += (line.length + 1);
      }
    }
  }

  lengthAccumulated = 0;
  for(j = 0; this.lines[j] != null; j++) {
    line = this.lines[j];
    lengthAccumulated += (line.length + 1);
  }

  // TODO is this supposed to be this.setText (also see below) or a diff setText
  //DrawTexts.setContextTextProperties(this.fontColor, this.fontSize, this.fontName, null, null, this.fontStyle);
  setText(this.fontColor, this.fontSize, this.fontName, null, null, this.fontStyle);

  this.maxWidth = 0;
  for(i = 0; this.lines[i] != null; i++) {
    this.maxWidth = Math.max(this.maxWidth, context.measureText(this.lines[i]).width);
  }
};

/**
 * @todo write docs
 */
TextBox.prototype.draw = function(scale) {
  scale = scale == null ? 1 : scale;

  if(this.backgroundColor != null) {
    context.fillStyle = this.backgroundColor;
    context.fillRect(this.x - this.boxMargin, this.y - this.boxMargin, this.width + 2 * this.boxMargin, this.height + 2 * this.boxMargin);
  }
  //DrawTexts.setContextTextProperties(this.fontColor, this.fontSize*scale, this.fontName, null, null, this.fontStyle);
  setText(this.fontColor, this.fontSize * scale, this.fontName, null, null, this.fontStyle);
  DrawTexts.fillTextRectangleWithTextLines(this.lines, this.x, this.y, 0, this.lineHeight * scale);

  var x0;
  var x1;
  var y0;
  var y1;

  this.overLink = null;

  if(this.pointPairs != null) {
    context.lineWidth = this.lineWidth;
    context.strokeStyle = this.fontColor;
    for(var i = 0; this.pointPairs[i] != null; i++) {
      x0 = this.pointPairs[i].x0 * scale + this.x;
      x1 = this.pointPairs[i].x1 * scale + this.x;
      y0 = this.pointPairs[i].y * scale + this.y;
      y1 = Math.floor(y0 + Number(this.fontSize * scale));
      this.line(x0, x1, y1 + 0.5);
      if(mY > y0 && mY < y1 && mX > x0 && mX < x1) {
        context.canvas.style.cursor = 'pointer';
        this.overLink = i;
      }
    }
  }
};

/**
 * @todo write docs
 */
TextBox.prototype.line = function(x0, x1, y) {
  context.beginPath();
  context.moveTo(x0, y);
  context.lineTo(x1, y);
  context.stroke();
};

/**
 * @todo write docs
 */
TextBox.prototype.mouseUp = function(e) {
  if(this.overLink != null) {
    var link = this.links[this.overLink];
    var linkType = this.linksType[this.overLink];
    if(link.substr(0, 7) == 'http://' || link.substr(0, 8) == 'https://' || link.substr(0, 4) == 'www.') {
      linkType == "blank" ? window.open(link) : window.open(link, "_self");
    } else {
      this.warnFunction.call(this.target, link);
    }
    this.overLink = null;
  }
};

/**
 * @todo write docs
 */
TextBox.prototype.deactivate = function() {
  removeInteractionEventListener('mouseup', this.mouseUp, this);
};

/**
 * @todo write docs
 */
TextBox.replaceWikiLinks = function(text) {
  var indexOpen = text.indexOf("[");
  var indexClose;
  var textInsideBrackets;
  var parts;
  var externalLink;
  while(indexOpen != -1) {
    indexClose = text.indexOf("]", indexOpen + 1);
    if(indexClose == -1) {
      indexOpen = -1;
    } else {
      textInsideBrackets = text.substring(indexOpen + 1, indexClose);
      console.log('text inside brackets: {' + textInsideBrackets + '}');
      if(textInsideBrackets.indexOf("[") == -1 && textInsideBrackets.indexOf("]") == -1) {
        if(textInsideBrackets.indexOf(" ") != -1) {
          parts = textInsideBrackets.split(" ");
          //c.log('parts[0]: {'+parts[0]+'}');
          //c.log('StringOperators.validateUrl(parts[0]):', StringOperators.validateUrl(parts[0]));
          //c.log('StringOperators.validateUrl(parts[0]):', StringOperators.validateUrl(parts[0]));
          if(StringOperators.validateUrl(parts[0])) {
            //c.log('parts.slice(1).join: {'+parts.slice(1).join(" ")+'}');
            text = text.substr(0, indexOpen) + "<e" + parts[0] + "*" + parts.slice(1).join(" ") + ">" + text.substr(indexClose + 1);
            //c.log('text changed:', text);
            externalLink = true;
          }
        }

        if(!externalLink) {
          text = text.substr(0, indexOpen) + "<e" + textInsideBrackets + "*" + textInsideBrackets + ">" + text.substr(indexClose + 1);
        }

      }
      indexOpen = text.indexOf("[", indexClose);
    }
  }
  //c.log('new text:', text);
  return text;
};
