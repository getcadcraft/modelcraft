---
title: Silinganisa futhi ushintse usayizi walokho okudwetshiwe
summary: Beka izilinganiso phakathi kwamakhona, phezu kwama-arc namasekeli, noma phakathi kwemiphetho emibili; thayipha ubude obusha ukuze ushintse usayizi wemodeli. Phinda uthayiphe ubude bomphetho noma ububanzi, ukujula nokuphakama kweqembu ku-Entity info.
keywords: isilinganiso, izilinganiso, shintsha usayizi, hlela usayizi, ubude, ububanzi, ukujula, ukuphakama, elula, isilinganiso sokushayela, chaza, linganisa, ngemva kwalokho, umsakazo, ububanzi bendilinga, engeli, i-angular, i-arc, indilinga, R, Ø
from: a1f815ec
---

Usayizi kuModelCraft awuhlali ungaguquki uma sekudwetshiwe okuthile. Isilinganiso sibonisa ubude emodelini, futhi uthayipha ubude obusha kuso kushintsha imodeli ifane nalo. Ungaphinda uthayiphe ubude bomphetho, noma ububanzi, ukujula nokuphakama kweqembu, ku-{{ui:Entity info}}.

## Beka isilinganiso

1. Cindezela {{key:D}}, noma chofoza {{ui:Dimension}} ethuluzini.
2. Chofoza ikhona okuzolinganiswa kulo. Iyabamba amakhona, amaphakathi nemiphetho, njengoba ukudweba kwenza.
3. Chofoza ikhona lesibili.

   Noma chofoza kanye ku-**umphetho** (uphawu luthi "On edge") ukuze ulinganise lowo mphetho wonke ngokuchofoza kanye.
4. Hambisa isikhombi lapho umugqa wesilinganiso okufanele uye khona, bese uchofoza. Ungathayipha futhi ukuphakama, njengo `0.5m`, bese ucindezela {{key:Enter}}.

   Umugqa wesilinganiso uhlala ulingene emphethweni olingene, ngaphandle uma ubheka wona ngohlangothi. Emphethweni omile ohlala emaphethelweni emi, uhlala endizeni emile ebheka wena kangcono.

Ibha yesimo ithi "Dimension 4 m." Izilinganiso zibonisa ubude ngeyunithi yemodeli futhi zivuselelwa uma ushintsha iyunithi kukhethi.

## Umsakazo, ububanzi nengeli

Ithuluzi elifanayo {{ui:Dimension}} lilinganisa izinto eziyindilinga nezikhona:

- **I-arc:** chofoza i-arc. Uphawu luthi {{ui:Radius}}. Hambisa isikhombi lapho umbhalo okufanele uye khona bese uchofoza: isilinganiso sifunda **R 1.5 m**.
- **Indilinga:** chofoza indilinga. Uthola **ububanzi bendilinga** (**Ø 3 m**) nomugqa odlula endilingeni ngesikhungo sayo. Ipholigoni zisebenza ngendlela efanayo, namakhona azo endilingeni.
- **Engeli phakathi kwemiphetho emibili:** chofoza umphetho owodwa, bese uchofoza omunye umphetho ohlangana nawo ekhoneni (lapho usewuphezu kwawo, uphawu luthi {{ui:Angle between the edges}}). Bese uhamba ngaphakathi kwekhona ofuna, bese uchofoza. Ngaphakathi kwekhona uthola engeli phakathi kwemiphetho; uma uhamba uye ohlangothini oluthile uthola engeli eseduze kwayo (isibonelo 150° esikhundleni se-30°). Ukuthi ukhombe kude kangakanani nekhona kusho lapho i-arc iyakhona; noma thayipha lobo bude.

Ukuze uguqule umsakazo ube ububanzi noma ubuyele emuva, khetha isilinganiso bese uchofoza ku-{{ui:Show as}} ku-{{ui:Entity info}}.

**Ukushintsha usayizi ngazo:** thayipha umsakazo omusha noma ububanzi ngemva kokubeka, noma khetha kamuva bese uthayipha. I-arc noma indilinga igcina isikhungo sayo ishintshe usayizi; ubuso obuvalwa yiyo (idiski, isiphetho sesilotho) buyashintsha nayo. Izinto ezimbili zilinganisa kuphela:

- **Isilinganiso sengeli** asikaze siguqule imodeli. Ukuze ushintse engeli, jikisa imiphetho nge-{{ui:Rotate}}.
- **Indilinga esekupheleni kwesilinda** (indilinga oyihudulile nge-{{ui:Push/pull}}) ayikwazi ukushintshwa usayizi kusuka ezilinganisweni zayo, ngoba izinhlangothi zayo nazo kumele zishintshe. Shintsha usayizi wesilinda esikhundleni salokho, ngokuzungeza i-axis yaso.

## Shintsha usayizi wemodeli ngesilinganiso

Ngemva kokubeka isilinganiso, thayipha ubude obusha bese ucindezela {{key:Enter}}: `6m`, `12'`, `3500` kumodeli yamamilimitha. Imodeli iyashintsha ibe lobo bukhulu.

Kamuva, nganoma yisiphi isikhathi:

1. Ngo-{{ui:Select}}, chofoza umbhalo wesilinganiso noma umugqa wakho. I-{{ui:Entity info}} ithi **Dimension** futhi ikhombisa i-{{ui:Length}} yayo.
2. Thayipha ubude obusha bese ucindezela {{key:Enter}}. Ungathayipha ngqo ebhokisini lenani, noma kubhokisi le-{{ui:Length}} ku-{{ui:Entity info}}.

