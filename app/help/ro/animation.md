---
title: Animați camera și obiectele și randați un videoclip
summary: Setați chei pentru cameră, pentru grupuri și pentru componente pe o cronologie, redați-le în vedere și randați animația într-un videoclip WebM, cu cerul, soarele și materialele randatorului.
keywords: animație, animare, cronologie, chei, cheie, cadru cheie, traseul camerei, survol, parcurgere, plimbare, videoclip, film, webm, randare video, cadre, cadre pe secundă, fps, cap de redare, cheie automată, netezire, netezit, menținere, scene, secvență PNG, mișcare
from: d3a58249
---

**Cronologia** mută camera și orice grup sau componentă în timp. Setați **chei** (unde se află ceva într-un anumit moment); ModelCraft îl mută treptat de la o cheie la alta. Redați-o în vedere, apoi randați-o într-un videoclip cu același cer, soare, materiale și lămpi ca [o imagine randată](topic:render).

## Deschiderea cronologiei

Faceți clic pe {{ui:Vederi}} din grupul {{ui:Cameră}}, apoi pe {{ui:Cronologie de animație}}. Cronologia se deschide sub vedere: comenzile de sus, apoi un rând **Cameră** și un rând pentru fiecare grup sau componentă care se mișcă. Romburile sunt chei; linia roșie este **capul de redare**, momentul arătat în vedere.

:::touch
Pe telefon, cronologia se deschide tot sub vedere. Comenzile ei sunt pe un singur rând: glisați-l lateral ca să ajungeți la restul; butonul care închide cronologia rămâne la capătul lui.
:::

Trageți cursorul (sau faceți clic pe un rând) ca să mutați capul de redare. {{ui:Redare}} redă de la capul de redare și devine {{ui:Pauză}} cât timp rulează; faceți clic din nou ca să opriți acolo unde este. {{key:Space}} face același lucru cât timp cronologia este deschisă (cu cronologia închisă, Space rămâne Selectare). {{ui:Cheia anterioară}} și {{ui:Cheia următoare}} sar între chei. Un stil propriu poate da redării și pauzei altă tastă: {{ui:Setări}}, apoi meniurile, tastele și mouse-ul, comanda *Redare sau pauză a animației*.

## Mutarea camerei

1. Mutați capul de redare până unde începe cadrul (0 s), pregătiți vederea și faceți clic pe {{ui:Cheie cameră}}.
2. Mutați capul de redare mai târziu (de exemplu la 4 s), orbitați, panoramați sau mergeți cu vederea până la poziția următoare și faceți din nou clic pe {{ui:Cheie cameră}}.
3. Adăugați câte chei doriți, apoi {{ui:Redare}}.

Camera trece treptat prin fiecare cheie și pornește și se oprește din repaus.

:::tip
Aveți deja [scene](topic:scenes)? {{ui:Din scene}} creează traseul camerei din ele: se oprește la fiecare scenă, apoi trece la următoarea. Dacă cronologia nu are deloc chei, {{ui:Randare video…}} face asta singur, deci două scene sau mai multe sunt suficiente pentru un videoclip de parcurgere.
:::

## Mutarea unui grup sau a unei componente

1. Selectați grupul sau componenta (se mută doar grupurile și componentele întregi; [creați mai întâi un grup](topic:groups-components)).
2. La 0 s, faceți clic pe {{ui:Cheie pentru selecție}}.
3. Mutați capul de redare mai târziu, [mutați, rotiți sau scalați](topic:move-copy) grupul până unde trebuie și faceți din nou clic pe {{ui:Cheie pentru selecție}}.

Între cheile sale alunecă, se rotește și crește. Rotirile iau drumul cel mai scurt.

**Cheia automată** economisește clicul de la pasul 3: cât timp {{ui:Cheie automată}} este pornită, un grup sau o componentă selectată pe care o mutați, rotiți sau scalați primește singură o cheie la capul de redare (iar prima dată, o cheie la 0 s, acolo unde era).

:::note
Mutarea unui grup animat fără cheie durează doar până când capul de redare se mută: la următoarea redare sau derulare, grupul revine acolo unde îl pun cheile lui. Bara de stare o spune. Apăsați {{ui:Cheie pentru selecție}} ca să o păstrați.
:::

## Modificarea cheilor

