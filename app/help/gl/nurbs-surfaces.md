---
title: Superficies de forma libre (NURBS)
summary: Curvas e superficies suaves para carcasas de produtos, carrozarías e cascos de barco — loft, barrido, redes de curvas, parches de catro bordos, mesturas, recortes — con continuidade G0, G1 e G2 medida sobre as superficies exactas, sólidos con unir, restar e intersectar, vistas cebra e de curvatura, caras axustadas a un escaneo co erro medido, e ficheiros STEP ou IGES.
keywords: nurbs, escaneo, enxeñaría inversa, axustar, malla a superficie, nube de puntos, stl, recortar, recortado, burato, cortar, sólido, sólidos, booleana, unir, restar, intersectar, diferenza, coser, pechado, forma libre, freeform, superficie, superficies, b-spline, bspline, curva, spline, loft, barrido, carril, rede, coons, parche, mestura, igualar, continuidade, g0, g1, g2, tanxente, curvatura, cebra, puntos de control, nós, grao, step, iges, clase A
from: 09887405
---

O panel **Superficies** fai curvas e superficies suaves do tipo usado en carcasas de produtos, carrozarías e cascos de barco: NURBS, as mesmas matemáticas que usan outros modeladores de superficies. Todo se mide sobre as superficies exactas, nunca sobre os triángulos que vostede ve. Os tamaños do panel están en **milímetros**, sexa cal sexa a unidade que mostre o modelo.

Ábrao desde o panel da dereita: {{ui:Surfaces}} › {{ui:Open the Surfaces panel}}. Un modelo que xa teña superficies ábreo por si mesmo.

## Como funciona un comando

1. Prema un comando (por exemplo **Loft**). O panel di o que aínda precisa: puntos, curvas, un bordo de superficie ou un extremo de curva.
2. Escóllaos: prema na vista 3D, ou prema **Escoller** (ou os botóns de bordo e extremo) xunto a cada un na lista. Para un bordo, prema preto dese bordo da superficie.
3. Revise as opcións (grao, tolerancia, continuidade, …) e prema **Facer**.

As curvas a partir de puntos toman os puntos escritos un por liña (`x, y, z` en mm), ou **Escoller puntos na vista**: cada clic usa o mesmo axuste que as ferramentas de debuxo; prema <kbd>Enter</kbd> ou faga dobre clic para rematar, e <kbd>Esc</kbd> para parar.

## Curvas

- **Curva por puntos** pasa por todos os puntos. **Curva por puntos de control** segue en cambio unha rede de puntos.
- **Inserir nó**, **Aumentar grao** e **Reducir grao** cambian a descrición dunha curva sen movela (reducir rexéitase cando a curva se movería máis que a tolerancia). **Reconstruír curva** lle dá un novo número de puntos de control e di canto se moveu.
- **Igualar curva** fai que o extremo dunha curva encontre o doutra con G0 (tocando), G1 (mesma dirección) ou G2 (tamén mesma curvatura). **Curva de mestura** engade unha curva nova entre dous extremos.
- **Unir curvas** e **Dividir curva**.

## Superficies

- **Loft** por dúas ou máis curvas, **Superficie reglada** entre dúas, **Extruír curva**, **Xirar curva**.
- **Barrido por un carril** leva un perfil ao longo dunha traxectoria sen torcelo; **Barrido por dous carrís** mantén os extremos do perfil nos dous carrís. Os barridos son axustados: a liña de estado di canto se mantivo preto do barrido verdadeiro.
- **Superficie desde unha rede de curvas** pasa por unha grella de curvas (as primeiras seleccións son os perfís, as demais as guías). **Parche desde catro bordos** enche catro curvas que se xuntan nas súas esquinas.
- **Igualar superficie** fai que un bordo de superficie encontre o dun veciño con G0, G1 ou G2; **Mestura de superficie** engade unha superficie entre dous bordos.
- **Superficie desfasada**, **Estender superficie** (a superficie continúa como ía), **Reconstruír superficie**, e nós e grao para superficies.

## Comprobar a calidade

