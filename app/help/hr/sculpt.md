---
title: Kiparenje mreže
summary: Oblikujte mrežu kao glinu kistovima — crtaj, glina, zagladi, uhvati, napuhni, žlijeb, stisni, izravnaj — zaštitite dijelove maskom, zrcalite preko X i dodajte detalj tamo gdje kiparite.
keywords: kiparenje, kist, kistovi, glina, crtanje, zagladi, uhvati, napuhni, žlijeb, stisni, izravnaj, maska, simetrija, zrcaljenje, detalj, dinamička topologija, olovka, pritisak, tablet, stilus
from: 5477801a
---

Radni prostor Kiparenje oblikuje mrežu kistovima, kao glinu: povucite preko površine i ona se diže, tone, zaglađuje ili prati pokazivač pod okruglim kistom, najjače u sredini i blijedi do ničega na rubu.

## Početak

Odaberite mrežu i odaberite {{ui:Kiparenje}} na popisu radnih prostora. Grupa ili komponenta prvo postaje mreža, kao u radnom prostoru Mreža. Kistovi rade na vrhovima mreže, pa mreža s više vrhova dobiva finije oblike: prvo je podijelite ({{ui:Podijeli}} u radnom prostoru Mreža ili modifikator Subdivision surface koji primijenite), ili uključite {{ui:Detalj}}.

## Kistovi

| Kist | Tipka | Što radi |
| --- | --- | --- |
| {{ui:Crtanje}} | {{key:D}} | Podiže površinu ispod kista |
| {{ui:Glina}} | {{key:C}} | Gradi ravne slojeve, prvo popunjava udubljenja |
| {{ui:Zagladi}} | {{key:S}} | Izjednačava neravnine; držite {{key:Shift}} za glačanje bilo kojim kistom |
| {{ui:Uhvati}} | {{key:G}} | Povlači površinu zajedno s pokazivačem |
| {{ui:Napuhni}} | {{key:I}} | Nadima površinu duž njezina vlastitog smjera |
| {{ui:Žlijeb}} | {{key:Shift+C}} | Reže oštar žlijeb |
| {{ui:Stisni}} | {{key:P}} | Povlači površinu prema središtu kista |
| {{ui:Izravnaj}} | {{key:T}} | Pritišće površinu prema njezinoj prosječnoj ravnini |
| {{ui:Maska}} | {{key:M}} | Nanosi masku koja štiti površinu od ostalih kistova |

Držite {{key:Ctrl}} dok vučete kist da radite obrnuto (spušta umjesto da diže, greben umjesto žlijeba, uklanja masku), ili uključite {{ui:Oduzmi}}.

## Veličina i jačina

Veličina kista je u pikselima na zaslonu, pa se osjeća isto koliko god zumirali: {{key:[}} i {{key:]}} ga smanjuju i povećavaju, a {{key:Shift+[}} i {{key:Shift+]}} mijenjaju mu jačinu. Ploča prikazuje oboje.

Uz olovku na tabletu jače pritiskanje čini kist većim i jačim; ploča može isključiti jedno ili drugo.

## Zrcaljenje, maska i detalj

- {{ui:Zrcali X}} ({{key:X}}) oblikuje obje strane preko crvene odjednom, za lica i figure.
- Maska se tijekom oblikovanja prikazuje tamnije. {{ui:Očisti masku}} ({{key:Alt+M}}) je uklanja, {{ui:Obrni masku}} ({{key:Ctrl+I}}) maskira ono što je bilo slobodno i oslobađa ono što je bilo maskirano. Maska se čuva uz mrežu.
- {{ui:Detalj}} dodaje trokute tamo gdje oblikujete: bridovi dulji od veličine postavljene u ploči (pikseli na zaslonu) se dijele pod kistom. Treba mrežu od trokuta i traži da se prvo napravi jedna.

Svaki potez je jedan korak poništavanja.

:::note
Detalj samo dodaje trokute; ne uklanja one koji su postali sitni. Remesh (radni prostor Mreža) ponovno izjednačava cijelu mrežu.
:::

Vidi i [Uređivanje mreže](topic:mesh-edit), [Mreže](topic:meshes) i [Modifikatori na mreži](topic:modifiers).
