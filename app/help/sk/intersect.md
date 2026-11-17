---
title: Prienik plôch
summary: Nakreslite čiary, kde sa plochy prerezávajú, aby ste mohli tlačiť, mazať alebo farbiť jednotlivé kúsky.
keywords: prienik, prienik plôch, prienik s modelom, prienik s výberom, rez, otvor, diera, spojiť, čiary, kde sa plochy krížia, booleovská operácia
from: 6bc58526
---

Keď jeden tvar prechádza cez iný, ModelCraft nekreslí čiaru, kde sa ich plochy stretávajú: len sa prekrývajú. **Prienik** tieto čiary nakreslí ako hrany, takže sa plochy tam rozdelia. Potom môžete tlačiť/ťahať, mazať alebo farbiť jednotlivé kúsky.

Oba príkazy sú v {{ui:Úpravy}} › {{ui:Viac}}.

## Prienik s modelom

Preseká vybrané voči **každej ploche na obrazovke**.

Napríklad trám (skupina) prechádza stenou (inou skupinou) a chcete v stene otvor:

1. Dvakrát kliknite na stenu, aby ste ju otvorili, a vyberte všetky jej plochy ({{key:Ctrl+A}}).
2. {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Prienik s modelom}}.

Obrys trámu sa nakreslí na obe plochy steny ako dve nové plochy. Jednu z nich pretlačte stenou, aby vznikol otvor, potom stenu zatvorte.

## Prienik s výberom

Preseká vybrané plochy, skupiny a komponenty **len navzájom**. Vyberte aspoň dva.

## Kam čiary smerujú

Čiary sa vždy kreslia v **otvorenom kontexte**: v modeli, keď nie je otvorená žiadna skupina, alebo v skupine, ktorú upravujete. Skupiny a komponenty, ktoré nie sú otvorené, sa nemenia. Ak chcete rozrezať plochy skupiny, najprv ju otvorte, ako v príklade vyššie.

## Dôležité informácie

- Plochy ležiace v tej istej rovine sa neprerezávajú.
- Čiary, ktoré uzavrú slučku na ploche, vytvoria novú plochu, ako nakreslené čiary.
- Každý prienik je jeden krok späť. Ak sa nič nekríži, nič sa nezmení.
- Pre uzavreté tvary robia [nástroje pre telesá](topic:solids) (Zjednotenie, Odčítanie) celú prácu v jednom kroku.
