---
title: Text 3D
summary: Pridajte nápisy do modelu ako plochy, ploché alebo plné, stojace na ľubovoľnej ploche: tabuľu, číslo domu, meno na dverách.
keywords: text 3d, text, písmená, nápisy, tabuľa, označenie, číslo domu, štítok, vyryť, písmo, slová
from: 923f5d93
---

{{ui:Text 3D}} v skupine {{ui:Kreslenie}} vytvorí nápisy z plôch, ktoré môžete natierať, tlačiť/ťahať alebo vyrezať do plného telesa.

## Pridanie textu

1. Kliknite na {{ui:Text 3D}}.
2. Zadajte text. Ak chcete ďalší riadok, stlačte v poli {{key:Enter}}.
3. Nastavte {{ui:Výška písma}} (výška veľkého písmena, napríklad `30cm` alebo `1'`) a {{ui:Hĺbka}}:
   - `0` vytvorí **ploché písmená**: plochy ležiace na tom, na čo ich umiestnite, pripravené na natieranie alebo na tlač/ťah.
   - Hĺbka, napríklad `5cm`, vytvorí **plné písmená**: uzavreté plné telesá, s ktorými môžete použiť [nástroje pre telesá](topic:solids).
4. Kliknite na {{ui:Umiestniť}} a potom kliknite, kam text patrí.

Na ploche text leží na tejto ploche a číta sa zľava doprava: na stene stojí vzpriamene; na zemi alebo na stole leží vodorovne pozdĺž červenej. Mimo akejkoľvek plochy leží na zemi.

Text je **komponent** pomenovaný podľa seba, takže pri úprave jedného sa zmení každá kópia a zobrazí sa v zozname {{ui:Komponenty}}, odkiaľ ho možno znova umiestniť.

## Čo treba vedieť

- Písmená sú vlastné jednočiarové písmo ModelCraft, zhrubnuté: čisté a čitateľné, zatiaľ bez výberu písma.
- Písmená, číslice a bežné znaky (vrátane písmen s diakritikou) sa kreslia; znak, ktorý písmo nemá, sa zobrazí ako malý štvorček.
- Ak chcete zmeniť text, zmažte ho a pridajte znova.
- Ak chcete nápis vyrezať do plochy, vytvorte plné písmená, umiestnite ich do polovice plnej skupiny a [odčítajte](topic:solids) ich.
