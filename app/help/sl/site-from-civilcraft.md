---
title: Uvoz lokacije iz CivilCraft
summary: Odprite datoteko z naslovom za lokacijo, ki jo ustvari CivilCraft, in dodajte stavbe ter parcelo okoli nje kot mase in črto lokacije, samo tiste, ki jih označite.
keywords: lokacija, civilcraft, naslov, parcela, sosednje stavbe, mase, kontekst, ccsite, odprti podatki, openstreetmap
from: f28e4a3b
---

CivilCraft lahko poišče naslov in shrani, kaj odprti podatkovni viri vedo okoli njega: sosednje stavbe, parcelo ter obrise poplav, namenske rabe in tal. ModelCraft to datoteko vzame kot predloge. Nič se ne doda, dokler tega ne potrdite.

## Uvoz datoteke

1. V CivilCraft pošljite lokacijo v ModelCraft ali shranite datoteko (konča se z `.ccsite.json`).
2. V ModelCraft odprite datoteko ali jo spustite vanj. Odpre se seznam s potrditvenim poljem za vsako stavbo in za parcelo.
3. Vtipkajte višino za stavbe, za katere vir višine ni podal. Vrstica ob vsaki pove, od kod prihaja njena višina: število etaž po 3 m ali višina, ki ste jo vtipkali.
4. Pritisnite {{ui:Dodaj označene}}.

Označene stavbe postanejo iztisnjene mase v eni komponenti, parcela pa postane črta okoli lokacije. Vse skupaj je en korak razveljavitve. Naslovna točka je v izhodišču, v metrih vzhodno in severno od nje.

Obrisi poplav, namenske rabe in tal so navedeni samo za informacijo; niso narisani.

Podatki prihajajo iz odprtih virov in imajo navedbo avtorjev na dnu seznama. Višine, ki niso bile navedene, so predpostavke, zato jih preverite, preden se nanje zanesete.
