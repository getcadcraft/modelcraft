---
title: Gerðu líkan tilbúið fyrir þrívíddarprentun
summary: Athugaðu hvort líkan sé lokað og snúi rétt, sjáðu stærð þess, grunn og yfirhengi, lagfærðu það sem er rangt, og sæktu það sem STL eða 3MF fyrir sneiðarann þinn.
keywords: þrívíddarprentun, prentari, prenta, sneiðari, stl, 3mf, vatnsþétt, lokað, föst form, göt, öfugt, yfirhengi, stuðningar, grunnur, prentbeð, millimetrar, útflutningur, lagfæra, viðgerð, holað, stærð prentbeðs, byrjandi, veggþykkt, prentverkfæri
from: 948e19af
---

Sneiðari þrívíddarprentara þarf lokað form: engin göt, sérhver flötur snúi út og ekkert gangi í gegnum sjálft sig. {{ui:Flytja út}} › {{ui:Athuga fyrir þrívíddarprentun (STL eða 3MF)…}} leitar að nákvæmlega þessu áður en þú sækir skrána.

## Athuga og sækja

1. Veldu það sem þú vilt prenta: einn eða fleiri hópa eða íhluti, eða sum fleti. Ef ekkert er valið prentast allt sem er sýnt.
2. Smelltu á {{ui:Flytja út}} í hópnum {{ui:Skrá}}, og síðan á {{ui:Athuga fyrir þrívíddarprentun (STL eða 3MF)…}}.

   Glugginn byrjar á einni línu: „Tilbúið til prentunar“, hversu mörg atriði þarf að laga áður en prentun, eða hversu mörg þarf að skoða fyrst. Hvert vandamál hefur þrjá hluta: hvað er rangt, af hverju það skiptir máli, og hvað á að gera. Síðan koma stærðin í millimetrum, rúmmálið, fjöldi þríhyrninga og prentbeðið þitt.

3. Ef glugginn listar atriði til að laga, smelltu á {{ui:Laga það sem hægt er}} (sjá hér að neðan). Athugunin keyrir aftur af sjálfu sér.
4. Smelltu á {{ui:Sækja 3MF}} eða {{ui:Sækja STL}}.

Það sem prentast er það sem þú sérð: faldir fletir, faldir hópar og íhlutir, og allt sem er á falinni merkingu er skilið eftir. Stærðir eru alltaf í millimetrum, einingunni sem sneiðarar búast við, hvaða einingu sem líkanið sýnir.

:::tip
Veldu 3MF þegar sneiðarinn þinn les það: það geymir litina og einingarnar. STL hefur hvorugt, og sneiðarar gera ráð fyrir millimetrum.
:::

## Hvað athugunin leitar að

Þetta stöðvar prentun eða skemmir hana, og lætur gluggann segja „Ekki tilbúið til prentunar“:

| Vandamál | Hvað það þýðir | Hvað á að gera |
|---|---|---|
| Flötur á annarri hlið aðeins | Gat: brún hefur flöt öðrum megin og ekkert hinum megin | Teiknaðu vantandi flötinn (lína þvert yfir bilið lokar því oft), eða notaðu {{ui:Laga}} (hér að neðan) |
| Deilt af þremur eða fleiri fletum | Fletir mætast í uggu eða vegg inni í föstu formi | Eyddu innri flötnum |
| Fletir snúa í gagnstæðar áttir | Sumir fletir vísa inn, aðrir út | Veldu fletina sem snúa inn og smelltu á {{ui:Snúa fleti við}} í {{ui:Upplýsingar um eind}} |
| Öfugt | Heill lokaður hluti vísar inn á við | Veldu fleti hans og snúðu þeim við |
| Fer í gegnum sjálfan sig | Einn hluti brotnar í gegnum sjálfan sig | {{ui:Breyta}} › {{ui:Meira}} › {{ui:Skera saman við líkan}}, eyddu síðan því sem er inni. Sjá [Skera fleti saman](topic:intersect) |

Þetta eru viðvaranir: líkanið prentast, en líttu fyrst á það.

