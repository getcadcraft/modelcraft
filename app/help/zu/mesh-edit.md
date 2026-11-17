---
title: Hlela imesh endaweni yokusebenza ye-Mesh
summary: Khetha amaphoyinti, imiphetho nezinhlangothi zemesh, uzihambise, bese uzikhipha, uzifaka phakathi, uzigoqa, uzisike, uzihlanganise, uzigcwalise nokuzibhuluza, nganoma yisitayela sokhiye.
keywords: mesh, imodi yokuhlela, indawo yokusebenza ye-mesh, iphoyinti, amaphoyinti, umphetho, imiphetho, uhlangothi, izinhlangothi, khipha, faka phakathi, goqa, sika ilophu, ummese, sika ngomugqa, phendulisa, hlanganisa, nyibilikisa, gcwalisa, gcwalisa igridi, bhuluza, hlukanisa, shelelisa, ukuhlela okuhambisanayo, ukwehla, indawo yokusebenza
from: 92a372dd
---

**Indawo yokusebenza ye-Mesh** ihlela [imesh](topic:meshes) iphoyinti ngephoyinti: amaphoyinti, imiphetho kanye nezinhlangothi zayo. Ijiyometri ye-push/pull ihlala endaweni yokusebenza ye-**Imodeli**.

## Vula

- Khetha {{ui:Mesh}} ohlwini lwe-{{ui:Workspace}} ngakwesobunxele kwethuluzi. Imesh ekhethiwe iyavulwa ukuze ihlelwe; iqembu noma ingxenye ekhethiwe iguqulwa ibe yimesh kuqala (isinyathelo esisodwa sokuhlehlisa).
- Noma chofoza kabili imesh, noma, ngezikhiye zomodeler, khetha yona bese ucindezela {{key:Tab}}.
- Uma kungakhethiwe lutho, iphaneli linikeza amamesh okungezwa: plane, grid, cube, circle, cylinder, cone, sphere, ico sphere kanye ne-torus. Ilanga elisha lingena lapho ukubuka kubheka khona bese livuleka ukuze lihleleke.

{{ui:Back to Model}} (noma uhlu, {{key:Tab}} ngezikhiye zomodeler, {{key:Esc}} uma kungakhethiwe lutho ngezikhiye ze-push/pull) ibuyela ku-Model nemesh ikhethiwe. Uma i-Mesh workspace ivuliwe, enye imodeli iyafiphala futhi amathuluzi okudweba ye-Model ayabekwa eceleni.

## Khetha

| Yenza | Ukuze |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Khetha amaphoyinti, imiphetho noma izinhlangothi |
| Chofoza | Khetha okukodwa; {{key:Shift}}+chofoza yengeza noma isuse |
| Donsa ibhokisi | Khetha okungaphakathi nokubonakalayo; {{key:Shift}} yengeza, {{key:Ctrl}} isusa |
| {{key:Alt}}+chofoza umphetho, noma uchofoze kabili kuwo | Ilophu yawo yomphetho (ilophu yesinhlangothi kumodi yezinhlangothi; umngcele wonke ku-open edge) |
| {{key:Ctrl}}+{{key:Alt}}+chofoza umphetho | Isongo lawo lomphetho |
| Chofoza kathathu | Konke okuxhunyiwe kuwo |

Iqembu le-{{ui:Select}} linayo futhi {{ui:All}}, {{ui:Linked}}, {{ui:Loop}}, {{ui:Ring}}, {{ui:More}} no-{{ui:Less}}.

## Hambisa, jikisa, shintsha usayizi

