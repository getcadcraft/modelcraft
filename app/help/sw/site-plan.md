---
title: Modeli kwenye mpango wa eneo kutoka DWG au DXF
summary: Leta mpango wa eneo au wa sakafu wa CAD kama mistari ardhini, jibu swali la vipimo, na uifuatilie kuwa nyuso na wingi.
keywords: mpango wa eneo, dwg, dxf, cad, leta, mchoro, mchoro wa mkono, picha ya mchoro, karatasi, picha, kalamu, rangi za kalamu, dynamic blocks, hali za kuonekana, maandishi, hatch, spline, ellipse, 3d face, fuatilia, mpango wa sakafu, kiwanja, mstari wa mali, vipimo, underlay, muktadha
from: 3415dc96
---

ModelCraft inaweza kuleta mistari ya mchoro wa CAD wa 2D, mpango wa eneo au mpango wa sakafu, na kuiweka ardhini ili uweze kumodeli juu yake.

## Leta mchoro

1. Bonyeza {{ui:Leta}} kwenye kikundi cha {{ui:Faili}} (au dondosha faili kwenye mwonekano wa 3D).
2. Chagua faili la `.dwg` au `.dxf`.

   DWG kubwa inachukua muda: upau wa hali unasema "Inasoma plan.dwg…" hadi iingie.

3. Ikiwa mchoro haisemi vitengo vyake ni vipi, mazungumzo yenye kichwa "Vitengo vya mchoro" yanauliza: "Kitengo kimoja cha mchoro ni kipi?" Chagua {{ui:Inchi}}, {{ui:Futi}}, {{ui:Milimita}} au {{ui:Mita}}. Mipango mingi ya tovuti ya Marekani imechorwa kwa futi, mipango ya usanifu kwa inchi, na mipango ya metriki kwa milimita.

   Mchoro unafika kama kikundi cha kingo ardhini, kimechaguliwa, na mwonekano unakuza hadi kwake. Upau wa hali unasema kingo ngapi zimeingia, kwa mfano "Imeletwa site.dwg: kingo 1697 ardhini, kwenye kikundi. Ivunje ili uchore juu yake moja kwa moja."

## Kinachoingia

- Mistari, polilaini (pamoja na mikunjo yake), duara na mikunjo, na bloku pamoja na kila kitu ndani yake, kutoka **nafasi ya modeli** pekee. Mikunjo inakuwa vipande vifupi vya moja kwa moja.
- Mistari, polilaini, mikunjo, duara, ellipse na spline vinatua bapa ardhini, kama kingo.
- **Hatch** zinakuwa nyuso ardhini, na visiwa vyake vinakuwa mashimo, ili uweze kusukuma/kuvuta eneo lenye hatch mara moja.
- **Nyuso za 3D** na kujaza ngumu zinakuwa nyuso; nyuso za 3D zinabaki na urefu wake.
- **Maandishi** (maandishi ya mstari mmoja, maandishi ya mistari mingi na thamani za sifa) yanachorwa kama kingo katika herufi rahisi za mstari mmoja, kwa urefu, pembe na mpangilio wa maandishi yenyewe. Fonti yake si ya mchoro, kwa hiyo maneno yanaweza kuwa marefu au mafupi kidogo. Herufi ambazo herufi hizo hazina umbo lake zinachorwa kama masanduku madogo na zinahesabiwa.
- **Vipimo** vinachorwa jinsi mchoro unavyoonyesha (mistari yake, vichwa vya mishale na maandishi, kama kingo na nyuso).
- **Dynamic blocks** zinakuja jinsi mchoro unavyoonyesha: kila bloku iliyowekwa katika hali ya kuonekana ilivyohifadhiwa, na mistari ya hali hiyo pekee. Upau wa hali unaorodhesha hali zilizoonyeshwa na hali nyingine ambazo kila moja inayo, kwa mfano "Receptacle imeonyeshwa kama Duplex ×38, GFI ×7 (hali: Duplex, GFI)". ModelCraft haibadilishi hali.
- **Yabisi za 3D, maeneo na miili** (data ya ACIS ya mchoro) vinakuja kama vikundi vyao wenyewe: yabisi lililofungwa kama yabisi, eneo au mwili wazi kama nyuso. Nyuso bapa zinakuja nzima; nyuso zilizopinda (silinda, koni, duara, torasi, nyuso rahisi za spline) kama pembetatu ndogo zenye kingo laini kati yake, hivyo kingo za yabisi yenyewe tu ndizo zinaonekana. Uso kwenye aina nyingine ya uso umeachwa na umeorodheshwa: "Not drawn yet (3D solids): …".
- Haijaletwa: nukta, jedwali, multileaders, picha na aina nyingine za vitu. Upau wa hali unaorodhesha kwa aina, kama "Not imported: 12 POINT." Chochote kilicho kwenye layout (nafasi ya karatasi) pia kimeachwa, bila kuorodheshwa.
- Tabaka hazihifadhiwi: mistari yote inakuja sawa.

