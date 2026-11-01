---
title: Het ModelCraft-scherm
summary: Een rondleiding door de werkbalk, de panelen aan elke kant, de 3D-weergave en de statusbalk, met de namen die op het scherm staan.
keywords: scherm, indeling, werkbalk, panelen, overzicht, entiteitsinformatie, stijl, scènes, statusbalk, waardevak, eenheden, interface, rondleiding
from: 4a9a4516
---

Van boven naar beneden: de appbalk, de werkbalk, de drie kolommen (linkerpanelen, 3D-weergave, rechterpanelen) en de statusbalk.

## De appbalk

De smalle balk helemaal bovenaan hoort bij elke CadCraft-app. Hij bevat de naam en versie van de app, {{ui:Over ModelCraft}}, de knop voor de schermmodus en de schakelaar {{ui:Papier}} / {{ui:Model}}.

- {{ui:Papier}} is het lichte thema en {{ui:Model}} het donkere. De 3D-weergave past haar kleuren aan; uw model verandert niet.
- De knop voor de schermmodus (eerst staat er {{ui:Volledig scherm}}) en {{key:Ctrl+Shift+F}} lopen door drie standen: normaal, volledig scherm en volledig scherm met verborgen balken. Zijn de balken verborgen, wijs dan naar de bovenrand van het scherm (of tik erop) om ze terug te halen. {{key:Esc}} verlaat volledig scherm.

:::note
{{key:Ctrl+Shift+F}} gebruikt op elke computer de Control-toets, ook op een Mac. Op iPhone, waar browsers geen volledig scherm hebben, verbergt en toont de knop alleen de balken.
:::

## De werkbalk

De werkbalk is verdeeld in groepen met een label. Houd de aanwijzer boven een knop om de naam en de toets te zien.

