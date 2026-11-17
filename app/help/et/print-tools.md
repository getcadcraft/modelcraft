---
title: Toed, seina paksus, õõnestamine ja parandus
summary: Vaata, kus printimine vajab toed ja umbes kui palju, leia liiga õhukesed seinad, õõnesta osa kindla seinapaksusega äravooluaukudega ning paranda võrk, nähes kõiki parandusi loetletuna.
keywords: 3D-printimine, toed, toetuste eelvaade, üleulatus, puutoed, sambatoed, seina paksus, õhukesed seinad, liiga õhuke, otsik, õõnestamine, kest, äravooluauk, vaik, parandamine, võrgu parandamine, mitte-manifold, ümberpööratud tahud, augud, väikesed kestad, enesega ristumine, kattumine, ühendamine
from: 286bde26
---

Neli tööriista, millega valmistada mudel 3D-printeri jaoks ette. Ava {{ui:Ekspordi}} › {{ui:Kontrolli 3D-printimist (STL või 3MF)…}}; dialoogi rea **Printimise tööriistad** juures on {{ui:Toetuste eelvaade}}, {{ui:Seina paksus}}, {{ui:Õõnestamine}} ja {{ui:Paranda}}. Igaüks avaneb vaate kohal kaardina; {{ui:Sulge}} (rist) sulgeb selle ja selle märgid. Korraga on näha üks kaart.

Iga tööriist töötab sellel, mida prinditakse: valiku või kõigel nähtaval, kui midagi pole valitud. {{ui:Õõnestamine}} ja {{ui:Paranda}} vajavad ühte valitud rühma, komponenti või võrku, sest nad muudavad seda.

## Toetuste eelvaade

Tahud, mis kalduvad püstisuunast rohkem kui **üleulatuse nurk**, värvitakse punaseks ning lihtsad toed joonistatakse neist (oranžilt) alla lauani või mudeli allpool asuva osani.

- **Üleulatuse nurk**: 45° on see, mida enamik printereid teeb ilma toeta. Tõsta seda printeri puhul, mis sildu hästi teeb.
- **Sambad**: sirge sammas iga 3 mm järel iga üleulatuse all. Hinnang loeb need 15% toemustriks.
- **Puu**: lähedased punktid ühinevad ühe tüve otsa nende keskel; ükski oks ei kalle rohkem kui 45°. Puud võtavad tavaliselt vähem materjali ja puudutavad lauda vähemates kohtades.

Kaart ütleb, kui palju pinda vajab tuge, mitu toepunkti on ja umbes kui palju materjali need võtavad. Toed, mis seisavad mudelil (mitte laual), loetakse: need jätavad sinna jäljed. Kui printeri laud on valitud jaotises {{ui:Sätted}}, joonistatakse laud mudeli alla.

:::note
See on eelvaade, mitte viilutaja: päris toed otsustab sinu viilutaja. Väga suure üleulatuse korral laotatakse toepunktid laiemalt, et eelvaade jääks kiireks; kaart ütleb seda.
:::

## Seina paksus

Iga tahk mõõdetakse läbi tahke otse teisele poolele. Seinad, mis on alla **lubatud väikseima seina**, on punased, ja seinad, mis on alla poolteist korda seda, on oranžid: need prinditakse, kuid võivad jääda nõrgaks.

Õhukesed alad on loetletud, kõige õhemad enne, ning näidatud, kui õhukesed ja kui suured nad on. {{ui:Näita}} pöörab kaamera sinna.

Printer ei suuda teha seina õhemat kui umbes kaks otsiku laiust: tavalise 0,4 mm otsiku puhul 0,8 mm (alguseks). Vaigprinterid suudavad vähem; vaata oma printeri juhendit.

Väga suure mudeli puhul mõõdetakse kiirt ainult mõnest tahust ning teised võtavad naabrite paksuse; kaart ütleb, mitu mõõdeti.

## Õõnestamine

Õõnestamine jätab välispinna alles ja eemaldab sisemuse, jättes seinad nii paksuks, kui sa küsid. Vaigprintidel kulub vähem vaiku ja nad tõmbavad printimislaual vähem; filamentprintidel kulub vähem plastikut, kui täitus kulutaks.

