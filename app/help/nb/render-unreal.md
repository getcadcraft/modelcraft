---
title: Send scenen til en spillmotor
summary: Studio kan skrive scenen inn i et Unreal Engine-prosjekt og holde den oppdatert ved hver sending; dine egne endringer ligger i et layer som CadCraft aldri skriver til. Tillegget som åpner den er ikke utgitt ennå.
keywords: unreal, unreal engine, spillmotor, link, send, usd-scene, prosjekt, live, filmkamera, renderkø for film
from: 9a765cc2
---

I CadCraft Studio kan Engine-listen holde en **link** til et Unreal Engine-prosjekt. Bare én vei: fra CadCraft til Unreal.

## Send scenen

1. Velg Unreal-oppføringen i Engine-listen. Første gang ber Studio deg velge prosjektmappen din (den med `.uproject`-filen); den husker den.
2. Klikk {{ui:Send}}. Studio skriver `CadCraft/<filnavn>/` inne i prosjektet: scenen som en USD-fil, innstillingsfilen, lysprofiler og to små layer-filer.
3. Endre modellen, lagre og send på nytt. Bare scenen og innstillingsfilen erstattes.

## Dine egne endringer er trygge

Scenen Unreal åpner er en liten rot-layer laget én gang, med to layer under seg: **ditt eget** øverst (`<name>.user.usda`, tomt i starten, skrives aldri om av CadCraft) og CadCraft sin scene under. Endringer du lagrer i ditt eget layer blir værende når scenen sendes på nytt. Lys og andre aktører du plasserer i Unreal-nivået ligger utenfor scenen og berøres heller ikke.

## Uten Studio

I nettleseren, eller på en datamaskin der Studio ikke finner Unreal, velg **Unreal-prosjektmappe (.zip)** i Engine-listen og klikk {{ui:Render}}. Den lagrer samme mappe som en zip: pakk den ut i prosjektets `CadCraft`-mappe. La **Ta med scenefilene** være på første gang; slå det av ved senere lagringer, slik at zip-filen bare inneholder scenen og innstillingsfilen, og ditt eget layer aldri erstattes.

:::note
Unreal-tillegget som åpner scenen, bruker solen, lampene, kameraene og eksponeringen, følger hver sending og rendrer et kamera, er **ikke utgitt ennå** og er ikke kjørt i Unreal. Inntil det er klart, legger Send filene i prosjektet, og Unreals egne USD-verktøy kan åpne dem. Windows er første system; macOS kommer etter.
:::
