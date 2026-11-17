---
title: Divizarea unei muchii sau a unei curbe în părți egale
summary: Împărțiți o linie în bucăți egale sau dați unui arc ori unui cerc un nou număr de segmente, cu instrumentul Divizare.
keywords: divizare, divizare muchie, părți egale, segmente egale, împărțire muchie, segmente, subdivizare, subdivizare muchii, segmente arc, segmente cerc, puncte pe o linie
from: 5c3ce3ed
---

{{ui:Divizare}} taie o muchie în bucăți egale, cu un colț la fiecare tăietură. Folosiți colțurile pentru agățare, pentru a porni linii de la ele sau pentru a împinge și a trage părți dintr-o față.

## Divizarea unei muchii

1. Faceți clic pe {{ui:Divizare}} în {{ui:Bară de instrumente}}, sau selectați o muchie și faceți clic pe {{ui:Împărțire…}} din {{ui:Informații entitate}}.
2. Treceți cu cursorul peste muchie. Marcajele arată unde vor fi făcute tăieturile: deasupra mijlocului muchiei sunt două părți; mutați spre un capăt pentru mai multe.
3. Faceți clic pentru a o diviza în părțile afișate. Sau tastați un număr, precum `5` (sau `5s`, ori `/5`), și apăsați {{key:Enter}}: se divizează imediat.

Piesele rămân selectate și constituie un singur pas de anulare. O față căreia îi aparține muchia își păstrează forma și primește colțurile noi.

## Divizarea unui arc sau a unui cerc

Treceți cu cursorul peste orice segment al unui arc sau cerc: se divizează în întregime.

- Un arc sau un cerc ai cărui colțuri nu le folosește nimic altceva, așezat plat pe fața sa, este **desenat din nou cu atâtea segmente** pe arcul real. Capetele sale rămân unde sunt, iar el rămâne o singură curbă, așa că îl puteți selecta în continuare cu un singur clic și puteți modifica raza în {{ui:Informații entitate}}. Un cerc cu 24 de laturi divizat în 8 devine un octogon.
- Orice altă curbă — marginea unui cilindru tras, o curbă desenată cu {{ui:Curbă}}, un arc cu linii unite de colțurile sale — primește colțuri noi la lungimi egale de-a lungul ei, iar nimic nu se mută.

## Cu tastele modelatorului

Instrumentul este același cu tastele modelatorului (Setări › ModelCraft › Taste, sau stilul de meniu Modeler), unde se află în meniul {{ui:Plasă}} sub numele {{ui:Subdivizare muchii}}.

## Lucruri de știut

- Numerele tastate variază de la 2 la 1000; mutând cursorul se ajunge până la 100.
- O curbă desenată cu {{ui:Curbă}} își păstrează punctele: după {{ui:Editare puncte}}, este desenată din nou pornind de la ele, iar colțurile noi dispar.

Vedeți și [Desenarea fețelor cu linii, dreptunghiuri, cercuri și arce](topic:draw-faces) și [Tastarea dimensiunilor exacte în caseta de valori](topic:value-box).
