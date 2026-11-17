---
title: Dibuixa la imatge amb un altre programa
summary: El nostre propi traçador de camins dibuixa la imatge de Renderitza; un altre programa només la pot dibuixar a través d'un complement de motor de renderitzat a CadCraft Studio. Què es porta i per què alguns programes mai no s'ofereixen.
keywords: renderitza, motor, programa extern, motor de complement, studio, fons, cua, usd, gltf, dibuixat per, blender, gpl
from: 150f94f1
---

La imatge de {{ui:Renderitza una imatge…}} la dibuixen **els nostres motors**: Ràpid i el Traçador de camins, al navegador i a CadCraft Studio. Un altre programa només la pot dibuixar quan un **complement de motor de renderitzat** l'hi porta: vegeu [Afegeix un motor de renderitzat amb un complement](topic:render-engine-addons). Per portar l'escena a un altre programa i seguir treballant-hi, useu [Obre l'escena en un altre programa](topic:render-open-in) o [Envia l'escena a un motor de joc](topic:render-unreal).

## Dibuixar una imatge amb el motor d'un complement

1. Activeu el complement a Configuració › Complements. El seu motor apareix a la llista Motor de {{ui:Renderitza una imatge…}}.
2. Trieu-lo. Les seves pròpies opcions es mostren sota la llista Motor.
3. Feu clic a {{ui:Renderitza}}. A Studio, la primera vegada que un complement executa un programa, Studio us ho pregunta en el seu propi diàleg. El progrés es mostra mentre dibuixa; {{ui:Atura}} l'acaba. La imatge apareix marcada amb el motor que l'ha dibuixada.

Un motor escrit en JavaScript també funciona al navegador. Un motor que executa un programa en aquest ordinador només funciona a Studio; al navegador es mostra com un fitxer per desar.

## Què es porta

El motor rep un **paquet**: el model com a fitxer USD (i un fitxer glTF quan el demana), i un fitxer de configuració amb els valors exactes dels materials, el sol i el cel, cada llum que és encesa amb la seva potència i el seu perfil de llum, la càmera i l'exposició. Cada programa il·lumina, ajusta el to i mostreja a la seva manera, de manera que les imatges són iguals en càmera, sol, llums i exposició, però no píxel a píxel.

## Programes que CadCraft mai no executa

CadCraft mai no inicia un programa amb llicència GNU GPL, i mai no el llista com a motor ni com a destí d'Obre a. Blender n'és un, així que no és a la llista Motor. Un fitxer USD o glTF desat des de {{ui:Renderitza una imatge…}} encara s'obre en ell com en qualsevol programa que llegeix aquests fitxers.

:::note
Les càmeres panoràmiques i estèreo i una imatge de cel (s'usen els colors del cel) no es porten a un altre programa. Res del que es fa en un altre programa no torna al model.
:::
