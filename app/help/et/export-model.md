---
title: Mudeli eksportimine teistele programmidele
summary: Vali õige eksport renderdamiseks, veebi, 3D-printimise, BIM-i ja BimCrafti jaoks ning kontrolli, mida iga eksport säilitab.
keywords: prindi, 3mf, pdf, paber, pilt, png, ekraanitõmmis, renderda, salvesta vaade, ekspordi, jaga, renderdamine, gltf, glb, collada, dae, obj, stl, 3D-printimine, ifc, bim, bimcraft, saada, muud tarkvarad
from: 9e13e80d
---

Eksport teeb mudelist koopia teises vormingus. Hoia ka oma `.modelcraft` fail: see on ainus fail, mis säilitab kõik, ja ainus, mida ModelCraft otse avab.

## Eksport

1. Salvesta esmalt ({{key:Mod+S}}), et töötav fail oleks kaitstud.
2. Klõpsa grupis {{ui:Fail}} nuppu {{ui:Ekspordi}}.
3. Vali vorming. Brauser laadib faili alla, nimega nagu mudel.

Eksporditakse kogu mudel. Ühe osa eksportimiseks salvesta, kustuta ülejäänu, ekspordi ja seejärel võta tagasi või ava fail uuesti.

## Milline vorming

| Soovid | Vali | Märkused |
|---|---|---|
| Avada teises 3D-modelleerijas | {{ui:Collada (.dae)}} | Säilitab grupid, sisegrupid, komponendid (jagatud, mitte kopeeritud), nimed ja värvid. Z üles, meetrid. |
| Renderdada või kasutada visualiseerimisprogrammis | {{ui:OBJ (.obj)}} või {{ui:glTF binaarne (.glb)}} | OBJ on kõige laialdasemalt loetav; ta kirjutab iga grupi paigutuse eraldi objektina, kuid värve ega jagatud komponente ei ole. glTF säilitab komponendid ja värvid. |
| Panna veebi, mänguarvestisse või AR-i | {{ui:glTF binaarne (.glb)}} | Üks fail, kus on kõik. |
| Printida 3D-s | {{ui:Kontrolli 3D-printimist (STL või 3MF)…}} | Kontrollib, et mudel on suletud ja tahud on õigesti suunatud, seejärel kirjutab STL või 3MF millimeetrites. Vaata [Mudeli ettevalmistamine 3D-printimiseks](topic:print-3d). {{ui:STL printimiseks (.stl, millimeetrites)}} kirjutab kogu mudeli ilma kontrollita. |
| Avada BimCrafti või muus BIM-programmis | {{ui:IFC BimCraftile (.ifc)}} | Iga kõige ülemise taseme grupp või komponent muutub üheks ehitiselemendiks. |

Olekuriba kinnitab iga ekspordi, näiteks „House.stl eksporditud (millimeetrites).“ või „House.dae eksporditud (Collada 1.4.1, Z üles, meetrid; komponendid jäävad jagatuks).“

## Enne eksportimist

- **Grupeeri oma objektid.** Collada, glTF ja IFC säilitavad grupid ja komponendid eraldi objektidena. Lahtine geomeetria läheb välja ühe tükina; IFC-s muutub see ühe elemendiks nimega „Lahtine geomeetria“.
- **Anna nimed.** Grupi ja komponendi nimed lähevad Collada-sse ja IFC-sse, nii et sein nimega „Põhjasein“ jõuab kohale samana.
- **Kontrolli tahu suunda.** Väljastpoolt sinakashalli näivad tahud on eksportis sissepoole suunatud. Paranda need nupuga {{ui:Pööra tahk ümber}} (vaata [Kustuta ja puhasta](topic:erase#a-face-facing-the-wrong-way)).
- **Printimiseks** tee osad suletud tahketeks kehadeks: vali iga grupp ja kontrolli, et {{ui:Objekti teave}} ütleb „Tahke: Jah“. Seejärel skaleeri mudel prinditavasse suurusesse või skaleeri see printeri tarkvaras.

## Mudeli saatmine BimCrafti

1. Tee iga ehitusosa grupiks või komponendiks ja anna sellele nimi.
2. Vali {{ui:Ekspordi}}, seejärel {{ui:IFC BimCraftile (.ifc)}}.
3. Ava allalaaditud `.ifc` fail BimCraftis.

Kontseptuaalse mahumudeli jaoks kasuta hoopis {{ui:Ekspordi}} › {{ui:Mahumudel BimCrafti…}}: iga grupp läheb mahuvariandina koos korruste, korrusepindade ja mahuga. Vaata [Mahumudeli saatmine BimCrafti](topic:massing-to-bimcraft).

Tavalisel IFC eksportil ei ole kahe rakenduse vahel otsest seost. IFC-l on üks korrus ja iga element on üldine ehitiselemendi asendaja ilma tüübi või omadusteta: sellel on ainult kuju ja nimi. Suletud grupid muutuvad tahketeks kujudeks; avatud grupid pindadeks.

## Joonteta jäävad servad

Servad, mis ei ole ühegi tahu osa (abijoonetaolised jooned, imporditud asukohaplaan), lähevad OBJ-sse ja Collada-sse joontena. glTF-l ja STL-l pole nende jaoks kohta ja nad jäetakse välja. Abijooned ja stseenid ei eksporditu ühtegi vormingusse.

## Vaate salvestamine pildina

{{ui:Ekspordi}} › {{ui:Vaate pilt (.png)}} salvestab täpselt selle, mida 3D-vaade näitab, ekraanisuuruses. {{ui:Pilt kahekordses suuruses (.png)}} salvestab selle kaks korda laiemana ja kaks korda kõrgemana (printimiseks või teravaks slaidiks), kusjuures mõõtmed ja märgised joonistatakse selles suuruses uuesti, mitte ei venitata.

Päevavalgusena näivale pildile (taevas, päike, pehmed varjud, klaas) kasuta {{ui:Ekspordi}} › {{ui:Renderda pilt…}}: vaata [Pildi renderdamine](topic:render).

Puhta pildi jaoks lülita esmalt sisse [esitlusvaade](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): teljed, abijooned, lõigete piirjooned ja valik jäetakse välja. Seadista kaamera, stiil ja varjud soovitud viisil või mine [stseenile](topic:scenes); oma stseenide liikuva filmi salvestamiseks kasuta paneelil {{ui:Stseenid}} nuppu {{ui:Ekspordi animatsioon}}.

## Vaate printimine või PDF-ina salvestamine

- {{ui:Ekspordi}} › {{ui:Vaate PDF (.pdf)}} salvestab ühe leheküljelise PDF-i: vaade kahekordses ekraanisuuruses koos mõõtmetega A4 lehel (Letter, kui mudel on jalgades ja tollides), horisontaalselt, koos joonega all, kus on failinimi, kuupäev ja mõõtühik.
- {{ui:Ekspordi}} › {{ui:Prindi vaade…}} asetab sama lehe brauseri printimisdialoogi ette. Vali printer või „Salvesta PDF-ina“.

Leht näitab vaadet sellisena, nagu see on: perspektiivvaate juures mõõtkava ei ole. Mõõtkavas joonise jaoks lülita {{ui:Perspektiiv}} välja ja vaata {{ui:Ülavaade}} või {{ui:Eest}} pealt ning lisa olulistele suurustele [mõõdud](topic:dimensions). [Esitlusvaade](topic:styles-shadows#presentation-view) jätab teljed, abijooned ja valiku välja; mõõdud jäävad alles.
