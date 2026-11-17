---
title: Gör en modell redo för 3D-utskrift
summary: Kontrollera att en modell är sluten och vetter åt rätt håll, se dess storlek, bas och överhäng, åtgärda det som är fel och ladda ner den som STL eller 3MF för din slicer.
keywords: 3D-utskrift, utskrift, skrivare, skriv ut, slicer, stl, 3mf, vattentät, sluten, manifold, solid, hål, ut och in, överhäng, stöd, bas, bädd, millimeter, exportera, åtgärda, reparera, urholka, bäddstorlek, nybörjare, väggtjocklek, utskriftsverktyg
from: 948e19af
---

En 3D-skrivares slicer behöver en sluten form: inga hål, varje yta pekar utåt, inget går igenom sig självt. {{ui:Exportera}} › {{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}} letar efter just det innan du laddar ner filen.

## Kontrollera och ladda ner

1. Markera det du vill skriva ut: en eller flera grupper eller komponenter, eller vissa ytor. Om inget är markerat skrivs allt som visas ut.
2. Klicka på {{ui:Exportera}} i gruppen {{ui:Fil}}, och sedan på {{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}}.

   Dialogen börjar med en rad: "Redo för utskrift", hur många saker som ska åtgärdas före utskrift, eller hur många som bör granskas först. Varje problem har tre delar: vad som är fel, varför det spelar roll och vad du ska göra. Sedan kommer storleken i millimeter, volymen, antalet trianglar och din skrivarbädd.

3. Om dialogen listar saker att åtgärda, klicka på {{ui:Åtgärda det som kan åtgärdas}} (se nedan). Kontrollen körs om av sig själv.
4. Klicka på {{ui:Ladda ner 3MF}} eller {{ui:Ladda ner STL}}.

Det som skrivs ut är det du ser: dolda ytor, dolda grupper och komponenter, och allt på en dold tagg lämnas utanför. Storlekar anges alltid i millimeter, den enhet slicers förväntar sig, oavsett vilken enhet modellen visar.

:::tip
Föredra 3MF när din slicer läser det: det behåller färgerna och enheterna. STL har varken det ena eller det andra, och slicers antar millimeter.
:::

## Vad kontrollen letar efter

Dessa stoppar en utskrift eller förstör den, och får dialogen att säga "Inte redo för utskrift":

| Problem | Vad det betyder | Vad du ska göra |
|---|---|---|
| En yta på bara ena sidan | Ett hål: en kant har en yta på ena sidan och ingenting på den andra | Rita den saknade ytan (en linje över gapet stänger ofta det), eller använd {{ui:Åtgärda}} (nedan) |
| Delad av tre eller fler ytor | Ytor möts i en fena eller en vägg inuti en solid | Radera den inre ytan |
| Ytor som vetter åt motsatta håll | Vissa ytor pekar in, några ut | Markera ytorna som pekar in och klicka på {{ui:Vänd ytan}} i {{ui:Entitetsinfo}} |
| Ut och in | En hel sluten del pekar inåt | Markera dess ytor och vänd dem |
| Går igenom sig själv | En del viks genom sig själv | {{ui:Redigera}} › {{ui:Mer}} › {{ui:Skär mot modellen}}, och radera sedan det som är inuti. Se [Skär ytor](topic:intersect) |

Dessa är varningar: modellen skrivs ut, men titta först.

- **Separata delar överlappar**, eller **möts yta mot yta**: slicers slår vanligtvis ihop dem till en. För en renare fil, foga ihop dem med {{ui:Solider}} › {{ui:Union}}. Se [Solidverktyg](topic:solids).
- **Inget ligger plant i botten**: vrid modellen så att en yta vilar på bädden, annars lägger slicern till stöd eller en flotte.
- **Lutar utåt mer än 45° från lodrätt**: de ytorna behöver stöd. Dialogen säger hur stor del av ytan det gäller.
- **Under 1 mm över**: troligen modellerad i fel enhet. Kontrollera enheten i statusfältet.

En ihålig del (en sluten skal inuti en annan) är bra: dess ytor pekar in i det ihåliga, och dess volym dras av.

## Åtgärda problemen

Under **Var problemen finns** namnger dialogen varje grupp eller komponent som har något fel (lösa ytor som inte ligger i en grupp listas som "Ytor utanför grupp"), med vad som är fel i den. En komponent som placerats flera gånger listas en gång: att åtgärda den åtgärdar varje kopia.

- {{ui:Visa}} öppnar den gruppen och markerar kanterna och ytorna som är fel, så att de syns framhävda.
- {{ui:Åtgärda det som kan åtgärdas}} åtgärdar alla på en gång: den stänger hål vars kanter ligger plant, tar bort ytor inuti formen och lösa kanter, och vänder ytor åt rätt håll. Det är ett steg: {{key:Mod+Z}} ångrar det. Kontrollen körs sedan om och visar vad som återstår.

Det den inte kan åtgärda (ett hål vars kanter inte ligger plant, en del som går genom sig själv) stannar i listan med vad du ska göra för hand. {{ui:Reparera}} under **{{ui:Utskriftsverktyg}}** går längre: den stänger hål som inte är plana, tar bort lösa bitar och dubbla ytor, och listar varje åtgärd. Se [Stöd, väggtjocklek, urholkning och reparation](topic:print-tools#repair). Du kan också åtgärda en grupp i taget: markera den och använd sedan {{ui:Visa problem}} och {{ui:Åtgärda}} i {{ui:Entitetsinfo}}. Se [Solidverktyg](topic:solids).

## En ihålig del

{{ui:Urholka}} under **{{ui:Utskriftsverktyg}}** urholkar en del till den väggtjocklek du anger, med avloppshål där du klickar. Se [Urholka](topic:print-tools#hollow).

Du kan också rita urholkningen själv: en sluten grupp inuti delen, som inte rör den, med alla ytor vända så att de pekar in i det ihåliga. Kontrollen räknar den som en urholkning och drar av dess volym; den listas inte som något att åtgärda.

## Din skrivares bädd

Välj din skrivares bäddstorlek i {{ui:Inställningar}} › {{ui:ModelCraft}} › {{ui:3D-skrivarens byggplatta}}. Kontrollen varnar sedan när modellen är större än bädden, vänd åt vilket håll som helst. Se [Inställningar](topic:settings#3d-printer-bed).

## Utskriftsverktyg

Under dialogens resultat öppnar **{{ui:Utskriftsverktyg}}** {{ui:Förhandsvisning av stöd}} (var stöden hamnar och ungefär hur mycket), {{ui:Väggtjocklek}} (väggar som är för tunna för att skrivas ut), {{ui:Urholka}} och {{ui:Reparera}}. Se [Stöd, väggtjocklek, urholkning och reparation](topic:print-tools). {{ui:Dela för utskrift}} delar en modell som är för stor för bädden i bitar med kopplingar och numrerade skarvar: se [Dela en stor modell för utskrift](topic:print-split).

## Ej kontrollerat

Kontrollen skivar inte: detaljer för små för ditt munstycke och de riktiga stöden är din slicers ansvar. Se [Finns inte ännu](topic:not-built-yet#3d-printing).
