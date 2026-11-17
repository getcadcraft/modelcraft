---
title: Plase
summary: Transformați un grup sau o componentă într-o plasă — felul de obiect cu care modelează uneltele de conținut 3D — și înapoi în geometrie push/pull.
keywords: plasă, plase, poligon, poligoane, n-gon, patrulater, patrulatere, vârfuri, half-edge, UV, convertire, convertire în plasă, convertire în geometrie, subdivizare, sculptare, modelare, conținut 3D
from: e32363e8
---

ModelCraft are două feluri de geometrie. **Geometria push/pull** este ce desenați: fețe plane care se lipesc între ele, se taie reciproc și se refac. O **plasă** este felul de obiect cu care modelează uneltele de conținut 3D: fețe cu oricâte colțuri, fiecare colț putându-și purta propriile coordonate de textură (UV), normale și culori, iar fiecare vârf valori precum greutățile. O plasă se așază ca un grup sau o componentă și stă alături de geometria push/pull în același model.

## Transformarea unui grup sau a unei componente în plasă

1. Selectați un grup sau o componentă.
2. În {{ui:Informații entitate}}, faceți clic pe {{ui:Convertire în plasă}}.

Fețele sale devin fețele plasei (o față cu găuri intră ca triunghiuri), muchiile tari rămân ascuțite, muchiile moi se umbresc lin, iar vopseaua, materialele și texturile importate rămân pe fețele lor. Grupurile și componentele din interior sunt unite într-una singură. Muchiile libere sunt lăsate afară: o plasă păstrează fețe. Fiecare plasare a unei componente arată plasa. Este un singur pas de anulare.

## Ce arată Informații entitate

Selectați o plasă ca să vedeți fețele, vârfurile și muchiile ei, dacă este un solid închis (și volumul ei), precum și dimensiunea ca plasată. O plasă cu muchii deschise spune câte are.

## Transformarea unei plase înapoi în geometrie push/pull

Selectați plasa și faceți clic pe {{ui:Convertire în geometrie}}. Fețele plane revin cum erau; o față ale cărei colțuri nu sunt într-un plan revine ca triunghiuri. Muchiile ascuțite devin tari, celelalte moi. {{ui:Descompunere}} pune fețele unei plase direct în grupul din jurul ei.

## De reținut

- Faceți dublu clic pe o plasă ca s-o [editați vârfurile, muchiile și fețele](topic:mesh-edit) în spațiul de lucru Plasă. Convertiți-o în geometrie ca s-o editați cu push/pull; mutați, rotiți, scalați, copiați, vopsiți, ascundeți și etichetați-o ca orice grup.
- Exporturile, imprimarea 3D, randările și VR văd o plasă ca fețele ei.
- Un fișier care conține o plasă este salvat ca o versiune mai nouă a fișierului `.modelcraft`, deci ModelCraft 0.6 și mai vechi nu îl pot deschide; fișierele fără plasă se deschid în ele ca înainte. Convertiți plasele în geometrie întâi ca să partajați un fișier cu cineva dintr-o versiune mai veche.
- Anularea la o plasă păstrează doar ce a schimbat fiecare pas, deci chiar și o plasă foarte mare se anulează repede.

Vezi și [Grupuri și componente](topic:groups-components) și [Încă nerealizat](topic:not-built-yet).
