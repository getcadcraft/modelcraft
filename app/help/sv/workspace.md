---
title: ModelCraft-skärmen
summary: En rundtur i verktygsfältet, panelerna på varje sida, 3D-vyn och statusfältet, med de namn som står på skärmen.
keywords: skärm, layout, verktygsfält, paneler, disposition, entitetsinfo, stil, scener, statusfält, värderuta, enheter, gränssnitt, rundtur
from: 4a9a4516
---

Uppifrån och ned: appfältet, verktygsfältet, de tre kolumnerna (vänsterpaneler, 3D-vy, högerpaneler) och statusfältet.

## Appfältet

Det smala fältet allra överst hör till varje CadCraft-app. Det har appens namn och version, {{ui:Om ModelCraft}}, skärmlägesknappen och omkopplaren {{ui:Papper}} / {{ui:Modell}}.

- {{ui:Papper}} är det ljusa temat och {{ui:Modell}} det mörka. 3D-vyn byter färger för att passa; din modell ändras inte.
- Skärmlägesknappen (den står först {{ui:Helskärm}}) och {{key:Ctrl+Shift+F}} växlar mellan tre lägen: normalt, helskärm och helskärm med fälten dolda. Med fälten dolda pekar du på skärmens överkant (eller trycker där) för att få tillbaka dem. {{key:Esc}} lämnar helskärm.

:::note
{{key:Ctrl+Shift+F}} använder Ctrl-tangenten på alla datorer, även Mac. På iPhone, där webbläsare saknar helskärm, döljer och visar knappen bara fälten.
:::

## Verktygsfältet

Verktygsfältet är uppdelat i märkta grupper. Håll pekaren över en knapp för att se dess namn och tangent.

