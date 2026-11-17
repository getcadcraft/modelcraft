---
title: Afegeix un motor de renderitzat amb un complement
summary: Què pot afegir un complement a la llista Motor del diàleg Renderitza, el permís que necessita per executar un programa, i què comprova i pregunta Studio.
keywords: complement, addon, motor, motor de renderitzat, desenvolupador, engine.run, permís, programa, script, signat, studio, api
from: cd7a39ba
---

Un complement (Configuració › Complements) pot afegir un motor a la llista Motor de {{ui:Renderitza una imatge…}}. El text complet per als autors de complements és a la secció 16 de l'especificació del complement; en resum:

- El complement registra un motor amb un identificador que comença pel seu propi, un nom, configuració opcional i **o bé** un programa per executar **o bé** una funció en JavaScript que dibuixa la imatge.
- Un motor que executa un programa necessita el permís **`engine.run`**, que es mostra abans de la instal·lació i a Configuració. Només s'executa a Studio; al navegador apareix com un fitxer per desar.
- El complement indica el programa (un nom de fitxer simple: mai un intèrpret d'ordres), un script que és **dins del complement signat**, i arguments formats per marcadors de posició i paraules simples. Studio troba el programa o us demana que hi apunteu una vegada.
- La primera vegada que un complement executa un programa, **Studio us pregunta en el seu propi diàleg**: quin complement, quin programa, i que un script pot fer qualsevol cosa que pugui fer el programa. Permeteu-ho només per a un complement en què confieu. La resposta es recorda per a aquell complement i aquell programa.
- El paquet (l'escena en USD i un fitxer de configuració, amb el fitxer glTF quan el complement el demana) i l'script del complement van a una carpeta temporal nova; el programa s'executa allà i la imatge torna marcada amb el nom del motor del complement.

:::note
Els complements només poden afegir motors de renderitzat a partir de l'API de complements 1.4. Un exemple treballat per a un renderitzador de línia d'ordres de codi obert és al seu propi repositori; encara no s'ha executat en aquell renderitzador.
:::
