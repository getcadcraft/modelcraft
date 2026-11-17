---
title: Yenza i-animation yanoma iyiphi impahla, uyibumbe njengamajika, uxube amaklipu
summary: Indawo yokusebenza ye-Animate igcina izikhiye endaweni, ukugoqa nobukhulu kwento, ukukhanya, ukusabalala nombala kwamalambu, ilensi kanye namakhiye wesimo e-mesh; ama-armature agoqa i-mesh ngamathambo nezisindo ezipendiwe; i-IK nemibandela yenza amathambo nezinto zifinyelele, zibheke, zikopishe, zihlale phakathi kwemikhawulo, zihlale ngemva kwezinye noma zilandele ezinye; amazimba aqinile ayawa, ayagcwala futhi ayashayisana, bese ayabhakwa abe izikhiye; abashayeli bamisa inani ngezinye izinto; ukubuka kwamajika kwethala lesikhathi kubumba ushintsho ngalunye ngezibambi ze-Bézier nokuphindaphinda, ukubuka kwamaklipu kulondoloza ama-animation njengezenzo oziphinda uzibeke futhi uzixube.
keywords: ifiziksi, izimbiza eziqinile, umzimba oqinile, ukulingisa, ukuwa, ukudonsa, ukushayisana, ukugcwala, ukugxuma, ukubambezela, ukubhaka, i-ik, ukufinyelela, umbandela, imibandela, bheka, ukubheka, kopisha ukuguquka, kopisha indawo, kopisha ukugoqa, imikhawulo, ingane, umzali, landela indlela, indlela, ipole, i-fabrik, ketango, i-armature, ama-armature, irigi, ukwenza irigi, amathambo, ithambo, isikhumba, izisindo, ukupenda izisindo, amaqembu amaphoyinti, izisindo ezizenzakalelayo, i-bone heat, ipose, imodi yepose, i-dual quaternion, i-linear blend, amakhiye wesimo, ukhiye wesimo, morph, ama-morph, izinjongo ze-morph, ama-blendshape, ubuso, isimo sobuso, umshayeli, abashayeli, izincazelo, indawo yokusebenza ye-animate, animate, animation, ukhiye, izikhiye, impahla, izinto, ukuguqulwa, indawo, ukugoqa, usayizi, ilambu, ukukhanya, ukusabalala, umbala, ilensi, i-field of view, i-fov, umhleli wegrafu, amajika, ijika, bezier, izibambi, i-tangent, ukuxhumanisa, umjikelezo, imijikelezo, ukuphindaphinda, i-loop, ping pong, ukushintshwa, ishidi lezikhathi, khetha izikhiye, ukukhetha ibhokisi, kopisha izikhiye, namathisela izikhiye, elula izikhiye, scale keys, amaklipu, izenzo, i-nla, xuba, ukuxuba, ithonya, gcina
from: 16d8e12f
---

Ithala lesikhathi [linyakazisa](topic:animation) ikhamera namaqembu namakhompoment wonke. Indawo yokusebenza ye-**Animate** igcina izinto eziningi kakhulu kunalezo, nethala lesikhathi linemibono emibili eyengeziwe yokubumba nokusebenzisa kabusha okugciniwe.

## Ukuyivula

Khetha {{ui:Animate}} ohlwini lwendawo yokusebenza etulini lamathuluzi. Ithala lesikhathi livula ngaphansi kwe-view, amathuluzi aphezulu abonisa amaqembu e-Animate ({{ui:Keys}}, {{ui:Play}}, {{ui:Timeline}}) nephaneli ngakwesokudla ibhala okungakhiywa ku-playhead.

## Faka ukhiye empahleni

Iphaneli ibhala, ku-playhead:

- **Into ekhethiwe**: {{ui:Place}}, {{ui:Turn (°)}} kanye {{ui:Size}} yayo, izinombolo ezintathu ngayinye. Thayipha inombolo bese ucindezela {{key:Enter}}: ifakwa ukhiye ku-playhead futhi into iyafika khona. Idayimane eseceleni komugqa likhiya inani njengoba likunjalo manje; idayimane eligcwele liveza ukuthi sekukhona ukhiye ku-playhead.
- **Amalambu**: i-{{ui:Brightness (lm)}}, i-{{ui:Spread (°)}} (amalambu okukhanyisa) kanye {{ui:Colour}} yawo ngamunye.
- **Ikhamera**: i-{{ui:Lens angle (°)}}, ukuze usondeze ngesikhathi ikhamera inyakazayo.

