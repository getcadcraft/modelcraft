---
title: Modela sobre un plànol de situació des d'un DWG o DXF
summary: Importeu un plànol de situació o de planta CAD com a línies sobre el terra, respongueu la pregunta de les unitats i traceu-lo en cares i masses.
keywords: plànol de situació, dwg, dxf, cad, importa, croquis, foto de croquis, croquis a mà, croquis en un tovalló, foto, paper, colors de bolígraf, blocs dinàmics, estats de visibilitat, text, trama, spline, el·lipse, cara 3D, traça, planta, parcel·la, límit de propietat, unitats, base, context
from: 3415dc96
---

ModelCraft pot importar les línies d'un dibuix CAD 2D, d'un plànol de situació o d'una planta, i col·locar-les sobre el terra perquè hi pugueu modelar a sobre.

## Importa el dibuix

1. Feu clic a {{ui:Importa}} al grup {{ui:Fitxer}} (o deixeu el fitxer a la vista 3D).
2. Trieu un fitxer `.dwg` o `.dxf`.

   Un DWG gran triga una estona: la barra d'estat diu "Llegint plan.dwg…" fins que és dins.

3. Si el dibuix no indica quines són les seves unitats, un diàleg titulat "Unitats del dibuix" pregunta: "Què és una unitat del dibuix?" Trieu {{ui:Polzades}}, {{ui:Peus}}, {{ui:Mil·límetres}} o {{ui:Metres}}. La majoria de plànols de situació dels EUA es dibuixen en peus, els arquitectònics en polzades, i els mètrics en mil·límetres.

   El dibuix arriba com un grup d'arestes sobre el terra, seleccionat, i la vista fa zoom cap a ell. La barra d'estat indica quantes arestes han arribat, per exemple "Importat site.dwg: 1697 arestes sobre el terra, en un grup. Descomponeu-lo per dibuixar-hi directament."

## Què arriba

- Línies, polilínies (incloent-hi els seus arcs), cercles i arcs, i blocs amb tot el que contenen, només de l'**espai model**. Les corbes es converteixen en trams rectes curts.
- Línies, polilínies, arcs, cercles, el·lipses i splines es posen plans sobre el terra, com a arestes.
- Les **trames** es converteixen en cares sobre el terra, amb les seves illes com a forats, de manera que podeu prem/estirar una àrea amb trama de seguida.
- Les **cares 3D** i els farciments sòlids es converteixen en cares; les cares 3D conserven les seves alçades.
- El **text** (text d'una línia, text multilínia i valors d'atribut) es dibuixa com a arestes en una lletra simple d'un traç, amb l'alçada, l'angle i l'alineació del text. El seu tipus de lletra no és el del dibuix, així que les paraules poden ser una mica més llargues o més curtes. Els caràcters que la lletra no té forma es dibuixen com a petites caixes i es compten.
- Les **cotes** es dibuixen tal com les mostra el dibuix (les seves línies, punyes de fletxa i text, com a arestes i cares).
- Els **blocs dinàmics** arriben tal com els mostra el dibuix: cada bloc col·locat en l'estat de visibilitat amb què es va desar, i només les línies d'aquest estat. La barra d'estat els llista amb els estats mostrats i els altres estats que té cadascun, per exemple "Receptacle mostrat com a Duplex ×38, GFI ×7 (estats: Duplex, GFI)". ModelCraft no canvia d'estat.
- Els **sòlids 3D, regions i cossos** (les dades ACIS del dibuix) arriben com a grups propis: un sòlid tancat com a sòlid, una regió o un cos obert com a cares. Les cares planes arriben senceres; les cares corbes (cilindres, cons, esferes, tors, superfícies spline simples) com a petits triangles amb vores suaus entre ells, de manera que només es veuen les arestes pròpies del sòlid. Una cara sobre un altre tipus de superfície es deixa fora i es llista: "Encara no dibuixat (sòlids 3D): …".
- No s'importen: punts, taules, multilíders, imatges i altres tipus d'objectes. La barra d'estat els llista per tipus, com "No importat: 12 POINT." Tot el que hi ha en un plànol (espai de paper) també es deixa fora, sense llistar-se.
- Les capes no es conserven: totes les línies arriben iguals.

