---
title: Grupper og komponenter
summary: Hold objekter adskilt, rediger én kopi for at ændre dem alle, og brug panelerne Oversigt og Komponenter.
keywords: gruppe, komponent, lav gruppe, lav komponent, eksplodér, gør unik, oversigt, forekomster, kopier, blok, indlejret, rediger gruppe, placér
from: 7cb925f3
---

Løse geometrier i ModelCraft hænger sammen: linjer, der rører hinanden, deler hinanden, og flader, der deler en kant, flytter sig sammen. Det er det, der gør det muligt at tegne på flader, men det betyder også, at en kasse, der tegnes op mod en anden kasse, flettes sammen med den. **Grupper** og **komponenter** holder ting adskilt.

- En **gruppe** omslutter noget geometri, så den opfører sig som ét objekt. Intet udenfor kan hænge fast i den.
- En **komponent** er en gruppe, der kan placeres mange gange. Alle kopier deler det samme indhold: redigerer du én, ændres de alle. Brug komponenter til alt, der gentages: vinduer, søjler, skriveborde, træer.

## Lav en gruppe eller en komponent

1. Vælg geometrien. Et tripelklik på en flade vælger hele det sammenhængende objekt; et vinduestræk vælger alt i boksen.
2. Tryk {{key:Shift+G}} for en gruppe eller {{key:G}} for en komponent. Du kan også klikke på {{ui:Gruppe}} eller {{ui:Komponent}} i værktøjslinjens gruppe {{ui:Organisér}}, eller på {{ui:Lav gruppe (Shift+G)}} eller {{ui:Lav komponent (G)}} i {{ui:Objektinfo}}.

   Statuslinjen siger »Grupperet som Group#1.« eller »Lavede komponent Component#1.«, det nye objekt er valgt, og det vises i {{ui:Oversigt}}.

3. Hvis du vil navngive den, skriv et navn i feltet {{ui:Navn}} i {{ui:Objektinfo}} og tryk {{key:Enter}} eller klik et andet sted.

Hvis du vælger en flade, tager den også sine kanter med. Hvis intet er valgt, siger statuslinjen: »Vælg noget geometri først (træk et vindue, eller tripelklik for at vælge alt, der hænger sammen).«

Du kan også gruppere grupper: vælg flere grupper og tryk {{key:Shift+G}}. {{ui:Oversigt}} viser, hvad der er indlejret i hvad.

:::note
Tasterne svarer til SketchUps standardtaster: {{key:G}} laver en komponent, {{key:Shift+G}} en gruppe.
:::

## Rediger inde i en gruppe eller komponent

1. Dobbeltklik på den (i visningen eller i {{ui:Oversigt}}), eller vælg den og klik på {{ui:Rediger}} i {{ui:Objektinfo}}.

   Resten af modellen tones ud, akserne flytter sig til gruppens egne akser, og {{ui:Oversigt}} viser »Redigerer: Model › Group#1«. Statuslinjen siger »Redigerer Group#1. Esc eller dobbeltklik uden for lukker den.«

2. Tegn, skub/træk, flyt og slet som vanligt. Alt, du gør, bliver i gruppen.
3. Luk den: tryk {{key:Esc}} (to gange, hvis noget er valgt), dobbeltklik på tomt rum, eller klik på {{ui:Luk gruppe}} i {{ui:Oversigt}}.

Mens en komponent er åben, ændres alle dens kopier, mens du arbejder.

## Placér flere kopier af en komponent

- Kopiér den med {{ui:Flyt}} og {{key:Ctrl}} (se [Flyt og kopiér](topic:move-copy)). Hver kopi er endnu en placering af den samme komponent.
- Eller klik på {{ui:Placér}} ved siden af den i panelet {{ui:Komponenter}}, og klik derefter, hvor den skal stå. Dens udgangspunkt, det nederste hjørne af boksen omkring det, du valgte, da du lavede den, lander, hvor du klikker. Værktøjet vender derefter tilbage til {{ui:Vælg}}.

{{ui:Komponenter}} viser, hvor mange kopier der er placeret ("4×"), og {{ui:Oversigt}} viser antallet efter navnet.

## Omarrangér i Oversigt

Træk en række i {{ui:Oversigt}} for at ændre, hvor den hører til. Intet flytter sig i visningen: en gruppe beholder sin plads i modellen.

- **Ind i en gruppe:** slip den midt på en grupperække (rækken får en stiplet kontur). Den kommer ind i gruppen, sidst.
- **I en anden rækkefølge:** slip den på række-kanten øverst eller nederst (en linje vises der). Den placeres lige før eller efter den række, inden for samme gruppe som den række, så det også kan placere den i en gruppe på et valgt sted.
- **Ud på øverste niveau:** slip den på overskriften {{ui:Oversigt}}. Den kommer sidst.

Hvert slip er ét trin: {{key:Mod+Z}} lægger den tilbage. {{key:Esc}} under et træk slipper ingenting. En gruppe kan ikke flyttes ind i sig selv eller ind i en gruppe, den indeholder. Træk er slået fra, mens {{ui:Find efter navn}} har tekst i sig.

:::touch
Hold en finger på en række et øjeblik, og træk den derefter. Et hurtigt stryg ruller listen i stedet.
:::

## Lav én kopi anderledes

Vælg kopien og klik på {{ui:Gør unik}} i {{ui:Objektinfo}} (vises, når komponenten er placeret mere end én gang). Den kopi får sin egen definition, navngivet som originalen med et nyt nummer. Rediger den uden at røre de andre.

## Lav en gruppe om til en komponent

Vælg gruppen og klik på {{ui:Lav komponent}} i {{ui:Objektinfo}}. Den får et nyt navn, f.eks. Component#2, selvom du havde navngivet gruppen; skriv navnet igen i {{ui:Navn}}.

## Eksplodér

Vælg en gruppe eller komponent og klik på {{ui:Eksplodér}} (i værktøjslinjen eller i {{ui:Objektinfo}}). Dens indhold bliver løst geometri på samme sted og hænger fast i det, det rører. Grupper inde i den forbliver grupper.

## Massivt legeme og rumfang

Når du vælger en gruppe eller komponent, viser {{ui:Objektinfo}} **Massivt legeme: Ja**, hvis dens flader lukker uden huller (hver kant deles af præcis to flader), og der ikke er grupper indlejret i den. Så viser den også **rumfanget**. En kasse, en væg med et vindue skåret igennem og en trukket cylinder er massive legemer; en kasse, hvis top er slettet, er det ikke.

## Når den sidste kopi går

Hvis du sletter den sidste kopi af en komponent, fjernes den også fra panelet {{ui:Komponenter}}. {{key:Mod+Z}} bringer den tilbage.

## Ting at vide

- Kopier af en **gruppe**, lavet med {{ui:Flyt}}, deler indhold i denne version, ligesom komponentkopier gør: redigerer du én, ændres de andre. For at gøre én uafhængig, klik på {{ui:Lav komponent}} og derefter {{ui:Gør unik}}. Se [Fejlfinding](topic:troubleshooting#editing-one-group-changed-another).
- Komponenter skærer ikke åbninger i vægge og klæber ikke til flader, og der er ikke noget bibliotek med færdige komponenter. Du laver dine egne eller importerer dem.
- Importerede filer ankommer som en gruppe. Collada-filer beholder deres egne grupper og komponenter inde i den.
