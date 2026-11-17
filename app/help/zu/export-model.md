---
title: Thumela imodeli ezinhlelweni zezinye
summary: Khetha ukuthumela okufanele ukwenza, ukubonisa, ukuprinta nge-3D, i-BIM ne-BimCraft, bese uhlola okugcinwa ngokuthumela ngakunye.
keywords: phrinta, 3mf, pdf, iphepha, isithombe, isithombe-sikrini, render, gcina ukubuka, khipha, yabelana, renda, ukurenda, gltf, glb, collada, dae, obj, stl, ukuprinta nge-3d, ifc, bim, bimcraft, thumela, ezinye izinhlelo
from: 9e13e80d
---

Ukukhipha kwenza ikhophi yemodeli ngefomethi ehlukile. Gcina nefayela lakho le-`.modelcraft`: yiyo kuphela efaka konke, futhi yiyo kuphela ModelCraft evula ngqo.

## Khipha

1. Londoloza kuqala ({{key:Mod+S}}), ukuze ifayela lakho lokusebenza liphephile.
2. Chofoza {{ui:Khipha}} eqenjini le-{{ui:Ifayela}}.
3. Khetha ifomethi. Isiphequluli siyasilanda, sibizwe njengemodeli.

Imodeli yonke iyakhishwa. Ukukhipha ingxenye eyodwa, londoloza, sule okunye, khipha, bese uhlehlisa noma uvule kabusha.

## Iyiphi ifomethi

| Ufuna ukwenza | Khetha | Amanothi |
|---|---|---|
| Ukuvula komunye umhleli we-3D | {{ui:Collada (.dae)}} | Igcina amaqembu, amaqembu angaphakathi kwamanye, izakhi (zabelwana, azikopishelwa), amagama nemibala. Z phezulu, amamitha. |
| Ukurenda noma ukusebenzisa ohlelweni lokubonisa | {{ui:OBJ (.obj)}} noma {{ui:glTF binary (.glb)}} | I-OBJ ifundwa kakhulu; ibhala indawo yeqembu ngalinye njengento ehlukile, kodwa ayinamibala futhi ayinazakhi ezabelwanayo. I-glTF igcina izakhi nemibala. |
| Ukufaka kuwebhu, kwinjini yemidlalo noma ku-AR | {{ui:glTF binary (.glb)}} | Ifayela elilodwa elinakho konke. |
| Ukuprinta nge-3D | {{ui:Hlola ukuprinta nge-3D (STL noma 3MF)…}} | Ihlola ukuthi imodeli ivaliwe futhi ibheke ngendlela efanele, bese ibhala i-STL noma i-3MF ngamamillimitha. Bheka [Lungisa imodeli ukuze iprintwe nge-3D](topic:print-3d). {{ui:STL yokuprinta (.stl, amamillimitha)}} ibhala imodeli yonke ngaphandle kokuhlola. |
| Ukuvula ku-BimCraft noma olunye uhlelo lwe-BIM | {{ui:IFC ye-BimCraft (.ifc)}} | Iqembu ngalinye elikhulu noma isakhi sibe yisakhiwo esisodwa. |

Ibha yesimo iqinisekisa ngokukhishwa ngakunye, isibonelo "Kukhishiwe House.stl (amamillimitha)." noma "Kukhishiwe House.dae (Collada 1.4.1, Z phezulu, amamitha; izakhi zihlala zabelwana)."

## Ngaphambi kokukhipha

