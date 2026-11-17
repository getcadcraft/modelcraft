---
title: Izvoz modela za druge programe
summary: Odaberite pravi izvoz za renderiranje, web, 3D ispis, BIM i BimCraft te provjerite što svaki zadržava.
keywords: ispis, 3mf, pdf, papir, slika, png, fotografija, snimka zaslona, render, spremi prikaz, izvoz, dijeljenje, renderiranje, gltf, glb, collada, dae, obj, stl, 3D ispis, ifc, bim, bimcraft, slanje, drugi softver
from: 9e13e80d
---

Izvoz pravi kopiju modela u drugom formatu. Zadržite i svoju datoteku `.modelcraft`: to je jedina datoteka koja čuva sve i jedina koju ModelCraft izravno otvara.

## Izvoz

1. Prvo spremite ({{key:Mod+S}}) da vaša radna datoteka bude sigurna.
2. Kliknite {{ui:Izvezi}} u grupi {{ui:Datoteka}}.
3. Odaberite format. Preglednik ga preuzima, nazvanog kao model.

Izvozi se cijeli model. Za izvoz jednog dijela spremite, obrišite ostalo, izvezite, pa poništite ili ponovno otvorite.

## Koji format

| Želite | Odaberite | Napomene |
|---|---|---|
| Otvoriti ga u drugom 3D modeleru | {{ui:Collada (.dae)}} | Zadržava grupe, ugniježđene grupe, komponente (zajedničke, ne kopirane), nazive i boje. Z gore, metri. |
| Renderirati ga ili koristiti u programu za vizualizaciju | {{ui:OBJ (.obj)}} ili {{ui:glTF binarni (.glb)}} | OBJ se najšire čita; svaki položaj grupe piše se kao zaseban objekt, ali nema boja ni zajedničkih komponenti. glTF zadržava komponente i boje. |
| Staviti ga na web, u pogon za igre ili AR | {{ui:glTF binarni (.glb)}} | Jedna datoteka sa svim sadržajem. |
| Ispisati ga u 3D | {{ui:Provjera za 3D ispis (STL ili 3MF)…}} | Provjerava je li model zatvoren i okrenut na pravu stranu, zatim piše STL ili 3MF u milimetrima. Pogledajte [Priprema modela za 3D ispis](topic:print-3d). {{ui:STL za ispis (.stl, milimetri)}} piše cijeli model bez provjere. |
| Otvoriti ga u BimCraftu ili drugom BIM programu | {{ui:IFC za BimCraft (.ifc)}} | Svaka grupa ili komponenta najviše razine postaje jedan građevinski element. |

Statusna traka potvrđuje svaki izvoz, na primjer „Izvezeno: House.stl (milimetri).“ ili „Izvezeno: House.dae (Collada 1.4.1, Z gore, metri; komponente ostaju zajedničke).“

## Prije izvoza

- **Grupirajte objekte.** Collada, glTF i IFC zadržavaju grupe i komponente kao zasebne objekte. Slobodna geometrija izlazi kao jedna gruda; u IFC-u postaje jedan element naziva „Slobodna geometrija“.
- **Dajte im nazive.** Nazivi grupa i komponenata ulaze u Collada i IFC, pa zid nazvan „Sjeverni zid“ stiže kao „Sjeverni zid“.
- **Provjerite smjer ploha.** Plohe koje su na vanjskoj strani plavo-sive u izvozu će pokazivati prema unutra. Ispravite ih pomoću {{ui:Okreni plohu}} (pogledajte [Brisanje i čišćenje](topic:erase#a-face-facing-the-wrong-way)).
- **Za ispis** dijelovi moraju biti zatvorena tijela: odaberite svaku grupu i provjerite da {{ui:Informacije o entitetu}} piše „Puno tijelo: Da“. Zatim skalirajte model na veličinu ispisa ili ga skalirajte u softveru pisača.

## Slanje modela u BimCraft

1. Svaki dio zgrade pretvorite u grupu ili komponentu i dajte mu naziv.
2. Odaberite {{ui:Izvezi}}, zatim {{ui:IFC za BimCraft (.ifc)}}.
3. Otvorite preuzetu `.ifc` datoteku u BimCraftu.

Za okvirnu masu u konceptu koristite {{ui:Izvezi}} › {{ui:Volumen za BimCraft…}}: svaka grupa ide kao opcija volumena s etažama, površinama etaža i volumenom. Pogledajte [Slanje volumena u BimCraft](topic:massing-to-bimcraft).

Obični IFC izvoz nema izravne veze između dviju aplikacija. IFC ima jednu etažu, a svaki element je generički proxy građevinskog elementa bez tipa i svojstava: nosi samo oblik i naziv. Zatvorene grupe postaju puna tijela; otvorene postaju plohe.

## Linije bez ploha

Bridovi koji nisu dio nijedne plohe (linije tipa vodilica, uvezeni situacijski plan) izlaze u OBJ i Collada kao linije. glTF i STL nemaju za njih mjesta i izostavljaju ih. Vodilice i scene ne izvoze se ni u jedan format.

## Spremanje prikaza kao slike

{{ui:Izvezi}} › {{ui:Slika prikaza (.png)}} sprema točno ono što 3D prikaz pokazuje, u veličini na zaslonu. {{ui:Slika u dvostrukoj veličini (.png)}} sprema je dvaput širu i dvaput višu (za ispis ili oštar slajd), s kotama i oznakama ponovno nacrtanim u toj veličini, a ne rastegnutim.

Za sliku koja izgleda kao dnevna svjetlost (nebo, sunce, meke sjene, staklo) koristite {{ui:Izvezi}} › {{ui:Renderiraj sliku…}}: pogledajte [Renderiranje slike](topic:render).

Za čistu sliku prvo uključite [prikaz za prezentaciju](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): osi, vodilice, obrisi presjeka i odabir se izostavljaju. Postavite kameru, stil i sjene kako želite ili idite na [scenu](topic:scenes); za spremanje pokretnog filma svojih scena koristite {{ui:Izvezi animaciju}} na ploči {{ui:Scene}}.

## Ispis prikaza ili spremanje kao PDF

- {{ui:Izvezi}} › {{ui:PDF prikaza (.pdf)}} sprema jednostranični PDF: prikaz u dvostrukoj veličini zaslona, s kotama, na A4 stranici (Letter kad je model u stopama i inčima), položen, s crtom ispod s nazivom datoteke, datumom i jedinicom.
- {{ui:Izvezi}} › {{ui:Ispiši prikaz…}} stavlja istu stranicu u dijalog za ispis preglednika. Odaberite pisač ili „Spremi kao PDF“.

Stranica prikazuje pogled kakav jest: na perspektivnom prikazu nema mjerila. Za crtež u mjerilu isključite {{ui:Perspektiva}} i gledajte s {{ui:Gore}} ili {{ui:Naprijed}}, te dodajte [kote](topic:dimensions) za važne veličine. [Prikaz za prezentaciju](topic:styles-shadows#presentation-view) izostavlja osi, vodilice i odabir; kote ostaju.
