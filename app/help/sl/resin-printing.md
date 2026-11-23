---
title: Rezanje za tiskalnik s smolo
summary: Narežite podlago tiskalne mize za tiskalnik s smolo, izdolbite in podprite del, preglejte plasti, shranite datoteko tiskalnika in poiščite svojo osvetlitev s preskusom osvetlitve.
keywords: smola, predlagaj nagib, prisesalna čašica, sila luščenja, podpiranje, tiskanje s smolo, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, izdolbeno, odzračevalna luknja, podlaga, podpore, preskus osvetlitve, lestev osvetlitve, kalibracija, plasti, dodatek
from: 8cc12858
---

Dodatki za smolo narežejo, kar je na tiskalni mizi, v slike plasti za zaslon vašega tiskalnika in shranijo datoteko, ki jo tiskalnik bere. So brezplačni, nič ni zaklenjeno, in so izklopljeni, dokler jih ne vklopite.

:::note
Na pravem tiskalniku še ni bila naložena nobena datoteka. Datoteke so prebrali samo lastni bralniki CadCraft, podpore pa so nove. Preverite plasti in prvi tisk opravite ročno.
:::

## Kaj boste naredili

Narežite del za smolo, preverite plasti, shranite datoteko in jo kopirajte na svoj tiskalnik.

## Koraki

1. Odprite {{ui:Nastavitve}} › {{ui:Dodatki}} in vklopite dodatek za rezanje za smolo ter dodatek za datotečni format vašega tiskalnika (Elegoo GOO, SL1, Chitubox ali Anycubic). Lahko pritisnete tudi {{ui:Dodaj tiskanje s smolo}} na kartici faze tiskanja.
2. Postavite del na mizo, kot je opisano v [Postavljanje stvari na mizo za tiskanje](topic:print-stage), nato izberite {{ui:Smola}} poleg **Tiskanje z**.
3. V razdelku **Nastavitve tiskanja s smolo** izberite svoj **Tiskalnik** in svojo **Smolo**. Kartica prikaže velikost zaslona v slikovnih pikah. To so objavljene velikosti proizvajalca, zato preverite svojo; urejate jih lahko pod Po meri.
4. Nastavite **Višina plasti (mm)**, **Osvetlitev (s)** in **Osvetlitev spodnje plasti (s)**. Številke za vsako smolo so samo izhodišče.
5. Obkljukajte **Izdolbi jo, z odzračevalno luknjo**, če želite votel del, in nastavite **Stena (mm)** ter **Širina luknje (mm)**.
6. Obkljukajte **Podpore in podlago**, nato izberite **Gostota podpor**: Lahka, Srednja ali Močna.
7. Izberite **Format datoteke**. Če kartica pravi, da še ni dodan nobeden, pritisnite gumb, na katerem piše Dodaj, in ime formata.
8. Pritisnite {{ui:Predogled plasti}} in premaknite drsnik **Plast**. Plavajoči kosi so obkroženi. Vrstica pod njim navaja plasti, čas ter smolo v mL, gramih in ceno.
9. Pritisnite {{ui:Shrani datoteko za tiskanje}}, preglejte povzetek in pritisnite {{ui:Shrani}}. Datoteko kopirajte na svoj tiskalnik.

## Nagib, prisesalne čašice, opornice in sila luščenja

Teh štirih so ocene glede na obliko dela. Nobena ni bila preizkušena na pravem tiskalniku, zato jih obravnavajte kot namig in poglejte plasti.

1. Pritisnite {{ui:Predlagaj nagib}} pod **Nagib (stopinje)**. CadCraft preizkusi nagibe od 0 do 60 stopinj in izbere tistega z najmanjšo največjo plastjo, najmanj previsno površino in brez prisesalne čašice. Nastavi **Nagib (stopinje)** in pove, kaj je našel. Uteži ocenjevanja so naše, ne proizvajalca tiskalnika.
2. Po {{ui:Predogled plasti}} opozorilo navede votline, ki se odpirajo samo proti foliji. Taka votlina lahko med luščenjem plasti zadrži sesanje. Nagnite del ali dodajte luknjo. Žepi, ožji od velikosti celice, navedene v opozorilu, niso zaznani.
3. Ob vklopljenih **Podpore in podlaga** obkljukajte **Poveži visoke podpore**, da dodate križne vezi med visokimi tankimi stebri.
4. Vrstica pod predogledom navaja največjo plast v cm2. Silo prikaže samo, če vnesete **Izmerjena napetost luščenja** pod **Spodnje plasti, dvig in hitrosti**. Brez vaše izmerjene vrednosti prikaže samo površino.

## Poiščite svojo osvetlitev

1. V {{ui:Nastavitve}} › {{ui:Dodatki}} vklopite dodatek za preskus osvetlitve.
2. Pritisnite {{ui:Postavi preskusni del na mizo}}.
3. Pritisnite {{ui:Shrani lestev osvetlitve}}. Dobite eno datoteko za vsako osvetlitev, v stisnjeni datoteki zip.
4. Vsako datoteko natisnite z isto smolo in obdržite osvetlitev, pri kateri so tanki stebrički in odprte luknje najostrejši.

## Opombe

- Rezanje poteka v ozadju, zato stran ostane uporabna pri velikih mizah.
- Kosi, ki niso zaprta telesa, se izpustijo, kartica pa to pove.
- Če tiskalnik zavrne datoteko, ima kartica formata možnosti za to, kar format pusti odprto. Spremenite eno, znova shranite in nam sporočite, katera je delovala.
- Različici Anycubic 517 in 518 nista zapisani.
