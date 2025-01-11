# vanillax.js
I do love Vanilla JS but I ended up using these style very often.

## Get Element(s)

Get Single Element
```js
const el = getElement('#sidebar');
```

Get Multiple Elements
```js
const items = getElements('.items');
```

## Datasets / Data-Attributes

Get Value of Dataset
```js
const pos = el.getDataset('position');
```

Set Value of Dataset
```js
el.setDataset('position','right');
```

Remove Dataset
```js
el.removeDataset('position');
```
