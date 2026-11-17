---
title: Teisalda, kopeeri ja tee massiive
summary: Teisalda asju klõpsates või täpse kauguse järgi, kopeeri neid abiklahviga ja tee rida ühtlaselt paigutatud koopiaid.
keywords: teisalda, kopeeri, dubleeri, massiiv, rida, vahe, jaga, nihe, venita, veerud, korda, mitu koopiat
from: 280245fc
---

{{ui:Teisalda}} ({{key:M}}) teisaldab valitud asjad ühest punktist teise. Kui hoida all abiklahvi, siis tehakse koopia, ja pärast kopeerimist saad sisestada, mitu koopiat veel tahad.

## Teisalda midagi

1. Vali, mida soovid teisaldada (vt [Asjade valimine](topic:select)). Kui midagi pole valitud, võtab {{ui:Teisalda}} selle, millele klõpsad.
2. Vajuta {{key:M}}.
3. Klõpsa punkt, millest teisaldada. Vali midagi sisukat, näiteks nurk: see punkt jõuab täpselt sinna, kuhu järgmisena klõpsad.
4. Liiguta kursorit. Valik liigub kaasa. See haakub punktide, servade ning punaste, roheliste ja siniste suundadega, nii nagu joon.
5. Klõpsa kohta, kuhu punkt peab jõudma, või sisesta kaugus ja vajuta {{key:Enter}}.

   Olekuriba vihje läheb järgmise teisaldamise jaoks tagasi tekstile „Klõpsa punkt, millest alustada teisaldamist…“.

Sisestatud kaugus läheb suunas, kuhu osutad. Võid sisestada ka täpse nihke, `<2m,0,0>` (2 m mööda punast telge), või valitud punkti täpse sihtkoha, `[0,0,0]` (algpunkt). Vt [Täpsete mõõtude sisestamine](topic:value-box).

Ainult ühe telje suunas liikumiseks vajuta pärast esimest klõpsu nooleklahvi: {{key:Right}} lukustab punasele suunale, {{key:Left}} roheliselt, {{key:Up}} sinisele. Sama nool uuesti vabastab lukustuse.

## Osa kujundi teisaldamine venitab seda

Gruppi kuulumata geomeetria on omavahel seotud. Kui valid ühe tahu või mõned servad ja teisaldad need, venivad nendega ühendatud tahud kaasa. Liiguta kasti ülemine tahk külle ja kast kaldub; liiguta katuse üht serva ja katuse kalle muutub. Tahud, mis ei saa enam tasased olla, murduvad kolmnurkadeks.

Terve objekti teisaldamiseks ilma venitamata vali kõik enne (tripelklõps) või veelgi parem tee sellest grupp või komponent (vt [Grupid ja komponendid](topic:groups-components)).

## Kopeeri midagi

1. Vali, mida kopeerida.
2. Vajuta {{key:M}}.
3. Hoia all {{key:Ctrl}} (või {{key:Alt}}) ja klõpsa punkt, millest teisaldada. Macis teeb sama {{key:Mod}} või {{key:Alt}}. Vihje ütleb „Ctrl teisaldab hoopis“, mis tähendab, et kopeerid.

   Võid vajutada ja vabastada {{key:Ctrl}} või {{key:Alt}} ka pärast esimest klõpsu, et vahetada teisaldamise ja kopeerimise vahel.

4. Klõpsa kohta, kuhu koopia peab tulema, või sisesta kaugus ja vajuta {{key:Enter}}.

   Originaal jääb oma kohale ja koopia on valitud.

## Kopeeri, lõika, kleebi ja dubleeri

- {{key:Mod+C}} kopeerib valiku, {{key:Mod+X}} lõikab selle (kopeerib ja kustutab). {{ui:Kopeeri}} ja {{ui:Kleebi}} on tööriistariba rühmas {{ui:Redigeeri}} olevad nupud, ja nende kõrval olev {{ui:Rohkem}} pakub lõikamist, kleepimist samasse kohta ning dubleerimist.
- {{key:Mod+V}} kleebib: koopia kontuur liigub kursoriga, haakudes nagu iga tööriist, ja klõps paneb selle maha nii, et selle madalaim nurk jääb sinna. {{key:Esc}} tühistab.
- {{key:Mod+Shift+V}} kleebib samasse kohta, täpselt sinna, kust koopia pärineb. See on kasulik, kui tahad midagi avatud gruppi viia.
- {{key:Mod+D}} ({{key:Shift+D}} Modeler-stiilis) dubleerib: koopia tehakse kohe ja liigub kursoriga. Klõpsa, et see maha panna, sisesta kaugus või vajuta {{key:Esc}}, et see ära visata. Kohe pärast seda sisesta `3x`, et teha veel koopiaid järjest.

Kleebitud grupp muutub uueks grupiks. Kleebitud komponent on sama komponendi teine paigutus, seega selle muutmine muudab kõiki. Koopiad kleepuvad ka teise ModelCraft-vahelehte selles brauseris (seal tulevad need uute definitsioonidena).

## Koopiate rida

Kohe pärast kopeerimist, kui {{ui:Teisalda}} on veel aktiivne tööriist:

- Sisesta `3x` (või `*3`) ja vajuta {{key:Enter}}, et teha kolm koopiat järjest, igaüks sama vahega kui esimene koopia. Saad originaali kõrvale kolm uut koopiat.
- Sisesta `/3` ja vajuta {{key:Enter}}, et jagada: kolm koopiat jaotatakse ühtlaselt originaalist kohani, kuhu panid esimese koopia, viimane koopia täpselt sinna. Kasuta seda, et täita vahemik: pane üks koopia kaugemasse otsa ja jaga siis.

Järgmist arvu saad sisestada kohe: `5x` asendab `3x` rea. Vihje meenutab: „Kopeeritud. Sisesta 3x, et teha veel koopiaid järjest, või /3, et jagada kaugus.“

### Näide: veerud iga 6 meetri järel

1. Tee veerg ja muuda see komponendiks ({{key:G}}), et kõik koopiad muutuksid hiljem koos.
2. Vajuta {{key:M}}, hoia {{key:Ctrl}} all ja klõpsa veeru aluse nurka.
3. Liigu punase telje suunas, sisesta `6m` ja vajuta {{key:Enter}}.
4. Sisesta `4x` ja vajuta {{key:Enter}}. Sul on viis veergu, mis on üksteisest 6 m kaugusel.

## Mida tasub teada

- Vajuta {{key:Esc}} enne teist klõpsu, et tühistada; kõik läheb tagasi algsesse kohta.
- {{ui:Teisalda}} töötab grupi sees, mida parasjagu redigeerid. Terve grupi teisaldamiseks sulge see enne ja vali väljastpoolt.
- Kui {{ui:Põrkumine}} on sisse lülitatud (paremas alanurgas ja [ModelCraft-i sätetes](topic:settings#solids-stop-where-they-touch)), peatub teisaldamine seal, kus valik puutub kokku teise tahkisega, selle asemel et läbi minna. Klõpsa {{ui:Põrkumine}}, et see teisaldamiseks välja lülitada, kui peab läbi minema.
- Koopia panemiseks teise gruppi: kopeeri see, ava teine grupp ja kleebi ({{key:Mod+Shift+V}} jätab selle samasse kohta).
