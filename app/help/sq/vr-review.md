---
title: Rishiko modelin në një kufje VR
summary: Ec nëpër model në madhësi reale me një kufje VR: kërce, kthehu, mat, prit, vendos probleme me një foto, shiko si model mbi tavolinë, dhe takoi të tjerët e një sesioni të drejtpërdrejtë.
keywords: vr, realitet virtual, kufje, webxr, xr, imersiv, quest, oculus, vive, index, pico, ec nëpër, shëtitje, teleportim, rishikim projekti, rishikim, mat, prerje, çështje, probleme, bcf, sipërfaqe tavoline, model shkalle, prani, avatarë, i drejtpërdrejtë, bashkë
from: fa2f591a
---

{{ui:Rishiko në VR}} të vendos brenda modelit me një kufje VR, në madhësi reale. Qëndron aty ku është kamera e pamjes, mbi dyshemenë poshtë saj, duke parë nga e njëjta anë. Asgjë nuk ngarkohet: kufja shfaq atë që shfletuesi vizaton në këtë kompjuter (ose në shfletuesin e vetë kufjes).

## Çfarë të duhet

- Një kufje që shfletuesi mund ta drejtojë (WebXR): shfletuesi i vetë kufjes së pavarur, ose Chrome ose Edge në një PC me një kufje të lidhur.
- ModelCraft i hapur në një faqe të sigurt (https), ashtu si është në këtë sajt.

Kur nuk ka kufje, {{ui:Rishiko në VR}} është i zbehur dhe thotë pse.

## Nis

1. Vendos pamjen aty ku do të nisesh: në një dhomë, ose jashtë duke parë ndërtesën.
2. Kliko {{ui:Pamjet}} në grupin {{ui:Kamera}}, pastaj {{ui:Rishiko në VR}}.
3. Vishe kufjen.

Menuja është në pjesën e pasme të dorës së majtë. Drejto kontrolluesin e djathtë mbi të dhe shtyp gatillin për të zgjedhur një buton. (Me vetëm një dorë, menuja noton përpara vendit ku ke nisur.)

## Si duket

Kufja shfaq modelin në pamjen live: pamjet dhe materialet që u ke dhënë sipërfaqeve, qiellin dhe diellin nga vendi dhe data e modelit tënd me hijen e tij, llambat, bimët dhe gurët e shpërndarë, dhe dritën e reflektuar nga muret dhe dyshemetë (llogaritur në këtë kompjuter ndërsa shikon përreth, dhe duke të ndjekur kur lëviz). Ndriçimi dhe transformimi i pamjes (ACES ose AgX) janë ato të [Rendero një foto](topic:render). Sa shumë vizaton varet nga ajo që ka shfletuesi i kufjes, ashtu si në desktop; errësimi ambiental, reflektimet dhe bloom mbeten në desktop.

## Lëviz

- **Kërcim:** te {{ui:Lëviz}}, drejto një dysheme dhe shtyp gatillin; ulesh atje. Ose shtyp shkopin përpara për të synuar, dhe lësho për të kërcyer. Mund të ulesh vetëm në dysheme dhe në tokë (sipërfaqe që kanë fytyrën lart), kurrë në mur.
- **Kthim:** shtyp shkopin majtas ose djathtas: kthehesh 30° çdo herë.
- **Ecje:** në zonën tënde të lëvizjes, thjesht ec.

## Mat

Zgjidh {{ui:Mat}}, pastaj shtyp gatillin mbi dy pika. Distanca shfaqet midis tyre, në njësitë e modelit. Një pikë afër një cepi ngjitet te cepi.

## Prerje

Zgjidh {{ui:Prerje}} dhe shtyp gatillin mbi një sipërfaqe:

- mbi një mur (ose çdo gjë që nuk është dysheme): gjithçka midis teje dhe asaj sipërfaqeje hiqet, që të shohësh brenda. Funksionon më mirë nga jashtë, ose përtej një dhome;
- mbi një dysheme, nga lart: një prerje plani 1.2 m mbi atë dysheme, që muret të shfaqin pjesën e tyre të poshtme.

{{ui:Pastro}} heq prerjen dhe matjet. Nëse një plan prerjeje e pret modelin në pamje kur nis, kufja nis me të.

## Vendos një çështje

Zgjidh {{ui:Çështje}} dhe shtyp gatillin aty ku është problemi. Një shenjë e numëruar e shënon, dhe ModelCraft e mban çështjen bashkë me një foto të asaj që pe dhe ku ndodheshe. Kur del nga VR, çështjet janë te lista {{ui:Çështjet}} në të djathtë:

- butoni me sy tregon çështjen nga vendi ku u vendos;
- {{ui:Ruaj si BCF}} shkarkon të gjitha si skedar BCF, që programet e rishikimit BIM i hapin (kamera dhe foto përfshihen);
- ruhen edhe në skedarin `.modelcraft`.

Shto një koment te një çështje pasi del nga VR, në një program BCF: shkrimi në kufje nuk është ndërtuar ende.

## Shiko si model mbi tavolinë

{{ui:Sipërfaqe tavoline}} e zvogëlon modelin që të përshtatet me një tavolinë përpara teje; ec rreth tij, ose kthe me shkopin. {{ui:Madhësi reale}} të kthen aty ku ishe.

## Me të tjerët, të drejtpërdrejtë

Në një [sesion të drejtpërdrejtë](topic:work-live), të gjithë në VR i shohin të tjerët si një kokë dhe dy duar në ngjyrën e vet, me emrin e tyre, dhe një pikë ku secili tregon. Ndryshimet që bën kushdo arrijnë në kufjen tënde brenda pak çastesh. Njerëzit në tavolinë nuk shfaqen ende në kufje.

## Dil

Zgjidh {{ui:Dil nga VR}} (ose hiq kufjen dhe mbyll aty). Pamja në ekran lëviz te vendi ku ishte koka jote.

:::note
E testuar vetëm me një emulator kufjeje, jo ende me një kufje reale. Një model i madh mund ta bëjë kufjen të kërcasë: fshih më parë atë që nuk të duhet ([fshih dhe izolo](topic:hide-isolate)).
:::
