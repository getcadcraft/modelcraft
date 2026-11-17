---
title: Modelar sobre un plano de emprazamento desde DWG ou DXF
summary: Traia un plano de emprazamento ou de planta en CAD como liñas sobre o chan, responda á pregunta das unidades e tráceo en caras e masas.
keywords: plano de emprazamento, dwg, dxf, cad, importar, esbozo, foto de esbozo, esbozo a man, foto, papel, cores de bolígrafo, bloques dinámicos, estados de visibilidade, texto, trama, spline, elipse, cara 3D, trazar, planta, lote, lindeiro, unidades, base, contexto
from: 3415dc96
---

ModelCraft pode traer as liñas dun debuxo CAD 2D, dun plano de emprazamento ou dunha planta, e colocalas sobre o chan para poder modelar por riba delas.

## Importar o debuxo

1. Faga clic en {{ui:Importar}} no grupo {{ui:Ficheiro}} (ou solte o ficheiro na vista 3D).
2. Escolla un ficheiro `.dwg` ou `.dxf`.

   Un DWG grande tarda un momento: a barra de estado di "Lendo plan.dwg…" ata que entra.

3. Se o debuxo non indica cales son as súas unidades, un diálogo titulado "Unidades do debuxo" pregunta: "Cal é unha unidade do debuxo?" Escolla {{ui:Pulgadas}}, {{ui:Pés}}, {{ui:Milímetros}} ou {{ui:Metros}}. A maioría dos planos de emprazamento en EE. UU. debúxanse en pés, os planos arquitectónicos en pulgadas, e os planos métricos en milímetros.

   O debuxo chega como un grupo de arestas sobre o chan, seleccionado, e a vista achégase a el. A barra de estado indica cantas arestas entraron, por exemplo "Importado site.dwg: 1697 arestas sobre o chan, nun grupo. Desagrúpeo para debuxar directamente sobre el."

## Que entra

- Liñas, polilíneas (cos seus arcos), círculos e arcos, e bloques con todo o que contan, só do **espazo do modelo**. As curvas convértense en pezas rectas curtas.
- Liñas, polilíneas, arcos, círculos, elipses e splines caen planos sobre o chan, como arestas.
- As **tramas** convértense en caras sobre o chan, cos seus illados como buratos, para poder empurrar/tirar unha área tramada de inmediato.
- As **caras 3D** e os recheos sólidos convértense en caras; as caras 3D conservan as súas alturas.
- O **texto** (texto dunha liña, texto de varias liñas e valores de atributo) debúxase como arestas nunha letra simple de trazo único, coa altura, o ángulo e a aliñación propios do texto. A súa tipografía non é a do debuxo, así que as palabras poden quedar un pouco máis longas ou máis curtas. Os caracteres para os que a letra non ten forma debúxanse como pequenas caixas e cóntanse.
- As **cotas** debúxanse como as mostra o debuxo (as súas liñas, puntas de frecha e texto, como arestas e caras).
- Os **bloques dinámicos** entran como os mostra o debuxo: cada bloque colocado no estado de visibilidade co que se gardou, e só as liñas dese estado. A barra de estado os lista cos estados mostrados e cos outros estados que ten cada un, por exemplo "Receptáculo mostrado como Duplex ×38, GFI ×7 (estados: Duplex, GFI)". ModelCraft non cambia de estado.
- Os **sólidos 3D, rexións e corpos** (os datos ACIS do debuxo) entran como grupos propios: un sólido pechado como sólido, unha rexión ou un corpo aberto como caras. As caras planas entran enteiras; as curvas (cilindros, conos, esferas, toros, superficies spline sinxelas) como pequenos triángulos con bordos suaves entre eles, así que só se ven as arestas propias do sólido. Unha cara sobre outro tipo de superficie déixase fóra e lístase: "Aínda non debuxado (sólidos 3D): …".
- Non se importan: puntos, táboas, multiliñas, imaxes e outros tipos de obxecto. A barra de estado os lista por tipo, como "Non importado: 12 POINT." Calquera cousa dunha folla de deseño (espazo de papel) tamén se deixa fóra, sen listarse.
- As capas non se conservan: todas as liñas entran igual.

