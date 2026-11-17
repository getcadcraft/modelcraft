---
title: Crtanje ploha linijama, pravokutnicima, kružnicama i lukovima
summary: Napravite ravne plohe na tlu ili na drugim plohama, podijelite ih linijama i crtajte kružnice i poligone sa željenim brojem stranica.
keywords: crtaj, linija, pravokutnik, kružnica, poligon, odmakni, okvir, obrub, luk, krivulja, spline, glatko, kabel, putanja, ispupčenje, radijus, krivulja, ploha, tlocrt, otisak, podijeli, stranice, segmenti, obris, olovka
from: b6d7b7dd
---

Sve u ModelCraftu počinje kao ravna **ploha**: površina zatvorena bridovima. Plohu možete nacrtati izravno s {{ui:Pravokutnik}}, {{ui:Kružnica}} ili {{ui:Poligon}}, ili je obrubiti brid po brid s {{ui:Linija}}. Plohe su ono što [Potisni/povuci](topic:push-pull) pretvara u tijela.

## Nacrtajte pravokutnik

1. Pritisnite {{key:R}}.
2. Kliknite prvi kut: na tlu ili na bilo kojoj plohi modela.
3. Pomaknite pokazivač. Pravokutnik ostaje na tlu (ili na plohi s koje ste počeli), a okvir za vrijednost ({{ui:Kote}}) pokazuje njegovu širinu i dubinu. Savjet kaže „Kvadrat“ kad su stranice jednake.

   Za crtanje na drugoj ravnini pokažite na nju: ploha koja prolazi kroz prvi kut stavlja pravokutnik na tu plohu, a hvatanje za točku izvan ravnine (krajnja točka, brid ili plava os) podiže pravokutnik kroz oba kuta. Vratite hvatanje na točku na prvoj ravnini i opet će ležati. Da zadržite jednu ravninu, pritisnite tipku sa strelicom: {{key:Up}} drži pravokutnik vodoravno (plava ravnina), {{key:Right}} na crvenoj ravnini, {{key:Left}} na zelenoj. Ponovno pritisnite istu tipku za otključavanje.
4. Kliknite suprotni kut ili upišite dvije veličine odvojene zarezom i pritisnite {{key:Enter}}: `4m,3m`, `4000,3000` u modelu u milimetrima ili `12',10'6"` u stopama i inčima.

   Pojavi se ploha s četiri brida oko sebe.

Upisane veličine idu u smjeru u kojem ste pokazivali: ako je pokazivač lijevo od prvog kuta kad upisujete, pravokutnik raste ulijevo.

:::warning
Zarez odvaja dvije veličine, pa ne može biti decimalni znak. Upišite `2.5m,3m`, nikad `2,5m`.
:::

## Nacrtajte kružnicu ili poligon

1. Pritisnite {{key:C}} za kružnicu ili {{key:N}} za poligon.
2. Da promijenite broj stranica, upišite ga prije klika: `12s` (ili samo `12`) i {{key:Enter}}. Kružnica počinje s 24 stranice, a poligon sa 6. Savjet pokazuje trenutačni broj, a ModelCraft ga pamti za sljedeću kružnicu dok ga ne promijenite ili ne promijenite alat.
3. Kliknite središte, na tlu ili na plohi. Da središte bude na plohi, pokažite na sredinu plohe („Središte plohe“) ili na sredinu jednog od njezinih bridova („Polovište“), s pokazivačem tik unutar te plohe: kružnica se crta na toj plohi, čak i na uskom kraju dugačkog kvadra.
4. Kliknite za postavljanje radijusa ili ga upišite ({{ui:Radijus}} u okviru za vrijednost) i pritisnite {{key:Enter}}.

Kružnica je poligon s mnogo stranica. Kad je povučete gore s Potisni/povuci, stranice se omekšaju da valjak izgleda kao jedna glatka površina.

## Nacrtajte luk

1. Pritisnite {{key:A}} ({{ui:Luk}}).
2. Kliknite gdje luk počinje, zatim gdje završava (ili upišite duljinu između njih).
3. Pomaknite pokazivač da luk ispupčite i kliknite. Savjet kaže „Polukrug“ kad je ispupčenje polovica udaljenosti između krajeva. Ili upišite koliko je središte luka udaljeno: `2` i {{key:Enter}}.

Za crtanje luka oko točke koristite {{ui:Luk iz središta}}: kliknite središte, zatim gdje luk počinje (ili upišite radijus), pa gdje završava (ili upišite kut u stupnjevima, npr. `90`). Hvata se u koracima od 15°.

Luk započet na plohi crta se na toj plohi; inače leži na tlu ili stoji uspravno kad su mu dva kraja na različitim visinama. Luk ima 12 segmenata; za više upišite `24s` dok crtate. Lukovi zatvaraju plohe kao i linije: luk preko kuta pravokutnika dijeli ga.

## Nacrtajte glatku krivulju

{{ui:Krivulja}} crta glatku liniju koja prolazi kroz svaku točku na koju kliknete: kabel, put ograde, rub vrta. Može napustiti tlo: točke se hvataju za kutove, bridove i plohe bilo gdje, a strelice zaključavaju crveno, zeleno ili plavo kao i kod {{ui:Linija}}.

1. Kliknite {{ui:Krivulja}} u grupi {{ui:Crtanje}}.
2. Kliknite točke kroz koje krivulja prolazi. Upišite `<0,0,1>` i {{key:Enter}} za točku 1 iznad zadnje, `[x,y,z]` za točno mjesto ili duljinu za točku toliko daleko prema pokazivaču.
3. Pritisnite {{key:Enter}} ili dvaput kliknite za završetak. Ponovno kliknite prvu točku da zatvorite krivulju. {{key:Backspace}} uzima zadnju točku natrag.

