---
title: Superficies de forma libre (NURBS)
summary: Curvas y superficies suaves para carcasas de productos, carrocerías y cascos de barco: solevación, barrido, redes de curvas, parches de cuatro aristas, fusiones y recortes, con continuidad G0, G1 y G2 medida sobre las superficies exactas; sólidos con unión, resta e intersección; vistas de cebra y de curvatura; caras ajustadas a un escaneo con el error medido, y archivos STEP o IGES.
keywords: nurbs, escaneo, ingeniería inversa, ajustar, malla a superficie, nube de puntos, stl, recortar, recortada, agujero, cortar, sólido, sólidos, booleana, unión, restar, intersecar, diferencia, coser, cerrado, forma libre, superficie, superficies, b-spline, bspline, curva, spline, solevación, barrido, riel, red, coons, parche, fusión, igualar, continuidad, g0, g1, g2, tangente, curvatura, cebra, puntos de control, nudos, grado, step, iges, clase A
from: 09887405
---

El panel **Superficies** crea curvas y superficies suaves del tipo que se usa en carcasas de productos, carrocerías y cascos de barco: NURBS, las mismas matemáticas que usan otros modeladores de superficies. Todo se mide sobre las superficies exactas, nunca sobre los triángulos que ve. Las medidas del panel están en **milímetros**, sin importar la unidad que muestre el modelo.

Ábralo desde el panel de la derecha: {{ui:Surfaces}} › {{ui:Open the Surfaces panel}}. Un modelo que ya tiene superficies lo abre automáticamente.

## Cómo funciona un comando

1. Pulse un comando (por ejemplo, **Solevación**). El panel indica lo que todavía necesita: puntos, curvas, una arista de superficie o un extremo de curva.
2. Designe los elementos: haga clic en ellos en la vista 3D, o pulse **Designar** (o los botones de arista y de extremo) junto a cada uno en la lista. Para una arista, haga clic cerca de esa arista de la superficie.
3. Revise las opciones (grado, tolerancia, continuidad, …) y pulse **Crear**.

Las curvas desde puntos toman los puntos escritos uno por línea (`x, y, z` en mm), o bien **Designar puntos en la vista**: cada clic usa el mismo ajuste que las herramientas de dibujo; pulse <kbd>Enter</kbd> o haga doble clic para terminar, y <kbd>Esc</kbd> para detener.

## Curvas

- **Curva por puntos** pasa por cada punto. **Curva por puntos de control** sigue una red de puntos en su lugar.
- **Insertar nudo**, **Subir grado** y **Bajar grado** cambian la forma en que se describe una curva sin moverla (bajar el grado se rechaza cuando la curva se movería más que la tolerancia). **Reconstruir curva** le da un nuevo número de puntos de control e informa cuánto se movió.
- **Igualar curva** hace que el extremo de una curva se una con otra con G0 (tocándose), G1 (misma dirección) o G2 (misma curvatura también). **Fusionar curva** agrega una curva nueva entre dos extremos.
- **Unir curvas** y **Dividir curva**.

## Superficies

- **Solevación** a través de dos o más curvas, **Superficie reglada** entre dos, **Extruir curva** y **Revolución de curva**.
- **Barrido a lo largo de un riel** lleva un perfil a lo largo de una trayectoria sin retorcerlo; **Barrido a lo largo de dos rieles** mantiene los extremos del perfil sobre ambos rieles. Los barridos se ajustan: la línea de estado indica qué tan cerca se mantuvo del barrido real.
- **Superficie desde una red de curvas** pasa por una cuadrícula de curvas (las primeras designaciones son los perfiles, y las demás las guías). **Parche desde cuatro aristas** rellena cuatro curvas que se encuentran en sus esquinas.
- **Igualar superficie** hace que una arista de superficie se una con una vecina con G0, G1 o G2; **Fusionar superficie** agrega una superficie entre dos aristas.
- **Desfase de superficie**, **Extender superficie** (la superficie continúa como iba), **Reconstruir superficie**, y nudos y grado para superficies.

## Revisar la calidad

La tabla **Aristas compartidas** lista cada arista que comparten dos superficies, con la separación (mm), el ángulo entre ellas (°) y el salto de curvatura (1/mm), e indica si eso equivale a G0, G1 o G2. Una arista peor de lo que pidió también aparece en **Problemas** (el botón ⚠ de la barra de la aplicación) con una corrección **Igualar**.

