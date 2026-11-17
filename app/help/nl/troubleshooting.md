---
title: Problemen oplossen
summary: Verschijnselen, oorzaken en oplossingen, van een lege 3D-weergave tot imports op de verkeerde maat, met de berichten die ModelCraft toont.
keywords: probleem, storing, fout, werkt niet, leeg, webgl, grafiek, traag, bericht, import mislukt, verkeerde maat, kan niet selecteren, aanraken, toetsen werken niet, verloren werk
from: 6e7394be
---

## De 3D-weergave is leeg

**Verschijnsel:** het midden van het scherm blijft leeg, of toont alleen de achtergrondkleur, en klikken op gereedschappen doet niets.

**Oorzaak:** ModelCraft tekent met WebGL 2, de 3D-grafiek van de browser. Die ontbreekt wanneer de browser oud is, wanneer hardwareversnelling is uitgeschakeld, of wanneer het grafische stuurprogramma is geblokkeerd.

**Oplossing:**

:::chromium
1. Open de instellingen van de browser en zoek naar "grafische versnelling".
2. Zet "Grafische versnelling gebruiken indien beschikbaar" aan en start de browser opnieuw.
3. Staat het al aan, typ dan `chrome://gpu` in de adresbalk (`edge://gpu` in Edge) en zoek "WebGL2" in de lijst. Staat er "disabled", werk dan het grafische stuurprogramma bij.
:::

:::firefox
1. Open **Instellingen**, dan **Algemeen**, en scroll naar "Prestaties".
2. Vink "Aanbevolen prestatie-instellingen gebruiken" uit en vink "Hardwareversnelling gebruiken indien beschikbaar" aan. Start Firefox opnieuw.
3. Mislukt het nog steeds, typ dan `about:support` in de adresbalk en kijk in het gedeelte "Graphics" naar WebGL 2.
:::

:::safari
Werk macOS en Safari bij. Recente versies van Safari hebben WebGL 2 altijd aan. Hebt u experimentele functies gewijzigd onder **Safari**, dan **Instellingen**, dan **Geavanceerd** (of **Feature Flags**), zet ze dan terug.
:::

Op een werkcomputer, een externe bureaublad of een virtuele machine kan 3D-grafiek door beleid zijn geblokkeerd. Probeer een andere computer. Zie [Browsers en computers](common:browsers).

## Toetsen doen niets, of typen in een vak

**Oorzaak:** de toetsenbordfocus staat in een veld van een paneel: de lijst {{ui:Vlakken}} in {{ui:Stijl}}, een zoninstelling, het veld {{ui:Naam}} in {{ui:Entiteitsinformatie}}, of de eenhedenkiezer. Letters en pijltoetsen gaan dan naar dat veld.

**Oplossing:** klik in de 3D-weergave en druk daarna opnieuw op de toets. Toetsen doen ook niets terwijl een dialoogvenster open is.

## Een getal typen doet niets

- **Nog geen richting.** Een getypte lengte gaat de richting die de aanwijzer vanaf de eerste klik aangeeft. Beweeg de aanwijzer een beetje in de gewenste richting en typ dan.
- **Verkeerd moment.** De meeste gereedschappen nemen een getypte waarde pas na de eerste klik: klik eerst op de eerste hoek, het vlak of het punt waarvandaan u verplaatst. {{ui:Cirkel}} en {{ui:Veelhoek}} nemen een aantal zijden vóór de eerste klik.
- **"Typ een lengte zoals 3m, 10'6" of 4m,3m."** ModelCraft kon het niet lezen. Controleer op een decimale komma (`2,5`): gebruik een punt.

## Een vorm begint op de verkeerde plaats op een touchscreen

**Verschijnsel:** met een vinger is de eerste rechthoek goed, maar de volgende rechthoek, cirkel of lijn begint waar uw vorige aanraking eindigde, in plaats van waar u raakte.

**Oorzaak:** een bug in deze versie: op een touchscreen onthoudt het gereedschap het laatste snappunt van het vorige gebaar.

**Oplossing:** tik vóór elke nieuwe vorm opnieuw op de knop van het gereedschap in de werkbalk. Dat start het gereedschap opnieuw, en het eerste punt komt waar u raakt.

## Bewerken van één groep veranderde een andere

**Verschijnsel:** u kopieerde een groep met {{ui:Verplaatsen}} en {{key:Ctrl}}, opende één kopie en bewerkte die, en de andere kopie veranderde ook. Het {{ui:Overzicht}} toont beide met dezelfde naam.

**Oorzaak:** in deze versie maakt een gekopieerde groep een tweede plaatsing van dezelfde groep, zoals bij een component. De knop {{ui:Uniek maken}} wordt alleen aangeboden voor componenten.

**Oplossing:** selecteer de kopie die u wilt wijzigen, klik op {{ui:Component maken}} in {{ui:Entiteitsinformatie}} en daarna op {{ui:Uniek maken}}. Die kopie heeft nu zijn eigen inhoud. Of {{ui:Ontbinden}} hem.

