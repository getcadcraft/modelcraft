---
title: Modelimi mbi një plan vendi nga DWG ose DXF
summary: Sillni një plan vendi ose kati CAD si vija mbi tokë, përgjigjuni pyetjes për njësitë, dhe gjurmojeni në sipërfaqe dhe masa.
keywords: plan vendi, dwg, dxf, cad, importo, skicë, foto skice, skicë me dorë, foto, letër, ngjyra e stilolapsit, blloqe dinamike, gjendje dukshmërie, tekst, vijëzim, spline, elips, sipërfaqe 3D, gjurmo, plan kati, parcelë, njësi, nënshtresë, kontekst
from: 3415dc96
---

ModelCraft mund të sjellë vijat e një vizatimi CAD 2D, një plani vendi ose një plani kati, dhe t'i vendosë mbi tokë që të modeloni mbi to.

## Importo vizatimin

1. Klikoni {{ui:Importo}} në grupin {{ui:Skedar}} (ose lëshoni skedarin mbi pamjen 3D).
2. Zgjidhni një skedar `.dwg` ose `.dxf`.

   Një DWG i madh kërkon pak kohë: shiriti i statusit thotë "Po lexohet plan.dwg…" derisa të hyjë.

3. Nëse vizatimi nuk thotë cilat janë njësitë e tij, një dialog me titullin "Njësitë e vizatimit" pyet: "Sa është një njësi vizatimi?" Zgjidhni {{ui:Inç}}, {{ui:Këmbë}}, {{ui:Milimetra}} ose {{ui:Metra}}. Shumica e planeve të vendeve në SHBA vizatohen në këmbë, planet arkitekturore në inç, dhe planet metrike në milimetra.

   Vizatimi vjen si një grup skajesh mbi tokë, i zgjedhur, dhe pamja zmadhohet në të. Shiriti i statusit thotë sa skaje hynë, për shembull "U importua site.dwg: 1697 skaje mbi tokë, në një grup. Çmontojeni për të vizatuar drejtpërdrejt mbi të."

## Çfarë hyn

- Vija, polivija (duke përfshirë harqet e tyre), rrathë dhe harqe, dhe blloqe me gjithçka brenda, nga **hapësira e modelit** vetëm. Kurbat bëhen copa të shkurtra të drejta.
- Vija, polivija, harqe, rrathë, elipsa dhe spline-a zbresin të sheshta mbi tokë, si skaje.
- **Vijëzimet** bëhen sipërfaqe mbi tokë, me ishujt e tyre si vrima, kështu që mund ta shtyni/tërhiqni një zonë të vijëzuar menjëherë.
- **Sipërfaqet 3D** dhe mbushjet e trupave bëhen sipërfaqe; sipërfaqet 3D mbajnë lartësitë e tyre.
- **Teksti** (tekst me një rresht, tekst me shumë rreshta dhe vlerat e atributeve) vizatohet si skaje me një shkrim të thjeshtë me një vijë, me lartësinë, këndin dhe drejtimin e vetë tekstit. Fonti i tij nuk është i vizatimit, kështu që fjalët mund të jenë pak më të gjata ose më të shkurtra. Karakteret për të cilat shkrimi nuk ka formë vizatohen si kutiza të vogla dhe numërohen.
- **Përmasat** vizatohen si i tregon vizatimi (vijat, shigjetat dhe teksti i tyre, si skaje dhe sipërfaqe).
- **Blloqet dinamike** hyjnë si i tregon vizatimi: çdo bllok i vendosur në gjendjen e dukshmërisë me të cilën u ruajt, dhe vetëm vijat e asaj gjendjeje. Shiriti i statusit i liston me gjendjet e shfaqura dhe gjendjet e tjera që ka secili, për shembull "Receptacle u shfaq si Duplex ×38, GFI ×7 (gjendje: Duplex, GFI)". ModelCraft nuk ndërron gjendjet.
- **Trupat 3D, rajonet dhe trupat** (të dhënat ACIS të vizatimit) hyjnë si grupe të veta: një trup i mbyllur si trup i ngurtë, një rajon ose trup i hapur si sipërfaqe. Sipërfaqet e sheshta hyjnë të plota; sipërfaqet e lakuara (cilindra, konet, sferat, torët, sipërfaqe të thjeshta spline) si trekëndësha të vegjël me skaje të buta mes tyre, kështu që shfaqen vetëm skajet e vetë trupit. Një sipërfaqe mbi një lloj tjetër sipërfaqeje lihet jashtë dhe listohet: "Ende nuk është vizatuar (trupat 3D): …".
- Nuk importohen: pikat, tabelat, shumëvijat, imazhet dhe llojet e tjera të objekteve. Shiriti i statusit i liston sipas llojit, si "Nuk u importuan: 12 POINT." Çdo gjë në një paraqitje (hapësira e letrës) lihet jashtë gjithashtu, pa u listuar.
- Shtresat nuk mbahen: të gjitha vijat hyjnë njësoj.

