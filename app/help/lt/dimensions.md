---
title: Matmenys ir nubrėžto dydžio keitimas
summary: Dėkite matmenis tarp kampų, ant lankų ir apskritimų ar tarp dviejų briaunų; įveskite naują ilgį, kad pakeistumėte modelio dydį. Iš naujo įveskite briaunos ilgį ar grupės plotį, gylį ir aukštį objekto informacijoje.
keywords: matmuo, matmenys, dydžio keitimas, keisti dydį, redaguoti dydį, ilgis, plotis, gylis, aukštis, tempimas, valdantis matmuo, anotuoti, matuoti, po fakto, spindulys, skersmuo, kampas, kampinis, lankas, apskritimas, R, Ø
from: a1f815ec
---

Modelio dydžiai ModelCraft nėra fiksuoti, kai kažkas jau nubrėžta. Matmuo rodo ilgį ant modelio, o įvedus į jį naują ilgį, modelis pakeičia dydį atitinkamai. Taip pat galite iš naujo įvesti briaunos ilgį arba grupės plotį, gylį ir aukštį {{ui:Objekto informacija}} skiltyje.

## Matmens nustatymas

1. Spauskite {{key:D}} arba įrankių juostoje spustelėkite {{ui:Matmuo}}.
2. Spustelėkite kampą, nuo kurio matuosite. Jis prisegamas prie kampų, vidurio taškų ir briaunų, kaip ir braižant.
3. Spustelėkite antrąjį kampą.

   Arba vieną kartą spustelėkite **briauną** (užuomina sako „Ant briaunos“), kad vienu spustelėjimu užmatuotumėte visą briauną.
4. Perkelkite žymeklį ten, kur turi būti matmens linija, ir spustelėkite. Taip pat galite įvesti nuokrypį, pavyzdžiui, `0.5m`, ir paspausti {{key:Enter}}.

   Matmens linija horizontalioje briaunoje lieka horizontali, nebent žiūrite į ją iš šono. Vertikaliai briaunai ji lieka vertikalioje plokštumoje, kuri geriausiai nukreipta į jus.

Būsenos juostoje rodoma „Matmuo 4 m.“. Matmenys rodo savo ilgį modelio vienetais ir atsinaujina, kai pakeičiate vienetą pasirinkiklyje.

## Spindulys, skersmuo ir kampas

Tas pats įrankis {{ui:Matmuo}} matuoja apvalius objektus ir kampus:

- **Lankas:** spustelėkite lanką. Užuomina sako {{ui:Spindulys}}. Perkelkite žymeklį ten, kur turi būti tekstas, ir spustelėkite: matmuo rodo **R 1.5 m**.
- **Apskritimas:** spustelėkite apskritimą. Gausite **skersmenį** (**Ø 3 m**) su linija per apskritimą, einančia per jo centrą. Daugiakampiai veikia taip pat, o jų kampai yra ant apskritimo.
- **Kampas tarp dviejų briaunų:** spustelėkite vieną briauną, tada – antrą briauną, kuri su ja susiliečia kampe (kol esate virš jos, užuomina sako {{ui:Kampas tarp briaunų}}). Tada perkelkite į norimą kampą ir spustelėkite. Kampo viduje gausite kampą tarp briaunų; pasislinkus į vieną pusę, gausite gretimą kampą (pavyzdžiui, 150° vietoj 30°). Kiek toli nuo kampo spustelėsite, nustato, kur eis lankas; arba įveskite tą atstumą.

Norėdami spindulį pakeisti į skersmenį ar atgal, pasirinkite matmenį ir {{ui:Objekto informacija}} skiltyje pasirinkite {{ui:Rodyti kaip}}.

**Dydžio keitimas:** įveskite naują spindulį ar skersmenį iš karto po jo nustatymo arba pasirinkite jį vėliau ir įveskite. Lankas ar apskritimas išlaiko savo centrą ir keičia dydį; paviršius, kurį jis riboja (diskas, griovelio galas), keičiasi kartu. Du dalykai tik matuojami:

- **Kampo matmuo** niekada nekeičia modelio. Norėdami pakeisti kampą, pasukite briaunas su {{ui:Sukti}}.
- **Apskritimas cilindro gale** (apskritimas, kurį ištraukėte su {{ui:Stumti/traukti}}) negali keisti dydžio pagal savo matmenį, nes jo šonai taip pat turėtų keistis. Vietoj to keiskite cilindro mastelį apie jo ašį.

## Modelio dydžio keitimas matmeniu

Iš karto nustačius matmenį, įveskite naują ilgį ir paspauskite {{key:Enter}}: `6m`, `12'`, `3500` milimetrų modelyje. Modelis pakeičia savo dydį į tokį.

Vėliau, bet kada:

1. Su {{ui:Pasirinkti}} spustelėkite matmens tekstą ar liniją. {{ui:Objekto informacija}} nurodo **Matmuo** ir rodo jo {{ui:Ilgis}}.
2. Įveskite naują ilgį ir paspauskite {{key:Enter}}. Galite rašyti tiesiai į vertės langelį arba į {{ui:Ilgis}} langelį {{ui:Objekto informacija}} skiltyje.

