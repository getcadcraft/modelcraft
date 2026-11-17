---
title: Renderitza una imatge del model
summary: Feu una imatge que sembli la llum del dia: cel, sol segons el lloc i la data del model, ombres suaus, aspectes de vidre i metall, i després deseu-la com a PNG.
keywords: renderitza, preajust, preajustos, preajust d'escena, interior, exterior, vista de secció, nit, un clic, renderitzat, traçat de camins, traçat de raigs, il·luminació global, reflexions, refracció, alta qualitat, foto, fotorealista, realista, imatge, png, fixa, cel, sol, llum del dia, ombres, ombres suaus, oclusió ambiental, vidre, metall, brillant, materials, exposició, brillantor, ennuvolat, crepuscle, estudi, presentació, boira, bruma, vapor, fum, núvol, volum, raigs de llum, càustiques, mostreig adaptatiu, soroll
from: 517ba4d3
---

{{ui:Renderitza una imatge…}} fa una imatge de la vista que sembla la llum del dia i no un dibuix: un cel, el sol a la posició que li donen el lloc i la data del model, ombres suaus, llum de tot el cel que enfosqueix els racons i els buits, i colors que poden semblar vidre, metall o pintura brillant. El model no es modifica.

## Renderitza la vista

1. Prepareu la vista com voleu que surti la imatge: oriente, feu zoom, trieu una [escena](topic:scenes), amagueu el que no ha de sortir. La imatge fa servir la càmera de la mateixa vista.
2. Feu clic a {{ui:Exporta}} al grup {{ui:Fitxer}}, i després a {{ui:Renderitza una imatge…}}.
3. Trieu una {{ui:Escena}} si la premuda no és la que voleu (vegeu [Preajustos d'escena](topic:render#scene-presets-a-good-picture-in-one-click)), trieu la {{ui:Mida}} i feu clic a {{ui:Renderitza}}.

   La imatge es va omplint mentre es renderitza i es fa més suau a cada passada. {{ui:Atura}} (o {{key:Esc}}) la finalitza abans i conserva la imatge que hi ha fins aleshores.

4. Feu clic a {{ui:Desa}} per baixar-la (un PNG, tret que {{ui:Desa com a}} digui una altra cosa).

:::tip
Comenceu amb {{ui:Esborrany}} a {{ui:La mida de la vista}} per comprovar la càmera i l'aspecte, i després renderitzeu {{ui:Bo}} o {{ui:Millor}} a una mida més gran per a la imatge final.
:::

## Preajustos d'escena: una bona imatge amb un sol clic

A la part superior del diàleg hi ha quatre botons {{ui:Escena}}. Cadascun defineix el cel, la brillantor, el terra, les línies de les arestes, la qualitat i el sol amb un sol clic, de manera que no cal aprendre res abans de la primera imatge. Feu clic a un i després a {{ui:Renderitza}}.

| Escena | Què defineix | Per a què serveix |
|---|---|---|
| {{ui:Exterior}} | Cel clar, el sol propi del model, terra activat | L'edifici des de fora |
| {{ui:Interior}} | Cel ennuvolat (llum uniforme, sense taques de sol fortes), mig punt més brillant | Una vista des de dins d'una sala |
| {{ui:Vista de secció}} | Estudi blanc, sense terra, línies de les arestes al renderitzat ràpid | Un model tallat per una secció |
| {{ui:Nit}} | El sol amagat (mitjanit a ple hivern per a l'hemisferi del lloc), un punt més brillant | Llums que il·luminen el model. Sense llums la imatge és fosca |

- {{ui:Escull per a aquesta vista}} ho tria per vosaltres: {{ui:Vista de secció}} quan hi ha un tall de secció activat, {{ui:Interior}} quan la càmera és dins del model, i {{ui:Exterior}} en la resta de casos. La primera vegada que obriu el diàleg comença així sol.
- Totes les configuracions són a sota i es poden canviar. Quan en canvieu una, l'escena deixa de correspondre, cap botó no queda premut i la línia sota els botons diu que les configuracions són les vostres. Torneu a fer clic a l'escena per tornar-hi a posar els seus valors.
- Una escena no toca el motor, el mode, la mida, els materials, la càmera ni les llums.

:::note
Les escenes donen els mateixos valors a ModelCraft i a BimCraft. El resultat final depèn del model i de la targeta gràfica.
:::

## Configuració

| Configuració | Què fa |
|---|---|
| {{ui:Mida}} | La mida de la vista, el doble de la mida de la vista, Full HD, 4K o quadrat. Les mides fixes mantenen la càmera de la vista i mostren més o menys als costats |
| {{ui:Mode}} | {{ui:Ràpid}}, o {{ui:Alta qualitat (traçat de camins)}} (a sota) amb el seu {{ui:Límit de temps}} |
| {{ui:Qualitat}} | Quantes passades (o, en alta qualitat, mostres) es fan la mitjana: {{ui:Esborrany}} 16, {{ui:Bo}} 64, {{ui:Millor}} 256. Més passades donen ombres i vores més suaus i triguen més |
| {{ui:Cel}} | {{ui:Cel clar}}, {{ui:Ennuvolat}} (llum suau, ombres febles), {{ui:Crepuscle}} (llum baixa i càlida) o {{ui:Estudi blanc}} (un fons blanc simple) |
| {{ui:Sol}} | El sol ve de la data, l'hora i el lloc a {{ui:Estil}} › sol. Activeu {{ui:Trieu una altra data i hora per a aquesta imatge}} per provar una altra hora sense canviar l'estil del model |
| {{ui:Brillantor}} | Més clar o més fosc, per passos (punts) |
| {{ui:Terra sota el model}} | Un terra que rep les ombres i s'esvaeix a l'horitzó. Desactiveu-lo per a un model que flota |
| {{ui:Dibuixa les arestes}} | Dibuixa les arestes del model amb línies fines sobre la imatge, per a un aspecte de dibuix |

Quan el sol és sota l'horitzó a l'hora triada és de nit: el cel es fosca i les [lluminàries](topic:lights) del model l'il·luminen. El diàleg ho indica.

Les configuracions es desen al fitxer `.modelcraft`, de manera que la següent imatge del mateix model comença on l'heu deixat.

## Fes que els colors semblin vidre o metall

A {{ui:Materials}}, cada color de la pantalla té un aspecte: {{ui:Mat}}, {{ui:Satinat}}, {{ui:Brillant}}, {{ui:Metall}}, {{ui:Metall pulit}}, {{ui:Vidre}} o {{ui:Vidre esmerilat}}. {{ui:Cares sense pintar}} són les cares que no tenen color propi.

Per fer que les finestres siguin de vidre, [pinteu](topic:paint) els vidres amb un sol color i després poseu aquest color a {{ui:Vidre}}. El vidre deixa veure el cel i el que hi ha darrere, tenyit pel seu color, i reflecteix el cel.

:::note
Al mode {{ui:Ràpid}}, el vidre i el metall reflecteixen el cel, no la resta del model, i la llum no es doblega en travessar el vidre. El mode {{ui:Alta qualitat (traçat de camins)}} més avall fa les dues coses.
:::

## Alta qualitat

Trieu {{ui:Mode}} › {{ui:Alta qualitat (traçat de camins)}} per a una imatge que segueix la llum tal com la veu una càmera:

- la llum rebota entre superfícies, de manera que una sala il·luminada per una finestra o per una lluminària queda il·luminada per tot arreu i els colors es tenyeixen cap als veïns;
- el vidre és vidre de veritat: la llum es doblega en travessar-lo i el vidre reflecteix el model;
- el metall i les superfícies polides reflecteixen la resta del model;
- els panells de llum il·luminen com a panells, amb ombres suaus.

És molt més lent que {{ui:Ràpid}}: cada passada torna a traçar la llum de cada píxel. La imatge comença amb gra i es neteja a mesura que s'acumulen les mostres; per això comenceu petit ({{ui:La mida de la vista}}, {{ui:Esborrany}}) i trieu un {{ui:Límit de temps}}: quan s'acaba, es conserva la imatge que hi ha fins aleshores. {{ui:Atura}} també la conserva. La primera passada espera mentre el navegador prepara el traçador de camins.

Quan el navegador té WebGPU, el traçador de camins és el propi de CadCraft i funciona a la targeta gràfica; la línia sota la imatge diu {{ui:Traçat de camins a la targeta gràfica (WebGPU)}}. Després de {{ui:Atura}} o del límit de temps, {{ui:Reprèn}} continua la mateixa imatge fins que tingui totes les mostres; si canvieu una configuració o torneu a premer {{ui:Renderitza}}, es comença de nou. Sense WebGPU, la imatge es fa amb traçat de camins amb WebGL (la línia ho diu) i no s'ofereix {{ui:Reprèn}}.

:::linux
Firefox i la majoria de configuracions de Chrome a Linux encara no tenen WebGPU, de manera que l'alta qualitat fa servir WebGL en aquests casos.
:::

En aquest mode no es dibuixen les arestes, les textures de la biblioteca mostren el seu color i la seva rugositat però no els seus relleus (un [material fet amb nodes](topic:shading#in-high-quality-pictures) mostra la seva normal i els relleus), i el tall de secció es fa sobre el model abans de començar la imatge.

{{ui:Reducció de soroll (elimina el gra que queda després de les mostres)}} està activada per defecte: quan la imatge acaba, o s'atura, el gra que queda s'elimina amb una xarxa neuronal feta per a això (la xarxa publicada per Intel Open Image Denoise, que s'executa al vostre ordinador: a la targeta gràfica o, si no, al processador). Una imatge amb poques mostres surt neta; {{ui:Mostra}} › {{ui:La imatge abans de reduir el soroll}} la mostra tal com s'ha renderitzat.

## Renderitza a la vista

L'espai de treball {{ui:Renderitza}} fa anar el traçador de camins a la mateixa vista: oriente, editeu el model o canvieu una llum i torna a començar a l'instant. {{ui:Regió}}: arrossegueu un rectangle i només es renderitza; {{ui:Vista completa}} torna enrere. {{ui:Enfoca}}: feu clic on ha de quedar nítid, i la profunditat de camp s'enfoca allà. {{ui:Detall}} fixa quants píxels de la vista es renderitzen (menys és més ràpid). {{ui:Pausa}} atura i continua. Necessita WebGPU: sense ell, l'espai de treball ho diu, i {{ui:Exporta}} › {{ui:Renderitza una imatge…}} funciona igualment.

## Cels i perfils de llum a la targeta gràfica

Amb WebGPU, l'alta qualitat té dos cels més:

- {{ui:Cel físic}} calcula la llum del dia segons l'altura del sol: un blau profund a dalt, una franja pàl·lida a l'horitzó i un sol que es torna més càlid i més fosc a mesura que baixa. {{ui:Bruma}} va d'un dia molt clar (2) a un de brumós (10).
- {{ui:Imatge de cel (HDRI)}} il·lumina el model amb una panoràmica d'un lloc real. {{ui:Trieu una imatge…}} accepta un fitxer `.hdr` o `.exr` equirectangular; {{ui:Gira}} el fa girar al voltant del model i {{ui:Brillantor de la imatge}} el fa més clar o més fosc. La imatge té el seu propi sol, de manera que no s'hi afegeix el sol del model. Només es conserva mentre la pàgina és oberta: després de reobrir-la, torneu-la a triar.

Cada lluminària de la llista {{ui:Lluminàries}} pot prendre un perfil de llum de fabricant: {{ui:Perfil IES…}} llegeix un fitxer IES (LM-63) i la lluminària llança la seva llum com ho fa aquell accessori (un downlight estret, un il·luminador de paret). Totes les lluminàries amb aquell nom l'usen, i cada una conserva la seva pròpia brillantor. Feu clic al nom del perfil per deixar d'usar-lo.

Les finestres de vidre transparent ajuden la llum del cel a entrar a una sala, de manera que les imatges interiors sota un cel es netegen abans.

El mode {{ui:Ràpid}} i el traçador de camins amb WebGL mostren el {{ui:Cel físic}} i la {{ui:Imatge de cel (HDRI)}} com a cel clar, i ignoren els perfils de llum.

## La càmera

{{ui:Càmera}} prepara la imatge com una fotografia:

- {{ui:Exposició}}: manteniu el {{ui:Control de brillantor}}, o trieu {{ui:Configuració de la càmera}} i definiu {{ui:Obertura (f-stop)}}, {{ui:Velocitat d'obturació}} i {{ui:ISO}} com en una càmera; l'EV al costat és el valor d'exposició habitual. f/16 a 1/100 s i ISO 100 correspon a un dia assolellat; una escena més fosca vol una obertura més gran, un obturador més lent o un ISO més alt. Això funciona en tots els modes.
- {{ui:Profunditat de camp}} desenfoca el que és més a prop o més lluny que la {{ui:Distància d'enfocament (m)}}, com ho faria una lent amb aquell f-stop (deixeu-la buida per enfocar el que hi ha al mig de la vista); {{ui:Forma de l'obertura}} dona als reflexos fora de focus una forma rodona o amb pales.
- {{ui:Perspectiva de dos punts (les línies verticals es mantenen verticals)}} anivella la càmera i desplaça la imatge, com ho fa una lent de desplaçament arquitectònica, de manera que les parets no es vegin inclinades quan mireu cap amunt o cap avall a un edifici.
- {{ui:Balanç de blancs}} fixa quin color de llum es veu blanc: més baix (per exemple 3000 K) per a la llum càlida de les lluminàries, més alt per a l'ombra i els dies ennuvolats.
- {{ui:Projecció}}: {{ui:Panorama de 360°}} fa una imatge 2:1 de tot el que hi ha al voltant de la càmera, per a visualitzadors de panoràmiques; {{ui:Panorama estereoscòpic de 360°}} apila un panorama per a l'ull esquerre i un per a l'ull dret, per a cascos de realitat virtual; {{ui:Mapa cúbic (6 cares)}} fa sis vistes quadrades en una graella de 3 × 2. L'amplada surt de {{ui:Mida}}.

Projecció, profunditat de camp, perspectiva de dos punts i balanç de blancs necessiten el traçador de camins a la targeta gràfica (WebGPU), de manera que només apareixen a {{ui:Alta qualitat}}.

## Acaba la imatge

{{ui:Imatge}} aplica a la imatge d'alta qualitat una graduació com la d'una fotografia, i cada control canvia la imatge acabada a l'instant, sense tornar a renderitzar:

- {{ui:Aspecte (transformació de visualització)}}: {{ui:ACES filmic}} (la imatge com abans), {{ui:AgX}} (més suau, manté el color amb llum molt intensa), {{ui:Filmic}} (una corba de pel·lícula suau) o {{ui:Estàndard}} (simple; la llum molt intensa es talla a blanc).
- {{ui:Contrast}} i {{ui:Compressió de llums altes}} (recupera detall a les parts molt il·luminades).
- {{ui:Halo}} (un resplendor suau al voltant de la llum intensa), {{ui:Enlluernament}} amb els seus {{ui:Rajos d'enlluernament}} (raigs en forma d'estrella des dels punts més brillants) i {{ui:Vinyeta}} (cantons més foscos).
- {{ui:Taula de colors (.cube)…}} aplica una graduació de color des d'un fitxer `.cube`, amb la seva {{ui:Intensitat de la taula de colors}}; com una imatge de cel, només es conserva mentre la pàgina és oberta.

## Desa la imatge

{{ui:Desa com a}} al costat de {{ui:Desa}} tria el fitxer: {{ui:PNG}}, {{ui:JPEG}} o {{ui:WebP}} per compartir (JPEG i WebP només on el navegador els pot escriure), i després d'una renderització d'alta qualitat a la targeta gràfica també:

- {{ui:PNG, 16 bits}}: la imatge graduada amb passos més fins entre tons, per imprimir o per seguir editant.
- {{ui:EXR, totes les capes (coma flotant de 32 bits)}}: la imatge tal com s'ha renderitzat (llum lineal, sense graduació), amb cada element de renderitzat i cada grup de llums com a capa pròpia, per a programes de composició.
- {{ui:Fitxer de renderitzat (.ccrender, per graduar-lo més tard)}}: tot el que el diàleg necessita per tornar a barrejar i graduar la imatge. {{ui:Obre un fitxer de renderitzat…}} el torna a carregar, amb la seva barreja i la seva graduació, sense renderitzar.

## Barreja les llums després del renderitzat

Activeu {{ui:Barreja de llums (canvia el color i la brillantor de cada llum després del renderitzat)}} abans de premer {{ui:Renderitza}}. Quan la imatge acaba (o s'atura), {{ui:Barreja la imatge}} enumera les seves llums en grups: el cel, el sol, i les lluminàries pel nom (cada lluminària amb el mateix nom és un grup). Apagueu un grup, doneu-li un color o feu-lo més clar o més fosc, i la imatge canvia a l'instant, sense tornar a renderitzar. {{ui:Desa la barreja}} guarda la barreja amb un nom per triar-la més tard; {{ui:Tal com s'ha renderitzat}} torna a la imatge tal com es va fer. {{ui:Desa}} desa la imatge barrejada.

{{ui:Elements de renderitzat (albedo, normals, profunditat, difús, especular, transmissió, emissió, ID)}} conserva també les parts de la imatge. {{ui:Mostra}} canvia la vista a una d'elles: els colors de superfície (albedo), les normals, la profunditat, la llum difusa, especular i transmesa (cadascuna directa i indirecta), el que emet llum i el cel, i un color per objecte o per material per fer màscares.

Tots dos mantenen capes extra a la targeta gràfica. A mides grans una targeta gràfica pot no tenir prou espai; el diàleg ho indica i una mida més petita funciona.

## La cua de renderització

Després d'una configuració d'alta qualitat, {{ui:Afegeix aquesta imatge a la cua}} sota {{ui:Cua de renderització}} conserva la imatge tal com està ara; el {{ui:Afegeix aquesta animació a la cua}} del diàleg de vídeo fa el mateix per a una animació sencera, amb traçat de camins fotograma a fotograma. {{ui:Inicia la cua}} els renderitza un darrere l'altre en aquest ordinador, i {{ui:Desa}} al costat de cada imatge acabada la baixa. Si tanqueu la pàgina, la cua es manté: obriu el mateix model i continua on s'havia aturat. La cua necessita WebGPU.

## Boira, fum, soroll i càustiques

Això és a {{ui:Boira, fum i soroll}} i funciona en {{ui:Alta qualitat}} a la targeta gràfica; els altres motors no ho inclouen.

- {{ui:Boira i bruma}} omple l'aire fins a una altura amb una boira que il·luminen el sol, el cel i les lluminàries. {{ui:Fins on es pot veure, en metres}} fixa com n'és de densa (uns 100 m és una bruma lleugera, 20 m una boira espessa), {{ui:Alçada de la boira sobre el terra, en metres}} és on acaba, i {{ui:Raigs de llum}} indica com de lluent és la boira cap a la llum. La llum del sol surt de la boira per la seva part superior, de manera que on el sol entra per una finestra o entre edificis es veu en forma de raigs de llum.
- {{ui:Fum o núvol}} afegeix un volum de fum o de núvol il·luminat com la boira. {{ui:Tipus}} és un {{ui:Núvol}}, una {{ui:Columna de fum}} o {{ui:Des d'un fitxer de volum (.ccvol)}}, el format de graella propi de CadCraft. {{ui:Detall}} i {{ui:Variació}} canvien un núvol o una columna ja fets; {{ui:Mida del seu costat més llarg, en metres (0 = la mida del model)}}, {{ui:Mou X (m)}}, {{ui:Mou Y (m)}}, {{ui:Mou Z (m)}} i {{ui:Gira}} el situen (comença al mig del model); {{ui:Gruix}} el fa més dens, {{ui:Brillantor cap endavant}} el fa més brillant cap a la llum, i {{ui:Color}} el tenyeix. Un fitxer de volum només es conserva mentre la pàgina és oberta, com una imatge de cel.
- {{ui:Atura abans on la imatge és neta (mostreig adaptatiu)}} no dona més mostres als píxels que ja s'han estabilitzat, de manera que la resta de la imatge acaba abans. {{ui:Soroll acceptable}} és la quantitat de gra que queda quan un píxel s'atura. La línia sota la imatge diu quantes mostres ha rebut de mitjana un píxel.
- {{ui:Càustiques (llum desviada pel vidre o reflectida pels miralls)}} traça la llum de les lluminàries i del sol, de manera que la taca brillant sota una bola de vidre o la llum d'un mirall a una paret surt neta en lloc de granulosa. Està desactivada mentre hi ha boira, fum, {{ui:Barreja les llums després del renderitzat}} o elements de renderitzat, i és pensada per a imatges fixes, no per a imatges de 360°, animacions o l'espai de treball {{ui:Renderitza}}.

## Quant triga

La imatge es fa al vostre ordinador, amb la seva targeta gràfica; no es puja res. Quant triga depèn d'aquesta targeta. El temps creix amb les passades i els píxels: {{ui:Millor}} té 16 vegades les passades d'{{ui:Esborrany}}, i una imatge 4K té uns quatre cops els píxels d'una Full HD. Un ordinador sense targeta gràfica també renderitza, però més lentament.

:::note
Si el diàleg diu que el navegador no pot renderitzar imatges, el navegador no té WebGL 2. Actualitzeu-lo, o activeu l'acceleració per maquinari a la seva configuració.
:::
