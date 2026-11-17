---
title: Formati di file in dettaglio
summary: Esattamente cosa conserva, converte e tralascia ciascun formato che ModelCraft apre, importa ed esporta.
keywords: formati, tipi di file, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, unità, assi, y in alto, z in alto, millimetri, limiti
from: c47d2d28
---

Il modello di ModelCraft è in metri con Z (blu) in alto. Ogni formato qui sotto viene convertito da o verso quello.

## ModelCraft (.modelcraft)

| Voce | Dettagli |
|---|---|
| Apertura | {{ui:Apri}} ({{key:Mod+O}}) o trascinare nella vista. Sono accettati anche i file che terminano in `.json` |
| Salvataggio | {{ui:Salva}} ({{key:Mod+S}}), come download |
| Conserva | Tutto: geometria, facce e i loro colori, materiali e texture importate, lampade, spigoli morbidi, gruppi, componenti, nomi, guide, scene, unità, e l'ultima camera e lo stile |
| Tralascia | La cronologia di annullamento |
| Limite | 200 MB |

Un file salvato con una versione di ModelCraft più recente della propria viene rifiutato: "Questo modello è stato salvato con una versione più recente di ModelCraft (versione del file …). Aggiornare ModelCraft per aprirlo." Un file che non è un modello di ModelCraft riporta "Questo file non è un modello di ModelCraft (non è JSON)." oppure "Questo non è un file di ModelCraft apribile: …".

## USD (.usd, .usda, .usdc, .usdz)

