---
title: Superficies libres (NURBS)
summary: Curvas y superficies suaves para carcasas de productos, carrocerías de autos y cascos de barcos: loft, barrido, redes de curvas, parches de cuatro bordes, mezclas, recortes, con continuidad G0, G1 y G2 medida sobre las superficies exactas; sólidos con unión, resta e intersección; vistas cebra y de curvatura; caras ajustadas a un escaneo con el error medido; y archivos STEP o IGES.
keywords: nurbs, escaneo, ingeniería inversa, ajustar, malla a superficie, nube de puntos, stl, recortar, recortada, agujero, cortar, sólido, sólidos, booleana, unión, restar, intersecar, diferencia, coser, cerrado, forma libre, freeform, superficie, superficies, b-spline, bspline, curva, spline, loft, barrido, riel, red, coons, parche, mezcla, empalme, continuidad, g0, g1, g2, tangente, curvatura, cebra, puntos de control, nudos, grado, step, iges, clase A
from: 09887405
---

El panel **Superficies** crea curvas y superficies suaves del tipo que se usa para carcasas de productos, carrocerías de autos y cascos de barcos: NURBS, las mismas matemáticas que usan otros modeladores de superficies. Todo se mide sobre las superficies exactas, nunca sobre los triángulos que ves. Los tamaños del panel van en **milímetros**, sea cual sea la unidad que muestre el modelo.

Abrilo desde el panel de la derecha: {{ui:Superficies}} › {{ui:Abrir el panel Superficies}}. Un modelo que ya tiene superficies lo abre solo.

## Cómo funciona un comando

1. Apretá un comando (por ejemplo **Loft**). El panel indica lo que todavía necesita: puntos, curvas, un borde de superficie o un extremo de curva.
2. Elegílos: clickeálos en la vista 3D, o apretá **Elegir** (o los botones de borde y extremo) al lado de cada uno en la lista. Para un borde, clickeá cerca de ese borde de la superficie.
3. Revisá las opciones (grado, tolerancia, continuidad, …) y apretá **Hacer**.

Las curvas a partir de puntos toman los puntos escritos uno por línea (`x, y, z` en mm), o **Elegir puntos en la vista**: cada clic usa el mismo ajuste que las herramientas de dibujo; apretá <kbd>Enter</kbd> o hacé doble clic para terminar, <kbd>Esc</kbd> para parar.

## Curvas

- **Curva por puntos** pasa por cada punto. **Curva por puntos de control** sigue una jaula de puntos en cambio.
- **Insertar nudo**, **Subir grado** y **Bajar grado** cambian cómo se describe una curva sin moverla (bajar se rechaza cuando la curva se movería más que la tolerancia). **Reconstruir curva** le da una nueva cantidad de puntos de control y dice cuánto se movió.
- **Emparejar curva** hace que el extremo de una curva toque el de otra con G0 (tocándose), G1 (misma dirección) o G2 (misma curvatura también). **Curva de mezcla** agrega una curva nueva entre dos extremos.
- **Unir curvas** y **Dividir curva**.

## Superficies

- **Loft** a través de dos o más curvas, **Superficie reglada** entre dos, **Extruir curva**, **Revolver curva**.
- **Barrido por un riel** lleva un perfil a lo largo de un camino sin torcerlo; **Barrido por dos rieles** mantiene los extremos del perfil sobre ambos rieles. Los barridos se ajustan: la línea de estado dice qué tan cerca quedó del barrido verdadero.
- **Superficie desde una red de curvas** pasa por una cuadrícula de curvas (las primeras elecciones son los perfiles, las demás las guías). **Parche desde cuatro bordes** llena cuatro curvas que se encuentran en sus esquinas.
- **Emparejar superficie** hace que un borde de superficie toque a un vecino con G0, G1 o G2; **Superficie de mezcla** agrega una superficie entre dos bordes.
- **Superficie de desplazamiento**, **Extender superficie** (la superficie sigue como iba), **Reconstruir superficie**, y nudos y grado para superficies.

## Revisar la calidad