Si el dibuix és lluny del seu origen (coordenades de pla estatal, per exemple), s'importa igualment, però pot quedar lluny de l'origen de ModelCraft. Els dibuixos que superen els 10,000 km del seu origen es rebutgen: mogueu-los més a prop de 0,0 al programa CAD primer.

## Traça-ho en cares

Les línies importades rarament es tanquen netament en cares per elles soles. Hi ha dues maneres de treballar:

**Mantingueu el plànol com a base (recomanat)**

1. Deixeu el plànol com a grup propi.
2. Dibuixeu l'edifici a sobre amb {{ui:Rectangle}} i {{ui:Línia}}, fent ajust als cantons del plànol ("Punt final") i a les seves arestes ("Sobre aresta").
3. Premeu les cares amunt amb {{ui:Prem/Estira}}. El plànol es queda intacte a sota, i podeu esborrar tot el grup després amb un clic.

L'ajust funciona entre grups: podeu fer-lo als cantons del plànol sense obrir-lo.

**Dibuixeu sobre les línies del mateix plànol**

1. Seleccioneu el grup del plànol i feu clic a {{ui:Descompon}}. Les seves línies es converteixen en arestes soltes.
2. On un contorn tancat hauria de ser una cara, dibuixeu una línia sobre qualsevol de les seves arestes amb {{ui:Línia}}, de cantó a cantó. Quan el contorn és tancat i pla, la cara sol omplir-se. Si no, busqueu un buit o una superposició al contorn i dibuixeu-hi a sobre.
3. Premeu-la amb {{ui:Prem/Estira}}.

Això funciona millor amb un plànol net. En un plànol topogràfic carregat, és més ràpid traçar a sobre.

## Problemes

- "Aquest és un DXF binari. Deseu-lo com a DXF ASCII i torneu-ho a intentar." Deseu de nou el DXF des del programa CAD com a ASCII (text).
- "…no té línies, arcs ni cercles a l'espai model per importar." Probablement el dibuix és tot en plànols, o tot text i trames.
- "No s'ha pogut llegir aquest dibuix (…). Pot estar malmès, o desat en una versió de DWG que el lector no gestiona…" Les parèntesis indiquen el motiu, per exemple "la versió DWG AC1009 no és compatible". Deseu-lo com a DXF, o com a DWG d'AutoCAD 2000 a 2018, des del programa CAD.
- El plànol té una mida incorrecta: heu triat una unitat equivocada. Desfeu ({{key:Mod+Z}}) i torneu a importar, o [escaleu](topic:rotate-scale) el grup pel factor correcte (12 entre peus i polzades, 25.4 entre polzades i mil·límetres).

Per convertir les línies de nivell en terreny que es pugui modelar, vegeu [Terreny](topic:terrain).

## D'una foto d'un croquis a mà

**Fitxer › Importa una foto de croquis…** pren una foto d'un croquis sobre paper (JPEG, PNG o TIFF; una foto directa del mòbil serveix) i crea el mateix tipus d'arestes sobre el terra. Indiqueu quin paper és (o deixeu que en trobi el full, que es pren com a A4) i l'escala del croquis, per exemple 1 : 100. Es troba la vora del paper i la foto s'endreça, la tinta es traça en línies i arcs, i cada color de bolígraf (negre, vermell, blau, verd) esdevé un grup propi amb una etiqueta (**Croquis negre**, **Croquis vermell**, …), tot dins d'un grup que porta el nom de la foto. És un sol pas de desfer, i tot passa en aquest ordinador: no s'envia res enlloc.

Quan no es troba la vora del paper, tota la foto es pren com a full i la línia d'estat ho diu: mesureu alguna cosa que conegueu i escaleu el grup si és fora de mida. Traceu les línies en cares com més amunt.
