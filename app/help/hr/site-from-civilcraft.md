---
title: Lokacija iz programa CivilCraft
summary: Otvorite datoteku s lokacijom iz adrese koju CivilCraft izrađuje i dodajte zgrade i parcelu oko nje kao mase i liniju lokacije, samo one koje označite.
keywords: lokacija, civilcraft, adresa, parcela, susjedne zgrade, mase, kontekst, ccsite, otvoreni podaci, openstreetmap
from: f28e4a3b
---

CivilCraft može potražiti adresu i spremiti što izvori otvorenih podataka znaju o njoj: susjedne zgrade, parcelu te obrise poplavnih područja, urbanističke namjene i tla. ModelCraft tu datoteku uzima kao prijedloge. Ništa se ne dodaje dok to ne kažete.

## Uvođenje datoteke

1. U programu CivilCraft pošaljite lokaciju u ModelCraft ili spremite datoteku (završava na `.ccsite.json`).
2. U ModelCraftu otvorite ili ispustite datoteku. Otvara se popis s okvirom za označavanje za svaku zgradu i za parcelu.
3. Upišite visinu za zgrade za koje izvor nije dao nijednu. Redak uz svaku kazuje odakle joj visina: broj etaža po 3 m, ili visinu koju ste upisali.
4. Pritisnite {{ui:Dodaj označene}}.

Označene zgrade postaju izvučene mase u jednoj komponenti, a parcela postaje linija oko lokacije. Sve je to jedan korak poništavanja. Točka adrese nalazi se u ishodištu, u metrima istočno i sjeverno od nje.

Obrisi poplava, namjena i tla navedeni su samo radi informacije; ne crtaju se.

Podaci potječu iz otvorenih izvora, a navođenje njihovih autora nalazi se na dnu popisa. Visine koje nisu zadane su pretpostavke, pa ih provjerite prije nego se oslonite na njih.