Nëse vizatimi është larg origjinës së tij (koordinata state plane, për shembull), importohet gjithsesi, por mund të zbresë larg origjinës së ModelCraft. Vizatimet që arrijnë më shumë se 10,000 km nga origjina e tyre refuzohen: afroni vizatimin më afër 0,0 në programin CAD së pari.

## Gjurmoni në sipërfaqe

Vijat e importuara rrallë mbyllen bukur në sipërfaqe vetvetiu. Dy mënyra për të punuar:

**Mbajeni planin si nënshtresë (e rekomanduar)**

1. Lëreni planin si grupin e vet.
2. Vizatoni ndërtesën tuaj mbi të me {{ui:Drejtkëndësh}} dhe {{ui:Vijë}}, duke kapur te cepat e planit ("Pika e fundit") dhe te skajet ("Mbi skaj").
3. Shtyjeni/tërhiqni sipërfaqet tuaja lart. Plani mbetet i paprekur poshtë, dhe mund ta fshini të gjithë grupin më vonë me një klik.

Kapja punon mes grupeve: mund të kapni te cepat e planit pa e hapur.

**Vizatoni mbi vijat e vetë planit**

1. Përzgjidhni grupin e planit dhe klikoni {{ui:Çmonto}}. Vijat e tij bëhen skaje të lira.
2. Aty ku një kontur i mbyllur duhet të jetë një sipërfaqe, vizatoni një vijë mbi çdo skaj të tij me {{ui:Vijë}}, nga cepi te cepi. Kur kontura është e mbyllur dhe e sheshtë, sipërfaqja zakonisht plotësohet. Nëse jo, kërkoni një boshllëk ose mbivendosje në kontur dhe vizatoni mbi të.
3. Shtyjeni/tërhiqeni.

Kjo punon më mirë në një plan të pastër. Në një rilevim të ngarkuar, gjurmimi mbi të është më i shpejtë.

## Probleme

- "Ky është një DXF binar. Ruajeni si DXF ASCII dhe provoni sërish." Ruajeni DXF-në përsëri nga programi CAD si ASCII (tekst).
- "…nuk ka vija, harqe ose rrathë në hapësirën e modelit për t'u importuar." Vizatimi ndoshta është gjithë në paraqitje, ose gjithë tekst dhe vijëzime.
- "Ky vizatim nuk u lexua (…). Mund të jetë i dëmtuar, ose i ruajtur në një version DWG që lexuesi nuk e trajton…" Kllapat thonë pse, për shembull "Versioni DWG AC1009 nuk mbështetet". Ruajeni si DXF, ose si DWG nga AutoCAD 2000 deri 2018, nga programi CAD.
- Plani është në madhësi të gabuar: zgjodhët njësinë e gabuar. Zhbëjeni ({{key:Mod+Z}}) dhe importojeni sërish, ose [shkallëzoni](topic:rotate-scale) grupin me faktorin e duhur (12 midis këmbëve dhe inçëve, 25.4 midis inçëve dhe milimetrave).

Për ta kthyer vijat e konturit në tokë që mund ta skalitni, shih [Terreni](topic:terrain).

## Nga një foto e një skice me dorë

**Skedari › Importo një foto skice…** merr një foto të një skice në letër (JPEG, PNG ose TIFF, direkt nga telefoni është në rregull) dhe bën të njëjtin lloj skajesh mbi tokë. Thoni cilës letër i përket (ose lëreni ta gjejë fletën, e marrë si A4) dhe shkallën e skicës, 1 : 100 për shembull. Skaji i letrës gjendet dhe fotoja drejtohet, boja gjurmohet në vija dhe harqe, dhe çdo ngjyrë stilolapsi (e zezë, e kuqe, blu, jeshile) bëhet një grup i vetë me një etiketë (**Skicë e zezë**, **Skicë e kuqe**, …), të gjitha brenda një grupi të vetëm me emrin e fotos. Është një hap zhbërjeje, dhe gjithçka ndodh në këtë kompjuter: asgjë nuk dërgohet askund.

Kur nuk mund të gjendet skaji i letrës, e tërë fotoja merret si fletë dhe rreshti i statusit e thotë këtë: matni diçka që njihni dhe shkallëzoni grupin nëse është gabim. Gjurmoni vijat në sipërfaqe si më lart.
