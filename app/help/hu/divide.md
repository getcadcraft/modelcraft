---
title: Él vagy görbe felosztása egyenlő részekre
summary: Vonal felosztása egyenlő darabokra, vagy ív vagy kör szakaszszámának megváltoztatása az Osztás eszközzel.
keywords: felosztás, él felosztása, egyenlő részek, egyenlő szakaszok, él darabolása, szakaszok, alfelosztás, élek felosztása, ív szakaszai, kör szakaszai, pontok a vonal mentén
from: 5c3ce3ed
---

Az {{ui:Osztás}} egy élt egyenlő darabokra vág, minden vágásnál sarkot hozva létre. Használja a sarkokat fogáshoz, vonalak kezdőpontjaként, vagy a lap részeinek tolásához és húzásához.

## Él felosztása

1. Kattintson az eszköztárban az {{ui:Osztás}} gombra, vagy jelöljön ki egy élt, és kattintson az {{ui:Entitásinfó}} panelen az {{ui:Osztás…}} gombra.
2. Mutasson az élre. A jelölések mutatják a vágások helyét: az él közepe fölött két rész lesz, a végek felé mozgatva több.
3. Kattintson, hogy a látható részekre ossza fel. Vagy írjon be egy számot, például `5` (vagy `5s`, vagy `/5`), és nyomja meg az {{key:Enter}} billentyűt: azonnal felosztja.

A részek kijelölve maradnak, és egy visszavonási lépést jelentenek. Az él egy lapjának alakja megmarad, és új sarkokat kap.

## Ív vagy kör felosztása

Mutasson az ív vagy kör bármely szakaszára: egészben osztja fel.

- Ha az ív vagy kör sarkait más nem használja, és a lapján fekszik, a valódi ívre **a megadott számú szakasszal újra lesz rajzolva**. A végei helyükön maradnak, és egy görbe marad, így továbbra is egy kattintással kijelölhető, és a sugara módosítható az {{ui:Entitásinfó}} panelen. Egy 24 oldalú kör 8-ra osztva nyolcszöggé válik.
- Minden más görbe — egy húzott henger széle, a {{ui:Görbe}} eszközzel rajzolt görbe, vonalakkal összekapcsolt sarkú ív — új sarkokat kap rajta egyenlő hosszúságokban, és semmi nem mozdul el.

## A modeler billentyűkkel

Az eszköz ugyanaz a modeler billentyűkkel is (Beállítások › ModelCraft › Billentyűk, vagy a Modeler menüstílus), ahol a {{ui:Háló}} menüben {{ui:Élek felosztása}} néven található.

## Tudnivalók

- A beírt szám 2 és 1000 közötti lehet; az egérmutatóval megadva legfeljebb 100.
- A {{ui:Görbe}} eszközzel rajzolt görbe megtartja a pontjait: a {{ui:Pontok szerkesztése}} után azokból rajzolódik újra, és az új sarkok megszűnnek.

Lásd még: [Lapok rajzolása vonalakkal, téglalapokkal, körökkel és ívekkel](topic:draw-faces) és [Pontos méretek beírása az értékmezőbe](topic:value-box).
