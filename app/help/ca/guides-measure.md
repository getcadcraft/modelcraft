---
title: Mesura i col·loca guies
summary: Llegeix longituds i àrees, mesura entre dos punts amb la cinta i traça línies i punts guia per dibuixar-hi a sobre.
keywords: mesura, cinta mètrica, transportador, angle, guia d'angle, guia, línia guia, línia de construcció, distància, cota, longitud, àrea, desfasament, disposició, punt guia
from: de6d04d9
---

## Llegeix mides sense mesurar

Selecciona alguna cosa i mira {{ui:Informació de l'entitat}}:

- Una aresta mostra la seva **longitud**.
- Una cara mostra la seva **àrea** i quants forats té.
- Diverses cares mostren la seva **àrea total**.
- Un grup o component mostra la seva **mida** (amplada × profunditat × alçada de la caixa que l'envolta) i, si és un sòlid tancat, el seu **volum**.
- Sense res seleccionat, {{ui:Informació de l'entitat}} mostra la mida de tot el model.

Les longituds i les àrees fan servir la unitat del selector de la part inferior dreta. Un model en mil·límetres mostra les àrees a partir de 0.01 m² en metres quadrats (una sala de 4 × 3 m es llegeix "12 m²").

Mentre dibuixes, la caixa de valors mostra en directe la longitud, la mida, el radi o la distància, de manera que rarament cal mesurar després.

Per canviar una mida després de dibuixar, selecciona una aresta o un grup i torna a escriure la longitud o la mida a {{ui:Informació de l'entitat}}. O col·loca una [cota](topic:dimensions) i escriu-hi una longitud nova.

## Mesura entre dos punts

1. Prem {{key:T}} per a la mesura amb {{ui:Cinta}}.
2. Fes clic en un punt: una cantonada, un punt mitjà, un punt sobre una cara, o el terra. (Fer clic en una aresta fa una altra cosa; vegeu més avall.)
3. Mou-te cap al segon punt. L'indicador i la caixa de valors ({{ui:Longitud}}) mostren la distància. S'ajusta a punts i a les direccions vermella, verda i blava.
4. Fes clic. La barra d'estat diu "Mesurat: 4' 6"." i es deixa un **punt guia** al segon punt.

Per deixar el punt guia a una distància exacta, escriu-la després del primer clic i prem {{key:Enter}}: va en la direcció que estàs apuntant.

## Col·loca una línia guia

Una línia guia és una línia discontínua infinita, paral·lela a una aresta, a una distància que tries. Fes servir les guies per marcar un retrocés, l'alçada d'un forjat o on comença una finestra.

1. Prem {{key:T}}.
2. Fes clic sobre una **aresta** (no al seu extrem). L'indicador diu "Sobre una aresta".
3. Allunya't de l'aresta, cap al costat on ha d'anar la guia. Una línia discontínua la segueix, paral·lela a l'aresta, i la caixa de valors ({{ui:Desfasament}}) mostra la distància.
4. Fes clic, o escriu el desfasament i prem {{key:Enter}}: `1.5m`, `5'`.

   La barra d'estat diu "Línia guia a 1.5 m de l'aresta."

Començar sobre una línia guia existent fa una altra guia paral·lela a ella, de manera que pots anar desplegant una quadrícula a partir d'una guia.

Si escrius un desfasament sense haver-te allunyat abans de l'aresta, ModelCraft no sap quin costat vols: "Allunya't primer de l'aresta per indicar quin costat."

## Una guia en angle: transportador

1. Fes clic a {{ui:Transportador}} dins del grup {{ui:Modifica}}.
2. Fes clic al centre: el punt per on passa la guia. Si és sobre una cara, el transportador es posa sobre aquella cara; en cas contrari, es posa pla. Després d'aquest clic, {{key:Right}}, {{key:Left}} o {{key:Up}} el posen perpendicular al vermell, al verd o al blau (torna a prémer per desfer-ho).
3. Fes clic en un punt que defineixi 0°, per exemple al llarg d'una aresta.
4. Mou-te fins a l'angle que vols i fes clic: s'ajusta en passos de 15°. O escriu l'angle en graus, com `22.5`, i prem {{key:Enter}}; la guia va cap al costat on és el punter.

La línia guia passa pel centre amb aquest angle. Dibuixa al seu llarg amb {{ui:Línia}} per a la pendent d'una coberta, un xamfrà o un mur en esbiaix.

## Dibuixa contra les guies

Les eines de dibuix s'ajusten a les línies guia ("Sobre una guia") i als punts guia ("Punt guia"), i al punt on una línia guia creua una direcció d'eix. Comença un rectangle on es creuin dues guies per col·locar-lo exactament.

## Elimina guies

- Una guia: fes-hi clic amb {{ui:Selecciona}} i prem {{key:Delete}}, o fes-hi clic amb l'{{ui:Esborrador}}.
- Totes les guies: sense res seleccionat, fes clic a {{ui:Suprimeix totes les guies}} dins d'{{ui:Informació de l'entitat}}.

Les guies es desen al fitxer `.modelcraft`. No s'exporten a altres formats.
