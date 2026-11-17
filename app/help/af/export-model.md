---
title: Voer 'n model uit vir ander programme
summary: Kies die regte uitvoer vir weergee, die web, 3D-druk, BIM en BimCraft, en kontroleer wat elkeen behou.
keywords: druk, 3mf, pdf, papier, beeld, png, prent, skermskoot, weergee, stoor aansig, voer uit, deel, weergee, gltf, glb, collada, dae, obj, stl, 3D-druk, ifc, bim, bimcraft, stuur, ander sagteware
from: 9e13e80d
---

Uitvoer maak 'n kopie van die model in 'n ander formaat. Hou ook jou `.modelcraft`-lêer: dit is die enigste lêer wat alles behou, en die enigste een wat ModelCraft direk oopmaak.

## Voer uit

1. Stoor eers ({{key:Mod+S}}), sodat jou werklêer veilig is.
2. Klik {{ui:Voer uit}} in die {{ui:Lêer}}-groep.
3. Kies die formaat. Die blaaier laai dit af, met 'n naam soos die model s'n.

Die hele model word uitgevoer. Om een deel uit te voer, stoor, vee die res uit, voer uit, en ontdoen of maak weer oop.

## Watter formaat

| Jy wil | Kies | Notas |
|---|---|---|
| Dit in 'n ander 3D-modelleerder oopmaak | {{ui:Collada (.dae)}} | Behou groepe, geneste groepe, komponente (gedeel, nie gekopieer nie), name en kleure. Z op, meter. |
| Dit weergee, of dit in 'n visualiseringsprogram gebruik | {{ui:OBJ (.obj)}} of {{ui:glTF binary (.glb)}} | OBJ word die wydste gelees; dit skryf elke groepplasing as 'n aparte voorwerp, maar het geen kleure en geen gedeelde komponente nie. glTF behou komponente en kleure. |
| Dit op die web, in 'n speletjie-enjin of in AR sit | {{ui:glTF binary (.glb)}} | Een lêer met alles daarin. |
| Dit in 3D druk | {{ui:Check for 3D printing (STL or 3MF)…}} | Kontroleer dat die model gesluit is en die regte kant toe wys, en skryf dan STL of 3MF in millimeter. Sien [Maak 'n model gereed vir 3D-druk](topic:print-3d). {{ui:STL for printing (.stl, millimeters)}} skryf die hele model sonder die kontrole. |
| Dit in BimCraft of 'n ander BIM-program oopmaak | {{ui:IFC for BimCraft (.ifc)}} | Elke boonste groep of komponent word een boukundige element. |

Die statusbalk bevestig elke uitvoer, byvoorbeeld "Uitgevoer House.stl (millimeter)." of "Uitgevoer House.dae (Collada 1.4.1, Z op, meter; komponente bly gedeel)."

## Voor jy uitvoer

- **Groepeer jou voorwerpe.** Collada, glTF en IFC hou groepe en komponente as aparte voorwerpe. Los meetkunde gaan uit as een klont; in IFC word dit een element genaamd "Los geometrie".
- **Gee hulle name.** Groep- en komponentname gaan in Collada en IFC, so 'n muur genaamd "Noordmuur" kom as "Noordmuur" aan.
- **Kontroleer vlakrigting.** Vlakke wat blougrys op die buitekant wys, sal na binne wys in die uitvoer. Maak hulle reg met {{ui:Keer vlak om}} (sien [Uitvee en skoonmaak](topic:erase#a-face-facing-the-wrong-way)).
- **Vir druk,** maak die dele geslote soliede liggame: kies elke groep en kontroleer dat {{ui:Entiteitinligting}} "Massief: Ja" sê. Skaal dan die model na die gedrukte grootte, of skaal dit in die drukkersagteware.

## Stuur 'n model na BimCraft

1. Maak elke boudeel 'n groep of komponent en gee dit 'n naam.
2. Kies {{ui:Voer uit}}, dan {{ui:IFC for BimCraft (.ifc)}}.
3. Maak die afgelaaide `.ifc`-lêer in BimCraft oop.

Vir konsepmassa, gebruik {{ui:Voer uit}} › {{ui:Massa na BimCraft…}} in plaas daarvan: elke groep gaan as 'n massa-opsie met verdiepings, vloeroppervlaktes en volume. Sien [Stuur massa na BimCraft](topic:massing-to-bimcraft).

Die gewone IFC-uitvoer het geen direkte skakel tussen die twee programme nie. Die IFC het een verdieping, en elke element is 'n generiese boukundige elementproxy sonder tipe of eienskappe: dit dra slegs vorm en naam. Geslote groepe word soliede vorms; oop groepe word oppervlaktes.

## Lyne sonder vlakke

Rande wat nie deel van enige vlak is nie (gidsagtige lyne, 'n ingevoerde terreinplan), gaan as lyne na OBJ en Collada. glTF en STL het geen plek daarvoor nie en laat hulle uit. Gidse en tonele word na geen formaat uitgevoer nie.

## Stoor die aansig as 'n beeld

{{ui:Voer uit}} › {{ui:Beeld van die aansig (.png)}} stoor presies wat die 3D-aansig wys, op sy grootte op die skerm. {{ui:Beeld op twee keer die grootte (.png)}} stoor dit twee keer so breed en twee keer so hoog (vir druk of 'n skerp skyfie), met afmetings en merkers wat op daardie grootte herteken word eerder as uitgerek.

Vir 'n prent wat soos daglig lyk (lug, son, sagte skaduwees, glas), gebruik {{ui:Voer uit}} › {{ui:Weergee 'n prent…}} in plaas daarvan: sien [Weergee 'n prent](topic:render).

Vir 'n skoon prent, skakel eers [aanbiedingsaansig](topic:styles-shadows#presentation-view) aan ({{key:Shift+P}}): die asse, gidse, snitlyne en die keuse word uitgelaat. Stel die kamera, styl en skaduwees soos jy wil hê, of gaan na 'n [toneel](topic:scenes); om 'n bewegende film van jou tonele te stoor, gebruik {{ui:Voer animasie uit}} in die {{ui:Tonele}}-paneel.

## Druk die aansig, of stoor dit as 'n PDF

- {{ui:Voer uit}} › {{ui:PDF van die aansig (.pdf)}} stoor 'n PDF van een bladsy: die aansig op twee keer sy skermgrootte, met sy afmetings, op 'n A4-bladsy (Letter wanneer die model in voet en duim is), liggend, met 'n lyn daaronder wat die lêernaam, die datum en die eenheid gee.
- {{ui:Voer uit}} › {{ui:Druk die aansig…}} plaas dieselfde bladsy voor jou blaaier se druk-dialoog. Kies 'n drukker, of "Stoor as PDF".

Die bladsy wys die aansig soos dit is: 'n perspektiefaansig het geen skaal nie. Vir 'n tekening op skaal, skakel {{ui:Perspektief}} af en kyk van {{ui:Bo}} of {{ui:Voor}}, en voeg [afmetings](topic:dimensions) by vir die groottes wat saak maak. [Aanbiedingsaansig](topic:styles-shadows#presentation-view) laat die asse, gidse en die keuse uit; afmetings bly.
