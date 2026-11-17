---
title: Send massing til BimCraft
summary: Overfør skub/træk-massing til BimCraft som massingmuligheder, med etager, fodaftryk, bruttoetageareal og volumen beregnet ud fra hvert legeme.
keywords: massing, masse, koncept, muligheder, bimcraft, ifc, bim, skub træk, etager, planer, bruttoetageareal, fodaftryk, volumen, send, overdrag, bygningsmasse, fase 2
from: 73c51f3f
---

## Hvad du skal gøre

Drej de blokke, du har modelleret med skub/træk, til massingmuligheder, som BimCraft forstår, så konceptet kan fortsætte som en bygningsmodel.

## Før du starter

Gør hver masse til en **gruppe** eller **komponent**, og navngiv den. Hver en bliver til én mulighed. Løs geometri sendes ikke.

## Send den

1. Vælg de grupper, der skal sendes. Er intet valgt, sendes alle grupper og komponenter på øverste niveau.
2. Vælg {{ui:Eksportér}}, og derefter {{ui:Massing til BimCraft…}}.
3. Skriv {{ui:Navn på valgsæt}} og {{ui:Etagehøjde}}.
4. Kontrollér listen: hver muligheds etager, fodaftryk, bruttoetageareal og volumen.
5. Vælg **Send til BimCraft** for at åbne BimCraft i en ny fane med mulighederne, eller {{ui:Gem som IFC}} for at downloade filen og åbne den dér selv.

I BimCraft står mulighederne under "Massingmuligheder i modellen", hvor én kan gøres til den aktuelle mulighed og udvikles til vægge og gulve.

## Hvordan et legeme bliver til en masse

- **Etager** er legemets højde divideret med etagehøjden, afrundet og mindst én. Etagerne deler derefter legemets højde ligeligt, så en 10 m blok med 3 m etager har 3 etager på 3,33 m.
- **En etages areal** er arealet af legemets egen vandrette snit på denne etages niveau. En blok, der trækker sig tilbage, har mindre øvre etager, og bruttoetagearealet er deres sum.
- **Fodaftrykket** er konturen af snittet lige over legemets fod.
- **Volumen** er legemets eget.

I IFC-filen er hver mulighed et bygningselement-proxy (fodaftrykket hævet til legemets højde) med ét rum pr. etage, der bærer etagens bruttoareal. Alle mulighederne deler én bygning med lige så mange etager, som den højeste mulighed har.

## Forenklede former

En almindelig lodret blok går over præcis som modelleret. Alt andet sendes stadig, og listen siger, hvorfor dens form er forenklet:

- **Ikke alle dens etager har samme størrelse som fodet** (den trækker sig tilbage eller skråner): massen i BimCraft er fodkonturen hævet til hele højden, men etagearealerne og volumen er legemets egne.
- **Legemet er ikke lukket**: etager, hvis snit ikke kan lukkes, måles ikke og tæller som intet. Luk legemet ({{ui:Objektinfo}} siger "Solid: Ja") for at få de fulde tal.
- **Fodet har mere end én kontur**: den største bruges som fodaftryk.

## Godt at vide

- {{ui:IFC til BimCraft (.ifc)}} er en anden eksport: den sender kun former og navne, uden etager eller arealer.
- Intet uploades. Filen overdrages til BimCraft-fanen på denne computer.