Krivulja se odabire kao jedan dio. Za promjenu odaberite je i kliknite {{ui:Uredi točke}} u {{ui:Informacije o entitetu}}: njezine točke prikazuju se kao kvadratići. Kliknite jednu, zatim kliknite gdje ide (ili upišite `<dx,dy,dz>`). {{key:Esc}} vraća točku natrag i završava uređivanje. Zatvorena ravna krivulja pravi plohu; krivulja koja obrubljuje plohu više se ne može uređivati.

## Odmak: obrub unutar ili izvan plohe

{{ui:Odmakni}} kopira obris plohe na zadanu udaljenost unutra (ili van), za okvir, obrub, prag ili staklo ekrana.

1. Pritisnite {{key:F}} i kliknite plohu, ili prvo odaberite plohu pa pritisnite {{key:F}}.
2. Pomaknite pokazivač u plohu za unutarnji obris ili iz nje za vanjski. Novi obris prati pokazivač, a savjet kaže koliko je daleko.
3. Kliknite ili upišite udaljenost i pritisnite {{key:Enter}}.

Ploha se dijeli na dvije: unutarnju plohu i okvir oko nje (ili novi prsten izvan). Odmah potisnite ili povucite bilo koju: za ekran nacrtajte kutiju, potisnite je na debljinu, odmaknite prednju plohu 30 mm prema unutra i malo potisnite unutarnju plohu za staklo. Rupe u plohi također se odmiču, a luk ili kružnica ostaje jedna (manja ili veća) krivulja.

- **Dvaput kliknite** plohu s {{ui:Odmakni}} za odmak za zadnju udaljenost.
- **Bridovi:** odaberite lanac povezanih bridova u jednoj ravnini (na primjer dvije linije od slova L), pritisnite {{key:F}}, pomaknite se na željenu stranu i upišite udaljenost: nacrta se paralelna kopija s kosim spojevima na kutovima.
- Kad je udaljenost veća nego što ploha dopušta, ModelCraft to kaže i ne crta ništa.

## Lukovi, kružnice i poligoni su krivulje

Kliknite bilo koji segment luka, kružnice ili poligona i odabire se cijela krivulja. {{ui:Informacije o entitetu}} tada pokazuju njezin radijus, segmente, kut (lukovi) i duljinu. Upišite novi radijus da je promijenite veličinu oko njezina središta; plohe nacrtane u njezinoj ravnini slijede. Kad je ploha krivulje jednom potisnuta ili povučena, njezin radijus ostaje kakav jest.

## Crtanje linijama

1. Pritisnite {{key:L}}.
2. Kliknite gdje linija počinje.
3. Kliknite gdje završava ili upišite duljinu i pritisnite {{key:Enter}}. Upisana duljina ide u smjeru koji pokazuje pokazivač.
4. Nastavite klikati. Svaki klik započinje sljedeću liniju od kraja prethodne.
5. Zatvorite obris klikom na prvu točku. Kad linije zatvore ravnu petlju, ona se ispuni plohom i alat prestaje spajati. Pritisnite {{key:Esc}} za zaustavljanje u bilo kojem trenutku.

Linije slijede crveni, zeleni i plavi smjer kad im se približite; linija poprimi tu boju, a savjet kaže „Na crvenoj osi“. Pogledajte [Zaključavanje smjera i hvatanje](topic:inference) za zaključavanje smjera i hvatanje na točke.

### Kamo ide linija kad ništa ne dotiče

- Linija koja počinje na plohi ostaje u ravnini te plohe.
- Linija koja počinje na tlu ili u praznom prostoru ostaje vodoravna s početnom točkom. Ako modelu gledate sa strane, ide u okomitu ravninu okrenutu prema vama.
- Da nacrtate liniju do točnog mjesta, upišite točku: `[x,y,z]` za točku u modelu ili `<dx,dy,dz>` za pomak od početka. Pogledajte [Upisivanje točnih veličina](topic:value-box).

## Podijelite plohu

Nacrtajte liniju preko plohe, od jednog brida do drugog (ili od brida do brida preko drugih linija). Ploha se dijeli na dvije plohe. Svaka zadržava svoju stranu i boju. Isto vrijedi za pravokutnik ili kružnicu nacrtanu na plohi: oblik postaje vlastita ploha unutar veće, koja sad ima rupu.

Tako se rasporede sobe na podnoj ploči, prozor na zidu ili stepenica na stubištu: nacrtajte obris na plohi, pa potisnite ili povucite novu plohu.

## Plohe okrenute na krivu stranu

Svaka ploha ima prednju i stražnju stranu. Stražnja je plavo-siva. Plohe nacrtane na tlu gledaju prema gore; plohe nacrtane na drugoj plohi gledaju istim smjerom kao ona.

Ako ploha pokazuje stražnju stranu tamo gdje očekujete prednju, odaberite je i kliknite {{ui:Okreni plohu}} u {{ui:Informacije o entitetu}}.

## Što vidite dok crtate

- Obojena oznaka tamo gdje se pokazivač hvata, i njezin naziv u savjetu dolje lijevo.
- Pregled linije ili oblika.
- Veličina uživo u okviru za vrijednost. U nju možete upisati bilo kad.

## Ako oblik nije tamo gdje ste očekivali

- Na zaslonu osjetljivom na dodir pogledajte [Rješavanje problema](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Ako se linija uhvatila za nešto daleko iza, malo zakrenite pogled: točke iza plohe nikad se ne hvataju, ali točke na njezinu bridu da.
- Pritisnite {{key:Mod+Z}} za poništavanje zadnjeg oblika; jedno poništavanje uklanja jednu liniju ili jedan oblik.
