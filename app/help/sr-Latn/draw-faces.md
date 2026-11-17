---
title: Crtanje površina linijama, pravougaonicima, krugovima i lukovima
summary: Pravi ravne površine na tlu ili na drugim površinama, deli ih linijama i crtaj krugove i poligone sa željenim brojem strana.
keywords: crtanje, linija, pravougaonik, krug, poligon, odmak, uvlačenje, okvir, granica, luk, kriva, splajn, glatko, kabl, putanja, izbočina, poluprečnik, površina, tlocrt, obris, podela, strane, segmenti, kontura, olovka
from: b6d7b7dd
---

Sve u ModelCraft-u počinje kao ravna **površina**: površ zatvorena ivicama. Površinu možeš nacrtati direktno alatkama {{ui:Pravougaonik}}, {{ui:Krug}} ili {{ui:Poligon}}, ili jednu po jednu ivicu alatkom {{ui:Linija}}. Površine su ono što [Guranje/vučenje](topic:push-pull) pretvara u tela.

## Crtanje pravougaonika

1. Pritisni {{key:R}}.
2. Klikni prvi ugao: na tlu ili na bilo kojoj površini modela.
3. Pomeri pokazivač. Pravougaonik ostaje na tlu (ili na površini na kojoj si počeo), a polje za vrednost ({{ui:Kote}}) pokazuje njegovu širinu i dubinu. Savet kaže „Kvadrat” kad su stranice jednake.

   Da bi crtao na drugoj ravni, pokaži na nju: površina koja prolazi kroz prvi ugao stavlja pravougaonik na tu površinu, a hvatanje za tačku van ravni (krajnju tačku, ivicu, plavu osu) podiže pravougaonik tako da prolazi kroz oba ugla. Vrati hvatanje na tačku na prvoj ravni i on se ponovo spusti. Da zadržiš jednu ravan, pritisni strelicu: {{key:Up}} drži pravougaonik vodoravno (plava ravan), {{key:Right}} na crvenoj ravni, {{key:Left}} na zelenoj ravni. Pritisni istu strelicu ponovo da otključaš.
4. Klikni suprotni ugao ili ukucaj dve dimenzije odvojene zarezom i pritisni {{key:Enter}}: `4m,3m`, `4000,3000` u modelu u milimetrima, ili `12',10'6"` u stopama i inčima.

   Pojavljuje se površina sa četiri ivice oko nje.

Unete dimenzije idu u smeru u kome si pokazivao: ako je pokazivač levo od prvog ugla kad ukucaš, pravougaonik raste ulevo.

:::warning
Zarez razdvaja dve dimenzije, pa ne može biti decimalni znak. Ukucaj `2.5m,3m`, nikad `2,5m`.
:::

## Crtanje kruga ili poligona

1. Pritisni {{key:C}} za krug ili {{key:N}} za poligon.
2. Da promeniš broj strana, ukucaj ga pre klika: `12s` (ili samo `12`) i {{key:Enter}}. Krug počinje sa 24 strane, a poligon sa 6. Savet pokazuje trenutni broj, a ModelCraft ga zadržava za sledeći krug dok ne promeniš broj ili ne zameniš alat.
3. Klikni centar, na tlu ili na površini. Da bi ga centrirao na površini, pokaži na sredinu površine („Centar površine”) ili na sredinu jedne njene ivice („Središnja tačka”) tako da pokazivač bude tik unutar te površine: krug se crta na toj površini, čak i na uskom kraju dugačke kocke.
4. Klikni da postaviš poluprečnik, ili ga ukucaj ({{ui:Poluprečnik}} u polju za vrednost) i pritisni {{key:Enter}}.

Krug je mnogougao sa mnogo strana. Kad ga podigneš alatkom Guranje/vučenje, njegove strane se omekšaju tako da cilindar izgleda kao jedna glatka površina.

## Crtanje luka

1. Pritisni {{key:A}} ({{ui:Luk}}).
2. Klikni gde luk počinje, pa gde se završava (ili ukucaj dužinu između njih).
3. Pomeri pokazivač da ispupčiš luk i klikni. Savet kaže „Polukrug” kad je ispupčenje jednako polovini rastojanja između krajeva. Ili ukucaj koliko sredina odstupa: `2` i {{key:Enter}}.

Da bi nacrtao luk oko tačke, koristi {{ui:Luk iz centra}}: klikni centar, pa gde luk počinje (ili ukucaj poluprečnik), pa gde se završava (ili ukucaj ugao u stepenima, na primer `90`). Hvata se u koracima od 15°.

Luk započet na površini crta se na toj površini; inače leži na tlu, ili stoji uspravno kad su mu krajevi na različitim visinama. Luk ima 12 segmenata; ukucaj `24s` dok crtaš za više. Lukovi zatvaraju površine kao i linije: luk preko ugla pravougaonika deli ga.

## Crtanje glatke krive

{{ui:Kriva}} crta glatku liniju koja prolazi kroz svaku tačku na koju klikneš: kabl, putanju rukohvata, ivicu bašte. Može da se odvoji od tla: tačke se hvataju za uglove, ivice i površine bilo gde, a strelice zaključavaju crvenu, zelenu ili plavu osu kao kod {{ui:Linija}}.

1. Klikni {{ui:Kriva}} u grupi {{ui:Crtanje}}.
2. Klikni tačke kroz koje kriva prolazi. Ukucaj `<0,0,1>` i {{key:Enter}} za tačku 1 iznad poslednje, `[x,y,z]` za tačno mesto, ili dužinu za tačku toliko daleko u smeru pokazivača.
3. Pritisni {{key:Enter}} ili dvaput klikni da završiš. Klikni prvu tačku ponovo da zatvoriš krivu. {{key:Backspace}} vraća poslednju tačku.

