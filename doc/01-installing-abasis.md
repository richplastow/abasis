Installing Abasis
=================

Old fashioned browser install, providing `window.Abasis`: 
```html
<script src="http://abasis.richplastow.com/build/abasis.js"></script>
<script>console.log( new window.Abasis().I ); // -> 'Abasis'</script>
```

Install as a [CommonJS Module](http://goo.gl/ZrbaB0), eg for 
[Node](https://nodejs.org/): 
```javascript
var Abasis = require('abasis');
console.log( new Abasis().I ); // -> 'Abasis'
```

Install using [RequireJS inline-style](http://goo.gl/mp7Snw), providing `Abasis` 
as an argument: 
```html
<script src="lib/require.js"></script>
<script>
  require(['path/to/abasis'], function(Abasis) {
    console.log( new Abasis().I ); // -> 'Abasis'
  })
</script>
```

@todo more installation examples




