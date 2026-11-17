---
title: Superfícies de forma lliure (NURBS)
summary: Corbes i superfícies suaus per a carcasses de productes, carrosseries de cotxe i cascos de vaixell: loft, escombrat, xarxes de corbes, pedaços de quatre arestes, transicions i retallades; continuïtat G0, G1 i G2 mesurada sobre les superfícies exactes; sòlids amb unió, resta i intersecció; vistes zebra i de curvatura; cares ajustades a un escaneig amb l'error mesurat; i fitxers STEP o IGES.
keywords: nurbs, escaneig, enginyeria inversa, ajusta, malla a superfície, núvol de punts, stl, retalla, retallat, forat, talla, sòlid, sòlids, booleana, unió, resta, intersecció, diferència, cosir, tancat, forma lliure, superfície, superfícies, b-spline, bspline, corba, spline, loft, escombrat, carril, xarxa, coons, pedaç, transició, iguala, continuïtat, g0, g1, g2, tangent, curvatura, zebra, punts de control, nusos, grau, step, iges, classe A
from: 09887405
---

El tauler de **Superfícies** crea corbes i superfícies suaus del tipus que s'usa per a carcasses de productes, carrosseries de cotxe i cascos de vaixell: NURBS, les mateixes matemàtiques que fan servir altres modeladors de superfícies. Tot es mesura sobre les superfícies exactes, mai sobre els triangles que veieu. Les mides del tauler són en **mil·límetres**, sigui quina sigui la unitat que mostri el model.

Obriu-lo des del tauler de la dreta: {{ui:Superfícies}} › {{ui:Obre el tauler de Superfícies}}. Un model que ja té superfícies l'obre sol.

## Com funciona una ordre

1. Premeu una ordre (per exemple **Loft**). El tauler diu què necessita encara: punts, corbes, una vora de superfície o un extrem de corba.
2. Trieu-los: feu clic a la vista 3D, o premeu **Tria** (o els botons de vora i extrem) al costat de cada un a la llista. Per a una vora, feu clic a prop d'aquella vora de la superfície.
3. Reviseu les opcions (grau, tolerància, continuïtat, …) i premeu **Crea**.

Les corbes a partir de punts agafen els punts escrits un per línia (`x, y, z` en mm), o **Tria punts a la vista**: cada clic fa servir el mateix ajust que les eines de dibuix; premeu <kbd>Enter</kbd> o feu doble clic per acabar, i <kbd>Esc</kbd> per aturar.

## Corbes

- **Corba per punts** passa per cada punt. **Corba per punts de control** segueix en canvi una xarxa de punts.
- **Insereix nus**, **Puja el grau** i **Baixa el grau** canvien com es descriu una corba sense moure-la (baixar es nega quan la corba es mouria més que la tolerància). **Reconstrueix la corba** li dona un nou nombre de punts de control i diu quant s'ha mogut.
- **Iguala corba** fa que un extrem d'una corba toqui el d'una altra amb G0 (tocant), G1 (mateixa direcció) o G2 (també mateixa curvatura). **Transició de corba** afegeix una corba nova entre dos extrems.
- **Uneix corbes** i **Divideix corba**.

## Superfícies

- **Loft** per dues o més corbes, **Superfície reglada** entre dues, **Extrudeix corba**, **Revolució de corba**.
- **Escombrat amb un carril** porta un perfil al llarg d'un camí sense torçar-lo; **Escombrat amb dos carrils** manté els extrems del perfil sobre tots dos carrils. Els escombrats s'ajusten: la línia d'estat diu com de a prop es va mantenir de l'escombrat real.
- **Superfície des d'una xarxa de corbes** passa per una graella de corbes (els primers punts triats són els perfils, la resta les guies). **Pedaç des de quatre arestes** omple quatre corbes que es troben a les cantonades.
- **Iguala superfície** fa que una vora de superfície toqui una veïna amb G0, G1 o G2; **Transició de superfície** afegeix una superfície entre dues vores.
- **Desplaçament de superfície**, **Estén la superfície** (la superfície continua com anava), **Reconstrueix la superfície**, i nusos i grau per a superfícies.

## Comprovar la qualitat

La taula **Arestes compartides** llista cada aresta que comparteixen dues superfícies, amb la separació (mm), l'angle entre elles (°) i el salt de curvatura (1/mm), i si això la fa G0, G1 o G2. Una aresta pitjor que el que heu demanat també és a **Problemes** (el botó ⚠ de la barra de l'app) amb una correcció **Iguala**.

