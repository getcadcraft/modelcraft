---
title: "Sledi poti: potegnite ploskev vzdolž poti"
summary: Izdelajte cevi, kable, ročaje, profile in obroče tako, da ploskev potegnete vzdolž robov, lokov ali krivulje.
keywords: sledi poti, potegni, pot, sweep, cev, kabel, cevka, ročaj, profil, žleb, obroč, torus, struženje, potegni vzdolž
from: ec7b3839
---

{{ui:Follow me}} premakne ploskev vzdolž poti in zgradi telo, skozi katerega gre. Ploskev ohrani svojo obliko in ostane pravokotna na pot; na vsakem oglišču poti se kosi srečajo na čistem poševnem rezu.

## Izdelava kabla

1. Narišite pot: {{ui:Curve}} skozi točke, skozi katere gre kabel (lahko se dviga in spušča), ali {{ui:Line}} in {{ui:Arc}}, povezani od konca do konca.
2. Na začetku poti narišite prerez kabla: majhno {{ui:Circle}} čez pot. Začnite krožnico v krajišču poti in jo obrnite, da gleda vzdolž poti; ali jo narišite na ploskvi, ki na tem mestu seka pot.
3. Izberite pot (en klik izbere celotno krivuljo ali lok; {{key:Ctrl}}+klik doda več robov).
4. Kliknite {{ui:Follow me}} v skupini {{ui:Modify}}, nato kliknite krožnico.

Cev je zaprto telo z gladkimi (mehkimi) stranicami.

## Brez predhodnega izbora poti

Kliknite {{ui:Follow me}}, kliknite ploskev, nato kliknite kateri koli rob poti. Pot je veriga robov skozi ta rob, do mesta, kjer se srečajo tri ali več robov.

## Kaj morate vedeti

- **Zaprte poti** (krožnica, zaprta krivulja, obris pravokotnika) naredijo obroč: ploskev je porabljena in se obroč zapre sam vase. Za pot narišite krožnico na tleh in majhno krožnico, ki stoji čez njo, za krof.
- **Ob poti:** ploskev se ni treba dotikati poti. Profil, narisan ob poti, drsi vzdolž nje, kot profil ob vrhu stene.
- **Pot ne sme imeti vej** in mora biti ena povezana veriga. ModelCraft to sporoči, kadar ni.
- **Ploskev, ki leži vzdolž poti** (v isti ravnini kot prvi rob poti), ni mogoče potegniti: obrnite jo, da seka pot.
- Je en korak razveljavitve.
