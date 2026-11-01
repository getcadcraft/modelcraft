---
title: Pradžia su ModelCraft
summary: Kam skirtas ModelCraft, kaip jį atidaryti ir jūsų pirmoji dėžė nuo stačiakampio iki įrašyto modelio.
keywords: pradžia, pirmas modelis, pradėti, pamoka, įvadas, dėžė, masės studijos, 3d, stumti traukti, greitas startas, vadovaujamas, vadovas, pradedantysis, naujokas 3D
from: d47ad719
---

ModelCraft yra 3D modeliavimo programa ankstyvam projektavimui: masės studijoms, patalpų planams, greitoms pastatų formoms ir jų metamiems šešėliams. Braižote plokščias figūras, traukiate jas aukštyn į kietuosius kūnus ir toliau dirbate su jais braižydami ant jų paviršių. Ji veikia jūsų žiniatinklio naršyklėje, o modeliai lieka jūsų kompiuteryje.

Jei naudojote SketchUp, didžioji dalis to, ką žinote, tinka ir čia: tie patys įrankių klavišai, stūmimas-traukimas, reikšmės laukelis tiksliems dydžiams, grupės ir komponentai. [Atėjus iš kitų modeliavimo programų](topic:coming-from) išvardyta, kas kitaip.

## ModelCraft atidarymas

1. Atidarykite ModelCraft dabartinėje Chrome, Edge, Firefox ar Safari versijoje. Žr. [Naršyklės ir kompiuteriai](common:browsers).
2. Palaukite, kol pasirodys 3D vaizdas: šviesi (arba tamsi) sritis viduryje su kortele pavadinimu „Pradėti modeliavimą“.

Ekrane viršuje yra įrankių juosta, kairėje - {{ui:Struktūra}} ir {{ui:Komponentai}}, viduryje - 3D vaizdas, dešinėje - {{ui:Objekto informacija}}, {{ui:Stilius}} ir {{ui:Scenos}}, o apačioje - būsenos juosta su reikšmės laukeliu ir vienetais. [ModelCraft ekranas](topic:workspace) paaiškina kiekvieną dalį.

