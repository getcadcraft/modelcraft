---
title: Saada stseen mängumootorisse
summary: Studio võib kirjutada stseeni Unreal Engine'i projekti ja hoida seda igal saatmisel sammu pidamas; sinu enda muudatused elavad kihis, mida CadCraft kunagi ei kirjuta. Unreali lisandmoodul, mis selle avab, ei ole veel välja antud.
keywords: unreal, unreal engine, mängumootor, link, saada, usd-lava, projekt, otse, cine-kaamera, filmi renderdamise järjekord
from: 9a765cc2
---

CadCraft Studios võib mootorite loendis hoida **linki** Unreal Engine'i projektile. Ainult ühes suunas: CadCraftist Unrealisse.

## Stseeni saatmine

1. Vali mootorite loendis Unreali kirje. Esimesel korral palub Studio valida projekti kausta (see, kus on `.uproject`-fail); ta mäletab seda.
2. Klõpsa {{ui:Saada}}. Studio kirjutab projekti sisse `CadCraft/<file name>/`: stseeni USD-failina, sätete faili, valgusprofiilid ja kaks väikest kihifaili.
3. Muuda mudelit, salvesta ja saada uuesti. Asendatakse ainult stseen ja sätete fail.

## Sinu enda muudatused on kaitstud

USD-lava, mille Unreal avab, on väike juurkiht, mis tehakse üks kord, ja selle all kaks kihti: **sinu oma** peal (`<name>.user.usda`, algul tühi, CadCraft seda kunagi uuesti ei kirjuta) ja CadCraftile kuuluv stseen all. Sinu enda kihti salvestatud muudatused jäävad alles, kui stseen uuesti saadetakse. Valgustid ja muud aktorid, mille paigutad Unreali tasandile, on lavast väljas ja neid ei puututa samuti.

## Ilma Studiota

Brauseris või arvutis, kus Studio Unrealit ei leia, vali mootorite loendis **Unreali projekti kaust (.zip)** ja klõpsa {{ui:Renderda}}. See salvestab sama kausta zip-failina: paki see lahti oma projekti kausta `CadCraft`. Jäta **Lisa lavafailid** esimesel korral sisse; lülita järgmiste salvestuste jaoks välja, nii et zip sisaldab ainult stseeni ja sätete faili ning sinu enda kiht ei asendu kunagi.

:::note
Unreali lisandmoodul, mis avab lava, rakendab päikese, valgustid, kaamerad ja särituse, jälgib iga saatmist ja renderdab kaamera, **ei ole veel välja antud** ega ole Unrealis käivitatud. Kuni see on, paneb Saada failid projekti ja Unreali enda USD-tööriistad saavad need avada. Esimene süsteem on Windows; macOS tuleb hiljem.
:::
