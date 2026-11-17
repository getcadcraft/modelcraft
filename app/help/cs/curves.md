---
title: Křivkové objekty
summary: Kreslete křivky Bézier, NURBS a křivky z rovných úseků, dejte jim tloušťku, šířku nebo zúžení, vyplňte ploché a převeďte je na sítě; text lze nastavit jako křivku.
keywords: křivka, křivky, bezier, nurbs, spline, splines, dráha, trubka, potrubí, kabel, lano, zkosení, vytažení, zúžení, náklon, poloměr, výplň, profil, text, písmena, logo, křivka na síť
from: 602bf077
---

**Křivkový objekt** je křivka, která tvoří tvar: trubka podél ní (zkosení), pás (vytažení), zužující se roh (zúžení), nebo, když je plochá a uzavřená, vyplněná deska nebo písmena. Tvar sleduje křivku: posunete bod a trubka se s ním pohne. Až bude tvar správný, převeďte jej na síť.

## Přidání křivky

V seznamu pracovních prostorů vyberte {{ui:Curve}} a stiskněte {{ui:Add}}:

| Druh | Co to je |
| --- | --- |
| Křivka Bézier, kružnice Bézier | Prochází svými body; každý bod má dva úchyty, které nastavují směr křivky |
| Křivka NURBS, kružnice NURBS, Dráha | Hladká, kreslí se směrem k bodům (začíná a končí v koncových bodech); každý bod má váhu |
| Text | Váš text jako ploché, vyplněné obrysy písmen |

Nová křivka dostane tenkou trubku, aby byla vidět a šla vybrat; nastavte její hloubku zkosení na 0, chcete-li holou křivku.

Můžete také začít z něčeho nakresleného: v pracovním prostoru Model vyberte oblouk, kružnici, mnohoúhelník nebo nakreslenou křivku a v {{ui:Entity info}} stiskněte {{ui:Make a curve object}}. Nakreslené čáry zůstanou.

## Úprava bodů

Dvojklikněte na křivkový objekt (nebo ho vyberte a zvolte {{ui:Curve}}), abyste ho upravili.

- Klikněte na bod nebo úchyt ({{key:Shift}} přidá nebo odebere); přetažením ho přesunete. Přetažením na prázdné místo vyberete rámečkem.
- {{ui:Extend}} ({{key:E}}, nebo {{key:Ctrl}}+klik) přidá bod za vybraným koncem, u kurzoru.
- {{ui:Subdivide}} ({{key:W}}) vloží bod mezi každou dvojici vybraných sousedů; Bézier si zachová svůj tvar.
- {{ui:Move}}, {{ui:Turn}}, {{ui:Scale}} posouvají vybrané body s kurzorem (klávesy modelování {{key:G}} {{key:R}} {{key:S}}, klávesy tažení/posunu {{key:M}} {{key:Q}} {{key:S}}); klikněte pro potvrzení, {{key:Esc}} pro zrušení.
- {{ui:Close}} ({{key:C}}) uzavře otevřený spline nebo otevře uzavřený; {{ui:Reverse}} ({{key:Shift+R}}) jej projde opačným směrem.
- Úchyty Bézier: {{ui:Smooth}} ({{key:V}}) je rozmístí pro hladkou křivku, {{ui:Corner}} ({{key:Shift+V}}) je namíří na sousedy, {{ui:Free}} ({{key:Alt+V}}) je nechá tam, kam jste je dali. Tažení úchytu jej uvolní.
- {{ui:Bézier}}, {{ui:NURBS}} a {{ui:Poly}} změní typ vybraných splinů a body zachová.

Každá změna je jeden krok zpět.

## Tvar

Nastavení jsou v panelu (a v {{ui:Entity info}} v pracovním prostoru Model):

- **Tvar:** 3D křivky mohou jít jakkoli; plochá křivka zůstává ve své rovině a dá se vyplnit.
- **Vyplnit uzavřené spliny** (ploché): obrysy se stanou deskou; obrys uvnitř jiného je díra, takže písmena si zachovají své díry.
- **Vytažení:** polovina šířky pásu (otevřené nebo 3D křivky), nebo polovina tloušťky desky (vyplněné).
- **Hloubka zkosení** a **zaoblení:** zaoblená trubka podél křivky (s vytažením: zaoblený pás); u vyplněného tvaru zaoblená hrana.
- **Uzavřít konce:** záslepky na otevřené trubce.
- **Zúžení podél:** škáluje rovnoměrně podél každého splinu, například `1, 0.2` pro roh, `0, 1, 0` pro vřeteno.
- **Hladkost** a u NURBS **řád**: jak jemně se kreslí a jak hladce (2 rovně … 6 nejhladší).
- S vybranými body: **poloměr** (tloušťka trubky v tom místě, krát zkosení), **náklon** (natáčí pás kolem křivky) a u NURBS **váha**.

Modifikátory fungují nad křivkovým objektem stejně jako nad sítí: Pole podél něj, Zrcadlo, povrch Subdivision. Viz [Modifikátory na síti](topic:modifiers).

## Převedení na síť

{{ui:To mesh}} (v pracovním prostoru Křivka nebo v {{ui:Entity info}}, {{ui:Curve to mesh}}) udělá z křivkového objektu síť, kterou právě zobrazuje; jeho modifikátory zůstanou nahoře. Pak ji upravte v pracovním prostoru Síť. {{ui:Undo}} ji vrátí zpět.

Viz také [Sítě](topic:meshes) a [Úprava sítě](topic:mesh-edit).
