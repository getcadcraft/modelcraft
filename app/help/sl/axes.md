---
title: Premaknite in zasukajte osi risbe
summary: Zasukajte rdečo, zeleno in modro os tako, da ustrezajo zgradbi, ki ni pravokotna nanje, ali jih poravnajte na ploskev, da risanje in vnos sledita temu.
keywords: osi, osi risbe, izhodišče, poravnaj osi, zasukaj osi, ponastavi osi, nagnjena zgradba, poševno, ucs, koordinatni sistem
from: cab258f7
---

Rdeča, zelena in modra os vodita vse, kar risate: pravokotniki se poravnajo z njimi, črte se zaskočijo nanje, tla pa so ravnina rdeče–zelene. Ko zgradba stoji pod kotom (situacijski načrt, ki ni pravokoten na sever, krilo, zasukano za 30°), premaknite osi nanjo, da risanje sledi njenim stenam. Sam model se ne premakne.

Vsi trije ukazi so v {{ui:Uredi}} › {{ui:Več}}.

## Postavite osi

1. {{ui:Uredi}} › {{ui:Več}} › {{ui:Postavi osi}}.
2. Kliknite, kam naj gre izhodišče, npr. na vogal zgradbe.
3. Kliknite točko vzdolž nove rdeče osi, npr. dlje vzdolž stene.
4. Kliknite točko proti novi zeleni osi. Zelena se naredi pravokotna na rdečo, modra pa stoji pravokotno na obe.

Osi so narisane na novem mestu. Pravokotnik, ki ga zdaj narišete na tleh ali vnesete kot `4m,3m`, teče vzdolž zasukanih rdeče in zelene; puščične tipke se zaskočijo nanje; lovljenje na izhodišče pa je na novem izhodišču.

## Poravnajte osi na ploskev

Izberite eno ploskev, nato {{ui:Uredi}} › {{ui:Več}} › {{ui:Poravnaj osi na ploskev}}. Modra nato kaže ven iz ploskve, rdeča teče vzdolž njenega najdaljšega roba, izhodišče pa je na začetku tega roba. Uporabite, da na nagnjeni strehi rišete, kot da je to tla.

## Ponastavite osi

{{ui:Uredi}} › {{ui:Več}} › {{ui:Ponastavi osi}} jih vrne tja, kjer se je začel model.

## Kaj je treba vedeti

- Znotraj odprte skupine ali komponente se uporabijo njene lastne osi (zasukajo se z njo); osi modela veljajo na najvišji ravni.
- Osi se shranijo v datoteko ModelCraft, vsaka sprememba pa je en korak razveljavitve.
- Izvozi in standardni pogledi ({{ui:Zgoraj}}, {{ui:Spredaj}} …) še vedno uporabljajo smeri samega modela.
