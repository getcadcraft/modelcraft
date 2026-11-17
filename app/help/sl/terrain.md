---
title: "Teren: tla iz plastnic in njihovo oblikovanje"
summary: Ustvarite tla iz plastnic ali kot mrežo, nato jih z mehko krtačo dvignite ali spustite.
keywords: teren, tla, krajina, topografija, plastnice, linije plastnic, lokacija, naklon, hrib, nasip, peskovnik, smoove, oblikovanje, nivelacija, TIN
from: 407652b3
---

Teren so tla iz trikotnikov, zato lahko sledijo katerikoli obliki. Je skupina: dvokliknite jo, da jo uredite.

## Iz plastnic

1. Pridobite plastnice na njihovih višinah: narišite jih ali [uvozite načrt lokacije](topic:site-plan) in premaknite vsako plastnico na njeno višino.
2. Izberite jih (vse robove vseh plastnic).
3. {{ui:Uredi}} › {{ui:Več}} › {{ui:Teren iz izbranih plastnic}}.

ModelCraft poveže točke plastnic s trikotniki (TIN) in zgladi vsak rob znotraj, tako da se tla senčijo gladko. Same črte ostanejo; izbrišite jih ali skrijte, ko jih ne potrebujete več. Zelo goste plastnice so zmanjšane na 8 000 točk.

## Mreža za oblikovanje

{{ui:Uredi}} › {{ui:Več}} › {{ui:Mreža terena…}} zahteva širino, globino in velikost celice, nato pa postavi ravno mrežo trikotnikov tam, kjer kliknete njen kot. Majhne celice omogočajo gladkejše oblikovanje, a ustvarijo več ploskev (največ 200 × 200 celic).

## Oblikovanje: dvigovanje in spuščanje tal

1. Dvokliknite teren, da ga odprete.
2. {{ui:Uredi}} › {{ui:Več}} › {{ui:Oblikuj teren}}. Krog prikazuje krtačo na tleh pod kazalcem.
3. Povlecite navzgor, da dvignete tla pod krtačo, ali navzdol, da jih spustite. Sredina se premakne najbolj, tla pa se proti robu kroga postopoma izravnajo, zato nastanejo gladke gričke in vdolbine.

Če želite, da bo gričk točno določene višine, kliknite enkrat, nato vnesite višino, na primer `1.5m` (minus jo spusti), in pritisnite {{key:Enter}}. Če želite spremeniti krtačo, pred klikom vnesite dolžino: `5m` pomeni krtačo s polmerom 5 m.

Vsako oblikovanje je en korak razveljavitve.

## Dobro vedeti

- Oblikovanje premika le trikotniške ploskve, zato ostane vsaka ploskev ravna. Ročno narisane ploskve (pravokotniki, mnogokotniki) niso teren: orodje to sporoči.
- Oblikovanje premika točke samo navzgor in navzdol; ne dodaja točk. Za natančnejše podrobnosti naredite mrežo z manjšimi celicami.
- Teren se izvozi kot katera koli druga skupina. V IFC je to gradbeni element proxy, kot vse drugo.
