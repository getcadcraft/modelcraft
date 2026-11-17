---
title: Animuoti bet kurią savybę, formuoti kreivėmis ir maišyti klipus
summary: Darbo sritis Animuoti įrašo objekto vietą, pasukimą ir dydį, lempos ryškumą, sklaidą ir spalvą, objektyvą bei tinklo formos raktus; karkasai lenkia tinklą kaulais ir nudažytais svoriais; IK ir apribojimai verčia kaulus ir objektus pasiekti, žiūrėti į, kopijuoti, likti ribose, kabėti ar sekti kitus; kietieji kūnai krinta, kraunasi ir susiduria, o paskui įdeginami į raktus; valdikliai nustato reikšmę pagal kitus; laiko juostos kreivių rodinys formuoja kiekvieną pokytį Bézier rankenėlėmis ir ciklais, o klipų rodinys išsaugo animacijas kaip veiksmus, kuriuos galima vėl padėti ir sumaišyti.
keywords: fizika, kietasis kūnas, kietieji kūnai, simuliacija, simuliuoti, kristi, numesti, gravitacija, susidurti, susidūrimas, krauti, atšokimas, trintis, įdeginti, įdegtas, ik, atvirkštinė kinematika, apribojimas, apribojimai, žiūrėti į, sekti taikinį, nukreipti, kopijuoti išdėstymą, kopijuoti vietą, kopijuoti pasukimą, riboti pasukimą, ribos, vaikinis objektas, tėvinis objektas, sekti kelią, kelias, polius, fabrik, grandinė, karkasas, karkasai, kaulas, kaulai, skeletas, oda, odos apvalkalas, svoriai, svorių dažymas, viršūnių grupės, automatiniai svoriai, kaulų šilumos lygis, poza, pozos režimas, dviguba kvaternionų, tiesinis mišinys, formos raktai, formos raktas, morfavimas, morfai, taikinio formos, mišrios formos, veido išraiška, valdiklis, valdikliai, išraiškos, animacijos darbo sritis, animuoti, animacija, raktinis kadras, raktas, raktai, savybė, savybės, pertvarka, vieta, pasukimas, dydis, lempa, šviesa, ryškumas, spalva, objektyvas, regėjimo kampas, fov, grafikų redaktorius, kreivės, kreivė, bezier, rankenėlės, liestinė, interpoliacija, ciklas, ciklai, kartoti, ciklas, poslinkis, dope sheet, pasirinkti raktus, langelio pasirinkimas, kopijuoti raktus, įklijuoti raktus, tempti raktus, keisti raktų mastelį, klipai, veiksmai, nla, maišymas, mišinys, įtaka, paslėpti
from: 16d8e12f
---

[Laiko juosta](topic:animation) perkelia kamerą ir visas grupes bei komponentus. Darbo sritis **Animuoti** įrašo raktais daugiau nei tai, o laiko juosta turi dar du rodinius, skirtus formuoti ir pakartotinai naudoti tai, ką įrašėte raktais.

## Atidarymas

Įrankių juostos darbo sričių sąraše pasirinkite {{ui:Animuoti}}. Po vaizdu atsidaro laiko juosta, įrankių juostoje rodomos animavimo grupės ({{ui:Raktai}}, {{ui:Groti}}, {{ui:Laiko juosta}}), o dešinėje esantis skydelis rodo, ką galima įrašyti raktu grojimo galvutės vietoje.

## Savybės įrašymas raktu

Skydelyje, grojimo galvutės vietoje, rodoma:

- **Pasirinktas objektas**: jo {{ui:Dėti}}, {{ui:Pasukimas (°)}} ir {{ui:Dydis}}, po tris skaičius kiekvienam. Įveskite skaičių ir paspauskite {{key:Enter}}: jis įrašomas grojimo galvutės vietoje, o objektas ten ir pereina. Rombas šalia eilutės įrašo dabartinę reikšmę; užpildytas rombas reiškia, kad grojimo galvutės vietoje jau yra raktas.
- **Lempos**: kiekvienos lempos {{ui:Ryškumas (lm)}}, {{ui:Sklaida (°)}} (prožektorių lempos) ir {{ui:Spalva}}.
- **Kamera**: {{ui:Objektyvo kampas (°)}}, skirtas keisti mastelį, kai kamera juda.

