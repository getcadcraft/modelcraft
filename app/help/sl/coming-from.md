---
title: Prihod od drugih modelarjev
summary: Kako se navade modeliranja s potiskanjem in povlačenjem preslikajo v ModelCraft, tipko za tipko, ter razlike, ki presenetijo ljudi.
keywords: preklapljanje, selitev, znano, razlike, potisni povleci, skp, bližnjice, navade, primerjava, okno meritev, struktura, podatki o entiteti
from: 74ffd4ac
---

Če ste modelirali v SketchUpu, se vam bo ModelCraft zdel znan: enaka zamisel ploskev in potiskanja/povlačenja, enake črke orodij, polje za vrednosti, v katerega vpisujete brez klika, sklepanje z rdečo, zeleno in modro osjo, skupine, komponente, struktura, podatki o entiteti in prizori. Ta stran našteje, kaj se preslika neposredno in, kar je pomembneje, kaj ne.

## Navade, ki ostanejo

| Ste navajeni | V ModelCraftu |
|---|---|
| Pritisnete Space za Izberi, L za Črto, R za Pravokotnik, C za Krog | Enako: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Pritisnete P za Potisni/povleci, M za Premakni, Q za Zasukaj, S za Merilo, E za Radirko, T za Merilni trak | Enako: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Pritisnete O za Orbito, H za Pomik, Z za Povečavo, Shift+Z za Povečavo na obseg | Enako: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Pritisnete G za ustvarjanje komponente | Enako: {{key:G}}. {{key:Shift+G}} ustvari skupino |
| Vpisujete v okno meritev, ne da bi ga kliknili | Enako, v polje za vrednost na dnu. Pritisnite {{key:Enter}} |
| Vpišete `4m,3m` za pravokotnik, `12s` za stranice | Enako |
| Vpišete `3x` ali `/3` po kopiranju s premikom | Enako; deluje tudi `*3` |
| Vpišete `[x,y,z]` ali `<dx,dy,dz>` za točko ali odmik | Enako |
| Vpišete golo število v modelu z enotami palcev in dobite palce | Enako |
| Srednji gumb za orbito, Shift+srednji gumb za pomik, kolešček za povečavo pri kazalcu | Enako |
| Dvoklik s Potisni/povleci za ponovitev razdalje | Enako |
| Puščične tipke zaklenejo rdečo, zeleno, modro in vzporednost | Enako: {{key:Right}} rdeča, {{key:Left}} zelena, {{key:Up}} modra, {{key:Down}} vzporedno |
| Držite Shift, da zaklenete sklepanje | Enako |
| Ctrl (Option na Macu) za kopiranje med premikanjem | {{key:Ctrl}}, {{key:Mod}} ali {{key:Alt}}, na vsakem računalniku |
| Shift za preklop, Ctrl za dodajanje, Shift+Ctrl za odstranjevanje iz izbora | Enake tipke; na Macu uporabite {{key:Mod}} tam, kjer piše Ctrl |
| Okno od leve proti desni, sekanje od desne proti levi | Enako |
| Orodje Kota za označevanje dolžin | {{key:D}}, in še več: vpišite novo dolžino v koto in model se preoblikuje nanjo. Glejte [Kotiranje in spreminjanje velikosti](topic:dimensions) |
| Dvoklik na ploskev za ploskev in robove; trikratni klik za vse povezano | Enako |
| Dvoklik na skupino za urejanje; Esc za zaprtje | Enako |
| Črta čez ploskev jo razdeli; izbris roba med koplanarnima ploskvama ju zaceli | Enako |
| Potisnite pravokotnik okna skozi steno, da jo prerežete | Enako |
| Hrbtne ploskve v modro-sivi; Obrni ploskve | Enaka barva; {{ui:Obrni ploskev}} v {{ui:Podatki o entiteti}} |
| Prizori kot zavihki nad pogledom, Page Up in Page Down | Enako, z {{ui:Predvajaj}} v podoknu {{ui:Prizori}} |
| Sence iz datuma, časa, zemljepisne širine in dolžine, sever na zeleni | Enako, v podoknu {{ui:Slog}} |

## Razlike, ki presenetijo ljudi

### Shranjevanje je prenos

Ni Shrani, ki bi prepisal datoteko, ki ste jo odprli, ni pogovornega okna Shrani kot z imenom, ni samodejnega shranjevanja in ni datoteke varnostne kopije. {{ui:Shrani}} ({{key:Mod+S}}) vsakič prenese novo datoteko `.modelcraft`, običajno v mapo za prenose. Shranjujte pogosto in datoteke preimenujte ali premaknite sami. Glejte [Odpiranje, shranjevanje, uvoz in izvoz](topic:files).

### Uvaža datoteke .skp, vendar jih ne shranjuje

