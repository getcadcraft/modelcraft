---
title: Superficies libres (NURBS)
summary: Curvas y superficies suaves para carcasas de productos, carrocerías y cascos de barcos: loft, barrido, redes de curvas, parches de cuatro aristas, empalmes y recortes, con continuidad G0, G1 y G2 medida sobre las superficies exactas, sólidos con unión, resta e intersección, vistas de cebra y de curvatura, caras ajustadas a un escaneo con el error medido, y archivos STEP o IGES.
keywords: nurbs, escaneo, ingeniería inversa, ajustar, malla a superficie, nube de puntos, stl, recortar, recortada, agujero, cortar, sólido, sólidos, booleano, unión, restar, intersecar, diferencia, coser, cerrado, forma libre, freeform, superficie, superficies, b-spline, bspline, curva, spline, loft, barrido, riel, red, coons, parche, empalme, continuidad, g0, g1, g2, tangente, curvatura, cebra, puntos de control, nudos, grado, step, iges, clase A
from: 09887405
---

El panel **Superficies** crea curvas y superficies suaves del tipo usado en carcasas de productos, carrocerías y cascos de barcos: NURBS, las mismas matemáticas que usan otros modeladores de superficies. Todo se mide sobre las superficies exactas, nunca sobre los triángulos que ve. Las medidas del panel están en **milímetros**, sea cual sea la unidad que muestre el modelo.

Ábralo desde el panel de la derecha: {{ui:Superficies}} › {{ui:Abrir el panel Superficies}}. Un modelo que ya tiene superficies lo abre automáticamente.

## Cómo funciona un comando

1. Pulse un comando (por ejemplo **Loft**). El panel indica lo que todavía necesita: puntos, curvas, un borde de superficie o un extremo de curva.
2. Selecciónelos: haga clic en ellos en la vista 3D, o pulse **Elegir** (o los botones de arista y extremo) junto a cada uno en la lista. Para una arista, haga clic cerca de esa arista de la superficie.
3. Revise las opciones (grado, tolerancia, continuidad…) y pulse **Crear**.

Las curvas a partir de puntos toman los puntos escritos uno por línea (`x, y, z` en mm), o **Elegir puntos en la vista**: cada clic usa el mismo ajuste que las herramientas de dibujo. Pulse <kbd>Intro</kbd> o haga doble clic para terminar, y <kbd>Esc</kbd> para detenerse.

## Curvas

- **Curva por puntos** pasa por cada punto. **Curva por puntos de control** sigue, en cambio, una jaula de puntos.
- **Insertar nudo**, **Subir grado** y **Bajar grado** cambian la descripción de una curva sin moverla (bajar se rechaza cuando la curva se movería más que la tolerancia). **Reconstruir curva** le da un nuevo número de puntos de control e indica cuánto se movió.
- **Igualar curva** hace que el extremo de una curva coincida con otra con G0 (tocándose), G1 (misma dirección) o G2 (además, misma curvatura). **Empalmar curva** añade una curva nueva entre dos extremos.
- **Unir curvas** y **Dividir curva**.

## Superficies

- **Loft** a través de dos o más curvas, **Superficie reglada** entre dos, **Extruir curva**, **Revolucionar curva**.
- **Barrido por un riel** lleva un perfil a lo largo de una trayectoria sin retorcerlo; **Barrido por dos rieles** mantiene los extremos del perfil sobre ambos rieles. Los barridos se ajustan: la línea de estado indica lo cerca que se mantuvo del barrido verdadero.
- **Superficie desde una red de curvas** pasa por una cuadrícula de curvas (las primeras selecciones son los perfiles y el resto las guías). **Parche desde cuatro aristas** rellena cuatro curvas que se unen en sus esquinas.
- **Igualar superficie** hace que un borde de superficie coincida con un vecino con G0, G1 o G2; **Empalmar superficie** añade una superficie entre dos aristas.
- **Desfasar superficie**, **Extender superficie** (la superficie continúa como iba), **Reconstruir superficie**, y nudos y grado para superficies.

## Comprobación de la calidad

