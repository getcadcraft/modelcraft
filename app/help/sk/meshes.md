---
title: Siete
summary: Premeňte skupinu alebo komponent na sieť — druh objektu, ktorým modelujú nástroje 3D obsahu — a späť na geometriu tlač/ťah.
keywords: sieť, siete, polygón, polygóny, n-uholník, štvoruholník, štvoruholníky, vrcholy, polo-hrana, uv, uvs, premeniť, premeniť na sieť, premeniť na geometriu, subdivízia, sochárstvo, modelovanie, 3D obsah
from: e32363e8
---

ModelCraft má dva druhy geometrie. **Geometria tlač/ťah** je to, čo kreslíte: ploché plochy, ktoré sa držia spolu, režú sa a zase spájajú. **Sieť** je druh objektu, ktorým modelujú nástroje 3D obsahu: plochy s ľubovoľným počtom rohov, pričom každý roh môže niesť vlastné súradnice textúry (UV), normály a farby a každý vrchol hodnoty ako váhy. Sieť sa umiestni ako skupina alebo komponent a leží vedľa geometrie tlač/ťah v tom istom modeli.

## Premena skupiny alebo komponentu na sieť

1. Vyberte skupinu alebo komponent.
2. V {{ui:Informácie o entite}} kliknite na {{ui:Previesť na sieť}}.

Jej plochy sa stanú plochami siete (plocha s dierami sa prenesie ako trojuholníky), tvrdé hrany zostanú ostré, mäkké hrany tieňujú hladko a farba, materiály a importované textúry zostanú na svojich plochách. Skupiny a komponenty vnútri sa spoja do jednej siete. Voľné hrany sa vynechajú: sieť si drží plochy. Každé umiestnenie komponentu zobrazuje sieť. Je to jeden krok späť.

## Čo ukazujú Informácie o entite

Vyberte sieť a uvidíte jej plochy, vrcholy a hrany, či je uzavretým telesom (a jeho objem), a jej veľkosť podľa umiestnenia. Sieť s otvorenými hranami povie, koľko ich je.

## Premena siete späť na geometriu tlač/ťah

Vyberte sieť a kliknite na {{ui:Previesť na geometriu}}. Ploché plochy sa vrátia tak, ako boli; plocha, ktorej rohy nie sú v jednej rovine, sa vráti ako trojuholníky. Ostré hrany sú tvrdé, ostatné mäkké. {{ui:Rozložiť}} vloží plochy siete priamo do skupiny okolo nej.

## Dobre vedieť

- Dvojklikom na sieť ju [upravíte po vrcholoch, hranách a plochách](topic:mesh-edit) v pracovnom priestore Sieť. Premeňte ju na geometriu, ak ju chcete upravovať tlač/ťah; presúvajte, otáčajte, meňte mierku, kopírujte, maľujte, skrývajte a označujte ju ako každú skupinu.
- Exporty, 3D tlač, vykreslenia a VR vidia sieť ako jej plochy.
- Súbor, ktorý obsahuje sieť, sa uloží ako novšia verzia súboru `.modelcraft`, takže ho ModelCraft 0.6 a staršie neotvoria; súbory bez siete sa v nich otvoria ako predtým. Ak chcete súbor zdieľať s niekým so staršou verziou, najprv premeňte siete na geometriu.
- Krok späť pri sieti uchováva len to, čo každý krok zmenil, takže aj veľmi veľká sieť sa vráti rýchlo.

Pozri aj [Skupiny a komponenty](topic:groups-components) a [Ešte nie je hotové](topic:not-built-yet).
