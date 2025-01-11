/* VANILLA X || https://github.com/pulgasari/vanillax.js */

function getElement  (selector) { return document.   querySelector(selector); }
function getElements (selector) { return document.querySelectorAll(selector); }

// Dataset Handling // getDataset() setDataset() removeDataset()
HTMLElement.prototype.getDataset = function( property ) {
  return this.dataset[property];
};
HTMLElement.prototype.setDataset = function( property, value ) {
  this.dataset[property] = value;
  return this;
};
HTMLElement.prototype.removeDataset = function( property ) {
  this.removeAttribute( 'data-' + property );
  return this;
};

