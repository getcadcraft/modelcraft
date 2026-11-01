---
title: Zaslon ModelCrafta
summary: Obilazak alatne trake, ploča sa svake strane, 3D prikaza i statusne trake, pod njihovim imenima na zaslonu.
keywords: zaslon, raspored, alatna traka, ploče, struktura, informacije o entitetu, stil, scene, statusna traka, okvir za vrijednosti, jedinice, sučelje, obilazak
from: 4a9a4516
---

Odozgo prema dolje: traka aplikacije, alatna traka, tri stupca (lijeve ploče, 3D prikaz, desne ploče) i statusna traka.

## Traka aplikacije

Tanka traka na samom vrhu pripada svakoj CadCraft aplikaciji. Ima ime i verziju aplikacije, {{ui:O aplikaciji ModelCraft}}, gumb načina zaslona i prekidač {{ui:Papir}} / {{ui:Model}}.

- {{ui:Papir}} je svijetla tema, a {{ui:Model}} tamna. 3D prikaz mijenja boje u skladu s tim; vaš se model ne mijenja.
- Gumb načina zaslona (isprva piše {{ui:Cijeli zaslon}}) i {{key:Ctrl+Shift+F}} prolaze kroz tri načina: uobičajeni, cijeli zaslon i cijeli zaslon sa skrivenim trakama. Sa skrivenim trakama pokažite na gornji rub zaslona (ili ga dodirnite) da se vrate. {{key:Esc}} izlazi iz cijelog zaslona.

:::note
{{key:Ctrl+Shift+F}} koristi tipku Control na svakom računalu, i na Macu. Na iPhoneu, gdje preglednici nemaju cijeli zaslon, gumb samo sakriva i prikazuje trake.
:::

## Alatna traka

Alatna traka podijeljena je u označene grupe. Zadržite pokazivač iznad gumba da vidite njegovo ime i tipku.

