---
title: Ekran programa ModelCraft
summary: Obilazak trake alata, panela sa svake strane, 3D pogleda i statusne trake, po njihovim nazivima na ekranu.
keywords: ekran, raspored, traka alata, paneli, pregled, podaci o entitetu, stil, scene, statusna traka, polje za vrednost, jedinice, interfejs, obilazak
from: 4a9a4516
---

Od vrha do dna: traka aplikacije, traka alata, tri kolone (levi paneli, 3D pogled, desni paneli) i statusna traka.

## Traka aplikacije

Tanka traka na samom vrhu pripada svakoj CadCraft aplikaciji. Ima naziv i verziju aplikacije, {{ui:O ModelCraft-u}}, dugme režima prikaza i prekidač {{ui:Papir}} / {{ui:Model}}.

- {{ui:Papir}} je svetla tema, a {{ui:Model}} tamna. 3D pogled menja boje da se uklopi; tvoj model se ne menja.
- Dugme režima prikaza (na početku piše {{ui:Ceo ekran}}) i {{key:Ctrl+Shift+F}} ciklično menjaju tri režima: normalan, ceo ekran i ceo ekran sa sakrivenim trakama. Kad su trake sakrivene, pokaži na gornju ivicu ekrana (ili je dodirni) da se vrate. {{key:Esc}} izlazi iz celog ekrana.

:::note
{{key:Ctrl+Shift+F}} koristi taster Control na svakom računaru, pa i na Mac-u. Na iPhone-u, gde pregledači nemaju ceo ekran, dugme samo sakriva i prikazuje trake.
:::

## Traka alata

Traka alata je podeljena na grupe sa nazivima. Pređi mišem preko dugmeta da vidiš njegov naziv i taster.

