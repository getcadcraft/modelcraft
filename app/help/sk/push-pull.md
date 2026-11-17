---
title: Tlačenie a ťahanie plôch na telesá
summary: Premeňte plochu na kváder, zvýšte alebo znížte budovu, pridajte výklenok alebo výčnelok a zopakujte vzdialenosť dvojitým kliknutím.
keywords: tlač ťah, vytlačenie, výška, teleso, kváder, hmota, vyššie, výklenok, výčnelok, opakovať, dvojité kliknutie, objem, úroveň, na ploche, zarovnanie, rovnaká výška
from: dc093c91
---

{{ui:Tlač/ťah}} ({{key:P}}) posúva plochu v jej vlastnom smere: nahor a nadol pre podlahu, dovnútra a von pre stenu. Čo sa stane, závisí od plochy.

## Vytvorenie telesa z plochy

1. Nakreslite plochu, napríklad obdĺžnik na zemi ([Kreslenie plôch](topic:draw-faces)).
2. Stlačte {{key:P}}.
3. Nad plochou sa zastavte. Zvýrazní sa.
4. Kliknite na plochu a potom pohnite ukazovateľom. Plocha sa zdvihne (alebo klesne) a z jej okrajov narastú bočné steny. Pole hodnoty ({{ui:Vzdialenosť}}) a tip ukazujú vzdialenosť.
5. Kliknutím dokončite, alebo zadajte vzdialenosť a stlačte {{key:Enter}}: `3m`, `10'`, `2700` v modeli v milimetroch.

   Teraz máte uzavreté teleso. Vyberte ho celé a zoskupte ho (pozrite [Skupiny a komponenty](topic:groups-components)): {{ui:Informácie o entite}} potom zobrazí "Teleso: áno" a jeho objem.

Osamotená plocha môže ísť oboma smermi: ťahajte ju nahor pre hmotu nad zemou, tlačte ju nadol pre jamu alebo základ.

:::tip
Namiesto dvojitého kliknutia stlačte plochu, potiahnite a uvoľnite. Na dotykovej obrazovke je to prirodzený spôsob: stlačte, potiahnite, zdvihnite.
:::

## Ťahanie do výšky iného prvku

Počas ťahania sa zastavte nad rohom, stredom, hranou alebo vodidlom inej časti modelu. Plocha sa prichytí na túto výšku a značka ukáže bod. Použite to, ak chcete mať dva bloky rovnakej výšky, alebo sa zastaviť na vodiacej čiare, ktorú ste umiestnili pomocou [pásma](topic:guides-measure).

Môžete sa tiež zastaviť nad plochou rovnobežnou s tou, ktorú tlačíte, napríklad nad vrchom iného bloku alebo nad vrchom kvádra, na ktorom stojí stĺp. Tip povie "Na ploche" a plocha, ktorú tlačíte, skončí v rovnakej úrovni s ňou. Napríklad tlačte vnútornú plochu rúry nadol, kým nebude v rovnakej úrovni s kvádrom pod rúrou.

Plocha v uhle k tej, ktorú tlačíte, neurčí úroveň. Vzdialenosť sleduje ukazovateľ. Rovnako aj plocha za plochou, ktorú tlačíte.

Keď tlačená plocha znova skončí v rovnej línii s okolitými plochami, jej bočné steny zmiznú. Nezostanú žiadne bočné steny s nulovou výškou a obrys, ktorý ste nakreslili, zostane na ploche, takže ju neskôr môžete znova tlačiť. Ak ju chcete znova urobiť jednou plochou, zmažte hrany obrysu pomocou {{ui:Guma}}: obe plochy sa spoja.

## Zvýšenie alebo zníženie kvádra

Tlačte alebo ťahajte vrch kvádra pomocou {{ui:Tlač/ťah}}. Keďže bočné steny z neho už vedú rovno nahor, vrch sa jednoducho posunie: kváder sa zvýši alebo zníži a nevytvoria sa žiadne nové hrany.

- Stlačenie vrchu úplne dolu k spodku kváder odstráni. ModelCraft sa zastaví na nulovej výške; kváder nikdy nevyvráti naruby.
- To isté platí pre akúkoľvek plochu, ktorej susedia všetci vedú v jej smere, napríklad koniec steny.

## Pridanie výčnelku alebo výklenku

1. Nakreslite obdĺžnik na bočnú stranu kvádra (začnite ho na ploche; zostane v rovine plochy).
2. Stlačte {{key:P}} a nový obdĺžnik ťahajte **von**. Pridá materiál: výčnelok, komín, markízu.
3. Alebo ho tlačte **dovnútra**. Vyreže výklenok: vchodovú verandu, niku, ustúpený vchod.

Keď bočné strany novej časti zarovnajú s už existujúcimi plochami, spoja sa do jednej plochy, takže na rovnej stene nevzniknú nežiaduce čiary.

## Tlačenie až na prechod

Tlačenie plochy do telesa sa zastaví na prvej ploche za ňou. Keď k nej dôjde, vyreže otvor až na prechod. Takto vytvoríte okná a dvere v stene s hrúbkou. Pozrite [Vyrezanie otvoru cez stenu](topic:openings).

## Zadanie vzdialenosti

Po kliknutí na plochu zadajte vzdialenosť a stlačte {{key:Enter}}.

- Zadaná vzdialenosť ide smerom, akým ste sa pohybovali. Ak ste sa ešte nepohli, ide smerom dopredu od plochy (z telesa von, zo zeme nahor).
- Zadajte záporné číslo, napríklad `-500`, aby išlo opačným smerom.
- Ak si to pred kliknutím rozmyslíte, stlačte {{key:Esc}}. Plocha sa vráti späť.

## Zopakovanie poslednej vzdialenosti

Po jednom tlačení/ťahaní dvojito kliknite na inú plochu, pričom {{ui:Tlač/ťah}} zostáva vybratý. Posunie sa o rovnakú vzdialenosť. Takto rýchlo dostanete niekoľko stien alebo podláh rovnakú hrúbku alebo výšku.

ModelCraft si zapamätá vzdialenosť, kým neprepnete na iný nástroj.

## Čo treba vedieť

- Tlač/ťah pracuje na jednej ploche naraz. Ak kliknete na niečo, čo nie je plocha, stavový riadok hovorí: "Tlač/ťah pracuje na ploche. Kliknite na plochu."
- Ak chcete tlačiť alebo ťahať plochu v skupine alebo komponente, najskôr ju otvorte (dvojitým kliknutím).
- Keď je zapnuté **Kolízia**, tlačenie alebo ťahanie, ktoré narazí na iné teleso, sa zastaví tam, kde sa dotkne, a tip povie, čoho sa dotkol (názov objektu alebo "voľná geometria v tejto skupine") a zvýrazní plochy, s ktorými sa stretol. Vybranie, do ktorého tlačíte vlastné teleso (napríklad odsadená plocha stlačená späť dolu), je súčasťou tohto telesa a jeho steny ho nikdy nezastavia.
- Dve telesá, ktoré sa tlačia do seba, sa navzájom nerežú ani nespájajú: ich plochy len prechádzajú cez seba. Pozrite [Ešte nie je hotové](topic:not-built-yet).
