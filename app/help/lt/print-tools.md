---
title: Atramos, sienelės storis, ištuštinimas ir taisymas
summary: Pamatykite, kur spausdinimui reikia atramų ir apytiksliai kiek, raskite per plonas sieneles, ištuštinkite detalę iki sienelės storio su nutekėjimo angomis ir taisykite tinklelį su visais atliktais pataisymais sąraše.
keywords: 3d spausdinimas, atramos, atramų peržiūra, nuolydis, tinklinės atramos, kolonų atramos, sienelės storis, plonos sienelės, per plonos, antgalis, ištuštinti, ištuštinimas, apvalkalas, nutekėjimo anga, derva, taisyti, taisyti tinklelį, neuždaras, apversti paviršiai, skylės, maži apvalkalai, savikirtos, persidengimas, sujungti
from: 286bde26
---

Keturi įrankiai, skirti paruošti modelį 3D spausdintuvui. Atidarykite {{ui:Eksportuoti}} › {{ui:Tikrinti, ar tinka 3D spausdinimui (STL arba 3MF)…}}; dialogo eilutėje **Spausdinimo įrankiai** yra {{ui:Atramų peržiūra}}, {{ui:Sienelės storis}}, {{ui:Ištuštinti}} ir {{ui:Taisyti}}. Kiekvienas atsidaro kaip kortelė virš vaizdo; {{ui:Uždaryti}} (kryžiukas) ją uždaro kartu su jos žymėjimais. Vienu metu rodoma viena kortelė.

Kiekvienas įrankis veikia su tuo, kas spausdinama: pasirinkimu arba visu rodomu, kai nieko nepasirinkta. {{ui:Ištuštinti}} ir {{ui:Taisyti}} reikia vienos pasirinktos grupės, komponento ar tinklelio, nes jie jį keičia.

## Atramų peržiūra

Paviršiai, kurie išsikiša labiau nei **nuolydžio kampas** nuo vertikalės, nuspalvinami raudonai, o paprastos atramos nubraižomos nuo jų (oranžine) iki stalo arba iki modelio dalies po jais.

- **Nuolydžio kampas**: 45° yra tai, ką dauguma spausdintuvų išlaiko be atramų. Padidinkite jį spausdintuvui, kuris gerai spausdina tiltus.
- **Kolonos**: tiesi kolona kas 3 mm po kiekvienu nuolydžiu. Įvertinime jos skaičiuojamos kaip 15% atramų užpildas.
- **Medis**: artimi taškai susijungia į vieną kamieną po savo viduriu; joks šakos nelinksta daugiau nei 45°. Medžiai paprastai sunaudoja mažiau medžiagos ir liečia stalą mažiau vietų.

Kortelė nurodo, kiek paviršiaus reikia atramų, kiek yra atramų taškų ir apytiksliai kiek medžiagos jos sunaudoja. Atramos, stovinčios ant modelio (ne ant stalo), įskaičiuojamos: jos palieka ten žymes. Su spausdintuvo stalu, pasirinktu {{ui:Parametrai}}, stalas nubraižomas po modeliu.

:::note
Tai peržiūra, ne pjaustyklė: tikras atramas nulemia jūsų pjaustyklė. Labai didelių nuolydžių atveju atramų taškai išdėstomi plačiau, kad peržiūra liktų greita; kortelė apie tai praneša.
:::

## Sienelės storis

Kiekvienas paviršius matuojamas tiesiai per kietąjį kūną iki kitos pusės. Sienelės, plonesnės nei **mažiausia leidžiama sienelė**, nudažomos raudonai, o sienelės, plonesnės nei pusantro karto ją, — oranžinės: jos spausdinasi, bet gali išeiti silpnos.

Plonos vietos išvardijamos, pradedant plonriausiomis, su tuo, kiek jos plonos ir kokio dydžio kiekviena. {{ui:Rodyti}} pasuka kamerą į ją.

Spausdintuvas negali padaryti sienelės plonesnės nei maždaug du jo antgalio pločiai: 0,8 mm įprastam 0,4 mm antgaliui (pradinė reikšmė). Dervos spausdintuvai pasiekia mažiau; patikrinkite savo spausdintuvo vadovą.

Labai didelio modelio atveju spindulį meta tik kai kurie paviršiai, o kiti perima kaimynų storį; kortelė nurodo, kiek jų išmatuota.

## Ištuštinimas

Ištuštinimas palieka išorę tokią, kokia ji yra, ir pašalina vidų, paliekant sieneles tokio storio, kokio prašote. Dervos spausdiniai sunaudoja mažiau dervos ir mažiau traukia gaminimo plokštę; filamentiniai spausdiniai sunaudoja mažiau plastiko, nei sunaudotų užpildymas.

