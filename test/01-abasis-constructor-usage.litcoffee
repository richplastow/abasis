Typical instantiation of the `Abasis` class

    tudor.add [
      "01 Abasis Constructor Usage"




      "No `config` Argument"
      -> new Abasis


      tudor.is

      "Class is a function"
      ªF
      -> Abasis

      "Instance is an object"
      ªO
      (mock) -> mock


      tudor.equal

      "`toString()` is '[object Abasis]'"
      '[object Abasis]'
      (mock) -> '' + mock

      "`config` can be null"
      '[object Abasis]'
      -> '' + new Abasis null




      "Basic `config`"


      "Set the id"
      'abasis_abc'
      -> (new Abasis { id:'abasis_abc' }).id

      #@todo more tests

    ]

