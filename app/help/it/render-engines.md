---
title: Scegliere quale programma disegna l'immagine
summary: La scelta Motore nella finestra Render: i nostri due motori, gli altri programmi in CadCraft Studio, e cosa fa il web al loro posto.
keywords: render, motore, renderer, motore di rendering, plug-in, plugin, studio, programma esterno, disegnato da, coda, motore add-on
from: be4b056a
---

{{ui:Render di un'immagine…}} ha una scelta **Motore** sopra Modalità. I nostri due motori sono sempre presenti e funzionano ovunque; gli add-on possono aggiungerne altri, e in CadCraft Studio l'elenco contiene anche i programmi che prendono in carico la scena.

| Motore | Cosa fa | Dove |
|---|---|---|
| Integrato: Veloce | L'immagine fissa rapida: luce diurna, ombre morbide, aspetti di vetro e metallo, in pochi secondi | Il browser e Studio |
| Integrato: Path tracer | Luce che rimbalza tra le superfici sulla scheda grafica o sul processore, la coda di rendering e gli altri computer della rete | Il browser e Studio |
| Il motore di un add-on | Disegna e restituisce l'immagine: vedere [Disegnare l'immagine con un altro programma](topic:render-other-program) | Il browser (un motore scritto in JavaScript) oppure Studio (un motore che esegue un programma) |
| Un programma che prende in carico la scena | Studio mette la scena nella sua cartella e la tiene sincronizzata | Studio |
| Apri in … | Salva la scena e la apre in un programma; non torna nulla: vedere [Aprire la scena in un altro programma](topic:render-open-in) | Il web salva il file |

## Come si comporta la scelta

- Scegliere Veloce o Path tracer cambia con esso la Modalità, e viceversa. Nient'altro nella finestra cambia per chi non usa mai un altro motore.
- Un motore non disponibile resta nell'elenco con il motivo ("non trovato", "richiede una versione più recente"); non si può sceglierlo. Nel browser un motore che funziona solo in Studio mostra "salva un file": {{ui:Render di un'immagine…}} salva allora la scena e le sue impostazioni in un file da portare a quel programma.
- La scelta viene salvata con le impostazioni di render del file, e il motore scelto per ultimo è il motore iniziale per i file che non hanno una scelta propria.
- Un'immagine prodotta da un altro programma indica quale programma l'ha disegnata e la sua versione, nella finestra e nella coda di rendering. Le promesse della pagina [Render](topic:render) riguardano solo i **nostri** motori: un altro programma illumina, tonalizza e campiona a modo suo, quindi due immagini della stessa scena sono simili per inquadratura, sole, lampade ed esposizione, ma non pixel per pixel.

## Cosa riceve ogni motore

La scena va a un altro programma come **pacchetto**: il modello come file USD (lo stesso file che scrive [Salva come USD](topic:usd)), e un file di impostazioni che contiene ciò di cui un importatore USD non è affidabile: i valori esatti dei materiali, le lampade accese con potenza e profili di luce, il sole, il cielo, l'esposizione e la camera come la finestra la disegnerebbe. Non viene caricato nulla da nessuna parte.

## La coda di rendering

Un'immagine o un'animazione per un altro programma può attendere nella [coda di rendering](topic:render#the-render-queue) come quelle nostre; il suo lavoro ricorda per quale motore è. Un'animazione va al programma in un'unica esecuzione.
