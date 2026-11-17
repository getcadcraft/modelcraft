---
title: Tahkude lõikamine
summary: Joonista jooned, kus tahud üksteist läbivad, et saaksid tükke lükata, kustutada või värvida.
keywords: lõika, lõika tahud, lõika mudeliga, lõika valikuga, lõige, ava, auk, ühenda, jooned, kus tahud ristuvad, bool
from: 6bc58526
---

Kui üks kuju läbib teist, ei joonista ModelCraft joont sinna, kus nende tahud kohtuvad: need lihtsalt kattuvad. **Lõika** joonistab need jooned servadena, nii et tahud jagunevad seal. Siis saad neid tükke lükata/tõmmata, kustutada või värvida.

Mõlemad käsud on jaotises {{ui:Redigeeri}} › {{ui:Rohkem}}.

## Lõika mudeliga

Lõikab valitud asjad **iga ekraanil oleva tahu vastu**.

Näiteks: tala (grupp) läbib seina (teine grupp) ja tahad seinas ava:

1. Topeltklõpsa seina, et see avada, ja vali kõik selle tahud ({{key:Ctrl+A}}).
2. {{ui:Redigeeri}} › {{ui:Rohkem}} › {{ui:Lõika mudeliga}}.

Tala kontuur joonistatakse seina mõlemale tahule kahe uue tahuna. Lükka neist üks läbi seina, et teha ava, ja sulge siis sein.

## Lõika valikuga

Lõikab valitud tahud, grupid ja komponendid **ainult üksteise vastu**. Vali vähemalt kaks.

## Kuhu jooned lähevad

Jooned joonistatakse alati **avatud kontekstis**: mudelis, kui ühtegi gruppi pole avatud, või grupis, mida redigeerid. Grupid ja komponendid, mis pole avatud, ei muutu. Nii et grupi tahkude lõikamiseks ava see kõigepealt, nagu ülaltoodud näites.

## Mida peaks teadma

- Samal tasandil olevaid tahke ei lõigata.
- Jooned, mis sulgevad silmuse tahul, teevad uue tahu, nagu joonistatud jooned teevad.
- Iga lõikamine on üks samm tagasivõtmises. Kui miski ei ristu, ei muutu midagi.
- Suletud kujude puhul teevad [tahkistööriistad](topic:solids) (Ühenda, Lahuta) kogu töö ühe sammuga.
