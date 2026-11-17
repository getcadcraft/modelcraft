---
title: Pravljenje materijala čvorovima
summary: Napravi materijal od tekstura, slika i računa u radnom prostoru Senčenje, vidi ga u prikazu dok radiš, i boji površine njime.
keywords: senčenje, peci, pečenje, pečenje teksture, ambijentalna okluzija, ao, zakrivljenost, pečenje normala, visoki poli, niski poli, svetlosna mapa, nalepnica, nalepnice, logo, etiketa, slikanje teksture, boja teksture, četkica, materijal, materijali, materialx, mtlx, openpbr, standard surface, biblioteka materijala, librarycraft, set tekstura, pbr, uvoz tekstura, zip, cc0, prevlačenje, čvor, čvorovi, uređivač čvorova, šejder, tekstura, proceduralno, šum, šah, voronoi, ćelije, talasi, cigle, pločice, drvo, mermer, gradijent, prljavština, habanje ivica, rampa boja, mešanje, reljef, mapa normala, hrapavost, metalnost, neprovidnost, isecanje, emisija, sjaj, pomeranje, triplanarno, uv, slika, tekstura slike
from: d7368b21
---

Materijal napravljen u radnom prostoru **Senčenje** pripada datoteci. To je mali graf: **čvorovi** koji prave teksture, slike i brojeve, povezani u **Izlaz materijala**, čiji ulazi su izgled površine — osnovna boja, hrapavost, metalnost, normala, neprovidnost, emisija i ostalo iz OpenPBR modela. Površine boješ njime kao i svaki materijal iz biblioteke, a svaka promena odmah se vidi u prikazu.

## Otvori ga

Izaberi {{ui:Senčenje}} na listi radnih prostora. 3D prikaz zadržava vrh ekrana, a **uređivač čvorova** zauzima dno. Panel desno nabraja materijale same datoteke.

- {{ui:Novi materijal}} pravi sivi sa samo svojim Izlazom materijala.
- **Napravi izmenjivu kopiju materijala iz biblioteke** pretvara ciglu, drvo, pločicu i ostale u graf koji možeš da menjaš: njihova tekstura dolazi preko čvora Tekstura iz biblioteke, a njihove ispupčenosti preko čvora Reljef.
- {{ui:Oboji njime}} boji izabrane površine ili grupe, ili bira materijal za alat Boji. Materijali alata Boji navode i materijale datoteke pod **U ovoj datoteci**.
- {{ui:Dupliraj}} i {{ui:Izbriši}} rade na materijalu koji menjaš. Brisanje se ne može opozvati: površine obojene njime prikazuju podrazumevanu boju dok ih ponovo ne oboji.

## Materijali iz biblioteke

Panel **Biblioteka materijala (Library)** nabraja materijale biblioteke, svaki sa pregledom koji iscrtava CadCraft-ov path tracer. To su setovi tekstura objavljeni pod CC0, sa navedenim autorima.

- Klikni jedan da ga uneseš u datoteku (dolaze i njegove slike) i, sa izabranim površinama ili grupama, da ih obojiš.
- Prevuci jedan na površinu ili grupu u prikazu da obojiš samo to.
- Postaje jedan od materijala datoteke: menjaj mu čvorove kao i svaki drugi. Njegovo navođenje autora vidi se u panelu i ostaje u datoteci.

## Uvezi set tekstura

{{ui:Slike ili zip…}} ili {{ui:Fascikla…}} pod **Uvezi set tekstura** pravi materijal od skupa mapa. Mape se prepoznaju po rečima u imenima datoteka: color, albedo, diffuse ili basecolor; roughness (ili gloss, pretvoren u hrapavost); metalness ili metallic; normal (OpenGL ili DirectX, iz `gl` / `dx` u imenu); height ili displacement; ambient occlusion; opacity; emission. Spakovane mape (ARM, ORM) se izostavljaju. Pločica počinje od 1 × 1 m: podesi njenu stvarnu veličinu na Izlazu materijala. Visina ide u **pomeranje** sa razmerom 0 — povećaj razmeru da bi se koristila na mrežama.

## MaterialX

MaterialX je otvoren format koji drugi 3D i programi za renderovanje koriste da prenose materijale.

- {{ui:Izvezi kao MaterialX…}} čuva materijal koji menjaš: njegove vrednosti i svaku teksturu kao PNG sliku pored `.mtlx` datoteke (u zip-u). Izaberi šejder kojim se piše: **OpenPBR Surface** (MaterialX 1.39, isti model koji koristi ModelCraft) ili **Standard Surface** (MaterialX 1.38, koji danas više programa čita). Teksture se postavljaju po UV koordinatama u metrima; postavljanje kutijom i triplanarno se piše kao UV.
- {{ui:Uvezi MaterialX…}} (ili {{ui:Iz fascikle…}}) čita `.mtlx` datoteke sa OpenPBR, Standard Surface, UsdPreviewSurface ili glTF PBR šejderima. Daj mu i slike, ili zip sa svime: slika se nalazi po putanji, imenu ili imenu sa drugim tipom slike (`.exr` koji datoteka navodi može doći kao `.jpg` pored njega). Teksture, mape normala, aritmetika, mešanja i pomeranje dolaze kao čvorovi; sve ostalo zadržava svoju vrednost, a statusna linija kaže šta je izostavljeno.

