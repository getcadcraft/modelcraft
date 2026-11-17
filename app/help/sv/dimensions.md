---
title: Mät och ändra storlek på det du ritat
summary: Sätt mått mellan hörn, på bågar och cirklar, eller mellan två kanter; skriv en ny längd för att ändra modellens storlek. Skriv om en kants längd eller en grupps bredd, djup och höjd i Entitetsinfo.
keywords: mått, måttsättning, ändra storlek, ändra storlek, redigera storlek, längd, bredd, djup, höjd, töj, drivande mått, annotera, mät, i efterhand, radie, diameter, vinkel, vinkelmått, båge, cirkel, R, Ø
from: a1f815ec
---

Storlekar i ModelCraft är inte fasta när något är ritat. Ett mått visar en längd på modellen, och om du skriver en ny längd i det ändras modellen så att den passar. Du kan också skriva om en kants längd, eller en grupps bredd, djup och höjd, i {{ui:Entity info}}.

## Placera ett mått

1. Tryck {{key:D}}, eller klicka {{ui:Dimension}} i verktygsfältet.
2. Klicka på ett hörn att mäta från. Det fångar hörn, mittpunkter och kanter, som vid ritning.
3. Klicka på det andra hörnet.

   Eller klicka en gång på en **kant** (tipset säger "On edge") för att mäta hela kanten med ett klick.
4. Flytta pekaren dit måttlinjen ska gå, och klicka. Du kan också skriva förskjutningen, till exempel `0.5m`, och trycka {{key:Enter}}.

   Måttlinjen ligger plant för en plan kant, om du inte tittar på den från sidan. För en upprätt kant ligger den i det upprätta plan som bäst vetter mot dig.

Statusfältet säger "Dimension 4 m." Mått visar sin längd i modellens enhet och uppdateras när du byter enhet i väljaren.

## Radie, diameter och vinkel

Samma verktyg {{ui:Dimension}} mäter runda saker och vinklar:

- **En båge:** klicka på bågen. Tipset säger {{ui:Radius}}. Flytta pekaren dit texten ska stå och klicka: måttet läser **R 1.5 m**.
- **En cirkel:** klicka på cirkeln. Du får en **diameter** (**Ø 3 m**) med en linje över cirkeln genom dess mittpunkt. Polygoner fungerar likadant, med sina hörn på cirkeln.
- **Vinkeln mellan två kanter:** klicka på en kant, klicka sedan på en andra kant som möter den i ett hörn (medan du är över den säger tipset {{ui:Angle between the edges}}). Flytta sedan in i vinkeln du vill ha och klicka. Inne i hörnet får du vinkeln mellan kanterna; flytta till ena sidan och du får vinkeln bredvid (till exempel 150° i stället för 30°). Hur långt från hörnet du klickar avgör var bågen går; eller skriv det avståndet.

För att byta en radie till en diameter eller tillbaka, markera måttet och välj i {{ui:Show as}} i {{ui:Entity info}}.

**Ändra storlek med dem:** skriv en ny radie eller diameter direkt efter att du satt en, eller markera den senare och skriv. Bågen eller cirkeln behåller sin mittpunkt och ändrar storlek; en yta den begränsar (en skiva, änden av ett spår) ändras med den. Två saker mäter bara:

- **Ett vinkelmått** ändrar aldrig modellen. För att ändra en vinkel, rotera kanterna med {{ui:Rotate}}.
- **Cirkeln i änden av en cylinder** (en cirkel du drog ut med {{ui:Push/pull}}) kan inte ändras i storlek från sitt mått, eftersom dess sidor då också skulle behöva ändras. Skala cylindern i stället, kring dess axel.

## Ändra modellens storlek med ett mått

Direkt efter att du satt ett mått, skriv en ny längd och tryck {{key:Enter}}: `6m`, `12'`, `3500` i en millimetermodell. Modellen ändras till den storleken.

Senare, när som helst:

