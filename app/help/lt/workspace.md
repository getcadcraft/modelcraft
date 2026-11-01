---
title: ModelCraft ekranas
summary: Įrankių juostos, skydelių kiekvienoje pusėje, 3D vaizdo ir būsenos juostos apžvalga pagal ekrane matomus pavadinimus.
keywords: ekranas, išdėstymas, įrankių juosta, skydeliai, struktūra, objekto informacija, stilius, scenos, būsenos juosta, reikšmės laukelis, vienetai, sąsaja, apžvalga
from: 4a9a4516
---

Iš viršaus į apačią: programos juosta, įrankių juosta, trys stulpeliai (kairieji skydeliai, 3D vaizdas, dešinieji skydeliai) ir būsenos juosta.

## Programos juosta

Siauroji juosta pačiame viršuje priklauso kiekvienai CadCraft programai. Joje yra programos pavadinimas ir versija, {{ui:Apie ModelCraft}}, ekrano režimo mygtukas ir {{ui:Popierius}} / {{ui:Modelis}} jungiklis.

- {{ui:Popierius}} yra šviesi tema, o {{ui:Modelis}} - tamsi. 3D vaizdas pakeičia spalvas pagal ją; jūsų modelis nesikeičia.
- Ekrano režimo mygtukas (iš pradžių rodo {{ui:Visas ekranas}}) ir {{key:Ctrl+Shift+F}} perjungia tris režimus: įprastą, visą ekraną ir visą ekraną su paslėptomis juostomis. Kai juostos paslėptos, nukreipkite žymeklį į viršutinį ekrano kraštą (arba palieskite jį), kad jos grįžtų. {{key:Esc}} išeina iš viso ekrano.

:::note
{{key:Ctrl+Shift+F}} visuose kompiuteriuose naudoja Control klavišą, net ir Mac. iPhone telefone, kur naršyklės neturi viso ekrano režimo, mygtukas tik paslepia ir parodo juostas.
:::

## Įrankių juosta

Įrankių juosta suskirstyta į pavadinimus turinčias grupes. Užveskite pelę ant mygtuko, kad pamatytumėte jo pavadinimą ir klavišą.

