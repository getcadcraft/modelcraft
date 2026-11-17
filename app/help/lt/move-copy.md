---
title: Perkelti, kopijuoti ir kurti masyvą
summary: Perkelkite objektus spustelėdami arba pagal tikslų atstumą, kopijuokite juos su modifikavimo klavišu ir sukurkite vienodais tarpais išdėstytų kopijų eilę.
keywords: perkelti, kopijuoti, dubliuoti, masyvas, eilė, tarpas, dalinti, poslinkis, tempti, stulpeliai, kartoti, kelios kopijos
from: 280245fc
---

{{ui:Perkelti}} ({{key:M}}) perkelia viską, kas pažymėta, iš vieno taško į kitą. Laikant modifikavimo klavišą, perkėlimas tampa kopijavimu, o po kopijavimo galite įvesti, kiek dar norite kopijų.

## Perkelti ką nors

1. Pažymėkite, ką norite perkelti (žr. [Pasirinkti objektus](topic:select)). Jei nieko nepažymėta, {{ui:Perkelti}} perima objektą, į kurį spustelėjote.
2. Paspauskite {{key:M}}.
3. Spustelėkite tašką, iš kurio perkelti. Pasirinkite ką nors reikšmingo, pavyzdžiui kampą: šis taškas atsidurs tiksliai ten, kur spustelėsite kitą kartą.
4. Judinkite žymeklį. Pažymėtas objektas seka paskui jį. Jis prisitraukia prie taškų, kraštinių ir raudonos, žalios bei mėlynos krypties, kaip tai daro linija.
5. Spustelėkite vietą, kur turi atsidurti taškas, arba įveskite atstumą ir paspauskite {{key:Enter}}.

   Būsenos juostos patarimas grįžta į „Spustelėkite tašką, iš kurio perkelti…“ kitam perkėlimui.

Įvestas atstumas galioja kryptimi, į kurią rodote. Taip pat galite įvesti tikslų poslinkį, `<2m,0,0>` (2 m palei raudoną), arba tikslią paskirties vietą pasirinktam taškui, `[0,0,0]` (pradžios taškas). Žr. [Įveskite tikslius dydžius](topic:value-box).

Norėdami perkelti tik viena ašimi, po pirmo spustelėjimo paspauskite rodyklių klavišą: {{key:Right}} užfiksuoja raudoną kryptį, {{key:Left}} – žalią, {{key:Up}} – mėlyną. Tam pačiam rodyklių klavišui paspaudus dar kartą, fiksavimas atšaukiamas.

## Perkeliant dalį formos ją ištempiate

Negrupuota geometrija yra susijusi. Jei pažymite vieną paviršių ar kelias kraštines ir juos perkeliate, prie jų prijungti paviršiai ištempiami kartu. Perkelkite dėžės viršutinį paviršių į šoną – dėžė pasvirs; perkelkite stogo kraštinę – stogo nuolydis pasikeis. Paviršiai, kurie nebegali likti plokšti, suskaldomi į trikampius.

Norėdami perkelti visą objektą nieko netempdami, pirmiausia pažymėkite jį visą (trigubai spustelėkite), o dar geriau – paverskite jį grupe arba komponentu (žr. [Grupės ir komponentai](topic:groups-components)).

## Kopijuoti ką nors

1. Pažymėkite, ką norite kopijuoti.
2. Paspauskite {{key:M}}.
3. Laikykite {{key:Ctrl}} (arba {{key:Alt}}) ir spustelėkite tašką, iš kurio perkelti. Mac kompiuteryje tą patį atlieka {{key:Mod}} arba {{key:Alt}}. Patarimas rodo „Ctrl perkelia vietoj to“, o tai reiškia, kad kopijuojate.

   Po pirmo spustelėjimo taip pat galite paspausti ir atleisti {{key:Ctrl}} arba {{key:Alt}}, kad perjungtumėte tarp perkėlimo ir kopijavimo.

4. Spustelėkite vietą, kur turi atsidurti kopija, arba įveskite atstumą ir paspauskite {{key:Enter}}.

   Originalas lieka savo vietoje, o kopija pažymėta.

## Kopijuoti, iškirpti, įklijuoti ir dubliuoti

