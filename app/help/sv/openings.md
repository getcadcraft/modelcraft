---
title: Skär en öppning genom en vägg
summary: Rita ett fönster eller en dörr på en vägg med tjocklek och tryck igenom den, så att väggen får ett riktigt hål.
keywords: fönster, dörr, öppning, hål, vägg, skär, tryck igenom, tomrum, tjocklek, fasad
from: 6b22f32c
---

En öppning kräver en vägg med två sidor: en låda, eller en vägg du gjort genom att dra en lång smal rektangel uppåt. En enskild yta som står för sig själv har inget att trycka igenom till.

## Gör en vägg att öva på

1. Tryck på {{key:R}}, klicka på ett hörn på marken och skriv `6m,0.3m` (eller `20',12"`), tryck sedan på {{key:Enter}}.
2. Tryck på {{key:P}}, klicka på rektangeln och skriv `3m` (eller `10'`), tryck sedan på {{key:Enter}}.

Du har en vägg som är 300 mm (12 in) tjock.

## Rita öppningen

1. Kretsa så att du ser den långa sidan av väggen.
2. Tryck på {{key:R}}.
3. För pekaren över väggens yta och klicka sedan där fönstrets nedre hörn ska hamna. Tipset säger "På yta".
4. Skriv fönstrets bredd och höjd, till exempel `1.2m,1.5m` (eller `4',5'`), och tryck på {{key:Enter}}.

   Fönstret är en egen yta inne i väggytan, som nu har ett hål runt sig.

För att placera den på ett exakt avstånd från hörnet och golvet, använd [hjälplinjer](topic:guides-measure) först: med {{ui:Måttband}} drar du hjälplinjer från väggens nedre och ändkanter, och startar sedan rektangeln där två hjälplinjer korsar (tipset säger "På hjälplinje").

## Tryck igenom

1. Tryck på {{key:P}}.
2. Klicka på fönsterytan och tryck in den i väggen.
3. Flytta tills den stannar vid bakre ytan, och klicka sedan. Eller skriv väggens tjocklek, `300` (eller `12`), och tryck på {{key:Enter}}.

   ModelCraft stannar vid ytan bakom och öppnar den: väggen har nu ett hål rakt igenom, med fyra sidoytor (karmar, överstycke och tröskel) som kläder det. {{ui:Entitetsinfo}} kallar fortfarande väggen en sluten solid när den är grupperad.

Om du trycker in mindre än hela tjockleken får du en försänkning i stället för ett hål.

## En dörr

Rita rektangeln med start på väggens nedre kant (tipset säger "På kant" eller "Ändpunkt"), så att öppningen når golvet. Tryck igenom på samma sätt.

## Många fönster i samma storlek

1. Gör den första öppningen.
2. För de nästa, rita rektanglarna och dubbelklicka sedan på var och en med {{ui:Tryck/dra}}: ett dubbelklick upprepar det senaste avståndet. Se [Tryck och dra](topic:push-pull#repeat-the-last-distance).

## Om den inte skar igenom

- Rektangeln måste ritas **på** väggens yta. Ritades den i luften framför den är den en separat yta: ångra och rita om den, med start på ytan.
- Trycket stannar vid första ytan bakom öppningen. Om något annat står i vägen inne i väggen (en innre yta kvar från tidigare ritning) stannar det där; radera den ytans kanter och försök igen.
- Geometri i en separat grupp skärs inte. Öppna gruppen som innehåller väggen och rita öppningen inuti den.