A táboa **Bordos compartidos** lista cada bordo que dúas superficies comparten, coa fenda (mm), o ángulo entre elas (°) e o salto de curvatura (1/mm), e se iso o fai G0, G1 ou G2. Un bordo peor do que pediu tamén aparece en **Problemas** (o botón ⚠ da barra da aplicación) cunha corrección **Igualar**.

**Mostrar como** › **Raias cebra** e **Curvatura (gaussiana)** veñen da superficie exacta: as raias que continúan sen romperse por un bordo significan G1; as raias que tamén conservan o seu ancho significan G2. A curvatura é azul onde a superficie é unha sela, vermella onde é unha cúpula e branca onde é plana. **Puntos de control** debuxa as redes de control.

G0–G2 mídense en 33 puntos por bordo. **G3 e a calidade «clase A» non se miden** e non se afirman.

## Recortar unha superficie

O grupo **Recorte** corta unha superficie sen cambiar a súa forma: a superficie conserva todos os seus puntos de control, e só se mostra, conta e escribe a parte dentro do contorno. **Recortar a un rectángulo** e **Recortar cun círculo** traballan sobre unha proporción (0 a 1) da superficie en cada dirección, así que non precisan escoller na vista; **Recortar por unha curva** toma unha curva pechada que está sobre a superficie (proxéctase sobre ela, e rexéitase con palabras cando está aberta ou máis lonxe que a tolerancia). Marque **Cortar un burato** para quitar o interior do contorno; déixeo desmarcado para conservar só o interior. Unha superficie pode ter un contorno conservado e calquera número de buracos; un contorno que cruce outro é rexeitado. **Quitar o recorte** volve mostrar a superficie completa. Os bordos cortados seguen o contorno exactamente; Desfacer do panel desfai un recorte como calquera outro paso.

STEP leva o recorte como os límites da cara, e IGES como unha superficie recortada (entidade 144); ambos o len de volta.

## Sólidos e booleanas

O grupo **Sólidos** converte superficies en corpos pechados e combínaos. Aquí un sólido é un conxunto de superficies do propio panel que xuntas pechan un volume; as súas caras seguen sendo superficies NURBS exactas cos seus recortes.

- **Sólido caixa**, **Sólido cilindro** e **Sólido esfera** fan un a partir de tamaños escritos (en mm): unha caixa de seis caras planas, un cilindro cun lado redondo e dous extremos planos recortados ao círculo, unha esfera dunha superficie xirada.
- **Sólido desde superficies** agrupa superficies que vostede fixo. Escóllaas, ou non escolla ningunha para usar todas as superficies mostradas que aínda non estean nun sólido. Cósense dentro da tolerancia: se non pechan, nada cambia e o panel di cantos bordos quedan abertos e canto deben xuntarse.
- **Unir**, **Restar** (o segundo sólido quítase do primeiro) e **Intersectar** (só o que comparten ambos) toman dous sólidos: prema unha cara de cada un na vista, ou prema **Escoller** na lista **Sólidos**. Marque **Manter os dous sólidos** para deixalos xunto ao resultado.

Unha booleana conserva cada cara sobre a súa superficie exacta e córtaa con contornos de recorte novos ao longo da intersección. A liña de resultado dá os números medidos: canto tiveron que moverse os puntos do motor de sólidos para quedar sobre as superficies exactas (nunca máis que a tolerancia), que tan preto están os puntos de intersección de ambas superficies (normalmente unhas milmillonésimas de milímetro), o volume, e se as novas caras pechan de novo cando se cosen desde as súas superficies exactas. Os volumes mídense sobre triángulos dentro da tolerancia (0,05 mm salvo que estableza outra), así que o volume dunha esfera ou cilindro sae un pouco por debaixo do exacto: unha tolerancia menor achégase máis. Unha booleana que non se pode facer limpa (os sólidos non comparten nada, un contorno se cruzaría consigo mesmo) é rexeitada con palabras e non cambia nada. Unha booleana é un paso do Desfacer do panel.

Na lista **Sólidos**, **Desagrupar** conserva as caras como superficies simples; o cesto elimina o sólido e as súas caras.