{{ui:Pertvarkos raktas}} (arba {{key:I}}) įrašo visų pasirinktų grupių ar komponentų vietą, pasukimą ir dydį iš karto; {{ui:Raktas kamerai}} (arba {{key:K}}) įrašo kamerą. Kai įjungtas {{ui:Automatinis raktas}}, grupė, kurios vieta, pasukimas ir dydis įrašomi tokiu būdu, gauna naują raktą kiekvieną kartą, kai ją perkeliate.

Pasukimai – tai trys kampai: apie X, tada Y, tada Z. Pasukimas, įrašytas daugiau nei 180°, tęsiasi ta pačia kryptimi (190° lieka 190°, o ne −170°), todėl ratas gali suktis kelis kartus.

:::tip
Grupė, įrašyta su {{ui:Pasirinktas raktas}} laiko juostoje, turi viso išdėstymo raktus. Kreivės mygtukas jos eilutėje paverčia juos vietos, pasukimo ir dydžio kreivėmis (tas pats išdėstymas kiekviename rakte), kad galėtumėte jas formuoti rodinyje {{ui:Kreivės}}.
:::

## Formos raktai (morfavimas)

**Formos raktas** – tai kitas to paties [tinklo](topic:meshes) formos variantas: šypsena veide, durų išsipūtimas, sulenktas lapas. Jo slankiklis maišo tinklą nuo esamos formos (0) iki tos formos (1); keli raktai sumuojami.

1. Animuoti darbo srityje pasirinkite tinklą: skydelyje rodomi jo {{ui:Formos raktai}}.
2. Spustelėkite {{ui:Pridėti formos raktą}}. ModelCraft perjungia į [tinklo darbo sritį](topic:mesh-edit), kur redaguojamas naujas raktas: perkelkite taškus, ištempkite, formuokite – pakeiskite tinklą į norimą formą.
3. Grįžkite į {{ui:Animuoti}} ir spustelėkite {{ui:Atlikta}}. Tinklas grįžta į pradinę būseną, o raktas išlaiko jūsų pakeitimą.

Tada vilkite rakto slankiklį (arba įveskite reikšmę), kad jį įmaišytumėte. Rombas įrašo reikšmę grojimo galvutės vietoje, todėl raktas gali laikui bėgant didėti ir silpti; kai jis turi takelį, nauja reikšmė įrašoma grojimo galvutės vietoje. Pieštukas vėl redaguoja rakto formą (tinklas ją rodo visą iki {{ui:Atlikta}}; {{ui:Atšaukti}} palieka raktą, kaip buvo), akis išjungia raktą, šiukšliadėžė jį pašalina.

Viršūnė, kurią pridedate redaguodami raktą, priklauso pačiam tinklui: ji lieka ten, kur ją padėjote, visose formose.

:::note
Formos raktai keičia tinklą prieš jo [modifikatorius](topic:modifiers): Subdivision modifikatorius sulygina sumaišytą formą. Atvaizduotuose paveikslėliuose ir vaizdo įrašuose raktai rodomi kiekviename kadre.
:::

## Karkasai: kaulai, lenkiantys tinklą

**Karkasas** – tai kaulų rinkinys [tinklo](topic:meshes) viduje. Pozuokite kaulus, o tinklas seks paskui, kiekvienas taškas tiek, kiek nurodo jo **svoriai**.

