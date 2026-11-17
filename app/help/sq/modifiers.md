---
title: Modifikuesit në një rrjetë, grup ose komponent
summary: Shkallëzo, pasqyro, grilë, lëmo, pjerrëzo, pres dhe përkul një rrjetë pa e ndryshuar atë; përsërit ose shkallëzo një grup ose komponent me të njëjtën stivë; bëje të përhershëm kur je gati.
keywords: modifikues, modifikuesit, stivë, grup, komponent, shkallë, redakto burimin, jo-shkatërrues, pasqyrë, grilë, grilë rrethore, nënndarje, sipërfaqe nënndarjeje, lëmo, pjerrëzo, trashëso, trashësi, boolean, pres, zhvendos, zhurmë, bashko pikat, zvogëlo, thjeshto, kafaz rrjete, kafaz, deformim kurbe, përkul, mbështjellje, zbato
from: dd5ec1cb
---

Një **modifikues** ndryshon atë që shfaq një rrjetë pa e ndryshuar vetë rrjetën. Pasqyro një gjysmë pjese dhe modelo vetëm atë gjysmë; rrumbullako një kuti me një sipërfaqe nënndarjeje dhe vazhdo ta redakton kutinë. Modifikuesit ndodhen në një **stivë** dhe punojnë radhazi, nga lart poshtë. Ajo që shikon, eksporton, printon dhe renderon është rrjeta me çdo modifikues që është i ndezur.

## Shto një modifikues

1. Zgjidh një rrjetë. Në hapësirën Model, seksioni i saj **Modifikuesit** është te {{ui:Informacioni i entitetit}}; në hapësirën Rrjetë është në panelin në të djathtë.
2. Zgjidh një nga {{ui:Shto një modifikues…}}. Shkon në fund të stivës.
3. Ndrysho cilësimet nën emrin e tij. Gjatësitë marrin të njëjtat vlera si kutia e vlerës, kështu që `600mm`, `2'6"` dhe `(6m)/4` funksionojnë të gjitha.

Çdo ndryshim është një hap zhbërjeje: {{key:Mod+Z}} e heq.

## Butonat në çdo modifikues

- Kutia e zgjedhjes e ndez ose e fik.
- Butoni i ekranit e shfaq ose e fsheh në pamje (mbetet në stivë).
- Butoni i kamerës e shfaq ose e fsheh në foto dhe video të renderuara, kështu që një modifikues mund të jetë vetëm për renderime (ose vetëm për pamjen).
- Shigjetat e zhvendosin lart ose poshtë stivës. Rendi ka rëndësi: pasqyro pastaj nënndaj jep një kthesë të butë; nënndaj pastaj pasqyro nuk e jep.
- {{ui:Zbato}} e bën formën pjesë të rrjetës: modifikuesit mbi këtë dhe ky vetë aplikohen mbi vetë rrjetën dhe largohen nga stiva. Është një hap zhbërjeje.
- Kryqi e heq.

## Modifikuesit

| Modifikuesi | Çfarë bën |
| --- | --- |
| Shkallë | Shkallëzon rreth origjinës së objektit, me një faktor për të kuqen, jeshilen dhe blunë. Edhe në një grup ose komponent. |
| Pasqyrë | Shton një kopje të pasqyruar përtej të kuqes, jeshiles ose blusë, përmes origjinës së rrjetës, dhe bashkon gjysmat aty ku takohen. |
| Grilë | Kopjon në një rresht (një hap me madhësinë e vet shumëzuar me numrat që jep, plus një hap fiks), rreth një boshti, ose përgjatë një kurbe në model. Një grup ose komponent merr rreshtin. |
| Sipërfaqe nënndarjeje | Lëmon rrjetën me nënndarje Catmull-Clark. Skajet e mprehta mbeten me brazdë. Renderimet mund të përdorin më shumë nivele se pamja. |
| Pjerrëzo | Rrumbullakos çdo skaj më të mprehtë se këndi që jep. |
| Trashëso | I jep një sipërfaqeje trashësi dhe mbyll buzën. |
| Boolean | Pret, bashkon ose mban mbivendosjen me një objekt tjetër në model. Të dy duhet të jenë solide të mbyllura. |
| Zhvendos | Lëviz sipërfaqen brenda ose jashtë me zhurmë të butë. I njëjti seed jep të njëjtat gungë çdo herë. |
| Bashko pikat | Bashkon kulmet më afër se një distancë. |
| Zvogëlo | Mban një pjesë të trekëndëshave, duke hequr ato që ndryshojnë formën më pak. |
| Lëmo | Relakson kulmet drejt fqinjëve të tyre. |
| Kafaz rrjete | Përkul rrjetën me një kafaz: lëviz pikat e kafazit dhe rrjeta ndjek. |
| Deformim kurbe | Përkul rrjetën përgjatë një kurbe në model, përgjatë të kuqes, jeshiles ose blusë. |
| Mbështjellje | Lëviz çdo kulm mbi pikën më të afërt të një objekti tjetër. |

## Në një grup ose komponent

Një grup ose komponent mund të mbajë gjithashtu një recetë, kështu që kupola e një llambe mund të jetë një **Shkallë** dhe një **Grilë** e asaj kupole, dhe ndryshimi i një numri ndryshon llambën.

