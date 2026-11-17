---
title: Amanodi: yakha imodeli ngokuxhuma
summary: Xhuma izinombolo zibe amaphoyinti, amaphoyinti abe amajika, namajika abe izindawo. Shintsha inombolo bese konke okulandelayo kwakhiwa kabusha. Yonke i-node nayo iwumugqa we-CraftScript, futhi igrafu igcinwa kufayela.
keywords: amanodi, umhleli wamanodi, visual scripting, parametric, igrafu, izintambo, amaport, okukhululekile, freeform, nurbs, loft, extrude, revolve, isiyingi, ijika, indawo, uchungechunge, uhlu, isikripthi, craftscript, grasshopper
from: 9c8e254f
---

Umhleli we-**Amanodi** wakha ijiyomethri ngokuxhuma amabhokisi ndawonye. Ibhokisi ngalinye (i-node) lenza umsebenzi omncane: lenza inombolo, iphoyinti, isiyingi, i-loft. Uxhuma umphumela wesinye kokufakwayo kwesilandelayo, bese imodeli iyalandela uma ushintsha inombolo eqalayo.

Uyivule kusuka ephaneleni lesokudla: {{ui:Nodes}} › {{ui:Nodes…}}. Ifayela elinegrafu esevele liyivula lodwa. Iwindi eliphezu kombono we-3D: hudula isihloko sayo ukuze uyihambise, hudula ikhona layo ukuze ushintshe usayizi.

## Ukuxhuma

1. Khetha i-node kuhlu oluseceleni kwesokunxele (thayipha esibhokisini sokusesha ukuze unciphise, <kbd>Enter</kbd> ingeza okokuqala okufanayo). Ivela phakathi kwe-canvas.
2. Hudula kusuka ku-**output** yesiyingi esincane eseceleni lesokudla le-node eyodwa iye ku-**input** yesiyingi esincane eseceleni lesokunxele lenye. Ichashazi liba luhlaza uma lifaneleka, libe bomvu uma lingafaneleki; liphathe ngesikhombi ukuze uthole isizathu.
3. I-input engenalutho ibonisa ibhokisi lenani elithayiphiwe. Thayipha inombolo bese ucindezela <kbd>Tab</kbd>: umphumela uyakhiwa kabusha.
4. Isiyingi esincane esisesihlokweni se-node yiso i-**eye**. I-node enesiyingi ivuliwe iyadwetshwa embonweni we-3D, njengemigqa yamajika, ukukhanya kwezindawo, amachashazi wamaphoyinti.

Hudula i-node ngesihloko sayo. Hudula ingemuva ukuze uhambe, phendula isondo ukuze usondele. <kbd>Delete</kbd> isusa i-node ekhethiwe. {{ui:Tidy}} ihlela ama-node ngamakholomu, {{ui:Fit}} iwalethela wonke embonweni, {{ui:Undo}} no {{ui:Redo}} zihamba phakathi kokuhlela kwakho.

## Izinhlobo nezinyunithi

Ama-port anohlobo: inombolo, yebo/cha, iphoyinti, i-vector, ijika, indawo, imesh, i-solid, noma "geometry" kunoma yimuphi kwalezo. Iphoyinti lingadlulisela i-vector input nokubuyela emuva. Izinombolo zithwala iyunithi: i-**length** isemamilimitha futhi i-**angle** iseziqeshini. I-length ayikwazi ukudlulisela ku-angle, futhi i-length ephindwe ngayo yona (indawo) iyenqatshwa, ngakho umugqa ongalungile uyamiswa lapho wenziwa.

Uhla oluyisikwele yi-**list**. Uma uhla lufinyelela okokufakwayo okunenani elilodwa, i-node isebenza kanye ngechaza ngalinye, bese umphumela wayo uba uhla. Uhla olufushane luphinda okokugcina kwalo. Isibonelo, i-**Series** yobude efakwa ku-**Move** yenza isitaki samakhophi.

## Ama-solid namabhulu njengama-node

Iqembu **Solids** lenza imizimba evaliwe kusuka kuzindawo ezifanayo nasephaneli Yezinkalo: **Box solid**, **Cylinder solid** no **Sphere solid** (usayizi ngamamilimitha), **Hlanganisa** (Union), **Susa** (Subtract) ne-**Ukuhlanganisa** (Intersect) (i-solid yesibili ithathwa kowokuqala; ukubekezelela yibanga lapho izinxantathu zenjini ye-solid zingaba khona kude nezindawo ezinembile), **Fillet between faces** (izinhlangothi ngenombolo yazo ku-solid, 1 kowokuqala; irediyasi, nerediyasi ekugcineni uma ingaphezu kuka-0), **Solid volume** (mm³) no **Solid to mesh** (ukuze ubone noma uyibhake).

I-solid inohlobo lwayo lwe-port: iphoyinti noma inombolo akukwazi ukuxhunywa kokufakwayo kwe-solid, futhi ichashazi lihlala libomvu. Ama-node e-Boolean ne-Fillet asebenzisa injini ye-solid yohlelo ngokwalo, elayishwa ngokuqala lapho umhleli uvulwa.

## Amaphutha

I-node engakwazi ukwenza umsebenzi wayo ichaza ngani ngaphansi kwegama layo, ngombala obomvu ("Irediyasi kufanele ibe ngaphezu kwe-zero."), namanodi alandelayo ayalinda. Lo mlayezo ufana ne-Problem kwiphaneli ye-Problems, ngakho ungawuthola khona.

## Yonke i-node ingumugqa wescript

Cindezela {{ui:Script}} ukubona igrafu njengoba iri-CraftScript: umugqa owodwa ngayinye ye-node, njengo `n3 = nd_circle(n2, n1, [0 0 1]);`. Hlela umbhalo bese ucindezela {{ui:Make the graph from this script}} ukuyibuyisa ibe yigrafu. Imisebenzi ye-`nd_` ifanayo kuCraftScript ku-PartCraft, ngakho igrafu ingasebenza, iphindwe noma ihlolwe khona. Izinombolo ezingahleliwe zihlala zithatha i-**seed**, ngakho igrafu efanayo inikeza umphumela ofanayo kuzo zonke izikhompyutha.

## Igcinwe nefayela

Igrafu igcinwa kufayela lemodeli. Ama-node akha amajika, izindawo nama-mesh ngokwawo: awashintshi izinhlangothi zemodeli kuze kucelwe.

## Guqula ibe imodeli

Vula isiyingi se-node eyenza indawo noma i-mesh, bese ucindezela {{ui:Bake to model}} ewindini le-Nodes. Ingxenye ngayinye evezwayo iba iqembu lezinhlangothi emodelini, ngamamitha, oyikwazi ukuhlela njengakunoma yini enye. Kuyisinyathelo esisodwa se-undo. Igrafu iyahlala, kodwa ikhophi ayisalandeli: shintsha inombolo bese uyi-bhake futhi ukuthola enye entsha. Amaphoyinti namajika akayona ama-solid, ngakho ayakhishwa, nombhalo uyasho ukuthi yangaki.
