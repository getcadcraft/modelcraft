---
title: Hoia .3dm-mudel reaalajas ühendatuna
summary: Muuda mudelit programmis, mis selle tegi, ja näe muutust siin, Rhino 8-st või Grasshopperi definitsioonist, ilma uuesti salvestamata ja importimata.
keywords: rhino, grasshopper, reaalajalink, reaalajas ühendus, 3dm, nurbs, parameetriline, link, sünkroonimine, skript, viitemudel, saatmine
from: 331b0a7e
---

Jätka modelleerimist seal, kus modelleerid, ja kasuta tulemust siin: renderdamiseks, valgustamiseks või stseeni ülesehitamiseks selle ümber. Iga muudatus teises programmis uuendab ühte gruppi ModelCraftis.

:::note
Link vajab **CadCraft Studio** samas arvutis. Brauseri vahekaart ühendust ei pea. Andmed ei liigu interneti kaudu: skript räägib Studioga selle arvuti oma aadressil, tokeniga.
:::

:::warning
Seda linki on testitud skripti failikirjutaja ja teise programmi asendajaga, mitte veel Rhino või Grasshopperi sees. Kui seal midagi ebaõnnestub, anna meile teada, mida see ütles.
:::

## Seadistamine

1. Studios ava ModelCraft. Jaotises {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}} märgi **Luba AI-assistentidel ja skriptidel kasutada ModelCraftit** ning seejärel **Redigeeri**.
2. Studios vali {{ui:Connect an assistant}}. See näitab aadressi ja tokenit, mille kleebid allpool.
3. Laadi skript alla: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhinost

1. Käivita `cadcraft_link.py` Rhino skriptiredaktoris (Rhino 8-s Python 3).
2. Esimesel korral kleebi aadress ja token. Need salvestatakse faili `.cadcraft-link.json` sinu kodukaustas, mitte mudelisse. Studio teeb iga käivitamisega uue tokeni, seega skript küsib siis uuesti.

Terve mudel tuleb üle ühe grupina, mis on nimetatud dokumendi järgi, näiteks „chair (linked)“. Pärast seda tuleb iga muudatus üle siis, kui oled hetkeks peatunud, ja saadetakse ainult muutunud objektid. Peatamiseks käivita skript uuesti.

## Grasshopperist

Käivita skript esmalt Rhinos, et aadress ja token salvestuksid.

1. Lisa Script-komponent (Python 3) ja kleebi sinna kogu `cadcraft_link.py`.
2. Anna sellele need sisendid: `G` (geomeetria, loendina), `N` (nimi, valikuline), `On` (tõeväärtuse lüliti) ja `Target` (valikuline: `model` või `part`, kui mõlemad rakendused on lahti).
3. Lülita `On` tõeseks.

Iga lahendus saadab `G` üle ja asendab eelmise saadetud sisu, nii et liugurit lohistades uueneb grupp siin. Selle väljund `a` ütleb, mis juhtus. Igal komponendil on oma grupp.

## Mida grupiga teha

- **Teisalda, märgi, ehita selle ümber.** Grupp ja selle silt jäävad igas uuenduses samale kohale, samuti kõik selle kõrval olev.
- **Ära muuda seda grupi sees.** Iga uuendus asendab grupi sisu. Need objektid kuuluvad teisele programmile.
- **Tagasivõtmine.** Uuendused, mis tulevad üksteisest kahe sekundi jooksul, jagavad ühte tagasivõtmise sammu, nii et {{key:Mod+Z}} võtab tagasi terve lohistuse. Järgmine uuendus viib mudeli taas vastavusse.
- **Salvestamine.** Salvestatud fail säilitab lingi. Pärast faili uuesti avamist käivita skript uuesti ja sama grupp uueneb.

## Mida üle tuleb

Võrgud, polügoonpinnad, pinnad ja ekstrusioonid ekraanil nähtava võrguna, SubD oma võrguna, kõverad servadena, plokid eraldi objektidena nende kohal (mitte komponentidena), kihid siltidena, samuti värvid ja ühikud. Vaata, kuidas need siin välja näevad: [.3dm-mudeli importimine](topic:import-3dm-files).

Jäetakse välja (teine programm näitab nende arvu): punktid, tekst, mõõtmed, valgustid ja muu taoline.

**Ainult ühes suunas.** Muudatused siin ei lähe tagasi teise programmi.

## Kui midagi läheb valesti

- **„No ModelCraft or PartCraft window allows it“:** tee seadistuse samm 1.
- **„Studio refused the token“:** Studio on taaskäivitunud. Kopeeri uus token ja käivita skript uuesti. Grasshopperi puhul käivita see esmalt Rhinos.
- **„Cannot reach CadCraft Studio“:** Studio ei tööta või aadress on muutunud.
