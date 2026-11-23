---
title: Novetats de la 0.9 (anteriors)
summary: Etapa d'impressió amb el nostre laminador i enviament per USB, Klipper, OctoPrint i PrusaLink, laminat per a resina i complements de format de fitxer, flux de materials, complements de bessó digital i planta de fabricació, arrodoniments NURBS, engrossiment i ajust a l'escaneig, AR a l'obra i deu mètodes d'arc.
keywords: novetats 0.9, versió anterior, novetats, notes de la versió, registre de canvis, 0.9, etapa d'impressió, impressió 3D, envia a la impressora 3D, laminador, cadcraft bàsic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impressió en resina, goo, sl1, ctb, anycubic, prova d'exposició, flux de materials, bessó digital, planta de fabricació, plc, cinta transportadora, nurbs, arrodoniment, engrossir, ajust a l'escaneig, ar, a l'obra, mètodes d'arc, unitats, 0.8, 0.8.1, versió, funcions noves, motor de renderització, motor, obre en, usd, gltf, unreal, motor de complement, superfícies, loft, escombrat, continuïtat, g0, g1, g2, zebra, step, iges, digues l'escena, escena, clima, hora del dia, estació, assistent, material a partir d'una foto, foto, foto d'un croquis, amoblar, amoblar una habitació, inclinat, tall inclinat, divideix, revisió d'impressió, problemes, graella de propietats, llums, idiomes, dispositius d'entrada, files de la barra d'eines, dwg, live
from: 2717d1b1
---

Això és el que ha canviat a ModelCraft 0.9, respecte de la 0.8.1. ModelCraft ara arriba a la impressora i a la planta de fabricació: podeu posar coses al llit d'impressió i enviar-les sense exportar, laminar per a filament o resina, i dissenyar una línia de manipulació de materials. Aquesta és la versió 0.9 de CadCraft Studio i de les seves vuit aplicacions; la major part de les funcions noves següents són complements.

## Novetats

### Impressió 3D

- **Etapa d'impressió.** Feu clic a {{ui:Etapa d'impressió}} a la barra d'eines. Afegiu elements de la Biblioteca al llit de la impressora, ordeneu-los, mireu les capes laminades i premeu {{ui:Envia a la impressora 3D}}, sense haver d'exportar cap STL. Pertany al complement d'impressió 3D, que està activat per defecte i es pot eliminar com qualsevol complement. Vegeu [Posa les peces al llit d'impressió i envia-les a una impressora](topic:print-stage).
- **El nostre propi laminador de filament.** {{ui:CadCraft bàsic (inclòs, el més ràpid)}} és el laminador de la llista **Laminador** de la targeta: parets, pells, farciment, suports i una faldilla, en un procés de fons perquè la pàgina continuï utilitzable. {{ui:Previsualitza les capes}} amb el control lliscant **Capa** mostra les capes abans d'enviar. Els perfils d'impressora, com els estils Ender-3 i Prusa MK4, tenen el seu propi codi G d'inici.
- **Enviament.** Per USB (Chrome o Edge en un ordinador, amb la pàgina oberta), o a Klipper (Moonraker), OctoPrint o PrusaLink a la vostra xarxa. Res no es connecta ni s'envia sense un clic, i l'enviament demana confirmació abans.
- **Altres laminadors.** Kiri:Moto, PrusaSlicer i OrcaSlicer són complements propis, desactivats per defecte; afegiu-los des de la targeta o des de {{ui:Configuració}} › {{ui:Complements}}. PrusaSlicer i OrcaSlicer utilitzen la vostra còpia instal·lada de CadCraft Studio. El complement d'impressores Bambu Lab lamina amb el vostre OrcaSlicer i els seus perfils P2S, i necessita Studio en un ordinador.
- **Impressió en resina.** Els complements de resina (desactivats per defecte) fan imatges de capa per a la pantalla de la vostra impressora, amb buidat i forats de ventilació, una base de suport i suports, una previsualització de capes, i temps, resina i cost. Els complements de format de fitxer escriuen GOO d'Elegoo, SL1, Chitubox (CBDDLP i CTB 2 a 5) i PWMX i PWS d'Anycubic. Una prova d'exposició en resina fa una escala de cinc exposicions. Vegeu [Lamina per a una impressora de resina](topic:resin-printing).
- **Sense canvis.** {{ui:Exporta}} › {{ui:Comprova la impressió 3D (STL o 3MF)…}}, les eines d'impressió i Divideix per imprimir funcionen com a la 0.8. Vegeu [Prepara un model per a la impressió 3D](topic:print-3d).

