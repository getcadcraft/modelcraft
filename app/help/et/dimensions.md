---
title: Mõõda ja muuda suurust joonistatu järgi
summary: Aseta mõõtmed nurkade vahele, kaarte ja ringide peale või kahe serva vahele; sisesta uus pikkus, et mudelit suurust muuta. Muuda serva pikkust või grupi laiust, sügavust ja kõrgust jaotises Objekti teave.
keywords: mõõt, mõõdud, suuruse muutmine, muuda suurust, pikkus, laius, sügavus, kõrgus, venitus, juhtiv mõõt, märgistamine, mõõtmine, hiljem, raadius, läbimõõt, nurk, nurga all, kaar, ring, R, Ø
from: a1f815ec
---

Suurused ModelCraftis ei ole pärast joonistamist lukus. Mõõt näitab mudelil pikkust ja selle sisestamine uue pikkusena muudab mudeli selle järgi. Samuti võid sisestada uuesti serva pikkuse või grupi laiuse, sügavuse ja kõrguse jaotises {{ui:Objekti teave}}.

## Aseta mõõt

1. Vajuta {{key:D}} või klõpsa tööriistaribal {{ui:Mõõt}}.
2. Klõpsa nurgal, millest mõõta. See haakub nurkade, keskpunktide ja servadega, nagu joonistamine.
3. Klõpsa teisel nurgal.

   Või klõpsa üks kord **servale** (vihje ütleb „Serv“), et mõõta kogu serv ühe klõpsuga.
4. Liiguta kursor sinna, kuhu mõõdujoon peaks minema, ja klõpsa. Võid sisestada ka nihke, näiteks `0.5m`, ja vajutada {{key:Enter}}.

   Mõõdujoon jääb tasaseks tasasele servale, kui just ei vaata seda küljelt. Püstise serva puhul jääb see püstisele tasandile, mis on sinu poole kõige paremini suunatud.

Olekuriba ütleb „Mõõt 4 m.“ Mõõdud näitavad oma pikkust mudeli ühikutes ja uuenevad, kui muudad ühikut valijas.

## Raadius, läbimõõt ja nurk

Sama tööriist {{ui:Mõõt}} mõõdab ka ümaraid asju ja nurki:

- **Kaar:** klõpsa kaarel. Vihje ütleb {{ui:Raadius}}. Liiguta kursor sinna, kuhu tekst peaks minema, ja klõpsa: mõõt loeb **R 1.5 m**.
- **Ring:** klõpsa ringil. Saad **läbimõõdu** (**Ø 3 m**) koos joonega ringi keskpunkti kaudu. Hulknurkadega on sama lugu, nende nurgad on ringil.
- **Nurk kahe serva vahel:** klõpsa ühel servale, siis klõpsa teisel servale, mis kohtub sellega nurgas (kui oled selle kohal, ütleb vihje {{ui:Servade vaheline nurk}}). Siis liigu soovitud nurka ja klõpsa. Nurga sees saad servade vahelise nurga; liigu ühele poole ja saad kõrvuti oleva nurga (näiteks 150° asemel 30°). Kui kaugel nurgast klõpsad, seab see, kuhu kaar läheb; või sisesta see kaugus.

Raadiuse muutmiseks läbimõõduks või tagasi vali mõõt ja vali {{ui:Kuva kujul}} jaotises {{ui:Objekti teave}}.

**Suuruse muutmine nendega:** sisesta uus raadius või läbimõõt kohe pärast mõõdu paigutamist või vali see hiljem ja sisesta. Kaar või ring säilitab oma keskpunkti ja muudab suurust; tahk, mida see piirab (ketas, soone ots), muutub koos sellega. Kaks asja ainult mõõdavad:

- **Nurga mõõt** ei muuda mudelit kunagi. Nurga muutmiseks pööra servi käsuga {{ui:Pööra}}.
- **Silindri otsas olev ring** (ring, mille tõmbasid {{ui:Lükka/tõmba}} abil) ei saa mõõdust suurust muuta, sest selle küljed peaksid samuti muutuma. Selle asemel mõõtkavanda silindrit selle telje ümber.

## Muuda mudeli suurust mõõdu abil

Kohe pärast mõõdu paigutamist sisesta uus pikkus ja vajuta {{key:Enter}}: `6m`, `12'`, `3500` millimeetrites mudelis. Mudel muutub selle suuruseks.

Hiljem, igal ajal:

