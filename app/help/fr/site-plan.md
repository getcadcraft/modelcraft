---
title: Modéliser sur un plan de site à partir d'un DWG ou d'un DXF
summary: Importez un plan de site ou d'étage CAO comme lignes au sol, répondez à la question des unités, puis tracez-le en faces et volumes.
keywords: plan de site, dwg, dxf, cao, importer, croquis, photo de croquis, croquis à main levée, croquis sur serviette, photo, papier, couleurs de stylo, blocs dynamiques, états de visibilité, texte, hachure, spline, ellipse, face 3d, tracer, plan d'étage, lot, limite de propriété, unités, fond de plan, contexte
from: 3415dc96
---

ModelCraft peut importer les lignes d'un dessin CAO 2D, d'un plan de site ou d'un plan d'étage, et les poser au sol pour que vous puissiez modéliser par-dessus.

## Importer le dessin

1. Cliquez sur {{ui:Import}} dans le groupe {{ui:File}} (ou déposez le fichier dans la vue 3D).
2. Choisissez un fichier `.dwg` ou `.dxf`.

   Un DWG volumineux prend un moment : la barre d'état affiche « Lecture de plan.dwg… » jusqu'à ce qu'il soit chargé.

3. Si le dessin n'indique pas ses unités, une boîte de dialogue intitulée « Unités du dessin » demande : « Quelle est la valeur d'une unité de dessin ? » Choisissez {{ui:Inches}}, {{ui:Feet}}, {{ui:Millimeters}} ou {{ui:Meters}}. La plupart des plans de site américains sont dessinés en pieds, les plans architecturaux en pouces, et les plans métriques en millimètres.

   Le dessin arrive sous forme de groupe d'arêtes au sol, sélectionné, et la vue zoome dessus. La barre d'état indique le nombre d'arêtes importées, par exemple « site.dwg importé : 1697 arêtes au sol, dans un groupe. Décomposez-le pour dessiner directement dessus. »

## Ce qui est importé

