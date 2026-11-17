---
title: Leggja út UV-hnit möskva
summary: Merktu sauma, afvefðu, vörpuðu og raðaðu áferðarhnitum möskva í UV-vinnusvæðinu, og athugaðu þau með skákborði og teygjulitum.
keywords: uv, uv-hnit, afvefja, saumur, saumar, áferð, áferðarhnit, atlas, raða, röðun, eyja, eyjur, skákborð, teygja, aflögun, kassavörpun, strokksvörpun, kúluvörpun, formrétt, horn, conformal, lscm, abf
from: 00028f20
---

Áferð er flöt mynd; möskvi er það ekki. **UV-hnitin** hans segja til um hvar hvert horn á hverjum fleti lendir á myndinni. UV-vinnusvæðið býr þau til: þú sker möskvann opinn eftir **saumum**, leggur stykkin flöt (**afvefja**) og raðar þeim inn í ferninginn (**raða**).

## Opnaðu það

Veldu möskva og veldu {{ui:UV}} í listanum {{ui:Vinnusvæði}}. Hópur eða íhlutur verður fyrst að möskva, eins og í Möskvavinnusvæðinu. Þrívíddarsýnin færist yfir á vinstri helminginn; **UV-ritillinn** hægra megin sýnir fleti möskvans lagða á áferðarferninginn. Valið virkar eins og í Möskvavinnusvæðinu, og það sem þú velur í öðrum glugganum er valið í hinum.

## Merktu sauma

Saumar eru þar sem má skera möskvann opinn; þeir sýnast rauðir í báðum gluggum.

- Veldu brúnir ({{ui:Jaðar}}, eða {{key:2}}) og ýttu á {{ui:Merkja saum}} ({{key:Ctrl+E}}). {{ui:Hreinsa saum}} ({{key:Ctrl+Shift+E}}) tekur þá af.
- {{ui:Saumar við skarpar brúnir}} merkir hverja skarpa brún og hverja brún þar sem fletir mætast í meira en 60°: kassi skiptist í sex hliðar sínar.
- {{ui:Saumar úr UV}} merkir sauma þar sem UV-hnitin brotna nú þegar, til dæmis eftir vörpun.

Lokað stykki þarf sauma til að liggja flatt: kúla þarf að minnsta kosti einn skurð, og rör þarf skurð eftir endilöngu.

## Afvefja

Veldu fleti sem á að leggja út (eða engan, fyrir allan möskvann) og ýttu á {{ui:Afvefja}} ({{key:U}}). Hvert stykki á milli sauma er lagt flatt og haldið hornum eins réttum og hægt er (hornabundin flatning), og síðan eru stykkin rððuð inn í ferninginn. {{ui:Formrétt}} afvefur í staðinn með minnstu-ferna formréttum vörpunum: það er hraðara, en aðeins minna rétt á mjög bognum stykkjum. Form sem hægt er að búa til úr flatri plötu, eins og hliðarflötur strokks skorinn einu sinni, afvefst án nokkurrar teygju.

## Varpa

Fyrir einföld form nægir oft vörpun:

| Vörpun | Hvað hún gerir |
| --- | --- |
| {{ui:Kassi}} | Hver flötur á þá hlið kassans sem hann snýr mest að |
| {{ui:Strokkur}} | Umhverfis bláa ásinn: lárétt er hornið í kring, lóðrétt er hæðin |
| {{ui:Kúla}} | Frá miðjunni: lárétt er hornið í kring, lóðrétt er breiddargráðan |
| {{ui:Frá sýn}} | Eins og fletirnir sjást í þrívíddarsýninni núna |

Flötur sem liggur yfir skeyti strokksins eða kúlunnar er geymdur í einu lagi, þannig að UV-hnitin geta farið örlítið út fyrir hægri jaðar ferningsins; áferðin endurtekur sig þar.

## Raða

- {{ui:Raða}} smellir stykkjunum (eyjunum) inn í ferninginn í einni texelastærð, hverju snúið þannig að það taki minnst rými. Spjaldið stillir bilið sem er eftir á milli þeirra.
- {{ui:Snúa 90°}} og {{ui:Spegla}} snúa eða spegla UV-hnit valdra fleta.
- Í UV-ritlinum skaltu draga valinn flöt til að færa UV-hnit valsins, eða benda á ritilinn og ýta á {{key:R}} eða {{key:S}} og færa svo til að snúa þeim eða skala (smellur heldur þeim, {{key:Esc}} hættir við). {{key:G}} færir án þess að draga. Tvísmelltu á flöt (eða {{key:L}}) til að velja alla eyju hans. Hjólið aðdrættir; dragðu með miðju- eða hægri hnappi til að hliðra; {{key:F}} passar ferninginn aftur.

Sérhver breyting er eitt skref í afturköllun.

## Athugaðu þau

- {{ui:Skákborð}} sýnir merktan skákborðsreit á möskvanum í UV-hnitunum hans: jafnir, ferkantaðir reitir þýða að áferðin liggi jafnt; merkingarnar sýna í hvaða átt hún gengur.
- {{ui:Teygja}} litar hvern flöt eftir því hversu mikið UV-hnitin teygja hann: blátt þýðir enga teygju, grænt er þar á milli, og rautt mikla. Spjaldið velur hvort mælt sé **beygð horn** eða **breytt stærð**, og sýnir meðaltalið.

Sjá [Breyta möskva](topic:mesh-edit), [Möskva](topic:meshes) og [Breytingar á möskva](topic:modifiers).
