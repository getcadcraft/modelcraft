---
title: Mudeli valgustamine lampidega
summary: Pane mudelisse lambid, prožektorid ja valgusplaadid, et renderdatud pildid näitaksid ruume öösel või valgustatud interjööre, pehmete varjudega.
keywords: valgus, valgustid, lamp, lambid, valgustus, pirn, laevalgusti, prožektor, allavalgusti, valgusplaat, alasvalgusti, luumenid, heledus, värvitemperatuur, soe, öö, interjöör, renderda
from: c8d72cbc
---

Lambid valgustavad [renderdatud pilte](topic:render). 3D-vaadet need ei muuda: seal näeb iga lamp väikese märgina oma värvis.

## Lambi lisamine

1. Paremal jaotises {{ui:Lights}} klõpsa {{ui:Lamp}}, {{ui:Spotlight}} või {{ui:Light panel}}.
2. Klõpsa kohta, kuhu see läheb. Haakumine toimib nagu joonistamisel.
   - Laele või seinale riputub **lamp** 25 cm kaugusel pinnast, sinu vaatesuuna poolel; **valgusplaat** lamab pinnal ja kiirgab sellest eemale.
   - **Prožektor** nõuab kahte klõpsu: esmalt asukoht, seejärel koht, kuhu see on suunatud.

Uus lamp on jaotises {{ui:Lights}} valitud ja valmis muutmiseks.

## Lambi muutmine

Klõpsa lambi nime jaotises {{ui:Lights}} või tema märki vaates tööriistaga {{ui:Select}}. Seejärel:

| Seade | Mida see teeb |
|---|---|
| {{ui:Brightness (lumens)}} | Kui palju valgust ta annab. Tavaline majapidamispirn on umbes 800 luumenit, hele laevalgusti 3000 |
| {{ui:Color}} | {{ui:Warm}} (koduse pirni valgus), {{ui:Neutral}} või {{ui:Daylight}}, või mis tahes värv |
| {{ui:Beam (degrees)}} | Prožektori koonus servast servani |
| {{ui:Bulb size}}, {{ui:Width}}, {{ui:Depth}} | Suuremad pirnid ja paneelid annavad pehmemad varjud |
| {{ui:Red (x)}}, {{ui:Green (y)}}, {{ui:Height}} | Kus ta asub |

Lambi nime kõrval olev linnuke lülitab selle sisse või välja. {{ui:Delete the light}} eemaldab selle. Iga muudatus on üks samm: {{key:Ctrl+Z}} võtab selle tagasi. Lambid salvestatakse faili `.modelcraft`.

## Pildid öösel

Dialoogis {{ui:Render a picture…}} märgi {{ui:Use another date and time for this picture}} ja vali õhtune tund. Kui päike on loojunud, läheb taevas tumedaks ja mudelit valgustavad ainult lambid. Kui pilt on liiga tume, tõsta dialoogis {{ui:Brightness}} või lisa lampe.

:::tip
Toa seest nähtava vaate jaoks aseta kaamera ruumi sisse (orbiidi ja suumi või kasuta [stseeni](topic:scenes)), lisa laele lamp ja renderda öösel. Kiirrežiimis on lambist kaugemal olevad nurgad tumedamad kui fotol; [kvaliteetrežiim](topic:render#high-quality) laseb valgusel seintelt peegelduda.
:::