## Duwen/trekken doet niet wat ik verwachtte

- **"Duwen/trekken werkt op een vlak. Klik op een vlak."** U klikte op een rand of lege ruimte. Beweeg de aanwijzer tot het vlak oplicht, en klik dan.
- **Het vlak zit in een groep.** Dubbelklik eerst op de groep om hem te openen.
- **Een venster sneed niet door de muur.** De rechthoek moet op het vlak van de muur getekend zijn, niet ervoor, en de muur moet een achtervlak hebben. Zie [Een opening door een muur snijden](topic:openings#if-it-did-not-cut-through).
- **Twee blokken overlappen zonder samen te voegen.** Volumes die in elkaar zijn geduwd, snijden elkaar niet en voegen zich in deze versie niet samen.

## Een lijn of vorm maakte geen vlak

Een vlak vult zich alleen wanneer de randen een vlakke lus sluiten. Controleer of het laatste punt op het eerste is gesnapt ("Eindpunt"), en of alle randen in één vlak liggen. Een lus die licht uit het vlak ligt, blijft als lijnen staan. Teken een van de randen opnieuw en snap op de hoeken.

## Ik kan een vlak niet selecteren of wissen

- Met {{ui:Selecteren}} neemt een klik dichtbij een rand de rand. Klik dichter bij het midden van het vlak.
- De {{ui:Gum}} pakt geen vlakken. Selecteer het vlak en druk op {{key:Delete}}, of wis een van zijn randen.
- Hoort het bij een groep of component, dan selecteert de klik het hele ding. Dubbelklik om het te openen.

## "Selecteer eerst iets om te verplaatsen, of klik erop."

{{ui:Verplaatsen}}, {{ui:Draaien}} en {{ui:Schalen}} hebben iets nodig om mee te werken: selecteer het eerst, of start het gereedschap door op het ding zelf te klikken (niet op lege ruimte of een hulplijn).

## "Selecteer eerst wat geometrie (sleep een venster, of klik drievoudig om alles verbonden te selecteren)."

{{key:G}} en {{key:Shift+G}} hebben een selectie nodig. Hulplijnen kunnen niet worden gegroepeerd.

## De pijltoetsen draaien de weergave in plaats van te vergrendelen

Vergrendelingen werken alleen na de eerste klik van een teken- of bewerkingsgereedschap. {{ui:Duwen/trekken}} heeft geen vergrendelingen, en bij {{ui:Draaien}} veranderen ze de draai niet. Op andere momenten draaien de pijltoetsen de weergave.

## Esc op volledig scherm

Op volledig scherm kan de browser de eerste {{key:Esc}} gebruiken om het volledige scherm te verlaten. Druk nogmaals op {{key:Esc}} om het gereedschap te annuleren.

## Geen middelste knop

Druk op {{key:O}} voor {{ui:Draaien}} en sleep, of gebruik de pijltoetsen. Zie [Draaien, verschuiven en zoomen](topic:orbit-pan-zoom#without-a-middle-button).

## Importeren

| Bericht | Wat te doen |
|---|---|
| "ModelCraft importeert SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG en DXF. … is geen van deze." | Exporteer het model uit het andere programma in een van deze formaten |
| "Dit bestand is groter dan 300 MB." | Vereenvoudig of splits het model in het andere programma |
| "…te groot om hier mee te modelleren (meer dan 2 million vertices)." | Hetzelfde |
| "Dit .gltf-bestand heeft "…" nodig…" | Zet de `.gltf` samen met de bijbehorende `.bin`- en textuurbestanden neer, of open de `.glb`-versie |
| "Dit glTF-bestand heeft de … extensie nodig, die ModelCraft nog niet leest." | Exporteer opnieuw uit het andere programma zonder die extensie (KTX2-texturen, bijvoorbeeld) |
| Een OBJ komt binnen zonder kleuren of texturen | Zet de `.obj` samen met zijn `.mtl` en afbeeldingen neer |
| "Dit Alembic-bestand gebruikt de oude HDF5-indeling…" | Sla het opnieuw op vanuit het andere programma als Ogawa Alembic-bestand |
| Een FBX komt binnen zonder texturen | Zet de `.fbx` samen met de textuurafbeeldingen neer, of sluit de media in bij het exporteren |
| "Dit FBX-bestand is versie …, die ModelCraft niet leest" | Exporteer opnieuw als FBX 2011 of nieuwer |
| Een STL of PLY komt 1,000 keer te groot of te klein binnen | STL wordt als millimeter gelezen en PLY als meter: schaal het (zie [Roteren en schalen](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Dit is geen Collada (.dae)-bestand…" of "…geen goed gevormd XML…" | Het bestand is beschadigd of geen Collada. Exporteer het opnieuw |
| "Dit Collada-bestand heeft geen geometrie die ModelCraft kan importeren." | Het bevat alleen camera's, lampen of verwijzingen naar andere bestanden |
| "Dit is een binaire DXF. Sla het op als ASCII-DXF en probeer opnieuw." | Sla het opnieuw op als ASCII vanuit het CAD-programma |
| "Dit is geen DWG-tekening…" | Het bestand is geen DWG, of het is beschadigd |
| "Deze tekening kon niet worden gelezen (…). Hij is mogelijk beschadigd, of opgeslagen in een DWG-versie die de lezer niet ondersteunt…" | De haakjes geven de reden. Sla hem vanuit het CAD-programma op als DXF, of als DWG van AutoCAD 2000 tot 2018 |
| "Deze tekening reikt meer dan 10,000 km van zijn oorsprong…" | Verplaats de tekening in het CAD-programma naar de buurt van 0,0 |

### Het import is de verkeerde maat of ligt op zijn zij

- **OBJ:** OBJ heeft geen eenheid; ModelCraft leest meters. Een model in millimeters komt 1000 keer te groot binnen: [schaal](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) het met `0.001`; een model in inches met `0.0254`.
- **OBJ op zijn zij:** ModelCraft verwacht OBJ-bestanden met Y omhoog. Een bestand dat met Z omhoog is geschreven, komt liggend binnen. Draai het 90° om de rode as: klik het middelpunt van {{ui:Draaien}} op een vlak dat langs rood wijst, of open het bestand in zijn programma en exporteer met Y omhoog.
- **DWG of DXF:** u koos de verkeerde eenheid in het dialoogvenster "Tekeningeenheden". Maak ongedaan en importeer opnieuw.

## Bestanden openen

| Bericht | Wat te doen |
|---|---|
| "Dit bestand is geen ModelCraft-model (het is geen JSON)." | Gebruik {{ui:Importeren}} voor andere formaten |
| "Dit is geen ModelCraft-bestand dat we kunnen openen: …" | Het bestand is beschadigd of met de hand gewijzigd |
| "Dit model is opgeslagen door een nieuwere ModelCraft…" | Open het in de nieuwere versie |
| "Dit bestand is groter dan 200 MB." | Het model is hier te groot om te openen |

## Ik ben werk kwijt

ModelCraft slaat niet zelf naar een bestand op. Wanneer u een tabblad met niet-opgeslagen wijzigingen sluit of herlaadt, vraagt de browser eerst ("Site verlaten?" of "Site opnieuw laden?"); kies om te blijven en op te slaan. {{ui:Nieuw}} en {{ui:Openen}} vragen dat ook ("Niet-opgeslagen wijzigingen"). Is de browser of de computer gecrasht, open ModelCraft dan opnieuw in dezelfde browser: het biedt het niet-opgeslagen werk weer aan ("Uw werk herstellen?"; zie [Uw werk herstellen](common:recover)). Sla vaak op met {{key:Mod+S}}.

## Mijn map Downloads loopt vol met kopieën

Elke keer dat u opslaat, is het een nieuwe download, met de naam `Untitled (1).modelcraft`, `Untitled (2).modelcraft` enzovoort. Verwijder de oude, of stel de browser in om elke keer te vragen waar het bestand moet worden opgeslagen en het oude bestand zelf te overschrijven. Zie [Openen, opslaan, importeren en exporteren](topic:files#save-a-model).

## Het wordt traag

- Elke stap van ongedaan maken bewaart een kopie van het model (een [mesh](topic:meshes) bewaart alleen wat er veranderde), dus bij een zeer grote import van duwen/trekken-geometrie duurt elke bewerking langer. Ontbind of wis wat u niet nodig heeft, sla op en open opnieuw: opnieuw openen wist ook de geschiedenis van ongedaan maken.
- Zonneschaduwen kosten het meest. Vink {{ui:Zonneschaduwen}} uit terwijl u modelleert.

## Geen schaduwen

{{ui:Zonneschaduwen}} staat uit, de zon staat onder op het tijdstip dat u koos ("De zon is op dit moment onder."), of de stijl is {{ui:Draadmodel}}, dat geen schaduwen tekent.

## "Deze browser stond het volledige scherm niet toe."

Sommige browsers en sommige ingebedde weergaven weigeren het volledige scherm. Gebruik in plaats daarvan het eigen volledige scherm van de browser ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft opent niet zonder verbinding

ModelCraft opent offline alleen nadat het voor offline gebruik is opgeslagen in die browser: de knop in de app-balk moet {{ui:Klaar voor offline gebruik}} tonen. Open het terwijl u online bent en klik op {{ui:Opslaan voor offline gebruik}}. Toont de knop {{ui:Kon niet opslaan}}, klik er dan opnieuw op bij een betere verbinding; {{ui:Offline gebruik is niet beschikbaar}} betekent dat dit venster (een privévenster, of een beheerde computer) geen kopie kan bewaren. Zie [Werken offline](common:offline).
