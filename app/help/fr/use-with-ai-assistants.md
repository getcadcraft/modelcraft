---
title: Utiliser ModelCraft avec un assistant IA
summary: Laissez votre propre assistant IA ou script examiner le modèle et créer des solides simples : autorisations, connexion via CadCraft Studio et journal d'activité.
keywords: ia, assistant, agent, mcp, model context protocol, script, automatisation, modélisation, boîte, cylindre, rendu, file de rendu, autorisations, déconnecter, activité
from: 629cd0b7
---

## Ce que vous allez apprendre

Comment laisser un assistant IA (ou un script que vous avez écrit) travailler avec ModelCraft, et décider de ce qu'il a le droit de modifier.

ModelCraft n'a **pas d'IA propre** et n'envoie rien nulle part. Vous apportez l'assistant : tout programme qui parle le Model Context Protocol (MCP). ModelCraft lui fournit seulement des outils, et c'est vous qui choisissez lesquels.

## Activer

1. Ouvrez {{ui:Paramètres}} (l'engrenage de la barre d'application, ou {{key:Mod+,}}) et allez dans l'onglet {{ui:ModelCraft}}.
2. Sous {{ui:Assistants}}, cochez **Autoriser les assistants IA et les scripts à utiliser ModelCraft**. Elle reste désactivée tant que vous ne l'avez pas cochée.
3. Choisissez ce qu'il peut faire : **Lecture** est cochée au départ ; cochez **Modifier**, **Enregistrer** ou **Exporter** seulement lorsque vous en avez besoin.

Les outils en dehors des autorisations cochées ne sont pas proposés à l'assistant ; s'il en demande un malgré tout, ModelCraft le refuse et l'inscrit dans le journal d'activité. Désactiver le commutateur met fin immédiatement à toutes les connexions ; {{ui:Réinitialiser les paramètres de ModelCraft}} le désactive aussi.

## Connecter votre assistant

Les assistants se connectent via **CadCraft Studio** sur votre ordinateur : Studio lance un petit serveur que seul cet ordinateur peut atteindre, protégé par un jeton qu'il crée à chaque démarrage. Dans Studio, choisissez {{ui:Connecter un assistant}} et copiez l'adresse et le jeton dans votre assistant (Studio affiche les réglages exacts à coller). Ne partagez jamais le jeton.

:::note
Un onglet de navigateur ne peut pas ouvrir de connexion pour un assistant : dans les applications web, le commutateur n'a aucun effet tant que vous n'utilisez pas CadCraft Studio sur votre ordinateur.
:::

## Vous gardez le contrôle

- **Chaque modification est une seule étape d'annulation**, libellée avec le nom que lui donne l'assistant (par exemple « Assistant : boîte »). {{key:Mod+Z}} annule la dernière modification de l'assistant dans son ensemble.
- **Vous savez quand un assistant est connecté.** Un bouton de la barre d'application affiche le nom de l'assistant tant qu'il est connecté ; cliquez dessus pour voir ce qu'il peut faire, ou pour le **Déconnecter**.
- **Activité.** {{ui:Paramètres}} › {{ui:ModelCraft}} › {{ui:Assistants}} › {{ui:Activité}} liste chaque appel : quand, quel outil, terminé ou refusé. {{ui:Enregistrer le journal}} en garde une copie.

## Ce qu'un assistant peut demander

| Outil | Autorisation | Ce qu'il fait |
|---|---|---|
| `app_info`, `model_describe` | Lecture | L'unité du modèle, sa taille, et chaque groupe et composant avec sa position, s'il s'agit d'un solide fermé et son volume |
| `view_screenshot` | Lecture | Une image de la vue 3D telle qu'elle est affichée |
| `box_add`, `cylinder_add` | Modifier | Une boîte ou un cylindre sous forme de nouveau groupe, à l'emplacement et à la taille que vous ou l'assistant indiquez (« 3m », « 10' » ou un nombre dans l'unité du modèle) |
| `instance_move`, `instances_erase` | Modifier | Déplace ou efface des groupes et des composants |
| `faces_list`, `materials_list` | Lecture | Les faces d'un groupe ou de la géométrie libre (direction, aire et centre de chacune) ; les matériaux et couleurs qu'il peut appliquer |
| `push_pull` | Modifier | Pousse ou tire une face, comme le fait {{ui:Pousser/tirer}} |
| `paint` | Modifier | Peint des faces ou un groupe entier avec une couleur ou un matériau |
| `group_make` | Modifier | Crée un groupe ou un composant à partir de faces et de groupes libres |
| `scene_add`, `scene_show` | Modifier | Enregistre la vue comme scène ; passe à une scène enregistrée |
| `mesh_add` | Modifier | Un objet maillage pour partir d'une base (cube, sphère, cylindre …), comme l'ajoute l'espace Maillage |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Lecture / Modifier | La pile de modificateurs d'un maillage : miroir, réseau, subdivision, biseau et les autres ; rien n'est appliqué définitivement |
| `usd_export` | Exporter | Le modèle en OpenUSD (.usda, .usdc ou .usdz), comme l'enregistrement du modèle en USD écrit ([USD](topic:usd)) ; dans un dossier que vous avez autorisé dans Studio, sinon un téléchargement |
| `render_still` | Exporter | Une image rendue de la vue ou d'une scène enregistrée, comme le fait le bouton {{ui:Rendu}} de la boîte de dialogue Rendu, avec vos réglages de rendu sauf s'il en demande d'autres (un préréglage de scène : extérieur, intérieur, coupe, nuit ou auto ; rapide ou haute qualité, taille, échantillons, ciel) ; un PNG qu'il peut examiner, ou un fichier PNG, EXR ou de rendu dans un dossier que vous avez autorisé dans Studio ([Calculer un rendu](topic:render)) |
| `render_queue` | Exporter | Ajoute des images haute qualité à la file de la boîte de dialogue Rendu (la vue, ou des scènes enregistrées) et lance la file ; les images terminées vont dans un dossier autorisé, ou restent dans la {{ui:File de rendu}} de la boîte de dialogue pour vous. Nécessite WebGPU |
| `link_push` | Modifier | Met à jour un modèle lié depuis un autre programme (voir [Garder un modèle .3dm en direct](topic:live-3dm-link)) |
| `link_status` | Lecture | Indique si un modèle lié est toujours là et quand il a été mis à jour pour la dernière fois |
| `undo` | Modifier | Annule ses propres étapes |

Les solides créés par un assistant arrivent sous forme de groupes, si bien qu'ils ne fusionnent jamais avec ce que vous avez dessiné. Aucun outil n'enregistre le modèle : l'enregistrement reste de votre ressort, et l'export ou le rendu exige que **Exporter** soit coché. Un rendu ne modifie rien dans le modèle ; le rendu d'une scène enregistrée déplace la vue vers elle, comme le fait {{ui:Scènes}}.

## Si quelque chose ne fonctionne pas

- **L'assistant ne voit aucun outil ModelCraft :** vérifiez que le commutateur est activé dans cette fenêtre, et que la fenêtre est ouverte dans Studio.
- **« needs the edit permission » :** cochez **Modifier** sous {{ui:Assistants}}, puis redemandez. (Message : « nécessite l'autorisation de modification ».)
- **Erreurs « 401 » ou « jeton » :** le jeton a changé (Studio a redémarré, ou {{ui:Nouveau jeton}}). Copiez le nouveau dans les réglages de l'assistant.

## Voir aussi

- [Recettes pour les assistants IA](common:assistants-recipes) : exemples détaillés, chacun avec les outils qu'il appelle.
