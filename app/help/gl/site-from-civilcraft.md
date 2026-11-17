---
title: Traer un emprazamento desde CivilCraft
summary: Abra o ficheiro de enderezo a emprazamento que crea CivilCraft e engada os edificios e a parcela ao redor como masas e unha liña de emprazamento, só os que marque.
keywords: emprazamento, civilcraft, enderezo, parcela, edificios veciños, masas, contexto, ccsite, datos abertos, openstreetmap
from: f28e4a3b
---

CivilCraft pode buscar un enderezo e gardar o que as fontes de datos abertos saben ao redor: edificios veciños, a parcela e os contornos de inundación, zonificación e solo. ModelCraft toma ese ficheiro como suxestións. Non se engade nada ata que o indique.

## Traer o ficheiro

1. En CivilCraft, envíe o emprazamento a ModelCraft, ou garde o ficheiro (remata en `.ccsite.json`).
2. En ModelCraft, abra ou solte o ficheiro. Ábrese unha lista cunha caixa de selección para cada edificio e para a parcela.
3. Escriba unha altura para os edificios cuxa fonte non ofreceu ningunha. Unha liña ao lado indica de onde vén a altura: o seu número de plantas a 3 m cada unha, ou a altura que escribiu.
4. Prema {{ui:Engadir os marcados}}.

Os edificios marcados convértense en masas extruídas nun compoñente, e a parcela, nunha liña ao redor do emprazamento. Todo queda nun só paso de desfacer. O punto do enderezo sitúase na orixe, en metros ao leste e ao norte dela.

Os contornos de inundación, zonificación e solo listanse só a título informativo; non se debuxan.

Os datos proceden de fontes abertas e a súa atribución aparece ao final da lista. As alturas que non foron dadas son supostos, así que compróbeas antes de fiarse delas.
