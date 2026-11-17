---
title: Tilføj en render-motor med et add-on
summary: Hvad et add-on kan tilføje til Render-dialogens motorliste, den tilladelse det skal bruge for at køre et program, og hvad Studio kontrollerer og spørger om.
keywords: add-on, addon, motor, render-motor, udvikler, engine.run, tilladelse, program, script, signeret, studio, api
from: cd7a39ba
---

Et add-on (Indstillinger › Add-ons) kan tilføje en motor til motorlisten i {{ui:Render et billede…}}. Den fulde tekst for add-on-forfattere er afsnit 16 i add-on-specifikationen. Kort fortalt:

- Add-on'en registrerer en motor med et id, der starter med sit eget, et navn, valgfri indstillinger og **enten** et program, der skal køres, **eller** en funktion i JavaScript, der tegner billedet.
- En motor, der kører et program, kræver tilladelsen **`engine.run`**, som vises før installation og i Indstillinger. Den kører kun i Studio; i browseren vises den som en fil, der skal gemmes.
- Add-on'en navngiver programmet (et simpelt filnavn, aldrig en shell), et script, der er **inde i den signerede add-on**, og argumenter lavet af pladsholdere og simple ord. Studio finder programmet, eller beder dig pege på det én gang.
- Første gang en add-on kører et program, **spørger Studio dig i sin egen dialog**: hvilken add-on, hvilket program, og at et script kan gøre alt, programmet kan. Tillad det kun for en add-on, du stoler på. Dit svar huskes for den add-on og det program.
- Pakken (scenen som USD og en indstillingsfil, med glTF-filen, når add-on'en beder om den) og add-on'ens script lægges i en ny midlertidig mappe. Programmet kører dér, og billedet kommer tilbage markeret med add-on'ens motornavn.

:::note
Add-ons kan kun tilføje render-motorer fra add-on-API 1.4. Et gennemarbejdet eksempel for en open source-kommandolinjerenderer findes i dets eget repository; det er endnu ikke kørt i den renderer.
:::
