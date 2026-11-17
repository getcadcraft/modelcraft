---
title: Kotirajte i promenite veličinu onoga što ste nacrtali
summary: Postavljajte kote između uglova, na lukovima i krugovima ili između dve ivice; upišite novu dužinu da promenite veličinu modela. Ponovo upišite dužinu ivice ili širinu, dubinu i visinu grupe u Podacima o entitetu.
keywords: kota, kote, promena veličine, promeni veličinu, dužina, širina, dubina, visina, rastezanje, kota koja upravlja, anotiranje, meriti, naknadno, poluprečnik, prečnik, ugao, luk, krug, R, Ø
from: a1f815ec
---

Veličine u ModelCraft-u nisu fiksirane kada je nešto nacrtano. Kota prikazuje dužinu na modelu, a upisivanje nove dužine u nju menja veličinu modela da se poklopi. Takođe možete ponovo upisati dužinu ivice, ili širinu, dubinu i visinu grupe, u {{ui:Podaci o entitetu}}.

## Postavljanje kote

1. Pritisnite {{key:D}} ili kliknite {{ui:Kota}} na alatnoj traci.
2. Kliknite ugao od kog merite. Hvata se za uglove, sredine i ivice, kao i pri crtanju.
3. Kliknite drugi ugao.

   Ili kliknite jednom na **ivicu** (savet kaže „Na ivici“) da kotirate celu ivicu jednim klikom.
4. Pomerite kursor tamo gde linija kote treba da ide i kliknite. Takođe možete upisati pomeraj, na primer `0.5m`, i pritisnuti {{key:Enter}}.

   Linija kote ostaje vodoravna za vodoravnu ivicu, osim ako je gledate sa strane. Za uspravnu ivicu ostaje u uspravnoj ravni koja najbolje gleda ka vama.

Statusna traka kaže „Kota 4 m.“ Kote prikazuju dužinu u jedinici modela i ažuriraju se kada promenite jedinicu na biraču.

## Poluprečnik, prečnik i ugao

Isti alat {{ui:Kota}} kotira okrugle stvari i uglove:

- **Luk:** kliknite luk. Savet kaže {{ui:Poluprečnik}}. Pomerite kursor tamo gde treba da bude tekst i kliknite: kota glasi **R 1.5 m**.
- **Krug:** kliknite krug. Dobijate **prečnik** (**Ø 3 m**) sa linijom preko kruga kroz njegov centar. Poligoni rade isto, sa uglovima na krugu.
- **Ugao između dve ivice:** kliknite jednu ivicu, pa kliknite drugu ivicu koja se s njom sastaje u uglu (dok ste iznad nje, savet kaže {{ui:Ugao između ivica}}). Zatim pomerite u ugao koji želite i kliknite. Unutar ugla dobijate ugao između ivica; pomerite se na jednu stranu i dobijate ugao pored njega (na primer 150° umesto 30°). Koliko daleko od ugla kliknete određuje gde ide luk; ili upišite to rastojanje.

Da prebacite poluprečnik u prečnik ili nazad, izaberite kotu i izaberite u {{ui:Prikaži kao}} u {{ui:Podaci o entitetu}}.

**Promena veličine pomoću njih:** upišite novi poluprečnik ili prečnik odmah posle postavljanja, ili ga izaberite kasnije i upišite. Luk ili krug zadržava svoj centar i menja veličinu; strana koju ograničava (disk, kraj proreza) menja se s njim. Dve stvari samo mere:

- **Kota ugla** nikada ne menja model. Da promenite ugao, rotirajte ivice pomoću {{ui:Rotiraj}}.
- **Krug na kraju valjka** (krug koji ste izvukli pomoću {{ui:Guraj/vuci}}) ne može da se promeni veličina iz svoje kote, jer bi i njegove strane morale da se menjaju. Umesto toga skalirajte valjak oko njegove ose.

## Promena veličine modela pomoću kote

Odmah posle postavljanja kote upišite novu dužinu i pritisnite {{key:Enter}}: `6m`, `12'`, `3500` u modelu u milimetrima. Model se menja na tu veličinu.

Kasnije, u bilo koje vreme:

1. Pomoću {{ui:Izaberi}} kliknite tekst ili liniju kote. {{ui:Podaci o entitetu}} kaže **Kota** i prikazuje njenu {{ui:Dužina}}.
2. Upišite novu dužinu i pritisnite {{key:Enter}}. Možete upisati direktno u polje za vrednost, ili u polje {{ui:Dužina}} u {{ui:Podaci o entitetu}}.

