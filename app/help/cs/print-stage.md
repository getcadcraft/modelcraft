---
title: Umístění věcí na tiskovou podložku a jejich odeslání do tiskárny
summary: Přidejte položky z knihovny nebo svůj vlastní model na podložku tiskárny, uspořádejte je, prohlédněte si řezané vrstvy a odešlete tisk přes USB nebo síť, nebo uložte G-code, aniž byste nejdřív exportovali STL.
keywords: fáze tisku, 3D tisk, tiskárna, podložka, odeslat na 3D tiskárnu, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, knihovna, uspořádat, vejít vše, náhled vrstev, výplň, podpěry, filament, pla, petg, doplněk, doplněk 3D Print
from: abcf5d7e
---

{{ui:Fáze tisku}} rozmístí věci na podložku vaší tiskárny, nařeže je na vrstvy a odešle je do tiskárny. Soubor nejdřív exportovat nemusíte. Patří do doplňku 3D Print, který je ve výchozím stavu zapnutý.

:::note
S tímto ještě nic nebylo vytištěno na skutečné tiskárně. Slicer je nový: sledujte první vrstvy vašeho prvního tisku a před odesláním použijte náhled vrstev.
:::

## Co uděláte

Umístíte model na podložku, zkontrolujete, že se vejde, prohlédnete si řezané vrstvy a odešlete ho do tiskárny nebo uložíte G-code.

## Postup

1. Klikněte na {{ui:Fáze tisku}} na panelu nástrojů. Nad zobrazením se otevře karta a přerušovaný obrys ukáže vaši podložku.
2. Pod **Přidat z knihovny** napište název do hledacího pole, stiskněte {{ui:Hledat}} a u výsledku stiskněte {{ui:Přidat}}. Položka se umístí na podložku v plné velikosti, nebo zmenšená, aby se vešla. Vše, co jste už nakreslili nebo naimportovali a vidíte ve zobrazení, je na podložce také.
3. Pod **Na podložce** zkontrolujte velikost každé položky. Položka označená **Mimo podložku** se musí přesunout. Věci přesouvejte, otáčejte a měňte jejich měřítko ve zobrazení běžnými nástroji.
4. Stiskněte {{ui:Uspořádat na podložce}}, aby se položky rozprostřely, nebo {{ui:Vejít vše na podložku}}, aby se zmenšily tak, aby se vešly.
5. Pod **Vaše tiskárna** vyberte velikost **Podložka** nebo jeden z profilů tiskáren.
6. Pod **Nastavení tisku** vyberte **Materiál**, **Kvalitu** a **Výplň %**. Pokud tvar potřebuje podpěry, zaškrtněte **Přidat podpěry pod převisy**.
7. Stiskněte {{ui:Náhled vrstev}} a posunem jezdce **Vrstva** si prohlédněte řezané vrstvy. Pokud pak změníte fázi nebo nastavení, stiskněte {{ui:Náhled vrstev}} znovu.
8. Pod **Připojení** vyberte {{ui:Kabel USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} nebo {{ui:PrusaLink}}. Pro USB stiskněte {{ui:Připojit}}. Pro síťovou tiskárnu napište její **Adresu** (a **API klíč**, pokud se ptá), pak stiskněte {{ui:Otestovat připojení}}.
9. Stiskněte {{ui:Odeslat na 3D tiskárnu}}. Karta se zeptá, zda je podložka volná a zda je vložen správný materiál, a ukáže čas, materiál a teploty. Potvrďte pro odeslání.

Dostanete zprávu, že se tiskárna spouští. {{ui:Zastavit tisk}} vypne topení, ventilátor a motory. Pokud chcete jen soubor, stiskněte {{ui:Uložit místo toho G-code}}.

## Poznámky

- USB vyžaduje Chrome nebo Edge na počítači a stránka musí zůstat otevřená až do konce tisku. Její zavření proud zastaví.
- Síťová tiskárna musí tuto stránku povolit. V Moonrakeru ji přidejte do `cors_domains`; v OctoPrintu zapněte CORS a zkopírujte API klíč. Váš prohlížeč se může zeptat, zda smí dosáhnout na zařízení ve vaší síti.
- Nic se nepřipojí ani neodešle bez vašeho kliknutí.
- Seznam slicerů je pod **Slicer**. {{ui:CadCraft basic (součástí, nejrychlejší)}} je zabudovaný. Kiri:Moto, PrusaSlicer, OrcaSlicer a Bambu Lab P2S jsou samostatné doplňky, které zapnete z karty nebo pod {{ui:Nastavení}} › {{ui:Doplňky}}. PrusaSlicer a OrcaSlicer používají vaši vlastní kopii a na počítači fungují z CadCraft Studio.
- Díly, které nejsou uzavřenými tělesy, se vynechají a karta vám řekne, jak velká část tvaru to je.
- Pro pryskyřičné tiskárny viz [Řezání pro pryskyřičnou tiskárnu](topic:resin-printing). Abyste model nejdřív zkontrolovali nebo opravili, viz [Podpěry, tloušťka stěn, vydutí a oprava](topic:print-tools).
