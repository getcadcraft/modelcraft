---
title: Izberite, kateri program nariše sliko
summary: Izbira pogona v pogovornem oknu Upodobi: naša dva pogona, drugi programi v CadCraft Studio in kaj spletna različica naredi namesto tega.
keywords: upodobi, pogon, upodobitveni pogon, render engine, vtičnik, plugin, studio, zunanji program, nariše, vrsta, pogon dodatka
from: be4b056a
---

{{ui:Upodobi sliko…}} ima izbiro **Pogon** nad Način. Naša dva pogona sta vedno na voljo in delujeta povsod; dodatki jih lahko dodajo več, v CadCraft Studio pa seznam vsebuje tudi programe, ki prevzamejo prizor.

| Pogon | Kaj naredi | Kje |
|---|---|---|
| Vgrajeni: Hitri | Hitra slika: dnevna svetloba, mehke sence, videzi stekla in kovine, v nekaj sekundah | Brskalnik in Studio |
| Vgrajeni: Sledilnik poti | Svetloba, ki se odbija med površinami, na vaši grafični kartici ali procesorju; vrsta upodobitev in drugi računalniki v vašem omrežju | Brskalnik in Studio |
| Pogon dodatka | Nariše in vrne sliko: glejte [Narišite sliko z drugim programom](topic:render-other-program) | Brskalnik (pogon, napisan v JavaScriptu) ali Studio (pogon, ki zažene program) |
| Program, ki prevzame prizor | Studio da prizor v svojo mapo in ga ohranja usklajenega | Studio |
| Odpri v … | Shrani prizor in ga odpre v programu; nič se ne vrne: glejte [Odprite prizor v drugem programu](topic:render-open-in) | Splet shrani datoteko |

## Kako se izbira obnaša

- Izbira Hitri ali Sledilnik poti spremeni tudi Način, in obratno. Nič drugega v pogovornem oknu se ne spremeni za ljudi, ki nikoli ne uporabljajo drugega pogona.
- Pogon, ki ni na voljo, ostane na seznamu z razlogom ("ni najdeno", "potrebuje novejšo različico"); ne morete ga izbrati. V brskalniku pogon, ki deluje samo v Studiu, prikaže "shrani datoteko": {{ui:Upodobi sliko…}} nato shrani prizor in njegove nastavitve v datoteko, ki jo odnesete k temu programu.
- Izbira se shrani z nastavitvami upodabljanja datoteke, zadnji izbrani pogon pa je začetni pogon za datoteke, ki nimajo lastne izbire.
- Slika iz drugega programa pove, kateri program jo je narisal in njegovo različico, v pogovornem oknu in v vrsti upodobitev. Obljube strani [Upodobi](topic:render) veljajo samo za **naše** pogone: drug program osvetljuje, tonira in vzorči po svoje, zato sta dve sliki istega prizora podobni po kameri, soncu, svetilkah in osvetlitvi, ne pa piksel za pikslom.

## Kaj vsak pogon dobi

Prizor gre drugemu programu kot **paket**: model kot datoteka USD (ista datoteka, ki jo zapiše [Shrani kot USD](topic:usd)), in datoteka nastavitev, ki vsebuje tisto, čemur uvoznik USD ne more zaupati: točne vrednosti materialov, svetilke, ki so vklopljene, z močjo in profili svetlobe, sonce, nebo, osvetlitev in kamero, kot bi jih narisalo pogovorno okno. Nič se ne naloži nikamor.

## Vrsta upodobitev

Slika ali animacija za drug program lahko čaka v [vrsti upodobitev](topic:render#the-render-queue) kot naše; njeno delo si zapomni, za kateri pogon je. Animacija gre programu v enem zagonu.