Se o debuxo está lonxe da súa orixe (coordenadas de plano estatal, por exemplo), igualmente se importa, pero pode caer lonxe da orixe de ModelCraft. Os debuxos que chegan a máis de 10.000 km da súa orixe recházanse: achegue o debuxo a 0,0 no programa CAD antes.

## Trazar en caras

As liñas importadas raramente se pechan ordenadamente en caras por si soas. Dúas formas de traballar:

**Manter o plano como base (recomendado)**

1. Deixe o plano como grupo propio.
2. Debuxe o seu edificio por riba con {{ui:Rectángulo}} e {{ui:Liña}}, axustando ás esquinas do plano ("Extremo") e ás arestas ("Sobre aresta").
3. Empurre as caras cara arriba. O plano queda intacto por debaixo, e pode borrar o grupo enteiro despois dun só clic.

O axuste funciona entre grupos: pode axustar ás esquinas do plano sen abrilo.

**Debuxar sobre as liñas propias do plano**

1. Seleccione o grupo do plano e faga clic en {{ui:Desagrupar}}. As súas liñas convértense en arestas soltas.
2. Onde un contorno pechado debería ser unha cara, debuxe unha liña sobre calquera das súas arestas con {{ui:Liña}}, de esquina a esquina. Cando o contorno está pechado e é plano, a cara adoita encherse. Se non, busque un oco ou un solape no contorno e debuxe sobre el.
3. Empurre/tire a cara.

Isto funciona mellor cun plano limpo. Nun levantamento cargado, trazar por riba é máis rápido.

## Problemas

- "Este é un DXF binario. Gárdeo como DXF ASCII e probe de novo." Garde o DXF de novo desde o programa CAD en ASCII (texto).
- "…non ten liñas, arcos nin círculos no espazo do modelo para importar." O debuxo probablemente está todo en follas de deseño, ou só con texto e tramas.
- "Non se puido ler este debuxo (…). Pode estar danado, ou gardado nunha versión de DWG que o lector non admite…" Os parénteses indican o motivo, por exemplo "A versión DWG AC1009 non é compatible". Gárdeo como DXF, ou como DWG desde AutoCAD 2000 ata 2018, desde o programa CAD.
- O plano ten o tamaño incorrecto: escolleu mal a unidade. Desfaga ({{key:Mod+Z}}) e importe de novo, ou [escale](topic:rotate-scale) o grupo polo factor correcto (12 entre pés e pulgadas, 25,4 entre pulgadas e milímetros).

Para converter curvas de nivel en terreo que poida esculpir, ver [Terreo](topic:terrain).

## Desde unha foto dun esbozo a man

**Ficheiro › Importar unha foto de esbozo…** toma unha foto dun esbozo en papel (JPEG, PNG ou TIFF, directamente desde un teléfono vale) e crea o mesmo tipo de arestas sobre o chan. Indique que papel é (ou deixe que o localice, tomado como A4) e a escala do esbozo, 1 : 100 por exemplo. Búscase o bordo do papel e endereítase a foto, a tinta trázase en liñas e arcos, e cada cor de bolígrafo (negro, vermello, azul, verde) convértese nun grupo propio cunha etiqueta (**Esbozo negro**, **Esbozo vermello**, …), todo dentro dun grupo co nome da foto. É un só paso de desfacer, e todo ocorre neste computador: non se envía nada a ningures.

Cando non se pode atopar ningún bordo de papel, toma-se a foto enteira como folla e a barra de estado dino: meza algo que coñeza e escale o grupo se está mal. Trace as liñas en caras como se indica enriba.