1. Animuoti darbo srityje pasirinkite tinklą ir skydelyje spustelėkite {{ui:Pridėti armatūrą}} (arba {{ui:Pridėti kaulą}} grupėje {{ui:Karkasas}}): pirmasis kaulas eina per tinklo vidurį nuo jo pagrindo.
2. Pasirinkus kaulą, {{ui:Pridėti antrinį kaulą}} prideda kitą nuo jo galo. Skydelyje nustatykite bet kurio kaulo {{ui:Galva}}, {{ui:Galas}}, {{ui:Posūkis (°)}} ir tai, {{ui:Kabo nuo}}; kaulas, kabantis nuo kito, juda kartu su juo. Nuimkite žymėjimą nuo {{ui:Judina tinklelį}}, jei kaulas tik vairuoja kitus.
3. Spustelėkite {{ui:Automatiniai svoriai}}: kiekvienas kaulas perima artimiausius taškus, o įtaka sklandžiai pasiskirsto per tinklą, todėl taškai tarp dviejų kaulų dalijasi ja. {{ui:Tik artimiausi kaulai}} – greitesnis, griežtesnis padalijimas.

**Pozuokite** kaulus su {{ui:Poza}} ({{key:P}}): spustelėkite kaulą, kad jį pasirinktumėte, vilkite, kad pasuktumėte apie rodinio ašį, o vilkimas su {{key:Shift}} jį perkelia. Arba įveskite jo {{ui:Dėti}}, {{ui:Pasukimas (°)}} ir {{ui:Dydis}} skiltyje {{ui:Poza}}; pasukimai matuojami pagal paties kaulo ašis, skaičiuojant nuo jo ramybės padėties. Rombai ir {{ui:Įrašyti visą pozą raktiniais kadrais}} įrašo pozą grojimo galvutės vietoje; kai kaulas jau turi raktų, jį pozuojant įrašymas vyksta ten pat. {{ui:Atstatyti šį kaulą}} ir {{ui:Atstatyti pozą}} grąžina kaulus į ramybės padėtį.

**Dažyti svorius** ({{key:W}}) pasirinktam kaului: tinklas rodomas ramybės būsenoje, kiekvienas paviršius nudažomas pagal tai, kiek jo laiko šis kaulas – raudona reiškia visą, mėlyna – nieko. Dažykite, kad pridėtumėte įtaką ({{key:Mod}} ją atima, {{key:Shift}} sulygina); {{ui:Dydis (px)}} ir {{ui:Stiprumas}} nustato teptuką. Su {{ui:Kiekvieno taško svoriai tesudaro 1}} suteikus daugiau svorio vienam kaului, kiti atitinkamai praranda. Kiekvienas brūkšnys yra vienas modelio anuliavimo žingsnis.

{{ui:Oda}} nustato, kaip juda tarp kaulų esantis taškas: {{ui:Tiesinis (greitas)}} sumaišo kaulų judesius ir šiek tiek suspaudžia sulenktą sąnarį; {{ui:Dviguba kvaternionų (išlaiko tūrį sąnariuose)}} vietoj to pasuka tašką apie sąnarį, todėl alkūnė ar kelias išlaiko storį (tuomet kaulo {{ui:Dydis}} neištempia odos).

:::note
Pirmiausia taikomi formos raktai, po jų karkasas, o paskui [modifikatoriai](topic:modifiers). Rodinys, paveikslėliai ir vaizdo įrašai rodo pozuotą tinklą; tinklo svoriai įrašomi kartu su juo, o kaulai ir jų poza – kartu su animacija.
:::

## IK ir apribojimai

**Apribojimas** perkelia kaulą ar objektą pagal taisyklę, atlikdamas tai po jo raktų. Pasirinkite objektą (o karkase – kaulą) ir pridėkite apribojimą skiltyje {{ui:Apribojimai …}}; keli veikia sąrašo tvarka (rodyklėmis ją keičiate), o kiekvienas turi {{ui:Kiek}} (nuo 0 iki 1, įrašomas su rombu kaip bet kuri savybė) ir įjungimo bei išjungimo jungiklį.

