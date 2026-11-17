---
title: Trikčių šalinimas
summary: Simptomai, priežastys ir sprendimai – nuo tuščio 3D vaizdo iki importų netinkamu dydžiu – su ModelCraft rodomais pranešimais.
keywords: problema, bėda, klaida, neveikia, tuščias, webgl, grafika, lėta, pranešimas, importas nepavyko, netinkamas dydis, negalima pasirinkti, jutiklinis ekranas, klavišai neveikia, prarasti darbai
from: 6e7394be
---

## 3D vaizdas tuščias

**Simptomas:** ekrano vidurys lieka tuščias arba rodo tik fono spalvą, o spustelėjimas įrankiams nieko nedaro.

**Priežastis:** ModelCraft piešia naudodamas WebGL 2 – naršyklės 3D grafiką. Jo nėra, kai naršyklė sena, kai aparatinis spartinimas išjungtas arba kai grafikos tvarkyklę blokuoja.

**Sprendimas:**

:::chromium
1. Atidarykite naršyklės nustatymus ir ieškokite „grafikos spartinimas“.
2. Įjunkite „Naudoti grafikos spartinimą, kai pasiekiama“ ir paleiskite naršyklę iš naujo.
3. Jei jis jau įjungtas, adreso juostoje įveskite `chrome://gpu` (Edge naršyklėje – `edge://gpu`) ir sąraše ieškokite „WebGL2“. Jei ten nurodyta, kad išjungta, atnaujinkite grafikos tvarkyklę.
:::

:::firefox
1. Atidarykite **Nustatymai**, tada **Bendra**, ir slinkite iki „Našumas“.
2. Nuimkite žymėjimą nuo „Naudoti rekomenduojamus našumo nustatymus“, tada pažymėkite „Naudoti aparatinį spartinimą, kai pasiekiama“. Paleiskite Firefox iš naujo.
3. Jei vis tiek nepavyksta, adreso juostoje įveskite `about:support` ir skiltyje „Graphics“ („Grafika“) ieškokite WebGL 2.
:::

:::safari
Atnaujinkite macOS ir Safari. Naujausiose Safari versijose WebGL 2 visada įjungtas. Jei pakeitėte eksperimentines funkcijas **Safari**, tada **Nustatymai**, tada **Išplėstiniai** (arba **Funkcijų vėliavėlės**), nustatykite jas iš naujo.
:::

Darbiniame kompiuteryje, nuotolinio darbalaukio ar virtualioje mašinoje 3D grafiką gali blokuoti politika. Išbandykite kitą kompiuterį. Žr. [Naršyklės ir kompiuteriai](common:browsers).

## Klavišai neveikia arba rašo į laukelį

**Priežastis:** klaviatūros fokusas yra skydelio lauke: {{ui:Paviršiai}} sąraše srityje {{ui:Stilius}}, saulės nustatyme, lauke {{ui:Pavadinimas}} srityje {{ui:Objekto informacija}} arba vienetų pasirinkiklyje. Raidės ir rodyklių klavišai tada eina į tą lauką.

**Sprendimas:** spustelėkite 3D vaizde, tada vėl paspauskite klavišą. Klavišai taip pat neveikia, kol atidarytas dialogo langas.

## Įvedus skaičių nieko nevyksta

- **Dar nėra krypties.** Įvestas ilgis eina ta kryptimi, kuria žymeklis rodo nuo pirmo spustelėjimo. Šiek tiek pajudinkite žymeklį norima kryptimi, tada įveskite.
- **Netinkamas momentas.** Dauguma įrankių įvestą reikšmę priima tik po pirmo spustelėjimo: pirmiausia spustelėkite pirmą kampą, paviršių ar tašką, nuo kurio judinti. {{ui:Apskritimas}} ir {{ui:Daugiakampis}} prieš pirmą spustelėjimą priima kraštinių skaičių.
- **„Įveskite ilgį, pavyzdžiui, 3m, 10'6" arba 4m,3m.“** ModelCraft to neperskaitė. Patikrinkite, ar nėra dešimtainio kablelio (`2,5`): naudokite tašką.

## Pirmas kontūras prasideda ne ten jutikliniame ekrane

