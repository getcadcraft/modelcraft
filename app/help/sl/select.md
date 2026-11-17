---
title: Izbira stvari
summary: Klik, dvojni in trojni klik, povlečenje okna ali sekalnega polja, dodajanje in odstranjevanje s pomožnimi tipkami ter brisanje.
keywords: izberi, izbor, okno, sekanje, dodaj k izboru, odznači, izberi vse, trojni klik, dvojni klik, izbriši, brisanje
from: d56d1f89
---

{{ui:Izberi}} ({{key:Space}}) je orodje, s katerim ModelCraft začne, in orodje, na katero vas vrne {{key:Esc}}. Izbrane stvari se obarvajo modro, {{ui:Podatki o entiteti}} na desni strani pa pove, kaj so.

## Klik

| Naredite | Izbere |
|---|---|
| Kliknite ploskev ali rob | To ploskev ali rob |
| Kliknite skupino ali komponento | Celotno skupino ali komponento |
| Dvakrat kliknite ploskev | Ploskev in njene robove |
| Dvakrat kliknite rob | Rob in ploskve na obeh straneh |
| Dvakrat kliknite skupino ali komponento | Jo odpre za urejanje (glejte [Skupine in komponente](topic:groups-components)) |
| Trikrat kliknite ploskev ali rob | Vse, kar je z njo povezano: ves predmet |
| Kliknite prazen prostor | Nič (počisti izbor) |
| Dvakrat kliknite prazen prostor med urejanjem skupine | Zapre skupino |

Robove je lažje zadeti kot ploskve: če je kazalec nekaj slikovnih pik od roba, klik izbere rob.

## Povlecite okvir

- **Od leve proti desni** nariše poln okvir: izbor **okno**. Izberejo se samo stvari, ki so v celoti znotraj njega.
- **Od desne proti levi** nariše črtkan okvir: izbor **sekanje**. Izbere se vse, česar se okvir dotakne, ploskev pa se izbere, kadar okvir leži v celoti znotraj nje.

Skupina ali komponenta šteje kot ena stvar: okno jo mora obsegati v celoti, sekanje se je mora samo dotakniti.

## Dodajanje in odstranjevanje

Med klikom ali povlekom držite tipko:

| Tipka | Učinek |
|---|---|
| {{key:Shift}} | Preklopi: doda, kar ni izbrano, odstrani, kar je |
| {{key:Mod}} | Doda |
| {{key:Shift}} in {{key:Mod}} skupaj | Odstrani |

Če želite izbrati vse v modelu (ali vse v skupini, ki jo urejate), pritisnite {{key:Mod+A}}.

## Počistite izbor

Pritisnite {{key:Esc}} (z orodjem {{ui:Izberi}}) ali kliknite prazen prostor.

## Izbrišite izbrano

Pritisnite {{key:Delete}} ali {{key:Backspace}}. Ploskve, robovi, skupine in vodila v izboru se odstranijo v enem koraku; {{key:Mod+Z}} jih povrne.

Brisanje roba odstrani ploskve, ki ta rob potrebujejo, razen če je rob ločeval samo dve ploskvi v isti ravnini: tedaj se ti dve ploskvi združita v eno. Brisanje ploskve pusti njene robove. Glejte [Brisanje in čiščenje](topic:erase).

## Izbira znotraj skupine

Klik na skupino izbere celotno skupino. Če želite izbrati ploskev znotraj nje, dvakrat kliknite skupino, da jo odprete, nato kliknite ploskev. Ko je skupina odprta, kliki dosežejo samo to, kar je v njej; vse drugo je zbledelo. Pritisnite {{key:Esc}}, ko nič ni izbrano, ali dvakrat kliknite prazen prostor, da jo zaprete.

{{ui:Struktura}} na levi izbere skupine in komponente po imenu, kar pride prav, kadar so skrite za drugimi stvarmi.
