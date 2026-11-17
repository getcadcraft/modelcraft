---
title: Soportes, grosor de pared, ahuecado y reparación
summary: Ehecha dónde impresión oikotevé soportes ha mboy aproximado, jejuhu paredes mbyky imprimi haguã, ahueca pieza grosor pared ha agujero desagüe rupi, ha repara malla con cada arreglo ohechaukáva.
keywords: impresión 3d, soportes, vista previa de soportes, voladizo, soportes en árbol, soportes en columna, grosor de pared, paredes delgadas, demasiado delgado, boquilla, ahuecar, ahuecado, cáscara, agujero de desagüe, resina, reparar, arreglar malla, no multivariedad, caras invertidas, agujeros, cáscaras pequeñas, autointersección, superposición, unir
from: 286bde26
---

Cuatro herramienta modelo 3D impresora-pe ojejapo haguã. Abrí {{ui:Exportar}} › {{ui:Verificar impresión 3D (STL o 3MF)…}}; diálogo **Herramientas de impresión** línea-pe oĩ {{ui:Vista previa de soportes}}, {{ui:Grosor de muro}}, {{ui:Ahuecar}} ha {{ui:Reparar}}. Peteĩ-peteĩ tarjeta vista-pe ojepe'a; {{ui:Cerrar}} (cruz) oipe'a tarjeta ha marca. Peteĩ tarjeta ojehechaukáva peteĩ jey.

Herramienta peteĩ-peteĩ oimprimíva ojeporu: selección, térã walo ohechaukáva selección ndaipóri. {{ui:Ahuecar}} ha {{ui:Reparar}} oikotevé peteĩ grupo, componente térã malla ojeporandu, ojejapo ha ojemboguejy.

## Vista previa de soportes

Caras umi ojeikóva voladizo más de **ángulo de voladizo** vertical-gui ojehecha rojo, ha soportes sencillo ohechaukáva (naranja) ojejapo cama-pe térã modelo-pe ipukúva.

- **Ángulo de voladizo**: 45° ha'e impresora ojeikuaa soporte ndaikóva. Impresora iporã puente ojapo-pe, guapy.
- **Columnas**: columna derecho cada 3 mm voladizo mbytépe. Cálculo umi ojejapo 15 % patrón soporte.
- **Árbol**: punto kuéra oñemboja peteĩ tronco ijyvy-pe; ndaipóri rama 45° mboyve. Árbol mbyky material ha cama-pe ndojapóiva mbyky.

Tarjeta oñe'ẽ mboy superficie oikotevé soporte, mboy punto soporte ha aproximado material. Modelo-pe ipukúva soporte (cama-pe ndaipóri) oñemboja, ojehechaukáva marca upépe. {{ui:Configuración}}-pe cama impresora oñemoĩ ramo, cama modelo ijyvy-pe oñemoĩ.

:::note
Ko ha'e vista previa, ndaha'éi slicer: nde slicer oñemboja soporte mboyve. Voladizo tuichave-pe soporte punto ojapo mbohapy, vista previa pyhyve; tarjeta oñe'ẽ.
:::

## Grosor de pared

Cada cara oñemedi sólido rupi tenonde ambue lado-pe. Paredes {{ui:grosor mínimo de pared}}-gui mbyky, ojehecha rojo, ha paredes mokõi ha mbohapy mitad peve naranja: imprimi ikatu, ha mbyky oikóta ndaipóri tavy'a.

Lugar mbyky ohechaukáva, ndoipatava, mbyky ha guasu. {{ui:Mostrar}} kámara ojeporandu hese.

Impresora ndaikatúi pared mbyky dos boquilla ancho-gui: boquilla común 0,4 mm-pe 0,8 mm (oñepyrũ). Resina impresora-kuéra mbyky oikuaa; nde impresora guía ehecha.

Modelo guasúpe cara-kuéra peteĩ rayo ojapo, ambue oñemboguéva vecino grosor; tarjeta ohechaukáva mboy oñemedi.

## Ahuecado

Ahuecado oñongatu pe exterior ha omboguejy interior, pared nde ojeporandu hasy. Resina impresión mbyky resina ojapo ha plataforma ojerásape; filamento impresión mbyky plástico ojapo relleno-gui.

