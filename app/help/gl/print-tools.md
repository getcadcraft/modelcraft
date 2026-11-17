---
title: Soportes, grosor do muro, ocado e reparación
summary: Vexa onde unha impresión necesita soportes e en que cantidade aproximada, atope muros demasiado finos para imprimir, oque unha peza ao grosor de muro con buratos de drenaxe e repare unha malla con cada corrección listada.
keywords: impresión 3D, soportes, vista previa de soportes, voo, soportes en árbore, soportes en columna, grosor do muro, muros finos, demasiado fino, boquilla, ocar, ocado, cuncha, burato de drenaxe, resina, reparar, arranxar malla, non variedade, caras invertidas, buratos, cunchas pequenas, autointersección, solapamento, unir
from: 286bde26
---

Catro ferramentas para preparar un modelo para unha impresora 3D. Abra {{ui:Exportar}} › {{ui:Comprobar a impresión 3D (STL ou 3MF)…}}; a liña **Ferramentas de impresión** do diálogo ten {{ui:Vista previa de soportes}}, {{ui:Grosor do muro}}, {{ui:Ocar}} e {{ui:Reparar}}. Cada unha ábrese como unha tarxeta sobre a vista; {{ui:Pechar}} (a cruz) a retira xunto coas súas marcas. Só se mostra unha tarxeta á vez.

Cada ferramenta traballa sobre o que se imprime: a selección, ou todo o visible cando non hai nada seleccionado. {{ui:Ocar}} e {{ui:Reparar}} precisan un grupo, compoñente ou malla seleccionado, porque o cambian.

## Vista previa de soportes

As caras que se inclinan máis que o **ángulo de voo** desde a vertical móstranse sombreadas en vermello, e debúxanse soportes simples desde elas (en laranxa) ata a plataforma, ou ata a parte do modelo que queda debaixo.

- **Ángulo de voo**: 45° é o que a maioría das impresoras consegue sen soporte. Auméntelo para unha impresora que fai bos puentes.
- **Columnas**: unha columna recta cada 3 mm baixo cada voo. A estimación as conta como un patrón de soporte do 15 %.
- **Árbore**: os puntos próximos únense nun tronco baixo o seu punto medio; ningunha rama se inclina máis de 45°. As árbores adoitan levar menos material e tocan a plataforma en menos puntos.

A tarxeta indica canta superficie precisa soporte, cantos puntos de soporte hai e aproximadamente canto material levan. Os soportes que se apoian no modelo (non na plataforma) contan: deixan marcas alí. Cando escolla unha plataforma de impresora en {{ui:Configuración}}, debúxase baixo o modelo.

:::note
Isto é unha vista previa, non un fatiador: o seu fatiador decide os soportes reais. Nun voo moi grande os puntos de soporte espállanse máis para que a vista previa siga rápida; a tarxeta dío.
:::

## Grosor do muro

Cada cara se mide en liña recta a través do sólido ata o outro lado. Os muros por debaixo do **grosor mínimo de muro permitido** están en vermello, e os que están por debaixo de un e medio veces ese valor, en laranxa: imprímense, pero poden saír débiles.

As zonas finas listanse, a máis fina primeiro, con canto de finas e canto de grandes é cada unha. {{ui:Mostrar}} xira a cámara cara a ela.

Unha impresora non pode facer un muro máis fino que uns dous anchos da súa boquilla: 0,8 mm para a boquilla común de 0,4 mm (o inicio). As impresoras de resina consiguen menos; consulte a guía da súa impresora.

Nun modelo moi grande só algunhas caras lanzan un raio, e as outras toman o grosor dos seus veciños; a tarxeta indica cantas se mediron.

## Ocado

Ocar mantén o exterior como está e retira o interior, deixando os muros tan grosos como pida. As impresións en resina usan menos resina e tiran menos da placa de construción; as impresións en filamento usan menos plástico que o recheo.

