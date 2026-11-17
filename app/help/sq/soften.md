---
title: Butësoni dhe lëmoni skajet
summary: Fshihni skajet mes sipërfaqeve që takohen në një kënd të cekët, që format e lakuara të lexohen si një sipërfaqe e vetme e lëmuar, në ModelCraft dhe në skedarët e eksportuar.
keywords: butëso, lëmo, skaje të buta, hijëzim i lëmuar, fshih skajet, facetime, me facetë, lakuar, normale, ngurto, kënd
from: 52d32453
---

Një formë e lakuar në ModelCraft është e bërë nga sipërfaqe të sheshta. Skajet **të buta** mes atyre sipërfaqeve nuk vizatohen, dhe sipërfaqet që bashkojnë shfaqen si një sipërfaqe e lëmuar, kështu që një prizëm me 24 anë duket i rrumbullakët.

Kur tërhiqni një rreth lart me {{ui:Shtyj/tërhiq}}, anët e tij butësohen për ju. Për format e tjera, butësoni sipas këndit.

## Butësoni sipas këndit

1. Përzgjidhni çfarë të butësoni: sipërfaqe dhe skaje, ose një grup ose komponent (të gjitha skajet e tij).
2. Te {{ui:Informacioni i entitetit}}, shkruani një kënd te {{ui:Butëso deri në}}, si `20`, dhe klikoni {{ui:Butëso}}.

Çdo skaj në përzgjedhje, sipërfaqet e të cilit kthehen me atë kënd ose më pak, bëhet i butë; skajet me kthesë më të mprehtë bëhen të ngurtë. Anët e një prizmi me 12 anë kthehen me 30°, dhe buzët e tij me 90°, kështu që `31` butëson vetëm anët.

{{ui:Ngurto të gjitha}} i bën sërish të ngurta të gjitha skajet në përzgjedhje. Çdo veprim është një hap zhbërjeje.

## Gjëra që duhen ditur

- Vetëm skajet mes saktësisht dy sipërfaqeve butësohen. Skajet e lira mbeten ashtu si janë.
- Hijëzimi i lëmuar funksionon vetëm përmes skajeve të buta: një sipërfaqe pa asnjë skaj të butë hijëzohet e sheshtë.
- Skajet e buta ruhen në skedarin ModelCraft. Eksportet **glTF (.glb)** dhe **OBJ** mbajnë hijëzimin e lëmuar (një normale për çdo cep), kështu që programet e tjera tregojnë të njëjtën sipërfaqe. Eksportet Collada dhe STL eksportojnë sipërfaqe të sheshta.
- Skajet e buta fshihen në çdo stil sipërfaqeje, edhe te {{ui:Rreze X}} dhe {{ui:Tel-kornizë}}. Për t'i parë, përzgjidhni formën dhe klikoni {{ui:Ngurto të gjitha}}; zhbërja e kthen butësimin.