### Kas juda

Juda antrasis jūsų spustelėtas kampas, kartu su juo juda ir viskas už jo:

- **Abu kampai vienoje dalyje** (dėžės plotis, sienos aukštis): judančio kampo pusė slenka į išorę arba vidų, o prie jos prijungti paviršiai ištempiami. Dėžė lieka uždaru kūnu, o viskas, kas visiškai stovi toje pusėje, pavyzdžiui, lango komponentas, juda kartu su ja.
- **Kampai dviejose atskirose dalyse** (tarpas tarp dviejų dėžių): judančio kampo dalis juda visa, o tarpas keičiasi.
- **Judantis kampas grupėje ar komponente**, kurioje nėra kito kampo: juda visa grupė.
- **Abu kampai toje pačioje grupėje ar komponente**: ji ištempiama viduje. Komponentas pakinta visur, kur išdėstytas, kaip ir redaguojant jį visada.

Norėdami pakeisti, kuris galas juda, pasirinkite matmenį ir {{ui:Objekto informacija}} skiltyje pasirinkite {{ui:Juda}}:

| Pasirinkimas | Kas vyksta |
|---|---|
| {{ui:Antras galas}} (numatytasis) | Galas, kurį spustelėjote antrą, juda |
| {{ui:Pirmas galas}} | Galas, kurį spustelėjote pirmą, juda |
| {{ui:Abu galai (centruoti)}} | Kiekvienas galas juda pusę pakeitimo, todėl vidurys lieka vietoje |

### Kai dydžio keitimas atmetamas

ModelCraft nieko nekeičia ir būsenos juostoje nurodo kodėl:

- „paviršius išlinktų iš savo plokštumos“: matmuo eina įstrižai per formą. Matuokite išilgai briaunos arba išilgai raudonos, žalios ar mėlynos ašies.
- „paviršius susitrauktų iki nieko ar apsivertų vidun“: naujas ilgis per trumpas formai.
- „galas, kuris juda, nėra modelio kampe“: tas galas nustatytas tuščioje vietoje arba briaunos viduryje. Pasirinkite kitą galą {{ui:Juda}}, arba nustatykite matmenį ant dviejų kampų.
- „ilgis turi būti didesnis už nulį“.

Kiekvienas dydžio keitimas yra vienas žingsnis: {{key:Mod+Z}} jį anuliuoja.

## Dydžio perrašymas objekto informacijoje

Matmens ne visada reikia:

- **Briauna:** pasirinkite ją. Jos {{ui:Ilgis}} skiltyje {{ui:Objekto informacija}} yra langelis, į kurį galite rašyti. Įvesti ilgį į vertės langelį taip pat veikia. Juda galas, esantis toliau išilgai raudonos, paskui žalios, paskui mėlynos, ir ištempiama tai, kas prie jo prijungta. Pavyzdžiui, iš naujo įvedus dėžės priekinės apatinės briaunos ilgį, dėžė padaroma platesnė į dešinę.
- **Grupė ar komponentas:** pasirinkite jį. {{ui:Plotis (raudona)}}, {{ui:Gylis (žalia)}} ir {{ui:Aukštis (mėlyna)}} yra langeliai. Jo tolimoji pusė (dešinė, galinė, viršutinė) juda. Tai grupės pačios ašys, prieš bet kokį pasukimą, kurį jai suteikėte.

Spauskite {{key:Enter}}, kad pritaikytumėte, arba {{key:Esc}}, kad grąžintumėte senąją reikšmę.

## Matmenys seka modelį

Matmuo prisegtas prie dviejų kampų, ant kurių jis nustatytas (kampas: prie jo kampo ir dviejų jo briaunų tolimųjų galų; spindulys ar skersmuo: prie jo lanko ar apskritimo). Perkelkite, stumkite/traukite ar keiskite geometrijos dydį, o matmuo seka ir rodo naują ilgį. Jis lieka prisegtas, kai geometriją paverčiate grupe ar komponentu.

Jei galas nustatytas ne kampe (ant paviršiaus ar tuščioje vietoje) arba jo kampas ištrintas, tas galas lieka, kur buvo. Matmuo vis tiek matuoja, bet gali keisti dydį tik nuo kito galo.

## Matmenų šalinimas

- Vienas matmuo: pasirinkite jį ir spauskite {{key:Delete}}, arba spustelėkite jį su {{ui:Trintukas}}.
- Visi matmenys: nieko nepasirinkę, {{ui:Objekto informacija}} skiltyje spustelėkite {{ui:Ištrinti visus matmenis}}.

Matmenys įrašomi `.modelcraft` faile. Jie neeksportuojami į kitus formatus, kurie perduoda tik 3D modelį. Failas su matmenimis vis tiek atsidaro senesnėje ModelCraft versijoje, tik be jų.
