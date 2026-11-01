---
title: Ekran ModelCraft
summary: Obilazak trake alata, panela s obje strane, 3D pogleda i statusne trake, prema njihovim nazivima na ekranu.
keywords: ekran, raspored, traka alata, paneli, pregled, podaci o entitetu, stil, scene, statusna traka, polje za vrijednost, jedinice, sučelje, obilazak
from: 4a9a4516
---

Odozgo prema dolje: gornja traka aplikacije, traka alata, tri kolone (lijevi paneli, 3D pogled, desni paneli) i statusna traka.

## Gornja traka aplikacije

Tanka traka na samom vrhu pripada svakoj CadCraft aplikaciji. Ima naziv i verziju aplikacije, {{ui:O ModelCraftu}}, dugme režima ekrana i prekidač {{ui:Papir}} / {{ui:Model}}.

- {{ui:Papir}} je svijetla tema, a {{ui:Model}} tamna. 3D pogled mijenja boje da se uskladi; model se ne mijenja.
- Dugme režima ekrana (na početku piše {{ui:Puni ekran}}) i {{key:Ctrl+Shift+F}} prelaze kroz tri režima: normalan, puni ekran i puni ekran sa sakrivenim trakama. Kad su trake sakrivene, pokaži na gornju ivicu ekrana (ili je dodirni) da ih vratiš. {{key:Esc}} izlazi iz punog ekrana.

:::note
{{key:Ctrl+Shift+F}} koristi tipku Control na svakom računaru, pa i na Macu. Na iPhoneu, gdje preglednici nemaju puni ekran, dugme samo sakriva i prikazuje trake.
:::

## Traka alata

Traka alata podijeljena je na označene grupe. Pređi pokazivačem preko dugmeta da vidiš njegov naziv i tipku.

