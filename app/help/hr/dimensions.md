---
title: Kotirajte i promijenite veličinu onoga što ste nacrtali
summary: Postavite kote između kutova, na lukovima i kružnicama ili između dva brida; upišite novu duljinu da promijenite veličinu modela. Ponovno upišite duljinu brida ili širinu, dubinu i visinu grupe u Informacijama o entitetu.
keywords: kota, kote, promjena veličine, promijeni veličinu, uredi veličinu, duljina, širina, dubina, visina, rastezanje, upravljajuća kota, označi, mjeri, naknadno, radijus, promjer, kut, kutna, luk, kružnica, R, Ø
from: a1f815ec
---

U ModelCraftu veličine nisu fiksne kad je nešto nacrtano. Kota prikazuje duljinu na modelu, a upisivanje nove duljine u nju mijenja veličinu modela da joj odgovara. Također možete ponovno upisati duljinu brida, ili širinu, dubinu i visinu grupe, u {{ui:Informacije o entitetu}}.

## Postavite kotu

1. Pritisnite {{key:D}}, ili kliknite {{ui:Kota}} na alatnoj traci.
2. Kliknite kut od kojeg mjerite. Hvata se na kutove, polovišta i bridove, kao i pri crtanju.
3. Kliknite drugi kut.

   Ili kliknite jednom na **brid** (savjet kaže "Na bridu") da kotirate cijeli brid jednim klikom.
4. Pomaknite kursor tamo gdje treba biti kotna linija i kliknite. Također možete upisati pomak, npr. `0.5m`, i pritisnuti {{key:Enter}}.

   Kotna linija ostaje vodoravna za vodoravan brid, osim ako gledate s bočne strane. Za uspravan brid ostaje u uspravnoj ravnini koja vam je najbliža.

Statusna traka kaže "Kota 4 m." Kote prikazuju duljinu u jedinici modela i ažuriraju se kad promijenite jedinicu na birača.

## Radijus, promjer i kut

Isti alat {{ui:Kota}} kotira zaobljene stvari i kutove:

- **Luk:** kliknite luk. Savjet kaže {{ui:Radijus}}. Pomaknite kursor tamo gdje tekst treba biti i kliknite: kota glasi **R 1.5 m**.
- **Kružnica:** kliknite kružnicu. Dobivate **promjer** (**Ø 3 m**) s linijom preko kružnice kroz njezino središte. Poligoni rade isto, s kutovima na kružnici.
- **Kut između dva brida:** kliknite jedan brid, zatim drugi brid koji se s njim spaja u kutu (dok ste iznad njega, savjet kaže {{ui:Kut između bridova}}). Zatim uđite u kut koji želite i kliknite. Unutar kuta dobivate kut između bridova; pomaknite se na jednu stranu i dobivate kut pored njega (npr. 150° umjesto 30°). Koliko daleko od kuta kliknete određuje gdje ide luk; ili upišite tu udaljenost.

Da prebacite radijus u promjer ili natrag, odaberite kotu i izaberite u {{ui:Prikaži kao}} u {{ui:Informacije o entitetu}}.

**Promjena veličine pomoću njih:** upišite novi radijus ili promjer odmah nakon postavljanja, ili je odaberite kasnije i upišite. Luk ili kružnica zadržavaju središte i mijenjaju veličinu; ploha koju omeđuju (disk, kraj utora) mijenja se s njom. Dvije stvari samo mjere:

- **Kutna kota** nikad ne mijenja model. Da promijenite kut, zakrenite bridove alatom {{ui:Zakreni}}.
- **Kružnica na kraju valjka** (kružnica koju ste povukli alatom {{ui:Potisni/povuci}}) ne može se promijeniti iz njezine kote, jer bi se i njezine stranice morale promijeniti. Umjesto toga skalirajte valjak, oko njegove osi.

## Promijenite veličinu modela pomoću kote

Odmah nakon postavljanja kote, upišite novu duljinu i pritisnite {{key:Enter}}: `6m`, `12'`, `3500` u modelu u milimetrima. Model se mijenja na tu veličinu.

Kasnije, u bilo kojem trenutku:

1. Alatom {{ui:Odaberi}} kliknite tekst ili liniju kote. {{ui:Informacije o entitetu}} kaže **Kota** i prikazuje njezinu {{ui:Duljina}}.
2. Upišite novu duljinu i pritisnite {{key:Enter}}. Možete upisati ravno u okvir za vrijednost ili u okvir {{ui:Duljina}} u {{ui:Informacije o entitetu}}.

