---
title: Grupe i komponente
summary: Spriječite da se objekti lijepe jedan za drugi, uredite jednu kopiju da promijenite sve i koristite panele Pregled i Komponente.
keywords: grupa, komponenta, napravi grupu, napravi komponentu, rastavi, učini jedinstvenom, pregled, instance, kopije, blok, ugniježđeno, uredi grupu, postavi
from: 7cb925f3
---

Slobodna geometrija u ModelCraft-u se lijepi: linije koje se dodiruju dijele jedna drugu, a plohe koje dijele ivicu pomjeraju se zajedno. To omogućava crtanje na plohama, ali znači i da se kutija nacrtana uz drugu kutiju spaja s njom. **Grupe** i **komponente** drže stvari odvojeno.

- **Grupa** obuhvata geometriju tako da se ponaša kao jedan objekat. Ništa izvan nje ne može se zalijepiti za nju.
- **Komponenta** je grupa koja se može postaviti mnogo puta. Svaka kopija dijeli isti sadržaj: uredite jednu i sve se promijene. Koristite komponente za sve što se ponavlja: prozore, stubove, stolove, drveće.

## Napravi grupu ili komponentu

1. Odaberite geometriju. Trostruki klik na plohu odabire cijeli povezani objekat; prevlačenje prozora odabire sve u okviru.
2. Pritisnite {{key:Shift+G}} za grupu ili {{key:G}} za komponentu. Možete i kliknuti {{ui:Group}} ili {{ui:Component}} u grupi {{ui:Organize}} na alatnoj traci, ili {{ui:Make group (Shift+G)}} ili {{ui:Make component (G)}} u {{ui:Entity info}}.

   Statusna traka kaže "Grouped as Group#1." ili "Made component Component#1.", novi objekat je odabran i pojavljuje se u {{ui:Outliner}}.

3. Da ga imenujete, upišite naziv u polje {{ui:Name}} u {{ui:Entity info}} i pritisnite {{key:Enter}} ili kliknite van polja.

Odabir plohe povlači i njene ivice. Ako ništa nije odabrano, statusna traka kaže: "Select some geometry first (drag a window, or triple-click to select everything connected)."

Grupe možete grupisati i u grupe: odaberite nekoliko grupa i pritisnite {{key:Shift+G}}. {{ui:Outliner}} prikazuje ugniježđenost.

:::note
Slova tastera se poklapaju s podrazumijevanim postavkama SketchUp-a: {{key:G}} pravi komponentu, {{key:Shift+G}} grupu.
:::

## Uređivanje unutar grupe ili komponente

1. Dvaput kliknite na nju (u prikazu ili u {{ui:Outliner}}), ili je odaberite i kliknite {{ui:Edit}} u {{ui:Entity info}}.

   Ostatak modela blijedi, ose se pomjeraju na vlastite ose grupe, a {{ui:Outliner}} glasi "Editing: Model › Group#1". Statusna traka kaže: "Editing Group#1. Esc or double-click outside closes it."

2. Crtajte, gurajte i povlačite, pomjerajte i brišite kao obično. Sve što uradite ostaje unutar grupe.
3. Zatvorite je: pritisnite {{key:Esc}} (dvaput ako je nešto odabrano), dvaput kliknite prazan prostor ili kliknite {{ui:Close group}} u {{ui:Outliner}}.

Dok je komponenta otvorena, svaka njena kopija se mijenja dok radite.

## Postavite još kopija komponente

- Kopirajte je s {{ui:Move}} i {{key:Ctrl}} (vidi [Pomjeranje i kopiranje](topic:move-copy)). Svaka kopija je još jedno postavljanje iste komponente.
- Ili kliknite {{ui:Place}} pored nje u panelu {{ui:Components}}, pa kliknite mjesto na koje ide. Njena tačka porijekla, najniži ugao okvira oko onoga što ste odabrali pri pravljenju, dolazi tamo gdje kliknete. Alat se zatim vraća na {{ui:Select}}.

{{ui:Components}} prikazuje koliko je kopija postavljeno ("4×"), a {{ui:Outliner}} prikazuje broj iza naziva.

## Preuređivanje u pregledu

Prevucite red u {{ui:Outliner}} da promijenite mjesto kojem pripada. Ništa se ne pomjera u prikazu: grupa zadržava svoje mjesto u modelu.

- **U grupu:** spustite ga na sredinu reda grupe (red dobije isprekidani okvir). Ulazi unutra, kao posljednji.
- **Drugim redoslijedom:** spustite ga na gornju ili donju ivicu reda (pojavi se linija). Ide odmah prije ili poslije tog reda, unutar iste grupe kao taj red, pa ovim postupkom objekat ulazi i u grupu na odabranom mjestu.
- **Na najviši nivo:** spustite ga na naslov {{ui:Outliner}}. Ide kao posljednji.

Svako spuštanje je jedan korak: {{key:Mod+Z}} ga vraća. {{key:Esc}} tokom prevlačenja ne spušta ništa. Grupa ne može ići unutar sebe ili unutar grupe koju sadrži. Prevlačenje je isključeno dok {{ui:Find by name}} ima tekst.

:::touch
Držite prst na redu kratko, pa ga prevucite. Brzi prevlak pomjera listu.
:::

## Napravite jednu kopiju drugačijom

Odaberite kopiju i kliknite {{ui:Make unique}} u {{ui:Entity info}} (prikazano kad je komponenta postavljena više puta). Ta kopija dobija vlastitu definiciju, nazvanu kao original s novim brojem. Uredite je bez dodirivanja drugih.

## Pretvorite grupu u komponentu

Odaberite grupu i kliknite {{ui:Make component}} u {{ui:Entity info}}. Dobija novi naziv, npr. Component#2, čak i ako ste grupu imenovali; upišite naziv ponovo u {{ui:Name}}.

## Rastavi

Odaberite grupu ili komponentu i kliknite {{ui:Explode}} (na alatnoj traci ili u {{ui:Entity info}}). Njen sadržaj postaje slobodna geometrija na mjestu gdje je bio i lijepi se za ono što dodiruje. Grupe unutar nje ostaju grupe.

## Puno tijelo i zapremina

Kad odaberete grupu ili komponentu, {{ui:Entity info}} pokazuje **Puno tijelo: Da** ako se njene plohe zatvaraju bez praznina (svaku ivicu dijele tačno dvije plohe) i ako nema ugniježđenih grupa unutar nje. Tada pokazuje i **zapreminu**. Kutija, zid s prozorom isječenim kroz njega i izvučeni cilindar su puna tijela; kutija s obrisanim vrhom nije.

## Kad ode posljednja kopija

Brisanjem posljednje kopije komponente ona se takođe uklanja iz panela {{ui:Components}}. {{key:Mod+Z}} je vraća.

## Što treba znati

- Kopije **grupe** napravljene s {{ui:Move}} u ovoj verziji dijele sadržaj, kao i kopije komponenti: uređivanje jedne mijenja ostale. Da je učinite nezavisnom, kliknite {{ui:Make component}}, pa {{ui:Make unique}}. Vidi [Rješavanje problema](topic:troubleshooting#editing-one-group-changed-another).
- Komponente ne prave otvore u zidovima i ne lijepe se za plohe, a ne postoji biblioteka gotovih komponenti. Pravite vlastite ili ih uvezite.
- Uvezene datoteke stižu kao grupa. Collada datoteke zadržavaju vlastite grupe i komponente unutar nje.
