---
title: Prechod z iných modelovacích nástrojov
summary: Ako sa návyky modelovania tlač/ťah premietajú do ModelCraft, klávesa po klávese, a rozdiely, na ktoré ľudia najčastejšie doplatia.
keywords: prechod, presun, známe, rozdiely, modelovanie tlač ťah, skp, klávesové skratky, návyky, porovnanie, pole mier, zoznam objektov, informácie o entite
from: 74ffd4ac
---

Ak ste modelovali v SketchUp, ModelCraft vám bude pripadať povedomý: rovnaká predstava plôch a tlače/ťahu, rovnaké písmená nástrojov, pole hodnôt, do ktorého píšete bez klikania, odvodzovanie pomocou červenej, zelenej a modrej osi, skupiny, komponenty, zoznam objektov, informácie o entite a scény. Táto stránka uvádza, čo sa prenáša priamo a, čo je dôležitejšie, čo nie.

## Návyky, ktoré zostávajú

| Na čo ste zvyknutí | V ModelCraft |
|---|---|
| Stlačte {{key:Space}} pre Vybrať, L Úsečka, R Obdĺžnik, C Kružnica | Rovnako: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Stlačte P Tlač/ťah, M Presunúť, Q Otočiť, S Mierka, E Guma, T Pásmo | Rovnako: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Stlačte O Obiehanie, H Posun, Z Zväčšenie, Shift+Z Zoom na rozsah | Rovnako: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Stlačte G na vytvorenie komponentu | Rovnako: {{key:G}}. {{key:Shift+G}} vytvorí skupinu |
| Píšte do poľa mier bez klikania naň | Rovnako, v poli hodnôt dole. Stlačte {{key:Enter}} |
| Zadajte `4m,3m` pre obdĺžnik, `12s` pre strany | Rovnako |
| Zadajte `3x` alebo `/3` po kopírovaní Presunúť | Rovnako; funguje aj `*3` |
| Zadajte `[x,y,z]` alebo `<dx,dy,dz>` pre bod alebo posun | Rovnako |
| V modeli v architektonických palcoch zadajte holé číslo a dostanete palce | Rovnako |
| Prostredným potiahnutím obiehate, Shift+prostredným potiahnutím posúvate, kolieskom zväčšujete pri kurzore | Rovnako |
| Dvojklik s Tlač/ťah na zopakovanie vzdialenosti | Rovnako |
| Šípkami uzamknete červenú, zelenú, modrú a rovnobežnosť | Rovnako: {{key:Right}} červená, {{key:Left}} zelená, {{key:Up}} modrá, {{key:Down}} rovnobežne |
| Podržaním Shift uzamknete odvodenie | Rovnako |
| Ctrl (Option na Macu) na kopírovanie počas presunu | {{key:Ctrl}}, {{key:Mod}} alebo {{key:Alt}}, na ľubovoľnom počítači |
| Shift na prepínanie, Ctrl na pridanie, Shift+Ctrl na odobranie z výberu | Rovnaké klávesy; na Macu použite {{key:Mod}} tam, kde je uvedené Ctrl |
| Výber oknom zľava doprava, prekríženie sprava doľava | Rovnako |
| Nástroj Kóta na označenie dĺžok | {{key:D}}, a viac: zadajte novú dĺžku do kóty a model sa podľa nej zmení. Pozri [Kóta a zmena veľkosti](topic:dimensions) |
| Dvojklik na plochu pre plochu a hrany; trojklik pre všetko spojené | Rovnako |
| Dvojklik na skupinu na úpravu; Esc na zatvorenie | Rovnako |
| Nakreslite čiaru cez plochu, aby ste ju rozdelili; zmažte hranu medzi plochami v jednej rovine, aby sa spojili | Rovnako |
| Tlačte obdĺžnik okna cez stenu, aby ju vyrezal | Rovnako |
| Zadné plochy sú modro-sivé; Obrátiť plochy | Rovnaká farba; {{ui:Obrátiť plochu}} v {{ui:Informácie o entite}} |
| Scény ako karty nad pohľadom, Page Up a Page Down | Rovnako, s {{ui:Prehrať}} v paneli {{ui:Scény}} |
| Tiene z dátumu, času, zemepisnej šírky a dĺžky, so severom na zelenej | Rovnako, v paneli {{ui:Štýl}} |

## Rozdiely, ktoré prekvapia

### Uloženie je stiahnutie

Neexistuje žiadne Uložiť, ktoré by prepísalo súbor, ktorý ste otvorili, žiadne dialógové okno Uložiť ako s názvom, žiadne automatické ukladanie ani záložný súbor. {{ui:Uložiť}} ({{key:Mod+S}}) zakaždým stiahne nový súbor `.modelcraft`, zvyčajne do priečinka na stiahnuté súbory. Ukladajte často a súbory premenujte alebo presuňte sami. Pozri [Otvorenie, uloženie, import a export](topic:files).

### Importuje súbory .skp, ale neukladá ich

