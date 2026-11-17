---
title: Matja dhe vendosja e udhëzuesve
summary: Lexo gjatësitë dhe sipërfaqet, mat midis dy pikash me shiritin e matjes, dhe shtro vija udhëzuese dhe pika mbi të cilat të vizatosh.
keywords: matje, shirit mase, transportir, këndi, udhëzues këndor, udhëzues, vijë udhëzuese, vijë ndërtimi, distanca, përmasë, gjatësia, sipërfaqja, ofset, shtrirje, pikë udhëzuese
from: de6d04d9
---

## Lexo madhësitë pa matur

Përzgjidh diçka dhe shiko {{ui:Informacioni i entitetit}}:

- Një brinjë tregon **gjatësinë** e saj.
- Një faqe tregon **sipërfaqen** e saj dhe sa vrima ka.
- Disa faqe tregojnë **sipërfaqen totale**.
- Një grup ose komponent tregon **madhësinë** e tij (gjerësi × thellësi × lartësi e kutisë përreth) dhe, nëse është trup i ngurtë i mbyllur, **vëllimin**.
- Kur nuk është përzgjedhur asgjë, {{ui:Informacioni i entitetit}} tregon madhësinë e të gjithë modelit.

Gjatësitë dhe sipërfaqet përdorin njësinë e zgjedhësit në fund djathtas. Një model në milimetra tregon sipërfaqe prej 0.01 m² e lart në metra katrorë (një dhomë 4 × 3 m shfaqet "12 m²").

Ndërsa vizaton, kutia e vlerës tregon gjatësinë, madhësinë, rrezen ose distancën të gjallë, kështu që rrallë të duhet të matësh më pas.

Për të ndryshuar një madhësi pas vizatimit, përzgjidh një brinjë ose grup dhe shkruaj përsëri gjatësinë ose madhësinë te {{ui:Informacioni i entitetit}}. Ose vendos një [përmasë](topic:dimensions) dhe shkruaj brenda saj një gjatësi të re.

## Mat midis dy pikash

1. Shtyp {{key:T}} për {{ui:Shirit mase}}.
2. Kliko një pikë: një qoshe, një mesi, një pike mbi një faqe, ose tokën. (Klikimi mbi një brinjë bën diçka tjetër; shih më poshtë.)
3. Lëviz te pika e dytë. Maja dhe kutia e vlerës ({{ui:Gjatësia}}) tregojnë distancën. Ngjitet te pikat dhe te drejtimet e kuqe, jeshile dhe blu.
4. Kliko. Shiriti i statusit thotë "U mat 4' 6"." dhe një **pikë udhëzuese** mbetet te pika e dytë.

Për ta lënë pikën udhëzuese në një distancë të saktë, shkruaje pas klikimit të parë dhe shtyp {{key:Enter}}: shkon në drejtimin ku po tregon.

## Vendos një vijë udhëzuese

Një vijë udhëzuese është një vijë me pika e pafundme, paralele me një brinjë, në një distancë që zgjedh ti. Përdor udhëzuesit për të shtruar një largësi mbrapa, një lartësi kati, ose ku fillon një dritare.

1. Shtyp {{key:T}}.
2. Kliko mbi një **brinjë** (jo mbi skajin e saj). Maja thotë "Mbi brinjë".
3. Lëviz larg brinjës, në anën ku duhet të shkojë udhëzuesi. Një vijë me pika ndjek, paralele me brinjën, dhe kutia e vlerës ({{ui:Ofset}}) tregon distancën.
4. Kliko, ose shkruaj ofsetin dhe shtyp {{key:Enter}}: `1.5m`, `5'`.

   Shiriti i statusit thotë "Vija udhëzuese 1.5 m larg brinjës."

Nisja mbi një vijë udhëzuese ekzistuese bën një udhëzues tjetër paralel me të, kështu që mund të zgjerosh një rrjetë nga një udhëzues.

Nëse shkruan një ofset pa u larguar fillimisht nga brinja, ModelCraft nuk mund të dallojë cilën anë do: "Lëviz larg brinjës fillimisht për të treguar cilën anë."

## Udhëzues me kënd: Transportir

1. Kliko {{ui:Transportir}} në grupin {{ui:Modifiko}}.
2. Kliko qendrën: pikën nëpër të cilën kalon udhëzuesi. Mbi një faqe, transportiri shtrihet mbi atë faqe; gjetiu shtrihet i sheshtë. Pas këtij klikimi, {{key:Right}}, {{key:Left}} ose {{key:Up}} e vendos drejt me të kuqen, jeshilen ose blunë (shtyp përsëri për ta zhbërë).
3. Kliko një pikë që përcakton 0°, për shembull përgjatë një brinjë.
4. Lëviz te këndi që dëshiron dhe kliko: ngjitet në hapa prej 15°. Ose shkruaj kënd në gradë, si `22.5`, dhe shtyp {{key:Enter}}; udhëzuesi shkon në anën ku është treguesi.

Vija udhëzuese kalon nëpër qendër me atë kënd. Vizato përgjatë saj me {{ui:Vijë}} për pjerrësinë e një çatie, një faskë ose një mur të prerë me kënd.

## Vizato kundër udhëzuesve

Veglat e vizatimit ngjiten te vijat udhëzuese ("Mbi udhëzues") dhe te pikat udhëzuese ("Pikë udhëzuese"), dhe aty ku një vijë udhëzuese pret një drejtim boshti. Nis një drejtkëndësh aty ku kryqëzohen dy udhëzues për ta vendosur saktë.

## Hiq udhëzuesit

- Një udhëzues: kliko me {{ui:Përzgjidh}} dhe shtyp {{key:Delete}}, ose kliko me {{ui:Gomë}}.
- Të gjithë udhëzuesit: pa asgjë të përzgjedhur, kliko {{ui:Fshi të gjithë udhëzuesit}} te {{ui:Informacioni i entitetit}}.

Udhëzuesit ruhen në skedarin `.modelcraft`. Nuk eksportohen në formate të tjera.
