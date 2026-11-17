---
title: Netezirea muchiilor
summary: Ascundeți muchiile dintre fețele care se întâlnesc sub un unghi mic, astfel încât formele curbe să se citească drept o suprafață netedă, în ModelCraft și în fișierele exportate.
keywords: netezire, neted, muchii moi, umbrire netedă, ascundere muchii, fațete, fațetat, curbat, normale, întărire, unghi
from: 52d32453
---

O formă curbă din ModelCraft este făcută din fețe plate. Muchiile **moi** dintre aceste fețe nu sunt desenate, iar fețele pe care le unesc sunt umbrite ca o singură suprafață netedă, astfel încât un cilindru cu 24 de laturi arată rotund.

Când trageți un cerc cu {{ui:Împinge/Trage}}, laturile lui sunt netezite automat. Pentru alte forme, netezirea se face după unghi.

## Netezirea după unghi

1. Selectați ce să neteziți: fețe și muchii, sau un grup ori o componentă (toate muchiile ei).
2. În {{ui:Informații entitate}}, tastați un unghi în {{ui:Netezire până la}}, de exemplu `20`, și faceți clic pe {{ui:Netezire}}.

Fiecare muchie din selecție ale cărei două fețe se rotesc cu acel unghi sau mai puțin devine moale; muchiile cu o rotire mai ascuțită devin dure. Laturile unei prisme cu 12 laturi se rotesc cu 30°, iar muchiile ei de margine cu 90°, deci `31` netezește doar laturile.

{{ui:Întărire toate}} face din nou dure toate muchiile din selecție. Fiecare este un pas de anulare.

## De reținut

- Sunt netezite doar muchiile dintre exact două fețe. Muchiile libere rămân cum sunt.
- Umbrirea netedă funcționează doar peste muchiile moi: o față fără nicio muchie moale se umbrește plat.
- Muchiile moi sunt păstrate în fișierul ModelCraft. Exporturile **glTF (.glb)** și **OBJ** păstrează umbrirea netedă (o normală pe fiecare colț), astfel încât alte programe arată aceeași suprafață. Exporturile Collada și STL înregistrează fețele plate.
- Muchiile moi sunt ascunse în orice stil de fețe, și în {{ui:Raze X}} și în {{ui:Cadru de sârmă}}. Ca să le vedeți, selectați forma și faceți clic pe {{ui:Întărire toate}}; anularea readuce netezirea.
