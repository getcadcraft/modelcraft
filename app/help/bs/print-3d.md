---
title: Priprema modela za 3D štampanje
summary: Provjeri da je model zatvoren i da plohe gledaju ispravnim smjerom, pogledaj njegovu veličinu, podlogu i previse, popravi što nije u redu i preuzmi ga kao STL ili 3MF za svoj slajser.
keywords: 3d štampanje, štampa, štampač, slajser, stl, 3mf, vodonepropusno, zatvoreno, mnogostruko, tijelo, rupe, naopako, previs, podrška, podloga, krevet, milimetri, izvoz, popravi, popravka, šuplje, veličina podloge, početnik, debljina zida, alati za štampu
from: 948e19af
---

Slajser štampača treba zatvoren oblik: bez rupa, svaka ploha okrenuta prema van, ništa ne prolazi kroz samo sebe. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} traži upravo to prije nego što preuzmeš datoteku.

## Provjeri i preuzmi

1. Odaberi ono što želiš štampati: jednu ili više grupa ili komponenti, ili neke plohe. Ako ništa nije odabrano, štampa se sve što je prikazano.
2. Klikni {{ui:Export}} u grupi {{ui:File}}, pa {{ui:Check for 3D printing (STL or 3MF)…}}.

   Dijalog počinje jednim redom: „Spremno za štampu”, koliko stvari treba popraviti prije štampe, ili koliko ih treba prvo pogledati. Svaki problem ima tri dijela: šta nije u redu, zašto je važno i šta uraditi. Zatim slijede veličina u milimetrima, zapremina, broj trouglova i tvoja podloga štampača.

3. Ako dijalog navodi stvari za popravku, klikni {{ui:Fix what can be fixed}} (vidi dolje). Provjera se sama ponovo pokreće.
4. Klikni {{ui:Download 3MF}} ili {{ui:Download STL}}.

Štampa se ono što vidiš: skrivene plohe, skrivene grupe i komponente, i sve na skrivenoj oznaci se izostavljaju. Veličine su uvijek u milimetrima, jedinici koju slajseri očekuju, bez obzira na jedinicu koju model prikazuje.

:::tip
Preferiraj 3MF kada ga tvoj slajser čita: čuva boje i jedinice. STL nema ni jedno ni drugo, a slajseri pretpostavljaju milimetre.
:::

## Šta provjera traži

Ovo zaustavlja štampu ili je kvari, i dijalog kaže „Nije spremno za štampu”:

| Problem | Šta znači | Šta uraditi |
|---|---|---|
| Ploha samo s jedne strane | Rupa: ivica ima plohu s jedne strane, a ništa s druge | Nacrtaj nedostajuću plohu (linija preko praznine ju često zatvori), ili koristi {{ui:Fix}} (dolje) |
| Dijeli je tri ili više ploha | Plohe se sastaju u peraju ili zidu unutar tijela | Obriši unutrašnju plohu |
| Plohe okrenute u suprotnim smjerovima | Neke plohe gledaju unutra, a neke van | Odaberi plohe koje gledaju unutra i klikni {{ui:Reverse face}} u {{ui:Entity info}} |
| Naopako | Cijeli zatvoreni dio gleda unutra | Odaberi njegove plohe i okreni ih |
| Prolazi kroz samog sebe | Jedan dio se savija kroz sebe | {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}, pa obriši ono što je unutra. Vidi [Presijeci plohe](topic:intersect) |

Ovo su upozorenja: model se štampa, ali pogledaj prvo.

- **Odvojeni dijelovi se preklapaju**, ili **dodiruju se plohom na plohu**: slajseri ih obično spajaju u jedno. Za čišću datoteku spoji ih s {{ui:Solids}} › {{ui:Union}}. Vidi [Alati za tijela](topic:solids).
- **Ništa ne leži ravno na dnu**: okreni model tako da ploha naleže na podlogu, inače će slajser dodati podrške ili splav.
- **Naginje se više od 45° od uspravnog položaja**: te plohe trebaju podršku. Dijalog kaže koliki dio površine to čini.
- **Manje od 1 mm u širini**: vjerovatno je modelirano u pogrešnoj jedinici. Provjeri jedinicu u statusnoj traci.

Šupalj dio (zatvorena ljuska unutar druge) je u redu: njegove plohe gledaju u šupljinu, a njegova zapremina se oduzima.

## Popravi probleme

Pod **Gdje su problemi**, dijalog imenuje svaku grupu ili komponentu u kojoj nešto nije u redu (labavi dijelovi koji nisu u grupi navode se kao „Plohe nisu u grupi”), sa onim što nije u redu u njoj. Komponenta postavljena više puta navodi se jednom: popravka nje popravlja svaki primjerak.

- {{ui:Show}} otvara tu grupu i odabire ivice i plohe koje nisu u redu, da budu istaknute.
- {{ui:Fix what can be fixed}} popravlja sve odjednom: zatvara rupe čije ivice leže ravno, uklanja plohe unutar oblika i zalutale ivice, i okreće plohe ispravnim smjerom prema van. To je jedan korak: {{key:Mod+Z}} ga poništava. Provjera se zatim ponovo pokreće i prikazuje šta je ostalo.

Ono što ne može popraviti (rupa čije ivice ne leže ravno, dio koji prolazi kroz sebe) ostaje na listi sa onim što treba uraditi ručno. {{ui:Repair}} pod **Alati za štampu** ide dalje: zatvara rupe koje nisu ravne, uklanja zalutale komade i udvostručene plohe, i navodi svaku popravku. Vidi [Podrške, debljina zida, šupljenje i popravka](topic:print-tools#repair). Također možeš popraviti jednu grupu u isto vrijeme: odaberi je, pa koristi {{ui:Show problems}} i {{ui:Fix}} u {{ui:Entity info}}. Vidi [Alati za tijela](topic:solids).

## Šuplji dio

{{ui:Hollow}} pod **Alati za štampu** izdubljuje dio na debljinu zida koju zadaš, s rupama za odvod gdje klikneš. Vidi [Šuplje](topic:print-tools#hollow).

Šupljinu možeš i sam nacrtati: zatvorena grupa unutar dijela, koja ga ne dodiruje, sa svim plohama okrenutim tako da gledaju u šupljinu. Provjera je broji kao šupljinu i oduzima njenu zapreminu; ne navodi se kao nešto za popravku.

## Podloga tvog štampača

Odaberi veličinu podloge štampača u {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:3D printer bed}}. Provjera tada upozorava kada je model veći od podloge, okrenut na bilo koji način. Vidi [Postavke](topic:settings#3d-printer-bed).

## Alati za štampu

Ispod nalaza dijaloga, **Alati za štampu** otvara {{ui:Supports preview}} (gdje idu podrške i otprilike koliko), {{ui:Wall thickness}} (zidovi pretanki za štampu), {{ui:Hollow}} i {{ui:Repair}}. Vidi [Podrške, debljina zida, šupljenje i popravka](topic:print-tools). {{ui:Split for printing}} reže model prevelik za podlogu na komade s konektorima i numerisanim spojevima: vidi [Podijeli veliki model za štampu](topic:print-split).

## Nije provjereno

Provjera ne sječe za štampu: sitne detalje koje tvoja mlaznica ne može nacrtati i prave podrške su stvar tvog slajsera. Vidi [Još nije izrađeno](topic:not-built-yet#3d-printing).