{{ui:Move}}, {{ui:Rotate}} kanye {{ui:Scale}} kuqala ngophawu: hambisa, bese uchofoza noma ucindezele {{key:Enter}} ukubeka okukhethiwe phansi, noma {{key:Esc}} ukukhansela. {{key:X}}, {{key:Y}} noma {{key:Z}} (noma izinkinobho zomcibisholo) ziyakhiya i-axis. Thayipha ibanga, i-angle noma isilinganiso ukuze uthole ukunemba: [izibalo](topic:value-box#calculations) nazo ziyasebenza.

**Ukuhlela okuhambisanayo** ({{ui:Proportional}}, noma iphaneli): amaphoyinti aseduze nokukhethwa alandela ukuhamba, ancipha ngokuya kude, kuze kufike ububanzi obusethiwe, ngokwehla okukhethiwe. Vula {{ui:Only along the mesh}} ukuze kulinganiswe ngemiphetho hhayi ngqo.

{{ui:Slide}} ihambisa ilophu yomphetho ekhethiwe ngemiphetho eseceleni kwayo.

## Shintsha isimo

| Ithuluzi | Lenza |
|---|---|
| {{ui:Extrude}} | Ikhipha izinhlangothi ezikhethiwe ngokuqondile kwazo, ngezinhlangothi ezintsha zeceleni (noma yenza izinhlangothi kumingcele evulekile). Thayipha ibanga |
| {{ui:Inset}} | Ibhendi ngaphakathi komzila wezinhlangothi ezikhethiwe; cindezela {{key:I}} futhi kuyo yonke inhlangothi ngayinye |
| {{ui:Bevel}} | Isika imiphetho ekhethiwe (noma, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, amaphoyinti) ngobubanzi; insimbi noma izinkinobho zesilinganiso zengeza izingxenye zomphetho ogobile |
| {{ui:Loop cut}} | Chopha emphethweni: izilophu ezintsha ngokuhambisana nesongo lezinhlangothi ezine; insimbi isetha ukuthi zingaki; chofoza ukuze usike |
| {{ui:Knife}} | Chofoza amaphoyinti emiphetheni noma emakhoneni; {{key:Enter}} isika ngqo phakathi kwezinhlangothi ezikhona, njengoba ziboniswa |
| {{ui:Bisect}} | Dweba umugqa esikrinini: izinhlangothi ezikhethiwe (noma zonke) ziyasikwa ngawo |
| {{ui:Spin}} | Ijikisa izinhlangothi ezikhethiwe noma imiphetho evulekile ngokuzungeza i-axis eluhlaza ngezinyathelo (insimbi isetha) ; ukujikeleza okugcwele kuyavala |
| {{ui:Subdivide}} | Isika imiphetho ekhethiwe ibe mibili; izinhlangothi ezigcwele ziba igridi |
| {{ui:Merge}} | Amaphoyinti akhethiwe aba munye, ephakathi kwawo |
| {{ui:Dissolve}} | Isusa ukukhethwa kodwa igcina umphezulu: izinhlangothi ziyahlanganyela |
| {{ui:Fill}} | Uhlangothi olusuka kumngcele ovulekile okhethiwe (noma phakathi kwemiphetho emibili evulekile) |
| {{ui:Grid fill}} | Igcwalisa umngcele ovulekile onamaphethelo alinganayo ngegridi yamaquad |
| {{ui:Bridge}} | Ihlanganisa izilophu ezimbili ezivulekile ezikhethiwe ngezinhlangothi |
| {{ui:Crease}} | Ukuthi imiphetho ekhethiwe ihlala ibukhali kangakanani lapho imesh igudiswa indawo ehlukaniswe: hambisa kude nesikhungo, sebenzisa insimbi (izinyathelo ze-0.1) noma thayipha 0 kuya ku-1. Iphaneli likhombisa i-crease yemiphetho ekhethiwe futhi lamukela nenani elithayipiwe. Imiphetho edidekile idwetshwa ngomagenta |
| {{ui:Flip}}, {{ui:Smooth}}, {{ui:Delete}} | Jikisa izinhlangothi; gudisa amaphoyinti ngokuya kubamakhelwane bawo; susa ngemodi yokukhetha |

Ngayinye iyisinyathelo esisodwa sokuhlehlisa. Izixhumanisi zokuthungwa, imibala nezisindo zilandela kwizinhlangothi nakumaphoyinti amasha.

## Yakha kabusha imesh

{{ui:Remesh}} yenza imesh yonke futhi ibe ngonxantathu alinganayo wosayizi oyedwa, icelwa lapho ucindezela (okuncane kuba kuhle kakhulu futhi kuhamba kancane). Ivala izimbobo, ihlanganise izingxenye ezigqumayo, futhi ilinganise imesh esolwe ukudweba. Imiphetho ebukhali iba mbalwa ibe mihle kancane. I-UV, izithombe nokugoba kuqala kabusha. Inyathelo elilodwa lokuhlehlisa.

## Hlela kabusha ukwakheka

Ukuze wakhe imesh entsha, ehlanzekile ngaphezulu kwemesh eningiliziwe (isculpt, noma iscan), khetha leyo eningiliziwe ngaphansi kwe-{{ui:Retopology}} › **Build on** kwiphaneli, bese:

- **Hlanganisa amaphoyinti ahanjisiwe nalo:** amaphoyinti ohamba nawo, nemiphetho oyidonsayo, afike phezu komphumela wawo.
- **Beka amaphoyinti akhethiwe phezu kwawo** ahambisa amaphoyinti akhethiwe phezu kwawo manje (inyathelo elilodwa lokuhlehlisa).
- **Bonisa imiphetho yale mesh phambili** idweba imesh oyakhayo phezu komphezulu, ukuze uyibone.

## Lungisa okokugcina okwenziwe

Ngemuva kwe-{{ui:Inset}}, {{ui:Bevel}}, {{ui:Loop cut}}, {{ui:Subdivide}}, {{ui:Smooth}}, {{ui:Grid fill}} noma {{ui:Spin}}, iphaneli libonisa izilungiselelo zakhe (ububanzi, izingxenye, iphrofayili, izinqamu …). Shintsha okukodwa futhi isenzo siyaphinda kusuka lapho saqala khona, sisale siyinyathelo elilodwa lokuhlehlisa.

## Okhiye

| | Okhiye be-push/pull | Okhiye bomodeler |
|---|---|---|
| Hambisa, jikisa, shintsha usayizi | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} kabili kuyashelela) |
| Khipha, faka phakathi | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Susa | {{key:E}} noma {{key:Delete}} | {{key:X}} noma {{key:Delete}} |
| Crease | {{key:Shift+C}} | {{key:Shift+E}} |
| Khetha konke, akukho, phendula | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Kokubili | {{key:Ctrl+B}} goqa, {{key:Ctrl+R}} sika ilophu, {{key:K}} ummese | okufanayo, kanye {{key:F}} gcwalisa, {{key:M}} hlanganisa, {{key:Ctrl+X}} nyibilikisa, {{key:L}} / {{key:Ctrl+L}} okuxhunyiwe, {{key:Alt+N}} jikisa, {{key:O}} okuhambisanayo, {{key:Shift+V}} shelelisa iphoyinti |

Bona futhi [Imesh](topic:meshes), [Izisiguquli ku-mesh](topic:modifiers) kanye [nasentshe](topic:not-built-yet).
