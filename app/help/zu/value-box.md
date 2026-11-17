---
title: Thayipha usayizi ngokunembile ku-value box
summary: Zonke izindlela zokuthayipha ubude, usayizi, amaphuzu, ukuhamba, izinhlangothi nokukopisha, nokuthi amayunithi namanani angenaziphawu afundwa kanjani.
keywords: value box, measurements box, vcb, thayipha, ngokunembile, isilinganiso, ubude, amayunithi, amafidi, amamilimitha, izixhumanisi, offset, array, izinhlangothi, i-engeli, ikhoma yedesimali
from: 0148dc3d
---

I-value box ihlala ku-status bar ngaphansi, nelebula elishintsha ngethuluzi. Uma usebenza ibonisa usayizi ophilayo; noma kunini ungathayipha owodwa ngokunembile.

## Ukuthayipha

1. Qala isenzo ngokuchofoza (ikhona yokuqala, ubuso, iphoyinti okuzohanjiswa kulo).
2. Thayipha. Awudingi ukuchofoza i-value box: inombolo noma enye yalezi `. , - ' " [ < * /` ithumela ukuthayipha kwakho lapho.
3. Cindezela {{key:Enter}}.

Cindezela {{key:Esc}} ku-value box ukuze uyisule ubuyele ku-view. Ku-touch screen, thepha i-value box ukuze uvule ikhibhodi.

Uma i-ModelCraft ingakwazi ukufunda okuthayiphile, i-status bar ithi "Thayipha ubude njengo-3m, 10'6" noma 4m,3m." Uma ithuluzi lingakwazi ukusisebenzisa, lithi "Akusebenzanga: …" nesizathu.

## Ubude

| Okuthayiphwayo | Kusho |
|---|---|
| `3m` `320cm` `3200mm` | Amamitha, amasentimitha, amamilimitha |
| `10'` `10ft` `10 feet` | Amafidi |
| `6"` `6in` `6 inches` | Amainshi |
| `10'6"` `10' 6"` `10'-6 1/2"` | Amafidi namainshi, nengxenye |
| `6 1/2"` `6-1/2"` `3/4"` | Amainshi nengxenye |
| `1.5ft` `.5m` | Amadesimali nesiyunithi |
| `120` | Inombolo engenayo iyunithi, kuyunithi yemodeli |

**Inombolo engenayo iyunithi isebenzisa iyunithi yemodeli**, njengoba kukhonjiswa kukhethi ngaphansi kwesokudla: amainshi kumodeli yamafidi namainshi (ngakho `120` ingamafidi ayi-10), amamilimitha kumodeli yamamilimitha, njalo njalo. Ukuthayipha iyunithi kuyanqoba, nanoma iyiphi iyunithi yemodeli. Amawaza ezicabha (’ ” ′ ″) nawo afundwa njengamafidi namainshi.

:::warning
Sebenzisa **ichashazi** ngamadesimali: `2.5m`. Ikhoma yahlukanisa amanani amabili, ngakho `2,5` ingu-2 no-5 (amanani amabili), noma yiziphi izilungiselelo zolimi zakho.
:::

## Okubalwayo

Noma yisiphi ubude bungaba yisibalo: engeza `+`, susa `-`, phindaphinda `*`, hlukanisa `/`, bese usebenzisa amabhulaketi. Akudingeki ikhalkhuleyitha.

| Okuthayiphwayo | Kusho |
|---|---|
| `2.5/3` | Ingxenye yesithathu ka-2.5 (kuyunithi yemodeli) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" kumodeli yamafidi namainshi |
| `3m-25cm` | 2.75 m |

Inombolo engenayo iyunithi iba yiyunithi yemodeli uma iyubude (`2.5/3` kumodeli yamamitha ingu-0.833 m), futhi uma iphindaphinda noma ihlukanisa ubude iba yisibalo esijwayelekile (`2*450mm`). Ama-engeli nezibalo zokuphindaphinda nazo zamukela ukubalwa: `90/2` ingu-45°. Amabanga amabili aphindaphindwe enza indawo, hhayi ubude, ngakho `2m*3m` iyenqatshwa.

Uma i-ModelCraft ingakwazi ukukubala, i-status bar ichaza okungalungile nokuthi kuphi, isibonelo "Ukuhlukanisa ngo-zero (uhlamvu 4)." Ibhulaketi nalo liqala i-value box, ngakho ungaqala ngo-`(`.

Lezi zigcina incazelo yazo: `/3`, `3x` no `*3` ngemva kokukopisha, `24s` kwezinhlangothi, nokuthi `/3` ngomphetho okhethiwe (iwuhlukanisa [umphetho](topic:divide)).

## Ngethuluzi

