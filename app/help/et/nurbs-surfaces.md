---
title: Vabakujulised pinnad (NURBS)
summary: Siledad kõverad ja pinnad toote kestadele, autokeredele ja paadikerele - loft, sweep, kõverate võrgud, neljaservalised lapid, sulandused, lõiked, G0-, G1- ja G2-pidevus mõõdetuna täpsetel pindadel, tahkised ühendamise, lahutamise ja lõikumisega, kõveruse ja sebra-vaated, skaneeringule sobitatud tahud koos mõõdetud veaga ning STEP- ja IGES-failid.
keywords: nurbs, skaneering, pöördprojekteerimine, sobitamine, võrk pinnaks, punktipilv, stl, lõika, kärbitud, auk, lõige, tahkis, tahkised, bool, ühenda, lahuta, lõikumine, erinevus, õmbles, suletud, vabakuju, freeform, pind, pinnad, b-spline, bspline, kõver, spline, loft, sweep, rööpa, võrgustik, coons, lapp, sulandus, sobitus, pidevus, g0, g1, g2, puutuja, kõverus, sebra, juhtpunktid, sõlmed, aste, step, iges, klass a
from: 09887405
---

Paneel **{{ui:Surfaces}}** loob siledaid kõveraid ja pindu, mida kasutatakse toote kestadel, autokerdel ja paadikerel: NURBS, sama matemaatika, mida kasutavad teised pinnamodelleerijad. Kõik mõõdetakse täpsetel pindadel, mitte kolmnurkadel, mida näed. Paneeli suurused on **millimeetrites**, olenemata sellest, millist ühikut mudel näitab.

Ava see paremal paneelil: {{ui:Surfaces}} › {{ui:Open the Surfaces panel}}. Mudel, millel on juba pinnad, avab paneeli ise.

## Kuidas käsk töötab

1. Vajuta käsku (näiteks **Loft**). Paneel ütleb, mida ta veel vajab: punkte, kõveraid, pinna serva või kõvera otsa.
2. Vali need: klõpsa neid 3D-vaates või vajuta **Vali** (või serva- ja otsanuppe) iga nime kõrval loendis. Serva jaoks klõpsa pinna serva lähedal.
3. Kontrolli valikuid (aste, tolerants, pidevus jne) ja vajuta **Tee**.

Punktidest loodud kõverad võtavad punktid, mis on sisestatud reakaupa (`x, y, z` mm-des), või **Vali punktid vaates**: iga klõps kasutab samu haakumisi nagu joonistamistööriistad; lõpetamiseks vajuta <kbd>Enter</kbd> või tee topeltklõps, peatamiseks <kbd>Esc</kbd>.

## Kõverad

- **Punkte läbiv kõver** läbib iga punkti. **Juhtpunktidega kõver** järgib selle asemel punktide võret.
- **Lisa sõlm**, **Tõsta aste** ja **Langeta aste** muudavad kõvera kirjeldust, seda liigutamata (langetamine keeldub, kui kõver liiguks rohkem kui tolerantsi võrra). **Ehita kõver ümber** annab sellele uue arvu juhtpunkte ja ütleb, kui kaugele see liikus.
- **Sobita kõver** teeb ühe kõvera otsa kokku teisega kas G0 (puutub), G1 (sama suund) või G2 (sama kõverus ka). **Sulanduskõver** lisab uue kõvera kahe otsa vahele.
- **Ühenda kõverad** ja **Jaga kõver**.

## Pinnad

- **Loft** läbi kahe või enama kõvera, **Joonpind** kahe vahel, **Väljapressi kõver**, **Pööra kõver**.
- **Pühi ühe rööpa järgi** kannab profiili mööda teed ilma keerdumata; **Pühi kahe rööpa järgi** hoiab profiili otsad mõlemal rööpal. Pühkimised sobitatakse: olekurida ütleb, kui lähedal jäädi tõelisele pühkimisele.
- **Pind kõverate võrgust** läbib kõverate võrgu (esimesed valikud on profiilid, ülejäänud juhikud). **Lapp neljast servast** täidab neli kõverat, mis kohtuvad oma nurkades.
- **Sobita pind** paneb pinna serva kokku naabriga G0, G1 või G2 abil; **Sulanduspind** lisab pinna kahe serva vahele.
- **Nihkepind**, **Pikenda pinda** (pind jätkub nii, nagu see liikus), **Ehita pind ümber** ning pindade sõlmed ja aste.

## Kvaliteedi kontrollimine

Tabel **Ühised servad** loetleb iga serva, mida kaks pinda jagavad, koos vahega (mm), nurgaga nende vahel (°) ja kõveruse hüppega (1/mm) ning ütleb, kas see on G0, G1 või G2. Serv, mis on halvem kui oled küsinud, on ka paneelil **Probleemid** (rakenduse riba ⚠ nupp) koos parandusega **Sobita**.

