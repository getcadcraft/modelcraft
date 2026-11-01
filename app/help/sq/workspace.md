---
title: Ekrani i ModelCraft
summary: Një shëtitje përmes shiritit të veglave, paneleve në çdo anë, pamjes 3D dhe shiritit të statusit, sipas emrave që shihen në ekran.
keywords: ekran, paraqitje, shirit veglash, panele, pasqyra, informacioni i entitetit, stili, skenat, shiriti i statusit, kutia e vlerave, njësitë, ndërfaqe, shëtitje
from: 4a9a4516
---

Nga lart poshtë: shiriti i aplikacionit, shiriti i veglave, tri kolonat (panelet e majtë, pamja 3D, panelet e djathtë) dhe shiriti i statusit.

## Shiriti i aplikacionit

Shiriti i hollë në krye i takon çdo aplikacioni CadCraft. Ka emrin dhe versionin e aplikacionit, {{ui:Rreth ModelCraft}}, butonin e mënyrës së ekranit dhe ndërrimin {{ui:Letra}} / {{ui:Model}}.

- {{ui:Letra}} është tema e çelët dhe {{ui:Model}} ajo e errët. Pamja 3D i ndryshon ngjyrat për t'u përshtatur; modeli yt nuk ndryshon.
- Butoni i mënyrës së ekranit (në fillim thotë {{ui:Ekran i plotë}}) dhe {{key:Ctrl+Shift+F}} kalojnë midis tre mënyrave: normale, ekran i plotë, dhe ekran i plotë me shiritat e fshehur. Me shiritat e fshehur, shpjego në skajin e sipërm të ekranit (ose prek atë) për t'i sjellë përsëri. {{key:Esc}} del nga ekrani i plotë.

:::note
{{key:Ctrl+Shift+F}} përdor tastin Control në çdo kompjuter, edhe në Mac. Në iPhone, ku shfletuesit nuk kanë ekran të plotë, butoni vetëm fsheh dhe shfaq shiritat.
:::

## Shiriti i veglave

Shiriti i veglave është i ndarë në grupe të etiketuara. Kalo me miun mbi një buton për të parë emrin dhe tastin e tij.