| Ithuluzi | Ilebula | Okuthayiphwayo |
|---|---|---|
| {{ui:Umugqa}} | {{ui:Ubude}} | Ubude (ngokuya kwesikhombisi), noma iphoyinti noma i-offset (ngezansi) |
| {{ui:Unxande}} | {{ui:Izilinganiso}} | Ubude ezimbili: `4m,3m`, `12',10'`. Isemikholoni nayo iyasebenza: `4m;3m` |
| {{ui:Indilinga}}, {{ui:Ipholigoni}} | {{ui:Izinhlangothi}}, bese {{ui:Umsakazo}} | Ngaphambi kokuchofoza kokuqala, inani lezinhlangothi: `12s` noma `12` (3 kuya 999). Ngemva kwalokho, umsakazo |
| {{ui:Sunduza/hudula}} | {{ui:Ibanga}} | Ubude. Olungelona hlangothi kuya ngaphansi kwalokho |
| {{ui:Hambisa}} | {{ui:Ibanga}} | Ubude (ngokuya kwesikhombisi), noma iphoyinti noma i-offset. Ngemva kokukopisha: `3x`, `*3`, `/3` |
| {{ui:Jikisa}} | {{ui:I-engeli}} | Amadigri: `90`, `-45`, `22.5` |
| {{ui:Shintsha usayizi}} | {{ui:Shintsha usayizi}} | Isilinganiso esingaphezulu kuka-0: `2`, `0.5`, `1.25` |
| {{ui:Ithephu}} | {{ui:Phambanisa}} noma {{ui:Ubude}} | Ubude |
| {{ui:Hlukanisa}} | {{ui:Izingxenye}} | Izingxenye ezilinganayo ezingaki: `5`, `5s` noma `/5` (2 kuya 1000). Bona [Hlukanisa umphetho noma ijika zibe yizingxenye ezilinganayo](topic:divide) |
| {{ui:Isilinganiso}} | {{ui:Phambanisa}}, bese {{ui:Ubude}} | Lapho kuhamba khona umugqa wesilinganiso; ngemva kokuwubeka, ubude obusha buguqula usayizi wemodeli |
| {{ui:Khetha}} | {{ui:Inani}} | Uma kukhethwe isilinganiso esisodwa noma omphetho owodwa, ubude obusha buguqula usayizi wemodeli. Bona [Silinganisa futhi uguqule usayizi](topic:dimensions) |

## Amaphuzu nokuphambanisa

Ku-{{ui:Umugqa}} ne-{{ui:Hambisa}}, ngemva kokuchofoza kokuqala:

- `[x,y,z]` iya kuleso siphoyinti esingqondile emodelini (ezinhlelweni zeqembu lalo uma uhlela ngaphakathi kweqembu). Isibonelo: `[0,0,3m]` ingu-3 m ngaphezulu kwe-origin.
- `<dx,dy,dz>` iya kude kangaka kusukela esiphoyintini sokuqala ngasemgqeni obomvu, oluhlaza nowokuluhlaza okwesibhakabhaka. Isibonelo: `<0,0,10'>` ingu-10 amafidi ngqo phezulu.

Okunye ngakunye kwalezi zinani kungaba neyunithi yalo: `<12',0,6">`.

## Izinkomba ngemva kokuhamba

Ngemva nje kokukopisha nge-{{ui:Hambisa}}:

| Okuthayiphwayo | Kwenza |
|---|---|
| `3x` noma `*3` | Izikhopi ezi-3 ngomugqa ngesikhala esifanayo |
| `/3` | Izikhopi ezi-3 ezihlukaniswe ngokulinganayo kusukela kokuqala kuya kokukopisha kokuqala |

Kuya kuma-500 izikhopi. Bona [Hambisa, kopisha futhi wenze ama-array](topic:move-copy#a-row-of-copies).

## Amabanga athayiphwayo adinga isiqondiso

Ubude obuthayiphwe bodwa buya ngendlela ipointer ebheke kuyo kusukela ekuchofozeni kokuqala. Uma uthayipha ngemva kokuchofoza, ngaphambi kokuhamba nakancane, asikho isiqondiso futhi akukho okwenzekayo. Hambisa ipointer kancane ngasendleleni ofuna ukuya kuyo, bese uthayipha.

## Iyunithi yemodeli

Shintsha iyunithi ekhethini ngaphansi kwesokudla: {{ui:ft and in}}, in, ft, yd, mi, mil, µm, mm, cm, m noma km, uma zivuliwe ku-{{ui:Izilungiselelo}} › {{ui:Okujwayelekile}} › {{ui:Amayunithi}} (iyunithi yemodeli uqobo ihlala ikhona). Ubude othayiphwa ngophawu lanoma yiyiphi iyunithi lufundwa ngaleyo yunithi. Bona [Amayunithi, amanani athayiphwayo nezinhlu zamayunithi](common:unit-lists). Lushintsha indlela ubude obubonakala ngayo nendlela izinombolo ezingenayo iyunithi ezifundwa ngayo; imodeli ihlala ingosayizi ofanayo. Iyunithi igcinwa efayelini.

Indlela usayizi obonakala ngayo:

| Iyunithi | Ubude | Izindawo | Amavolumu |
|---|---|---|---|
| ft and in | `10' 6 1/2"` (kuya ku-1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² kusukela ku-0.01 m², kungenjalo mm² | m³ kusukela ku-0.01 m³, kungenjalo mm³ |

Imodeli entsha iqala ngamafidi namainshi uma ulimi lwesiphequluli luseyisifunda se-US (nase-Liberia naseMyanmar), futhi ngamamilimitha kwenye indawo yonke. Iyunithi enenkanyezi ku-{{ui:Izilungiselelo}} › {{ui:Okujwayelekile}} › {{ui:Amayunithi}} isetshenziswa esikhundleni salokho, uma i-ModelCraft inayo. Noma shintsha ikhethi ngemva kwe-{{ui:Okusha}}.
