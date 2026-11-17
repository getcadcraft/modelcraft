---
title: Klávesové skratky a gestá
summary: Každá klávesová skratka, akcia myšou, gesto touchpadu a dotykové gesto v ModelCraft, zoskupené podľa toho, čo robia.
keywords: klávesnica, skratky, klávesy, klávesové skratky, myš, touchpad, dotyk, gestá, prehľad, ctrl, command, šípkové klávesy
from: e2348957
---

Toto sú klávesy push-pull, s ktorými ModelCraft začína. Pre iný štýl pozri [Klávesy Modeler](topic:keyboard#modeler-keys) nižšie a [Nastavenia ModelCraft](topic:settings).

Skratky fungujú, keď má zameranie 3D view alebo tlačidlo panela nástrojov. Ak ste práve písali do poľa v paneli alebo zmenili zoznam v {{ui:Štýl}}, najprv kliknite do 3D view, inak vaše klávesy pôjdu do toho poľa. Pozri [Klávesy, myš a touchpad](common:keys), kde je popísané, ako sa klávesy zapisujú na každom počítači.

## Nástroje

| Klávesa | Nástroj |
|---|---|
| {{key:Space}} | {{ui:Vybrať}} |
| {{key:L}} | {{ui:Úsečka}} |
| {{key:R}} | {{ui:Obdĺžnik}} |
| {{key:C}} | {{ui:Kružnica}} |
| {{key:N}} | {{ui:Mnohouholník}} |
| {{key:A}} | {{ui:Oblúk}} |
| {{key:F}} | {{ui:Odsadenie}} |
| {{key:B}} | {{ui:Farba}} |
| {{key:P}} | {{ui:Tlač/ťah}} |
| {{key:M}} | {{ui:Presunúť}} |
| {{key:Q}} | {{ui:Otočiť}} |
| {{key:S}} | {{ui:Mierka}} |
| {{key:E}} | {{ui:Guma}} |
| {{key:T}} | {{ui:Pásmo}} merania |
| {{key:D}} | {{ui:Kóta}} |
| {{key:O}} | {{ui:Otáčanie}} |
| {{key:H}} | {{ui:Posun}} |
| {{key:Z}} | {{ui:Zväčšenie}} |

Písmená nástrojov fungujú len bez modifikačných klávesov: {{key:Shift}} s písmenom nerobí nič, okrem dvoch nižšie.

## Model a súbor

| Klávesa | Činnosť |
|---|---|
| {{key:G}} | Vytvorí komponent z výberu |
| {{key:Shift+G}} | Vytvorí skupinu z výberu |
| {{key:Shift+Z}} | Zväčšenie na rozsah (celý model) |
| {{key:Mod+Z}} | Späť |
| {{key:Mod+Y}} alebo {{key:Mod+Shift+Z}} | Znova |
| {{key:Mod+S}} | Uložiť (stiahne súbor `.modelcraft`) |
| {{key:Mod+O}} | Otvoriť model |
| {{key:Mod+A}} | Vybrať všetko (v otvorenej skupine, ak je nejaká otvorená) |
| {{key:Mod+C}} | Kopírovať výber |
| {{key:Mod+X}} | Vystrihnúť výber |
| {{key:Mod+V}} | Prilepiť: kópia sleduje ukazovateľ, kliknutím ju umiestnite |
| {{key:Mod+Shift+V}} | Prilepiť na rovnaké miesto (odkiaľ bola skopírovaná) |
| {{key:Mod+D}} | Duplikovať: kópia sa pohybuje s ukazovateľom, kliknutím ju položte |
| {{key:Delete}} alebo {{key:Backspace}} | Zmazať výber |
| {{key:PageDown}} / {{key:PageUp}} | Ďalšia / predchádzajúca scéna |
| {{key:F1}} | Otvorí alebo zavrie túto pomoc (aj {{ui:Pomocník}} na paneli aplikácie; {{key:Esc}} v pomoci ju zavrie) |
| {{key:Ctrl+Shift+F}} | Režim obrazovky: celá obrazovka, potom skryté panely, potom normálny (aj na Macu Control) |

## Esc

{{key:Esc}} sa vráti o jednu úroveň zakaždým, keď ho stlačíte:

1. Zruší to, čo nástroj práve robí (kreslenú čiaru, tlačenie/ťahanie, presúvanie). Všetko sa vráti späť.
2. Prepne na {{ui:Vybrať}}.
3. Zruší výber.
4. Zavrie skupinu, ktorú upravujete.

Zastaví aj prehrávanie scén. V políčku hodnoty {{key:Esc}} vymaže, čo ste napísali, a vráti vás do view.

## Počas práce nástroja

| Klávesa | Činnosť |
|---|---|
| Číslica alebo jeden zo znakov `. , - ' " [ < * /` | Začne písanie do políčka hodnoty |
| {{key:Enter}} | Použije, čo ste napísali do políčka hodnoty |
| {{key:Right}} | Uzamkne na červenú os (opätovným stlačením odomkne) |
| {{key:Left}} | Uzamkne na zelenú os |
| {{key:Up}} | Uzamkne na modrú os |
| {{key:Down}} | Uzamkne rovnobežne s poslednou hranou, nad ktorou ste prešli pred prvým kliknutím |
| Podržte {{key:Shift}} | Podrží smer, na ktorý prichytávate, kým ho držíte |
| {{key:Ctrl}}, {{key:Mod}} alebo {{key:Alt}} (Presunúť) | Prepína medzi presúvaním a kopírovaním |

Uzamknutia šípkami fungujú v {{ui:Úsečka}}, {{ui:Obdĺžnik}}, {{ui:Kružnica}}, {{ui:Mnohouholník}}, {{ui:Presunúť}}, {{ui:Mierka}} a {{ui:Pásmo}} (pri meraní z bodu), po prvom kliknutí. {{ui:Tlač/ťah}} vždy posúva v smere plochy a nemá uzamknutia. V {{ui:Otočiť}} šípkové klávesy po prvom kliknutí zobrazia správu "Uzamknuté", ale nezmenia otočenie.

## Šípkové klávesy inokedy

Keď nástroj nič nerobí, šípkové klávesy posúvajú kameru:

| Klávesa | Činnosť |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Otáčanie |
| {{key:Shift}} so šípkou | Posun |

## Myš

| Akcia | Činnosť |
|---|---|
| Kliknutie | Použije aktuálny nástroj |
| Stlačiť, ťahať, uvoľniť | Rovnako ako dve kliknutia (pre kresliace nástroje); výber oknom (pre {{ui:Vybrať}}); maže pri pohybe (pre {{ui:Guma}}) |
| Dvojklik | {{ui:Vybrať}}: plocha s jej hranami, hrana s jej plochami, otvorí skupinu; prázdny priestor skupinu zavrie. {{ui:Tlač/ťah}}: zopakuje poslednú vzdialenosť |
| Trojklik | {{ui:Vybrať}}: všetko súvisiace |
| {{key:Shift}} + klik | {{ui:Vybrať}}: prepne výber dnu a von |
| {{key:Mod}} + klik | {{ui:Vybrať}}: pridá do výberu |
| {{key:Shift}} + {{key:Mod}} + klik | {{ui:Vybrať}}: odstráni z výberu |
| Ťahanie stredným tlačidlom | Otáčanie, s ľubovoľným nástrojom |
| {{key:Shift}} + ťahanie stredným tlačidlom | Posun, s ľubovoľným nástrojom |
| Ťahanie pravým tlačidlom | Posun, s ľubovoľným nástrojom |
| Koliesko | Zväčšenie k ukazovateľu |

Kontextová ponuka pravým tlačidlom nie je.

## Touchpad

Čo urobí dvojprstový ťah, závisí od {{ui:Nastavenia}} › {{ui:ModelCraft}} › Posúvanie:

| Gesto | Touchpad (alebo odvodené) | Koliesko myši |
|---|---|---|
| Dvojprstový ťah | Otáčanie | Zväčšenie k ukazovateľu |
| {{key:Shift}} + dvojprstový ťah | Posun | Zväčšenie |
| Štipnutie | Zväčšenie k ukazovateľu | Zväčšenie k ukazovateľu |
| Stlačenie dvoma prstami a ťahanie (sekundárne tlačidlo podržané) | Posun | Posun |

Pozri [Otáčanie, posun a zväčšenie](topic:orbit-pan-zoom#on-a-trackpad) a [Nastavenia ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Klávesy Modeler

S {{ui:Nastavenia}} › {{ui:ModelCraft}} › Ovládanie nastavené na štýl Modeler:

| Klávesa | Činnosť |
|---|---|
| {{key:W}} alebo {{key:Space}} | {{ui:Vybrať}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Úsečka}} / {{ui:Obdĺžnik}} / {{ui:Kružnica}} / {{ui:Mnohouholník}} |
| {{key:E}} | {{ui:Tlač/ťah}} (vytiahnutie) |
| {{key:T}} | {{ui:Pásmo}} merania |
| {{key:D}} | {{ui:Kóta}} |
| {{key:G}} | Okamžite presunie výber od ukazovateľa |
| {{key:R}} | Otočí výber okolo jeho stredu (modrá os) |
| {{key:S}} | Zmení mierku výberu okolo jeho stredu |
| {{key:X}} / {{key:Y}} / {{key:Z}} počas presúvania alebo otáčania | Uzamkne červenú / zelenú / modrú os (opätovným stlačením odomkne) |
| Klik alebo {{key:Enter}} | Položí výber |
| {{key:Esc}} alebo pravé tlačidlo | Vráti výber späť |
| {{key:Shift+D}} | Duplikuje a presunie kópiu |
| {{key:X}} alebo {{key:Delete}} | Zmaže výber |
| {{key:A}} / {{key:Alt+A}} | Vybrať všetko / nevybrať nič |
| {{key:Tab}} | Otvorí vybranú skupinu alebo komponent; ďalším stlačením ho zavrie |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Vytvoriť skupinu / vytvoriť komponent |
| Numerická klávesnica {{key:1}} / {{key:3}} / {{key:7}} | Pohľad spredu / sprava / zhora ({{key:Mod}} pre pohľad zozadu / zľava / zdola) |
| Numerická klávesnica {{key:5}} | Perspektíva zapnutá alebo vypnutá |
| Numerická klávesnica {{key:.}} | Zväčšenie na výber |
| {{key:Home}} alebo {{key:Shift+C}} | Zväčšenie na rozsah |
| {{key:Shift+Tab}} | Prichytávanie zapnuté alebo vypnuté |
| Ťahanie stredným tlačidlom / so {{key:Shift}} / s {{key:Mod}} | Otáčanie / posun / zväčšenie |
| {{key:Alt}} + ťahanie / {{key:Alt+Shift}} + ťahanie | Otáčanie / posun (stredné tlačidlo nie je potrebné) |

Kopírovanie, prilepenie, späť, uloženie a otvorenie si zachovávajú klávesy uvedené vyššie. Zadané hodnoty, políčko hodnoty a {{ui:Tlač/ťah}} fungujú v oboch štýloch rovnako.

## Dotyková obrazovka

| Gesto | Činnosť |
|---|---|
| Ťuknutie | Kliknutie aktuálnym nástrojom |
| Dvojité ťuknutie | Dvojklik |
| Stlačiť, ťahať, zdvihnúť | Rovnako ako stlačiť, ťahať, uvoľniť myšou |
| Dva prsty: priblížiť | Zväčšenie |
| Dva prsty: pohyb spolu | Posun ({{ui:Nastavenia}} › {{ui:ModelCraft}} › Dotyková obrazovka môže nastaviť Otáčanie) |
| Tri prsty: pohyb spolu | Otáčanie (Posun, keď dva prsty otáčajú) |
| Jeden prst nehybne podržaný | Dokončí nástroj ako {{key:Enter}}; keď nič neprebieha, potom ťahaním otáča |
| Druhý prst počas akcie jedným prstom | Zruší túto akciu |
| Nástroj {{ui:Otáčanie}}, potom ťahanie jedným prstom | Otáčanie |

Na zadanie hodnoty na dotykovej obrazovke ťuknite na políčko hodnoty dole, napíšte ju a stlačte kláves Enter (alebo Go) na klávesnici.

## Kde je Presunúť

Presunúť je v nástroji {{ui:Presunúť}}, kláves {{key:M}}: vyberte, čo presunúť, kliknite na základný bod a potom na druhý bod alebo zadajte vzdialenosť. Pozri [Presunutie, kopírovanie a polia](topic:move-copy).
