---
title: Lapok metszése
summary: Rajzolja meg a vonalakat, ahol a lapok átvágják egymást, hogy a darabokat tolhassa, törölhesse vagy festhesse.
keywords: metszés, lapok metszése, metszés a modellel, metszés a kijelöléssel, vágás, nyílás, furat, egyesítés, lapok keresztezése, logikai művelet
from: 6bc58526
---

Ha egy alakzat átmegy egy másikon, a ModelCraft nem rajzolja meg a találkozási vonalat: a két alakzat egyszerűen átfed. A **Metszés** ezeket a vonalakat élekként rajzolja meg, így a lapok ott szétosztódnak. Ezután a darabokat nyomással és húzással, törléssel vagy festéssel kezelheti.

Mindkét parancs a {{ui:Szerkesztés}} › {{ui:Továbbiak}} menüben található.

## Metszés a modellel

A kijelölt elemeket **a képernyőn lévő minden lappal** metszi.

Például egy gerenda (csoport) átmegy egy falon (másik csoport), és nyílást szeretne a falban:

1. Kattintson duplán a falra a megnyitásához, és jelölje ki az összes lapját ({{key:Ctrl+A}}).
2. {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Metszés a modellel}}.

A gerenda körvonala mindkét falapon megrajzolódik, két új lapként. Az egyik lapot tolja át a falon a nyílás létrehozásához, majd zárja be a falat.

## Metszés a kijelöléssel

A kijelölt lapokat, csoportokat és komponenseket **csak egymással** metszi. Legalább kettőt jelöljön ki.

## Hová kerülnek a vonalak

A vonalak mindig a **megnyitott kontextusban** rajzolódnak: a modellbe, ha nincs csoport megnyitva, vagy abba a csoportba, amelyet szerkeszt. A nem megnyitott csoportok és komponensek nem változnak. Tehát egy csoport lapjainak metszéséhez előbb nyissa meg a csoportot, ahogy a fenti példában.

## Tudnivalók

- Az azonos síkban fekvő lapok nem metsződnek.
- A lapon zárt hurkot alkotó vonalak új lapot hoznak létre, ahogy a rajzolt vonalak is.
- Minden metszés egy visszavonási lépés. Ha nincs keresztezés, semmi sem változik.
- Zárt alakzatoknál a [testeszközök](topic:solids) (Egyesítés, Kivonás) az egész munkát egy lépésben elvégzik.
