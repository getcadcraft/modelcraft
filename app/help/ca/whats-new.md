---
title: Novetats de la 0.8 i la 0.8.1
summary: Una elecció de motor de renderitzat amb fitxers per a altres programes, superfícies NURBS de forma lliure amb continuïtat mesurada, una escena que descriviu a l'assistent, un material fet a partir d'una foto, una foto de croquis sobre el terreny, habitacions amoblades, talls inclinats per a impressió 3D i la comprovació d'impressió al tauler Problemes.
keywords: novetats, què hi ha de nou, notes de la versió, registre de canvis, canvis, 0.8, 0.8.1, versió, noves funcions, motor de renderitzat, motor, obre amb, usd, gltf, unreal, motor de complement, nurbs, superfícies, loft, escombrat, continuïtat, g0, g1, g2, zebra, step, iges, digues l'escena, escena, temps atmosfèric, hora del dia, estació, assistent, material a partir d'una foto, foto, foto de croquis, amobla, amobla una habitació, inclinat, tall inclinat, divideix, comprovació d'impressió, problemes, graella de propietats, lluminàries, idiomes, dispositius d'entrada, files de la barra d'eines, dwg, live
from: e4989b17
---

Això és el que ha canviat a ModelCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02), respecte de la 0.7. El diàleg {{ui:Renderitza una imatge…}} ara pot enviar l'escena a un altre programa, el tauler {{ui:Superfícies}} crea superfícies lliures i suaus, i un assistent que connecteu pot definir una escena sencera amb una sola frase.

## Novetats

### Renderitzat

