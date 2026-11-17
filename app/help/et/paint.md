---
title: Värvimine värvide ja materjalidega
summary: Anna tahkudele, gruppidele ja komponentidele ühtlane värv või materjal, nagu tellis, vooderdis, katusematerjal või puit, ning säilita need eksportimisel.
keywords: värvi, värv, värvus, materjal, materjalid, tekstuur, tekstuurid, tellis, vooderdis, katusematerjal, katus, puit, kivi, kahhel, betoon, krohv, muru, kruus, klaas, metall, värvisang, täide, proov, pipett, vaikimisi, glb, obj, mtl, collada
from: b1500523
---

Värvid aitavad eristada mudeli osi ning **materjalid** (tellis, vooderdis, katusematerjal, puit, kivi, kahhel, betoon, krohv, muru, klaas, metall) teevad mudeli välja nagu selle ehitusmaterjal. Mõlemad värvivad ühtemoodi.

## Värvi valimine

Jaotis {{ui:Colors}} paremal näitab rida ühtlasi värve, {{ui:Default}} (see, mida läbib joon: värvi pole) ning {{ui:+}} plaati mis tahes muu värvi jaoks. Klõpsa ühel, et teha sellest praegune värv. Värvimistööriist alustab sellega.

## Värvimine

1. Vajuta {{key:B}} ({{ui:Paint}}) või, kui midagi pole valitud, klõpsa värvil. (Kui on midagi valitud, värvib värvil klõpsamine valiku kohe.)
2. Klõpsa tahul, et seda värvida.
3. Klõpsa grupil või komponendil, et värvida see koopia: selle tahud, millel pole oma värvi, võtavad selle värvi. Seal sees värvitud tahud säilitavad oma värvi.

Mitme asja korraga värvimiseks vali need enne ja klõpsa värvil, või klõpsa neist ükskõik millisel {{ui:Paint}} abil. See on üks tagasivõtmise samm.

| Hoia all | Ja klõpsa tahul | Mis värvitakse |
|---|---|---|
| — | | See tahk |
| {{key:Ctrl}} | | Iga sellega ühendatud tahk, millel on sama värv |
| {{key:Shift}} | | Iga selle värvi tahk grupis, millega parasjagu töötad |
| {{key:Alt}} | | Mitte midagi: sa võtad selle värvi |

Et tahk tagasi värvituks muuta, vali {{ui:Default}} ja klõpsa sellel.

## Materjaliga värvimine

Jaotis {{ui:Materials}}, {{ui:Colors}} all, loetleb materjaliteeki liikide kaupa: tellised ja plokid, vooderdis, katusematerjal, puit, kivi, kahhel, betoon, krohv, maapind, klaas ja metall. Hoia hiirt proovi kohal, et näha selle nimi. Klõpsa ühel ja värvi sellega täpselt nagu värviga: {{key:B}}, klõpsa tahkudel, gruppidel või komponentidel; või vali enne ja klõpsa materjalil.

- **Varjutatud** stiilis näitavad tahud materjali tekstuuri. Peidetud jooned, traatmudel ja röntgen näitavad selle värvi.
- Tekstuurid kulgevad **igal tahul horisontaalselt** ja **üles mööda seda**: tellisread jäävad igal seinal tasaseks, šindlid lähevad katuse kalde mööda alla, põranda laud järgivad punast telge. Need on tegelikus suuruses (tellis on umbes 215 mm pikk), nii et näevad kaugusel õiged välja.
- [Renderdatud pildil](topic:render) säilitavad materjalid oma tekstuuri, karedust ja klaasi ning metalli puhul ka läiku.
- {{key:Alt}}-klõps {{ui:Paint}} tööriistaga võtab ka tahu materjali.

Tekstuurid joonistab ModelCraft ise, nii et need töötavad võrguta ja on vabalt kasutatavad mis tahes otstarbeks (CC0).

## Komponendid ja värvid

Värv, mis on määratud komponendi **sees** olevale tahule, kuvatakse igal koopial, sest koopiatel on üks ühine määratlus. Värv, mis on määratud **koopiale** väljastpoolt (kui komponent on suletud), kuulub ainult sellele koopiale, nii et kahel selle komponendi koopial võivad olla erinevad värvid. {{ui:Entity info}} näitab valitud tahu, grupi või komponendi värvi.

## Värvid failides

- ModelCraft'i fail hoiab iga värvi ja iga materjali.
- Teised vormingud saavad tekstuuri asemel **materjali värvi** (selle välimuse kaugelt): glTF, Collada, OBJ, DWG ja DXF ning 3D-printimise kontroll. glTF-s, Collada-s ja OBJ-s säilitab materjal oma nime, näiteks `Material_brick-red`.
- **glTF (.glb)** ja **Collada (.dae)**: iga värv muutub materjaliks. Komponent, mida näidatakse erinevates värvides, kirjutatakse iga värvi kohta üks kord. glTF kirjutab imporditud tekstuurid ka tekstuuridena.
- **OBJ**: eksport laadib alla kaks faili, `.obj` ja `.mtl` materjalifaili värvidega. Hoia need samas kaustas. Imporditud tekstuuridega tulevad `.obj`, `.mtl` ja pildid ühe `.zip`-ina.
- **DWG** säilitab täpsed värvid; **DXF** kasutab 255 standardse CAD-värvi lähimat.
- **STL** ja **PLY** kannavad värve: STL VisCAM / SolidView konventsioonis (programmid, mis seda ei loe, ignoreerivad seda), PLY värvina igal punktil. Vaata [Failivormingud üksikasjalikult](topic:formats).

:::tip
Ekraani modelleerimiseks värvi raam söehalliks ja klaas siniseks pärast seda, kui oled [nihutanud](topic:draw-faces) esitahku.
:::
