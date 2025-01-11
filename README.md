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

## Classes

Get all Classes of Element as Array
```js
el.getClasses();
```

Add Class to Element
```js
el.addClass('newclass');
```

Remove Class from Element
```js
el.removeClass('classname');
```

Remove multiple Classes from Element by Array
```js
el.removeClasses(['one','two','three']);
```

Remove multiple Classes from Element by String
```js
el.removeClasses('one two three');
```

Toggle Class of Element
```js
el.toggleClass('classname');
```

Switch Classes of Element
```js
el.switchClasses('class1','class2');
```

Replace Class of Element by another Class
```js
el.replaceClass('oldclass','newclass');
```
Check if Element has Class
```js
el.hasClass('classname');
```

Check if Element has multiple Classes by Array
```js
el.hasClasses(['one','two','three']);
```

Check if Element has multiple Classes by String
```js
el.hasClasses('one two three');
```