Apertura, importazione, e {{ui:Salva come}} o {{ui:Esporta}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Un file USD salvato da ModelCraft si riapre senza perdite; i file USD di altri programmi si aprono come mesh, gruppi, componenti, lampade e camere. Vedi [Salvare, aprire ed esportare USD](topic:usd).

## Collada (.dae)

Importazione ed esportazione. Il formato migliore per scambiare modelli con altri modellatori 3D.

- **Esportazione:** Collada 1.4.1, Z in alto, metri. Una geometria per ogni definizione di gruppo o componente; i componenti sono scritti una sola volta e collocati per riferimento, quindi restano condivisi. Le facce con fori o contorni concavi vengono divise in triangoli. I colori diventano materiali. Gli spigoli sciolti vengono scritti come linee. I nomi non validi nel formato vengono adattati, e il nome esatto viene conservato accanto ad esso.
- **Importazione:** triangoli, poligoni (con fori), ventagli e strisce di triangoli diventano facce; le linee diventano spigoli. Si applicano le trasformazioni dei nodi, l'asse verticale del file e la sua unità. Un nodo collocato in più punti, o una geometria usata da più nodi, arriva come componente; gli altri nodi arrivano come gruppi. I colori del materiale (diffusi) diventano colori delle facce.
- **Non importato:** texture, skin e morph, camere, luci, alcuni tipi di trasformazione (look-at e skew), e riferimenti ad altri file. La barra di stato li conta.
- **Perso nell'esportazione:** quali spigoli sono morbidi. **All'importazione,** le superfici triangolate restano triangoli, con le diagonali ammorbidite così che le aree piane vengano lette come un'unica superficie.

## OBJ (.obj, .mtl)

Importazione ed esportazione.

- **Importazione:** trascinare il `.obj` insieme al suo `.mtl` e alle immagini delle texture (oppure importare il solo `.obj`: arriva senza materiali, e la barra di stato indica il `.mtl` che cercava). Letto in metri con Y in alto. Ogni oggetto (`o`, altrimenti `g`) diventa una [mesh](topic:meshes), con le sue facce mantenute così come sono (i quadrilateri restano quadrilateri). Coordinate di texture, normali e colori per vertice vengono mantenuti. L'immagine colore di un materiale (`map_Kd`, PNG, JPEG o WebP) arriva come texture, con le sue opzioni di scala e offset; altrimenti il suo colore (`Kd`). Gli spigoli dove le normali del file si interrompono sono rigidi; senza normali decidono i gruppi di lisciatura del file. Altre mappe (rilievo, normale), punti, linee e curve vengono contati e tralasciati. OBJ non ha unità, quindi un modello realizzato in millimetri o pollici arriva con la dimensione sbagliata: va scalato dopo l'importazione (vedi [Ruotare e scalare](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Esportazione:** metri, Y in alto, coordinate globali. Un oggetto per ogni posizionamento di gruppo; i componenti vengono scritti per intero a ogni posizionamento. Le mesh mantengono le proprie facce, coordinate di texture e normali; le facce unite da [spigoli morbidi](topic:soften) ricevono una normale per ogni angolo. Quando il modello ha colori, un `.mtl` viene scaricato accanto all'`.obj`. Quando ha texture importate, l'`.obj`, l'`.mtl` e le immagini vengono scaricati insieme come un unico `.zip`.
- **Limite:** 2 milioni di vertici o facce; 64 MB di testo.

## glTF (.glb, .gltf)

Importazione ed esportazione, glTF 2.0.

- **Importazione:** un `.glb`, oppure un `.gltf` insieme al suo `.bin` e ai file delle texture: trascinarli tutti insieme nella vista (oppure scegliere il `.glb`). Un `.gltf` dato da solo indica il file di cui ha bisogno: "Questo file .gltf richiede "…": aprire la versione .glb, oppure trascinare il .gltf insieme ai suoi file."
  - **Le mesh** arrivano come [mesh](topic:meshes), una per ogni mesh del file, con normali, coordinate di texture e colori per vertice del file mantenuti. Gli spigoli dove le normali del file si interrompono sono rigidi; il resto è morbido. Una mesh usata in più punti resta condivisa.
  - **I nodi** diventano gruppi, con il nome del file. Le mesh istanziate (EXT_mesh_gpu_instancing) arrivano come una sola mesh posizionata molte volte.
  - **Materiali:** una texture del colore base (PNG, JPEG o WebP) arriva come texture, posizionata secondo le coordinate di texture del file (con l'eventuale trasformazione della texture), e viene mantenuta al salvataggio; altrimenti il colore base. Metallo, rugosità, mappe di normale, vetro, clear coat, sheen e le altre estensioni dei materiali vengono letti ma non ancora mantenuti: la barra di stato lo segnala.
  - **Luci** (KHR_lights_punctual): le luci puntiformi e a faro diventano [lampade](topic:lights). Le luci direzionali vengono contate: il sole illumina il modello.
  - **Camere** diventano [scene](topic:scenes).
  - **Personaggi con scheletro** arrivano nella posa di riposo del file; ossa, animazioni e morph target vengono contati e non ancora mantenuti.
  - **File compressi** (Draco, meshopt) e dati quantizzati vengono letti. I decodificatori si caricano solo per un file che li richiede.
  - Punti e linee vengono contati e tralasciati (una mesh contiene facce). Le texture KTX2 vengono tralasciate; le facce mantengono il loro colore.
- **Esportazione** (`.glb`): glTF 2.0 binario, metri, Y in alto. Una mesh per definizione, quindi i componenti restano condivisi. Le mesh mantengono normali, coordinate di texture e colori per vertice; le facce unite da [spigoli morbidi](topic:soften) hanno normali lisce. Colori e materiali diventano materiali (un materiale come colore); le texture importate vengono scritte come texture. Le lampade accese diventano luci puntiformi e a faro (le lampade d'area non hanno equivalente in glTF e vengono escluse); le scene diventano camere. Gli spigoli sciolti vengono esclusi.
- **Limite:** file fino a 300 MB; circa 130 milioni di numeri di geometria.

## STL (.stl)

Importazione ed esportazione.

- **Importazione:** binario o ASCII. STL non ha unità: viene letto in **millimetri**, come le stampanti e l'esportazione di ModelCraft lo scrivono. I vertici nello stesso punto vengono uniti, quindi un pezzo chiuso arriva come una [mesh](topic:meshes) chiusa. I colori nel file (le convenzioni VisCAM / SolidView e Materialise) colorano le facce.
- **Esportazione,** per la stampa 3D: STL binario, **millimetri**, Z in alto. Solo triangoli: gruppi e spigoli sciolti vengono esclusi. Le facce colorate portano il loro colore nella convenzione VisCAM / SolidView, che gli altri programmi ignorano se non la leggono. Esportare solidi chiusi per una stampa pulita.

## STEP (.step, .stp)

Solo importazione. STEP è ciò che i modellatori di parti e i fornitori inviano: file AP203, AP214 e AP242.

- **Importazione:** ModelCraft legge il file da sé, nella pagina, e trasforma ogni solido in una [mesh](topic:meshes) chiusa di triangoli: le facce piane restano piane, le facce curve (cilindri, coni, sfere, tori, superfici B-spline) diventano molte piccole facce piane, con gli spigoli interni a una faccia curva morbidi e quelli tra due facce vivi. I file STEP dichiarano la loro unità; il modello arriva alla sua dimensione reale. Un assieme arriva con ogni parte dove il file la colloca, ogni parte come una mesh propria in un gruppo con il nome del file. Colori, nomi delle parti dell'albero di assieme e tolleranze (PMI) non vengono letti.
- **Messaggi:** ciò che è stato saltato o disegnato più grossolanamente viene aggiunto alla riga di stato ("Note: …"); un file senza solidi, un file danneggiato o uno oltre i limiti lo dice e non aggiunge nulla.
- **Limite:** file fino a 300 MB; 400 000 facce e 8 milioni di triangoli.

## .3dm

Solo importazione. I file `.3dm` contengono modelli NURBS: polysurface, superfici, mesh, curve e blocchi.

- **Importazione:** ModelCraft legge il file da sé, nella pagina. Le mesh arrivano così come sono; ogni faccia di una polysurface o di un'estrusione proviene dalla mesh di render salvata con essa nel file, altrimenti ModelCraft la tassella (piani, superfici NURBS, superfici di rotazione, curve estruse, estrusioni; ritagliate dai loro spigoli, polysurface chiuse come mesh chiuse). Le curve diventano spigoli, i blocchi diventano componenti (blocchi dentro blocchi conservati), i layer diventano tag (nascosti quando spenti), il colore dell'oggetto (il suo, quello del suo layer o del suo materiale) colora le sue facce. Il file dichiara la sua unità; il modello arriva alla sua dimensione reale. Passo per passo: [Importare un modello .3dm](topic:import-3dm-files).
- **Messaggi:** la riga di stato indica quante facce provengono dalle mesh salvate e quante sono state tassellate, e nomina ciò che è stato escluso: punti, nuvole di punti, testo, quote, tratteggi, luci, oggetti SubD, facce su tipi di superficie non ancora letti, blocchi collegati.
- **Limite:** file fino a 300 MB.

## PLY (.ply)

Importazione ed esportazione, per mesh con colori (scansioni, stampa 3D a colori, altri modellatori).

- **Importazione:** ASCII e binario. Le facce diventano una [mesh](topic:meshes) con le loro normali, coordinate di texture e colori per vertice mantenuti; ogni faccia viene colorata con il più vicino tra 4.096 colori, così si vedono subito i colori. PLY non ha unità né convenzione di asse: le coordinate arrivano come sono (metri, Z in alto). Un PLY con solo punti è una nuvola di punti: va aperto in BimCraft o CivilCraft.
- **Esportazione:** PLY binario con posizioni, normali e colori (e coordinate di texture quando il modello le ha), in metri, Z in alto.

## FBX (.fbx)

Solo importazione. File FBX 7 (dal 2011 in poi), binari o ASCII, letti dal lettore proprio di ModelCraft.

- Le mesh arrivano come [mesh](topic:meshes) con normali, coordinate di texture (ogni set UV) e colori per vertice; una mesh usata da più oggetti resta condivisa. Gli oggetti diventano gruppi con le loro trasformazioni (sono incluse le posizioni del perno, gli offset e le pre-rotazioni).
- Materiali: la texture diffusa — incorporata nel file, oppure un'immagine trascinata insieme all'`.fbx` — arriva come texture (le immagini TGA vengono mantenute come PNG); altrimenti il colore diffuso. Le altre impostazioni dei materiali attendono il nuovo modello di materiale.
- Si applicano l'asse verticale e l'unità del file: tutto arriva con Z in alto, in metri.
- Le luci puntiformi e a faro diventano [lampade](topic:lights) (un'intensità FBX di 100 corrisponde alla lampada predefinita di ModelCraft, 800 lumen: le intensità FBX non hanno unità). Le camere diventano [scene](topic:scenes).
- I personaggi con scheletro arrivano in posa di riposo; ossa e animazioni vengono contate e non ancora mantenute. Le luci direzionali e d'area, e la geometria diversa dalle mesh (NURBS, curve), vengono contate ed escluse.
- I file FBX 6 e precedenti vengono rifiutati: salvarli di nuovo come FBX 2011 o successivo.

## Alembic (.abc)

Solo importazione: cache di geometria da programmi di animazione ed effetti.

- Le mesh (poligonali e di suddivisione) arrivano come [mesh](topic:meshes), con le loro coordinate di texture e normali; le trasformazioni diventano gruppi. Alembic è Y in alto e viene ruotato in Z in alto; metri.
- Una cache con molti campioni (un'animazione) arriva al suo primo campione; la barra di stato indica quanti ne ha.
- Punti, curve, superfici NURBS, camere e luci vengono contati ed esclusi. I file nel vecchio layout HDF5 vengono rifiutati: salvarli di nuovo come file Alembic Ogawa.

{{ui:Verifica per la stampa 3D (STL o 3MF)…}} controlla prima la forma e scrive la selezione, o tutto ciò che è visibile. Vedi [Preparare un modello per la stampa 3D](topic:print-3d).

## 3MF (.3mf)

Solo esportazione, da {{ui:Verifica per la stampa 3D (STL o 3MF)…}}. 3MF core: una mesh in **millimetri**, Z in alto, con i suoi colori come materiali. La maggior parte dei programmi di slicing lo legge, e a differenza di STL dichiara la sua unità. Le cose nascoste vengono escluse. Vedi [Preparare un modello per la stampa 3D](topic:print-3d).

## Esportazione DWG e DXF (.dwg, .dxf)

Per programmi CAD. Il modello viene scritto nella sua unità: pollici per i modelli in piedi e pollici, altrimenti millimetri, centimetri o metri (la barra di stato la indica).

- **Le facce** diventano facce 3D (triangoli). Le linee dentro una faccia e gli spigoli morbidi vengono scritti invisibili, così le facce appaiono come in ModelCraft.
- **Gli spigoli sciolti** diventano linee.
- **Gruppi e componenti** diventano blocchi: un componente viene scritto una sola volta e collocato tante volte quante è usato, incluse le copie ruotate e specchiate. Un gruppo che è stato allungato dopo essere stato ruotato (quindi inclinato) viene scritto nella sua posizione.
- **Colori:** DWG mantiene esattamente il colore di ogni faccia; DXF usa il più vicino dei 255 colori CAD standard.
- **Versioni:** DWG è scritto come AutoCAD 2004 (AC1018), che i programmi CAD dal 2004 in poi aprono. DXF è R12 (AC1009), la versione che ogni programma CAD legge; R12 non ha un campo unità, quindi va indicato al programma CAD quale unità usare.
- **Non scritti:** guide, quote, scene e camera.

## IFC (.ifc)

Solo esportazione, per BimCraft e altri programmi BIM. IFC4 con un progetto, un sito, un edificio e i suoi piani. Ogni gruppo o componente di primo livello diventa un proxy di elemento edilizio con il suo nome; quelli chiusi vengono scritti come forme solide (brep sfaccettati), quelli aperti come modelli a superficie; i fori nelle facce vengono conservati. La geometria sciolta al primo livello diventa un unico elemento chiamato "Geometria sciolta". Nessun tipo, proprietà o materiale.

**Piani:** {{ui:Esporta}} › {{ui:Piani IFC…}} li elenca, ciascuno con un nome e una quota ({{ui:Aggiungi piano}}, oppure {{ui:Ricava dal modello}}, che crea un piano per ogni altezza su cui poggiano i gruppi di primo livello). All'esportazione, ogni gruppo o componente va sul piano al livello o sotto il suo punto più basso, e conserva la sua posizione. Senza piani, tutto va su un unico piano, "Livello 1", a 0. I piani vengono salvati nel file di ModelCraft.

## DWG (.dwg) e DXF (.dxf)

Importati come linee sul terreno (le campiture e le facce 3D come facce); esportati come descritto sopra. Vedi [Modellare su una planimetria](topic:site-plan).

- **Lettura:** linee, polilinee (con archi), polilinee 3D, cerchi, archi e riferimenti a blocco, incluse le serie, dallo spazio modello. Gli oggetti invisibili (come gli stati nascosti di un blocco dinamico) vengono esclusi. Le curve diventano 48 pezzi rettilinei per giro completo.
- **Letti dalla versione 0.4:** spline ed ellissi (come spigoli), testo, testo multilinea e valori di attributo (come spigoli in un carattere a tratto singolo), tratteggi (facce con fori), facce 3D e riempimenti solidi (facce), e quote (disegnate dai blocchi di quota del disegno stesso).
- **Letti dalla versione 0.7:** solidi 3D, regioni e corpi (i loro dati ACIS, DWG e DXF di ogni versione), ciascuno come gruppo proprio, quelli chiusi come solidi. Le facce su superfici diverse da piani, cilindri, coni, sfere, tori e semplici superfici spline vengono escluse ed elencate.
- **Non letti:** punti, tabelle, multiline, immagini e tutto ciò che è nello spazio carta.
- **Unità:** prese dal disegno quando lo dichiara. Altrimenti ModelCraft chiede.
- **DXF** deve essere ASCII. Il DXF binario viene rifiutato.
- **DWG** dalla versione AutoCAD R13 fino al formato attuale (AutoCAD 2018 e successivi; da AC1012 ad AC1032) viene letto dal lettore DWG proprio di ModelCraft, nella pagina; fa parte di ModelCraft, quindi funziona offline ogni volta che funziona ModelCraft. Le versioni più vecchie (R12 e precedenti) e i file gravemente danneggiati non possono essere letti; salvarli come DXF.
- **Limiti:** coordinate oltre 10.000 km dall'origine, o oltre 2 milioni di pezzi di linea, vengono rifiutate.

## File SKP

{{ui:Importa}} (o trascinare il file nella vista) legge i file di SketchUp con il lettore proprio di ModelCraft, nella pagina: niente viene caricato, e funziona offline ogni volta che funziona ModelCraft. Testato con file di SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 e 2026; altre versioni dovrebbero aprirsi, ma non sono ancora state provate. Il modello arriva come un unico gruppo con il nome del file. Un {{key:Mod+Z}} lo rimuove di nuovo. Passo per passo: [Importare un modello SKP](topic:import-sketchup-files).

- **Conservati:** facce con i loro fori, gruppi (come gruppi) e componenti (come componenti, condivisi), i loro nomi e posizionamenti, colori, tag su gruppi e componenti, spigoli che non fanno parte di una faccia, e spigoli morbidi e lisci, così le superfici curve restano lisce.
- **Colori:** il materiale proprio di una faccia ne dà il colore. Un materiale applicato a un gruppo o componente diventa la vernice di quel posizionamento, così le facce interne senza un colore proprio lo ereditano, come in SketchUp; un componente dipinto con due colori resta un unico componente.
- **Tag** su gruppi e componenti diventano tag di ModelCraft, mostrati o nascosti come erano. I tag su facce e spigoli sciolti non vengono conservati (ModelCraft tagga solo gruppi e componenti); la barra di stato li conta.
- **Le cose nascoste arrivano nascoste** (facce, spigoli, gruppi, componenti, e facce e spigoli su un tag nascosto), così si vede ciò che mostrava SketchUp; {{ui:Mostra tutto}} le rende visibili.
- **Texture:** una faccia dipinta con un materiale testurizzato conserva la sua texture, posizionata come nel file, e il file di ModelCraft conserva l'immagine. Una texture su un intero gruppo o componente, una texture mancante dal file, o un'immagine che i browser non sanno mostrare (come un file Photoshop) conserva solo il colore del materiale.
- **Esclusi, e contati nella barra di stato:** immagini collocate nel modello. Testo, quote, guide, piani di sezione, scene e stili non vengono letti.
- **Unità:** i file di SketchUp sono in pollici all'interno; ModelCraft li converte, quindi le dimensioni risultano corrette in qualsiasi unità.
- **Salvataggio di `.skp`** non è ancora implementato. Per riportare un modello in SketchUp, esportare Collada (`.dae`).

## Non supportato

ModelCraft non può aprire file 3DS o IFC, e non può salvare file 3DS, FBX, STEP, `.3dm` o SketchUp (`.skp`).