La tabla **Aristas compartidas** enumera cada arista que comparten dos superficies, con la separación (mm), el ángulo entre ellas (°) y el salto de curvatura (1/mm), y si eso la convierte en G0, G1 o G2. Una arista peor de lo solicitado también aparece en **Problemas** (el botón ⚠ de la barra de la aplicación) con una corrección de **Igualar**.

**Mostrar como** › **Rayas de cebra** y **Curvatura (gaussiana)** proceden de la superficie exacta: las rayas que continúan sin interrupción a través de una arista indican G1; las rayas que además mantienen su anchura indican G2. La curvatura es azul donde la superficie es una silla de montar, roja donde es una cúpula y blanca donde es plana. **Puntos de control** dibuja las redes de control.

G0–G2 se miden en 33 puntos por arista. **G3 y la calidad «clase A» no se miden** y no se garantizan.

## Recortar una superficie

El grupo **Recortar** corta una superficie sin cambiar su forma: la superficie conserva todos sus puntos de control, y solo se muestra, cuenta y escribe la parte dentro del contorno. **Recortar a un rectángulo** y **Recortar con un círculo** trabajan sobre una proporción (de 0 a 1) de la superficie en cada dirección, así que no necesitan selección en la vista. **Recortar por una curva** toma una curva cerrada situada sobre la superficie (se proyecta sobre ella, y se rechaza con un mensaje si está abierta o a más de la tolerancia). Marque **Cortar un agujero** para eliminar el interior del contorno; déjelo desmarcado para conservar solo el interior. Una superficie puede tener un contorno conservado y cualquier número de agujeros; un contorno que cruza a otro se rechaza. **Quitar el recorte** vuelve a mostrar la superficie completa. Las aristas de corte siguen el contorno exactamente, y **Deshacer** del panel deshace un recorte como cualquier otro paso.

STEP transporta el recorte como los límites de la cara, e IGES como una superficie recortada (entidad 144); ambos lo leen de nuevo.

## Sólidos y booleanos

El grupo **Sólidos** convierte superficies en cuerpos cerrados y los combina. Aquí, un sólido es un conjunto de superficies del panel que juntas cierran un volumen; sus caras siguen siendo superficies NURBS exactas con sus recortes.

- **Sólido caja**, **Sólido cilindro** y **Sólido esfera** crean uno a partir de medidas escritas (en mm): una caja de seis caras planas, un cilindro con un lateral redondo y dos extremos planos recortados al círculo, o una esfera de una superficie de revolución.
- **Sólido desde superficies** agrupa superficies que usted creó. Selecciónelas, o no seleccione ninguna para usar todas las superficies visibles que aún no estén en un sólido. Se cosen dentro de la tolerancia: si no cierran, no cambia nada y el panel indica cuántas aristas quedan abiertas y a qué distancia deben encontrarse.
- **Unión**, **Restar** (el segundo sólido se quita del primero) e **Intersecar** (solo lo que ambos comparten) toman dos sólidos: haga clic en una cara de cada uno en la vista, o pulse **Elegir** en la lista **Sólidos**. Marque **Conservar los dos sólidos** para dejarlos junto al resultado.

Un booleano conserva cada cara en su superficie exacta y la corta con nuevos contornos de recorte a lo largo de la intersección. La línea de resultado da las cifras medidas: cuánto tuvieron que moverse los puntos del motor de sólidos para situarse sobre las superficies exactas (nunca más que la tolerancia), lo cerca que están los puntos de intersección de ambas superficies (normalmente unas pocas millonésimas de milímetro), el volumen, y si las caras nuevas vuelven a cerrarse cuando se cosen de nuevo a partir de sus superficies exactas. Los volúmenes se miden sobre triángulos dentro de la tolerancia (0.05 mm salvo que defina otra), de modo que el volumen de una esfera o un cilindro sale ligeramente inferior al exacto: una tolerancia menor se acerca más. Un booleano que no puede hacerse limpiamente (los sólidos no comparten nada, o un contorno se cortaría a sí mismo) se rechaza con un mensaje y no cambia nada. Un booleano es un paso de **Deshacer** del panel.

En la lista **Sólidos**, **Desagrupar** mantiene las caras como superficies simples; la papelera elimina el sólido y sus caras.

