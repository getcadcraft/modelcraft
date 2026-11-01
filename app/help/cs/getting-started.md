---
title: Začínáme s ModelCraftem
summary: K čemu ModelCraft slouží, jak jej otevřít a vaše první krabice od obdélníku až po uložený model.
keywords: start, první model, začít, návod, úvod, krabice, hmotová studie, 3d, tlač/tah, rychlý start, s průvodcem, průvodce, začátečník, nový ve 3D
from: d47ad719
---

ModelCraft je 3D modelář pro rané fáze návrhu: hmotové studie, dispozice místností, rychlé tvary budov a stíny, které vrhají. Kreslíte ploché tvary, vytahujete je do těles a pracujete dál kreslením na jejich plochách. Běží ve webovém prohlížeči a vaše modely zůstávají ve vašem počítači.

Pokud jste používali SketchUp, většina toho, co znáte, platí i tady: stejná písmena nástrojů, tlač/tah, pole hodnoty pro přesné rozměry, skupiny a komponenty. [Pokud přecházíte z jiných modelářů](topic:coming-from) uvádí, v čem se to liší.

## Otevření ModelCraftu

1. Otevřete ModelCraft v aktuální verzi Chrome, Edge, Firefoxu nebo Safari. Viz [Prohlížeče a počítače](common:browsers).
2. Počkejte, až se zobrazí 3D pohled: světlá (nebo tmavá) plocha uprostřed s kartou nazvanou „Začínáme s modelováním“.

Obrazovka má nahoře panel nástrojů, vlevo {{ui:Strom}} a {{ui:Komponenty}}, uprostřed 3D pohled, vpravo {{ui:Informace o prvku}}, {{ui:Styl}} a {{ui:Scény}} a dole stavový řádek s polem hodnoty a jednotkami. [Obrazovka ModelCraftu](topic:workspace) vysvětluje každou část.

