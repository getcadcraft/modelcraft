---
title: Izbor programa koji crta sliku
summary: Izbor Engine u dijalogu za renderovanje: naši sopstveni engine-i, drugi programi u CadCraft Studio-u i šta veb radi umesto toga.
keywords: renderovanje, engine, renderer, engine za renderovanje, dodatak, plugin, studio, spoljni program, crta, red, engine dodatka
from: be4b056a
---

{{ui:Renderuj sliku…}} ima izbor **Engine** iznad Režima. Naša dva sopstvena engine-a su uvek tu i rade svuda; dodaci mogu dodati još, a u CadCraft Studio-u lista sadrži i programe koji preuzimaju scenu.

| Engine | Šta radi | Gde |
|---|---|---|
| Ugrađen: Fast | Brza slika: dnevna svetlost, meke senke, izgled stakla i metala, za sekunde | Pregledač i Studio |
| Ugrađen: Path tracer | Svetlost koja se odbija između površina, na vašoj grafičkoj kartici ili procesoru, red za renderovanje i ostali računari na vašoj mreži | Pregledač i Studio |
| Engine dodatka | Crta i vraća sliku: vidi [Crtanje slike drugim programom](topic:render-other-program) | Pregledač (engine napisan u JavaScript-u) ili Studio (engine koji pokreće program) |
| Program koji preuzima scenu | Studio stavlja scenu u svoju fasciklu i drži je u koraku | Studio |
| Otvori u … | Čuva scenu i otvara je u programu; ništa se ne vraća: vidi [Otvaranje scene u drugom programu](topic:render-open-in) | Veb čuva datoteku |

## Kako se izbor ponaša

- Izbor Fast ili Path tracer menja i Režim, i obrnuto. Ništa drugo u dijalogu se ne menja za ljude koji nikad ne koriste drugi engine.
- Engine koji nije dostupan ostaje na listi sa razlogom („nije pronađen“, „treba novija verzija“); ne možete ga izabrati. U pregledaču engine koji radi samo u Studio-u pokazuje „čuva datoteku“: {{ui:Renderuj sliku…}} tada čuva scenu i njena podešavanja u datoteku koju odnosite tom programu.
- Izbor se čuva uz podešavanja renderovanja datoteke, a engine koji ste poslednji izabrali je početni engine za datoteke koje nemaju sopstveni izbor.
- Slika iz drugog programa kaže koji ju je program nacrtao i njegovu verziju, u dijalogu i u redu za renderovanje. Obećanja stranice [Renderovanje](topic:render) pokrivaju **naše** sopstvene engine-e: drugi program osvetljava, tonira i uzorkuje na svoj način, pa su dve slike iste scene slične po kameri, suncu, lampama i ekspoziciji, ali ne piksel po piksel.

## Šta svaki engine dobija

Scena ide drugom programu kao **paket**: model kao USD datoteka (ista datoteka koju piše [Sačuvaj kao USD](topic:usd)), i datoteka podešavanja koja sadrži ono čemu se USD uvoznik ne može verovati: tačne vrednosti materijala, lampe koje su uključene sa svojom snagom i profilima svetlosti, sunce, nebo, ekspoziciju i kameru onako kako bi je dijalog crtao. Ništa se nigde ne otprema.

## Red za renderovanje

Slika ili animacija za drugi program može da čeka u [redu za renderovanje](topic:render#the-render-queue) kao i naše; njen posao pamti za koji je engine. Animacija ide programu u jednom prolazu.
