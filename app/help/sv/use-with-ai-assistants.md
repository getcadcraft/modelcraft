---
title: Använd ModelCraft med en AI-assistent
summary: Låt din egen AI-assistent eller ditt skript titta på modellen och bygga enkla solider: behörigheter, anslutning via CadCraft Studio och aktivitetsloggen.
keywords: ai, assistent, agent, mcp, model context protocol, skript, automation, modellering, låda, cylinder, rendera, renderingskö, behörigheter, koppla från, aktivitet
from: 629cd0b7
---

## Vad du lär dig

Hur du låter en AI-assistent (eller ett skript du har skrivit) arbeta med ModelCraft, och hur du bestämmer vad den får röra.

ModelCraft har **ingen egen AI** och skickar ingenting någonstans. Du tar med assistenten: vilket program som helst som talar Model Context Protocol (MCP). ModelCraft ger den bara verktyg, och du väljer vilka.

## Slå på det

1. Öppna {{ui:Settings}} (kugghjulet i appfältet, eller {{key:Mod+,}}) och gå till fliken {{ui:ModelCraft}}.
2. Under {{ui:Assistants}} bockar du i **Låt AI-assistenter och skript använda ModelCraft**. Den är av tills du gör det.
3. Välj vad den får göra: **Läs** är ibockad från början; bocka i **Redigera**, **Spara** eller **Exportera** först när du behöver dem.

Verktyg utanför de behörigheter du bockat i erbjuds inte assistenten, och om den ändå ber om ett sådant nekar ModelCraft och skriver det i aktivitetsloggen. Att stänga av reglaget avslutar alla anslutningar på en gång; {{ui:Återställ ModelCraft-inställningarna}} stänger också av det.

## Anslut din assistent

Assistenter ansluter via **CadCraft Studio** på din dator: Studio kör en liten server som bara den här datorn kan nå, skyddad med en token som skapas varje gång den startar. I Studio väljer du {{ui:Anslut en assistent}} och kopierar adressen och token till din assistent (Studio visar exakt vilka inställningar du ska klistra in). Dela aldrig token.

:::note
En webbläsarflik kan inte öppna en anslutning för en assistent: i webbläsarappen har reglaget ingen effekt förrän du använder CadCraft Studio på din dator.
:::

## Du har kontrollen

- **Varje ändring är ett ångra-steg**, märkt med assistentens namn för det (till exempel "Assistent: box"). {{key:Mod+Z}} tar tillbaka assistentens senaste ändring i sin helhet.
- **Du vet när en är ansluten.** En knapp i appfältet visar assistentens namn medan den är ansluten; klicka på den för att se vad den får göra, eller för att **Koppla från** den.
- **Aktivitet.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}} › {{ui:Activity}} listar varje anrop: när, vilket verktyg, utfört eller nekat. {{ui:Save the log}} sparar en kopia.

## Vad en assistent kan begära

| Verktyg | Behörighet | Vad det gör |
|---|---|---|
| `app_info`, `model_describe` | Läs | Modellens enhet, storlek och varje grupp och komponent med var den är, om den är en sluten solid och dess volym |
| `view_screenshot` | Läs | En bild av 3D-vyn så som den visas |
| `box_add`, `cylinder_add` | Redigera | En låda eller en cylinder som en ny grupp, på en plats och i en storlek som du eller assistenten anger ("3m", "10'" eller ett tal i modellens enhet) |
| `instance_move`, `instances_erase` | Redigera | Flyttar eller raderar grupper och komponenter |
| `faces_list`, `materials_list` | Läs | Ytorna i en grupp eller i den löst liggande geometrin (varje yttas riktning, area och mittpunkt); materialen och färgerna den kan måla med |
| `push_pull` | Redigera | Trycker eller drar en yta, som {{ui:Push/pull}} gör |
| `paint` | Redigera | Målar ytor eller en hel grupp med en färg eller ett material |
| `group_make` | Redigera | Gör en grupp eller en komponent av lösa ytor och grupper |
| `scene_add`, `scene_show` | Redigera | Sparar vyn som en scen; går till en sparad scen |
| `mesh_add` | Redigera | Ett nätobjekt att börja från (kub, sfär, cylinder …), så som arbetsytan Nät lägger till det |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Läs / Redigera | Ett nätobjekts modifierarstack: spegling, matris, underindelning, fasning och resten; inget tillämpas permanent |
| `usd_export` | Exportera | Modellen som OpenUSD (.usda, .usdc eller .usdz), så som Spara modellen som USD skriver den ([USD](topic:usd)); till en mapp du tillåtit i Studio, annars en nedladdning |
| `render_still` | Exportera | En renderad bild av vyn eller av en sparad scen, så som knappen {{ui:Render}} i dialogrutan Rendera en bild gör den, med dina renderingsinställningar om den inte ber om andra (en scenförinställning: exteriör, interiör, sektion, natt eller auto; snabb eller hög kvalitet, storlek, samplingar, himmel); en PNG som den kan titta på, eller en PNG-, EXR- eller renderingsfil i en mapp du tillåtit i Studio ([Rendera en bild](topic:render)) |
| `render_queue` | Exportera | Lägger till bilder av hög kvalitet i renderingsdialogens kö (vyn eller sparade scener) och kör kön; de färdiga bilderna går till en mapp du tillåtit, eller stannar i renderingsdialogens {{ui:Renderingskö}} åt dig. Kräver WebGPU |
| `link_push` | Redigera | Uppdaterar en modell som är länkad från ett annat program (se [Håll en .3dm-modell levande](topic:live-3dm-link)) |
| `link_status` | Läs | Säger om en länkad modell fortfarande finns här och när den senast uppdaterades |
| `undo` | Redigera | Tar tillbaka sina egna steg |

Solider som en assistent skapar kommer in som grupper, så de slås aldrig ihop med det du ritat. Det finns inget verktyg som sparar modellen: sparande är kvar hos dig, och exportera eller rendera kräver att **Exportera** är ibockad. En rendering ändrar ingenting i modellen; att rendera en sparad scen flyttar vyn dit, som {{ui:Scenes}} gör.

## Om något inte fungerar

- **Assistenten ser inga ModelCraft-verktyg:** kontrollera att reglaget är på i det här fönstret, och att fönstret är öppet i Studio.
- **"behöver behörigheten Redigera":** bocka i **Redigera** under {{ui:Assistants}}, och be sedan om det igen.
- **"401"- eller "token"-fel:** token har ändrats (Studio startades om, eller {{ui:Ny token}}). Kopiera den nya till assistentens inställningar.

## Se även

- [Recept för AI-assistenter](common:assistants-recipes): arbetade exempel, vart och ett med de verktyg det anropar.