La tabla **Bordes compartidos** lista cada borde que comparten dos superficies, con la separación (mm), el ángulo entre ellas (°) y el salto de curvatura (1/mm), y si eso lo hace G0, G1 o G2. Un borde peor de lo que pediste también aparece en **Problemas** (el botón ⚠ en la barra superior) con una corrección de **Emparejar**.

**Mostrar como** › **Rayas cebra** y **Curvatura (gaussiana)** salen de la superficie exacta: las rayas que pasan sin cortarse por un borde significan G1; las rayas que además conservan su ancho significan G2. La curvatura es azul donde la superficie es una silla de montar, roja donde es una cúpula y blanca donde es plana. **Puntos de control** dibuja las redes de control.

G0–G2 se miden en 33 puntos por borde. **G3 y la calidad "clase A" no se miden** y no se afirman.

## Recortar una superficie

El grupo **Recorte** corta una superficie sin cambiar su forma: la superficie conserva todos sus puntos de control, y solo se muestra, cuenta y escribe la parte dentro del contorno. **Recortar a un rectángulo** y **Recortar con un círculo** trabajan sobre una porción (0 a 1) de la superficie en cada dirección, así que no necesitan elegir nada en la vista; **Recortar por una curva** toma una curva cerrada que queda sobre la superficie (se proyecta sobre ella, y se rechaza con un mensaje si está abierta o a más de la tolerancia). Marcá **Cortar un agujero** para quitar el interior del contorno; si no lo marcás, se conserva solo el interior. Una superficie puede tener un contorno conservado y cualquier número de agujeros; un contorno que cruza otro se rechaza. **Quitar el recorte** muestra otra vez la superficie completa. Los bordes cortados siguen el contorno exactamente; el Deshacer del panel revierte un recorte como cualquier otro paso.

STEP guarda el recorte como los límites de la cara, e IGES como una superficie recortada (entidad 144); ambos lo leen de vuelta.

## Sólidos y booleanas

El grupo **Sólidos** convierte superficies en cuerpos cerrados y los combina. Un sólido aquí es un conjunto de superficies del propio panel que juntas cierran un volumen; sus caras siguen siendo superficies NURBS exactas con sus recortes.

- **Sólido caja**, **Sólido cilindro** y **Sólido esfera** crean uno a partir de tamaños escritos (en mm): una caja de seis caras planas, un cilindro con un lado redondo y dos extremos planos recortados al círculo, una esfera de una superficie de revolución.
- **Sólido desde superficies** agrupa superficies que hiciste vos. Elegílas, o no elijas ninguna para usar todas las superficies visibles que todavía no están en un sólido. Se cosen juntas dentro de la tolerancia: si no cierran, no cambia nada y el panel dice cuántos bordes quedan abiertos y qué tan cerca deben encontrarse.
- **Unión**, **Restar** (el segundo sólido se quita del primero) e **Intersecar** (solo lo que ambos comparten) toman dos sólidos: clickeá una cara de cada uno en la vista, o apretá **Elegir** en la lista **Sólidos**. Marcá **Conservar los dos sólidos** para dejarlos al lado del resultado.

Una booleana mantiene cada cara sobre su superficie exacta y la corta con nuevos contornos de recorte a lo largo de la intersección. La línea de resultado da los números medidos: cuánto tuvieron que moverse los puntos del motor de sólidos para quedar sobre las superficies exactas (nunca más que la tolerancia), qué tan cerca están los puntos de intersección de ambas superficies (normalmente unas pocas millonésimas de milímetro), el volumen, y si las caras nuevas vuelven a cerrar cuando se cosen de nuevo desde sus superficies exactas. Los volúmenes se miden sobre triángulos dentro de la tolerancia (0,05 mm salvo que pongas otra), así que el volumen de una esfera o de un cilindro sale algo menor que el exacto: una tolerancia más chica se acerca más. Una booleana que no se puede hacer limpiamente (los sólidos no comparten nada, un contorno se cruzaría a sí mismo) se rechaza con un mensaje y no cambia nada. Una booleana es un paso del **Deshacer** del panel.

En la lista **Sólidos**, **Desagrupar** conserva las caras como superficies simples; el cesto quita el sólido y sus caras.

