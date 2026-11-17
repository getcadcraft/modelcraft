---
title: ModelCraft használata AI-asszisztenssel
summary: Hagyja, hogy a saját AI-asszisztense vagy szkriptje megnézze a modellt, és egyszerű testeket építsen: jogosultságok, csatlakozás a CadCraft Studio-n keresztül és a tevékenységnapló.
keywords: ai, asszisztens, ügynök, mcp, model context protocol, szkript, automatizálás, modellezés, doboz, henger, renderelés, renderelési sor, jogosultságok, leválasztás, tevékenység
from: 629cd0b7
---

## Mit fog megtudni

Hogyan engedélyezheti, hogy egy AI-asszisztens (vagy egy Ön által írt szkript) a ModelCraft-tal dolgozzon, és hogyan döntheti el, mihez nyúlhat.

A ModelCraft **nem rendelkezik saját AI-val**, és semmit sem küld sehova. Az asszisztenst Ön hozza: bármely olyan program, amely beszéli a Model Context Protocolt (MCP). A ModelCraft csak eszközöket ad neki, és megadhatja, melyeket.

## Bekapcsolás

1. Nyissa meg a {{ui:Beállítások}} részt (a fogaskerék az alkalmazássávon, vagy {{key:Mod+,}}), és lépjen a {{ui:ModelCraft}} lapra.
2. Az {{ui:Asszisztensek}} alatt jelölje be a **Az AI-asszisztensek és szkriptek használhatják a ModelCraft-ot** lehetőséget. Amíg nincs bejelölve, ki van kapcsolva.
3. Döntse el, mit tehet: az **Olvasás** kezdetben be van jelölve; a **Szerkesztés**, a **Mentés** vagy az **Exportálás** jelölését csak akkor kapcsolja be, ha szükség van rájuk.

A bejelölt jogosultságokon kívüli eszközöket nem ajánlja fel az asszisztensnek, és ha mégis kér egyet, a ModelCraft megtagadja, és bejegyzi a tevékenységnaplóba. A kapcsoló kikapcsolása azonnal megszakít minden kapcsolatot; a {{ui:ModelCraft-beállítások visszaállítása}} szintén kikapcsolja.

## Asszisztens csatlakoztatása

Az asszisztensek a számítógépén futó **CadCraft Studio**-n keresztül csatlakoznak: a Studio egy kis kiszolgálót indít, amelyet csak ez a számítógép érhet el, és amelyet minden indításkor új token véd. A Studio-ban válassza ki a {{ui:Asszisztens csatlakoztatása}} lehetőséget, és másolja a címet és a tokent az asszisztensbe (a Studio megmutatja a beillesztendő pontos beállításokat). A tokent soha ne ossza meg.

:::note
Böngészőlap nem nyithat kapcsolatot egy asszisztensnek: a böngészős alkalmazásokban a kapcsoló nincs hatással, amíg nem használja a CadCraft Studio-t a számítógépén.
:::

## Irányítás marad

- **Minden módosítás egyetlen visszavonási lépés**, az asszisztens nevével megjelölve (például „Asszisztens: doboz”). A {{key:Mod+Z}} az asszisztens utolsó módosítását egészben visszavonja.
- **Tudja, mikor van csatlakoztatva.** Az alkalmazássávon lévő gomb a csatlakoztatott asszisztens nevét mutatja; kattintson rá, hogy lássa, mit tehet, vagy a **Leválasztás** lehetőséggel szakítsa meg a kapcsolatot.
- **Tevékenység.** A {{ui:Beállítások}} › {{ui:ModelCraft}} › {{ui:Asszisztensek}} › {{ui:Tevékenység}} alatt minden hívás látható: mikor, melyik eszköz, és hogy sikeres volt-e vagy megtagadták. A {{ui:A napló mentése}} másolatot készít.

## Mit kérhet az asszisztens

