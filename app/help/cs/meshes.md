---
title: Sítě
summary: Převeďte skupinu nebo komponentu na síť — druh objektu, který modelují nástroje pro 3D obsah — a zpět na geometrii tlač/tah.
keywords: síť, sítě, polygon, polygony, n-úhelník, čtyřúhelník, čtyřúhelníky, vrcholy, half-edge, uv, uv souřadnice, převést, převést na síť, převést na geometrii, subdivision, sochání, modelování, 3D obsah
from: e32363e8
---

ModelCraft má dva druhy geometrie. **Geometrie tlač/tah** je to, co kreslíte: ploché plochy, které drží pohromadě, protínají se a zase se spojí. **Síť** je druh objektu, jaký modelují nástroje pro 3D obsah: plochy s libovolným počtem rohů, každý roh může nést vlastní texturové souřadnice (UV), normály a barvy a každý vrchol hodnoty, například váhy. Síť se umisťuje jako skupina nebo komponenta a stojí vedle geometrie tlač/tah ve stejném modelu.

## Převod skupiny nebo komponenty na síť

1. Vyberte skupinu nebo komponentu.
2. V {{ui:Informace o prvku}} klikněte na {{ui:Převést na síť}}.

Její plochy se stanou plochami sítě (plocha s otvory se převede na trojúhelníky), tvrdé hrany zůstanou ostré, měkké hrany se stínují hladce a malba, materiály a importované textury zůstanou na svých plochách. Skupiny a komponenty uvnitř se spojí do jediné sítě. Volné hrany se vynechají: síť si drží plochy. Každé umístění komponenty ukazuje síť. Je to jeden krok zpět.

## Co ukazuje Informace o prvku

Vyberte síť a uvidíte její plochy, vrcholy a hrany, zda je uzavřeným tělesem (a jeho objem) a její velikost v umístění. Síť s otevřenými hranami uvede, kolik jich je.

## Převod sítě zpět na geometrii tlač/tah

Vyberte síť a klikněte na {{ui:Převést na geometrii}}. Ploché plochy se vrátí tak, jak byly; plocha, jejíž rohy neleží v jedné rovině, se vrátí jako trojúhelníky. Ostré hrany jsou tvrdé, ostatní měkké. {{ui:Rozložit}} vloží plochy sítě přímo do skupiny kolem ní.

## Co je dobré vědět

- Dvojklikem na síť ji [upravíte, tedy vrcholy, hrany a plochy](topic:mesh-edit) v pracovním prostoru Síť. Pro úpravu tlačením a tažením ji převeďte na geometrii; přesouvejte, otáčejte, měňte měřítko, kopírujte, malujte, skrývejte a označujte ji jako libovolnou skupinu.
- Exporty, 3D tisk, vykreslení a VR vidí síť jako své plochy.
- Soubor obsahující síť se uloží jako novější verze souboru `.modelcraft`, takže ModelCraft 0.6 a starší jej neotevřou; soubory bez sítě se v nich otevřou jako dříve. Chcete-li soubor sdílet s někým na starší verzi, nejprve sítě převeďte na geometrii.
- Zpět u sítě si pamatuje jen to, co každý krok změnil, takže i velmi velká síť se vrací rychle.

Viz také [Skupiny a komponenty](topic:groups-components) a [Ještě není hotovo](topic:not-built-yet).
