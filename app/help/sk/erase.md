---
title: Zmazanie a vyčistenie
summary: Zmažte hrany, skupiny a pomocné čiary gumou alebo klávesom Delete, spojte rozdelené plochy a opravte plochy obrátené zlým smerom.
keywords: zmazať, guma, delete, odstrániť, spojiť, zlúčiť plochy, vyčistiť, bludné čiary, obrátiť plochu, zadná plocha, späť
from: 80b92a81
---

## Zmazanie gumou

1. Stlačte {{key:E}} pre {{ui:Guma}}.
2. Kliknite na hranu, skupinu alebo komponent, alebo na pomocnú čiaru. Zmaže sa.
3. Ak chcete zmazať viac objektov, stlačte a potiahnite cez ne. Všetko, čez čo prejdete, sa zvýrazní a pri uvoľnení tlačidla sa zmaže všetko.

Guma neoznačuje plochy: plocha zanikne, keď zmažete hrany, ktoré potrebuje. Plochy sú to, cez čo guma hľadá hrany.

## Čo sa stane s plochami

- **Hrana medzi dvoma plochami v tej istej rovine** (napríklad čiara, ktorú ste nakreslili cez podlahu) zmizne a dve plochy sa **spoja** do jednej.
- **Hrana, ktorú plocha potrebuje, aby zostala uzavretá** (hrana škatule), so sebou odnesie aj túto plochu. Zmažte jednu hornú hranu škatule a zmizne vrch aj jedna strana, takže zostane otvorená škatuľa.
- **Voľné konce** (body, ktoré už žiadna hrana nepoužíva) sa vyčistia.

Zmazaním poslednej kópie komponentu sa komponent odstráni aj z panela {{ui:Komponenty}}.

## Zmazanie klávesom Delete

1. Vyberte, čo chcete odstrániť, nástrojom {{ui:Vybrať}}.
2. Stlačte {{key:Delete}} alebo {{key:Backspace}}.

Týmto spôsobom sa odstránia aj plochy. Plocha odstránená týmto spôsobom nechá svoje hrany na mieste, takže môžete odstrániť vrch škatule, zachovať jej obrys a potom tam nakresliť niečo iné.

## Vyčistenie bludných čiar na plochej ploche

Ak múr alebo podlaha zobrazuje čiary, ktoré nechcete (zostali po kreslení), zmažte ich nástrojom {{ui:Guma}}. Čiary ležiace v ploche zaniknú a plocha zostane.

## Plocha obrátená zlým smerom

Plocha pozorovaná zozadu je modrosivá. Ak plocha zobrazuje modrosivú farbu na vonkajšej strane modelu:

1. Vyberte plochu.
2. Kliknite na {{ui:Obrátiť plochu}} v {{ui:Informácie o entite}}.

Smer plôch je najdôležitejší pri exporte: renderery, herné enginy a 3D tlačiarne môžu plochy, ktoré smerujú dovnútra, skryť alebo nesprávne vyhodnotiť.

## Vrátenie chyby

{{key:Mod+Z}} vráti späť jeden krok naraz, {{key:Mod+Y}} (alebo {{key:Mod+Shift+Z}}) krok znova vykoná. Potiahnutie gumou je jeden krok, bez ohľadu na to, koľko vecí zachytilo. Stavový riadok pomenuje, čo bolo vrátené späť: "Zmazanie bolo vrátené späť."
