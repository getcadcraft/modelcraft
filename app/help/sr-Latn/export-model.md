---
title: Izvoz modela za druge programe
summary: Izaberi pravi izvoz za renderovanje, veb, 3D štampanje, BIM i BimCraft i proveri šta svaki zadržava.
keywords: štampa, 3mf, pdf, papir, slika, png, fotografija, snimak ekrana, render, sačuvaj pogled, izvoz, deljenje, renderovanje, gltf, glb, collada, dae, obj, stl, 3D štampa, ifc, bim, bimcraft, slanje, drugi softver
from: 9e13e80d
---

Izvoz pravi kopiju modela u drugom formatu. Sačuvaj i svoj `.modelcraft` fajl: to je jedini fajl koji zadržava sve i jedini koji ModelCraft direktno otvara.

## Izvoz

1. Prvo sačuvaj ({{key:Mod+S}}) da je tvoj radni fajl bezbedan.
2. Klikni {{ui:Izvezi}} u grupi {{ui:Datoteka}}.
3. Izaberi format. Pregledač preuzima fajl, nazvan kao model.

Ceo model se izvozi. Da izvezeš jedan deo, sačuvaj, obriši ostalo, izvezi, pa opozovi ili ponovo otvori.

## Koji format

| Želiš da | Izaberi | Napomene |
|---|---|---|
| Otvoriš u drugom 3D modelaru | {{ui:Collada (.dae)}} | Zadržava grupe, ugnježdene grupe, komponente (deljene, ne kopirane), imena i boje. Z gore, metri. |
| Renderuješ ili koristiš u programu za vizualizaciju | {{ui:OBJ (.obj)}} ili {{ui:glTF binary (.glb)}} | OBJ se najviše čita; piše položaj svake grupe kao zaseban objekat, ali nema boja i nema deljenih komponenti. glTF zadržava komponente i boje. |
| Postaviš na veb, u pogon za igre ili AR | {{ui:glTF binary (.glb)}} | Jedan fajl sa svim u njemu. |
| Odštampaš u 3D | {{ui:Proveri za 3D štampanje (STL ili 3MF)…}} | Proverava da je model zatvoren i da površine gledaju ispravno, pa piše STL ili 3MF u milimetrima. Pogledaj [Pripremi model za 3D štampanje](topic:print-3d). {{ui:STL za štampanje (.stl, milimetri)}} piše ceo model bez provere. |
| Otvoriš u BimCraft ili drugom BIM programu | {{ui:IFC za BimCraft (.ifc)}} | Svaka grupa ili komponenta najvišeg nivoa postaje jedan element zgrade. |

Statusna traka potvrđuje svaki izvoz, na primer „Izvezeno: House.stl (milimetri).” ili „Izvezeno: House.dae (Collada 1.4.1, Z gore, metri; komponente ostaju deljene).”

## Pre izvoza

- **Grupiši objekte.** Collada, glTF i IFC zadržavaju grupe i komponente kao zasebne objekte. Razbacana geometrija ide kao jedna gomila; u IFC postaje jedan element pod imenom "Loose geometry".
- **Imenuj ih.** Imena grupa i komponenti idu u Collada i IFC, pa zid nazvan „Severni zid” stiže kao „Severni zid”.
- **Proveri smer površina.** Površine koje su spolja plavo-sive biće okrenute ka unutra u izvozu. Popravi ih sa {{ui:Obrni površinu}} (pogledaj [Brisanje i čišćenje](topic:erase#a-face-facing-the-wrong-way)).
- **Za štampanje,** napravi delove zatvorenim telima: izaberi svaku grupu i proveri da {{ui:Podaci o entitetu}} kaže „Telo: Da”. Zatim razmeri model na štampanu veličinu ili ga razmeri u softveru štampača.

## Slanje modela u BimCraft

1. Napravi od svakog dela zgrade grupu ili komponentu i imenuj je.
2. Izaberi {{ui:Izvezi}}, pa {{ui:IFC za BimCraft (.ifc)}}.
3. Otvori preuzeti `.ifc` fajl u BimCraft.

Za idejnu masu koristi {{ui:Izvezi}} › {{ui:Masa u BimCraft…}}: svaka grupa ide kao opcija mase sa spratovima, površinama spratova i zapreminom. Pogledaj [Slanje mase u BimCraft](topic:massing-to-bimcraft).

Običan IFC izvoz nema direktnu vezu između dve aplikacije. IFC ima jedan sprat, a svaki element je generički building element proxy bez tipa i svojstava: nosi samo oblik i ime. Zatvorene grupe postaju čvrsti oblici; otvorene postaju površine.

## Linije bez površina

Ivice koje nisu deo nijedne površine (linije slične vodilicama, uvezeni situacioni plan) idu u OBJ i Collada kao linije. glTF i STL nemaju mesta za njih i izostavljaju ih. Vodilice i scene se ne izvoze ni u jedan format.

## Čuvanje pogleda kao slike

{{ui:Izvezi}} › {{ui:Slika pogleda (.png)}} čuva tačno ono što 3D pogled prikazuje, u veličini na ekranu. {{ui:Slika dvostruke veličine (.png)}} čuva je dvostruko šire i dvostruko više (za štampu ili oštar slajd), sa dimenzijama i oznakama ponovo iscrtanim u toj veličini, a ne razvučenim.

Za sliku koja izgleda kao dnevna svetlost (nebo, sunce, meka senka, staklo) koristi {{ui:Izvezi}} › {{ui:Renderuj sliku…}}: pogledaj [Renderovanje slike](topic:render).

Za čist snimak prvo uključi [prikaz za prezentaciju](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): ose, vodilice, obrisi preseka i izbor se izostavljaju. Podesi kameru, stil i senke kako želiš, ili pređi na [scenu](topic:scenes); da sačuvaš pokretni film svojih scena, koristi {{ui:Izvezi animaciju}} u panelu {{ui:Scene}}.

## Štampanje pogleda ili čuvanje kao PDF

- {{ui:Izvezi}} › {{ui:PDF pogleda (.pdf)}} čuva jednostranični PDF: pogled na dvostruku veličinu sa ekrana, sa dimenzijama, na A4 stranici (Letter kad je model u stopama i inčima), pejzažno, sa linijom ispod koja daje ime fajla, datum i jedinicu.
- {{ui:Izvezi}} › {{ui:Štampaj pogled…}} stavlja istu stranicu pred dijalog za štampu u pregledaču. Izaberi štampač ili „Sačuvaj kao PDF”.

Stranica prikazuje pogled onakav kakav jeste: nema razmere na perspektivnom pogledu. Za crtež u razmeri isključi {{ui:Perspektiva}} i gledaj sa {{ui:Gore}} ili {{ui:Spredaj}}, i dodaj [kote](topic:dimensions) za veličine koje su bitne. [Prikaz za prezentaciju](topic:styles-shadows#presentation-view) izostavlja ose, vodilice i izbor; kote ostaju.
