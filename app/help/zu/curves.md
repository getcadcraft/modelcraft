---
title: Izinto zamajika
summary: Dweba amajika e-Bézier, e-NURBS namajika ayisigatshana esiqondile, unikeze ukujula, ububanzi noma ukuncipha, gcwalisa amajika athe tshe, bhala umbhalo njengejika, bese uwaguqula abe ama-mesh.
keywords: ijika, amajika, bezier, nurbs, spline, splines, indlela, ithubhu, ipayipi, ikhebuli, udwangu, bevel, extrude, taper, tilt, radius, gcwalisa, iphrofayili, umbhalo, izinhlamvu, ilogo, ijika libe yi-mesh
from: 602bf077
---

**Into yejika** iyijika elenza isimo: ithubhu elicaleni lalo (bevel), ibhendi (extrude), inhlanga ebhantayo (taper), noma, uma lithe tshe futhi livaliwe, ipuleti eligcwele noma izinhlamvu. Isimo silandela ijika: hambisa iphoyinti nethubhu liyahamba nalo. Lapho isimo silungile, lishintshe libe yi-mesh.

## Engeza ijika

Khetha {{ui:Curve}} ohlwini lwendawo yokusebenza bese ucindezela {{ui:Add}}:

| Uhlobo | Kuyini |
|---|---|
| Ijika le-Bézier, indilinga ye-Bézier | Idlula emaphoyinteni ayo; iphoyinti ngalinye linama-handle amabili asetha ukuqondiswa kwejika |
| Ijika le-NURBS, indilinga ye-NURBS, Indlela | Ibushelelezile, idwetshwe ngokuya kumaphoyinti ayo (iqala futhi iphele kumaphoyinti okuphela); iphoyinti ngalinye linesisindo |
| Umbhalo | Umbhalo wakho njengemiphetho yezinhlamvu ethe tshe, egcwele |

Ijika elisha linethubhu elincane ukuze libonakale futhi likhethwe; setha ukujula kwe-bevel kube ku-0 ukuze kube ijika elibukhali elingenalutho.

Ungaqala futhi kokudwetshiwe: khetha i-arc, indilinga, ipholigoni noma ijika elidwetshiwe endaweni yokusebenza yemodeli, bese uchofoza {{ui:Make a curve object}} ku-{{ui:Entity info}}. Imigqa edwetshiwe ihlala.

## Hlela amaphoyinti

Chofoza kabili ijika lento (noma khetha bese ukhetha {{ui:Curve}}) ukuze uyihlele.

- Chofoza iphoyinti noma i-handle (i-Shift yengeza noma isuse); donsa ukuze uhambise. Donsa endaweni engenalutho ukukhetha ngebhokisi.
- {{ui:Extend}} ({{key:E}}, noma {{key:Ctrl}}+chofoza) yengeza iphoyinti ngemva kwesiphetho esikhethiwe, endaweni yesikhombi.
- {{ui:Subdivide}} ({{key:W}}) ibeka iphoyinti phakathi kwamaphoyinti amabili aseduze akhethiwe; i-Bézier igcina isimo sayo.
- {{ui:Move}}, {{ui:Turn}}, {{ui:Scale}} zihambisa amaphoyinti akhethiwe ngesikhombi (izinkinobho ze-modeler {{key:G}} {{key:R}} {{key:S}}, izinkinobho ze-push/pull {{key:M}} {{key:Q}} {{key:S}}); chofoza ukugcina, {{key:Esc}} ukukhansela.
- {{ui:Close}} ({{key:C}}) ivala i-spline evulekile noma ivule evaliwe; {{ui:Reverse}} ({{key:Shift+R}}) iyisebenzisa ngendlela ephambene.
- Izibambi ze-Bézier: {{ui:Smooth}} ({{key:V}}) zibeka zona ukuze kube nejika elibushelelezile, {{ui:Corner}} ({{key:Shift+V}}) zizibheke kumakhelwane, {{ui:Free}} ({{key:Alt+V}}) zishiya lapho ozibeka khona. Ukudonsa isibambi kusenza sikhululeke.
- {{ui:Bézier}}, {{ui:NURBS}} kanye {{ui:Poly}} zishintsha uhlobo lwama-spline akhethiwe, zigcina amaphoyinti.

Yonke inguquko iyisinyathelo esisodwa sokuhlehlisa.

## Isimo

Izilungiselelo zisephaneli (nakuLwazi lwento endaweni yokusebenza yemodeli):

- **Isimo:** amajika e-3D ahamba noma iyiphi indlela; ijika elithe tshe lihlala endizeni yalo futhi lingagcwaliswa.
- **Gcwalisa ama-spline avaliwe** (athe tshe): izinhlangothi ziba ipuleti; ijika elingaphakathi kwelinye libe yimbobo, ngakho izinhlamvu zigcina izimbobo zazo.
- **Extrude:** isigamu sobubanzi bebhendi (amajika avulekile noma e-3D), noma isigamu sokujula kwepuleti (eligcwele).
- **Ukujula kwe-bevel** nobuningi bokujikeleza (**roundness**): ithubhu elijikile elicaleni lejika (nge-extrude: ibhendi elijikile); esimweni esigcwele, umphetho ojikile.
- **Vala iziphetho:** izigqoko ethubhwini elivulekile.
- **Ncipha ngaphansi kwalo:** kulinganisa ngokulinganayo kuso sonke i-spline, isibonelo `1, 0.2` ngenhlanga ebhantayo, `0, 1, 0` ngesipindle.
- **Ukubushelelezisa** no-**order** kwe-NURBS: ukuthi idwetshwa kanjani kahle, nokuthi ibushelelezile kangakanani (2 eqondile … 6 ebushelelezile kakhulu).
- Uma kukhethwe amaphoyinti: **radius** (ububanzi bethubhu lapho, kaphindaphindwe nge-bevel), **tilt** (ijikisa ibhendi ngokuzungeza ijika) kanye, ye-NURBS, **weight**.

Izinguquli zisebenza phezu kwento yejika njengakwe-mesh: i-Array ngaphansi kwalo, i-Mirror, i-Subdivision surface. Bheka [Izinguquli kwe-mesh](topic:modifiers).

## Yiguqule ibe yi-mesh

{{ui:To mesh}} (endaweni yokusebenza yeJika noma kuLwazi lwento, {{ui:Curve to mesh}}) yenza into yejika ibe yi-mesh elibonisa manje; izinguquli zayo zihlala phezulu. Bese uhlela endaweni yokusebenza ye-Mesh. Ukuhlehlisa kubuyisela kuyo.

Bheka futhi [Ama-mesh](topic:meshes) kanye [Hlela i-mesh](topic:mesh-edit).