S njezine lijeve strane popis {{ui:Radni prostor}} mijenja čemu služe alatna traka i desna ploča: {{ui:Model}} (modeliranje potiskivanjem i povlačenjem, obilazak u nastavku), {{ui:Mreža}} ([uređivanje mreže](topic:mesh-edit)), {{ui:Krivulja}} ([objekti krivulja](topic:curves)), {{ui:UV}} ([raspored UV-a](topic:uv)), {{ui:Kiparenje}} ([kiparenje](topic:sculpt)), {{ui:Sjenčanje}} ([materijali izrađeni čvorovima](topic:shading)), {{ui:Animacija}} ([animacija](topic:animate)) i {{ui:Renderiranje}} ([renderiranje u prikazu](topic:render#render-in-the-view)).

| Grupa | Gumbi |
|---|---|
| Datoteka | {{ui:Novo}}, {{ui:Otvori}}, {{ui:Spremi}}, {{ui:Uvezi}}, {{ui:Izvezi}} (izbornik formata) |
| Crtanje | {{ui:Linija}} ({{key:L}}), {{ui:Pravokutnik}} ({{key:R}}), {{ui:Kružnica}} ({{key:C}}), {{ui:Poligon}} ({{key:N}}) |
| Izmjena | {{ui:Odaberi}} ({{key:Space}}), {{ui:Potisni/povuci}} ({{key:P}}), {{ui:Pomakni}} ({{key:M}}), {{ui:Zakreni}} ({{key:Q}}), {{ui:Skaliraj}} ({{key:S}}), {{ui:Gumica}} ({{key:E}}), {{ui:Mjerna vrpca}} ({{key:T}}) |
| Organizacija | {{ui:Komponenta}} ({{key:G}}), {{ui:Grupa}} ({{key:Shift+G}}), {{ui:Rastavi}} |
| Uređivanje | {{ui:Poništi}} ({{key:Mod+Z}}), {{ui:Ponovi}} ({{key:Mod+Y}}), {{ui:Kopiraj}} ({{key:Mod+C}}), {{ui:Zalijepi}} ({{key:Mod+V}}), {{ui:Više}} (izbornik: izreži, kopiraj, zalijepi, zalijepi na isto mjesto {{key:Mod+Shift+V}}, dupliciraj {{key:Mod+D}}, izbriši, odaberi sve, poništi odabir i stil tipki) |
| Kamera | {{ui:Orbit}} ({{key:O}}), {{ui:Pan}} ({{key:H}}), {{ui:Zumiranje}} ({{key:Z}}), {{ui:Opseg}} ({{key:Shift+Z}}), {{ui:Pogledi}} (izbornik) |

Prikazane tipke su one za potiskivanje i povlačenje; kad je u [postavkama ModelCrafta](topic:settings) odabran stil Modelar, opisi alata umjesto njih prikazuju te tipke. Alat koji koristite prikazan je pritisnut. Na uskom zaslonu alatna traka se pomiče vodoravno.

Izbornik {{ui:Pogledi}} ima {{ui:Izometrija}}, {{ui:Gore}}, {{ui:Naprijed}}, {{ui:Desno}}, {{ui:Straga}}, {{ui:Lijevo}} i {{ui:Dolje}}, svaki prilagođen modelu, te {{ui:Perspektiva}}, što prebacuje između perspektivne i paralelne projekcije.

## 3D prikaz

Sredina zaslona. Crvena, zelena i plava linija su osi: crvena i zelena leže na tlu, plava pokazuje prema gore, a **sjever je zelena os**. Gdje se sastaju je ishodište.

- Kad počnete, kartica naslovljena „Započnite modeliranje“ navodi prvih nekoliko tipki. Nestaje kad odaberete alat za crtanje ili kliknete u prikazu.
- Dok alat radi, prikaz pokazuje **oznake zaključivanja**: male obojene oblike na mjestu gdje se pokazivač hvata (zeleni krug na krajnjoj točki, cijan na polovištu, crveni kvadrat na bridu, plavi romb na plohi). Pogledajte [Zaključivanje i hvatanje](topic:inference).
- Odabrane stvari postaju plave. Ploha gledana straga je plavosiva.
- Kad otvorite grupu za uređivanje, sve izvan nje blijedi, a osi se premještaju na vlastite osi grupe.
- Kad model ima scene, preko vrha prikaza pojavljuje se red kartica scena.
- Ispustite datoteku bilo gdje na prikaz da je otvorite ili uvezete.

## Lijeve ploče

**{{ui:Struktura}}** navodi grupe i komponente u modelu, ugniježđene onako kako su ugniježđene u modelu. Komponenta korištena više puta prikazuje koliko puta, na primjer „Window (4)“.

- Kliknite ime da ga odaberete. Dvaput kliknite da ga otvorite za uređivanje.
- **Traženje po imenu** (prikazuje se kad postoje dvije ili više grupa) zadržava samo retke čije ime odgovara, s grupama u kojima se nalaze. {{key:Esc}} ga briše.
- **Oko** na kraju retka sakriva ili prikazuje tu grupu ili komponentu (kao {{ui:Uredi}} › {{ui:Više}} › {{ui:Sakrij}}). Ikona oznake znači da je sakrivena svojom [oznakom](topic:tags).
- **Preimenovanje na mjestu:** kliknite redak, zatim pritisnite {{key:F2}}, upišite i pritisnite {{key:Enter}} ({{key:Esc}} zadržava staro ime).
- **Povucite redak** na sredinu retka druge grupe da ga premjestite unutar te grupe, na gornji ili donji rub retka da ga stavite neposredno prije ili poslije tog retka, ili na naslov {{ui:Struktura}} da ga premjestite na najvišu razinu. U modelu ostaje gdje je i zadržava svoju boju, oznaku i ime. Grupa ne može ući sama u sebe. Svako premještanje je jedan korak poništavanja. Pogledajte [Preslažite u strukturi](topic:groups-components#rearrange-in-the-outliner).
- Dok uređujete unutar grupe, redak piše „Uređuje se: Model › …“ i pojavljuje se gumb {{ui:Zatvori grupu}}. Zatvara sve otvorene razine odjednom.

**{{ui:Komponente}}** navodi svaku definiciju komponente s brojem postavljenih kopija („3×“) i gumbom {{ui:Postavi}} koji dodaje još jednu kopiju gdje kliknete.

## Desne ploče

**{{ui:Informacije o entitetu}}** opisuju što je odabrano. Njihov naslov mijenja se da kaže o čemu je riječ:

| Naslov | Prikazuje | Gumbi |
|---|---|---|
| Model (ništa nije odabrano) | Plohe, bridove, grupe, komponente i koliko ih je postavljeno, pomoćne linije, ukupnu veličinu | {{ui:Izbriši sve pomoćne linije}} (kad ih ima) |
| Ploha | Površinu, broj rupa | {{ui:Okreni plohu}} |
| Brid | Duljinu | nema |
| Grupa ili komponenta | Ime (upišite za preimenovanje), koliko je puta postavljena, je li zatvoreno puno tijelo, njezin obujam, njezinu veličinu | {{ui:Uredi}}, {{ui:Rastavi}}, {{ui:Učini jedinstvenom}} (komponenta postavljena više puta), {{ui:Napravi komponentu}} (grupa) |
| Pomoćna točka ili pomoćna linija | ništa | {{ui:Izbriši}} |
| Više stvari | Koliko ploha, bridova, grupa i pomoćnih linija, ukupnu površinu ploha | {{ui:Napravi komponentu (G)}}, {{ui:Napravi grupu (Shift+G)}} |

**{{ui:Stil}}** određuje kako se model crta: {{ui:Plohe}} ({{ui:Sjenčano}}, {{ui:Skrivene linije}}, {{ui:Žičani model}}, {{ui:Rendgen}}), {{ui:Prikaži bridove}} i {{ui:Sjene od sunca}} s datumom, vremenom i mjestom sunca. Pogledajte [Stilovi i sjene od sunca](topic:styles-shadows).

**{{ui:Scene}}** spremaju poglede: {{ui:Dodaj scenu}}, popis scena te {{ui:Prethodna}}, {{ui:Reproduciraj}} i {{ui:Sljedeća}}. Pogledajte [Spremite poglede kao scene](topic:scenes).

## Statusna traka

Uz dno, slijeva nadesno:

1. **Savjet**: što alat želi dalje ili za što se pokazivač hvata („Krajnja točka“, „Na crvenoj osi“).
2. **Poruke**: što se upravo dogodilo („Poništeno potiskivanje/povlačenje.“, „Uvezeno: site.dxf: bridova na tlu: 1697, u grupi.“) ili zašto nešto nije uspjelo.
3. **Okvir za vrijednosti**: njegova oznaka mijenja se s alatom ({{ui:Duljina}}, {{ui:Dimenzije}}, {{ui:Radijus}}, {{ui:Stranice}}, {{ui:Udaljenost}}, {{ui:Kut}}, {{ui:Mjerilo}}, {{ui:Odmak}}). Prikazuje trenutačnu veličinu dok radite i prima ono što upišete. Pogledajte [Upisujte točne veličine u okvir za vrijednosti](topic:value-box).
4. **Stil tipki**: {{ui:Tipke: potisni/povuci}} ili {{ui:Tipke: modelar}} odjednom prebacuje tipkovničke prečace i tipke miša (isto kao u [postavkama ModelCrafta](topic:settings)).
5. **{{ui:Hvatanje}} i {{ui:Sudar}}**: hvatanje za točke, bridove i osi te tijela koja se zaustavljaju gdje se dodiruju. Precrtano = isključeno. Kliknite za prebacivanje. Pogledajte [postavke ModelCrafta](topic:settings).
6. **Birač jedinica**: jedinica u kojoj se prikazuju duljine. Pogledajte [Početak rada](topic:getting-started#check-the-units-first).

## Na uskom zaslonu

Ispod oko 760 piksela širine (telefon ili uzak prozor) 3D prikaz zadržava zaslon. Alatna traka je jedan red koji se pomiče vodoravno, a ploče se otvaraju kao listovi iz trake pri dnu zaslona.
