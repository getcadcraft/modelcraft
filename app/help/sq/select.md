---
title: Përzgjidhni objektet
summary: Klikoni, klikoni dy herë dhe tri herë, tërhiqni një dritare ose një kuti kryqëzimi, shtoni dhe hiqni me tastet modifikuese, dhe fshini.
keywords: përzgjidh, përzgjedhje, dritare, kryqëzim, shto te përzgjedhja, hiq përzgjedhjen, përzgjidh të gjitha, klikim i trefishtë, klikim i dyfishtë, fshi, shlyej
from: d56d1f89
---

{{ui:Përzgjidh}} ({{key:Space}}) është mjeti me të cilin fillon ModelCraft, dhe ai ku ju kthen {{key:Esc}}. Objektet e përzgjedhura bëhen blu, dhe {{ui:Informacioni i entitetit}} në të djathtë thotë çfarë janë.

## Klikimi

| Bëjeni këtë | Përzgjedh |
|---|---|
| Klikoni një sipërfaqe ose skaj | Atë sipërfaqe ose skaj |
| Klikoni një grup ose komponent | Gjithë grupin ose komponentin |
| Klikoni dy herë një sipërfaqe | Sipërfaqen dhe skajet e saj |
| Klikoni dy herë një skaj | Skajin dhe sipërfaqet në secilën anë |
| Klikoni dy herë një grup ose komponent | E hap për redaktim (shih [Grupet dhe komponentët](topic:groups-components)) |
| Klikoni tri herë një sipërfaqe ose skaj | Çdo gjë të lidhur me të: gjithë objektin |
| Klikoni në hapësirë boshe | Asgjë (pastron përzgjedhjen) |
| Klikoni dy herë në hapësirë boshe ndërsa redaktoni një grup | Mbyll grupin |

Skajet janë më të lehta për t'u goditur se sipërfaqet: kur treguesi është brenda disa pikselësh nga një skaj, klikimi merr skajin.

## Tërhiqni një kuti

- **Nga e majta në të djathtë** vizaton një kuti të ngurtë: një përzgjedhje **dritare**. Vetëm gjërat që ndodhen tërësisht brenda saj përzgjidhen.
- **Nga e djathta në të majtë** vizaton një kuti me vija të ndërprera: një përzgjedhje **kryqëzimi**. Çdo gjë që prek kutia përzgjidhet, dhe një sipërfaqe përzgjidhet kur kutia ndodhet tërësisht brenda saj.

Një grup ose komponent llogaritet si një gjë e vetme: një dritare duhet ta mbajë tërësisht, një kryqëzim duhet vetëm ta prekë.

## Shtoni dhe hiqni

Mbani një tast ndërsa klikoni ose tërhiqni:

| Tasti | Efekti |
|---|---|
| {{key:Shift}} | Ndërron: shton atë që nuk është e përzgjedhur, heq atë që është |
| {{key:Mod}} | Shton |
| {{key:Shift}} dhe {{key:Mod}} së bashku | Heq |

Për të përzgjedhur gjithçka në model (ose gjithçka në grupin që po redaktoni), shtypni {{key:Mod+A}}.

## Pastroni përzgjedhjen

Shtypni {{key:Esc}} (me {{ui:Përzgjidh}} si mjet), ose klikoni në hapësirë boshe.

## Fshini atë që është përzgjedhur

Shtypni {{key:Delete}} ose {{key:Backspace}}. Sipërfaqet, skajet, grupet dhe udhëzuesit në përzgjedhje hiqen në një hap; {{key:Mod+Z}} i sjell ato përsëri.

Fshirja e një skaji heq sipërfaqet që kanë nevojë për të, përveç rastit kur skaji vetëm ndante dy sipërfaqe në të njëjtën plan: atëherë dy sipërfaqet bashkohen në një. Fshirja e një sipërfaqeje lë skajet e saj. Shih [Fshi dhe pastro](topic:erase).

## Përzgjidhni brenda një grupi

Klikimi mbi një grup përzgjedh gjithë grupin. Për të përzgjedhur një sipërfaqe brenda tij, klikoni dy herë mbi grup për ta hapur, pastaj klikoni. Ndërsa një grup është i hapur, klikimet arrijnë vetëm atë që ndodhet brenda tij; gjithçka tjetër zbehet. Shtypni {{key:Esc}} me asgjë të përzgjedhur, ose klikoni dy herë në hapësirë boshe, për ta mbyllur.

{{ui:Pasqyra}} në të majtë përzgjedh grupet dhe komponentët me emër, gjë që ndihmon kur ata fshihen pas gjërave të tjera.