**Mostra com a** › **Ratlles zebra** i **Curvatura (gaussiana)** surten de la superfície exacta: les ratlles que continuen sense trencar-se a través d'una aresta indiquen G1; les ratlles que a més mantenen el seu ample indiquen G2. La curvatura és blava on la superfície és una sella, vermella on és una cúpula i blanca on és plana. **Punts de control** dibuixa les xarxes de control.

G0–G2 es mesuren en 33 punts per aresta. **G3 i la qualitat "classe A" no es mesuren** i no se'n reclama.

## Retallar una superfície

El grup **Retalla** talla una superfície sense canviar-ne la forma: la superfície conserva tots els seus punts de control, i només es mostra, es compta i s'escriu la part dins del contorn. **Retalla amb un rectangle** i **Retalla amb un cercle** treballen sobre una part (de 0 a 1) de la superfície en cada direcció, de manera que no cal triar res a la vista; **Retalla amb una corba** pren una corba tancada que és sobre la superfície (es projecta dins de la superfície, i es nega amb explicació quan és oberta o més lluny que la tolerància). Marqueu **Talla un forat** per treure l'interior del contorn; deixeu-ho desmarcat per conservar només l'interior. Una superfície pot tenir un contorn conservat i qualsevol nombre de forats; un contorn que en creua un altre es nega. **Elimina el retall** torna a mostrar la superfície sencera. Les vores tallades segueixen exactament el contorn; el **Desfés** del tauler desfà un retall com qualsevol altre pas.

STEP porta el retall com a límits de la cara, i IGES com a superfície retallada (entitat 144); tots dos el llegeixen de nou.

## Sòlids i booleanes

El grup **Sòlids** converteix superfícies en cossos tancats i els combina. Un sòlid aquí és un conjunt de superfícies del tauler que, juntes, tanquen un volum; les seves cares es mantenen com a superfícies NURBS exactes amb els seus retalls.

- **Sòlid caixa**, **Sòlid cilindre** i **Sòlid esfera** en fan un a partir de mides escrites (en mm): una caixa de sis cares planes, un cilindre amb una cara corba i dues cares planes retallades al cercle, una esfera d'una superfície de revolució.
- **Sòlid des de superfícies** agrupa superfícies que heu fet vosaltres. Trieu-les, o no en trieu cap per fer servir totes les superfícies visibles que encara no són en un sòlid. Es cusen dins de la tolerància: si no es tanquen, no canvia res i el tauler diu quantes arestes queden obertes i com de a prop han de trobar-se.
- **Unió**, **Resta** (el segon sòlid es treu del primer) i **Interseca** (només el que comparteixen tots dos) prenen dos sòlids: feu clic a una cara de cada un a la vista, o premeu **Tria** a la llista **Sòlids**. Marqueu **Conserva els dos sòlids** per deixar-los al costat del resultat.

Una booleana manté cada cara sobre la seva superfície exacta i la talla amb contorns de retall nous al llarg de la intersecció. La línia del resultat dona els números mesurats: quant han hagut de moure's els punts del motor de sòlids per assentar-se a les superfícies exactes (mai més que la tolerància), com de a prop són els punts d'intersecció de totes dues superfícies (normalment uns quants milionèsims de mil·límetre), el volum, i si les cares noves es tornen a tancar quan se'n cusen de nou des de les seves superfícies exactes. Els volums es mesuren sobre triangles dins de la tolerància (0.05 mm si no n'heu definit cap altra), de manera que el volum d'una esfera o d'un cilindre surt una mica per sota del d'un càlcul exacte: una tolerància més petita s'hi acosta més. Una booleana que no es pot fer net (els sòlids no comparteixen res, o un contorn es creuaria a si mateix) es nega amb explicació i no canvia res. Una booleana és un pas del **Desfés** del tauler.

A la llista **Sòlids**, **Desagrupa** manté les cares com a superfícies simples; la paperera elimina el sòlid i les seves cares.

**Afegeix al model** (a la llista **Sòlids**) posa una còpia del sòlid al model com a grup tancat, amb les seves cares com a triangles dins de 0.05 mm, en un pas del Desfés del model. Després funciona amb la **Unió**, la **Resta** i la **Interseca** del propi model, amb prem i estira i amb la comprovació d'impressió 3D; el sòlid exacte es queda al tauler.