**Simptomas:** pirštu pirmas stačiakampis gerai, bet kitas stačiakampis, apskritimas ar linija prasideda ten, kur baigėsi ankstesnis prisilietimas, o ne ten, kur palietėte.

**Priežastis:** šios versijos klaida: jutiklinio ekrano atveju įrankis prisimena paskutinį prisikabinimo tašką iš ankstesnio gesto.

**Sprendimas:** prieš kiekvieną naują formą vėl bakstelėkite įrankio mygtuką įrankių juostoje. Tai paleidžia įrankį iš naujo, ir pirmas taškas atsiranda ten, kur palietėte.

## Redaguojant vieną grupę pasikeitė kita

**Simptomas:** nukopijavote grupę su {{ui:Perkelti}} ir {{key:Ctrl}}, atidarėte vieną kopiją ir ją redagavote, o kita kopija taip pat pasikeitė. {{ui:Struktūra}} rodo abi su tuo pačiu pavadinimu.

**Priežastis:** šioje versijoje grupės kopijavimas sukuria antrą tos pačios grupės įdėjimą, kaip ir komponento atveju. ModelCraft mygtukas {{ui:Padaryti unikalų}} siūlomas tik komponentams.

**Sprendimas:** pasirinkite kopiją, kurią norite pakeisti, spustelėkite {{ui:Sukurti komponentą}} srityje {{ui:Objekto informacija}}, tada {{ui:Padaryti unikalų}}. Ta kopija dabar turi savo turinį. Arba ją {{ui:Suskaidyti}}.

## Stumti/traukti nedaro to, ko tikėjotės

