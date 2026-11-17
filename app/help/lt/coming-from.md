---
title: Perėjimas iš kitų modeliavimo programų
summary: Kaip stumti/traukti modeliavimo įpročiai atitinka ModelCraft, klavišas po klavišo, ir skirtumai, kurie apgauna žmones.
keywords: perjungimas, migracija, pažįstama, skirtumai, stumti traukti modeliuotojas, skp, spartieji klavišai, įpročiai, palyginti, matavimų langelis, Outliner, objekto informacija
from: 74ffd4ac
---

Jei modeliavote SketchUp, ModelCraft jums bus pažįstama: ta pati paviršių ir stumti/traukti idėja, tie patys įrankių raidžių klavišai, vertės langelis, į kurį įvedate nespustelėję, įtraukimas pagal raudoną, žalią ir mėlyną ašis, grupės, komponentai, Outliner, objekto informacija ir scenos. Šiame puslapyje išvardyta, kas tiesiogiai atitinka, ir, dar svarbiau, kas neatitinka.

## Įpročiai, kurie išlieka

| Esate įpratę | ModelCraft |
|---|---|
| Spauskite Space, kad pasirinktumėte, L – linija, R – stačiakampis, C – apskritimas | Tas pats: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Spauskite P – stumti/traukti, M – perkelti, Q – sukti, S – keisti mastelį, E – trintukas, T – matuoklė | Tas pats: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Spauskite O – sukti rodinį, H – slinkti, Z – keisti mastelį, Shift+Z – keisti mastelį pagal ribas | Tas pats: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Spauskite G, kad sukurtumėte komponentą | Tas pats: {{key:G}}. {{key:Shift+G}} sukuria grupę |
| Įveskite į matavimų langelį nespustelėję jo | Tas pats, apatiniame vertės langelyje. Spauskite {{key:Enter}} |
| Įveskite `4m,3m` stačiakampiui, `12s` kraštinėms | Tas pats |
| Įveskite `3x` arba `/3` po perkėlimo kopijos | Tas pats; veikia ir `*3` |
| Įveskite `[x,y,z]` arba `<dx,dy,dz>` taškui ar poslinkiui | Tas pats |
| Įveskite grynąjį skaičių architektūriniame modelyje colių vienetais ir gaukite colius | Tas pats |
| Vidurinio mygtuko vilkimas – sukti, Shift ir vidurinio mygtuko vilkimas – slinkti, ratukas – keisti mastelį ties žymekliu | Tas pats |
| Dukart spustelėkite su stumti/traukti, kad pakartotumėte atstumą | Tas pats |
| Rodyklių klavišai fiksuoja raudoną, žalią, mėlyną ir lygiagretumą | Tas pats: {{key:Right}} raudona, {{key:Left}} žalia, {{key:Up}} mėlyna, {{key:Down}} lygiagrečiai |
| Laikykite Shift, kad fiksuotumėte įtraukimą | Tas pats |
| Ctrl (Option Mac kompiuteryje), kad kopijuotumėte perkeldami | {{key:Ctrl}}, {{key:Mod}} arba {{key:Alt}}, bet kuriame kompiuteryje |
| Shift perjungia, Ctrl prideda, Shift+Ctrl pašalina iš pasirinkimo | Tie patys klavišai; Mac kompiuteryje naudokite {{key:Mod}} ten, kur nurodyta Ctrl |
| Langas iš kairės į dešinę, kirtimas iš dešinės į kairę | Tas pats |
| Matmens įrankis ilgiams pažymėti | {{key:D}}, ir dar: įveskite naują ilgį matmenyje, ir modelis pakeičia dydį pagal jį. Žr. [Matmenys ir dydžio keitimas](topic:dimensions) |
| Dukart spustelėkite paviršių – paviršius ir briaunos; trigubas spustelėjimas – visi sujungti | Tas pats |
| Dukart spustelėkite grupę, kad ją redaguotumėte; Esc – uždaryti | Tas pats |
| Nubrėžkite liniją per paviršių, kad jį padalintumėte; ištrinkite briauną tarp vienoje plokštumoje esančių paviršių, kad juos sujungtumėte | Tas pats |
| Įstumkite langelio stačiakampį per sieną, kad ją išpjautumėte | Tas pats |
| Galiniai paviršiai mėlynai pilki; Apversti paviršius | Ta pati spalva; {{ui:Apversti paviršių}} skiltyje {{ui:Objekto informacija}} |
| Scenos kaip skirtukai virš rodinio, Page Up ir Page Down | Tas pats, su {{ui:Groti}} skiltyje {{ui:Scenos}} |
| Šešėliai pagal datą, laiką, platumą ir ilgumą, šiaurė žalia spalva | Tas pats, skiltyje {{ui:Stilius}} |

