---
title: Odaberite program koji crta sliku
summary: Izbor motora u dijalogu Renderiraj: naši vlastiti motori, drugi programi u CadCraft Studiju i što web radi umjesto toga.
keywords: render, motor, renderer, motor za renderiranje, dodatak, plugin, studio, vanjski program, crta, red, motor dodatka
from: be4b056a
---

{{ui:Renderiraj sliku…}} ima izbor **Motor** iznad Načina. Naša dva vlastita motora uvijek su tu i rade svugdje; dodaci mogu dodati još, a u CadCraft Studiju popis također sadrži programe koji preuzimaju scenu.

| Motor | Što radi | Gdje |
|---|---|---|
| Ugrađeno: Brzo | Brza nepomična slika: dnevno svjetlo, meke sjene, izgled stakla i metala, u sekundama | Preglednik i Studio |
| Ugrađeno: Path tracer | Svjetlo koje se odbija između površina, na vašoj grafičkoj kartici ili procesoru, red za renderiranje i ostala računala na vašoj mreži | Preglednik i Studio |
| Motor dodatka | Crta i vraća sliku: vidi [Crtanje slike drugim programom](topic:render-other-program) | Preglednik (motor napisan u JavaScriptu) ili Studio (motor koji pokreće program) |
| Program koji preuzima scenu | Studio stavlja scenu u svoju mapu i drži je usklađenom | Studio |
| Otvori u … | Sprema scenu i otvara je u programu; ništa se ne vraća: vidi [Otvaranje scene u drugom programu](topic:render-open-in) | Web sprema datoteku |

## Kako se izbor ponaša

- Odabir Brzo ili Path tracera mijenja i Način, i obrnuto. Ništa drugo u dijalogu se ne mijenja za ljude koji nikad ne koriste drugi motor.
- Motor koji nije dostupan ostaje na popisu s razlogom ("nije pronađeno", "treba noviju verziju"); ne možete ga odabrati. U pregledniku motor koji radi samo u Studiju pokazuje "sprema datoteku": {{ui:Renderiraj sliku…}} tada sprema scenu i njezine postavke u datoteku koju odnosite tom programu.
- Izbor se sprema uz postavke renderiranja datoteke, a motor koji ste zadnji odabrali je početni motor za datoteke koje nemaju vlastiti izbor.
- Slika iz drugog programa kaže koji ju je program nacrtao i njegovu verziju, u dijalogu i u redu za renderiranje. Obećanja stranice [Renderiraj](topic:render) pokrivaju **samo naše** motore: drugi program osvjetljava, tonira i uzorkuje na svoj način, pa su dvije slike iste scene slične po kameri, suncu, svjetiljkama i ekspoziciji, a ne piksel po piksel.

## Što svaki motor dobiva

Scena ide drugom programu kao **paket**: model kao USD datoteka (ista datoteka koju piše [Spremi kao USD](topic:usd)) i datoteka postavki koja sadrži ono čemu se USD uvoznik ne može pouzdati: točne vrijednosti materijala, svjetiljke koje su uključene s njihovom snagom i profilima svjetla, sunce, nebo, ekspoziciju i kameru onako kako ih dijalog crta. Ništa se nigdje ne učitava.

## Red za renderiranje

Slika ili animacija za drugi program može čekati u [redu za renderiranje](topic:render#the-render-queue) kao i naše; njezin posao pamti za koji je motor. Animacija ide programu u jednom pokretanju.
