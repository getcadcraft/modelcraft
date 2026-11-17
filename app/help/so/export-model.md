---
title: Soo saar moodel barnaamijyo kale
summary: Dooro soo-saarista saxda ah ee rendarka, webka, daabacaadda 3D, BIM iyo BimCraft, oo hubi waxa kasta oo ay ilaalinayso.
keywords: daabac, 3mf, pdf, warqad, sawir, rendar, kaydi muuqaalka, soo saar, la wadaag, gltf, glb, collada, dae, obj, stl, daabacaadda 3d, ifc, bim, bimcraft, dir, barnaamijyo kale, screenshot
from: 9e13e80d
---

Soo saar wuxuu sameeyaa nuqul moodelka qaab kale ah. Faylka `.modelcraft` sidoo kale ilaali: waa faylka kaliya ee wax walba ilaaliya, iyo kaliya ModelCraft si toos ah u furta.

## Soo saar

1. Marka hore kaydi ({{key:Mod+S}}), si faylkaaga shaqada uu ammaan ugu noqdo.
2. Riix {{ui:Soo saar}} kooxda {{ui:Fayl}}.
3. Dooro qaabka. Browser-ku wuu soo dejiyaa, magaca moodelka u eg.

Moodelka oo dhan ayaa la soo saaraa. Si aad mid qayb ah u soo saarto, kaydi, tirtir inta kale, soo saar, kadibna ka noqo ama mar kale fur.

## Qaab ayaa la doonayo

| Waxaad rabtaa inaad | Dooro | Qoraalo |
|---|---|---|
| Ku fur modeler 3D kale | {{ui:Collada (.dae)}} | Wuxuu ilaalinayaa kooxaha, kooxaha ku jira kooxda kale, qaybaha (la wadaago, lagama nuqlo), magacyada iyo midabka. Z sare, mitir. |
| Rendar u samee, ama isticmaal barnaamij muuqaal-sawirid | {{ui:OBJ (.obj)}} ama {{ui:glTF binary (.glb)}} | OBJ ayaa ugu badan la akhriyaa; wuxuu qoraa meel kasta oo kooxda ah shay gaar ah, laakiin midab ma lahan iyo qaybo la wadaago ma lahan. glTF wuxuu ilaalinayaa qaybaha iyo midabka. |
| Ku dhig webka, mishiinka ciyaarta ama AR | {{ui:glTF binary (.glb)}} | Hal fayl oo wax walba ku jira. |
| Daabac 3D | {{ui:Hubi daabacaadda 3D (STL ama 3MF)…}} | Wuxuu hubiyaa in moodelku xidhan yahay oo wajiyadu saxda ku jiraan, kadibna wuxuu qoraa STL ama 3MF millimitir. Eeg [Diyaari moodelka daabacaadda 3D](topic:print-3d). {{ui:STL oo loo daabacayo (.stl, millimitir)}} wuxuu qoraa moodel oo dhan hubin la'aan. |
| Ku fur BimCraft ama barnaamij BIM kale | {{ui:IFC oo loogu talagalay BimCraft (.ifc)}} | Koox kasta ama qayb kasta oo sare waxay noqotaa hal qayb dhismeed. |

Bar xaaladda mid kasta oo soo saarid wuu xaqiijiyaa, tusaale ahaan "Waa la soo saaray House.stl (millimitir)." ama "Waa la soo saaray House.dae (Collada 1.4.1, Z sare, mitir; qaybaha way la wadaagaan)."

## Ka hor intaadan soo saarin

