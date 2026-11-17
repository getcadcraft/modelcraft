---
title: Obíhání, posun a zoom
summary: Pohybujte se kolem modelu myší, touchpadem, dotykovou obrazovkou nebo klávesnicí a přeskočte na standardní pohledy.
keywords: obíhat, posun, zoom, dlouhé stisknutí, tři prsty, dva prsty, klepnutí, pohyb, kamera, pohled, otočit pohled, touchpad, dotyk, rozevření, prostřední tlačítko, zoom na rozsah, perspektiva, rovnoběžné, pohled shora, izometrie
from: 10d4d33a
---

Kameru můžete kdykoli posouvat, i uprostřed kreslení čáry nebo tlačení plochy: nástroj počká tam, kde byl.

## Třítlačítková myš

| Chci | Udělejte toto |
|---|---|
| Obíhat | Táhněte se stisknutým prostředním tlačítkem (stiskněte kolečko) |
| Posunout | Táhněte pravým tlačítkem, nebo podržte {{key:Shift}} a táhněte prostředním tlačítkem. Stisknutí nebo puštění {{key:Shift}} během tažení přepíná mezi obíháním a posunem |
| Přiblížit | Otáčejte kolečkem. Přibližuje k ploše pod ukazatelem, nebo k bodu pod ním v hloubce středu pohledu |
| Vidět celý model | {{key:Shift+Z}} nebo {{ui:Rozsah}} |

Obíhání otáčí pohled kolem části modelu pod ukazatelem, takže tento bod zůstane na místě, zatímco se vše kolem něj otáčí. Nad prázdným prostorem se otáčí kolem středu pohledu. Posun udrží bod, který jste uchopili, pod ukazatelem.

Chcete-li vždy obíhat kolem středu pohledu nebo zrychlit či zpomalit obíhání a posun, otevřete {{ui:Nastavení}} ({{key:Mod+,}}), kartu {{ui:ModelCraft}}, **Obíhání a posun**. Rychlosti platí pro myš, touchpad, dotyk i šipky.

Pravé tlačítko bez tažení nedělá nic; ModelCraft nemá nabídku pravého tlačítka.

## Bez prostředního tlačítka

Použijte nástroje kamery na panelu nástrojů, nebo klávesnici:

1. Stiskněte {{key:O}} (nebo klikněte na {{ui:Obíhat}}) a táhněte levým tlačítkem pro obíhání. Během tažení podržte {{key:Shift}} pro posun.
2. Stiskněte {{key:H}} (nebo klikněte na {{ui:Posun}}) a táhněte pro posun.
3. Stiskněte {{key:Z}} (nebo klikněte na {{ui:Zoom}}) a táhněte nahoru pro přiblížení, dolů pro oddálení.
4. Stiskněte {{key:Space}} pro návrat k {{ui:Vybrat}}, nebo stiskněte klávesu nástroje, který chcete dál.

Nástroje kamery nahrazují nástroj, který jste používali. Chcete-li se rozhlédnout uprostřed operace, aniž o ni přijdete, použijte raději klávesnici:

- Šipky obíhají.
- {{key:Shift}} se šipkami posouvá.