**Näita kui** › **Sebra triibud** ja **Kõverus (Gaussi)** tulevad täpsest pinnast: triibud, mis jooksevad katkestuseta üle serva, tähendavad G1; triibud, mis hoiavad ka oma laiust, tähendavad G2. Kõverus on sinine seal, kus pind on sadul, punane seal, kus see on kupli kujuline, ja valge seal, kus see on tasane. **Juhtpunktid** joonistab juhtvõrgud.

G0–G2 mõõdetakse 33 punktis serva kohta. **G3 ega „klass A“ kvaliteeti ei mõõdeta** ning neid ei väideta.

## Pinna kärpimine

Rühm **Kärbi** lõikab pinna ilma selle kuju muutmata: pind säilitab kõik oma juhtpunktid ja näidatakse, loetakse ning kirjutatakse ainult kontuuri sees olev osa. **Kärbi ristkülikuga** ja **Kärbi ringiga** töötavad pinna osal (0 kuni 1) igas suunas, nii et vaates pole vaja midagi valida; **Kärbi kõveraga** võtab suletud kõvera, mis asub pinnal (see projitseeritakse pinda, ja kui see on avatud või tolerantsist kaugemal, keeldutakse sõnadega). Märgi **Lõika auk**, et eemaldada kontuuri sisemus; jäta see märkimata, et jätta alles ainult sisemus. Pinnal võib olla üks säilitatav kontuur ja mis tahes arv auke; kontuur, mis ristub teisega, keeldutakse. **Eemalda kärpimine** näitab taas kogu pinda. Lõigatud servad järgivad kontuuri täpselt; paneeli Võta tagasi viib kärpimise tagasi nagu iga teise sammu.

STEP kannab kärpimist tahu piirina ja IGES kärbitud pinnana (entiteet 144); mõlemad loevad selle tagasi.

## Tahkised ja Boolean-tehted

Rühm **Tahkised** muudab pinnad suletud kehadeks ja ühendab need. Tahkis siin on paneeli enda pindade hulk, mis koos sulgevad mahu; selle tahud jäävad täpseteks NURBS-pindadeks koos oma kärpimistega.

- **Kasti tahkis**, **Silindri tahkis** ja **Kuuli tahkis** loovad tahkise sisestatud mõõtudest (mm): kasti kuus tasast tahku, silindri ümmargune külg ja kaks tasast otsa ringi kärbituna, kuuli üks pöörlev pind.
- **Tahkis pindadest** grupeerib pinnad, mille ise tegid. Vali need või ära vali ühtegi, et kasutada kõiki näidatud pindu, mis pole veel tahkises. Need õmmeldakse kokku tolerantsi piires: kui need ei sulgu, ei muutu midagi ja paneel ütleb, mitu serva on veel lahti ning kui lähedal peavad need kokku puutuma.
- **Ühenda**, **Lahuta** (teine tahkis võetakse esimesest) ja **Lõikumine** (ainult see, mis mõlemal on) võtavad kaks tahkist: klõpsa vaates iga tahkise tahul või vajuta loendis **Tahkised** nuppu **Vali**. Märgi **Hoia kaks tahkist**, et jätta need tulemuse kõrvale.

Boolean hoiab iga tahu oma täpsel pinnal ja lõikab selle uute kontuuridega mööda lõikejoont. Tulemuse rida annab mõõdetud arvud: kui kaugele tahkismootori punktid pidi liikuma, et jääda täpsetele pindadele (ei kunagi rohkem kui tolerants), kui lähedal lõikepunktid mõlemale pinnale jäävad (tavaliselt mõne miljondiku millimeetri piires), maht ning kas uued tahud sulguvad uuesti, kui need õmmeldakse värskelt nende täpsetest pindadest. Mahud mõõdetakse kolmnurkadel tolerantsi piires (0,05 mm, kui sa ei määra teist), nii et pallide ja silindrite maht loetakse veidi täpsest väiksemaks: väiksem tolerants läheneb paremini. Boolean, mida ei saa puhtalt teha (tahkised ei jaga midagi, kontuur lõikuks iseendaga), keeldutakse sõnadega ega muudeta midagi. Üks Boolean on üks samm paneeli **Võta tagasi** jaoks.

Nimekirjas **Tahkised** eemaldab **Eemalda rühmitus** tahud tavaliste pindadena; prügikast eemaldab tahkise ja selle tahud.

