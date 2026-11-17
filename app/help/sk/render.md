---
title: Vykreslenie obrázka modelu
summary: Vytvorte obrázok, ktorý vyzerá ako denné svetlo: obloha, slnko podľa miesta a dátumu modelu, mäkké tiene, vzhľad skla a kovu, potom ho uložte ako PNG.
keywords: vykreslenie, predvoľba, predvoľby, predvoľba scény, interiér, exteriér, pohľad na rez, noc, jedno kliknutie, vykresľovanie, path tracing, sledovanie lúčov, globálne osvetlenie, odrazy, lom svetla, vysoká kvalita, fotografia, fotorealistické, realistické, obraz, obrázok, png, statický, obloha, slnko, denné svetlo, tiene, mäkké tiene, ambientná okluzia, sklo, kov, lesklý, materiály, expozícia, jas, zamračené, súmrak, štúdio, prezentácia, hmla, opar, jemná hmla, dym, oblak, objem, svetelné lúče, lúče slnka, kaustiky, adaptívne vzorkovanie, šum

from: 517ba4d3
---

{{ui:Render a picture…}} vytvorí obrázok pohľadu, ktorý vyzerá ako denné svetlo, a nie ako kresba: oblohu, slnko tam, kam ho zaradia miesto a dátum modelu, mäkké tiene, svetlo z celej oblohy, ktoré stmavuje rohy a medzery, a farby, ktoré môžu pôsobiť ako sklo, kov alebo lesklý náter. Model sa nemení.

## Vykreslenie pohľadu

