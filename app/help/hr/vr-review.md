---
title: Pregled modela u VR naočalama
summary: Prolazite kroz model u punoj veličini s VR naočalama: skačite, okrećite se, mjerite, presiječite ga, postavljajte teme sa slikom, pogledajte ga kao model na stolu i upoznajte ostale iz žive sesije.
keywords: vr, virtualna stvarnost, naočale, webxr, xr, uronjeni, quest, oculus, vive, index, pico, prolazak, obilazak, teleportacija, pregled dizajna, pregled, mjerenje, presjek, rez, tema, teme, bcf, model na stolu, mjerilo, prisutnost, avatari, uživo, zajedno
from: fa2f591a
---

{{ui:Pregled u VR-u}} vas stavlja unutar modela s VR naočalama, u punoj veličini. Stojite tamo gdje je kamera prikaza, na podu ispod nje, okrenuti u istom smjeru. Ništa se ne učitava: naočale prikazuju ono što preglednik crta na ovom računalu (ili u vlastitom pregledniku naočala).

## Što trebate

- VR naočale koje preglednik može pokretati (WebXR): vlastiti preglednik samostalnih naočala ili Chrome ili Edge na računalu s povezanim naočalama.
- ModelCraft otvoren na sigurnoj stranici (https), kako je na ovom web-mjestu.

Kad nema naočala, {{ui:Pregled u VR-u}} je zasivljen i kaže zašto.

## Pokretanje

1. Postavite prikaz tamo gdje želite započeti: u prostoriji ili vani gledajući zgradu.
2. Kliknite {{ui:Pogledi}} u grupi {{ui:Kamera}}, zatim {{ui:Pregled u VR-u}}.
3. Stavite naočale.

Izbornik je na stražnjoj strani lijeve ruke. Pokažite na njega desnim kontrolerom i povucite okidač da odaberete gumb. (Samo s jednom rukom izbornik lebdi ispred mjesta s kojeg ste krenuli.)

## Kako izgleda

Naočale prikazuju model u izgledu [prikaza uživo](topic:live-view): izgled i materijali koje ste dali plohama, nebo i sunce s mjesta i datuma vašeg modela i sa sjenom, svjetiljke, raspršene biljke i kamenje te svjetlo odbijeno od zidova i podova (izračunava se na ovom računalu dok gledate okolo i prati vas dok se krećete). Svjetlina i transformacija prikaza (ACES ili AgX) jednake su onima u [Renderiranju slike](topic:render). Koliko se toga crta ovisi o tome što preglednik naočala ima, kao i na računalu; ambijentalna okluzija, refleksije i bloom ostaju na računalu.

## Kretanje

- **Skok:** u {{ui:Pomakni}} pokažite na pod i povucite okidač; sletite tamo. Ili gurnite palicu naprijed za ciljanje i otpustite za skok. Možete sletjeti samo na podove i tlo (plohe okrenute prema gore), nikad na zid.
- **Okret:** gurnite palicu lijevo ili desno: okrenete se za 30° svaki put.
- **Hodanje:** na svom prostoru za igru jednostavno hodajte.

## Mjerenje

Odaberite {{ui:Mjerenje}}, zatim povucite okidač na dvije točke. Udaljenost se prikazuje između njih, u jedinicama modela. Točka blizu kuta prianja uz kut.

## Presijecanje

Odaberite {{ui:Presjek}} i povucite okidač na plohu:

- na zidu (ili bilo čemu što nije pod): sve između vas i te plohe odreže se, pa vidite unutra. Ovo najbolje radi izvana ili preko prostorije;
- na podu, odozgo: tlocrtni rez 1.2 m iznad tog poda, pa zidovi pokazuju donji dio.

{{ui:Očisti}} uklanja rez i mjere. Ako ravnina presjeka siječe model u prikazu kad počnete, naočale počinju s njom.

## Postavljanje teme

Odaberite {{ui:Tema}} i povucite okidač na mjestu problema. Oznaka s brojem to obilježava, a ModelCraft čuva temu sa slikom onoga što ste vidjeli i gdje ste stajali. Kad napustite VR, teme su na popisu {{ui:Teme}} s desne strane:

- gumb s okom prikazuje temu s mjesta na kojem je postavljena;
- {{ui:Spremi kao BCF}} preuzima ih sve kao BCF datoteku, koju otvaraju programi za pregled BIM-a (uključujući kameru i sliku);
- spremaju se i u datoteku `.modelcraft`.

Komentar uz temu dodajte nakon što napustite VR, u BCF programu: upisivanje u naočalama još nije izrađeno.

## Pogled kao model na stolu

{{ui:Na stolu}} smanjuje model da stane na stol ispred vas; hodajte oko njega ili ga okrenite palicom. {{ui:Prava veličina}} vraća vas tamo gdje ste bili.

## S drugima, uživo

U [sesiji uživo](topic:work-live) svi u VR-u vide ostale kao glavu i dvije ruke u vlastitoj boji, s imenom, i točkicu na mjestu na koje svaki pokazuje. Izmjene koje netko napravi stignu na vaše naočale unutar trenutka. Ljudi za stolom još se ne prikazuju u naočalama.

## Izlazak

Odaberite {{ui:Napusti VR}} (ili skinite naočale i završite tamo). Prikaz na zaslonu pomiče se na mjesto gdje je bila vaša glava.

:::note
Testirano samo s emulatorom naočala, još ne sa stvarnim naočalama. Veliki model može uzrokovati trzanje naočala: prije toga sakrijte što vam ne treba ([sakrivanje i izoliranje](topic:hide-isolate)).
:::
