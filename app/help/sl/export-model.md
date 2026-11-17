---
title: Izvoz modela za druge programe
summary: Izberite pravi izvoz za upodabljanje, splet, 3D-tiskanje, BIM in BimCraft ter preverite, kaj vsak ohrani.
keywords: tisk, 3mf, pdf, papir, slika, png, posnetek zaslona, upodobitev, shrani pogled, izvoz, deli, upodabljanje, gltf, glb, collada, dae, obj, stl, 3d-tiskanje, ifc, bim, bimcraft, pošlji, drugi programi
from: 9e13e80d
---

Izvoz ustvari kopijo modela v drugem formatu. Obdržite tudi svojo datoteko `.modelcraft`: je edina, ki ohrani vse, in edina, ki jo ModelCraft odpre neposredno.

## Izvoz

1. Najprej shranite ({{key:Mod+S}}), da je vaša delovna datoteka varna.
2. Kliknite {{ui:Export}} v skupini {{ui:File}}.
3. Izberite format. Brskalnik ga prenese, poimenovanega po modelu.

Izvozi se cel model. Za izvoz enega dela shranite, izbrišite preostalo, izvozite, nato razveljavite ali ponovno odprite.

## Kateri format

| Želite | Izberite | Opombe |
|---|---|---|
| Odpreti v drugem 3D-modelirniku | {{ui:Collada (.dae)}} | Ohrani skupine, ugnezdene skupine, komponente (skupne, ne kopirane), imena in barve. Z navzgor, metri. |
| Upodobiti ali uporabiti v vizualizacijskem programu | {{ui:OBJ (.obj)}} ali {{ui:glTF binary (.glb)}} | OBJ je najbolj razširjen; vsako postavitev skupine zapiše kot ločen predmet, a nima barv in deljenih komponent. glTF ohrani komponente in barve. |
| Objaviti na spletu, v igralnem pogonu ali v AR | {{ui:glTF binary (.glb)}} | Ena datoteka z vsem v njej. |
| Natisniti v 3D | {{ui:Check for 3D printing (STL or 3MF)…}} | Preveri, ali je model zaprt in ali ploskve kažejo pravo smer, nato zapiše STL ali 3MF v milimetrih. Glejte [Priprava modela za 3D-tiskanje](topic:print-3d). {{ui:STL for printing (.stl, millimeters)}} zapiše celoten model brez preverjanja. |
| Odpreti v BimCraft ali drugem BIM-programu | {{ui:IFC for BimCraft (.ifc)}} | Vsaka skupina ali komponenta na najvišji ravni postane en gradbeni element. |

Vrstica stanja potrdi vsak izvoz, na primer „Izvoženo: House.stl (milimetri).“ ali „Izvoženo: House.dae (Collada 1.4.1, Z navzgor, metri; komponente ostanejo deljene).“

## Preden izvozite

- **Združite predmete.** Collada, glTF in IFC ohranijo skupine in komponente kot ločene predmete. Prosta geometrija gre ven kot en kos; v IFC postane en element z imenom "Loose geometry".
- **Poimenujte jih.** Imena skupin in komponent gredo v Collado in IFC: stena z imenom „North wall“ pride ven kot „North wall“.
- **Preverite smer ploskev.** Ploskve, ki kažejo modrikasto sivo na zunanji strani, bodo v izvozu kazale navznoter. Popravite jih z {{ui:Reverse face}} (glejte [Brisanje in čiščenje](topic:erase#a-face-facing-the-wrong-way)).
- **Za tiskanje** naredite dele zaprta telesa: izberite vsako skupino in preverite, da {{ui:Entity info}} kaže „Telo: Da“. Nato model skalirajte na velikost za tiskanje ali ga skalirajte v programski opremi tiskalnika.

## Pošljite model v BimCraft

1. Vsak gradbeni del naredite za skupino ali komponento in ga poimenujte.
2. Izberite {{ui:Export}}, nato {{ui:IFC for BimCraft (.ifc)}}.
3. Odprite preneseno datoteko `.ifc` v BimCraft.

Za okvirne študije mase uporabite {{ui:Export}} › {{ui:Massing to BimCraft…}}: vsaka skupina gre kot možnost mase s etažami, površinami etaž in prostornino. Glejte [Pošiljanje mas v BimCraft](topic:massing-to-bimcraft).

Navadni izvoz IFC nima neposredne povezave med obema aplikacijama. IFC ima eno etažo, vsak element pa je splošni posrednik gradbenega elementa brez tipa in lastnosti: nosi le obliko in ime. Zaprte skupine postanejo telesa; odprte postanejo površine.

## Črte brez ploskev

Robovi, ki niso del nobene ploskve (vodilom podobne črte, uvožen načrt lokacije), gredo v OBJ in Collada kot črte. glTF in STL zanje nimata prostora in jih izpustita. Vodila in prizori se ne izvozijo v noben format.

## Shrani pogled kot sliko

{{ui:Export}} › {{ui:Image of the view (.png)}} shrani točno to, kar prikazuje 3D-pogled, v njegovi velikosti na zaslonu. {{ui:Image at twice the size (.png)}} ga shrani dvakrat širše in dvakrat višje (za tisk ali ostro predstavitev), kote in oznake pa so narisane znova v tej velikosti, ne raztegnjene.

Za sliko, ki je videti kot dnevna svetloba (nebo, sonce, mehke sence, steklo), uporabite {{ui:Export}} › {{ui:Render a picture…}}: glejte [Upodobitev slike](topic:render).

Za čisto sliko vklopite [predstavitveni pogled](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): osi, vodila, obrisi prerezov in izbor ostanejo izpuščeni. Nastavite kamero, slog in sence, kot želite, ali pojdite na [prizor](topic:scenes); za shranjevanje premikajočega se filma svojih prizorov uporabite {{ui:Export animation}} v plošči {{ui:Scenes}}.

## Natisnite pogled ali ga shranite kot PDF

- {{ui:Export}} › {{ui:PDF of the view (.pdf)}} shrani enostransko datoteko PDF: pogled v dvakratni velikosti zaslona, z njegovimi kotami, na strani A4 (Letter, kadar je model v čevljih in palcih), ležeče, s črto pod njim, ki navaja ime datoteke, datum in enoto.
- {{ui:Export}} › {{ui:Print the view…}} da isto stran pred pogovorno okno za tiskanje v brskalniku. Izberite tiskalnik ali „Shrani kot PDF“.

Stran prikazuje pogled takšen, kakršen je: pri perspektivnem pogledu ni merila. Za risbo v merilu izklopite {{ui:Perspective}} in gledajte z {{ui:Top}} ali {{ui:Front}}, ter dodajte [kote](topic:dimensions) za pomembne velikosti. [Predstavitveni pogled](topic:styles-shadows#presentation-view) izpusti osi, vodila in izbor; kote ostanejo.
