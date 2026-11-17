---
title: Novetats de la versió 0.9
summary: Etapa d'impressió amb el nostre propi slicer i enviament per USB, Klipper, OctoPrint i PrusaLink, laminat per a resina i complements de fitxers, flux de materials, complements de bessó digital i de planta de fàbrica, NURBS amb empalmaments, engrossiment i ajust a escàner, RA a l'obra i deu mètodes d'arc.
keywords: novetats, què hi ha de nou, notes de la versió, registre de canvis, 0.9, etapa d'impressió, impressió 3D, envia a la impressora 3D, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impressió de resina, goo, sl1, ctb, anycubic, prova d'exposició, flux de materials, bessó digital, planta de fàbrica, plc, transportador, nurbs, empalmament, engrossir, ajust a escaneig, ra, a l'obra, mètodes d'arc, unitats, 0.8, 0.8.1, versió, funcions noves, motor de render, motor, obre amb, usd, gltf, unreal, motor de complements, superfícies, loft, escombrat, continuïtat, g0, g1, g2, zebra, step, iges, digues l'escena, escena, temps, hora del dia, estació, assistent, material a partir d'una foto, foto, foto d'un croquis, amoblar, amoblar una habitació, inclinat, tall inclinat, dividir, revisió d'impressió, problemes, quadrícula de propietats, llums, idiomes, dispositius d'entrada, files de la barra d'eines, dwg, en directe
from: 169048a2
---

Això és el que ha canviat a ModelCraft 0.9, en comparació amb la 0.8.1. ModelCraft ara arriba a la impressora i a la planta de fàbrica: podeu posar objectes en un llit d'impressió i enviar-los sense exportar, laminar per a filament o resina, i dissenyar una línia de manipulació de materials. Això és CadCraft Studio 0.9 i les seves vuit aplicacions; la majoria de les noves funcions següents són complements.

## Novetats

### Impressió 3D

- **Etapa d'impressió.** Feu clic a {{ui:Etapa d'impressió}} a la barra d'eines. Afegiu elements de la Biblioteca al llit de la impressora, ordeneu-los, mireu les capes laminades i premeu {{ui:Envia a la impressora 3D}}, sense cap STL per exportar. Pertany al complement 3D Print, que està activat per defecte i es pot eliminar com qualsevol complement. Vegeu [Poseu objectes al llit d'impressió i envieu-los a una impressora](topic:print-stage).
- **El nostre propi slicer de filament.** {{ui:CadCraft basic (inclòs, el més ràpid)}} és el slicer de la llista **Slicer** de la targeta: parets, pells, farciment, suports i una faldilla, en un worker perquè la pàgina continuï sent utilitzable. {{ui:Previsualitza les capes}} amb el control lliscant **Capa** mostra les capes abans d'enviar. Els perfils d'impressora, com els estils Ender-3 i Prusa MK4, porten el seu propi G-code d'inici.
- **Enviament.** Per USB (Chrome o Edge en un ordinador, amb la pàgina oberta), o a Klipper (Moonraker), OctoPrint o PrusaLink a la vostra xarxa. Res no es connecta ni s'envia sense un clic, i l'enviament demana confirmació abans.
- **Altres slicers.** Kiri:Moto, PrusaSlicer i OrcaSlicer són complements propis, desactivats per defecte; afegiu-los des de la targeta o des de {{ui:Configuració}} › {{ui:Complements}}. PrusaSlicer i OrcaSlicer usen la vostra còpia instal·lada des de CadCraft Studio. El complement d'impressores Bambu Lab talla amb el vostre OrcaSlicer i les seves configuracions P2S, i necessita Studio en un ordinador.
- **Impressió en resina.** Els complements de resina (desactivats per defecte) fan imatges de capa per a la pantalla de la vostra impressora, amb buidat i forats de ventilació, una base i suports, una previsualització de capes, i temps, resina i cost. Els complements de format de fitxer escriuen Elegoo GOO, SL1, Chitubox (CBDDLP i CTB 2 a 5) i Anycubic (PWMX i PWS). Una prova d'exposició de resina fa una escala de cinc exposicions. Vegeu [Lamineu per a una impressora de resina](topic:resin-printing).
- **Sense canvis.** {{ui:Exporta}} › {{ui:Comprova la impressió 3D (STL o 3MF)…}}, les eines d'impressió i Divideix per imprimir funcionen com a la 0.8. Vegeu [Prepareu un model per a la impressió 3D](topic:print-3d).

