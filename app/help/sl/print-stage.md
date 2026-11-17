---
title: Postavite stvari na tiskalno podlago in jih pošljite tiskalniku
summary: Dodajte elemente knjižnice ali svoj model na podlago vašega tiskalnika, jih razporedite, preglejte rezine slojev ter pošljite tisk prek USB ali omrežja ali shranite G-kodo, ne da bi prej izvozili datoteko STL.
keywords: tiskalni prostor, 3D-tiskanje, tiskalnik, podlaga, pošlji 3D-tiskalniku, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, knjižnica, razporedi, prilagodi vse, predogled slojev, polnilo, podpore, filament, pla, petg, dodatek, dodatek za 3D-tiskanje
from: abcf5d7e
---

{{ui:Tiskalni prostor}} postavi stvari na podlago vašega tiskalnika, jih razreže in pošlje tiskalniku. Datoteke ne izvozite prej. Pripada dodatku za 3D-tiskanje, ki je privzeto vklopljen.

:::note
Z tem še ni bilo nič natisnjenega na pravem tiskalniku. Slicer je nov: opazujte prve sloje prvega tiska in pred pošiljanjem uporabite predogled slojev.
:::

## Kaj boste naredili

Postavite model na podlago, preverite, ali se prilega, poglejte rezine slojev ter ga pošljite tiskalniku ali shranite G-kodo.

## Koraki

1. Kliknite {{ui:Tiskalni prostor}} na orodni vrstici. Nad pogledom se odpre kartica, črtkani obris pa prikazuje vašo podlago.
2. Pod **Dodaj iz knjižnice** vpišite ime v iskalno polje, pritisnite {{ui:Išči}} in pritisnite {{ui:Dodaj}} pri rezultatu. Element pade na podlago v polni velikosti ali zmanjšan, da se prilega. Vse, kar ste že narisali ali uvozili in je vidno v pogledu, je prav tako na podlagi.
3. Pod **Na podlagi** preverite velikost vsakega elementa. Element, označen z **Izven podlage**, je treba premakniti. Premikajte, zasukajte in spreminjajte merilo stvari v pogledu z običajnimi orodji.
4. Pritisnite {{ui:Razporedi na podlago}}, da razporedite elemente, ali {{ui:Prilagodi vse na podlago}}, da jih zmanjšate, dokler se ne prilegajo.
5. Pod **Vaš tiskalnik** izberite velikost **Podlage** ali enega od profilov tiskalnikov.
6. Pod **Nastavitve tiska** izberite **Material**, **Kakovost** in **Polnilo %**, in označite **Dodaj podpore pod previsi**, če oblika to zahteva.
7. Pritisnite {{ui:Predogled slojev}} in premaknite drsnik **Sloj**, da si oglejte rezine slojev. Če kasneje spremenite tiskalni prostor ali nastavitve, ponovno pritisnite {{ui:Predogled slojev}}.
8. Pod **Povezava** izberite {{ui:Kabel USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} ali {{ui:PrusaLink}}. Za USB pritisnite {{ui:Poveži}}. Za tiskalnik v omrežju vpišite njegov **Naslov** (in **API ključ**, če ga zahteva), nato pritisnite {{ui:Preizkusi povezavo}}.
9. Pritisnite {{ui:Pošlji 3D-tiskalniku}}. Kartica vpraša, ali je podlaga prosta in je naložen pravi material, ter prikaže čas, material in temperature. Potrdite, da pošljete.

Prejeli boste sporočilo, da se tiskalnik zaganja. {{ui:Ustavi tisk}} izklopi grelce, ventilator in motorje. Če želite samo datoteko, pritisnite {{ui:Shrani G-kodo}}.

## Opombe

- USB potrebuje Chrome ali Edge na računalniku, stran pa mora ostati odprta, dokler se tisk ne konča. Če jo zaprete, se pretok ustavi.
- Tiskalnik v omrežju mora dovoliti to spletno mesto (v Moonraker ga dodajte v `cors_domains`; v OctoPrint vklopite CORS in kopirajte API ključ). Brskalnik lahko vpraša, ali sme dostopati do naprav v vašem omrežju.
- Nič se ne poveže in ničesar ne pošlje brez vašega klika.
- Seznam slicerjev je pod **Slicer**. {{ui:CadCraft osnovni (vključen, najhitrejši)}} je vgrajen. Kiri:Moto, PrusaSlicer, OrcaSlicer in Bambu Lab P2S so samostojni dodatki, ki jih vklopite na kartici ali pod {{ui:Nastavitve}} › {{ui:Dodatki}}. PrusaSlicer in OrcaSlicer uporabljata vašo lastno kopijo in delujeta iz CadCraft Studio na računalniku.
- Kosi, ki niso zaprta telesa, so izpuščeni, kartica pa pove, kolikšen del oblike to je.
- Za tiskalnike s smolo glejte [Rezanje za tiskalnik s smolo](topic:resin-printing). Za preverjanje ali popravilo modela najprej glejte [Podpore, debelina sten, izdolbljenje in popravilo](topic:print-tools).