1. Nastavte pohľad podľa predstáv: otáčajte, priblížte, vyberte [scénu](topic:scenes), skryte to, čo nemá byť vidieť. Obrázok používa vlastnú kameru pohľadu.
2. Kliknite na {{ui:Export}} v skupine {{ui:File}} a potom na {{ui:Render a picture…}}.
3. Ak nie je stlačená tá scéna, ktorú chcete, vyberte {{ui:Scene}} (pozri [Predvoľby scény](topic:render#scene-presets-a-good-picture-in-one-click)), zvoľte {{ui:Size}} a kliknite na {{ui:Render}}.

   Obrázok sa zapĺňa počas vykresľovania a pri každom prechode sa vyhladzuje. {{ui:Stop}} (alebo {{key:Esc}}) ukončí vykresľovanie predčasne a ponechá obrázok, ktorý vznikol dovtedy.

4. Kliknite na {{ui:Save}}, aby ste ho stiahli (PNG, pokiaľ {{ui:Save as}} nehovorí inak).

:::tip
Začnite s {{ui:Draft}} vo veľkosti {{ui:The view's size}}, aby ste skontrolovali kameru a vzhľad, potom vykreslite {{ui:Good}} alebo {{ui:Best}} vo väčšej veľkosti ako finálny obrázok.
:::

## Predvoľby scény: dobrý obrázok na jedno kliknutie

Vrchná časť dialógu obsahuje štyri tlačidlá {{ui:Scene}}. Každé z nich nastaví oblohu, jas, zem, hrany, kvalitu a slnko na jedno kliknutie, takže pred prvým obrázkom sa nič netreba učiť. Kliknite na jedno, potom na {{ui:Render}}.

| Scene | What it sets | Use it for |
|---|---|---|
| {{ui:Exterior}} | Jasná obloha, slnko modelu, zem zapnutá | Budova zvonku |
| {{ui:Interior}} | Zamračená obloha (rovnomerné svetlo, bez ostrých slnečných škvŕn), o pol stupňa jasnejšie | Pohľad z vnútra miestnosti |
| {{ui:Section view}} | Biele štúdio, bez zeme, hrany v rýchlom vykreslení | Model rozrezaný rezom |
| {{ui:Night}} | Slnko pod obzorom (polnoc v zime na tej polovici sveta, kde je miesto), o jeden stupeň jasnejšie | Svetlá osvetľujúce model. Bez svetiel je obrázok tmavý |

- {{ui:Pick for this view}} vyberie za vás: {{ui:Section view}}, keď je zapnutý rez, {{ui:Interior}}, keď je kamera vnútri modelu, inak {{ui:Exterior}}. Pri prvom otvorení dialógu sa začne týmto spôsobom automaticky.
- Každé nastavenie zostáva nižšie a dá sa zmeniť. Keď zmeníte jedno, ktoré scéna nastavuje, žiadne tlačidlo nie je stlačené a riadok pod tlačidlami hovorí, že nastavenia sú vaše. Kliknutím na scénu znova vrátite jej hodnoty.
- Scéna nemení motor, režim, veľkosť, materiály, kameru ani svetlá.

:::note
Scény dávajú v ModelCraft a BimCraft rovnaké hodnoty. Ako bude hotový obrázok vyzerať, závisí od vášho modelu a grafickej karty.
:::

## Nastavenia

| Setting | What it does |
|---|---|
| {{ui:Size}} | Veľkosť pohľadu, dvojnásobok veľkosti pohľadu, Full HD, 4K alebo štvorec. Pevné veľkosti zachovajú kameru pohľadu a zobrazia po stranách viac alebo menej |
| {{ui:Mode}} | {{ui:Fast}}, alebo {{ui:High quality (path traced)}} (nižšie) s jeho {{ui:Time limit}} |
| {{ui:Quality}} | Koľko prechodov (alebo, vo vysokej kvalite, vzoriek) sa spriemeruje: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Viac prechodov dá hladšie tiene a hrany, ale trvá dlhšie |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}} (mäkké svetlo, slabé tiene), {{ui:Dusk}} (nízke, teplé svetlo) alebo {{ui:White studio}} (jednoduché biele pozadie) |
| {{ui:Sun}} | Slnko prichádza z dátumu, času a miesta v {{ui:Style}} › slnko. Začiarknite {{ui:Use another date and time for this picture}}, aby ste vyskúšali iný čas bez zmeny štýlu modelu |
| {{ui:Brightness}} | Svetlejšie alebo tmavšie, v krokoch (stupňoch) |
| {{ui:Ground under the model}} | Zem, ktorá prijíma tiene a plynule prechádza do horizontu. Vypnite ju pre model, ktorý sa vznáša |
| {{ui:Draw edges}} | Kreslí hrany modelu tenko cez obrázok, pre kresebný vzhľad |

Keď je slnko v zvolenom čase pod obzorom, je noc: obloha stmavne a [svetlá](topic:lights) modelu ho osvetľujú. Dialóg to oznámi.

Nastavenia sa uložia do súboru `.modelcraft`, takže ďalší obrázok toho istého modelu začne tam, kde ste skončili.

## Farby ako sklo alebo kov

V časti {{ui:Materials}} má každá farba na obrazovke vzhľad: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} alebo {{ui:Frosted glass}}. {{ui:Unpainted faces}} sú plochy bez vlastnej farby.

Ak chcete, aby okná boli sklo, [natrite](topic:paint) okenné tabule jednou farbou a potom nastavte tú farbu na {{ui:Glass}}. Sklo prepúšťa oblohu a to, čo je za ním, zafarbené svojou farbou, a odráža oblohu.

:::note
V režime {{ui:Fast}} sklo a kov odrážajú oblohu, nie zvyšok modelu, a svetlo sa cez sklo nelame. Režim {{ui:High quality (path traced)}} nižšie robí obe tieto veci.
:::

## Vysoká kvalita

Vyberte {{ui:Mode}} › {{ui:High quality (path traced)}} pre obrázok, ktorý sleduje svetlo tak, ako ho vidí kamera:

- svetlo sa odráža medzi plochami, takže izba osvetlená oknom alebo svetlom je osvetlená zo všetkých strán a farby presakujú na susedné plochy;
- sklo je skutočné sklo: svetlo sa ním láme a odráža sa v ňom model;
- kov a leštené povrchy odrážajú zvyšok modelu;
- svetelné panely svietia ako panely, s mäkkými tieňmi.

Je oveľa pomalší ako {{ui:Fast}}: každý prechod znovu sleduje svetlo každého pixela. Obrázok začína zrnitý a čistí sa, ako sa vzorky sčítavajú, preto začnite malý ({{ui:The view's size}}, {{ui:Draft}}) a zvoľte {{ui:Time limit}}: keď čas vyprší, obrázok, ktorý vznikol dovtedy, sa zachová. {{ui:Stop}} ho tiež zachová. Prvý prechod čaká, kým prehliadač pripraví path tracer.

Ak má prehliadač WebGPU, path tracer je vlastný nástroj CadCraftu a beží na grafickej karte; riadok pod obrázkom hovorí {{ui:Path traced on the graphics card (WebGPU)}}. Po {{ui:Stop}} alebo po vypršaní času {{ui:Resume}} pokračuje s tým istým obrázkom, kým nedosiahne všetky vzorky; zmena nastavenia alebo nové stlačenie {{ui:Render}} začne odznova. Bez WebGPU sa obrázok vytvorí path tracingom cez WebGL (riadok to hovorí) a {{ui:Resume}} sa neponúka.

:::linux
Firefox a väčšina nastavení Chrome na Linuxe zatiaľ nemá WebGPU, takže vysoká kvalita tam používa WebGL.
:::

V tomto režime sa hrany nekreslia, textúry z knižnice zobrazujú svoju farbu a drsnosť, ale nie reliéfy (a [materiál vytvorený uzlami](topic:shading#in-high-quality-pictures) ukazuje svoju normálu a reliéfy), a rez sa aplikuje na model ešte pred začiatkom obrázka.

{{ui:Denoise (clears the grain left after the samples)}} je predvolene zapnuté: keď je obrázok hotový alebo zastavený, zrnitosť, ktorá zostane, odstráni neurónová sieť navrhnutá na tento účel (zverejnená sieť Intel Open Image Denoise, spustená na vašom počítači: na grafickej karte, inak na procesore). Obrázok s malým počtom vzoriek vyjde čistý; {{ui:Show}} › {{ui:The picture before denoising}} ho ukáže tak, ako bol vykreslený.

## Vykresľovanie vo pohľade

Pracovný priestor {{ui:Render}} spúšťa path tracer priamo v pohľade: otáčate, upravujete model alebo meníte svetlo a začne znova hneď. {{ui:Region}}: potiahnite obdĺžnik a vykreslí sa iba on; {{ui:Whole view}} vráti späť. {{ui:Focus}}: kliknite na to, čo má byť ostré, a hĺbka ostrosti sa tam zaostrí. {{ui:Detail}} nastavuje, koľko pixelov pohľadu sa vykreslí (menej je rýchlejšie). {{ui:Pause}} zastaví a pokračuje. Potrebuje WebGPU: bez neho to pracovný priestor oznámi, a {{ui:Export}} › {{ui:Render a picture…}} stále funguje.

## Oblohy a svetelné profily na grafickej karte

S WebGPU má vysoká kvalita ešte dve oblohy:

- {{ui:Physical sky}} odvodí denné svetlo z výšky slnka: sýtomodrú nad hlavou, bledý pás pri horizonte a slnko, ktoré je pri nízkej polohe teplejšie a slabšie. {{ui:Haze}} ide od veľmi jasného dňa (2) po zamlžený (10).
- {{ui:Sky picture (HDRI)}} osvetľuje model panoramatickým obrazom skutočného miesta. {{ui:Choose a picture…}} vezme súbor `.hdr` alebo `.exr` v ekvirektangulárnej projekcii; {{ui:Turn}} ho otočí okolo modelu a {{ui:Picture brightness}} ho spraví svetlejším alebo tmavším. Obrázok nesie vlastné slnko, takže slnko modelu sa nepridá. Zostáva uložený iba kým je stránka otvorená: po opätovnom otvorení ho vyberte znova.

Každé svetlo v zozname {{ui:Lamps}} môže prijať svetelný profil výrobcu: {{ui:IES profile…}} načíta súbor IES (LM-63) a svetlo potom svieti tak, ako dané svietidlo (úzky stropný reflektor, nástenný osvetľovač). Každé svetlo s týmto názvom ho použije a svetlo si zachová vlastný jas. Kliknutím na názov profilu prestanete ho používať.

Okná z čistého skla pomáhajú svetlu oblohy nájsť cestu do miestnosti, takže vnútorné obrázky pod oblohou sa vyčistia skôr.

Režim {{ui:Fast}} a path tracer cez WebGL zobrazia {{ui:Physical sky}} a {{ui:Sky picture (HDRI)}} ako jasnú oblohu a svetelné profily ignorujú.

## Kamera

{{ui:Camera}} nastaví obrázok ako fotografiu:

- {{ui:Exposure}}: ponechajte {{ui:Brightness slider}}, alebo zvoľte {{ui:Camera settings}} a nastavte {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} a {{ui:ISO}} ako na fotoaparáte; EV vedľa nich je bežná expozičná hodnota. f/16 pri 1/100 s a ISO 100 zodpovedá slnečnému dňu; tmavšia scéna chce širšiu clonu, pomalšiu uzávierku alebo vyššie ISO. Funguje to v každom režime.
- {{ui:Depth of field}} rozmaže, čo je bližšie alebo ďalej ako {{ui:Focus distance (m)}}, tak ako by to urobil objektív s touto clonou (nechajte prázdne, ak sa má zaostriť na to, čo je v strede pohľadu); {{ui:Aperture shape}} dá nezaostreným svetlám okrúhly alebo lamelový tvar.
- {{ui:Two-point perspective (vertical lines stay vertical)}} vyrovná kameru a posunie obraz, ako to robí architektonický tilt-shift objektív, takže steny sa neskláňajú, keď sa pozeráte hore alebo dole na budovu.
- {{ui:White balance}} určuje, ktorá farba svetla sa zobrazí ako biela: nižšia (napríklad 3000 K) pre teplé svetlo svietidiel, vyššia pre tieň a zamračené dni.
- {{ui:Projection}}: {{ui:360° panorama}} vytvorí obrázok 2:1 zo všetkého okolo kamery pre prehliadače panoramatických obrázkov; {{ui:360° stereo panorama}} zloží panorámy pre ľavé a pravé oko pre náhlavné zariadenia; {{ui:Cube map (6 faces)}} vytvorí šesť štvorcových pohľadov v mriežke 3 × 2. Šírka vychádza z {{ui:Size}}.

Projekcia, hĺbka ostrosti, dvojbodová perspektíva a vyváženie bielej potrebujú path tracer na grafickej karte (WebGPU), preto sa zobrazia iba v režime {{ui:High quality}}.

## Dokončenie obrázka

{{ui:Picture}} upraví obrázok vo vysokej kvalite ako fotografiu a každé ovládanie zmení hotový obrázok hneď, bez nového vykreslenia:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (obrázok ako predtým), {{ui:AgX}} (mäkší, zachováva farbu vo veľmi jasnom svetle), {{ui:Filmic}} (jemná filmová krivka) alebo {{ui:Standard}} (prostý, jasné svetlo sa orezáva na bielu).
- {{ui:Contrast}} a {{ui:Highlight compression}} (vráti detaily vo veľmi jasných častiach).
- {{ui:Bloom}} (mäkká žiara okolo jasných svetiel), {{ui:Glare}} s {{ui:Glare streaks}} (hviezdicové lúče z najjasnejších bodov) a {{ui:Vignette}} (tmavšie rohy).
- {{ui:Colour table (.cube)…}} použije farebnú úpravu zo súboru `.cube`, s {{ui:Colour table strength}}; ako obraz oblohy zostáva uložená iba kým je stránka otvorená.

## Uloženie obrázka

{{ui:Save as}} vedľa {{ui:Save}} vyberá súbor: {{ui:PNG}}, {{ui:JPEG}} alebo {{ui:WebP}} na zdieľanie (JPEG a WebP iba tam, kde ich prehliadač dokáže zapísať), a po vysokokvalitnom vykreslení na grafickej karte aj:

- {{ui:PNG, 16 bits}}: upravený obrázok s jemnejšími krokmi medzi odtieňmi, na tlač alebo ďalšie úpravy.
- {{ui:EXR, every layer (32-bit float)}}: obrázok tak, ako bol vykreslený (lineárne svetlo, bez úprav), s každým prvkom vykreslenia a skupinou svetiel ako vlastnou vrstvou, pre programy na kompozitovanie.
- {{ui:Render file (.ccrender, to grade again later)}}: všetko, čo dialóg potrebuje na nové zmiešanie a úpravu obrázka. {{ui:Open a render file…}} ho vráti aj so zmesou a úpravou, bez vykreslenia.

## Zmiešanie svetiel po vykreslení

Pred stlačením {{ui:Render}} zapnite {{ui:Light mixing (change each light's colour and brightness after the render)}}. Keď je obrázok hotový (alebo zastavený), {{ui:Mix the picture}} vypíše jeho svetlá v skupinách: oblohu, slnko a svetlá podľa názvu (každé svetlo s rovnakým názvom je jedna skupina). Vypnite skupinu, dajte jej farbu alebo ju urobte svetlejšou či tmavšou a obrázok sa zmení hneď, bez nového vykreslenia. {{ui:Save mix}} uloží zmes pod názvom, aby ste ju mohli neskôr vybrať; {{ui:As rendered}} vráti obrázok do stavu, v akom vznikol. {{ui:Save}} uloží zmiešaný obrázok.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} zachováva aj časti obrázka. {{ui:Show}} prepne pohľad na jednu z nich: farby povrchov (albedo), normály, hĺbku, difúzne, odrazové a prepustené svetlo (každé priame aj nepriame), to, čo žiari, a oblohu, a farbu na objekt alebo na materiál pre tvorbu masiek.

Obe možnosti uchovávajú ďalšie vrstvy na grafickej karte. Pri veľkých veľkostiach grafická karta nemusí mať dosť miesta; dialóg to oznámi a pomôže menšia veľkosť.

## Rad vykresľovania

Po nastavení vysokej kvality {{ui:Add this picture to the queue}} v časti {{ui:Render queue}} uchová obrázok v nastavení, aké je teraz; rovnaké tlačidlo {{ui:Add this animation to the queue}} v dialógu videa pridá celú animáciu, sledovanú cez path tracing po snímkach. {{ui:Start the queue}} ich vykreslí jeden po druhom na tomto počítači a {{ui:Save}} pri každom hotovom ho stiahne. Zatvorenie stránky rad zachová: otvorte ten istý model a pokračuje tam, kde sa zastavil. Rad potrebuje WebGPU.

## Hmla, dym, šum a kaustiky

Tieto nastavenia sú v {{ui:Fog, smoke and noise}} a fungujú vo {{ui:High quality}} na grafickej karte; ostatné motory ich vynechávajú.

- {{ui:Fog and haze}} vyplní vzduch až po zadanú výšku hmlou, ktorú osvetľujú slnko, obloha a svetlá. {{ui:How far you can see, in meters}} nastavuje, aká hustá je (asi 100 m je ľahký opar, 20 m hustá hmla), {{ui:Fog height above the ground, in meters}} je, kde končí, a {{ui:Light shafts}} určuje, koľko sa hmla žiari smerom k svetlu. Slnečné svetlo opúšťa hmlu na jej vrchu, takže tam, kde slnko prejde oknom alebo medzi budovami, ho vidíte ako svetelné lúče.
- {{ui:Smoke or cloud}} pridá jeden objem dymu alebo oblaku osvetlený ako hmla. {{ui:Kind}} je {{ui:Cloud}}, {{ui:Smoke column}} alebo {{ui:From a volume file (.ccvol)}}, vlastný mriežkový formát CadCraftu. {{ui:Detail}} a {{ui:Variation}} menia vytvorený oblak alebo stĺp, {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} a {{ui:Turn}} ho umiestnia (začína v strede modelu), {{ui:Thickness}} ho zhustí, {{ui:Forward glow}} ho spraví jasnejším smerom k svetlu a {{ui:Color}} ho zafarbí. Súbor objemu zostáva uložený iba kým je stránka otvorená, podobne ako obraz oblohy.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} nedá ďalšie vzorky pixelom, ktoré sa ustálili, takže zvyšok obrázka sa dokončí skôr. {{ui:Noise to accept}} je, koľko zrna zostane, keď sa pixel zastaví. Riadok pod obrázkom hovorí, koľko vzoriek dostal pixel v priemere.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} sleduje svetlo zo svetiel a slnka, takže jasná škvrna pod sklenou guľou alebo odraz zrkadla na stene vyjde čistá a nie zrnitá. Je vypnutá, keď sú zapnuté hmla, dym, {{ui:Zmiešanie svetiel po vykreslení}} alebo prvky vykreslenia; je urobená pre obrázky, nie pre panorámy 360°, animácie ani pracovný priestor {{ui:Render}}.

## Ako dlho to trvá

Obrázok sa vytvára na vašom počítači, grafickou kartou; nič sa nenahráva. Ako dlho to trvá, závisí od tej karty. Čas rastie s prechodmi a pixelmi: {{ui:Best}} má 16-krát viac prechodov ako {{ui:Draft}} a 4K obrázok má asi štyrikrát viac pixelov ako Full HD. Počítač bez grafickej karty vykresľuje tiež, len pomalšie.

:::note
Ak dialóg hovorí, že prehliadač nedokáže vykresľovať obrázky, prehliadač nemá WebGL 2. Aktualizujte ho alebo zapnite hardvérovú akceleráciu v jeho nastaveniach.
:::
