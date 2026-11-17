---
title: Girar y escalar
summary: Girá cosas alrededor de un punto eka-gui térã ejepiro grados, ha ajusta tamaño parejo peteĩ factor-pe.
keywords: escala grips, estirar, no uniforme, por eje, invertir, espejo, copia espejo, invertir a lo largo, girar, rotar, ángulo, grados, transportador, escalar, cambiar tamaño, agrandar, reducir, factor, escala uniforme
from: 45cdcb49
---

## Girar

{{ui:Rotar}} ({{key:Q}}) gira selección alrededor de un punto centro. Mbohapy eka: centro, dirección comienzo ha dirección final.

1. Eiporavo mba'e girar haguã. Mba'e ndojeporavóiva, Rotar ojagarra mba'e primero ejeka.
2. Eapretá {{key:Q}}. Anillo pe'a oguata, ohechauka plano girábapa.
3. Eka centro de rotación.
   - Tierra térã vacío-pe, anillo oñemoĩ planopa (azul): giro eje vertical rehe, edificio sitio-pe giraháicha.
   - Cara-pe, anillo oñemoĩ cara plano-pe: giro cara propia dirección rehe. Pared-pe eka, cosa horizontal eje rehe girá haguã.
4. Eka punto omoĩva ángulo comienzo, por ejemplo girábape borde rehe.
5. Pe'a centro rehe. Ángulo ohechauka punta ha valor caja-pe ({{ui:Ángulo}}). Pasos 15° rupive ojuhu ha ojuhúramo.
6. Eka finalizar térã ejekuaa ángulo grado-pe ha eapretá {{key:Enter}}: `90`, `45`, `-30`.

   Ángulo positivo ha'e antihorario, anillo oĩva rehegua ojehechaukáva.

Girando eapretá {{key:Ctrl}} (térã {{key:Alt}}) **kopia** ojapo ha upe oiko jepe, Mover-icha; punta ohechauka kopia ojapo ramo, ha ambue jey apretáramo oñemboguejy. Kopia girada rire `3x` ejeke ambue kopia ojapo haguã centro rehe.

Mover-icha, conectado geometría parte girando, oñemboguejy cara ojoapyva. Grupo primero ojapo opa girá haguã.

:::note
Punta ohechauka flechas teclas eje eiporavo, ha upe build-pe mohu'ã vista oñemboguejy primer eka rire. Eje eiporavo haguã, centro eka cara-pe ojehechaukáva ejepa oiporavóva. Ehecha [Todavía no implementado](topic:not-built-yet).
:::

## Escalar

{{ui:Escalar}} ({{key:S}}) ajusta selección tamaño. Eiporavo mba'e ajusta haguã, upéi eapretá {{key:S}}: tuichakue cuadraditos (grips) ojuhu caja-pe esquina, borde ha lado mbytepe.

### Estirar o escalar con grips

- **Esquina** grip opa dirección-pe parejo escala, esquina opuesta rehe.
- **Lado** mbytepe grip ojeko dirección ra'ánga rehe: lado opuesto rehe. Peteĩ caja ojapo ko'ẽrõ, ha'e alto ndoguéi.
- **Borde de caja** mbytepe grip ojeko mokõi dirección cruz-pe.
- Eapretá {{key:Ctrl}} grip eka rire, caja mbytepe escalar.

Eka grip, pe'a punto, ha eka jey; térã eka grip ha ejekuaa factor (`2` mokõi jey, `0.5` mitãrõ) ha eapretá {{key:Enter}}. Dirección cada peteĩ factor omoĩ haguã, mbohapy ejekuaa, red, green ha blue-pe: `2,1,0.5`. Grupo abierto-pe dirección grupo propio.

### Escalar desde cualquier punto

Eka grip ndaha'éiva ambue lugar, escala parejo punto propio rehe. Mbohapy eka:

1. Eiporavo mba'e ajusta haguã. Mba'e ndojeporavóiva, Escalar ojagarra mba'e primero ejeka.
2. Eapretá {{key:S}}.
3. Eka punto ndoñemboguejýva (grip'ỹ), por ejemplo esquina mbytepe.
4. Eka punto referencia. Hayma primer punto-gui oikuaa 1×.
5. Pe'a primer punto-pe térã ojeity. Factor ohechauka punta ha valor caja-pe ({{ui:Escalar}}).
6. Eka finalizar térã ejekuaa factor ha eapretá {{key:Enter}}: `2` tamaño mokõi jey, `0.5` mitãrõ.

### Tamaño exacto-pe escalar

Mba'e exacto largo-pe ojapo haguã, factor ojuhu: nuevo largo ojehejávo actual largo-pe. Mbohapy eka modo-pe valor caja aritmética ojapo, ejekuaa `4.2/3.6` 3.6 m pared 4.2 m-pe ojapo haguã. Grip caja-pe número ramo ojeikuaa: factor primero ojuhu (4.2 ojehejávo 3.6-pe ojuhu 1.1667). Borde primero eiporavo ha ojehechakuaa actual largo {{ui:Información de entidad}}-pe.

### Ojapo import tamaño ndoporãva

OBJ archivo-kuéra unidad'ỹ, upévare milímetro-pe ojapo modelo 1000 ririvéva oikéta. Importado grupo eiporavo, {{key:S}} eapretá, esquina grip eka, ejekuaa `0.001` ha eapretá {{key:Enter}}. Pulgada-pe ojapo modelo-pe, ejekuaa `0.0254`.

## Ohechakuaa

- Mbohapy eka ndive punto rehe escalar, parejo. Dirección peteĩre estirar, lado térã borde grip eiporavo (ehecha ko'ape).
- Grupo térã componente escalar, eskalado kopia oñemboguejy; componente ambue kopia tamaño oñemoĩ.
- {{key:Esc}} apretá mboheraʼỹ eka mboyve ojeheja ramo.

## Invertir

{{ui:Editar}} › {{ui:Más}} › {{ui:Invertir a lo largo del rojo}}, {{ui:Invertir a lo largo del verde}} térã {{ui:Invertir a lo largo del azul}} selección espejo-pe ojapo, caja mbytepe: escalera izquierda-pe ojapo derecha-pe oikóta. Caras ojehechauka afuera, grupo térã componente opa espejo ojapo (adentro ndojejapóiva).

{{ui:Copia invertida a lo largo del rojo}} (ha verde, azul) orekoháicha original ha ojapo espejo kopia lado-pe, caja far lado-pe: puerta mokõipa, edificio ala ambue. Ojeporu geometría ojoapýva ojoapy original-pe; grupo primero ojapo ramo, separado oñemboguejy.

Grupo abierto-pe, rojo, verde ha azul grupo propio ejes.
