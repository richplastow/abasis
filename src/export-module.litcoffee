Export Module
=============

#### The module’s only entry-point is the `Abasis` class

First, try defining an AMD module, eg for [RequireJS](http://requirejs.org/). 

    if ªF == typeof define and define.amd
      define -> Abasis

Next, try exporting for CommonJS, eg for [Node](http://goo.gl/Lf84YI):  
`var foo = require('foo');`

    else if ªO == typeof module and module and module.exports
      module.exports = Abasis

Otherwise, add the `Abasis` class to global scope. Browser usage would be:  
`var foo = new window.Foo();`

    else @[ªI] = Abasis