{{ui:Key transform}} (noma {{key:I}}) ikhiya indawo, ukugoqa nosayizi wayo wonke iqembu noma ikhompoment ekhethiwe ngesikhathi sinye; {{ui:Key camera}} (noma {{key:K}}) ikhiya ikhamera. Uma i-{{ui:Auto key}} ivulekile, iqembu elikhiywe indawo, ukugoqa nosayizi walo ngale ndlela lithola ukhiye omusha uma uliyisa.

Ukugoqa kuyizinkomba ezintathu, ngokuzungeza i-X, bese Y, bese Z. Ukugoqa okukhiywe ngaphezu kuka-180° kuqhubeka ngendlela efanayo (190° ihlala ingu-190°, hhayi −170°), ngakho ivili lingaphenduka izikhathi eziningi.

:::tip
Iqembu elikhiywe nge-{{ui:Key selected}} ethalini lesikhathi linezikhiye zendawo yonke. Inkinobho yejika esemgqeni walo iyaziguqula zibe ngamajika endawo, ukugoqa nosayizi (indawo efanayo kukho konke ukhiye) ukuze uwabumbe ku-{{ui:Curves}}.
:::

## Amakhiye wesimo (ama-morph)

**Ukhiye wesimo** wesinye isimo se-[mesh](topic:meshes) esifanayo: ubuso obumomotheka, ukuvuvuka komnyango, igqabi eligobile. Isilayida sawo sixuba kusuka ku-mesh njengoba ikanjalo (0) kuya kulesi simo (1); izikhiye eziningi ziyangezelelana.

1. Khetha i-mesh endaweni yokusebenza ye-Animate: iphaneli ibonisa i-{{ui:Shape keys}} yayo.
2. Chofoza {{ui:Add shape key}}. I-ModelCraft iya ku-[indawo yokusebenza ye-Mesh](topic:mesh-edit) nokhiye omusha uhleliwe: hambisa amaphoyinti, phuma, bumba. Guqula i-mesh ibe isimo ofuna sona.
3. Buyela ku-{{ui:Animate}} uchofoze {{ui:Done}}. I-mesh ibuyela njengoba yayinjalo, bese ukhiye ugcina ushintsho lwakho.

Bese udonsa isilayida sokhiye (noma uthayiphe inani) ukuze uxube. Idayimane lifaka inani ku-playhead, ngakho ukhiye ungakhula futhi unyamalale ngokuhamba kwesikhathi; uma sekunomzila, inani elisha lifakwa ku-playhead. Ipensela ihlela kabusha isimo sukhiye (i-mesh iyasikhombisa ngokugcwele kuze kufike {{ui:Done}}; {{ui:Cancel}} ishiya ukhiye njengoba wayenjalo), iso livala ukhiye, igoqo liyisusa.

Iphoyinti oliengeza ngesikhathi uhlela ukhiye ngelakho i-mesh uqobo: lihlala lapho olibeka khona, kuyo yonke imo.

:::note
Amakhiye wesimo ahambisa i-mesh ngaphambi kwezinguquli zayo: i-Subdivision modifier ibushelelezisa isimo esixubile. Izithombe namavidiyo aqoshwayo akhombisa amakhiye ngohlaka ngalunye.
:::

## Ama-armature: amathambo agoqa i-mesh

I-**armature** iyisethi yamathambo angaphakathi kwe-[mesh](topic:meshes). Yenza amathambo abe ngamapose, i-mesh iyawalandela, iphoyinti ngalinye njengoba **izisindo** zalo zisho.

