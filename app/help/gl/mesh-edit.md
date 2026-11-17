---
title: Editar unha malla no espazo de traballo Malla
summary: Seleccione os vértices, bordos e caras dunha malla, móvaos, e extrúa, insira, biselle, corte, funda, encha e una, con calquera dos dous estilos de teclas.
keywords: malla, modo de edición, espazo de traballo malla, vértice, vértices, bordo, bordos, cara, caras, extruír, inserir, biselar, cortar bucle, coitela, bisecar, espiral, fundir, disolver, encher, encher con cuadrícula, ponte, subdividir, deslizar, edición proporcional, atenuación, espazo de traballo
from: 92a372dd
---

O **espazo de traballo Malla** edita unha [malla](topic:meshes) punto a punto: os seus vértices, bordos e caras. A xeometría de empurrar e tirar permanece no espazo de traballo **Modelo**.

## Abrila

- Escolla {{ui:Malla}} na lista {{ui:Espazo de traballo}}, á esquerda da barra de ferramentas. Ábrese a malla seleccionada para editala; un grupo ou compoñente seleccionado convértese primeiro nunha malla (un paso de desfacer).
- Ou faga dobre clic nunha malla, ou, coas teclas de modelador, selecciónea e prema {{key:Tab}}.
- Sen nada seleccionado, o panel ofrece mallas para engadir: plano, cuadrícula, cubo, círculo, cilindro, cono, esfera, esfera icosaédrica e toro. Unha nova vai onde mira a vista e ábrese para editala.

{{ui:Volver a Modelo}} (ou a lista; {{key:Tab}} coas teclas de modelador; {{key:Esc}} sen nada seleccionado coas teclas de empurrar e tirar) volve a Modelo con a malla seleccionada. Mentres o espazo de traballo Malla está aberto, o resto do modelo esvaécese e as ferramentas de debuxo de Modelo quítanse.

## Seleccionar

| Faga | Para |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Seleccionar vértices, bordos ou caras |
| Clic | Seleccionar un; {{key:Shift}}+clic engade ou quita |
| Arrastrar unha caixa | Seleccionar o que está dentro e se ve; {{key:Shift}} engade, {{key:Ctrl}} quita |
| {{key:Alt}}+clic nun bordo, ou facer dobre clic nel | O seu bucle de bordos (un bucle de caras no modo cara; todo o bordo nun bordo aberto) |
| {{key:Ctrl}}+{{key:Alt}}+clic nun bordo | O seu anel de bordos |
| Triple clic | Todo o unido a el |

O grupo {{ui:Seleccionar}} tamén ten {{ui:Todo}}, {{ui:Ligado}}, {{ui:Bucle}}, {{ui:Anel}}, {{ui:Máis}} e {{ui:Menos}}.

## Mover, xirar, escalar