Mchoro ukiwa mbali na asili yake (kwa mfano kuratibu za state plane), bado unaletwa, lakini unaweza kutua mbali na asili ya ModelCraft. Michoro inayofika zaidi ya 10,000 km kutoka asili yake inakataliwa: sogeza mchoro karibu na 0,0 kwenye programu ya CAD kwanza.

## Fuatilia kuwa nyuso

Mistari iliyoletwa mara chache hufungana vizuri kuwa nyuso zenyewe. Njia mbili za kufanya kazi:

**Weka mpango kama underlay (inapendekezwa)**

1. Acha mpango kama kikundi chake.
2. Chora jengo lako juu yake kwa {{ui:Mstatili}} na {{ui:Mstari}}, ukivuta kwenye pembe za mpango ("Endpoint") na kingo zake ("On edge").
3. Sukuma/vuta nyuso zako juu. Mpango unabaki bila kuguswa chini yake, na unaweza kufuta kikundi chote baadaye kwa mbofyo mmoja.

Kunasa kunafanya kazi kwenye vikundi: unaweza kuvuta kwenye pembe za mpango bila kuufungua.

**Chora juu ya mistari ya mpango wenyewe**

1. Chagua kikundi cha mpango na ubofye {{ui:Vunja}}. Mistari yake inakuwa kingo huru.
2. Pale ambapo muhtasari uliofungwa unapaswa kuwa uso, chora mstari mmoja juu ya ukingo wowote wa muhtasari huo kwa {{ui:Mstari}}, kutoka kona hadi kona. Muhtasari ukiwa umefungwa na bapa, uso kwa kawaida hujaa wenyewe. Usipojaa, tafuta pengo au mwingiliano kwenye muhtasari na uchore juu yake.
3. Sukuma/vuta.

Hii inafanya kazi vizuri zaidi kwenye mpango safi. Kwenye uchunguzi wenye msongamano, kufuatilia juu yake ni haraka zaidi.

## Matatizo

- "This is a binary DXF. Save it as ASCII DXF and try again." Hifadhi DXF upya kutoka kwenye programu ya CAD kama ASCII (maandishi).
- "…has no lines, arcs or circles in model space to bring in." Mchoro huenda una kila kitu kwenye layouts, au ni maandishi na hatch pekee.
- "This drawing could not be read (…). It may be damaged, or saved in a DWG version the reader does not handle…" Mabano yanasema kwa nini, kwa mfano "DWG version AC1009 is not supported". Hifadhi kama DXF, au kama DWG kutoka AutoCAD 2000 hadi 2018, kutoka kwenye programu ya CAD.
- Mpango una ukubwa usio sahihi: ulichagua kitengo kibaya. Tendua ({{key:Mod+Z}}) na uingize tena, au [Badilisha ukubwa](topic:rotate-scale) kikundi kwa kipengele sahihi (12 kati ya futi na inchi, 25.4 kati ya inchi na milimita).

Ili kugeuza mistari ya kontua kuwa ardhi unayoweza kuchonga, tazama [Ardhi](topic:terrain).

## Kutoka picha ya mchoro wa mkono

**File › Import a sketch photo…** — yaani **Faili › Leta picha ya mchoro…** — inachukua picha ya mchoro kwenye karatasi (JPEG, PNG au TIFF; moja kwa moja kutoka simu inafaa) na kutengeneza aina ile ile ya kingo ardhini. Sema ni karatasi ipi (au iache itafute karatasi, ikichukuliwa kuwa A4) na kipimo cha mchoro, 1 : 100 kwa mfano. Ukingo wa karatasi unatafutwa na picha inanyooshwa, wino unafuatiliwa kuwa mistari na mikunjo, na kila rangi ya kalamu (nyeusi, nyekundu, bluu, kijani) inakuwa kikundi chake chenye lebo (**Sketch black**, **Sketch red**, …), zote ndani ya kikundi kimoja chenye jina la picha. Ni hatua moja ya kutendua, na kila kitu kinatokea kwenye kompyuta hii: hakuna kinachotumwa popote.

Pale ukingo wa karatasi usipopatikana, picha nzima inachukuliwa kama karatasi na upau wa hali unasema hivyo: pima kitu unachokijua na upe kikundi kipimo kipya ikiwa si sahihi. Fuatilia mistari kuwa nyuso kama ilivyoelezwa hapo juu.
