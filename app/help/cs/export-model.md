---
title: Export modelu pro jiné programy
summary: Vyberte správný export pro vykreslení, web, 3D tisk, BIM a BimCraft a zkontrolujte, co který zachová.
keywords: tisk, 3mf, pdf, papír, obrázek, png, snímek, snímek obrazovky, uložit pohled, export, sdílet, vykreslení, gltf, glb, collada, dae, obj, stl, 3D tisk, ifc, bim, bimcraft, odeslat, jiné programy
from: 9e13e80d
---

Export vytvoří kopii modelu v jiném formátu. Uchovejte i svůj soubor `.modelcraft`: je to jediný soubor, který uchovává vše, a jediný, který ModelCraft otevře přímo.

## Export

1. Nejprve uložte ({{key:Mod+S}}), aby byl váš pracovní soubor v bezpečí.
2. Klikněte na {{ui:Export}} ve skupině {{ui:Soubor}}.
3. Vyberte formát. Prohlížeč jej stáhne, pojmenovaný podle modelu.

Exportuje se celý model. Chcete-li exportovat jednu část, uložte, smažte zbytek, exportujte a pak vraťte změny zpět nebo soubor znovu otevřete.

## Který formát

| Chcete | Vyberte | Poznámky |
|---|---|---|
| Otevřít v jiném 3D modeláři | {{ui:Collada (.dae)}} | Zachová skupiny, vnořené skupiny, komponenty (sdílené, ne kopírované), názvy a barvy. Osa Z nahoru, metry. |
| Vykreslit nebo použít ve vizualizačním programu | {{ui:OBJ (.obj)}} nebo {{ui:glTF binary (.glb)}} | OBJ je nejrozšířenější; zapisuje umístění každé skupiny jako samostatný objekt, ale nemá barvy ani sdílené komponenty. glTF zachovává komponenty a barvy. |
| Dát na web, do herního enginu nebo do AR | {{ui:glTF binary (.glb)}} | Jeden soubor se vším. |
| Vytisknout v 3D | {{ui:Check for 3D printing (STL or 3MF)…}} | Ověří, že je model uzavřený a plochy směřují správně, a pak zapíše STL nebo 3MF v milimetrech. Viz [Příprava modelu pro 3D tisk](topic:print-3d). {{ui:STL for printing (.stl, millimeters)}} zapíše celý model bez kontroly. |
| Otevřít v BimCraftu nebo jiném BIM programu | {{ui:IFC for BimCraft (.ifc)}} | Každá skupina nebo komponenta nejvyšší úrovně se stane jedním stavebním prvkem. |

Stavový řádek potvrdí každý export, například "Exportováno House.stl (milimetry)." nebo "Exportováno House.dae (Collada 1.4.1, Z nahoru, metry; komponenty zůstávají sdílené)."

## Před exportem

- **Seskupte objekty.** Collada, glTF a IFC zachovávají skupiny a komponenty jako samostatné objekty. Volná geometrie se exportuje jako jeden celek; v IFC se stane jedním prvkem nazvaným "Loose geometry".
- **Pojmenujte je.** Názvy skupin a komponent jdou do Collada a IFC, takže zeď nazvaná "Severní zeď" se dostane jako "Severní zeď".
- **Zkontrolujte směr ploch.** Plochy modrošedé na vnějšku budou v exportu směřovat dovnitř. Opravte je pomocí {{ui:Obrátit plochu}} (viz [Mazání a úklid](topic:erase#a-face-facing-the-wrong-way)).
- **Pro tisk:** udělejte části uzavřenými tělesy: vyberte každou skupinu a zkontrolujte, že {{ui:Informace o prvku}} říká "Těleso: Ano". Pak model zvětšete nebo zmenšete na velikost tisku, nebo jej upravte v softwaru tiskárny.

## Odeslání modelu do BimCraftu

1. Každou část budovy udělejte skupinou nebo komponentou a pojmenujte ji.
2. Vyberte {{ui:Export}}, pak {{ui:IFC for BimCraft (.ifc)}}.
3. Otevřete stažený soubor `.ifc` v BimCraftu.

Pro koncepční hmoty použijte místo toho {{ui:Export}} › {{ui:Massing to BimCraft…}}: každá skupina se odešle jako varianta hmoty s podlažími, plochami podlaží a objemem. Viz [Odeslání hmot do BimCraftu](topic:massing-to-bimcraft).

Prostý export IFC nemá přímé propojení mezi oběma aplikacemi. IFC obsahuje jedno podlaží a každý prvek je obecný proxy prvek stavby bez typu a vlastností: nese pouze tvar a název. Uzavřené skupiny se stanou plnými tvary; otevřené se stanou plochami.

## Čáry bez ploch

Hrany, které nejsou součástí žádné plochy (vodítkové čáry, importovaný situační plán), jdou do OBJ a Collada jako čáry. glTF a STL pro ně nemají místo a vynechají je. Vodítka a scény se nikam neexportují.

## Uložení pohledu jako obrázku

{{ui:Export}} › {{ui:Image of the view (.png)}} uloží přesně to, co ukazuje 3D pohled, v jeho velikosti na obrazovce. {{ui:Image at twice the size (.png)}} jej uloží dvakrát širší a dvakrát vyšší (pro tisk nebo ostrou prezentaci), přičemž kóty a značky se překreslí v této velikosti, nikoli roztáhnou.

Pro obrázek, který vypadá jako denní světlo (obloha, slunce, měkké stíny, sklo), použijte místo toho {{ui:Export}} › {{ui:Render a picture…}}: viz [Vykreslení obrázku](topic:render).

Pro čistý obrázek nejprve zapněte [prezentační zobrazení](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): osy, vodítka, obrysy řezů a výběr se vynechají. Nastavte kameru, styl a stíny podle svého, nebo přejděte na [scénu](topic:scenes); chcete-li uložit pohyblivý film svých scén, použijte {{ui:Export animation}} v panelu {{ui:Scenes}}.

## Tisk pohledu nebo uložení jako PDF

- {{ui:Export}} › {{ui:PDF of the view (.pdf)}} uloží jednostránkové PDF: pohled ve dvojnásobné velikosti obrazovky s kótami, na stránce A4 (Letter, pokud je model ve stopách a palcích), na šířku, s čárou pod ním s názvem souboru, datem a jednotkou.
- {{ui:Export}} › {{ui:Print the view…}} dá stejnou stránku do dialogu tisku prohlížeče. Vyberte tiskárnu, nebo "Uložit jako PDF".

Stránka zobrazuje pohled tak, jak je: u perspektivního pohledu není žádné měřítko. Pro výkres v měřítku vypněte {{ui:Perspective}} a dívejte se z {{ui:Top}} nebo {{ui:Front}}, a přidejte [kóty](topic:dimensions) pro důležité rozměry. [Prezentační zobrazení](topic:styles-shadows#presentation-view) vynechá osy, vodítka a výběr; kóty zůstanou.
