---
title: Živi pogled
summary: Okno ob modelu, ki ga prikazuje v videzu v realnem času, s soncem in senco, in sledi vsaki vaši spremembi; se sprehodite po njem ter nastavite čas dneva in mesec.
keywords: deli, panorama, 360, ogled, virtualni ogled, samostojni pregledovalnik, brez povezave, pošiljanje stranki, video, video sprehoda, raztros, raztrosi, trava, travnik, gozd, skale, rastline, drevesa, množica, slikanje rastlin, živi pogled, realni čas, upodobitev v realnem času, sprehod, hoja, v prvi osebi, predstavitev, stranka, drugi zaslon, drugo okno, monitor, čas dneva, sonce, letni čas, mesec, sence, ambientna okluzija, odsevi, odbita svetloba, globalna osvetlitev, webgpu, webgl
from: fca3b0d6
---

{{ui:Izvozi}} › {{ui:Živi pogled}} odpre ploščo nad aplikacijo, ki prikazuje model v videzu v realnem času: nebo in sonce z lokacijo in datumom vašega modela, sončne sence, videze in materiale, ki ste jih dali ploskvam, svetilke ter svetlobo, odbito od sten in tal. Sledi vašim dejanjem: zavrtite pogled in se zavrti tudi on, spremenite model in sprememba se pokaže čez trenutek. Ničesar se ne naloži.

## Odprite jo

1. Izberite {{ui:Izvozi}} › {{ui:Živi pogled}}. Plošča se odpre v spodnjem desnem kotu.
2. Povlecite njeno naslovno vrstico, da jo premaknete, ter povlecite njen vogal, da jo povečate.
3. {{ui:Novo okno}} jo premakne v lastno okno, za drug zaslon. {{ui:Izvozi}} › {{ui:Živi pogled v novem oknu}} ga takoj odpre tam. Če brskalnik blokira pojavna okna, se odpre kot plošča.
4. {{ui:Zapri}} jo zapre.

## Kontrole

| Kontrola | Kaj naredi |
|---|---|
| {{ui:Sledi pogledu}} | Vklopljeno: živi pogled gleda, kamor gleda ModelCraft. Sprehajanje ga izklopi |
| {{ui:Hoja}} | Sprehod po modelu (spodaj) |
| {{ui:Gravitacija}} | Med hojo: stoji na tleh in se vzpenja po stopnicah. Izklopljeno: leti |
| {{ui:Čas}} | Ura dneva, od 05:00 do 21:00. Sonce se premika, ko vlečete |
| {{ui:Mesec}} | Mesec (21. v njem), da vidite sonce pozimi in poleti |
| {{ui:Kakovost}} | {{ui:Za ta računalnik}} (kar dobi [vaš računalnik](topic:your-machine)) ali {{ui:Nizka}}, {{ui:Srednja}} ali {{ui:Visoka}} |

Vrstica na dnu pove, kaj riše pogled (WebGPU ali WebGL 2), kakovost in odbito svetlobo.

## Sprehod po modelu

1. Glavni pogled zavrtite tja, kamor želite stopiti, in izberite {{ui:Hoja}}. Stojite na tleh pod očesno točko pogleda, visoki 1.6 m.
2. Kliknite živi pogled, nato uporabite {{key:W}} {{key:A}} {{key:S}} {{key:D}} ali puščične tipke. Držite {{key:Shift}} za tek. Povlecite, da se ozrete naokoli.
3. Stopnice do 40 cm se vzpenjajo; vse, kar je višje, je stena. Stene vas ustavijo in ob njih drsite.
4. Z izklopljeno {{ui:Gravitacija}} letite: {{key:E}} gre gor, {{key:Q}} dol.
5. {{key:Esc}} ustavi hojo.

## Raztrosite rastline, skale in ljudi

{{ui:Raztrosi}} v vrstici živega pogleda odpre ploščo za raztros ob sliki. Nabor raztrosa razporedi predmete iz knjižnice okolice (drevesa, grmovje, trava, cvetje, skale, ljudje, avtomobili) po delu modela. Predmeti so narisani samo v živem pogledu: niso geometrija v modelu, glavni pogled jih ne prikazuje.

1. **Zapolnite ploskve:** izberite ploskve (ali skupino, na primer teren) v ModelCraft, nato izberite {{ui:Zapolni izbor}}. Nabor jih pokrije.
2. **Pobarvajte:** izberite {{ui:Pobarvaj (B)}}, nato povlecite čez živi pogled. Če so izbrane ploskve, barva zadene samo nje; če nič ni izbrano, zadene vse pod čopičem, tudi tla. {{ui:Velikost čopiča}} nastavi čopič; {{ui:Radirka (E)}} odstrani pobarvana mesta.
3. Označite, kaj raztrositi. Številka ob vsakem je njegova teža: 3 in 1 pomenita tri prvega na vsakega drugega.

