---
title: Cotar e redimensionar o que debuxou
summary: Coloque cotas entre esquinas, en arcos e círculos, ou entre dúas aresas; escriba unha lonxitude nova para redimensionar o modelo. Volva escribir a lonxitude dunha aresta ou o ancho, o fondo e a altura dun grupo en Información da entidade.
keywords: cota, cotas, redimensionar, cambiar tamaño, editar tamaño, lonxitude, ancho, fondo, altura, estirar, cota motora, anotar, medir, a posteriori, raio, diámetro, ángulo, angular, arco, círculo, R, Ø
from: a1f815ec
---

Os tamaños en ModelCraft non están fixos unha vez que algo está debuxado. Unha cota amosa unha lonxitude no modelo, e escribir unha lonxitude nova nela redimensiona o modelo para que coincida. Tamén pode volver escribir a lonxitude dunha aresta, ou o ancho, o fondo e a altura dun grupo, en {{ui:Información da entidade}}.

## Colocar unha cota

1. Prema {{key:D}}, ou prema {{ui:Cota}} na barra de ferramentas.
2. Prema unha esquina desde onde medir. Encaixa nas esquinas, nos puntos medios e nas aresas, como ao debuxar.
3. Prema a segunda esquina.

   Ou prema unha vez sobre unha **aresta** (a indicación di «Na aresta») para cotar esa aresta completa cun só clic.
4. Mova o punteiro ata onde debe ir a liña de cota, e prema. Tamén pode escribir o desprazamento, como `0.5m`, e premer {{key:Enter}}.

   A liña de cota queda nivelada para unha aresta nivelada, salvo que se mire desde o lado. Para unha aresta vertical, queda no plano vertical que mellor lle mira.

A barra de estado di «Cota 4 m.». As cotas amosan a súa lonxitude na unidade do modelo e actualízanse ao cambiar a unidade no selector.

## Raio, diámetro e ángulo

A mesma ferramenta {{ui:Cota}} cota as cousas redondas e os ángulos:

- **Un arco:** prema o arco. A indicación di {{ui:Raio}}. Mova o punteiro ata onde debe ir o texto e prema: a cota le **R 1.5 m**.
- **Un círculo:** prema o círculo. Obtén un **diámetro** (**Ø 3 m**) cunha liña que atravesa o círculo polo seu centro. Os polígonos funcionan igual, cos seus cantos sobre o círculo.
- **O ángulo entre dúas aresas:** prema unha aresta e logo unha segunda aresta que se encontre con ela nunha esquina (cando está sobre ela, a indicación di {{ui:Ángulo entre as aresas}}). Despois mova ata dentro do ángulo que quere e prema. Dentro da esquina obtén o ángulo entre as aresas; movendo a un lado obtén o ángulo contiguo (por exemplo, 150° en lugar de 30°). A distancia desde a esquina onde preme fixa onde vai o arco; ou escriba esa distancia.

Para cambiar un raio a diámetro ou de volta, seleccione a cota e escolla en {{ui:Mostrar como}} en {{ui:Información da entidade}}.

**Redimensionar con eles:** escriba un raio ou diámetro novo xusto despois de colocar un, ou seleccióneo despois e escriba. O arco ou círculo conserva o seu centro e cambia de tamaño; unha cara que limita (un disco, o extremo dunha ranura) cambia con el. Dúas cousas só miden:

- **Unha cota de ángulo** nunca cambia o modelo. Para cambiar un ángulo, xire as aresas con {{ui:Xirar}}.
- **O círculo no extremo dun cilindro** (un círculo que estirou con {{ui:Empurrar/tirar}}) non se pode redimensionar desde a súa cota, porque os seus lados tamén terían que cambiar. Escale o cilindro no seu lugar, en torno ao seu eixe.

## Redimensionar o modelo cunha cota

Xusto despois de colocar unha cota, escriba unha lonxitude nova e prema {{key:Enter}}: `6m`, `12'`, `3500` nun modelo en milímetros. O modelo cambia a ese tamaño.

Máis tarde, en calquera momento:

1. Con {{ui:Seleccionar}}, prema o texto ou a liña da cota. {{ui:Información da entidade}} di **Cota** e amosa a súa {{ui:Lonxitude}}.
2. Escriba a lonxitude nova e prema {{key:Enter}}. Pode escribir directamente na caixa de valor, ou na caixa {{ui:Lonxitude}} de {{ui:Información da entidade}}.

