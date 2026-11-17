---
title: Enviar masa a BimCraft
summary: Eme'ẽ push/pull masa BimCraft-pe masa opción-kuéra ramo, pisos, huella, superficie bruta de piso ha volumen cada sólido-gui ojeikuaa.
keywords: masa, masa, concepto, opciones, bimcraft, ifc, bim, empujar tirar, pisos, plantas, superficie bruta de piso, huella, volumen, enviar, entregar, masa de edificio, etapa 2
from: 73c51f3f
---

## Mba'épa ejapóta

Push/pull-pe ejapo bloque-kuéra ojeikuaa BimCraft-pe masa opción ramo, concepto ojeguerovia hag̃ua peteĩ modelo de edificio-pe.

## Ojepyrũ mboyve

Cada masa ojapo **grupo** térã **componente** ha emoĩ nombre. Peteĩha opción ojeguahẽ. Geometría suelta ndojeguerahaʼái.

## Ejeguerahaʼa

1. Ejepe'a grupo-kuéra ojeguerahaʼáva. Mba'eve ndojepe'ái jave, grupo principal ha componente ojeguerahaʼa opa.
2. Ejepe'a {{ui:Export}}, upéi {{ui:Massing to BimCraft…}}.
3. Emoĩ {{ui:Name of the option set}} ha {{ui:Floor height}}.
4. Eñangareko lista: cada opción piso, huella, superficie bruta de piso ha volumen.
5. Ejepe'a **Enviar a BimCraft** BimCraft peteĩ pestaña pyahu-pe ojehupyty hag̃ua opciones-kuéra, térã {{ui:Save as IFC}} archivo ejeipe'a hag̃ua ha ha'e pe ejeporu.

BimCraft-pe opciones oĩ "Massing options in the model" apartado-pe, upépe peteĩ opción ojapo hag̃ua ko'ẽ actual ha paredes ha pisos-pe ojeheka.

## Mba'éicha sólido ojapo masa

- **Pisos** ha'e sólido altura jejoko piso altura-pe, ojeaproxima ha peteĩ como mínimo. Pisos ojeikuaa sólido altura jejoko ndive, upévare 10 m bloque 3 m piso ndive 3 piso ha'e, cada 3.33 m.
- **Peteĩ piso superficie** ha'e sólido horizontal sección área upe piso nivel-pe. Peteĩ bloque ojehupyty ojapo jave, piso guasúva michĩ; superficie bruta ha'e upe suma.
- **Huella** ha'e sección contorno sólido base-gui peteĩ jeýpe.
- **Volumen** ha'e sólido propio.

IFC archivo-pe, cada opción ha'e building element proxy (huella altura sólido-pe ojeguata) ha cada piso peteĩ espacio ndive piso superficie bruta-gui. Opción opa peteĩ edificio-pe oguereko, pisos tuichave ojeguahẽ opción guasúvape.

## Forma michĩ

Peteĩ bloque vertical simple ojeikuaa ojapo jave ojehechauka lo mismo. Ambue ojeguerahaʼa, ha lista ohechauka mba'éicha forma michĩ:

- **Pisos ndojoguaí ha'e base tamaño** (ojepu'ũ térã ojerúva): masa BimCraft-pe ha'e base contorno altura pleno-pe; pero piso superficie ha volumen sólido propio.
- **Sólido ndoikói**: pisos ndojehasaʼái sección ikatu ojekloza ndajehasái ha nada oúva. Sólido ojekloza ({{ui:Entity info}} ohechauka "Sólido: Sí") cifra hekoporãvéva.
- **Base mokõi contorno ha'e**: tuichave ha'e huella ojeporu.

## Porã ekuaa

- {{ui:IFC for BimCraft (.ifc)}} ambue exportación: forma ha nombre nomás ojeguerahaʼa, pisos ha superficies ndaha'éi.
- Mba'eve ndojeguerahaʼái. Archivo ojehupyty BimCraft pestaña-pe ko computadora-pe.