1. Khetha i-mesh endaweni yokusebenza ye-Animate bese uchofoza {{ui:Add an armature}} ephaneli (noma {{ui:Add bone}} eqenjini le-{{ui:Rig}}): ithambo lokuqala lihamba phakathi kwe-mesh kusukela esisekelweni sayo.
2. Ngethambo elikhethiwe, {{ui:Add a child bone}} yengeza elilandelayo kusuka esiphethweni salo. Setha i-{{ui:Head}}, i-{{ui:Tip}}, i-{{ui:Roll (°)}} nokuthi ithambo {{ui:Hangs from}} kuphi ephaneli; ithambo elixhunywe kwelinye linyakaza nalo. Susa ukukhetha kwe-{{ui:Moves the mesh}} ethanjeni elisiqondisa ezinye kuphela.
3. Chofoza {{ui:Automatic weights}}: ithambo ngalinye libamba amaphoyinti aseduze kalo, futhi ukubamba kusabalala kahle kuyo yonke i-mesh, ngakho amaphoyinti aphakathi kwamathambo amabili ayabelana ngakho. {{ui:Nearest bones only}} iyisihlukanisi esisheshayo nesiqinile kakhulu.

**Yenza ipose** wamathambo nge-{{ui:Pose}} ({{key:P}}): chofoza ithambo ukuze ulikhethe, donsa ukuze uljikise ngokuzungeza i-axis yombono, {{key:Shift}}-donsa ukuze uliyisele. Noma uthayiphe i-{{ui:Place}}, i-{{ui:Turn (°)}} ne-{{ui:Size}} yalo ngaphansi kwe-{{ui:Pose}}; izinguquko zisemaeksini wethambo ngokwalo, kusukela lapho liphumula khona. Idayimane ne-{{ui:Key the whole pose}} zikhiya ipose ku-playhead; uma ithambo sele linezikhiye, ukulipozisa kulifaka khona. {{ui:Reset this bone}} ne-{{ui:Reset the pose}} zibuyisela amathambo ekuphumuleni.

