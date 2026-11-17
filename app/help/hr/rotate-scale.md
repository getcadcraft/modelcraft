---
title: Zakretanje i skaliranje
summary: Okrećite stvari oko točke klikom ili upisom stupnjeva te ih ravnomjerno promijenite veličinom po faktoru.
keywords: ručke skaliranja, razvlačenje, neravnomjerno, po osi, preokret, zrcaljenje, zrcalna kopija, preokreni duž, zakreni, okreni, kut, stupnjevi, kutomjer, skaliraj, promijeni veličinu, povećaj, smanji, faktor, ravnomjerno skaliranje
from: 45cdcb49
---

## Zakreni

{{ui:Zakreni}} ({{key:Q}}) okreće odabir oko središnje točke. Traži tri klika: središte, početni smjer i krajnji smjer.

1. Odaberite što želite okrenuti. Ako ništa nije odabrano, Zakreni uzima stvar koju prvo kliknete.
2. Pritisnite {{key:Q}}. Prsten prati pokazivač i prikazuje ravninu u kojoj ćete okretati.
3. Kliknite središte rotacije.
   - Na tlu ili u praznom prostoru prsten leži ravno (plavo): okretanje je oko vertikalne osi, kao kad se zgrada okreće na gradilištu.
   - Na plohi prsten leži u ravnini te plohe: okretanje je oko vlastitog smjera plohe. Kliknite na zid da okrenete nešto oko vodoravne osi.
4. Kliknite točku koja postavlja gdje kut počinje, primjerice uz brid stvari koju okrećete.
5. Pomičite pokazivač oko središta. Kut se prikazuje u vrhu i u polju vrijednosti ({{ui:Kut}}). Kad ste blizu, skače u koracima od 15°.
6. Kliknite za završetak ili upišite kut u stupnjevima i pritisnite {{key:Enter}}: `90`, `45`, `-30`.

   Pozitivni kutovi okreću se suprotno od kazaljke na satu, gledano sa strane na koju prsten gleda.

Pritisnite {{key:Ctrl}} (ili {{key:Alt}}) dok okrećete da okrenete **kopiju** i ostavite izvornik na mjestu, kao kod Pomakni; savjet kaže je li kopiranje uključeno, a ponovni pritisak tipke ga isključuje. Odmah nakon zakrenute kopije upišite `3x` za još kopija oko istog središta.

Kao i kod Pomakni, zakretanje dijela povezane geometrije uvija plohe koje su s njom spojene. Prvo grupirajte stvari da ih okrenete cijele.

:::note
Savjet kaže da tipke sa strelicama biraju os rotacije, ali u ovoj verziji prije prvog klika umjesto toga kruže pogledom. Za odabir osi kliknite središte na plohu koja gleda u željenom smjeru. Pogledajte [Nije još izrađeno](topic:not-built-yet).
:::

## Skaliraj

{{ui:Skaliraj}} ({{key:S}}) mijenja veličinu odabira. Prvo odaberite što želite promijeniti, zatim pritisnite {{key:S}}: na kutovima, bridovima i sredinama stranica okvira njegove granice pojavljuju se mali kvadratići (ručke).

### Razvlačenje ili skaliranje ručkama

- **Ručka na kutu** skalira ravnomjerno u svim smjerovima, oko suprotnog kuta.
- Ručka na sredini **stranice** razvlači samo u tom smjeru, oko suprotne stranice: dulji okvir, a da mu se visina ne poveća.
- Ručka na sredini **brida okvira** razvlači u dva smjera preko njega.
- Držite {{key:Ctrl}} kad kliknete ručku da skalirate oko sredine okvira.

Kliknite ručku, pomaknite pokazivač i kliknite ponovno; ili kliknite ručku, upišite faktor (`2` udvostručuje, `0.5` prepolovljuje) i pritisnite {{key:Enter}}. Da svaki smjer ima svoj faktor, upišite tri, za crvenu, zelenu i plavu: `2,1,0.5`. Unutar otvorene grupe smjerovi su vlastiti smjerovi grupe.

### Skaliranje oko bilo koje točke

Kliknite bilo gdje osim na ručku da ravnomjerno skalirate oko točke po vlastitom izboru. Traži tri klika:

1. Odaberite što želite promijeniti veličinu. Ako ništa nije odabrano, Skaliraj uzima stvar koju prvo kliknete.
2. Pritisnite {{key:S}}.
3. Kliknite točku koja ostaje na mjestu (ne na ručki), primjerice donji kut.
4. Kliknite referentnu točku. Njezina udaljenost od prve točke vrijedi kao 1×.
5. Pomaknite pokazivač prema prvoj točki ili od nje. Faktor se prikazuje u savjetu i u polju vrijednosti ({{ui:Skaliraj}}).
6. Kliknite za završetak ili upišite faktor i pritisnite {{key:Enter}}: `2` udvostručuje veličinu, `0.5` prepolovljuje je.

### Skaliranje na točnu veličinu

Da nešto bude točne duljine, izračunajte faktor: nova duljina podijeljena s trenutnom duljinom. U načinu s tri klika polje vrijednosti računa, pa upišite `4.2/3.6` da zid od 3.6 m postane dug 4.2 m. Polje vrijednosti ručke prima samo obične brojeve: prvo izračunajte faktor (4.2 podijeljeno s 3.6 iznosi oko 1.1667). Prvo odaberite brid da pročitate njegovu trenutnu duljinu u {{ui:Informacije o entitetu}}.

### Ispravak uvoza pogrešne veličine

OBJ datoteke nemaju jedinicu, pa model nacrtan u milimetrima dođe 1000 puta prevelik. Odaberite uvezenu grupu, pritisnite {{key:S}}, kliknite ručku na kutu i upišite `0.001` pa pritisnite {{key:Enter}}. Za model nacrtan u inčima upišite `0.0254`.

## Što treba znati

- Skaliranje oko točke s tri klika je ravnomjerno. Da razvučete u jednom smjeru, upotrijebite ručku na stranici ili bridu (vidi gore).
- Skaliranje grupe ili komponente mijenja kopiju koju ste skalirali; ostale kopije komponente zadržavaju svoju veličinu.
- Pritisnite {{key:Esc}} prije zadnjeg klika za poništavanje.

## Preokret

{{ui:Uređivanje}} › {{ui:Više}} › {{ui:Preokreni duž crvene}}, {{ui:Preokreni duž zelene}} ili {{ui:Preokreni duž plave}} zrcali odabir na mjestu, kroz sredinu njegove granice: lijeve stepenice postaju desne. Plohe ostaju okrenute prema van, a grupa ili komponenta zrcali se kao cjelina (njezina unutrašnjost se ne piše ponovno).

{{ui:Preokrenuta kopija duž crvene}} (i zelene, plave) ostavlja izvornik na mjestu i stavlja zrcalnu kopiju uz njega, preko suprotne strane okvira odabira: drugo vrata iz para, drugo krilo zgrade. Labava geometrija koja tamo dodiruje pridružuje se izvorniku, kao što dodirnuta geometrija uvijek čini; prvo napravite izvornik grupom da ih držite odvojeno.

Unutar otvorene grupe crvena, zelena i plava su vlastite osi grupe.
