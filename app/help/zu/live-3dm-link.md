---
title: Gcina imodeli ye-.3dm iphila
summary: Shintsha imodeli ohlelweni olwayenza futhi ubone ukuthi iyashintsha lapha, kusuka ku-Rhino 8 noma kusuka ku-Grasshopper definition, ngaphandle kokulondoloza nokungenisa futhi.
keywords: rhino, grasshopper, uxhumano oluphilayo, uxhumano oluphilayo, 3dm, nurbs, ipharamitha, uxhumano, sync, iskripthi, imodeli yesethenjwa, push
from: 331b0a7e
---

Qhubeka wenza lapho owenza khona imodeli, usebenzise umphumela lapha: ukuwurenda, ukuwukhanyisa, noma ukuhlela isigcawu ngawo. Yonke inguquko kolunye uhlelo ibuyekeza iqembu elilodwa ku-ModelCraft.

:::note
Uxhumano ludinga **CadCraft Studio** kulo mshini ofanayo. Ithebhu yesiphequluli ayikwazi ukuthatha uxhumano. Akukho okudluliselwa ku-inthanethi: iskripthi sixoxa ne-Studio ekheleni lalo mshini, ngethokheni.
:::

:::warning
Lolu xhumano luhlolwe nomlobi wefayela weskripthi kanye nesiyisimeleli sesinye uhlelo, hhayi ngaphakathi kwe-Rhino noma i-Grasshopper ngokwazo. Uma kukhona okungasebenzi lapho, sitshele okutshilo.
:::

## Ukusetha

1. Ku-Studio, vula ModelCraft. Ku-{{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}}, thikha **Vumela abasizi be-AI namaskripthi basebenzise ModelCraft**, bese **Hlela**.
2. Ku-Studio, khetha {{ui:Connect an assistant}}. Ibonisa ikheli nethokheni ozoyinamathisela ngezansi.
3. Landa iskripthi: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Kusuka ku-Rhino

1. Qalisa `cadcraft_link.py` kumhleli weskripthi we-Rhino (Python 3 ku-Rhino 8).
2. Okokuqala, namathisela ikheli nethokheni. Zigcinwa ku-`.cadcraft-link.json` efolda yakho yasekhaya, hhayi emodelini. Studio yenza ithokheni elisha lapho iqala ngalinye, ngakho iskripthi sizobuza futhi ngalesosikhathi.

Imodeli yonke ifika njengeqembu elilodwa elibizwa ngegama lombhalo, njengesibonelo "chair (linked)". Emva kwalokho, ushintsho ngalunye luyafika uma uyama isikhashana, futhi kuthunyelwa izinto ezishintshile kuphela. Qalisa iskripthi futhi ukuze umise.

## Kusuka ku-Grasshopper

Qalisa iskripthi kanye ku-Rhino kuqala, ukuze ikheli nethokheni zigcinwe.

1. Engeza ingxenye ye-Script (Python 3) bese unamathisela `cadcraft_link.py` yonke kuyo.
2. Inikeze lezi zokufaka: `G` (ijiyometri, ngokufinyelela kohlu), `N` (igama, elingadingekile), `On` (i-boolean toggle), kanye ne-`Target` (engadingekile: `model` noma `part`, uma zombili izinhlelo zivuliwe).
3. Shintsha `On` ibe true.

Isixazululo ngasinye sithumela `G` bese sishintsha okuthunyelwe yingxenye ngesikhathi esedlule, ngakho ukudonsa isilayidi kubuyekeza leli qembu lapha. Okuphumayo kwayo `a` kuveza okwenzekile. Ingxenye ngayinye ineqembu layo.

## Okungenziwa ngeqembu

- **Lisuse, lithegile, wakhe ngalo.** Lapho ubeka khona iqembu nethegi yalo kuhlala kuyo yonke imibuyekezo, njalo nakho konke okuseceleni kwalo.
- **Ungahleli phakathi kwalo.** Imibuyekezo ngayinye ithatha indawo yakho konke okuphakathi kwalo qembu. Izinto zalo zingezalolunye uhlelo.
- **Hlehlisa.** Imibuyekezo engaphakathi kwamasekhondi amabili kwenye yenye yabelana ngesinyathelo esisodwa sokuhlehlisa, ngakho {{key:Mod+Z}} ithatha lonke ukudonsa. Imibuyekezo elandelayo ibuyisa imodeli ukuthi ifane.
- **Londoloza.** Ifayela elilondoloziwe ligcina uxhumano. Qalisa iskripthi futhi uma uvula kabusha, leli qembu elifanayo liyabuyekezeka.

## Okufika

Ama-mesh, ama-polysurface, ama-surface kanye nama-extrusion njengemesh oyibonayo esikrinini, i-SubD njengemesh yayo, amagophe njengemiphetho, amabhlokhi njengezinto ezihlukene lapho ezimi khona (hhayi njengezingxenye), amalayini njengamathegi, imibala nemiqondo. Bona [Ngenisa imodeli ye-.3dm](topic:import-3dm-files) ukuze uthole ukuthi lezo zinto zivela kanjani lapha.

Okushiyiwe, nenani kolunye uhlelo: amaphoyinti, umbhalo, izilinganiso nokufana nalokho.

**Kuhlangothi olulodwa kuphela.** Ushintsho lapha aluyi kolunye uhlelo.

## Uma kukhona okungahambi kahle

- **"No ModelCraft or PartCraft window allows it":** yenza isinyathelo 1 sokusetha.
- **"Studio refused the token":** i-Studio iqalisiwe kabusha. Kopisha ithokheni elisha bese uqalisa iskripthi futhi. Ku-Grasshopper, qalisa kuqala ku-Rhino.
- **"Cannot reach CadCraft Studio":** i-Studio ayisebenzi, noma ikheli lishintshile.
