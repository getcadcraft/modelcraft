---
title: Eksporto një model për programe të tjera
summary: Zgjidh eksportin e duhur për renderim, uebin, printimin 3D, BIM dhe BimCraft, dhe kontrollo çfarë mban secili.
keywords: printo, 3mf, pdf, letër, imazh, png, foto, pamje ekrani, renderim, ruaj pamjen, eksporto, ndaj, render, rendering, gltf, glb, collada, dae, obj, stl, printim 3D, ifc, bim, bimcraft, dërgo, programe të tjera
from: 9e13e80d
---

Eksporti bën një kopje të modelit në një format tjetër. Mbaje edhe skedarin tënd `.modelcraft`: është i vetmi skedar që mban gjithçka, dhe i vetmi që ModelCraft e hap drejtpërdrejt.

## Eksporto

1. Ruaj së pari ({{key:Mod+S}}), që skedari yt i punës të jetë i sigurt.
2. Kliko {{ui:Eksporto}} te grupi {{ui:Skedar}}.
3. Zgjidh formatin. Shfletuesi e shkarkon, me emër si modeli.

Ky eksport përfshin të gjithë modelin. Për të eksportuar një pjesë, ruaje, fshi pjesën tjetër, eksporto, pastaj zhbëj ose rihap.

## Cili format

| Ju doni të | Zgjidh | Shënime |
|---|---|---|
| Ta hapni në një modelues tjetër 3D | {{ui:Collada (.dae)}} | Mban grupet, grupet e brendshme, komponentët (të përbashkët, jo të kopjuar), emrat dhe ngjyrat. Z lart, metra. |
| Ta renderoni, ose ta përdorni në një program vizualizimi | {{ui:OBJ (.obj)}} ose {{ui:glTF binary (.glb)}} | OBJ është më i lexuari; shkruan çdo vendosje grupi si objekt të veçantë, por nuk ka ngjyra dhe nuk ka komponentë të përbashkët. glTF mban komponentët dhe ngjyrat. |
| Ta vendosni në web, në një motor lojërash ose në AR | {{ui:glTF binary (.glb)}} | Një skedar me gjithçka brenda. |
| Ta printoni në 3D | {{ui:Kontrollo për printim 3D (STL ose 3MF)…}} | Kontrollon që modeli të jetë i mbyllur dhe të shikojë në drejtimin e duhur, pastaj shkruan STL ose 3MF në milimetra. Shih [Përgatit një model për printim 3D](topic:print-3d). {{ui:STL për printim (.stl, milimetra)}} shkruan të gjithë modelin pa kontrollin. |
| Ta hapni në BimCraft ose një program tjetër BIM | {{ui:IFC për BimCraft (.ifc)}} | Çdo grup ose komponent i nivelit të lartë bëhet një element ndërtimi. |

Shiriti i statusit konfirmon çdo eksport, për shembull "Eksportuar House.stl (milimetra)." ose "Eksportuar House.dae (Collada 1.4.1, Z lart, metra; komponentët mbeten të përbashkët)."

## Përpara se të eksportosh

