---
title: Oblikovanje mreže
summary: Oblikujte mrežu kao glinu pomoću četkica — crtanje, glina, zaglađivanje, hvatanje, naduvavanje, nabor, stiskanje, izravnavanje — zaštitite delove maskom, ogledalo preko X i dodajte detalje tamo gde oblikujete.
keywords: oblikovanje, vajanje, četkica, četkice, glina, crtanje, zaglađivanje, hvatanje, naduvavanje, nabor, stiskanje, izravnavanje, maska, simetrija, ogledalo, detalj, dinamička topologija, olovka, pritisak, tablet, pero
from: 5477801a
---

Radni prostor Oblikovanje oblikuje mrežu četkicama, kao glinu: prevucite preko površi i ona se diže, tone, zaglađuje ili prati pokazivač pod okruglom četkicom, najjače u sredini i izbledi do nule na ivici.

## Početak

Izaberite mrežu i izaberite {{ui:Oblikovanje}} na listi Radni prostor. Grupa ili komponenta prvo postaje mreža, kao u radnom prostoru Mreža. Četkice rade na temenima mreže, pa mreža sa više temena prima finije oblike: prvo je podelite (u radnom prostoru Mreža {{ui:Podeli}}, ili modifikator Podeljena površ koji primenite), ili uključite {{ui:Detalj}}.

## Četkice

| Četkica | Taster | Šta radi |
| --- | --- | --- |
| {{ui:Crtanje}} | {{key:D}} | Podiže površ ispod četkice |
| {{ui:Glina}} | {{key:C}} | Gradi ravne slojeve, prvo popunjavajući udubljenja |
| {{ui:Zaglađivanje}} | {{key:S}} | Izravnava neravnine; držite {{key:Shift}} da zagladite bilo kojom četkicom |
| {{ui:Hvataj}} | {{key:G}} | Vuče površ za pokazivačem |
| {{ui:Naduvaj}} | {{key:I}} | Nabubri površ duž njenog sopstvenog smera |
| {{ui:Nabor}} | {{key:Shift+C}} | Seče oštar žleb |
| {{ui:Stisni}} | {{key:P}} | Privlači površ ka sredini četkice |
| {{ui:Izravnaj}} | {{key:T}} | Pritiska površ ka njenoj srednjoj ravni |
| {{ui:Maska}} | {{key:M}} | Boji masku koja štiti površ od ostalih četkica |

Držite {{key:Ctrl}} dok prevlačite da radite obrnuto (spuštate umesto da dižete, greben umesto žleba, uklanjate masku), ili uključite {{ui:Oduzmi}}.

## Veličina i jačina

Veličina četkice je u pikselima na ekranu, pa je ista koliko god zumirali: {{key:[}} i {{key:]}} je smanjuju i povećavaju, a {{key:Shift+[}} i {{key:Shift+]}} menjaju njenu jačinu. Panel prikazuje obe vrednosti.

Kada koristite olovku na tabletu, jači pritisak čini četkicu većom i jačom; panel može da isključi jedno ili drugo.

## Ogledalo, maska i detalj

- {{ui:Ogledalo X}} ({{key:X}}) oblikuje obe strane preko crvene odjednom, za lica i figure.
- Maska se prikazuje tamnije dok oblikujete. {{ui:Obriši masku}} ({{key:Alt+M}}) je skida, a {{ui:Obrni masku}} ({{key:Ctrl+I}}) maskira ono što je bilo slobodno i oslobađa ono što je bilo maskirano. Maska se čuva uz mrežu.
- {{ui:Detalj}} dodaje trouglove tamo gde oblikujete: ivice duže od veličine postavljene u panelu (pikseli na ekranu) se dele pod četkicom. Potrebna je mreža od trouglova, pa traži da prvo napravite jednu.

Svaki potez je jedan korak poništavanja.

:::note
Detalj samo dodaje trouglove; ne uklanja one koji su postali sitni. Ponovno mrežiranje (radni prostor Mreža) ponovo izjednačava celu mrežu.
:::

Vidi i [Uređivanje mreže](topic:mesh-edit), [Mreže](topic:meshes) i [Modifikatori na mreži](topic:modifiers).