{{ui:Mover}}, {{ui:Xirar}} e {{ui:Escalar}} parten do punteiro: mova, logo prema ou pulse {{key:Enter}} para deixar a selección, ou {{key:Esc}} para cancelar. {{key:X}}, {{key:Y}} ou {{key:Z}} (ou as teclas de frecha) bloquean un eixo. Escriba unha distancia, un ángulo ou un factor para un valor exacto: [cálculos](topic:value-box#calculations) tamén funcionan.

**Edición proporcional** ({{ui:Proporcional}}, ou o panel): os vértices preto da selección seguen un movemento, cada vez menos canto máis lonxe están, ata o alcance que fixe, coa atenuación que escolla. Active {{ui:Só ao longo da malla}} para medir polos bordos en vez de en liña recta.

{{ui:Deslizar}} move un bucle de bordos seleccionado ao longo dos bordos ao seu lado.

## Cambiar a forma

| Ferramenta | Fai |
|---|---|
| {{ui:Extruír}} | Tira das caras seleccionadas cara fóra ao longo da súa normal, con novas caras laterais (ou crea caras a partir dos bordos abertos). Escriba a distancia |
| {{ui:Inserir}} | Unha banda dentro do contorno das caras seleccionadas; prema {{key:I}} de novo para cada cara por separado |
| {{ui:Biselar}} | Corta os bordos seleccionados (ou, con {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, os vértices) cun ancho; a roda ou as teclas máis e menos engaden segmentos para un bordo redondeado |
| {{ui:Cortar bucle}} | Sinale un bordo: novos bucles atravesan o anel de caras de catro lados; a roda fixa cantos; prema para cortar |
| {{ui:Coitela}} | Prema puntos nos bordos ou nas esquinas; {{key:Enter}} corta en liña recta as caras entre eles, tal como as ve |
| {{ui:Bisecar}} | Debuxe unha liña na pantalla: as caras seleccionadas (ou todas) córtanse ao longo dela |
| {{ui:Espiral}} | Xira as caras seleccionadas ou os bordos abertos ao redor do eixe azul por pasos (a roda os fixa); unha volta completa pecha |
| {{ui:Subdividir}} | Corta os bordos seleccionados en dous; as caras enteiras fanse unha cuadrícula |
| {{ui:Fundir}} | Os vértices seleccionados convértense nun só, no seu centro |
| {{ui:Disolver}} | Quita a selección pero conserva a superficie: as caras únense |
| {{ui:Encher}} | Unha cara a través dun bordo aberto seleccionado (ou entre dous bordos abertos) |
| {{ui:Encher con cuadrícula}} | Enche un bordo aberto cun número par de bordos cunha cuadrícula de cuadriláteros |
| {{ui:Ponte}} | Une dous bucles de bordos abertos seleccionados con caras |
| {{ui:Pregar}} | Canto se manteñen afiados os bordos seleccionados cando a malla se suaviza cunha superficie de subdivisión: aléxese do centro, use a roda (pasos de 0,1) ou escriba un valor de 0 a 1. O panel mostra o pregado dos bordos seleccionados e tamén acepta un valor escrito. Os bordos pregados debúxanse en maxenta |
| {{ui:Inverter}}, {{ui:Suavizar}}, {{ui:Eliminar}} | Volcan as caras; suavizan os vértices cara aos seus veciños; eliminan segundo o modo de selección |

Cada unha é un paso de desfacer. As coordenadas de textura, as cores e os pesos pasan ás novas caras e aos novos vértices.

## Remallar

{{ui:Remallar}} fai de novo toda a malla como triángulos iguais dun só tamaño, pedido ao premelo (máis pequeno é máis fino e máis lento). Pecha buracos, une pezas que se solapan e iguala unha malla que o modelado estirou. Os bordos afiados quedan lixeiramente redondeados. As UV, a pintura e os pregados comezan de novo. Un paso de desfacer.

## Retopoloxía

Para construír unha malla nova e máis limpa sobre unha detallada (unha escultura, un escaneo), escolla a detallada en {{ui:Retopoloxía}} › **Construír sobre** no panel, logo:

- **Axustar os puntos movidos á superficie:** os puntos que move, e os bordos que extruíu, caen sobre a súa superficie.
- **Pór os puntos seleccionados sobre ela** move agora os puntos seleccionados sobre ela (un paso de desfacer).
- **Mostrar os bordos desta malla por diante** debuxa a malla que constrúe sobre a superficie, para que a poida ver.

## Axustar a última operación

Despois de {{ui:Inserir}}, {{ui:Biselar}}, {{ui:Cortar bucle}}, {{ui:Subdividir}}, {{ui:Suavizar}}, {{ui:Encher con cuadrícula}} ou {{ui:Espiral}}, o panel mostra os seus axustes (ancho, segmentos, perfil, cortes…). Cambie un e a operación refáiase desde o seu inicio, seguindo sendo un só paso de desfacer.

## Teclas

| | Teclas de empurrar e tirar | Teclas de modelador |
|---|---|---|
| Mover, xirar, escalar | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dúas veces desliza) |
| Extruír, inserir | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Eliminar | {{key:E}} ou {{key:Delete}} | {{key:X}} ou {{key:Delete}} |
| Pregar | {{key:Shift+C}} | {{key:Shift+E}} |
| Seleccionar todo, ningún, invertir | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Nos dous | {{key:Ctrl+B}} biselar, {{key:Ctrl+R}} cortar bucle, {{key:K}} coitela | o mesmo, e {{key:F}} encher, {{key:M}} fundir, {{key:Ctrl+X}} disolver, {{key:L}} / {{key:Ctrl+L}} ligado, {{key:Alt+N}} inverter, {{key:O}} proporcional, {{key:Shift+V}} deslizar vértice |

Vexa tamén [Mallas](topic:meshes), [Modificadores nunha malla](topic:modifiers) e [Aínda non implementado](topic:not-built-yet).
