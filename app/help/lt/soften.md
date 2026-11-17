---
title: Suminkštinti ir išlyginti briaunas
summary: Paslėpkite briaunas tarp paviršių, susitinkančių nedideliu kampu, kad kreivos formos atrodytų kaip vienas glotnus paviršius – ModelCraft ir eksportuotuose failuose.
keywords: suminkštinti, išlyginti, minkštos briaunos, glotnus šešėliavimas, paslėpti briaunas, paviršiai, briaunotas, kreivas, normalės, sukietinti, kampas
from: 52d32453
---

Kreiva forma ModelCraft sudaryta iš plokščių paviršių. **Minkštos** briaunos tarp šių paviršių nebraižomos, o paviršiai, kuriuos jos jungia, šešeliuojami kaip vienas glotnus paviršius, todėl 24 kraštinių cilindras atrodo apvalus.

Kai ištraukiate apskritimą su {{ui:Stumti/traukti}}, jo šonai automatiškai suminkštinami. Kitoms formoms suminkštinkite pagal kampą.

## Suminkštinimas pagal kampą

1. Pasirinkite, ką suminkštinti: paviršius ir briaunas arba grupę ar komponentą (visas jo briaunas).
2. {{ui:Objekto informacija}} lauke {{ui:Suminkštinti iki}} įveskite kampą, pavyzdžiui, `20`, ir spustelėkite {{ui:Suminkštinti}}.

Kiekviena pasirinkimo briauna, kurios abu paviršiai pasisuka tuo kampu ar mažiau, tampa minkšta; briaunos su aštresniu posūkiu lieka kietos. 12 kraštinių prizmės šonai pasisuka 30°, o jos kraštai – 90°, todėl `31` suminkština tik šonus.

{{ui:Sukietinti visas}} visas pasirinkimo briaunas vėl padaro kietas. Kiekvienas žingsnis yra vienas anuliavimo žingsnis.

## Verta žinoti

- Suminkštinamos tik briaunos tarp tiksliai dviejų paviršių. Laisvos briaunos lieka kaip yra.
- Glotnus šešėliavimas veikia tik per minkštas briaunas: paviršius be minkštos briaunos šešeliuojamas plokščiai.
- Minkštos briaunos išsaugomos ModelCraft faile. **glTF (.glb)** ir **OBJ** eksportai perduoda glotnų šešėliavimą (normalę kiekviename kampe), todėl kitos programos rodo tą patį paviršių. Collada ir STL eksportuoja plokščius paviršius.
- Minkštos briaunos paslepiamos visuose paviršių stiliuose, taip pat {{ui:Rentgenas}} ir {{ui:Karkasas}}. Kad jas pamatytumėte, pasirinkite formą ir spustelėkite {{ui:Sukietinti visas}}; anuliavimas grąžina suminkštinimą.