**Penda izisindo** ({{key:W}}) ethanjeni elikhethiwe: i-mesh iboniswa ekuphumuleni, uhlangothi ngalunye lubalwe ngokuthi leli thambo liyilibambe kangakanani: obomvu konke, obuluhlaza okwesibhakabhaka akukho. Penda ukwengeza ukubamba ({{key:Mod}} iyakususa, {{key:Shift}} iyabushelelezisa); i-{{ui:Size (px)}} ne-{{ui:Strength}} zisetha ibhulashi. Ngo-{{ui:Keep each point's weights adding up to 1}}, ukunika ithambo elilodwa okwengeziwe kuthatha okufanayo kwezinye. Ukushaya ngakunye kuyisinyathelo esisodwa sokuhlehlisa kwemodeli.

{{ui:Skin}} ikhetha ukuthi iphoyinti phakathi kwamathambo linyakazela kanjani: {{ui:Linear (fast)}} ixuba ukunyakaza kwamathambo, futhi incinza kancane ilunga elijikile; {{ui:Dual quaternion (keeps volume at joints)}} ijikisa iphoyinti ngokuzungeza ilunga, ngakho i-elbow noma idolo ligcina ukuthi likhuluma (ukuthi i-{{ui:Size}} yethambo ayelula isikhumba).

:::note
Amakhiye wesimo aqala, bese i-armature, bese izinguquli. Ukubuka, izithombe namavidiyo konke kukhombisa i-mesh enemo; izisindo zemesh zigcinwa nayo, namathambo nesimo sawo ngama-animation.
:::

## I-IK nemibandela

**Umbandela** unyakazisa ithambo noma into ngemva kwezikhiye zayo, ngomthetho. Khetha into (noma, kwi-armature, ithambo) bese wengeza elilodwa ngaphansi kwe-{{ui:Constraints of …}}; amaningi asebenza ngalolu hlelo olubhalwe phansi (imicibisholo iyalushintsha), futhi ngalinye linayo i-{{ui:How much}} (0 kuya ku-1, ifakwa ngedayimane layo njengoba kwenza noma yiliphi iphrophathi) nokhiye wokuvula/ukuvala.

| Umbandela | Ngokwe | Okwenzayo |
|---|---|---|
| {{ui:Reach (IK)}} | Amathambo | Ithambo nalawo ahlala kulo ({{ui:Bones in the chain}}) agoba ukuze isiphetho salo sifinyelele ihloso. Ngamathambo amabili ne-{{ui:Pole (the bend points to it)}}, i-elbow noma idolo libheka kuyo i-pole; amaketango amade agoba kahle. Uma kungafinyeleleki, ketango libheka ihloso ngqo. |
| {{ui:Look at}} | Kokubili | Ijikisa ukuze i-{{ui:Axis that points}} ibheke ihloso, igcine i-{{ui:Axis kept up}} iseduze kangangoba kungenzeka kuphezulu. |
| {{ui:Copy transforms}} | Kokubili | Ithatha indawo, ukugoqa noma usayizi wehloso: okuboniswe ngamabhokisi. |
| {{ui:Limits}} | Kokubili | Igcina indawo yayo, ukugoqa (ngamadigri) noma usayizi phakathi kwe-{{ui:min}} ne-{{ui:max}} ngayo yonke i-axis; shiya ipheya ingenalutho ukuze leyo axis ikhululeke. |
| {{ui:Child of}} | Kokubili | Inyakazela nehloso njengoba ibhoxekile kuyo, kusukela lapho zombili zazikhona lapho ukhetha ihloso. |
| {{ui:Follow path}} | Izinto | Ihlala ku-[into yejika](topic:curves) ku-{{ui:Along the curve}} (0 isiqalo sayo, 1 isiphetho sayo; yikhiye ukuze ihambe), futhi nge-{{ui:Turn along the curve}} ibheka ngasemgqeni wayo. |

Ihloso ingento enye evulekile eqenjini, ithambo le-armature efanayo, noma i-{{ui:A point}} oyithayphayo (iphoyinti lento lisemigqeni yemodeli, elethambo lisemigqeni ye-mesh yalo). Ye-IK yomlenze, beka ihloso lapho unyawo kufanele khona bese ukhiya ihloso, noma khiya i-{{ui:How much}} ukuze unikeze umlenze phakathi kwezikhiye nale IK.

:::tip
Into ebheka eyodwa elandela indlela iyayibona endleleni: i-ModelCraft ibala amahloso kuqala, nganoma yiluphi uhlelo lwezinto.
:::

## Ifiziksi: ukuwa, ukugcwala nokushayisana

Vumela izinto ziwele futhi zishayane, bese ugcina umphumela njengezikhiye.

1. Khetha iqembu, ikhompoment noma i-mesh bese usetha i-{{ui:Rigid body}} ngaphansi kwe-{{ui:Physics}}: {{ui:Falls and collides}} (iyanyakaza) noma {{ui:Stays put, gets in the way}} (itafula, udonga, indlela ehlamile). Nika into ewayo i-{{ui:Shape}} yayo: {{ui:Box (its bounds)}} noma {{ui:Ball (round its bounds)}}, ubunzima bayo {{ui:Mass (kg)}}, {{ui:Friction}} kanye {{ui:Bounce}} (0 ayigxumi, 1 igxuma ibuyele phezulu njengoba kwakunjalo).
2. Ngaphansi kwe-{{ui:The whole model}}, setha i-{{ui:From (s)}} ne-{{ui:To (s)}}, i-{{ui:Gravity (m/s², down)}} nokuthi kukhona yini {{ui:A ground to land on}} (nokuphakama kwayo).
3. Chofoza {{ui:Bake physics}} (ephaneli noma eqenjini le-{{ui:Physics}}). Yonke into ewayo ithola ukhiye wendawo, wokugoqa nosayizi ohlakeni ngalunye phakathi kwezikhathi ezimbili; yidlale njengoba udlala noma iyiphi i-animation.

Ukubhaka kabusha kushintsha lezo zikhiye; i-{{ui:Remove baked keys}} iyazisusa. Izinto ziqala zikhuphumule, lapho izikhiye, amajika nemibandela zazibeka khona ku-{{ui:From (s)}} (ukunyakaza okukhiywe ngaphambi kwalokho akuqhubeki ekuweni). Ukukhetha okuningi kwe-{{ui:Steps a frame}} kugcina izitaki ezinde zizinzile; ibha yesimo itshela uma okuthile sekusahamba ekugcineni.

:::note
Izimo ziyizibhokisi namabhola ezungeze imingcele yento ngayinye; ibhokisi lithinta ngamakona, ngamaphakathi emiphetho nangamaphakathi ezinhlangothi, ngakho amabhokisi ayagcwala futhi ayagxuma njengoba ulindele. Indwangu, uketshezi, izixhumanisi phakathi kwezinto nezimo ezinembile akukakhiwa.
:::

## Abashayeli

**Umshayeli** usetha ukhiye wesimo ngezinye izinto esikhundleni sesandla: vula umshayeli wokhiye (inkinobho yekhalkhulethara), bhala i-**expression**, bese unikeza igama ngalinye kuyo okufunda kulo ({{ui:Reads}}): isikhathi ngamasekhondi, ifreyimu, indawo, ukugoqa noma usayizi wento ngeX, Y noma Z, ukukhanya kwelambu, noma enye ikhiye yesimo. Isibonelo, ngo-`v` ofunda ukugoqa komnyango ozungeza Z, `clamp(v / 90, 0, 1)` ivula isimo njengoba umnyango uvuleka.

Ama-expression asebenzisa izinombolo, amagama, `+ - * / % ^` nemabhulaketi, nemisebenzi `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` kanye `pi` ne `e`. Iphutha liyakhonjiswa futhi alishintshi lutho. Isilayida sokhiye oshayelwayo sibonisa inani lomshayeli; umshayeli unqoba umugqa wokhiye uze umsuse.

## Khetha futhi ushintse izikhiye (ukubuka kwezikhiye)

{{ui:Keys}} ibonisa umugqa ngamunye wendlela: ikhamera, iqembu ngalinye elinyakazayo, nendawo ngayinye (\"Lamp 2 · Brightness (lm)\"; izikhiye zempahla zizungezile).

- Chofoza ukhiye ukuze uwukhethe; {{key:Shift}}-chofoza noma {{key:Mod}}-chofoza ukwengeza noma ukususa izikhiye kokukhethiwe. {{key:Shift}}-donsa phezu kwemigqa kudweba ibhokisi elengeza zonke izikhiye kuyo.
- Donsa ukhiye okhethiwe ukuze uhambise zonke; {{key:Left}} / {{key:Right}} zihambisa ifreyimu eyodwa ({{key:Shift}}: eyishumi).
- {{key:Mod+C}} ikopisha izikhiye ezikhethiwe, {{key:Mod+V}} iwunamathisela ku-playhead ezindleleni ezifanayo (ithebhu enye ye-ModelCraft nayo ingawanamathisela).
- I-{{ui:Stretch}} isabalalisa izikhiye ezikhethiwe iphume ku-playhead ngenombolo eseduze kwayo (2 = kabili kude; 0.5 iyazihlanganisa).
- Uhlu lwe-ease lusetha ukuthi zonke izikhiye ezikhethiwe zinyakaza kanjani.

## Bumba amajika (ukubuka kwamajika)

{{ui:Curves}} iyigrafu yenombolo ngayinye ngokuhamba kwesikhathi: isikhathi siya ecaleni, inani likhuphuka. Hlola amajika okuzowabonisa ohlwini olungakwesokunxele (X, Y noma Z zibomvu, eziluhlaza, eziluhlaza okwesibhakabhaka).

- Chofoza ukhiye (isikwele) ukuze uwukhethe, {{key:Shift}}-chofoza ukuze ukhethe okwengeziwe, noma donsa ibhokisi. Donsa ukhiye okhethiwe ukuze ushintse isikhathi nenani lawo; uma kukhethiwe okuningi, ukudonsa kuwahambisa ngesikhathi.
- Ukhiye okhethiwe ubonisa **izibambi** zawo ezimbili. Donsa enye ukuze ubumbe ijika ngalolo hlangothi. I-{{ui:Handles}} ichaza ukuthi ziziphatha kanjani: {{ui:Automatic}} (ijika elibushelelezile elidlula ezikhiyeni eziseduze), {{ui:Pointing at the next key}}, {{ui:Aligned}} (zombili zihlala emgqeni oqondile, ngakho ijika alinakhona ikhona) noma {{ui:Free}}.
- I-{{ui:From the chosen keys}} ichaza ukuthi ukhiye ngamunye okhethiwe uhamba kanjani uya kolandelayo: {{ui:Curve (handles)}}, {{ui:Smooth}}, {{ui:Steady}}, {{ui:Slow in and out}} noma {{ui:Hold}}.
- {{ui:Before}} ne-{{ui:After}} zichaza ukuthi ijika lenzani ngaphandle kwezikhiye zalo: {{ui:Hold}} (ihlala ngenani lokuqala noma lokugcina), {{ui:Repeat}}, {{ui:Back and forth}}, noma {{ui:Repeat and carry on}} (ukuphindaphinda ngakunye kuqala lapho okwedlule kuphele khona: isondo liyaqhubeka liqhuba, umhambi uyaqhubeka ehamba).
- Iwili liyasondeza ({{key:Mod}}: amanani kuphela; {{key:Shift}}: isikhathi kuphela); donsa ngenkinobho ephakathi noma nge-{{key:Alt}} ukushelelisa; i-{{ui:Show all}} noma {{key:Home}} ilungisa onke amajika abonisiwe. Chofoza endaweni engenalutho ukuhambisa i-playhead khona. {{key:Delete}} isusa izikhiye ezikhethiwe.

Izibambi zigcinwa zingadluli kwezinye ngesikhathi, ngakho ijika alihambi emuva ngesikhathi.

## Sebenzisa kabusha ama-animation (ukubuka kwamaklipu)

**Iklipu** lidlala i-animation egciniwe (**isenzo**) ethalini lesikhathi. Amaklipu axutshwa ngolandelano, imigqa esezansi ingaphezu kwemigqa esezulwini; amathrekhi ethala lesikhathi uqobo aphezu kwawo wonke amaklipu.

1. Khiya amaqembu namalambu njengoba ujwayelekile, bese uchofoza {{ui:Make a clip}} ku-{{ui:Clips}} unikeze isenzo igama. Amathrekhi aba yisenzo, iklipu liyidlale lapho ayekhona (ikhamera ihlala ethalini lesikhathi).
2. Ukuze uyisebenzise futhi, khetha isenzo bese uchofoza {{ui:Add clip}}: iklipu elisha liqala ku-playhead.
3. Donsa iklipu ngomugqa walo ukuze uliyisele; chofoza ukuze usethe i-{{ui:Start (s)}}, i-{{ui:Speed}} (2 = kabili ngokushesha), i-{{ui:Repeats}}, i-{{ui:How much}} (0 kuya ku-1), i-{{ui:Mix}} ({{ui:Replace}}, noma {{ui:Add on top}} kwamaklipu angaphambili), i-{{ui:Outside the clip}} (akukho, bamba isiphetho sawo, noma bamba zombili iziphetho) kanye ne-{{ui:Mute}}. Imicibisholo ishintsha ulandelano; igoqo liyisusa (nesenzo esingasasetshenziswa yiklipu siyasuswa nalo).

Iklipu elingaphansi kokugcwele kwe-{{ui:How much}} lixubana nalokho okungaphansi kwalo: iklipu elingaphambili, noma ilambu noma indawo njengoba ikanjalo ngaphandle kwe-animation.

## Okudlalwa kuphi

| Yini | Ebukweni | Evidiyweni eqoshiwe |
|---|---|---|
| Izikhiye zekhamera, i-lens angle nezikhiye zekhamera | Yebo | Yebo |
| Indawo, ukugoqa nosayizi (izikhiye, amajika, amaklipu) | Yebo | Yebo |
| Ukukhanya, ukusabalala nombala kwamalambu | Yebo | Akukakwenzeki: ividiyo isebenzisa amalambu njengoba enjalo lapho iqala (bheka [okungakakwakhiwa](topic:not-built-yet)) |
| I-lens angle ngaphandle kwezikhiye zekhamera | Yebo | Akukakwenzeki: khiya nekhamera |
| Amakhiye wesimo nabashayeli | Yebo | Yebo |
| Ama-armature (ama-mesh anamapose) | Yebo | Yebo |
| I-IK nemibandela | Yebo | Yebo |
| Ifiziksi ebhakiwe (izikhiye) | Yebo | Yebo |

Konke kugcinwa ku-fayela le-`.modelcraft` kanye nakho konke okunye kwe-animation, futhi i-{{ui:Undo}} ne-{{ui:Redo}} yethala lesikhathi ibuyisela noma yiziphi zalezo.