## Arrodoniments i engruiximent

**Arrodoniment entre cares** arrodoneix la vora on es troben dues cares d'un mateix sòlid: trieu les dues cares (a la vista, o amb **Tria** a la llista), escriviu el **radi** i, per a un radi que canvia al llarg de la vora, el **radi al final** (0 manté un sol radi). Una bola d'aquell radi es fa rodar al llarg de la vora tocant les dues cares; l'arrodoniment és l'arc circular exacte que deixa a cada punt, unit en una sola superfície, i les dues cares es retallen on la bola les toca. Una vora exterior perd material, i una cantonada interior en guanya. La línia del resultat indica el que s'ha mesurat: com de lluny és la superfície d'arrodoniment de la bola que rodola entre els punts a partir dels quals es va construir (s'hi afegeixen punts fins que és dins d'un quart de la tolerància), l'angle més gran entre l'arrodoniment i cada cara al llarg de les línies de contacte, i els mateixos números que una Unió. Un radi que no hi cap (la bola sortiria d'una cara, o una cara es corba més tancada que el radi) es nega, dient el nom de la cara, i no canvia res.

**Arrodoneix diverses vores** arrodoneix moltes vores en un sol pas: trieu les dues cares de la primera vora, després les dues cares de la següent, i així successivament (una cara pot estar en diversos parells, per exemple la cara superior d'una caixa en quatre d'ells); totes les vores reben el radi que escriviu. Cada arrodoniment es calcula sobre el sòlid tal com era, i després es tallen un darrere l'altre, de manera que l'ordre no importa. Quan dues vores arrodonides es troben en una cantonada on les altres vores segueixen agudes, els dos arrodoniments es fonen al llarg de la seva corba d'intersecció (una arruga). Quan tres vores exteriors arrodonides de tres cares planes que són perpendiculars entre si es troben amb un sol radi, la cantonada és un **pedaç d'esfera** tangent als tres arrodoniments (desmarqueu **Cantonades** per obtenir la cantonada amb arruga); una vora ha de tenir com a mínim el doble del radi de llarg quan els seus dos extrems són cantonades d'aquest tipus. La línia del resultat diu quantes vores s'han arrodonit i com han quedat les cantonades. Les vores interiors també es poden arrodonir juntes, però un resultat que no es torna a tancar només s'informa (la línia ho diu), de manera que cal revisar-lo.

**Engrossir fins a sòlid** dona a una superfície un gruix: trieu-la, escriviu el **gruix**, i marqueu **Altre costat** per fer-la créixer en l'altra direcció. La cara desplaçada s'ajusta a la superfície i es mesura contra ella (la línia del resultat dona la diferència més gran respecte al gruix); les parets segueixen totes les vores i tots els contorns de retall. Si la superfície es corba més tancada que el gruix en aquell costat, o una altra part de la superfície és més a prop que el gruix, es nega, dient la superfície i el lloc, i no canvia res.

## Desfer, el fitxer, STEP i IGES

El tauler té el seu propi **Desfés** i **Refés** (un pas per ordre). Les superfícies es desen al fitxer `.modelcraft` amb el model; no formen part del Desfés propi del model, igual que els materials del fitxer.

**STEP…** (AP242) i **IGES…** desen les corbes i superfícies exactament tal com són (corbes i superfícies B-spline, res convertit en triangles). Cada superfície és la seva pròpia cara, amb el seu retall; un sòlid s'escriu com una closca tancada, amb cada aresta compartida per les seves dues cares, com esperen els altres programes CAD (la línia d'estat diu quants sòlids han sortit d'aquesta manera). En IGES, el mateix sòlid és un sòlid B-rep manifold (entitat 186 sobre la closca tancada 514, cares 510, bucles 508, una llista d'arestes 504 i una llista de vèrtexs 502); un sòlid les cares del qual no s'aparellen aresta per aresta s'escriu com a cares separades, i la línia ho diu. **Importa…** llegeix un sòlid així de nou com a sòlid, des de STEP i des d'IGES. Llegeix corbes i superfícies escrites d'aquesta manera, i conjunts de pedaços `.ccnurbs`; els sòlids STEP d'altres programes s'obren amb Fitxer › Importa com a malles.