1. Selecciona grupo, componente térã malla, upéi oprimí {{ui:Ahuecar}}.
2. Eheja **pared** (2 mm oñepyrũ) ha cuán guasu **agujeros de desagüe**.
3. Resina impresión-pe, oprimí {{ui:Colocar un orificio de drenaje}}, upéi oprimí modelo exterior ojeikóva: ipukuháme, plataforma-pe, ndaipóri resina ojejeroapa. Ehecha umi oikotevéva; peteĩ-peteĩ círculo azul ohechaukáva ha {{ui:Eliminar}}-gui ohechauka.
4. {{ui:Vista previa}} ohechaukáva mboy ahuecado omboguejy.
5. {{ui:Ahuecar}} oikóva cambio: peteĩ paso {{key:Mod+Z}} omboguejy.

Ojejapo ha'e peteĩ sólido cerrado 3D verificación oiporavo: ModelCraft umi verifica primero ha ndojejapói ndojejapóiramo. Modelo pared mokõi-gui mbyky oĩ, sólido oiko. Ojejapo grupo ha'e, cara plano-kuéra peteĩ cara; **Empujar/tirar**-pe ojeporandu ikatu; curva parte ahuecado relleno fino-pe, cara mbohapy oguereko, malla ojeikóta ha línea ohechauka.

:::tip
Mboyve forma-kuéra-pe ahuecado ha'e exterior pared rupi ojeikóva interior. Esquina térã parte mbyky ojejoko ramo, ModelCraft exterior ojehecha pared distancia-pe relleno fino-pe; tarjeta ohechauka mboy aproximado (milímetro ijerére).
:::

## Reparar

{{ui:Reparar}} oñeha'ã parte selección-pe impresora slicer-ichagua, ojejapo ikatu ha'e arregla ha oñe'ẽ cada arreglo:

| Ojejapo | Mba'e ha'e |
|---|---|
| Triángulo sin área | ojeikepa |
| Triángulo ojehechakuaáva mokõi jey | peteĩ kopia oñongatu; cara ojeikóva hasy ndaipóri espesor ojeikepa |
| Pieza mbyky 0,5 mm mboyve | ojeikepa |
| Triángulo ojehecha kóo ojehecha-pe | oñemboguejy vecino-icha |
| Agujeros, plano térã ndaha'éi | ojeikepa triángulo abanico-gui agujero mbytégui |
| Pieza ojehecha tenonde | ojeikóva exterior ojepe'ápe (interior ojehecha agujero ko'ẽ, oiko ichaite: ojeikóva ojehecha) |

{{ui:Corregir las seguras}} peteĩ paso-pe oñemboguejy hetave, {{key:Mod+Z}} omboguejy, ha línea estado oñe'ẽ cada arreglo. Parte arreglada grupo ha'e, cara plano-kuéra peteĩ cara. Ndaipóri oñemboja, ha **Lo dejamos para usted** rupi ohasa (térã grupo-pe cara mbohapy), malla ojeikóta: cara triángulo oiko, plano hechaukáva. Línea ohechauka mboy. {{ui:Unir piezas superpuestas}} péicha ojapo.

Ojejapo ndaikatúi seguro, **Lo dejamos para usted** rupi ohechauka ha lila color-pe vista-pe, {{ui:Mostrar}}-gui:

- **Borde umi cara mboapy térã mboyve ojehasávape**: pe cara oikóva ojeporandu, ambue cara ojepe'a.
- **Pieza ijeheguipe ojehasáva**: mohenda térã nde ojejapo parte. Ehecha [Intersectar caras](topic:intersect).
- **Agujero guasu térã ojejoko**: cara ojeikuaa ojehasávape.
- **Pieza mbytépe ojejoko**: slicer ojejapo ha'e ichupe. {{ui:Unir piezas superpuestas}} peteĩ cuerpo ojejapo (cara oikuaa mboheta ojejapo), ha'e botón ambue, nde jey-pe ndaiporanduvéi.

Empujar/tirar grupo-kuéra-pe avei ojepe'a peteĩ-peteĩ {{ui:Información de entidad}} › {{ui:Mostrar problemas}} / {{ui:Corregir}}-pe, cara ndojejapóiva nde ojejapo-pe. Ehecha [Herramientas de sólidos](topic:solids).

Ñemboja: [Preparar un modelo para impresión 3D](topic:print-3d) · [Estilo principiante](topic:beginner) · [Aún no disponible](topic:not-built-yet#3d-printing)
