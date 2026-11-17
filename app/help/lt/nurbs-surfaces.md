---
title: Laisvosios formos paviršiai (NURBS)
summary: Glotnios kreivės ir paviršiai gaminių apvalkalams, automobilių kėbulams ir laivų korpusams – lofas, slinkimas, kreivių tinklai, keturkraštės plokštės, sujungimai, apkarpymai; G0, G1 ir G2 tolydumas, matuojamas tiksliuose paviršiuose; kietieji kūnai su sujungimu, atimtimi ir susikirtimu; zebros ir kreivumo rodiniai; paviršiai, pritaikyti prie skenavimo su išmatuota paklaida; STEP ir IGES failai.
keywords: nurbs, skenavimas, atvirkštinė inžinerija, pritaikyti, tinklas į paviršių, taškų debesis, stl, apkarpyti, apkarpytas, skylė, pjūvis, kietasis kūnas, kietieji kūnai, bulio, sujungti, atimti, susikirtimas, skirtumas, siūti, uždaras, laisvoji forma, freeform, paviršius, paviršiai, b-spline, bspline, kreivė, splainas, lofas, slinkimas, bėgis, tinklas, coons, plokštė, sujungimas, tolydumas, g0, g1, g2, liestinė, kreivumas, zebra, valdymo taškai, mazgai, laipsnis, step, iges, A klasė
from: 09887405
---

**Paviršiai** skydelis kuria glotnias kreives ir paviršius, naudojamus gaminių apvalkaluose, automobilių kėbuluose ir laivų korpusuose: NURBS, ta pati matematika, kurią naudoja kiti paviršių modeliavimo įrankiai. Viskas matuojama tiksliuose paviršiuose, niekada ne trikampiuose, kuriuos matote. Skydelio dydžiai pateikiami **milimetrais**, nepriklausomai nuo to, kokiais vienetais rodomas modelis.

Atidarykite jį iš dešiniojo skydelio: {{ui:Paviršiai}} › {{ui:Atidaryti paviršių skydelį}}. Modelis, kuriame jau yra paviršių, jį atidaro pats.

## Kaip veikia komanda

1. Paspauskite komandą (pavyzdžiui **Lofas**). Skydelis parodo, ko jam dar reikia: taškų, kreivių, paviršiaus kraštinės ar kreivės galo.
2. Pasirinkite juos: spustelėkite juos 3D rodinyje arba paspauskite **Pasirinkti** (arba kraštinės ir galo mygtukus) šalia kiekvieno sąraše. Kraštinei spustelėkite netoli tos paviršiaus kraštinės.
3. Patikrinkite parinktis (laipsnis, tolerancija, tolydumas ir kt.) ir paspauskite **Sukurti**.

Kreivės iš taškų paima taškus, įvestus po vieną eilutėje (`x, y, z` mm), arba **Pasirinkti taškus rodinyje**: kiekvienas spustelėjimas naudoja tokį patį prisitraukimą kaip brėžimo įrankiai; baigti paspauskite <kbd>Enter</kbd> arba dukart spustelėkite, sustabdyti – <kbd>Esc</kbd>.

## Kreivės

- **Kreivė per taškus** eina per kiekvieną tašką. **Kreivė pagal valdymo taškus** vietoj to seka taškų narvą.
- **Įterpti mazgą**, **Pakelti laipsnį** ir **Sumažinti laipsnį** keičia kreivės aprašymą, jos nepajudindami (sumažinimas atsisako, jei kreivė pajudėtų daugiau nei tolerancija). **Perskaičiuoti kreivę** suteikia jai naują valdymo taškų skaičių ir praneša, kiek ji pajudėjo.
- **Sutapatinti kreivę** padaro vienos kreivės galą susiliečiantį su kitos galu su G0 (liečiasi), G1 (ta pati kryptis) arba G2 (ir tas pats kreivumas). **Sumaišyti kreivę** prideda naują kreivę tarp dviejų galų.
- **Jungti kreives** ir **Skaidyti kreivę**.

## Paviršiai