## Superfícies a partir d'un escaneig (enginyeria inversa)

Seleccioneu la malla escanejada al model (si no hi ha res seleccionat, es fa servir tot el que es veu), obriu **Superfícies**, i al grup **Escaneig** trieu **Ajusta superfícies a l'escaneig**. L'eina busca **plans**, **cilindres**, **esferes** i **cons** (les superfícies exactes de què es fa una peça mecanitzada; cada fila mostra el radi o el semiangle que ha trobat), troba **arrodoniments** (vores i cantonades arrodonides: un petit cilindre o una esfera que és tangent a dues o més cares, mostrat amb el seu radi i les cares que uneix), **arrodoniments d'anell** (un tor: l'arrodoniment entre una cara plana i un cilindre o con, mostrat amb el seu radi i el radi del seu anell) i **arrodoniments variables** (una vora arrodonida el radi de la qual canvia al llarg d'ella, mostrat amb el radi a cada extrem), ajusta **un pedaç de forma lliure** a una peça suau i lleugerament corbada, i talla cada cara fins al contorn de la part de l'escaneig d'on ve, de manera que els forats i les cantonades es conserven. Opcions: la **tolerància** (quant, en mm, pot estar un punt de l'escaneig d'un pla o cilindre i encara pertànyer-hi, i l'objectiu per a un pedaç de forma lliure), la **peça més petita** (una part de l'àrea de la superfície) i el **màxim de cares**. El mateix escaneig i les mateixes opcions sempre donen les mateixes cares.

El resultat és una taula, una fila per cara: el seu tipus, de quants triangles ve, i l'error **mesurat de l'escaneig a la cara** (rms, el més gran, i la part de punts dins de la tolerància). Els punts mesurats són els vèrtexs de l'escaneig i el centre de cada triangle. L'error no es mesura a l'altre sentit (de la cara a l'escaneig), de manera que una cara que sobresurt de l'escaneig no es veuria. La nota sota la taula també diu quanta àrea era massa petita per ajustar-la. A la vista, els punts de l'escaneig es pinten segons el seu **mapa de desviació**: blau sobre la cara, verd a mig camí de la tolerància, vermell a la tolerància o més (desmarqueu **Mostra el mapa de desviació** per amagar-lo). Les peces que es plegarien sobre elles mateixes (un tub tancat ajustat amb pedaços de forma lliure, per exemple) es llisten com a no ajustades, mai no es forcen a una sola superfície.

**Cus les superfícies en un sòlid** cus cada superfície visible que no és en un sòlid en un de sol tancat. Les cares de l'escaneig només es troben dins de l'error propi de l'escaneig, de manera que prova la distància d'unió més petita que tanca (mai més que la **distància de cosit** que heu definit) i es nega amb explicació quan les cares no es tanquen. Mai no omple un buit. Una caixa amb vores arrodonides es cus quan els seus arrodoniments s'han trobat com a cares pròpies; la distància d'unió que ha tancat és al resultat. El sòlid després funciona amb Unió, Resta, Interseca i **Afegeix al model**.

Què no fa: un **arrodoniment d'anell** (un tor) només es busca al voltant de l'eix d'un cilindre o con ja trobat, i un **arrodoniment variable** només al llarg d'una vora bastant recta (les seves seccions es tallen perpendicularment a una direcció); en altres llocs surten com a pedaços de forma lliure quan són prou suaus, i si no es deixen fora; les esferes, els cons i els arrodoniments es troben per mostreig aleatori, de manera que un de molt petit (uns quants triangles) es pot perdre; el mapa de desviació mostra la distància de l'escaneig a les cares, no a l'inrevés; els escanejos molt grans (més de 300.000 triangles) es nega aquí. Les cares d'un cilindre de volta completa es tallen al voltant dels forats, amb la costura posada on no hi ha cap forat. Comproveu cada cara contra l'escaneig abans de confiar-hi.

## Encara no implementat

Arrodonir vores que es troben en una cantonada de cares corbes o amb radis diferents (una barreja de vèrtexs), un arrodoniment entre cares que no es toquen, un arrodoniment interior que acaba en una cara inclinada o corbada, i booleanes i arrodoniments calculats sobre les superfícies sense triangles (aquí el motor de sòlids treballa sobre triangles dins de la tolerància, i després cada punt es torna a posar sobre les superfícies exactes).