### Que se move

Muévese a segunda esquina que preme, e tamén todo o que hai máis alá:

- **As dúas esquinas nunha mesma peza** (o ancho dunha caixa, a altura dun muro): o lado da esquina móbil desliza para fóra ou para dentro, e as caras unidas a el estíranse. Unha caixa segue sendo un sólido pechado, e calquera cousa situada totalmente nese lado, como un compoñente de xanela, móvese con el.
- **As esquinas en dúas pezas separadas** (a fenda entre dúas caixas): a peza da esquina móbil muévese enteira, e a fenda cambia.
- **A esquina móbil dentro dun grupo ou compoñente** no que non está a outra esquina: móvese todo o grupo.
- **As dúas esquinas dentro do mesmo grupo ou compoñente**: estírase por dentro. Un compoñente cambia en todos os lugares onde está colocado, como sempre que se edita.

Para cambiar que extremo se move, seleccione a cota e escolla en {{ui:Moves}} en {{ui:Información da entidade}}:

| Opción | Que pasa |
|---|---|
| {{ui:Segundo extremo}} (o predeterminado) | Móvese o extremo que preme en segundo lugar |
| {{ui:Primeiro extremo}} | Móvese o extremo que preme en primeiro lugar |
| {{ui:Os dous extremos (centrado)}} | Cada extremo move a metade do cambio, así que o centro queda no seu sitio |

### Cando se rexeita un redimensionado

ModelCraft non cambia nada e di o motivo na barra de estado:

- «unha cara se dobraría fóra do seu plano»: a cota vai en diagonal pola forma. Cote ao longo dunha aresta, ou ao longo do vermello, do verde ou do azul.
- «unha cara se reduciría a nada ou se volvería do revés»: a lonxitude nova é demasiado curta para a forma.
- «o extremo que se move non está nunha esquina do modelo»: ese extremo se colocou en espazo baleiro ou no punto medio dunha aresta. Escolla o outro extremo en {{ui:Moves}}, ou coloque a cota sobre dúas esquinas.
- «a lonxitude debe ser maior que cero».

Cada redimensionado é un paso: {{key:Mod+Z}} o desfai.

## Volver escribir un tamaño en Información da entidade

Non sempre precisa unha cota:

- **Unha aresta:** selecciónea. A súa {{ui:Lonxitude}} en {{ui:Información da entidade}} é unha caixa onde pode escribir. Escribir unha lonxitude na caixa de valor tamén funciona. Móvese o extremo máis adiante en vermello, despois verde, despois azul, e estírase o que está unido a el. Por exemplo, volver escribir a aresta inferior dianteira dunha caixa fai a caixa máis ancha cara á dereita.
- **Un grupo ou compoñente:** selecciónео. {{ui:Ancho (vermello)}}, {{ui:Fondo (verde)}} e {{ui:Altura (azul)}} son caixas. Móvese o seu lado máis afastado (dereita, atrás, arriba). Estes son os eixos propios do grupo, antes de calquera xiro que lle desse.

Prema {{key:Enter}} para aplicar, ou {{key:Esc}} para repoñer o valor antigo.

## As cotas seguen o modelo

Unha cota está unida ás dúas esquinas onde se colocou (un ángulo: á súa esquina e aos extremos afastados das súas dúas aresas; un raio ou diámetro: ao seu arco ou círculo). Mova, empurre/tire ou redimensione a xeometría, e a cota segue e amosa a nova lonxitude. Séguese unida cando converte a xeometría nun grupo ou compoñente.

Se un extremo se colocou nun sitio que non é unha esquina (sobre unha cara, ou en espazo baleiro), ou se a súa esquina se borra, ese extremo queda onde estaba. A cota segue medindo, pero só pode redimensionarse desde o seu outro extremo.

## Eliminar cotas

- Unha cota: selecciónea e prema {{key:Delete}}, ou fai clic sobre ela coa {{ui:Goma}}.
- Todas as cotas: sen nada seleccionado, prema {{ui:Eliminar todas as cotas}} en {{ui:Información da entidade}}.

As cotas gárdanse no ficheiro `.modelcraft`. Non se exportan a outros formatos, que só levan o modelo 3D. Un ficheiro con cotas segue abríndose nunha versión anterior de ModelCraft, sen elas.
