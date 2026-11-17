---
title: Naudoti ModelCraft su DI asistentu
summary: Leiskite savo DI asistentui ar scenarijui žiūrėti modelį ir kurti paprastus kietuosius kūnus: leidimai, prijungimas per CadCraft Studio ir veiklos žurnalas.
keywords: DI, asistentas, agentas, mcp, model context protocol, scenarijus, automatizavimas, modeliavimas, dėžė, cilindras, atvaizdavimas, atvaizdavimo eilė, leidimai, atjungti, veikla
from: 629cd0b7
---

## Ko išmoksite

Kaip leisti DI asistentui (ar jūsų parašytam scenarijui) dirbti su ModelCraft ir nuspręsti, ko jis gali liesti.

ModelCraft **neturi savo DI** ir niekur nieko nesiunčia. Asistentą pasirenkate patys: bet kurią programą, kalbančią pagal Model Context Protocol (MCP). ModelCraft tik suteikia jam įrankius, o pasirenkate, kuriuos.

## Įjungimas

1. Atidarykite {{ui:Parametrai}} (krumpliaratį programos juostoje arba {{key:Mod+,}}) ir eikite į skirtuką {{ui:ModelCraft}}.
2. Skiltyje {{ui:Asistentai}} pažymėkite **Leisti DI asistentams ir scenarijams naudoti ModelCraft**. Kol to nepadarysite, ši funkcija išjungta.
3. Pasirinkite, ką jis gali daryti: **Skaityti** pradžioje pažymėta; pažymėkite **Redaguoti**, **Įrašyti** ar **Eksportuoti** tik tada, kai jų prireikia.

Įrankiai, kurių leidimų nepažymėjote, asistentui nepasiūlomi; jei jis vis tiek paprašys vieno, ModelCraft atsisakys ir tai įrašys į veiklos žurnalą. Išjungus jungiklį, visi ryšiai nutrūksta iš karto; {{ui:Atstatyti ModelCraft parametrus}} jį išjungia taip pat.

## Prijunkite asistentą

Asistentai jungiasi per **CadCraft Studio** jūsų kompiuteryje: Studio paleidžia nedidelį serverį, kurį pasiekia tik šis kompiuteris, ir jis apsaugotas prieigos raktu, kurį Studio sukuria kiekvieną kartą paleidus. Studio programoje pasirinkite {{ui:Prijungti asistentą}} ir nukopijuokite adresą bei prieigos raktą į savo asistentą (Studio parodo tiksliai, ką įklijuoti). Niekada neatskleiskite prieigos rakto.

:::note
Naršyklės skirtukas negali atidaryti ryšio asistentui: naršyklės programose jungiklis neveikia, kol nenaudojate CadCraft Studio savo kompiuteryje.
:::

## Jūs išlaikote kontrolę

- **Kiekvienas pakeitimas – vienas anuliavimo žingsnis**, pažymėtas asistento pavadinimu (pavyzdžiui, „Assistant: box“). {{key:Mod+Z}} atšaukia paskutinį asistento pakeitimą visą.
- **Matote, kada asistentas prijungtas.** Programos juostos mygtukas rodo asistentą, kol jis prijungtas; spustelėkite jį, kad pamatytumėte, ką jis gali daryti, arba kad {{ui:Atjungti}} jį.
- **Veikla.** {{ui:Parametrai}} › {{ui:ModelCraft}} › {{ui:Asistentai}} › {{ui:Veikla}} rodo kiekvieną iškvietimą: kada, kuris įrankis, įvykdytas ar atmestas. {{ui:Įrašyti žurnalą}} išsaugo jo kopiją.

## Ko asistentas gali prašyti

