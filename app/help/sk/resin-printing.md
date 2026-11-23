---
title: Rezanie pre živicovú tlačiareň
summary: Rozrežte tlačovú plochu fázy tlače na vrstvy pre živicovú tlačiareň, vydutie a podoprite diel, prezrite si vrstvy, uložte súbor tlačiarne a nájdite svoju expozíciu pomocou testu expozície.
keywords: živica, navrhnúť náklon, prísavka, odlupovacia sila, vystuženie, tlač živicou, resin, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, vydutie, odvetrávací otvor, podložka, podpery, test expozície, rebríček expozícií, kalibrácia, vrstvy, doplnok
from: 8cc12858
---

Doplnky pre živicu rozrezávajú to, čo je na tlačovej ploche, na obrázky vrstiev pre obrazovku vašej tlačiarne, a ukladajú súbor, ktorý tlačiareň číta. Sú zadarmo, nič nie je uzamknuté a sú vypnuté, kým ich nezapnete.

:::note
Na skutočnej tlačiarni zatiaľ nebol načítaný žiadny súbor. Súbory boli spätne načítané iba vlastnými čítačkami programu CadCraft a podpery sú nové. Skontrolujte vrstvy a prvú tlač spustite ručne.
:::

## Čo urobíte

Rozrežte diel pre živicu, skontrolujte vrstvy, uložte súbor a skopírujte ho do tlačiarne.

## Postup

1. Otvorte {{ui:Nastavenia}} › {{ui:Doplnky}} a zapnite doplnok rezania pre živicu a doplnok pre formát súboru vašej tlačiarne (Elegoo GOO, SL1, Chitubox alebo Anycubic). Môžete tiež stlačiť {{ui:Pridať tlač živicou}} na karte fázy tlače.
2. Umiestnite diel na tlačovú plochu ako v [Umiestnenie vecí na tlačovú plochu](topic:print-stage) a potom vyberte {{ui:Živica}} vedľa **Tlač pomocou**.
3. V časti **Nastavenia tlače živicou** vyberte svoju **Tlačiareň** a svoju **Živicu**. Karta zobrazuje veľkosť obrazovky v pixeloch. Sú to údaje výrobcu, skontrolujte si svoje; môžete ich upraviť v časti Vlastné.
4. Nastavte **Výška vrstvy (mm)**, **Expozícia (s)** a **Expozícia spodných vrstiev (s)**. Čísla pre každú živicu sú iba východiskový bod.
5. Zaškrtnite **Vydutý, s odvetrávacím otvorom**, ak chcete dutý diel, a nastavte **Stena (mm)** a **Šírka otvoru (mm)**.
6. Zaškrtnite **Podpery a podložka** a vyberte **Hustotu podpier**: Nízka, Stredná alebo Vysoká.
7. Vyberte **Formát súboru**. Ak karta hovorí, že zatiaľ nie je pridaný žiadny, stlačte tlačidlo s nápisom Pridať a názvom formátu.
8. Stlačte {{ui:Zobraziť náhľad vrstiev}} a posúvajte posúvač **Vrstva**. Plávajúce časti sú označené kruhom. Riadok pod ním uvádza počet vrstiev, čas a množstvo živice v mililitroch, gramoch a cenu.
9. Stlačte {{ui:Uložiť tlačový súbor}}, skontrolujte súhrn a stlačte {{ui:Uložiť}}. Skopírujte súbor do tlačiarne.

## Náklon, prísavky, výstuhy a hodnota odlupovania

Tieto štyri údaje sú odhady z tvaru dielu. Žiadny nebol vyskúšaný na skutočnej tlačiarni, preto ho berte ako nápovedu a pozrite sa na vrstvy.

1. Stlačte {{ui:Navrhnúť náklon}} pod **Náklon (stupne)**. CadCraft skúša náklony od 0 do 60 stupňov a vyberie ten s najmenšou najväčšou vrstvou, najmenším previsnutým povrchom a bez prísavky. Nastaví **Náklon (stupne)** a povie, čo zistil. Váhy hodnotenia sú naše, nie výrobcu tlačiarne.
2. Po {{ui:Zobraziť náhľad vrstiev}} upozornenie označí dutiny, ktoré sa otvárajú len smerom k fólii. Taká dutina môže držať prísavku, keď sa vrstva odlupuje. Nakloňte diel alebo pridajte otvor. Dutiny užšie, než je veľkosť bunky uvedená v upozornení, sa nezobrazia.
3. Keď je zapnuté **Podpery a podložka**, zaškrtnite **Vystužiť vysoké podpery**, aby sa medzi vysokými tenkými stĺpmi pridali priečne výstuhy.
4. Riadok pod náhľadom uvádza najväčšiu vrstvu v cm2. Silu zobrazí, až keď zadáte **Odlupovacie napätie, ktoré ste namerali**, v časti **Spodné vrstvy, zdvih a rýchlosti**. Bez vlastného nameraného čísla zobrazí len plochu.

## Nájdite si expozíciu

1. Zapnite doplnok testu expozície v {{ui:Nastavenia}} › {{ui:Doplnky}}.
2. Stlačte {{ui:Umiestniť testovací diel na tlačovú plochu}}.
3. Stlačte {{ui:Uložiť rebríček expozícií}}. Dostanete jeden súbor pre každú expozíciu, v archíve zip.
4. Vytlačte každý súbor rovnakou živicou a zachovajte expozíciu s najostrejšími tenkými stĺpikmi a otvorenými dierami.

## Poznámky

- Rezanie beží na pozadí, takže stránka zostáva použiteľná aj pri veľkej doske.
- Časti, ktoré nie sú uzavretými telesami, sa vynechajú a karta to uvedie.
- Ak tlačiareň súbor odmietne, karta formátu má možnosti pre to, čo formát nechá otvorené. Zmeňte jednu, uložte znova a dajte nám vedieť, ktorá fungovala.
- Verzie Anycubic 517 a 518 sa nezapisujú.
