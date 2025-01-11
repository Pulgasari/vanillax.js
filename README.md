# vanillax.js
tiny library for lovers of vanilla js

## Datasets / Data-Attributes

Get Value of Dataset
```
const myValue = Element('#sidebar').getDataset('position');

Vanilla JS:
const myValue = document.querySelector('#sidebar').dataset['position'];
```

Set Value of Dataset
```
Element('#sidebar').setDataset( 'position', 'right' );

Vanilla JS:
document.querySelector('#sidebar').dataset['position'] = 'right';
```

Remove Dataset
```
Element('#sidebar').removeDataset('position');

Vanilla JS:
document.querySelector('#sidebar').removeAttribute('data-position');
```
