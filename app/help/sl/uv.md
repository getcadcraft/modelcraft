---
title: Razporeditev UV koordinat mreže
summary: Označite šive, razvijte, projicirajte in zapakirajte teksturne koordinate mreže v delovnem okolju UV ter jih preverite s šahovnico in barvami raztezanja.
keywords: uv, uvs, razvij, razvijanje, šiv, šivi, tekstura, teksturne koordinate, atlas, pakiranje, zapakiraj, otok, otoki, šahovnica, raztezanje, popačenje, projekcija kvadra, projekcija valja, projekcija krogle, konformno, na podlagi kotov, lscm, abf
from: 00028f20
---

Tekstura je ravna slika; mreža ni ravna. Njene **UV** povedo, kje na sliki je vsak vogal vsake ploskve. Delovno okolje UV jih naredi: mrežo prerežete vzdolž **šivov**, položite kose naravnost (**razvij**) in jih vklopite v kvadrat (**zapakiraj**).

## Odprite ga

Izberite mrežo in izberite {{ui:UV}} v seznamu {{ui:Delovno okolje}}. Skupina ali komponenta se najprej spremeni v mrežo, kakor v delovnem okolju Mreža. 3D pogled se premakne na levo polovico; **urejevalnik UV** na desni prikazuje ploskve mreže, razporejene na teksturnem kvadratu. Izbiranje deluje kakor v delovnem okolju Mreža, in kar izberete v enem pogledu, je izbrano tudi v drugem.

## Označite šive

Šivi so mesta, kjer se mreža lahko prereže; v obeh pogledih so prikazani rdeče.

- Izberite robove ({{ui:Rob}} ali {{key:2}}) in pritisnite {{ui:Označi šiv}} ({{key:Ctrl+E}}). {{ui:Odstrani šiv}} ({{key:Ctrl+Shift+E}}) jih odstrani.
- {{ui:Šivi na ostrih robovih}} označi vsak ostri rob in vsak rob, kjer se ploskve stikajo pod kotom, večjim od 60°: kvader se razdeli na svojih šest stranic.
- {{ui:Šivi iz UV}} označi šive, kjer se UV že prelomijo, na primer po projekciji.

Zaprt kos potrebuje šive, da leži naravnost: krogla potrebuje vsaj en rez, cev pa rez po dolžini.

## Razvij

Izberite ploskve za razporeditev (ali nič za celotno mrežo) in pritisnite {{ui:Razvij}} ({{key:U}}). Vsak kos med šivi se položi naravnost in ohrani kote, kolikor je mogoče (sploščenje na podlagi kotov), nato se kosi zapakirajo v kvadrat. {{ui:Konformno}} razvije s konformnimi preslikavami po metodi najmanjših kvadratov: hitreje, a nekoliko manj natančno pri močno ukrivljenih kosih. Oblika, ki jo lahko naredite iz ravne pločevine, na primer stranico valja, razrezano enkrat, se razvije brez raztezanja.

## Projicirajte

Pri preprostih oblikah je projekcija pogosto dovolj:

| Projekcija | Kaj naredi |
| --- | --- |
| {{ui:Kvader}} | Vsaka ploskev na stranico kvadra, na katero je najbolj obrnjena |
| {{ui:Valj}} | Okoli modre osi: vodoravno je kot okoli, navpično višina |
| {{ui:Krogla}} | Iz središča: vodoravno je kot okoli, navpično zemljepisna širina |
| {{ui:Iz pogleda}} | Kakor so ploskve videti zdaj v 3D pogledu |

Ploskev čez stik valja ali krogle ostane v enem kosu, zato se lahko njeni UV rahlo prevesita čez desni rob kvadrata; teksture se tam ponavljajo.

## Uredite razporeditev

- {{ui:Zapakiraj}} vklopi kose (otoke) v kvadrat pri eni velikosti teksla, vsak zasukan tako, da zavzame najmanj prostora. Podokno nastavi prostor med njimi.
- {{ui:Zasukaj 90°}} in {{ui:Zrcali}} zasučeta ali zrcalita UV izbranih ploskev.
- V urejevalniku UV povlecite izbrano ploskev, da premaknete UV izbora, ali pa kazalec postavite na urejevalnik in pritisnete {{key:R}} ali {{key:S}}, nato premaknite, da zasučete ali spremenite merilo (klik ohrani, {{key:Esc}} prekliče). {{key:G}} premakne brez vlečenja. Dvojni klik na ploskev (ali {{key:L}}) izbere ves njen otok. Kolešček povečuje; vlecite s srednjim ali desnim gumbom za pomik; {{key:F}} znova prilagodi kvadrat.

Vsaka sprememba je en korak razveljavitve.

## Preverite jih

- {{ui:Šahovnica}} pokaže označeno šahovnico na mreži v njenih UV: enakomerna, kvadratna polja pomenijo, da tekstura leži enakomerno; oznake kažejo, v katero smer teče.
- {{ui:Raztezek}} pobarva vsako ploskev glede na to, koliko jo UV raztegnejo: modro pomeni nič, prek zelene do rdeče za veliko. Podokno izbere, ali meri **upognjene kote** ali **spremenjeno velikost**, in prikaže povprečje.

Glejte tudi [Urejanje mreže](topic:mesh-edit), [Mreže](topic:meshes) in [Modifikatorji na mreži](topic:modifiers).
