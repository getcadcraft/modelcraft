---
title: Animeer de camera en objecten, en render een video
summary: Zet sleutels voor de camera en voor groepen en componenten op een tijdlijn, speel ze af in de weergave, en render de animatie naar een WebM-video met de hemel, zon en materialen van de renderer.
keywords: animatie, animeren, tijdlijn, keyframe, sleutels, sleutelbeeld, toets, cameraroute, rondvliegen, doorloop, wandeling, video, film, webm, video renderen, beelden, beeldsnelheid, afspeelkop, automatische sleutel, versnelling, gelijkmatig, vasthouden, scènes, png-reeks, beweging
from: d3a58249
---

De **tijdlijn** verplaatst de camera en elke groep of component in de tijd. U zet **sleutels** (waar iets op een bepaald moment staat); ModelCraft verplaatst het soepel van sleutel naar sleutel. Speel het af in de weergave, en render het daarna naar een video met dezelfde hemel, zon, materialen en lampen als [een gerenderde afbeelding](topic:render).

## De tijdlijn openen

Klik op {{ui:Weergaven}} in de groep {{ui:Camera}}, en daarna op {{ui:Animatietijdlijn}}. De tijdlijn opent onder de weergave: de bedieningsknoppen bovenaan, dan een rij **Camera** en een rij voor elke groep of component die beweegt. De ruiten zijn sleutels; de rode lijn is de **afspeelkop**, het moment dat in de weergave getoond wordt.

:::touch
Op een telefoon opent de tijdlijn ook onder de weergave. De bedieningsknoppen staan op één rij: veeg zijwaarts om de rest te bereiken; de knop die de tijdlijn sluit blijft aan het einde staan.
:::

Sleep de schuif (of klik in een rij) om de afspeelkop te verplaatsen. {{ui:Afspelen}} speelt vanaf de afspeelkop af en verandert in {{ui:Pauzeren}} terwijl het speelt; klik er nog eens op om te stoppen waar het staat. {{key:Space}} doet hetzelfde terwijl de tijdlijn open is (met de tijdlijn gesloten is Space nog steeds Selecteren). {{ui:Vorige sleutel}} en {{ui:Volgende sleutel}} springen tussen sleutels. Met een eigen menustijl kan afspelen en pauzeren een andere toets krijgen: {{ui:Instellingen}}, daarna de menu's, sneltoetsen en muis, het commando *Animatie afspelen of pauzeren*.

## De camera verplaatsen

1. Zet de afspeelkop waar de shot begint (0 s), stel de weergave in en klik op {{ui:Camerasleutel}}.
2. Zet de afspeelkop later (bijvoorbeeld 4 s), draai, verschuif of loop met de weergave naar de volgende positie, en klik opnieuw op {{ui:Camerasleutel}}.
3. Voeg zoveel sleutels toe als u wilt, en klik daarna op {{ui:Afspelen}}.

De camera gaat soepel door elke sleutel en start en eindigt in rust.

:::tip
Heeft u al [scènes](topic:scenes)? {{ui:Uit scènes}} maakt het pad van de camera ervan: hij blijft bij elke scène staan en beweegt dan naar de volgende. Als de tijdlijn helemaal geen sleutels heeft, doet {{ui:Video renderen…}} dit zelf, dus twee scènes of meer zijn genoeg voor een doorloopvideo.
:::

## Een groep of component verplaatsen

1. Selecteer de groep of component (alleen hele groepen en componenten bewegen; [maak eerst een groep](topic:groups-components)).
2. Klik op 0 s op {{ui:Sleutel van selectie}}.
3. Zet de afspeelkop later, [verplaats, draai of schaal](topic:move-copy) de groep naar waar hij moet staan, en klik opnieuw op {{ui:Sleutel van selectie}}.

Hij schuift, draait en groeit tussen zijn sleutels. Draaiingen nemen de korte weg.

**Automatische sleutel** bespaart de klik uit stap 3: zolang {{ui:Automatische sleutel}} aan staat, krijgt een geselecteerde groep of component die u verplaatst, draait of schaalt zelf een sleutel op de afspeelkop (en de eerste keer een sleutel op 0 s waar hij stond).

:::note
Een geanimeerde groep verplaatsen zonder sleutel blijft alleen werken tot de afspeelkop beweegt: de volgende keer dat u afspeelt of schuift, gaat hij terug waar zijn sleutels hem zetten. De statusbalk meldt dat. Druk op {{ui:Sleutel van selectie}} om het te behouden.
:::

## Sleutels wijzigen