### Okunyakazayo

Iphela lesibili oliliphethe liyanyakaza, nakho konke okungaphezu kwalo:

- **Womabili amakhona kwipiyesi eyodwa** (ububanzi bebhokisi, ukuphakama kodonga): uhlangothi oluseceleni kwekhona elinyakazayo luyaphuma noma lungene, nobuso obuhlangene nalo buyelula. Ibhokisi lihlala lingumuthi ovaliwe, nanoma yini ehleli ngokuphelele kuleyo hlangothi, njengekhomponenti yefasitela, iyahamba nalo.
- **Amakhona ezingxenye ezimbili ezihlukene** (igebe phakathi kwamabhokisi amabili): ipiyesi yekhona elinyakazayo iyahamba yonke, futhi igebe liyashintsha.
- **Ikhona elinyakazayo ngaphakathi kweqembu noma ikhompoment** kanti elinye ikhona lingekho kuyo: iqembu lonke liyahamba.
- **Womabili amakhona ngaphakathi kweqembu elifanayo noma ikhompoment**: liyelulwa ngaphakathi. Ikhompoment iyashintsha lapho ibekwe khona, njengoba kwenza ukuyihlela njalo.

Ukushintsha ukuthi yiliphi iphela elinyakazayo, khetha isilinganiso bese ukhetha ku-{{ui:Moves}} ku-{{ui:Entity info}}:

| Ukukhetha | Okwenzeka |
|---|---|
| {{ui:Second end}} (okuzenzakalelayo) | Iphela ochofoze ngalo wesibili liyanyakaza |
| {{ui:First end}} | Iphela ochofoze ngalo wokuqala liyanyakaza |
| {{ui:Both ends (centered)}} | Iphela ngalinye linyakaza ingxenye yesigamu sokushintsha, ngakho isikhungu siyahlala sisendaweni |

### Lapho ukushintsha usayizi kwenqatshwa

I-ModelCraft ayishintshi lutho futhi itshela isizathu ebhalweni lesimo:

- "ubuso buzogoba buphume endizeni yabo": isilinganiso sihamba ngokuthambeka kudwetshwe ngaso isakhiwo. Linganisa ngomphetho, noma ngobomvu, oluhlaza noma obuluhlaza okwesibhakabhaka.
- "ubuso buzoncipha bube yize noma buguquke ngaphakathi": ubude obusha mfushane kakhulu kwesakhiwo.
- "iphela elinyakazayo akusikho ekhoneni lemodeli": leli phela libekwe endaweni engenalutho noma phakathi komphetho. Khetha iphela elinye ku-{{ui:Moves}}, noma beka isilinganiso emakhoneni amabili.
- "ubude kumele bube ngaphezu kuka-zero".

Ukushintsha ngakunye kuyisinyathelo esisodwa: {{key:Mod+Z}} iyahlehlisa.

## Shintsha usayizi nge-Entity info

Akudingeki ngaso sonke isikhathi isilinganiso:

- **Umphetho:** wukhethe. I-{{ui:Length}} yawo ku-{{ui:Entity info}} iyibhokisi onganitha kulo. Ukuthayipha ubude ebhokisini lenani nakho kuyasebenza. Iphela elisemuva ngokusho kwe-red, bese green, bese blue lenyakazayo, nalokho okuhlangene nalo kuyelula. Isibonelo, ukushintsha ubude womphetho wangaphambili ongezansi webhokisi kwenza ibhokisi libe banzi ngakwesokudla.
- **Iqembu noma ikhompoment:** khetha. I-{{ui:Width (red)}}, i-{{ui:Depth (green)}} kanye ne-{{ui:Height (blue)}} ziyizibhokisi. Uhlangothi lwalo olusemuva (kwesokudla, emuva, phezulu) luyanyakaza. Lezi ngama-akisi eqembu ngokwalo, ngaphambi kwanoma yikuphi ukujikiswa onikeze kona.

Cindezela {{key:Enter}} ukusebenzisa, noma {{key:Esc}} ukubuyisela inani elidala.

## Izilinganiso zilandela imodeli

Isilinganiso sinamathiselwe emakhoneni amabili esasibekwe kuwo (ikhona: ekhoneni lalo nasemaphethelweni ende ezimbili; umsakazo noma ububanzi: ku-arc noma indilinga yalo). Hambisa, sunduza noma shintsha usayizi wejometri, bese isilinganiso siyalandela futhi sibonise ubude obusha. Sihlala sinamathisiwe uma wenza ijometri ibe iqembu noma ikhompoment.

Uma iphela libekwe endaweni engebona ikhona (ebusweni, noma endaweni engenalutho), noma ikhona lalo lisulwe, leli phela lihlala lapho lalikhona. Isilinganiso sisalinganisa, kodwa singashintsha usayizi kusuka kwelinye iphela kuphela.

## Susa izilinganiso

- Isilinganiso esisodwa: khetha sona bese ucindezela {{key:Delete}}, noma chofoza ngesisusa {{ui:Eraser}}.
- Zonke izilinganiso: ngokungakhethiwe lutho, chofoza {{ui:Delete all dimensions}} ku-{{ui:Entity info}}.

Izilinganiso zigcinwa kufayela le-`.modelcraft`. Azikhishwa ezinye izinhlobo zamafayela, ezithwala imodeli ye-3D kuphela. Ifayela elinezilinganiso livula ku-ModelCraft endala, ngaphandle kwazo.
