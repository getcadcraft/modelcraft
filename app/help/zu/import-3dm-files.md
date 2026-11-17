---
title: Ngenisa imodeli ye-.3dm
summary: Ngenisa ifayela le-.3dm ngama-mesh, izindawo, amajika, amablokhi, izingqimba nemibala; ama-triangle avela kuphi, nalokho okushiywayo.
keywords: 3dm, ngenisa, nurbs, polysurface, brep, izindawo, render mesh, extrusion, amajika, amablokhi, izingqimba, amathegi, imibala, amayunithi, ukushintsha, dlulisa
from: 3cf29879
---

ModelCraft ifunda amafayela e-`.3dm` ngomfundi wayo, ekhasini. Ayikho into elayishwa, futhi isebenza ngaphandle kuxhumo uma i-ModelCraft isebenza. Amafayela alondolozwe ngezakhiwo zenguqulo 5, 6, 7 kanye 8 ahlolwe; amadala (enguqulo 2 kuya ku-4) kufanele avule, kodwa awazanywanga.

## Ngenisa ifayela

1. Chofoza {{ui:Import}} eqenjini {{ui:File}} (noma ushiye ifayela le-`.3dm` ku-3D view).
2. Khetha ifayela.

   Ibha yesimo ithi "Ifunda chair.3dm…" ngenkathi lifunda, bese kuthi okufike, isibonelo "Ingenisiwe chair.3dm: ama-mesh angu-14 (izinhlangothi ezingu-8330), amajika angu-8, ukubekwa kwamablokhi angu-5, izingqimba ezingu-3 njengamathegi. Izindawo: izinhlangothi ezingu-7 kusuka kuma-mesh agcinwe efayelini, ezingu-29 ezihlelwe yi-CadCraft."

Imodeli yonke ifika njengeqembu elilodwa elibizwa ngegama lefayela, likhethiwe, futhi umbono uyasondela kulo. Ukucindezela {{key:Mod+Z}} kuyakususa konke futhi, kubandakanya namathegi.

## Ama-triangle avela kuphi

I-ModelCraft imodela ngezinhlangothi nama-mesh, ngakho yonke indawo efayelini ifika njengo-[mesh](topic:meshes) wama-triangle amancane aphansi. Ngakho uhlangothi ngalunye lwe-polysurface (nanoma yiyiphi i-extrusion) i-ModelCraft ithatha, ngalolu hlelo:

1. **I-render mesh egcinwe efayelini.** Izinhlelo eziningi zokumodela zigcina i-mesh ebonakale esikrinini nendawo ngayinye; uma ikhona, i-ModelCraft iyisebenzisa njengoba iyunjalo.
2. **Ukuhlelwa kwayo**, uma ifayela lingenayo i-mesh egciniwe: amapulani, izindawo ze-NURBS, izindawo zokuzungeza (amasfiya, amakhoni, amatorasi, izimo zokutshiza), amajika e-extrusion namaextrusion (nezimbobo nezigqoko zawo), eqoshwe ngemiphetho yawo. Izinhlangothi ze-polysurface eyodwa zabelana ngamaphoyinti emiphetho yazo, ngakho i-polysurface evaliwe ifika njengo-mesh ovaliwe. Izindawo ezigobile zihlukaniswa kuze kufike ama-triangle asemkhakheni ongaba ngu-0.15 % wosayizi wento kumsebenzi weqiniso.
3. **Lutho**, kuhlangothi lohlobo lwendawo ModelCraft ingakafundi. Ibha yesimo ithi izinhlangothi ezingakanani, nezinhlobo zazo.

Ingxenye ethi "Izindawo:" yebha yesimo ithi izinhlangothi ezingakanani zifike kusuka kuma-mesh agciniwe, nezingakanani i-ModelCraft ezihlelile. Imiphetho ephakathi kwehlangothi elilodwa lefayela iyathamba, nemiphetho phakathi kwezinhlangothi ezimbili ibukhali, ngakho uhlangothi oluyizigoba lubonakala lubushelelezi.

:::tip
Ukuze uthole izimo ezithembekile kakhulu, londoloza ifayela ngama-render mesh ohlelweni olwenze ifayela (ngokuvamile kuyisimo esizenzakalelayo; inketho ethi "save small" iyawakhipha).
:::

## Okufika

- **Ama-mesh** namavertex colors kanye nokuhlelwa kokuthungo.
- **Ama-polysurface, izindawo nama-extrusion**, njengoba kuchaziwe ngenhla.
- **Amajika** (imigqa, ama-polyline, amasiyeliki, izindilinga, amajika e-NURBS namajika ahlanganisiwe kuwo) njengo-[mphetho](topic:curves), iqembu lemiphetho ngalinye lengqimba ngayinye.
- **Amablokhi** aba [izakhi](topic:groups-components): yonke indawo yokubekwa kwebhlokhi ibekwa kwesakhi esisodwa, ngakho ukuhlela ikhophi eyodwa kushintsha zonke. Amablokhi angaphakathi kwamablokhi ayagcinwa.
- **Izingqimba** zaba [amathegi](topic:tags) egama lonke elingqimba ("Furniture::Chairs"), zifihliwe uma ingqimba yayivaliwe. Ukubekwa kwento ngayinye kuthwele ithegi lengqimba yayo.
- **Imibala.** Umbala wento uvela lapho ifayela litshela khona: umbala wayo siqu, owengqimba yayo, noma umbala oyisisekelo wombala wayo. Uba upende wezinhlangothi zayo.
- **Izinto ezifihliwe zifika zifihliwe**; {{ui:Unhide all}} iyazibonisa.
- **Amayunithi:** ifayela litshela iyunithi yalo; imodeli ifika ngosayizi wayo wangempela.

## Okushiywayo (nokutshelwa)

Ingxenye ethi "Izaziso:" yebha yesimo iqamba konke okungafikanga, ngenani lalo:

- amaphoyinti namafu amaphoyinti, umbhalo, amachashazi wombhalo, izilinganiso, abahlinzeki, amahatch, izibane, izindiza zokusika nemininingwane yesakhiwo;
- izinto ze-SubD: zishintshe zibe ama-mesh noma ama-polysurface ohlelweni olwenze ifayela kuqala;
- izinhlangothi zezindawo ezishintshiwe nezinye izinhlobo zezindawo ModelCraft ingakafundi, lapho ifayela lingagcinanga i-mesh yazo;
- amablokhi axhunywe kumafayela amanye (kufundwa ifayela olungenisa kuphela);
- ama-extrusion aneziphetho ezithambekile (ezimitered) afika neziphetho ezisikwe ngesikwele.

Izinto zomumo zokuhlobisa (materials) azifundwa, nezilungiselelo zokurenda, imibono egatshiwe, amaqembu nombhalo womsebenzisi azifundwa; impahla inikeza umbala wayo oyisisekelo kuphela.

## Imikhawulo

Amafayela angafika ku-300 MB. Ifayela elonakele lisho ukuthi kuyini okungalungile futhi alungezi lutho; into eyodwa engafundeki iyashiywa futhi ibalwe, abanye bafike.
