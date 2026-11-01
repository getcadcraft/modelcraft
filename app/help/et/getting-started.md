---
title: Alustamine ModelCraftiga
summary: Milleks ModelCraft on, kuidas seda avada ning sinu esimene kast ristkülikust salvestatud mudelini.
keywords: alustamine, esimene mudel, alusta, õpetus, sissejuhatus, kast, massing, 3d, lükka tõmba, kiire algus, juhendatud, juhend, algaja, uus 3D-s
from: d47ad719
---

ModelCraft on 3D-modelleerija varajaseks projekteerimiseks: massiuuringud, ruumipaigutused, kiired hoonevormid ja nende visatavad varjud. Joonistad lamedaid kujundeid, tõstad need tahkisteks ja jätkad nende töötlemist, joonistades nende tahkudele. See töötab veebibrauseris ning sinu mudelid jäävad sinu arvutisse.

Kui oled kasutanud SketchUp'i, kandub enamik sellest üle: samad tööriistatähed, lükka/tõmba, väärtusväli täpsete suuruste jaoks, grupid ja komponendid. [Teistest modelleerijatest tulijad](topic:coming-from) loetleb erinevused.

## Ava ModelCraft

1. Ava ModelCraft praeguses versioonis Chrome'is, Edge'is, Firefoxis või Safaris. Vaata [Brauserid ja arvutid](common:browsers).
2. Oota, kuni ilmub 3D-vaade: keskel hele (või tume) ala kaardiga pealkirjaga „Alusta modelleerimist“.

