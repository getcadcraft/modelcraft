---
title: Nastavenia ModelCraft
summary: Vyberte štýl klávesov, ktorý poznáte, nastavte otáčanie a posun touchpadom bez tlačidiel kamery a zapnite alebo vypnite prichytávanie a kolízie telies.
keywords: nastavenia, predvoľby, ovládanie, štýl klávesov, mapovanie klávesov, skratky, blender, trackpad, touchpad, posúvanie, otáčanie, štipnutie, prichytenie, prichytávanie, kolízie, kolidovanie, prekrytie, prienik, prechod cez
from: caf77d5b
---

Otvorte {{ui:Nastavenia}} ikonou ozubeného kolieska na paneli aplikácie alebo klávesmi {{key:Mod+,}}. Prvá karta, {{ui:ModelCraft}}, obsahuje nastavenia patriace tejto aplikácii; {{ui:Všeobecné}} obsahuje nastavenia, ktoré zdieľajú všetky aplikácie CadCraft (motív, panel nástrojov, panely). Nastavenia ModelCraftu platia iba v aplikácii: meníte ich tu a tento prehliadač si ich pamätá.

## Ovládanie: ktoré klávesy a tlačidlá myši

Dva štýle klávesov. Prepínajte ich tu, pomocou {{ui:Klávesy: Tlač/ťah}} / {{ui:Klávesy: Modelár}} v pravom dolnom rohu zobrazenia, alebo na konci ponuky {{ui:Viac}} na paneli nástrojov:

- **Štýl Tlač/ťah** (na začiatku; písmená modelárov typu tlač/ťah, napríklad SketchUp): písmeno vyberie nástroj — {{key:L}} úsečka, {{key:R}} obdĺžnik, {{key:P}} tlač/ťah, {{key:M}} presunúť, {{key:Q}} otočiť, {{key:S}} mierka, {{key:G}} vytvoriť komponent. Pozri [Klávesy a akcie myši](topic:keyboard).
- **Štýl Modelár** (klávesy modelárov sietí, napríklad Blender): najprv vyberte, potom ihneď konajte s výberom. {{key:G}} ho presunie, {{key:R}} otočí a {{key:S}} zmení mierku od miesta, kde je ukazovateľ — bez prvého kliknutia. Počas presunu {{key:X}}, {{key:Y}} alebo {{key:Z}} zamkne červenú, zelenú alebo modrú os, zadané číslo nastaví vzdialenosť (alebo stupne, alebo faktor) a kliknutie alebo {{key:Enter}} ho položí; {{key:Esc}} alebo pravé kliknutie ho vráti späť. Potom ste späť v {{ui:Vybrať}}.

