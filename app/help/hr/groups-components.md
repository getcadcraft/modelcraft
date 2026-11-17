---
title: Grupe i komponente
summary: Spriječite da se objekti lijepe jedni za druge, uredite jednu kopiju da se promijene sve i koristite panele {{ui:Struktura}} i {{ui:Komponente}}.
keywords: grupa, komponenta, napravi grupu, napravi komponentu, rastavi, učini jedinstvenom, struktura, instance, kopije, blok, ugniježđeno, uredi grupu, postavi
from: 7cb925f3
---

Slobodna geometrija u ModelCraftu se lijepi: linije koje se dodiruju međusobno se dijele, a plohe koje dijele brid pomiču se zajedno. To omogućuje crtanje na plohama, ali znači i da se kutija nacrtana uz drugu kutiju s njom spaja. **Grupe** i **komponente** drže stvari odvojenima.

- **Grupa** obuhvaća neku geometriju tako da se ponaša kao jedan objekt. Ništa izvan nje ne može se zalijepiti za nju.
- **Komponenta** je grupa koja se može postaviti mnogo puta. Svaka kopija dijeli isti sadržaj: uredite jednu i sve se promijene. Koristite komponente za sve što se ponavlja: prozore, stupove, stolove, drveće.

## Napravite grupu ili komponentu

1. Odaberite geometriju. Trostruki klik na plohu odabire cijeli povezani objekt; povlačenje okvirom odabire sve unutar okvira.
2. Pritisnite {{key:Shift+G}} za grupu ili {{key:G}} za komponentu. Možete i kliknuti {{ui:Grupa}} ili {{ui:Komponenta}} u grupi {{ui:Organizacija}} na alatnoj traci ili {{ui:Napravi grupu (Shift+G)}} ili {{ui:Napravi komponentu (G)}} u {{ui:Informacije o entitetu}}.

   Statusna traka kaže "Grupirano kao Group#1." ili "Napravljena komponenta Component#1.", novi objekt je odabran i pojavljuje se u {{ui:Struktura}}.

3. Za imenovanje upišite naziv u polje {{ui:Naziv}} u {{ui:Informacije o entitetu}} i pritisnite {{key:Enter}} ili kliknite izvan polja.

Odabir plohe povlači i njezine bridove. Ako ništa nije odabrano, statusna traka kaže "Najprije odaberite geometriju (povucite okvir ili trostruko kliknite za odabir svega povezanog)."

Možete grupirati i grupe: odaberite nekoliko grupa i pritisnite {{key:Shift+G}}. {{ui:Struktura}} prikazuje ugniježđenje.

:::note
Slova tipki odgovaraju zadanim postavkama SketchUpa: {{key:G}} stvara komponentu, {{key:Shift+G}} grupu.
:::

## Uređivanje unutar grupe ili komponente

1. Dvaput kliknite na nju (u prikazu ili u {{ui:Struktura}}) ili je odaberite i kliknite {{ui:Uređivanje}} u {{ui:Informacije o entitetu}}.

   Ostatak modela se stišava, osi se pomiču na vlastite osi grupe, a {{ui:Struktura}} glasi "Uređivanje: Model › Group#1". Statusna traka kaže "Uređivanje Group#1. Esc ili dvostruki klik izvan nje je zatvara."

2. Crtajte, potiskujte i povlačite, pomičite i brišite kao inače. Sve što radite ostaje unutar grupe.
3. Zatvorite je: pritisnite {{key:Esc}} (dvaput ako je nešto odabrano), dvaput kliknite prazan prostor ili kliknite {{ui:Zatvori grupu}} u {{ui:Struktura}}.

Dok je komponenta otvorena, svaka njezina kopija se mijenja dok radite.

## Postavite još kopija komponente

