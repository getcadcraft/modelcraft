---
title: Animo kamerën dhe objektet, dhe renderto një video
summary: Vendos kyçe për kamerën dhe për grupe e komponentë në një kronologji, luaji në pamje, dhe renderto animacionin në një video WebM me qiellin, diellin dhe materialet e renderuesit.
keywords: animacion, animo, kronologji, kyç kornizë, kyçe, kyç, shteg kamere, fluturim, udhëtim, ecje, video, film, webm, renderto video, kornizat, shpejtësia e kornizave, fps, kursor i kohës, kyç automatik, lehtësim, butësim, mbaj, skena, sekuencë png, lëvizje
from: d3a58249
---

**Kronologjia** lëviz kamerën dhe çdo grup ose komponent me kalimin e kohës. Ti vendos **kyçe** (ku është diçka në një moment të caktuar); ModelCraft e lëviz butësisht nga një kyç te tjetri. Luaje në pamje, pastaj renderoje në video me të njëjtin qiell, diell, materiale dhe drita si [një foto e renderuar](topic:render).

## Hap kronologjinë

Kliko {{ui:Views}} te grupi {{ui:Camera}}, pastaj {{ui:Animation timeline}}. Kronologjia hapet nën pamje: kontrollet lart, pastaj një rresht **Camera** dhe një rresht për çdo grup ose komponent që lëviz. Rombet janë kyçe; vija e kuqe është **kursori i kohës**, momenti që shfaqet në pamje.

:::touch
Edhe në telefon kronologjia hapet nën pamje. Kontrollet e saj janë në një rresht: rrëshqit anash për të arritur pjesën tjetër; butoni që e mbyll kronologjinë mbetet në fund të saj.
:::

Tërhiq rrëshqitësin (ose kliko në një rresht) për të zhvendosur kursorin e kohës. {{ui:Play}} luan nga kursori i kohës dhe kthehet në {{ui:Pause}} ndërsa luan; kliko përsëri për ta ndalur aty ku është. {{key:Space}} bën të njëjtën gjë ndërsa kronologjia është e hapur (me kronologjinë të mbyllur, Space është ende {{ui:Select}}). {{ui:Previous key}} dhe {{ui:Next key}} kërcejnë mes kyçeve. Një stil i yni mund t'i japë luajtjes dhe pauzës një tast tjetër: {{ui:Settings}}, pastaj menutë, tastet dhe miu, komanda *Luaj ose pauzo animacionin*.

## Lëviz kamerën

1. Vendos kursorin e kohës aty ku fillon plani (0 s), rregullo pamjen, dhe kliko {{ui:Key camera}}.
2. Zhvendos kursorin më vonë (le të themi 4 s), rrotullo, zhvendos ose ec me pamjen në pozicionin e radhës, dhe kliko {{ui:Key camera}} sërish.
3. Shto sa kyçe të duash, pastaj {{ui:Play}}.

Kamera kalon butësisht nëpër çdo kyç dhe fillon e mbaron në prehje.

:::tip
Ke tashmë [skena](topic:scenes)? {{ui:From scenes}} e bën shtegun e kamerës prej tyre: mbahet te çdo skenë, pastaj lëviz te tjetra. Nëse kronologjia nuk ka asnjë kyç, {{ui:Render video…}} e bën vetë, kështu që dy skena ose më shumë mjaftojnë për një video shëtitjeje.
:::

## Lëviz një grup ose komponent

1. Zgjidh grupin ose komponentin (vetëm grupe dhe komponentë të tërë lëvizin; [bëj një grup](topic:groups-components) së pari).
2. Te 0 s, kliko {{ui:Key selected}}.
3. Zhvendos kursorin më vonë, [zhvendos, rrotullo ose shkallëzo](topic:move-copy) grupin aty ku duhet të jetë, dhe kliko {{ui:Key selected}} sërish.

Ai rrëshqet, rrotullohet dhe rritet midis kyçeve të tij. Rrotullimet marrin rrugën më të shkurtër.

**Auto key** e kursen klikimin e hapit 3: ndërsa {{ui:Auto key}} është i ndezur, një grup ose komponent i zgjedhur që zhvendos, rrotullon ose shkallëzon merr vetë një kyç te kursori i kohës (dhe, herën e parë, një kyç në 0 s aty ku ishte).

:::note
Zhvendosja e një grupi të animuar pa kyç zgjat vetëm deri sa lëviz kursori i kohës: herën tjetër që luan ose lëviz, kthehet aty ku e vendosin kyçet e tij. Shiriti i statusit e thotë këtë. Shtyp {{ui:Key selected}} për ta mbajtur.
:::

## Ndrysho kyçet

