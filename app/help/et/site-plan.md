---
title: Modelleeri asendiplaanil DWG-st või DXF-ist
summary: Too CAD-asendiplaan või korrusplaan sisse joontena maapinnal, vasta ühikute küsimusele ning jälgi see tahkudeks ja massideks.
keywords: asendiplaan, dwg, dxf, cad, import, visand, visandi foto, käsitsi visand, salvrätikuvisand, foto, paber, pliiatsivärvid, dünaamilised plokid, nähtavuse olekud, tekst, viirutus, splain, ellips, 3D-tahk, jälgimine, korrusplaan, krunt, kinnistupiir, ühikud, alusjoon, kontekst
from: 3415dc96
---

ModelCraft saab tuua sisse 2D CAD-joonise, asendiplaani või korrusplaani read ja asetada need maapinnale, nii et saad nende peale modelleerida.

## Impordi joonis

1. Klõpsa grupis {{ui:Fail}} nuppu {{ui:Impordi}} (või lohista fail 3D-vaatele).
2. Vali `.dwg` või `.dxf` fail.

   Suur DWG võtab hetke: olekuriba ütleb „Loen plan.dwg…“, kuni see on sisse loetud.

3. Kui joonis ei ütle, mis ühikud tal on, küsib dialoog pealkirjaga „Joonise ühikud“: „Mis on üks joonise ühik?“ Vali {{ui:Tollid}}, {{ui:Jalad}}, {{ui:Millimeetrid}} või {{ui:Meetrid}}. Enamik USA asendiplaane on joonistatud jalgades, arhitektuuriplaanid tollides ja meetrilised plaanid millimeetrites.

   Joonis ilmub maapinnal serva grupina, valituna, ja vaade suumib sinna. Olekuriba ütleb, mitu serva sisse tuli, näiteks „Imporditud site.dwg: 1697 serva maapinnal, grupis. Joonistamiseks otse sellel lahuta see.“

## Mis sisse tuleb

- Jooned, polüjooned (koos nende kaartega), ringid ja kaared ning plokid koos kõigega, mis neis on, ainult **mudeliruumist**. Kõverad muutuvad lühikesteks sirgeteks lõikudeks.
- Jooned, polüjooned, kaared, ringid, ellipsid ja splainid asetuvad lamedalt maapinnale servadena.
- **Viirutused** muutuvad maapinnal tahkudeks, nende saared on aukudeks; nii saad viirutatud ala kohe lükata/tõmmata.
- **3D-tahud** ja tahked täited muutuvad tahkudeks; 3D-tahud säilitavad oma kõrgused.
- **Tekst** (üherealine tekst, mitmerealine tekst ja atribuutide väärtused) joonistatakse servadena lihtsa ühejoonelise kirjaga, teksti enda kõrguse, nurga ja joondusega. Selle font ei ole joonise oma, nii et sõnad võivad olla veidi pikemad või lühemad. Märgid, mille kirjal pole kuju, joonistatakse väikeste kastidena ja need loetakse.
- **Mõõtmed** joonistatakse nii, nagu joonis need näitab (nende jooned, noolepead ja tekst, servade ja tahkudena).
- **Dünaamilised plokid** tulevad sisse nii, nagu joonis neid näitab: iga paigutatud plokk selles nähtavuse olekus, milles see salvestati, ja ainult selle oleku jooned. Olekuriba loetleb need koos kuvatud olekuga ja teiste olekutega, mis neil on, näiteks „Pistikupesa kuvatud kui Duplex ×38, GFI ×7 (olekud: Duplex, GFI)“. ModelCraft ei vaheta olekuid.
- **3D-tahkised, piirkonnad ja kehad** (joonise ACIS-andmed) tulevad sisse oma gruppidena: suletud tahkis tahkisena, piirkond või avatud keha tahkudena. Tasased tahud tulevad terviklikult; kõverad tahud (silindrid, koonused, sfäärid, tooruskehad, lihtsad splainpinnad) tulevad väikeste kolmnurkadena pehmete servadega nende vahel, nii et näha on ainult tahkise enda servad. Tahk muud tüüpi pinnal jäetakse välja ja loetletakse: „Pole veel joonistatud (3D-tahkised): …“.
- Ei impordita: punktid, tabelid, mitmikjuhid, pildid ja muud objektitüübid. Olekuriba loetleb need tüübi järgi, näiteks „Ei imporditud: 12 POINT.“ Kõik layoutil (paberiruumis) jäetakse ka välja, loetlemata.
- Kihid ei säili: kõik jooned tulevad sisse ühtmoodi.