- Lignes, polylignes (y compris leurs arcs), cercles et arcs, et blocs avec tout ce qu'ils contiennent, depuis l'**espace objet** seulement. Les courbes deviennent de courts segments droits.
- Lignes, polylignes, arcs, cercles, ellipses et splines se posent à plat sur le sol, sous forme d'arêtes.
- Les **hachures** deviennent des faces au sol, leurs îlots devenant des trous, pour que vous puissiez pousser/tirer une zone hachurée immédiatement.
- Les **faces 3D** et les remplissages de solides deviennent des faces ; les faces 3D gardent leurs hauteurs.
- Le **texte** (texte d'une ligne, texte multiligne et valeurs d'attributs) est dessiné sous forme d'arêtes dans une écriture simple à un trait, à la hauteur, à l'angle et à l'alignement propres du texte. Sa police n'est pas celle du dessin : les mots peuvent être un peu plus longs ou plus courts. Les caractères pour lesquels l'écriture n'a pas de forme sont dessinés sous forme de petites cases et comptés.
- Les **cotes** sont dessinées comme le dessin les montre (leurs lignes, flèches et textes, sous forme d'arêtes et de faces).
- Les **blocs dynamiques** arrivent tels que le dessin les montre : chaque bloc placé dans l'état de visibilité où il a été enregistré, et seulement les lignes de cet état. La barre d'état les liste avec les états affichés et les autres états de chacun, par exemple « Receptacle affiché en Duplex ×38, GFI ×7 (états : Duplex, GFI) ». ModelCraft ne change pas d'état.
- Les **solides 3D, régions et corps** (les données ACIS du dessin) arrivent comme leurs propres groupes : un solide fermé comme un solide, une région ou un corps ouvert comme des faces. Les faces planes arrivent entières ; les faces courbes (cylindres, cônes, sphères, tores, surfaces splines simples) arrivent sous forme de petits triangles aux arêtes douces entre eux, de sorte que seules les arêtes propres au solide apparaissent. Une face sur un autre type de surface est omise et listée : « Pas encore dessinés (solides 3D) : … ».
- Non importés : points, tableaux, multirepères, images et autres types d'objets. La barre d'état les liste par type, par exemple « Non importé : 12 POINT. ». Tout ce qui se trouve sur une présentation (espace papier) est aussi omis, sans être listé.
- Les calques ne sont pas conservés : toutes les lignes arrivent de la même façon.

Si le dessin est loin de son origine (coordonnées de plan d'état, par exemple), il s'importe quand même, mais il peut atterrir loin de l'origine de ModelCraft. Les dessins situés à plus de 10,000 km de leur origine sont refusés : rapprochez d'abord le dessin de 0,0 dans le logiciel de CAO.

## Tracer les faces

Les lignes importées se referment rarement d'elles-mêmes en faces. Deux façons de travailler :

**Garder le plan en fond de plan (recommandé)**

1. Laissez le plan dans son propre groupe.
2. Dessinez votre bâtiment par-dessus avec {{ui:Rectangle}} et {{ui:Line}}, en vous accrochant aux coins du plan (« Extrémité ») et à ses arêtes (« Sur une arête »).
3. Poussez vos faces vers le haut avec pousser/tirer. Le plan reste intact dessous, et vous pouvez effacer tout le groupe plus tard d'un seul clic.

L'accrochage fonctionne entre les groupes : vous pouvez vous accrocher aux coins du plan sans l'ouvrir.

**Dessiner sur les lignes du plan**

1. Sélectionnez le groupe du plan et cliquez sur {{ui:Explode}}. Ses lignes deviennent des arêtes libres.
2. Là où un contour fermé devrait être une face, dessinez une ligne par-dessus l'une de ses arêtes avec {{ui:Line}}, de coin à coin. Lorsque le contour est fermé et plat, la face se remplit en général. Sinon, cherchez un trou ou un chevauchement dans le contour et dessinez par-dessus.
3. Poussez-la avec pousser/tirer.

Cela fonctionne mieux sur un plan net. Sur un levé chargé, tracer par-dessus est plus rapide.

## Problèmes

- « Ceci est un DXF binaire. Enregistrez-le en DXF ASCII et réessayez. » Enregistrez de nouveau le DXF depuis le logiciel de CAO, au format ASCII (texte).
- « … ne contient aucune ligne, aucun arc ni cercle dans l'espace objet à importer. » Le dessin est probablement entièrement sur des présentations, ou ne contient que du texte et des hachures.
- « Ce dessin n'a pas pu être lu (…). Il est peut-être endommagé, ou enregistré dans une version DWG que le lecteur ne gère pas… » Les crochets indiquent la cause, par exemple « La version DWG AC1009 n'est pas prise en charge ». Enregistrez le dessin en DXF, ou en DWG de AutoCAD 2000 à 2018, depuis le logiciel de CAO.
- Le plan a la mauvaise taille : vous avez choisi la mauvaise unité. Annulez ({{key:Mod+Z}}) et réimportez, ou [mettez à l'échelle](topic:rotate-scale) le groupe par le bon facteur (12 entre pieds et pouces, 25.4 entre pouces et millimètres).

Pour transformer des courbes de niveau en terrain que vous pouvez sculpter, voir [Terrain](topic:terrain).

## Depuis une photo de croquis à la main

**Fichier › Importer une photo de croquis…** prend une photo d'un croquis sur papier (JPEG, PNG ou TIFF ; une photo prise directement avec un téléphone convient) et crée le même type d'arêtes au sol. Indiquez quel papier c'est (ou laissez-le le trouver, pris comme A4) et l'échelle du croquis, par exemple 1 : 100. Le bord de la feuille est repéré et la photo redressée, l'encre est tracée en lignes et arcs, et chaque couleur de stylo (noir, rouge, bleu, vert) devient un groupe à part avec une étiquette (**Croquis noir**, **Croquis rouge**, …), le tout dans un seul groupe nommé d'après la photo. C'est une seule étape d'annulation, et tout se passe sur cet ordinateur : rien n'est envoyé nulle part.

Lorsqu'aucun bord de feuille n'est trouvé, la photo entière est prise comme feuille et la ligne d'état le signale : mesurez quelque chose que vous connaissez et mettez le groupe à l'échelle s'il est faux. Tracez les lignes en faces comme ci-dessus.