## Nalepnice

Nalepnica je slika položena na površinu — logo, znak, etiketa, mrlja — sa sopstvenim materijalom.

- Podesi **Širina nove nalepnice**, pa {{ui:Postavi nalepnicu…}} (ili {{ui:Nalepnica}} na traci alata), izaberi PNG, JPEG ili WebP sliku i klikni na površinu. Slika se projektuje na površine tamo, zadržavajući svoje proporcije; prozirni delovi PNG-a ostaju providni.
- Pripada grupi ili komponenti na koju si kliknuo i pomera se s njom. Pokriva površine unutar svoje kutije koje gledaju u istom smeru i staje na ivicama onoga na čemu leži.
- Svaka nalepnica dobija svoj materijal, nazvan **Nalepnica: <slika>**, na listi datoteke: menjaj ga kao svaki drugi (hrapavost, reljef, sjaj). {{ui:Materijal}} pored nalepnice ga otvara.
- Uz svaku nalepnicu: njena širina (visina prati sliku), {{ui:Okreni}} (četvrtina okreta) i {{ui:Izbriši}}. Nalepnice se čuvaju uz materijale datoteke, van opozivanja.
- Vide se u senčenom prikazu, u brzim renderima i u slikama visokog kvaliteta.

## Slikanje po teksturi

{{ui:Oboji teksturu}} (ili {{ui:Boji}} pod **Slikanje po teksturi**) pretvara pokazivač u okrugli kist. Prevuci po površini koja nosi jedan od materijala ove datoteke: kist boji sliku iza njene osnovne boje.

- Na mreži boji po UV-ovima mreže (prvo je raspakuj u radnom prostoru UV); na drugim površinama boji preko površine, pa se slikanje ponavlja sa pločicom materijala.
- Materijal čija je osnovna boja obična boja dobija novu sliku 512 × 512 piksela te boje prvi put kad ga oslikaš. Materijal čija osnovna boja dolazi iz drugih čvorova treba čvor Slika povezan sa Osnovnom bojom.
- Podesi boju kista, veličinu (u pikselima slike), jačinu i tvrdoću u panelu. {{ui:Opozovi potez}} ili Ctrl+Z (dok slikaš) vraća potez, do poslednjih 20.
- Oslikana slika se čuva u datoteci. Materijali iz biblioteke ne mogu da se oslikavaju: prvo napravi izmenjivu kopiju.

## Peci teksture

**Peci teksture** upisuje u slike ono što oblik i scena daju površini, duž UV-ova mreže.

- Izaberi mrežu koja ima UV-ove (raspakuj je u radnom prostoru UV), označi mape i pritisni {{ui:Peci}}:
  - **Ambijentalna okluzija** — koliko je svaka tačka otvorena: uglovi, nabori i mesta ispod drugih stvari tamnija. Sve što je prikazano u modelu je senči, do rastojanja okluzije.
  - **Zakrivljenost** — svetla duž spoljnih ivica, tamna u unutrašnjim uglovima, srednje siva na ravnim i blago zakrivljenim delovima, preko širine ivice koju podesiš.
  - **Normale iz objekta visoke detaljnosti** — izaberi i detaljniju kopiju: njen detalj površine upisuje se kao mapa normala za jednostavniju (peče se na objekat sa manje trouglova). Rastojanje pretrage je koliko dve površine mogu biti udaljene.
  - **Osvetljenje** — sunce mesta modela i datuma (Stil) sa svojim senkama, plus nebo, kao svetlosna mapa.
- Slike se pridružuju datoteci i pojavljuju u čvorovima Slika. Ako materijal koji menjaš ima čvor **Prljavština i habanje ivica**, odmah čita novu okluziju i zakrivljenost.
- Više zraka po teksel daje glađu okluziju i osvetljenje, ali traje duže. Pečenje se odvija na jezgrima procesora u pozadini; {{ui:Prekini pečenje}} ga zaustavlja.

## Pravljenje grafa

