---
title: Orodja za telesa: unija, odštej, presek
summary: Združite zaprte skupine in komponente v eno, izrežite eno iz druge ali ohranite samo to, kar imata skupnega.
keywords: telo, telesa, pregled telesa, ni telo, popravi telo, luknja, blodni rob, navznoter, unija, pridruži, kombiniraj, združi, odštej, razlika, izreži, presek, booleov, zunanja lupina
from: f35df1cc
---

Orodja za telesa združujejo **telesa**: skupine in komponente, katerih ploskve zapirajo prostornino, pri čemer se vsak rob stika natanko z dvema ploskvama. {{ui:Podatki o entiteti}} pove {{ui:Telo}}: {{ui:Da}} za telo in pokaže njegovo prostornino.

Nahajajo se v meniju {{ui:Telesa}} v skupini {{ui:Razvrsti}}.

## Ko nekaj ni telo

Izberite skupino ali komponento. Če ni telo, {{ui:Podatki o entiteti}} pove zakaj, na primer „Ni telo: 4 robovi mejijo na luknjo · 1 blodni rob“:

| Težava | Kaj pomeni |
|---|---|
| Robovi mejijo na luknjo | Manjka ploskev |
| Robove delijo tri ali več ploskev | Ploskev deli notranjost ali se dve obliki dotikata ob robu |
| Ploskve v notranjosti oblike | Stena, ki je ostala znotraj prostornine |
| Blodni robovi | Črte, ki ne omejujejo nobene ploskve |
| Ploskve obrnjene navznoter | Njihove sprednje strani so obrnjene navznoter, proti sosedom |

{{ui:Pokaži težave}} ga odpre z izbranimi tistimi robovi in ploskvami, da jih vidite. {{ui:Popravi}} zaceli preproste primere v enem koraku razveljavitve: odstrani blodne robove in ploskve znotraj oblike, obrne ploskve v pravo smer in zapre luknje, katerih rob leži ravno. Vse, kar ne more varno popraviti (luknja, ki ni ravna, rob, ki ga deli veliko ploskev), pusti vam in pove, kaj je ostalo.

## Unija

1. Izberite dve ali več teles (kliknite enega, nato {{key:Ctrl}}+klik na druge).
2. {{ui:Telesa}} › {{ui:Unija}}.

Postanejo eno telo, v eni skupini. Kjer so se prekrivala, so ploskve v notranjosti odstranjene.

## Odštevanje

1. {{ui:Telesa}} › {{ui:Odštej}}.
2. Kliknite telo, ki ga želite **odvzeti** (rezilo).
3. Kliknite telo, ki ga želite **izrezati**.

Ostanek drugega telesa ostane; rezilo se porabi. Na primer, za luknjo skozi blok narišite steber skozenj, naredite steber skupino in nato odštejte steber od bloka.

## Presek

Izberite dve ali več teles, nato {{ui:Telesa}} › {{ui:Presek}}. Ohrani se samo del, ki ga imajo vsi skupnega.

## Pomembno vedeti

- Rezultat je nova skupina. Ohrani ime, barvo in oznako prvega telesa (pri {{ui:Odštej}}: telesa, ki je bilo prerezano). Barve, nanesene na njegove ploskve, se ne ohranijo.
- Ravne strani rezultata so posamezne ploskve. Okrogle strani pridejo kot ravne facete, s katerimi so bile narisane.
- Če skupina ali komponenta ni telo, orodje pove, katera je, in ne spremeni ničesar. Poiščite manjkajočo ploskev ali blodno ploskev v njeni notranjosti.
- Znotraj odprte skupine orodja delujejo na skupinah in komponentah v tisti skupini.
- Vsako orodje je en korak razveljavitve.
- Ob prvi uporabi orodja za telesa se naloži njegov mehanizem (manifold-3d), kar lahko traja trenutek.
