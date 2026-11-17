---
title: Izvoz modela za druge programe
summary: Izaberi pravi izvoz za renderovanje, web, 3D štampu, BIM i BimCraft, i provjeri šta svaki zadržava.
keywords: štampa, 3mf, pdf, papir, slika, png, fotografija, snimak ekrana, render, sačuvaj pogled, izvezi, dijeli, renderovanje, gltf, glb, collada, dae, obj, stl, 3D štampa, ifc, bim, bimcraft, pošalji, drugi softver
from: 9e13e80d
---

Izvoz pravi kopiju modela u drugom formatu. Zadrži i svoju `.modelcraft` datoteku: to je jedina datoteka koja čuva sve, i jedina koju ModelCraft direktno otvara.

## Izvoz

1. Prvo spasi ({{key:Mod+S}}), da radna datoteka bude sigurna.
2. Klikni {{ui:Izvezi}} u grupi {{ui:Datoteka}}.
3. Izaberi format. Preglednik preuzima datoteku, nazvanu kao model.

Izveze se cijeli model. Da izvezeš jedan dio, spasi, obriši ostalo, izvezi, pa poništi ili ponovo otvori.

## Koji format

| Želiš da | Izaberi | Napomene |
|---|---|---|
| Otvoriš u drugom 3D modeleru | {{ui:Collada (.dae)}} | Zadržava grupe, ugnijezdene grupe, komponente (zajedničke, ne kopirane), nazive i boje. Z gore, metri. |
| Renderuješ ili koristiš u programu za vizualizaciju | {{ui:OBJ (.obj)}} ili {{ui:glTF binary (.glb)}} | OBJ se najšire čita; piše svaki položaj grupe kao zaseban objekat, ali nema boja ni zajedničkih komponenti. glTF zadržava komponente i boje. |
| Postaviš na web, u igraći motor ili u AR | {{ui:glTF binary (.glb)}} | Jedna datoteka sa svime u njoj. |
| Štampaš u 3D | {{ui:Provjeri za 3D štampanje (STL ili 3MF)…}} | Provjerava da je model zatvoren i da plohe gledaju na pravu stranu, pa piše STL ili 3MF u milimetrima. Vidi [Pripremi model za 3D štampu](topic:print-3d). {{ui:STL za štampanje (.stl, milimetri)}} piše cijeli model bez provjere. |
| Otvoriš u BimCraft ili drugom BIM programu | {{ui:IFC za BimCraft (.ifc)}} | Svaka grupa ili komponenta najvišeg nivoa postaje jedan građevinski element. |

Statusna traka potvrđuje svaki izvoz, na primjer "Izvezeno House.stl (milimetri)." ili "Izvezeno House.dae (Collada 1.4.1, Z gore, metri; komponente ostaju zajedničke)."

## Prije izvoza

- **Grupiši objekte.** Collada, glTF i IFC zadržavaju grupe i komponente kao zasebne objekte. Labava geometrija izlazi kao jedna gruda; u IFC postaje jedan element pod nazivom "Loose geometry".
- **Imenuj ih.** Nazivi grupa i komponenti idu u Collada i IFC, pa zid nazvan "Sjeverni zid" stiže kao "Sjeverni zid".
- **Provjeri smjer ploha.** Plohe koje su plavo-sive na vanjskoj strani će u izvozu gledati unutra. Popravi ih sa {{ui:Obrni plohu}} (vidi [Brisanje i čišćenje](topic:erase#a-face-facing-the-wrong-way)).
- **Za štampu,** neka dijelovi budu zatvorena puna tijela: odaberi svaku grupu i provjeri da {{ui:Podaci o entitetu}} kažu "Solid: Yes". Zatim skaliraj model na veličinu za štampu, ili ga skaliraj u softveru štampača.

## Pošalji model u BimCraft

1. Svaki dio zgrade napravi kao grupu ili komponentu i imenuj ga.
2. Izaberi {{ui:Izvezi}}, pa {{ui:IFC za BimCraft (.ifc)}}.
3. Otvori preuzetu `.ifc` datoteku u BimCraftu.

Za idejnu masu koristi {{ui:Izvezi}} › {{ui:Masa u BimCraft…}}: svaka grupa ide kao opcija mase sa spratovima, površinama spratova i zapreminom. Vidi [Pošalji masu u BimCraft](topic:massing-to-bimcraft).

Običan IFC izvoz nema direktnu vezu između dvije aplikacije. IFC ima jedan sprat, a svaki element je generički proxy građevinskog elementa bez tipa ili svojstava: nosi samo oblik i naziv. Zatvorene grupe postaju čvrsti oblici; otvorene postaju površine.

## Linije bez ploha

Ivice koje nisu dio nijedne plohe (linije tipa vodilica, uvezeni situacioni plan) idu u OBJ i Collada kao linije. glTF i STL nemaju mjesta za njih i ostavljaju ih van. Vodilice i scene se ne izvoze ni u jedan format.

## Sačuvaj pogled kao sliku

{{ui:Izvezi}} › {{ui:Slika pogleda (.png)}} sačuva tačno ono što 3D pogled prikazuje, u veličini na ekranu. {{ui:Slika dvostruke veličine (.png)}} sačuva dvostruko širu i dvostruko višu sliku (za štampu ili oštar slajd), sa kotama i oznakama ponovo iscrtanim u toj veličini, a ne razvučenim.

Za sliku koja izgleda kao dnevna svjetlost (nebo, sunce, meke sjenke, staklo) koristi {{ui:Izvezi}} › {{ui:Renderuj sliku…}}: vidi [Renderovanje slike](topic:render).

Za čistu sliku prvo uključi [prezentacijski prikaz](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): osi, vodilice, obrisi presjeka i odabir ostaju van. Postavi kameru, stil i sjenke kako želiš, ili pređi na [scenu](topic:scenes); da sačuvaš pokretni film svojih scena, koristi {{ui:Izvezi animaciju}} u panelu {{ui:Scene}}.

## Ispiši pogled ili ga sačuvaj kao PDF

- {{ui:Izvezi}} › {{ui:PDF pogleda (.pdf)}} sačuva jednostranični PDF: pogled u dvostrukoj veličini od ekrana, sa njegovim kotama, na A4 stranici (Letter kada je model u stopama i palcima), vodoravno, sa linijom ispod koja daje naziv datoteke, datum i jedinicu.
- {{ui:Izvezi}} › {{ui:Štampaj pogled…}} stavlja istu stranicu u dijalog štampe preglednika. Izaberi štampač, ili "Spasi kao PDF".

Stranica prikazuje pogled kako jeste: na perspektivnom pogledu nema razmjere. Za crtež u razmjeri isključi {{ui:Perspektiva}} i gledaj sa {{ui:Gore}} ili {{ui:Naprijed}}, i dodaj [kote](topic:dimensions) za dimenzije koje su važne. [Prezentacijski prikaz](topic:styles-shadows#presentation-view) ostavlja van osi, vodilice i odabir; kote ostaju.