### Flux de materials, bessó digital i planta de fàbrica

Aquests tres són complements, desactivats fins que els activeu a {{ui:Configuració}} › {{ui:Complements}}, i cadascun té la seva pròpia ajuda quan està activat.

- **Flux de materials.** Un tauler anomenat Flux de materials disposa cintes transportadores, estacions, buffers i camins d'AGV a la vista 3D, executa una simulació amb llavor, la reprodueix, i mostra el rendiment, els temps de lliurament i les cues, amb els resultats desats com a CSV. Les comandes poden venir d'un fitxer CSV. Les cèl·lules de robots es poden revisar i exportar. L'enllaç de PLC té un mode suau i un mode real sobre Modbus TCP, que només funciona a CadCraft Studio.
- **Bessó digital.** Llegeix la disposició de Flux de materials i executa un PLC suau sobre ella, amb fallades que podeu forçar, proves d'estoc, una comparació de disposicions i una llista de materials.
- **Planta de fàbrica.** Converteix les estacions en màquines i cel·les, les llegeix en directe o des d'un simulador, i manté una cua de treballs i un OEE simple. Només llegeix: aquesta versió no pot escriure a cap màquina ni PLC.

### Superfícies, models i dibuix

- **Empalmaments, engrossiment i booleans en NURBS.** El tauler {{ui:Superfícies}} té {{ui:Empalmament entre cares}}, {{ui:Empalmament de diverses arestes}}, {{ui:Engrossix fins a convertir en sòlid}} i Unió, Resta i Intersecció, cadascun amb la seva desviació mesurada. Vegeu [Superfícies de forma lliure (NURBS)](topic:nurbs-surfaces).
- **Ajusteu superfícies a un escaneig.** Seleccioneu una malla escanejada i useu {{ui:Ajusta superfícies a l'escaneig}} al grup **Scan**, després {{ui:Uneix les superfícies en un sòlid}}. És un primer ajust, no un paquet complet de enginyeria inversa.
- **Un enllaç en directe des d'un modelador .3dm.** Unidireccional, des de Rhino 8 o Grasshopper, i necessita CadCraft Studio al mateix ordinador. Vegeu [Manteniu un model .3dm en directe](topic:live-3dm-link).
- **Vegeu el model a l'obra.** {{ui:Vista a l'obra (RA, telèfon)}} al menú {{ui:Vistes}} funciona en un telèfon Android amb Chrome. Vegeu [Vegeu el model a l'obra amb un telèfon Android (RA)](topic:ar-on-site).
- **Mètodes d'arc.** El desplegable {{ui:Mètodes d'arc}} ofereix deu maneres de dibuixar un arc, incloses {{ui:3 punts}} i {{ui:Inici, centre, final}}.
- **Més unitats.** Els pesos (kg, lb, t, ton) i les temperatures (graus C, F, K i R) s'entenen allà on escriviu valors amb unitats.

## En totes les aplicacions

