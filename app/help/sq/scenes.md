---
title: Ruaj pamjet si skena
summary: Ruaj një kamerë dhe stil si skenë, përditëso dhe riemëro skenën, dhe kalo ose luaj nëpër skena për të prezantuar një projekt.
keywords: skenë, pamje, pamje e ruajtur, kamerë, prezantim, animacion, luaj, shfaqje rrëshqitëse, page up, page down, skeda, shëtitje
from: 38680d6e
---

Një **skenë** mban mend një pozicion kamere, një stil dhe atë që është fshehur: nga ku po shikon, perspektivë ose paralele, stilin e sipërfaqeve, skajet, cilësimet e diellit, grupet e fshehura, etiketat e fikura dhe prerjen. Skenat ruhen në skedarin `.modelcraft`.

## Shto një skenë

1. Cakto pamjen: rrotullo, zmadho, zgjidh një stil, cakto diellin.
2. Te paneli {{ui:Scenes}} në të djathtë, kliko {{ui:Add scene}}.

   Skena shfaqet në listë, e emërtuar "Skena 1", "Skena 2" e kështu me radhë, dhe si një skedë lart mbi pamjen 3D. Shiriti i statusit thotë "Skena 1 u ruajt: kjo kamerë, stil dhe ajo që është fshehur."

## Shko te një skenë

- Kliko skedën e saj mbi pamjen 3D, ose emrin e saj te lista {{ui:Scenes}}.
- Ose shtyp {{key:PageDown}} për skenën tjetër dhe {{key:PageUp}} për të mëparshmen. {{ui:Tjetra}} dhe {{ui:E mëparshme}} nën listë bëjnë të njëjtën gjë.

Kamera rrëshqet te skena për pak më shumë se gjysmë sekonde. Nëse kompjuteri yt është vendosur të zvogëlojë lëvizjen, ajo kërcen direkt atje.

## Ndrysho, riemëro ose fshi një skenë

Çdo skenë në listë ka tri butona të vegjël pas emrit të saj:

- **Përditëso** (shigjetat rrethore): ruan kamerën, stilin dhe atë që është fshehur tani në atë skenë. "Skena 2 u përditësua."
- **Riemëro** (lapsi): hap dialogun "Riemëro skenën". Shkruaj emrin e ri dhe kliko {{ui:Ruaj}}.
- **Fshi** (koshi): heq skenën. "Skena 2 u fshi. Ctrl+Z e kthen."

Shtimi, përditësimi, riemërimi dhe fshirja e skenave janë hapa zhbërjeje, si ndryshimet e modelit.

## Kyç kamerën e një skene

Kur rendit të njëjtën pamje përsëri e përsëri ndërsa projekti ndryshon, kyç kamerën e asaj skene, që pamja të mos lëvizë kurrë aksidentalisht.

1. Te lista {{ui:Scenes}}, kliko butonin **kyç** (dryni i hapur) pas emrit të skenës. Ai mbyllet, dhe skeda e skenës mbi pamjen 3D shfaq një dryn të vogël. Shiriti i statusit thotë "Skena 2: kamera u kyç."
2. Shko te skena kur do të rendësh: kamera kthehet saktësisht te pamja e ruajtur, kështu që imazhet e bëra prej saj përputhen me ato të mëparshmet.

Ndërsa kamera është e kyçur, **Përditëso** ende ruan stilin dhe atë që është fshehur në skenë, por kamera mbetet aty ku ishte, edhe nëse ke rrotulluar tutje. Kliko dryn përsëri për ta zhkyçur; Përditëso atëherë ruan përsëri pamjen aktuale. Kyçja dhe zhkyçja janë hapa zhbërjeje, dhe kyçja ruhet në skedarin `.modelcraft`.

## Prezanto

1. Shto dy ose më shumë skena.
2. Kliko {{ui:Luaj}} nën listë. ModelCraft kalon te skena tjetër çdo disa sekonda dhe kthehet te e para pas së fundit.
3. Kliko {{ui:Ndalo}} (i njëjti buton) ose shtyp {{key:Esc}} për të ndaluar.

Për një studim të diellit, shto një skenë për çdo orë me vetëm {{ui:Ora}} të ndryshuar, pastaj luaji ato. Shih [Stilet dhe hijet e diellit](topic:styles-shadows#a-sun-study).

Për të prezantuar pa shiritat, shtyp {{key:Ctrl+Shift+F}} dy herë: ekran i plotë, pastaj ekran i plotë me shiritat e fshehur. Skedat e skenave mbeten mbi pamje.

## Çfarë shfaq një skenë

Një skenë mban mend çfarë ishte fshehur kur e ruajte: grupet dhe komponentët që [fshihe](topic:hide-isolate), [etiketat](topic:tags) që fike, dhe cilat [plane prerjeje](topic:sections) presin. Kalimi te skena i fsheh dhe i shfaq përsëri. Kështu një skenë mund të tregojë shtëpinë e tërë, tjetra shtëpinë me etiketën e çatisë të fikur, tjetra një prerje përmes saj.

Sipërfaqet dhe skajet e lira të fshehura nuk janë pjesë e skenave. Kalimi te një skenë nuk krijon hap zhbërjeje. Skenat e ruajtura nga një version më i vjetër i ModelCraft lënë atë që është fshehur ashtu si është; kliko Përditëso për ta ruajtur te to.

## Eksporto një animacion

{{ui:Eksporto animacionin}}, nën listë, luan skenat nga e para te e fundit, duke lëvizur kamerën butësisht midis tyre, dhe ruan filmin si video **WebM** (dy sekonda lëvizje dhe një pauzë e shkurtër për çdo skenë). Regjistron pamjen ashtu si e sheh, në madhësinë që ka në ekran, në [pamjen e prezantimit](topic:styles-shadows#presentation-view) (pa boshte, udhëzues ose zgjedhje). Shtyp {{key:Esc}} ose kliko butonin përsëri për të ndaluar pa ruajtur. WebM luhet në shfletues dhe VLC, dhe redaktorët e videos e konvertojnë.

Për një shëtitje të renderuar (qiell, diell, hije, materiale) në një madhësi që zgjedh, përdor {{ui:Renderto video…}} në vend të kësaj: pa çelësa animacioni, merr skenat, sipas radhës, si rrugën e kamerës. Shih [Animo kamerën dhe objektet](topic:animation).

## Gjëra për të ditur

- Ndryshimi i stilit ose lëvizja e kamerës pasi shkon te një skenë nuk e ndryshon skenën derisa të klikosh Përditëso.
- Skenat nuk eksportohen në Collada, OBJ, glTF, STL ose IFC.
