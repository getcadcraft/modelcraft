---
title: Dėkite daiktus ant spausdinimo stalo ir siųskite juos spausdintuvui
summary: Pridėkite bibliotekos elementus arba savo modelį prie spausdintuvo stalo, sudėliokite juos, peržiūrėkite supjaustytus sluoksnius ir siųskite spausdinimą per USB ar tinklą arba įrašykite G-code, be to, kad pirmiausia eksportuotumėte STL.
keywords: spausdinimo stadija, 3d spausdinimas, spausdintuvas, stalas, siųsti 3D spausdintuvui, pjaustyklė, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, biblioteka, sudėlioti, sutalpinti visus, sluoksnių peržiūra, užpildymas, atramos, filamentas, pla, petg, priedas, 3D spausdinimo priedas
from: abcf5d7e
---

{{ui:Spausdinimo stadija}} sudėlioja daiktus ant jūsų spausdintuvo stalo, juos supjausto ir siunčia spausdintuvui. Failo eksportuoti nereikia. Ji priklauso 3D spausdinimo priedui, kuris įjungtas pagal numatytuosius nustatymus.

:::note
Su tuo dar niekas nebuvo atspausdinta tikru spausdintuvu. Pjaustyklė nauja: stebėkite pirmuosius savo pirmo spausdinimo sluoksnius ir prieš siųsdami naudokite sluoksnių peržiūrą.
:::

## Ką darysite

Padėsite modelį ant stalo, patikrinsite, ar jis telpa, pažiūrėsite supjaustytus sluoksnius ir išsiųsite jį spausdintuvui arba įrašysite G-code.

## Žingsniai

1. Spustelėkite {{ui:Spausdinimo stadija}} įrankių juostoje. Virš vaizdo atsidaro kortelė, o brūkšninis kontūras rodo jūsų stalą.
2. Skiltyje **Pridėti iš bibliotekos** įveskite pavadinimą paieškos lauke, paspauskite {{ui:Ieškoti}} ir spustelėkite {{ui:Pridėti}} prie rezultato. Elementas patenka ant stalo pilnu dydžiu arba sumažintas, kad tilptų. Viskas, ką jau nubraižėte ar importavote ir matote vaizde, taip pat patenka ant stalo.
3. Skiltyje **Ant stalo** patikrinkite kiekvieno elemento dydį. Elementas, pažymėtas **Už stalo ribų**, turi būti perkeltas. Perkelkite, pasukite ir keiskite jo mastelį vaizde įprastais įrankiais.
4. Paspauskite {{ui:Sudėlioti ant stalo}}, kad išskirstytumėte elementus, arba {{ui:Sutalpinti visus ant stalo}}, kad juos sumažintumėte, kol jie tilps.
5. Skiltyje **Jūsų spausdintuvas** pasirinkite **Stalo** dydį arba vieną iš spausdintuvo profilių.
6. Skiltyje **Spausdinimo nustatymai** pasirinkite **Medžiagą**, **Kokybę** ir **Užpildymą %**, o jei forma to reikalauja, pažymėkite **Pridėti atramas po nuolydžiais**.
7. Paspauskite {{ui:Peržiūrėti sluoksnius}} ir perkelkite **Sluoksnio** slankiklį, kad peržiūrėtumėte supjaustytus sluoksnius. Jei vėliau pakeisite stadiją ar nustatymus, vėl paspauskite {{ui:Peržiūrėti sluoksnius}}.
8. Skiltyje **Ryšys** pasirinkite {{ui:USB kabelis}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} arba {{ui:PrusaLink}}. USB atveju paspauskite {{ui:Prisijungti}}. Tinklo spausdintuvui įveskite jo **Adresą** (ir **API raktą**, jei to prašo), tada paspauskite {{ui:Patikrinti ryšį}}.
9. Paspauskite {{ui:Siųsti 3D spausdintuvui}}. Kortelė klausia, ar stalas tuščias ir ar įdėta reikiama medžiaga, ir rodo laiką, medžiagą bei temperatūras. Patvirtinkite, kad išsiųstumėte.

Gausite pranešimą, kad spausdintuvas paleidžiamas. {{ui:Stabdyti spausdinimą}} išjungia kaitintuvus, ventiliatorių ir variklius. Jei norite tik failo, paspauskite {{ui:Vietoj to įrašyti G-code}}.

## Pastabos

- USB reikia Chrome arba Edge naršyklės kompiuteryje, o puslapis turi likti atviras, kol baigsis spausdinimas. Jį uždarius srautas nutrūksta.
- Tinklo spausdintuvas turi leisti šią svetainę (Moonraker'yje įtraukite ją į `cors_domains`; OctoPrint'e įjunkite CORS ir nukopijuokite API raktą). Jūsų naršyklė gali paklausti, ar galima pasiekti įrenginius jūsų tinkle.
- Niekas nesijungia ir nieko nesiunčia be jūsų spustelėjimo.
- Pjaustyklių sąrašas yra skiltyje **Pjaustyklė**. {{ui:CadCraft basic (įtrauktas, greičiausias)}} yra įmontuota. Kiri:Moto, PrusaSlicer, OrcaSlicer ir Bambu Lab P2S yra atskiri priedai, kuriuos įjungiate iš kortelės arba {{ui:Parametrai}} › {{ui:Priedai}}. PrusaSlicer ir OrcaSlicer naudoja jūsų pačių kopiją ir veikia iš CadCraft Studio kompiuteryje.
- Dalys, kurios nėra uždaryti kietieji kūnai, praleidžiamos, o kortelė praneša, kokia formos dalis tai sudaro.
- Dervos spausdintuvams žr. [Supjaustymas dervos spausdintuvui](topic:resin-printing). Norėdami pirmiausia patikrinti ar pataisyti modelį, žr. [Atramos, sienelės storis, ištuštinimas ir taisymas](topic:print-tools).
