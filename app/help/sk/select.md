---
title: Výber objektov
summary: Kliknutie, dvojité a trojité kliknutie, potiahnutie rámčekom okna alebo prekríženia, pridávanie a odoberanie pomocou modifikačných kláves a zmazanie.
keywords: vybrať, výber, okno, prekríženie, pridať do výberu, zrušiť výber, vybrať všetko, trojité kliknutie, dvojité kliknutie, zmazať, vymazať
from: d56d1f89
---

{{ui:Vybrať}} ({{key:Space}}) je nástroj, s ktorým ModelCraft začína, a ten, do ktorého sa vrátite klávesom {{key:Esc}}. Vybrané objekty sú modré a {{ui:Informácie o entite}} na pravej strane hovorí, čo sú.

## Kliknutie

| Urobte toto | Vyberie |
|---|---|
| Kliknite na plochu alebo hranu | Táto plocha alebo hrana |
| Kliknite na skupinu alebo komponent | Celá skupina alebo komponent |
| Dvojité kliknutie na plochu | Plocha a jej hrany |
| Dvojité kliknutie na hranu | Hrana a plochy na oboch stranách |
| Dvojité kliknutie na skupinu alebo komponent | Otvorí ju na úpravu (pozri [Skupiny a komponenty](topic:groups-components)) |
| Trojité kliknutie na plochu alebo hranu | Všetko, čo k nej patrí: celý objekt |
| Kliknutie na prázdny priestor | Nič (zruší výber) |
| Dvojité kliknutie na prázdny priestor pri úprave skupiny | Zatvorí skupinu |

Hrany sa trafia ľahšie než plochy: keď je ukazovateľ niekoľko pixelov od hrany, kliknutie vyberie hranu.

## Potiahnutie rámčekom

- **Zľava doprava** nakreslí plný rámček: výber **oknom**. Vybrané sú iba objekty, ktoré sú v ňom celé.
- **Sprava doľava** nakreslí prerušovaný rámček: výber **prekrížením**. Vybrané je všetko, čoho sa rámček dotkne, a plocha je vybraná, ak je rámček celý vnútri nej.

Skupina alebo komponent sa počíta ako jeden objekt: okno ho musí obsahovať celý, prekríženie sa ho musí iba dotknúť.

## Pridanie a odobratie

Pri kliknutí alebo potiahnutí podržte klávesu:

| Klávesa | Účinok |
|---|---|
| {{key:Shift}} | Prepína: pridá, čo nie je vybrané, a odoberie, čo vybrané je |
| {{key:Mod}} | Pridá |
| {{key:Shift}} a {{key:Mod}} spolu | Odoberá |

Ak chcete vybrať všetko v modeli (alebo všetko v skupine, ktorú upravujete), stlačte {{key:Mod+A}}.

## Zrušenie výberu

Stlačte {{key:Esc}} (s nástrojom {{ui:Vybrať}}) alebo kliknite na prázdny priestor.

## Zmazanie vybraných objektov

Stlačte {{key:Delete}} alebo {{key:Backspace}}. Plochy, hrany, skupiny a pomocné čiary vo výbere sa odstránia naraz; {{key:Mod+Z}} ich vráti späť.

Zmazanie hrany odstráni plochy, ktoré ju potrebujú, pokiaľ hrana iba oddeľovala dve plochy v tej istej rovine; potom sa obe plochy spoja do jednej. Zmazanie plochy ponechá jej hrany. Pozri [Zmazanie a vyčistenie](topic:erase).

## Výber vnútri skupiny

Kliknutie na skupinu vyberie celú skupinu. Ak chcete vybrať plochu vnútri nej, dvojitým kliknutím skupinu otvorte a potom kliknite. Kým je skupina otvorená, kliknutia dosiahnu iba objekty vnútri nej; všetko ostatné je zosvetlené. Ak chcete skupinu zatvoriť, stlačte {{key:Esc}} bez výberu alebo dvojitým kliknutím na prázdny priestor.

{{ui:Strom}} na ľavej strane vyberá skupiny a komponenty podľa názvu, čo pomôže, keď sú skryté za inými objektmi.
