---
title: Tee materjalid sõlmedega
summary: Koosta materjal tekstuuridest, piltidest ja arvutustest tööruumis „Varjutus“, vaata seda vaates muudatuste ajal ja värvi sellega tahke.
keywords: varjutus, küpsetamine, tekstuuri küpsetamine, ümbritsev varjutus, ao, kõverus, normaalide küpsetamine, kõrge poly, madal poly, valguskaart, kleebis, kleebised, kleepsud, logo, silt, tekstuuri värvimine, värvi tekstuur, pintsel, materjal, materjalid, materialx, mtlx, openpbr, standardpind, materjaliteek, librarycraft, tekstuurikomplekt, pbr, tekstuuride import, zip, cc0, lohista, sõlm, sõlmed, sõlmeredaktor, varjur, tekstuur, protseduuriline, müra, ruutmuster, voronoi, rakud, lained, tellised, plaadid, puit, marmor, gradient, mustus, servakulumine, värviramp, segu, reljeef, normaalkaart, karedus, metalsus, läbipaistmatus, väljalõige, kiirgus, hõõgumine, nihe, kasti paigutus, kolmetasandiline, uv, pilt, pildi tekstuur
from: d7368b21
---

Materjal, mis on tehtud tööruumis „Varjutus“, kuulub failile. See on väike graaf: **sõlmed**, mis teevad tekstuure, pilte ja arve, ühendatud **materjali väljundisse**, mille sisendid on pinna välimus: põhivärv, karedus, metalsus, normaal, läbipaistmatus, kiirgus ja ülejäänud OpenPBR-mudel. Tahke värvid selle abil nagu iga teegi materjaliga, ja iga muudatus ilmub vaatesse kohe.

## Ava see

Vali tööruumide loendist {{ui:Varjutus}}. 3D-vaade jääb ekraani ülaossa ja **sõlmeredaktor** võtab alumise osa. Paremal olev paneel loetleb faili enda materjalid.

- {{ui:Uus materjal}} teeb hallid materjali, millel on ainult materjali väljund.
- **Tee teegi materjalist muudetav koopia** muudab tellised, puidu, plaadid ja ülejäänud graafiks, mida saad muuta: selle tekstuur tuleb teegi tekstuuri sõlme kaudu, reljeef reljeefi sõlme kaudu.
- {{ui:Värvi sellega}} värvib valitud tahud või grupid või valib materjali pintsli tööriistale. Pintsli materjalide hulgas on faili enda materjalid jaotises **Selles failis**.
- {{ui:Dubleeri}} ja {{ui:Kustuta}} töötavad materjali kohta, mida muudad. Kustutamist ei saa tagasi võtta: sellega värvitud tahud näitavad vaikevärvi, kuni need uuesti värvid.

## Teegi materjalid

Paneeli **Materjaliteek (Library)** loetleb teegi materjalid, igaühel eelvaade, mille renderdas CadCrafti teekiirtega renderdaja. Need on CC0 all avaldatud tekstuurikomplektid, autorid on märgitud.

- Klõpsa ühel, et see failiga kaasa tuua (koos selle piltidega) ja, kui tahud või grupid on valitud, neid värvida.
- Lohista üks vaates tahule või grupile, et värvida ainult see.
- Sellest saab faili üks materjal: muuda selle sõlmi nagu iga teist. Selle autorimärge kuvatakse paneelis ja jääb faili.

## Impordi tekstuurikomplekt

{{ui:Pildid või zip…}} või {{ui:Kaust…}} jaotises **Impordi tekstuurikomplekt** teeb materjali kaartide komplektist. Kaardid leitakse failinimede sõnade järgi: color, albedo, diffuse või basecolor; roughness (või gloss, muudetud karedaks); metalness või metallic; normal (OpenGL või DirectX, nime järgi `gl` / `dx`); height või displacement; ambient occlusion; opacity; emission. Pakitud kaarte (ARM, ORM) ei kasutata. Plaat algab mõõtmetega 1 × 1 m: määra tegelik suurus materjali väljundis. Kõrgus läheb nihkesse, mille skaala on 0; tõsta skaalat, et seda võrkudel kasutada.

## MaterialX

MaterialX on avatud formaat, mida teised 3D- ja renderdusprogrammid kasutavad materjalide edastamiseks.

- {{ui:Ekspordi MaterialX-ina…}} salvestab materjali, mida muudad: selle väärtused ja iga tekstuuri PNG-pildina `.mtlx`-faili kõrval (zip-failis). Vali varjur, millena see kirjutatakse: **OpenPBR Surface** (MaterialX 1.39, sama mudel, mida ModelCraft kasutab) või **Standard Surface** (MaterialX 1.38, mida praegu loeb rohkem programme). Tekstuurid paigutatakse UV-koordinaatidega meetrites; kasti ja kolmetasandiline paigutus kirjutatakse UV-na.
- {{ui:Impordi MaterialX…}} (või {{ui:Kaustast…}}) loeb `.mtlx`-faile OpenPBR, Standard Surface, UsdPreviewSurface või glTF PBR varjuritega. Anna ka pildid või kõik kaasa zip-failina: pilt leitakse tee, nime või selle nime järgi teise pildi tüübiga (fail `.exr` võib olla nimetatud kui `.jpg`, mis asub selle kõrval). Tekstuurid, normaalkaardid, aritmeetika, segud ja nihe tulevad sisse sõlmedena; kõik muu säilitab oma väärtuse ning olekurida ütleb, mis jäeti välja.

