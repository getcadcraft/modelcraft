---
title: Úprava siete v pracovnom priestore Sieť
summary: Vyberte vrcholy, hrany a plochy siete, presúvajte ich a vytiahnite, odsaďte, skoste, rezajte, zlúčte, vyplňte a premostite ich, s ktoroukoľvek štýlom klávesov.
keywords: sieť, režim úprav, pracovný priestor siete, vrchol, vrcholy, hrana, hrany, plocha, plochy, vytiahnuť, vnútorné odsadenie, skosenie, rez slučkou, nôž, rozpoliť, rotačne, zlúčiť, rozpustiť, vyplniť, mriežkové vyplnenie, premostiť, rozdeliť, posunúť po hrane, proporcionálne úpravy, pracovný priestor
from: 92a372dd
---

Pracovný priestor {{ui:Sieť}} upravuje [sieť](topic:meshes) bod po bode: jej vrcholy, hrany a plochy. Geometria tlač/ťah zostáva v pracovnom priestore {{ui:Model}}.

## Otvorenie

- Vyberte {{ui:Sieť}} v zozname {{ui:Pracovný priestor}} na ľavej strane lišty. Vybraná sieť sa otvorí na úpravu; vybraná skupina alebo komponent sa najprv premení na sieť (jeden krok späť).
- Alebo dvakrát kliknite na sieť, alebo ju pri klávesoch modelára vyberte a stlačte {{key:Tab}}.
- Ak nič nie je vybrané, panel ponúka siete na pridanie: rovina, mriežka, kocka, kruh, valec, kužeľ, guľa, ikosféra a torus. Nová sieť sa umiestni tam, kam sa pozerá pohľad, a otvorí sa na úpravu.

{{ui:Späť na Model}} (alebo zoznam, {{key:Tab}} pri klávesoch modelára, {{key:Esc}} bez výberu pri klávesoch tlač/ťah) vráti do Modelu s vybranou sieťou. Kým je otvorený pracovný priestor Sieť, zvyšok modelu je zosvetlený a nástroje kreslenia Modelu sú odložené.

## Výber

| Akcia | Výsledok |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Vybrať vrcholy, hrany alebo plochy |
| Kliknutie | Vybrať jeden; {{key:Shift}}+kliknutie pridá alebo odstráni |
| Potiahnutie rámčeka | Vybrať, čo je vnútri a vidieť; {{key:Shift}} pridá, {{key:Ctrl}} odstráni |
| {{key:Alt}}+kliknutie na hranu, alebo dvojklik na ňu | Jej slučka hrán (slučka plôch v režime plôch; celý okraj pri otvorenej hrane) |
| {{key:Ctrl}}+{{key:Alt}}+kliknutie na hranu | Jej prstenec hrán |
| Trojklik | Všetko, čo je s ňou spojené |

Skupina {{ui:Vybrať}} má aj {{ui:Všetko}}, {{ui:Spojené}}, {{ui:Slučka}}, {{ui:Prstenec}}, {{ui:Viac}} a {{ui:Menej}}.

## Presun, otočenie, mierka

