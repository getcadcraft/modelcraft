---
title: Crtanje ploha linijama, pravougaonicima, krugovima i lukovima
summary: Pravi ravne plohe na podlozi ili na drugim plohama, dijeli ih linijama, i crtaj krugove i poligone sa željenim brojem stranica.
keywords: crtaj, crtanje, linija, pravougaonik, krug, poligon, odmak, uvlačenje, okvir, rub, luk, kriva, spline, glatka, kabl, putanja, izbočina, poluprečnik, ploha, tlocrt, otisak, podijeli, stranice, segmenti, obris, olovka
from: b6d7b7dd
---

U ModelCraftu sve počinje kao ravna **ploha**: površina zatvorena ivicama. Plohu možeš nacrtati direktno sa {{ui:Pravougaonik}}, {{ui:Krug}} ili {{ui:Poligon}}, ili obrisati jednu po jednu ivicu sa {{ui:Linija}}. Plohe su ono što [Guraj/povuci](topic:push-pull) pretvara u tijela.

## Nacrtaj pravougaonik

1. Pritisni {{key:R}}.
2. Klikni prvi ugao: na podlozi, ili na bilo kojoj plohi modela.
3. Pomjeri pokazivač. Pravougaonik ostaje na podlozi (ili na plohi sa koje si počeo), a polje za vrijednost ({{ui:Kote}}) pokazuje njegovu širinu i dubinu. Savjet kaže "Kvadrat" kada su stranice jednake.

   Da nacrtaš na drugoj ravni, pokaži na nju: ploha koja prolazi kroz prvi ugao stavlja pravougaonik na tu plohu, a hvatanje za tačku van te ravni (krajnju tačku, ivicu ili plavu osu) podiže pravougaonik kroz oba ugla. Vrati hvatanje na tačku na prvoj ravni, i opet će ležati. Da zadržiš jednu ravan, pritisni strelicu: {{key:Up}} drži pravougaonik vodoravno (plava ravan), {{key:Right}} na crvenoj ravni, {{key:Left}} na zelenoj ravni. Pritisni istu tipku ponovo da otključaš.
4. Klikni suprotni ugao, ili upiši dvije dimenzije odvojene zarezom i pritisni {{key:Enter}}: `4m,3m`, `4000,3000` u modelu u milimetrima, ili `12',10'6"` u stopama i palcima.

   Pojavljuje se ploha sa četiri ivice oko sebe.

Upisane dimenzije idu u smjeru u kojem si pokazivao: ako je pokazivač lijevo od prvog ugla kada upisuješ, pravougaonik raste ulijevo.

:::warning
Zarez razdvaja dvije dimenzije, pa ne može biti decimalni znak. Upiši `2.5m,3m`, nikada `2,5m`.
:::

## Nacrtaj krug ili poligon

1. Pritisni {{key:C}} za krug ili {{key:N}} za poligon.
2. Da promijeniš broj stranica, upiši ga prije klika: `12s` (ili samo `12`) i {{key:Enter}}. Krug počinje sa 24 stranice, a poligon sa 6. Savjet pokazuje trenutni broj, a ModelCraft ga pamti za sljedeći krug dok ga ne promijeniš ili ne zamijeniš alat.
3. Klikni centar, na podlozi ili na plohi. Da centriraš na plohu, pokaži na sredinu plohe ("Centar plohe") ili na sredinu jedne njene ivice ("Središnja tačka") dok je pokazivač tik unutar te plohe: krug se crta na toj plohi, čak i na uskom kraju dugačke kutije.
4. Klikni da postaviš poluprečnik, ili ga upiši ({{ui:Poluprečnik}} u polju za vrijednost) i pritisni {{key:Enter}}.

Krug je poligon sa mnogo stranica. Kada izvučeš krug sa Guraj/povuci, njegove strane se ublažavaju tako da cilindar izgleda kao jedna glatka površina.

## Nacrtaj luk

1. Pritisni {{key:A}} ({{ui:Luk}}).
2. Klikni gdje luk počinje, pa gdje završava (ili upiši dužinu između njih).
3. Pomjeri pokazivač da izbočiš luk, i klikni. Savjet kaže "Polukrug" kada je izbočina polovina razdaljine između krajeva. Ili upiši koliko se sredina odmiče: `2` i {{key:Enter}}.

Da nacrtaš luk oko tačke, koristi {{ui:Luk iz centra}}: klikni centar, pa gdje luk počinje (ili upiši poluprečnik), pa gdje završava (ili upiši ugao u stepenima, kao `90`). Hvata se u koracima od 15°.

Luk započet na plohi crta se na toj plohi; inače leži na podlozi, ili stoji uspravno kada su mu dva kraja na različitim visinama. Luk ima 12 segmenata; upiši `24s` dok crtaš za više. Lukovi zatvaraju plohe kao i linije: luk preko ugla pravougaonika dijeli ga.

## Nacrtaj glatku krivu

{{ui:Kriva}} crta glatku liniju koja prolazi kroz svaku tačku na koju klikneš: kabl, putanju ograde, ivicu bašte. Može se odvojiti od podloge: tačke se hvataju za uglove, ivice i plohe bilo gdje, a strelice zaključavaju crvenu, zelenu ili plavu osu kao kod {{ui:Linija}}.

1. Klikni {{ui:Kriva}} u grupi {{ui:Crtanje}}.
2. Klikni tačke kroz koje kriva prolazi. Upiši `<0,0,1>` i {{key:Enter}} za tačku 1 iznad posljednje, `[x,y,z]` za tačno mjesto, ili dužinu za tačku toliko daleko prema pokazivaču.
3. Pritisni {{key:Enter}} ili dvaput klikni da završiš. Klikni prvu tačku opet da zatvoriš krivu. {{key:Backspace}} vraća posljednju tačku.

