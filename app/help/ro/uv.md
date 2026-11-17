---
title: Aranjarea UV-urilor unei plase
summary: Marcați cusăturile, desfășurați, proiectați și împachetați coordonatele de textură ale unei plase în spațiul de lucru UV și verificați-le cu o tablă de șah și culorile de întindere.
keywords: uv, uv-uri, desfășurare, cusătură, cusături, textură, coordonate de textură, atlas, împachetare, insulă, insule, tablă de șah, întindere, distorsiune, proiecție cutie, proiecție cilindru, proiecție sferă, conform, bazat pe unghiuri, lscm, abf
from: 00028f20
---

O textură este o imagine plană; o plasă nu este plană. **UV-urile** ei arată unde se află fiecare colț al fiecărei fețe pe imagine. Spațiul de lucru UV le creează: tăiați plasa de-a lungul **cusăturilor**, așezați bucățile plat (**desfășurare**) și încadrați-le în pătrat (**împachetare**).

## Deschiderea

Selectați o plasă și alegeți {{ui:UV}} din lista {{ui:Spațiu de lucru}}. Un grup sau o componentă devine mai întâi plasă, ca în spațiul de lucru {{ui:Plasă}}. Vederea 3D trece în jumătatea stângă; **editorul UV** din dreapta arată fețele plasei așezate pe pătratul texturii. Selectarea funcționează ca în spațiul de lucru {{ui:Plasă}}, iar ce selectați într-o vedere este selectat și în cealaltă.

## Marcarea cusăturilor

Cusăturile sunt locurile unde plasa poate fi tăiată; apar roșii în ambele vederi.

- Selectați muchii ({{ui:Muchie}}, sau {{key:2}}) și apăsați {{ui:Marcare cusătură}} ({{key:Ctrl+E}}). {{ui:Ștergere cusătură}} ({{key:Ctrl+Shift+E}}) le scoate.
- {{ui:Tăieturi la muchii ascuțite}} marchează fiecare muchie ascuțită și fiecare muchie unde fețele se întâlnesc sub mai mult de 60°: o cutie se împarte în cele șase laturi.
- {{ui:Tăieturi din UV}} marchează cusăturile unde UV-urile se rup deja, de exemplu după o proiecție.

O piesă închisă are nevoie de cusături ca să stea plată: o sferă are nevoie de cel puțin o tăietură, un tub de una de-a lungul lui.

## Desfășurarea

Selectați fețele de așezat (sau nimic, pentru toată plasa) și apăsați {{ui:Desfășurare}} ({{key:U}}). Fiecare bucată între cusături este așezată plat, păstrându-și unghiurile cât mai fidel posibil (aplatizare bazată pe unghiuri), apoi bucățile sunt împachetate în pătrat. {{ui:Conform}} desfășoară prin hărți conforme cu cele mai mici pătrate: mai rapid, dar puțin mai puțin fidel la bucățile foarte curbate. O formă care poate fi făcută dintr-o foaie plană, cum ar fi lateralul unui cilindru tăiat o dată, se desfășoară fără nicio întindere.

## Proiectarea

Pentru forme simple, o proiecție este adesea suficientă:

| Proiecție | Ce face |
| --- | --- |
| {{ui:Cutie}} | Fiecare față pe latura cutiei cu care este cel mai orientată |
| {{ui:Cilindru}} | În jurul axei albastre: pe orizontală este unghiul în jur, în sus este înălțimea |
| {{ui:Sferă}} | Din centru: pe orizontală este unghiul în jur, în sus este latitudinea |
| {{ui:Din vedere}} | Așa cum se văd fețele acum în vederea 3D |

O față care trece peste îmbinarea cilindrului sau a sferei este păstrată într-o singură bucată, deci UV-urile ei pot depăși puțin marginea dreaptă a pătratului; texturile se repetă acolo.

## Aranjarea

- {{ui:Împachetare}} încadrează bucățile (insule) în pătrat, la o singură dimensiune de texel, fiecare rotită ca să ocupe cel mai puțin spațiu. Panoul stabilește spațiul lăsat între ele.
- {{ui:Rotire 90°}} și {{ui:Oglindire}} rotesc sau oglindesc UV-urile fețelor selectate.
- În editorul UV, trageți o față selectată ca să mutați UV-urile selecției, sau poziționați-vă pe editor și apăsați {{key:R}} sau {{key:S}}, apoi mutați ca să le rotiți sau să le scalați (un clic le păstrează, {{key:Esc}} anulează). {{key:G}} mută fără tragere. Faceți dublu clic pe o față (sau {{key:L}}) ca să selectați toată insula ei. Rotița mărește; trageți cu butonul din mijloc sau cel din dreapta ca să panoramați; {{key:F}} încadrează din nou pătratul.

Fiecare modificare este un singur pas de anulare.

## Verificarea lor

- {{ui:Tablă de șah}} afișează pe plasă o tablă de șah etichetată în UV-urile ei: pătrate egale și regulate înseamnă că textura stă uniform; etichetele arată în ce sens merge.
- {{ui:Întindere}} colorează fiecare față după cât o întind UV-urile: albastru înseamnă fără întindere, prin verde până la roșu pentru multă întindere. Panoul alege dacă măsoară **unghiuri îndoite** sau **mărime schimbată** și arată media.

## Vezi și

[Editarea unei plase](topic:mesh-edit), [Plase](topic:meshes) și [Modificatori pe o plasă](topic:modifiers).