- **„Stumti/traukti veikia su paviršiumi. Spustelėkite paviršių.“** Spustelėjote briauną arba tuščią vietą. Laikykite žymeklį, kol paviršius paryškės, tada spustelėkite.
- **Paviršius yra grupės viduje.** Pirmiausia dukart spustelėkite grupę, kad ją atidarytumėte.
- **Langas nepramušė sienos.** Stačiakampis turi būti nubraižytas ant sienos paviršiaus, o ne priešais jį, ir sienai reikia galinio paviršiaus. Žr. [Padaryti angą per sieną](topic:openings#if-it-did-not-cut-through).
- **Dvi dėžės persidengia, bet nesusilieja.** Vientisi kūnai, įstumti vienas į kitą, šioje versijoje nepjauna ir nesujungia vienas kito.

## Linija ar forma nesudarė paviršiaus

Paviršius užpildomas tik tada, kai briaunos uždaro plokščią kontūrą. Patikrinkite, ar paskutinis taškas prisikabino prie pirmo („Galinis taškas“) ir ar visos briaunos guli vienoje plokštumoje. Kontūras, kuris šiek tiek išeina iš plokštumos, lieka linijomis. Nubraižykite vieną iš jo briaunų iš naujo, prisikabindami prie kampų.

## Negaliu pasirinkti ar ištrinti paviršiaus

- Su {{ui:Pasirinkti}} spustelėjimas arti briaunos paima briauną. Spustelėkite arčiau paviršiaus vidurio.
- {{ui:Trintukas}} paviršių nepasirenka. Pasirinkite paviršių ir paspauskite {{key:Delete}}, arba ištrinkite vieną iš jo briaunų.
- Jei jis priklauso grupei ar komponentui, spustelėjimas pasirenka visą daiktą. Dukart spustelėkite, kad atidarytumėte.

## „Pirmiausia pasirinkite, ką perkelti, arba spustelėkite ant to.“

{{ui:Perkelti}}, {{ui:Sukti}} ir {{ui:Keisti mastelį}} reikia, ką apdoroti: pirmiausia pasirinkite, arba paleiskite įrankį spustelėdami patį daiktą (ne tuščią vietą ar pagalbinę liniją).

## „Pirmiausia pasirinkite geometriją (vilkite langą arba trigubai spustelėkite, kad pasirinktumėte viską, kas susiję).“

{{key:G}} ir {{key:Shift+G}} reikia pasirinkimo. Pagalbinių linijų negalima sugrupuoti.

## Rodyklių klavišai sukasi vietoj užrakinimo

Užrakinimai veikia tik po pirmo spustelėjimo braižymo ar redagavimo įrankiu. {{ui:Stumti/traukti}} neturi užrakinimų, o {{ui:Sukti}} metu jie nekeičia posūkio. Kitu metu rodyklių klavišai sukasi vaizdą.

## Esc viso ekrano režime

Viso ekrano režime naršyklė gali panaudoti pirmą {{key:Esc}}, kad išeitų iš viso ekrano. Paspauskite {{key:Esc}} dar kartą, kad atšauktumėte įrankį.

## Nėra vidurinio mygtuko

Paspauskite {{key:O}} ({{ui:Sukti vaizdą}}) ir vilkite, arba naudokite rodyklių klavišus. Žr. [Sukimas, slinkimas ir mastelio keitimas](topic:orbit-pan-zoom#without-a-middle-button).

## Importavimas

| Pranešimas | Ką daryti |
|---|---|
| „ModelCraft importuoja SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG ir DXF. … nėra nė vienas iš jų.“ | Eksportuokite modelį iš kitos programos viename iš šių formatų |
| „Šis failas didesnis nei 300 MB.“ | Supaprastinkite arba padalinkite modelį kitoje programoje |
| „…per didelis, kad čia būtų modeliuojamas (daugiau nei 2 milijonai viršūnių).“ | Tas pats |
| „Šiam .gltf failui reikia "…"…“ | Įkelkite `.gltf` kartu su jo `.bin` ir tekstūrų failais arba atidarykite `.glb` versiją |
| „Šiam glTF failui reikia … plėtinio, kurio ModelCraft dar neskaito.“ | Eksportuokite iš naujo iš kitos programos be to plėtinio (pavyzdžiui, KTX2 tekstūrų) |
| OBJ atvyksta be spalvų ar tekstūrų | Įkelkite `.obj` kartu su jo `.mtl` ir paveikslėliais |
| „Šis Alembic failas naudoja senąjį HDF5 išdėstymą…“ | Įrašykite jį iš naujo kitoje programoje kaip Ogawa Alembic failą |
| FBX atvyksta be tekstūrų | Įkelkite `.fbx` kartu su jo tekstūrų paveikslėliais arba eksportuodami įterpkite mediją |
| „Šis FBX failas yra versijos …, kurios ModelCraft neskaito“ | Eksportuokite iš naujo kaip FBX 2011 ar naujesnį |
| STL ar PLY atvyksta 1 000 kartų per didelis ar per mažas | STL skaitomas milimetrais, o PLY – metrais: pakeiskite mastelį (žr. [Sukti ir keisti mastelį](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| „Tai nėra Collada (.dae) failas…“ arba „…neteisingai suformuotas XML…“ | Failas sugadintas arba nėra Collada. Eksportuokite jį iš naujo |
| „Šiame Collada faile nėra geometrijos, kurią ModelCraft gali importuoti.“ | Jame yra tik kameros, šviesos ar nuorodos į kitus failus |
| „Tai dvejetainis DXF. Įrašykite jį kaip ASCII DXF ir bandykite dar kartą.“ | Įrašykite iš naujo iš CAD programos kaip ASCII |
| „Tai nėra DWG brėžinys…“ | Failas nėra DWG arba jis sugadintas |
| „Šio brėžinio nepavyko perskaityti (…). Jis gali būti sugadintas arba įrašytas DWG versija, kurios skaitytuvas nepalaiko…“ | Skliaustuose nurodyta priežastis. Iš CAD programos įrašykite jį kaip DXF arba kaip DWG nuo AutoCAD 2000 iki 2018 |
| „Šis brėžinys nutolęs daugiau nei 10 000 km nuo savo pradžios taško…“ | Perkelkite brėžinį arti 0,0 CAD programoje |

### Importas netinkamo dydžio arba guli ant šono

- **OBJ:** OBJ neturi vieneto; ModelCraft skaito metrais. Milimetrų modelis atvyksta 1000 kartų per didelis: [pakeiskite jo mastelį](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) `0.001`; colių modelį – `0.0254`.
- **OBJ guli ant šono:** ModelCraft tikisi OBJ failų su Y aukštyn. Failas, įrašytas su Z aukštyn, atvyksta gulintis. Pasukite jį 90° aplink raudoną ašį: spustelėkite {{ui:Sukti}} centrą ant paviršiaus, nukreipto išilgai raudonos, arba atidarykite failą jo programoje ir eksportuokite su Y aukštyn.
- **DWG ar DXF:** dialoge „Brėžinio vienetai“ pasirinkote neteisingą vienetą. Atšaukite ir importuokite iš naujo.

## Failų atidarymas

| Pranešimas | Ką daryti |
|---|---|
| „Tai nėra ModelCraft modelis (tai nėra JSON).“ | Kitiems formatams naudokite {{ui:Importuoti}} |
| „Tai nėra ModelCraft failas, kurį galime atidaryti: …“ | Failas sugadintas arba pakeistas ranka |
| „Šį modelį įrašė naujesnis ModelCraft…“ | Atidarykite jį naujesnėje versijoje |
| „Šis failas didesnis nei 200 MB.“ | Modelis per didelis, kad čia būtų atidarytas |

## Prarasti darbai

ModelCraft pats į failą neįrašo. Kai uždarote ar perkraunate skirtuką su neįrašytais pakeitimais, naršyklė pirmiausia klausia („Palikti svetainę?“ arba „Perkrauti svetainę?“); pasirinkite likti ir įrašyti. Naujas ir {{ui:Atidaryti}} taip pat klausia („Neįrašyti pakeitimai“). Jei naršyklė ar kompiuteris užstrigo, vėl atidarykite ModelCraft toje pačioje naršyklėje: jis pasiūlo grąžinti neįrašytą darbą („Atkurti jūsų darbą?“; žr. [Atkurti darbą](common:recover)). Dažnai įrašykite su {{key:Mod+S}}.

## Mano atsisiuntimų aplankas prisipildo kopijomis

Kiekvienas įrašymas yra naujas atsisiuntimas, pavadintas `Untitled (1).modelcraft`, `Untitled (2).modelcraft` ir t. t. Ištrinkite senus arba nustatykite naršyklę klausti, kur įrašyti kiekvieną failą, ir patys perrašyti seną failą. Žr. [Atidarymas, įrašymas, importas ir eksportas](topic:files#save-a-model).

## Lėtai veikia

- Kiekvienas atšaukimo žingsnis saugo modelio kopiją ([tinklas](topic:meshes) saugo tik tai, kas pasikeitė), todėl labai dideliame importe su stumti/traukti geometrija kiekvienas pakeitimas užtrunka ilgiau. Suskaidykite arba ištrinkite tai, ko nereikia, įrašykite ir atidarykite iš naujo: atidarymas taip pat išvalo atšaukimo istoriją.
- Saulės šešėliai kainuoja daugiausia. Modeliuodami nuimkite žymėjimą nuo {{ui:Saulės šešėliai}}.

## Nėra šešėlių

{{ui:Saulės šešėliai}} išjungti, saulė nusileidusi jūsų pasirinktu laiku („Šiuo metu saulė nusileidusi.“), arba stilius yra {{ui:Karkasas}}, kuris šešėlių nepiešia.

## „Ši naršyklė neleido įjungti viso ekrano.“

Kai kurios naršyklės ir kai kurie įterpti vaizdai viso ekrano neleidžia. Naudokite pačios naršyklės viso ekrano režimą ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft neatsidaro be ryšio

ModelCraft atsidaro neprisijungus tik tada, jei jis buvo įrašytas naudoti neprisijungus toje naršyklėje: programos juostos mygtukas turi rodyti {{ui:Paruošta neprisijungus}}. Atidarykite jį prisijungę ir spustelėkite {{ui:Įrašyti neprisijungus}}. Jei mygtuke rodoma {{ui:Nepavyko įrašyti}}, spustelėkite jį dar kartą geresniame ryšyje; {{ui:Naudojimas neprisijungus negalimas}} reiškia, kad šis langas (privatus langas ar valdomas kompiuteris) negali išsaugoti kopijos. Žr. [Darbas neprisijungus](common:offline).
