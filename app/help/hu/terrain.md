---
title: Terep: talaj szintvonalakból és annak formázása
summary: Készítsen talajt szintvonalakból vagy rácsként, majd emelje vagy süllyessze egy lágy ecsettel.
keywords: terep, talaj, táj, domborzat, szintvonalak, szintvonal, telek, lejtő, domb, halom, homokozó, smoove, szobrászat, tereprendezés, lejtés, TIN
from: 407652b3
---

A terep háromszögekből álló talaj, így bármilyen alakot követhet. Csoport: a szerkesztéséhez kattintson rá duplán.

## Szintvonalakból

1. Szerezze be a szintvonalakat a megfelelő magasságukban: rajzolja meg őket, vagy [importáljon telekrajzot](topic:site-plan), és minden szintvonalat vigyen a saját szintjére.
2. Jelölje ki őket (a szintvonalak összes élét).
3. {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Terep a kijelölt szintvonalakból}}.

A ModelCraft a szintvonalpontokat háromszögekkel köti össze (TIN), és minden belső élt lágyít, hogy a talaj simán árnyékolódjon. Maguk a vonalak megmaradnak; törölje vagy rejtse el őket, ha már nincs rájuk szükség. A nagyon sűrű szintvonalak 8 000 pontra lesznek ritkítva.

## Rács formázáshoz

{{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Terepháló…}}: a szélességet, a mélységet és a cellaméretet kéri, majd ott, ahol a sarkára kattint, egy lapos háromszögrácsot helyez el. A kis cellák simábbá teszik a formázást, de több lapot hoznak létre (legfeljebb 200 × 200 cella).

## Formázás: talaj emelése és süllyesztése

1. A terep megnyitásához kattintson rá duplán.
2. {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Terep szobrászata}}. Egy kör mutatja az ecsetet a mutató alatti talajon.
3. Húzzon felfelé, hogy megemelje, vagy lefelé, hogy süllyessze a talajt az ecset alatt. A közepe mozdul leginkább, és a talaj a kör szélénél teljesen eltűnik, így a halmok és mélyedések simák lesznek.

Pontos magasságú halomhoz kattintson egyszer, majd írja be a magasságot, például `1.5m` (a mínusz süllyeszt), és nyomja meg az {{key:Enter}} billentyűt. Az ecset módosításához kattintás előtt írjon be egy hosszúságot: a `5m` 5 m sugarú ecsetet ad.

Minden formázás egy visszavonási lépés.

## Tudnivalók

- A szobrászat csak háromszöglapokat mozgat, így minden lap lapos marad. A kézzel rajzolt lapok (téglalapok, sokszögek) nem terepek: az eszköz ezt jelzi.
- A formázás pontokat csak függőlegesen mozgat; nem ad hozzá pontokat. Finomabb részletekhez készítsen kisebb cellájú rácsot.
- A terep úgy exportálódik, mint bármely más csoport. IFC-ben épületelem-proxyként szerepel, mint minden más.
