---
title: Uzmi lokaciju iz CivilCraft-a
summary: Otvorite datoteku adresa-u-lokaciju koju pravi CivilCraft i dodajte zgrade i parcelu oko nje kao mase i liniju lokacije, samo one koje označite.
keywords: lokacija, civilcraft, adresa, parcela, susjedne zgrade, mase, kontekst, ccsite, otvoreni podaci, openstreetmap
from: f28e4a3b
---

CivilCraft može potražiti adresu i sačuvati ono što izvori otvorenih podataka znaju oko nje: susjedne zgrade, parcelu, te obrise poplava, namjene i tla. ModelCraft tu datoteku uzima kao prijedloge. Ništa se ne dodaje dok to ne kažete.

## Uvedite datoteku

1. U CivilCraft-u pošaljite lokaciju u ModelCraft, ili sačuvajte datoteku (završava se na `.ccsite.json`).
2. U ModelCraft-u otvorite ili prevucite datoteku. Otvara se lista s poljem za oznaku za svaku zgradu i za parcelu.
3. Upišite visinu za zgrade za koje izvor nije dao visinu. Red pored svake kaže odakle joj visina: broj etaža po 3 m, ili visina koju ste upisali.
4. Pritisnite {{ui:Dodaj označene}}.

Označene zgrade postaju izvučene mase u jednoj komponenti, a parcela postaje linija oko lokacije. Sve je jedan korak poništavanja. Tačka adrese stoji u ishodištu, u metrima istočno i sjeverno od nje.

Obrisi poplava, namjena i tla navedeni su samo radi informacije; ne crtaju se.

Podaci dolaze iz otvorenih izvora i njihovo navođenje autora je na dnu liste. Visine koje nisu date su pretpostavke, pa ih provjerite prije nego se oslonite na njih.
