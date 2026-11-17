---
title: Törlés és tisztítás
summary: Élek, csoportok és segédvonalak törlése a radírral vagy a Delete billentyűvel, a felosztott lapok összeolvasztása, valamint a rossz irányba néző lapok javítása.
keywords: törlés, radír, Delete, eltávolítás, összeolvasztás, lapok egyesítése, tisztítás, eltévedt vonalak, lap megfordítása, hátsó lap, visszavonás
from: 80b92a81
---

## Törlés radírral

1. Nyomja meg az {{key:E}} billentyűt a {{ui:Radír}} eszközhöz.
2. Kattintson egy élre, csoportra vagy komponensre, vagy egy segédvonalra. Az törlődik.
3. Több elem törléséhez tartsa lenyomva az egérgombot, és húzza át rajtuk. Minden, amin áthalad, kiemelődik, és az egér elengedésekor mindegyik törlődik.

A radír nem választ ki lapokat: egy lap akkor tűnik el, ha azokat az éleket törli, amelyekre szüksége van. A lapokon keresztül keresi a radír az éleket.

## Mi történik a lapokkal

- **Két, azonos síkban lévő lap közötti él** (például egy padlón áthúzott vonal) eltűnik, és a két lap egyetlen lappá **olvad össze**.
- **Az a él, amely egy lap zártságához kell** (egy doboz éle), magával viszi azt a lapot. Ha egy doboz egyik felső élét törli, a felső lap és egy oldal is eltűnik, és nyitott doboz marad.
- **Szabad végpontok** (olyan pontok, amelyekhez már nem tartozik él) eltávolításra kerülnek.

A komponens utolsó példányának törlésekor a komponens a {{ui:Komponensek}} panelről is eltűnik.

## Törlés a Delete billentyűvel

1. Jelölje ki a {{ui:Kijelölés}} eszközzel azt, amit el szeretne távolítani.
2. Nyomja meg a {{key:Delete}} vagy a {{key:Backspace}} billentyűt.

Ez a lapokat is eltávolítja. Ilyen módon törölt lap az éleit megtartja, így törölheti egy doboz tetejét, megtartva a körvonalát, majd oda más valamit rajzolhat.

## Eltévedt vonalak tisztítása sík lapon

Ha egy falon vagy padlón nem kívánt vonalak látszanak (rajzolás közben maradtak), törölje őket a {{ui:Radír}} eszközzel. A lapban fekvő vonalak összeolvadva eltűnnek; a lap megmarad.

## Rossz irányba néző lap

A hátulról látott lap kékesszürke. Ha egy lap a modell külső oldalán kékesszürkén látszik:

1. Jelölje ki a lapot.
2. Kattintson az {{ui:Entitásinfó}} panelen a {{ui:Lap megfordítása}} gombra.

A lapok iránya exportáláskor a legfontosabb: a renderelő programok, játékmotorok és 3D nyomtatók elrejthetik vagy félreolvashatják a befelé mutató lapokat.

## Hiba visszavonása

A {{key:Mod+Z}} egy lépést von vissza egyszerre, a {{key:Mod+Y}} (vagy a {{key:Mod+Shift+Z}}) ismétel. A radírral történő húzás egy lépés, akárhány elemet is érintett. Az állapotsor megnevezi, mit vont vissza: „Törlés visszavonva.”