| Kontrola | Kaj naredi |
|---|---|
| {{ui:Na m²}} | Koliko predmetov je na vsakem kvadratnem metru |
| {{ui:Odmik (m)}} | Noben predmet ni bližje od tega drugim objektom in noben ni pod streho ali mizo. 0 izklopi |
| {{ui:Zasuk (°)}} | Kako močno se vsak predmet naključno zasuka okoli navpičnice |
| {{ui:Največ (°)}} | Ni predmetov tam, kjer je površina strmejša |
| {{ui:Velikost}} | Najmanjša in največja velikost, kot faktor lastne velikosti predmeta |
| {{ui:Višina od, do (m)}} | Samo med tema višinama (prazno = katera koli) |
| {{ui:Nagib s površino}} | 0 drži predmete pokončne; 1 jih postavi pravokotno na strmino |
| {{ui:Začetna vrednost}}, {{ui:Premešaj}} | Ista začetna vrednost da vedno isti raztros; Premešaj izbere drugega |

Nabori so shranjeni v datoteki .modelcraft in sledijo ploskvam, ki jih pokrivajo, ko jih spremenite. Največje število predmetov, ki jih živi pogled riše, je odvisno od stopnje [vašega računalnika](topic:your-machine): 20 000 za {{ui:Samo procesor}}, 100 000 za {{ui:Grafična kartica, osnovna}}, milijon za {{ui:Grafična kartica, visoka}}. Plošča pove, koliko jih je postavljenih od koliko jih gostota zahteva: manj jih je postavljenih, ko se doseže proračun ali kjer jih objekti izključijo. Predmeti blizu kamere so narisani kot sami; oddaljeni kot preproste oblike v svojih barvah.

:::note
Raztrošeni predmeti so v živem pogledu (in v njegovem sprehodu, panoramah in samostojnem pregledovalniku). Upodobitev slike jih še ne riše.
:::

## Deli: panorame, ogledi, pregledovalnik, video

{{ui:Deli}} v vrstici živega pogleda naredi datoteke iz živega pogleda. Vse je narejeno na tem računalniku; ničesar se ne naloži.

| Izbira | Kaj dobite |
|---|---|
| {{ui:Panorama 360°}} | Slika 360° z mesta, kjer stoji pogled (ali kjer hodite), kot PNG v obliki equirectangular, ki ga odprejo pregledovalniki panoram in večina spletnih strani s fotografijami |
| {{ui:Dodaj to mesto na ogled}}, nato {{ui:Shrani ogled}} | Ena spletna stran s panoramo na vsakem mestu in puščicami do mest, ki jih vsako lahko vidi (zid vmes skrije puščico) |
| {{ui:Shrani pregledovalnik}} | Ena spletna stran z modelom v tem videzu v realnem času: zavrtite ga, sprehodite se po njem, skočite na njegove shranjene prizore. Odpre se brez povezave v brskalniku z WebGPU ali WebGL 2, iz mape, USB-ključka ali e-pošte, brez namestitve in računa, ter ne naloži ničesar iz interneta |
| {{ui:Video poti}} | Pot kamere na časovnici (ali shranjeni prizori po vrsti) kot video v tem videzu v realnem času, v velikosti živega pogleda: WebM ali MP4, kjer ju brskalnik lahko naredi, sicer oštevilčene slike v ZIP |

Velikost panorame sledi kakovosti: 1024, 2048 ali 4096 slikovnih pik v širino pri Nizki, Srednji in Visoki. Datoteka pregledovalnika je približno 5 MB plus model.

:::note
Ogled in pregledovalnik sta narejena za prikazovanje, ne za urejanje: ko ju shranite, ohranita model takšen, kot je.
:::

## Kakovost

| | Nizka | Srednja | Visoka |
|---|---|---|---|
| Sončne sence | ena senčna karta | tri kaskade | štiri kaskade |
| Ambientna okluzija (stične sence) | | ✓ | ✓, finejša |
| Odsevi v kovini | | | ✓ |
| Bloom (kadar ga nastavi Upodobi sliko) | | ✓ | ✓ |
| Zglajeni robovi | FXAA | v več sličicah (TAA) | v več sličicah (TAA) |
| Odbita svetloba | grobo | finejša | najfinejša |

{{ui:Za ta računalnik}} izbere Nizka na računalniku brez uporabne grafične kartice, Srednja z vgrajenim grafičnim čipom in Visoka z ločeno grafično kartico. Nizka je namenjena prenosniku z 8 GB pomnilnika brez grafične kartice.

## Odbita svetloba

Svetloba, ki se odbije od sončne stene na tla, in temnejša notranjost sobe se izračunata z istim sledilnikom poti, ki naredi [upodobljene slike](topic:render): na točkah skozi model upodobi majhno panoramo, v ozadju na vsakem jedru procesorja. Med delom spodnja vrstica pove {{ui:Odbita svetloba: 40 %}}; ko je pripravljeno, pogled jo vključi. Po spremembi se začne znova.

:::note
To je približek za živi pogled, ne upodobljena slika: majhne podrobnosti med točkami dobijo odbito svetlobo sosednjih točk. Za končno sliko uporabite [Upodobi sliko](topic:render).
:::

## Svetlost in barve

Živi pogled uporablja isto svetlost, belo ravnovesje, kontrast in pretvorbo pogleda (ACES, AgX, filmic ali standard) kot [Upodobi sliko](topic:render): nastavite jih tam in živi pogled jih sledi.

:::note
Brskalniki se razlikujejo. Kjer ima brskalnik WebGPU (Chrome in Edge v Windows, macOS in ChromeOS, Safari 26), živi pogled uporablja njega; drugod (večina brskalnikov v Linuxu, starejši sistemi Apple) uporablja WebGL 2 in izgleda enako.
:::