- **Alegeți o cheie** făcând clic pe rombul ei: capul de redare merge la ea.
- **Mutați o cheie** trăgând rombul de-a lungul rândului sau cu {{key:Left}} și {{key:Right}} (un cadru; cu {{key:Shift}}, zece).
- **Ștergeți** cu {{ui:Ștergere cheie}} (cheia aleasă sau fiecare cheie de la capul de redare) sau cu {{key:Delete}} pe un romb ales.
- **Cum trece mai departe**, pentru cheia aleasă: {{ui:Netezire}} (o curbă prin cheile din jur), {{ui:Constant}} (o linie dreaptă, cu o viteză constantă), {{ui:Încetinire la început și sfârșit}} (se oprește în această cheie) sau {{ui:Menținere}} (rămâne pe loc până la cheia următoare).
- **Lungime (s)** stabilește cât durează animația; o cheie setată după sfârșit o prelungește. Ca s-o scurtați, mutați sau ștergeți mai întâi cheile de după noul sfârșit.
- Butonul **×** de pe rândul unui grup oprește animarea lui.

Cronologia are propriile {{ui:Anulare}} și {{ui:Refacere}}: anularea modelului ({{key:Mod+Z}}) schimbă modelul, nu cheile. Animația se salvează în fișierul `.modelcraft`. Închiderea cronologiei readuce grupurile care se mișcau în prima lor poziție.

## Randarea videoclipului

1. Faceți clic pe {{ui:Randare video}} din cronologie (sau {{ui:Exportare}} › {{ui:Randare video…}}).
2. Alegeți {{ui:Dimensiune}}, {{ui:Cadre pe secundă}}, {{ui:Calitatea fiecărui cadru}} și {{ui:Fișier}}.
3. Faceți clic pe {{ui:Randare video}}. Fiecare cadru apare pe măsură ce este făcut, cu timpul rămas.
4. Când s-a terminat, faceți clic pe {{ui:Salvare video}}.

{{ui:Oprire}} (sau {{key:Esc}}) încheie mai devreme; {{ui:Salvare video}} păstrează apoi cadrele deja făcute ca un videoclip mai scurt.

Cerul, soarele, materialele, lămpile și luminozitatea sunt cele setate în {{ui:Randare imagine…}}: setați-le mai întâi acolo, verificând o imagine fixă. Fiecare cadru se randează pe acest calculator; nimic nu se încarcă.

| Setare | Ce face |
|---|---|
| {{ui:Dimensiune}} | 480p, 720p HD, 1080p Full HD sau forma proprie a vederii (până la 1920 de pixeli lățime) |
| {{ui:Cadre pe secundă}} | 24, 25, 30 sau 60 de cadre pe secundă. De două ori mai multe cadre durează de două ori mai mult |
| {{ui:Calitatea fiecărui cadru}} | Rapid (4 treceri), Schiță (16) sau Bună (64): mai multe treceri dau umbre și margini mai netede |
| {{ui:Fișier}} | {{ui:Video WebM}}, {{ui:Video MP4 (H.264)}} acolo unde browserul îl poate scrie, sau {{ui:Imagini PNG, una per cadru (ZIP)}} pentru editoarele video (și pentru browserele fără codor video) |

:::tip
Un videoclip de 10 secunde la 30 de cadre pe secundă are 301 de cadre. Încercați mai întâi Rapid la 480p ca să verificați mișcarea, apoi randați Schiță sau Bună la o dimensiune mai mare.
:::

WebM se redă în browsere și în VLC, iar editoarele video îl convertesc. {{ui:Video MP4 (H.264)}} este oferit acolo unde browserul îl poate scrie. {{ui:Randare video}} folosește randatorul rapid; ca să randați fiecare cadru cu path tracing, alegeți {{ui:Adăugare a acestei animații în coadă}} în aceeași casetă de dialog: cadrele se randează în [coada de randare](topic:render#the-render-queue), care cere WebGPU.

:::firefox safari
Randarea unui videoclip cere un browser care codifică singur videoclipul (WebCodecs): Chrome, Edge, Firefox și Safari 17 recente o fac. Fără el, alegeți {{ui:Imagini PNG, una per cadru (ZIP)}}.
:::

## Lucruri de știut

- Se mută doar grupurile și componentele întregi. Fețele, muchiile, ora soarelui și stilul nu se schimbă încă în timp.
- {{ui:Export animație}} de sub [Scene](topic:scenes) înregistrează încă vederea așa cum apare pe ecran, în timp real; {{ui:Randare video}} randează fiecare cadru cu cer, umbre și materiale.
