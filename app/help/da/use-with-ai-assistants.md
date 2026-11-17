---
title: Brug ModelCraft med en AI-assistent
summary: Lad din egen AI-assistent eller dit script se på modellen og bygge enkle massive legemer, med tilladelser, forbindelse via CadCraft Studio og aktivitetsloggen.
keywords: ai, assistent, agent, mcp, modelkontekstprotokol, script, automatisering, modellering, boks, cylinder, render, renderkø, tilladelser, afbryd, aktivitet
from: 629cd0b7
---

## Hvad du lærer

Hvordan du lader en AI-assistent (eller et script, du har skrevet) arbejde med ModelCraft, og hvordan du bestemmer, hvad den må røre ved.

ModelCraft har **ingen egen AI** og sender ingenting nogen steder hen. Du medbringer assistenten: et hvilket som helst program, der taler Model Context Protocol (MCP). ModelCraft giver kun assistenten værktøjer, og du vælger hvilke.

## Slå det til

1. Åbn {{ui:Indstillinger}} (tandhjulet i appbjælken, eller {{key:Mod+,}}) og gå til fanen {{ui:ModelCraft}}.
2. Under {{ui:Assistenter}} sætter du kryds ved **Lad AI-assistenter og scripts bruge ModelCraft**. Det er slået fra, indtil du gør det.
3. Vælg, hvad den må gøre: **Læs** er sat til fra start. Sæt kun kryds ved **Rediger**, **Gem** eller **Eksportér**, når du har brug for dem.

Værktøjer uden for de tilladelser, du har sat kryds ved, bliver ikke tilbudt assistenten. Og hvis den alligevel beder om et, afviser ModelCraft det og skriver det i aktivitetsloggen. Når du slår kontakten fra, afbrydes alle forbindelser med det samme. {{ui:Nulstil ModelCraft-indstillinger}} slår den også fra.

## Forbind din assistent

Assistenter forbinder sig gennem **CadCraft Studio** på din computer. Studio kører en lille server, som kun denne computer kan nå, og den er beskyttet af en token, som Studio laver hver gang den starter. I Studio vælger du {{ui:Forbind en assistent}} og kopierer adressen og tokenen over i din assistent. Studio viser de præcise indstillinger, der skal indsættes. Del aldrig tokenen.

:::note
En browserfane kan ikke åbne en forbindelse for en assistent. I browserprogrammerne har kontakten ingen virkning, før du bruger CadCraft Studio på din computer.
:::

## Du har stadig kontrollen

- **Hver ændring er ét fortryd-trin**, med assistentens navn for den (for eksempel »Assistent: boks«). {{key:Mod+Z}} tager assistentens sidste ændring tilbage som en helhed.
- **Du ved, når en assistent er forbundet.** En knap i appbjælken viser assistentens navn, mens den er forbundet. Klik på den for at se, hvad den må gøre, eller for at **afbryde** forbindelsen.
- **Aktivitet.** {{ui:Indstillinger}} › {{ui:ModelCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} viser hvert kald: hvornår, hvilket værktøj, og om det blev udført eller afvist. {{ui:Gem loggen}} gemmer en kopi.

## Hvad en assistent kan bede om

| Værktøj | Tilladelse | Hvad det gør |
|---|---|---|
| `app_info`, `model_describe` | Læs | Modellens enhed, størrelse og alle grupper og komponenter med deres placering, om de er et lukket massivt legeme, og deres rumfang |
| `view_screenshot` | Læs | Et billede af 3D-visningen, som den vises |
| `box_add`, `cylinder_add` | Rediger | En boks eller en cylinder som ny gruppe, på et sted og i en størrelse, du eller assistenten angiver (»3m«, »10'« eller et tal i modellens enhed) |
| `instance_move`, `instances_erase` | Rediger | Flytter eller sletter grupper og komponenter |
| `faces_list`, `materials_list` | Læs | Fladerne i en gruppe eller i den løse geometri (hver flades retning, areal og centrum), samt de materialer og farver, den kan male med |
| `push_pull` | Rediger | Skubber eller trækker en flade, ligesom {{ui:Skub/træk}} gør |
| `paint` | Rediger | Maler flader eller en hel gruppe med en farve eller et materiale |
| `group_make` | Rediger | Laver en gruppe eller en komponent af løse flader og grupper |
| `scene_add`, `scene_show` | Rediger | Gemmer visningen som en scene, og går til en gemt scene |
| `mesh_add` | Rediger | Et net-objekt at starte fra (kube, kugle, cylinder …), som {{ui:Net}}-arbejdsområdet tilføjer det |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Læs / Rediger | Et nets modifikatorstak: spejl, array, underinddeling, facet og resten. Intet anvendes permanent |
| `usd_export` | Eksportér | Modellen som OpenUSD (.usda, .usdc eller .usdz), sådan som det at gemme modellen som USD skriver den ([USD](topic:usd)). Til en mappe, du har tilladt i Studio, ellers som en download |
| `render_still` | Eksportér | Et renderet billede af visningen eller af en gemt scene, sådan som knappen {{ui:Render}} i dialogboksen {{ui:Render}} laver det, med dine renderindstillinger, medmindre assistenten beder om andre (en scenepræset: eksteriør, interiør, snit, nat eller auto; hurtig eller høj kvalitet, størrelse, samples, himmel). Det er en PNG, som den kan se på, eller en PNG-, EXR- eller renderfil i en mappe, du har tilladt i Studio ([Render et billede](topic:render)) |
| `render_queue` | Eksportér | Føjer billeder i høj kvalitet til køen i dialogboksen Render (visningen eller gemte scener) og kører køen. De færdige billeder går til en mappe, du har tilladt, eller bliver i {{ui:Renderkø}} i dialogboksen Render til dig. Kræver WebGPU |
| `link_push` | Rediger | Opdaterer en model, der er linket fra et andet program (se [Hold en .3dm-model levende](topic:live-3dm-link)) |
| `link_status` | Læs | Siger, om en linket model stadig er der, og hvornår den sidst blev opdateret |
| `undo` | Rediger | Tager sine egne trin tilbage |

Massive legemer, som en assistent laver, kommer ind som grupper, så de aldrig smelter sammen med det, du har tegnet. Der er intet værktøj, der gemmer modellen. Gemning er stadig op til dig, og eksport eller rendering kræver, at **Eksportér** er sat til. En render ændrer intet i modellen. Rendering af en gemt scene flytter visningen til den, ligesom {{ui:Scener}} gør.

## Hvis noget ikke virker

- **Assistenten ser ingen ModelCraft-værktøjer:** kontrollér, at kontakten er slået til i dette vindue, og at vinduet er åbent i Studio.
- **»kræver tilladelsen Rediger«:** sæt kryds ved **Rediger** under {{ui:Assistenter}}, og bed så igen.
- **Fejl med »401« eller »token«:** tokenen er ændret (Studio er genstartet, eller du har brugt {{ui:Ny token}}). Kopiér den nye token over i assistentens indstillinger.

## Se også

- [Opskrifter til AI-assistenter](common:assistants-recipes): gennemarbejdede eksempler, hver med de værktøjer, den kalder.