1. Zgjidh një grup ose komponent. Te {{ui:Informacioni i entitetit}}, seksioni i tij **Modifikuesit** liston stivën (fillimisht bosh).
2. Zgjidh **Shkallë** ose **Grilë** nga {{ui:Shto një modifikues…}}. Grupi bëhet një komponent që është **origjinali, i vendosur nga stiva**. Origjinali mbahet: redakto atë dhe çdo kopje ndjek menjëherë.
3. Shkallë merr një faktor për të kuqen, jeshilen dhe blunë (`1, 1, 2` dyfishon lartësinë). Grilë merr numrin e kopjeve, një hap si pjesë të madhësisë së rezultatit deri tani, dhe një hap shtesë në gjatësi.

Stiva punon nga lart poshtë mbi boshtet e vetë origjinalit, rreth origjinës së tij, kështu që rendi ka rëndësi: një Grilë me tri kopje 3 m larg, pastaj Shkallë 2 në të kuqe, i vendos kopjet 6 m larg; Shkallë fillimisht dhe pastaj Grilë i mban 3 m larg. Kutia, shigjetat dhe kryqi punojnë si në një rrjetë; butonat e pamjes dhe të kamerës dhe {{ui:Zbato}} në një modifikues nuk punojnë, sepse një stivë në një grup është një gjë e vetme.

- {{ui:Redakto burimin}} hap origjinalin në vend. Ndryshimet shfaqen në çdo kopje; mbyllja të kthen aty ku ishe.
- {{ui:Pjekni modifikuesit}} e bën rezultatin skaje dhe sipërfaqe të thjeshta dhe heq stivën, në një hap zhbërjeje. Kopjet që mbivendosen mbeten gjeometri e veçantë: pjekja nuk është bashkim.
- Kopjet e komponentit ndajnë recetën; {{ui:Bëje unik}} e ndan atë (origjinali mbetet i përbashkët).
- Stiva ruhet në skedar, mbartet me kopjim dhe ngjitje dhe me zhbërjen, dhe Pastro të papërdorurat mban origjinalin. Një program që nuk i njeh ende modifikuesit i shfaq kopjet.
- Deri në pjekje, rezultati nuk mund të hyhet, shpërbëhet, ndryshohet në madhësi ose shtrembërohet: do të rindërtohej në ndryshimin e radhës. Çdo veprim e thotë këtë.
- Kufijtë janë 32 modifikues dhe 1,000 kopje. Një komponent i bërë për t'u shtrirë (shtrirje) dhe një stivë nuk mund ta ndajnë ende një përkufizim.

## Sipërfaqe nënndarjeje

Nënndarja lëmon një rrjetë me Catmull-Clark: çdo sipërfaqe bëhet sipërfaqe katërkëndëshe, dhe çdo nivel jep katër herë më shumë. Një kuti me dy ose tre nivele tashmë duket si formë e rrumbullakosur, dhe vazhdon ta redaktosh kutinë.

- **Nivelet në pamje** cakton sa e lëmuar është.
- **Nivelet në renderime** cakton sa të lëmuara janë fotot dhe videot e renderuara; renderimet mund të përdorin më shumë nivele se pamja.
- **Renderimet mbi sipërfaqen e vërtetë të lëmuar** vendos pikat e një rrjete të renderuar mbi sipërfaqen limit drejt së cilës tendojnë nivelet, kështu që edhe dy nivele renderohen po aq të lëmuara sa shumë.
- **Brazdat** mbajnë skajet të mprehta: në hapësirën e punës Rrjetë zgjidh skajet dhe përdor {{ui:Brazdë}} (1 mbetet i mprehtë, 0.5 rrumbullakoset pak, 0 është i lëmuar). Shih [Redakto një rrjetë](topic:mesh-edit).
- **Ul nivelin e pamjes në një rrjetë të madhe:** kur nivelet që kërkon do të jepnin më shumë sipërfaqe se sa e trajton mirë kompjuteri yt për pamjen, pamja shfaq një nivel më të ulët dhe thotë cilin. {{ui:Zbato}} përdor gjithmonë çdo nivel. Sa sipërfaqe janë caktohet nga klasa e kompjuterit tënd te {{ui:Cilësimet}} › Renderimi › Kompjuteri yt.
- Skajet e hapura ruajnë qoshet e tyre dhe qëndrojnë në vijën e skajeve të tyre.

## Përkul me një kafaz

1. Shto një modifikues {{ui:Kafaz rrjete}} dhe shtyp {{ui:Shto një kafaz rrjete rreth rrjetës}}. Një kafaz 3 × 3 × 3 pikash shfaqet rreth rrjetës, i vizatuar me tela.
2. Hap kafazin në hapësirën e punës Rrjetë (kliko dy herë mbi të) dhe lëviz pikat e tij. Rrjeta ndjek me butësi.

:::tip
Një kafaz është një rrjetë si çdo tjetër: fshihe me etiketën e tij kur të përfundosh.
:::

## Rrjeta të mëdha

Stiva të vogla llogariten menjëherë. Një e madhe llogaritet në sfond në çdo bërthamë të kompjuterit tënd: pamja vazhdon të shfaqë rezultatin e fundit deri sa i riu të jetë gati. Booleanët ngarkojnë modeluesin e solideve herën e parë; pamja e thotë këtë për një çast.

## Ç'nuk bëjnë ende modifikuesit

- Pesha për kulm (një zbutje e lyer mbi rrjetë) për Zhvendos, Lëmo dhe Mbështjellje.
- Modifikues të tjerë përveç Shkallës dhe Grilës lineare mbi gjeometrinë shtyj/tërhiq (grupe dhe komponentë): shndërroje fillimisht në rrjetë ({{ui:Shndërro në rrjetë}}). Pasqyra, Grila rrethore ose kurbore, Përkulja dhe Konicitet në grupe vijnë më vonë.
