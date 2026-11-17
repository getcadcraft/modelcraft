---
title: Ilipat, kopyahin at gumawa ng mga array
summary: Ilipat ang mga bagay sa pamamagitan ng pag-click o sa eksaktong distansya, kopyahin ang mga ito gamit ang modifier key, at gumawa ng isang hilera ng mga kopyang pantay ang pagitan.
keywords: ilipat, kopyahin, duplicate, array, hilera, spacing, divide, offset, stretch, columns, ulitin, multiple copy
from: 280245fc
---

{{ui:Move}} ({{key:M}}) ay naglilipat ng anumang napili mula sa isang punto papunta sa isa pa. Kapag may hawak na modifier key, nagiging kopya ito, at pagkatapos ng kopya ay maaari mong i-type kung ilan pa ang gusto mo.

## Ilipat ang isang bagay

1. Piliin ang gusto mong ilipat (tingnan ang [Pumili ng mga bagay](topic:select)). Kung walang napili, kukunin ng Move ang bagay na i-click mo.
2. Pindutin ang {{key:M}}.
3. I-click ang punto kung saan ka maglilipat. Pumili ng makabuluhang punto, gaya ng sulok: ang punto na iyon ay eksaktong mapupunta sa lugar na i-click mo sa susunod.
4. Igalaw ang pointer. Susunod ang napili. Nagsa-snap ito sa mga punto, gilid, at sa pulang, berde at asul na direksyon, gaya ng ginagawa ng linya.
5. I-click kung saan pupunta ang punto, o i-type ang distansya at pindutin ang {{key:Enter}}.

   Ang tip sa status bar ay babalik sa "Click a point to move from…" para sa susunod na paglipat.

Ang distansyang na-type mo ay mapupunta sa direksyong itinuturo mo. Maaari ka ring mag-type ng eksaktong offset, `<2m,0,0>` (2 m sa pula), o eksaktong destinasyon para sa punto na pinili mo, `[0,0,0]` (ang origin). Tingnan ang [I-type ang eksaktong sukat](topic:value-box).

Para gumalaw sa iisang axis lamang, pindutin ang arrow key pagkatapos ng unang click: ang {{key:Right}} ay nagla-lock sa pula, ang {{key:Left}} sa berde, ang {{key:Up}} sa asul. Pindutin muli ang parehong arrow para i-unlock.

## Ang paglipat ng bahagi ng hugis ay nag-uunat dito

Ang geometry na hindi naka-group ay magkakaugnay. Kapag pumili ka ng isang face o ilang gilid at inilipat ang mga ito, mag-uunat ang mga face na nakakabit sa mga ito para sumunod. Ilipat sa gilid ang itaas na face ng isang box at titingkayad ang box; ilipat ang isang gilid ng bubong at magbabago ang pitch nito. Ang mga face na hindi na kayang manatiling patag ay titiklop sa mga triangle.

Para ilipat ang buong bagay nang hindi nag-uunat, piliin muna ang lahat nito (i-triple-click), o mas mabuti, gawin itong group o component (tingnan ang [Mga group at component](topic:groups-components)).

## Kopyahin ang isang bagay

1. Piliin ang gusto mong kopyahin.
2. Pindutin ang {{key:M}}.
3. Hawakan ang {{key:Ctrl}} (o {{key:Alt}}) at i-click ang punto kung saan ka maglilipat. Sa Mac, ganoon din ang {{key:Mod}} o {{key:Alt}}. Ang tip ay nagsasabing "Ctrl moves instead", na ibig sabihin ay kumokopya ka.

   Maaari mo ring pindutin at bitawan ang {{key:Ctrl}} o {{key:Alt}} pagkatapos ng unang click para lumipat sa pagitan ng paglipat at pagkopya.

4. I-click kung saan pupunta ang kopya, o i-type ang distansya at pindutin ang {{key:Enter}}.

   Mananatili sa dating lugar ang orihinal, at napili ang kopya.

## Kopyahin, i-cut, i-paste at i-duplicate