**Mostrar como** › **Franjas cebra** y **Curvatura (gaussiana)** provienen de la superficie exacta: las franjas que cruzan una arista sin interrupción indican G1, y las que además conservan su ancho indican G2. La curvatura es azul donde la superficie es una silla de montar, roja donde es una cúpula y blanca donde es plana. **Puntos de control** dibuja las redes de control.

G0 a G2 se miden en 33 puntos por arista. **G3 y la calidad "clase A" no se miden** y no se afirman.

## Recortar una superficie

El grupo **Recortar** corta una superficie sin cambiar su forma: la superficie conserva todos sus puntos de control, y solo se muestra, cuenta y escribe la parte dentro del contorno. **Recortar a un rectángulo** y **Recortar con un círculo** trabajan sobre una proporción (de 0 a 1) de la superficie en cada dirección, así que no necesitan designar nada en la vista. **Recortar con una curva** toma una curva cerrada que yace sobre la superficie (se proyecta sobre la superficie, y se rechaza con un mensaje si está abierta o a más de la tolerancia). Marque **Cortar un agujero** para quitar el interior del contorno; si lo deja sin marcar, solo se conserva el interior. Una superficie puede tener un contorno conservado y cualquier número de agujeros; un contorno que cruce otro se rechaza. **Quitar el recorte** vuelve a mostrar la superficie completa. Los bordes cortados siguen el contorno exactamente, y el **Deshacer** del panel revierte un recorte como cualquier otro paso.

STEP lleva el recorte como límites de la cara, e IGES como superficie recortada (entidad 144); ambos lo leen de vuelta.

## Sólidos y booleanas

El grupo **Sólidos** convierte superficies en cuerpos cerrados y los combina. Un sólido aquí es un conjunto de superficies del propio panel que juntas cierran un volumen; sus caras siguen siendo superficies NURBS exactas con sus recortes.

- **Sólido caja**, **Sólido cilindro** y **Sólido esfera** crean uno a partir de tamaños escritos (en mm): una caja de seis caras planas, un cilindro con un lado redondo y dos extremos planos recortados al círculo, o una esfera de una sola superficie de revolución.
- **Sólido desde superficies** agrupa superficies que usted creó. Designe las superficies, o no designe ninguna para usar todas las superficies visibles que todavía no están en un sólido. Se cosen juntas dentro de la tolerancia: si no cierran, no cambia nada y el panel indica cuántas aristas quedan abiertas y qué tan cerca deben estar para cerrar.
- **Unión**, **Restar** (el segundo sólido se quita del primero) e **Intersecar** (solo lo que ambos comparten) toman dos sólidos: haga clic en una cara de cada uno en la vista, o pulse **Designar** en la lista **Sólidos**. Marque **Conservar los dos sólidos** para dejarlos junto al resultado.

Una booleana conserva cada cara sobre su superficie exacta y la corta con nuevos contornos de recorte a lo largo de la intersección. La línea de resultado da las medidas: cuánto tuvieron que moverse los puntos del motor de sólidos para quedar sobre las superficies exactas (nunca más que la tolerancia), qué tan cerca están los puntos de intersección de ambas superficies (normalmente unas millonésimas de milímetro), el volumen, y si las caras nuevas vuelven a cerrar cuando se cosen de nuevo a partir de sus superficies exactas. Los volúmenes se miden sobre triángulos dentro de la tolerancia (0.05 mm, salvo que defina otra), así que el volumen de una esfera o de un cilindro sale un poco menor que el exacto: una tolerancia más pequeña se acerca más. Una booleana que no se puede hacer limpiamente (los sólidos no comparten nada, o un contorno se cruzaría consigo mismo) se rechaza con un mensaje y no cambia nada. Una booleana es un paso del **Deshacer** del panel.

En la lista **Sólidos**, **Desagrupar** conserva las caras como superficies simples; el cesto elimina el sólido y sus caras.

