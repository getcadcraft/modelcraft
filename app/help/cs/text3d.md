---
title: 3D text
summary: Přidejte na model nápisy jako plochy, ploché nebo plné, položené na libovolné ploše: cedule, číslo domu, jméno na dveřích.
keywords: 3d text, text, písmena, písmo, nápis, cedule, značení, číslo domu, popisek, vyrýt, slova
from: 923f5d93
---

{{ui:3D text}} ve skupině {{ui:Kreslení}} vytvoří nápisy z ploch, které můžete malovat, tlačit/táhnout nebo vyříznout do tělesa.

## Přidání textu

1. Klikněte na {{ui:3D text}}.
2. Napište text. Pro druhý řádek stiskněte v poli {{key:Enter}}.
3. Nastavte {{ui:Výška písmen}} (výška velkého písmene, například `30cm` nebo `1'`) a {{ui:Hloubka}}:
   - `0` dá **ploché písmena**: plochy ležící na tom, na co je umístíte, připravené k malování nebo tlačení/tahu.
   - Hloubka například `5cm` dá **plná písmena**, uzavřená tělesa, která můžete použít s [nástroji těles](topic:solids).
4. Klikněte na {{ui:Umístit}} a pak klikněte, kam má text jít.

Na ploše text leží na této ploše a čte se zleva doprava: na zdi stojí svisle; na zemi nebo stole leží vodorovně podél červené. Mimo jakoukoli plochu leží na zemi.

Text je **komponenta** pojmenovaná podle sebe, takže se každá kopie změní, když upravíte jednu, a zobrazí se v seznamu {{ui:Komponenty}}, odkud ji lze znovu umístit.

## Co je dobré vědět

- Písmena jsou vlastní jednotahové písmo ModelCraftu, ztloustlé: čistá a čitelná, zatím bez volby řezu písma.
- Písmena, číslice a běžné znaky (včetně písmen s diakritikou) se kreslí; znak, který písmo nemá, se zobrazí jako malý čtvereček.
- Chcete-li změnit slova, smažte text a přidejte ho znovu.
- Chcete-li vyříznout nápis do povrchu, vytvořte plná písmena, umístěte je napůl do skupiny těles a [odečtěte](topic:solids) je.