- **Una elecció de motor.** {{ui:Renderitza una imatge…}} té una llista **Motor** sobre el **Mode**. Els nostres dos motors, Ràpid i el Traçador de camins, són els predeterminats i funcionen a tot arreu. Les altres entrades desen l'escena com a paquet (el model com a fitxer USD, més un fitxer de configuració amb els valors exactes dels materials, les lluminàries enceses, el sol, el cel, l'exposició i la càmera) per portar-lo a un altre programa. Una imatge dibuixada per un altre programa indica quin programa i quina versió l'han feta. Vegeu [Tria quin programa dibuixa la imatge](topic:render-engines).
- **Obre en un altre programa.** La llista Motor pot desar l'escena com a fitxer USD, com a fitxer glTF (`.glb`) o com a carpeta de projecte d'Unreal (`.zip`), al navegador i a CadCraft Studio. A Studio també pot iniciar usdview o el programa del vostre ordinador per al fitxer. Vegeu [Obre l'escena en un altre programa](topic:render-open-in).
- **Envia a un motor de videojocs des de Studio.** Studio escriu l'escena en un projecte d'Unreal Engine i la manté sincronitzada a cada enviament, només en una direcció. Les vostres edicions són en una capa que CadCraft mai no escriu. Vegeu [Envia l'escena a un motor de videojocs](topic:render-unreal).
- **Motors des de complements.** Un complement pot afegir un motor a la llista. Un escrit en JavaScript dibuixa al navegador i a Studio; un que executa un programa necessita el vostre sí a Studio. Vegeu [Dibuixa la imatge amb un altre programa](topic:render-other-program) i [Afegeix un motor de renderitzat amb un complement](topic:render-engine-addons).
- **Digueu l'escena.** Digueu a l'assistent connectat "capvespre, pluja fina, arbres de tardor, gent a la plaça" i ModelCraft ho prepara en un sol pas: el sol es mou a la data i a l'hora perquè les ombres segueixin, el cel canvia, apareixen superfícies mullades, i els arbres i la gent es col·loquen com a objectes reals en etiquetes que podeu amagar, moure o suprimir. L'hora del dia, la data o l'estació, i el temps atmosfèric (clar, cobert, boira, pluja fina, pluja, tempesta) també funcionen per si sols, i una petició posterior canvia la mateixa escena. La boira es veu a la imatge d'alta qualitat a la targeta gràfica; els altres motors mostren el cel, la llum i les superfícies mullades. La pluja no es dibuixa com a rastres que cauen.

### Materials

- **Un material a partir d'una foto.** Doneu a ModelCraft una foto d'una superfície (una paret, un terra, pedra) i en crea un material de repetició: la il·luminació de la foto s'aplana, les vores s'uneixen i es calculen un mapa de color, un mapa de rugositat i un mapa de normals a partir de la imatge. És un processament d'imatge senzill de la vostra pròpia foto, sense cap model entrenat. La rugositat és una estimació. Una foto plana, quadrada i de cara dona la millor rajola; un patró fort, com els maons, pot mostrar un fantasma suau on la unió es barreja.

### Superfícies

- **Superfícies de forma lliure.** El tauler {{ui:Superfícies}} crea corbes i superfícies NURBS sense retallar: corbes que passen per punts, loft, reglades, extrusió, revolució, escombrats al llarg d'un o dos rails, superfícies a partir d'una xarxa de corbes, pedaços a partir de quatre arestes, coincidència i fusió. Cada aresta compartida es mesura com a G0, G1 o G2 (buit, angle, salt de curvatura) sobre les superfícies exactes, i una aresta pitjor del que heu demanat apareix al tauler Problemes amb una correcció **Coincideix**. Les franges zebra i els colors de curvatura es dibuixen a partir de les superfícies exactes. Els fitxers STEP i IGES es poden exportar i importar. Vegeu [Superfícies de forma lliure (NURBS)](topic:nurbs-surfaces).

### Emplaçament i habitacions

- **Una foto d'un croquis sobre el terreny.** {{ui:Fitxer}} › {{ui:Importa una foto d'un croquis…}} converteix una foto feta amb el telèfon d'un croquis a mà en arestes sobre el terreny, a l'escala que indiqueu: un sol grup, amb una etiqueta per a cada color de retolador. El full es troba i s'endreça al vostre ordinador i no s'envia a cap lloc. Vegeu [Modela sobre un pla d'emplaçament](topic:site-plan).
- **Amobla una habitació.** Seleccioneu un terra i useu {{ui:Organitza}} › {{ui:Amobla una habitació…}}. El mobiliari de dormitori, sala d'estar, menjador, cuina, bany o oficina es col·loca segons regles, contra les parets i sense obstruir portes i finestres, en un sol grup que podeu retirar d'un cop. És una disposició predeterminada per revisar, no un disseny. Vegeu [Biblioteca d'inici](topic:starter).

### Impressió 3D

- **Talls inclinats.** Divideix per imprimir pot inclinar els talls fins a 60 graus, cosa que dona més superfície d'encolat a les peces. Els connectors es mantenen perpendiculars al tall. Vegeu [Divideix un model per imprimir](topic:print-split).
- **La comprovació d'impressió a Problemes.** Les troballes de la comprovació d'impressió 3D es mostren al tauler Problemes amb marcadors sobre el model, i Repara les corregeix des d'allà. Vegeu [Suports, gruix de paret, buidat i reparació](topic:print-tools).

### En totes les aplicacions

- **Idiomes.** L'ajuda i les aplicacions es presenten en 54 idiomes. Deu són nous: lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili i uzbek. Els idiomes diferents de l'anglès són esborranys automàtics fins que un parlant nadiu els hagi revisat, i és possible que alguns temes d'ajuda encara estiguin en anglès.
- **Dispositius d'entrada.** Un ratolí tàctil, un llapis, un ratolí 3D, un comandament de videojoc i els controls MIDI poden manejar les aplicacions, per a totes o per a una.
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › Files de la barra d'eines defineix Ajusta (com abans), 2 files o 1 fila. Una barra que no hi cap es desplaça de costat en lloc de treure espai al dibuix. Ajusta continua sent el predeterminat.
- **Graella de propietats.** Els camps de les lluminàries de ModelCraft fan servir la graella compartida: categories plegables, columnes d'etiqueta i valor, i densitat Compacta. L'aritmètica escrita, com `2*450`, continua funcionant.
- **Problemes.** El tauler Problemes (el botó d'avís de la barra d'aplicació) és compartit per totes les aplicacions. A ModelCraft conté la comprovació d'impressió i els avisos de continuïtat de superfícies.
- **Live.** Una sessió de Live TeamWork mostra on és cadascú. Vegeu [Modela junts amb Live TeamWork](topic:work-live).
- **Complements.** Els complements poden afegir motors de renderitzat, com s'ha dit.
- **Connecteu la vostra IA.** El contracte d'eines i les comprovacions de les vuit aplicacions passen, amb 454 eines en total. La connexió amb un clic dins de Studio, un connector allotjat per a assistents de navegador, la vostra pròpia clau dins de Studio i un paquet publicat encara no es prometen. Les aplicacions no tenen cap IA pròpia. Vegeu [Useu ModelCraft amb assistents d'IA](topic:use-with-ai-assistants).

## Corregit a la 0.8.1

- **Secció de classes d'un DWG.** La secció de classes d'un fitxer DWG es llegia com un tipus incorrecte, cosa que podia fer malbé el fitxer en importar-lo. Ara es llegeix bé, a ModelCraft i a les altres aplicacions que llegeixen DWG.
- **Tauletes en vertical.** L'alçada de graella sobrant va al llenç, i la disposició del full comença a 760 píxels d'amplada o menys. La fulla d'estils de ModelCraft també té el canvi.
- **Idioma a Studio.** CadCraft Studio i les edicions empaquetades poden canviar d'idioma mentre s'executen; abans només eren en anglès. Encara no s'ha provat a totes les plataformes: digueu-nos si l'idioma no canvia.

## Encara no és en aquesta versió

- **Sense signatura de codi.** Windows pot mostrar SmartScreen: trieu {{ui:Més informació}} i després {{ui:Executa igualment}}. En un Mac, feu clic dret i trieu {{ui:Obre}}. Les versions per a botigues estan en pausa, i la versió per a iPad i iPhone no es va reconstruir per a la 0.8.1.
- Un altre programa que dibuixa la imatge sense un complement de motor de renderitzat, les càmeres panoràmiques o estèreo, i una imatge de cel a través d'un altre programa, i el connector que obre l'escenari d'Unreal encara no hi són. Els fitxers s'escriuen; el connector no s'ha publicat i no s'ha executat a Unreal.
- Superfícies de forma lliure: G3 i classe A no es mesuren ni es garanteixen, i el retallat i els sòlids arribaran més endavant.
- Les imatges d'altres programes no són píxel per píxel com les nostres: només coincideixen la càmera, el sol, les lluminàries i l'exposició.
- La correcció de la 0.8.1 per al canvi d'idioma a Studio no s'ha provat a totes les plataformes.

Tota la resta és a [Encara no implementat](topic:not-built-yet). Per a la versió anterior, vegeu [Novetats de la 0.7](topic:whats-new-0-7).
