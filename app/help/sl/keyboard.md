---
title: Tipke in dejanja miške
summary: Vsaka bližnjica na tipkovnici, dejanje miške, gesta sledilne ploščice in gesta na dotik v ModelCraft, razvrščeni po tem, kaj počnejo.
keywords: tipkovnica, bližnjice, tipke, bližnjične tipke, miška, sledilna ploščica, dotik, geste, bližnjični list, ctrl, ukaz, puščične tipke
from: e2348957
---

To so tipke za potiskanje in vlečenje, s katerimi ModelCraft začne. Za drug slog glejte [Tipke Modeler](topic:keyboard#modeler-keys) spodaj in [Nastavitve ModelCraft](topic:settings).

Bližnjice delujejo, kadar je v ospredju 3D pogled ali gumb orodne vrstice. Če ste pravkar vnesli besedilo v polje podokna ali spremenili seznam v {{ui:Style}}, najprej kliknite v 3D pogled, sicer tipke pojdejo v to polje. Glejte [Tipke, miške in sledilne ploščice](common:keys), kako so tipke zapisane na posameznem računalniku.

## Orodja

| Tipka | Orodje |
|---|---|
| {{key:Space}} | {{ui:Select}} |
| {{key:L}} | {{ui:Line}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:C}} | {{ui:Circle}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Offset}} |
| {{key:B}} | {{ui:Paint}} |
| {{key:P}} | {{ui:Push/pull}} |
| {{key:M}} | {{ui:Move}} |
| {{key:Q}} | {{ui:Rotate}} |
| {{key:S}} | {{ui:Scale}} |
| {{key:E}} | {{ui:Eraser}} |
| {{key:T}} | Merjenje z {{ui:Tape}} |
| {{key:D}} | {{ui:Dimension}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

Črke orodij delujejo samo brez tipk za spremembo: {{key:Shift}} s črko ne naredi ničesar, razen pri dveh spodaj.

## Model in datoteka

| Tipka | Naredi |
|---|---|
| {{key:G}} | Ustvari komponento iz izbora |
| {{key:Shift+G}} | Ustvari skupino iz izbora |
| {{key:Shift+Z}} | Povečaj na obseg (ves model) |
| {{key:Mod+Z}} | Razveljavi |
| {{key:Mod+Y}} ali {{key:Mod+Shift+Z}} | Uveljavi |
| {{key:Mod+S}} | Shrani (prenese datoteko `.modelcraft`) |
| {{key:Mod+O}} | Odpri model |
| {{key:Mod+A}} | Izberi vse (v odprti skupini, če je odprta) |
| {{key:Mod+C}} | Kopiraj izbor |
| {{key:Mod+X}} | Izreži izbor |
| {{key:Mod+V}} | Prilepi: kopija sledi kazalki, kliknite, kamor jo želite |
| {{key:Mod+Shift+V}} | Prilepi na isto mesto (od koder je bila kopirana) |
| {{key:Mod+D}} | Podvoji: kopija sledi kazalki, kliknite, da jo postavite |
| {{key:Delete}} ali {{key:Backspace}} | Izbriši izbor |
| {{key:PageDown}} / {{key:PageUp}} | Naslednji / prejšnji prizor |
| {{key:F1}} | Odpre ali zapre to pomoč (tudi {{ui:Help}} v vrstici aplikacije; {{key:Esc}} v pomoči jo zapre) |
| {{key:Ctrl+Shift+F}} | Način zaslona: celozaslonski način, nato skrite vrstice, nato običajno (tudi na Macu Control) |

## Esc

{{key:Esc}} se ob vsakem pritisku vrne za eno raven:

1. Prekliče, kar orodje trenutno izvaja (črta, ki se riše, potiskanje/vlečenje, premik). Vse se vrne.
2. Preklopi na {{ui:Select}}.
3. Počisti izbor.
4. Zapre skupino, ki jo urejate.

Ustavi tudi predvajanje prizorov. V polju za vrednost {{key:Esc}} izbriše, kar ste vpisali, in vas vrne v pogled.

## Medtem ko orodje deluje

| Tipka | Naredi |
|---|---|
| Številka ali ena od `. , - ' " [ < * /` | Začne vnos v polju za vrednost |
| {{key:Enter}} | Uveljavi, kar ste vpisali v polje za vrednost |
| {{key:Right}} | Zakleni na rdečo os (ponovno pritisnite za odklep) |
| {{key:Left}} | Zakleni na zeleno os |
| {{key:Up}} | Zakleni na modro os |
| {{key:Down}} | Zakleni vzporedno z zadnjim robom, nad katerim ste lebdeli pred prvim klikom |
| Držite {{key:Shift}} | Drži smer, na katero ste zaskočeni, dokler držite |
| {{key:Ctrl}}, {{key:Mod}} ali {{key:Alt}} (Move) | Preklaplja med premikanjem in kopiranjem |

Zaklepi s puščičnimi tipkami delujejo v {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} in {{ui:Tape}} (ko merite od točke), po prvem kliku. {{ui:Push/pull}} se vedno premakne v smeri ploskve in nima zaklepov. Pri {{ui:Rotate}} puščične tipke po prvem kliku prikažejo sporočilo „Locked“, vendar ne spremenijo zasuka.

## Puščične tipke v drugih primerih

Kadar orodje ničesar ne izvaja, puščične tipke premikajo kamero:

| Tipka | Naredi |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbitiraj |
| {{key:Shift}} s puščično tipko | Pomik |

## Miška

| Dejanje | Naredi |
|---|---|
| Klik | Uporabi trenutno orodje |
| Pritisk, vlečenje, spustitev | Enako kot dva klika (za orodja za risanje); izbor z okvirjem (za {{ui:Select}}); briše na poti (za {{ui:Eraser}}) |
| Dvojni klik | {{ui:Select}}: ploskev z njenimi robovi, rob z njegovimi ploskvami, odpre skupino; prazen prostor zapre skupino. {{ui:Push/pull}}: ponovi zadnjo razdaljo |
| Trojni klik | {{ui:Select}}: vse povezano |
| {{key:Shift}} + klik | {{ui:Select}}: preklopi v izbor in iz njega |
| {{key:Mod}} + klik | {{ui:Select}}: doda k izboru |
| {{key:Shift}} + {{key:Mod}} + klik | {{ui:Select}}: odstrani iz izbora |
| Vlečenje s srednjim gumbom | Orbitiraj, z vsakim orodjem |
| {{key:Shift}} + vlečenje s srednjim gumbom | Pomik, z vsakim orodjem |
| Vlečenje z desnim gumbom | Pomik, z vsakim orodjem |
| Kolesce | Povečava proti kazalki |

Desnega klika menija ni.

## Sledilna ploščica

Kaj naredi podrsanje z dvema prstoma, je odvisno od {{ui:Settings}} › {{ui:ModelCraft}} › Drsenje:

| Gesta | Sledilna ploščica (ali izračunano) | Kolesce miške |
|---|---|---|
| Podrsanje z dvema prstoma | Orbitiraj | Povečava proti kazalki |
| {{key:Shift}} + podrsanje z dvema prstoma | Pomik | Povečava |
| Ščip | Povečava proti kazalki | Povečava proti kazalki |
| Pritisk in vlečenje z dvema prstoma (drugi klik zadržan) | Pomik | Pomik |

Glejte [Orbitiranje, pomik in povečava](topic:orbit-pan-zoom#on-a-trackpad) in [Nastavitve ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Tipke Modeler

Ko je v {{ui:Settings}} › {{ui:ModelCraft}} › Upravljanje nastavljen slog Modeler:

| Tipka | Naredi |
|---|---|
| {{key:W}} ali {{key:Space}} | {{ui:Select}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Line}} / {{ui:Rectangle}} / {{ui:Circle}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Push/pull}} (izvleci) |
| {{key:T}} | Merjenje z {{ui:Tape}} |
| {{key:D}} | {{ui:Dimension}} |
| {{key:G}} | Takoj premakne izbor s kazalko |
| {{key:R}} | Zasuče izbor okrog njegove sredine (modra os) |
| {{key:S}} | Spremeni merilo izbora okrog sredine |
| {{key:X}} / {{key:Y}} / {{key:Z}} med premikanjem ali zasukom | Zaklene rdečo / zeleno / modro os (ponovno za odklep) |
| Klik ali {{key:Enter}} | Postavi |
| {{key:Esc}} ali desni klik | Vrne nazaj |
| {{key:Shift+D}} | Podvoji in premakne kopijo |
| {{key:X}} ali {{key:Delete}} | Izbriši izbor |
| {{key:A}} / {{key:Alt+A}} | Izberi vse / prekliči izbor |
| {{key:Tab}} | Odpre izbrano skupino ali komponento; ponovno zapre |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Ustvari skupino / ustvari komponento |
| Numerična tipkovnica {{key:1}} / {{key:3}} / {{key:7}} | Pogled od spredaj / desno / zgoraj ({{key:Mod}} za zadaj / levo / spodaj) |
| Numerična tipkovnica {{key:5}} | Perspektiva vklop ali izklop |
| Numerična tipkovnica {{key:.}} | Povečaj na izbor |
| {{key:Home}} ali {{key:Shift+C}} | Povečaj na obseg |
| {{key:Shift+Tab}} | Lovljenje vklop ali izklop |
| Vlečenje s srednjim gumbom / s {{key:Shift}} / s {{key:Mod}} | Orbitiraj / pomik / povečava |
| {{key:Alt}} + vlečenje / {{key:Alt+Shift}} + vlečenje | Orbitiraj / pomik (srednji gumb ni potreben) |

