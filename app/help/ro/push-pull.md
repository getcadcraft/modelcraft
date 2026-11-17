---
title: Împingerea și tragerea fețelor în solide
summary: Transformați o față într-o cutie, faceți o clădire mai înaltă sau mai joasă, adăugați un risalit sau o nișă și repetați o distanță printr-un dublu clic.
keywords: împingere tragere, extrudare, înălțime, solid, cutie, masă, mai înalt, nișă, reliefare, repetare, dublu clic, volum, nivel, pe față, egal, aceeași înălțime
from: dc093c91
---

{{ui:Împinge/Trage}} ({{key:P}}) mută o față de-a lungul propriei direcții: în sus și în jos pentru o podea, înăuntru și în afară pentru un perete. Ce se întâmplă depinde de față.

## Faceți un solid dintr-o față

1. Desenați o față, de exemplu un dreptunghi pe sol ([Desenarea fețelor](topic:draw-faces)).
2. Apăsați {{key:P}}.
3. Treceți cu cursorul peste față. Se evidențiază.
4. Faceți clic pe față, apoi mișcați cursorul. Fața se ridică (sau coboară), iar laturile cresc din marginile ei. Caseta de valoare ({{ui:Distanță}}) și indicația arată distanța.
5. Faceți clic pentru a încheia, sau tastați o distanță și apăsați {{key:Enter}}: `3m`, `10'`, `2700` într-un model în milimetri.

   Acum aveți un solid închis. Selectați-l complet și grupați-l (vedeți [Grupuri și componente](topic:groups-components)): {{ui:Informații entitate}} arată apoi „Solid: Da” și volumul lui.

O față singură poate merge în ambele sensuri: trageți-o în sus pentru o masă deasupra solului, sau împingeți-o în jos pentru o groapă ori o fundație.

:::tip
În loc să faceți clic de două ori, apăsați pe față, trageți și eliberați. Pe un ecran tactil, aceasta este modalitatea firească: apăsați, trageți, ridicați.
:::

## Trageți până la înălțimea a ceva altceva

În timp ce trageți, treceți cu cursorul peste un colț, un punct de mijloc, o muchie sau un ghidaj al unei alte părți a modelului. Fața se fixează la acea înălțime, iar un marcaj arată punctul. Folosiți asta ca să faceți două blocuri de aceeași înălțime sau ca să vă opriți la o linie-ghidaj plasată cu [ruleta](topic:guides-measure).

Puteți trece cu cursorul și peste o față paralelă cu cea pe care o împingeți, cum ar fi partea de sus a altui bloc sau partea de sus a cutiei pe care stă un stâlp. Indicația spune „Pe față”, iar fața pe care o împingeți ajunge la același nivel cu ea. De exemplu, împingeți fața interioară a unei țevi în jos până ajunge la nivelul cutiei de sub țeavă.

O față înclinată față de cea pe care o împingeți nu stabilește un nivel: distanța urmează cursorul. Tot așa și o față aflată în spatele celei pe care o împingeți.

Când o față împinsă ajunge din nou egală cu fețele din jur, laturile ei dispar. Nu rămân laturi de înălțime zero, iar conturul desenat rămâne pe față, deci o puteți împinge din nou mai târziu. Ca să redevină o singură față, ștergeți muchiile conturului cu {{ui:Ștergere}}: cele două fețe se unesc.

## Faceți o cutie mai înaltă sau mai joasă

Împingeți/trageți partea de sus a unei cutii. Pentru că laturile merg deja drept în sus de la ea, partea de sus pur și simplu se mută: cutia devine mai înaltă sau mai joasă și nu se fac muchii noi.

- Împingerea părții de sus până jos, la bază, elimină cutia. ModelCraft se oprește la înălțime zero; nu întoarce niciodată cutia pe dos.
- Același lucru este valabil pentru orice față ai cărei vecini merg toți de-a lungul direcției ei, cum este capătul unui perete.

## Adăugați un risalit sau o nișă

1. Desenați un dreptunghi pe latura unei cutii (începeți-l pe față; rămâne în planul feței).
2. Apăsați {{key:P}} și trageți dreptunghiul nou **în afară**. Adaugă material: un risalit, un horn, un cozoroc.
3. Sau împingeți-l **înăuntru**. Taie o nișă: o verandă, o firidă, o intrare retrasă.

Când laturile noii părți se aliniază cu fețele existente, se unesc într-o singură față, deci nu apar linii parazite pe un perete plan.

## Împingeți complet prin

Împingerea unei fețe într-un solid se oprește la prima față din spate. Când ajunge la ea, taie o deschidere. Așa faceți ferestre și uși într-un perete cu grosime. Vedeți [Tăierea unei deschideri printr-un perete](topic:openings).

## Tastați o distanță

După ce faceți clic pe față, tastați distanța și apăsați {{key:Enter}}.

- Distanța tastată merge în direcția mișcării. Dacă mișcarea nu a început încă, merge spre fața din față (din afara unui solid, în sus de la sol).
- Tastați un număr negativ, cum ar fi `-500`, ca să mergeți în sens invers.
- Dacă se renunță înainte de clic, apăsați {{key:Esc}}; fața revine la locul ei.

## Repetați ultima distanță

După o împingere/tragere, faceți dublu clic pe o altă față, cu {{ui:Împinge/Trage}} încă selectat. Se mută cu aceeași distanță. Este modul rapid de a da mai multor pereți sau mai multor etaje aceeași grosime sau înălțime.

ModelCraft ține minte distanța până când treceți la altă unealtă.

## Lucruri de știut

- Împinge/Trage lucrează pe o singură față o dată. Dacă faceți clic pe ceva care nu este o față, bara de stare spune: „Împinge/Trage lucrează pe o față. Faceți clic pe o față.”
- Ca să împingeți/trageți o față dintr-un grup sau dintr-o componentă, deschideți-l mai întâi (faceți dublu clic pe el).
- Cu **Coliziune** activată, o împingere sau o tragere care dă peste un alt solid se oprește acolo unde atinge, iar indicația spune ce atinge (numele obiectului sau „geometrie liberă în acest grup”) și evidențiază fețele pe care le-a întâlnit. Un buzunar împins în propriul solid (de exemplu o față decalată, împinsă înapoi în jos) face parte din acel solid și nu este oprit niciodată de pereții săi.
- Două solide împinse unul în altul nu se taie și nu se unesc: fețele lor pur și simplu trec una prin alta. Vedeți [Încă nerealizat](topic:not-built-yet).
