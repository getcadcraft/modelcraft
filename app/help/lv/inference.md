---
title: Virzienu noteikšana un piesaiste
summary: Ko nozīmē krāsainie marķieri, kura piesaiste uzvar un kā fiksēt virzienu ar bultu taustiņiem vai Shift.
keywords: piesaiste, snap, galapunkts, viduspunkts, virsmas centrs, uz malas, uz virsmas, ass, sarkanā ass, zaļā ass, zilā ass, paralēli, perpendikulāri, fiksēt, shift, osnap
from: e78984e9
---

Kamēr darbojas zīmēšanas vai rediģēšanas rīks, ModelCraft apskata, kas atrodas zem rādītāja, un piesaistās tuvākajam noderīgākajam. Marķieris parāda, ko tas atrada, un norāde apakšējā kreisajā stūrī to nosauc.

## Marķieri un norādes

| Norāde | Marķieris | Piesaista |
|---|---|---|
| Galapunkts | Zaļš aplis | Malas galu |
| Viduspunkts | Ciāna aplis | Malas vidu |
| Virsmas centrs | Zils aplis | Virsmas vidu zem rādītāja |
| Vadpunkts | Pelēks | Vadpunktu, ko atstāj mērlente |
| Sākumpunkts | Ohra | Vietu, kur krustojas sarkanā, zaļā un zilā ass |
| Uz sarkanās ass / Uz zaļās ass / Uz zilās ass | Līnija šajā krāsā | Līniju no sākuma punkta šajā virzienā |
| Paralēli malai / Perpendikulāri malai | Magenta līnija | Līniju no sākuma punkta paralēli vai perpendikulāri atcerētajai malai (skatiet zemāk) |
| Fiksēts | Magenta līnija | Virzienu, ko fiksējāt ar bultu taustiņu vai {{key:Shift}} |
| Uz malas | Sarkans kvadrāts | Jebkurā vietā pa malu |
| Uz vadlīnijas | Pelēks | Jebkurā vietā pa vadlīniju |
| Uz virsmas | Zils rombs | Jebkurā vietā uz virsmas |
| Uz plaknes | nav | Plakni, kurā sākāt, kad rādītājs ir pāri tukšai vietai |
| Uz zemes | nav | Zemi (sarkanzaļo plakni), kad nekas cits tur nav |

Kad ass līnija no sākuma punkta krustojas ar malu vai vadlīniju, ModelCraft piesaistās krustojumam, un norāde nosauc abus, piemēram, "Uz sarkanās ass, uz malas".

## Kura piesaiste uzvar

1. **Punkti** aptuveni 12 pikseļu attālumā: vispirms galapunkti, tad vadpunkti, vidus punkti, virsmas centrs zem rādītāja un sākumpunkts.
2. **Virzieni** no sākuma punkta: sarkanā, zaļā un zilā ass, kā arī paralēli vai perpendikulāri atcerētajai malai.
3. **Uz malas** vai vadlīnijas.
4. **Uz virsmas.**
5. **Zīmēšanas plakne** vai zeme.

Lietas, kas paslēptas aiz virsmas, nekad nepiesaistās. Pagrieziet skatu, lai redzētu vajadzīgo punktu.

## Zīmēšana uz virsmas no punkta

Taisnstūris, riņķis vai daudzstūris, kas sākts stūrī, malas vidū, uz malas vai virsmas centrā, tiek zīmēts **tās virsmas plaknē, kas atrodas zem rādītāja**, un griež šo virsmu. Mala pieder divām virsmām, tāpēc izšķir tā malas puse, kurā atrodas rādītājs: lai zīmētu uz garas kastes gala, sāciet no vienas malas vidus, rādītājam esot tieši gala virsmas iekšpusē.

## Paralēli un perpendikulāri

ModelCraft atceras **pēdējo malu, pāri kurai rādītājs gāja pirms pirmā klikšķa**. Sākt no stūra vai no malas skaitās kā iet pāri šai malai. Kad rīks darbojas, citas malas, pāri kurām virzāt rādītāju, šo neaizstāj.

Lai zīmētu līniju paralēli esošai malai:

1. Nospiediet {{key:L}} un virziet rādītāju pāri malai, ko vēlaties atdarināt.
2. Pārvietojieties uz sākuma punktu, ja iespējams, nešķērsojot citas malas, un noklikšķiniet.
3. Pārvietojieties virzienā paralēli šai malai. Līnija kļūst magenta, un norāde saka "Paralēli malai". Perpendikulārais darbojas tāpat, plaknē, kurā zīmējat.

Ja atcerējās nepareizu malu, nospiediet {{key:Esc}}, virziet rādītāju pāri pareizajai malai un sāciet no jauna.

## Virziena fiksēšana

Pēc pirmā klikšķa jebkurā rīkā varat turēt nākamo punktu uz vienas līnijas:

| Taustiņš | Fiksē uz |
|---|---|
| {{key:Right}} | Sarkano asi |
| {{key:Left}} | Zaļo asi |
| {{key:Up}} | Zilo asi (taisni uz augšu) |
| {{key:Down}} | Paralēli atcerētajai malai (skatiet augstāk) |

Nospiediet to pašu bultu vēlreiz, lai atbloķētu. Statusa joslā rādās "Fiksēts uz sarkano asi. Nospiediet to pašu bultu, lai atbloķētu."

Fiksēts punkts slīd pa līniju uz pusi, kur atrodas rādītājs, un joprojām sakrīt ar punktiem, uz kuriem virzāt rādītāju: uzvirziet rādītāju uz cita kastes stūra, lai uzzīmētu līniju pa sarkano tieši tik tālu, cik tas stūris.

**{{key:Shift}}** fiksē virzienu, uz kuru pašlaik esat piesaistīts (asi vai paralēli), tik ilgi, kamēr to turat. Atlaidiet, lai atbloķētu.

Fiksācijas darbojas rīkos „{{ui:Line}}”, „{{ui:Rectangle}}”, „{{ui:Circle}}”, „{{ui:Polygon}}”, „{{ui:Move}}”, „{{ui:Scale}}” un „{{ui:Tape}}”. Pirms pirmā klikšķa bultu taustiņi tā vietā griež skatu.

## Grupas iekšpusē

Rediģējot grupas vai komponenta iekšpusē, asis ir grupas pašas asis (tās pārvietojas kopā ar to un griežas, ja tā bija pagriezta). Piesaiste joprojām atrod punktus un malas ārpus grupas, tāpēc varat izlīdzināt lietas ar pārējo modeli.
