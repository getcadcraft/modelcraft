---
title: Oblikuj mrežu
summary: Oblikuj mrežu kao glinu četkama — crtanje, glina, zaglađivanje, hvatanje, napuhivanje, žlijeb, stiskanje, ravnanje — zaštiti dijelove maskom, zrcali preko X i dodaj detalj tamo gdje oblikuješ.
keywords: kiparenje, četka, četke, glina, crtanje, zaglađivanje, hvatanje, napuhivanje, žlijeb, stiskanje, ravnanje, maska, simetrija, zrcaljenje, detalj, dinamička topologija, olovka, pritisak, tablet, stilus
from: 5477801a
---

Radni prostor Oblikovanje oblikuje mrežu četkama, kao glinu: prevuci preko površine pa se ona diže, tone, zaglađuje ili prati pokazivač pod okruglom četkom, najjače u sredini i stapa se u ništa na obodu.

## Početak

Odaberi mrežu i izaberi {{ui:Oblikovanje}} na listi radnih prostora. Grupa ili komponenta prvo postaje mreža, kao u radnom prostoru Mreža. Četke rade na vrhovima mreže, pa mreža s više njih prima finije oblike: prvo je podijeli (u radnom prostoru Mreža {{ui:Dijeljenje}}, ili modifikator Subdivision surface koji primijeniš), ili uključi {{ui:Detalj}}.

## Četke

| Četka | Taster | Šta radi |
| --- | --- | --- |
| {{ui:Crtanje}} | {{key:D}} | Podiže površinu ispod četke |
| {{ui:Glina}} | {{key:C}} | Gradi ravne slojeve, prvo popunjava udubljenja |
| {{ui:Zaglađivanje}} | {{key:S}} | Izravnava izbočine; drži {{key:Shift}} da zagladiš bilo kojom četkom |
| {{ui:Hvataj}} | {{key:G}} | Vuče površinu za pokazivačem |
| {{ui:Napuhni}} | {{key:I}} | Nadima površinu u njenom sopstvenom smjeru |
| {{ui:Žlijeb}} | {{key:Shift+C}} | Reže oštar žlijeb |
| {{ui:Stisni}} | {{key:P}} | Privlači površinu ka sredini četke |
| {{ui:Ravnaj}} | {{key:T}} | Pritiskuje površinu ka svojoj prosječnoj ravni |
| {{ui:Maska}} | {{key:M}} | Crta masku koja štiti površinu od ostalih četki |

Drži {{key:Ctrl}} dok praviš potez da radiš obrnuto (spuštaj umjesto dizanja, greben umjesto žlijeba, ukloni masku), ili uključi {{ui:Oduzmi}}.

## Veličina i jačina

Veličina četke je u pikselima na ekranu, pa se osjeća isto koliko god zumirao: {{key:[}} i {{key:]}} je smanjuju i povećavaju, a {{key:Shift+[}} i {{key:Shift+]}} mijenjaju njenu jačinu. Panel prikazuje oboje.

Sa olovkom na tabletu, jače pritiskanje čini četku većom i jačom; panel isključuje jedno ili drugo.

## Zrcaljenje, maska i detalj

- {{ui:Zrcali X}} ({{key:X}}) oblikuje obje strane preko crvene ose odjednom, za lica i figure.
- Maska se prikazuje tamnije dok oblikuješ. {{ui:Ukloni masku}} ({{key:Alt+M}}) je skida, {{ui:Obrni masku}} ({{key:Ctrl+I}}) maskira ono što je bilo slobodno i oslobađa ono što je bilo maskirano. Maska se čuva uz mrežu.
- {{ui:Detalj}} dodaje trouglove tamo gdje oblikuješ: ivice duže od veličine postavljene na panelu (pikseli na ekranu) dijele se pod četkom. Treba mu mreža od trouglova, pa traži da prvo napraviš jednu.

Svaki potez je jedan korak poništavanja.

:::note
{{ui:Detalj}} samo dodaje trouglove; ne uklanja one koji su postali sitni. Ponovno mrežiranje (radni prostor Mreža) ponovo izravnava cijelu mrežu.
:::

Vidi i [Uređivanje mreže](topic:mesh-edit), [Mreže](topic:meshes) i [Modifikatori na mreži](topic:modifiers).
