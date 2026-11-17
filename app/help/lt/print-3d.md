---
title: Paruoškite modelį 3D spausdinimui
summary: Patikrinkite, ar modelis uždaras ir nukreiptas teisingai, peržiūrėkite jo dydį, pagrindą ir nuolydžius, ištaisykite klaidas ir atsisiųskite jį kaip STL ar 3MF pjaustyklei.
keywords: 3D spausdinimas, spausdintuvas, spausdinti, pjaustyklė, stl, 3mf, sandarus, uždaras, daugiakontūris, kietasis kūnas, skylės, viduje išorėn, nuolydis, atramos, pagrindas, stalas, milimetrai, eksportas, taisyti, tuštinti, stalo dydis, pradedantysis, sienelės storis, spausdinimo įrankiai
from: 948e19af
---

3D spausdintuvo pjaustyklei reikia uždaros formos: be skylių, kiekvienas paviršius nukreiptas į išorę, nieko nekerta pats savęs. {{ui:Eksportuoti}} › {{ui:Tikrinti, ar tinka 3D spausdinimui (STL arba 3MF)…}} patikrina būtent tai, prieš atsisiunčiant failą.

## Patikrinkite ir atsisiųskite

1. Pasirinkite, ką norite spausdinti: vieną ar kelias grupes ar komponentus arba kai kuriuos paviršius. Jei nieko nepažymėta, spausdinama viskas, kas matoma.
2. Spustelėkite {{ui:Eksportuoti}} grupėje {{ui:Failas}}, tada {{ui:Tikrinti, ar tinka 3D spausdinimui (STL arba 3MF)…}}.

   Dialogas prasideda viena eilute: „Paruošta spausdinti“, kiek dalykų reikia ištaisyti prieš spausdinant, arba kiek jų reikia peržiūrėti pirma. Kiekviena problema turi tris dalis: kas negerai, kodėl tai svarbu ir ką daryti. Toliau pateikiamas dydis milimetrais, tūris, trikampių skaičius ir jūsų spausdintuvo stalas.

3. Jei dialogas išvardija dalykus, kuriuos reikia ištaisyti, spustelėkite {{ui:Ištaisyti, ką galima ištaisyti}} (žr. žemiau). Patikra vėl paleidžiama savaime.
4. Spustelėkite {{ui:Atsisiųsti 3MF}} arba {{ui:Atsisiųsti STL}}.

Spausdinama tai, ką matote: paslėpti paviršiai, paslėptos grupės ir komponentai bei viskas paslėptoje žymoje neįtraukiama. Dydžiai visada milimetrais – vienetu, kurio tikisi pjaustyklės, nepriklausomai nuo to, kokiais vienetais rodomas modelis.

:::tip
Pirmenybę teikite 3MF, kai jūsų pjaustyklė jį skaito: jis išsaugo spalvas ir vienetus. STL neturi nei vieno, o pjaustyklės daro prielaidą, kad matmenys milimetrais.
:::

## Ką tikrina patikra

Tai sustabdo spausdinimą arba jį sugadina ir lemia, kad dialogas rodys „Neparuošta spausdinti“:

| Problema | Ką tai reiškia | Ką daryti |
|---|---|---|
| Paviršius tik vienoje pusėje | Skylė: kraštinė turi paviršių vienoje pusėje ir nieko kitoje | Nubrėžkite trūkstamą paviršių (linija per tarpą dažnai jį uždaro) arba naudokite {{ui:Taisyti}} (žemiau) |
| Dalijasi trys ar daugiau paviršių | Paviršiai susitinka briaunoje ar sienoje kietojo kūno viduje | Ištrinkite vidinį paviršių |
| Paviršiai nukreipti priešingomis kryptimis | Vieni paviršiai nukreipti į vidų, kiti į išorę | Pažymėkite paviršius, nukreiptus į vidų, ir spustelėkite {{ui:Apversti paviršių}} skiltyje {{ui:Objekto informacija}} |
| Išvirkščiai | Visa uždara dalis nukreipta į vidų | Pažymėkite jos paviršius ir apverskite juos |
| Kerta pats save | Viena dalis lenkiasi per save | {{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Susikirtimas su modeliu}}, tada ištrinkite tai, kas viduje. Žr. [Susikertantys paviršiai](topic:intersect) |

Tai įspėjimai: modelis atsispausdins, bet pirmiausia pažvelkite.