{{ui:Uvozi}} prebere datoteke SketchUp z lastnim bralnikom ModelCraft, na strani: skupine, komponente, barve, teksture na ploskvah, oznake in mehki robovi pridejo skozi. Glejte [Formati datotek podrobno](topic:formats#skp-files). ModelCraft ne more shraniti `.skp`: za vrnitev izvozite Collada iz ModelCrafta in jo uvozite v SketchUp.

### Ni desnega klika

Desno vlečenje premakne pogled; desni klik ne naredi nič. Ukazi, ki bi jih našli v kontekstnem meniju, so v {{ui:Podatki o entiteti}} ({{ui:Obrni ploskev}}, {{ui:Uredi}}, {{ui:Razstavi}}, {{ui:Naredi edinstveno}}, {{ui:Ustvari komponento}}) in v skupini {{ui:Razvrsti}} na orodni vrstici.

### Enote so v vrstici stanja

Ni informacij o modelu ali izbire predloge. Izbirnik enot je spodaj desno. Nov model se začne v čevljih in palcih v ZDA ter v milimetrih drugje, glede na nastavitev jezika v brskalniku. Decimalke imajo vedno piko: `2.5m`, nikoli `2,5m`, ker vejica vedno loči vrednosti.

### Barve imajo svoje materiale

{{ui:Pobarvaj (B)}} ({{key:B}}) barva polne barve in materiale v razdelku {{ui:Materiali}}: opeko, obloge, kritino, les, kamen in drugo, ki jih riše ModelCraft. Lastne slike kot material še ne morete naložiti; teksture, ki pridejo z uvoženimi datotekami, se ohranijo. Glejte [Barvanje z barvami in materiali](topic:paint).

### Merilo je enakomerno, brez ročic

Merilo ne prikaže škatle z ročicami. Kliknite točko, ki ostane na mestu (referenčno točko), nato novo velikost ali vpisani faktor. Vedno se spremeni enakomerno v vse smeri. Za raztezanje v eni smeri potisnite/povlecite ali premaknite ploskev, ponovno vpišite širino, globino ali višino skupine v {{ui:Podatki o entiteti}} ali [spremenite velikost s koto](topic:dimensions).

### Zasukaj izbere svojo ravnino glede na to, kam kliknete

Ni kotomera, ki bi se pripel na ploskve, ko s puščičnimi tipkami izbirate ravnino. Kliknite središče na ploskvi, da zasukate v ravnini te ploskve, ali na tla, da zasukate okoli navpične osi. Puščične tipke pred prvim klikom orbitirajo pogled.

### Sklepanje iz točk, čez katere greste

ModelCraft se zaskoči na smeri osi od **vaše začetne točke** ter na točke, robove in ploskve pod kazalcem. Ne sledi smeri od točke, nad katero samo lebdite (pikčasta črta „iz točke“ sklepanja). Da se poravnate z oddaljenim vogalom, zaklenite os s puščično tipko in lebdite nad tem vogalom: zaklenjena točka se pomakne, da se poravna z njim. Ali postavite [vodilo](topic:guides-measure).

### Vzporedno uporablja rob, čez katerega ste šli pred začetkom

Vzporedno in pravokotno sklepanje uporablja zadnji rob, ki ga je kazalec prečkal **pred prvim klikom**, ne robov, nad katerimi lebdite med risanjem. Glejte [Sklepanje in zaskakovanje](topic:inference#parallel-and-perpendicular).

### Kopije skupine so povezane

Kopiranje skupine z {{ui:Premakni (M)}} naredi drugo postavitev iste skupine, zato urejanje ene spremeni obe, kot pri komponentah. SketchUp naredi skupine neodvisne. Glejte [Odpravljanje težav](topic:troubleshooting#editing-one-group-changed-another).

### Presledek ne premika pogleda

{{key:Space}} izbere {{ui:Izberi}}, kot v SketchUpu. V nekaterih drugih spletnih aplikacijah držanje presledka premika pogled; tu ne. Namesto tega premaknete z desnim vlečenjem.

### Dvoprstno drsenje povečuje

Na sledilni ploščici nastavite {{ui:Nastavitve}} › {{ui:ModelCraft}} › Drsenje na sledilno ploščico: dva prsta orbitirata, {{key:Shift}} in dva prsta premakneta pogled, stisk povečuje. Glejte [Orbita, pomik in povečava](topic:orbit-pan-zoom#on-a-trackpad).

Če vaše roke poznajo Blenderjeve tipke, ne SketchUpove, izberite slog menija {{ui:Modeler}}: {{key:G}}, {{key:R}} in {{key:S}} delujejo na izbor hkrati, {{key:E}} iztisne (potisne/povleče), {{key:Shift+D}} podvoji, vrstica menijev na vrhu (Datoteka, Uredi, Pogled, Izberi, Dodaj, Predmet, Mreža) pa nadomesti orodno vrstico. Če prihajate iz SketchUpa, slog {{ui:Potisni/povleci}} da menijsko vrstico, podobno njegovi, nad istimi črkami orodij. Glejte [Meniji, tipke in miška](topic:menus-keys-and-mouse).

### Trdna telesa, potisnjena drugo v drugo, se ne režejo

Potiskanje/povlačenje odreže ploskev za njo v istem predmetu, vendar se dve ločeni telesi, potisnjeni drugo v drugo, ne sekata. Ni Presek ploskev in ni Orodij za trdna telesa.

### Kaj manjka

Prosto risanje, Prirezi, Razdeli in Zunanja lupina, lastne slike kot materiali, razširitve ter orodje za postavitev listov v tej gradnji niso na voljo. [Še ni izdelano](topic:not-built-yet) našteje, kaj storiti namesto tega.

## Bližnjice, ki jih ohrani brskalnik

ModelCraft teče v brskalniku, zato nekatere bližnjice pripadajo brskalniku, ne aplikaciji. {{key:Mod+N}} odpre okno brskalnika (uporabite {{ui:Novo}}), {{key:Mod+W}} zapre zavihek. Če imate neshranjene spremembe, brskalnik vpraša, preden zapre. Glejte [Tipke, miške in sledilne ploščice](common:keys#shortcuts-the-browser-keeps).