- **Aðskildir hlutar skarast**, eða **mætast flöt við flöt**: sneiðarar sameina þá venjulega í einn. Fyrir hreinni skrá skaltu sameina þá með {{ui:Föst form}} › {{ui:Sameina}}. Sjá [Verkfæri fyrir föst form](topic:solids).
- **Ekkert liggur flatt að neðan**: snúðu líkaninu svo flötur hvíli á prentbeðinu, annars bætir sneiðarinn við stuðningum eða fleka.
- **Hallar út meira en 45° frá lóðréttu**: þeir fletir þurfa stuðning. Glugginn segir hversu stór hluti yfirborðsins gerir það.
- **Undir 1 mm þvert yfir**: líklega teiknað í rangri einingu. Athugaðu einingu í stöðustikunni.

Holur hluti (lokuð skel inni í annarri) er í lagi: fletir hans vísa inn í holið, og rúmmál hans er dregið frá.

## Laga vandamálin

Undir **Hvar vandamálin eru** nefnir glugginn hvern hóp eða íhlut sem er rangur (lausir fletir sem ekki eru í hópi eru skráðir sem „Fletir ekki í hópi“), með því hvað er rangt í honum. Íhlutur sem er settur á nokkra staði er skráður einu sinni: lagfæring á honum lagar hvert afrit.

- {{ui:Sýna}} opnar þann hóp og velur brúnir og fleti sem eru rangir, svo þeir sjást auðkenndir.
- {{ui:Laga það sem hægt er}} lagar þá alla í einu: það lokar götum sem brúnir þeirra liggja flatar, fjarlægir fleti inni í forminu og laus brúnir, og snýr fletum rétt út á við. Það er eitt skref: {{key:Mod+Z}} afturkallar því. Athugunin keyrir þá aftur og sýnir það sem eftir er.

Það sem hún getur ekki lagað (gat sem brúnir liggja ekki flatar við, hluti sem fer í gegnum sjálfan sig) stendur áfram á listanum með því hvað á að gera með höndunum. {{ui:Lagfæra}} undir **Prentverkfæri** gengur lengra: það lokar götum sem ekki eru flöt, fjarlægir lausa hluta og tvöfalda fleti, og skráir allar lagfæringar. Sjá [Stuðningar, veggþykkt, holun og viðgerð](topic:print-tools#repair). Þú getur einnig lagað einn hóp í einu: veldu hann, og notaðu síðan {{ui:Sýna vandamál}} og {{ui:Laga}} í {{ui:Upplýsingar um eind}}. Sjá [Verkfæri fyrir föst form](topic:solids).

## Holur hluti

{{ui:Holað}} undir **Prentverkfæri** holar hluta út að veggþykktinni sem þú gefur, með frárennslisgötum þar sem þú smellir. Sjá [Holað](topic:print-tools#hollow).

Þú getur líka teiknað holið sjálfur: lokaðan hóp inni í hlutanum, sem snertir hann ekki, með öllum fleti snúið við svo þeir vísi inn í holið. Athugunin telur það sem hol og dregur rúmmál þess frá; það er ekki skráð sem atriði til að laga.

## Prentbeð prentarans

Veldu stærð prentbeðs prentarans í {{ui:Stillingar}} › {{ui:ModelCraft}} › {{ui:Prentbeð þrívíddarprentara}}. Athugunin varar þá við þegar líkanið er stærra en beðið, snúið hvora leið sem er. Sjá [Stillingar](topic:settings#3d-printer-bed).

## Prentverkfæri

Undir niðurstöðum gluggans opnar **Prentverkfæri** {{ui:Forskoðun stuðninga}} (hvar stuðningar fara og hversu mikið um það bil), {{ui:Veggþykkt}} (veggir sem eru of þunnir til að prenta), {{ui:Holað}} og {{ui:Lagfæra}}. Sjá [Stuðningar, veggþykkt, holun og viðgerð](topic:print-tools). {{ui:Skipting til prentunar}} sker líkan sem er of stórt fyrir beðið í búta með tengjum og númeruðum samskeytum: sjá [Skipta stóru líkani til prentunar](topic:print-split).

## Ekki athugað

Athugunin sneiðir ekki: smáatriði sem stúturinn þinn getur ekki teiknað og raunverulegir stuðningar eru hjá sneiðaranum þínum. Sjá [Ekki tilbúið enn](topic:not-built-yet#3d-printing).