Kui joonis on kaugel oma nullpunktist (näiteks riigi tasandi koordinaadid), imporditakse see siiski, kuid võib maanduda kaugele ModelCraft'i nullpunktist. Joonised, mis ulatuvad oma nullpunktist üle 10,000 km, keeldutakse: liiguta joonist enne CAD-programmis lähemale punktile 0,0.

## Jälgi tahkudeks

Imporditud jooned ei moodusta harva ise puhtaid tahkusid. Kaks viisi töötada:

**Hoia plaan alusjoonena (soovitatav)**

1. Jäta plaan omaette grupiks.
2. Joonista oma hoone plaani peale {{ui:Ristkülik}} ja {{ui:Joon}}, haakudes plaani nurkadele („Lõpp-punkt“) ja servadele („Serval“).
3. Lükka/tõmba oma tahud üles. Plaan jääb all puutumata ja kogu grupi saad hiljem ühe klõpsuga kustutada.

Haakimine töötab gruppide vahel: saad haakuda plaani nurkadele ilma seda avamata.

**Joonista plaani enda joontele**

1. Vali plaani grupp ja klõpsa {{ui:Lahuta}}. Selle jooned muutuvad vabadeks servadeks.
2. Kus suletud kontuur peaks olema tahk, joonista {{ui:Joon}}-iga üks joon üle ükskõik millise tema serva, nurgast nurka. Kui kontuur on suletud ja tasane, täitub tahk tavaliselt. Kui ei, otsi kontuurist lünka või kattumist ja joonista sellest üle.
3. Lükka/tõmba see.

See töötab kõige paremini puhtal plaanil. Hõivatud mõõdistuse puhul on peale jälgimine kiirem.

## Probleemid

- „See on binaarne DXF. Salvesta see ASCII DXF-ina ja proovi uuesti.“ Salvesta DXF CAD-programmist uuesti ASCII-na (tekstina).
- „…mudeliruumis pole imporditavaid jooni, kaari ega ringe.“ Joonis on tõenäoliselt täielikult layoutidel või ainult tekst ja viirutused.
- „Seda joonist ei saanud lugeda (…). See võib olla vigane või salvestatud DWG-versioonis, mida lugeja ei toeta…“ Sulud ütlevad, miks, näiteks „DWG-versioon AC1009 ei ole toetatud“. Salvesta see CAD-programmist DXF-ina või DWG-na AutoCAD 2000 kuni 2018.
- Plaan on vale suurusega: valisid vale ühiku. Võta tagasi ({{key:Mod+Z}}) ja impordi uuesti või [muuda grupi mõõtkava](topic:rotate-scale) õige teguriga (12 jala ja tolli vahel, 25.4 tolli ja millimeetri vahel).

Kontuurjoonte muutmiseks maapinnaks, mida saad voolida, vt [Maapind](topic:terrain).

## Fotost käsitsi visandist

**Fail › Impordi visandi foto…** võtab foto paberil olevast visandist (JPEG, PNG või TIFF; otse telefonist on hea) ja teeb samasugused servad maapinnal. Ütle, milline paber see on (või lase tal leida leht, mida võetakse A4-na), ja visandi mõõtkava, näiteks 1 : 100. Paberi serv leitakse ja foto sirgendatakse, tint jälgitakse joonteks ja kaarteks ning iga pliiatsivärv (must, punane, sinine, roheline) muutub omaette grupiks sildiga (**Visand must**, **Visand punane**, …), kõik ühes grupis, mis on nimetatud foto järgi. See on üks tagasivõtmise samm ja kõik toimub selles arvutis: midagi ei saadeta kuhugi.

Kui paberi serva ei leita, võetakse kogu foto lehena ja olekurida ütleb seda: mõõda midagi, mida tead, ja muuda grupi mõõtkava, kui see on vale. Jälgi jooned tahkudeks nagu eespool.