1. Vali rühm, komponent või võrk, seejärel ava {{ui:Õõnestamine}}.
2. Sea **sein** (alguseks 2 mm) ja kui laiad on **äravooluaugud**.
3. Vaigprintimise puhul klõpsa {{ui:Lisa äravooluauk}}, seejärel klõpsa mudeli välispinnal kohta, kuhu see läheb: madalale, printimislaua lähedale, et vedel vaik välja voolaks. Lisa nii palju, kui vaja; igaüks kuvatakse sinise ringina ja on loetletud nupuga {{ui:Eemalda}}.
4. {{ui:Eelvaade}} ütleb, kui palju õõnestamine eemaldab.
5. {{ui:Õõnesta see}} teeb muudatuse: ühe sammuga, mille võib tühistada {{key:Mod+Z}}.

Tulemus on üks suletud tahkis, mida 3D-printimise kontroll aktsepteerib: ModelCraft kontrollib seda kõigepealt ega muuda midagi, kui see ei läbiks. Kui mudel on õhem kui kaks seina, jääb see tahkeks. Tulemus on rühm, mille lamedad küljed on üksikud tahud, nii et saad seda edasi modelleerida {{ui:Lükka/tõmba}}-ga; peen võrgus õõnestatud kõver osa on tavaliselt selleks liiga palju tahke ja muutub selle asemel võrguks; olekuriba ütleb, millisega on tegu.

:::tip
Enamiku kujude puhul on sisemus välispind, mis on nihutatud sisse täpselt seina paksuse võrra. Kus nurgad või õhukesed osad seda võimatuks teevad, järgib ModelCraft välispinda selle asemel seina kauguse võrra peenel võrgul; kaart ütleb siis, kui lähedal see on (millimeetri murdosa piires).
:::

## Paranda

{{ui:Paranda}} vaatab valitud osa nii, nagu seda vaataks printeri viilutaja, parandab ohutult, mida saab, ning loetleb iga parandust:

| Parandab | Mida see tähendab |
|---|---|
| Pindalata kolmnurgad | jäetakse välja |
| Kaks korda joonistatud kolmnurk | alles jääb üks koopia; tahk, mis on iseendaga selg selga joonistatud (paksuseta), eemaldatakse |
| Alla 0,5 mm lahtised tükid | eemaldatakse |
| Valesti suunatud kolmnurgad | pööratakse vastavalt naabritele |
| Augud, lamedad või mitte | suletakse uute kolmnurkade viiguga iga augu keskelt |
| Pahupidi olev tükk | pööratakse väljapoole (teise tüki sees olev õõnsus jäetakse nii, nagu on: see peab olema sissepoole) |

{{ui:Paranda ohutud}} teeb kõik need ühe sammuga, mille võib tühistada {{key:Mod+Z}}, ning olekuriba loetleb iga parandust. Parandatud osast saab rühm, mille lamedad küljed on üksikud tahud. Kui see ikka ei sulgu (miski jaotisest **Jäetud sulle** jääb alles) või oleks sel liiga palju tahke rühmaks, muutub see hoopis võrguks: selle tahud jäävad kolmnurkadeks ja lamedad küljed tunduvad ikka lamedad. Olekuriba ütleb, millisega on tegu. {{ui:Ühenda kattuvad osad}} töötab samamoodi.

Seda, mida ohutult ei saa parandada, loetakse jaotises **Jäetud sulle** ning märgitakse vaates lillalt; selle näitamiseks kasuta {{ui:Näita}}:

- **Servad, kus kohtub kolm või enam tahku**: otsusta, milline tahk kuulub sinna, ja kustuta ülejäänud.
- **Tükk läbib iseennast**: teisalda või joonista see osa uuesti. Vaata [Lõikuvad tahud](topic:intersect).
- **Augud on liiga suured või liiga sassis, et sulgeda**: joonista nende üle tahud.
- **Eraldi tükid, mis kattuvad**: viilutajad ühendavad need niikuinii. {{ui:Ühenda kattuvad osad}} teeb neist ühe suletud keha (see ehitab uuesti tahud seal, kus nad kohtuvad, nii et see on eraldi nupp, mida ei tehta sinu eest kunagi).

Lükka/tõmba rühmade puhul saad parandada ka ühe korraga jaotises {{ui:Objekti teave}} › {{ui:Näita probleeme}} / {{ui:Paranda}}, mis säilitab tahud, mille joonistasid. Vaata [Tahkise tööriistad](topic:solids).

Seotud: [Mudeli ettevalmistamine 3D-printimiseks](topic:print-3d) · [Algaja stiil](topic:beginner) · [Veel valmis pole](topic:not-built-yet#3d-printing)
