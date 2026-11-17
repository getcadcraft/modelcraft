---
title: Pripremite model za 3D ispis
summary: Provjerite je li model zatvoren i okrenut ispravno, pogledajte mu veličinu, bazu i previse, ispravite što nije u redu i preuzmite ga kao STL ili 3MF za svoj slicer.
keywords: 3d ispis, ispis, pisač, print, slicer, stl, 3mf, vodonepropusan, zatvoren, manifold, tijelo, rupe, naopako, previs, oslonci, baza, ležište, milimetri, izvoz, popravi, popravak, izdubljen, veličina ležišta, početnik, debljina stijenke, alati za ispis
from: 948e19af
---

Slicer 3D pisača treba zatvoren oblik: bez rupa, sve plohe okrenute prema van, ništa koje prolazi kroz samo sebe. {{ui:Izvezi}} › {{ui:Provjera za 3D ispis (STL ili 3MF)…}} traži upravo to prije nego što preuzmete datoteku.

## Provjera i preuzimanje

1. Odaberite što želite ispisati: jednu ili više grupa ili komponenti, ili neke plohe. Bez odabira ispisuje se sve prikazano.
2. Kliknite {{ui:Izvezi}} u grupi {{ui:Datoteka}}, zatim {{ui:Provjera za 3D ispis (STL ili 3MF)…}}.

   Dijalog počinje jednim retkom: „Spremno za ispis“, koliko stvari treba popraviti prije ispisa ili koliko ih treba prvo pogledati. Svaki problem ima tri dijela: što nije u redu, zašto je važno i što učiniti. Zatim slijede veličina u milimetrima, volumen, broj trokuta i vaše ležište pisača.

3. Ako dijalog navodi stvari za popravak, kliknite {{ui:Popravi što se može popraviti}} (vidi u nastavku). Provjera se sama ponovno pokreće.
4. Kliknite {{ui:Preuzmi 3MF}} ili {{ui:Preuzmi STL}}.

Ispisuje se ono što vidite: skrivene plohe, skrivene grupe i komponente te sve na skrivenoj oznaci ostaju izvan ispisa. Veličine su uvijek u milimetrima, jedinici koju slicer očekuje, bez obzira na jedinicu koju model prikazuje.

:::tip
Dajte prednost 3MF-u kad ga vaš slicer čita: čuva boje i jedinice. STL nema ni jedno ni drugo, a slicer pretpostavlja milimetre.
:::

## Što provjera traži

Ovo zaustavlja ispis ili ga kvari, i dijalog kaže „Nije spremno za ispis“:

| Problem | Što znači | Što učiniti |
|---|---|---|
| Ploha samo s jedne strane | Rupa: brid ima plohu s jedne strane, a s druge ništa | Nacrtajte nedostajuću plohu (linija preko praznine često je zatvori), ili koristite {{ui:Popravi}} (dolje) |
| Dijele je tri ili više ploha | Plohe se sastaju u peraja ili zid unutar tijela | Izbrišite unutarnju plohu |
| Plohe okrenute suprotno | Neke plohe gledaju unutra, neke van | Odaberite plohe koje gledaju unutra i kliknite {{ui:Okreni plohu}} u {{ui:Informacije o entitetu}} |
| Naopako | Cijeli zatvoreni dio gleda prema unutra | Odaberite njegove plohe i okrenite ih |
| Prolazi kroz samog sebe | Jedan dio se savija kroz sebe | {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Presijeci s modelom}}, zatim izbrišite što je unutra. Vidi [presijecanje ploha](topic:intersect) |

Ovo su upozorenja: model se ispisuje, ali prvo pogledajte.