### Flux de materials, bessó digital i planta de fabricació

Aquests tres són complements, desactivats fins que els activeu a {{ui:Configuració}} › {{ui:Complements}}, i cadascun té la seva pròpia ajuda quan està activat.

- **Flux de materials.** Un panell anomenat Flux de materials disposa cintes transportadores, estacions, buffers i recorreguts d'AGV a la vista 3D, executa una simulació amb llavor, la reprodueix i mostra el rendiment, els temps de lliurament i les cues, amb els resultats desats com a CSV. Les comandes poden venir d'un fitxer CSV. Les cel·les robòtiques es poden comprovar i exportar. L'enllaç PLC té un mode simulat i un mode real sobre Modbus TCP, que només funciona a CadCraft Studio.
- **Bessó digital.** Llegeix la disposició del Flux de materials i executa un PLC simulat sobre ella, amb avaries que podeu forçar, proves d'existències, una comparació de disposicions i una llista de materials.
- **Planta de fabricació.** Converteix les estacions en màquines i cel·les, les llegeix en directe o des d'un simulador, i manté una cua de treballs i un OEE simple. Només llegeix: aquesta versió no pot escriure en cap màquina ni PLC.

### Superfícies, models i dibuix

- **Arrodoniments, engrossiment i booleanes en NURBS.** El panell {{ui:Superfícies}} té {{ui:Arrodoniment entre cares}}, {{ui:Arrodoniment de diverses arestes}}, {{ui:Engrosseix fins a convertir en sòlid}} i Unió, Resta i Intersecció, cadascun amb la desviació mesurada. Vegeu [Superfícies de forma lliure (NURBS)](topic:nurbs-surfaces).
- **Ajusta superfícies a un escaneig.** Seleccioneu una malla escanejada i useu {{ui:Ajusta superfícies a l'escaneig}} al grup **Escaneig**, i després {{ui:Uneix les superfícies en un sòlid}}. És un primer ajust, no un paquet complet d'enginyeria inversa.
- **Un enllaç en directe amb un modelador .3dm.** Unidireccional, des de Rhino 8 o Grasshopper, i necessita CadCraft Studio al mateix ordinador. Vegeu [Mantén un model .3dm en directe](topic:live-3dm-link).
- **Veu el model a l'obra.** {{ui:Vista a l'obra (RA, telèfon)}} al menú {{ui:Vistes}} funciona en un telèfon Android amb Chrome. Vegeu [Mira el model a l'obra amb un telèfon Android (RA)](topic:ar-on-site).
- **Mètodes d'arc.** La llista desplegable {{ui:Mètodes d'arc}} ofereix deu maneres de dibuixar un arc, incloses {{ui:3 punts}} i {{ui:Inici, centre, final}}.
- **Més unitats.** Els pesos (kg, lb, t, ton) i les temperatures (graus C, F, K i R) s'entenen on escriviu valors amb unitats.

## En totes les aplicacions