- **Kies een sleutel** door op zijn ruit te klikken: de afspeelkop gaat ernaartoe.
- **Verplaats een sleutel** door zijn ruit langs zijn rij te slepen, of met {{key:Left}} en {{key:Right}} (één beeld; met {{key:Shift}}, tien).
- **Verwijder** met {{ui:Sleutel verwijderen}} (de gekozen sleutel, of elke sleutel op de afspeelkop) of met {{key:Delete}} op een gekozen ruit.
- **Hoe hij verdergaat**, voor de gekozen sleutel: {{ui:Gladmaken}} (een kromme door de sleutels eromheen), {{ui:Gelijkmatig}} (een rechte lijn in één snelheid), {{ui:Langzaam in- en uitgaan}} (komt tot rust bij deze sleutel) of {{ui:Vasthouden}} (blijft staan tot de volgende sleutel).
- **Lengte (s)** stelt in hoe lang de animatie is; een sleutel die na het einde wordt gezet, maakt hem langer. Om hem korter te maken, verplaatst of verwijdert u eerst de sleutels na het nieuwe einde.
- De **×** op de rij van een groep stopt het animeren ervan.

De tijdlijn heeft eigen {{ui:Ongedaan maken}} en {{ui:Opnieuw}}: de ongedaan-maken van het model ({{key:Mod+Z}}) verandert het model, niet de sleutels. De animatie wordt opgeslagen in het `.modelcraft`-bestand. Het sluiten van de tijdlijn zet bewegende groepen terug in hun eerste houding.

## De video renderen

1. Klik op de tijdlijn op {{ui:Video renderen}} (of op {{ui:Exporteren}} › {{ui:Video renderen…}}).
2. Kies de {{ui:Afmeting}}, de {{ui:Beeldsnelheid}}, de {{ui:Kwaliteit van elk beeld}} en het {{ui:Bestand}}.
3. Klik op {{ui:Video renderen}}. Elk beeld verschijnt zodra het gemaakt is, met de resterende tijd.
4. Klik, als het klaar is, op {{ui:Video opslaan}}.

{{ui:Stoppen}} (of {{key:Esc}}) stopt vroegtijdig; {{ui:Video opslaan}} bewaart daarna de al gemaakte beelden als kortere video.

De hemel, zon, materialen, lampen en helderheid zijn die welke ingesteld zijn in {{ui:Een afbeelding renderen…}}: stel ze daar eerst in, en controleer een stilstaand beeld. Elk beeld wordt op deze computer gerenderd; er wordt niets geüpload.

| Instelling | Wat het doet |
|---|---|
| {{ui:Afmeting}} | 480p, 720p HD, 1080p Full HD, of de eigen vorm van de weergave (tot 1920 pixels breed) |
| {{ui:Beeldsnelheid}} | 24, 25, 30 of 60 beelden per seconde. Dubbel zoveel beelden duren dubbel zo lang |
| {{ui:Kwaliteit van elk beeld}} | {{ui:Snel}} (4 doorgangen), {{ui:Concept}} (16) of {{ui:Goed}} (64): meer doorgangen geven gladdere schaduwen en randen |
| {{ui:Bestand}} | {{ui:WebM-video}}, {{ui:MP4-video (H.264)}} waar de browser die kan schrijven, of {{ui:PNG-afbeeldingen, één per beeld (ZIP)}} voor videobewerkers (en voor browsers zonder videocodering) |

:::tip
Een video van 10 seconden op 30 beelden per seconde is 301 beelden. Probeer eerst {{ui:Snel}} op 480p om de beweging te controleren, en render daarna {{ui:Concept}} of {{ui:Goed}} op een grotere afmeting.
:::

WebM speelt af in browsers en VLC, en videobewerkers zetten het om. {{ui:MP4-video (H.264)}} wordt aangeboden waar de browser het kan schrijven. {{ui:Video renderen}} gebruikt de snelle renderer; om elk beeld met path tracing te renderen, kiest u {{ui:Deze animatie aan de wachtrij toevoegen}} in hetzelfde venster: de beelden worden gerenderd in de [renderwachtrij](topic:render#the-render-queue), die WebGPU nodig heeft.

:::firefox safari
Een video renderen heeft een browser nodig die zelf video codeert (WebCodecs): recente versies van Chrome, Edge, Firefox en Safari 17 doen dat. Zonder dat kiest u {{ui:PNG-afbeeldingen, één per beeld (ZIP)}}.
:::

## Let op

- Alleen hele groepen en componenten bewegen. Vlakken, randen, de tijd van de zon en de stijl veranderen nog niet in de tijd.
- {{ui:Animatie exporteren}} onder [Scènes](topic:scenes) legt de weergave nog steeds vast zoals hij op het scherm staat, in real time; {{ui:Video renderen}} rendert elk beeld met hemel, schaduwen en materialen.