- Kopirajte je s {{ui:Pomakni}} i {{key:Ctrl}} (vidi [Pomicanje i kopiranje](topic:move-copy)). Svaka kopija je još jedno postavljanje iste komponente.
- Ili kliknite {{ui:Postavi}} pored nje na panelu {{ui:Komponente}}, zatim kliknite mjesto na koje ide. Njezino ishodište, najniži kut okvira oko odabranog pri stvaranju, dolazi na mjesto na koje kliknete. Alat se zatim vraća na {{ui:Odaberi}}.

{{ui:Komponente}} prikazuje koliko je kopija postavljeno ("4×"), a {{ui:Struktura}} prikazuje broj iza naziva.

## Preuredite u Strukturi

Povucite redak u {{ui:Struktura}} da promijenite mjesto kojem pripada. Ništa se ne pomiče u prikazu: grupa zadržava svoje mjesto u modelu.

- **U grupu:** ispustite na sredinu retka grupe (redak dobije isprekidani obrub). Ide unutra, na kraj.
- **Drugim redoslijedom:** ispustite na gornji ili donji rub retka (pojavi se crta). Ide odmah prije ili poslije tog retka, unutar iste grupe kao taj redak, pa tako može ući u grupu na odabranom mjestu.
- **Na najvišu razinu:** ispustite na naslov {{ui:Struktura}}. Ide na kraj.

Svako ispuštanje je jedan korak: {{key:Mod+Z}} ga vraća. {{key:Esc}} tijekom povlačenja ništa ne ispušta. Grupa ne može ići u samu sebe ni u grupu koju sadrži. Povlačenje je isključeno dok {{ui:Traži po nazivu}} sadrži tekst.

:::touch
Zadržite prst na retku trenutak, zatim ga povucite. Brzo prevlačenje pomiče popis.
:::

## Promijenite jednu kopiju

Odaberite kopiju i kliknite {{ui:Učini jedinstvenom}} u {{ui:Informacije o entitetu}} (prikazuje se kad je komponenta postavljena više puta). Ta kopija dobiva vlastitu definiciju, nazvanu kao izvorna s novim brojem. Uredite je bez dodirivanja ostalih.

## Pretvorite grupu u komponentu

Odaberite grupu i kliknite {{ui:Napravi komponentu}} u {{ui:Informacije o entitetu}}. Dobiva novi naziv, npr. Component#2, čak i ako ste grupu imenovali; upišite naziv ponovo u {{ui:Naziv}}.

## Rastavljanje

Odaberite grupu ili komponentu i kliknite {{ui:Rastavi}} (na alatnoj traci ili u {{ui:Informacije o entitetu}}). Njezin sadržaj postaje slobodna geometrija na istom mjestu i lijepi se za ono što dotiče. Grupe unutar nje ostaju grupe.

## Puno tijelo i volumen

Kad odaberete grupu ili komponentu, {{ui:Informacije o entitetu}} prikazuje **Puno tijelo: Da** ako su njezine plohe zatvorene bez razmaka (svaki brid dijele točno dvije plohe) i ako unutar nje nema ugniježđenih grupa. Tada prikazuje i **volumen**. Kutija, zid s probijenim prozorom i izvučeni valjak su puna tijela; kutija s obrisanim vrhom nije.

## Kad ode zadnja kopija

Brisanje zadnje kopije komponente uklanja je i s panela {{ui:Komponente}}. {{key:Mod+Z}} je vraća.

## Što treba znati

- Kopije **grupe** napravljene s {{ui:Pomakni}} u ovoj verziji dijele sadržaj, kao i kopije komponenti: uređivanje jedne mijenja druge. Da biste jednu učinili neovisnom, kliknite {{ui:Napravi komponentu}}, zatim {{ui:Učini jedinstvenom}}. Vidi [Rješavanje problema](topic:troubleshooting#editing-one-group-changed-another).
- Komponente ne probijaju otvore u zidovima niti se lijepe za plohe, a nema ni biblioteke gotovih komponenti. Sami ih izrađujete ili ih uvozite.
- Uvezene datoteke dolaze kao grupa. Collada datoteke zadržavaju vlastite grupe i komponente unutar nje.
