---
title: Escalar por factores y margen de contracción
summary: Escale una selección por un factor para cada eje alrededor de un punto que elija, o agrande un patrón por el porcentaje que se encogerá una pieza fundida.
keywords: escalar, no uniforme, factor, porcentaje, estirar, contracción, encoger, patrón, fundición, margen, cambiar tamaño
from: 37e1bbff
---

La herramienta {{ui:Escalar}} ({{key:S}}) escala por igual, o arrastra un pinzamiento para estirar una o dos direcciones. **Escalar por factores…** (menú Herramientas, o el grupo Modificar) es la forma escrita: un número para cada uno de los tres ejes.

1. Seleccione aristas, caras, grupos o componentes.
2. Abra {{ui:Escalar por factores…}}. Escriba un factor para rojo, verde y azul. Un factor puede ser `1.015`, `101.5%` o `+1.5%` (y `-2%` para reducir). {{ui:Igual en los tres ejes}} copia el primero a los otros dos.
3. Elija qué **se mantiene fijo**: el centro de la selección, su esquina más baja, el centro de su base o el origen.
4. La línea bajo los campos muestra el tamaño ahora y después. {{ui:Escalar}} lo hace en un solo paso de deshacer.

Los ejes son los del grupo que tiene abierto (los del modelo, en el nivel superior). Un grupo o componente girado sale inclinado si sus factores difieren; escale en su lugar el grupo que lo contiene. El contenido de un componente no se toca, así que sus otras copias se quedan igual.

## Margen de contracción

Una pieza fundida se encoge al enfriarse, así que su patrón se hace más grande. Bajo **Margen de contracción**, escriba el porcentaje para cada eje (su fundidora o su fabricante de patrones se lo da para su metal; 1.5 % abajo es solo un ejemplo) y pulse {{ui:Usar como factores}}.

- **El porcentaje tal cual** hace que el factor sea 1 más el porcentaje: 1.5 % da 1.015, lo que marca una regla de contracción.
- **Justo lo necesario** hace que el factor sea 1 dividido entre uno menos el porcentaje: 1.5 % da 1.0152, así la pieza fundida sale del tamaño de la pieza después de encogerse esa cantidad.

Sus últimos porcentajes se recuerdan en este navegador.

:::note
El porcentaje lo da usted: ModelCraft no conoce su metal, su molde ni su proceso.
:::