| Įrankis | Leidimas | Ką daro |
|---|---|---|
| `app_info`, `model_describe` | Skaityti | Modelio vienetas, dydis, kiekviena grupė ir komponentas bei jų vieta, ar tai uždarasis kietasis kūnas ir jo tūris |
| `view_screenshot` | Skaityti | 3D vaizdo nuotrauka, kaip jis rodomas |
| `box_add`, `cylinder_add` | Redaguoti | Dėžė ar cilindras kaip nauja grupė, toje vietoje ir dydžio, kurį nurodote jūs ar asistentas („3m“, „10'“ ar skaičius modelio vienetais) |
| `instance_move`, `instances_erase` | Redaguoti | Perkelia arba ištrina grupes ir komponentus |
| `faces_list`, `materials_list` | Skaityti | Grupės ar laisvosios geometrijos paviršiai (kiekvieno kryptis, plotas ir centras); medžiagos ir spalvos, kuriomis galima dažyti |
| `push_pull` | Redaguoti | Stumia arba traukia paviršių, kaip tai daro {{ui:Stumti/traukti}} |
| `paint` | Redaguoti | Dažo paviršius ar visą grupę spalva arba medžiaga |
| `group_make` | Redaguoti | Sukuria grupę ar komponentą iš laisvųjų paviršių ir grupių |
| `scene_add`, `scene_show` | Redaguoti | Išsaugo vaizdą kaip sceną; perjungia į išsaugotą sceną |
| `mesh_add` | Redaguoti | Tinklelio objektas, nuo kurio pradėti (kubas, sfera, cilindras …), kaip jį prideda tinklelio darbo sritis |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Skaityti / Redaguoti | Tinklelio modifikatorių krūva: veidrodis, masyvas, paviršiaus skaidymas, nuolydis ir kiti; niekas neuždedama galutinai |
| `usd_export` | Eksportuoti | Modelis kaip OpenUSD (.usda, .usdc arba .usdz), kaip jį įrašo išsaugojimas USD formatu ([USD](topic:usd)); į aplanką, kurį leidote Studio, kitu atveju – atsisiuntimas |
| `render_still` | Eksportuoti | Vaizdo ar išsaugotos scenos atvaizduota nuotrauka, kaip ją daro {{ui:Atvaizduoti}} mygtukas dialoge {{ui:Atvaizduoti}}, su jūsų atvaizdavimo parametrais, nebent prašo kitų (scenos nustatymas: išorė, vidus, pjūvis, naktis arba automatinis; greitas ar aukštos kokybės, dydis, mėginiai, dangus); PNG, kurį ji gali peržiūrėti, arba PNG, EXR ar atvaizdavimo failas aplanke, kurį leidote Studio ([Atvaizduoti nuotrauką](topic:render)) |
| `render_queue` | Eksportuoti | Prideda aukštos kokybės nuotraukas į atvaizdavimo dialogo eilę (vaizdą arba išsaugotas scenas) ir paleidžia eilę; baigtos nuotraukos keliauja į aplanką, kurį leidote, arba lieka dialogo {{ui:Atvaizdavimo eilė}} jums. Reikia WebGPU |
| `link_push` | Redaguoti | Atnaujina modelį, susietą iš kitos programos (žr. [Laikyti .3dm modelį gyvą](topic:live-3dm-link)) |
| `link_status` | Skaityti | Nurodo, ar susietas modelis dar čia ir kada paskutinį kartą atsinaujino |
| `undo` | Redaguoti | Atšaukia savo žingsnius |

Asistento sukurti kietieji kūnai įtraukiami kaip grupės, todėl niekada nesusilieja su tuo, ką nubrėžėte. Nėra įrankio, kuris išsaugotų modelį: išsaugojimas lieka jums, o eksportavimui ar atvaizdavimui reikia pažymėto **Eksportuoti**. Atvaizdavimas modelio nekeičia; išsaugotos scenos atvaizdavimas perkelia vaizdą į ją, kaip tai daro {{ui:Scenos}}.

## Jei kas nors neveikia

- **Asistentas nemato ModelCraft įrankių:** patikrinkite, ar jungiklis įjungtas šiame lange ir ar langas atidarytas Studio.
- **„needs the edit permission“:** pažymėkite **Redaguoti** skiltyje {{ui:Asistentai}}, tada paklauskite dar kartą.
- **„401“ ar „token“ klaidos:** prieigos raktas pasikeitė (Studio paleista iš naujo arba {{ui:Naujas prieigos raktas}}). Nukopijuokite naująjį į asistento parametrus.

## Taip pat žr.

- [Receptai DI asistentams](common:assistants-recipes): pavyzdžiai, kiekvienas su įrankiais, kuriuos jis iškviečia.
