---
title: "Oznake: prikaz in skrivanje nizov predmetov"
summary: Skupinam in komponentam dodelite oznako, na primer Pohištvo ali Stene, ter naenkrat skrijte ali prikažite vse, kar ima to oznako.
keywords: oznake, oznaka, sloji, sloj, prikaz, skrij, vidnost, uredi, pohištvo, stene, neoznačeno, preimenuj oznako, izbriši oznako
from: c1a95a05
---

Oznaka je ime, ki ga dodelite skupinam in komponentam, na primer **Pohištvo**, **Stene** ali **Lokacija**, da lahko naenkrat skrijete ali prikažete vse z njo označeno. Oznake so tisto, kar CAD programi imenujejo sloji. Za skrivanje ene stvari naenkrat glejte [Skrij, izoliraj in prikaži](topic:hide-isolate).

## Ustvarite oznako

1. V {{ui:Oznake}} na desni kliknite {{ui:Dodaj oznako}}.
2. Vnesite ime in pritisnite {{key:Enter}}.

Če želite preimenovati oznako, kliknite njeno ime v {{ui:Oznake}}, vnesite novo ime in pritisnite {{key:Enter}}. Dve oznaki ne moreta imeti enakega imena.

## Označevanje skupin in komponent

1. Izberite eno ali več skupin ali komponent.
2. V {{ui:Podatki o entiteti}} izberite oznako v {{ui:Oznaka}}. {{ui:Nova oznaka…}} ustvari novo oznako in z njo označi izbor.

{{ui:Neoznačeno}} oznako odstrani. Število ob vsaki oznaki v {{ui:Oznake}} pove, koliko skupin in komponent jo ima.

Označujte skupine in komponente, ne prostih ploskev in robov: predmete, ki jih želite označiti, najprej narišite kot skupine (izberite jih, {{key:Shift+G}}).

## Skrivanje in prikaz

Kliknite oko ob oznaki. Vse z njo označeno izgine iz pogleda, kjerkoli je v modelu (tudi znotraj drugih skupin), in klik ter lovljenje ga preskočita. Ponovno kliknite oko, da ga prikažete. Stvari v stanju {{ui:Neoznačeno}} so vedno prikazane.

Če urejate znotraj skupine, katere oznako skrivate, se skupina zapre.

## Izbrišite oznako

Kliknite koš ob njej. Kar je imelo oznako, postane {{ui:Neoznačeno}} in se prikaže.

## Dobro vedeti

- Oznake, njihova imena in to, katere so skrite, se shranijo v datoteko ModelCraft. Kopiranje označene skupine v drug model prinese tudi njeno oznako.
- Skrivanje in prikaz oznake ter vsaka druga sprememba oznak je en korak razveljavitve.
- Izvozi vključujejo vse, tudi skrite oznake, enako kot skrite stvari.
- Sloji v načrtih lokacij DWG in DXF še ne pridejo kot oznake: celotna risba pride kot ena skupina.
