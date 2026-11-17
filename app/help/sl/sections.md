---
title: Prerezne ravnine: model odprite z rezom
summary: Postavite prerezno ravnino, da vidite v notranjost modela, jo pomaknite skozi, obrnite ali izklopite rez.
keywords: prerez, prerezna ravnina, rez prereza, rez, odrez, prikaz z odrezom, notranjost, tloris, rezina, prečni prerez
from: 28c3a645
---

Prerezna ravnina model prereže, tako da lahko vidite in delate v notranjosti: tloris hiše, notranjost omarice. Model se ne spremeni; rez je samo pogled.

## Postavite prerezno ravnino

1. V skupini {{ui:Kamera}} kliknite {{ui:Prerez}}.
2. Kliknite ploskev. Ravnina se postavi na to ploskev s štirimi puščicami, ki kažejo proti vam.

   Kliknite stran od katere koli ploskve, da ravnina stoji pravokotno na smer, v katero največ gledate. Najprej pritisnite puščično tipko, da jo postavite pravokotno na rdečo os ({{key:Right}}), zeleno ({{key:Left}}) ali modro ({{key:Up}}).

Stran, na katero kažejo puščice, je **odrezana**. Ravnina, postavljena na ploskev, še ne reže ničesar: pomaknite jo v model.

## Pomaknite, obrnite, izklopite

Kliknite obris ravnine, da jo izberete. V {{ui:Podatki o entiteti}}:

- {{ui:Vzdolž puščic}} pove, kje stoji. Vpišite novo razdaljo in pritisnite {{key:Enter}}, da jo pomaknete skozi model; vpis `-1m` na ravnini, ki ste jo postavili na sprednjo ploskev, jo premakne 1 m v model.
- {{ui:Obrni}} obrne puščice, tako da je odrezana druga stran.
- {{ui:Dejavno (reže model)}}: naenkrat reže ena ravnina. Označite okvirček druge ravnine ali postavite novo, in ta bo rezala namesto nje.
- Preimenujte jo v {{ui:Ime}}; izbrišite jo s {{key:Delete}} ali z {{ui:Radirka (E)}}.

Kjer ravnina poteka skozi zaprto telo, je rez zapolnjen s temno barvo. Geometrija, ki ni zaprta (ena sama ploskev, odprta škatla), se prereže, vendar ni zapolnjena.

## Prikaz in skrivanje

V {{ui:Pogledi}}:

- {{ui:Prikaži prerezne ravnine}} skrije obrise in puščice ravnin (rez ostane).
- {{ui:Prikaži prereze}} izklopi rez in prikaže celoten model, ne da bi izbrisal ravnine.

[Predstavitveni pogled](topic:styles-shadows#presentation-view) prav tako skrije obrise.

## Kaj morate vedeti

- Odrezanega ni mogoče klikniti ali loviti, zato lahko rišete na to, kar prikazuje rez.
- Prerezne ravnine, katera je dejavna, in obe stikali se shranijo v datoteko ModelCraft. Vsaka sprememba je en korak razveljavitve.
- Izvozi vedno vsebujejo celoten model: prerez je pogled, ne urejanje.