Längst till vänster växlar listan {{ui:Arbetsyta}} vad verktygsfältet och högerpanelen är till för: {{ui:Modell}} (tryck/dra-modellering, rundturen nedan), {{ui:Nät}} ([redigera ett nät](topic:mesh-edit)), {{ui:Kurva}} ([kurvobjekt](topic:curves)), {{ui:UV}} ([lägg ut UV](topic:uv)), {{ui:Skulptera}} ([skulptera](topic:sculpt)), {{ui:Skuggning}} ([material gjorda med noder](topic:shading)), {{ui:Animera}} ([animera](topic:animate)) och {{ui:Rendera}} ([rendera i vyn](topic:render#render-in-the-view)).

| Grupp | Knappar |
|---|---|
| Fil | {{ui:Ny}}, {{ui:Öppna}}, {{ui:Spara}}, {{ui:Importera}}, {{ui:Exportera}} (en meny med format) |
| Rita | {{ui:Linje}} ({{key:L}}), {{ui:Rektangel}} ({{key:R}}), {{ui:Cirkel}} ({{key:C}}), {{ui:Polygon}} ({{key:N}}) |
| Ändra | {{ui:Markera}} ({{key:Space}}), {{ui:Tryck/dra}} ({{key:P}}), {{ui:Flytta}} ({{key:M}}), {{ui:Rotera}} ({{key:Q}}), {{ui:Skala}} ({{key:S}}), {{ui:Radergummi}} ({{key:E}}), {{ui:Måttband}} ({{key:T}}) |
| Organisera | {{ui:Komponent}} ({{key:G}}), {{ui:Grupp}} ({{key:Shift+G}}), {{ui:Spräng}} |
| Redigera | {{ui:Ångra}} ({{key:Mod+Z}}), {{ui:Gör om}} ({{key:Mod+Y}}), {{ui:Kopiera}} ({{key:Mod+C}}), {{ui:Klistra in}} ({{key:Mod+V}}), {{ui:Mer}} (en meny: klipp ut, kopiera, klistra in, klistra in på plats {{key:Mod+Shift+V}}, duplicera {{key:Mod+D}}, ta bort, markera allt, avmarkera och tangentstilen) |
| Kamera | {{ui:Orbit}} ({{key:O}}), {{ui:Panorera}} ({{key:H}}), {{ui:Zooma}} ({{key:Z}}), {{ui:Utsträckning}} ({{key:Shift+Z}}), {{ui:Vyer}} (en meny) |

Tangenterna som visas är tryck/dra-tangenterna; om stilen Modellerare är vald i [ModelCraft-inställningar](topic:settings) visar verktygstipsen de tangenterna i stället. Verktyget du använder visas nedtryckt. På en smal skärm rullar verktygsfältet i sidled.

Menyn {{ui:Vyer}} har {{ui:Iso}}, {{ui:Ovanifrån}}, {{ui:Framifrån}}, {{ui:Höger}}, {{ui:Bakifrån}}, {{ui:Vänster}} och {{ui:Underifrån}}, var och en anpassad till modellen, och {{ui:Perspektiv}}, som växlar mellan perspektiv och parallellprojektion.

## 3D-vyn

Mitten av skärmen. De röda, gröna och blå linjerna är axlarna: röd och grön ligger på marken, blå pekar uppåt och **norr är den gröna axeln**. Där de möts är origo.

- När du startar listar ett kort med rubriken ”Börja modellera” de första tangenterna. Det försvinner när du väljer ett ritverktyg eller klickar i vyn.
- Medan ett verktyg arbetar visar vyn **inferensmarkörer**: små färgade former där pekaren fångar (en grön cirkel vid en ändpunkt, en cyan vid en mittpunkt, en röd kvadrat på en kant, en blå romb på en yta). Se [Inferens och fångst](topic:inference).
- Markerade saker blir blå. En yta sedd bakifrån är blågrå.
- När du öppnar en grupp för redigering tonas allt utanför ner, och axlarna flyttas till gruppens egna axlar.
- När en modell har scener visas en rad med scenflikar längs överkanten av vyn.
- Släpp en fil var som helst på vyn för att öppna eller importera den.

## Vänsterpanelerna

**{{ui:Disposition}}** listar grupperna och komponenterna i modellen, nästlade som de är nästlade i modellen. En komponent som används mer än en gång visar hur många gånger, till exempel ”Fönster (4)”.

- Klicka på ett namn för att markera det. Dubbelklicka för att öppna det för redigering.
- **Sök efter namn** (visas när det finns två eller fler grupper) behåller bara raderna vars namn matchar, med de grupper de ligger i. {{key:Esc}} rensar den.
- **Ögat** i slutet av en rad döljer eller visar den gruppen eller komponenten (som {{ui:Redigera}} › {{ui:Mer}} › {{ui:Dölj}} gör). En taggikon betyder att den är dold av sin [tagg](topic:tags).
- **Byt namn direkt:** klicka på en rad, tryck på {{key:F2}}, skriv och tryck på {{key:Enter}} ({{key:Esc}} behåller det gamla namnet).
- **Dra en rad** till mitten av en annan grupps rad för att flytta den in i den gruppen, till överkanten eller nederkanten av en rad för att placera den strax före eller efter den raden, eller till rubriken {{ui:Disposition}} för att flytta den till översta nivån. Den stannar där den är i modellen och behåller sin färg, tagg och namn. En grupp kan inte läggas inuti sig själv. Varje flytt är ett ångrasteg. Se [Ordna om i Dispositionen](topic:groups-components#rearrange-in-the-outliner).
- Medan du redigerar inuti en grupp står det på en rad ”Redigerar: Modell › …” och en knapp {{ui:Stäng grupp}} visas. Den stänger alla öppna nivåer på en gång.

**{{ui:Komponenter}}** listar varje komponentdefinition med hur många kopior som är placerade (”3×”) och en knapp {{ui:Placera}} som lägger till en kopia till där du klickar.

## Högerpanelerna

**{{ui:Entitetsinfo}}** beskriver det som är markerat. Dess rubrik ändras för att säga vad det är:

| Rubrik | Visar | Knappar |
|---|---|---|
| Modell (inget markerat) | Ytor, kanter, grupper, komponenter och hur många som är placerade, hjälplinjer, total storlek | {{ui:Ta bort alla hjälplinjer}} (när det finns hjälplinjer) |
| Yta | Area, antal hål | {{ui:Vänd ytan}} |
| Kant | Längd | inga |
| Grupp eller komponent | Namn (skriv för att byta namn), hur många gånger den är placerad, om den är en sluten solid, dess volym, dess storlek | {{ui:Redigera}}, {{ui:Spräng}}, {{ui:Gör unik}} (en komponent som är placerad mer än en gång), {{ui:Skapa komponent}} (en grupp) |
| Hjälppunkt eller hjälplinje | ingenting | {{ui:Ta bort}} |
| Flera saker | Hur många ytor, kanter, grupper och hjälplinjer, ytornas totala area | {{ui:Skapa komponent (G)}}, {{ui:Skapa grupp (Shift+G)}} |

**{{ui:Stil}}** anger hur modellen ritas: {{ui:Ytor}} ({{ui:Skuggad}}, {{ui:Dolda linjer}}, {{ui:Trådmodell}}, {{ui:Röntgen}}), {{ui:Visa kanter}} och {{ui:Solskuggor}} med solens datum, tid och plats. Se [Stilar och solskuggor](topic:styles-shadows).

**{{ui:Scener}}** sparar vyer: {{ui:Lägg till scen}}, listan över scener samt {{ui:Föregående}}, {{ui:Spela upp}} och {{ui:Nästa}}. Se [Spara vyer som scener](topic:scenes).

## Statusfältet

Längs nederkanten, från vänster till höger:

1. **Tipset**: vad verktyget vill ha härnäst, eller vad pekaren fångar mot (”Ändpunkt”, ”På röd axel”).
2. **Meddelanden**: vad som just hände (”Ångrade tryck/dra.”, ”site.dxf importerades: 1697 kanter på marken, i en grupp.”) eller varför något inte fungerade.
3. **Värderutan**: dess etikett ändras med verktyget ({{ui:Längd}}, {{ui:Mått}}, {{ui:Radie}}, {{ui:Sidor}}, {{ui:Avstånd}}, {{ui:Vinkel}}, {{ui:Skala}}, {{ui:Förskjutning}}). Den visar den levande storleken medan du arbetar och tar emot det du skriver. Se [Skriv exakta mått i värderutan](topic:value-box).
4. **Tangentstilen**: {{ui:Tangenter: Tryck/dra}} eller {{ui:Tangenter: Modellerare}} växlar tangentbordsgenvägar och musknappar på en gång (samma som i [ModelCraft-inställningar](topic:settings)).
5. **{{ui:Fångst}} och {{ui:Kollision}}**: fångst mot punkter, kanter och axlar, och solider som stannar där de rör vid varandra. Överstruket = av. Klicka för att växla. Se [ModelCraft-inställningar](topic:settings).
6. **Enhetsväljaren**: enheten längder visas i. Se [Kom igång](topic:getting-started#check-the-units-first).

## På en smal skärm

Under cirka 760 pixlars bredd (en telefon eller ett smalt fönster) behåller 3D-vyn skärmen. Verktygsfältet är en rad som rullar i sidled, och panelerna öppnas som blad från fältet längst ned på skärmen.
