---
title: Desenarea imaginii cu un alt program
summary: Motorul nostru propriu de trasare desenează imaginea Randare; un alt program o poate desena doar printr-un supliment de motor de randare în CadCraft Studio. Ce se transferă și de ce unele programe nu sunt oferite niciodată.
keywords: randare, motor, program extern, motor de supliment, studio, fundal, coadă, usd, gltf, desenat de, blender, gpl
from: 150f94f1
---

Imaginea din {{ui:Randare imagine…}} este desenată de **motoarele noastre**: Rapid și Trasare de traiectorii, în browser și în CadCraft Studio. Un alt program o poate desena doar când un **supliment de motor de randare** îl aduce: vedeți [Adăugarea unui motor de randare cu un supliment](topic:render-engine-addons). Ca să duceți scena la alt program și să continuați lucrul acolo, folosiți [Deschiderea scenei într-un alt program](topic:render-open-in) sau [Trimiterea scenei către un motor de joc](topic:render-unreal).

## Desenați o imagine cu motorul unui supliment

1. Porniți suplimentul din Setări › Suplimente. Motorul lui apare în lista Motor a {{ui:Randare imagine…}}.
2. Alegeți-l. Setările lui proprii apar sub lista Motor.
3. Faceți clic pe {{ui:Randare}}. În Studio, prima dată când un supliment rulează un program, Studio întreabă într-o casetă proprie. Progresul se arată cât timp desenează; {{ui:Oprire}} îl încheie. Imaginea apare marcată cu motorul care a desenat-o.

Un motor scris în JavaScript rulează și în browser. Un motor care rulează un program de pe acest computer rulează doar în Studio; în browser apare ca un fișier de salvat.

## Ce se transferă

Motorul primește un **pachet**: modelul ca fișier USD (și un fișier glTF, când îl cere) și un fișier de setări cu valorile exacte ale materialelor, soarele și cerul, fiecare lampă pornită cu puterea și profilul ei de lumină, camera și expunerea. Fiecare program luminează, își mapează tonurile și eșantionează în felul lui, deci imaginile sunt asemănătoare ca unghi, soare, lămpi și expunere, dar nu pixel cu pixel.

## Programe pe care CadCraft nu le pornește niciodată

CadCraft nu pornește niciodată un program sub licența GNU GPL și nu îl listează niciodată ca motor sau ca țintă Deschide în. Blender este unul dintre acestea, deci nu este în lista Motor. Un fișier USD sau glTF salvat din {{ui:Randare imagine…}} se deschide totuși în el, ca în orice program care citește aceste fișiere.

:::note
Camerele panoramice și stereo și o imagine de cer (se folosesc în schimb culorile cerului) nu se transferă către alt program. Nimic făcut într-un alt program nu se întoarce în model.
:::