:::note
ModelCraft potřebuje WebGL, funkci vašeho prohlížeče pro 3D kreslení. Pokud střed obrazovky zůstane prázdný a nástroje nic nedělají, viz [Řešení potíží](topic:troubleshooting#the-3d-view-is-blank).
:::

## Nejdřív zkontrolujte jednotky

Podívejte se do pravého dolního rohu. Výběr jednotek ukazuje, v čem se měří délky.

- Nový model začíná ve **stopách a palcích**, když je váš prohlížeč nastaven na Spojené státy (také Libérii a Myanmar), a v **milimetrech** všude jinde.
- Změníte to výběrem jiné jednotky: {{ui:ft a in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} nebo {{ui:mm}}. Samotný model svou velikost nemění; mění se jen to, jak se zobrazují délky a jak se čtou holá čísla.

Číslo, které zadáte bez jednotky, používá jednotku modelu. V modelu ve stopách a palcích je holé číslo v **palcích**, takže `120` znamená 10 stop.

## Nechte se provést prvním modelem

Jste ve 3D noví? Na kartě {{ui:Začínáme s modelováním}} klikněte na {{ui:Průvodce prvním modelem}} (najdete jej také v {{ui:Pohledy}}). Malá karta vás provede čtyřmi kroky, od plochého obdélníku k modelu připravenému pro 3D tiskárnu:

1. Nakreslete obdélník na zem.
2. Vytáhněte ho do krabice.
3. Udělejte z krabice jeden objekt (skupinu).
4. Zkontrolujte ji pro 3D tisk a stáhněte soubor 3MF nebo STL.

Karta sleduje model, ne tlačítka: posune se dál, když je krok hotový, ať jste ho udělali jakkoli, a vrátí se o krok zpět, když vezmete změnu zpět. {{ui:Vyberte nástroj}} vybere nástroj za vás. Kdykoli ji zavřete křížkem {{ui:×}}.

## Nakreslete první krabici

1. Stiskněte {{key:R}} pro nástroj {{ui:Obdélník}} nebo klikněte na {{ui:Obdélník}} ve skupině {{ui:Kreslení}} na panelu nástrojů.
2. Jednou klikněte na zem poblíž středu pohledu. To je první roh.
3. Posuňte ukazatel pryč. Obdélník jej následuje a pole hodnoty dole (nazvané {{ui:Rozměry}}) ukazuje jeho velikost.
4. Napište rozměr a stiskněte {{key:Enter}}: například `4m,3m`, nebo `16',12'` ve stopách a palcích. Nemusíte nejdřív klikat do pole hodnoty; napsané číslo se tam odešle samo.

   Dostanete plochý obdélník na zemi. Je to **plocha**: povrch s hranami kolem.

5. Stiskněte {{key:P}} pro {{ui:Tlač/tah}}.
6. Klikněte na obdélník, posuňte ukazatel nahoru a klikněte znovu. Nebo klikněte na obdélník, napište výšku, například `3m` nebo `10'`, a stiskněte {{key:Enter}}.

   Obdélník se změní v krabici s horní stranou, dnem a čtyřmi stěnami.

7. Stisknutím {{key:Space}} se vraťte k nástroji {{ui:Vybrat}} a klikněte na horní stranu krabice. {{ui:Informace o prvku}} vpravo ukáže její plochu.

:::tip
Místo dvou kliknutí můžete také táhnout: stiskněte na prvním rohu, táhněte a pusťte na druhém. Obě cesty fungují u všech kreslicích nástrojů.
:::

## Rozhlédněte se

- **Otáčení:** táhněte prostředním tlačítkem myši (kolečkem), nebo stiskněte {{key:O}} a táhněte levým tlačítkem.
- **Posun:** táhněte pravým tlačítkem, nebo prostředním tlačítkem při držení {{key:Shift}}.
- **Zoom:** točte kolečkem. Přibližuje směrem k tomu, co je pod ukazatelem.
- **Zobrazit vše:** stiskněte {{key:Shift+Z}} nebo klikněte na {{ui:Rozsah}}.

Na touchpadu nebo dotykové obrazovce jsou gesta jiná. Viz [Otáčení, posun a zoom](topic:orbit-pan-zoom).

## Zpět

Stiskněte {{key:Mod+Z}} pro krok zpět a {{key:Mod+Y}} pro krok znovu, nebo použijte {{ui:Zpět}} a {{ui:Znovu}} na panelu nástrojů. ModelCraft si pamatuje posledních 200 kroků, dokud je model otevřený. Historie se do souboru neukládá.

## Uložení modelu

1. Klikněte na {{ui:Uložit}} ve skupině {{ui:Soubor}} nebo stiskněte {{key:Mod+S}}.
2. Prohlížeč stáhne soubor pojmenovaný podle vašeho modelu, například `Untitled.modelcraft`. Stavový řádek uvede, kam šel: „Soubor Untitled.modelcraft byl uložen mezi vaše stažené soubory.“

**Uložení je stažení.** Každé uložení vytvoří novou kopii ve složce se staženými soubory; soubor, který jste otevřeli, nepřepíše. Chcete-li mít složku projektu přehlednou, přesuňte nebo přejmenujte soubor tam sami. [Otevírání, ukládání, import a export](topic:files) vysvětluje proč a co dalšího můžete dělat.

:::warning
ModelCraft neukládá sám. Pokud zavřete kartu s neuloženými změnami, prohlížeč se nejdřív zeptá („Opustit web?“). Zvolte, že zůstanete, a pak uložte.
:::

## Nápověda

Stiskněte {{key:F1}} nebo klikněte na {{ui:Nápověda}} v liště aplikace a tato nápověda se otevře vedle modelu. Funguje i bez připojení. Dalším stisknutím {{key:F1}}, nebo {{key:Esc}} uvnitř nápovědy, ji zavřete. Viz [Používání této nápovědy](common:help).

## Kam dál

- [Kreslení ploch úsečkami, obdélníky a kružnicemi](topic:draw-faces)
- [Tlačení a tažení ploch do těles](topic:push-pull)
- [Zadávání přesných rozměrů v poli hodnoty](topic:value-box)
- [Každá klávesa a akce myši](topic:keyboard)
