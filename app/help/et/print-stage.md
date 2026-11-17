---
title: Asjade paigutamine printimislauale ja saatmine printerisse
summary: Lisa teegi üksused või oma mudel printeri lauale, paiguta need, vaata viilutatud kihte ning saada printimine USB või võrgu kaudu või salvesta G-kood, ilma et peaksid enne STL-i eksportima.
keywords: printimisala, 3D-printimine, printer, laud, saada 3D-printerisse, viilutaja, gcode, g-kood, usb, klipper, moonraker, octoprint, prusalink, teek, paiguta, mahuta kõik, kihieelvaade, täitus, toed, filament, pla, petg, lisandmoodul, 3D-printimise lisandmoodul
from: abcf5d7e
---

{{ui:Printimisala}} paigutab asjad printeri lauale, viilutab need ja saadab printerisse. Faili ei pea enne eksportima. See kuulub 3D-printimise lisandmoodulisse, mis on vaikimisi sisse lülitatud.

:::note
Selle abil ei ole veel midagi päris printeril printitud. Viilutaja on uus: jälgi esimesi kihte oma esimesel printimisel ja kasuta enne saatmist kihieelvaadet.
:::

## Mida sa teed

Aseta mudel lauale, kontrolli, et see mahub, vaata viilutatud kihte ning saada see printerisse või salvesta G-kood.

## Sammud

1. Klõpsa tööriistaribal {{ui:Printimisala}}. Vaate kohale avaneb kaart ja katkendjoonega kontuur näitab sinu lauda.
2. Jaotise **Lisa teegist** all kirjuta otsingukasti nimi, vajuta {{ui:Otsi}} ja vajuta tulemusel {{ui:Lisa}}. Üksus asetub lauale täissuuruses või suurendatuna sobivalt. Kõik, mille oled juba joonistanud või importinud ja mida näed vaates, on samuti laual.
3. Jaotise **Laual** all kontrolli iga üksuse suurust. Üksus, mis on märgitud **Väljaspool lauda**, tuleb teisaldada. Teisalda, pööra ja skaleeri asju vaates tavaliste tööriistadega.
4. Vajuta {{ui:Paiguta lauale}}, et asjad laiali laotada, või {{ui:Mahuta kõik lauale}}, et need skaleerida nii, et nad mahuvad.
5. Jaotise **Sinu printer** all vali **Laua** suurus või üks printeriprofiilidest.
6. Jaotise **Printimise sätted** all vali **Materjal**, **Kvaliteet** ja **Täitus %**, ning märgi **Lisa toed üleulatuvate osade alla**, kui kuju seda vajab.
7. Vajuta {{ui:Eelvaade kihtidena}} ja liiguta **Kihi** liugurit, et vaadata viilutatud kihte. Kui muudad hiljem printimisala või sätteid, vajuta {{ui:Eelvaade kihtidena}} uuesti.
8. Jaotise **Ühendus** all vali {{ui:USB-kaabel}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} või {{ui:PrusaLink}}. USB puhul vajuta {{ui:Ühenda}}. Võrguprinteri puhul sisesta selle **Aadress** (ja **API-võti**, kui seda küsitakse), seejärel vajuta {{ui:Testi ühendust}}.
9. Vajuta {{ui:Saada 3D-printerisse}}. Kaart küsib, kas laud on vaba ja õige materjal on laaditud, ning näitab aega, materjali ja temperatuure. Saatmiseks kinnita.

Saad teate, et printer käivitub. {{ui:Peata printimine}} lülitab kütted, ventilaatori ja mootorid välja. Kui soovid ainult faili, vajuta {{ui:Salvesta hoopis G-kood}}.

## Märkused

- USB nõuab arvutis Chrome'i või Edge'i ning leht peab jääma avatuks, kuni printimine lõpeb. Lehe sulgemine peatab voo.
- Võrguprinter peab selle saidi lubama (Moonrakeris lisa see `cors_domains`-i; OctoPrintis lülita CORS sisse ja kopeeri API-võti). Su brauser võib küsida luba seadmetega oma võrgus ühenduda.
- Ilma sinu klõpsuta ei ühendu ega saada midagi.
- Viilutajate loend on jaotises **Viilutaja**. {{ui:CadCraft basic (kaasas, kõige kiirem)}} on sisse ehitatud. Kiri:Moto, PrusaSlicer, OrcaSlicer ja Bambu Lab P2S on eraldi lisandmoodulid, mille saad sisse lülitada kaardilt või jaotises {{ui:Sätted}} › {{ui:Lisandmoodulid}}. PrusaSlicer ja OrcaSlicer kasutavad sinu enda koopiat ning töötavad arvutis CadCraft Studiost.
- Tükid, mis ei ole suletud tahkised, jäetakse välja ning kaart ütleb, kui suur osa kujust see on.
- Vaigprinterite kohta vaata [Viiluta vaigprinteri jaoks](topic:resin-printing). Mudeli kontrollimiseks või parandamiseks enne vaata [Toed, seina paksus, õõnestamine ja parandus](topic:print-tools).