Kriva se odabere kao jedan dio. Da je promijeniš, odaberi je i klikni {{ui:Uredi tačke}} u {{ui:Podaci o entitetu}}: njene tačke se prikazuju kao kvadrati. Klikni jednu, pa klikni gdje ide (ili upiši `<dx,dy,dz>`). {{key:Esc}} vraća tačku na prijašnje mjesto i završava uređivanje. Zatvorena ravna kriva pravi plohu; kriva koja obrubljuje plohu više se ne može uređivati.

## Odmak: obrub unutar ili izvan plohe

{{ui:Odmak}} kopira obris plohe na zadanu udaljenost unutar nje (ili izvan nje), za okvir, obrub, prag ili staklo ekrana.

1. Pritisni {{key:F}} i klikni plohu, ili prvo odaberi plohu pa pritisni {{key:F}}.
2. Pomjeri pokazivač unutar plohe za unutrašnji obris, ili van nje za vanjski. Novi obris prati, a savjet kaže koliko je.
3. Klikni, ili upiši udaljenost i pritisni {{key:Enter}}.

Ploha se dijeli na dva dijela: unutrašnju plohu i okvir oko nje (ili novi prsten izvan). Guraj/povuci bilo koju odmah: za ekran nacrtaj kutiju, izvuci je na debljinu, odmakni prednju plohu 30 mm unutra i izvuci unutrašnju plohu malo unutra za staklo. Rupe u plohi se također odmiču, a luk ili krug ostaje jedna (manja ili veća) kriva.

- **Dvaput klikni** plohu sa {{ui:Odmak}} da je ponovo odmakneš za posljednju udaljenost.
- **Ivice:** odaberi lanac povezanih ivica u jednoj ravni (na primjer dvije linije slova L), pritisni {{key:F}}, pomjeri na stranu koju želiš i upiši udaljenost: crta se paralelna kopija, sa spojenim uglovima.
- Kada je udaljenost veća nego što ploha dozvoljava, ModelCraft to kaže i ništa ne crta.

## Lukovi, krugovi i poligoni su krive

Klikni bilo koji segment luka, kruga ili poligona i cijela kriva se odabere. {{ui:Podaci o entitetu}} tada pokazuju njen poluprečnik, segmente, ugao (lukovi) i dužinu. Upiši novi poluprečnik tu da promijeniš veličinu oko njenog centra; plohe nacrtane u njenoj ravni prate. Kada se ploha krive jednom gurne ili povuče, njen poluprečnik ostaje kakav je.

## Crtanje linijama

1. Pritisni {{key:L}}.
2. Klikni gdje linija počinje.
3. Klikni gdje završava, ili upiši dužinu i pritisni {{key:Enter}}. Upisana dužina ide u smjeru koji pokazuje pokazivač.
4. Nastavi klikati. Svaki klik počinje sljedeću liniju od kraja prethodne.
5. Zatvori obris klikom na prvu tačku opet. Kada linije zatvore ravnu petlju, popuni se plohom i alat prestaje da lančano crta. Pritisni {{key:Esc}} da zaustaviš bilo kad.

Linije prate crvene, zelene i plave smjerove kada se približiš; linija poprimi tu boju, a savjet kaže "Na crvenoj osi". Vidi [Zaključavanje smjera i hvatanje](topic:inference) za to kako zaključati smjer i uhvatiti tačke.

### Gdje ide linija kada ništa ne dotiče

- Linija koja počinje na plohi ostaje u ravni te plohe.
- Linija koja počinje na podlozi ili u praznom prostoru ostaje vodoravna sa svojom početnom tačkom. Ako gledaš model iz ravni ivice, ide u vertikalnu ravan okrenutu prema tebi.
- Da nacrtaš liniju do tačno određenog mjesta, upiši tačku: `[x,y,z]` za tačku u modelu, ili `<dx,dy,dz>` za pomak od početka. Vidi [Unesi tačne dimenzije](topic:value-box).

## Podijeli plohu

Nacrtaj liniju preko plohe, od jedne ivice do druge (ili od ivice do ivice kroz druge linije). Ploha se dijeli na dvije plohe. Svaka zadržava svoju stranu i boju. Isto važi za pravougaonik ili krug nacrtan na plohi: oblik postaje vlastita ploha unutar veće, koja sada ima rupu.

Tako se raspoređuju sobe na podu, prozor na zidu ili stepenik na stepeništu: nacrtaj obris na plohi, pa gurni ili povuci novu plohu.

## Plohe okrenute na pogrešnu stranu

Svaka ploha ima prednju i zadnju stranu. Zadnja strana je plavo-siva. Plohe nacrtane na podlozi gledaju gore; plohe nacrtane na drugoj plohi gledaju istu stranu kao ona.

Ako ploha pokazuje zadnju stranu tamo gdje očekuješ prednju, odaberi je i klikni {{ui:Obrni plohu}} u {{ui:Podaci o entitetu}}.

## Šta vidiš dok crtaš

- Obojena oznaka gdje se pokazivač hvata, i njen naziv u savjetu u donjem lijevom uglu.
- Pregled linije ili oblika.
- Dužina uživo u polju za vrijednost. Možeš je prepisati u bilo kojem trenutku.

## Ako oblik nije tamo gdje si očekivao

- Na ekranu osjetljivom na dodir, vidi [Rješavanje problema](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Ako se linija uhvatila za nešto daleko iza, malo zakreni pogled: tačke sakrivene iza plohe se nikad ne hvataju, ali tačke na njenoj ivici da.
- Pritisni {{key:Mod+Z}} da poništiš posljednji oblik; jedan korak poništavanja uklanja jednu liniju ili jedan oblik.