- **Atskiros dalys persidengia** arba **liečiasi paviršiais**: pjaustyklės paprastai jas sujungia į vieną. Dėl švaresnio failo sujunkite jas su {{ui:Kietieji kūnai}} › {{ui:Sujungti}}. Žr. [Kietųjų kūnų įrankiai](topic:solids).
- **Apačioje nieko nėra plokščio**: pasukite modelį taip, kad paviršius gulėtų ant stalo, kitaip pjaustyklė pridės atramas ar pagrindą.
- **Nukrypsta daugiau kaip 45° nuo vertikalės**: tiems paviršiams reikia atramos. Dialogas nurodo, kiek paviršiaus to reikia.
- **Mažiau nei 1 mm per plotį**: tikriausiai sumodeliuota netinkamu vienetu. Patikrinkite vienetą būsenos juostoje.

Tuščia dalis (uždarytas apvalkalas viduje kito) yra tinkama: jos paviršiai nukreipti į tuštumą, o jos tūris atimamas.

## Ištaisykite problemas

Skiltyje **Kur yra problemos** dialogas nurodo kiekvieną grupę ar komponentą, kuriame kas nors negerai (laisvi paviršiai, neįtraukti į grupę, išvardijami kaip „Paviršiai ne grupėje“), ir ką jame reikia ištaisyti. Komponentas, įdėtas kelis kartus, išvardijamas vieną kartą: jį ištaisius, ištaisomos visos kopijos.

- {{ui:Rodyti}} atidaro tą grupę ir pažymi kraštines bei paviršius, kurie yra neteisingi, kad jie būtų paryškinti.
- {{ui:Ištaisyti, ką galima ištaisyti}} ištaiso visus iš karto: uždaro skyles, kurių kraštinės guli plokščiai, pašalina paviršius viduje figūros ir klaidžiojančias kraštines bei apverčia paviršius teisinga kryptimi. Tai vienas žingsnis: {{key:Mod+Z}} jį anuliuoja. Tada patikra paleidžiama iš naujo ir parodo, kas liko.

Ko ji negali ištaisyti (skylė, kurios kraštinės neguli plokščiai, dalis, kertanti pati save), lieka sąraše su nurodymu, ką daryti rankiniu būdu. {{ui:Taisyti}} skiltyje **Spausdinimo įrankiai** eina toliau: uždaro skyles, kurios nėra plokščios, pašalina klaidžiojančius gabalus ir dvigubus paviršius bei išvardija kiekvieną pataisymą. Žr. [Atramos, sienelės storis, tuštinimas ir taisymas](topic:print-tools#repair). Taip pat galite taisyti po vieną grupę: pažymėkite ją, tada naudokite {{ui:Rodyti problemas}} ir {{ui:Taisyti}} skiltyje {{ui:Objekto informacija}}. Žr. [Kietųjų kūnų įrankiai](topic:solids).

## Tuščia dalis

{{ui:Ištuštinti}} skiltyje **Spausdinimo įrankiai** ištuština dalį iki nurodyto sienelės storio, su nuleidimo skylėmis ten, kur spustelėjate. Žr. [Ištuštinti](topic:print-tools#hollow).

Tuštumą galite nubrėžti ir patys: uždara grupė dalies viduje, jos nelietianti, su visais paviršiais apverstais, kad jie būtų nukreipti į tuštumą. Patikra ją skaičiuoja kaip tuštumą ir atima jos tūrį; ji neišvardijama kaip kažkas, ką reikia ištaisyti.

## Jūsų spausdintuvo stalas

Pasirinkite savo spausdintuvo stalo dydį {{ui:Parametrai}} › {{ui:ModelCraft}} › {{ui:3D spausdintuvo stalas}}. Tada patikra įspėja, kai modelis didesnis už stalą, pasuktą bet kuria kryptimi. Žr. [Parametrai](topic:settings#3d-printer-bed).

## Spausdinimo įrankiai

Dialogo išvadų apačioje **Spausdinimo įrankiai** atveria {{ui:Atramų peržiūra}} (kur dedamos atramos ir kiek apytiksliai), {{ui:Sienelės storis}} (per plonos sienelės spausdinimui), {{ui:Ištuštinti}} ir {{ui:Taisyti}}. Žr. [Atramos, sienelės storis, tuštinimas ir taisymas](topic:print-tools). {{ui:Padalyti spausdinimui}} supjausto modelį, per didelį stalui, į dalis su jungtimis ir sunumeruotais sujungimais: žr. [Padalinkite didelį modelį spausdinimui](topic:print-split).

## Netikrinama

Patikra nepjausto: smulkias detales, kurių jūsų antgalis negali nubrėžti, ir tikras atramas tvarko jūsų pjaustyklė. Žr. [Dar neįgyvendinta](topic:not-built-yet#3d-printing).
