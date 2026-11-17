---
title: Valmista mudel 3D-printimiseks
summary: Kontrolli, kas mudel on suletud ja tahud on õiges suunas, vaata selle suurust, alust ja ülelohet, paranda vead ning laadi see alla STL- või 3MF-failina oma viilutajale.
keywords: 3d-printimine, printer, printimine, viilutaja, stl, 3mf, veekindel, suletud, korrektne, tahke, augud, pahupidi, ülelohe, toed, alus, platvorm, millimeetrid, eksport, paranda, parandus, õõnestamine, platvormi suurus, algaja, seina paksus, printimise tööriistad
from: 948e19af
---

3D-printeri viilutaja vajab suletud kuju: ilma aukudeta, iga tahk osutab väljapoole ja miski ei läbi iseennast. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} kontrollib just seda enne, kui faili alla laadid.

## Kontrolli ja laadi alla

1. Vali, mida soovid printida: üks või mitu gruppi või komponenti või mõned tahud. Kui midagi pole valitud, prinditakse kõik näidatud.
2. Klõpsa {{ui:Export}} rühmas {{ui:File}} ja seejärel {{ui:Check for 3D printing (STL or 3MF)…}}.

   Dialoog algab ühe reaga: „Valmis printimiseks“, mitu asja tuleb enne printimist parandada või mitu tuleb esmalt üle vaadata. Iga probleem koosneb kolmest osast: mis on valesti, miks see on oluline ja mida teha. Seejärel tulevad suurus millimeetrites, maht, kolmnurkade arv ja sinu printeri platvorm.

3. Kui dialoog loetleb asju, mida parandada, klõpsa {{ui:Fix what can be fixed}} (vt allpool). Kontroll käivitub uuesti iseenesest.
4. Klõpsa {{ui:Download 3MF}} või {{ui:Download STL}}.

Prindib see, mida näed: peidetud tahud, peidetud grupid ja komponendid ning kõik peidetud sildil olev jäetakse välja. Suurused on alati millimeetrites, ühikus, mida viilutajad ootavad, olenemata sellest, millist ühikut mudel näitab.

:::tip
Eelista 3MF-i, kui su viilutaja seda loeb: see säilitab värvid ja ühikud. STL-il pole kumbagi ja viilutajad eeldavad millimeetreid.
:::

## Mida kontroll otsib

Need peatavad printimise või rikuvad selle ning panevad dialoogi ütlema „Pole valmis printimiseks“:

| Probleem | Mida see tähendab | Mida teha |
|---|---|---|
| Tahk ainult ühel küljel | Auk: servas on tahk ühel küljel ja teisel pool pole midagi | Joonista puuduv tahk (joon üle lõhe sulgeb sageli selle) või kasuta {{ui:Fix}} (allpool) |
| Jagatud kolme või enama tahu vahel | Tahud kohtuvad uimes või seinas tahkise sees | Kustuta sisemine tahk |
| Tahud on vastassuunas | Mõned tahud osutavad sissepoole, mõned väljapoole | Vali sissepoole osutavad tahud ja klõpsa {{ui:Entity info}} all {{ui:Reverse face}} |
| Pahupidi | Terve suletud osa osutab sissepoole | Vali selle tahud ja pööra need ümber |
| Läbib iseennast | Üks osa voldib end läbi iseenda | {{ui:Redigeeri}} › {{ui:More}} › {{ui:Intersect with model}}, seejärel kustuta seest. Vt [Lõika tahud](topic:intersect) |

Need on hoiatused: mudel prinditakse, aga vaata enne üle.