**Engadir ao modelo** (na lista **Sólidos**) pon unha copia do sólido no modelo como un grupo pechado, coas súas caras como triángulos dentro de 0,05 mm, nun paso do Desfacer do modelo. Despois funciona coas propias **Unir**, **Restar** e **Intersectar** do modelo, con empurrar/tirar e coa comprobación de impresión 3D; o sólido exacto permanece no panel.

## Filetes e engrosamento

**Filete entre caras** redondea o bordo onde se encontran dúas caras dun mesmo sólido: escolla as dúas caras (na vista, ou con **Escoller** na lista), escriba o **raio** e, para un raio que cambia ao longo do bordo, o **raio no extremo** (0 mantén un único raio). Fai rodar unha bóla dese raio ao longo do bordo tocando as dúas caras; o filete é o arco circular exacto que queda en cada punto, unido nunha soa superficie, e as dúas caras recórtanse onde a bóla as toca. Un bordo exterior perde material, unha esquina interior gaña. A liña de resultado dá o medido: canto se afasta a superficie do filete da bóla que rodaba entre os puntos desde os que se construíu (engádense puntos ata quedar dentro dun cuarto da tolerancia), o maior ángulo entre o filete e cada cara ao longo das liñas de contacto, e os mesmos números que unha unión. Un raio que non cabe (a bóla saíra dunha cara, ou unha cara se curva máis axustada que o raio) é rexeitado, nomeando a cara, e nada cambia.

**Filete de varios bordos** redondea moitos bordos nun paso: escolla as dúas caras do primeiro bordo, logo as dúas do seguinte, e así (unha cara pode estar en varios pares, por exemplo a cara superior dunha caixa en catro deles); todos os bordos reciben o raio que escriba. Cada redondeo calcúlase sobre o sólido tal como estaba, e logo córtanse un tras outro, así que a orde non importa. Onde dous bordos redondeados se atopan nunha esquina cuxos outros bordos quedan afiados, os dous filetes únense ao longo da súa curva de intersección (unha dobra). Onde tres bordos exteriores redondeados de tres caras planas que forman ángulo recto se atopan cun mesmo raio, a esquina é un **parche esférico** tanxente aos tres filetes (desmarque **Esquinas** para obter a esquina con dobra); un bordo debe medir polo menos o dobre do raio onde os seus dous extremos son esas esquinas. A liña de resultado di cantos bordos se redondearon e como saíron as esquinas. Os bordos interiores tamén se poden redondear xuntos, pero un resultado que non volve pechar só se informa (a liña di iso), así que compróbeo.

**Engrosar nun sólido** dá a unha superficie un grosor: escóllaa, escriba o **grosor**, e marque **Outro lado** para crecer no sentido contrario. A cara desfasada axústase á superficie e mídese contra ela (a liña de resultado dá a maior diferenza co grosor); as paredes seguen cada bordo e cada contorno de recorte. Se a superficie se curva máis axustada que o grosor por ese lado, ou outra parte dela está máis preto que o grosor, é rexeitado, nomeando a superficie e o lugar, e nada cambia.

## Desfacer, o ficheiro, STEP e IGES

O panel ten o seu propio **Desfacer** e **Refacer** (un paso por comando). As superficies gárdanse no ficheiro `.modelcraft` co modelo; non forman parte do desfacer propio do modelo, como os materiais do ficheiro.

**STEP…** (AP242) e **IGES…** gardan as curvas e superficies exactamente como están (curvas e superficies B-spline, nada convertido en triángulos). Cada superficie é a súa propia cara, co seu recorte; un sólido escríbese como unha soa casca pechada, cada bordo compartido polas súas dúas caras como esperan outros programas CAD (a liña de estado di cantos sólidos saíron así). En IGES o mesmo sólido é un único B-rep sólido manifold (entidade 186 sobre a casca pechada 514, caras 510, lazos 508, unha lista de bordos 504 e unha lista de vértices 502); un sólido cuxas caras non se emparellan bordo a bordo escríbese como caras separadas, e a liña di iso. **Importar…** lee un sólido así de volta como sólido, desde STEP e desde IGES. Lee curvas e superficies escritas deste xeito, e os conxuntos de parches `.ccnurbs`; os sólidos STEP doutros programas ábrense con Ficheiro › Importar como mallas.