**Agregar al modelo** (en la lista **Sólidos**) pone una copia del sólido en el modelo como un grupo cerrado, con sus caras como triángulos dentro de 0,05 mm, en un paso del Deshacer del modelo. Después funciona con la **Unión**, **Restar** e **Intersecar** del propio modelo, con empujar/tirar y con la verificación de impresión 3D; el sólido exacto queda en el panel.

## Redondeos y engrosamiento

**Redondeo entre caras** redondea el borde donde se encuentran dos caras de un mismo sólido: elegí las dos caras (en la vista, o con **Elegir** en la lista), escribí el **radio** y, para un radio que cambia a lo largo del borde, el **radio al final** (0 mantiene un solo radio). Una esfera de ese radio se hace rodar a lo largo del borde tocando ambas caras; el redondeo es el arco circular exacto que deja en cada punto, unido en una sola superficie, y las dos caras se recortan donde la esfera las toca. Un borde exterior pierde material, una esquina interior gana. La línea de resultado indica lo medido: qué tan lejos está la superficie del redondeo de la esfera que rueda entre los puntos con que se construyó (se agregan puntos hasta quedar dentro de un cuarto de la tolerancia), el ángulo mayor entre el redondeo y cada cara a lo largo de las líneas de contacto, y los mismos números que una Unión. Un radio que no entra (la esfera se saldría de una cara, o una cara se curva más cerrada que el radio) se rechaza nombrando la cara, y no cambia nada.

**Redondear varios bordes** redondea muchos bordes en un paso: elegí las dos caras del primer borde, después las dos del siguiente, y así (una cara puede estar en varios pares, por ejemplo la cara de arriba de una caja en cuatro de ellos); todos los bordes reciben el radio que escribas. Cada redondeo se calcula sobre el sólido tal como estaba, y después se cortan uno tras otro, así que el orden no importa. Donde dos bordes redondeados se encuentran en una esquina cuyos otros bordes quedan vivos, los dos redondeos se juntan a lo largo de su curva de intersección (un pliegue). Donde tres bordes exteriores redondeados de tres caras planas que forman ángulo recto se encuentran con un solo radio, la esquina es un **parche de esfera** tangente a los tres redondeos (destildá **Esquinas** para obtener la esquina con pliegue); un borde debe medir al menos el doble del radio en los extremos que son esquinas así. La línea de resultado dice cuántos bordes se redondearon y cómo quedaron las esquinas. Los bordes interiores también se pueden redondear juntos, pero un resultado que no vuelve a cerrar solo se informa (la línea lo dice), así que revisalo.

**Convertir en sólido** le da grosor a una superficie: elegila, escribí el **grosor**, y marcá **Otro lado** para crecer hacia el otro lado. La cara desplazada se ajusta a la superficie y se mide contra ella (la línea de resultado da la mayor diferencia respecto del grosor); las paredes siguen cada borde y cada contorno de recorte. Si la superficie se curva más cerrada que el grosor de ese lado, o si otra parte de ella queda más cerca que el grosor, se rechaza nombrando la superficie y el lugar, y no cambia nada.

## Deshacer, el archivo, STEP e IGES

El panel tiene su propio **Deshacer** y **Rehacer** (un paso por comando). Las superficies se guardan en el archivo `.modelcraft` junto con el modelo; no son parte del deshacer propio del modelo, igual que los materiales del archivo.

**STEP…** (AP242) e **IGES…** guardan las curvas y superficies exactamente como están (curvas y superficies B-spline, sin convertir nada en triángulos). Cada superficie es su propia cara, con su recorte; un sólido se escribe como una sola cáscara cerrada, con cada borde compartido por sus dos caras, como esperan otros programas CAD (la línea de estado dice cuántos sólidos salieron así). En IGES el mismo sólido es un único B-rep sólido de variedad (entidad 186 sobre la cáscara cerrada 514, caras 510, lazos 508, una lista de bordes 504 y una lista de vértices 502); un sólido cuyas caras no se emparejan borde por borde se escribe como caras separadas, y la línea lo dice. **Importar…** lee de vuelta un sólido así como sólido, desde STEP y desde IGES. Lee curvas y superficies escritas de esta forma, y conjuntos de parches `.ccnurbs`; los sólidos STEP de otros programas se abren con Archivo › Importar como mallas.