Dokud je nástroj kreslení uprostřed operace (po svém prvním kliknutí), šipky zamykají směry místo obíhání. Viz [Uchopení a přichytávání](topic:inference#lock-a-direction).

## Na touchpadu

Nejsnazší způsob: otevřete {{ui:Nastavení}} ({{key:Mod+,}}), kartu {{ui:ModelCraft}}, a nastavte Posouvání na **Touchpad** (nebo nechte na „Zjistit automaticky“). Pak tahem dvěma prsty obíhejte, podržte {{key:Shift}} a táhněte pro posun, a rozevřením přibližujte — bez tlačítek kamery. Viz [Nastavení ModelCraftu](topic:settings#scrolling-mouse-wheel-or-trackpad).

Při Posouvání nastaveném na **Kolečko myši**:

:::mac
- **Zoom:** posouvejte dvěma prsty, nebo rozevírejte. Obojí přibližuje k ukazateli.
- **Posun:** stiskněte dvěma prsty (sekundární klik) a při tažení držte prsty dole. Pokud dvouprstové kliknutí nic nedělá, zapněte „Sekundární klik“ v **Nastavení systému**, pak **Touchpad**.
- **Obíhání:** stiskněte {{key:O}} a táhněte jedním prstem, nebo použijte šipky.
- Držení {{key:Ctrl}} při kliknutí nemusí v ModelCraftu počítat jako pravé tlačítko, podle prohlížeče: může fungovat jako klik s přidrženým {{key:Ctrl}}. Pro posun použijte dvouprsté stisknutí.
:::

:::windows linux
- **Zoom:** posouvejte dvěma prsty. Rozevírání také přibližuje, kde ovladač touchpadu posílá rozevření jako posouvání s {{key:Ctrl}}.
- **Posun:** táhněte pravým tlačítkem (na mnoha touchpadech stiskněte pravý dolní roh a táhněte), nebo stiskněte {{key:H}} a táhněte.
- **Obíhání:** stiskněte {{key:O}} a táhněte, nebo použijte šipky.
:::

Při Kolečku myši posouvání dvěma prsty přibližuje; neposouvá. Je to opak většiny webových stránek a tak se kolečko myši chová ve většině 3D modelářů.

:::tip
{{key:Space}} vybere nástroj {{ui:Vybrat}} v ModelCraftu. Držení {{key:Space}} a tažení neposouvá, na rozdíl od některých jiných aplikací.
:::

## Na dotykové obrazovce

:::touch
- **Jeden prst** používá aktuální nástroj: **klepnutí** pro klik, **stisk a tah** pro kreslení nebo tažení.
- Zatímco je prst nástroje kreslení dole, nad ním je **lupa**, která ukazuje, co je pod prstem, abyste viděli koncový bod, střed nebo hranu, ke které se přichytí, než zvednete prst.
- **Držte bez pohybu** půl sekundy, abyste dokončili, co nástroj dělá, jako to dělá {{key:Enter}}: křivku, řetěz čar. Když nic neprobíhá, držení bez pohybu a pak tažení stejným prstem **obíhá**, dokud prst nezvednete.
- **Dva prsty** tažené společně **posouvají**; **rozevření** přibližuje. Obojí funguje v jednom gestu.
- **Tři prsty** tažené společně **obíhají**.
- Chcete-li je prohodit (dva prsty obíhají, tři posouvají), otevřete {{ui:Nastavení}}, kartu {{ui:ModelCraft}}, Dotyková obrazovka.
- Položení druhého prstu **zruší**, co začal první prst (napůl nakreslený obdélník, probíhající tlačení nebo tažení). Zvedněte prsty a začněte znovu.
- Malá lišta dole v zobrazení má **Hotovo** ({{key:Enter}}), **Zrušit** ({{key:Esc}}) a {{ui:Zpět}}, pro případ, že klávesnice není k dispozici.
- Přichytávání a výběr dosáhnou o něco dál než myší a tlačítka jsou větší, aby se do nich prst trefil.
:::

:::mouse
Na dotykové obrazovce jeden prst používá aktuální nástroj (klepnutí pro klik, držení bez pohybu pro dokončení, nebo držení bez pohybu a tažení pro obíhání), dva prsty posouvají a rozevřením přibližují, tři prsty obíhají a malá lišta nabízí Hotovo, Zrušit a Zpět.
:::

## Standardní pohledy

1. Klikněte na {{ui:Pohledy}} na pravém konci panelu nástrojů.
2. Vyberte {{ui:Izometrie}}, {{ui:Shora}}, {{ui:Zepředu}}, {{ui:Zprava}}, {{ui:Zezadu}}, {{ui:Zleva}} nebo {{ui:Zdola}}.

Pohled se otočí tím směrem a vejde se do něj celý model. {{ui:Zepředu}} hledí na sever, podél zelené osy; {{ui:Shora}} hledí kolmo dolů se severem nahoře.

Kostka pohledů vpravo nahoře pohledu dělá totéž jedním kliknutím, navíc hrany a rohy, kruh kompasu pro otáčení modelu a tlačítko domů. Viz [Kostka pohledů](topic:view-cube).

## Perspektiva a rovnoběžné promítání

Vyberte {{ui:Pohledy}}, pak {{ui:Perspektiva}}. Fajfka znamená, že perspektiva je zapnutá. Když je vypnutá, pohled je rovnoběžné (ortogonální) promítání: čáry, které jsou v modelu rovnoběžné, zůstanou na obrazovce rovnoběžné, což chcete pro pohledy zepředu nebo zprava z {{ui:Zepředu}} nebo {{ui:Zprava}}. Stavový řádek říká „Perspektiva.“ nebo „Rovnoběžné promítání.“

Každá scéna si pamatuje, zda byla v perspektivě. Viz [Ukládání pohledů jako scény](topic:scenes).
