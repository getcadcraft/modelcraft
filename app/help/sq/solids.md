---
title: Veglat e trupave të ngurtë: bashkim, zbritje, kryqëzim
summary: Bashkoni grupe dhe komponentë të mbyllur në një, prisni një nga tjetri, ose mbani vetëm atë që kanë të përbashkët.
keywords: trup i ngurtë, trupa, inspektori i trupit, jo trup i ngurtë, rregullo trupin, vrimë, skaj i humbur, nga brenda jashtë, bashkim, bashko, kombino, bashkoj, zbritje, ndarje, prerje, vrimë, kryqëzim, boolean, guaskë e jashtme
from: f35df1cc
---

Veglat e trupave të ngurtë kombinojnë **trupa të ngurtë**: grupe dhe komponentë, sipërfaqet e të cilëve mbyllin një vëllim, me çdo skaj që bashkon saktësisht dy sipërfaqe. {{ui:Informacioni i entitetit}} thotë {{ui:Trup i ngurtë}}: {{ui:Po}} për një të tillë, dhe tregon vëllimin e tij.

Ato janë në menynë {{ui:Solide}} në grupin {{ui:Organizo}}.

## Kur diçka nuk është trup i ngurtë

Përzgjidhni grupin ose komponentin. Kur nuk është trup i ngurtë, {{ui:Informacioni i entitetit}} thotë pse, për shembull "Nuk është trup i ngurtë: 4 skaje kufizohen me një vrimë · 1 skaj i humbur":

| Problemi | Çfarë do të thotë |
|---|---|
| Skaje kufizohen me një vrimë | Mungon një sipërfaqe |
| Skaje të ndara nga tre sipërfaqe ose më shumë | Një sipërfaqe ndan brendësinë, ose dy forma takohen përgjatë një skaji |
| Sipërfaqe brenda formës | Një mur i lënë brenda vëllimit |
| Skaje të humbura | Vija që nuk kufizojnë asnjë sipërfaqe |
| Sipërfaqe të kthyera nga brenda jashtë | Pamja e tyre përballë brenda, kundrejt fqinjëve |

{{ui:Shfaq problemet}} e hap me ato skaje dhe sipërfaqe të përzgjedhura, që t'i shihni. {{ui:Rregullo}} i ndreq rastet e thjeshta me një hap zhbërjeje: heq skajet e humbura dhe sipërfaqet brenda formës, kthen sipërfaqet në drejtimin e duhur, dhe mbyll vrimat kur buza e tyre është e sheshtë. Çdo gjë që nuk mund të ndreqet në mënyrë të sigurt (një vrimë që nuk është e sheshtë, një skaj i ndarë nga shumë sipërfaqe) lihet për ju, dhe thotë çfarë ka mbetur.

## Bashkimi

1. Përzgjidhni dy ose më shumë trupa të ngurtë (klikoni një, pastaj {{key:Ctrl}}+klikim te të tjerët).
2. {{ui:Solide}} › {{ui:Bashkim}}.

Ata bëhen një trup i vetëm, në një grup. Aty ku mbiviheshin, sipërfaqet brenda zhduken.

## Zbritja

1. {{ui:Solide}} › {{ui:Zbritje}}.
2. Klikoni trupin për ta **hequr** (prerësin).
3. Klikoni trupin për ta **prerë**.

Ajo që mbetet nga trupi i dytë qëndron; prerësi shpenzohet. Për shembull, për të bërë një vrimë përmes një blloku, vizatoni një shtyllë përmes tij, bëjeni shtyllën një grup, pastaj zbriteni shtyllën nga blloku.

## Kryqëzimi

Përzgjidhni dy ose më shumë trupa të ngurtë, pastaj {{ui:Solide}} › {{ui:Kryqëzim}}. Mbahet vetëm pjesa që të gjithë e kanë të përbashkët.

## Gjëra që duhen ditur

- Rezultati është një grup i ri. Mban emrin, ngjyrën dhe etiketën e trupit të parë (për Zbritjen: atij që u pre). Ngjyrat e lyera mbi sipërfaqet e tij nuk mbahen.
- Anët e sheshta të rezultatit janë sipërfaqe të vetme. Anët e rrumbullakëta dalin si facetat e sheshta me të cilat u vizatuan.
- Nëse një grup ose komponent nuk është trup i ngurtë, vegla thotë cilin dhe nuk ndryshon asgjë. Kërkoni një sipërfaqe të humbur ose një sipërfaqe të gabuar brenda tij.
- Brenda një grupi të hapur, veglat punojnë mbi grupet dhe komponentët në atë grup.
- Çdo vegël është një hap zhbërjeje.
- Herën e parë që përdorni një vegël trupi të ngurtë, motori i saj (manifold-3d) ngarkohet, gjë që mund të zgjasë pak.