## Kleebised

Kleebis on pildi paigutus pinnale, nagu logo, silt, etikett või plekk, millel on oma materjal.

- Määra **Uue kleepise laius**, siis {{ui:Aseta kleebis…}} (või tööriistariba {{ui:Kleebis}}), vali PNG, JPEG või WebP pilt ja klõpsa tahku. Pilt projitseeritakse sinna jäävatele pindadele, säilitades proportsioonid; PNG läbipaistvad osad jäävad läbipaistvaks.
- See kuulub grupile või komponendile, millele klõpsasid, ja liigub selle kaasas. See katab kasti sees olevad tahud, mis on suunatud samamoodi, ja peatub selle pinna servades, millele see asetub.
- Igal kleebisel on oma materjal nimega **Kleebis: <pilt>**, faili loendis: muuda seda nagu iga teist (karedus, reljeef, hõõgumine). Kleebise kõrval olev {{ui:Materjal}} avab selle.
- Iga kleepise kõrval on selle laius (kõrgus järgib pilti), {{ui:Pööra}} (veerand pööret) ja {{ui:Kustuta}}. Kleebised hoitakse koos faili materjalidega, väljaspool tagasivõtmist.
- Need on näha varjutatud vaates, kiirrenderdustes ja kõrgekvaliteedilistes piltides.

## Maali tekstuuril

{{ui:Värvi tekstuur}} (või {{ui:Värvi}} jaotises **Maali tekstuuril**) muudab kursori ümmargusks pintsliks. Lohista tahul, millel on üks selle faili materjalidest: pintsel värvib pildi, mis asub põhivärvi taga.

- Võrgul värvib ta mööda võrgu UV-d (keeruta see esmalt UV-tööruumis); muudel tahkudel värvib ta üle tahu, nii et värvimine kordub materjali plaadiga.
- Materjal, mille põhivärv on tavaline värv, saab esimesel värvimisel uue 512 × 512 pildi selle värviga. Materjal, mille põhivärv tuleb muudest sõlmedest, vajab pildi sõlme, mis on ühendatud põhivärvi sisendiga.
- Määra pintsli värv, suurus (pildipikslites), tugevus ja kõvadus paneelis. {{ui:Võta viimane joon tagasi}} või {{key:Ctrl+Z}} (värvimise ajal) võtab tõmbe tagasi, kuni viimase 20 tõmbeni.
- Värvitud pilt salvestatakse faili. Teegi materjale ei saa värvida: tee esmalt muudetav koopia.

## Küpseta tekstuure

**Küpseta tekstuure** kirjutab selle, mida kuju ja stseen annavad pinnale, pildideks mööda võrgu UV-sid.

- Vali võrk, millel on UV-d (keeruta see UV-tööruumis), märgi kaardid ja vajuta {{ui:Küpseta}}:
  - **Ümbritsev varjutus**: kui avatud on iga punkt: nurgad, voldid ja kohad teiste asjade all muutuvad tumedamaks. Kõik mudelis näidatu varjutab seda kuni seatud varjutuskauguseni.
  - **Kõverus**: heledad välisservade juures, tumedad sisenurkades, keskhall tasastel ja kergelt kõveratel osadel, seatud serva laiuse piires.
  - **Normaalid kõrgdetailse objekti järgi**: vali ka detailne koopia: selle pinnadetail kirjutatakse lihtsama objekti normaalkaardiks (objekt, millel on vähem kolmnurki, küpsetatakse peale). Otsingukaugus on kaugus, mis võib kahe pinna vahel olla.
  - **Valgustus**: asukoha ja kuupäeva päike mudelis (Stiil) koos oma varjudega, plus taevas, valguskaardina.
- Pildid liituvad failiga ja ilmuvad pildi sõlmedes. Kui materjalil, mida muudad, on **Mustuse ja servakulumise** sõlm, loeb see kohe uue varjutuse ja kõveruse.
- Tekseli kohta rohkem kiiri teeb varjutuse ja valgustuse siledamaks, kuid kestab kauem. Küpsetamine toimub arvuti protsessorituumades taustal; {{ui:Peata küpsetamine}} peatab selle.

## Koosta graaf

1. {{ui:Lisa sõlm…}} (või {{key:Shift+A}} sõlmeredaktoris) lisab sõlme redaktori keskele.
2. Lohista väljundipunktist (sõlme paremal) sisendipunkti (sõlme vasakul), et need ühendada. Teine ühendus sisendisse asendab esimese; lohista ühendatud sisend eemale, et see lahti ühendada.
3. Ühendamata sisendid näitavad oma väärtust: sisesta number või vali värv. Seaded asuvad iga sõlme allosas.