## Superficies a partir dun escaneo (enxeñaría inversa)

Seleccione a malla escaneada no modelo (sen nada seleccionado, todo o mostrado), abra **Superficies** e, no grupo **Escaneo**, escolla **Axustar superficies ao escaneo**. A ferramenta busca **planos**, **cilindros**, **esferas** e **conos** (as superficies exactas das que se fai unha peza mecanizada; cada fila mostra o raio ou medio ángulo que atopou), atopa **filetes** (bordos e esquinas redondeados: un pequeno cilindro ou esfera que corre tanxente a dúas ou máis caras, mostrado co seu raio e as caras que une), **filetes de borde** (un toro: o bordo redondeado onde unha cara plana encontra un cilindro ou cono, mostrado co seu raio e o raio do seu anel) e **filetes variables** (un bordo redondeado cuxo raio cambia ao longo del, mostrado co raio en cada extremo), axusta **un parche de forma libre** a unha peza suave e pouco curvada, e corta cada cara ata o contorno da parte do escaneo de onde proviña, de xeito que os buracos e as esquinas se conservan. Opcións: a **tolerancia** (canto, en mm, pode estar un punto do escaneo dun plano ou cilindro e aínda pertencer a el, e o obxectivo para un parche de forma libre), a **peza máis pequena** (unha proporción da área da superficie) e as **máis caras**. O mesmo escaneo e as mesmas opcións dan sempre as mesmas caras.

O resultado é unha táboa, unha fila por cara: o seu tipo, cantos triángulos proveñen dela, e o erro **medido desde o escaneo á cara** (rms, o maior, e a proporción de puntos dentro da tolerancia). Os puntos medidos son os vértices do escaneo e o centro de cada triángulo. O erro non se mide no sentido contrario (cara ao escaneo), así que unha cara que vai máis aló do escaneo non se vería. A nota baixo a táboa tamén di canta área era demasiado pequena para axustar. Na vista, os puntos do escaneo colóreanse segundo o seu **mapa de desviación**: azul na superficie, verde a medio camiño da tolerancia, vermello na tolerancia ou máis (desmarque **Mostrar o mapa de desviación** para ocultalo). As pezas que se dobran sobre si mesmas (un tubo pechado axustado con parches de forma libre, por exemplo) listanse como non axustadas, nunca forzadas a unha soa superficie.

**Coser as superficies nun sólido** cose nun só sólido pechado cada superficie mostrada que non estea nun sólido. As caras de escaneo só se encontran dentro do propio erro do escaneo, así que proba a menor distancia de unión que pecha (nunca máis que a **distancia de costura** que vostede estableza) e rexeita con palabras cando as caras non pechan. Nunca tapa un oco. Unha caixa con bordos redondeados cóseuse cando os seus filetes se atoparon como caras propias; a distancia de unión que pechou apárece no resultado. O sólido funciona entón con Unir, Restar, Intersectar e **Engadir ao modelo**.

O que non fai: un **filete de borde** (un toro) búscase só ao redor do eixe dun cilindro ou cono xa atopado, e un **filete variable** só ao longo dun bordo bastante recto (as súas seccións córtanse cadradas a unha dirección); noutro lugar saen como parches de forma libre cando son suficientemente suaves, e quedan fóra no resto; as esferas, conos e filetes atópanse por mostraxe aleatoria, así que un moi pequeno (uns poucos triángulos) pode perderse; o mapa de desviación mostra a distancia do escaneo ás caras, non ao revés; os escaneos moi grandes (máis de 300.000 triángulos) son rexeitados aquí. As caras dun cilindro de volta completa córtanse ao redor dos buracos, co cosido colocado onde non hai ningún. Comprobe cada cara contra o escaneo antes de confiar nela.

## Aínda non construído

Redondear bordos que se atopan nunha esquina de caras curvas ou con raios diferentes (unha mestura de vértice), un filete entre caras que non se tocan, un filete interior que remata nunha cara inclinada ou curva, e booleanas e filetes calculados sobre as superficies sen triángulos (aquí o motor de sólidos traballa sobre triángulos dentro da tolerancia, e logo cada punto se devolve ás superficies exactas).