- **Lofas** per dvi ar daugiau kreivių, **Linijinis paviršius** tarp dviejų, **Ištraukti kreivę**, **Sukti kreivę**.
- **Slinkti palei vieną bėgį** perkelia profilį palei kelią be sukimo; **Slinkti palei du bėgius** laiko profilio galus ant abiejų bėgių. Slinkimai yra pritaikomi: būsenos eilutėje nurodoma, kiek arti tikro slinkimo liko.
- **Paviršius iš kreivių tinklo** eina per kreivių tinklelį (pirmi pasirinkimai yra profiliai, likę – vedliai). **Plokštė iš keturių kraštinių** užpildo keturias kreives, susiliečiančias kampuose.
- **Sutapatinti paviršių** padaro paviršiaus kraštinę susiliečiančią su kaimynu su G0, G1 ar G2; **Sumaišyti paviršių** prideda paviršių tarp dviejų kraštinių.
- **Poslinkio paviršius**, **Pratęsti paviršių** (paviršius tęsiasi kaip ėjo), **Perskaičiuoti paviršių**, taip pat mazgai ir laipsnis paviršiams.

## Kokybės tikrinimas

**Bendrų kraštinių** lentelėje išvardijama kiekviena kraštinė, kurią dalijasi du paviršiai, su tarpu (mm), kampu tarp jų (°) ir kreivumo šuoliu (1/mm), ir ar tai yra G0, G1 ar G2. Kraštinė, blogesnė nei prašėte, taip pat patenka į **Problemas** (⚠ mygtukas programos juostoje) su **Sutapatinti** taisymu.

**Rodyti kaip** › **Zebros juostos** ir **Kreivumas (Gauso)** ateina iš tikro paviršiaus: juostos, einančios nenutrūkusios per kraštinę, reiškia G1; juostos, kurios išlaiko ir plotį, reiškia G2. Kreivumas mėlynas, kur paviršius yra balnas, raudonas, kur kupolas, ir baltas, kur plokščias. **Valdymo taškai** nubraižo valdymo tinklus.

G0–G2 matuojami 33 taškuose kiekvienoje kraštinėje. **G3 ir „A klasės“ kokybė nematuojama** ir nėra teigiama.

## Paviršiaus apkarpymas

**Apkarpymo** grupė apkerpa paviršių nekeisdama jo formos: paviršius išlaiko visus valdymo taškus, o rodoma, skaičiuojama ir įrašoma tik kontūro viduje esanti dalis. **Apkarpyti pagal stačiakampį** ir **Apkarpyti apskritimu** veikia su paviršiaus dalimi (0 iki 1) kiekviena kryptimi, todėl rodinyje nereikia nieko pasirinkti; **Apkarpyti pagal kreivę** priima uždarą kreivę, esančią ant paviršiaus (ji projektuojama į paviršių ir atmetama žodžiais, jei ji atvira arba nutolusi daugiau nei tolerancija). Pažymėkite **Išpjauti skylę**, kad pašalintumėte kontūro vidų; palikite nepažymėtą, kad liktų tik vidus. Paviršius gali turėti vieną išsaugotą kontūrą ir bet kiek skylių; kontūras, kertantis kitą, atmetamas. **Pašalinti apkarpymą** vėl parodo visą paviršių. Pjūvio kraštinės tiksliai seka kontūrą; skydelio **Anuliuoti** atšaukia apkarpymą kaip bet kurį kitą žingsnį.

STEP perduoda apkarpymą kaip paviršiaus ribas, o IGES – kaip apkarpytą paviršių (įrašas 144); abu jį nuskaito atgal.

## Kietieji kūnai ir Bulio operacijos

**Kietieji kūnai** grupė paverčia paviršius uždarais kūnais ir juos sujungia. Čia kietasis kūnas – tai skydelio paviršių rinkinys, kurie kartu uždaro tūrį; jo paviršiai lieka tiksliais NURBS su savo apkarpymais.

- **Dėžės kietasis kūnas**, **Cilindro kietasis kūnas** ir **Sferos kietasis kūnas** sukuria kūną iš įvestų dydžių (mm): dėžė su šešiais plokščiais paviršiais, cilindras su apvaliu šonu ir dviem plokščiais galais, apkarpytais iki apskritimo, sfera su vienu apsisukimo paviršiumi.
- **Kietasis kūnas iš paviršių** sugrupuoja jūsų pačių sukurtus paviršius. Pasirinkite juos arba nieko nepasirinkite, kad naudotumėte visus rodomus paviršius, kurie dar nėra kietajame kūne. Jie susiuvami į vieną toleranciją: jei jie neuždaromi, niekas nekeičiama, o skydelis praneša, kiek kraštinių lieka atviros ir kaip arti jos turi susiliesti.
- **Sujungti**, **Atimti** (antrasis kietasis kūnas atimamas iš pirmojo) ir **Susikirtimas** (tik tai, ką abu turi bendro) priima du kietuosius kūnus: spustelėkite kiekvieno paviršių rodinyje arba paspauskite **Pasirinkti** **Kietųjų kūnų** sąraše. Pažymėkite **Palikti du kietuosius kūnus**, kad jie liktų šalia rezultato.