| Apribojimas | Skirtas | Ką daro |
|---|---|---|
| {{ui:Pasiekti (IK)}} | Kaulams | Kaulas ir kaulai, nuo kurių jis kabo ({{ui:Kaulai grandinėje}}), lenkiasi, kad jo galas pasiektų taikinį. Su dviem kaulais ir {{ui:Polius (lenkimas nukreipiamas į jį)}} alkūnė ar kelias nukreipiami į polių; ilgesnės grandinės lenkiasi sklandžiai. Jei taikinys per toli, grandinė nukreipiama tiesiai į taikinį. |
| {{ui:Žiūrėti į}} | Abiems | Pasisuka taip, kad {{ui:Ašis, kuri rodo}} atsisuktų į taikinį, o {{ui:Ašis, laikoma aukštyn}} būtų kuo arčiau viršaus. |
| {{ui:Kopijuoti transformacijas}} | Abiems | Perima taikinio vietą, pasukimą ar dydį – pažymėtus. |
| {{ui:Ribos}} | Abiems | Išlaiko savo vietą, pasukimą (laipsniais) ar dydį tarp {{ui:min}} ir {{ui:max}} kiekvienai ašiai; palikite porą tuščią, kad ta ašis būtų laisva. |
| {{ui:Vaikinis objektas}} | Abiems | Juda kartu su taikiniu tarsi kabėtų nuo jo, nuo tos vietos, kur abu buvo, kai pasirinkote taikinį. |
| {{ui:Sekti kelią}} | Objektams | Sėdi ant [kreivės objekto](topic:curves) {{ui:Išilgai kreivės}} (0 – jos pradžia, 1 – pabaiga; įrašykite raktą, kad judėtų) ir su {{ui:Pasukti išilgai kreivės}} atsisuka išilgai jos. |

Taikinys – tai kitas atvirosios grupės objektas, to paties karkaso kaulas arba {{ui:Taškas}}, kurį įvedate (objekto taškas nurodomas modelio koordinatėmis, kaulo – jo tinklo koordinatėmis). IK kojai padėkite taikinį ten, kur turi būti pėda, ir įrašykite taikinį raktu arba įrašykite {{ui:Kiek}}, kad koja tarp raktų būtų valdoma IK.

:::tip
Objektas, kuris žiūri į kitą objektą, sekantį kelią, mato jį ant kelio: ModelCraft pirmiausia apskaičiuoja taikinius, nepaisant objektų eilės.
:::

## Fizika: kritimas, krovimas ir susidūrimas

Leiskite objektams kristi ir atsitrenkti vienam į kitą, o rezultatą išsaugokite kaip raktus.

1. Pasirinkite grupę, komponentą ar tinklą ir skiltyje {{ui:Fizika}} nustatykite jo {{ui:Kietasis kūnas}}: {{ui:Krenta ir susiduria}} (juda) arba {{ui:Stovi vietoje, trukdo}} (stalas, siena, nuokalnė). Krentančiam objektui nustatykite {{ui:Forma}} – {{ui:Dėžė (pagal jos ribas)}} arba {{ui:Rutulys (apvalus pagal ribas)}} – jo {{ui:Masė (kg)}}, {{ui:Trintis}} ir {{ui:Atšokimas}} (0 – dunda, 1 – atšoka taip pat aukštai).
2. Skiltyje {{ui:Visas modelis}} nustatykite {{ui:Nuo (s)}} ir {{ui:Iki (s)}}, {{ui:Gravitacija (m/s², žemyn)}} ir ar yra {{ui:Žemė, ant kurios nusileisti}} (ir jos aukštis).
3. Spustelėkite {{ui:Įdeginti fiziką}} (skydelyje arba grupėje {{ui:Fizika}}). Kiekvienas krentantis objektas gauna vietos, pasukimo ir dydžio raktą kiekviename kadre tarp dviejų laikų; paleiskite jį kaip bet kurią animaciją.

Įdeginus iš naujo, šie raktai pakeičiami; {{ui:Pašalinti įdegtus kadrus}} juos nuima. Objektai prasideda ramybėje, ten, kur juos laiko jų raktai, kreivės ir apribojimai {{ui:Nuo (s)}} momentu (prieš tai įrašytas judesys į kritimą nesitęsia). Daugiau {{ui:Žingsniai kadre}} padaro aukštas krūves stabilesnes; būsenos juostoje rodoma, ar kažkas dar juda pabaigoje.

