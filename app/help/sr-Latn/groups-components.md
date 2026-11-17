---
title: Grupe i komponente
summary: Sprečite da se predmeti lepe, izmenite jednu kopiju da biste promenili sve, i koristite panele Pregled i Komponente.
keywords: grupa, komponenta, napravi grupu, napravi komponentu, rastavi, napravi jedinstvenu, pregled, instance, kopije, blok, ugnježdeno, uredi grupu, postavi
from: 7cb925f3
---

Slobodna geometrija se u ModelCraft-u lepi: linije koje se dodiruju seku jedna drugu, a površi koje dele ivicu pomeraju se zajedno. To je ono što omogućava crtanje na površima, ali znači i da se kutija nacrtana uz drugu kutiju spaja s njom. **Grupe** i **komponente** drže stvari odvojeno.

- **Grupa** obuhvata neku geometriju tako da se ponaša kao jedan objekat. Ništa spolja ne može da se zalepi za nju.
- **Komponenta** je grupa koja može da se postavi mnogo puta. Svaka kopija deli isti sadržaj: izmenite jednu i sve se menjaju. Koristite komponente za sve što se ponavlja: prozore, stubove, stolove, drveće.

## Napravi grupu ili komponentu

1. Izaberite geometriju. Trostruki klik na površ bira ceo povezani objekat; prevlačenje prozora bira sve u okviru.
2. Pritisnite {{key:Shift+G}} za grupu ili {{key:G}} za komponentu. Možete i kliknuti {{ui:Grupa}} ili {{ui:Komponenta}} u grupi {{ui:Organizacija}} na alatnoj traci, ili {{ui:Napravi grupu (Shift+G)}} ili {{ui:Napravi komponentu (G)}} u {{ui:Podaci o entitetu}}.

   Statusna traka kaže „Grupisano kao Group#1.“ ili „Napravljena komponenta Component#1.“, novi objekat je izabran i pojavljuje se u {{ui:Pregled}}.

3. Da biste ga imenovali, unesite ime u polje {{ui:Naziv}} u {{ui:Podaci o entitetu}} i pritisnite {{key:Enter}} ili kliknite van polja.

Izborom površi biraju se i njene ivice. Ako ništa nije izabrano, statusna traka kaže „Prvo izaberite geometriju (prevucite prozor ili trostruko kliknite da izaberete sve povezano).“

Možete grupisati i grupe: izaberite nekoliko grupa i pritisnite {{key:Shift+G}}. {{ui:Pregled}} prikazuje ugnježdavanje.

:::note
Slova tastera se poklapaju s podrazumevanim u SketchUp-u: {{key:G}} pravi komponentu, {{key:Shift+G}} grupu.
:::

## Uređivanje unutar grupe ili komponente

1. Dvaput kliknite na nju (u prikazu ili u {{ui:Pregled}}), ili je izaberite i kliknite {{ui:Uređivanje}} u {{ui:Podaci o entitetu}}.

   Ostatak modela bledi, ose se pomeraju na sopstvene ose grupe, a {{ui:Pregled}} glasi „Uređivanje: Model › Group#1“. Statusna traka kaže „Uređivanje Group#1. Esc ili dvostruki klik van nje zatvara je.“

2. Crtajte, guražite/vucite, premeštajte i brišite kao obično. Sve što radite ostaje unutar grupe.
3. Zatvorite je: pritisnite {{key:Esc}} (dvaput ako je nešto izabrano), dvaput kliknite prazan prostor, ili kliknite {{ui:Zatvori grupu}} u {{ui:Pregled}}.

Dok je komponenta otvorena, svaka njena kopija se menja dok radite.

## Postavi više kopija komponente

- Kopirajte je pomoću {{ui:Premesti}} i {{key:Ctrl}} (vidi [Premeštanje i kopiranje](topic:move-copy)). Svaka kopija je još jedno postavljanje iste komponente.
- Ili kliknite {{ui:Postavi}} pored nje u panelu {{ui:Komponente}}, pa kliknite gde treba da ide. Njen izvor, donji levi ugao kutije oko onoga što ste izabrali kad ste je napravili, postavlja se tamo gde kliknete. Alat se zatim vraća na {{ui:Izaberi}}.