Kairėje esantis {{ui:Darbo sritis}} sąrašas keičia tai, kam skirta įrankių juosta ir dešinysis skydelis: {{ui:Modelis}} (stūmimo-traukimo modeliavimas, toliau pateikiama apžvalga), {{ui:Tinklelis}} ([redaguoti tinklelį](topic:mesh-edit)), {{ui:Kreivė}} ([kreivių objektai](topic:curves)), {{ui:UV}} ([išdėstyti UV](topic:uv)), {{ui:Skulptūra}} ([skulptūra](topic:sculpt)), {{ui:Šešėliavimas}} ([medžiagos, sukurtos mazgais](topic:shading)), {{ui:Animuoti}} ([animuoti](topic:animate)) ir {{ui:Atvaizduoti}} ([atvaizduoti vaizde](topic:render#render-in-the-view)).

| Grupė | Mygtukai |
|---|---|
| Failas | {{ui:Naujas}}, {{ui:Atidaryti}}, {{ui:Įrašyti}}, {{ui:Importuoti}}, {{ui:Eksportuoti}} (formatų meniu) |
| Braižymas | {{ui:Linija}} ({{key:L}}), {{ui:Stačiakampis}} ({{key:R}}), {{ui:Apskritimas}} ({{key:C}}), {{ui:Daugiakampis}} ({{key:N}}) |
| Keitimas | {{ui:Pasirinkti}} ({{key:Space}}), {{ui:Stumti/traukti}} ({{key:P}}), {{ui:Perkelti}} ({{key:M}}), {{ui:Sukti}} ({{key:Q}}), {{ui:Mastelis}} ({{key:S}}), {{ui:Trintukas}} ({{key:E}}), {{ui:Matavimo juosta}} ({{key:T}}) |
| Organizavimas | {{ui:Komponentas}} ({{key:G}}), {{ui:Grupė}} ({{key:Shift+G}}), {{ui:Suskaidyti}} |
| Redagavimas | {{ui:Anuliuoti}} ({{key:Mod+Z}}), {{ui:Perdaryti}} ({{key:Mod+Y}}), {{ui:Kopijuoti}} ({{key:Mod+C}}), {{ui:Įklijuoti}} ({{key:Mod+V}}), {{ui:Daugiau}} (meniu: iškirpti, kopijuoti, įklijuoti, įklijuoti vietoje {{key:Mod+Shift+V}}, dubliuoti {{key:Mod+D}}, naikinti, pasirinkti viską, nepasirinkti nieko ir klavišų stilių) |
| Kamera | {{ui:Sukti vaizdą}} ({{key:O}}), {{ui:Slinkti}} ({{key:H}}), {{ui:Keisti mastelį}} ({{key:Z}}), {{ui:Visi objektai}} ({{key:Shift+Z}}), {{ui:Vaizdai}} (meniu) |

Rodomi klavišai yra stūmimo-traukimo klavišai; pasirinkus modeliuotojo stilių [ModelCraft parametruose](topic:settings), patarimuose rodomi tie klavišai. Įrankis, kuriuo naudojatės, rodomas nuspaustas. Siauame ekrane įrankių juosta slenka į šoną.

{{ui:Vaizdai}} meniu yra {{ui:Izometrija}}, {{ui:Viršus}}, {{ui:Priekis}}, {{ui:Dešinė}}, {{ui:Galas}}, {{ui:Kairė}} ir {{ui:Apačia}}, kiekvienas pritaikytas modeliui, ir {{ui:Perspektyva}}, kuri perjungia tarp perspektyvinės ir lygiagrečios projekcijos.

## 3D vaizdas

Ekrano vidurys. Raudonos, žalios ir mėlynos linijos yra ašys: raudona ir žalia guli ant žemės, mėlyna rodo į viršų, o **šiaurė yra žalioji ašis**. Ten, kur jos susitinka, yra pradžia.

- Pradėjus rodoma kortelė „Pradėti modeliavimą“ su keliais pirmaisiais klavišais. Ji dingsta, kai pasirenkate braižymo įrankį arba spustelite vaizde.
- Kol įrankis veikia, vaizde rodomi **nuorodų žymekliai**: maži spalvoti ženklai, kur žymeklis prisikabina (žalias apskritimas gale, žydras viduryje, raudonas kvadratas ant briaunos, mėlynas rombas ant paviršiaus). Žr. [Nuorodos ir prisegimas](topic:inference).
- Pažymėti daiktai pamėlynuoja. Paviršius, matomas iš nugaros, yra mėlynai pilkas.
- Kai atidarote grupę redagavimui, viskas už jos išblunka, o ašys persikelia į grupės pačios ašis.
- Kai modelis turi scenų, vaizdo viršuje atsiranda scenų skirtukų eilė.
- Nuvilkite failą bet kur ant vaizdo, kad jį atidarytumėte ar importuotumėte.

## Kairieji skydeliai

**{{ui:Struktūra}}** išvardija modelio grupes ir komponentus, įdėtus taip, kaip jie įdėti modelyje. Komponentas, naudojamas daugiau nei vieną kartą, rodo, kiek kartų, pavyzdžiui, „Langas (4)“.

- Spustelėkite pavadinimą, kad jį pažymėtumėte. Dukart spustelėkite, kad atidarytumėte redagavimui.
- **Ieškoti pagal pavadinimą** (rodoma, kai yra dvi ar daugiau grupių) palieka tik eilutes, kurių pavadinimas atitinka, kartu su grupėmis, kuriose jos yra. {{key:Esc}} išvalo paiešką.
- **Akis** eilutės gale paslepia arba parodo tą grupę ar komponentą (kaip tai daro {{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Slėpti}}). Žymės piktograma reiškia, kad jis paslėptas pagal savo [žymę](topic:tags).
- **Pervadinti vietoje:** spustelėkite eilutę, tada paspauskite {{key:F2}}, įveskite ir paspauskite {{key:Enter}} ({{key:Esc}} palieka senąjį pavadinimą).
- **Vilkite eilutę** ant kitos grupės eilutės vidurio, kad ją perkeltumėte į tą grupę, ant eilutės viršutinio ar apatinio krašto, kad ją įdėtumėte prieš ar po tos eilutės, arba ant {{ui:Struktūra}} antraštės, kad ją perkeltumėte į viršutinį lygį. Ji išlieka savo vietoje modelyje ir išlaiko savo spalvą, žymę ir pavadinimą. Grupė negali būti įdėta į pati save. Kiekvienas perkėlimas yra vienas anuliavimo žingsnis. Žr. [Perkėlimas struktūroje](topic:groups-components#rearrange-in-the-outliner).
- Redaguodami grupės viduje, matote eilutę „Redaguojama: Modelis › …“ ir atsiranda mygtukas {{ui:Uždaryti grupę}}. Jis uždaro visus atidarytus lygius iš karto.

**{{ui:Komponentai}}** išvardija kiekvieną komponento aprašą su tuo, kiek kopijų įdėta („3×“), ir mygtuką {{ui:Dėti}}, kuris prideda dar vieną kopiją ten, kur spustelėsite.

## Dešinieji skydeliai

**{{ui:Objekto informacija}}** aprašo, kas pažymėta. Jos antraštė keičiasi ir nurodo, kas tai yra:

| Antraštė | Rodo | Mygtukai |
|---|---|---|
| Modelis (nieko nepažymėta) | Paviršiai, briaunos, grupės, komponentai ir kiek jų įdėta, pagalbinės linijos, bendras dydis | {{ui:Ištrinti visas pagalbines linijas}} (kai yra pagalbinių linijų) |
| Paviršius | Plotas, skylių skaičius | {{ui:Apversti paviršių}} |
| Briauna | Ilgis | nėra |
| Grupė arba komponentas | Pavadinimas (rašykite, kad pervadintumėte), kiek kartų įdėta, ar tai uždaras kietasis kūnas, jo tūris, dydis | {{ui:Redagavimas}}, {{ui:Suskaidyti}}, {{ui:Padaryti unikalų}} (komponentas, įdėtas daugiau nei vieną kartą), {{ui:Sukurti komponentą}} (grupė) |
| Pagalbinis taškas arba pagalbinė linija | nieko | {{ui:Naikinti}} |
| Keli daiktai | Kiek paviršių, briaunų, grupių ir pagalbinių linijų, bendras paviršių plotas | {{ui:Sukurti komponentą (G)}}, {{ui:Sukurti grupę (Shift+G)}} |

**{{ui:Stilius}}** nustato, kaip modelis piešiamas: {{ui:Paviršiai}} ({{ui:Šešėliuota}}, {{ui:Paslėptos linijos}}, {{ui:Karkasas}}, {{ui:Rentgenas}}), {{ui:Rodyti briaunas}} ir {{ui:Saulės šešėliai}} su saulės data, laiku ir vieta. Žr. [Stiliai ir saulės šešėliai](topic:styles-shadows).

**{{ui:Scenos}}** įrašo vaizdus: {{ui:Pridėti sceną}}, scenų sąrašą ir {{ui:Ankstesnė}}, {{ui:Groti}} ir {{ui:Kita}}. Žr. [Vaizdų įrašymas kaip scenų](topic:scenes).

## Būsenos juosta

Apačioje, iš kairės į dešinę:

1. **Patarimas**: ko įrankis nori toliau arba prie ko žymeklis prisikabina („Galinis taškas“, „Ant raudonos ašies“).
2. **Pranešimai**: kas ką tik įvyko („Anuliuota stūmimas-traukimas.“, „Importuota site.dxf: 1697 briaunos ant žemės, grupėje.“) arba kodėl kas nors neveikė.
3. **Reikšmės laukelis**: jo etiketė keičiasi su įrankiu ({{ui:Ilgis}}, {{ui:Matmenys}}, {{ui:Spindulys}}, {{ui:Kraštinės}}, {{ui:Atstumas}}, {{ui:Kampas}}, {{ui:Mastelis}}, {{ui:Poslinkis}}). Dirbant jame rodomas tiesioginis dydis, o jis priima tai, ką įvedate. Žr. [Tikslių dydžių įvedimas reikšmės laukelyje](topic:value-box).
4. **Klavišų stilius**: {{ui:Klavišai: stūmimas–traukimas}} arba {{ui:Klavišai: Modeliuotojas}} tuoj pat perjungia klaviatūros trumpinius ir pelės mygtukus (kaip [ModelCraft parametruose](topic:settings)).
5. **{{ui:Prisegimas}} ir {{ui:Susidūrimas}}**: prisegimas prie taškų, briaunų ir ašių, o kietieji kūnai sustoja ten, kur liečiasi. Perbrauktas = išjungta. Spustelėkite, kad perjungtumėte. Žr. [ModelCraft parametrai](topic:settings).
6. **Vienetų rinkiklis**: vienetai, kuriais rodomi ilgiai. Žr. [Pradžia](topic:getting-started#check-the-units-first).

## Siauram ekrane

Mažiau nei maždaug 760 pikselių pločio (telefonas ar siauras langas) 3D vaizdas užima visą ekraną. Įrankių juosta yra viena eilutė, slenkanti į šoną, o skydeliai atsidaro kaip lapai iš juostos ekrano apačioje.
