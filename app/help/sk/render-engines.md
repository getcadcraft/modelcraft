---
title: Vyberte program, ktorý nakreslí obrázok
summary: Voľba Engine v dialógu Vykresliť: naše dva enginy, iné programy v CadCraft Studio a čo namiesto toho robí web.
keywords: vykresliť, engine, renderer, render engine, plug-in, plugin, studio, externý program, nakreslené, fronta, engine doplnku
from: be4b056a
---

{{ui:Vykresliť obrázok…}} má nad režimom voľbu **Engine**. Naše dva vlastné enginy sú vždy k dispozícii a fungujú všade; doplnky môžu pridať ďalšie a v CadCraft Studio zoznam obsahuje aj programy, ktoré preberajú scénu.

| Engine | Čo robí | Kde |
|---|---|---|
| Vstavaný: Rýchly | Rýchly obrázok: denné svetlo, jemné tiene, vzhľad skla a kovu, za sekundy | Prehliadač a Studio |
| Vstavaný: Path tracer | Odrážanie svetla medzi povrchmi na vašej grafickej karte alebo procesore, fronta vykresľovania a ďalšie počítače vo vašej sieti | Prehliadač a Studio |
| Engine doplnku | Nakreslí obrázok a vráti ho: pozrite [Nakreslenie obrázka iným programom](topic:render-other-program) | Prehliadač (engine napísaný v JavaScripte) alebo Studio (engine, ktorý spúšťa program) |
| Program, ktorý preberá scénu | Studio uloží scénu do svojej zložky a udržiava ju v súlade | Studio |
| Otvoriť v … | Uloží scénu a otvorí ju v programe; nič sa nevráti: pozrite [Otvorenie scény v inom programe](topic:render-open-in) | Web uloží súbor |

## Ako voľba funguje

- Výber Rýchly alebo Path tracer mení režim spolu s ním a naopak. Nič iné v dialógu sa nemení pre ľudí, ktorí nikdy nepoužívajú iný engine.
- Engine, ktorý nie je dostupný, zostáva v zozname s dôvodom ("not found" › "nenájdené", "needs a newer version" › "vyžaduje novšiu verziu"); nedá sa vybrať. V prehliadači engine, ktorý beží len v Studio, zobrazí "ukladá súbor": {{ui:Vykresliť obrázok…}} potom uloží scénu a jej nastavenia do súboru, ktorý odnesiete do toho programu.
- Voľba sa uloží spolu s nastaveniami vykresľovania súboru a engine, ktorý ste vybrali naposledy, je východiskový pre súbory, ktoré nemajú vlastnú voľbu.
- Obrázok z iného programu uvedie, ktorý program ho nakreslil a jeho verziu, v dialógu aj vo fronte vykresľovania. Sľuby stránky [Vykresliť](topic:render) sa vzťahujú len na **naše vlastné** enginy: iný program osvetľuje, tónuje a vzorkuje po svojom, takže dva obrázky jednej scény sú podobné v kamere, slnku, svetlách a expozícii, nie pixel po pixeli.

## Čo dostane každý engine

Scéna sa odovzdá inému programu ako **balík**: model ako súbor USD (rovnaký súbor, aký zapíše [Uložiť ako USD](topic:usd)) a súbor nastavení, ktorý obsahuje to, čomu sa importéru USD nedá dôverovať: presné hodnoty materiálov, svetlá, ktoré sú zapnuté, s ich výkonom a svetelnými profilmi, slnko, oblohu, expozíciu a kameru tak, ako by ju nakreslil dialóg. Nikam sa nič nenahráva.

## Fronta vykresľovania

Obrázok alebo animácia pre iný program môže čakať vo [fronte vykresľovania](topic:render#the-render-queue) rovnako ako naše; jej úloha si pamätá, pre ktorý engine je. Animácia ide do programu v jednom behu.
