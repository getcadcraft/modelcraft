---
title: Hent inn en .3dm-modell
summary: Importer en .3dm-fil med dens masker, flater, kurver, blokker, lag og farger; hvor trekantene kommer fra, og hva som utelates.
keywords: 3dm, importer, nurbs, polysurface, brep, flater, rendermaske, ekstrudering, kurver, blokker, layer, etiketter, farger, enheter, bytte, migrer
from: 3cf29879
---

ModelCraft leser `.3dm`-filer med sin egen leser, i siden. Ingenting lastes opp, og det fungerer frakoblet hver gang ModelCraft gjør det. Filer lagret i versjon 5, 6, 7 og 8-oppsettet er testet; eldre (versjon 2 til 4) bør også åpnes, men er ikke prøvd ennå.

## Importer filen

1. Klikk {{ui:Importer}} i gruppen {{ui:Fil}} (eller slipp `.3dm`-filen på 3D-visningen).
2. Velg filen.

   Statuslinjen sier "Leser chair.3dm…" mens den leser, og deretter hva som kom inn, for eksempel "Importerte chair.3dm: 14 masker (8330 flater), 8 kurver, 5 blokkplasseringer, 3 lag som etiketter. Flater: 7 flater fra maskene lagret i filen, 29 delt opp i trekanter av CadCraft."

Hele modellen kommer inn som én gruppe oppkalt etter filen, valgt, og visningen zoomer til den. Ett {{key:Mod+Z}} fjerner alt igjen, inkludert etikettene.

## Hvor trekantene kommer fra

ModelCraft modellerer med flater og masker, så hver overflate i filen kommer inn som en [maske](topic:meshes) av små flate trekanter. For hver flate i en polysurface (og hver ekstrudering) tar ModelCraft, i denne rekkefølgen:

1. **Rendermasken lagret i filen.** De fleste modelleringsprogrammer lagrer masken de viste på skjermen sammen med hver overflate; når den finnes, bruker ModelCraft den slik den er.
2. **Sin egen oppdeling i trekanter**, når filen ikke har en lagret maske: plan, NURBS-flater, rotasjonsflater (kuler, kjegler, torus, dreide former), ekstruderte kurver og ekstruderinger (med hull og endestykker), beskåret av kantene sine. Flater i én polysurface deler kantpunktene sine, så en lukket polysurface kommer inn som en lukket maske. Buede områder deles opp til trekantene ligger innenfor omtrent 0.15 % av objektets størrelse fra den virkelige overflaten.
3. **Ingenting**, for en flate av en type overflate ModelCraft ikke leser ennå. Statuslinjen sier hvor mange flater det gjelder, og hva de er.

Statuslinjens del "Flater:" sier hvor mange flater som kom fra lagrede masker, og hvor mange ModelCraft delte opp. Kanter inne i én flate i filen er myke, og kanter mellom to flater er skarpe, så en buet flate skygges jevnt.

:::tip
For de mest trofaste formene, lagre filen med rendermaskene i programmet som laget den (det er vanligvis standard; et alternativ "lagre liten" utelater dem).
:::

## Hva som kommer inn

- **Masker** med sine hjørnefarger og teksturkoordinater.
- **Polysurfaces, flater og ekstruderinger**, som beskrevet over.
- **Kurver** (linjer, polylinjer, buer, sirkler, NURBS-kurver og kurver sammenføyd av dem) som [kanter](topic:curves), én gruppe kanter per layer.
- **Blokker** blir [komponenter](topic:groups-components): hver plassering av en blokk er en plassering av én komponent, så redigerer du én kopi, endres de alle. Blokker inni blokker beholdes.
- **Layer** blir [etiketter](topic:tags) med layerens fulle navn ("Furniture::Chairs"), skjult når layeren var av. Hver objekts plassering bærer sin layers etikett.
- **Farger.** Et objekts farge kommer fra der filen sier det: sin egen farge, layerens, eller materialets grunnfarge. Den blir malingen på flatene.
- **Skjulte objekter kommer inn skjult**; {{ui:Vis alle}} viser dem.
- **Enheter:** filen sier hvilken enhet den bruker; modellen kommer inn i sin virkelige størrelse.

## Hva som utelates (og sies)

Statuslinjens del "Merknader:" nevner alt som ikke kom inn, med antall:

- punkter og punktskyer, tekst, tekstpunkter, måltilsettinger, hjelpelinjer, skravurer, lys, klippeplan og oppsettdetaljer;
- SubD-objekter: gjør dem om til masker eller polysurfaces i programmet som laget filen først;
- flater på forskjøvede overflater og andre overflatetyper ModelCraft ikke leser ennå, når filen ikke lagret en maske for dem;
- blokker koblet fra andre filer (bare filen du importerer leses);
- ekstruderinger med skrå (gjærede) ender kommer inn med rette ender.

Materialteksturer, render-innstillinger, navngitte visninger, grupper og brukertekst leses ikke; et materiale gir bare sin grunnfarge.

## Grenser

Filer opptil 300 MB. En skadet fil sier hva som er galt og legger ikke til noe; ett objekt som ikke kan leses, utelates og telles, og resten kommer inn.