Links daarvan wisselt de lijst {{ui:Werkomgeving}} waarvoor de werkbalk en het rechterpaneel dienen: {{ui:Model}} (modelleren met duwen/trekken, de rondleiding hieronder), {{ui:Mesh}} ([een mesh bewerken](topic:mesh-edit)), {{ui:Kromme}} ([krommeobjecten](topic:curves)), {{ui:UV}} ([UV's indelen](topic:uv)), {{ui:Boetseren}} ([boetseren](topic:sculpt)), {{ui:Shading}} ([materialen gemaakt met nodes](topic:shading)), {{ui:Animeren}} ([animeren](topic:animate)) en {{ui:Render}} ([renderen in de weergave](topic:render#render-in-the-view)).

| Groep | Knoppen |
|---|---|
| Bestand | {{ui:Nieuw}}, {{ui:Openen}}, {{ui:Opslaan}}, {{ui:Importeren}}, {{ui:Exporteren}} (een menu met indelingen) |
| Tekenen | {{ui:Lijn}} ({{key:L}}), {{ui:Rechthoek}} ({{key:R}}), {{ui:Cirkel}} ({{key:C}}), {{ui:Veelhoek}} ({{key:N}}) |
| Wijzigen | {{ui:Selecteren}} ({{key:Space}}), {{ui:Duwen/trekken}} ({{key:P}}), {{ui:Verplaatsen}} ({{key:M}}), {{ui:Draaien}} ({{key:Q}}), {{ui:Schalen}} ({{key:S}}), {{ui:Gum}} ({{key:E}}), {{ui:Meetlint}} ({{key:T}}) |
| Organiseren | {{ui:Component}} ({{key:G}}), {{ui:Groep}} ({{key:Shift+G}}), {{ui:Ontbinden}} |
| Bewerken | {{ui:Ongedaan maken}} ({{key:Mod+Z}}), {{ui:Opnieuw}} ({{key:Mod+Y}}), {{ui:Kopiëren}} ({{key:Mod+C}}), {{ui:Plakken}} ({{key:Mod+V}}), {{ui:Meer}} (een menu: knippen, kopiëren, plakken, op dezelfde plaats plakken {{key:Mod+Shift+V}}, dupliceren {{key:Mod+D}}, verwijderen, alles selecteren, niets selecteren en de toetsenstijl) |
| Camera | {{ui:Draaien}} ({{key:O}}), {{ui:Verschuiven}} ({{key:H}}), {{ui:Zoomen}} ({{key:Z}}), {{ui:Alles}} ({{key:Shift+Z}}), {{ui:Weergaven}} (een menu) |

De getoonde toetsen zijn die van duwen/trekken; als in de [ModelCraft-instellingen](topic:settings) de stijl Modeleerder is gekozen, tonen de tooltips in plaats daarvan die toetsen. Het gereedschap dat u gebruikt, wordt ingedrukt getoond. Op een smal scherm schuift de werkbalk opzij.

Het menu {{ui:Weergaven}} bevat {{ui:Iso}}, {{ui:Boven}}, {{ui:Voor}}, {{ui:Rechts}}, {{ui:Achter}}, {{ui:Links}} en {{ui:Onder}}, elk passend gemaakt op het model, en {{ui:Perspectief}}, dat wisselt tussen perspectief en parallelle projectie.

## De 3D-weergave

Het midden van het scherm. De rode, groene en blauwe lijnen zijn de assen: rood en groen liggen op de grond, blauw wijst omhoog, en **het noorden is de groene as**. Waar ze elkaar ontmoeten, ligt de oorsprong.

- Als u begint, toont een kaart met de titel "Begin met modelleren" de eerste paar toetsen. Hij verdwijnt als u een tekengereedschap kiest of in de weergave klikt.
- Terwijl een gereedschap werkt, toont de weergave **inferentiemarkeringen**: kleine gekleurde vormen waar de aanwijzer vastklikt (een groene cirkel bij een eindpunt, een cyaan bij een middelpunt, een rood vierkant op een rand, een blauwe ruit op een vlak). Zie [Inferentie en vastklikken](topic:inference).
- Geselecteerde dingen worden blauw. Een vlak dat van achteren wordt gezien, is blauwgrijs.
- Als u een groep opent om hem te bewerken, vervaagt alles erbuiten en verhuizen de assen naar de eigen assen van de groep.
- Als een model scènes heeft, verschijnt boven in de weergave een rij scènetabbladen.
- Zet een bestand ergens op de weergave neer om het te openen of te importeren.

## De linkerpanelen

**{{ui:Overzicht}}** toont de groepen en componenten in het model, genest zoals ze in het model genest zijn. Een component die meer dan eens wordt gebruikt, toont hoe vaak, zoals "Raam (4)".

- Klik op een naam om te selecteren. Dubbelklik om hem te openen voor bewerking.
- **Zoeken op naam** (getoond zodra er twee of meer groepen zijn) houdt alleen de rijen over waarvan de naam overeenkomt, met de groepen waarin ze zitten. {{key:Esc}} wist het.
- Het **oog** aan het eind van een rij verbergt of toont die groep of component (zoals {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Verbergen}} doet). Een tagpictogram betekent dat hij door zijn [tag](topic:tags) is verborgen.
- **Ter plaatse hernoemen:** klik op een rij, druk op {{key:F2}}, typ en druk op {{key:Enter}} ({{key:Esc}} behoudt de oude naam).
- **Sleep een rij** naar het midden van de rij van een andere groep om hem in die groep te verplaatsen, naar de boven- of onderrand van een rij om hem net voor of na die rij te zetten, of naar de kop {{ui:Overzicht}} om hem naar het hoogste niveau te verplaatsen. Hij blijft op zijn plaats in het model en behoudt zijn kleur, tag en naam. Een groep kan niet in zichzelf komen. Elke verplaatsing is één stap ongedaan maken. Zie [Herschikken in het Overzicht](topic:groups-components#rearrange-in-the-outliner).
- Terwijl u binnen een groep bewerkt, staat er een regel "Bewerken: Model › …" en verschijnt een knop {{ui:Groep sluiten}}. Die sluit alle geopende niveaus tegelijk.

**{{ui:Componenten}}** toont elke componentdefinitie met hoeveel kopieën er zijn geplaatst ("3×") en een knop {{ui:Plaatsen}} die nog een kopie toevoegt waar u klikt.

## De rechterpanelen

**{{ui:Entiteitsinformatie}}** beschrijft wat geselecteerd is. De kop verandert en zegt wat dat is:

| Kop | Toont | Knoppen |
|---|---|---|
| Model (niets geselecteerd) | Vlakken, randen, groepen, componenten en hoeveel er zijn geplaatst, hulplijnen, totale afmeting | {{ui:Alle hulplijnen verwijderen}} (als er hulplijnen zijn) |
| Vlak | Oppervlakte, aantal gaten | {{ui:Vlak omkeren}} |
| Rand | Lengte | geen |
| Groep of Component | Naam (typ om te hernoemen), hoe vaak hij is geplaatst, of het een gesloten volume is, het volume, de afmeting | {{ui:Bewerken}}, {{ui:Ontbinden}}, {{ui:Uniek maken}} (een component die meer dan eens is geplaatst), {{ui:Component maken}} (een groep) |
| Hulppunt of hulplijn | niets | {{ui:Verwijderen}} |
| Meerdere dingen | Hoeveel vlakken, randen, groepen en hulplijnen, de totale oppervlakte van de vlakken | {{ui:Component maken (G)}}, {{ui:Groep maken (Shift+G)}} |

**{{ui:Stijl}}** bepaalt hoe het model wordt getekend: {{ui:Vlakken}} ({{ui:Gearceerd}}, {{ui:Verborgen lijnen}}, {{ui:Draadmodel}}, {{ui:Röntgen}}), {{ui:Randen tonen}} en {{ui:Zonneschaduwen}} met de datum, tijd en plaats van de zon. Zie [Stijlen en zonneschaduwen](topic:styles-shadows).

**{{ui:Scènes}}** slaat weergaven op: {{ui:Scène toevoegen}}, de lijst met scènes en {{ui:Vorige}}, {{ui:Afspelen}} en {{ui:Volgende}}. Zie [Weergaven opslaan als scènes](topic:scenes).

## De statusbalk

Onderaan, van links naar rechts:

1. **De tip**: wat het gereedschap hierna wil, of waaraan de aanwijzer vastklikt ("Eindpunt", "Op rode as").
2. **Berichten**: wat er zojuist is gebeurd ("Duwen/trekken ongedaan gemaakt.", "site.dxf geïmporteerd: 1697 randen op de grond, in een groep.") of waarom iets niet werkte.
3. **Het waardevak**: het label verandert met het gereedschap ({{ui:Lengte}}, {{ui:Afmetingen}}, {{ui:Straal}}, {{ui:Zijden}}, {{ui:Afstand}}, {{ui:Hoek}}, {{ui:Schaal}}, {{ui:Verschuiving}}). Het toont de actuele maat terwijl u werkt en neemt over wat u typt. Zie [Exacte maten typen in het waardevak](topic:value-box).
4. **De toetsenstijl**: {{ui:Toetsen: Duwen/trekken}} of {{ui:Toetsen: Modeleerder}} schakelt de sneltoetsen en muisknoppen in één keer om (hetzelfde als in de [ModelCraft-instellingen](topic:settings)).
5. **{{ui:Vastklikken}} en {{ui:Botsen}}**: vastklikken op punten, randen en assen, en volumes die stoppen waar ze elkaar raken. Doorgestreept = uit. Klik om te schakelen. Zie [ModelCraft-instellingen](topic:settings).
6. **De eenhedenkiezer**: de eenheid waarin lengtes worden getoond. Zie [Aan de slag](topic:getting-started#check-the-units-first).

## Op een smal scherm

Onder ongeveer 760 pixels breed (een telefoon, of een smal venster) behoudt de 3D-weergave het scherm. De werkbalk is één rij die opzij schuift en de panelen openen als bladen vanaf de balk onderaan het scherm.
