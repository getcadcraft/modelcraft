---
title: Composants qui s'étirent
summary: Rendez une copie d'un composant plus large, plus profonde ou plus haute, tandis que ses pièces gardent leurs dimensions : une table plus longue avec les mêmes pieds, une bibliothèque plus haute avec ses étagères espacées, une rampe dont les montants se répètent.
keywords: composant dynamique, étirer, redimensionner un composant, paramétrique, tailles nommées, répétitions, réseau, pieds, étagères, rampe, règles, variables
from: b4c40f43
---

Mettre à l'échelle un composant agrandit tout ce qu'il contient, pieds et traverses compris. **Étirer cette copie** modifie la largeur, la profondeur ou la hauteur d'un composant, et chaque pièce suit une règle : le plateau d'une table s'agrandit, ses pieds gardent leur épaisseur et restent aux extrémités.

Cela fonctionne sur les composants constitués de pièces, c'est-à-dire des groupes ou des composants à l'intérieur du composant, comme tout élément de la [bibliothèque de départ](topic:starter).

## Étirer une copie

1. Sélectionnez le composant.
2. Dans {{ui:Infos sur l'entité}}, cliquez sur {{ui:Étirer cette copie…}}.
3. Saisissez la nouvelle {{ui:Largeur (rouge)}}, {{ui:Profondeur (vert)}} et {{ui:Hauteur (bleu)}}, puis cliquez sur {{ui:Étirement}}.

Seule cette copie change : elle devient un composant à part entière, qui garde en mémoire l'original dont elle provient. Étirez-la à nouveau à tout moment : elle est recalculée à partir de l'original, donc rien ne dérive. Les autres copies de l'original restent inchangées.

## Les règles

Ouvrez le composant (double-cliquez dessus) et sélectionnez une de ses pièces. {{ui:Infos sur l'entité}} affiche {{ui:Quand le composant s'étire}}, avec une règle pour le rouge, le vert et le bleu :

| Règle | Ce que fait la pièce | Par exemple |
|---|---|---|
| {{ui:Étirement}} | Grandit avec le composant ; ses distances aux deux côtés restent les mêmes | Le plateau d'une table |
| {{ui:Rester au début}} / {{ui:Rester à la fin}} | Garde sa taille et sa distance à ce côté | Les pieds |
| {{ui:Se déplacer au prorata}} | Garde sa taille ; son milieu se déplace au prorata | Les étagères, une poignée de porte |
| {{ui:Se mettre à l'échelle au prorata}} | Sa place et sa taille sont toutes deux au prorata | Les marches d'un escalier |
| {{ui:Répétitions}} | Des copies de la pièce, à intervalles réguliers ({{ui:Tous les}}), depuis son point de départ jusqu'au côté opposé | Les montants d'une rampe |

{{ui:Automatiques}} (la valeur de départ) calcule une règle et indique laquelle : {{ui:Étirement}} lorsque la pièce couvre tout le composant, {{ui:Se déplacer au prorata}} lorsqu'elle se trouve à peu près au milieu, sinon elle reste fixée au côté dont elle est la plus proche.

## À savoir

- Les formes propres aux pièces sont partagées, donc une copie étirée est légère. Modifier une pièce la change dans toutes les copies.
- Une copie étirée ne suit pas les modifications ultérieures des règles ou de la disposition de l'original : étirez-la à nouveau pour les intégrer.
- Les faces dessinées librement dans le composant (et non dans une pièce) gardent leur taille ; faites-en une pièce pour qu'elles suivent.
- Les règles et l'original dont provient chaque copie étirée sont enregistrés dans le fichier ModelCraft.
