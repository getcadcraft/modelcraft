---
title: Mivel renderel a gépe
summary: A Beállítások › Renderelés megmutatja, hogy a böngésző mekkora grafikát, processzormagot és memóriát enged az alkalmazásnak, valamint azt a szintet, amely meghatározza, hol kezdődik a renderelés.
keywords: saját gép, videokártya, gpu, webgpu, webgl, processzor, cpu, magok, szálak, memória, ram, megosztott memória, izoláció, szint, sebesség, lassú, renderelési sebesség, laptop
from: 8a0c21c9
---

Nyissa meg a {{ui:Settings}} ({{key:Mod+,}}) ablakot, maradjon ezen az alkalmazáson belüli lapon, és görgessen a {{ui:Rendering}} részhez. {{ui:Your machine}} felsorolja, hogy a böngésző mit enged az alkalmazásnak a renderelésre. Semmi nem hagyja el a számítógépet.

| Sor | Mit jelent |
|---|---|
| {{ui:Graphics}} | A böngésző által jelentett grafikus kártya. A „WebGPU” azt jelenti, hogy minden renderelési munkát el tud végezni; a „WebGL 2 only” azt jelenti, hogy az élő nézetet és a {{ui:Render a picture…}} parancsot a WebGL-útvonal szolgálja ki (jó minőség a WebGL útvonalkövetővel), miközben a nézetben történő renderelés és a renderelési sor, amelyek WebGPU-t igényelnek, nem érhetők el; a szoftveres helyettesítő azt jelenti, hogy minden a processzoron fut |
| {{ui:Processor}} | A böngésző által jelentett processzormagok száma |
| {{ui:Memory}} | Körülbelül mennyi memóriája van a számítógépnek, ha a böngésző megadja. Egyes böngészők nem adják meg |
| {{ui:Shared memory}} | Hogy az oldal megoszthat-e memóriát a munkafolyamatai között. Ha be van kapcsolva, minden mag ugyanazon a jelenetpéldányon dolgozhat; ha ki van kapcsolva, mindegyiknek saját példány kell, így egy nagy jelenet kevesebb maggal fér el egyszerre |
| {{ui:Fast processor code}} | Hogy a böngésző a gyorsabb WebAssembly-kódot futtatja-e. Ennek hiányában egy lassabb tartalék kód fut |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} vagy {{ui:Processor only}}, alatta az okkal |

## A szint

A szint határozza meg, hol kezdődik az [élő nézet](topic:live-view) ({{ui:For this computer}}), hány szórt elemet rajzol, és hány lapot mutathat a [felosztási felület](topic:modifiers#subdivision-surface) a nézetben, hogy a beépített grafikus chippel vagy egyáltalán grafikus kártya nélkül rendelkező laptop is reagálóképes maradjon. A beépített vagy telefonos grafikus chip, illetve legfeljebb 4 GB memória soha nem kap {{ui:Graphics card, high}} szintet.

:::note
A böngészők eltérnek egymástól. Ugyanaz a számítógép az egyik böngészőben WebGPU-t, a másikban „WebGL 2 only”-t mutathat. Linuxon a legtöbb böngészőben még nincs WebGPU.
:::