- **Zgjidh një kyç** duke klikuar rombin e tij: kursori i kohës shkon te ai.
- **Zhvendos një kyç** duke tërhequr rombin e tij përgjatë rreshtit, ose me {{key:Left}} dhe {{key:Right}} (një kornizë; me {{key:Shift}}, dhjetë).
- **Fshi** me {{ui:Delete key}} (kyçin e zgjedhur, ose çdo kyç te kursori i kohës) ose me {{key:Delete}} mbi një romb të zgjedhur.
- **Si shkon më tej**, për kyçin e zgjedhur: {{ui:Smooth}} (një kurbë që kalon nëpër kyçet përreth), {{ui:Steady}} (një vijë e drejtë me një shpejtësi), {{ui:Slow in and out}} (ndalon në këtë kyç) ose {{ui:Hold}} (qëndron derisa të arrijë kyçi tjetër).
- **Gjatësia (s)** vendos sa zgjat animacioni; një kyç i vendosur pas fundit e zgjat. Për ta shkurtuar, zhvendos ose fshi së pari kyçet që kalojnë fundin e ri.
- Simboli **×** te rreshti i një grupi ndalon animimin e tij.

Kronologjia ka {{ui:Undo}} dhe {{ui:Redo}} të vetat: zhbërja e modelit ({{key:Mod+Z}}) ndryshon modelin, jo kyçet. Animacioni ruhet në skedarin `.modelcraft`. Mbyllja e kronologjisë i kthen grupet në lëvizje në pozën e tyre të parë.

## Renderto videon

1. Kliko {{ui:Render video}} te kronologjia (ose {{ui:Export}} › {{ui:Render video…}}).
2. Zgjidh {{ui:Size}}, {{ui:Frame rate}}, {{ui:Quality of each frame}} dhe {{ui:File}}.
3. Kliko {{ui:Render video}}. Çdo kornizë shfaqet ndërsa bëhet, me kohën e mbetur.
4. Kur mbaron, kliko {{ui:Save video}}.

{{ui:Stop}} (ose {{key:Esc}}) ndalon përpara kohe; {{ui:Save video}} atëherë e ruan atë që është bërë si një video më të shkurtër.

Qielli, dielli, materialet, dritat dhe ndriçimi janë ato të vendosura te {{ui:Render a picture…}}: vendosi së pari atje, duke kontrolluar një foto të palëvizshme. Çdo kornizë renderohet në këtë kompjuter; asgjë nuk ngarkohet.

| Cilësimi | Çfarë bën |
|---|---|
| {{ui:Size}} | 480p, 720p HD, 1080p Full HD, ose forma e vetë pamjes (deri 1920 piksele gjerësi) |
| {{ui:Frame rate}} | 24, 25, 30 ose 60 kornizë në sekondë. Dyfishi i kornizave zgjat dyfish |
| {{ui:Quality of each frame}} | {{ui:Quick}} (4 kalime), {{ui:Draft}} (16) ose {{ui:Good}} (64): më shumë kalime japin hije dhe skaje më të butë |
| {{ui:File}} | {{ui:WebM video}}, {{ui:MP4 video (H.264)}} aty ku shfletuesi mund ta shkruajë, ose {{ui:PNG pictures, one per frame (ZIP)}} për redaktorët e videos (dhe për shfletuesit pa kodues videoje) |

:::tip
Një video 10-sekondëshe me 30 kornizë në sekondë ka 301 kornizë. Provo {{ui:Quick}} në 480p së pari për të kontrolluar lëvizjen, pastaj renderoje me {{ui:Draft}} ose {{ui:Good}} në një madhësi më të madhe.
:::

WebM luhet në shfletues dhe VLC, dhe redaktorët e videos e konvertojnë. {{ui:MP4 video (H.264)}} ofrohet aty ku shfletuesi mund ta shkruajë. {{ui:Render video}} përdor renderuesin e shpejtë; për të gjurmuar dritën në çdo kornizë, zgjidh {{ui:Add this animation to the queue}} në të njëjtin dialog: kornizat renderohen te [radha e renderimit](topic:render#the-render-queue), që ka nevojë për WebGPU.

:::firefox safari
Renderimi i një videoje ka nevojë për një shfletues që e kodon vetë videon (WebCodecs): Chrome, Edge, Firefox dhe Safari 17 të fundit e bëjnë. Pa të, zgjidh {{ui:PNG pictures, one per frame (ZIP)}}.
:::

## Gjëra që duhet të dish

- Vetëm grupe dhe komponentë të tërë lëvizin. Faqet, skajet, koha e diellit dhe stili nuk ndryshojnë ende me kohën.
- {{ui:Export animation}} nën [Skenat](topic:scenes) ende regjistron pamjen ashtu si është në ekran, në kohë reale; {{ui:Render video}} renderon çdo kornizë me qiellin, hijet dhe materialet.