- {{key:Mod+C}} ay kumokopya ng napili, {{key:Mod+X}} ay nag-cut nito (kinokopya at saka binubura), at ang {{ui:Copy}} at {{ui:Paste}} ay mga button din sa grupo ng {{ui:Edit}} sa toolbar, at ang {{ui:More}} sa tabi nila ay may cut, paste in place, at duplicate.
- {{key:Mod+V}} ay nagpe-paste: sumusunod sa pointer ang balangkas ng kopya, nagsa-snap tulad ng anumang tool, at ang isang click ay ilalagay ito na nasa lugar ang pinakamababang sulok. Kinakansela ng {{key:Esc}}.
- {{key:Mod+Shift+V}} ay nagpe-paste sa mismong lugar, eksakto kung saan galing ang kopya, kapaki-pakinabang para ilipat ang isang bagay sa group na bukas mo.
- {{key:Mod+D}} ({{key:Shift+D}} sa Modeler style) ay nag-du-duplicate: may gagawing kopya at agad itong gagalaw kasama ng pointer; i-click para ilagay, i-type ang distansya, o pindutin ang {{key:Esc}} para bitawan ito. Pagkatapos nito, i-type ang `3x` para sa mas maraming kopya nang sunod-sunod.

Ang na-paste na group ay nagiging bagong group. Ang na-paste na component ay isa pang placement ng parehong component, kaya kapag inedit mo ang isa, magbabago rin ang lahat ng iba. Ang mga kopya ay nagpe-paste din sa ibang tab ng ModelCraft sa browser na ito (papasok ang mga ito bilang bagong definition doon).

## Isang hilera ng mga kopya

Kaagad pagkatapos ng isang kopya, habang nananatiling Move ang tool:

- I-type ang `3x` (o `*3`) at pindutin ang {{key:Enter}} para sa tatlong kopyang sunod-sunod, bawat isa ay nasa parehong pagitan ng unang kopya. Makakakuha ka ng tatlong bagong kopya bukod sa orihinal.
- I-type ang `/3` at pindutin ang {{key:Enter}} para hatiin sa halip: tatlong kopyang pantay ang pagkakalatag mula sa orihinal hanggang sa kinalagyan ng unang kopya, at ang huli ay nasa mismong lugar na iyon. Gamitin ito para punuin ang isang agwat: ilagay ang isang kopya sa malayong dulo, saka hatiin.

Maaari kang mag-type ng ibang numero pagkatapos: ang `5x` ay papalit sa hilera ng `3x`. Pinaalala ng tip: "Copied. Type 3x for more copies in a row, or /3 to divide the distance."

### Halimbawa: mga column bawat 6 metro

1. Gumawa ng column at gawin itong component ({{key:G}}), para sabay-sabay magbago ang lahat ng kopya sa susunod.
2. Pindutin ang {{key:M}}, hawakan ang {{key:Ctrl}} at i-click ang base corner ng column.
3. Gumalaw sa pulang axis at i-type ang `6m`, saka {{key:Enter}}.
4. I-type ang `4x` at pindutin ang {{key:Enter}}. Mayroon ka nang limang column, 6 m ang pagitan.

## Mga dapat malaman

- Pindutin ang {{key:Esc}} bago ang pangalawang click para kanselahin; babalik sa dating lugar ang lahat.
- Gumagana ang Move sa loob ng group na ine-edit mo. Para ilipat ang buong group, isara muna ito at piliin mula sa labas.
- Kapag naka-on ang **Collide** (sa kanang ibaba, at sa [Mga setting ng ModelCraft](topic:settings#solids-stop-where-they-touch)), hihinto ang paglipat sa punto kung saan dumidikit ang napili sa ibang solid sa halip na dumaan dito. I-click ang {{ui:Collide}} para i-off ito sa paglipat na dapat dumaan.
- Para ilagay ang kopya sa loob ng ibang group: kopyahin ito, buksan ang ibang group, at i-paste ({{key:Mod+Shift+V}} ay pinapanatili ito sa parehong lugar).
