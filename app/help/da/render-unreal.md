---
title: Send scenen til en spilmotor
summary: Studio kan skrive scenen ind i et Unreal Engine-projekt og holde den i takt ved hvert afsend; dine egne rettelser ligger i et lag, som CadCraft aldrig skriver. Plug-in'et, der åbner det, er endnu ikke udgivet.
keywords: unreal, unreal engine, spilmotor, link, send, usd stage, projekt, live, cine camera, renderkø til film
from: 9a765cc2
---

I CadCraft Studio kan listen Engine indeholde et **link** til et Unreal Engine-projekt. Kun én vej: fra CadCraft til Unreal.

## Send scenen

1. Vælg Unreal-posten i listen Engine. Første gang beder Studio dig vælge dit projekts mappe (den med filen `.uproject`); den husker den.
2. Klik på {{ui:Send}}. Studio skriver `CadCraft/<filnavn>/` i projektet: scenen som en USD-fil, indstillingsfilen, lysprofiler og to små lagfiler.
3. Ændr modellen, gem og send igen. Kun scenen og indstillingsfilen erstattes.

## Dine egne rettelser er i sikkerhed

Stagen, som Unreal åbner, er en lille rodlag, der laves én gang, med to lag under sig: **dit eget** øverst (`<navn>.user.usda`, tomt i starten, skrives aldrig om af CadCraft) og CadCrafts scene nedenunder. Rettelser, du gemmer i dit eget lag, bliver, når scenen sendes igen. Lys og andre aktører, du placerer i Unreal-niveauet, ligger uden for stagen og berøres heller ikke.

## Uden Studio

I browseren, eller på en computer, hvor Studio ikke finder Unreal, vælg **Unreal-projektmappe (.zip)** i listen Engine og klik på {{ui:Render}}. Den gemmer den samme mappe som en zip-fil: pak den ud i dit projekts mappe `CadCraft`. Lad **Medtag stage-filerne** være slået til første gang; slå den fra ved senere gemninger, så zip-filen kun indeholder scenen og indstillingsfilen, og dit eget lag aldrig erstattes.

:::note
Unreal-plug-in'et, der åbner stagen, anvender solen, lamper, kameraer og eksponering, følger hvert afsend og renderer et kamera, er **endnu ikke udgivet** og er ikke kørt i Unreal. Indtil da lægger Send filerne i projektet, og Unreals egne USD-værktøjer kan åbne dem. Windows er første system; macOS følger.
:::