**Añadir al modelo** (en la lista **Sólidos**) coloca una copia del sólido en el modelo como un grupo cerrado, con sus caras como triángulos dentro de 0.05 mm, en un paso de Deshacer del modelo. Después funciona con **Unión**, **Restar** e **Intersecar** del propio modelo, con empujar/tirar y con la comprobación de impresión 3D; el sólido exacto permanece en el panel.

## Empalmes y engrosamiento

**Redondeo entre caras** redondea la arista donde se unen dos caras de un mismo sólido: elija las dos caras (en la vista, o con **Elegir** en la lista), escriba el **radio** y, para un radio que cambie a lo largo de la arista, el **radio al final** (0 mantiene un radio único). Una esfera de ese radio se hace rodar a lo largo de la arista tocando ambas caras; el redondeo es el arco circular exacto que deja en cada punto, unido en una sola superficie, y las dos caras se recortan donde la esfera las toca. Una arista exterior pierde material; una esquina interior gana material. La línea de resultado indica lo medido: cuánto se aparta la superficie de redondeo de la esfera que rueda entre los puntos a partir de los que se construyó (se añaden puntos hasta que está dentro de una cuarta parte de la tolerancia), el ángulo máximo entre el redondeo y cada cara a lo largo de las líneas de contacto, y las mismas cifras que una Unión. Un radio que no encaja (la esfera saldría de una cara, o una cara se curva más que el radio) se rechaza nombrando la cara, y no cambia nada.

**Redondear varias aristas** redondea muchas aristas en un solo paso: elija las dos caras de la primera arista, después las dos caras de la siguiente, y así sucesivamente (una cara puede estar en varios pares, por ejemplo la cara superior de una caja en cuatro de ellos); todas las aristas reciben el radio que escriba. Cada redondeo se calcula sobre el sólido tal como estaba, y luego se recortan uno tras otro, así que el orden no importa. Donde dos aristas redondeadas se encuentran en una esquina cuyas otras aristas siguen vivas, los dos redondeos se cruzan a lo largo de su curva de intersección (un pliegue). Donde tres aristas exteriores redondeadas de tres caras planas que forman ángulo recto entre sí se encuentran con un mismo radio, la esquina es un **parche esférico** tangente a los tres redondeos (desmarque **Esquinas** para obtener la esquina con pliegue); una arista debe medir al menos el doble del radio en los extremos donde ambos son esquinas de este tipo. La línea de resultado indica cuántas aristas se redondearon y cómo quedaron las esquinas. Las aristas interiores también pueden redondearse juntas, pero un resultado que no vuelve a cerrarse solo se informa (lo indica la línea), así que compruébelo.

**Engrosar en un sólido** da grosor a una superficie: elíjala, escriba el **grosor** y marque **Otro lado** para crecer hacia el otro lado. La cara desplazada se ajusta a la superficie y se mide contra ella (la línea de resultado indica la mayor diferencia respecto al grosor); las paredes siguen cada arista y cada contorno de recorte. Si la superficie se curva más cerrada que el grosor en ese lado, o si otra parte de ella queda más cerca que el grosor, se rechaza nombrando la superficie y el lugar, y no cambia nada.

## Deshacer, el archivo, STEP e IGES

El panel tiene su propio **Deshacer** y **Rehacer** (un paso por comando). Las superficies se guardan en el archivo `.modelcraft` junto con el modelo; no forman parte del deshacer propio del modelo, igual que los materiales del archivo.

**STEP…** (AP242) e **IGES…** guardan las curvas y superficies exactamente como son (curvas y superficies B-spline, sin convertir nada en triángulos). Cada superficie es su propia cara, con su recorte; un sólido se escribe como una sola cáscara cerrada, con cada arista compartida por sus dos caras, como esperan otros programas CAD (la línea de estado indica cuántos sólidos salieron así). En IGES el mismo sólido es un único B-rep sólido de variedad (entidad 186 sobre la cáscara cerrada 514, caras 510, bucles 508, una lista de aristas 504 y una lista de vértices 502); un sólido cuyas caras no se emparejan arista a arista se escribe como caras separadas, y la línea lo indica. **Importar…** lee un sólido de vuelta como sólido, tanto desde STEP como desde IGES. Lee curvas y superficies escritas así, y conjuntos de parches `.ccnurbs`; los sólidos STEP de otros programas se abren con Archivo › Importar como mallas.

