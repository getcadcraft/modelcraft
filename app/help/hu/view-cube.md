---
title: A nézetkocka
summary: Kattintson a kocka lapjára, élére vagy sarkára a nézet sarkában, hogy onnan nézzen; húzza a körüljáráshoz, forgassa az iránytű gyűrűt, lépkedjen egy szembenéző nézet körül, és térjen vissza az alapnézetbe.
keywords: nézetkocka, viewcube, kocka, iránytű, észak, alapnézet, szabványos nézetek, felülnézet, elölnézet, jobb oldal, izo, sarok, él, körüljárás, nézet forgatása, tengelyikon, sarokjelző, navigáció
from: e1ec1347
---

A nézetkocka a 3D-nézet jobb felső sarkában áll. A nézettel együtt fordul, így mindig mutatja, merre néz: a {{ui:Felülnézet}} felfelé van, az {{ui:Elölnézet}} délre néz (észak felé néz, a zöld tengely mentén, ha ránéz), a {{ui:Jobb oldal}} keletre néz (piros tengely). Amíg rá nem mutat, átlátszó marad.

## Nézet oldalról, élről vagy sarokból

1. Mutasson a kockára. A mutató alatti rész kivilágosodik: egy lap közepe, egy él (mindkét közös lapon kivilágít) vagy egy sarok (mindhárom lapon).
2. Kattintson rá. A nézet odafordul, megtartva ugyanazt a középpontot és nagyítást.

26 kattintható hely van: 6 lap ({{ui:Felülnézet}}, {{ui:Alulnézet}}, {{ui:Elölnézet}}, {{ui:Hátulnézet}}, {{ui:Bal oldal}}, {{ui:Jobb oldal}}), 12 él és 8 sarok. A sarok a klasszikus háromnegyedes nézetet adja; az él két lap között félúton néz.

Az {{ui:Elölnézet}} kattintása ugyanaz, mint az eszköztár {{ui:Nézetek}}, {{ui:Elölnézet}} lehetősége, csak az illesztéses nagyítás nélkül. A {{ui:Nézetek}} továbbra is az egész modellre nagyít.

## Körüljárás a kocka húzásával

Húzza a kockát a nézet elforgatásához, ugyanúgy, mint magában a nézetben való körüljáráskor. A húzást soha nem veszi kattintásnak, így a kockát bárhol megfoghatja.

## Az iránytű gyűrű

A kocka alatti gyűrűn az É, K, D és Ny betűk vannak.

- **Húzza a gyűrűt**, hogy a modellt a függőleges tengely körül forgassa, mintha forgóasztalon állna. A gyűrű követi a mutatót.
- **Kattintson egy betűre**, hogy arról az oldalról nézzen, megtartva, milyen meredeken néz lefelé. Felülről nézve a kattintott betű a képernyő aljára kerül.

## Szemből nézett nézetek: nyilak

Ha egyenesen egy lapra néz, kis nyilak jelennek meg a kocka körül:

- A négy **háromszög** az adott oldalon lévő lapot hozza elé: a kocka fölötti háromszög azt a lapot mutatja, amely korábban felül volt, és így tovább.
- A jobb felső sarokban lévő két **ívelt nyíl** a képet negyedfordulattal forgatja az óramutató járásával megegyező vagy azzal ellentétes irányban, anélkül hogy megváltoztatná, melyik lapra néz. Alaprajz elforgatására használja, hogy egy hosszú fal a képernyő keresztbe fusson.

## Alapnézet

A kocka bal felső sarkában lévő házgomb visszatér a háromnegyedes {{ui:Izo}} nézetbe, és az egész modellt illeszti. A {{key:Home}} ugyanezt teszi, amíg a kocka billentyűzetfókuszban van.

## Billentyűzettel

A {{key:Tab}} billentyűvel lépjen a kockára, majd:

| Billentyű | Funkció |
|---|---|
| {{key:left}} / {{key:right}} | lap, él vagy sarok kiválasztása a kocka körül, nyolcadfordulatonként (képernyőolvasók mondják, melyik) |
| {{key:up}} / {{key:down}} | magasabb vagy alacsonyabb kiválasztása; felfelé a {{ui:Felülnézet}}, lefelé az {{ui:Alulnézet}} felé |
| {{key:Enter}} vagy {{key:Space}} | nézet a kiválasztott helyről |
| {{key:Shift+left}} / {{key:Shift+right}} | a nézet negyedfordulata a függőleges tengely körül |
| {{key:Home}} | az alapnézet |
| {{key:Esc}} | kilépés a kockából |

A kockán lenyomott billentyűk a kockánál maradnak: nem indítanak ModelCraft-eszközöket.

## Tengelyikon vagy semmi

Nyissa meg a {{ui:Beállítások}} részt ({{key:Mod+,}}), a {{ui:ModelCraft}} lapot, és állítsa a **Sarokjelző** értékét: {{ui:Nézetkocka}} (a kezdeti), {{ui:Tengelyikon}} (kis X, Y, Z jel a bal alsó sarokban: X piros, Y zöld, Z kék) vagy {{ui:Nincs}}. Ez a böngésző megjegyzi a választást. Lásd: [A ModelCraft beállításai](topic:settings#corner-indicator).

:::note
A ModelCraft-ban nincs billentés (roll): a függőleges lefelé és felfelé nézetektől eltekintve a képernyő felfelé iránya mindig a modell felfelé iránya. A kocka és az ívelt nyilak forgathatják az alaprajz-nézetet; oldalnézetet nem tudnak az élére billenteni.
:::
