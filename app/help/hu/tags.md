---
title: Címkék: készletek megjelenítése és elrejtése
summary: Adjon csoportoknak és komponenseknek címkét, például Bútor vagy Falak, és egyszerre rejtse el vagy jelenítse meg az azzal megjelölt összes elemet.
keywords: címkék, címke, rétegek, réteg, megjelenítés, elrejtés, láthatóság, rendszerezés, bútor, falak, címke nélkül, címke átnevezése, címke törlése
from: c1a95a05
---

A címke egy név, amelyet csoportoknak és komponenseknek adhat, például **Bútor**, **Falak** vagy **Telek**, hogy egyszerre rejthessen el vagy jeleníthessen meg mindent az adott címkével. A címkék azok, amelyeket a CAD-programok rétegnek neveznek. Egyetlen dolog egyenkénti elrejtéséhez lásd [Elrejtés, elkülönítés és megjelenítés](topic:hide-isolate).

## Címke készítése

1. A jobb oldali {{ui:Címkék}} részben kattintson a {{ui:Címke hozzáadása}} gombra.
2. Írja be a nevét, és nyomja meg az {{key:Enter}} billentyűt.

Címke átnevezéséhez kattintson a nevére a {{ui:Címkék}} részben, írja be az újat, és nyomja meg az {{key:Enter}} billentyűt. Két címke nem kaphat azonos nevet.

## Csoportok és komponensek címkézése

1. Jelöljön ki egy vagy több csoportot vagy komponenst.
2. Az {{ui:Entitásinfó}} részben válassza ki a címkét a {{ui:Címke}} mezőben. Az {{ui:Új címke…}} új címkét hoz létre, és a kijelölést ezzel címkézi meg.

A {{ui:Címke nélkül}} eltávolítja a címkét. A {{ui:Címkék}} részben minden címke melletti szám azt mutatja, hány csoportnak és komponensnek van meg.

Csoportokat és komponenseket címkézzen, nem szabadon álló lapokat és éleket: a címkézni kívánt elemeket előbb csoportként készítse el (jelölje ki őket, majd nyomja meg a {{key:Shift+G}} billentyűt).

## Elrejtés és megjelenítés

Kattintson a címke melletti szemre. Az adott címkével rendelkező minden elem kikerül a látótérből, bárhol van a modellben (más csoportokon belül is), és a kattintások és illesztések áthaladnak rajta. A szemre ismét kattintva újra megjelenik. A {{ui:Címke nélkül}} elemek mindig láthatók maradnak.

Ha olyan csoporton belül szerkeszt, amelynek címkéjét elrejtette, a csoport bezáródik.

## Címke törlése

Kattintson a mellette lévő kukára. Ami az adott címkével rendelkezett, {{ui:Címke nélkül}} lesz, és megjelenik.

## Tudnivalók

- A címkék, nevük és az, hogy melyik van elrejtve, a ModelCraft-fájlban mentődnek. Egy címkézett csoport másik modellbe másolása magával hozza a címkéjét.
- A címke elrejtése és megjelenítése, valamint a címkék minden más módosítása egy visszavonási lépés.
- Az exportálás mindent tartalmaz, az elrejtett címkéket is, az elrejtett elemekhez hasonlóan.
- A DWG- és DXF-fájlok rétegei egyelőre nem jönnek be címkeként: a teljes rajz egyetlen csoportként érkezik.