Kriva se bira kao jedan deo. Da je promeniš, izaberi je i klikni {{ui:Uredi tačke}} u {{ui:Podaci o entitetu}}: njene tačke se prikazuju kao kvadrati. Klikni jednu, pa klikni gde ide (ili ukucaj `<dx,dy,dz>`). {{key:Esc}} vraća tačku na mesto i završava izmenu. Zatvorena ravna kriva pravi površinu; kriva koja ocrtava površinu više se ne može menjati.

## Odmak: granica unutar ili van površine

{{ui:Odmak}} kopira obris površine na zadatu udaljenost unutra (ili spolja), za okvir, granicu, prag prozora ili staklo ekrana.

1. Pritisni {{key:F}} i klikni površinu, ili prvo izaberi površinu pa pritisni {{key:F}}.
2. Pomeri pokazivač u površinu za unutrašnji obris, ili van nje za spoljašnji. Novi obris prati pokazivač, a savet kaže koliko je daleko.
3. Klikni, ili ukucaj rastojanje i pritisni {{key:Enter}}.

Površina se deli na dve: unutrašnju površinu i okvir oko nje (ili novi prsten spolja). Odmah guraj ili vuci bilo koju od njih: za ekran nacrtaj kutiju, izvuci je do debljine, odmakni prednju površinu 30 mm unutra i malo izvuci unutrašnju površinu za staklo. Rupe u površini se takođe odmiču, a luk ili krug ostaje jedna (manja ili veća) kriva.

- **Dvostruki klik** na površinu alatkom {{ui:Odmak}} odmiče je ponovo za poslednje rastojanje.
- **Ivice:** izaberi lanac povezanih ivica u jednoj ravni (na primer dve linije slova L), pritisni {{key:F}}, pomeri se na stranu koju želiš i ukucaj rastojanje: crta se paralelna kopija, sa spojenim uglovima.
- Kad je rastojanje veće nego što površina dozvoljava, ModelCraft to kaže i ne crta ništa.

## Lukovi, krugovi i poligoni su krive

Klikni bilo koji segment luka, kruga ili poligona i cela kriva se izabere. {{ui:Podaci o entitetu}} tada prikazuje njen poluprečnik, segmente, ugao (kod lukova) i dužinu. Ukucaj novi poluprečnik da promeniš veličinu oko njenog centra; površine nacrtane u njenoj ravni prate. Kad je površina krive jednom gurnuta ili povučena, poluprečnik ostaje isti.

## Crtanje linijama

1. Pritisni {{key:L}}.
2. Klikni gde linija počinje.
3. Klikni gde se završava, ili ukucaj dužinu i pritisni {{key:Enter}}. Ukucana dužina ide u smeru koji pokazuje pokazivač.
4. Nastavi da klikaš. Svaki klik počinje sledeću liniju od kraja prethodne.
5. Zatvori obris klikom na prvu tačku ponovo. Kad linije zatvore ravnu petlju, ona se popuni površinom i alat prestaje da nastavlja lanac. Pritisni {{key:Esc}} da staneš u bilo kom trenutku.

Linije prate crvenu, zelenu i plavu osu kad im priđeš; linija dobija tu boju, a savet kaže „Na crvenoj osi”. Pogledaj [Zaključavanje i hvatanje](topic:inference) za to kako se zaključava smer i hvataju tačke.

### Gde ide linija kad ni na šta ne dodiruje

- Linija koja počinje na površini ostaje u ravni te površine.
- Linija koja počinje na tlu ili u praznom prostoru ostaje vodoravna sa svojom početnom tačkom. Ako posmatraš model iz ravni ivice, ide u vertikalnu ravan okrenutu ka tebi.
- Da nacrtaš liniju do tačnog mesta, ukucaj tačku: `[x,y,z]` za tačku u modelu, ili `<dx,dy,dz>` za pomak od početka. Pogledaj [Ukucaj tačne dimenzije](topic:value-box).

## Podela površine

Nacrtaj liniju preko površine, od jedne ivice do druge (ili od ivice do ivice kroz druge linije). Površina se deli na dve površine. Svaka zadržava svoju stranu i boju. Isto važi za pravougaonik ili krug nacrtan na površini: oblik postaje sopstvena površina unutar veće, koja sad ima rupu.

Ovako se rasporede prostorije na ploči poda, prozor na zidu ili stepenik na stepeništu: nacrtaj obris na površini, pa gurni ili povuci novu površinu.

## Površine okrenute na pogrešnu stranu

Svaka površina ima prednju i zadnju stranu. Zadnja strana je plavo-siva. Površine nacrtane na tlu gledaju nagore; površine nacrtane na drugoj površini gledaju u istom smeru kao ona.

Ako površina prikazuje zadnju stranu tamo gde očekuješ prednju, izaberi je i klikni {{ui:Obrni površinu}} u {{ui:Podaci o entitetu}}.

## Šta vidiš dok crtaš

- Obojeni marker tamo gde se pokazivač hvata, i njegovo ime u savetu dole levo.
- Pregled linije ili oblika.
- Dimenzije uživo u polju za vrednost. Možeš ih prepisati u bilo kom trenutku.

## Ako oblik nije tamo gde si očekivao

- Na ekranu osetljivom na dodir pogledaj [Rešavanje problema](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Ako se linija uhvatila za nešto daleko iza, malo okreni pogled: tačke sakrivene iza površine se nikad ne hvataju, ali tačke na njenoj ivici da.
- Pritisni {{key:Mod+Z}} da opozoveš poslednji oblik; jedan opoziv uklanja jednu liniju ili jedan oblik.