- **Textos emergents.** El text que apareix en passar el ratolí per sobre dels botons i les etiquetes retallades és un text emergent de Bootstrap.
- **Consell inicial que es pot tancar.** La targeta de consell a una àrea de dibuix buida té una petita x per tancar-la. Es queda tancada, i la paleta d'ordres la pot tornar a mostrar.
- **Pestanyes amb desplaçament.** La barra de pestanyes d'un panell que no hi cap es desplaça en lloc de quedar retallada.
- **Títols de les pestanyes.** Amb un document obert, la pestanya del navegador comença pel nom del document, seguit de ModelCraft i CadCraft. Un punt apareix davant mentre hi ha canvis sense desar.
- **Disposició.** {{ui:Configuració}} › {{ui:General}} › Disposició conté les disposicions en una llista desplegable, amb una opció per usar una disposició només per a aquesta aplicació i un botó per restablir-la.
- **Idiomes.** La llista d'idiomes de la Configuració segueix els fitxers d'idioma que conté la compilació. Els idiomes diferents de l'anglès són esborranys automàtics.
- **Live i Biblioteca.** Live TeamWork mostra els cursors i els noms en directe, i les col·leccions de la Biblioteca donen a cada aplicació una col·lecció predeterminada.

## Corregit

- {{ui:Reprodueix}} es converteix en {{ui:Pausa}} mentre s'executa una animació, i {{key:Space}} reprodueix i atura mentre la línia de temps és oberta.
- La renderització fixa torna a WebGL quan la targeta gràfica no pot iniciar el traçador de camins. La vista de renderització en directe encara pot mostrar l'error; això no es va comprovar en una màquina Windows amb aquest controlador.
- El mode real del Flux de materials torna a connectar-se després que un enllaç acabés amb respostes d'excepció del PLC.

## Límits reals

- Res no s'ha imprès en una impressora real: ni filament, ni resina, ni a través de Bambu Connect. Els fitxers de resina només els han llegit els lectors propis de CadCraft.
- El bessó digital i la planta de fabricació s'han provat només amb simuladors i respostes conegudes, sense cap PLC, línia o protocol real. Són eines de verificació, no una validació de seguretat. La física només cobreix caixes, fins a vuit càrregues.
- L'enllaç amb Rhino i Grasshopper mai no s'ha executat en els programes reals.
- Els idiomes diferents de l'anglès són esborranys automàtics.

## Anteriors: 0.8 i 0.8.1

Això és el que ha canviat a ModelCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02), respecte de la 0.7. El diàleg {{ui:Renderitza una imatge…}} ara pot enviar l'escena a un altre programa, el panell de Superfícies fa superfícies de forma lliure suaus, i un assistent que connecteu pot definir una escena sencera amb una sola frase.

### Novetats

**Renderització**