| Eszköz | Jogosultság | Mit csinál |
|---|---|---|
| `app_info`, `model_describe` | Olvasás | A modell mértékegysége, mérete, minden csoport és komponens a helyével, zárt test-e, és a térfogata |
| `view_screenshot` | Olvasás | A 3D-nézet képe, ahogy látszik |
| `box_add`, `cylinder_add` | Szerkesztés | Doboz vagy henger új csoportként, a megadott helyen és méretben (pl. "3m", "10'" vagy szám a modell mértékegységében) |
| `instance_move`, `instances_erase` | Szerkesztés | Csoportokat és komponenseket mozgat vagy töröl |
| `faces_list`, `materials_list` | Olvasás | Egy csoport vagy a különálló geometria lapjai (mindegyik iránya, területe és középpontja); az anyagok és színek, amelyekkel festhet |
| `push_pull` | Szerkesztés | Lapot tol vagy húz, ahogy a {{ui:Nyomás/húzás}} is teszi |
| `paint` | Szerkesztés | Lapokat vagy egy egész csoportot fest be színnel vagy anyaggal |
| `group_make` | Szerkesztés | Csoportot vagy komponenst készít különálló lapokból és csoportokból |
| `scene_add`, `scene_show` | Szerkesztés | A nézetet jelenetként menti; egy mentett jelenetre vált |
| `mesh_add` | Szerkesztés | Háló-objektumot ad kiindulásként (kocka, gömb, henger …), ahogy a Háló munkaterület adja hozzá |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Olvasás / Szerkesztés | Egy háló módosítóláncát: tükrözés, sokszorozás, felosztott felület, letörés és a többi; semmi sem alkalmazódik véglegesen |
| `usd_export` | Exportálás | A modell OpenUSD-ként (.usda, .usdc vagy .usdz), ahogy a modell USD-ként mentése írja ([USD](topic:usd)); a Studio-ban engedélyezett mappába, különben letöltésként |
| `render_still` | Exportálás | A nézet vagy egy mentett jelenet renderelt képe, ahogy a {{ui:Renderelés}} párbeszédpanel {{ui:Renderelés}} gombja készíti, a Renderelés-beállításaival, kivéve ha mást kér (jelenetelőbeállítás: külső, belső, metszet, éjszaka vagy automatikus; gyors vagy nagy minőség, méret, mintavétel, égbolt); PNG, amelyet megnézhet, vagy PNG, EXR vagy rendermentés a Studio-ban engedélyezett mappában ([Kép renderelése](topic:render)) |
| `render_queue` | Exportálás | Nagy minőségű képeket ad hozzá a Renderelés párbeszédpanel sorához (a nézet vagy mentett jelenetek), és futtatja a sort; a kész képek az engedélyezett mappába kerülnek, vagy a Renderelés párbeszédpanel {{ui:Rendersor}} részében maradnak. WebGPU szükséges |
| `link_push` | Szerkesztés | Frissít egy másik programból csatolt modellt (lásd: [A .3dm-modell élőben tartása](topic:live-3dm-link)) |
| `link_status` | Olvasás | Megmondja, hogy a csatolt modell még megvan-e, és mikor frissült utoljára |
| `undo` | Szerkesztés | Visszavonja a saját lépéseit |

Az asszisztens által készített testek csoportként érkeznek, így soha nem olvadnak össze azzal, amit rajzolt. Nincs olyan eszköz, amely menti a modellt: a mentés mindig a felhasználónál marad, az exportáláshoz és a renderelés­hez pedig az **Exportálás** bejelölése szükséges. A renderelés nem változtat semmit a modellen; mentett jelenet renderelése a nézetet arra állítja, ahogy a {{ui:Jelenetek}} is teszi.

## Ha valami nem működik

- **Az asszisztens nem lát ModelCraft-eszközöket:** ellenőrizze, hogy a kapcsoló be van-e kapcsolva ebben az ablakban, és hogy az ablak nyitva van-e a Studio-ban.
- **„szerkesztési jogosultság szükséges”:** jelölje be a **Szerkesztés** lehetőséget az {{ui:Asszisztensek}} alatt, majd kérje újra.
- **„401” vagy „token” hibák:** a token megváltozott (a Studio újraindult, vagy a {{ui:Új token}}). Másolja az újat az asszisztens beállításaiba.

## Lásd még

- [Receptek AI-asszisztensekhez](common:assistants-recipes): kidolgozott példák, mindegyik a hívott eszközökkel.
