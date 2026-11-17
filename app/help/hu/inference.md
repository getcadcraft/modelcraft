---
title: Következtetés és fogás
summary: Mit jelentenek a színes jelölők, melyik fogás nyer, és hogyan rögzít irányt a nyílbillentyűkkel vagy a Shift billentyűvel.
keywords: következtetés, fogás, fogás (snap), végpont, felezőpont, lap középpontja, középpont, élen, lapon, tengely, piros tengely, zöld tengely, kék tengely, párhuzamos, merőleges, rögzítés, shift, objektumfogás
from: e78984e9
---

Amíg egy rajzoló vagy szerkesztő eszköz dolgozik, a ModelCraft azt nézi, mi van a kurzor alatt, és a leghasznosabb közeli dologhoz illeszkedik. Egy jelölő mutatja, mit talált, a bal alsó sarokban lévő jelzés pedig megnevezi.

## Jelölők és jelzések

| Jelzés | Jelölő | Illeszkedik ehhez |
|---|---|---|
| Végpont | Zöld kör | Egy él vége |
| Felezőpont | Ciánkék kör | Egy él közepe |
| Lap középpontja | Kék kör | A kurzor alatti lap közepe |
| Segédpont | Szürke | A mérőszalag által hagyott segédpont |
| Origó | Okker | Ahol a piros, zöld és kék tengely találkozik |
| Piros tengelyen / Zöld tengelyen / Kék tengelyen | Az adott színű vonal | Az induló ponttól az adott irányba húzott vonal |
| Élre párhuzamos / Élre merőleges | Bíbor vonal | Az induló pontból az emlékezett élre párhuzamos vagy merőleges vonal (lásd lent) |
| Rögzítve | Bíbor vonal | Az az irány, amelyet nyílbillentyűvel vagy {{key:Shift}} billentyűvel rögzített |
| Élen | Piros négyzet | Bármely pont egy élen |
| Segédvonalon | Szürke | Bármely pont egy segédvonalon |
| Lapon | Kék rombusz | Bármely pont egy lapon |
| Síkon | nincs | Az a sík, amelyen indult, ha a kurzor üres térben van |
| A talajon | nincs | A talaj (a piros–zöld sík), ha máshol nincs semmi |

Ha az induló pontból húzott tengelyvonal egy élet vagy segédvonalat metsz, a ModelCraft a metszéspontra illeszkedik, a jelzés pedig mindkettőt megnevezi, például: „Piros tengelyen, élen”.

## Melyik fogás nyer

1. **Pontok körülbelül 12 képpont körzetében:** először a végpontok, utána a segédpontok, a felezőpontok, a kurzor alatti lap középpontja és az origó.
2. **Irányok az induló pontból:** a piros, zöld és kék tengely, valamint az emlékezett élre párhuzamos vagy merőleges irány.
3. **Él** vagy **segédvonal**.
4. **Lap.**
5. **A rajzsík**, vagy a talaj.

A lap mögött elrejtett dolgokra sosem illeszkedik. Járja körbe a modellt, hogy lássa a kívánt pontot.

## Rajzolás lapon egy pontból

Egy sarokból, felezőpontból, élből vagy lap közepéből indított {{ui:Téglalap}}, {{ui:Kör}} vagy {{ui:Sokszög}} a kurzor alatti **lap síkjában** rajzolódik, és átvágja azt a lapot. Egy él két laphoz tartozik, ezért az él azon oldala dönt, ahol a kurzor van: ha egy hosszú doboz végére szeretne rajzolni, kezdjen a doboz egyik élének felezőpontjából, a kurzorral közvetlenül a végső lapon belül.

## Párhuzamos és merőleges

A ModelCraft az **utolsó élt emlékszi meg, amelyet a kurzor az első kattintás előtt átért**. Sarokról vagy élről indulni úgy számít, mintha azon az élen mentek volna át. Miután az eszköz dolgozni kezd, a többi él, amelynek fölé viszi a kurzort, nem cseréli le ezt.

Egy meglévő élre párhuzamos vonal rajzolásához:

1. Nyomja meg a {{key:L}} billentyűt, és vigye a kurzort arra az élre, amelyet követni szeretne.
2. Vigye a kezdőpontra – lehetőleg anélkül, hogy közben más éleken menne át –, és kattintson.
3. Mozogjon az élre párhuzamos irányban. A vonal bíborrá válik, a jelzés pedig „Élre párhuzamos”. A merőleges ugyanígy működik, azon a síkon belül, amelyen rajzol.

Ha rossz élt jegyzett meg a rendszer, nyomja meg az {{key:Esc}} billentyűt, vigye a kurzort a megfelelő élre, és kezdje újra.

## Irány rögzítése

Az eszköz első kattintása után a következő pontot egy vonalon tarthatja:

| Billentyű | Rögzít ide |
|---|---|
| {{key:Right}} | A piros tengelyre |
| {{key:Left}} | A zöld tengelyre |
| {{key:Up}} | A kék tengelyre (egyenesen felfelé) |
| {{key:Down}} | Az emlékezett élre párhuzamosan (lásd fent) |

Ugyanazt a nyilat újra megnyomva oldja a rögzítést. Az állapotsor ezt írja: „Rögzítve a piros tengelyre. A feloldáshoz nyomja meg ugyanazt a nyilat.”

Rögzített állapotban a pont a vonal mentén csúszik ahhoz a helyhez, amerre a kurzor mutat, és továbbra is illeszkedik a rávitt pontokhoz: vigyen a kurzort egy másik doboz sarkára, és a piros tengely mentén pontosan addig húzzon vonalat, ameddig az a sarok van.

**{{key:Shift}}** azt rögzíti, amire épp illeszkedik (tengelyt vagy párhuzamost), amíg lenyomva tartja. Engedje el a feloldáshoz.

A rögzítések működnek a {{ui:Vonal}}, {{ui:Téglalap}}, {{ui:Kör}}, {{ui:Sokszög}}, {{ui:Mozgatás}}, {{ui:Léptékezés}} és {{ui:Mérőszalag}} eszköznél. Az első kattintás előtt a nyilak a nézetet forgatják.

## Csoporton belül

Csoport vagy komponens szerkesztése közben a tengelyek a csoport saját tengelyei (velük együtt mozognak, és együtt fordulnak, ha el lettek forgatva). Az illesztés továbbra is talál pontokat és éleket a csoporton kívül, így a modell többi részéhez igazíthat.