- **Una opció de motor.** {{ui:Renderitza una imatge…}} té una llista **Motor** sobre el **Mode**. Els nostres dos motors, Ràpid i el traçador de camins, són els predeterminats i funcionen a tot arreu. Altres entrades desen l'escena com un paquet (el model com a fitxer USD, més un fitxer de configuració amb els valors exactes dels materials, els llums que són encesos, el sol, el cel, l'exposició i la càmera) per portar-lo a un altre programa. Una imatge dibuixada per un altre programa indica quin programa i quina versió l'han feta. Vegeu [Tria quin programa dibuixa la imatge](topic:render-engines).
- **Obre en un altre programa.** La llista de motors pot desar l'escena com a fitxer USD, com a fitxer glTF (`.glb`) o com a carpeta de projecte d'Unreal (`.zip`), al navegador i a CadCraft Studio. A Studio també pot iniciar usdview o el programa propi de l'ordinador per al fitxer. Vegeu [Obre l'escena en un altre programa](topic:render-open-in).
- **Envia a un motor de jocs des de Studio.** Studio escriu l'escena en un projecte d'Unreal Engine i la manté sincronitzada en cada enviament, només en una direcció. Les vostres edicions són en una capa que CadCraft mai no escriu. Vegeu [Envia l'escena a un motor de jocs](topic:render-unreal).
- **Motors dels complements.** Un complement pot afegir un motor a la llista. Un escrit en JavaScript dibuixa al navegador i a Studio; un que executa un programa necessita el vostre sí a Studio. Vegeu [Dibuixa la imatge amb un altre programa](topic:render-other-program) i [Afegeix un motor de renderització amb un complement](topic:render-engine-addons).
- **Digues l'escena.** Digueu a l'assistent connectat «capvespre, pluja fina, arbres de tardor, gent a la plaça» i ModelCraft ho configura en un sol pas: el sol es mou a la data i a l'hora perquè les ombres el segueixin, el cel canvia, apareixen superfícies mullades, i els arbres i la gent es col·loquen com a objectes reals en etiquetes que podeu amagar, moure o eliminar. L'hora del dia, la data o l'estació, i el clima (clar, ennuvolat, boira, pluja fina, pluja, tempesta) també funcionen per separat, i una sol·licitud posterior canvia la mateixa escena. La boira es veu a la imatge d'alta qualitat amb la targeta gràfica; els altres motors mostren el cel, la llum i les superfícies mullades. La pluja no es dibuixa com a traços que cauen.

**Materials**

- **Un material a partir d'una sola foto.** Doneu a ModelCraft una foto d'una superfície (un mur, un terra, una pedra) i en fa un material de mosaic: la llum de la foto s'aplana, les vores es fan coincidir i un mapa de color, un mapa de rugositat i un mapa normal es calculen a partir de la imatge. És un processament d'imatge simple sobre la vostra pròpia imatge, sense cap model entrenat. La rugositat és una estimació. Una foto plana, quadrada i de cara dona el millor mosaic; un patró fort com els maons pot mostrar un fantasma suau on la unió es barreja.

**Superfícies**

- **Superfícies de forma lliure.** El panell {{ui:Superfícies}} fa corbes i superfícies NURBS sense retallar: corbes per punts, loft, reglades, extrusió, revolució, escombrats al llarg d'un o dos rails, superfícies a partir d'una xarxa de corbes, pedaços de quatre arestes, ajust i barreja. Cada aresta compartida es mesura com a G0, G1 o G2 (buit, angle, salt de curvatura) sobre les superfícies exactes, i una aresta pitjor del que heu demanat apareix al panell de Problemes amb una correcció **Ajusta**. Les franges zebra i els colors de curvatura es dibuixen a partir de les superfícies exactes. Els fitxers STEP i IGES es poden exportar i importar. Vegeu [Superfícies de forma lliure (NURBS)](topic:nurbs-surfaces).

**Emplaçament i habitacions**

- **Una foto d'un croquis sobre el terreny.** {{ui:Fitxer}} › {{ui:Importa una foto d'un croquis…}} converteix una foto feta amb el telèfon d'un croquis a mà en vores sobre el terreny a l'escala que indiqueu: un grup, amb una etiqueta per a cada color de bolígraf. El paper es troba i es redreça al vostre ordinador, i no s'envia enlloc. Vegeu [Modela sobre un plànol de situació](topic:site-plan).
- **Amoblar una habitació.** Seleccioneu un terra i useu {{ui:Organitza}} › {{ui:Amobla una habitació…}}. El mobiliari de dormitori, sala d'estar, menjador, cuina, bany o oficina es col·loca per regles, contra les parets i lliure de portes i finestres, en un grup que podeu treure d'un sol cop. És una disposició predeterminada perquè la reviseu, no un disseny. Vegeu [Biblioteca inicial](topic:starter).

**Impressió 3D**

- **Talls inclinats.** Divideix per imprimir pot inclinar els talls fins a 60 graus, cosa que dona més superfície d'encolat a les peces. Els connectors es mantenen perpendiculars al tall. Vegeu [Divideix un model per imprimir](topic:print-split).
- **La revisió d'impressió a Problemes.** Les troballes de la revisió d'impressió 3D es mostren al panell de Problemes amb marcadors sobre el model, i Repara les corregeix des d'allà. Vegeu [Suports, gruix de paret, buidat i reparació](topic:print-tools).

