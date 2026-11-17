---
title: Stumkite ir traukite paviršius į kietuosius kūnus
summary: Paverskite paviršių dėže, padarykite pastatą aukštesnį ar žemesnį, pridėkite erkerį ar išdubimą ir pakartokite atstumą dvigubu spustelėjimu.
keywords: stumti traukti, išstumti, aukštis, kietasis kūnas, dėžė, masė, aukštesnis, išdubimas, pakartoti, dvigubas spustelėjimas, tūris, aukštas, ant paviršiaus, lygiai, tas pats aukštis
from: dc093c91
---

{{ui:Stumti/traukti}} ({{key:P}}) perkelia paviršių išilgai jo paties krypties: aukštyn ir žemyn grindims, į vidų ir išorę sienoms. Tai, kas nutinka, priklauso nuo paviršiaus.

## Kietasis kūnas iš paviršiaus

1. Nubraižykite paviršių, pavyzdžiui stačiakampį ant žemės ([Braižyti paviršius](topic:draw-faces)).
2. Paspauskite {{key:P}}.
3. Užveskite pelę ant paviršiaus. Jis paryškėja.
4. Spustelėkite paviršių, tada judinkite žymeklį. Paviršius kyla (arba leidžiasi), o šonai išauga iš jo kraštų. Reikšmės langelis ({{ui:Atstumas}}) ir patarimas rodo atstumą.
5. Spustelėkite, kad baigtumėte, arba įveskite atstumą ir paspauskite {{key:Enter}}: `3m`, `10'`, `2700` milimetrų modelyje.

   Dabar turite uždarą kietąjį kūną. Pasirinkite visą ir sugrupuokite jį (žr. [Grupės ir komponentai](topic:groups-components)): tada {{ui:Objekto informacija}} rodo "Kietasis kūnas: Taip" ir jo tūrį.

Vienas paviršius gali eiti abiem kryptimis: patraukite jį aukštyn, kad gautumėte masę virš žemės, arba stumkite žemyn duobei ar pamatui.

:::tip
Vietoj dviejų spustelėjimų paspauskite ant paviršiaus, tempkite ir atleiskite. Jutiklinio ekrano atveju tai natūraliausias būdas: paspauskite, tempkite, pakelkite.
:::

## Traukti iki kito objekto aukščio

Tempdami užveskite pelę ant kampo, vidurio taško, briaunos ar vadovo kitos modelio dalies. Paviršius prisitraukia prie to aukščio, o žymeklis parodo tašką. Naudokite tai, kad du blokai būtų vienodo aukščio, arba kad sustotumėte ties vadovo linija, kurią nubrėžėte su [matavimo juosta](topic:guides-measure).

Taip pat galite užvesti pelę ant paviršiaus, lygiagretaus tam, kurį stumiate, pavyzdžiui, kito bloko viršaus ar dėžės, ant kurios stovi stulpas, viršaus. Patarime rašoma "Ant paviršiaus", o stumiamas paviršius baigiasi jam lygiai. Pavyzdžiui, stumkite vamzdžio vidinį paviršių žemyn, kol jis bus lygiai su dėže po vamzdžiu.

Paviršius, kampu į stumiamąjį, lygio nenustato. Atstumas seka žymeklį. Taip pat ir paviršius už stumiamojo paviršiaus.

Kai stumiamas paviršius vėl baigiasi lygiai su aplinkiniais paviršiais, jo šonai išnyksta. Nelieka nulinio aukščio šonų, o kontūras, kurį nubraižėte, lieka ant paviršiaus, todėl galite jį vėliau vėl stumti. Kad taptų vienu paviršiumi, ištrinkite kontūro briaunas su {{ui:Trintukas}}: abu paviršiai susijungia.

## Padarykite dėžę aukštesnę ar žemesnę

Stumkite/traukite dėžės viršų. Kadangi šonai jau eina tiesiai aukštyn nuo jo, viršus tiesiog juda: dėžė tampa aukštesnė ar žemesnė, ir nesukuriamos naujos briaunos.

- Visiškai nustūmus viršų iki apačios, dėžė dingsta. ModelCraft sustoja ties nuliniu aukščiu; jis niekada nevarto dėžės iš vidaus į išorę.
- Tas pats galioja bet kuriam paviršiui, kurio visi kaimynai eina išilgai jo krypties, pavyzdžiui, sienos galui.

## Pridėkite erkerį ar išdubimą

1. Nubraižykite stačiakampį ant dėžės šono (pradėkite jį ant paviršiaus; jis lieka paviršiaus plokštumoje).
2. Paspauskite {{key:P}} ir traukite naują stačiakampį **iš** paviršiaus. Tai prideda medžiagos: erkerį, kaminą, prieangį.
3. Arba stumkite jį **į vidų**. Tai išpjauna išdubimą: verandą, nišą, atitrauktą įėjimą.

Kai naujos dalies šonai susilygiuoja su jau esančiais paviršiais, jie susilieja į vieną paviršių, todėl plokščioje sienoje nelieka klaidinančių linijų.

## Stumti iki galo per

Stumiant paviršių į kietąjį kūną, jis sustoja ties pirmuoju paviršiumi už jo. Pasiekęs tą paviršių, jis išpjauna angą per. Taip daromi langai ir durys storoje sienoje. Žr. [Išpjauti angą per sieną](topic:openings).

## Įveskite atstumą

Spustelėję paviršių, įveskite atstumą ir paspauskite {{key:Enter}}.

- Įvestas atstumas eina ta kryptimi, kuria judėjote. Jei dar nejudėjote, jis eina link paviršiaus priekio (iš kietojo kūno — į išorę, nuo žemės — aukštyn).
- Įveskite neigiamą skaičių, pavyzdžiui `-500`, kad eitumėte priešinga kryptimi.
- Jei persigalvojote prieš spustelėdami, paspauskite {{key:Esc}}. Paviršius grįžta atgal.

## Pakartoti paskutinį atstumą

Atlikę vieną stūmimą/traukimą, su vis dar pasirinktu {{ui:Stumti/traukti}} dukart spustelėkite kitą paviršių. Jis pajuda tuo pačiu atstumu. Tai greitas būdas suteikti kelioms sienoms ar keliems aukštams tą patį storį ar aukštį.

ModelCraft prisimena atstumą, kol perjungiate į kitą įrankį.

## Verta žinoti

- Stumti/traukti veikia su vienu paviršiumi vienu metu. Jei spustelėsite ką nors, kas nėra paviršius, būsenos juosta rašo: "Stumti/traukti veikia su paviršiumi. Spustelėkite paviršių."
- Norėdami stumti/traukti paviršių grupės ar komponento viduje, pirmiausia jį atidarykite (dukart spustelėkite).
- Su įjungtu **Susidūrimas** stūmimas ar traukimas, kuris atsitrenkia į kitą kietąjį kūną, sustoja ten, kur liečiasi, o patarime nurodoma, į ką atsitrenkė (objekto pavadinimas arba "laisva geometrija šioje grupėje"), ir paryškinami paviršiai, į kuriuos jis atsitrenkė. Duobė, kurią stumiate į savo paties kietąjį kūną (pavyzdžiui, paviršius, nustumtas atgal žemyn), yra to kietojo kūno dalis ir niekada nesustabdoma jos sienų.
- Du kietieji kūnai, vienas į kitą įstumti, nepjaunami ir nesijungia: jų paviršiai tiesiog eina per. Žr. [Dar neįgyvendinta](topic:not-built-yet).
