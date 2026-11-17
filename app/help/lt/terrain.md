---
title: Reljefas: žemė iš horizontalių ir jos formavimas
summary: Sukurkite žemę iš horizontalių arba kaip tinklelį, tada pakelkite ir nuleiskite ją minkštu šepetėliu.
keywords: reljefas, žemė, kraštovaizdis, topografija, horizontalės, kontūrinės linijos, sklypas, šlaitas, kalva, pylimas, smėlio dėžė, smoove, formuoti, vertikalusis planavimas, TIN
from: 407652b3
---

Reljefas yra žemė, sudaryta iš trikampių, todėl ji gali sekti bet kokią formą. Tai grupė: dukart spustelėkite ją, kad redaguotumėte.

## Iš horizontalių

1. Gaukite horizontales su jų aukščiais: nubraižykite jas arba [importuokite sklypo planą](topic:site-plan) ir perkelkite kiekvieną horizontalę į jos lygį.
2. Pasirinkite jas (visas visų horizontalių briaunas).
3. {{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Reljefas iš pažymėtų kontūrų}}.

ModelCraft sujungia horizontalių taškus trikampiais (TIN) ir suminkština kiekvieną vidinę briauną, kad žemė šešėliuotųsi lygiai. Pačios linijos lieka; kai jų nebereikia, jas naikinkite arba paslėpkite. Labai tankios horizontalės sumažinamos iki 8 000 taškų.

## Tinklelis formavimui

{{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Reljefo tinklelis…}} paprašo pločio, gylio ir langelio dydžio, tada padeda plokščią trikampių tinklelį ten, kur spustelėjate jo kampą. Maži langeliai leidžia formuoti lygiau, bet sukuria daugiau paviršių (daugiausia 200 × 200 langelių).

## Formuoti: pakelti ir nuleisti žemę

1. Dukart spustelėkite reljefą, kad jį atidarytumėte.
2. {{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Formuoti reljefą}}. Apskritimas rodo šepetėlį ant žemės po žymekliu.
3. Vilkite aukštyn, kad pakeltumėte žemę po šepetėliu, arba žemyn, kad nuleistumėte. Vidurys juda labiausiai, o žemė švelniai nueina į nulį ties apskritimo kraštu, todėl pylimai ir įdubimai išeina lygūs.

Norėdami padaryti pylimą tiksliai nurodyto aukščio, vieną kartą spustelėkite, tada įveskite aukštį, pavyzdžiui, `1.5m` (minusas nuleidžia), ir paspauskite {{key:Enter}}. Norėdami pakeisti šepetėlį, prieš spustelėdami įveskite ilgį: `5m` suteikia šepetėliui 5 m spindulį.

Kiekvienas formavimas yra vienas atšaukiamas veiksmas.

## Kas svarbu

- Formavimas keičia tik trikampių paviršius, todėl kiekvienas paviršius lieka plokščias. Ranka nubraižyti paviršiai (stačiakampiai, daugiakampiai) nėra reljefas: įrankis tai praneša.
- Formavimas perkelia taškus tiesiai aukštyn ir žemyn; jis netaiko naujų taškų. Smulkesnėms detalėms padarykite tinklelį su mažesniais langeliais.
- Reljefas eksportuojamas kaip bet kuri kita grupė. IFC formate jis yra building element proxy, kaip ir visa kita.