{{ui:Presunúť}}, {{ui:Otočiť}} a {{ui:Mierka}} začínajú od ukazovateľa: pohnite ním, potom kliknite alebo stlačte {{key:Enter}} na položenie výberu, alebo {{key:Esc}} na zrušenie. {{key:X}}, {{key:Y}} alebo {{key:Z}} (alebo šípky) zamknú os. Zadajte vzdialenosť, uhol alebo násobok pre presnú hodnotu; fungujú aj [výpočty](topic:value-box#calculations).

**Proporcionálne úpravy** ({{ui:Proporcionálne}}, alebo panel): vrcholy blízko výberu nasledujú pohyb, menej čím sú ďalej, až po dosah, ktorý nastavíte, s poklesom, ktorý zvolíte. Zapnite {{ui:Iba pozdĺž siete}} na meranie pozdĺž hrán namiesto priamo.

{{ui:Posunúť po hrane}} presunie vybranú slučku hrán po priľahlých hranách.

## Zmena tvaru

| Nástroj | Robí |
|---|---|
| {{ui:Vytiahnuť}} | Vytiahne vybrané plochy pozdĺž ich normály, s novými bočnými plochami (alebo vytvorí plochy z otvorených hrán okraja). Zadajte vzdialenosť |
| {{ui:Vnútorné odsadenie}} | Pás vnútri obrysu vybraných plôch; stlačte {{key:I}} znova pre každú plochu zvlášť |
| {{ui:Skosenie}} | Zreže vybrané hrany (alebo, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, vrcholy) na šírku; koliesko alebo klávesy plus a mínus pridávajú segmenty pre zaoblenú hranu |
| {{ui:Rez slučkou}} | Ukážte na hranu: nové slučky cez prstenec štvoruholníkových plôch; koliesko nastaví počet; kliknutím rezať |
| {{ui:Nôž}} | Klikajte na body na hranách alebo rohoch; {{key:Enter}} rovno rozreže plochy medzi nimi, tak ako ich vidíte |
| {{ui:Rozpoliť}} | Nakreslite čiaru na obrazovke: vybrané plochy (alebo všetky) sa rozrežú pozdĺž nej |
| {{ui:Rotačne}} | Otáča vybrané plochy alebo otvorené hrany okolo modrej osi po krokoch (koliesko ich nastaví); úplné otočenie uzavrie |
| {{ui:Rozdeliť}} | Rozdelí vybrané hrany na dve; celé plochy sa zmenia na mriežku |
| {{ui:Zlúčiť}} | Vybrané vrcholy sa zmenia na jeden, v ich strede |
| {{ui:Rozpustiť}} | Odstráni výber, ale zachová povrch: plochy sa spoja |
| {{ui:Vyplniť}} | Plocha cez vybraný otvorený okraj (alebo medzi dvoma otvorenými hranami) |
| {{ui:Mriežkové vyplnenie}} | Vyplní otvorený okraj s párnym počtom hrán mriežkou štvoruholníkov |
| {{ui:Premostiť}} | Spojí dve vybrané otvorené slučky hrán plochami |
| {{ui:Ryha}} | Ako ostro zostanú vybrané hrany, keď sa sieť vyhladzuje povrchom subdivízie: posuňte od stredu, použite koliesko (kroky po 0.1) alebo zadajte hodnotu 0 až 1. Panel ukazuje ryhu vybraných hrán a prijme aj zadanú hodnotu. Ryhované hrany sú vykreslené purpurovou |
| {{ui:Prevrátiť}}, {{ui:Vyhladiť}}, {{ui:Zmazať}} | Prevrátia plochy; vyhladia vrcholy smerom k susedom; zmažú podľa režimu výberu |

Každé je jeden krok späť. Súradnice textúry, farby a váhy sa prenesú na nové plochy a vrcholy.

## Prepočítať sieť

{{ui:Prepočítať sieť}} vytvorí celú sieť znova ako rovnomerné trojuholníky jednej veľkosti, zadanej pri stlačení (menšia je jemnejšia a pomalšia). Zatvorí diery, spojí kusy, ktoré sa prekrývajú, a vyrovná sieť, ktorú sochárstvo natiahlo. Ostré hrany vyjdú veľmi mierne zaoblené. UV, farba a ryhy sa začnú odznova. Jeden krok späť.

## Retopológia

Ak chcete vytvoriť novú, čistejšiu sieť nad podrobnou (sochou, skenom), vyberte podrobnú pod {{ui:Retopológia}} › **Postaviť na** v paneli, potom:

- **Prichytiť posunuté body na ňu:** body, ktoré posuniete, a hrany, ktoré vytiahnete, pristanú na jej povrchu.
- **Umiestniť vybrané body na ňu** presunie vybrané body na ňu hneď (jeden krok späť).
- **Zobraziť hrany tejto siete vpredu** nakreslí sieť, ktorú zostavujete, nad povrchom, aby ste ju videli.

## Úprava poslednej operácie

Po {{ui:Vnútorné odsadenie}}, {{ui:Skosenie}}, {{ui:Rez slučkou}}, {{ui:Rozdeliť}}, {{ui:Vyhladiť}}, {{ui:Mriežkové vyplnenie}} alebo {{ui:Rotačne}} panel ukazuje jej nastavenia (šírka, segmenty, profil, rezy ...). Zmeníte jedno a operácia sa spustí znova od začiatku, stále ako jeden krok späť.

## Klávesy

| | Klávesy tlač/ťah | Klávesy modelára |
|---|---|---|
| Presun, otočenie, mierka | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dvakrát posúva) |
| Vytiahnuť, odsadiť | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Zmazať | {{key:E}} alebo {{key:Delete}} | {{key:X}} alebo {{key:Delete}} |
| Ryha | {{key:Shift+C}} | {{key:Shift+E}} |
| Vybrať všetko, nič, invertovať | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Oba štýly | {{key:Ctrl+B}} skosenie, {{key:Ctrl+R}} rez slučkou, {{key:K}} nôž | to isté, a {{key:F}} vyplniť, {{key:M}} zlúčiť, {{key:Ctrl+X}} rozpustiť, {{key:L}} / {{key:Ctrl+L}} spojené, {{key:Alt+N}} prevrátiť, {{key:O}} proporcionálne, {{key:Shift+V}} posun vrcholu po hrane |

Pozri aj [Sieť](topic:meshes), [Modifikátory na sieti](topic:modifiers) a [Ešte nie je hotové](topic:not-built-yet).