## Superficies a partir de un escaneo (ingeniería inversa)

Seleccioná la malla escaneada en el modelo (si no hay nada seleccionado, es todo lo visible), abrí **Superficies**, y en el grupo **Escaneo** elegí **Ajustar superficies al escaneo**. La herramienta busca **planos**, **cilindros**, **esferas** y **conos** (las superficies exactas de las que está hecha una pieza mecanizada; cada fila muestra el radio o el semiángulo que encontró), encuentra **redondeos** (bordes y esquinas redondeadas: un pequeño cilindro o esfera que entra tangente en dos o más caras, mostrado con su radio y las caras que une), **redondeos de borde** (un toro: el borde redondeado donde una cara plana se encuentra con un cilindro o cono, mostrado con su radio y el radio de su anillo) y **redondeos variables** (un borde redondeado cuyo radio cambia a lo largo, mostrado con el radio en cada extremo), ajusta **un parche de forma libre** a una pieza suave y poco curva, y recorta cada cara al contorno de la parte del escaneo de donde vino, para que los agujeros y las esquinas se conserven. Opciones: la **tolerancia** (cuánto, en mm, puede estar un punto del escaneo de un plano o cilindro y seguir perteneciendo a él, y el objetivo para un parche de forma libre), la **pieza más chica** (una porción del área de la superficie) y las **caras máximas**. El mismo escaneo y las mismas opciones siempre dan las mismas caras.

El resultado es una tabla, una fila por cara: su tipo, cuántos triángulos la originaron, y el error **medido desde el escaneo hasta la cara** (rms, el mayor, y la proporción de puntos dentro de la tolerancia). Los puntos medidos son los vértices del escaneo y el centro de cada triángulo. El error no se mide en el otro sentido (cara al escaneo), así que una cara que se extiende más allá del escaneo no se vería. La nota debajo de la tabla también indica cuánta área era demasiado chica para ajustarse. En la vista, los puntos del escaneo se colorean según su **mapa de desviación**: azul sobre la cara, verde a mitad de la tolerancia, rojo en la tolerancia o más (destildá **Mostrar el mapa de desviación** para ocultarlo). Las piezas que se doblan sobre sí mismas (un tubo cerrado ajustado con parches de forma libre, por ejemplo) se listan como no ajustadas, nunca se fuerzan a una sola superficie.

**Coser las superficies a un sólido** une en un solo sólido cerrado todas las superficies visibles que no están en un sólido. Las caras del escaneo se tocan solo dentro del propio error del escaneo, así que prueba la menor distancia de unión que cierra (nunca más que la **distancia de costura** que pongas) y rechaza con un mensaje cuando las caras no cierran. Nunca tapa un hueco. Una caja con bordes redondeados se cose cuando sus redondeos se encontraron como caras propias; la distancia de unión que cerró aparece en el resultado. El sólido después funciona con Unión, Restar, Intersecar y **Agregar al modelo**.

Lo que no hace: un **redondeo de borde** (un toro) se busca solo alrededor del eje de un cilindro o cono ya encontrado, y un **redondeo variable** solo a lo largo de un borde bastante recto (sus secciones se cortan cuadradas respecto de una dirección); en otros casos salen como parches de forma libre si son lo bastante suaves, y si no quedan afuera; las esferas, los conos y los redondeos se encuentran por muestreo aleatorio, así que uno muy chico (de pocos triángulos) puede pasarse por alto; el mapa de desviación muestra la distancia del escaneo a las caras, no al revés; los escaneos muy grandes (más de 300 000 triángulos) se rechazan aquí. Las caras de un cilindro de vuelta completa se cortan alrededor de los agujeros, con la costura puesta donde no hay agujero. Revisá cada cara contra tu escaneo antes de confiar en ella.

## Todavía no está hecho

Redondear bordes que se encuentran en una esquina de caras curvas o con radios distintos (una mezcla de vértice), un redondeo entre caras que no se tocan, un redondeo interior que termina en una cara inclinada o curva, y booleanas y redondeos calculados sobre las superficies sin triángulos (aquí el motor de sólidos trabaja sobre triángulos dentro de la tolerancia, y cada punto se vuelve a poner después sobre las superficies exactas).