### Šta se pomera

Drugi ugao na koji ste kliknuli se pomera, i pomera se sve iza njega:

- **Oba ugla na jednom delu** (širina kutije, visina zida): strana na pokretnom uglu klizi napolje ili unutra, a strane spojene s njom se rastežu. Kutija ostaje zatvoreno telo, a sve što potpuno stoji na toj strani, na primer komponenta prozora, pomera se s njom.
- **Uglovi na dva zasebna dela** (razmak između dve kutije): deo pokretnog ugla se pomera kao celina, a razmak se menja.
- **Pokretni ugao unutar grupe ili komponente** u kojoj drugi ugao nije: cela grupa se pomera.
- **Oba ugla unutar iste grupe ili komponente**: ona se rasteže iznutra. Komponenta se menja na svakom mestu gde je postavljena, kao što je uvek kad se uređuje.

Da promenite koji kraj se pomera, izaberite kotu i izaberite u {{ui:Pomera se}} u {{ui:Podaci o entitetu}}:

| Izbor | Šta se dešava |
|---|---|
| {{ui:Drugi kraj}} (podrazumevano) | Kraj na koji ste kliknuli drugi se pomera |
| {{ui:Prvi kraj}} | Kraj na koji ste kliknuli prvi se pomera |
| {{ui:Oba kraja (centrirano)}} | Svaki kraj se pomera za polovinu promene, pa sredina ostaje na mestu |

### Kada je promena veličine odbijena

ModelCraft ništa ne menja i kaže zašto na statusnoj traci:

- „strana bi se savila van svoje ravni“: kota ide koso preko oblika. Kotirajte duž ivice, ili duž crvene, zelene ili plave.
- „strana bi se smanjila na nulu ili bi se okrenula naopako“: nova dužina je prekratka za oblik.
- „kraj koji se pomera nije na uglu modela“: taj kraj je postavljen u prazan prostor ili na sredinu ivice. Izaberite drugi kraj u {{ui:Pomera se}}, ili postavite kotu na dva ugla.
- „dužina mora biti veća od nule“.

Svaka promena veličine je jedan korak: {{key:Mod+Z}} je opoziva.

## Ponovno upisivanje veličine u Podacima o entitetu

Kota vam nije uvek potrebna:

- **Ivica:** izaberite je. Njena {{ui:Dužina}} u {{ui:Podaci o entitetu}} je polje u koje možete da upisujete. Upisivanje dužine u polje za vrednost takođe radi. Kraj koji je dalje duž crvene, zatim zelene, pa plave se pomera, a ono što je s njim spojeno se rasteže. Na primer, ponovno upisivanje prednje donje ivice kutije čini kutiju širom udesno.
- **Grupa ili komponenta:** izaberite je. {{ui:Širina (crvena)}}, {{ui:Dubina (zelena)}} i {{ui:Visina (plava)}} su polja. Njena udaljena strana (desno, pozadi, gore) se pomera. To su sopstvene ose grupe, pre bilo kog okretanja koje ste joj dali.

Pritisnite {{key:Enter}} da primenite, ili {{key:Esc}} da vratite staru vrednost.

## Kote prate model

Kota je vezana za dva ugla na koja je postavljena (ugao: za svoj ugao i krajnje tačke dve ivice; poluprečnik ili prečnik: za svoj luk ili krug). Pomerite, gurnite/povucite ili promenite veličinu geometrije, a kota prati i prikazuje novu dužinu. Ostaje vezana kada geometriju pretvorite u grupu ili komponentu.

Ako je kraj postavljen negde što nije ugao (na strani ili u praznom prostoru), ili je njegov ugao obrisan, taj kraj ostaje gde je bio. Kota i dalje meri, ali može da menja veličinu samo sa svog drugog kraja.

## Uklanjanje kota

- Jedna kota: izaberite je i pritisnite {{key:Delete}}, ili kliknite na nju {{ui:Gumicom}}.
- Sve kote: kada ništa nije izabrano, kliknite {{ui:Obriši sve kote}} u {{ui:Podaci o entitetu}}.

Kote se čuvaju u datoteci `.modelcraft`. Ne izvoze se u druge formate, koji nose samo 3D model. Datoteka sa kotama se i dalje otvara u starijem ModelCraft-u, bez njih.