- **Eraldi osad kattuvad** või **puutuvad kokku tahk tahu vastu**: viilutajad ühendavad need tavaliselt üheks. Puhtama faili jaoks ühenda need {{ui:Tahkised}} › {{ui:Ühenda}} abil. Vt [Tahkise tööriistad](topic:solids).
- **Põhjas pole midagi tasasel**: pööra mudelit nii, et tahk toetub platvormile, muidu lisab viilutaja toed või aluse.
- **Kaldub üle 45° vertikaalist**: need tahud vajavad tuge. Dialoog ütleb, kui suur osa pinnast seda vajab.
- **Alla 1 mm laiune**: tõenäoliselt modelleeritud valesti ühikus. Kontrolli ühikut olekuribal.

Kuna hoiatused on ainult soovitused, pole valmis printimiseks mudeli kontrollimine vaja, kui need ei ole olulised.

Hoolimata hoiatustest prinditud osa (suletud kest teise sees) on korras: selle tahud osutavad õõnsusse ja selle maht võetakse ära.

## Probleemide parandamine

Jaotise **Kus probleemid asuvad** all nimetab dialoog iga grupi või komponendi, kus on midagi valesti, koos sellega, mis selles valesti on (grupeerimata lahtised tahud on loetletud kui „Tahud pole grupis“). Komponent, mis on paigutatud mitu korda, on loetletud üks kord: selle parandamine parandab kõik koopiad.

- {{ui:Show}} avab selle grupi ja valib servad ning tahud, mis on valesti, nii et need on esile tõstetud.
- {{ui:Fix what can be fixed}} parandab need kõik korraga: sulgeb augud, mille servad on tasased, eemaldab kujust sees olevad tahud ja juhuslikud servad ning pöörab tahud õigesse suunda väljapoole. See on üks samm: {{key:Mod+Z}} võtab selle tagasi. Kontroll käivitub siis uuesti ja näitab, mis on alles.

Mida see ei suuda parandada (auk, mille servad pole tasased, osa, mis läbib iseennast), jääb loendisse koos sellega, mida teha käsitsi. {{ui:Repair}} jaotises **Printimise tööriistad** läheb kaugemale: see sulgeb augud, mis pole tasased, eemaldab juhuslikud tükid ja topeltud tahud ning loetleb iga parandust. Vt [Toed, seina paksus, õõnestamine ja parandus](topic:print-tools#repair). Samuti saab parandada ühe grupi korraga: vali see ja kasuta {{ui:Entity info}} all {{ui:Show problems}} ja {{ui:Fix}}. Vt [Tahkise tööriistad](topic:solids).

## Õõnes osa

{{ui:Hollow}} jaotises **Printimise tööriistad** õõnestab osa antud seina paksusega, kus klõpsad, drenaažiavadega. Vt [Hollow](topic:print-tools#hollow).

Võid õõne ka ise joonistada: suletud grupp osa sees, mis ei puuduta seda, kõigi tahkudega ümber pööratud, et need osutaksid õõnsusse. Kontroll loeb selle õõnsuseks ja võtab selle mahu ära; seda ei loetleta parandatavana.

## Sinu printeri platvorm

Vali oma printeri platvormi suurus {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:3D printer bed}} all. Kontroll hoiatab siis, kui mudel on suurem kui platvorm, pööratuna kumbagi pidi. Vt [Sätted](topic:settings#3d-printer-bed).

## Printimise tööriistad

Dialoogi tulemuste all avab **Printimise tööriistad** {{ui:Supports preview}} (kuhu toed lähevad ja umbes kui palju), {{ui:Wall thickness}} (liiga õhukesed seinad printimiseks), {{ui:Hollow}} ja {{ui:Repair}}. Vt [Toed, seina paksus, õõnestamine ja parandus](topic:print-tools). {{ui:Split for printing}} lõikab platvormile liiga suure mudeli tükkideks ühenduste ja nummerdatud liidetega: vt [Jaga suur mudel printimiseks](topic:print-split).

## Kontrollimata

Kontroll ei viiluta: pisikesi detaile, mida düüs ei suuda joonistada, ja tegelikke toed on sinu viilutaja asi. Vt [Veel pole valmis](topic:not-built-yet#3d-printing).