S lijeve strane, lista {{ui:Radni prostor}} određuje čemu služe traka alata i desni panel: {{ui:Model}} (modeliranje guranjem/povlačenjem, obilazak ispod), {{ui:Mreža}} ([uređivanje mreže](topic:mesh-edit)), {{ui:Kriva}} ([objekti krivih](topic:curves)), {{ui:UV}} ([raspored UV-ova](topic:uv)), {{ui:Oblikovanje}} ([oblikovanje](topic:sculpt)), {{ui:Sjenčenje}} ([materijali napravljeni čvorovima](topic:shading)), {{ui:Animiraj}} ([animiranje](topic:animate)) i {{ui:Renderuj}} ([renderovanje u pogledu](topic:render#render-in-the-view)).

| Grupa | Dugmad |
|---|---|
| Datoteka | {{ui:Novo}}, {{ui:Otvori}}, {{ui:Spasi}}, {{ui:Uvezi}}, {{ui:Izvezi}} (meni formata) |
| Crtanje | {{ui:Linija}} ({{key:L}}), {{ui:Pravougaonik}} ({{key:R}}), {{ui:Krug}} ({{key:C}}), {{ui:Poligon}} ({{key:N}}) |
| Izmjena | {{ui:Odaberi}} ({{key:Space}}), {{ui:Gurni/povuci}} ({{key:P}}), {{ui:Pomjeri}} ({{key:M}}), {{ui:Rotiraj}} ({{key:Q}}), {{ui:Skaliraj}} ({{key:S}}), {{ui:Gumica}} ({{key:E}}), {{ui:Mjerna traka}} ({{key:T}}) |
| Organizacija | {{ui:Komponenta}} ({{key:G}}), {{ui:Grupa}} ({{key:Shift+G}}), {{ui:Rastavi}} |
| Uređivanje | {{ui:Poništi}} ({{key:Mod+Z}}), {{ui:Ponovi}} ({{key:Mod+Y}}), {{ui:Kopiraj}} ({{key:Mod+C}}), {{ui:Zalijepi}} ({{key:Mod+V}}), {{ui:Više}} (meni: izreži, kopiraj, zalijepi, zalijepi na mjesto {{key:Mod+Shift+V}}, dupliraj {{key:Mod+D}}, izbriši, odaberi sve, odaberi ništa, i stil tastera) |
| Kamera | {{ui:Orbita}} ({{key:O}}), {{ui:Pomjeri pogled}} ({{key:H}}), {{ui:Zumiraj}} ({{key:Z}}), {{ui:Obuhvat}} ({{key:Shift+Z}}), {{ui:Pogledi}} (meni) |

Prikazane tipke su one za gurni/povuci; kad je u [postavkama ModelCraft-a](topic:settings) odabran stil tastera Modeler, opisi pokazuju te tipke. Alat koji koristiš prikazan je kao pritisnut. Na uskom ekranu traka alata se pomjera u stranu.

Meni {{ui:Pogledi}} ima {{ui:Izometrija}}, {{ui:Gore}}, {{ui:Naprijed}}, {{ui:Desno}}, {{ui:Nazad}}, {{ui:Lijevo}} i {{ui:Dolje}}, svaki prilagođen modelu, i {{ui:Perspektiva}}, koja prebacuje između perspektivne i paralelne projekcije.

## 3D pogled

Sredina ekrana. Crvena, zelena i plava linija su ose: crvena i zelena leže na tlu, plava pokazuje gore, a **sjever je zelena osa**. Mjesto gdje se sastaju je ishodište.

- Na početku kartica naslovljena „Počni modeliranje“ navodi prve tipke. Nestaje kad se odabere alat za crtanje ili klikne u pogled.
- Dok alat radi, pogled prikazuje **oznake zaključivanja**: male obojene oblike gdje se pokazivač hvata (zelen krug na krajnjoj tački, cijan na sredini, crveni kvadrat na ivici, plavi romb na plohi). Pogledaj [Zaključivanje i hvatanje](topic:inference).
- Odabrane stvari postaju plave. Ploha viđena sa zadnje strane je plavosiva.
- Kad se otvori grupa za uređivanje, sve izvan nje blijedi, a ose se pomjeraju na vlastite ose grupe.
- Kad model ima scene, u gornjem dijelu pogleda pojavljuje se red kartica scena.
- Prevuci datoteku bilo gdje na pogled da je otvoriš ili uvezeš.

## Lijevi paneli

**{{ui:Pregled}}** navodi grupe i komponente u modelu, ugniježđene onako kako jesu u modelu. Komponenta korištena više puta pokazuje koliko puta, kao „Prozor (4)“.

- Klikni naziv da ga odabereš. Dvaput klikni da ga otvoriš za uređivanje.
- **Traži po nazivu** (prikazuje se kad ima dvije ili više grupa) zadržava samo redove čiji se naziv podudara, s grupama u kojima se nalaze. {{key:Esc}} ga briše.
- **Oko** na kraju reda sakriva ili prikazuje tu grupu ili komponentu (kao što to čini {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Sakrij}}). Ikona oznake znači da je sakrivena svojom [oznakom](topic:tags).
- **Preimenovanje na mjestu:** klikni red, pa pritisni {{key:F2}}, ukucaj i pritisni {{key:Enter}} ({{key:Esc}} zadržava stari naziv).
- **Prevuci red** na sredinu reda druge grupe da ga pomjeriš unutar te grupe, na gornju ili donju ivicu reda da ga staviš ispred ili iza tog reda, ili na naslov {{ui:Pregled}} da ga pomjeriš na najviši nivo. Ostaje tamo gdje jeste u modelu, i zadržava boju, oznaku i naziv. Grupa ne može ući u samu sebe. Svako pomjeranje je jedan korak poništavanja. Pogledaj [Preraspoređivanje u pregledu](topic:groups-components#rearrange-in-the-outliner).
- Dok se uređuje unutar grupe, linija glasi „Uređivanje: Model › …“, i pojavljuje se dugme {{ui:Zatvori grupu}}. Ono zatvara sve otvorene nivoe odjednom.

**{{ui:Komponente}}** navodi svaku definiciju komponente s brojem postavljenih kopija („3×“) i dugme {{ui:Postavi}} koje dodaje još jednu kopiju tamo gdje klikneš.

## Desni paneli

**{{ui:Podaci o entitetu}}** opisuje odabrano. Naslov se mijenja i kaže šta je to:

| Naslov | Prikazuje | Dugmad |
|---|---|---|
| Model (ništa nije odabrano) | Plohe, ivice, grupe, komponente i koliko ih je postavljeno, vodilice, ukupna veličina | {{ui:Obriši sve vodilice}} (kad ima vodilica) |
| Ploha | Površina, broj rupa | {{ui:Obrni plohu}} |
| Ivica | Dužina | nema |
| Grupa ili komponenta | Naziv (ukucaj za preimenovanje), koliko puta je postavljena, je li zatvoreno tijelo, zapremina, veličina | {{ui:Uređivanje}}, {{ui:Rastavi}}, {{ui:Učini jedinstvenom}} (komponenta postavljena više puta), {{ui:Pravljenje komponente}} (grupa) |
| Tačka vodilice ili linija vodilice | ništa | {{ui:Izbriši}} |
| Više stvari | Koliko ploha, ivica, grupa i vodilica, ukupna površina ploha | {{ui:Napravi komponentu (G)}}, {{ui:Napravi grupu (Shift+G)}} |

**{{ui:Stil}}** određuje kako se model crta: {{ui:Površine}} ({{ui:Sjenčeno}}, {{ui:Skriveni rubovi}}, {{ui:Žičani model}}, {{ui:Rendgen}}), {{ui:Prikaži ivice}} i {{ui:Sunčeve sjene}} s datumom, vremenom i mjestom sunca. Pogledaj [Stilovi i sunčeve sjene](topic:styles-shadows).

**{{ui:Scene}}** čuva poglede: {{ui:Dodaj scenu}}, listu scena, i {{ui:Prethodna}}, {{ui:Pusti}} i {{ui:Sljedeća}}. Pogledaj [Spašavanje pogleda kao scena](topic:scenes).

## Statusna traka

Pri dnu, s lijeva na desno:

1. **Savjet**: šta alat traži sljedeće, ili za šta se pokazivač hvata („Krajnja tačka“, „Na crvenoj osi“).
2. **Poruke**: šta se upravo desilo („Poništeno: gurni/povuci.“, „Uvezen site.dxf: 1697 ivica na tlu, u grupi.“) ili zašto nešto nije radilo.
3. **Polje za vrijednost**: njegov naziv mijenja se s alatom ({{ui:Dužina}}, {{ui:Kote}}, {{ui:Poluprečnik}}, {{ui:Stranice}}, {{ui:Udaljenost}}, {{ui:Ugao}}, {{ui:Skaliraj}}, {{ui:Odmak}}). Pokazuje veličinu uživo dok radiš i prima ono što ukucaš. Pogledaj [Ukucavanje tačnih veličina u polje za vrijednost](topic:value-box).
4. **Stil tastera**: {{ui:Tasteri: Gurni/povuci}} ili {{ui:Tasteri: Modeler}} istovremeno prebacuje prečice s tastature i dugmad miša (isto kao u [postavkama ModelCraft-a](topic:settings)).
5. **{{ui:Hvatanje}} i {{ui:Sudaranje}}**: hvatanje za tačke, ivice i ose, te tijela koja staju tamo gdje se dodiruju. Precrtano = isključeno. Klikni za prebacivanje. Pogledaj [postavke ModelCraft-a](topic:settings).
6. **Birač jedinica**: u kojim jedinicama se prikazuju dužine. Pogledaj [Početak rada](topic:getting-started#check-the-units-first).

## Na uskom ekranu

Ispod oko 760 piksela širine (telefon ili uska prozor), 3D pogled zadržava cijeli ekran. Traka alata je jedan red koji se pomjera u stranu, a paneli se otvaraju kao listovi s trake pri dnu ekrana.