- **Missatges emergents.** El text en passar el ratolí sobre els botons i les etiquetes retallades és una eina emergent de Bootstrap.
- **Consell inicial que es pot tancar.** La targeta de consell a l'àrea de dibuix buida té una petita x per tancar-la. Es queda tancada, i la paleta d'ordres la pot tornar a mostrar.
- **Files de pestanyes amb desplaçament.** La fila de pestanyes d'un tauler que no hi cap es desplaça en lloc de quedar retallada.
- **Títols de les pestanyes.** Amb un document obert, la pestanya del navegador comença pel nom del document, després ModelCraft i CadCraft. Un punt va al davant mentre té canvis sense desar.
- **Disposició.** {{ui:Configuració}} › {{ui:General}} › Disposició conté les disposicions en una llista desplegable, amb una opció per usar una disposició només en aquesta aplicació i un botó per restablir-la.
- **Idiomes.** La llista d'idiomes de la Configuració segueix els fitxers d'idioma que conté la compilació. Els idiomes diferents de l'anglès són esborranys automàtics.
- **Viu i Biblioteca.** Live TeamWork mostra els cursors i els noms en directe, i les col·leccions de la Biblioteca donen a cada aplicació una col·lecció per defecte.

## Corregit

- {{ui:Reprodueix}} es converteix en {{ui:Pausa}} mentre una animació es reprodueix, i {{key:Space}} reprodueix i pausa mentre la línia de temps és oberta.
- La renderització fixa torna a WebGL quan la targeta gràfica no pot iniciar el traçador de camins. La vista de renderització en directe encara pot mostrar l'error; això no s'ha comprovat en una màquina Windows amb aquest controlador.
- El mode real de Flux de materials torna a connectar-se després que un enllaç acabés amb respostes d'excepció del PLC.

## Límits honestos

- Res no s'ha imprès en una impressora real: ni filament, ni resina, ni a través de Bambu Connect. Els fitxers de resina només els han llegit els propis lectors de CadCraft.
- El bessó digital i la planta de fàbrica s'han provat només contra simuladors i respostes conegudes, sense PLC, línia o protocol reals. Són ajuts per a la revisió, no una validació de seguretat. La física només cobreix caixes, fins a vuit càrregues.
- L'enllaç amb Rhino i Grasshopper mai no s'ha executat als programes reals.
- Els idiomes que no són l'anglès són esborranys automàtics.

## Anterior: 0.8 i 0.8.1

Això és el que ha canviat a ModelCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02), en comparació amb la 0.7. El diàleg {{ui:Renderitza una imatge…}} ara pot enviar l'escena a un altre programa, el tauler Superfícies fa superfícies de forma lliure suaus, i un assistent que connecteu pot definir una escena sencera amb una sola frase.

### Novetats

**Renderitzat**

