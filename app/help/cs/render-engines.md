---
title: Volba programu, který nakreslí obrázek
summary: Volba Engine v dialogu Vykreslit: naše vlastní dva enginy, jiné programy v CadCraft Studio a co web dělá místo toho.
keywords: vykreslení, engine, renderer, vykreslovací engine, plug-in, plugin, studio, externí program, nakresleno programem, fronta, engine doplňku
from: be4b056a
---

{{ui:Vykreslit obrázek…}} má volbu **Engine** nad Režimem. Naše vlastní dva enginy jsou vždy k dispozici a fungují všude. Doplňky mohou přidat další. V CadCraft Studio seznam obsahuje také programy, které scénu převezmou.

| Engine | Co dělá | Kde |
|---|---|---|
| Vestavěný: Rychlý | Rychlý statický obraz: denní světlo, měkké stíny, vzhled skla a kovu, v sekundách | Prohlížeč a Studio |
| Vestavěný: Sledování paprsků | Světlo odrážející se mezi plochami na vaší grafické kartě nebo procesoru, fronta vykreslování a další počítače ve vaší síti | Prohlížeč a Studio |
| Engine doplňku | Nakreslí a vrátí obrázek zpět: viz [Nakreslení obrázku jiným programem](topic:render-other-program) | Prohlížeč (engine napsaný v JavaScriptu) nebo Studio (engine, který spouští program) |
| Program, který převezme scénu | Studio umístí scénu do své složky a udržuje ji v souladu | Studio |
| Otevřít v … | Uloží scénu a otevře ji v programu. Nic se nevrací: viz [Otevření scény v jiném programu](topic:render-open-in) | Web uloží soubor |

## Jak volba funguje

- Výběr Rychlý nebo Sledování paprsků změní Režim spolu s ním a naopak. Nic jiného se v dialogu nezmění pro lidi, kteří žádný jiný engine nepoužívají.
- Engine, který není k dispozici, zůstane v seznamu s důvodem ("nenalezeno", "vyžaduje novější verzi"). Nelze ho vybrat. V prohlížeči se engine, který běží jen ve Studiu, zobrazí jako "uloží soubor". {{ui:Vykreslit obrázek…}} pak uloží scénu a její nastavení do souboru, který vezmete do toho programu.
- Volba se uloží s nastavením vykreslování souboru. Engine, který jste vybrali naposledy, je výchozí engine pro soubory, které žádnou vlastní volbu nemají.
- Obrázek z jiného programu říká, který program ho nakreslil, a jeho verzi, v dialogu i ve frontě vykreslování. Sliby ze stránky [Vykreslení](topic:render) platí jen pro **naše vlastní** enginy. Jiný program osvětluje, tónuje a vzorkuje po svém, takže dva obrázky jedné scény jsou podobné v kameře, slunci, lampách a expozici, ne pixel po pixelu.

## Co dostane každý engine

Scéna jde do jiného programu jako **balíček**: model jako soubor USD (stejný soubor, který zapisuje [Uložit jako USD](topic:usd)) a soubor nastavení. Ten obsahuje to, čemu USD importér nelze spolehlivě věřit: přesné hodnoty materiálů, lampy, které svítí, s jejich výkonem a světelnými profily, slunce, oblohu, expozici a kameru tak, jak by je nakreslil dialog. Nic se nikam nenahrává.

## Fronta vykreslování

Obrázek nebo animace pro jiný program může čekat ve [frontě vykreslování](topic:render#the-render-queue) stejně jako naše vlastní. Její úloha si pamatuje, pro který engine je. Animace jde programu v jednom běhu.