Bulio operacija išlaiko kiekvieną paviršių jo tiksliame paviršiuje ir pjauna jį naujais apkarpymo kontūrais palei susikirtimą. Rezultato eilutėje pateikiami išmatuoti skaičiai: kiek kietojo kūno variklio taškai turėjo pasislinkti, kad atsidurtų ant tikslių paviršių (niekada daugiau nei tolerancija), kaip arti susikirtimo taškai yra abiejų paviršių (paprastai keletas milijoninių milimetro dalių), tūris ir ar nauji paviršiai vėl užsidaro, kai jie vėl susiuvami iš savo tikslių paviršių. Tūriai matuojami trikampiais tolerancijos ribose (0.05 mm, nebent nustatote kitą), todėl sferos ar cilindro tūris rodomas šiek tiek mažesnis nei tikslus: mažesnė tolerancija priartina. Bulio operacija, kurios negalima atlikti švariai (kietieji kūnai neturi nieko bendro, kontūras susikirstų pats su savimi), atmetama žodžiais ir nieko nekeičia. Viena Bulio operacija yra vienas skydelio **Anuliuoti** žingsnis.

**Kietųjų kūnų** sąraše **Išskaidyti** palieka paviršius kaip paprastus paviršius; šiukšliadėžė pašalina kietąjį kūną ir jo paviršius.

**Įtraukti į modelį** (**Kietųjų kūnų** sąraše) įdeda kietojo kūno kopiją į modelį kaip vieną uždarą grupę, jos paviršiai – kaip trikampiai, kurių tolerancija 0.05 mm, viename modelio anuliavimo žingsnyje. Po to jis veikia su modelio paties **Sujungti**, **Atimti** ir **Susikirtimas**, stūmimo-traukimo ir 3D spausdinimo patikra; tikslus kietasis kūnas lieka skydelyje.

## Suapvalinimai ir storinimas

**Suapvalinti tarp paviršių** suapvalina kraštinę, kurioje susitinka du vieno kietojo kūno paviršiai: pasirinkite du paviršius (rodinyje arba su **Pasirinkti** sąraše), įveskite **spindulį** ir, jei spindulys kinta palei kraštinę, **spindulį gale** (0 palieka vieną spindulį). Rutulys tos spindulio dydžio ridenamas palei kraštinę liesdamas abu paviršius; suapvalinimas yra tikslus apskritiminis lankas, kurį jis palieka kiekviename taške, sujungtas į vieną paviršių, o abu paviršiai apkerpami ten, kur rutulys juos liečia. Išorinė kraštinė praranda medžiagos, vidinis kampas ją įgauna. Rezultato eilutėje pateikiama, kas išmatuota: kaip toli suapvalinimo paviršius yra nuo ridenamo rutulio tarp taškų, iš kurių jis buvo sukurtas (taškai pridedami, kol nukrypimas tampa mažesnis nei ketvirtadalis tolerancijos), didžiausias kampas tarp suapvalinimo ir kiekvieno paviršiaus išilgai liestinių linijų, ir tie patys skaičiai kaip Sujungimo. Spindulys, kuris netinka (rutulys išeitų iš paviršiaus arba paviršius lenkiasi staiptiau nei spindulys), atmetamas, nurodant paviršių, ir nieko nekeičiama.