1. {{ui:Dodaj čvor…}} (ili {{key:Shift+A}} u uređivaču čvorova) dodaje čvor u sredini uređivača.
2. Prevuci sa izlazne tačke (na desnoj strani čvora) na ulaznu tačku (na levoj strani čvora) da ih povežeš. Druga veza u ulaz zamenjuje prvu; prevuci povezani ulaz u stranu da ga odvežeš.
3. Ulazi koji nisu povezani pokazuju svoju vrednost: upiši broj ili izaberi boju. Podešavanja su na dnu svakog čvora.

Prevuci čvor za naslov da ga pomeriš, prevuci prazan prostor da pomeriš pogled, a točkićem zumiraš. {{key:Delete}} uklanja izabrane čvorove ili vezu, {{key:Mod+Z}} opoziva, {{key:Mod+D}} duplira, {{key:F}} prikazuje sve čvorove. Svaka promena je jedan korak opozivanja uređivača čvorova. Opozivanje modela ne menja materijale.

| Čvorovi | Šta prave |
|---|---|
| Koordinate teksture | Gde je tačka na pločici: ponovi je, pomeri je, okreni je za četvrtinu. |
| Vrednost, Boja | Broj, boja. |
| Slika | Slika datoteke (ona koja je došla s uvezenim modelom ili koju si dodao sa {{ui:Dodaj sliku…}}). Izaberi **Boje** za fotografiju i **Podaci** za mapu hrapavosti ili normala. |
| Tekstura iz biblioteke | Tekstura, hrapavost i visina materijala iz biblioteke. |
| Šah, Šum | Kvadrati; glatki fraktalni šum sa svojim detaljem, hrapavošću i semenom. |
| Voronoi ćelije, Talasi, Gradijent | Ćelije (rastojanje do najbliže tačke, ivice između ćelija, boja po ćeliji); trake poprečno, uspravno ili dijagonalno, kao sinus, testera ili trougao, savijene šumom; linearni, kvadratni, radijalni i sferni gradijenti. |
| Cigle, Pločice | Redovi cigala sa pomerenim naletanjem, ili mreža pločica: boje, malter ili fuga, razmak i kosina u metrima, visina za ispupčenja, slučajan broj po komadu. |
| Drvo, Mermer | Prstenovi duž vlakana sa finim vlaknima; žile savijene turbulencijom. |
| Prljavština i habanje ivica | Troši ispupčene ivice i prlja udubljenja iz slika zakrivljenosti i okluzije mreže ([Peci teksture](topic:shading#bake-textures) ih pravi; ili podesi njena dva podešavanja slike, u UV rasporedu mreže: postavi materijal po UV koordinatama). Bez njih ne menja ništa. |
| Mešanje boja, Rampa boja, Nijansa/zasićenje/vrednost, Svetlina i kontrast, Invertuj, Gama, Razdvoji i spoji RGB | Rad sa bojama. |
| Matematika, Opseg mape | Aritmetika na brojevima (sabiranje, množenje, stepen, glatki korak i još). |
| Reljef, Mapa normala | Normala iz visine (Reljef) ili iz slike mape normala (Mapa normala: izaberi smer zelenog kanala). |

## Izlaz materijala

Njegova podešavanja kažu kako tekstura leži na površinama:

- **Širina pločice** i **Visina pločice**: koliko metara jedna pločica teksture pokriva. Sve što graf pravi ponavlja se preko pločice bez šava.
- **Postavlja po**: **UV koordinatama** prati površine (površine za guranje/vučenje: duž svake površine; mreže: njihovi UV-ovi, jedna UV jedinica = jedna pločica), **Kutija** projektuje sa najbliže od tri ose, **Triplanarno** meša tri projekcije na nagnutim površinama (**Oštrina mešanja**: veće je tvrđe mešanje).
- **Jačina normale** skalira ulaz normale. **Razmera pomeranja** određuje koliko ulaz pomeranja pomera temena mreže.
- {{ui:Više ulaza}} prikazuje ostale OpenPBR ulaze: premaz, dlakavost, podpovršinsko rasipanje, tanak film, propuštanje i njihove boje.

## U slikama visokog kvaliteta

Praćač putanje zraka čita osnovnu boju, hrapavost, metalnost, neprovidnost, normalu i emisiju iz grafa dok se menjaju po površini. Svaki drugi ulaz koji povežeš (premaz koji varira, na primer) koristi se po svom proseku; panel kaže koji. Isecanje iz teksture neprovidnosti pokazuje svoj oblik, a njegova senka je ravnomerno providna. Svetleća tekstura osvetljava ono ka čemu je okrenuta, bez da se uzorkuje kao lampa.

**Pomeranje** pomera temena samo mrežama, pa dodaj Subdivision modifikator za detalj ([Modifikatori](topic:modifiers)). Površine za guranje/vučenje zadržavaju oblik i dobijaju ispupčenja iz normale.

:::tip
Na računaru sa WebGPU graf se računa na grafičkoj kartici; bez njega, na procesoru. Rezultat je isti.
:::
