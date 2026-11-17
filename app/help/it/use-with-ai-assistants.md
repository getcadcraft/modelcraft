---
title: Usare ModelCraft con un assistente IA
summary: Lasciare che un proprio assistente IA o uno script esamini il modello e crei semplici solidi: permessi, collegamento tramite CadCraft Studio e registro delle attività.
keywords: ai, assistente, agente, mcp, model context protocol, script, automazione, modellazione, cubo, cilindro, render, coda di render, permessi, disconnetti, attività
from: 629cd0b7
---

## Cosa si impara

Come lasciare che un assistente IA (o uno script scritto dall'utente) lavori con ModelCraft, e come stabilire a cosa può accedere.

ModelCraft **non ha un'IA propria** e non invia nulla a nessuno. L'assistente va fornito dall'esterno: qualsiasi programma che supporti il Model Context Protocol (MCP). ModelCraft gli mette a disposizione solo degli strumenti, e si sceglie quali.

## Attivarlo

1. Aprire {{ui:Impostazioni}} (l'ingranaggio nella barra dell'app, oppure {{key:Mod+,}}) e passare alla scheda {{ui:ModelCraft}}.
2. In {{ui:Assistenti}}, spuntare **Consenti agli assistenti IA e agli script di usare ModelCraft**. È disattivato finché non lo si fa.
3. Scegliere cosa può fare: **Lettura** è spuntata all'inizio; spuntare **Modifica**, **Salva** o **Esporta** solo quando servono.

Gli strumenti non compresi nei permessi spuntati non vengono offerti all'assistente; se questo ne chiede uno comunque, ModelCraft lo rifiuta e lo annota nel registro delle attività. Disattivare l'interruttore chiude subito tutte le connessioni; anche {{ui:Reimposta impostazioni di ModelCraft}} lo disattiva.

## Collegare l'assistente

Gli assistenti si collegano tramite **CadCraft Studio** sul proprio computer: Studio avvia un piccolo server raggiungibile solo da questo computer, protetto da un token che genera ogni volta che si avvia. In Studio, scegliere {{ui:Collega un assistente}} e copiare indirizzo e token nell'assistente (Studio mostra le impostazioni esatte da incollare). Il token non va mai condiviso.

:::note
Una scheda del browser non può aprire una connessione per un assistente: nelle app da browser l'interruttore non ha effetto finché non si usa CadCraft Studio sul proprio computer.
:::

## Restare al comando

- **Ogni modifica è un unico passo di annulla**, etichettato con il nome che l'assistente le ha dato (ad esempio "Assistente: box"). {{key:Mod+Z}} annulla per intero l'ultima modifica dell'assistente.
- **Si sa quando ne è collegato uno.** Un pulsante nella barra dell'app indica il nome dell'assistente mentre è collegato; fare clic per vedere cosa può fare o per **Disconnetti**.
- **Attività.** {{ui:Impostazioni}} › {{ui:ModelCraft}} › {{ui:Assistenti}} › {{ui:Attività}} elenca ogni chiamata: quando, quale strumento, eseguita o rifiutata. {{ui:Salva il registro}} conserva una copia.

## Cosa può chiedere un assistente

| Strumento | Permesso | Cosa fa |
|---|---|---|
| `app_info`, `model_describe` | Lettura | L'unità del modello, la dimensione e ogni gruppo e componente con la sua posizione, se è un solido chiuso e il suo volume |
| `view_screenshot` | Lettura | Un'immagine della vista 3D così come appare |
| `box_add`, `cylinder_add` | Modifica | Un cubo o un cilindro come nuovo gruppo, in una posizione e con una dimensione indicate dall'utente o dall'assistente ("3m", "10'" oppure un numero nell'unità del modello) |
| `instance_move`, `instances_erase` | Modifica | Sposta o cancella gruppi e componenti |
| `faces_list`, `materials_list` | Lettura | Le facce di un gruppo o della geometria libera (direzione, area e centro di ciascuna); i materiali e i colori con cui può dipingere |
| `push_pull` | Modifica | Spinge o tira una faccia, come fa {{ui:Spingi/tira}} |
| `paint` | Modifica | Dipinge facce o un intero gruppo con un colore o un materiale |
| `group_make` | Modifica | Crea un gruppo o un componente da facce e gruppi liberi |
| `scene_add`, `scene_show` | Modifica | Salva la vista come scena; passa a una scena salvata |
| `mesh_add` | Modifica | Un oggetto mesh da cui partire (cubo, sfera, cilindro …), come lo aggiunge l'area di lavoro Mesh |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Lettura / Modifica | La pila di modificatori di una mesh: specchio, serie, suddivisione, smusso e gli altri; nulla viene applicato in modo definitivo |
| `usd_export` | Esporta | Il modello come OpenUSD (.usda, .usdc o .usdz), come lo scrive il salvataggio del modello in USD ([USD](topic:usd)); in una cartella consentita in Studio, altrimenti come download |
| `render_still` | Esporta | Un'immagine renderizzata della vista o di una scena salvata, come la produce il pulsante {{ui:Render}} della finestra {{ui:Render}}, con le impostazioni di Render salvo che richieda altre (una preimpostazione di scena: esterno, interno, sezione, notte o automatica; veloce o alta qualità, dimensione, campioni, cielo); un PNG da esaminare, oppure un file PNG, EXR o di render in una cartella consentita in Studio ([Render di un'immagine](topic:render)) |
| `render_queue` | Esporta | Aggiunge immagini ad alta qualità alla coda della finestra Render (la vista oppure scene salvate) ed esegue la coda; le immagini terminate vanno in una cartella consentita oppure restano nella {{ui:Coda di render}} della finestra Render. Richiede WebGPU |
| `link_push` | Modifica | Aggiorna un modello collegato da un altro programma (vedi [Mantenere un modello .3dm in tempo reale](topic:live-3dm-link)) |
| `link_status` | Lettura | Indica se un modello collegato è ancora presente e quando è stato aggiornato l'ultima volta |
| `undo` | Modifica | Annulla i propri passi |

I solidi creati da un assistente entrano come gruppi, quindi non si fondono mai con quanto disegnato. Non esiste alcuno strumento che salva il modello: il salvataggio resta a carico dell'utente, ed esportare o renderizzare richiede **Esporta** spuntato. Un render non modifica nulla nel modello; renderizzare una scena salvata sposta la vista su di essa, come fa {{ui:Scene}}.

## Se qualcosa non funziona

- **L'assistente non vede gli strumenti di ModelCraft:** verificare che l'interruttore sia attivo in questa finestra e che la finestra sia aperta in Studio.
- **"richiede il permesso di modifica":** spuntare **Modifica** sotto {{ui:Assistenti}}, poi richiedere di nuovo.
- **Errori "401" o "token":** il token è cambiato (Studio è stato riavviato, oppure è stato creato un {{ui:Nuovo token}}). Copiare il nuovo token nelle impostazioni dell'assistente.

## Vedi anche

- [Ricette per assistenti IA](common:assistants-recipes): esempi svolti, ciascuno con gli strumenti che usa.
