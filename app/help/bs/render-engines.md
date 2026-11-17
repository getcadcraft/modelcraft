---
title: Odaberi program koji crta sliku
summary: Izbor motora u dijalogu Renderuj: naši vlastiti motori, drugi programi u CadCraft Studiju i šta web radi umjesto toga.
keywords: render, motor, renderer, motor za renderovanje, dodatak, studio, vanjski program, nacrtao, red, motor dodatka
from: be4b056a
---

{{ui:Renderuj sliku…}} ima izbor **Motor** iznad Režima. Naša vlastita dva motora su uvijek tu i rade svugdje; dodaci mogu dodati još, a u CadCraft Studiju lista sadrži i programe koji preuzimaju scenu.

| Motor | Šta radi | Gdje |
|---|---|---|
| Ugrađeni: Brzi | Brza slika: dnevna svjetlost, meke sjene, izgled stakla i metala, za sekunde | Pregledač i Studio |
| Ugrađeni: Praćenje putanje | Svjetlost koja se odbija između površina na tvojoj grafičkoj kartici ili procesoru, red za renderovanje i drugi računari na tvojoj mreži | Pregledač i Studio |
| Motor dodatka | Crta i vraća sliku: vidi [Nacrtaj sliku drugim programom](topic:render-other-program) | Pregledač (motor napisan u JavaScriptu) ili Studio (motor koji pokreće program) |
| Program koji preuzima scenu | Studio stavlja scenu u svoju mapu i drži je u koraku | Studio |
| Otvori u … | Snima scenu i otvara je u programu; ništa se ne vraća: vidi [Otvori scenu u drugom programu](topic:render-open-in) | Web snima datoteku |

## Kako se izbor ponaša

- Odabir Brzog ili Praćenja putanje mijenja Režim s njim, i obrnuto. Ništa drugo u dijalogu se ne mijenja za ljude koji nikad ne koriste drugi motor.
- Motor koji nije dostupan ostaje u listi sa razlogom ("nije pronađen", "treba novija verzija"); ne možeš ga izabrati. U pregledniku motor koji radi samo u Studiju pokazuje "snima datoteku": {{ui:Renderuj sliku…}} tada snima scenu i njene postavke u datoteku koju odvedeš tom programu.
- Izbor se snima uz postavke renderovanja datoteke, a motor koji si posljednji izabrao je početni motor za datoteke koje nemaju svoj izbor.
- Slika iz drugog programa kaže koji program ju je nacrtao i njegovu verziju, u dijalogu i u redu za renderovanje. Obećanja stranice [Renderovanje](topic:render) pokrivaju samo **naše** motore: drugi program osvjetljava, tonira i uzorkuje na svoj način, pa su dvije slike jedne scene slične po kameri, suncu, lampama i ekspoziciji, ali ne piksel po piksel.

## Šta svaki motor dobija

Scena ide drugom programu kao **paket**: model kao USD datoteka (ista datoteka koju piše [Snimi kao USD](topic:usd)), i datoteka postavki koja sadrži ono čemu se USD uvoznik ne može pouzdati: tačne vrijednosti materijala, lampe koje su uključene sa svojom snagom i profilima svjetla, sunce, nebo, ekspoziciju i kameru kako bi je dijalog crtao. Ništa se nigdje ne učitava.

## Red za renderovanje

Slika ili animacija za drugi program može čekati u [redu za renderovanje](topic:render#the-render-queue) kao i naše; njen posao pamti za koji je motor. Animacija ide programu u jednom prolazu.
