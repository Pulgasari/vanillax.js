# vanillax.js
I do love Vanilla JS but I ended up using these style very often.

## Get Element(s)

Get Single Element
```
const el = getElement('#sidebar');

Vanilla JS:
const el = document.querySelector('#sidebar');
```

Get Multiple Elements
```
const items = getElements('.items');

Vanilla JS:
const items = document.querySelectorAll('.items');
```

## Datasets / Data-Attributes

Get Value of Dataset
```
const myValue = el.getDataset('position');

Vanilla JS:
const myValue = el.dataset['position'];
```

Set Value of Dataset
```
el.setDataset( 'position', 'right' );

Vanilla JS:
el.dataset['position'] = 'right';
```

Remove Dataset
```
el.removeDataset('position');

Vanilla JS:
el.removeAttribute('data-position');
```
