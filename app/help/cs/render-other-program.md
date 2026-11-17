---
title: Nakreslení obrázku jiným programem
summary: Náš vlastní sledovač paprsků nakreslí obrázek Vykreslit; jiný program ho může nakreslit jen přes engine doplňku pro vykreslování v CadCraft Studio. Co se přenese a proč některé programy nikdy nenabízíme.
keywords: vykreslení, engine, externí program, engine doplňku, studio, pozadí, fronta, usd, gltf, nakresleno programem, blender, gpl
from: 150f94f1
---

Obrázek v {{ui:Vykreslit obrázek…}} kreslí **naše vlastní enginy**: Rychlý a Sledování paprsků, v prohlížeči i v CadCraft Studio. Jiný program ho může nakreslit jen tehdy, když ho přinese **engine pro vykreslování v doplňku**: viz [Přidání enginu pro vykreslování pomocí doplňku](topic:render-engine-addons). Chcete-li scénu převzít do jiného programu a pracovat v něm dál, použijte [Otevření scény v jiném programu](topic:render-open-in) nebo [Odeslání scény do herního enginu](topic:render-unreal).

## Nakreslete obrázek enginem doplňku

1. Zapněte doplněk v Nastavení › Doplňky. Jeho engine se objeví v seznamu Engine v {{ui:Vykreslit obrázek…}}.
2. Vyberte ho. Jeho vlastní nastavení se zobrazí pod seznamem Engine.
3. Klikněte na {{ui:Vykreslit}}. Ve Studiu se při prvním spuštění programu doplňkem zeptá ve svém vlastním dialogu. Průběh se ukazuje během kreslení; {{ui:Zastavit}} ho ukončí. Obrázek se objeví označený enginem, který ho nakreslil.

Engine napsaný v JavaScriptu běží i v prohlížeči. Engine, který spouští program na tomto počítači, běží jen ve Studiu; v prohlížeči se zobrazí jako soubor k uložení.

## Co se přenese

Engine dostane **balíček**: model jako soubor USD (a soubor glTF, pokud o něj požádá) a soubor nastavení s přesnými hodnotami materiálů, sluncem a oblohou, každou lampou, která svítí, s jejím výkonem a světelným profilem, kamerou a expozicí. Každý program osvětluje, tónuje a vzorkuje po svém, takže obrázky jsou si podobné v kameře, slunci, lampách a expozici, ne pixel po pixelu.

## Programy, které CadCraft nikdy nespustí

CadCraft nikdy nespustí program pod licencí GNU GPL a nikdy ho neuvede jako engine ani jako cíl Otevřít v. Blender je jedním z nich, proto není v seznamu Engine. Soubor USD nebo glTF uložený z {{ui:Vykreslit obrázek…}} se v něm pořád otevře stejně jako v každém programu, který tyto soubory čte.

:::note
Panoramatické a stereo kamery a obloha jako obrázek (použijí se barvy oblohy) se do jiného programu nepřenášejí. Nic, co se v jiném programu udělá, se nevrací do modelu.
:::
