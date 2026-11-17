---
title: Obxectos de curva
summary: Debuxe curvas Bézier, NURBS e de segmentos rectos, dálles grosor, anchura ou afinamento, encha as planas, poña texto como curva e convértaas en mallas.
keywords: curva, curvas, bezier, nurbs, spline, splines, trazado, tubo, tubería, cable, corda, bisel, extruir, afinar, inclinación, raio, encher, perfil, texto, letras, logotipo, curva a malla
from: 602bf077
---

Un **obxecto de curva** é unha curva que fai unha forma: un tubo ao longo dela (bisel), unha banda (extruír), un corno que se afina (afinamento), ou —cando é plana e pechada— unha placa cheas ou letras. A forma segue a curva: mova un punto e o tubo muévese con el. Cando a forma está ben, conviértaa nunha malla.

## Engadir unha curva

Escolla {{ui:Curva}} na lista de espazos de traballo e prema {{ui:Engadir}}:

| Tipo | Que é |
| --- | --- |
| Curva Bézier, círculo Bézier | Pasa polos seus puntos; cada punto ten dous manexadores que fixan a dirección da curva |
| Curva NURBS, círculo NURBS, Trazado | Suave, debuxada cara aos seus puntos (comeza e acaba nos seus puntos extremos); cada punto ten un peso |
| Texto | O seu texto como contornos de letras planos e cheos |

Unha curva nova recibe un tubo fino para que se vexa e se poida elixir; estableza o seu bisel en 0 para unha curva desnuda.

Tamén pode partir dun elemento debuxado: elixa un arco, un círculo, un polígono ou unha curva debuxada no espazo de traballo Modelo e prema {{ui:Crear un obxecto de curva}} en Información da entidade. As liñas debuxadas consérvanse.

## Editar os puntos

Faga dobre clic nun obxecto de curva (ou elíxao e escolla {{ui:Curva}}) para editalo.

- Prema un punto ou manexador (Shift engade ou quita) e arrástreo para movelo. Arrastre sobre un espazo baleiro para seleccionar cunha caixa.
- {{ui:Estender}} ({{key:E}}, ou {{key:Ctrl}}+clic) engade un punto despois do extremo seleccionado, no punteiro.
- {{ui:Subdividir}} ({{key:W}}) pon un punto entre cada par de veciños seleccionados; unha Bézier conserva a súa forma.
- {{ui:Mover}}, {{ui:Xirar}}, {{ui:Escalar}} move os puntos seleccionados co punteiro (teclas de modelador {{key:G}} {{key:R}} {{key:S}}, teclas de empurrar/tirar {{key:M}} {{key:Q}} {{key:S}}); prema para conservar, {{key:Esc}} para cancelar.
- {{ui:Pechar}} ({{key:C}}) pecha unha spline aberta ou abre unha pechada; {{ui:Inverter}} ({{key:Shift+R}}) a percorre no outro sentido.
- Manexadores Bézier: {{ui:Suave}} ({{key:V}}) colócaos para unha curva suave, {{ui:Esquina}} ({{key:Shift+V}}) apúntaos cara aos veciños, {{ui:Libre}} ({{key:Alt+V}}) déixaos onde os puxo. Arrastrar un manexador convértello en libre.
- {{ui:Bézier}}, {{ui:NURBS}} e {{ui:Poli}} cambian o tipo das splines seleccionadas, conservando os puntos.

Cada cambio é un paso de desfacer.

## Forma

Os axustes están no panel (e en Información da entidade no espazo de traballo Modelo):

- **Forma:** as curvas 3D van en calquera dirección; unha curva plana queda no seu propio plano e pode encherse.
- **Encher splines pechadas** (planas): os contornos convértense nunha placa; un contorno dentro doutro é un burato, así que as letras conservan os seus buratos.
- **Extruír:** a metade da anchura da banda (curvas abertas ou 3D), ou a metade do grosor da placa (cheas).
- **Profundidade do bisel** e **redondez:** un tubo redondo ao longo da curva (con extruír: unha banda redondeada); nunha forma cheas, un bordo redondeado.
- **Pechar os extremos:** tapas nun tubo aberto.
- **Afinar ao longo:** escala por igual ao longo de cada spline, por exemplo `1, 0.2` para un corno, `0, 1, 0` para un fuso.
- **Suavidade** e, para NURBS, **orde**: canto de fino se debuxa, e canto de suave (2 rectas … 6 o máis suave).
- Con puntos seleccionados: **raio** (o grosor do tubo nese punto, por o bisel), **inclinación** (xira a banda en torno á curva) e, para NURBS, **peso**.

Os modificadores funcionan enriba dun obxecto de curva como sobre unha malla: unha Matriz ao longo, un Espello, unha superficie de subdivisión. Ver [Modificadores sobre unha malla](topic:modifiers).

## Convertela nunha malla

{{ui:A malla}} (no espazo de traballo Curva ou en Información da entidade, {{ui:Curva a malla}}) converte o obxecto de curva na malla que amosa agora; os seus modificadores quedan por riba. Despois edítea no espazo de traballo Malla. Desfacer volve convertela.

Ver tamén [Mallas](topic:meshes) e [Editar unha malla](topic:mesh-edit).
