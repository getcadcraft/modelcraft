---
title: Pregledaj model u VR naočarima
summary: Hodaj kroz model u punoj veličini u VR naočarima: skači, okreći se, mjeri, presijeci ga, postavi problem sa slikom, pogledaj ga kao model na stolu i sretni ostale u živoj sesiji.
keywords: vr, virtuelna stvarnost, naočare, webxr, xr, uronjeno, quest, oculus, vive, index, pico, hodanje, obilazak, teleportacija, pregled dizajna, pregled, mjerenje, presjek, rez, problem, problemi, bcf, radna ploča, model za sto, prisutnost, avatari, uživo, zajedno
from: fa2f591a
---

{{ui:Pregled u VR-u}} stavlja te unutar modela s VR naočarima, u punoj veličini. Stojiš tamo gdje je kamera pogleda, na podu ispod nje, okrenut u istom smjeru. Ništa se ne otprema: naočare prikazuju ono što preglednik crta na ovom računaru (ili u pregledniku samih naočara).

## Šta ti treba

- Naočare koje preglednik može da pokreće (WebXR): preglednik samostalnih naočara, ili Chrome ili Edge na računaru s priključenim naočarama.
- ModelCraft otvoren na sigurnoj stranici (https), kao na ovom sajtu.

Kad nema naočara, {{ui:Pregled u VR-u}} je zasivljen i kaže zašto.

## Početak

1. Postavi pogled odakle želiš da počneš: u prostoriji, ili vani gledajući zgradu.
2. Klikni {{ui:Pogledi}} u grupi {{ui:Kamera}}, zatim {{ui:Pregled u VR-u}}.
3. Stavi naočare.

Meni je na zadnjoj strani lijeve ruke. Pokaži na njega desnim kontrolerom i povuci okidač da izabereš dugme. (Samo s jednom rukom, meni lebdi ispred mjesta s kojeg si počeo.)

## Kako izgleda

Naočare prikazuju model u izgledu [živog pregleda](topic:live-view): izgledi i materijali koje si dao površinama, nebo i sunce s mjesta i datuma tvog modela sa svojom sjenom, lampe, raspršene biljke i kamenje, i svjetlo odbijeno od zidova i podova (računa se na ovom računaru dok se osvrćeš, i prati te dok se krećeš). Svjetlina i transformacija pogleda (ACES ili AgX) su one iz [Renderuj sliku](topic:render). Koliko se crta zavisi od onoga što preglednik naočara ima, kao i na računaru; ambijentalna okluzija, refleksije i bloom ostaju na računaru.

## Kretanje

- **Skok:** u {{ui:Pomjeri}}, pokaži na pod i povuci okidač; sletiš tamo. Ili gurni palicu naprijed da nišaniš, pa pusti da skočiš. Možeš slijetati samo na podove i tlo (površine okrenute gore), nikad na zid.
- **Okret:** gurni palicu lijevo ili desno: okreneš se za 30° svaki put.
- **Hodanje:** u prostoru za igru jednostavno hodaj.

## Mjerenje

Izaberi {{ui:Izmjeri}}, zatim povuci okidač na dvije tačke. Udaljenost se prikazuje između njih, u jedinicama modela. Tačka blizu ugla pripija se za ugao.

## Presijeci

Izaberi {{ui:Presjek}} i povuci okidač na površinu:

- na zidu (ili bilo čemu što nije pod): sve između tebe i te površine se odsijeca, pa vidiš unutra. Ovo najbolje radi spolja ili preko prostorije;
- na podu, odozgo: presjek plana 1.2 m iznad tog poda, pa zidovi pokazuju svoj donji dio.

{{ui:Očisti}} uklanja presjek i mjerenja. Ako ravan presjeka siječe model u prikazu kad počneš, naočare počinju s njom.

## Postavi problem

Izaberi {{ui:Problem}} i povuci okidač tamo gdje je problem. Numerisana igla ga obilježava, a ModelCraft čuva problem sa slikom onoga što si vidio i gdje si stajao. Kad napustiš VR, problemi su u listi {{ui:Problemi}} s desne strane:

- dugme s okom prikazuje problem s mjesta gdje je postavljen;
- {{ui:Spasi kao BCF}} preuzima sve kao BCF datoteku, koju otvaraju programi za BIM pregled (uključujući kameru i sliku);
- čuvaju se i u datoteci `.modelcraft`.

Dodaj komentar problemu nakon što napustiš VR, u BCF programu: unošenje teksta u naočarama još nije napravljeno.

## Pogledaj kao model na stolu

{{ui:Radna ploča}} smanjuje model da stane na sto ispred tebe; obiđi ga, ili ga okreni palicom. {{ui:Puna veličina}} te vraća tamo gdje si bio.

## S drugima, uživo

U [živoj sesiji](topic:work-live), svako u VR-u vidi ostale kao glavu i dvije ruke u svojoj boji, sa svojim imenom, i tačku gdje svako pokazuje. Izmjene koje neko napravi stignu do tvojih naočara za trenutak. Ljudi za stolom još se ne prikazuju u naočarama.

## Izlazak

Izaberi {{ui:Izađi iz VR-a}} (ili skini naočare i završi tamo). Pogled na ekranu se pomjera tamo gdje ti je bila glava.

:::note
Testirano samo s emulatorom naočara, još ne s pravim naočarama. Velik model može naočarama učiniti da zastaju: prvo sakrij ono što ti ne treba ([sakrivanje i izolacija](topic:hide-isolate)).
:::