**Lisa mudelisse** (nimekirjas **Tahkised**) paneb tahkise koopia mudelisse ühe suletud grupina, tahud kolmnurkadena 0,05 mm piires, ühes sammus mudeli enda Võta tagasi jaoks. Seejärel töötab see mudeli enda **Ühenda**, **Lahuta** ja **Lõikumisega**, tõmba/lükka ja 3D-printimise kontrolliga; täpne tahkis jääb paneelile.

## Ümardused ja paksendamine

**Ümardus tahkude vahel** ümardab serva, kus kahe ühe tahkise tahku kohtuvad: vali kaks tahku (vaates või nupuga **Vali** loendis), sisesta **raadius** ning serva jaoks, mille raadius muutub, **raadius lõpus** (0 jätab ühe raadiuse). Kera selle raadiusega veeretatakse mööda serva, puutudes mõlemat tahku; ümardus on täpne ringikujuline kaar, mida see igas punktis jätab, ühendatuna üheks pinnaks, ning kaks tahku kärbitakse seal, kus kera neid puudutab. Väline serv kaotab materjali, sisemine nurk saab juurde. Tulemuse rida annab mõõdetud väärtused: kui kaugel on ümardus pinnast veeretatud kerast punktide vahel, millest see ehitati (punkte lisatakse, kuni see jääb neljandiku tolerantsi piiresse), suurim nurk ümarduse ja iga tahu vahel puutejoonte järgi ning samad arvud, mis Ühendamisel. Raadius, mis ei sobi (kera lahkuks tahult või tahk kõverdub raadiusest kitsamalt), keeldutakse, nimetades tahu, ja midagi ei muutu.

**Ümarda mitu serva** ümardab paljud servad ühe sammuga: vali kaks tahku esimese serva jaoks, seejärel kaks järgmise serva jaoks jne (tahk võib olla mitmes paaris, näiteks kasti ülemine tahk neljas neist); kõik servad saavad sisestatud raadiuse. Iga ümardus arvutatakse tahkisel sellisena, nagu see oli, seejärel lõigatakse need üksteise järel, nii et järjekord ei loe. Kui kaks ümardatud serva kohtuvad nurgas, mille teised servad jäävad teravaks, sulanduvad kaks ümardust üksteisega mööda oma lõikejoont (voltjoon). Kui kolm ümardatud välisserva kolmest tasasest tahust, mis on üksteise suhtes risti, kohtuvad ühe raadiusega, on nurk üks **kerapaik**, mis puutub kõigi kolme ümardusega (eemalda linnuke **Nurgad**, et saada voltunud nurk); serva peab olema vähemalt kaks korda raadiust pikk, kui selle mõlemad otsad on sellised nurgad. Tulemuse rida ütleb, mitu serva ümardati ja kuidas nurgad välja tulid. Sisemisi servi saab ka koos ümardada, kuid tulemus, mis ei sulgu uuesti, on ainult teatatud (rida ütleb seda), seega kontrolli seda.

**Paksenda tahkiseks** annab pinnale paksuse: vali see, sisesta **paksus** ja märgi **Teine pool**, et kasvatada seda teises suunas. Nihkeline tahk sobitatakse pinnaga ja mõõdetakse selle vastu (tulemuse rida annab suurima erinevuse paksusest); seinad järgivad iga serva ja iga kontuuri. Kui pind kõverdub selles pooles paksusest kitsamalt või kui mõni teine osa jääb lähemale kui paksus, keeldutakse, nimetades pinna ja koha, ja midagi ei muutu.

## Võta tagasi, fail, STEP ja IGES

Paneelil on oma **Võta tagasi** ja **Tee uuesti** (üks samm käsu kohta). Pinnad salvestatakse `.modelcraft`-faili koos mudeliga; need ei ole mudeli enda tagasivõtmise osa, nagu pole ka faili materjalid.

**STEP…** (AP242) ja **IGES…** salvestavad kõverad ja pinnad täpselt sellistena, nagu need on (B-spline kõverad ja pinnad, midagi kolmnurkadeks muutmata). Iga pind on oma tahk oma kärpimisega; tahkis kirjutatakse ühe suletud kestana, iga serv jagatuna oma kahe tahu vahel, nagu teised CAD-programmid eeldavad (olekurida ütleb, mitu tahkist sel viisil välja läks). IGES-is on sama tahkis üks manifold-tahkis B-rep (entiteet 186 suletud kesta 514 kohal, tahud 510, silmused 508, üks servanimekiri 504 ja üks tippude nimekiri 502); tahkis, mille tahud ei paaru serva kaupa, kirjutatakse eraldi tahkudena ja rida ütleb seda. **Import…** loeb sellise tahkise tagasi tahkisena nii STEP-ist kui IGES-ist. See loeb selliselt kirjutatud kõverad ja pinnad ning `.ccnurbs` pinnakomplekte; teiste programmide STEP-tahkised avatakse failist Fail › Import võrkudena.