Na levoj strani, lista {{ui:Radni prostor}} menja čemu služe traka alata i desni panel: {{ui:Model}} (modelovanje guranjem i vučenjem, obilazak gore), {{ui:Mreža}} ([uređivanje mreže](topic:mesh-edit)), {{ui:Kriva}} ([objekti krivih](topic:curves)), {{ui:UV}} ([raspored UV-ova](topic:uv)), {{ui:Oblikovanje}} ([oblikovanje](topic:sculpt)), {{ui:Senčenje}} ([materijali napravljeni čvorovima](topic:shading)), {{ui:Animiraj}} ([animacija](topic:animate)) i {{ui:Renderuj}} ([renderovanje u prikazu](topic:render#render-in-the-view)).

| Grupa | Dugmad |
|---|---|
| {{ui:Datoteka}} | {{ui:Novo}}, {{ui:Otvori}}, {{ui:Sačuvaj}}, {{ui:Uvezi}}, {{ui:Izvezi}} (meni formata) |
| {{ui:Crtanje}} | {{ui:Linija}} ({{key:L}}), {{ui:Pravougaonik}} ({{key:R}}), {{ui:Krug}} ({{key:C}}), {{ui:Poligon}} ({{key:N}}) |
| Izmena | {{ui:Izaberi}} ({{key:Space}}), {{ui:Guraj/vuci}} ({{key:P}}), {{ui:Premesti}} ({{key:M}}), {{ui:Rotiraj}} ({{key:Q}}), {{ui:Skaliraj}} ({{key:S}}), {{ui:Gumica}} ({{key:E}}), {{ui:Merna traka}} ({{key:T}}) |
| Organizacija | {{ui:Komponenta}} ({{key:G}}), {{ui:Grupa}} ({{key:Shift+G}}), {{ui:Rastavi}} |
| {{ui:Uređivanje}} | {{ui:Opozovi}} ({{key:Mod+Z}}), {{ui:Ponovi}} ({{key:Mod+Y}}), {{ui:Kopiraj}} ({{key:Mod+C}}), {{ui:Nalepi}} ({{key:Mod+V}}), {{ui:Više}} (meni: iseci, kopiraj, nalepi, nalepi na istom mestu {{key:Mod+Shift+V}}, dupliraj {{key:Mod+D}}, izbriši, izaberi sve, poništi izbor, i stil tastera) |
| Kamera | {{ui:Orbitiraj}} ({{key:O}}), {{ui:Pomeri pogled}} ({{key:H}}), {{ui:Zumiraj}} ({{key:Z}}), {{ui:Sve}} ({{key:Shift+Z}}), {{ui:Pogledi}} (meni) |

Prikazani tasteri su oni za stil Guraj/vuci; sa stilom Modelar izabranim u [podešavanjima ModelCraft-a](topic:settings), opisi prikazuju te tastere. Alat koji koristiš prikazan je pritisnut. Na uskom ekranu traka alata se pomera u stranu.

Meni {{ui:Pogledi}} ima {{ui:Izometrija}}, {{ui:Gore}}, {{ui:Spredaj}}, {{ui:Desno}}, {{ui:Pozadi}}, {{ui:Levo}} i {{ui:Dole}}, svaki prilagođen modelu, i {{ui:Perspektiva}}, koja prebacuje između perspektive i paralelne projekcije.

## 3D pogled

Sredina ekrana. Crvena, zelena i plava linija su ose: crvena i zelena leže na podlozi, plava pokazuje nagore, a **sever je zelena osa**. Mesto gde se seku je koordinatni početak.

- Kad počneš, kartica pod nazivom „Počni modeliranje“ navodi prve tastere. Nestaje kad izabereš alat za crtanje ili klikneš u prikaz.
- Dok alat radi, pogled prikazuje **markere privlačenja**: male obojene oblike na mestu gde pokazivač hvata: zeleni krug na krajnjoj tački, cijan na središnjoj tački, crveni kvadrat na ivici, plavi romb na površi. Pogledaj [Privlačenje i hvatanje](topic:inference).
- Izabrane stvari postaju plave. Površ gledana sa zadnje strane je plavo-siva.
- Kad otvoriš grupu za uređivanje, sve van nje bledi, a ose se pomeraju na sopstvene ose grupe.
- Kad model ima scene, u gornjem delu prikaza pojavljuje se red kartica scena.
- Prevuci datoteku bilo gde na prikaz da je otvoriš ili uvezeš.

## Levi paneli

**{{ui:Pregled}}** navodi grupe i komponente u modelu, ugnježdene onako kako su ugnježdene u modelu. Komponenta koja je korišćena više puta pokazuje koliko puta, kao „Prozor (4)“.

- Klikni naziv da ga izabereš. Dvoklikni da ga otvoriš za uređivanje.
- **Traži po nazivu** (prikazuje se kad ima dve ili više grupa) zadržava samo redove čiji naziv odgovara, sa grupama u kojima se nalaze. {{key:Esc}} ga briše.
- **Oko** na kraju reda sakriva ili prikazuje tu grupu ili komponentu (kao što to radi {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Sakrij}}). Ikona oznake znači da je sakrivena zbog svoje [oznake](topic:tags).
- **Preimenuj na mestu:** klikni red, pa pritisni {{key:F2}}, ukucaj i pritisni {{key:Enter}} ({{key:Esc}} zadržava staro ime).
- **Prevuci red** na sredinu reda druge grupe da ga premestiš unutra, na gornju ili donju ivicu reda da ga staviš tačno pre ili posle tog reda, ili na naslov {{ui:Pregled}} da ga premestiš na najviši nivo. Ostaje na svom mestu u modelu i zadržava svoju boju, oznaku i naziv. Grupa ne može da bude unutar same sebe. Svako premeštanje je jedan korak opoziva. Pogledaj [Preraspoređivanje u Pregledu](topic:groups-components#rearrange-in-the-outliner).
- Dok uređuješ unutar grupe, red kaže „Uređivanje: Model › …“, a pojavljuje se dugme {{ui:Zatvori grupu}}. Ono zatvara sve otvorene nivoe odjednom.

**{{ui:Komponente}}** navodi svaku definiciju komponente sa brojem postavljenih primeraka („3×“) i dugmetom {{ui:Postavi}} koje dodaje još jedan primerak tamo gde klikneš.

## Desni paneli

**{{ui:Podaci o entitetu}}** opisuje šta je izabrano. Naslov se menja da kaže šta je to:

| Naslov | Prikazuje | Dugmad |
|---|---|---|
| Model (ništa nije izabrano) | Površi, ivice, grupe, komponente i koliko ih je postavljeno, vodilice, ukupna veličina | {{ui:Obriši sve vodilice}} (kad ima vodilica) |
| Površ | Površina, broj rupa | {{ui:Obrni površ}} |
| Ivica | Dužina | nema |
| Grupa ili komponenta | Naziv (kucaj da preimenuješ), koliko puta je postavljena, da li je zatvoreno čvrsto telo, njena zapremina, njena veličina | {{ui:Uređivanje}}, {{ui:Rastavi}}, {{ui:Napravi jedinstvenu}} (komponenta postavljena više puta), {{ui:Napravi komponentu}} (grupa) |
| Tačka vodilice ili linija vodilice | ništa | {{ui:Izbriši}} |
| Više stvari | Koliko je površi, ivica, grupa i vodilica, ukupna površina površi | {{ui:Napravi komponentu (G)}}, {{ui:Napravi grupu (Shift+G)}} |

**{{ui:Stil}}** određuje kako se model crta: {{ui:Površi}} ({{ui:Senčeno}}, {{ui:Skrivene linije}}, {{ui:Žičani model}}, {{ui:Rendgen}}), {{ui:Prikaži ivice}} i {{ui:Senke od sunca}} sa datumom, vremenom i mestom sunca. Pogledaj [Stilovi i senke od sunca](topic:styles-shadows).

**{{ui:Scene}}** čuva poglede: {{ui:Dodaj scenu}}, listu scena, i {{ui:Prethodna}}, {{ui:Pusti}} i {{ui:Sledeća}}. Pogledaj [Čuvanje pogleda kao scena](topic:scenes).

## Statusna traka

Duž dna, sleva nadesno:

1. **Savet**: šta alat sledeće traži, ili na šta se pokazivač hvata („Krajnja tačka“, „Na crvenoj osi“).
2. **Poruke**: šta se upravo desilo („Opozvano guranje/vučenje.“, „Uvezeno site.dxf: 1697 ivica na podlozi, u grupi.“) ili zašto nešto nije uspelo.
3. **Polje za vrednost**: njegova oznaka se menja sa alatom ({{ui:Dužina}}, {{ui:Kote}}, {{ui:Poluprečnik}}, {{ui:Stranice}}, {{ui:Razdaljina}}, {{ui:Ugao}}, {{ui:Skaliraj}}, {{ui:Odmak}}). Prikazuje živu veličinu dok radiš i prima ono što ukucaš. Pogledaj [Unos tačnih veličina u polje za vrednost](topic:value-box).
4. **Stil tastera**: {{ui:Tasteri: guranje/vučenje}} ili {{ui:Tasteri: modelar}} menja prečice i dugmad miša odjednom (isto kao u [podešavanjima ModelCraft-a](topic:settings)).
5. **{{ui:Hvatanje}} i {{ui:Sudaranje}}**: hvatanje za tačke, ivice i ose, i čvrsta tela koja staju kad se dodirnu. Prekrižen = isključeno. Klikni da promeniš. Pogledaj [podešavanja ModelCraft-a](topic:settings).
6. **Birač jedinica**: jedinice u kojima se prikazuju dužine. Pogledaj [Početak rada: prvo proveri jedinice](topic:getting-started#check-the-units-first).

## Na uskom ekranu

Ispod oko 760 piksela širine (telefon ili uzak prozor), 3D pogled zauzima ekran. Traka alata je jedan red koji se pomera u stranu, a paneli se otvaraju kao listovi sa trake pri dnu ekrana.
