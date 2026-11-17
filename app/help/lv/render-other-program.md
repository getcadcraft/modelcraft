---
title: Zīmējiet attēlu ar citu programmu
summary: Mūsu pašu Path tracer zīmē renderēto attēlu; cita programma to var zīmēt tikai ar renderēšanas dzinēja papildinājumu CadCraft Studio. Kas tiek pārnests un kāpēc dažas programmas nekad netiek piedāvātas.
keywords: renderēt, dzinējs, ārēja programma, papildinājuma dzinējs, studio, fons, rinda, usd, gltf, zīmē, blender, gpl
from: 150f94f1
---

Attēlu {{ui:Renderēt attēlu…}} zīmē **mūsu pašu dzinēji**: Fast un Path tracer pārlūkā un CadCraft Studio. Cita programma to var zīmēt tikai tad, ja to nodrošina **renderēšanas dzinēja papildinājums**: skatiet [Renderēšanas dzinēja pievienošana ar papildinājumu](topic:render-engine-addons). Lai nogādātu ainu citā programmā un turpinātu darbu tur, izmantojiet [Ainas atvēršana citā programmā](topic:render-open-in) vai [Nosūtīt ainu spēļu dzinējam](topic:render-unreal).

## Attēla zīmēšana ar papildinājuma dzinēju

1. Ieslēdziet papildinājumu sadaļā Iestatījumi › Papildinājumi. Tā dzinējs parādās {{ui:Renderēt attēlu…}} dzinēju sarakstā.
2. Izvēlieties to. Tā paša iestatījumi tiek rādīti zem dzinēju saraksta.
3. Noklikšķiniet {{ui:Renderēt}}. Studio pirmo reizi, kad papildinājums palaiž programmu, jautā savā dialogā. Gaitu rāda, kamēr tas zīmē; {{ui:Apturēt}} to beidz. Attēls parādās, atzīmēts ar dzinēju, kas to zīmēja.

Dzinējs, kas rakstīts JavaScript, darbojas arī pārlūkā. Dzinējs, kas šajā datorā palaiž programmu, darbojas tikai Studio; pārlūkā tas tiek rādīts kā fails saglabāšanai.

## Kas tiek pārnests

Dzinējs saņem **pakotni**: modeli kā USD failu (un glTF failu, ja to pieprasa), un iestatījumu failu ar precīzām materiālu vērtībām, sauli un debesīm, katru ieslēgto lampu ar tās jaudu un gaismas profilu, kameru un ekspozīciju. Katra programma apgaismo, toņo un paraugu ņem savā veidā, tāpēc attēli ir līdzīgi kameras, saules, lampu un ekspozīcijas ziņā, bet nav pikseļu pa pikselim vienādi.

## Programmas, ko CadCraft nekad nepalaiž

CadCraft nekad nepalaiž programmu ar GNU GPL licenci un nekad neuzskaita tādu kā dzinēju vai mērķi ierakstam Atvērt ar. Blender ir viena no tām, tāpēc tā nav dzinēju sarakstā. USD vai glTF fails, kas saglabāts no {{ui:Renderēt attēlu…}}, tajā tomēr atveras kā jebkurā programmā, kas lasa šos failus.

:::note
Panorāmas un stereo kameras un debesu attēls (tā vietā tiek izmantotas debesu krāsas) netiek pārnesti uz citu programmu. Nekas, kas izdarīts citā programmā, neatgriežas modelī.
:::