## Pinnad skaneeringust (pöördprojekteerimine)

Vali mudelis skannitud võrk (kui midagi pole valitud, on kõik näidatud), ava **Pinnad** ja grupis **Skaneering** vali **Sobita pinnad skaneeringuga**. Tööriist otsib **tasapindu**, **silindreid**, **kuule** ja **koonuseid** (täpsed pinnad, millest töödeldud detail koosneb; iga rida näitab leitud raadiust või poolnurka), leiab **ümardusi** (ümardatud servi ja nurki: väike silinder või kera, mis jookseb puutuvalt kahte või enamat tahku, näidatud oma raadiuse ja tahkudega, mida see ühendab), **äärisümardusi** (toru: ümardatud serv, kus tasane tahk kohtub silindri või koonusega, näidatud oma raadiuse ja rõnga raadiusega) ning **muutuvaid ümardusi** (ümardatud serv, mille raadius muutub mööda seda, näidatud raadiusega igas otsas); sobitab **ühe vabakujulise lapi** sujuvale, kergelt kõverale tükile ning lõikab iga tahu sellesse skaneeringu osa kontuurini, kust see tuli, nii et augud ja nurgad säilivad. Valikud: **tolerants** (kui kaugel mm-des võib skaneeringu punkt olla tasapinnast või silindrist ja ikka sellele kuuluda, ning vabakujulise lapi siht), **väikseim tükk** (osa pindalast) ja **enim tahke**. Sama skaneering ja samad valikud annavad alati samad tahud.

Tulemus on tabel, üks rida tahu kohta: selle liik, mitu kolmnurka sellest tuli ja viga, **mõõdetud skaneeringust tahuni** (RMS, suurim ja tolerantsi piires olevate punktide osa). Mõõdetud punktid on skaneeringu tipud ja iga kolmnurga keskpunkt. Viga ei mõõdeta vastupidi (tahk skaneeringuni), nii et tahk, mis ulatub skaneeringust kaugemale, ei paista. Tabeli all olev märkus ütleb ka, kui suur osa pindalast oli sobitamiseks liiga väike. Vaates värvitakse skaneeringu punktid nende **kõrvalekallekaardi** järgi: sinine tahul, roheline poolel teel tolerantsini, punane tolerantsil või üle selle (linnuke **Näita kõrvalekallekaarti** peidab selle). Tükid, mis voldivad end ise kokku (näiteks suletud toru, mis sobitati vabakujuliste lappidega), loetletakse sobimatutena ning neid ei sunnita ühte pinda.

**Õmble pinnad tahkiseks** õmbleb iga näidatud pinna, mis pole veel tahkises, üheks suletud tahkiseks. Skaneeringu tahud puutuvad kokku ainult skaneeringu enda vea piires, seega proovib see väikseimat ühenduskaugust, mis sulgub (kunagi mitte rohkem kui sinu seatud **õmblemiskaugus**), ja keeldub sõnadega, kui tahud ei sulgu. See ei kata kunagi lõhet. Kääridega ümardatud servadega kast õmmeldakse, kui selle ümardused leiti eraldi tahkudena; sulgunud ühenduskaugus on tulemuses. Tahkis töötab seejärel Ühenda, Lahuta, Lõikumise ja **Lisa mudelisse** abil.

Mida see ei tee: **äärisümardust** (toru) otsitakse ainult juba leitud silindri või koonuse telje ümber ning **muutuvat ümardust** ainult üsna sirgel servas (selle lõigud lõigatakse ühe suuna suhtes ristiga); mujal tulevad need vabakujuliste lappidena, kui piisavalt sujuvad, ja jäetakse muidu välja; kuulid, koonused ja ümardused leitakse juhusliku proovivõtuga, nii et väga väike (mõne kolmnurga suurune) võib jääda märkamata; kõrvalekallekaart näitab kaugust skaneeringust tahkudeni, mitte vastupidi; väga suured skaneeringud (üle 300 000 kolmnurga) keeldutakse siin. Täispöördega silindri tahud lõigatakse aukude ümber, õmblus pannakse sinna, kus auke pole. Kontrolli iga tahku skaneeringu vastu enne, kui sellele toetud.

## Pole veel valmis

Servade ümardamine, mis kohtuvad nurgas kõverate tahkude vahel või erinevate raadiustega (tipusulandus), ümardus tahkude vahel, mis üksteist ei puuduta, sisemine ümardus, mis lõpeb kaldus või kõveral tahul, ning Booleanid ja ümardused, mis arvutatakse pindadel ilma kolmnurkadeta (siin töötab tahkismootor tolerantsi piires olevate kolmnurkadega ja iga punkt pannakse siis tagasi täpsetele pindadele).