**Suapvalinti kelias kraštines** suapvalina daug kraštinių vienu žingsniu: pasirinkite du pirmosios kraštinės paviršius, tada kitos kraštinės du paviršius ir t. t. (paviršius gali būti keliose poros, pavyzdžiui dėžės viršutinis paviršius keturiose iš jų); visos kraštinės gauna jūsų įvestą spindulį. Kiekvienas suapvalinimas apskaičiuojamas ant kietojo kūno tokio, koks jis buvo, tada jie pjaunami vienas po kito, todėl tvarka nesvarbi. Kur dvi suapvalintos kraštinės susitinka kampe, kurio kitos kraštinės lieka aštrios, du suapvalinimai susilieja palei savo susikirtimo kreivę (įlinkis). Kur trys suapvalintos išorinės kraštinės iš trijų plokščių paviršių, statmenų viena kitai, susitinka su vienu spinduliu, kampas tampa vienu **sferos lopu**, liečiančiu visus tris suapvalinimus (išjunkite **Kampai**, kad gautumėte įlinkusį kampą); kraštinė turi būti bent dvigubai ilgesnė už spindulį, kai abu jos galai yra tokie kampai. Rezultato eilutėje nurodoma, kiek kraštinių suapvalinta ir kaip išėjo kampai. Vidinės kraštinės taip pat gali būti suapvalinamos kartu, bet rezultatas, kuris neužsidaro, tik pranešamas (eilutėje tai parašoma), todėl patikrinkite.

**Storinti į kietąjį kūną** suteikia paviršiui storį: pasirinkite jį, įveskite **storį** ir pažymėkite **Kita pusė**, kad jis augtų kita kryptimi. Poslinkio paviršius pritaikomas prie paviršiaus ir matuojamas pagal jį (rezultato eilutė pateikia didžiausią skirtumą nuo storio); sienelės seka kiekvieną kraštinę ir kiekvieną apkarpymo kontūrą. Jei paviršius toje pusėje lenkiasi staiptiau nei storis arba kita jo dalis yra arčiau nei storis, atmetama, nurodant paviršių ir vietą, ir nieko nekeičiama.

## Anuliavimas, failas, STEP ir IGES

Skydelis turi savo **Anuliuoti** ir **Perdaryti** (vienas žingsnis kiekvienai komandai). Paviršiai įrašomi `.modelcraft` faile kartu su modeliu; jie nėra modelio paties anuliavimo dalis, kaip ir failo medžiagos.

**STEP…** (AP242) ir **IGES…** įrašo kreives ir paviršius tiksliai tokius, kokie jie yra (B-splaino kreivės ir paviršiai, nieko nepaverčiama trikampiais). Kiekvienas paviršius yra atskiras paviršius su savo apkarpymu; kietasis kūnas įrašomas kaip vienas uždaras apvalkalas, o kiekviena kraštinė dalijasi tarp dviejų savo paviršių, kaip tikisi kitos CAD programos (eilutėje nurodoma, kiek kietųjų kūnų taip išėjo). IGES formate tas pats kietasis kūnas yra vienas vientisas kietojo kūno B-rep (įrašas 186 virš uždaro apvalkalo 514, paviršiai 510, kontūrai 508, vienas kraštinių sąrašas 504 ir vienas viršūnių sąrašas 502); kietasis kūnas, kurio paviršiai nesutampa kraštinė po kraštinės, įrašomas kaip atskiri paviršiai, ir eilutė apie tai praneša. **Importuoti…** nuskaito tokį kietąjį kūną atgal kaip kietąjį kūną, iš STEP ir iš IGES. Jis nuskaito tokiu būdu įrašytas kreives ir paviršius bei `.ccnurbs` lopų rinkinius; kitų programų STEP kietieji kūnai atsidaro per Failas › Importuoti kaip tinklai.

## Paviršiai iš skenavimo (atvirkštinė inžinerija)

Pasirinkite skenuotą tinklą modelyje (jei nieko nepasirinkta, reiškia viską, kas rodoma), atidarykite **Paviršius** ir **Skenavimo** grupėje pasirinkite **Pritaikyti paviršius prie skenavimo**. Įrankis ieško **plokštumų**, **cilindrų**, **sferų** ir **kūgių** (tikslių paviršių, iš kurių sudaryta apdirbta detalė; kiekvienoje eilutėje rodomas rastas spindulys arba pusės kampas), randa **suapvalinimus** (suapvalintas kraštines ir kampus: mažą cilindrą ar sferą, liečiančią du ar daugiau kitų paviršių, rodomą su spinduliu ir paviršiais, kuriuos jungia), **žiedinius suapvalinimus** (toras: suapvalinta kraštinė, kur plokščias paviršius susitinka su cilindru ar kūgiu, rodoma su spinduliu ir žiedo spinduliu) ir **kintamus suapvalinimus** (suapvalinta kraštinė, kurios spindulys kinta palei ją, rodoma su spinduliu kiekviename gale), pritaiko **vieną laisvosios formos lopą** prie glotnios, švelniai išlenktos dalies ir apkerpa kiekvieną paviršių iki to skenavimo dalies kontūro, iš kurios jis atsirado, todėl skylės ir kampai išlieka. Parinktys: **tolerancija** (kiek, mm, skenavimo taškas gali būti nutolęs nuo plokštumos ar cilindro ir vis dar priklausyti jam, ir tikslas laisvosios formos lopui), **mažiausias gabalas** (paviršiaus ploto dalis) ir **daugiausiai paviršių**. Tas pats skenavimas ir tos pačios parinktys visada duoda tuos pačius paviršius.

