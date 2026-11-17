---
title: Vaata mudelit üle VR-peakomplektis
summary: Kõnni mudelis täissuuruses VR-peakomplektis: hüppa ringi, pööra, mõõda, lõika lahti, pane probleeme pildiga, vaata seda lauamudelina ja kohtu reaalajas sessiooni teistega.
keywords: vr, virtuaalreaalsus, peakomplekt, webxr, xr, immersiivne, quest, oculus, vive, index, pico, läbikõnd, läbikäik, teleporteerumine, disainiülevaatus, ülevaatus, mõõtmine, lõige, lõika, probleem, probleemid, bcf, lauamudel, mõõtkavamudel, kohalolek, avatarid, reaalajas, koos
from: fa2f591a
---

{{ui:Vaata üle VR-is}} paneb sind VR-peakomplektiga mudeli sisse täissuuruses. Seisad seal, kus on vaate kaamera, selle all olevale põrandale, vaadates samas suunas. Midagi ei laadita üles: peakomplekt näitab seda, mida brauser joonistab sellel arvutil (või peakomplekti enda brauseris).

## Mida vajad

- Peakomplekt, mida brauser suudab juhtida (WebXR): peakomplekti enda brauser või Chrome või Edge arvutis, kuhu on ühendatud peakomplekt.
- ModelCraft avatud turvalisel lehel (https), nagu see on sellel saidil.

Kui peakomplekti pole, on {{ui:Vaata üle VR-is}} hall ja ütleb põhjuse.

## Alusta

1. Seadista vaade sinna, kust tahad alustada: ruumis või väljas, hoone poole vaadates.
2. Klõpsa rühmas {{ui:Kaamera}} {{ui:Vaated}}, seejärel {{ui:Vaata üle VR-is}}.
3. Pane peakomplekt pähe.

Menüü on vasaku käe seljal. Osuta sellele parema kontrolleriga ja tõmba päästikust, et valida nupp. (Kui on ainult üks käsi, hõljub menüü seal, kust alustasid.)

## Kuidas see välja näeb

Peakomplekt näitab mudelit [reaalajavaate](topic:live-view) ilmes: tahkude välimus ja materjalid, mille andsid, taevas ja päike mudeli asukohast ja kuupäevast koos varjuga, lambid, hajutatud taimed ja kivid ning seintelt ja põrandatelt tagasipeegelduv valgus (arvutatakse selles arvutis, kui vaatad ringi, ja järgib sind liikudes). Heledus ja vaate teisendus (ACES või AgX) on samad, mis [Renderda pilt](topic:render) omad. See, kui palju joonistatakse, sõltub sellest, mida peakomplekti brauser suudab, nagu lauaarvutis; ümbritsev varjutus (ambient occlusion), peegeldused ja hõõgumine jäävad lauaarvutisse.

## Liigu ringi

- **Hüppa:** režiimis {{ui:Teisalda}} osuta põrandale ja tõmba päästikust; maandud seal. Või lükka pulk ette, et sihtida, ja lase lahti, et hüpata. Maanduda saad ainult põrandale ja maapinnale (ülespoole suunatud pindadele), mitte kunagi seinale.
- **Pööra:** lükka pulka vasakule või paremale: pöördud iga kord 30°.
- **Kõnni:** oma mängualas lihtsalt kõnni.

## Mõõda

Vali {{ui:Mõõda}} ja tõmba päästikust kahel punktil. Vahemaa kuvatakse nende vahel mudeli ühikutes. Nurga lähedal olev punkt tõmbub nurgale.

## Lõika lahti

Vali {{ui:Lõige}} ja tõmba päästikust pinnal:

- seinal (või millelgi, mis pole põrand): kõik sinu ja selle pinna vahel lõigatakse ära, nii et näed sisse. See töötab parimini väljast või üle ruumi;
- põrandal, ülevalt: plaanilõige 1.2 m selle põranda kohal, nii et seinad näitavad oma alumist osa.

{{ui:Puhasta}} eemaldab lõike ja mõõtmised. Kui lõiketasand lõikab alustades vaates mudelit, alustab peakomplekt sellega.

## Pane probleem paika

Vali {{ui:Probleem}} ja tõmba päästikust sinna, kus probleem on. Nummerdatud nööpnõel märgib selle ja ModelCraft salvestab probleemi koos pildiga sellest, mida nägid, ja kohast, kus seisid. Kui lahkud VR-ist, on probleemid paremal asuvas loendis {{ui:Probleemid}}:

- silmanupp näitab probleemi sealt, kust see paigutati;
- {{ui:Salvesta BCF-ina}} laadib need kõik alla BCF-failina, mida avavad BIM-ülevaatusprogrammid (kaasa arvatud kaamera ja pilt);
- need salvestatakse ka faili `.modelcraft` sisse.

Lisa probleemile kommentaar pärast VR-ist lahkumist BCF-programmis: kirjutamine peakomplektis pole veel valmis.

## Vaata seda lauamudelina

{{ui:Lauaplaat}} kahandab mudeli nii, et see mahub sinu ees olevale lauale; kõnni ümber, või pööra seda pulgaga. {{ui:Täissuurus}} paneb sind tagasi sinna, kus olid.

## Koos teistega, reaalajas

[Reaalajas sessioonis](topic:work-live) näeb kõik VR-is teisi pea ja kahe käena, igaüks oma värvis, koos nimega ja punktiga kohas, kuhu keegi osutab. Kõik muudatused, mida keegi teeb, jõuavad sinu peakomplekti hetkega. Lauaarvuti taga istujaid peakomplektis veel ei näidata.

## Lahku

Vali {{ui:Lahku VR-ist}} (või võta peakomplekt maha ja lõpeta seal). Ekraanil olev vaade liigub sinna, kus su pea oli.

:::note
Testitud ainult peakomplekti emulaatoriga, päris peakomplektiga pole veel testitud. Suur mudel võib peakomplektis katkendlikkust tekitada: peida esmalt see, mida ei vaja ([peida ja isoleeri](topic:hide-isolate)).
:::