- **Grupo objektet e tua.** Collada, glTF dhe IFC mbajnë grupet dhe komponentët si objekte të veçanta. Gjeometria e lirë del si një bllok i vetëm; në IFC bëhet një element i quajtur "Loose geometry".
- **Emërtoji.** Emrat e grupeve dhe komponentëve shkojnë në Collada dhe IFC, kështu që një mur i quajtur "Muri verior" arrin si "Muri verior".
- **Kontrollo drejtimin e faqeve.** Faqet gri-blu në anën e jashtme do të shikojnë brenda në eksport. Rregulloji me {{ui:Kthe faqen}} (shih [Fshi dhe pastro](topic:erase#a-face-facing-the-wrong-way)).
- **Për printim,** bëj pjesët solide të mbyllura: përzgjidh çdo grup dhe kontrollo që {{ui:Informacioni i entitetit}} thotë "Solid: Yes". Pastaj shkallëzo modelin në madhësinë e printuar, ose shkallëzoje në softuerin e printerit.

## Dërgo një model te BimCraft

1. Bëj çdo pjesë ndërtimi një grup ose komponent dhe emërtoje.
2. Zgjidh {{ui:Eksporto}}, pastaj {{ui:IFC për BimCraft (.ifc)}}.
3. Hap skedarin `.ifc` të shkarkuar në BimCraft.

Për skicën e masës konceptuale, përdor {{ui:Eksporto}} › {{ui:Masa te BimCraft…}} në vend: çdo grup shkon si një opsion mase me kate, sipërfaqe kateve dhe vëllim. Shih [Dërgo masën te BimCraft](topic:massing-to-bimcraft).

Eksporti i zakonshëm IFC nuk ka lidhje direkte midis dy aplikacioneve. IFC ka një kat, dhe çdo element është një proxy i përgjithshëm elementi ndërtimi, pa tip apo veti: mban vetëm formën dhe emrin. Solidet e mbyllura bëhen forma solide; ato të hapura bëhen sipërfaqe.

## Vija pa faqe

Skajet që nuk janë pjesë e asnjë faqeje (vija të tilla si udhëzuesit, ose një plan sajti i importuar) shkojnë në OBJ dhe Collada si vija. glTF dhe STL nuk kanë vend për to dhe i lënë jashtë. {{ui:Skenat}} dhe udhëzuesit nuk eksportohen në asnjë format.

## Ruaj pamjen si imazh

{{ui:Eksporto}} › {{ui:Imazh i pamjes (.png)}} ruan saktësisht atë që shfaq pamja 3D, në madhësinë e saj në ekran. {{ui:Imazh me madhësi dyfishe (.png)}} e ruan dy herë më të gjerë dhe dy herë më të lartë (për printim ose një slajd të mprehtë), me përmasat dhe shenjat e rivizatuara në atë madhësi, jo të shtrembëruara.

Për një foto që duket si drita e ditës (qiell, diell, hije të buta, qelq), përdor {{ui:Eksporto}} › {{ui:Rendero një foto…}} në vend: shih [Rendero një foto](topic:render).

Për një foto të pastër, ndiz [pamjen e prezantimit](topic:styles-shadows#presentation-view) ({{key:Shift+P}}) më parë: boshtet, udhëzuesit, përvijimet e prerjeve dhe përzgjedhja lihen jashtë. Vendos kamerën, stilin dhe hijet siç dëshiron, ose shko te një [skenë](topic:scenes); për të ruajtur një film në lëvizje të skenave të tua, përdor {{ui:Eksporto animacionin}} te paneli {{ui:Skenat}}.

## Printo pamjen, ose ruaje si PDF

- {{ui:Eksporto}} › {{ui:PDF e pamjes (.pdf)}} ruan një PDF me një faqe: pamjen në dyfishin e madhësisë së ekranit, me përmasat e saj, në një faqe A4 (Letter kur modeli është në këmbë e inç), horizontale, me një rresht nën të që jep emrin e skedarit, datën dhe njësinë.
- {{ui:Eksporto}} › {{ui:Shtyp pamjen…}} e vendos të njëjtën faqe para dialogut të printimit të shfletuesit tënd. Zgjidh një printer, ose "Ruaj si PDF".

Faqja shfaq pamjen siç është: te një pamje perspektive nuk ka shkallë. Për një vizatim në shkallë, çaktivizo {{ui:Perspektivë}} dhe shiko nga {{ui:Sipër}} ose {{ui:Para}}, dhe shto [përmasa](topic:dimensions) për madhësitë që kanë rëndësi. [Pamja e prezantimit](topic:styles-shadows#presentation-view) lë jashtë boshtet, udhëzuesit dhe përzgjedhjen; përmasat mbeten.
