---
title: Se modellen på plats med en Android-telefon (AR)
summary: Håll upp en Android-telefon med Chrome och se modellen i full storlek över kameran, inriktad mot byggnaden med två punkter du står vid, med en röntgenlins och en snabb kontroll vid nästa besök. För att titta, inte för utsättning.
keywords: ar, förstärkt verklighet, telefon, android, chrome, webxr, på plats, plats, kamera, full storlek, röntgen, rikta in, linjera, kontrollera igen, arcore
from: 0f43b50b
---

{{ui:View on site (AR, phone)}} i menyn {{ui:Views}} visar modellen i sin verkliga storlek över telefonens kamera. Det fungerar på en **Android-telefon med Chrome**, på en säker (https) sida, där telefonen stöder AR. På en iPhone eller iPad, en dator, eller en Android-app som bara visar en webbsida säger objektet varför det inte kan starta; använd 3D-vyn där, eller öppna den här sidan i Chrome på telefonen.

**En telefon är till för att titta.** Mät, sätt ut eller skär inget utifrån det skärmen visar: telefonen driver när du går, och pekfelet växer med avståndet från de två punkter du riktade in dig mot (några centimeter nära dem, mer längre bort). Inget här är lantmäteriklassat.

## Rikta in modellen

1. Öppna modellen på telefonen och välj {{ui:View on site (AR, phone)}}. Tillåt kameran.
2. Panelen längst ner anger första punkten (ett markhörn på modellen). Stå där på platsen, sikta den gröna ringen mot marken och tryck {{ui:Place point}}.
3. Gå till den andra punkten, minst en halv meter bort (ju längre isär, desto bättre passning), och gör likadant.
4. Modellen visas i full storlek, vriden och flyttad så att den passar de två platserna. Panelen anger hur väl de två punkterna stämmer överens.

{{ui:Start over}} rensar punkterna. Inriktningen sparas i modellfilen, så nästa gång du öppnar modellen på plats startar den inriktad.

## Röntgenlins

{{ui:X-ray lens}} visar hela modellen inuti en låda framför telefonen (ungefär en och en halv meter bred och tre meter djup) och bara ett svagt spöke av den annars, så att du kan se vad som finns bakom en vägg utan att förlora den riktiga väggen.

## Nästa besök

Stå vid första punkten och tryck {{ui:Re-check}}, och sedan {{ui:Place point}}. Under 5 centimeter av behålls inriktningen. Upp till en halv meter av flyttas modellen med skillnaden. Mer än så, och panelen ber dig peka ut de två platserna igen.

## Lämna

{{ui:Leave AR}} avslutar sessionen. Kamerabilden stannar i webbläsaren: ingenting laddas upp.