- {{key:Mod+C}} kopijuoja pažymėtą dalį, {{key:Mod+X}} iškerpa ją (nukopijuoja ir ištrina), {{ui:Kopijuoti}} ir {{ui:Įklijuoti}} taip pat yra įrankių juostos {{ui:Redagavimas}} grupės mygtukai, o šalia jų esantis {{ui:Daugiau}} turi iškirpimo, įklijavimo toje pačioje vietoje ir dubliavimo komandas.
- {{key:Mod+V}} įklijuoja: kopijos kontūras seka žymeklį, prisitraukdamas kaip bet kuris įrankis, o spustelėjimas padeda ją taip, kad jos apatinis kampas būtų toje vietoje. {{key:Esc}} atšaukia.
- {{key:Mod+Shift+V}} įklijuoja toje pačioje vietoje, tiksliai ten, kur buvo kopija – naudinga perkeliant ką nors į atidarytą grupę.
- {{key:Mod+D}} ({{key:Shift+D}} Modeler stiliuje) dubliuoja: kopija sukuriama ir iš karto seka žymeklį; spustelėkite, kad ją padėtumėte, įveskite atstumą arba paspauskite {{key:Esc}}, kad ją atmestumėte. Iš karto po to įveskite `3x`, kad gautumėte dar kelias kopijas iš eilės.

Įklijuota grupė tampa nauja grupe. Įklijuotas komponentas yra dar vienas to paties komponento egzempliorius, todėl redaguojant vieną, pasikeičia visi. Kopijos taip pat įklijuojamos į kitą ModelCraft kortelę šioje naršyklėje (ten jos įeina kaip nauji apibrėžimai).

## Kopijų eilė

Iškart po kopijavimo, kol {{ui:Perkelti}} vis dar yra įrankis:

- Įveskite `3x` (arba `*3`) ir paspauskite {{key:Enter}}, kad gautumėte tris kopijas iš eilės, kiekvieną tuo pačiu tarpu kaip pirmąją kopiją. Gausite tris naujas kopijas be originalo.
- Įveskite `/3` ir paspauskite {{key:Enter}}, kad dalintumėte: trys kopijos tolygiai išdėstomos nuo originalo iki vietos, kur padėjote pirmą kopiją; paskutinė atsiduria toje vietoje. Naudokite tai ruožui užpildyti: padėkite vieną kopiją tolimame gale, tada dalinkite.

Iškart galite įvesti kitą skaičių: `5x` pakeičia `3x` eilę. Patarimas primena: „Nukopijuota. Įveskite 3x, kad gautumėte daugiau kopijų iš eilės, arba /3, kad padalintumėte atstumą.“

### Pavyzdys: stulpai kas 6 metrus

1. Sukurkite stulpą ir paverskite jį komponentu ({{key:G}}), kad vėliau visos kopijos keistųsi kartu.
2. Paspauskite {{key:M}}, laikykite {{key:Ctrl}} ir spustelėkite stulpo pagrindo kampą.
3. Judėkite palei raudoną ašį ir įveskite `6m`, tada {{key:Enter}}.
4. Įveskite `4x` ir {{key:Enter}}. Turite penkis stulpus, išdėstytus kas 6 m.

## Verta žinoti

- Prieš antrą spustelėjimą paspauskite {{key:Esc}}, kad atšauktumėte; viskas grįš į buvusią vietą.
- {{ui:Perkelti}} veikia grupėje, kurią redaguojate. Norėdami perkelti visą grupę, pirmiausia ją uždarykite ir pažymėkite iš išorės.
- Kai įjungtas **Susidūrimas** (apačioje dešinėje ir [ModelCraft parametruose](topic:settings#solids-stop-where-they-touch)), perkėlimas sustoja tada, kai pažymėtas objektas liečia kitą kietąjį kūną, o ne prasiskverbia per jį. Spustelėkite {{ui:Susidūrimas}}, kad jį išjungtumėte perkėlimui, kuris turi eiti per kitą objektą.
- Norėdami įdėti kopiją į kitą grupę: nukopijuokite ją, atidarykite kitą grupę ir įklijuokite ({{key:Mod+Shift+V}} išlaiko tą pačią vietą).