1. Valikuga {{ui:Vali}} klõpsa mõõdu tekstil või joonel. {{ui:Objekti teave}} ütleb **Mõõt** ja näitab selle {{ui:Pikkus}}.
2. Sisesta uus pikkus ja vajuta {{key:Enter}}. Võid kirjutada otse väärtuse kasti või kasti {{ui:Pikkus}} jaotises {{ui:Objekti teave}}.

### Mis liigub

Teine nurk, millele klõpsasid, liigub, ja liigub kõik, mis on selle taga:

- **Mõlemad nurgad ühel tükil** (kasti laius, seina kõrgus): liikuva nurga pool libiseb välja või sisse ning sellega ühendatud tahud venivad. Kast jääb suletud tahkuks ning kõik, mis asub täielikult sellel poolel, näiteks akna komponent, liigub kaasa.
- **Nurgad kahel eraldi tükil** (vahe kahe kasti vahel): liikuva nurga tükk liigub tervena ning vahe muutub.
- **Liikuv nurk grupi või komponendi sees**, mida teine nurk ei ole: liigub kogu grupp.
- **Mõlemad nurgad sama grupi või komponendi sees**: see venib seestpoolt. Komponent muutub kõikjal, kus see on paigutatud, nagu komponendi muutmisel alati.

Liikuva otsa muutmiseks vali mõõt ja vali {{ui:Liigub}} jaotises {{ui:Objekti teave}}:

| Valik | Mis juhtub |
|---|---|
| {{ui:Teine ots}} (vaikimisi) | Teine ots, millele klõpsasid, liigub |
| {{ui:Esimene ots}} | Esimene ots, millele klõpsasid, liigub |
| {{ui:Mõlemad otsad (keskel)}} | Iga ots liigub poole muutusest, nii et keskpunkt jääb paigale |

### Millal suuruse muutmine keeldutakse

ModelCraft ei muuda midagi ja ütleb olekuribal, miks:

- „tahk läheks oma tasandist välja“: mõõt kulgeb kujundi suhtes kaldu. Mõõda mööda serva või mööda punast, rohelist või sinist.
- „tahk kahaneks olematuks või pöörduks sissepoole“: uus pikkus on kuju jaoks liiga lühike.
- „liikuv ots ei ole mudeli nurgal“: see ots paigutati tühjale alale või serva keskele. Vali {{ui:Liigub}} jaotises teine ots või aseta mõõt kahele nurgale.
- „pikkus peab olema suurem kui null“.

Iga suuruse muutmine on üks samm: {{key:Mod+Z}} võtab selle tagasi.

## Muuda suurust objekti teabes

Mõõtu ei pea alati kasutama:

- **Serv:** vali see. Selle {{ui:Pikkus}} jaotises {{ui:Objekti teave}} on kast, kuhu saab kirjutada. Pikkuse sisestamine väärtuse kasti töötab samuti. Liigub ots, mis on punase, siis rohelise, siis sinise suunas kaugemal, ja sellega ühendatud osa venib. Näiteks kui muudad uuesti kasti esiserva all, muutub kast paremale poole laiemaks.
- **Grupp või komponent:** vali see. {{ui:Laius (punane)}}, {{ui:Sügavus (roheline)}} ja {{ui:Kõrgus (sinine)}} on kastid. Selle kaugem külg (parem, tagumine, ülemine) liigub. Need on grupi enda teljed, enne mis tahes pööret, mille talle andsid.

Rakendamiseks vajuta {{key:Enter}}, vanale väärtusele tagasi minemiseks {{key:Esc}}.

## Mõõdud järgivad mudelit

Mõõt on seotud kahe nurgaga, millele see paigutati (nurk: oma nurga ja kahe serva kaugemate otstega; raadius või läbimõõt: oma kaare või ringiga). Liiguta, lükka/tõmba või muuda geomeetriat ja mõõt järgib seda ning näitab uut pikkust. See jääb seotuks, kui teed geomeetriast grupi või komponendi.

Kui otsa paigutati kohta, mis ei ole nurk (tahkule või tühjale alale), või selle nurk kustutati, jääb see ots sinna, kus see oli. Mõõt mõõdab ikka, aga saab suurust muuta ainult oma teise otsa poolt.

## Eemalda mõõdud

- Üks mõõt: vali see ja vajuta {{key:Delete}}, või klõpsa sellel {{ui:Kustutaja}}ga.
- Kõik mõõdud: kui midagi pole valitud, klõpsa {{ui:Kustuta kõik mõõdud}} jaotises {{ui:Objekti teave}}.

Mõõdud salvestatakse faili `.modelcraft`. Neid ei eksportita teistesse vormingutesse, mis kannavad ainult 3D-mudelit. Mõõtudega fail avaneb ka vanemas ModelCraftis, ilma mõõtudeta.
