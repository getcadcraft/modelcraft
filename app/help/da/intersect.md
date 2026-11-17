---
title: Skær flader
summary: Tegn linjerne, hvor flader skærer hinanden, så du kan skubbe, slette eller male stykkerne.
keywords: skær, skær flader, skær med model, skær med valg, udskær, åbning, hul, sammenføj, linjer hvor flader krydser, boolesk
from: 6bc58526
---

Når én form går gennem en anden, tegner ModelCraft ikke linjen, hvor deres flader mødes: de overlapper bare. **Skær** tegner disse linjer som kanter, så fladerne deles der. Så kan du skubbe/trække, slette eller male stykkerne.

Begge kommandoer findes under {{ui:Rediger}} › {{ui:Mere}}.

## Skær med model

Skærer det, du vælger, mod **hver flade på skærmen**.

Hvis en bjælke (en gruppe) går gennem en væg (en anden gruppe), og du vil have en åbning i væggen:

1. Dobbeltklik på væggen for at åbne den, og vælg alle dens flader ({{key:Ctrl+A}}).
2. {{ui:Rediger}} › {{ui:Mere}} › {{ui:Skær med model}}.

Bjælkens kontur tegnes på begge sider af væggen som to nye flader. Skub en af dem gennem væggen for at lave åbningen, og luk derefter væggen.

## Skær med valg

Skærer de valgte flader, grupper og komponenter **kun mod hinanden**. Vælg mindst to.

## Hvor linjerne går

Linjerne tegnes altid i den **åbne kontekst**: i modellen, når ingen gruppe er åben, eller i den gruppe, du redigerer. Grupper og komponenter, der ikke er åbne, ændres ikke. Så for at skære en grups flader, åbn den først, som i eksemplet ovenfor.

## Ting at vide

- Flader i samme plan skæres ikke.
- Linjer, der lukker en løkke på en flade, laver en ny flade, som tegnede linjer gør.
- Hver skæring er ét trin, du kan fortryde. Hvis intet krydser, ændres intet.
- For lukkede former gør [massive legeme-værktøjerne](topic:solids) (Union, Subtract) hele jobbet i ét trin.