- **Una opció de motor.** {{ui:Renderitza una imatge…}} té una llista **Motor** sobre Mode. Els nostres dos motors propis, Ràpid i el Traçador de camins, són els predeterminats i funcionen a tot arreu. Les altres entrades desen l'escena com a paquet (el model com a fitxer USD, més un fitxer de configuració amb els valors exactes dels materials, les llums encesos, el sol, el cel, l'exposició i la càmera) per portar-lo a un altre programa. Una imatge dibuixada per un altre programa diu quin programa i quina versió la van fer. Vegeu [Trieu quin programa dibuixa la imatge](topic:render-engines).
- **Obre en un altre programa.** La llista Motor pot desar l'escena com a fitxer USD, com a fitxer glTF (`.glb`) o com a carpeta de projecte Unreal (`.zip`), al navegador i a CadCraft Studio. A Studio també pot iniciar usdview o el programa propi de l'ordinador per al fitxer. Vegeu [Obre l'escena en un altre programa](topic:render-open-in).
- **Envia a un motor de jocs des de Studio.** Studio escriu l'escena en un projecte d'Unreal Engine i la manté sincronitzada en cada enviament, només en un sentit. Les vostres edicions viuen en una capa que CadCraft mai no escriu. Vegeu [Envieu l'escena a un motor de jocs](topic:render-unreal).
- **Motors dels complements.** Un complement pot afegir un motor a la llista. Un escrit en JavaScript dibuixa al navegador i a Studio; un que executa un programa necessita el vostre sí a Studio. Vegeu [Dibuixa la imatge amb un altre programa](topic:render-other-program) i [Afegeix un motor de renderitzat amb un complement](topic:render-engine-addons).
- **Digues l'escena.** Digueu al vostre assistent connectat "capvespre, pluja lleugera, arbres de tardor, persones a la plaça" i ModelCraft ho prepara en un sol pas: el sol es mou a la data i hora perquè les ombres segueixin, el cel canvia, apareixen superfícies mullades, i els arbres i les persones es col·loquen com a objectes reals en etiquetes que podeu amagar, moure o eliminar. L'hora del dia, la data o l'estació, i el temps (clar, ennuvolat, boira, pluja lleugera, pluja, tempesta) també funcionen per separat, i una petició posterior canvia la mateixa escena. La boira es mostra en la imatge d'alta qualitat a la targeta gràfica; els altres motors mostren el cel, la llum i les superfícies mullades. La pluja no es dibuixa com a traços que cauen.

**Materials**

- **Un material a partir d'una foto.** Doneu a ModelCraft una foto d'una superfície (una paret, un terra, pedra) i en fa un material de mosaic: la il·luminació de la foto s'aplana, les vores es fan coincidir, i un mapa de color, un mapa de rugositat i un mapa de normals es calculen a partir de la imatge. És un processament d'imatge simple sobre la vostra pròpia foto, sense cap model entrenat. La rugositat és una estimació. Una foto plana, quadrada i de cara dona el millor mosaic; un patró fort com els maons pot mostrar un fantasma suau on la unió es barreja.

**Superfícies**

- **Superfícies de forma lliure.** El tauler {{ui:Superfícies}} fa corbes NURBS i superfícies sense retallar: corbes que passen per punts, loft, reglada, extrusió, revolució, escombrats al llarg d'un o dos rails, superfícies a partir d'una xarxa de corbes, pedaços a partir de quatre arestes, coincidència i mescla. Cada aresta compartida es mesura com a G0, G1 o G2 (buit, angle, salt de curvatura) sobre les superfícies exactes, i una aresta pitjor del que heu demanat apareix al tauler Problemes amb una correcció **Coincideix**. Les franges zebra i els colors de curvatura es dibuixen a partir de les superfícies exactes. Els fitxers STEP i IGES surten i entren. Vegeu [Superfícies de forma lliure (NURBS)](topic:nurbs-surfaces).

**Lloc i habitacions**

- **Una foto d'un croquis al terra.** {{ui:Fitxer}} › {{ui:Importa una foto d'un croquis…}} converteix una foto amb el telèfon d'un croquis a mà en arestes sobre el terra a l'escala que indiqueu: un grup, amb una etiqueta per a cada color de bolígraf. El paper es troba i s'enderroca al vostre ordinador, i no s'envia res enlloc. Vegeu [Modela sobre un plànol de situació](topic:site-plan).
- **Amoblar una habitació.** Seleccioneu un terra i useu {{ui:Organitza}} › {{ui:Amobla una habitació…}}. Mobles de dormitori, sala d'estar, menjador, cuina, bany o oficina es col·loquen per regles, contra les parets i lluny de portes i finestres, en un grup que podeu treure d'un cop. És una disposició per defecte que heu de revisar, no un disseny. Vegeu [Biblioteca inicial](topic:starter).

**Impressió 3D**

- **Talls inclinats.** Divideix per imprimir pot inclinar els seus talls fins a 60 graus, cosa que dona més superfície d'encolat a les peces. Els connectors es mantenen perpendiculars al tall. Vegeu [Divideix un model per imprimir](topic:print-split).
- **La revisió d'impressió a Problemes.** Les troballes de la revisió d'impressió 3D es mostren al tauler Problemes amb marcadors sobre el model, i Repara les corregeix des d'allà. Vegeu [Suports, gruix de paret, buidatge i reparació](topic:print-tools).