Ekraanil on ülal tööriistariba, vasakul {{ui:Struktuur}} ja {{ui:Komponendid}}, keskel 3D-vaade, paremal {{ui:Objekti teave}}, {{ui:Stiil}} ja {{ui:Stseenid}} ning all olekuriba väärtusvälja ja ühikutega. [ModelCraft'i ekraan](topic:workspace) selgitab iga osa.

:::note
ModelCraft vajab WebGL-i, brauseri 3D-joonistamise funktsiooni. Kui ekraani keskosa jääb tühjaks ja tööriistad ei tee midagi, vaata [Tõrkeotsing](topic:troubleshooting#the-3d-view-is-blank).
:::

## Kontrolli esmalt ühikuid

Vaata paremat alanurka. Ühikuvalija näitab, millistes ühikutes pikkusi mõõdetakse.

- Uus mudel algab **jalgades ja tollides**, kui brauser on seadistatud Ameerika Ühendriikidele (samuti Libeeria ja Myanmar), ning mujal **millimeetrites**.
- Ühiku muutmiseks vali valijast teine ühik: {{ui:jalad ja tollid}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} või {{ui:mm}}. Mudel ise ei muutu suuruselt; muutub ainult see, kuidas pikkused kuvatakse ja kuidas ilma ühikuta arve loetakse.

Ilma ühikuta sisestatud number kasutab mudeli ühikut. Jalgade ja tollide mudelis on ilma ühikuta number **tollid**, nii et `120` tähendab 10 jalga.

## Lase ModelCraftil juhendada esimest mudelit

Algaja? Kaardil {{ui:Alusta modelleerimist}} klõpsa {{ui:Juhendatud esimene mudel}} (see on ka jaotises {{ui:Vaated}}). Väike kaart juhatab sind läbi nelja sammu, lamedast ristkülikust mudelini, mis on valmis 3D-printerile:

1. Joonista ristkülik maapinnale.
2. Tõsta see kastiks.
3. Tee kast üheks objektiks (grupiks).
4. Kontrolli 3D-printimist, seejärel laadi alla 3MF- või STL-fail.

Kaart jälgib mudelit, mitte nuppe: see läheb edasi, kui samm on tehtud, sõltumata sellest, kuidas seda tehti, ja läheb sammu võrra tagasi, kui tagasi võtad. {{ui:Vali tööriist}} valib tööriista sinu eest. Sulge kaart igal ajal nupuga {{ui:×}}.

## Joonista esimene kast

1. Vajuta {{key:R}} tööriista {{ui:Ristkülik}} jaoks või klõpsa tööriistaribal grupis {{ui:Joonista}} nuppu {{ui:Ristkülik}}.
2. Klõpsa üks kord maapinnal vaate keskosa lähedal. See on esimene nurk.
3. Liiguta hiirt eemale. Ristkülik liigub kaasa ning alumises väärtusväljas (märgitud {{ui:Mõõdud}}) näed selle suurust.
4. Kirjuta suurus ja vajuta {{key:Enter}}: näiteks `4m,3m` või jalgades ja tollides `16',12'`. Väljale klõpsamine ei ole vajalik; numbri kirjutamine suunab selle sinna.

   Saad lameda ristküliku maapinnal. See on **tahk**: pind, mille ümber on servad.

5. Vajuta {{key:P}} tööriista {{ui:Lükka/tõmba}} jaoks.
6. Klõpsa ristkülikut, liiguta hiirt üles ja klõpsa uuesti. Või klõpsa ristkülikut ja kirjuta kõrgus, näiteks `3m` või `10'`, ning vajuta {{key:Enter}}.

   Ristkülik muutub kastiks, millel on ülemine ja alumine tahk ning neli külgtahku.

7. Vajuta {{key:Space}}, et naasta tööriistale {{ui:Vali}}, ja klõpsa kasti ülemist tahku. Paremal asuv {{ui:Objekti teave}} näitab selle pindala.

:::tip
Võid ka lohistada, selle asemel et klõpsata kaks korda: vajuta esimesel nurgal, lohista ja vabasta teisel. Mõlemad viisid töötavad kõigi joonistamistööriistadega.
:::

## Vaata ringi

- **Orbiit:** lohista keskmise hiireklahviga (ratas) või vajuta {{key:O}} ja lohista vasaku klahviga.
- **Nihutamine:** lohista parema klahviga või keskmise klahviga, kui hoiad all {{key:Shift}}.
- **Suumimine:** keera ratast. See suumib selle suunas, mis on hiire all.
- **Vaata kõike:** vajuta {{key:Shift+Z}} või klõpsa {{ui:Ulatus}}.

Puuteplaadil või puutekraanil on žestid teistsugused. Vaata [Orbiit, nihutamine ja suumimine](topic:orbit-pan-zoom).

## Võta tagasi

Vajuta {{key:Mod+Z}}, et tagasi võtta, ja {{key:Mod+Y}}, et uuesti teha, või kasuta tööriistaribal {{ui:Võta tagasi}} ja {{ui:Tee uuesti}}. ModelCraft mäletab viimased 200 sammu, kui mudel on avatud. Ajalugu ei salvestu failisse.

## Salvesta mudel

1. Klõpsa grupis {{ui:Fail}} nuppu {{ui:Salvesta}} või vajuta {{key:Mod+S}}.
2. Brauser laadib alla faili, mis on nimetatud mudeli järgi, näiteks `Untitled.modelcraft`. Olekuriba ütleb, kuhu see läks: „Untitled.modelcraft salvestatud allalaadimistesse.“

**Salvestamine on allalaadimine.** Iga salvestus loob uue koopia sinu allalaadimiste kausta; see ei kirjuta üle faili, mille avasid. Korraliku projektikausta jaoks teisalda või nimeta fail ise ümber. [Ava, salvesta, impordi ja ekspordi](topic:files) selgitab, miks ja mida veel saad teha.

:::warning
ModelCraft ei salvesta iseseisvalt. Kui suled vahekaardi salvestamata muudatustega, küsib brauser enne („Lahkuda saidilt?“). Vali jää lehele ja salvesta.
:::

## Abi

Vajuta {{key:F1}} või klõpsa rakenduse ribal {{ui:Abi}}, et avada see abi mudeli kõrval. See töötab ilma ühenduseta. Vajuta uuesti {{key:F1}} või abis {{key:Esc}}, et sulgeda. Vaata [Selle abi kasutamine](common:help).

## Kuhu edasi

- [Joonista tahke joonte, ristkülikute ja ringidega](topic:draw-faces)
- [Lükka ja tõmba tahke tahkisteks](topic:push-pull)
- [Sisesta täpsed suurused väärtusväljale](topic:value-box)
- [Iga klahv ja hiiretoiming](topic:keyboard)