Në të majtën e tij, lista {{ui:Hapësirë pune}} ndryshon për çfarë shërbejnë shiriti i veglave dhe paneli i djathtë: {{ui:Model}} (modelim me shtyj/tërhiq, shëtitja më poshtë), {{ui:Rrjetë}} ([redakto një rrjetë](topic:mesh-edit)), {{ui:Kurbë}} ([objekte kurbash](topic:curves)), {{ui:UV}} ([vendos UV-të](topic:uv)), {{ui:Skulpto}} ([skulpto](topic:sculpt)), {{ui:Hijëzim}} ([materiale të bëra me nyje](topic:shading)), {{ui:Animo}} ([anima](topic:animate)) dhe {{ui:Rendero}} ([renderim në pamje](topic:render#render-in-the-view)).

| Grupi | Butonat |
|---|---|
| Skedar | {{ui:E re}}, {{ui:Hap}}, {{ui:Ruaj}}, {{ui:Importo}}, {{ui:Eksporto}} (një menu formatesh) |
| Vizato | {{ui:Vijë}} ({{key:L}}), {{ui:Drejtkëndësh}} ({{key:R}}), {{ui:Rreth}} ({{key:C}}), {{ui:Shumëkëndësh}} ({{key:N}}) |
| Modifiko | {{ui:Përzgjidh}} ({{key:Space}}), {{ui:Shtyj/tërhiq}} ({{key:P}}), {{ui:Zhvendos}} ({{key:M}}), {{ui:Rrotullo}} ({{key:Q}}), {{ui:Shkallë}} ({{key:S}}), {{ui:Gomë}} ({{key:E}}), {{ui:Shirit mase}} ({{key:T}}) |
| Organizo | {{ui:Komponent}} ({{key:G}}), {{ui:Grup}} ({{key:Shift+G}}), {{ui:Çmonto}} |
| Redakto | {{ui:Zhbëj}} ({{key:Mod+Z}}), {{ui:Ribëj}} ({{key:Mod+Y}}), {{ui:Kopjo}} ({{key:Mod+C}}), {{ui:Ngjit}} ({{key:Mod+V}}), {{ui:Më shumë}} (një menu: prit, kopjo, ngjit, ngjit në të njëjtin vend {{key:Mod+Shift+V}}, dyfisho {{key:Mod+D}}, fshi, përzgjidh të gjitha, mos përzgjidh asgjë, dhe stilin e tasteve) |
| Kamera | {{ui:Orbito}} ({{key:O}}), {{ui:Lëviz pamjen}} ({{key:H}}), {{ui:Zmadhim}} ({{key:Z}}), {{ui:Shtrirja}} ({{key:Shift+Z}}), {{ui:Pamjet}} (një menu) |

Tastet e treguara janë ato të shtyj/tërhiq; me stilin Modelues të zgjedhur te [cilësimet e ModelCraft](topic:settings), majat e veglave tregojnë ato taste. Vegla që përdor shfaqet e shtypur. Në një ekran të ngushtë, shiriti i veglave lëviz anash.

Menuja {{ui:Pamjet}} ka {{ui:Iso}}, {{ui:Sipër}}, {{ui:Para}}, {{ui:Djathtas}}, {{ui:Prapa}}, {{ui:Majtas}} dhe {{ui:Poshtë}}, secila e përshtatur me modelin, dhe {{ui:Perspektivë}}, që kalon midis projeksionit perspektiv dhe paralel.

## Pamja 3D

Mesi i ekranit. Vijat e kuqe, të gjelbra dhe blu janë boshtet: e kuqja dhe e gjelbra shtrihen në tokë, blu tregon lart, dhe **veriu është boshti i gjelbër**. Aty ku takohen është origjina.

- Kur nis, një kartelë me titull "Fillo modelimin" liston tastet e para. Zhduket kur zgjedh një vegël vizatimi ose klikon në pamje.
- Ndërsa një vegël punon, pamja shfaq **shenjat e nxjerrjes**: forma të vogla me ngjyrë aty ku treguesi kapet (një rreth jeshil te një skaj, një rreth cian te një mesi, një katror i kuq mbi një skaj, një diamant blu mbi një faqe). Shih [Nxjerrja dhe kapja](topic:inference).
- Gjërat e përzgjedhura bëhen blu. Një faqe e shikuar nga prapa është gri-blu.
- Kur hap një grup për ta redaktuar, gjithçka jashtë tij zbehet, dhe boshtet zhvendosen te boshtet e vetë grupit.
- Kur një model ka skena, një rresht skedash skenash shfaqet lart mbi pamjen.
- Lësho një skedar kudo mbi pamjen për ta hapur ose importuar.

## Panelet e majtë

**{{ui:Pasqyra}}** liston grupet dhe komponentët e modelit, të futura ashtu si janë futur në model. Një komponent i përdorur më shumë se një herë tregon sa herë, si "Dritare (4)".

- Kliko një emër për ta përzgjedhur. Kliko dy herë për ta hapur për redaktim.
- **Gjej me emër** (shfaqet kur ka dy ose më shumë grupe) mban vetëm rreshtat emri i të cilëve përputhet, me grupet ku ndodhen. {{key:Esc}} e pastron.
- **Syri** në fund të një rreshti fsheh ose shfaq atë grup ose komponent (ashtu si bën {{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Fshih}}). Një ikonë etikete do të thotë që është fshehur nga [etiketa](topic:tags) e vet.
- **Riemërto në vend:** kliko një rresht, pastaj shtyp {{key:F2}}, shkruaj, dhe shtyp {{key:Enter}} ({{key:Esc}} mban emrin e vjetër).
- **Tërhiq një rresht** mbi mesin e rreshtit të një grupi tjetër për ta zhvendosur brenda atij grupi, mbi skajin e sipërm ose të poshtëm të një rreshti për ta vendosur pak para ose pas atij rreshti, ose mbi titullin {{ui:Pasqyra}} për ta zhvendosur në nivelin e lartë. Mbetet aty ku është në model, dhe ruan ngjyrën, etiketën dhe emrin e vet. Një grup nuk mund të futet brenda vetes. Çdo zhvendosje është një hap zhbërjeje. Shih [Rirregullo te Pasqyra](topic:groups-components#rearrange-in-the-outliner).
- Ndërsa redakton brenda një grupi, një rresht thotë "Redaktim: Model › …", dhe shfaqet një buton {{ui:Mbyll grupin}}. Mbyll çdo nivel të hapur njëherësh.

**{{ui:Komponentët}}** liston çdo përkufizim komponenti me sa kopje janë vendosur ("3×") dhe një buton {{ui:Vendos}} që shton një kopje tjetër aty ku klikon.

## Panelet e djathtë

**{{ui:Informacioni i entitetit}}** përshkruan atë që është e përzgjedhur. Titulli i saj ndryshon për të thënë çfarë është ajo:

| Titulli | Shfaq | Butonat |
|---|---|---|
| Model (asgjë e përzgjedhur) | Faqe, skaje, grupe, komponentë dhe sa janë vendosur, udhëzues, madhësia e përgjithshme | {{ui:Fshi të gjithë udhëzuesit}} (kur ka udhëzues) |
| Faqe | Sipërfaqja, numri i vrimave | {{ui:Kthe faqen}} |
| Skaj | Gjatësia | asnjë |
| Grup ose Komponent | Emri (shkruaj për ta riemërtuar), sa herë është vendosur, nëse është solid i mbyllur, vëllimi, madhësia | {{ui:Redakto}}, {{ui:Çmonto}}, {{ui:Bëje unik}} (një komponent i vendosur më shumë se një herë), {{ui:Bëj komponent}} (një grup) |
| Pikë udhëzuese ose vijë udhëzuese | asgjë | {{ui:Fshi}} |
| Disa gjëra | Sa faqe, skaje, grupe dhe udhëzues, sipërfaqja totale e faqeve | {{ui:Bëj komponent (G)}}, {{ui:Bëj grup (Shift+G)}} |

**{{ui:Stili}}** cakton si vizatohet modeli: {{ui:Sipërfaqet}} ({{ui:Me hije}}, {{ui:Vijë e fshehur}}, {{ui:Tel-kornizë}}, {{ui:Rreze X}}), {{ui:Shfaq skajet}}, dhe {{ui:Hijet e diellit}} me datën, orën dhe vendin e diellit. Shih [Stilet dhe hijet e diellit](topic:styles-shadows).

**{{ui:Skenat}}** ruan pamjet: {{ui:Shto skenë}}, lista e skenave, dhe {{ui:E mëparshme}}, {{ui:Luaj}} dhe {{ui:Tjetra}}. Shih [Ruaj pamjet si skena](topic:scenes).

## Shiriti i statusit

Përgjatë fundit, nga e majta në të djathtë:

1. **Këshilla**: çfarë kërkon vegla më pas, ose ku po kapet treguesi ("Endpoint", "On red axis").
2. **Mesazhet**: çfarë ndodhi së fundi ("Undid push/pull.", "Imported site.dxf: 1697 edges on the ground, in a group.") ose pse diçka nuk funksionoi.
3. **Kutia e vlerave**: etiketa e saj ndryshon me veglën ({{ui:Gjatësia}}, {{ui:Dimensionet}}, {{ui:Rreze}}, {{ui:Anë}}, {{ui:Distanca}}, {{ui:Këndi}}, {{ui:Shkallë}}, {{ui:Ofset}}). Shfaq madhësinë e drejtpërdrejtë ndërsa punon, dhe pranon atë që shkruan. Shih [Shkruaj madhësi të sakta në kutinë e vlerave](topic:value-box).
4. **Stili i tasteve**: {{ui:Taste: Shtyj-tërhiq}} ose {{ui:Taste: Modelues}} ndërron shkurtoret e tastierës dhe butonat e miut njëherësh (njëlloj si te [cilësimet e ModelCraft](topic:settings)).
5. **{{ui:Kapja}} dhe {{ui:Përplasja}}**: kapja te pikat, skajet dhe boshtet, dhe solidet që ndalen aty ku prekin njëri-tjetrin. E kryqëzuar = e fikur. Kliko për ta ndërruar. Shih [cilësimet e ModelCraft](topic:settings).
6. **Zgjedhësi i njësive**: njësitë në të cilat tregohen gjatësitë. Shih [Fillo me ModelCraft](topic:getting-started#check-the-units-first).

## Në ekran të ngushtë

Nën rreth 760 piksel gjerësi (një telefon, ose një dritare e ngushtë), pamja 3D e mban ekranin. Shiriti i veglave është një rresht që lëviz anash, dhe panelet hapen si fletë nga shiriti në fund të ekranit.