## Skirtumai, kurie apgauna žmones

### Įrašymas – tai atsisiuntimas

Nėra {{ui:Įrašyti}}, kuris perrašytų atidarytą failą, nėra {{ui:Įrašyti kaip}} lango su pavadinimu, nėra automatinio įrašymo ir atsarginės kopijos failo. {{ui:Įrašyti}} ({{key:Mod+S}}) kiekvieną kartą atsisiunčia naują `.modelcraft` failą, dažniausiai į jūsų atsisiuntimų aplanką. Įrašykite dažnai, o failus pervardykite arba perkelkite patys. Žr. [Atidarymas, įrašymas, importavimas ir eksportavimas](topic:files).

### Importuoja .skp failus, bet jų neįrašo

{{ui:Importuoti}} skaito SketchUp failus pačios ModelCraft skaitytuvu, puslapyje: grupės, komponentai, spalvos, paviršių tekstūros, žymos ir minkštos briaunos perkeliamos. Žr. [Failų formatai išsamiai](topic:formats#skp-files). ModelCraft negali įrašyti `.skp`: norėdami grįžti, eksportuokite Collada iš ModelCraft ir importuokite jį į SketchUp.

### Nėra dešiniojo klavišo meniu

Vilkimas dešiniuoju mygtuku slenka; dešiniu spustelėjimu nieko neatliekama. Komandos, kurias rastumėte kontekstiniame meniu, yra {{ui:Objekto informacija}} ({{ui:Apversti paviršių}}, {{ui:Redagavimas}}, {{ui:Suskaidyti}}, {{ui:Padaryti unikalų}}, {{ui:Sukurti komponentą}}) ir įrankių juostos grupėje {{ui:Tvarkymas}}.

### Vienetai yra būsenos juostoje

Nėra modelio informacijos ar šablono pasirinkimo. Vienetų pasirinkiklis yra apačioje dešinėje. Naujas modelis pradedamas pėdomis ir coliais JAV, o kitur milimetrais – pagal jūsų naršyklės kalbos nustatymą. Dešimtainiai skaičiai visada rašomi su tašku: `2.5m`, niekada `2,5m`, nes kablelis visada atskiria reikšmes.

### Dažymas turi savo medžiagas

{{ui:Dažyti}} ({{key:B}}) dažo vientisas spalvas ir skiltyje {{ui:Medžiagos}} esančias medžiagas: plytas, apkalimą, stogo dangą, medieną, akmenį ir kt., nupieštas ModelCraft. Savo paveikslėlio kaip medžiagos įkelti dar negalima; su importuotais failais atkeliamos tekstūros išlieka. Žr. [Dažymas spalvomis ir medžiagomis](topic:paint).

### Mastelio keitimas vienodas, be rankenėlių

Įrankis {{ui:Mastelis}} nerodo dėžės su rankenėlėmis. Spustelėkite tašką, kuris lieka vietoje, atskaitos tašką, tada naują dydį arba įvestą koeficientą. Mastelis visada keičiamas vienodai visomis kryptimis. Norėdami tempti viena kryptimi, stumkite/traukite arba perkelkite paviršių, iš naujo įveskite grupės plotį, gylį ar aukštį skiltyje {{ui:Objekto informacija}}, arba [keiskite dydį su matmeniu](topic:dimensions).

### Sukimas plokštumą parenka pagal tai, kur spustelėjate

Nėra transportyro, kuris prilimpa prie paviršių, kai rodyklių klavišais parenkate plokštumą ir užvedate žymeklį ant jų. Spustelėkite centrą ant paviršiaus, kad suktumėte toje paviršiaus plokštumoje, arba ant žemės, kad suktumėte apie vertikalę. Rodyklių klavišai prieš pirmą spustelėjimą pasuka rodinį.

### Įtraukimas pagal taškus, kuriuos praeinate

ModelCraft prisegama prie ašių krypčių nuo **jūsų pradžios taško**, o taip pat prie taškų, briaunų ir paviršių po žymekliu. Ji neseka krypties nuo taško, virš kurio tik užvedėte (punktyrinis „nuo taško“ įtraukimas). Norėdami išsilygiuoti su tolimu kampu, užfiksuokite ašį rodyklių klavišu ir užveskite žymeklį ant to kampo: užfiksuotas taškas slysta, kad išsilygiuotų su juo. Arba nustatykite [vadovo liniją](topic:guides-measure).

### Lygiagretumas naudoja briauną, kurią praėjote prieš pradedant

Lygiagretumo ir statmenumo įtraukimas naudoja paskutinę briauną, kurią žymeklis perėjo **prieš pirmą spustelėjimą**, o ne briaunas, virš kurių užvedate braižydami. Žr. [Įtraukimas ir prisegimas](topic:inference#parallel-and-perpendicular).

### Grupių kopijos yra susietos

Grupės kopijavimas su {{ui:Perkelti}} sukuria antrą tos pačios grupės išdėstymą, todėl redaguojant vieną pasikeičia abi, kaip ir su komponentais. SketchUp grupes daro nepriklausomas. Žr. [Trikčių šalinimas](topic:troubleshooting#editing-one-group-changed-another).

### Space neslenka rodinio

{{key:Space}} parenka {{ui:Pasirinkti}}, kaip SketchUp. Kai kuriose kitose interneto programose laikant Space slenkama; čia – ne. Vietoj to slenkama vilkant dešiniuoju mygtuku.

### Dviejų pirštų slinkimas keičia mastelį

Jutiklinėje dalyje nustatykite {{ui:Parametrai}} › {{ui:ModelCraft}} › Slinkimas į {{ui:Jutiklinis pultelis}}: du pirštai sukasi, {{key:Shift}} ir du pirštai slenka, suspaudimas keičia mastelį. Žr. [Sukimas, slinkimas ir mastelis](topic:orbit-pan-zoom#on-a-trackpad).

Jei rankos įpratusios prie Blender klavišų, o ne SketchUp, pasirinkite {{ui:Modeler}} meniu stilių: {{key:G}}, {{key:R}} ir {{key:S}} iš karto veikia pasirinkimą, {{key:E}} ekstruzuoja (stumti/traukti), {{key:Shift+D}} dubliuoja, o antraštės meniu juosta (Failas, Redagavimas, Vaizdas, Pasirinkti, Pridėti, Objektas, Tinklas) pakeičia įrankių juostą. Atėję iš SketchUp, {{ui:Stumti-traukti}} stilius duoda meniu juostą, panašią į savo, virš tų pačių įrankių raidžių. Žr. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse).

### Vienas į kitą įstumti kūnai nepjaunami

Stumti/traukti pjauna per paviršių, esantį už jo tame pačiame objekte, bet du atskiri kūnai, įstumti vienas į kitą, nesikerta. Nėra paviršių susikirtimo (Intersect Faces) ir kietųjų kūnų įrankių (Solid Tools).

### Kas trūksta

Laisvoji ranka (Freehand), Trim, Split ir Outer Shell, savo paveikslėlių medžiagos, plėtiniai ir lapų maketavimo įrankis šioje versijoje neįdiegti. [Dar neįdiegta](topic:not-built-yet) nurodo, ką daryti vietoj to.

## Spartieji klavišai, kuriuos išlaiko naršyklė

ModelCraft veikia naršyklėje, todėl kai kurie spartieji klavišai priklauso naršyklei, o ne programai. {{key:Mod+N}} atveria naujo naršyklės lango (naudokite {{ui:Naujas}}), o {{key:Mod+W}} uždaro skirtuką. Jei turite neįrašytų pakeitimų, naršyklė prieš uždarydama klausia. Žr. [Klavišai, pelės ir jutikliniai pultai](common:keys#shortcuts-the-browser-keeps).
