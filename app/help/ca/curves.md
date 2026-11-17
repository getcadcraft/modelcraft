---
title: Objectes de corba
summary: Dibuixeu corbes Bézier, NURBS i de segments rectes, doneu-los gruix, amplada o afinament, ompliu les planes, poseu text com a corba i convertiu-les en malles.
keywords: corba, corbes, bezier, nurbs, spline, splines, camí, tub, canonada, cable, corda, bisell, extrusió, afinament, inclinació, radi, farciment, perfil, text, lletres, logotip, corba a malla
from: 602bf077
---

Un **objecte de corba** és una corba que forma una figura: un tub al llarg seu (bisell), una banda (extrusió), una trompa que s'afina (afinament) o, quan és plana i tancada, una placa omplerta o unes lletres. La figura segueix la corba: moveu un punt i el tub es mou amb ell. Quan la figura és correcta, convertiu-la en malla.

## Afegir una corba

Trieu {{ui:Corba}} a la llista d'espais de treball i premeu {{ui:Afegeix}}:

| Tipus | Què és |
| --- | --- |
| Corba Bézier, cercle Bézier | Passa pels seus punts; cada punt té dues manetes que fixen la direcció de la corba |
| Corba NURBS, cercle NURBS, Camí | Suau, dibuixada cap als seus punts (comença i acaba als punts extrems); cada punt té un pes |
| Text | El vostre text com a contorns de lletra plans i omplerts |

Una corba nova té un tub fi perquè es pugui veure i seleccionar; poseu el seu gruix de bisell a 0 per a una corba nua.

També podeu partir d'alguna cosa ja dibuixada: seleccioneu un arc, un cercle, un polígon o una corba dibuixada a l'espai de treball Model i premeu {{ui:Fes un objecte de corba}} a Informació de l'entitat. Les línies dibuixades es mantenen.

## Editar els punts

Feu doble clic a un objecte de corba (o seleccioneu-lo i trieu {{ui:Corba}}) per editar-lo.

- Feu clic a un punt o a una maneta (Shift afegeix o treu); arrossegueu-lo per moure'l. Arrossegueu sobre un espai buit per seleccionar amb una caixa.
- {{ui:Estén}} ({{key:E}}, o {{key:Ctrl}} + clic) afegeix un punt després de l'extrem seleccionat, al punter.
- {{ui:Subdivideix}} ({{key:W}}) posa un punt entre cada parell de veïns seleccionats; una Bézier conserva la seva forma.
- {{ui:Mou}}, {{ui:Gira}}, {{ui:Escala}} mouen els punts seleccionats amb el punter (tecles d'editor {{key:G}} {{key:R}} {{key:S}}, tecles de prem/estira {{key:M}} {{key:Q}} {{key:S}}); feu clic per conservar, {{key:Esc}} per cancel·lar.
- {{ui:Tanca}} ({{key:C}}) tanca una spline oberta o obre una de tancada; {{ui:Inverteix}} ({{key:Shift+R}}) la recorre en sentit contrari.
- Manetes Bézier: {{ui:Suavitza}} ({{key:V}}) les posa per a una corba suau, {{ui:Cantonada}} ({{key:Shift+V}}) les orienta cap als veïns, {{ui:Lliure}} ({{key:Alt+V}}) les deixa on les poseu. Arrossegar una maneta la fa lliure.
- {{ui:Bézier}}, {{ui:NURBS}} i {{ui:Poly}} canvien el tipus de les splines seleccionades, conservant els punts.

Cada canvi és un pas del desfer.

## Forma

Els ajustos són al tauler (i a Informació de l'entitat a l'espai de treball Model):

- **Forma:** les corbes 3D van a qualsevol lloc; una corba plana es queda dins del seu pla i es pot omplir.
- **Omple les splines tancades** (planes): els contorns es converteixen en una placa; un contorn dins d'un altre és un forat, de manera que les lletres conserven els seus forats.
- **Extrusió:** la meitat de l'amplada de la banda (corbes obertes o 3D), o la meitat del gruix de la placa (omplerta).
- **Profunditat del bisell** i **arrodoniment:** un tub rodó al llarg de la corba (amb extrusió: una banda arrodonida); en una figura omplerta, una aresta arrodonida.
- **Tanca els extrems:** caps en un tub obert.
- **Afinament al llarg:** escala uniformement al llarg de cada spline, per exemple `1, 0.2` per a una trompa, `0, 1, 0` per a un fus.
- **Suavitat** i, per a NURBS, **ordre**: com de fi es dibuixa, i com de suau (de 2 rectes … 6 la més suau).
- Amb punts seleccionats: **radi** (el gruix del tub en aquell punt, per el bisell), **inclinació** (gira la banda al voltant de la corba) i, per a NURBS, **pes**.

Els modificadors funcionen sobre un objecte de corba com sobre una malla: una matriu al llarg, una simetria, una superfície de subdivisió. Vegeu [Modificadors d'una malla](topic:modifiers).

## Convertir-la en malla

{{ui:A malla}} (a l'espai de treball Corba o a Informació de l'entitat, {{ui:Corba a malla}}) fa de l'objecte de corba la malla que mostra ara; els seus modificadors es mantenen per sobre. Després editeu-la a l'espai de treball Malla. El desfer la torna a convertir en corba.

Vegeu també [Malles](topic:meshes) i [Editar una malla](topic:mesh-edit).