Štýl klávesov je rovnaká voľba ako štýl ponuky: štýl klávesov Modelár je štýl ponuky {{ui:Modelár}} a výber jedného určí aj druhý. Pozri [Ponuky, klávesy a myš](topic:menus-keys-and-mouse). Úplný zoznam pre Modelár je v [Klávesy a akcie myši](topic:keyboard#modeler-keys). Popisky na paneli nástrojov a na úvodnej karte nasledujú štýl, ktorý vyberiete.

## Posúvanie: koliesko myši alebo touchpad

- **Rozpoznať automaticky** (na začiatku): ModelCraft sleduje posúvanie. Posúvanie do strán alebo jemné posúvanie, ako ho posiela touchpad, otáča; celé zárezy kolieska zväčšujú.
- **Koliesko myši**: posúvanie vždy zväčšuje smerom k ukazovateľu.
- **Touchpad**: potiahnite dvoma prstami na otáčanie, podržte {{key:Shift}} a potiahnite na posun, štipnutím zväčšíte. Tlačidlá {{ui:Otáčanie}}, {{ui:Posun}} alebo {{ui:Zväčšenie}} nikdy nepotrebujete.

Štipnutie zväčšuje pri každej voľbe. Ak "Rozpoznať automaticky" pri vašej myši alebo touchpade hádá zle, vyberte tú, ktorú máte.

:::tip
V štýle Modelár môžete otáčať aj podržaním {{key:Alt}} a potiahnutím, a posúvať pomocou {{key:Alt+Shift}} a potiahnutia — šikovné na notebooku bez prostredného tlačidla.
:::

## Prichytávanie

**Prichytávanie k bodom, hranám a osiam** (na začiatku zapnuté) pritiahne ukazovateľ ku koncovým bodom, stredom, hranám, pomocným čiaram a červenej, zelenej a modrej osi — pozri [Odvodenie](topic:inference). Vypnite ho, keď chcete niečo umiestniť voľne blízko iných geometrií bez toho, aby to poskakovalo. Plochy, zem a zámky osí fungujú aj pri vypnutom prichytávaní.

Tlačidlo {{ui:Prichytávanie}} v pravom dolnom rohu zobrazenia robí to isté pre prácu v tejto relácii (ukladá sa tiež). V štýle Modelár ho prepína {{key:Shift+Tab}}.

## Telesá sa zastavia pri dotyku

**Zastaviť telesá pri dotyku** (na začiatku zapnuté) zabráni tomu, aby sa múr potiahol cez iný múr. Pri {{ui:Presunúť}} (a {{key:G}}, a pri prilepení a potom presune pomocou {{key:Mod+D}}) sa výber posunie k druhému telesu a zastaví sa pri ňom; pri {{ui:Tlač/ťah}} sa plocha zastaví tam, kde sa stretne s iným telesom. Položenie na niečo a kĺzanie po ňom je v poriadku — zastaví sa iba prechod do vnútra. Veci, ktoré sa už na začiatku prekrývajú, sa stále dajú od seba oddialiť.

Ak chcete niečo zámerne pretlačiť, kliknite na {{ui:Kolízia}} v pravom dolnom rohu (alebo nastavenie zrušte), urobte presun a znova kliknite.

:::note
Kolízie sa kontrolujú pri presunoch a pri {{ui:Tlač/ťah}}. {{ui:Otočiť}} a {{ui:Mierka}} ich zatiaľ nekontrolujú a voľná geometria, ktorá sa dotýka, sa stále spojí, ako to bolo vždy: oddelené objekty držte v [skupinách](topic:groups-components), aby zostali oddelené.
:::

## Podložka 3D tlačiarne

Veľkosť podložky vašej tlačiarne: {{ui:Nenastavená}} (na začiatku), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 alebo 300 × 300 × 400 mm. Vyberte veľkosť, ktorá sa najviac blíži tlačovému objemu vašej tlačiarne. [Kontrola na 3D tlač](topic:print-3d) potom oznámi, keď je model väčší než podložka; pri {{ui:Nenastavená}} sa veľkosť nekontroluje.

## Otáčanie a posun

**Otáčať okolo toho, čo je pod kurzorom** (na začiatku zapnuté): otáčanie sa točí okolo časti modelu pod ukazovateľom a posun tento bod ponecháva pod ukazovateľom; nad prázdnym priestorom obe použijú stred zobrazenia. Vypnite to, ak chcete vždy otáčať okolo stredu zobrazenia. **Rýchlosť otáčania** a **Rýchlosť posunu** sa pohybujú od 0.25× do 3× (1× je na začiatku) a platia pre myš, touchpad, dotyk aj šípky. Pozri [Otáčanie, posun a zväčšenie](topic:orbit-pan-zoom).

## Indikátor v rohu

Čo sa zobrazí v rohu 3D zobrazenia: **Kocka pohľadu** (na začiatku; vpravo hore — kliknutím na plochu, hranu alebo roh sa pozriete z tohto miesta, potiahnutím ju otočíte, potiahnutím jej kruhu kompasu otočíte model), **Ikona osí** (malá značka X, Y, Z vľavo dole, ktorá sa otáča s pohľadom: X červená, Y zelená, Z modrá) alebo **Žiadna**. Pozri [Kocka pohľadu](topic:view-cube).
