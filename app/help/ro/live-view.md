---
title: Vizualizare live
summary: O fereastră lângă model care îl arată în aspectul în timp real, cu soare și umbre, și urmărește fiecare modificare pe care o faceți; îl străbateți pe jos și setați ora zilei și luna.
keywords: partajare, panoramă, 360, tur, tur virtual, vizualizator independent, vizualizator offline, trimitere către client, video, video de plimbare, împrăștiere, iarbă, pajiște, pădure, roci, plante, copaci, mulțime, pictare plante, vizualizare live, timp real, randare în timp real, plimbare, plimbare pe jos, prima persoană, prezentare, client, al doilea ecran, a doua fereastră, monitor, ora zilei, soare, anotimp, lună, umbre, ocluzie ambientală, reflexii, lumină reflectată, iluminare globală, webgpu, webgl
from: fca3b0d6
---

{{ui:Exportare}} › {{ui:Vizualizare live}} deschide un panou peste aplicație care arată modelul în aspectul în timp real: cerul și soarele, după locul și data modelului, umbrele soarelui, aspectele și materialele date fețelor, lămpile și lumina reflectată de pereți și pardoseli. Urmărește ce faceți: rotiți vederea și se rotește și el, modificați modelul și arată schimbarea puțin mai târziu. Nimic nu este încărcat.

## Deschiderea

1. Alegeți {{ui:Exportare}} › {{ui:Vizualizare live}}. Panoul se deschide în colțul din dreapta jos.
2. Trageți de bara de titlu ca să-l mutați; trageți de colț ca să-l măriți.
3. {{ui:Fereastră nouă}} îl mută într-o fereastră proprie, pentru un al doilea ecran. {{ui:Exportare}} › {{ui:Vizualizare live într-o fereastră nouă}} îl deschide acolo direct. Dacă browserul blochează ferestrele pop-up, se deschide ca panou.
4. {{ui:Închidere}} îl închide.

## Comenzile

| Comandă | Ce face |
|---|---|
| {{ui:Urmărește vizualizarea}} | Pornit: vizualizarea live privește unde privește vizualizarea ModelCraft. Plimbarea o oprește |
| {{ui:Plimbare}} | Străbateți modelul pe jos (mai jos) |
| {{ui:Gravitație}} | În timpul plimbării: stați pe podele și urcați scările. Oprit: zburați |
| {{ui:Oră}} | Ora zilei, de la 05:00 la 21:00. Soarele se mută când trageți |
| {{ui:Lună}} | Luna (ziua 21 a ei), ca să vedeți soarele iarna și vara |
| {{ui:Calitate}} | {{ui:Pentru acest calculator}} (ce primește [calculatorul](topic:your-machine)), sau Scăzută, Medie sau Ridicată |

Linia de jos spune ce desenează vizualizarea (WebGPU sau WebGL 2), calitatea și lumina reflectată.

## Străbateți modelul pe jos

1. Rotiți vederea principală spre locul unde doriți să stați și alegeți {{ui:Plimbare}}. Stați pe podeaua de sub punctul de vedere al vederii, înalți de 1.6 m.
2. Faceți clic pe vizualizarea live, apoi folosiți {{key:W}} {{key:A}} {{key:S}} {{key:D}} sau tastele cu săgeți. Țineți {{key:Shift}} ca să alergați. Trageți ca să priviți în jur.
3. Treptele de până la 40 cm sunt urcate (scări); orice mai înalt este un perete. Pereții vă opresc, iar voi alunecați de-a lungul lor.
4. Cu {{ui:Gravitație}} oprit, zburați: {{key:E}} urcă, {{key:Q}} coboară.
5. {{key:Esc}} oprește plimbarea.

## Împrăștiați plante, roci și oameni

{{ui:Împrăștiere}} din bara vizualizării live deschide panoul de împrăștiere lângă imagine. Un set de împrăștiere răspândește elemente din biblioteca de decor (copaci, arbuști, iarbă, flori, roci, oameni, mașini) peste o parte a modelului. Elementele sunt desenate doar în vizualizarea live: nu sunt geometrie în model, iar vizualizarea principală nu le arată.

1. **Umpleți fețele:** selectați fețe (sau un grup, cum ar fi un teren) în ModelCraft, apoi alegeți {{ui:Umplere cu selecția}}. Setul le acoperă.
2. **Pictați:** alegeți {{ui:Vopsire}}, apoi trageți peste vizualizarea live. Cu fețe selectate, vopseaua ajunge doar pe ele; fără nimic selectat, ajunge pe orice este sub pensulă, inclusiv pe sol. {{ui:Dimensiune pensulă}} setează pensula; {{ui:Ștergere}} înlătură petele pictate.
3. Bifați ce împrăștiați. Numărul de lângă fiecare este greutatea lui: 3 și 1 înseamnă trei din primul la fiecare unul din al doilea.

