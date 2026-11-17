---
title: Teken die prent met 'n ander program
summary: Ons eie padtraseerder teken die Weergee-prent; 'n ander program kan dit slegs teken deur 'n renderenjin-byvoeging in CadCraft Studio. Wat oorgedra word, en waarom sommige programme nooit aangebied word nie.
keywords: weergee, enjin, eksterne program, byvoeging-enjin, studio, agtergrond, wagrij, usd, gltf, geteken deur, blender, gpl
from: 150f94f1
---

Die prent in {{ui:Weergee 'n prent…}} word deur **ons eie enjins** geteken: Vinnig en die Padtraseerder, in die blaaier en in CadCraft Studio. 'n Ander program kan dit slegs teken wanneer 'n **renderenjin-byvoeging** dit bring: sien [Voeg 'n renderenjin by met 'n byvoeging](topic:render-engine-addons). Om die toneel na 'n ander program te neem en daar aan te hou werk, gebruik [Open die toneel in 'n ander program](topic:render-open-in) of [Stuur die toneel na 'n speletjiemotor](topic:render-unreal).

## Teken 'n prent met 'n byvoeging se enjin

1. Skakel die byvoeging aan onder Instellings › Byvoegings. Sy enjin verskyn in die Enjin-lys van {{ui:Weergee 'n prent…}}.
2. Kies dit. Sy eie instellings wys onder die Enjin-lys.
3. Klik {{ui:Weergee}}. In Studio, die eerste keer dat 'n byvoeging 'n program laat loop, vra Studio jou in sy eie dialoog. Vordering wys terwyl dit teken; {{ui:Stop}} beëindig dit. Die prent verskyn gemerk met die enjin wat dit geteken het.

'n Enjin wat in JavaScript geskryf is, loop ook in die blaaier. 'n Enjin wat 'n program op hierdie rekenaar laat loop, loop slegs in Studio; in die blaaier word dit as 'n lêer gewys om te stoor.

## Wat oorgedra word

Die enjin kry 'n **pakket**: die model as 'n USD-lêer (en 'n glTF-lêer wanneer dit een vra), en 'n instellingslêer met die presiese materiaalwaardes, die son en die lug, elke lamp wat aan is met sy krag en ligprofiel, die kamera en die beligting. Elke program belig, toon en monster op sy eie manier, so prente lyk eenders in kamera, son, lampe en beligting, nie piksel vir piksel nie.

## Programme wat CadCraft nooit laat loop nie

CadCraft begin nooit 'n program onder die GNU GPL-lisensie nie, en lys nooit een as 'n enjin of 'n Maak oop in-teiken nie. Blender is een van hulle, so dit is nie in die Enjin-lys nie. 'n USD- of glTF-lêer wat vanaf {{ui:Weergee 'n prent…}} gestoor is, open steeds daarin soos in enige program wat daardie lêers lees.

:::note
Panorama- en stereokameras en 'n lugprent (die lug se kleure word eerder gebruik) word nie na 'n ander program oorgedra nie. Niks wat in 'n ander program gedoen word, kom terug na die model nie.
:::
