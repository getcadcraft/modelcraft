---
title: Nastavení ModelCraft
summary: Vyberte styl kláves, který znáte, nastavte obíhání a posun touchpadem bez tlačítek kamery a zapněte nebo vypněte přichytávání a kolize těles.
keywords: nastavení, předvolby, ovládání, styl kláves, mapa kláves, zkratky, blender, touchpad, rolování, obíhání, pinch, přichytávání, kolize, překrývání, prolínání, procházení skrz
from: caf77d5b
---

Otevřete {{ui:Nastavení}} ozubeným kolečkem na liště aplikace nebo klávesami {{key:Mod+,}}. První karta, {{ui:ModelCraft}}, obsahuje nastavení patřící této aplikaci; {{ui:Obecné}} obsahuje nastavení sdílená všemi aplikacemi CadCraft (motiv, panel nástrojů, panely). Nastavení ModelCraft platí jen v této aplikaci: měníte je zde a tento prohlížeč si je zapamatuje.

## Ovládání: které klávesy a tlačítka myši

Dva styly kláves. Přepínejte je zde pomocí {{ui:Klávesy: tlač/tah}} / {{ui:Klávesy: Modeler}} vpravo dole u pohledu, nebo na konci nabídky {{ui:Další}} na panelu nástrojů:

- **Styl tlač/tah** (výchozí; písmena modelářů typu push-pull, například SketchUp): písmeno vybere nástroj — {{key:L}} úsečka, {{key:R}} obdélník, {{key:P}} tlač/tah, {{key:M}} přesunout, {{key:Q}} otočit, {{key:S}} měřítko, {{key:G}} vytvořit komponentu. Viz [Klávesy a akce myši](topic:keyboard).
- **Styl Modeler** (klávesy síťových modelářů, například Blenderu): nejdřív vyberte, pak s výběrem hned pracujte. {{key:G}} jej přesune, {{key:R}} otočí a {{key:S}} zvětší nebo zmenší od místa kurzoru — bez prvního kliknutí. Během přesunu {{key:X}}, {{key:Y}} nebo {{key:Z}} zamkne červenou, zelenou nebo modrou osu, zadané číslo nastaví vzdálenost (nebo stupně či koeficient) a klik nebo {{key:Enter}} jej položí; {{key:Esc}} nebo pravé tlačítko jej vrátí zpět. Pak jste zpět u {{ui:Vybrat}}.

Styl kláves je stejná volba jako styl nabídky: styl Modeler kláves je styl nabídky {{ui:Modeler}} a výběr jednoho vybere i druhý. Viz [Nabídky, klávesy a myš](topic:menus-keys-and-mouse). Úplný seznam pro Modeler je v [Klávesy a akce myši](topic:keyboard#modeler-keys). Bubliny nápovědy na panelu nástrojů a na úvodní kartě se řídí stylem, který vyberete.

## Rolování: kolečko myši nebo touchpad

- **Zjistit automaticky** (výchozí): ModelCraft sleduje rolování. Boční nebo jemné rolování, jaké posílá touchpad, obíhá; celé zarážky kolečka přibližují.
- **Kolečko myši**: rolování vždy přibližuje k místu kurzoru.
- **Touchpad**: přejetím dvěma prsty obíhejte, podržte {{key:Shift}} a přejetím posouvejte, gestem pinch přibližujte. Tlačítka {{ui:Obíhat}}, {{ui:Posun}} nebo {{ui:Zoom}} nikdy nepotřebujete.

Gesto pinch přibližuje ve všech volbách. Pokud „Zjistit automaticky“ u vaší myši nebo touchpadu hádá špatně, vyberte tu, kterou máte.

:::tip
Ve stylu Modeler můžete také obíhat podržením {{key:Alt}} a tažením a posouvat s {{key:Alt+Shift}} a tažením — praktické na notebooku bez prostředního tlačítka.
:::

## Přichytávání

**Přichytávat k bodům, hranám a osám** (zapnuto na začátku) přitáhne kurzor ke koncovým bodům, středům, hranám, vodítkům a červené, zelené a modré ose — viz [Odvozování](topic:inference). Vypněte, když chcete něco volně umístit blízko jiné geometrie, aniž by to uskočilo. Plochy, zem a zámky os fungují i při vypnutém přichytávání.

Tlačítko {{ui:Přichytávání}} vpravo dole u pohledu dělá totéž pro práci v této relaci (ukládá se také). Ve stylu Modeler je přepíná {{key:Shift+Tab}}.

## Tělesa se zastaví v místě dotyku

**Zastavit tělesa při dotyku** (zapnuto na začátku) brání tomu, aby byla stěna protažena skrz jinou stěnu. Při {{ui:Přesunout}} (a při {{key:G}}, a při vložení a přesunu klávesou {{key:Mod+D}}) výběr zajede až k jinému tělesu a zastaví se u něj; při {{ui:Tlač/tah}} se plocha zastaví tam, kde narazí na jiné těleso. Opírání o něco a klouzání podél toho je v pořádku — zastavuje se jen vniknutí dovnitř. Věci, které se už při začátku překrývají, lze stále od sebe oddělit.

Chcete-li něco záměrně protlačit, klikněte vpravo dole na {{ui:Kolize}} (nebo nastavení vypněte), proveďte přesun a znovu klikněte.

:::note
Kolize se kontrolují u přesunu a tlač/tahu. {{ui:Otočit}} a {{ui:Měřítko}} je zatím nekontrolují a volná geometrie, která se dotýká, se stále spojí, jako vždy: oddělené věci držte v [skupinách](topic:groups-components), aby zůstaly odděleny.
:::

## Podložka 3D tiskárny

Velikost podložky vaší tiskárny: {{ui:Nenastaveno}} (výchozí), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 nebo 300 × 300 × 400 mm. Vyberte velikost nejbližší pracovnímu prostoru vaší tiskárny. [Kontrola 3D tisku](topic:print-3d) pak oznámí, kdy je model větší než podložka; při {{ui:Nenastaveno}} se velikost nekontroluje.

## Obíhání a posun

**Obíhat kolem toho, co je pod kurzorem** (zapnuto na začátku): obíhání se otáčí kolem části modelu pod kurzorem a posun tento bod drží pod kurzorem; nad prázdným prostorem obě funkce používají střed pohledu. Vypnutím vždy obíháte kolem středu pohledu. **Rychlost obíhání** a **Rychlost posunu** jdou od 0.25× do 3× (výchozí je 1×) a platí pro myš, touchpad, dotyk i šipky. Viz [Obíhání, posun a zoom](topic:orbit-pan-zoom).

## Indikátor v rohu

Co se zobrazuje v rohu 3D pohledu: **Kostka pohledu** (výchozí; vpravo nahoře — klikněte na plochu, hranu nebo roh a podívejte se odtud, táhnutím ji otáčejte pro obíhání, táhnutím jejího kruhu kompasu otočíte model), **Ikona os** (malá značka X, Y, Z vlevo dole, která se otáčí s pohledem: X červená, Y zelená, Z modrá) nebo **Žádná**. Viz [Kostka pohledu](topic:view-cube).