| Comandă | Ce face |
|---|---|
| {{ui:Pe m²}} | Câte elemente pe fiecare metru pătrat |
| {{ui:Păstrați distanța (m)}} | Niciun element nu este mai aproape de alte obiecte decât atât și niciunul nu este sub un acoperiș sau o masă. 0 o oprește |
| {{ui:Rotire (°)}} | Cât de mult se rotește fiecare element, la întâmplare, în jurul verticalei |
| {{ui:Cea mai abruptă (°)}} | Niciun element acolo unde suprafața este mai abruptă |
| {{ui:Dimensiune}} | Cea mai mică și cea mai mare mărime, ca factor din mărimea proprie a elementului |
| {{ui:Înălțime de la, până la (m)}} | Doar între aceste înălțimi (gol = oricare) |
| {{ui:Înclinare după suprafață}} | 0 ține elementele drepte; 1 le așază perpendicular pe pantă |
| {{ui:Sămânță (seed)}}, {{ui:Amestecare}} | Aceeași sămânță dă mereu aceeași împrăștiere; {{ui:Amestecare}} alege alta |

Seturile se salvează în fișierul .modelcraft și urmăresc fețele pe care le acoperă când le modificați. Numărul maxim de elemente desenate de vizualizarea live este stabilit de nivelul [calculatorului](topic:your-machine): 20 000 pentru {{ui:Doar procesor}}, 100 000 pentru {{ui:Placă grafică, nivel de bază}}, un milion pentru {{ui:Placă grafică, nivel ridicat}}. Panoul arată câte elemente sunt plasate din câte cere densitatea: sunt plasate mai puține când se atinge bugetul sau când obiectele le țin afară. Elementele apropiate de cameră sunt desenate ca ele însele; cele îndepărtate, ca forme simple, în culorile lor.

:::note
Elementele împrăștiate sunt în vizualizarea live (și în plimbarea ei, în panorame și în vizualizatorul independent). Randarea imaginii nu le desenează încă.
:::

## Partajare: panorame, tururi, un vizualizator, un video

{{ui:Partajare}} din bara vizualizării live face fișiere din vizualizarea live. Totul se face pe acest calculator; nimic nu este încărcat.

| Alegere | Ce obțineți |
|---|---|
| {{ui:Panoramă de 360°}} | O imagine de 360° din locul unde stă vederea (sau unde plimbați), ca PNG echirectangular, pe care îl deschid vizualizatoarele de panorame și majoritatea site-urilor foto |
| {{ui:Adăugare acest punct la tur}}, apoi {{ui:Salvare tur}} | O pagină web cu o panoramă la fiecare punct și săgeți către punctele pe care fiecare le poate vedea (un perete între ele ascunde săgeata) |
| {{ui:Salvare vizualizator}} | O pagină web cu modelul în acest aspect în timp real: îl rotiți, îl străbateți, săriți la scenele salvate. Se deschide offline într-un browser cu WebGPU sau WebGL 2, dintr-un dosar, de pe un stick USB sau dintr-un e-mail, fără instalare și fără cont, și nu încarcă nimic de pe internet |
| {{ui:Video al traseului}} | Traseul camerei din cronologie (sau scenele salvate, în ordine) ca video în acest aspect în timp real, la dimensiunea vizualizării live: WebM sau MP4 acolo unde browserul le poate face, altfel imagini numerotate într-un ZIP |

Dimensiunea panoramei urmează calitatea: 1024, 2048 sau 4096 de pixeli lățime la Scăzută, Medie și Ridicată. Un fișier de vizualizator are circa 5 MB plus modelul.

:::note
Turul și vizualizatorul sunt făcute pentru prezentare, nu pentru editare: păstrează modelul așa cum este când le salvați.
:::

## Calitate

| | Scăzută | Medie | Ridicată |
|---|---|---|---|
| Umbre de soare | o hartă de umbre | trei cascade | patru cascade |
| Ocluzie ambientală (umbre de contact) | | ✓ | ✓, mai fină |
| Reflexii în metal | | | ✓ |
| Bloom (când randarea imaginii îl setează) | | ✓ | ✓ |
| Margini netezite | FXAA | pe mai multe cadre (TAA) | pe mai multe cadre (TAA) |
| Lumină reflectată | grosieră | mai fină | cea mai fină |

{{ui:Pentru acest calculator}} alege Scăzută pe un calculator fără placă grafică utilizabilă, Medie cu un cip grafic integrat, Ridicată cu o placă grafică separată. Scăzută este gândită pentru un laptop de 8 GB fără placă grafică.

## Lumină reflectată

Lumina care se reflectă de pe un perete însorit pe podea și interiorul mai întunecat al unei camere sunt calculate de același trasor de traiectorii care face [imaginile randate](topic:render): randează o mică panoramă în puncte prin model, în fundal, pe fiecare nucleu al procesorului. Cât lucrează, linia de jos afișează {{ui:Lumină reflectată: 40 %}}; când este gata, vizualizarea o preia. După o modificare, începe din nou.

:::note
Aceasta este o aproximare pentru o vizualizare live, nu o imagine randată: detaliile mici dintre puncte primesc lumina reflectată a punctelor apropiate. Pentru o imagine finală folosiți [Randare imagine](topic:render).
:::

## Luminozitate și culori

Vizualizarea live folosește aceeași luminozitate, același echilibru al albului, același contrast și aceeași transformare a vederii (ACES, AgX, filmic sau standard) ca [Randare imagine](topic:render): setați-le acolo și vizualizarea live urmează.

:::note
Browserele diferă. Acolo unde browserul are WebGPU (Chrome și Edge pe Windows, macOS și ChromeOS, Safari 26), vizualizarea live îl folosește; în rest (majoritatea browserelor pe Linux, sistemele Apple mai vechi) folosește WebGL 2 și arată la fel.
:::
