---
title: ModelCraft gebruiken met een AI-assistent
summary: Laat uw eigen AI-assistent of script het model bekijken en eenvoudige volumes bouwen: rechten, verbinden via CadCraft Studio en het activiteitenlogboek.
keywords: ai, assistent, agent, mcp, model context protocol, script, automatisering, modelleren, doos, cilinder, renderen, renderwachtrij, rechten, verbreken, activiteit
from: 629cd0b7
---

## Wat u leert

Hoe u een AI-assistent (of een script dat u zelf heeft geschreven) met ModelCraft laat werken, en hoe u bepaalt wat die mag aanraken.

ModelCraft heeft **geen eigen AI** en stuurt niets ergens naartoe. U brengt de assistent mee: elk programma dat het Model Context Protocol (MCP) spreekt. ModelCraft geeft er alleen tools aan, en u kiest welke.

## Inschakelen

1. Open {{ui:Instellingen}} (het tandwiel in de app-balk, of {{key:Mod+,}}) en ga naar het tabblad {{ui:ModelCraft}}.
2. Vink onder {{ui:Assistenten}} **Laat AI-assistenten en scripts ModelCraft gebruiken** aan. Het staat uit totdat u dat doet.
3. Kies wat het mag doen: **Lezen** is in het begin aangevinkt; vink **Bewerken**, **Opslaan** of **Exporteren** alleen aan wanneer u die nodig heeft.

Tools buiten de rechten die u hebt aangevinkt, worden niet aan de assistent aangeboden. Als de assistent er toch om vraagt, weigert ModelCraft dat en schrijft het dit in het activiteitenlogboek. Het uitzetten van de schakelaar beëindigt alle verbindingen tegelijk; {{ui:ModelCraft-instellingen opnieuw instellen}} schakelt hem ook uit.

## Uw assistent verbinden

Assistenten verbinden via **CadCraft Studio** op uw computer. Studio draait een kleine server die alleen deze computer kan bereiken, beschermd door een token dat het elke keer maakt wanneer het start. Kies in Studio {{ui:Een assistent verbinden}} en kopieer het adres en het token naar uw assistent (Studio toont de exacte instellingen om te plakken). Deel het token nooit.

:::note
Een browsertabblad kan geen verbinding voor een assistent openen: in de browserapps heeft de schakelaar geen effect totdat u CadCraft Studio op uw computer gebruikt.
:::

## U blijft de baas

- **Elke wijziging is één stap ongedaan maken**, met de naam van de assistent ervoor (bijvoorbeeld "Assistent: box"). {{key:Mod+Z}} neemt de laatste wijziging van de assistent als geheel terug.
- **U weet wanneer er een assistent verbonden is.** Een knop in de app-balk noemt de assistent zolang die verbonden is; klik erop om te zien wat hij mag, of om de verbinding te **Verbreken**.
- **Activiteit.** {{ui:Instellingen}} › {{ui:ModelCraft}} › {{ui:Assistenten}} › {{ui:Activiteit}} toont elke aanroep: wanneer, welke tool, en of die is uitgevoerd of geweigerd. {{ui:Het logboek opslaan}} bewaart een kopie.

## Wat een assistent kan vragen

| Tool | Recht | Wat het doet |
|---|---|---|
| `app_info`, `model_describe` | Lezen | De eenheid en grootte van het model, en elke groep en component met waar die staat, of het een gesloten volume is en het volume ervan |
| `view_screenshot` | Lezen | Een afbeelding van de 3D-weergave zoals die nu is |
| `box_add`, `cylinder_add` | Bewerken | Een doos of een cilinder als nieuwe groep, op een plek en in een grootte die u of de assistent opgeeft ("3m", "10'" of een getal in de eenheid van het model) |
| `instance_move`, `instances_erase` | Bewerken | Verplaatst of wist groepen en componenten |
| `faces_list`, `materials_list` | Lezen | De vlakken van een groep of van de losse geometrie (de richting, oppervlakte en het middelpunt van elk); de materialen en kleuren waarmee het kan schilderen |
| `push_pull` | Bewerken | Duwt of trekt een vlak, zoals {{ui:Duwen/trekken}} doet |
| `paint` | Bewerken | Schildert vlakken of een hele groep met een kleur of een materiaal |
| `group_make` | Bewerken | Maakt een groep of een component van losse vlakken en groepen |
| `scene_add`, `scene_show` | Bewerken | Slaat de weergave op als scène; gaat naar een opgeslagen scène |
| `mesh_add` | Bewerken | Een meshobject om mee te beginnen (kubus, bol, cilinder …), zoals de Mesh-werkomgeving het toevoegt |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Lezen / Bewerken | De modifierstapel van een mesh: spiegelen, array, subdivisie, afschuinen en de rest; niets wordt definitief toegepast |
| `usd_export` | Exporteren | Het model als OpenUSD (.usda, .usdc of .usdz), zoals opslaan van het model als USD het schrijft ([USD](topic:usd)); naar een map die u in Studio hebt toegestaan, anders als download |
| `render_still` | Exporteren | Een gerenderde afbeelding van de weergave of van een opgeslagen scène, zoals de knop {{ui:Renderen}} in het dialoogvenster {{ui:Renderen}} die maakt, met uw renderinstellingen tenzij de assistent om andere vraagt (een scènevoorinstelling: exterieur, interieur, doorsnede, nacht of auto; snel of hoge kwaliteit, grootte, samples, lucht); een PNG waar het naar kan kijken, of een PNG-, EXR- of renderbestand in een map die u in Studio hebt toegestaan ([Een afbeelding renderen](topic:render)) |
| `render_queue` | Exporteren | Voegt afbeeldingen van hoge kwaliteit toe aan de wachtrij van het dialoogvenster Renderen (de weergave, of opgeslagen scènes) en draait de wachtrij; de klare afbeeldingen gaan naar een map die u hebt toegestaan, of blijven voor u in de {{ui:Renderwachtrij}} van het dialoogvenster Renderen. Vereist WebGPU |
| `link_push` | Bewerken | Werkt een model bij dat vanuit een ander programma is gekoppeld (zie [Een .3dm-model live houden](topic:live-3dm-link)) |
| `link_status` | Lezen | Zegt of een gekoppeld model er nog is en wanneer het voor het laatst is bijgewerkt |
| `undo` | Bewerken | Maakt zijn eigen stappen ongedaan |

Volumes die een assistent maakt, komen als groepen binnen, dus ze versmelten nooit met wat u hebt getekend. Er is geen tool dat het model opslaat: opslaan blijft bij u, en exporteren of renderen vereist dat **Exporteren** is aangevinkt. Een render verandert niets aan het model; het renderen van een opgeslagen scène verplaatst de weergave ernaartoe, zoals {{ui:Scènes}} doet.

## Als iets niet werkt

- **De assistent ziet geen ModelCraft-tools:** controleer of de schakelaar in dit venster aan staat en of het venster open is in Studio.
- **"needs the edit permission":** vink **Bewerken** aan onder {{ui:Assistenten}} en vraag daarna opnieuw.
- **"401"- of "token"-fouten:** het token is veranderd (Studio is opnieuw gestart, of u hebt {{ui:Nieuw token}} gebruikt). Kopieer het nieuwe token naar de instellingen van de assistent.

## Zie ook

- [Recepten voor AI-assistenten](common:assistants-recipes): uitgewerkte voorbeelden, elk met de tools die het aanroept.
