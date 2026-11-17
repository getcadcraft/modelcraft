---
title: Import modelu .skp
summary: Importujte súbor .skp s jeho skupinami, komponentmi, farbami, textúrami, štítkami a mäkkými hranami, pozrite si, čo prišlo a čo nie, a pokračujte v modelovaní.
keywords: skp, import, otvoriť skp, komponenty, skupiny, štítky, vrstvy, materiály, farby, textúry, skryté, mäkké hrany, 3d warehouse, migrácia, prepínanie
from: 325d3c81
---

ModelCraft číta súbory SketchUp (`.skp`) vlastným čítačom priamo na stránke. Nič sa nenahráva a funguje offline vždy, keď funguje ModelCraft. Súbory z verzií SketchUp 3 až 2026 boli otestované.

## Import súboru

1. Kliknite na {{ui:Importovať}} v skupine {{ui:Súbor}} (alebo pretiahnite súbor `.skp` na 3D view).
2. Vyberte súbor.

   Stavový riadok počas čítania hovorí "Čítam house.skp…" a potom, čo prišlo, napríklad "Importované house.skp (SketchUp 25.0.575): 1240 plôch, 6 komponentov, v skupine."

Celý model príde ako jedna skupina pomenovaná podľa súboru, vybratá, a view sa na ňu priblíži. Jedno {{key:Mod+Z}} ho zase odstráni vrátane štítkov.

:::tip
Rozložte importovanú skupinu ({{ui:Informácie o entite}} › {{ui:Rozložiť}}), ak chcete jej obsah voľne v modeli, a nie v jednej skupine.
:::

## Čo prichádza

- **Plochy** s ich otvormi a **hrany**, ktoré nie sú súčasťou plochy.
- **Skupiny** prichádzajú ako skupiny a **komponenty** ako komponenty: každá kópia komponentu je umiestnením jednej definície, takže úprava jednej kópie zmení všetky, ako v SketchUp. Názvy prichádzajú spolu s nimi.
- **Farby.** Vlastný materiál plochy jej dá farbu. Materiál namaľovaný na skupinu alebo komponent sa stane náterom tohto umiestnenia, takže plochy vnútri, ktoré nemajú vlastnú farbu, ho prevezmú, ako v SketchUp. Komponent namaľovaný na jednom mieste červenou a na inom modrou zostane jedným komponentom.
- **Textúry.** Plocha namaľovaná materiálom s textúrou prichádza s touto textúrou, položenou na plochu tak, ako je v súbore, a štýl {{ui:Tieňovaný}} ju zobrazí. Obrázok sa pri uložení zachová v súbore ModelCraft a aj [vykreslený obrázok](topic:render) ho zobrazí. Materiál s textúrou namaľovaný na celú skupinu alebo komponent dá tejto kópii len farbu materiálu.
- **Štítky.** Skupina alebo komponent na štítku SketchUp dostane štítok ModelCraft s rovnakým názvom, uvedený v {{ui:Štítky}}, zobrazený alebo skrytý tak, ako bol v SketchUp. Ak váš model už má štítok s rovnakým názvom, použije sa ten.
- **Skryté veci prichádzajú skryté:** plochy, hrany, skupiny a komponenty a plochy a hrany na skrytom štítku. Vidíte to, čo ukázal SketchUp, a nič sa nestratí: {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Zobraziť všetko}} ich zobrazí. Pozri [Skrytie, izolácia a zobrazenie](topic:hide-isolate).
- **Mäkké a hladké hrany** zostávajú mäkké, takže zakrivené povrchy vyzerajú hladko.
- **Veľkosti** sú správne v akejkoľvek jednotke: súbory SketchUp sú vo vnútri v palcoch a ModelCraft ich prevedie.

## Čo neprichádza

Stavový riadok hovorí, čo sa vynechalo, s počtami.

- **Niektoré textúry** si zachovajú len farbu svojho materiálu: textúra chýbajúca v súbore, obrázok vo formáte, ktorý prehliadače nedokážu zobraziť (napríklad súbor Photoshopu), alebo textúra bez veľkosti. Plochy s premietnutou textúrou prichádzajú s textúrou umiestnenou približne.
- **Štítky na voľných plochách a hranách.** ModelCraft označuje štítkami len skupiny a komponenty, takže plocha alebo hrana s vlastným štítkom príde bez štítku a stavový riadok ich spočíta. Urobte takéto plochy skupinou ({{key:Shift+G}}) a označte skupinu štítkom.
- **Obrázky** umiestnené v modeli, text, kóty, vodiace čiary, rezové roviny, scény a štýly.

## Problémy

- „Toto nie je súbor SketchUp.“ alebo „Tento súbor SketchUp je poškodený: …“: súbor je useknutý alebo ide o niečo iné s názvom `.skp`. Uložte ho znova zo SketchUp alebo si vyžiadajte novú kópiu.
- Súbor z verzie SketchUp novšej, ako ModelCraft pozná, sa odmietne a uvedie sa zistená verzia.
- Model, ktorý je len z obrázkov, textu alebo kót, oznámi, že nemá čo zobraziť.

## Vrátenie modelu späť

ModelCraft nevie ukladať súbory `.skp`. Exportujte Collada ({{ui:Exportovať}} › `.dae`) a importujte ho v SketchUp: skupiny, komponenty a farby prejdú; textúry prejdú ako farba svojho materiálu. Pozri [Exportovanie modelu](topic:export-model).
