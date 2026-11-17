---
title: Styles et ombres du soleil
summary: Affichez le modèle ombré, en lignes cachées, en filaire ou en transparence, et étudiez les ombres qu'il projette à n'importe quelle date, heure et lieu.
keywords: vue de présentation, vue épurée, masquer les guides, masquer les axes, style, ombré, lignes cachées, filaire, rayons X, arêtes, ombres, soleil, étude solaire, solaire, date, heure, latitude, longitude, fuseau horaire, nord
from: 09c95329
---

Le panneau {{ui:Style}}, à droite, modifie la façon dont le modèle est dessiné. Rien dans ce panneau ne modifie le modèle lui-même, et il n'entre pas dans l'annulation. Chaque [scène](topic:scenes) garde son propre style, et le fichier garde le style que vous aviez au moment de l'enregistrement.

## Faces

Choisissez-en un dans la liste {{ui:Faces}} :

| Style | Aspect |
|---|---|
| {{ui:Ombré}} | Faces pleines, éclairées en douceur. Les faces vues de dos sont gris-bleu. Les couleurs importées s'affichent. |
| {{ui:Lignes cachées}} | Faces dans la couleur de fond, avec des arêtes en encre : un dessin au trait net, sans les lignes cachées. Blanc sur {{ui:Papier}}, sombre sur {{ui:Modèle}}. |
| {{ui:Filaire}} | Arêtes seulement. Les faces ne sont pas dessinées, mais elles comptent toujours au clic et à l'accrochage : vous ne pouvez pas sélectionner à travers elles. |
| {{ui:Rayons X}} | Faces transparentes, pour voir ce qui se trouve derrière ou à l'intérieur. Comme en filaire, les clics et les accrochages s'arrêtent à la face la plus proche. |

{{ui:Afficher les arêtes}} active ou désactive les arêtes dans tous les styles sauf {{ui:Filaire}}. Désactivée, {{ui:Lignes cachées}} n'affiche presque rien, car ses faces se confondent avec le fond. Les arêtes douces, comme les côtés d'un cercle tiré, ne sont jamais dessinées.

## Activer les ombres du soleil

1. Cochez {{ui:Ombres du soleil}}. Les réglages du soleil situés en dessous deviennent actifs, et le modèle projette des ombres sur lui-même et sur le sol.
2. Réglez le lieu :
   - {{ui:Latitude}} : le nord est positif, le sud négatif (New York : environ 40.7, Sydney : environ -33.9).
   - {{ui:Longitude}} : l'est est positif, l'ouest négatif (New York : environ -74.0).
   - {{ui:Décalage UTC}} : le décalage du site par rapport à UTC, en heures, par exemple `-5` pour New York en hiver. ModelCraft n'applique pas l'heure d'été ; utilisez `-4` pour New York en été.
3. Réglez la {{ui:Date}} (mois et jour) et faites glisser le curseur {{ui:Heure}}. L'heure avance par pas de 15 minutes et s'affiche à côté du curseur, par exemple « 3:00 pm ».

Une ligne sous les réglages indique où se trouve le soleil, par exemple « Soleil à 52° au-dessus, à 250° du nord. Le nord est l'axe vert. » La nuit, elle indique « Le soleil est couché à cette heure. »

Un nouveau modèle démarre avec le soleil au 21 juin à 3:00 pm, à la latitude 40, la longitude -105 et le décalage UTC -7.

## Orienter le modèle vers le nord

Le nord de ModelCraft est toujours l'**axe vert**. Pour étudier un site réel, tournez le modèle pour que son côté nord soit aligné sur le vert : sélectionnez tout ({{key:Mod+A}}), appuyez sur {{key:Q}}, cliquez sur un centre au sol, puis tournez le modèle de l'angle du site par rapport au nord (voir [Rotation et échelle](topic:rotate-scale)).

## Une étude solaire

1. Réglez le lieu et la date.
2. Ajoutez une scène ({{ui:Ajouter une scène}} dans {{ui:Scènes}}).
3. Déplacez le curseur d'heure, puis ajoutez une autre scène. Répétez pour chaque heure voulue.
4. Cliquez sur {{ui:Lecture}} pour les parcourir. Voir [Enregistrer des vues comme scènes](topic:scenes).

## À savoir

- Les ombres peuvent paraître dentelées sur un très grand modèle, car une seule carte d'ombres couvre tout le modèle.
- Les ombres ne sont pas dessinées en {{ui:Filaire}}.
- La position du soleil suit le calcul solaire de la NOAA et est précise à une fraction de degré, ce qui suffit pour les études de volumes. La réfraction atmosphérique est ignorée : les angles très bas, près du lever et du coucher du soleil, peuvent donc être légèrement décalés.

## Vue de présentation

{{ui:Vues}} › {{ui:Vue de présentation}} (ou {{key:Shift+P}}) n'affiche que le modèle : les axes, les lignes et points-guides, le contour des plans de coupe (la coupe reste), les marques des lampes, la boîte d'un groupe ouvert, les marques et info-bulles d'accrochage, et la surbrillance de sélection disparaissent. Utilisez-la pour examiner le modèle clairement ou avant une capture d'écran. Les outils fonctionnent toujours et s'accrochent toujours ; vous ne voyez simplement plus les marques. Appuyez à nouveau sur {{key:Shift+P}} pour les rétablir. Les cotes restent, car elles font partie du dessin. Pendant que vous modifiez à l'intérieur d'un groupe, le reste du modèle ne s'estompe plus : il s'affiche tel quel, textures comprises.