:::note
ModelCraft reikia WebGL, naršyklės 3D braižymo funkcijos. Jei ekrano vidurys lieka tuščias ir įrankiai neveikia, žr. [Trikčių šalinimas](topic:troubleshooting#the-3d-view-is-blank).
:::

## Pirmiausia patikrinkite vienetus

Pažiūrėkite į apatinį dešinįjį kampą. Vienetų rinkiklis rodo, kokiais vienetais matuojami ilgiai.

- Naujas modelis prasideda **pėdomis ir coliais**, kai naršyklė nustatyta JAV kalba (taip pat Liberijoje ir Mianmare), o **milimetrais** visur kitur.
- Norėdami pakeisti, pasirinkite kitą vienetą rinkiklyje: {{ui:ft ir in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} arba {{ui:mm}}. Pats modelis nekeičia dydžio; keičiasi tik tai, kaip rodomi ilgiai ir kaip skaitomi be vieneto įvesti skaičiai.

Įvedus skaičių be vieneto, naudojamas modelio vienetas. Modelyje su pėdomis ir coliais skaičius be vieneto reiškia **colius**, todėl `120` reiškia 10 pėdų.

## Leiskite ModelCraft vadovauti jūsų pirmajam modeliui

Naujokas 3D srityje? Kortelėje {{ui:Pradėti modeliavimą}} spustelėkite {{ui:Vadovaujamas pirmasis modelis}} (jis taip pat yra {{ui:Vaizdai}} meniu). Maža kortelė veda per keturis žingsnius - nuo plokščio stačiakampio iki modelio, paruošto 3D spausdintuvui:

1. Nubraižykite stačiakampį ant žemės.
2. Patraukite jį aukštyn į dėžę.
3. Paverskite dėžę vienu objektu (grupe).
4. Patikrinkite 3D spausdinimui, tada atsisiųskite 3MF arba STL failą.

Kortelė stebi modelį, o ne mygtukus: ji pereina toliau, kai žingsnis atliktas, nepriklausomai nuo to, kaip tai padarėte, ir grįžta žingsniu atgal, kai anuliuojate. {{ui:Pasirinkti įrankį}} parenka įrankį už jus. Uždarykite ją bet kada su {{ui:×}}.

## Nubraižykite pirmą dėžę

1. Paspauskite {{key:R}} - {{ui:Stačiakampis}} įrankis, arba spustelėkite {{ui:Stačiakampis}} grupėje {{ui:Braižymas}} įrankių juostoje.
2. Spustelėkite vieną kartą ant žemės netoli vaizdo vidurio. Tai pirmasis kampas.
3. Nuvilkite žymeklį toliau. Stačiakampis seka jį, o apatinėje reikšmės laukelyje (pavadinimu {{ui:Matmenys}}) rodomas jo dydis.
4. Įveskite dydį ir paspauskite {{key:Enter}}: pavyzdžiui, `4m,3m`, arba `16',12'` pėdomis ir coliais. Nereikia pirmiausia spustelėti reikšmės laukelio; įvedus skaičių, jis pats patenka ten.

   Gaunate plokščią stačiakampį ant žemės. Tai yra **paviršius**: paviršius su aplink jį esančiomis briaunomis.

5. Paspauskite {{key:P}} - {{ui:Stumti/traukti}}.
6. Spustelėkite stačiakampį, pajudinkite žymeklį aukštyn ir vėl spustelėkite. Arba spustelėkite stačiakampį ir įveskite aukštį, pavyzdžiui, `3m` arba `10'`, tada paspauskite {{key:Enter}}.

   Stačiakampis virsta dėže su viršumi, apačia ir keturiomis sienelėmis.

7. Paspauskite {{key:Space}}, kad grįžtumėte į {{ui:Pasirinkti}}, tada spustelėkite dėžės viršų. Dešinėje esanti {{ui:Objekto informacija}} parodo jo plotą.

:::tip
Vietoj dviejų spustelėjimų galite vilkti: paspauskite ant pirmojo kampo, vilkite ir atleiskite ant antrojo. Abu būdai veikia visiems braižymo įrankiams.
:::

## Apsidairykite

- **Sukti vaizdą:** vilkite vidurinį pelės mygtuką (ratuką) arba paspauskite {{key:O}} ir vilkite kairiuoju mygtuku.
- **Slinkti:** vilkite dešiniuoju mygtuku arba vidurinuoju, laikydami {{key:Shift}}.
- **Keisti mastelį:** sukite ratuką. Jis priartina prie to, kas yra po žymekliu.
- **Matyti viską:** paspauskite {{key:Shift+Z}} arba spustelėkite {{ui:Visi objektai}}.

Jutiklinėje plokštėje ar jutikliniame ekrane gestai kiti. Žr. [Sukimas, slinkimas ir mastelio keitimas](topic:orbit-pan-zoom).

## Anuliavimas

Paspauskite {{key:Mod+Z}}, kad anuliuotumėte, ir {{key:Mod+Y}}, kad perdarytumėte, arba naudokite {{ui:Anuliuoti}} ir {{ui:Perdaryti}} įrankių juostoje. ModelCraft, kol modelis atidarytas, prisimena paskutinius 200 žingsnių. Istorija faile neišsaugoma.

## Modelio įrašymas

1. Spustelėkite {{ui:Įrašyti}} grupėje {{ui:Failas}} arba paspauskite {{key:Mod+S}}.
2. Naršyklė atsisiunčia failą, pavadintą pagal jūsų modelį, pavyzdžiui, `Untitled.modelcraft`. Būsenos juostoje nurodoma, kur jis nuėjo: „Įrašytas Untitled.modelcraft į jūsų atsisiuntimus.“

**Įrašymas yra atsisiuntimas.** Kiekvienas įrašymas sukuria naują kopiją atsisiuntimų aplanke; atidaryto failo jis nepakeičia. Norėdami turėti tvarkingą projekto aplanką, failą perkelkite ar pervardykite patys. [Atidarymas, įrašymas, importavimas ir eksportavimas](topic:files) paaiškina, kodėl ir ką dar galite daryti.

:::warning
ModelCraft neįrašo automatiškai. Jei uždarote skirtuką su neįrašytais pakeitimais, naršyklė pirma klausia („Palikti svetainę?“). Pasirinkite likti ir įrašykite.
:::

## Pagalba

Paspauskite {{key:F1}} arba spustelėkite {{ui:Žinynas}} programos juostoje, kad šis žinynas atsidarytų šalia modelio. Jis veikia be ryšio. Norėdami jį uždaryti, paspauskite {{key:F1}} dar kartą arba {{key:Esc}} žinyno viduje. Žr. [Žinyno naudojimas](common:help).

## Kur eiti toliau

- [Braižykite paviršius linijomis, stačiakampiais ir apskritimais](topic:draw-faces)
- [Stumkite ir traukite paviršius į kietuosius kūnus](topic:push-pull)
- [Įveskite tikslius dydžius reikšmės laukelyje](topic:value-box)
- [Kiekvienas klavišas ir pelės veiksmas](topic:keyboard)