Kopiranje, prilepljanje, razveljavitev, shranjevanje in odpiranje ohranijo zgoraj navedene tipke. Vnesene vrednosti, polje za vrednost in {{ui:Push/pull}} delujejo enako v obeh slogih.

## Zaslon na dotik

| Gesta | Naredi |
|---|---|
| Dotik | Klik z aktivnim orodjem |
| Dvojni dotik | Dvojni klik |
| Pritisk, vlečenje, dvig | Enako kot pritisk, vlečenje, spustitev z miško |
| Dva prsta: ščip | Povečava |
| Dva prsta: skupaj premakneta | Pomik ({{ui:Settings}} › {{ui:ModelCraft}} › Zaslon na dotik lahko to nastavi na Orbitiraj) |
| Trije prsti: skupaj premaknejo | Orbitiraj (pomik, kadar dva prsta orbitirata) |
| En prst mirno držite | Konča orodje kot {{key:Enter}}; kadar ni dejavnosti, nato povlecite za orbitiranje |
| Drugi prst med dejanjem z enim prstom | Prekliče to dejanje |
| Orodje {{ui:Orbit}}, nato povlecite en prst | Orbitiraj |

Za vnos vrednosti na zaslonu na dotik se dotaknite polja za vrednost spodaj, vnesite in pritisnite tipko Enter (ali Go) na tipkovnici.

## Kje je orodje Premakni

Premik je v orodju {{ui:Move}}, tipka {{key:M}}: izberite, kaj premaknete, kliknite izhodiščno točko, nato drugo točko ali vnesite razdaljo. Glejte [Premik, kopiranje in razpostavitev](topic:move-copy).
