---
title: Elrejtés, elkülönítés és rejtés feloldása
summary: Tegyen félre dolgokat, hogy közöttük dolgozhasson, vagy csak azt mutassa, amin épp dolgozik; az elrejtett dolgok a fájlban is rejtve maradnak.
keywords: elrejtés, rejtés feloldása, összes megjelenítése, elkülönítés, többi elrejtése, megjelenítés, rejtett, helyi nézet, láthatóság, félretéve
from: 2c8a3457
---

Az elrejtés félreteszi a dolgokat anélkül, hogy törölné őket. Egy elrejtett lap, él, csoport vagy komponens nem rajzolódik ki, nem lehet rá illeszkedni, kattintani vagy kijelölni, így a mögötte vagy közötte lévő dolgokon dolgozhat.

## Elrejtés

1. Jelölje ki, mit rejtsen el: lapokat, éleket, csoportokat vagy komponenseket.
2. {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Elrejtés}}.

Például két szorosan álló csoport közötti keskeny résben való dolgozáshoz jelölje ki az elülső csoportot, és rejtse el: a kattintások és illesztések most már a mögötte lévő lapot érik el.

## Elkülönítés

Jelölje ki azt, amit látni szeretne, majd válassza a {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Elkülönítés (a többi elrejtése)}} parancsot. A modell minden más eleme elrejtődik — vagy, ha egy csoporton belül szerkeszt, a csoport többi eleme. A kijelölt lap megtartja az éleit.

## Összes megjelenítése

A {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Összes megjelenítése}} parancs újra mindent mutat, minden csoportban. Az {{ui:Entitásinfó}} panel, ha semmi sincs kijelölve, megmondja, hány dolog van elrejtve, és ott is van egy {{ui:Összes megjelenítése}} gomb.

A {{ui:Vázlatnézet}} panel az elrejtett csoportokat és komponenseket dőlt betűvel mutatja, áthúzott szemmel; kattintson a szemre, hogy egyet újra megjelenítsen.

:::note
A Modeler billentyűkkel a {{key:H}} elrejt, a {{key:Shift+H}} elkülönít, az {{key:Alt+H}} minden elrejtést feloldja. ({{ui:Beállítások}} › {{ui:ModelCraft}} választja ki a billentyűstílust.)
:::

## Tudnivalók

- Ami el van rejtve, a ModelCraft-fájlba mentődik, és megnyitáskor rejtve tér vissza.
- A rejtett dolgok a modellben maradnak: az exportok is tartalmazzák őket, és az {{ui:Entitásinfó}} panel térfogatai és méretei is beleszámítanak.
- Minden elrejtés, elkülönítés vagy megjelenítés egy visszavonási lépés.
