---
title: Klávesy a akce myší
summary: Každá klávesová zkratka, akce myší, gesto touchpadu a dotykové gesto v ModelCraftu, seskupené podle toho, co dělají.
keywords: klávesnice, zkratky, klávesy, klávesové zkratky, myš, touchpad, dotyk, gesta, přehled, ctrl, příkaz, šipky
from: e2348957
---

Toto jsou klávesy pro tlač/tah, se kterými ModelCraft začíná. Pro druhý styl viz [Klávesy stylu Modeler](topic:keyboard#modeler-keys) níže a [Nastavení ModelCraftu](topic:settings).

Zkratky fungují, když má zaměření 3D pohled nebo tlačítko na panelu nástrojů. Pokud jste právě napsali něco do pole v panelu nebo změnili seznam v {{ui:Styl}}, nejprve klikněte do 3D pohledu, jinak vaše klávesy půjdou do toho pole. Viz [Klávesy, myši a touchpady](common:keys), jak se klávesy zapisují na každém počítači.

## Nástroje

| Klávesa | Nástroj |
|---|---|
| {{key:Space}} | {{ui:Vybrat}} |
| {{key:L}} | {{ui:Úsečka}} |
| {{key:R}} | {{ui:Obdélník}} |
| {{key:C}} | {{ui:Kružnice}} |
| {{key:N}} | {{ui:Mnohoúhelník}} |
| {{key:A}} | {{ui:Oblouk}} |
| {{key:F}} | {{ui:Odsazení}} |
| {{key:B}} | {{ui:Malovat}} |
| {{key:P}} | {{ui:Tlač/tah}} |
| {{key:M}} | {{ui:Přesunout}} |
| {{key:Q}} | {{ui:Otočit}} |
| {{key:S}} | {{ui:Měřítko}} |
| {{key:E}} | {{ui:Guma}} |
| {{key:T}} | Měření {{ui:Pásmo}} |
| {{key:D}} | {{ui:Kóta}} |
| {{key:O}} | {{ui:Obíhat}} |
| {{key:H}} | {{ui:Posun}} |
| {{key:Z}} | {{ui:Zoom}} |

Písmena nástrojů fungují jen bez modifikačních kláves: {{key:Shift}} s písmenem nedělá nic, kromě dvou níže.

## Model a soubor

| Klávesa | Dělá |
|---|---|
| {{key:G}} | Vytvoří komponentu z výběru |
| {{key:Shift+G}} | Vytvoří skupinu z výběru |
| {{key:Shift+Z}} | Zoom na rozsah (celý model) |
| {{key:Mod+Z}} | Zpět |
| {{key:Mod+Y}} nebo {{key:Mod+Shift+Z}} | Znovu |
| {{key:Mod+S}} | Uložit (stáhne soubor `.modelcraft`) |
| {{key:Mod+O}} | Otevřít model |
| {{key:Mod+A}} | Vybrat vše (v otevřené skupině, je-li nějaká otevřena) |
| {{key:Mod+C}} | Kopírovat výběr |
| {{key:Mod+X}} | Vyjmout výběr |
| {{key:Mod+V}} | Vložit: kopie se pohybuje za kurzorem, kliknutím ji umístěte |
| {{key:Mod+Shift+V}} | Vložit na stejné místo (odkud byla zkopírována) |
| {{key:Mod+D}} | Duplikovat: kopie se pohybuje za kurzorem, kliknutím ji položte |
| {{key:Delete}} nebo {{key:Backspace}} | Smazat výběr |
| {{key:PageDown}} / {{key:PageUp}} | Další / předchozí scéna |
| {{key:F1}} | Otevřít nebo zavřít tuto nápovědu (také {{ui:Nápověda}} na liště aplikace; {{key:Esc}} v nápovědě ji zavře) |
| {{key:Ctrl+Shift+F}} | Režim obrazovky: celá obrazovka, pak skryté lišty, pak normální (na Macu také Control) |

## Esc

{{key:Esc}} se při každém stisku vrací o jednu úroveň zpět:

1. Zruší to, co nástroj zrovna dělá (kreslenou čáru, tlač/tah, přesun). Vše se vrátí zpět.
2. Přepne na {{ui:Vybrat}}.
3. Zruší výběr.
4. Zavře skupinu, kterou upravujete.

Také zastavuje přehrávání scén. V políčku hodnoty {{key:Esc}} vymaže, co jste napsali, a vrátí vás do pohledu.

## Zatímco nástroj pracuje

| Klávesa | Dělá |
|---|---|
| Číslice nebo jeden ze znaků `. , - ' " [ < * /` | Začne psát do políčka hodnoty |
| {{key:Enter}} | Použije, co jste napsali do políčka hodnoty |
| {{key:Right}} | Zamkne na červenou osu (dalším stiskem odemkne) |
| {{key:Left}} | Zamkne na zelenou osu |
| {{key:Up}} | Zamkne na modrou osu |
| {{key:Down}} | Zamkne rovnoběžně s posledně najetou hranou před prvním kliknutím |
| Držet {{key:Shift}} | Drží směr, ke kterému se přichytáváte, dokud je držen |
| {{key:Ctrl}}, {{key:Mod}} nebo {{key:Alt}} (u {{ui:Přesunout}}) | Přepíná mezi přesunem a kopírováním |

Zámky šipkami fungují v {{ui:Úsečka}}, {{ui:Obdélník}}, {{ui:Kružnice}}, {{ui:Mnohoúhelník}}, {{ui:Přesunout}}, {{ui:Měřítko}} a {{ui:Pásmo}} (při měření z bodu), a to po prvním kliknutí. {{ui:Tlač/tah}} se vždy pohybuje podél směru plochy a zámky nemá. V {{ui:Otočit}} šipky po prvním kliknutí ukážou hlášku "Zamčeno", ale úhel otáčení nezmění.

## Šipky v jiných chvílích

Když žádný nástroj zrovna nic nedělá, šipky posouvají kameru:

| Klávesa | Dělá |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Obíhání |
| {{key:Shift}} se šipkou | Posun |

## Myš

| Akce | Dělá |
|---|---|
| Klik | Použije aktuální nástroj |
| Stisk, tažení, uvolnění | Stejné jako dva kliky (pro kreslicí nástroje); výběr oknem (pro {{ui:Vybrat}}); mazání po cestě (pro {{ui:Guma}}) |
| Dvojklik | {{ui:Vybrat}}: plocha s hranami, hrana s plochami, otevře skupinu; prázdný prostor zavře skupinu. {{ui:Tlač/tah}}: zopakuje poslední vzdálenost |
| Trojklik | {{ui:Vybrat}}: vše propojené |
| {{key:Shift}} + klik | {{ui:Vybrat}}: přepíná přidání a odebrání z výběru |
| {{key:Mod}} + klik | {{ui:Vybrat}}: přidá do výběru |
| {{key:Shift}} + {{key:Mod}} + klik | {{ui:Vybrat}}: odebere z výběru |
| Tažení prostředním tlačítkem | Obíhání, s libovolným nástrojem |
| {{key:Shift}} + tažení prostředním tlačítkem | Posun, s libovolným nástrojem |
| Tažení pravým tlačítkem | Posun, s libovolným nástrojem |
| Kolečko | Zoom směrem ke kurzoru |

Kontextová nabídka pravým tlačítkem neexistuje.

## Touchpad

Co dělá tah dvěma prsty, závisí na {{ui:Nastavení}} › {{ui:ModelCraft}} › Posouvání:

| Gesto | Touchpad (nebo odvozeně) | Kolečko myši |
|---|---|---|
| Tah dvěma prsty | Obíhání | Zoom směrem ke kurzoru |
| {{key:Shift}} + tah dvěma prsty | Posun | Zoom |
| Sevření prsty | Zoom směrem ke kurzoru | Zoom směrem ke kurzoru |
| Stisk dvěma prsty a tažení (držené sekundární kliknutí) | Posun | Posun |

Viz [Obíhání, posun a zoom](topic:orbit-pan-zoom#on-a-trackpad) a [Nastavení ModelCraftu](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Klávesy stylu Modeler

Při {{ui:Nastavení}} › {{ui:ModelCraft}} › Ovládání nastaveném na styl Modeler:

| Klávesa | Dělá |
|---|---|
| {{key:W}} nebo {{key:Space}} | {{ui:Vybrat}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Úsečka}} / {{ui:Obdélník}} / {{ui:Kružnice}} / {{ui:Mnohoúhelník}} |
| {{key:E}} | {{ui:Tlač/tah}} (vytažení) |
| {{key:T}} | Měření {{ui:Pásmo}} |
| {{key:D}} | {{ui:Kóta}} |
| {{key:G}} | Přesune výběr okamžitě od kurzoru |
| {{key:R}} | Otočí výběr kolem jeho středu (modrá osa) |
| {{key:S}} | Změní měřítko výběru kolem jeho středu |
| {{key:X}} / {{key:Y}} / {{key:Z}} při přesunu nebo otáčení | Zamkne červenou / zelenou / modrou osu (opětovným stiskem odemkne) |
| Klik nebo {{key:Enter}} | Položí |
| {{key:Esc}} nebo pravé tlačítko | Vrátí zpět |
| {{key:Shift+D}} | Duplikuje a přesune kopii |
| {{key:X}} nebo {{key:Delete}} | Smaže výběr |
| {{key:A}} / {{key:Alt+A}} | Vybere vše / zruší výběr |
| {{key:Tab}} | Otevře vybranou skupinu nebo komponentu; znovu ji zavře |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Vytvořit skupinu / vytvořit komponentu |
| Numerická klávesnice {{key:1}} / {{key:3}} / {{key:7}} | Pohled zepředu / zprava / shora ({{key:Mod}} pro pohled zezadu / zleva / zdola) |
| Numerická klávesnice {{key:5}} | Perspektiva zapnuta nebo vypnuta |
| Numerická klávesnice {{key:.}} | Zoom na výběr |
| {{key:Home}} nebo {{key:Shift+C}} | Zoom na rozsah |
| {{key:Shift+Tab}} | Přichycení zapnuto nebo vypnuto |
| Tažení prostředním tlačítkem / s {{key:Shift}} / s {{key:Mod}} | Obíhání / posun / zoom |
| {{key:Alt}} + tažení / {{key:Alt+Shift}} + tažení | Obíhání / posun (bez potřeby prostředního tlačítka) |

Kopírování, vložení, zpět, uložení a otevření si ponechávají klávesy uvedené výše. Zadané hodnoty, políčko hodnoty a {{ui:Tlač/tah}} fungují v obou stylech stejně.

## Dotyková obrazovka

| Gesto | Dělá |
|---|---|
| Klepnutí | Klik aktuálním nástrojem |
| Dvojklepnutí | Dvojklik |
| Stisk, tažení, zvednutí | Stejné jako stisk, tažení a uvolnění myší |
| Dva prsty: sevření | Zoom |
| Dva prsty: pohyb společně | Posun ({{ui:Nastavení}} › {{ui:ModelCraft}} › Dotyková obrazovka může nastavit obíhání) |
| Tři prsty: pohyb společně | Obíhání (posun, když dva prsty obíhají) |
| Držení jednoho prstu v klidu | Dokončí nástroj jako Enter; pokud nic neběží, pak tažením obíhá |
| Druhý prst během jednoprstové akce | Zruší tuto akci |
| Nástroj {{ui:Obíhat}}, potom tažení jedním prstem | Obíhání |

Chcete-li na dotykové obrazovce zadat hodnotu, klepněte na políčko hodnoty dole, napište ji a stiskněte klávesu Enter (nebo Go) na klávesnici.

## Kde je Přesun

Přesun je v nástroji {{ui:Přesunout}}, klávesa {{key:M}}: vyberte, co přesunout, klikněte na základní bod a potom na druhý bod, nebo zadejte vzdálenost. Viz [Přesun, kopírování a pole](topic:move-copy).