- **Odvojeni dijelovi se preklapaju**, ili se **dodiruju plohu uz plohu**: slicer ih obično spoji u jedno. Za čišću datoteku spojite ih s {{ui:Tijela}} › {{ui:Unija}}. Vidi [Alati za tijela](topic:solids).
- **Na dnu ništa ne leži ravno**: okrenite model tako da ploha nalegne na ležište, inače će slicer dodati oslonce ili splav.
- **Nagnuto više od 45° od uspravnog**: te plohe trebaju oslonac. Dijalog kaže koliki dio površine treba.
- **Manje od 1 mm u širini**: vjerojatno je modelirano u pogrešnoj jedinici. Provjerite jedinicu u statusnoj traci.

Šupalj dio (zatvorena ljuska unutar druge) je u redu: njegove plohe gledaju u šupljinu, a njegov volumen se oduzima.

## Popravite probleme

Pod **Gdje su problemi** dijalog navodi svaku grupu ili komponentu u kojoj nešto nije u redu (labave plohe koje nisu u grupi navode se kao „Plohe nisu u grupi“), uz to što je u njoj krivo. Komponenta postavljena nekoliko puta navodi se jednom: popravak nje popravlja svaku kopiju.

- {{ui:Prikaži}} otvara tu grupu i odabire bridove i plohe koje nisu u redu, pa su istaknuti.
- {{ui:Popravi što se može popraviti}} popravlja sve odjednom: zatvara rupe čiji bridovi leže ravno, uklanja plohe unutar oblika i zalutale bridove te okreće plohe kako treba prema van. To je jedan korak: {{key:Mod+Z}} ga poništava. Provjera se zatim ponovno pokreće i pokazuje što je ostalo.

Ono što ne može popraviti (rupa čiji bridovi ne leže ravno, dio koji prolazi kroz sebe) ostaje na popisu s time što treba učiniti ručno. {{ui:Popravak}} pod **Alati za ispis** ide dalje: zatvara rupe koje nisu ravne, uklanja zalutale komade i dvostruke plohe te navodi svaki popravak. Vidi [Oslonci, debljina stijenke, izdubljivanje i popravak](topic:print-tools#repair). Također možete popraviti jednu grupu u jednom trenutku: odaberite je, zatim upotrijebite {{ui:Prikaži probleme}} i {{ui:Popravi}} u {{ui:Informacije o entitetu}}. Vidi [Alati za tijela](topic:solids).

## Šuplji dio

{{ui:Izdubi}} pod **Alati za ispis** izdubljuje dio na debljinu stijenke koju zadate, s odvodnim rupama gdje kliknete. Vidi [Izdubi](topic:print-tools#hollow).

Šupljinu možete nacrtati i sami: zatvorena grupa unutar dijela, koja ga ne dodiruje, sa svim plohama okrenutim tako da gledaju u šupljinu. Provjera je broji kao šupljinu i oduzima njezin volumen; ne navodi je kao nešto za popraviti.

## Ležište vašeg pisača

Odaberite veličinu ležišta svog pisača u {{ui:Postavke}} › {{ui:ModelCraft}} › {{ui:Ploča 3D pisača}}. Provjera tada upozorava kad je model veći od ležišta, okrenut na bilo koji način. Vidi [Postavke](topic:settings#3d-printer-bed).

## Alati za ispis

Pod nalazima dijaloga, **Alati za ispis** otvara {{ui:Pregled oslonaca}} (gdje idu oslonci i otprilike koliko), {{ui:Debljina stijenke}} (stijenke pretanke za ispis), {{ui:Izdubi}} i {{ui:Popravak}}. Vidi [Oslonci, debljina stijenke, izdubljivanje i popravak](topic:print-tools). {{ui:Podijeli za ispis}} reže model prevelik za ležište na dijelove s konektorima i brojčanim spojevima: vidi [Podijelite veliki model za ispis](topic:print-split).

## Nije provjereno

Provjera ne reže: sitne detalje koje mlaznica ne može nacrtati i stvarne oslonce određuje vaš slicer. Vidi [Još nije izrađeno](topic:not-built-yet#3d-printing).
