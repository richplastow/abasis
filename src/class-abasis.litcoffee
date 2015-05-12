Abasis Class
============

#### A solid base class, ready to extend




Begin defining the `Abasis` class
---------------------------------

    class Abasis
      I: ªI
      toString: -> "[object #{@I}]"




Define private class properties
-------------------------------

By convention, private properties are prefixed with an underscore. Developers 
should avoid getting or setting these directly. 

#### `_api`
See `ªpopulate()` in ‘akaybe-sou.litcoffee’ for a description of this format. 

      _api: [
        ['id', 'abasis_000', ªS, ///^#{ªI.toLowerCase()}_[-_0-9a-z]{1,10}$///]
      ]




Define the constructor
----------------------

      constructor: (config={}) ->

Validate `config` against `_api`, and populate this instance if it passes. 

        ªpopulate config, @, @_api




Define public methods
---------------------

#### `clone()`
Returns a copy of the instance. This can be useful in situations where a direct 
reference to the instance should not be passed to another part of the program. 

      clone: ->
        ªclone @, ['id', 'path', 'order']




#### `destructor()`
Cleans up all resources related to this instance, ready for garbage-collection. 

      destructor: -> #@todo




#### `gs()`
Gets or sets instance properties. When setting properties, `gs()` usually 
returns a reference to the current instance (to allow jQuery-style chaining). 
However, trying to set the instance to an invalid state throws an exception. 

      gs: (a, b) ->
        switch arguments.length

- `gs()` returns a clone of the instance, as an object

          when 0
            ªclone @, @_api

          when 1
            switch ªtype a

- `gs('recognized')` returns the current value of `recognized`
- `gs('X')` returns `undefined`, assuming 'X' is not a recognized key

              when ªS
                @[a]

- `gs({p: 1 , q: 1 })` sets `p` and `q` to new values, and returns `this`
- `gs({p:'X', q:'X'})` leaves `p` and `q` alone, and throws a two-line exception
- `gs({p: 1 , q:'X'})` leaves `p` and `q` alone, and throws a one-line exception

Note this last example: the value of `p` is valid, but because `q`’s value is 
invalid the whole operation fails, so `p`’s value remains unchanged. 

              when ªO
                ªpopulate a, @, @_api, yes #@todo test the `updating` arg

- `gs('foo', 'ok value')` sets `foo` to 'ok value', and returns `this`
- `gs('bar', 'X')` leaves `bar` alone, and throws a one-line exception

          when 2
            obj = {}
            obj[a] = b
            @gs obj