- **Hlanganisa izinto zakho.** I-Collada, i-glTF ne-IFC zigcina amaqembu nezakhi njengezinto ezihlukile. Ijiyomethri eshiyekile iphuma njengesiqu esisodwa; ku-IFC iba isakhiwo esisodwa esibizwa ngokuthi "Loose geometry".
- **Bheka amagama.** Amagama amaqembu nezakhi aya ku-Collada ne-IFC, ngakho udonga olubizwa ngokuthi "North wall" lufika lubizwa ngokuthi "North wall".
- **Hlola indlela ubuso obubheke ngayo.** Ubuso obukhombisa luhlaza okwesibhakabhaka olunsundu ngaphandle buzobheka ngaphakathi ekukhipheni. Lungisa nge-{{ui:Phendula ubuso}} (bheka [Sula bese uhlanza](topic:erase#a-face-facing-the-wrong-way)).
- **Ukuprinta,** yenza izingxenye zibe yizinto eziqinile ezivaliwe: khetha iqembu ngalinye bese uhlola ukuthi {{ui:Ulwazi lwento}} lusho "Solid: Yes". Bese ulinganisa imodeli ngosayizi oprintiwe, noma ulinganise kusofthiwe yomshini oprinta.

## Thumela imodeli ku-BimCraft

1. Yenza ingxenye ngayinye yesakhiwo ibe iqembu noma isakhi bese uyibiza.
2. Khetha {{ui:Khipha}}, bese {{ui:IFC ye-BimCraft (.ifc)}}.
3. Vula ifayela `.ifc` elilandiwe ku-BimCraft.

Ukuze uthumele ubuningi bomqondo, sebenzisa {{ui:Khipha}} › {{ui:Ubuningi ku-BimCraft…}} kunalokho: iqembu ngalinye lifika njenganketho yobuningi, ngezitezi, izindawo zezitezi nevolumu. Bheka [Thumela ubuningi ku-BimCraft](topic:massing-to-bimcraft).

Ukukhishwa kwe-IFC okulula akunaxhumanisi ngqo phakathi kwalezi zinhlelo ezimbili. I-IFC inesitezi esisodwa, futhi yonke into iyiproksi yento yesakhiwo esijwayelekile engenayo uhlobo noma izimpawu: ithwala isimo negama kuphela. Amaqembu avaliwe aba yizimo eziqinile; avulekile aba yizindawo.

## Imigqa engenabuso

Imiphetho engeyona ingxenye yanoma yiluphi ubuso (imigqa efana nemihlahlandlela, ipulani yesayithi elingeniswe) ifaka ku-OBJ ne-Collada njengemigqa. I-glTF ne-STL azinendawo yazo futhi ziyayikhipha. Imihlahlandlela nemiboniso akukhishwa kunoma iyiphi ifomethi.

## Gcina ukubuka njengesithombe

{{ui:Khipha}} › {{ui:Isithombe sokubuka (.png)}} igcina ngokuqondile lokho okubonisa ukubuka kwe-3D, ngosayizi wakho esikrinini. {{ui:Isithombe ngobukhulu obabili (.png)}} siyigcina kabili ububanzi nobude (ukuze uprinte noma isilayidi esicacile), nezilinganiso namamaki adwetshwe kabusha ngalobo bukhulu hhayi ngokwelulwa.

Ukuze uthole isithombe esifana nemini (isibhakabhaka, ilanga, izithunzi ezithambile, ingilazi), sebenzisa {{ui:Khipha}} › {{ui:Renda isithombe…}} kunalokho: bheka [Renda isithombe](topic:render).

Ukuze uthole isithombe esihlanzekile, vula [ukubuka kokwethulwa](topic:styles-shadows#presentation-view) ({{key:Shift+P}}) kuqala: amawoka, imihlahlandlela, imigqa yezigaba nokukhethwa kuyakhishwa. Lungisa ikhamera, isitayela nezithunzi ngendlela ofuna ngayo, noma iya ku-[isiboniso](topic:scenes); ukuze ulondoloze ifilimu eyinyakazayo yemiboniso yakho, sebenzisa {{ui:Thumela i-animation}} kuphaneli {{ui:Imiboniso}}.

## Phrinta ukubuka, noma ulondoloze njenge-PDF

- {{ui:Khipha}} › {{ui:I-PDF yokubuka (.pdf)}} igcina i-PDF yekhasi elilodwa: ukubuka ngobukhulu obabili besikrini, nezilinganiso zako, ekhasini le-A4 (Letter uma imodeli ingamafidi namayintshi), ngokuthi kube bubanzi, nomugqa ngaphansi unikeza igama lefayela, usuku nesilinganiso.
- {{ui:Khipha}} › {{ui:Phrinta ukubuka…}} ibeka leli khasi phambi kwebhokisi lokuphrinta lesiphequluli sakho. Khetha iphrinta, noma "Londoloza njenge-PDF".

Ikhasi libonisa ukubuka njengoba kunjalo: ayikho iskeyli ekubukeni okunokujula. Ukuze uthole umdwebo onesikali, vala {{ui:Ukubuka ngokujula}} ubheke ukusuka ku-{{ui:Phezulu}} noma ku-{{ui:Phambili}}, bese wengeza [izilinganiso](topic:dimensions) zobukhulu obubalulekile. [Ukubuka kokwethulwa](topic:styles-shadows#presentation-view) kususa amawoka, imihlahlandlela nokukhethwa; izilinganiso ziyahlala.