{{ui:Importovať}} číta súbory SketchUp vlastným čítačom ModelCraft, priamo na stránke: skupiny, komponenty, farby, textúry na plochách, značky a mäkké hrany sa prenesú. Pozri [Formáty súborov podrobne](topic:formats#skp-files). ModelCraft nedokáže uložiť `.skp`: ak sa chcete vrátiť, exportujte Collada z ModelCraft a importujte ju v SketchUp.

### Žiadna ponuka pravým tlačidlom

Potiahnutím pravým tlačidlom posúvate; kliknutie pravým tlačidlom nerobí nič. Príkazy, ktoré by ste hľadali v kontextovej ponuke, sú v {{ui:Informácie o entite}} ({{ui:Obrátiť plochu}}, {{ui:Úpravy}}, {{ui:Rozložiť}}, {{ui:Urobiť jedinečný}}, {{ui:Vytvoriť komponent}}) a v skupine {{ui:Usporiadanie}} na paneli nástrojov.

### Jednotky sú v stavovom riadku

Nie je tu žiadne informácie o modeli ani výber šablóny. Výber jednotiek je vpravo dole. Nový model začína v stopách a palcoch v USA a inde v milimetroch, podľa jazykového nastavenia vášho prehliadača. Desatinné čísla vždy používajú bodku: `2.5m`, nikdy `2,5m`, pretože čiarka vždy oddeľuje hodnoty.

### Farba má vlastné materiály

{{ui:Farba}} ({{key:B}}) maľuje plné farby a materiály v časti {{ui:Materiály}}: tehla, obšívka, strešná krytina, drevo, kameň a ďalšie, vykreslené ModelCraft. Vlastný obrázok ako materiál zatiaľ nemôžete nahrať; textúry, ktoré prídu s importovanými súbormi, sa zachovajú. Pozri [Maľovanie farbami a materiálmi](topic:paint).

### Mierka je rovnomerná, bez úchytov

{{ui:Mierka}} nezobrazuje kváder s úchytmi. Kliknite na bod, ktorý zostane na mieste, referenčný bod, potom na novú veľkosť alebo zadaný koeficient. Vždy sa mení rovnomerne vo všetkých smeroch. Ak chcete natiahnuť v jednom smere, použite tlač/ťah alebo presuňte plochu, alebo v {{ui:Informácie o entite}} znova zadajte šírku, hĺbku alebo výšku skupiny, prípadne [zmeňte veľkosť kótou](topic:dimensions).

### Otočenie vyberá rovinu podľa miesta kliknutia

Neexistuje uhlomer, ktorý by pri výbere roviny šípkami prilipol na plochy. Kliknite na stred na ploche, aby sa otáčalo v rovine tejto plochy, alebo na zem, aby sa otáčalo okolo zvislej osi. Šípky pred prvým kliknutím obiehajú pohľad.

### Odvodenie z bodov, nad ktorými prechádzate

ModelCraft sa prichytáva k smerom osí od **vášho počiatočného bodu** a k bodom, hranám a plochám pod kurzorom. Nesleduje smer od bodu, nad ktorým ste iba prešli (bodkované odvodenie "from point"). Ak sa chcete zarovnať na vzdialený roh, uzamknite os šípkou a prejdite kurzorom na ten roh: uzamknutý bod sa posunie, aby sa s ním zarovnal. Alebo umiestnite [vodidlo](topic:guides-measure).

### Rovnobežnosť používa hranu, nad ktorou ste prešli pred začiatkom

Odvodenie rovnobežnosti a kolmosti používa poslednú hranu, ktorú kurzor prekročil **pred prvým kliknutím**, nie hrany, nad ktorými prechádzate počas kreslenia. Pozri [Odvodenie a prichytávanie](topic:inference#parallel-and-perpendicular).

### Kópie skupiny sú prepojené

Kopírovanie skupiny pomocou {{ui:Presunúť}} vytvorí druhé umiestnenie tej istej skupiny, takže úprava jednej zmení obe, rovnako ako pri komponentoch. SketchUp robí skupiny nezávislé. Pozri [Riešenie problémov](topic:troubleshooting#editing-one-group-changed-another).

### Space neposúva

{{key:Space}} vyberá {{ui:Vybrať}}, ako v SketchUp. V niektorých iných webových aplikáciách podržanie Space posúva; tu nie. Namiesto toho posúvate potiahnutím pravým tlačidlom.

### Rolovanie dvoma prstami zväčšuje

Na touchpade nastavte {{ui:Nastavenia}} › {{ui:ModelCraft}} › Rolovanie: Touchpad. Dva prsty obiehajú, {{key:Shift}} a dva prsty posúvajú, štipnutie zväčšuje. Pozri [Obiehanie, posun a zväčšenie](topic:orbit-pan-zoom#on-a-trackpad).

Ak klávesy poznáte z Blenderu a nie zo SketchUp, vyberte štýl ponuky {{ui:Modelár}}: {{key:G}}, {{key:R}} a {{key:S}} pôsobia naraz na výber, {{key:E}} vytlačí (tlač/ťah), {{key:Shift+D}} duplikuje a horný panel ponuky (Súbor, Úpravy, Pohľad, Vybrať, Pridať, Objekt, Sieť) nahrádza panel nástrojov. Pri prechode zo SketchUp dáva štýl {{ui:Tlač/ťah}} panel ponuky podobný vlastnému cez tie isté písmená nástrojov. Pozri [Ponuky, klávesy a myš](topic:menus-keys-and-mouse).

### Telesá zatlačené do seba nerežú

Tlač/ťah vyreže plochu za sebou v tom istom objekte, ale dve samostatné telesá zatlačené do seba sa neprekrývajú. Neexistuje Prieniky plôch ani Nástroje pre telesá.

### Čo chýba

Voľná ruka, Orezať, Rozdeliť a Vonkajší obal, vlastné materiály z obrázkov, rozšírenia a nástroj rozloženia pre listy nie sú v tejto verzii. [Čo ešte nie je hotové](topic:not-built-yet) uvádza, čo robiť namiesto toho.

## Klávesové skratky, ktoré si ponecháva prehliadač

ModelCraft beží v prehliadači, takže niekoľko skratiek patrí prehliadaču, nie aplikácii. {{key:Mod+N}} otvorí okno prehliadača (použite {{ui:Nový}}) a {{key:Mod+W}} zavrie kartu. Ak máte neuložené zmeny, prehliadač sa pred zatvorením opýta. Pozri [Klávesy, myši a touchpady](common:keys#shortcuts-the-browser-keeps).