:::note
Formos – tai dėžės ir rutuliai, apibrėžiantys kiekvieno objekto ribas; dėžė liečia savo kampais, briaunų vidurio taškais ir paviršių vidurio taškais, todėl dėžės sukraunamos ir virsta taip, kaip ir tikėtasi. Audinys, skysčiai, jungtys tarp objektų ir tikslios formos dar nėra įdiegti.
:::

## Valdikliai

**Valdiklis** nustato formos raktą pagal kitus dalykus, o ne rankiniu būdu: atidarykite rakto valdiklį (skaičiuotuvo mygtukas), parašykite **išraišką** ir kiekvienam joje esančiam pavadinimui nurodykite, ką jis skaito ({{ui:Skaito}}): laiką sekundėmis, kadrą, išdėstymo vietą, pasukimą ar dydį pagal X, Y arba Z, lempos ryškumą ar kitą formos raktą. Pavyzdžiui, kai `v` skaito durų pasukimą apie Z, `clamp(v / 90, 0, 1)` atveria formą, kai durys atsiveria.

Išraiškose naudojami skaičiai, pavadinimai, `+ - * / % ^` ir skliaustai, taip pat funkcijos `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg`, o kartu `pi` ir `e`. Klaida nurodoma ir nieko nekeičia. Valdomo rakto slankiklis rodo valdiklio reikšmę; valdiklis nugali rakto takelį, kol jo nepašalinsite.

## Raktų pasirinkimas ir keitimas (Raktų rodinys)

{{ui:Raktai}} rodo po eilutę kiekvienam takeliui: kamerą, kiekvieną judančią grupę ir kiekvieną savybę („Lempa 2 · Ryškumas (lm)“; savybių raktai – apvalūs).

- Spustelėkite raktą, kad jį pasirinktumėte; spustelėjimas su {{key:Shift}} arba {{key:Mod}} prideda raktus prie pasirinkimo arba pašalina juos iš jo. Vilkimas per eilutes su {{key:Shift}} nubrėžia langelį, kuris prideda visus jame esančius raktus.
- Vilkite pasirinktą raktą, kad perkeltumėte visus; {{key:Left}} / {{key:Right}} perkelia juos per vieną kadrą ({{key:Shift}}: per dešimt).
- {{key:Mod+C}} kopijuoja pasirinktus raktus, {{key:Mod+V}} įklijuoja juos nuo grojimo galvutės į tuos pačius takelius (juos gali įklijuoti ir kitas ModelCraft skirtukas).
- {{ui:Tempimas}} išskirsto pasirinktus raktus nuo grojimo galvutės pagal šalia esantį skaičių (2 = du kartus toliau; 0.5 – suartina).
- Sklandumo sąrašas nustato, kaip kiekvienas pasirinktas raktas pereina į kitą.

## Kreivių formavimas (Kreivių rodinys)

{{ui:Kreivės}} – tai kiekvieno skaičiaus grafikas laike: laikas – išilgai, reikšmė – aukštyn. Pažymėkite kreives, kurias rodyti, kairiajame sąraše (X, Y ir Z yra raudona, žalia ir mėlyna).

- Spustelėkite raktą (kvadratėlį), kad jį pasirinktumėte, spustelėkite su {{key:Shift}}, kad pridėtumėte daugiau, arba vilkite langelį. Vilkite pasirinktą raktą, kad pakeistumėte jo laiką ir reikšmę; kai pasirinkta keletas, vilkimas perkelia juos laike.
- Pasirinktas raktas rodo savo dvi **rankenėles**. Vilkite vieną, kad suformuotumėte kreivę toje pusėje. {{ui:Rankenėlės}} nurodo, kaip jos elgiasi: {{ui:Automatinės}} (sklandi kreivė per aplinkinius raktus), {{ui:Nukreiptos į kitą raktą}}, {{ui:Lygiuotos}} (abi lieka vienoje tiesėje, todėl kreivė neturi kampo) arba {{ui:Laisva}}.
- {{ui:Iš pasirinktų raktų}} nustato, kaip kiekvienas pasirinktas raktas pereina į kitą: {{ui:Kreivė (rankenėlės)}}, {{ui:Lyginti}}, {{ui:Pastovus}}, {{ui:Lėtas įėjimas ir išėjimas}} arba {{ui:Laikyti}}.
- {{ui:Prieš}} ir {{ui:Po}} nustato, ką kreivė daro už savo raktų ribų: {{ui:Laikyti}} (lieka ties pirma ar paskutine reikšme), {{ui:Kartoti}}, {{ui:Pirmyn ir atgal}} arba {{ui:Kartoti ir tęsti}} (kiekvienas pakartojimas prasideda ten, kur baigėsi paskutinis: ratas toliau rieda, vaikštukas toliau eina).
- Ratukas keičia mastelį ({{key:Mod}}: tik reikšmes, {{key:Shift}}: tik laiką); vilkite vidurinį mygtuką arba su {{key:Alt}}, kad slinktumėte; {{ui:Rodyti visas}} arba {{key:Home}} pritaiko visas rodomas kreives. Spustelėkite tuščią vietą, kad grojimo galvutę perkeltumėte ten. {{key:Delete}} ištrina pasirinktus raktus.