1. Pasirinkite grupę, komponentą ar tinklelį, tada atidarykite {{ui:Ištuštinti}}.
2. Nustatykite **sienelę** (pradžiai 2 mm) ir kiek platios yra **nutekėjimo angos**.
3. Dervos spausdiniui spustelėkite {{ui:Įdėti nutekėjimo angą}}, tada spustelėkite modelio išorę, kur ji turi būti: žemai, arti gaminimo plokštės, kad skystoji derva išbėgtų. Įdėkite kiek reikia; kiekviena rodoma kaip mėlynas apskritimas ir išvardyta su {{ui:Pašalinti}}.
4. {{ui:Peržiūra}} parodo, kiek ištuštinimas pašalina.
5. {{ui:Ištuštinti}} atlieka pakeitimą vienu žingsniu, kurį {{key:Mod+Z}} atšaukia.

Rezultatas yra vienas uždaras kietasis kūnas, kurį priima 3D spausdinimo patikra: ModelCraft pirmiausia patikrina ir nieko nekeičia, jei jis neprailgtų. Kur modelis yra plonesnis nei du sienelių storiai, jis lieka kietas. Rezultatas yra grupė, kurios plokščios pusės yra vienetiniai paviršiai, todėl galite toliau modeliuoti su {{ui:Stumti/traukti}}; kreivą detalę, ištuštintą smulkiame tinkle, paprastai turi per daug paviršių tam, todėl ji tampa tinkleliu; būsenos eilutė nurodo, kuri.

:::tip
Daugeliu atvejų vidus yra išorė, perkelta tiksliai per sienelę. Kur kampai ar plonos dalys to neleidžia, ModelCraft vietoj to seka išorę sienelės atstumu smulkiame tinkle; tada kortelė nurodo, kiek tiksliai (iki dalies milimetro).
:::

## Taisyti

{{ui:Taisyti}} patikrina pasirinktą dalį taip, kaip ją patikrintų spausdintuvo pjaustyklė, pataiso tai, ką gali saugiai pataisyti, ir išvardija kiekvieną pataisymą:

| Pataisoma | Ką tai reiškia |
|---|---|
| Trikampiai be ploto | praleidžiami |
| Trikampis nubraižytas du kartus | paliekama viena kopija; paviršius, nubraižytas atgal į save patį (be storio), pašalinamas |
| Laisvos dalys mažesnės nei 0,5 mm | pašalinamos |
| Trikampiai atsukti ne ta kryptimi | pasukami pagal savo kaimynus |
| Skylės, plokščios ar ne | uždaromos naujų trikampių vėduokle nuo kiekvienos skylės vidurio |
| Dalis išvirkščia | pasukama į išorę (ertmė kitos dalies viduje paliekama kaip yra: ji turi būti nukreipta į vidų) |

{{ui:Ištaisyti saugiuosius}} atlieka visus juos vienu žingsniu, kurį {{key:Mod+Z}} atšaukia, o būsenos eilutė išvardija kiekvieną pataisymą. Pataisyta dalis tampa grupe, kurios plokščios pusės yra vienetiniai paviršiai. Jei ji vis dar neužsidaro (lieka kažkas iš skilties **Palikta jums**) arba turėtų per daug paviršių grupei, ji vietoj to tampa tinkleliu: jos paviršiai lieka trikampiais, o plokščios pusės vis tiek atrodo plokščios. Būsenos eilutė nurodo, kuri. {{ui:Sujungti persidengiančias dalis}} veikia taip pat.

Ko saugiai pataisyti negalima, išvardyta skiltyje **Palikta jums** ir vaizde pažymėta violetine spalva, su {{ui:Rodyti}}:

- **Kraštai, kuriuose susitinka trys ar daugiau paviršių**: nuspręskite, kuris paviršius priklauso, ir ištrinkite kitus.
- **Dalis, einanti per pačią save**: perkelkite ar perbraižykite tą dalį. Žr. [Susikertantys paviršiai](topic:intersect).
- **Skylės per didelės ar per daug susipynusios, kad užsidarytų**: nubraižykite paviršius per jas.
- **Atskiros dalys, kurios persidengia**: pjaustyklės vis tiek jas sujungia. {{ui:Sujungti persidengiančias dalis}} padaro jas vienu uždaru kūnu (perkuria paviršius, kur jos susitinka, todėl tai atskiras mygtukas, kurio niekada nedaroma už jus).

Stumti/traukti grupėms galite taisyti ir po vieną per {{ui:Objekto informacija}} › {{ui:Rodyti problemas}} / {{ui:Taisyti}}, tai išsaugo paviršius, kuriuos nubraižėte. Žr. [Kietųjų kūnų įrankiai](topic:solids).

Susiję: [Paruoškite modelį 3D spausdinimui](topic:print-3d) · [Pradedančiojo stilius](topic:beginner) · [Dar neįgyvendinta](topic:not-built-yet#3d-printing)
