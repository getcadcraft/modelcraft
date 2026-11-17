---
title: Export modelu pre iné programy
summary: Vyberte správny export pre renderovanie, web, 3D tlač, BIM a BimCraft a skontrolujte, čo každý z nich zachová.
keywords: tlač, 3mf, pdf, papier, obrázok, png, fotografia, snímka obrazovky, render, uložiť pohľad, export, zdieľanie, renderovanie, gltf, glb, collada, dae, obj, stl, 3D tlač, ifc, bim, bimcraft, poslať, iný softvér
from: 9e13e80d
---

Export vytvorí kópiu modelu v inom formáte. Súbor `.modelcraft` si ponechajte tiež: je to jediný súbor, ktorý zachová všetko, a jediný, ktorý ModelCraft otvorí priamo.

## Export

1. Najprv uložte ({{key:Mod+S}}), aby bol váš pracovný súbor v bezpečí.
2. Kliknite na {{ui:Exportovať}} v skupine {{ui:Súbor}}.
3. Vyberte formát. Prehliadač ho stiahne a pomenuje ako model.

Exportuje sa celý model. Ak chcete exportovať jednu časť, uložte, zmažte zvyšok, exportujte a potom vráťte späť alebo znova otvorte súbor.

## Ktorý formát

| Chcete | Vyberte | Poznámky |
|---|---|---|
| Otvoriť v inom 3D modelovacom programe | {{ui:Collada (.dae)}} | Zachová skupiny, vnorené skupiny, komponenty (zdieľané, nekopírované), názvy a farby. Z nahor, metre. |
| Vyrenderovať ho alebo použiť vo vizualizačnom programe | {{ui:OBJ (.obj)}} alebo {{ui:Binárny glTF (.glb)}} | OBJ je najčítanejší formát; každé umiestnenie skupiny zapisuje ako samostatný objekt, ale nemá farby ani zdieľané komponenty. glTF zachováva komponenty a farby. |
| Dať na web, do herného enginu alebo do AR | {{ui:Binárny glTF (.glb)}} | Jeden súbor so všetkým obsahom. |
| Vytlačiť v 3D | {{ui:Skontrolovať pre 3D tlač (STL alebo 3MF)…}} | Skontroluje, či je model uzavretý a plochy majú správny smer, a potom zapíše STL alebo 3MF v milimetroch. Pozrite [Príprava modelu na 3D tlač](topic:print-3d). {{ui:STL na tlač (.stl, milimetre)}} zapíše celý model bez kontroly. |
| Otvoriť v BimCraft alebo inom BIM programe | {{ui:IFC pre BimCraft (.ifc)}} | Každá skupina alebo komponent najvyššej úrovne sa stane jedným stavebným prvkom. |

Stavový riadok potvrdí každý export, napríklad "Súbor House.stl bol exportovaný (milimetre)." alebo "Súbor House.dae bol exportovaný (Collada 1.4.1, Z nahor, metre; komponenty zostanú zdieľané)."

## Pred exportom

- **Zoskupte objekty.** Collada, glTF a IFC zachovávajú skupiny a komponenty ako samostatné objekty. Voľná geometria sa exportuje ako jeden celok; v IFC sa stane jedným prvkom s názvom "Loose geometry".
- **Pomenujte ich.** Názvy skupín a komponentov sa zapíšu do Collada a IFC, takže múr s názvom "Severný múr" sa prenesie ako "Severný múr".
- **Skontrolujte smer plôch.** Plochy zobrazujúce modrosivú farbu na vonkajšej strane budú pri exporte smerovať dovnútra. Opravte ich pomocou {{ui:Obrátiť plochu}} (pozrite [Zmazanie a vyčistenie](topic:erase#a-face-facing-the-wrong-way)).
- **Pri 3D tlači** urobte z častí uzavreté telesá: vyberte každú skupinu a skontrolujte, či {{ui:Informácie o entite}} uvádza "Teleso: Áno". Potom zmeňte mierku modelu na veľkosť tlače alebo ju zmeňte v softvéri tlačiarne.

## Odoslanie modelu do BimCraft

1. Každú časť budovy urobte ako skupinu alebo komponent a pomenujte ju.
2. Zvoľte {{ui:Exportovať}}, potom {{ui:IFC pre BimCraft (.ifc)}}.
3. Otvorte stiahnutý súbor `.ifc` v BimCraft.

Pre koncepčné hmoty použite namiesto toho {{ui:Exportovať}} › {{ui:Hmoty do BimCraft…}}: každá skupina sa pošle ako variant hmoty s podlažiami, plochami podlaží a objemom. Pozrite [Odoslanie hmôt do BimCraft](topic:massing-to-bimcraft).

Bežný export IFC nemá priame prepojenie medzi oboma aplikáciami. IFC má jedno podlažie a každý prvok je všeobecný zástupný prvok stavby bez typu alebo vlastností: nesie iba tvar a názov. Uzavreté skupiny sa stanú telesami; otvorené sa stanú plochami.

## Úsečky bez plôch

Hrany, ktoré nie sú súčasťou žiadnej plochy (čiary podobné pomocným čiaram, importovaný situačný plán), sa exportujú do OBJ a Collada ako čiary. glTF a STL pre ne nemajú miesto a vynechajú ich. Pomocné čiary a {{ui:Scény}} sa neexportujú do žiadneho formátu.

## Uloženie pohľadu ako obrázok

{{ui:Exportovať}} › {{ui:Obrázok pohľadu (.png)}} uloží presne to, čo zobrazuje 3D pohľad, vo veľkosti na obrazovke. {{ui:Obrázok v dvojnásobnej veľkosti (.png)}} ho uloží dvojnásobne širší a dvojnásobne vyšší (na tlač alebo ostrú prezentáciu), pričom kóty a značky sa prekreslia v tejto veľkosti, namiesto aby sa roztiahli.

Pre obrázok, ktorý pôsobí ako denné svetlo (obloha, slnko, jemné tiene, sklo), použite namiesto toho {{ui:Exportovať}} › {{ui:Vykresliť obrázok…}}: pozrite [Vykreslenie obrázka](topic:render).

Pre čistý obrázok najprv zapnite [prezentačný pohľad](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): osi, pomocné čiary, obrysy rezov a výber sa vynechajú. Nastavte kameru, štýl a tiene podľa svojich predstáv, alebo prejdite na [scénu](topic:scenes); ak chcete uložiť pohyblivý film zo svojich scén, použite {{ui:Exportovať animáciu}} na paneli {{ui:Scény}}.

## Vytlačenie pohľadu alebo uloženie ako PDF

- {{ui:Exportovať}} › {{ui:PDF pohľadu (.pdf)}} uloží jednostranové PDF: pohľad vo dvojnásobku jeho veľkosti na obrazovke, s kótami, na stránke A4 (Letter, ak je model v stopách a palcoch), na šírku, s riadkom pod ním uvádzajúcim názov súboru, dátum a jednotku.
- {{ui:Exportovať}} › {{ui:Vytlačiť pohľad…}} zobrazí rovnakú stránku v dialógovom okne tlače vášho prehliadača. Vyberte tlačiareň alebo "Uložiť ako PDF".

Stránka zobrazuje pohľad taký, aký je: na perspektívnom pohľade nie je žiadna mierka. Ak chcete výkres v mierke, vypnite {{ui:Perspektíva}}, prepnite na pohľad {{ui:Zhora}} alebo {{ui:Spredu}} a pridajte [kóty](topic:dimensions) pre rozmery, na ktorých záleží. [Prezentačný pohľad](topic:styles-shadows#presentation-view) vynechá osi, pomocné čiary a výber; kóty zostanú.
