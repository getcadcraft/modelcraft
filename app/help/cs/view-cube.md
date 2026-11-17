---
title: Kostka pohledu
summary: Klikněte na stěnu, hranu nebo roh kostky v rohu pohledu a podíváte se odtud; táhnutím ji otáčejte, otočte kruhem světových stran, procházejte pohledy kolmo na stěnu a vraťte se domů.
keywords: kostka pohledu, viewcube, kostka, kompas, sever, domovský pohled, standardní pohledy, shora, zepředu, zprava, izometrie, roh, hrana, oběh, otočení pohledu, ikona os, indikátor rohu, navigace
from: e1ec1347
---

Kostka pohledu je v pravém horním rohu 3D pohledu. Otáčí se s pohledem, takže vždy ukazuje, kam se díváte: {{ui:Shora}} je nahoře, {{ui:Zepředu}} je otočena k jihu (když se na ni díváte, díváte se na sever, podél zelené osy), {{ui:Zprava}} je otočena k východu (červená osa). Dokud na ni neukážete, zůstává průhledná.

## Pohled ze strany, z hrany nebo z rohu

1. Ukažte na kostku. Část pod kurzorem se rozsvítí: střed stěny, hrana (rozsvítí se na obou stěnách, které ji sdílejí), nebo roh (na všech třech stěnách).
2. Klikněte. Pohled se otočí tak, aby se díval odtud, se zachováním stejného středu a přiblížení.

Je 26 míst, na která lze klikat: 6 stěn ({{ui:Shora}}, {{ui:Zdola}}, {{ui:Zepředu}}, {{ui:Zezadu}}, {{ui:Zleva}}, {{ui:Zprava}}), 12 hran a 8 rohů. Roh dá klasický třičtvrteční pohled; hrana vypadá přibližně uprostřed mezi dvěma stěnami.

Kliknutí na {{ui:Zepředu}} je totéž jako {{ui:Pohledy}} › {{ui:Zepředu}} na panelu nástrojů, jen bez přizpůsobení přiblížení. {{ui:Pohledy}} stále přiblíží na celý model.

## Oběh tažením kostky

Kostku přetáhněte a pohled se otočí, stejně jako oběh v samotném pohledu. Tah se nikdy nebere jako klik, takže můžete kostku uchopit kdekoli.

## Kruh světových stran

Kruh pod kostkou nese písmena S, V, J a Z.

- **Přetáhněte kruh**, aby se model otočil kolem svislé osy, jako by stál na otočném stolku. Kruh sleduje kurzor.
- **Klikněte na písmeno**, abyste se dívali z té strany, se zachováním sklonu pohledu dolů. V pohledu přímo shora se písmeno, na které kliknete, dostane dolů na obrazovku.

## Pohledy kolmo na stěnu: šipky

Když se díváte přímo na stěnu, kolem kostky se objeví malé šipky:

- Čtyři **trojúhelníky** přivedou stěnu na dané straně doprostřed: trojúhelník nad kostkou ukazuje stěnu, která byla nahoře, a tak dále.
- Dvě **zakřivené šipky** vpravo nahoře otočí obraz o čtvrt otáčky po směru nebo proti směru hodinových ručiček, aniž se změní, na kterou stěnu se díváte. Použijte je k otočení půdorysu, aby dlouhá stěna vedla napříč obrazovkou.

## Domů

Tlačítko domu vlevo nahoře u kostky vrátí třičtvrteční pohled {{ui:Izometrie}} a přizpůsobí celý model. {{key:Home}} dělá totéž, když má kostka klávesový fokus.

## Z klávesnice

{{key:Tab}} přejděte na kostku, potom:

| Klávesa | Co dělá |
|---|---|
| {{key:left}} / {{key:right}} | vybere stranu, hranu nebo roh kolem kostky po osminách otáčky (čtečky obrazovky řeknou, která) |
| {{key:up}} / {{key:down}} | vybere vyšší nebo nižší, až na {{ui:Shora}} nebo dolů na {{ui:Zdola}} |
| {{key:Enter}} nebo {{key:Space}} | podívá se z vybraného místa |
| {{key:Shift+left}} / {{key:Shift+right}} | otočí pohled o čtvrt otáčky kolem svislé osy |
| {{key:Home}} | domovský pohled |
| {{key:Esc}} | opustí kostku |

Klávesy stisknuté na kostce zůstanou u kostky: nespouštějí nástroje ModelCraftu.

## Ikona os nebo nic

Otevřete {{ui:Nastavení}} ({{key:Mod+,}}), kartu {{ui:ModelCraft}} a nastavte **Indikátor rohu** na {{ui:Kostka pohledu}} (výchozí), {{ui:Ikona os}} (malá značka X, Y, Z vlevo dole: X červená, Y zelená, Z modrá) nebo {{ui:Žádný}}. Prohlížeč si volbu pamatuje. Viz [Nastavení ModelCraftu](topic:settings#corner-indicator).

:::note
ModelCraft nemá náklon (roll): mimo pohledy přímo shora a přímo zdola je nahoře na obrazovce vždy nahoře v modelu. Kostka a zakřivené šipky mohou otočit půdorysný pohled; nedokážou převrátit bočný pohled na hranu.
:::