- **Kooxi shayadaada.** Collada, glTF iyo IFC waxay ilaaliyaan kooxaha iyo qaybaha shay gooni ah. Joomatari furan waxay u baxdaa mid ah hal dhigan; IFC-na waxay noqotaa hal qayb oo la yiraahdo "Loose geometry".
- **Magaci u bixi.** Magacyada kooxda iyo qaybaha waxay galaan Collada iyo IFC, sidaas darteed darbi loo yaqaan "North wall" wuxuu imanayaa sidaas oo kale "North wall".
- **Hubi jihada wajiga.** Wajiyada muujinaya buluug-cirro dibadda waxay u jeedi doonaan gudaha soo saarista. Ku saxo {{ui:Rogi wajiga}} (eeg [Tirtir iyo nadiifi](topic:erase#a-face-facing-the-wrong-way)).
- **Daabacaadda,** samee qaybaha jireed xidhan: dooro koox kasta oo hubi in {{ui:Macluumaadka}} leeyahay "Jireed: Haa". Kadibna cabbir moodelka cabbirka la daabacayo, ama ku cabbir software-ka daabacaha.

## Moodel u dir BimCraft

1. Qayb kasta oo dhismeed u samee koox ama qayb, oo magac u bixi.
2. Dooro {{ui:Soo saar}}, kadibna {{ui:IFC oo loogu talagalay BimCraft (.ifc)}}.
3. Fur faylka `.ifc` ee la soo dejiyay BimCraft.

Qaabka qaabeynta fikradda, isticmaal {{ui:Soo saar}} › {{ui:Massing u dir BimCraft…}}: koox kasta waxay u baxdaa ikhtiyaar qaabeyn oo leh dabaqyo, bedka dabaqyada iyo mugga. Eeg [U dir qaabeynta BimCraft](topic:massing-to-bimcraft).

Soo saarista IFC ee caadiga ah ma leh xidhiidh toos ah labada barnaamij dhexdooda. IFC-ku wuxuu leeyahay hal dabaq, geesi kasta waa wakiil guud oo qayb dhismeed ah oo aan nooc ama hanti lahayn: wuxuu qaadaa qaabka iyo magaca oo keliya. Kooxaha xidhan waxay noqdaan qaabab jir ah; kuwa furan waxay noqdaan dusha.

## Sawirka muuqaalka ahaan

{{ui:Soo saar}} › {{ui:Sawirka muuqaalka (.png)}} wuxuu kaydiyaa waxa uu muujinayo muuqaalka 3D si sax ah, cabbirka shaashadda. {{ui:Sawirka laba jeer cabbirka (.png)}} wuxuu kaydiyaa laba jeer ballac iyo laba jeer dherer (daabacaad ama slaayd cad), cabbirrada iyo calaamadaha cabbirkaas ayaa dib loo sawiraa halkii la fidin lahaa.

Sawir u eg iftiinka maalinta (samada, qorraxda, hooska jilicsan, muraayadda), isticmaal {{ui:Soo saar}} › {{ui:Rendar sawir…}} halkaas: eeg [Rendar sawir](topic:render).

Sawir nadiif ah, marka hore kor u qor [muuqaalka soo bandhigga](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): dhidibbada, hagayaasha, khadadka qaybta iyo doorashada ayaa la ka saaraa. Kamarada, qaabka iyo hooska u dejiso sidaad rabto, ama tag [muuqaal](topic:scenes); si aad filim dhaqdhaqaaq ah u kaydiso muuqaalladaada, isticmaal {{ui:Soo saar dhaqdhaqaaq}} gudaha gunta {{ui:Muuqaallada}}.

## Daabac muuqaalka, ama kaydi PDF

- {{ui:Soo saar}} › {{ui:PDF muuqaalka (.pdf)}} wuxuu kaydiyaa PDF hal bog ah: muuqaalka laba jeer cabbirka shaashadda, cabbirradiisa, bog A4 ah (Letter markii moodelku yahay fit iyo inji), jiifka, iyo xariiq hoose oo sheegaysa magaca faylka, taariikhda iyo unitiga.
- {{ui:Soo saar}} › {{ui:Daabac muuqaalka…}} isla bogaas wuxuu geeyaa hortaagga daabacaadda browser-kaaga. Dooro daabaca, ama "Kaydi sida PDF".

Bogu wuxuu muujinayaa muuqaalka sida uu yahay: muuqaalka perspektiifka ma leh miisaan. Sawir miisaan leh, {{ui:Perspektiif}} demi oo ka eeg {{ui:Sare}} ama {{ui:Hore}}, kuna dar [cabbirro](topic:dimensions) cabbirrada muhiimka ah. [Muuqaalka soo bandhigga](topic:styles-shadows#presentation-view) wuxuu ka saaraa dhidibbada, hagayaasha iyo doorashada; cabbirradu way sii jiraan.