Rezultatas – lentelė, po vieną eilutę kiekvienam paviršiui: jo rūšis, iš kiek trikampių jis atsirado ir paklaida, **išmatuota nuo skenavimo iki paviršiaus** (rms, didžiausia ir taškų dalis tolerancijos ribose). Matuojami skenavimo viršūnės ir kiekvieno trikampio vidurys. Paklaida nematuojama atvirkščiai (nuo paviršiaus iki skenavimo), todėl paviršius, kuris išsikiša už skenavimo, nebūtų matomas. Lentelės apačioje esanti pastaba taip pat nurodo, kiek ploto buvo per mažas pritaikymui. Rodinyje skenavimo taškai nuspalvinami pagal jų **nuokrypių žemėlapį**: mėlynai ant paviršiaus, žaliai pusiaukelėje iki tolerancijos, raudonai tolerancijoje arba aukščiau (nuimkite žymą **Rodyti nuokrypių žemėlapį**, kad jį paslėptumėte). Gabalai, kurie lenkiasi atgal ant savęs (pavyzdžiui, uždarytas vamzdis, pritaikytas laisvosios formos lopais), išvardijami kaip nepritaikyti ir niekada nepriverčiami į vieną paviršių.

**Susiūti paviršius į kietąjį kūną** susiuvą kiekvieną rodomą paviršių, kuris dar nėra kietajame kūne, į vieną uždarą kietąjį kūną. Skenavimo paviršiai susilieja tik iki paties skenavimo paklaidos, todėl jis bando mažiausią jungimo atstumą, kuris užsidaro (ne daugiau nei jūsų nustatytas **siūlių atstumas**), ir atmeta žodžiais, kai paviršiai neužsidaro. Jis niekada neužkemša tarpo. Dėžė su suapvalintomis kraštinėmis susiuvama, kai jos suapvalinimai buvo rasti kaip atskiri paviršiai; siūlių atstumas, kuris užsidarė, nurodytas rezultate. Tada kietasis kūnas veikia su Sujungti, Atimti, Susikirtimas ir **Įtraukti į modelį**.

Ko jis nedaro: **žiedinis suapvalinimas** (toras) ieškomas tik aplink jau rasto cilindro ar kūgio ašį, o **kintamas suapvalinimas** – tik palei gana tiesią kraštinę (jo pjūviai pjaunami statmenai vienai krypčiai); kitur jie pasirodo kaip laisvosios formos lopai, kai yra pakankamai glotnūs, ir kitu atveju praleidžiami; sferos, kūgiai ir suapvalinimai randami atsitiktinės atrankos būdu, todėl labai mažas (keli trikampiai) gali būti praleistas; nuokrypių žemėlapis rodo atstumą nuo skenavimo iki paviršių, o ne atvirkščiai; labai dideli skenavimai (virš 300 000 trikampių) čia atmetami. Pilno apsisukimo cilindro paviršiai apkerpami aplink skyles, o siūlė dedama ten, kur skylės nėra. Prieš pasikliaudami kiekvieną paviršių patikrinkite su savo skenavimu.

## Dar neįgyvendinta

Suapvalinti kraštines, susitinkančias kreivų paviršių kampe arba su skirtingais spinduliais (viršūnės sumaišymas), suapvalinimas tarp paviršių, kurie nesusitinka, vidinis suapvalinimas, kuris baigiasi įstrižame ar kreiviame paviršiuje, ir Bulio operacijos bei suapvalinimai, skaičiuojami paviršiuose be trikampių (čia kietojo kūno variklis dirba su trikampiais tolerancijos ribose, o kiekvienas taškas tada grąžinamas į tikslius paviršius).
