---
title: Rezanie pre tlačiareň na živicu
summary: Nakrájajte podložku tlače z fázy tlače pre tlačiareň na živicu, vyhĺbte a podoprite diel, prechádzajte vrstvy, uložte súbor tlačiarne a nájdite svoju expozíciu testom expozície.
keywords: živica, tlač na živicu, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, dutina, vetracia diera, podložka, podpery, test expozície, rebrík expozície, kalibrácia, vrstvy, doplnok
from: 83c394e1
---

Doplnky pre živicu rozrežú to, čo je na tlačovej podložke, na obrázky vrstiev pre obrazovku vašej tlačiarne a uložia súbor, ktorý tlačiareň číta. Sú zadarmo, nič nie je zamknuté a sú vypnuté, kým ich nezapnete.

:::note
Na skutočnej tlačiarni zatiaľ nebol načítaný žiadny súbor. Súbory čítali iba vlastné čítačky CadCraftu a podpery sú nové. Skontrolujte vrstvy a prvú tlač spustite ručne.
:::

## Čo budete robiť

Nakrájajte diel na živicu, skontrolujte vrstvy, uložte súbor a skopírujte ho do tlačiarne.

## Postup

1. Otvorte {{ui:Settings}} › {{ui:Add-ons}} a zapnite doplnok slicer pre živicu a doplnok pre formát súboru vašej tlačiarne (Elegoo GOO, SL1, Chitubox alebo Anycubic). Môžete tiež stlačiť {{ui:Add resin printing}} na karte fázy tlače.
2. Umiestnite diel na podložku ako v [Umiestnenie vecí na tlačovú podložku](topic:print-stage), potom pri **Tlač pomocou** vyberte {{ui:Resin}}, teda Živica.
3. V časti **Nastavenia tlače živicou** vyberte svoju **Tlačiareň** a svoju **Živicu**. Karta zobrazuje veľkosť obrazovky v pixeloch. Sú to publikované veľkosti výrobcu, skontrolujte si svoju; môžete ich upraviť v časti Vlastné.
4. Nastavte **Výška vrstvy (mm)**, **Expozícia (s)** a **Expozícia spodnej vrstvy (s)**. Čísla pre každú živicu sú iba východiskový bod.
5. Začiarknite **Vyhĺbiť, s vetracím otvorom**, ak chcete dutý diel, a nastavte **Stena (mm)** a **Šírka otvoru (mm)**.
6. Začiarknite **Podpery a podložku** a vyberte **Hustotu podpier**: Ľahká, Stredná alebo Hustá.
7. Vyberte **Formát súboru**. Ak karta hovorí, že zatiaľ nie je pridaný žiadny, stlačte tlačidlo s nápisom Pridať a názvom formátu.
8. Stlačte {{ui:Preview layers}} a posúvajte posúvač **Vrstva**. Plávajúce časti sú označené krúžkom. Riadok pod ním uvádza počet vrstiev, čas a živicu v mL, gramoch a cene.
9. Stlačte {{ui:Save the print file}}, skontrolujte súhrn a stlačte {{ui:Save}}. Skopírujte súbor do tlačiarne.

## Nájdite svoju expozíciu

1. Zapnite doplnok testu expozície v {{ui:Settings}} › {{ui:Add-ons}}.
2. Stlačte {{ui:Put the test part on the bed}}, teda Umiestniť testovací diel na podložku.
3. Stlačte {{ui:Save the exposure ladder}}. Dostanete jeden súbor pre každú expozíciu, v súbore zip.
4. Vytlačte každý súbor s rovnakou živicou a ponechajte expozíciu, pri ktorej sú najostrejšie tenké stĺpiky a otvorené diery.

## Poznámky

- Rezanie beží na pozadí, takže stránka zostane použiteľná pri veľkej podložke.
- Časti, ktoré nie sú uzavretými telesami, sa vynechajú a karta to oznámi.
- Ak tlačiareň súbor odmietne, karta formátu má možnosti pre to, čo formát necháva otvorené. Zmeňte jednu, uložte znova a dajte nám vedieť, ktorá fungovala.
- Verzie Anycubic 517 a 518 sa nezapisujú.
