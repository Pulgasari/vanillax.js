/* VANILLA X || https://github.com/pulgasari/vanillax.js */

function getElement  (selector) { return document.   querySelector(selector); }
function getElements (selector) { return document.querySelectorAll(selector); }

// Attributes
HTMLElement.prototype.removeAttributes = function( properties ){
  properties.forEach( property => {
    this.removeAttribute(property);
  }
  return this;
};

// Dataset Handling // getDataset() setDataset() removeDataset()
HTMLElement.prototype.getDataset = function( property ){
  return this.dataset[property];
};
HTMLElement.prototype.getDatasets = function(){
  
};
HTMLElement.prototype.setDataset = function( property, value ){
  this.dataset[property] = value;
  return this;
};
HTMLElement.prototype.removeDataset = function( property ){
  this.removeAttribute( 'data-' + property );
  return this;
};

// Classes
HTMLElement.prototype.getClasses = function(){
  return Array.from(this.classList);
};
HTMLElement.prototype.addClass = function( name ){
  this.classList.add(name);
  return this;
};
HTMLElement.prototype.removeClass = function( name ){
  this.classList.remove(name);
  return this;
};
HTMLElement.prototype.removeClass = function( names ){
  names.forEach( name => {
    this.classList.remove(name);
  }
  return this;
};
HTMLElement.prototype.toggleClass = function( name ){
  this.classList.remove(name);
  return this;
};
HTMLElement.prototype.switchClasses = function( a, b ){
  const cl = this.classList;
  if( cl.contains(a) ){
    cl.add(b);
    cl.remove(a);
  } else {
    cl.add(a);
    cl.remove(b);
  }
  return this;
};
HTMLElement.prototype.replaceClass = function( a, b ){
  const cl = this.classList;
  if( cl.contains(a) ){
    cl.add(b);
    cl.remove(a);
  }
  return this;
};

