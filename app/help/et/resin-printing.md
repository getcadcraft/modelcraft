---
title: Viilutamine vaikprinteri jaoks
summary: Viiluta printimisetapi alus vaikprinteri jaoks, õõnestage ja toetage detaili, vaadake kihte läbi, salvestage printeri fail ning leidke oma valotus valotuskatsega.
keywords: vaik, kalde soovitus, vaakumkapsel, koorumisjõud, tugevdamine, vaikprintimine, sla, msla, dlp, viilutaja, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, õõnestamine, ventilatsiooniava, alusplaat, toed, valotuskatse, valotusredel, kalibreerimine, kihid, lisandmoodul
from: 8cc12858
---

Vaikprinteri lisandmoodulid viilutavad printimisalusel oleva sisu kihtideks pildiks printeri ekraani jaoks ning salvestavad faili, mida printer loeb. Need on tasuta, ilma lukustatud funktsioonideta, ja on välja lülitatud, kuni te need sisse lülitate.

:::note
Päris printeriga pole veel ühtegi faili laaditud. Failid loeti tagasi ainult CadCraft'i enda lugejatega ning toed on uued. Kontrollige kihte ja tehke esimene printimine käsitsi.
:::

## Mida teete

Viilutate detaili vaikprintimiseks, kontrollite kihte, salvestate faili ja kopeerite selle printerisse.

## Sammud

1. Avage {{ui:Sätted}} › {{ui:Lisandmoodulid}} ja lülitage sisse vaikviilutaja lisandmoodul ning lisandmoodul oma printeri failivormingu jaoks (Elegoo GOO, SL1, Chitubox või Anycubic). Võite vajutada ka nuppu {{ui:Lisa vaikprintimine}} printimisetapi kaardil.
2. Asetage detail alusele, nagu juhendis [Aseta asjad printimisalusele](topic:print-stage), ning valige **Printimise viis** kõrval {{ui:Vaik}}.
3. Jaotises **Vaikprintimise sätted** valige oma **Printer** ja **Vaik**. Kaart näitab ekraani suurust pikslites. Need on tootjate avaldatud suurused, seega kontrollige oma printerit; saate neid muuta jaotises Kohandatud.
4. Määrake **Kihi kõrgus (mm)**, **Valotus (s)** ja **Põhja valotus (s)**. Iga vaigu arvud on ainult lähtepunkt.
5. Märgistage **Õõnesta, ventilatsiooniavaga**, kui soovite õõnset detaili, ning määrake **Sein (mm)** ja **Ava laius (mm)**.
6. Märgistage **Toed ja alusplaat** ning valige **Toete tihedus**: Kerge, Keskmine või Raske.
7. Valige **Faili vorming**. Kui kaart ütleb, et ühtegi pole veel lisatud, vajutage nuppu, millel on sõna Lisa ja vormingu nimi.
8. Vajutage {{ui:Kihtide eelvaade}} ja liigutage liugurit **Kiht**. Ujuvad tükid on ümbritsetud rõngaga. Selle all olev rida näitab kihtide arvu, aega ning vaigu kogust milliliitrites ja grammides ning maksumust.
9. Vajutage {{ui:Salvesta printimisfail}}, kontrollige kokkuvõtet ja vajutage {{ui:Salvesta}}. Kopeerige fail printerisse.

## Kalle, vaakumkapslid, tugevdused ja koorumisnäitaja

Need neli on hinnangud detaili kuju järgi. Ühtegi neist pole päris printeril proovitud, seega käsitlege iga ühte vihjena ja vaadake kihte.

1. Vajutage jaotises **Kalle (kraadides)** nuppu {{ui:Paku kallet}}. CadCraft proovib kaldeid 0 kuni 60 kraadi ja valib selle, millel on väikseim suurim kiht, kõige vähem üle ulatuv pind ja ilma vaakumkapslita. See määrab **Kalle (kraadides)** ja ütleb, mida leidis. Hindamise kaalud on meie omad, mitte printeritootja omad.
2. Pärast {{ui:Kihtide eelvaade}} nimetab hoiatus õõnsused, mis avanevad ainult kile suunas. Selline õõnsus võib kihi koorumisel hoida vaakumit. Kallutage detaili või lisage ava. Hoiatuses nimetatud lahtrisuurusest kitsamaid taskuid ei nähta.
3. Kui **Toed ja alusplaat** on sisse lülitatud, märgistage **Ühenda kõrged toed**, et lisada kõrgete õhukeste sammaste vahele ristsidemed.
4. Eelvaate all olev rida näitab suurimat kihti cm2-des. See näitab jõudu ainult siis, kui sisestate jaotises **Põhjakihid, tõste ja kiirused** **Mõõdetud koorumispinge**. Ilma oma mõõdetud arvuta näitab see ainult pindala.

## Leidke oma valotus

1. Lülitage {{ui:Sätted}} › {{ui:Lisandmoodulid}} all sisse valotuskatse lisandmoodul.
2. Vajutage {{ui:Aseta katseosa alusele}}.
3. Vajutage {{ui:Salvesta valotusredel}}. Saate ZIP-failis ühe faili iga valotuse kohta.
4. Printige iga fail sama vaiguga ja jätke alles valotus, mille õhukesed sambad ja avatud augud on kõige teravamad.

## Märkused

- Viilutamine toimub taustal, nii et leht jääb suure plaadi puhul kasutatavaks.
- Tükid, mis pole suletud tahkised, jäetakse välja ja kaart ütleb seda.
- Kui printer faili ei võta, on vormingukaardil valikud selle kohta, mida vorming jätab lahtiseks. Muutke ühte, salvestage uuesti ja andke meile teada, mis töötas.
- Anycubicu versioone 517 ja 518 ei kirjutata.