**En totes les aplicacions**

- **Idiomes.** L'ajuda i les aplicacions arriben en 54 idiomes. Deu són nous: lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili i uzbek. Els idiomes diferents de l'anglès són esborranys automàtics fins que un parlant nadiu els hagi llegit, i és possible que alguns temes d'ajuda encara estiguin en anglès.
- **Dispositius d'entrada.** Un touchpad, un llapis, un ratolí 3D, un comandament de joc i els controls MIDI poden manejar les aplicacions, per a totes o per a una.
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › Files de la barra d'eines defineix Ajustar (com abans), 2 files o 1 fila. Una barra que no hi cap es desplaça lateralment en lloc de treure espai al dibuix. Ajustar continua essent el predeterminat.
- **Graella de propietats.** Els camps de llums de ModelCraft utilitzen la graella compartida: categories plegables, columnes d'etiqueta i valor, i densitat Compacta. L'aritmètica escrita com `2*450` continua funcionant.
- **Problemes.** El panell de Problemes (el botó d'avís de la barra d'aplicació) és compartit per totes les aplicacions. A ModelCraft conté la revisió d'impressió i els avisos de continuïtat de superfícies.
- **Live.** Una sessió de Live TeamWork mostra qui és on. Vegeu [Modela junts amb Live TeamWork](topic:work-live).
- **Complements.** Els complements poden afegir motors de renderització, com s'ha dit.
- **Connecteu la vostra IA.** El contracte d'eines i les comprovacions de les vuit aplicacions passen, amb 454 eines en total. La connexió amb un clic dins de Studio, un connector allotjat per als assistents del navegador, la vostra pròpia clau dins de Studio i un paquet publicat no estan garantits encara. Les aplicacions no contenen cap IA pròpia. Vegeu [Utilitza ModelCraft amb assistents d'IA](topic:use-with-ai-assistants).

### Corregit a la 0.8.1

- **Secció de classes del DWG.** La secció de classes d'un fitxer DWG es llegia com un tipus incorrecte, cosa que podia trencar el fitxer en importar-lo. Ara es llegeix bé, a ModelCraft i a les altres aplicacions que llegeixen DWG.
- **Tauletes en vertical.** L'alçada de graella sobrant va al llenç, i la disposició del plànol comença a 760 píxels d'amplada o menys. La fulla d'estils de ModelCraft també té el canvi.
- **Idioma a Studio.** CadCraft Studio i les edicions empaquetades poden canviar d'idioma mentre s'executen; abans només eren en anglès. Encara no s'ha provat en totes les plataformes: digueu-nos si l'idioma no canvia.

### Encara no és en aquesta versió

- **Sense signatura de codi.** Windows pot mostrar SmartScreen: trieu {{ui:Més informació}} i després {{ui:Executa igualment}}. En un Mac, feu clic dret i trieu {{ui:Obre}}. Les versions per a botiga estan en espera, i la compilació per a iPad i iPhone no es va refer per a la 0.8.1.
- Un altre programa que dibuixa la imatge sense un complement de motor de renderització, les càmeres panoràmiques o estereoscòpiques, i un cel en imatge a través d'un altre programa, i el connector que obre l'escenari d'Unreal encara no hi són. Els fitxers s'escriuen; el connector no s'ha publicat i no s'ha executat a Unreal.
- Superfícies de forma lliure: G3 i classe A no es mesuren ni es garanteixen, i el retall i els sòlids vindran més endavant.
- Les imatges d'altres programes no són píxel per píxel iguals a les nostres: només coincideixen la càmera, el sol, els llums i l'exposició.
- La correcció de la 0.8.1 per al canvi d'idioma a Studio no s'ha provat en totes les plataformes.

Tota la resta és a [No construït encara](topic:not-built-yet). Per a la versió anterior, vegeu [Novetats de la 0.7](topic:whats-new-0-7).