1. Med {{ui:Select}} klickar du på måttets text eller linje. {{ui:Entity info}} säger **Dimension** och visar dess {{ui:Length}}.
2. Skriv den nya längden och tryck {{key:Enter}}. Du kan skriva direkt i värderutan, eller i rutan {{ui:Length}} i {{ui:Entity info}}.

### Vad som flyttas

Det andra hörnet du klickade flyttas, och allt bortom det:

- **Båda hörnen på ett stycke** (en lådas bredd, en väggs höjd): sidan vid det rörliga hörnet glider ut eller in, och ytor som hänger ihop med den töjs. En låda förblir en sluten solid, och allt som sitter helt på den sidan, till exempel en fönsterkomponent, rör sig med den.
- **Hörnen på två separata stycken** (glappet mellan två lådor): det rörliga hörnets stycke flyttas helt, och glappet ändras.
- **Det rörliga hörnet inne i en grupp eller komponent** som det andra hörnet inte är i: hela gruppen flyttas.
- **Båda hörnen inne i samma grupp eller komponent**: den töjs inuti. En komponent ändras överallt där den är placerad, som redigering alltid gör.

För att ändra vilken ände som flyttas, markera måttet och välj i {{ui:Moves}} i {{ui:Entity info}}:

| Val | Vad som händer |
|---|---|
| {{ui:Second end}} (standard) | Änden du klickade som andra flyttas |
| {{ui:First end}} | Änden du klickade som första flyttas |
| {{ui:Both ends (centered)}} | Varje ände flyttas hälften av ändringen, så mitten står kvar |

### När en storleksändring avvisas

ModelCraft ändrar ingenting och säger varför i statusfältet:

- "a face would bend out of its plane": måttet går snett över formen. Mät längs en kant, eller längs röd, grön eller blå.
- "a face would shrink to nothing or turn inside out": den nya längden är för kort för formen.
- "the end that moves is not on a corner of the model": den änden placerades i tomt utrymme eller på mitten av en kant. Välj den andra änden i {{ui:Moves}}, eller placera måttet på två hörn.
- "a length must be above zero".

Varje storleksändring är ett steg: {{key:Mod+Z}} ångrar den.

## Skriv om en storlek i Entitetsinfo

Du behöver inte alltid ett mått:

- **En kant:** markera den. Dess {{ui:Length}} i {{ui:Entity info}} är en ruta du kan skriva i. Att skriva en längd i värderutan fungerar också. Änden längre fram längs röd, sedan grön, sedan blå flyttas, och det som är kopplat till den töjs. Om du till exempel skriver om den främre nedre kanten på en låda blir lådan bredare åt höger.
- **En grupp eller komponent:** markera den. {{ui:Width (red)}}, {{ui:Depth (green)}} och {{ui:Height (blue)}} är rutor. Dess bortre sida (höger, bak, topp) flyttas. Dessa är gruppens egna axlar, före eventuell rotation du gett den.

Tryck {{key:Enter}} för att tillämpa, eller {{key:Esc}} för att sätta tillbaka det gamla värdet.

## Mått följer modellen

Ett mått är fäst vid de två hörn där det sattes (en vinkel: vid sitt hörn och de yttre ändarna av sina två kanter; en radie eller diameter: vid sin båge eller cirkel). Flytta, push/pull eller ändra storlek på geometrin, så följer måttet med och visar den nya längden. Det förblir fäst när du gör geometrin till en grupp eller komponent.

Om en ände placerats någonstans som inte är ett hörn (på en yta, eller i tomt utrymme), eller om dess hörn raderas, står den änden kvar där den var. Måttet mäter fortfarande, men kan bara ändra storlek från sin andra ände.

## Ta bort mått

- Ett mått: markera det och tryck {{key:Delete}}, eller klicka på det med {{ui:Eraser}}.
- Alla mått: med inget markerat, klicka {{ui:Delete all dimensions}} i {{ui:Entity info}}.

Mått sparas i `.modelcraft`-filen. De exporteras inte till andra format, som bara bär 3D-modellen. En fil med mått öppnas fortfarande i en äldre ModelCraft, utan dem.