## Superficies a partir de un escaneo (ingeniería inversa)

Seleccione la malla escaneada en el modelo (si no hay nada seleccionado, se toma todo lo visible), abra **Superficies** y, en el grupo **Escaneo**, elija **Ajustar superficies al escaneo**. La herramienta busca **planos**, **cilindros**, **esferas** y **conos** (las superficies exactas de las que se compone una pieza mecanizada; cada fila muestra el radio o semiángulo que encontró), encuentra **redondeos** (aristas y esquinas redondeadas: un cilindro o esfera pequeños que se unen tangencialmente con dos o más caras, mostrados con su radio y las caras que une), **redondeos de anillo** (un toro: el borde redondeado donde una cara plana se encuentra con un cilindro o cono, mostrado con su radio y el radio de su anillo) y **redondeos variables** (un borde redondeado cuyo radio cambia a lo largo de él, mostrado con el radio en cada extremo). Ajusta **un parche libre** a una pieza suave y poco curvada, y recorta cada cara al contorno de la parte del escaneo de la que procede, de modo que los agujeros y las esquinas se conservan. Opciones: la **tolerancia** (cuánto, en mm, puede estar un punto del escaneo de un plano o cilindro y seguir perteneciendo a él, y el objetivo para un parche libre), la **pieza más pequeña** (una proporción del área de la superficie) y el **máximo de caras**. El mismo escaneo y las mismas opciones siempre dan las mismas caras.

El resultado es una tabla, una fila por cara: su tipo, cuántos triángulos la originaron, y el error **medido desde el escaneo hasta la cara** (rms, el mayor, y la proporción de puntos dentro de la tolerancia). Los puntos medidos son los vértices del escaneo y el centro de cada triángulo. El error no se mide en sentido contrario (de la cara al escaneo), así que una cara que se extiende más allá del escaneo no se vería. La nota bajo la tabla indica también cuánta área era demasiado pequeña para ajustarse. En la vista, los puntos del escaneo se colorean según su **mapa de desviación**: azul sobre la cara, verde a mitad de la tolerancia y rojo en la tolerancia o más (desmarque **Mostrar el mapa de desviación** para ocultarlo). Las piezas que se pliegan sobre sí mismas (por ejemplo, un tubo cerrado ajustado con parches libres) se listan como no ajustadas, nunca se fuerzan en una sola superficie.

**Coser las superficies a un sólido** cose en un sólido cerrado todas las superficies visibles que no estén en un sólido. Las caras del escaneo solo se unen dentro del propio error del escaneo, así que prueba la menor distancia de unión que cierre (nunca más que la **distancia de costura** que defina), y se rechaza con un mensaje cuando las caras no cierran. Nunca tapa un hueco. Una caja con bordes redondeados se cose si sus redondeos se encontraron como caras propias; la distancia de unión que cerró figura en el resultado. El sólido funciona entonces con Unión, Restar, Intersecar y **Añadir al modelo**.

Lo que no hace: un **redondeo de anillo** (un toro) solo se busca alrededor del eje de un cilindro o cono ya encontrado, y un **redondeo variable** solo a lo largo de una arista bastante recta (sus secciones se cortan perpendiculares a una dirección); en otros casos salen como parches libres cuando son lo bastante suaves, y se omiten en caso contrario. Las esferas, conos y redondeos se encuentran por muestreo aleatorio, así que uno muy pequeño (unos pocos triángulos) puede pasarse por alto. El mapa de desviación muestra la distancia del escaneo a las caras, no al revés. Los escaneos muy grandes (más de 300,000 triángulos) se rechazan aquí. Las caras de un cilindro de vuelta completa se recortan alrededor de los agujeros, con la costura colocada donde no hay ninguno. Compruebe cada cara frente a su escaneo antes de confiar en ella.

## Todavía no disponible

Redondear aristas que se encuentran en una esquina de caras curvas o con radios distintos (una mezcla de vértices), un redondeo entre caras que no se tocan, un redondeo interior que termina en una cara inclinada o curva, y booleanos y redondeos calculados sobre las superficies sin triángulos (aquí el motor de sólidos trabaja sobre triángulos dentro de la tolerancia, y cada punto se devuelve luego a las superficies exactas).
