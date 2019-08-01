## Also mein Problem sieht folgendermaßen aus.

Wenn man sich von zwei Clients (Websiten) auf den Server hier verbindet kriegt jede Website eine
eigene socket.id. Also jeder Client ist identifizierbar.

So auf der Website ist ja so ein schöner Button.

Der schickt das event 'request_hello' an den node server.
Als Parameter wird der generierte Usr-Name der website mitgeschickt.
Den generier ich selber, der hat nichts mit der socket.id zu tun.

So jetzt kommt das event beim server an.
In zeile 26 (index.js) hört der auf diesen request da.

So und ich will eigentlich nur von den ganzen clients die sich verbinden
die usrnamen und socket.ids als objekte in einem array haben verdammt nochmal!

Die Objekt erstellung funktioniert ja auch, aber es wird immer überschrieben!!
Also momentan hab ich grad kein Objekt im code sondern nur ein array was ich in ein anderes
schreibe, weil ich die hoffnung hatte das es so funktioniert.

Das kommt halt dabei raus:

```
usr-c78f7747 send a request
[
  [ 'usr-c78f7747', 'JopDUVG2CN3h6DmoAAAB' ],
  [ 'usr-c78f7747', 'JopDUVG2CN3h6DmoAAAB' ],
  [ 'usr-c78f7747', 'JopDUVG2CN3h6DmoAAAB' ],
  [ 'usr-c78f7747', 'JopDUVG2CN3h6DmoAAAB' ],
  [ 'usr-c78f7747', 'JopDUVG2CN3h6DmoAAAB' ],
  [ 'usr-c78f7747', 'JopDUVG2CN3h6DmoAAAB' ]
]
usr-ead88441 send a request
[
  [ 'usr-ead88441', 'ur2svSJlwSmUSCgyAAAA' ],
  [ 'usr-ead88441', 'ur2svSJlwSmUSCgyAAAA' ],
  [ 'usr-ead88441', 'ur2svSJlwSmUSCgyAAAA' ],
  [ 'usr-ead88441', 'ur2svSJlwSmUSCgyAAAA' ],
  [ 'usr-ead88441', 'ur2svSJlwSmUSCgyAAAA' ]
]
```

pls help!
Falls du irgendeine Idee hast oder gar die lösung, sag bitte mal bescheid ;)

Kannst das ganze gerne comitten und ins repo pushen, aber bitte in den **testing-unit** branch.