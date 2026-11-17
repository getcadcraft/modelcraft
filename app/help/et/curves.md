---
title: Kõveraobjektid
summary: Joonista Bézier-, NURBS- ja sirgete lõikudega kõveraid, anna neile paksus, laius või kitsenemine, täida lamedad, sea tekst kõverana ja muuda need võrkudeks.
keywords: kõver, kõverad, bezier, nurbs, spline, splinid, tee, toru, torust, kaabel, köis, faas, pressimine, kitsenemine, kallutus, raadius, täitmine, profiil, tekst, tähed, logo, kõver võrguks
from: 602bf077
---

**Kõveraobjekt** on kõver, mis teeb kuju: toru piki seda (faas), riba (pressimine), kitsenev sarv (kitsenemine) või — kui see on tasane ja suletud — täidetud plaat või tähed. Kuju järgib kõverat: liiguta punkti ja toru liigub kaasa. Kui kuju on õige, muuda see võrguks.

## Lisa kõver

Vali töötsoonide loendist {{ui:Kõver}} ja vajuta {{ui:Lisa}}:

| Liik | Mis see on |
| --- | --- |
| Bézier-kõver, Bézier-ring | Läbib oma punkte; igal punktil on kaks käepidet, mis seavad kõvera suuna |
| NURBS-kõver, NURBS-ring, Tee | Sile, joonistatakse punktide poole (algab ja lõpeb oma otspunktides); igal punktil on kaal |
| Tekst | Sinu tekst lamedate, täidetud tähekontuuridena |

Uus kõver saab õhukese toru, et seda näha ja valida; seadke selle faasi sügavuseks 0, et saada paljas kõver.

Võid alustada ka millestki joonistatud: vali Mudeli töötsoonis kaar, ring, hulknurk või joonistatud kõver ja vajuta objekti teabes {{ui:Tee kõveraobjekt}}. Joonistatud jooned jäävad alles.

## Muuda punkte

Topeltklõpsa kõveraobjektil (või vali see ja vali {{ui:Kõver}}), et seda muuta.

- Klõpsa punktil või käepidemel ({{key:Shift}} lisab või eemaldab); lohista seda, et liigutada. Lohista tühjal alal, et valida kastiga.
- {{ui:Pikenda}} ({{key:E}}, või {{key:Ctrl}}+klõps) lisab punkti valitud otsa järele, kursori juurde.
- {{ui:Jaga}} ({{key:W}}) paneb punkti iga valitud naabripaari vahele; Bézier säilitab oma kuju.
- {{ui:Teisalda}}, {{ui:Pööra}}, {{ui:Mõõtkava}} liigutavad valitud punkte kursoriga (modelleerija klahvid {{key:G}} {{key:R}} {{key:S}}, lükkamise/tõmbamise klahvid {{key:M}} {{key:Q}} {{key:S}}); klõpsa, et jätta, {{key:Esc}}, et tühistada.
- {{ui:Sulge}} ({{key:C}}) sulgeb avatud splaini või avab suletud; {{ui:Pööra ümber}} ({{key:Shift+R}}) käivitab selle vastupidi.
- Bézier'i käepidemed: {{ui:Sujuv}} ({{key:V}}) seab need sujuvaks kõveraks, {{ui:Nurk}} ({{key:Shift+V}}) suunab need naabrite poole, {{ui:Vaba}} ({{key:Alt+V}}) jätab need sinna, kuhu pani. Käepideme lohistamine teeb selle vabaks.
- {{ui:Bézier}}, {{ui:NURBS}} ja {{ui:Poly}} muudavad valitud splainide tüüpi, säilitades punktid.

Iga muudatus on üks tagasivõtmise samm.

## Kuju

Seaded on paneelis (ja Mudeli töötsoonis objekti teabes):

- **Kuju:** 3D-kõverad lähevad igale poole; tasane kõver jääb oma tasandisse ja seda saab täita.
- **Täida suletud splainid** (tasane): kontuurid muutuvad plaadiks; teise sees olev kontuur on auk, nii et tähtedel on augud alles.
- **Pressimine:** pool riba laiusest (avatud või 3D-kõverad) või pool plaadi paksusest (täidetud).
- **Faasi sügavus** ja **ümarus:** ümar toru piki kõverat (pressimisega: ümar riba); täidetud kujul ümardatud serv.
- **Sulge otsad:** katted avatud torule.
- **Kitsenemine piki seda:** mõõtkava ühtlaselt piki iga splaini, näiteks `1, 0.2` sarve jaoks, `0, 1, 0` kääride jaoks.
- **Sujuvus** ja NURBS-i puhul **järk**: kui peenelt see joonistatakse ja kui sile see on (2 sirgjoonena … 6 kõige siledam).
- Valitud punktide korral: **raadius** (toru paksus seal, korrutatuna faasiga), **kallutus** (pöörab riba kõvera ümber) ja NURBS-i puhul **kaal**.

Modifikaatorid töötavad kõveraobjekti peal nagu võrgu peal: massiiv piki seda, peegel, alamjaotuse pind. Vt [Võrgu modifikaatorid](topic:modifiers).

## Muuda see võrguks

{{ui:Võrguks}} (Kõvera töötsoonis või objekti teabes, {{ui:Kõver võrguks}}) muudab kõveraobjekti võrguks, mida see praegu näitab; selle modifikaatorid jäävad peale. Seejärel muuda seda Võrgu töötsoonis. Tagasivõtmine muudab selle tagasi.

Vt ka [Võrgud](topic:meshes) ja [Võrgu muutmine](topic:mesh-edit).
