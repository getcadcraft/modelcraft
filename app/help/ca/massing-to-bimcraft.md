---
title: Envia la volumetria a BimCraft
summary: Passeu la volumetria feta amb prem/estira a BimCraft com a opcions de volumetria, amb plantes, ocupació en planta, superfície construïda bruta i volum calculats per a cada sòlid.
keywords: volumetria, massa, concepte, opcions, bimcraft, ifc, bim, prem/estira, plantes, pisos, superfície construïda bruta, ocupació en planta, volum, enviar, lliurar, massa d'edifici, fase 2
from: 73c51f3f
---

## Què fareu

Convertiu els blocs que heu modelat amb prem/estira en opcions de volumetria que BimCraft entén, perquè el concepte continuï com a model d'edifici.

## Abans de començar

Feu que cada massa sigui un **grup** o un **component** i doneu-li un nom. Cadascun esdevé una opció. La geometria solta no s'envia.

## Envia-la

1. Seleccioneu els grups a enviar. Sense res seleccionat, s'envien tots els grups i components de nivell superior.
2. Trieu {{ui:Export}} i després {{ui:Massing to BimCraft…}}.
3. Escriviu el {{ui:Name of the option set}} i l'{{ui:Floor height}}.
4. Reviseu la llista: les plantes de cada opció, l'ocupació en planta, la superfície construïda bruta i el volum.
5. Trieu **Envia a BimCraft** per obrir BimCraft en una pestanya nova amb les opcions, o {{ui:Save as IFC}} per baixar el fitxer i obrir-lo allà vosaltres.

A BimCraft, les opcions apareixen llistades sota "Opcions de volumetria al model", on se'n pot fer l'opció actual i desenvolupar-la en murs i forjats.

## Com es converteix un sòlid en volumetria

- **Les plantes** són l'alçada del sòlid dividida per l'alçada de planta, arrodonida, i com a mínim una. Les plantes es reparteixen després l'alçada del sòlid per igual, així que un bloc de 10 m amb plantes de 3 m té 3 plantes de 3.33 m.
- **L'àrea d'una planta** és l'àrea de la secció horitzontal pròpia del sòlid al nivell d'aquella planta. Un bloc que es retreu té les plantes de dalt més petites, i la superfície construïda bruta és la suma d'elles.
- **L'ocupació en planta** és el contorn de la secció just per sobre de la base del sòlid.
- **El volum** és el del mateix sòlid.

Al fitxer IFC, cada opció és un element proxy d'edifici (l'ocupació en planta elevada fins a l'alçada del sòlid) amb un espai per planta que porta la superfície bruta de la planta. Totes les opcions comparteixen un edifici, amb tantes plantes com la més alta de les opcions.

## Formes simplificades

Un bloc vertical i simple s'envia exactament com el vau modelar. Qualsevol altra cosa també s'envia, i la llista indica per què la seva forma està simplificada:

- **No totes les seves plantes tenen la mida de la base** (es retreu o té pendent): la volumetria a BimCraft és el contorn de la base elevat fins a l'alçada total, però les àrees de planta i el volum són els del sòlid.
- **El sòlid no està tancat**: les plantes la secció de les quals no es pot tancar no es mesuren i compten com a zero. Tanqueu el sòlid ({{ui:Entity info}} diu "Sòlid: Sí") per obtenir xifres completes.
- **La seva base té més d'un contorn**: s'utilitza el més gran com a ocupació en planta.

## A tenir en compte

- {{ui:IFC for BimCraft (.ifc)}} és una exportació diferent: només envia formes i noms, sense plantes ni àrees.
- No es puja res. El fitxer es passa a la pestanya de BimCraft d'aquest ordinador.