**En totes les aplicacions**

- **Idiomes.** L'ajuda i les aplicacions arriben en 54 idiomes. Deu són noves: lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili i uzbek. Els idiomes diferents de l'anglès són esborranys automàtics fins que els llegeixi un parlant natiu, i els temes d'ajuda poden ser encara en anglès.
- **Dispositius d'entrada.** Un touchpad, un llapis, un ratolí 3D, un comandament de joc i els controls MIDI poden manejar les aplicacions, per a totes o només per a una.
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › Files de la barra d'eines defineix Ajustar (com abans), 2 files o 1 fila. Una barra que no hi cap es desplaça lateralment en lloc de treure espai al dibuix. Ajustar continua essent el predeterminat.
- **Quadrícula de propietats.** Els camps de les làmpades de ModelCraft usen la quadrícula compartida: categories plegables, columnes d'etiqueta i valor, i densitat Compacta. L'aritmètica escrita com `2*450` continua funcionant.
- **Problemes.** El tauler Problemes (el botó d'advertència de la barra de l'aplicació) és compartit per totes les aplicacions. A ModelCraft conté la revisió d'impressió i els avisos de continuïtat de les superfícies.
- **En directe.** Una sessió de Live TeamWork mostra qui és on. Vegeu [Modeleu junts amb Live TeamWork](topic:work-live).
- **Complements.** Els complements poden afegir motors de renderitzat, com s'ha dit abans.
- **Connecteu la vostra IA.** Les proves i el contracte d'eines de les vuit aplicacions passen, amb 454 eines en total. La connexió en un clic dins de Studio, un connector allotjat per als assistents del navegador, la vostra pròpia clau dins de Studio i un paquet publicat encara no es prometen. Les aplicacions no tenen cap IA pròpia. Vegeu [Usa ModelCraft amb assistents d'IA](topic:use-with-ai-assistants).

### Corregit a la 0.8.1

- **Secció de classes del DWG.** La secció de classes d'un fitxer DWG es llegia com el tipus equivocat, cosa que podia trencar el fitxer en importar-lo. Ara es llegeix bé, a ModelCraft i a les altres aplicacions que llegeixen DWG.
- **Tauletes en vertical.** L'alçada sobrant de la graella va al llenç, i la disposició del plànol comença amb 760 píxels d'amplada o menys. La fulla d'estils de ModelCraft també té el canvi.
- **Idioma a Studio.** CadCraft Studio i les edicions empaquetades poden canviar d'idioma mentre s'executen; abans eren només en anglès. Això encara no s'ha provat a totes les plataformes: digueu-nos si l'idioma no canvia.

### Encara no a aquesta versió

- **No té signatura de codi.** Windows pot mostrar SmartScreen: trieu {{ui:Més informació}}, i després {{ui:Executa igualment}}. A un Mac, feu clic dret i trieu {{ui:Obre}}. Les compilacions per a botigues estan en espera, i la compilació per a iPad i iPhone no es va refer per a la 0.8.1.
- Un altre programa que dibuixa la imatge sense un complement de motor de renderitzat, les panoràmiques o les càmeres estèreo, i una imatge de cel a través d'un altre programa, i el connector que obre l'escenari d'Unreal encara no hi són. Els fitxers s'escriuen; el connector no s'ha publicat i no s'ha executat a Unreal.
- Superfícies de forma lliure: G3 i classe A no es mesuren ni es garanteixen, i el retall i els sòlids vindran més endavant.
- Les imatges d'altres programes no són píxel a píxel com les nostres: només coincideixen la càmera, el sol, les llums i l'exposició.
- La correcció de la 0.8.1 per al canvi d'idioma a Studio no està provada a totes les plataformes.

La resta és a [Encara no implementat](topic:not-built-yet). Per a la versió anterior, vegeu [Novetats de la versió 0.7](topic:whats-new-0-7).
