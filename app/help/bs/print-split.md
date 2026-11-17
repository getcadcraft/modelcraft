---
title: Podijeli velik model za štampu
summary: Presiječi model prevelik za tvoj štampač na dijelove koji stanu na podlogu, sa klinovima, ključevima, lastinim repovima, rupama za tiplove ili magnete i brojem spoja na obje strane, i preuzmi svaki dio i list sklopa u jednoj zip datoteci.
keywords: 3d štampa, podijeli, kosi rez, nagnuti rez, kosi, razdjelnik, rez, prevelik, veličina podloge, zapremina štampe, dijelovi, spojnice, klinovi, ključevi, lastin rep, tiplovi, magnet, zazor, tolerancija, brojevi dijelova, sklop, rastavljeni prikaz, zip, stl, 3mf, licenca, licence, license, usb ključ, dongle
from: ee96ba77
---

Kada je model veći od podloge tvog štampača, **Podijeli za štampu** ga reže na dijelove koji stanu, dodaje spojnice da se dijelovi poklope kada ih spojiš i urezuje isti broj na obje strane svakog spoja. Otvori {{ui:Izvezi}} › {{ui:Provjeri za 3D štampanje (STL ili 3MF)…}}; u redu **Alati za štampu** u dijalogu nalazi se {{ui:Podijeli za štampu}}. Otvara se kao kartica iznad prikaza.

Radi nad onim što se štampa: odabrano, ili sve što je prikazano ako ništa nije odabrano. Ono što se štampa mora biti zatvoreno tijelo; ako provjera nađe rupe, prvo koristi [Popravka](topic:print-tools#repair).

Radi u ModelCraftu, na tvom računaru: nema servera za licence, nema USB ključa, ništa se ne šalje.

## Kako rezati

- **Uklopi u podlogu, najmanje dijelova**: unesi širinu, dubinu i visinu podloge (polazi od {{ui:Postavke}} › ModelCraft › 3D štampač). Kartica kaže koliko dijelova treba i koliko je velik svaki; model reže na jednake dijelove, što manje moguće da stanu. Dio može ležati na boku u datotekama ako je to ono što ga čini stati. Spojnice koje strše iz dijela ulaze u njegovu veličinu.
- **Na mjestima koja zadam**: odaberi osu po kojoj se reže i upiši gdje, u milimetrima od donjeg kraja modela, odvojeno zarezima (`100, 200` pravi tri dijela).
  **Kosi rez** okreće rezove za do 60° oko jedne od dvije druge ose (npr. rez po Z nagnut oko X): svaki nagnuti rez prolazi kroz srednju liniju modela na svom mjestu, daje dijelovima veću površinu za lijepljenje i bolje skriva spoj na nagnutoj površini. Spojnice stoje pravo u odnosu na rez.

Ravni reza se dok je kartica otvorena crtaju oko modela kao isprekidane linije.

## Spojnice

Svako mjesto gdje se dva dijela dodiruju dobija spojnice, postavljene tamo gdje ima najviše prostora: najmanje **najmanji zid** plus **zazor** plus sopstvena veličina udaljeno od vanjske strane, i dovoljno daleko od svakog drugog reza da se dvije rupe nikada ne sretnu. Na dugoj površini dvije spojnice se raspoređuju duž nje, da se dijelovi ne mogu okretati.

- **Okrugli klinovi**: klin na jednom dijelu (zaobljen na vrhu), rupa na drugom.
- **Četvrtasti ključevi**: isto, ali četvrtasto, da dio može ići samo na jedan način.
- **Lastini repovi**: jezičak koji klizi u žlijeb sa strane. Gdje bi jedan kraj žlijeba sreo drugi rez, lastin rep staje kraće i ulazi sa otvorenog kraja. Lastini repovi odgovaraju rezovima u jednom smjeru (red kriški); u mreži koristi klinove ili tiplove.
- **Rupe za tiplove**: rupa sa svake strane; igle se također štampaju (u zip datoteci).
- **Džepovi za magnete**: džep sa svake strane za okrugli magnet prečnika i debljine koje zadaš. Provjeri polove prije lijepljenja.
- **Nema (lijepljenje)**.

**Zazor** je razmak sa svake strane između klina i njegove rupe (0,2 mm za početak). Tačan je prema broju koji zadaš: okrugle rupe se prave malo većim da njihove ravne strane, a ne uglovi, zadrže taj razmak. Povećaj ga ako dijelovi tvog štampača ispadnu tijesni.

Kada spoj nema mjesta za spojnicu (tanak zid, mala dodirna površina), kartica to kaže: taj spoj zalijepi.

## Brojevi dijelova

Sa uključenom opcijom **Urezuj brojeve spojeva na obje strane**, svaki spoj dobija broj svoja dva dijela, npr. `3-4`, urezan 0,6 mm duboko na obje strane, čitljiv ispravno na svakoj. Brojevi počinju visoki 5 mm i smanjuju se da stanu, do 2,5 mm; spoj bez mjesta za svoj broj se navodi. Dijelovi se numerišu od donjeg sloja naviše.

## Pregled, preuzimanje, podjela modela

1. {{ui:Pregled}} reže model i kaže koliko ima dijelova, spojeva i spojnica, da li svaki dio prolazi provjeru za 3D štampu i staje li na podlogu, i navodi veličinu svakog dijela. Prsten označava svaku spojnicu i broj u prikazu.
2. {{ui:Preuzmi dijelove (.zip)}} snima jednu zip datoteku: datoteku po dijelu (STL ili 3MF, kako izabereš pod **Datoteke**), svaki stoji na podlozi; igle za tiplove; i **list sklopa** — sliku dijelova rastavljenih sa njihovim brojevima (`assembly.svg` i `assembly.png`) i spisak dijelova i spojeva (`assembly.txt`).
3. {{ui:Podijeli model}} stavlja dijelove u model umjesto odabranih grupa ili komponenti, nazvane kao na listu sklopa, u jednom koraku: {{ui:Poništi}} vraća original. Potrebno je da su grupe ili komponente za podjelu odabrane; preuzimanje radi nad svime što se može štampati.

## Sam pomjeri spojnice

Nakon pregleda, **Spojnice ručno** ti omogućava da ispraviš gdje idu spojnice:

- {{ui:Pomjeri jednu}}: klikni crveni prsten u prikazu (postane zelen), zatim klikni gdje treba da ide na rezu.
- {{ui:Dodaj jednu}}: klikni u prikazu gdje treba da ide spojnica. Ide na ravan reza koju tvoj klik dosegne, između dva dijela tu.
- {{ui:Ukloni jednu}}: klikni crveni prsten da ukloniš tu spojnicu.

Svaka promjena se ponovo provjerava kao i automatske: mjesto previše blizu obrisa, drugi rez ili druga spojnica se ne pravi, i kartica to kaže. {{ui:Ponovo automatski}} zaboravlja tvoja mjesta. Ostaju dok model, odabir i rezovi ostaju isti.

Pregled ostaje dok se model, odabir ili postavka ne promijene; tada kartica traži da ponovo pregledaš.

:::note
Svaki dio se provjerava kao što bi ga provjera za 3D štampu provjerila prije preuzimanja. Tvoj slajser i dalje odlučuje kako se svaki dio štampa: pogledaj svaki tamo, i odštampaj prvo jedan spoj da vidiš kako tvoj štampač podnosi zazor.
:::