**Añadir al modelo** (en la lista **Sólidos**) pone una copia del sólido en el modelo como un grupo cerrado, con sus caras como triángulos dentro de 0.05 mm, en un solo paso del Deshacer del modelo. Después funciona con la **Unión**, **Restar** e **Intersecar** propios del modelo, con empujar y tirar y con la revisión de impresión 3D; el sólido exacto se queda en el panel.

## Redondeos y engrosamiento

**Redondeo entre caras** redondea la arista donde se encuentran dos caras de un mismo sólido: designe las dos caras (en la vista, o con **Designar** en la lista), escriba el **radio** y, para un radio que cambie a lo largo de la arista, el **radio al final** (0 mantiene un solo radio). Una esfera de ese radio se hace rodar a lo largo de la arista tocando ambas caras; el redondeo es el arco circular exacto que deja en cada punto, unido en una sola superficie, y las dos caras se recortan donde la esfera las toca. Una arista exterior pierde material, y una esquina interior gana material. La línea de resultado indica lo medido: qué tan lejos está la superficie del redondeo de la esfera que rueda, entre los puntos con que se construyó (se agregan puntos hasta quedar dentro de una cuarta parte de la tolerancia), el mayor ángulo entre el redondeo y cada cara a lo largo de las líneas de contacto, y los mismos números que una unión. Un radio que no cabe (la esfera saldría de una cara, o una cara se curva más cerrada que el radio) se rechaza nombrando la cara, y no cambia nada.

**Redondear varias aristas** redondea muchas aristas en un solo paso: designe las dos caras de la primera arista, luego las dos caras de la siguiente, y así sucesivamente (una cara puede estar en varios pares; por ejemplo, la cara superior de una caja en cuatro de ellos). Todas las aristas reciben el radio que escriba. Cada redondeo se calcula sobre el sólido tal como estaba, y luego se cortan uno tras otro, así que el orden no importa. Donde dos aristas redondeadas se encuentran en una esquina cuyas otras aristas siguen afiladas, los dos redondeos se cruzan a lo largo de su curva de intersección (un pliegue). Donde tres aristas exteriores redondeadas de tres caras planas que forman ángulo recto se encuentran con un mismo radio, la esquina es un **parche esférico** tangente a los tres redondeos (desmarque **Esquinas** para obtener la esquina con pliegue); una arista debe medir al menos el doble del radio en los extremos donde hay esquinas así. La línea de resultado indica cuántas aristas se redondearon y cómo quedaron las esquinas. Las aristas interiores también pueden redondearse juntas, pero un resultado que no vuelve a cerrar solo se informa (la línea lo dice), así que revíselo.

**Engrosar hasta un sólido** le da espesor a una superficie: designela, escriba el **espesor** y marque **Otro lado** para crecerla hacia el otro lado. La cara desplazada se ajusta a la superficie y se mide contra ella (la línea de resultado da la mayor diferencia respecto del espesor); las paredes siguen cada arista y cada contorno de recorte. Si la superficie se curva más cerrada que el espesor en ese lado, o si otra parte de ella queda más cerca que el espesor, se rechaza nombrando la superficie y el lugar, y no cambia nada.

## Deshacer, el archivo, STEP e IGES

El panel tiene su propio **Deshacer** y **Rehacer** (un paso por comando). Las superficies se guardan en el archivo `.modelcraft` junto con el modelo; no forman parte del deshacer propio del modelo, igual que los materiales del archivo.

**STEP…** (AP242) e **IGES…** guardan las curvas y superficies exactamente como son (curvas y superficies B-spline, sin convertir nada en triángulos). Cada superficie es su propia cara, con su recorte; un sólido se escribe como una cáscara cerrada, con cada arista compartida por sus dos caras, como esperan otros programas CAD (la línea de estado indica cuántos sólidos se exportaron así). En IGES, el mismo sólido es un B-rep sólido de una sola variedad (entidad 186 sobre la cáscara cerrada 514, caras 510, lazos 508, una lista de aristas 504 y una lista de vértices 502); un sólido cuyas caras no se emparejan arista por arista se escribe como caras separadas, y la línea lo indica. **Importar…** lee un sólido de vuelta como sólido, tanto desde STEP como desde IGES. También lee curvas y superficies escritas de esta forma, y conjuntos de parches `.ccnurbs`; los sólidos STEP de otros programas se abren con Archivo › Importar como mallas.

