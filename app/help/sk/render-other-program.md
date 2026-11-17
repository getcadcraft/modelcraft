---
title: Nakreslenie obrázka iným programom
summary: Náš vlastný path tracer nakreslí obrázok Vykresliť; iný program ho môže nakresliť len cez doplnok render enginu v CadCraft Studio. Čo sa prenáša a prečo niektoré programy nikdy nie sú ponúkané.
keywords: vykresliť, engine, externý program, engine doplnku, studio, pozadie, fronta, usd, gltf, nakreslené, blender, gpl
from: 150f94f1
---

Obrázok v {{ui:Vykresliť obrázok…}} nakreslia **naše vlastné enginy**: Rýchly a Path tracer, v prehliadači aj v CadCraft Studio. Iný program ho môže nakresliť len vtedy, keď ho prinesie **doplnok render enginu**: pozrite [Pridanie render enginu pomocou doplnku](topic:render-engine-addons). Ak chcete scénu preniesť do iného programu a pokračovať v práci tam, použite [Otvorenie scény v inom programe](topic:render-open-in) alebo [Odoslanie scény do herného enginu](topic:render-unreal).

## Nakreslenie obrázka enginom doplnku

1. Zapnite doplnok v Nastavenia › Doplnky. Jeho engine sa zobrazí v zozname Engine v {{ui:Vykresliť obrázok…}}.
2. Vyberte ho. Jeho vlastné nastavenia sa zobrazia pod zoznamom Engine.
3. Kliknite na {{ui:Vykresliť}}. V Studio sa pri prvom spustení programu doplnkom Studio opýta vo svojom dialógu. Priebeh sa zobrazuje, kým kreslí; {{ui:Zastaviť}} ho ukončí. Obrázok sa zobrazí označený enginom, ktorý ho nakreslil.

Engine napísaný v JavaScripte beží aj v prehliadači. Engine, ktorý spúšťa program na tomto počítači, beží len v Studio; v prehliadači sa zobrazí ako súbor na uloženie.

## Čo sa prenáša

Engine dostane **balík**: model ako súbor USD (a súbor glTF, ak si ho vyžiada) a súbor nastavení s presnými hodnotami materiálov, slnkom a oblohou, každým zapnutým svetlom s jeho výkonom a svetelným profilom, kamerou a expozíciou. Každý program osvetľuje, tónuje a vzorkuje po svojom, takže obrázky sú podobné v kamere, slnku, svetlách a expozícii, nie pixel po pixeli.

## Programy, ktoré CadCraft nikdy nespúšťa

CadCraft nikdy nespustí program pod licenciou GNU GPL a nikdy ho neuvedie ako engine ani ako cieľ Otvoriť v. Blender je jedným z nich, preto nie je v zozname Engine. Súbor USD alebo glTF uložený z {{ui:Vykresliť obrázok…}} sa v ňom stále otvorí ako v každom programe, ktorý tieto súbory číta.

:::note
Panoramatické a stereo kamery a obrázok oblohy (namiesto toho sa použijú farby oblohy) sa do iného programu neprenášajú. Nič, čo sa urobí v inom programe, sa do modelu nevráti.
:::