Rankenėlės neleidžiamos kirsti viena kitos laike, todėl kreivė niekada neatsuka atgal.

## Animacijų pakartotinis naudojimas (Klipų rodinys)

**Klipas** paleidžia išsaugotą animaciją (**veiksmą**) laiko juostoje. Klipai maišomi eilės tvarka: žemesnės eilutės – virš viršutinių; paties laiko juostos takeliai eina virš visų klipų.

1. Kaip įprasta, įrašykite grupių ir lempų raktus, tada {{ui:Klipai}} skiltyje spustelėkite {{ui:Padaryti klipą}} ir suteikite veiksmui pavadinimą. Takeliai tampa veiksmu, o klipas paleidžia jį ten, kur jie buvo (kamera lieka laiko juostoje).
2. Norėdami jį panaudoti dar kartą, pasirinkite veiksmą ir spustelėkite {{ui:Pridėti klipą}}: naujas klipas prasideda grojimo galvutės vietoje.
3. Vilkite klipą palei jo eilutę, kad jį perkeltumėte; spustelėkite jį, kad nustatytumėte {{ui:Pradžia (s)}}, {{ui:Greitis}} (2 = du kartus greičiau), {{ui:Kartojimai}}, {{ui:Kiek}} (nuo 0 iki 1), {{ui:Maišymas}} ({{ui:Pakeisti}} arba {{ui:Pridėti viršuje}} prieš jį esančių klipų), {{ui:Už klipo ribų}} (nieko, išlaikyti jo pabaigą arba išlaikyti abu galus) ir {{ui:Nutildyti}}. Rodyklėmis keičiama tvarka; šiukšliadėžė jį pašalina (veiksmas, kurio joks klipas daugiau nenaudoja, pašalinamas kartu).

Klipas, kurio {{ui:Kiek}} mažesnis nei visas, maišosi su tuo, kas po juo: prieš jį esančiu klipu arba lempa ar išdėstymu tokiu, koks jis yra be animacijos.

## Kas kur rodoma

| Kas | Rodinyje | Atvaizduotame vaizdo įraše |
|---|---|---|
| Kameros raktai, objektyvo kampas su kameros raktais | Taip | Taip |
| Vieta, pasukimas ir dydis (raktai, kreivės, klipai) | Taip | Taip |
| Lempos ryškumas, sklaida ir spalva | Taip | Kol kas ne: vaizdo įraše naudojamos lempos tokios, kokios yra jo pradžioje (žr. [dar neįdiegta](topic:not-built-yet)) |
| Objektyvo kampas be kameros raktų | Taip | Kol kas ne: įrašykite raktus ir kamerai |
| Formos raktai ir valdikliai | Taip | Taip |
| Karkasai (pozuoti tinklai) | Taip | Taip |
| IK ir apribojimai | Taip | Taip |
| Įdegta fizika (raktai) | Taip | Taip |

Viskas įrašoma į `.modelcraft` failą kartu su likusia animacija, o laiko juostos {{ui:Anuliuoti}} ir {{ui:Perdaryti}} atšaukia bet kurį iš šių veiksmų.