{{ui:Komponente}} prikazuje koliko je kopija postavljeno („4×“), a {{ui:Pregled}} prikazuje broj posle naziva.

## Preraspodela u Pregledu

Prevucite red u {{ui:Pregled}} da promenite kom delu pripada. Ništa se ne pomera u prikazu: grupa zadržava svoje mesto u modelu.

- **U grupu:** ispustite ga na sredinu reda grupe (red dobija isprekidan okvir). Ulazi unutra, na kraj.
- **Drugačiji redosled:** ispustite ga na gornju ili donju ivicu reda (pojaviće se linija). Stavlja se odmah pre ili posle tog reda, unutar iste grupe kao taj red, pa se time može ubaciti i u grupu na izabranom mestu.
- **Na najviši nivo:** ispustite ga na naslov {{ui:Pregled}}. Ide na kraj.

Svako ispuštanje je jedan korak: {{key:Mod+Z}} ga vraća. {{key:Esc}} tokom prevlačenja ništa ne ispušta. Grupa ne može da se stavi unutar same sebe ni unutar grupe koju sadrži. Prevlačenje je isključeno dok {{ui:Pronađi po imenu}} ima tekst.

:::touch
Držite prst na redu nekoliko trenutaka, pa ga prevucite. Brzo prevlačenje pomera listu.
:::

## Napravi jednu kopiju drugačijom

Izaberite kopiju i kliknite {{ui:Napravi jedinstvenu}} u {{ui:Podaci o entitetu}} (prikazuje se kad je komponenta postavljena više puta). Ta kopija dobija sopstvenu definiciju, nazvanu kao original, sa novim brojem. Uredite je bez dodirivanja ostalih.

## Pretvori grupu u komponentu

Izaberite grupu i kliknite {{ui:Napravi komponentu}} u {{ui:Podaci o entitetu}}. Dobija novi naziv, npr. Component#2, čak i ako ste grupu imenovali; upišite naziv ponovo u {{ui:Naziv}}.

## Rastavi

Izaberite grupu ili komponentu i kliknite {{ui:Rastavi}} (na alatnoj traci ili u {{ui:Podaci o entitetu}}). Njen sadržaj postaje slobodna geometrija na mestu gde je bio i lepi se za ono što dodiruje. Grupe unutar nje ostaju grupe.

## Čvrsto telo i zapremina

Kad izaberete grupu ili komponentu, {{ui:Podaci o entitetu}} prikazuje **Čvrsto telo: Da** ako su njene površi zatvorene bez razmaka (svaku ivicu dele tačno dve površi) i ako nema ugnježdenih grupa unutar nje. Tada prikazuje i **zapreminu**. Kutija, zid sa prozorom isečenim kroz njega i izvučeni cilindar su čvrsta tela; kutija kojoj je gornja površ obrisana nije.

## Kad ode poslednja kopija

Brisanje poslednje kopije komponente uklanja je i iz panela {{ui:Komponente}}. {{key:Mod+Z}} je vraća.

## Šta treba znati

- Kopije **grupe** napravljene pomoću {{ui:Premesti}} u ovoj verziji dele sadržaj, kao i kopije komponenti: izmena jedne menja ostale. Da biste jednu učinili nezavisnom, kliknite {{ui:Napravi komponentu}}, pa {{ui:Napravi jedinstvenu}}. Vidi [Rešavanje problema](topic:troubleshooting#editing-one-group-changed-another).
- Komponente ne seku otvore u zidovima i ne lepe se za površi, a ne postoji biblioteka gotovih komponenti. Pravite sopstvene ili ih uvezite.
- Uvezeni fajlovi stižu kao grupa. Collada fajlovi zadržavaju svoje grupe i komponente unutar nje.
