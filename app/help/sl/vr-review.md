---
title: Pregled modela z VR očali
summary: Hodite po modelu v naravni velikosti z VR očali: skačite, se obračajte, merite, ga prerežite, postavljajte zadeve s sliko, si oglejte model kot namizni model in srečajte druge v živi seji.
keywords: vr, virtualna resničnost, očala, webxr, xr, poglobljeno, quest, oculus, vive, index, pico, sprehod skozi, pregled, teleport, pregled zasnove, pregled, meri, prerez, prereži, zadeva, zadeve, bcf, namizni model, prisotnost, avatarji, živo, skupaj
from: fa2f591a
---

{{ui:Pregled v VR}} vas postavi v model z VR očali, v naravni velikosti. Stojite tam, kjer je kamera pogleda, na tleh pod njo, obrnjeni v isto smer. Nič se ne pošlje nikamor: očala prikazujejo, kar brskalnik nariše na tem računalniku (ali v brskalniku samih očal).

## Kaj potrebujete

- Očala, ki jih brskalnik lahko upravlja (WebXR): samostojni brskalnik v očalih ali Chrome ali Edge na računalniku s priključenimi očali.
- ModelCraft odprt na varni strani (https), kakor je na tem spletnem mestu.

Če očal ni, je {{ui:Pregled v VR}} neaktiven in pove, zakaj.

## Začetek

1. Nastavite pogled, kjer želite začeti: v sobi ali zunaj, gledate stavbo.
2. Kliknite {{ui:Pogledi}} v skupini {{ui:Kamera}}, nato {{ui:Pregled v VR}}.
3. Nadenite očala.

Meni je na hrbtni strani leve roke. Usmerite nanj desni krmilnik in pritisnite sprožilec, da izberete gumb. (Z eno roko meni lebdi pred mestom, kjer ste začeli.)

## Kako izgleda

Očala prikazujejo model v [videzu živega pogleda](topic:live-view): videzi in materiali, ki ste jih dali ploskvam, nebo in sonce z mesta in datuma vašega modela s senco, svetila, raztresene rastline in kamenje ter svetloba, odbita od sten in tal (izračunana na tem računalniku, medtem ko se ozirate, in sledi vam, ko se premikate). Svetlost in preslikava pogleda (ACES ali AgX) sta enaki kot pri [Upodobi sliko](topic:render). Koliko se riše, je odvisno od tega, kaj ima brskalnik v očalih, kakor na namizju; ambientna okluzija, odsevi in bloom ostanejo na namizju.

## Premikanje okoli

- **Skok:** v {{ui:Premakni (M)}} usmerite kazalec v tla in pritisnite sprožilec; pristanete tam. Ali potisnite palico naprej, da nastavite cilj, in jo spustite, da skočite. Pristanete lahko le na tleh in podlagi (ploskvah, obrnjenih navzgor), nikoli na steni.
- **Obračanje:** potisnite palico levo ali desno: obrnete se za 30° vsakič.
- **Hoja:** na svojem območju za gibanje preprosto hodite.

## Merjenje

Izberite {{ui:Meri}}, nato pritisnite sprožilec na dveh točkah. Razdalja se pokaže med njima, v enotah modela. Točka blizu vogala se prilepi na vogal.

## Prerežite

Izberite {{ui:Prerez}} in pritisnite sprožilec na ploskvi:

- na steni (ali čemerkoli, kar ni tla): vse med vami in to ploskvijo se odreže, da vidite noter. Najbolje deluje od zunaj ali čez sobo;
- na tleh, od zgoraj: tloris 1.2 m nad temi tlemi, da stene pokažejo svoj spodnji del.

{{ui:Počisti}} odstrani prerez in meritve. Če ravnina prereza seka model v pogledu, ko začnete, očala začnejo s prerezom.

## Postavite zadevo

Izberite {{ui:Zadeva}} in pritisnite sprožilec tam, kjer je težava. Oštevilčen zatič jo označi, ModelCraft pa ohrani zadevo s sliko tistega, kar ste videli, in kje ste stali. Ko zapustite VR, so zadeve v seznamu {{ui:Zadeve}} na desni:

- gumb z očesom prikaže zadevo z mesta, kjer je bila postavljena;
- {{ui:Shrani kot BCF}} prenese vse kot datoteko BCF, ki jo odpirajo programi za pregled BIM (vključno s kamero in sliko);
- shranjene so tudi v datoteki `.modelcraft`.

Komentar k zadevi dodajte, ko zapustite VR, v programu BCF: pisanje v očalih še ni izdelano.

## Oglejte si ga kot namizni model

{{ui:Namizje}} zmanjša model, da se prilega mizi pred vami; hodite okoli njega ali ga obrnite s palico. {{ui:Polna velikost}} vas vrne tja, kjer ste bili.

## Z drugimi, v živo

V [živi seji](topic:work-live) vsi v VR vidijo druge kot glavo in dve roki v njihovi barvi, z imenom, in piko, kamor kdo kaže. Spremembe, ki jih naredi kdorkoli, dosežejo vaša očala v trenutku. Ljudje za mizo še niso prikazani v očalih.

## Izstop

Izberite {{ui:Zapusti VR}} (ali snemite očala in tam končajte). Pogled na zaslonu se premakne tja, kjer je bila vaša glava.

:::note
Preizkušeno samo z emulatorjem očal, še ne z resničnimi očali. Velik model lahko povzroči zatikanje slike v očalih: najprej skrijte, kar ne potrebujete ([skrij in izoliraj](topic:hide-isolate)).
:::
