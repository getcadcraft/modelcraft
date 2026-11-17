---
title: Preuzimanje lokacije iz CivilCraft
summary: Otvori datoteku adresa-lokacija koju pravi CivilCraft i dodaj zgrade i parcelu oko nje kao mase i liniju lokacije, samo one koje označiš.
keywords: lokacija, civilcraft, adresa, parcela, susedne zgrade, mase, kontekst, ccsite, otvoreni podaci, openstreetmap
from: f28e4a3b
---

CivilCraft može da potraži adresu i sačuva ono što izvori otvorenih podataka znaju oko nje: susedne zgrade, parcelu i konture poplava, zoniranja i tla. ModelCraft tu datoteku prihvata kao predloge. Ništa se ne dodaje dok ne kažeš.

## Uvezi datoteku

1. U CivilCraft-u pošalji lokaciju u ModelCraft ili sačuvaj datoteku (završava se na `.ccsite.json`).
2. U ModelCraft-u otvori ili prevuci datoteku. Otvara se lista sa poljem za označavanje za svaku zgradu i za parcelu.
3. Upiši visinu za zgrade kojima izvor nije dao. Pored svake piše odakle je njena visina: broj spratova po 3 m, ili visina koju si upisao.
4. Pritisni {{ui:Dodaj označene}}.

Označene zgrade postaju izvučene mase u jednoj komponenti, a parcela postaje linija oko lokacije. Sve je jedan korak opozivanja. Tačka adrese stoji u početku, u metrima istočno i severno od nje.

Poplave, zoniranje i konture tla navedeni su samo radi informacije; ne crtaju se.

Podaci potiču iz otvorenih izvora i nose navođenje autora na dnu liste. Visine koje nisu date su pretpostavke, pa ih proveri pre nego što se oslониш na njih.