1. Seleccione o grupo, compoñente ou malla, e logo abra {{ui:Ocar}}.
2. Estableza o **muro** (2 mm para comezar) e o ancho dos **buratos de drenaxe**.
3. Para unha impresión en resina, prema {{ui:Colocar un orificio de drenaxe}}, e logo faga clic no exterior do modelo onde vai: abaixo, perto da placa de construción, para que a resina líquida saia. Coloque os que necesite; cada un se mostra como un círculo azul e aparece listado con {{ui:Retirar}}.
4. {{ui:Vista previa}} indica canto retira o ocado.
5. {{ui:Ocar}} fai o cambio: un paso que {{key:Mod+Z}} desfai.

O resultado é un sólido pechado que a comprobación de impresión 3D acepta: ModelCraft o comproba primeiro e non cambia nada se non pasaría. Onde o modelo é máis fino que dous muros, queda macizo. O resultado é un grupo cuxas caras planas son caras simples, así que pode seguir modelándoo con {{ui:Empurrar/tirar}}; unha peza curva ocada na cuadrícula fina adoita ter demasiadas caras para iso e convértese en malla, e a barra de estado indica cal.

:::tip
Na maioría das formas, o interior é o exterior desprazado cara a dentro exactamente o grosor do muro. Onde as esquinas ou as pezas finas fan iso imposible, ModelCraft segue o exterior á distancia do muro nunha cuadrícula fina; a tarxeta indica entón a precisión (ata unha fracción de milímetro).
:::

## Reparar

{{ui:Reparar}} examina a peza seleccionada como a examinaría o fatiador dunha impresora, arranxa o que pode arranxar con seguridade e lista cada corrección:

| Corrixe | Que significa |
|---|---|
| Triángulos sen área | eliminados |
| Un triángulo debuxado dúas veces | consérvase unha copia; unha cara debuxada costas con ela mesma (sen grosor) elimínase |
| Pezas soltas de menos de 0,5 mm | eliminadas |
| Triángulos orientados ao revés | xíranse para coincidir cos seus veciños |
| Buratos, planos ou non | pechados cun abano de triángulos novos desde o centro de cada burato |
| Unha peza do revés | xírase cara a fóra (un oco dentro doutra peza déixase como está: está pensado para mirar cara a dentro) |

{{ui:Arranxar as seguras}} fai todas en un paso que {{key:Mod+Z}} desfai, e a barra de estado lista cada corrección. A peza corrixida convértese nun grupo cuxas caras planas son caras simples. Se aínda non pecha (queda algo baixo **Déixoo para vostede**), ou tería demasiadas caras para un grupo, convértese en malla: as súas caras seguen sendo triángulos, e as caras planas seguen parecendo planas. A barra de estado indica cal. {{ui:Unir pezas solapadas}} funciona do mesmo xeito.

O que non se pode arranxar con seguridade lístase baixo **Déixoo para vostede** e márcase en morado na vista, con {{ui:Mostrar}}:

- **Bordos onde se atopan tres ou máis caras**: decida a que cara pertence e borre as outras.
- **Unha peza que atravesa a si mesma**: mova ou debuxe de novo esa peza. Vexa [Intersectar caras](topic:intersect).
- **Buratos demasiado grandes ou enredados para pechar**: debuxe caras atravesándoos.
- **Pezas separadas que se solapan**: os fatiadores as fusionan igualmente. {{ui:Unir pezas solapadas}} faino nun corpo pechado (reconstrúe as caras onde se atopan, por iso é un botón aparte e nunca se fai por vostede).

Para os grupos de empurrar/tirar tamén pode arranxar cada problema por separado en {{ui:Información da entidade}} › {{ui:Mostrar problemas}} / {{ui:Corrixir}}, que conserva as caras que debuxou. Vexa [Ferramentas de sólidos](topic:solids).

Relacionado: [Preparar un modelo para a impresión 3D](topic:print-3d) · [O estilo Principiante](topic:beginner) · [Aínda sen construír](topic:not-built-yet#3d-printing)
