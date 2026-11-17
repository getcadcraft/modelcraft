---
title: Bruk ModelCraft med en KI-assistent
summary: La din egen KI-assistent eller ditt eget skript se på modellen og lage enkle volumlegemer: tillatelser, tilkobling via CadCraft Studio og aktivitetsloggen.
keywords: ki, assistent, agent, mcp, model context protocol, skript, automatisering, modellering, boks, sylinder, render, renderkø, tillatelser, koble fra, aktivitet
from: 629cd0b7
---

## Hva du lærer

Hvordan du lar en KI-assistent (eller et skript du har skrevet) jobbe med ModelCraft, og hvordan du bestemmer hva den har lov til å endre.

ModelCraft har **ingen egen KI** og sender ingenting noe sted. Du tar med assistenten: et hvilket som helst program som snakker Model Context Protocol (MCP). ModelCraft gir den bare verktøy, og du velger hvilke.

## Slå på

1. Åpne {{ui:Innstillinger}} (tannhjulet i programlinjen, eller {{key:Mod+,}}) og gå til fanen {{ui:ModelCraft}}.
2. Under {{ui:Assistenter}}, kryss av for **La KI-assistenter og skript bruke ModelCraft**. Den er av til du gjør dette.
3. Velg hva den får lov til: **Les** er avkrysset fra start; kryss av **Rediger**, **Lagre** eller **Eksporter** bare når du trenger dem.

Verktøy utenfor tillatelsene du har krysset av, tilbys ikke assistenten, og hvis den ber om ett likevel, avviser ModelCraft det og skriver det i aktivitetsloggen. Å slå av bryteren avslutter alle tilkoblinger med en gang; {{ui:Tilbakestill ModelCraft-innstillinger}} slår den også av.

## Koble til assistenten

Assistenter kobles til via **CadCraft Studio** på datamaskinen din: Studio kjører en liten server som bare denne datamaskinen kan nå, beskyttet av en token som Studio lager hver gang det starter. I Studio velger du {{ui:Koble til en assistent}} og kopierer adressen og tokenen inn i assistenten din (Studio viser de nøyaktige innstillingene som skal limes inn). Del aldri tokenen.

:::note
En nettleserfane kan ikke åpne en tilkobling for en assistent: i nettleserappene har bryteren ingen virkning før du bruker CadCraft Studio på datamaskinen din.
:::

## Du har kontroll

- **Hver endring er ett Angre-steg**, merket med assistentens navn for den (for eksempel «Assistent: boks»). {{key:Mod+Z}} tar tilbake assistentens siste endring samlet.
- **Du vet når en er tilkoblet.** En knapp i programlinjen viser navnet på assistenten mens den er tilkoblet; klikk på den for å se hva den har lov til, eller for å **Koble fra** den.
- **Aktivitet.** {{ui:Innstillinger}} › {{ui:ModelCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} viser hvert kall: når, hvilket verktøy, utført eller avvist. {{ui:Lagre loggen}} lagrer en kopi.

## Hva en assistent kan be om

| Verktøy | Tillatelse | Hva det gjør |
|---|---|---|
| `app_info`, `model_describe` | Les | Modellens enhet, størrelse, og hver gruppe og komponent med hvor den er, om den er et lukket volumlegeme og volumet |
| `view_screenshot` | Les | Et bilde av 3D-visningen slik den vises |
| `box_add`, `cylinder_add` | Rediger | En boks eller en sylinder som ny gruppe, på et sted og i en størrelse du eller assistenten oppgir («3m», «10'» eller et tall i modellens enhet) |
| `instance_move`, `instances_erase` | Rediger | Flytter eller sletter grupper og komponenter |
| `faces_list`, `materials_list` | Les | Flatene i en gruppe eller i den løse geometrien (retning, areal og senter for hver); materialene og fargene den kan male med |
| `push_pull` | Rediger | Trykker eller trekker en flate, slik {{ui:Trykk/trekk}} gjør |
| `paint` | Rediger | Maler flater eller en hel gruppe med en farge eller et materiale |
| `group_make` | Rediger | Lager en gruppe eller en komponent av løse flater og grupper |
| `scene_add`, `scene_show` | Rediger | Lagrer visningen som en scene; går til en lagret scene |
| `mesh_add` | Rediger | Et nettobjekt å starte fra (kube, kule, sylinder …), slik Nett-arbeidsområdet legger det til |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Les / Rediger | Modifikatorstakken til et nett: speil, matrise, underinndeling, skråkant og resten; ingenting brukes permanent |
| `usd_export` | Eksporter | Modellen som OpenUSD (.usda, .usdc eller .usdz), slik lagring av modellen som USD skriver den ([USD](topic:usd)); til en mappe du tillot i Studio, ellers som en nedlasting |
| `render_still` | Eksporter | Et renderet bilde av visningen eller av en lagret scene, slik knappen {{ui:Render}} i dialogboksen {{ui:Render}} lager det, med dine Render-innstillinger med mindre den ber om andre (en scenevoreinstilling: eksteriør, interiør, snitt, natt eller auto; raskt eller høy kvalitet, størrelse, prøvetall, himmel); et PNG den kan se på, eller en PNG-, EXR- eller renderfil i en mappe du tillot i Studio ([Render et bilde](topic:render)) |
| `render_queue` | Eksporter | Legger bilder av høy kvalitet til i køen i dialogboksen Render (visningen, eller lagrede scener) og kjører køen; de ferdige bildene går til en mappe du tillot, eller blir i {{ui:Renderkø}} i dialogboksen Render for deg. Krever WebGPU |
| `link_push` | Rediger | Oppdaterer en modell koblet fra et annet program (se [Hold en .3dm-modell levende](topic:live-3dm-link)) |
| `link_status` | Les | Viser om en koblet modell fortsatt finnes her, og når den sist ble oppdatert |
| `undo` | Rediger | Tar tilbake sine egne steg |

Volumlegemer som en assistent lager, legges inn som grupper, så de aldri smelter sammen med det du har tegnet. Det finnes ikke noe verktøy som lagrer modellen: lagring er fortsatt din oppgave, og eksport eller rendering krever at **Eksporter** er krysset av. En render endrer ingenting i modellen; rendering av en lagret scene flytter visningen dit, slik {{ui:Scener}} gjør.

## Hvis noe ikke fungerer

- **Assistenten ser ingen ModelCraft-verktøy:** sjekk at bryteren er på i dette vinduet, og at vinduet er åpent i Studio.
- **«krever tillatelsen Rediger»:** kryss av for **Rediger** under {{ui:Assistenter}}, og spør igjen.
- **«401»- eller «token»-feil:** tokenen har endret seg (Studio startet på nytt, eller {{ui:Ny token}}). Kopier den nye inn i assistentens innstillinger.

## Se også

- [Oppskrifter for KI-assistenter](common:assistants-recipes): arbeidseksempler, hver med verktøyene den kaller.