## Superficies desde un escaneo (ingeniería inversa)

Seleccione la malla escaneada en el modelo (si no hay nada seleccionado, se usa todo lo visible), abra **Superficies** y, en el grupo **Escaneo**, elija **Ajustar superficies al escaneo**. La herramienta busca **planos**, **cilindros**, **esferas** y **conos** (las superficies exactas de las que está hecha una pieza mecanizada; cada fila muestra el radio o el semiángulo que encontró), encuentra **redondeos** (aristas y esquinas redondeadas: un cilindro o esfera pequeños que pasan tangentes a dos o más caras, mostrados con su radio y las caras que unen), **redondeos de borde** (un toro: la arista redondeada donde una cara plana se encuentra con un cilindro o un cono, mostrada con su radio y el radio de su anillo) y **redondeos variables** (una arista redondeada cuyo radio cambia a lo largo de ella, mostrada con el radio en cada extremo), ajusta **un parche de forma libre** a una pieza suave y poco curvada, y recorta cada cara al contorno de la parte del escaneo de donde proviene, de modo que los agujeros y las esquinas se conservan. Opciones: la **tolerancia** (qué tan lejos, en mm, puede estar un punto del escaneo de un plano o cilindro y seguir perteneciendo a él, y el objetivo para un parche de forma libre), la **pieza más pequeña** (una proporción del área de la superficie) y el **máximo de caras**. El mismo escaneo y las mismas opciones siempre dan las mismas caras.

El resultado es una tabla, con una fila por cara: su tipo, cuántos triángulos la originaron, y el error **medido desde el escaneo hasta la cara** (rms, el mayor, y la proporción de puntos dentro de la tolerancia). Los puntos medidos son los vértices del escaneo y el centro de cada triángulo. El error no se mide en sentido contrario (de la cara al escaneo), así que una cara que se extienda más allá del escaneo no se notaría. La nota debajo de la tabla también indica cuánta área era demasiado pequeña para ajustarse. En la vista, los puntos del escaneo se colorean según su **mapa de desviación**: azul sobre la cara, verde a medio camino de la tolerancia, rojo en la tolerancia o más (desmarque **Mostrar el mapa de desviación** para ocultarlo). Las piezas que se doblan sobre sí mismas (un tubo cerrado ajustado con parches de forma libre, por ejemplo) se listan como no ajustadas, y nunca se fuerzan a formar una sola superficie.

**Coser las superficies en un sólido** cose en un solo sólido cerrado cada superficie visible que todavía no está en un sólido. Las caras del escaneo solo coinciden dentro del propio error del escaneo, así que prueba la menor distancia de unión que cierre (nunca más que la **distancia de costura** que defina) y se rechaza con un mensaje cuando las caras no cierran. Nunca tapa un hueco. Una caja con bordes redondeados se cose si sus redondeos se encontraron como caras propias; la distancia de unión que cerró aparece en el resultado. El sólido después funciona con Unión, Restar, Intersecar y **Añadir al modelo**.

Lo que no hace: un **redondeo de borde** (un toro) solo se busca alrededor del eje de un cilindro o cono ya encontrado, y un **redondeo variable** solo a lo largo de una arista bastante recta (sus secciones se cortan cuadradas respecto de una dirección); en otros casos salen como parches de forma libre si son lo bastante suaves, y si no, se omiten. Las esferas, conos y redondeos se encuentran por muestreo aleatorio, así que uno muy pequeño (de unos pocos triángulos) puede pasar desapercibido. El mapa de desviación muestra la distancia del escaneo a las caras, no al revés. Los escaneos muy grandes (más de 300,000 triángulos) se rechazan aquí. Las caras de un cilindro de vuelta completa se cortan alrededor de los agujeros, con la costura puesta donde no hay agujero. Revise cada cara contra su escaneo antes de confiar en ella.

## Aún no disponible

Redondear aristas que se encuentran en una esquina de caras curvas o con radios distintos (una mezcla de vértice), un redondeo entre caras que no se tocan, un redondeo interior que termina en una cara inclinada o curva, y booleanas y redondeos calculados sobre las superficies sin triángulos (aquí el motor de sólidos trabaja con triángulos dentro de la tolerancia, y luego cada punto se vuelve a colocar sobre las superficies exactas).