### Što se pomiče

Drugi kut koji ste kliknuli se pomiče, kao i sve iza njega:

- **Oba kuta na jednom dijelu** (širina kutije, visina zida): strana na pomičnom kutu klizi van ili unutra, a plohe spojene s njom se rastežu. Kutija ostaje zatvoreno tijelo, a sve što je u cijelosti na toj strani, npr. komponenta prozora, pomiče se s njom.
- **Kutovi na dva odvojena dijela** (razmak između dviju kutija): dio pomičnog kuta se pomiče cijeli, a razmak se mijenja.
- **Pomični kut unutar grupe ili komponente** u kojoj nije drugi kut: pomiče se cijela grupa.
- **Oba kuta unutar iste grupe ili komponente**: rasteže se unutra. Komponenta se mijenja svugdje gdje je postavljena, kao što uvijek pri uređivanju.

Da promijenite koji se kraj pomiče, odaberite kotu i izaberite u {{ui:Pomiče se}} u {{ui:Informacije o entitetu}}:

| Izbor | Što se događa |
|---|---|
| {{ui:Drugi kraj}} (zadano) | Kraj koji ste kliknuli drugi se pomiče |
| {{ui:Prvi kraj}} | Kraj koji ste kliknuli prvi se pomiče |
| {{ui:Oba kraja (centrirano)}} | Svaki kraj se pomiče za polovicu promjene, pa sredina ostaje na mjestu |

### Kad je promjena veličine odbijena

ModelCraft ništa ne mijenja i kaže zašto u statusnoj traci:

- "ploha bi izašla iz svoje ravnine": kota ide koso preko oblika. Kotirajte duž brida ili duž crvene, zelene ili plave osi.
- "ploha bi se smanjila na ništa ili bi se okrenula naopako": nova duljina je prekratka za oblik.
- "kraj koji se pomiče nije na kutu modela": taj kraj je postavljen u prazan prostor ili na sredinu brida. Odaberite drugi kraj u {{ui:Pomiče se}} ili postavite kotu na dva kuta.
- "duljina mora biti veća od nule".

Svaka promjena veličine je jedan korak: {{key:Mod+Z}} je poništava.

## Ponovno upišite veličinu u Informacijama o entitetu

Kotu ne trebate uvijek:

- **Brid:** odaberite ga. Njegova {{ui:Duljina}} u {{ui:Informacije o entitetu}} je okvir u koji možete upisati. Upisivanje duljine i u okvir za vrijednost također radi. Pomiče se kraj koji je dalje duž crvene, zatim zelene, zatim plave, a ono što je spojeno s njim se rasteže. Na primjer, ponovno upisivanje prednjeg donjeg brida kutije čini kutiju širom udesno.
- **Grupa ili komponenta:** odaberite je. {{ui:Širina (crvena)}}, {{ui:Dubina (zelena)}} i {{ui:Visina (plava)}} su okviri. Njezina daleka strana (desno, straga, gore) se pomiče. To su vlastite osi grupe, prije bilo kakve rotacije koju ste joj dali.

Pritisnite {{key:Enter}} za primjenu ili {{key:Esc}} da vratite staru vrijednost.

## Kote prate model

Kota je vezana za dva kuta na kojima je postavljena (kut: za svoj kut i daleke krajeve svoja dva brida; radijus ili promjer: za svoj luk ili kružnicu). Pomaknete, potisnete/povučete ili promijenite veličinu geometrije, a kota prati i prikazuje novu duljinu. Ostaje vezana kad geometriju pretvorite u grupu ili komponentu.

Ako je kraj postavljen negdje što nije kut (na plohi ili u praznom prostoru), ili je njegov kut izbrisan, taj kraj ostaje gdje je bio. Kota i dalje mjeri, ali može se mijenjati veličinom samo iz svog drugog kraja.

## Uklanjanje kota

- Jedna kota: odaberite je i pritisnite {{key:Delete}}, ili kliknite na nju s {{ui:Gumica}}.
- Sve kote: kad ništa nije odabrano, kliknite {{ui:Izbriši sve kote}} u {{ui:Informacije o entitetu}}.

Kote se spremaju u datoteku `.modelcraft`. Ne izvoze se u druge formate, koji nose samo 3D model. Datoteka s kotama se i dalje otvara u starijem ModelCraftu, ali bez njih.
