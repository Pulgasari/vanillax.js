/* VANILLA X || https://github.com/pulgasari/vanillax.js */

function getElement  (selector) { return document.   querySelector(selector); }
function getElements (selector) { return document.querySelectorAll(selector); }

// Attributes
HTMLElement.prototype.removeAttributes = function( properties ){
  properties.forEach( property => {
    this.removeAttribute(property);
  });
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
HTMLElement.prototype.removeDatasets = function( properties ){
  properties = Array.isArray(properties) ? properties : properties.split(' ');
  properties.forEach( property => {
    this.removeAttribute( 'data-' + property );
  });
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
HTMLElement.prototype.removeClasses = function( names ){
  names = Array.isArray(names) ? names : names.split(' ');
  names.forEach( name => {
    this.classList.remove(name);
  });
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
HTMLElement.prototype.hasClass = function( name ){
  return this.classList.contains(name);
};
HTMLElement.prototype.hasClasses = function( names ){
  names = Array.isArray(names) ? names : names.split(' ');
  return names.every( name => this.classList.contains(name) );
};

// Styles
HTMLElement.prototype.setStyle = function( property, value ){
  this.style.setProperty(property,value);
  return this;
};
HTMLElement.prototype.getStyle = function( property ){
  if( property.startsWith('--') ){
    const cs = window.getComputedStyle(this);
    return cs.getPropertyValue(property);
  }
  return this.style[property];
};
HTMLElement.prototype.removeStyle = function( property ){
  this.style.removeProperty(property);
  return this;
};
HTMLElement.prototype.removeStyles = function( properties ){
  properties = Array.isArray(properties) ? properties : properties.split(' ');
  properties.forEach( property => {
    this.style.removeProperty(property);
  });
  return this;
};
