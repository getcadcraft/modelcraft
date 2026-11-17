---
title: A rajzolótengelyek mozgatása és forgatása
summary: Forgassa el a piros, zöld és kék tengelyeket, hogy illeszkedjenek egy olyan épülethez, amely nincs rájuk merőlegesen, vagy igazítsa őket egy laphoz, hogy a rajzolás és a gépelés kövesse azt.
keywords: tengelyek, rajzolótengelyek, origó, tengelyek igazítása, tengelyek forgatása, tengelyek visszaállítása, ferde épület, ferdén álló, ucs, koordinátarendszer
from: cab258f7
---

A piros, zöld és kék tengelyek irányítják mindazt, amit rajzol: a téglalapok hozzájuk igazodnak, a vonalak hozzájuk záródnak, a talaj pedig a piros–zöld sík. Ha egy épület szögben áll (egy telekrajz, amely nem merőleges északra, egy 30°-kal elforgatott szárny), helyezze rá a tengelyeket, hogy a rajzolás az épület falait kövesse. A modell maga nem mozdul.

Mindhárom parancs a {{ui:Szerkesztés}} › {{ui:Továbbiak}} menüben található.

## Tengelyek elhelyezése

1. {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Tengelyek elhelyezése}}.
2. Kattintson oda, ahová az origó kerül, például az épület egyik sarkába.
3. Kattintson egy pontra az új piros tengely mentén, például egy fal további részén.
4. Kattintson egy pontra az új zöld tengely irányában. A zöld merőlegesre áll a pirosra, a kék pedig mindkettőre merőleges lesz.

A tengelyek az új helyükön jelennek meg. A talajon most rajzolt, vagy `4m,3m` formában beírt téglalap az elforgatott piros és zöld tengely mentén fut; a nyíl-billentyűk ezekhez záródnak; az origófogás pedig az új origóhoz tapad.

## Tengelyek igazítása egy laphoz

Jelöljön ki egy lapot, majd válassza a {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Tengelyek igazítása laphoz}} lehetőséget. Ekkor a kék a lapból kifelé mutat, a piros a leghosszabb éle mentén fut, az origó pedig ennek az élnek a kezdőpontján van. Ezzel úgy rajzolhat egy ferde tetőre, mintha az a talaj lenne.

## Tengelyek visszaállítása

A {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Tengelyek visszaállítása}} a tengelyeket visszateszi oda, ahol a modell kezdődött.

## Tudnivalók

- Egy megnyitott csoporton vagy komponensen belül annak saját tengelyei érvényesek (azokkal együtt forognak); a modell tengelyei a legfelső szinten érvényesek.
- A tengelyek a ModelCraft-fájlba mentődnek, és minden módosítás egy visszavonási lépés.
- Az exportok és a szabványos nézetek ({{ui:Felülnézet}}, {{ui:Elölnézet}}…) továbbra is a modell saját irányait használják.