Sõlme lohistades selle pealkirjast liigutad seda, tühja ruumi lohistamine nihutab vaadet ja hiireratas suumib. {{key:Delete}} eemaldab valitud sõlmed või ühenduse, {{key:Mod+Z}} võtab tagasi, {{key:Mod+D}} dubleerib, {{key:F}} näitab kõiki sõlmi. Iga muudatus on sõlmeredaktori üks tagasivõtmise samm. Mudeli enda tagasivõtmine materjale ei muuda.

| Sõlmed | Mida nad teevad |
|---|---|
| Tekstuuri koordinaadid | Kus plaadil punkt asub: korda seda, nihuta seda, pööra veerand. |
| Väärtus, Värv | Number, värv. |
| Pilt | Faili pilt (see, mis tuli imporditud mudeliga, või see, mille lisasid {{ui:Lisa pilt…}}). Vali **Värvid** fotode ja **Andmed** kareduse või normaalkaartide puhul. |
| Teegi tekstuur | Teegi materjali tekstuur, karedus ja kõrgus. |
| Ruutmuster, Müra | Ruudud; sile fraktaalne müra detaili, karedusega ja seemnega. |
| Voronoi rakud, Lained, Gradient | Rakud (kaugus lähimast punktist, piirid rakkude vahel, värv iga raku kohta); ribad risti, üles või diagonaalselt, sinus-, saag- või kolmnurkkujul, müra järgi painutatud; lineaarsed, ruut-, radiaal- ja sfäärilised gradiendid. |
| Tellised, Plaadid | Tellisereaid nihkega või plaadiruudustik: värvid, moorel või täidisvuug, vahe ja faas meetrites, kõrgus reljeefi jaoks, juhuslik arv iga tüki kohta. |
| Puit, Marmor | Rõngad mööda kiudu peente kiududega; sooned, mida keerdumine painutab. |
| Mustus ja servakulumine | Kulutab kumerad servad ja määrib õõnsused mõõdistuse kõveruse ning varjutuse piltide järgi ([Küpseta tekstuure](topic:shading#bake-textures) need teeb; või määra selle kaks pildiseadet võrgu UV-paigutuses: paiguta materjal UV-koordinaatidega). Ilma nendeta ei muuda see midagi. |
| Sega värvid, Värviramp, Toon/küllastus/väärtus, Heledus ja kontrast, Pööra, Gamma, RGB eraldamine ja ühendamine | Värvitöö. |
| Matemaatika, Vahemiku kaart | Aritmeetika numbritega (liitmine, korrutamine, aste, sujuv samm ja veel). |
| Reljeef, Normaalkaart | Normaal kõrgusest (Reljeef) või normaalkaardi pildist (Normaalkaart: vali rohelise kanali suund). |

## Materjali väljund

Selle seaded ütlevad, kuidas tekstuur pindadele asetub:

- **Plaadi laius** ja **Plaadi kõrgus**: mitu meetrit ühe tekstuuri plaat katab. Kõik, mida graaf teeb, kordub plaadi üle ilma õmbluseta.
- **Paigutatakse**: **UV-koordinaadid** järgivad tahke (lükka/tõmba tahud: mööda iga tahku; võrgud: nende UV-d, üks UV-ühik = üks plaat), **Kast** projitseerib lähima kolmest teljest, **Kolmetasandiline** segab kolm projektsiooni kaldus pindadel (**Segamise teravus**: kõrgem tähendab kõvemat segu).
- **Normaali tugevus** skaleerib normaali sisendit. **Nihke skaala** määrab, kui kaugele nihke sisend liigutab võrgu tippe.
- {{ui:Rohkem sisendeid}} näitab ülejäänud OpenPBR-sisendeid: kate, kohevus, allpind, õhuke kile, läbilaskvus ja nende värvid.

## Kõrgekvaliteedilistes piltides

Teekiirte renderdaja loeb graafist põhivärvi, kareduse, metalsuse, läbipaistmatuse, normaali ja kiirguse, kui need pinna üle muutuvad. Iga muu sisend, mille ühendad (näiteks kate, mis varieerub), kasutatakse keskmisena; paneel ütleb, milline. Läbipaistmatuse tekstuurist tehtud väljalõige näitab oma kuju ja selle vari on ühtlaselt läbipaistev. Hõõguv tekstuur valgustab pinda, millele see on suunatud, ilma et seda võetaks valgustina.

**Nihe** liigutab ainult võrkude tippe, nii et lisa detaili jaoks Subdivision-modifikaator ([Modifikaatorid](topic:modifiers)). Lükka/tõmba tahud säilitavad oma kuju ja saavad reljeefi normaalist.

:::tip
Arvutis WebGPU-ga arvutatakse graaf graafikakaardil; ilma selleta protsessoril. Tulemus on sama.
:::
