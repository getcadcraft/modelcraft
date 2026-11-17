---
title: Joonista tahke joonte, ristkülikute, ringide ja kaartega
summary: Tee lameda tahke maapinnale või teistele tahkudele, jaga neid joontega ning joonista ringe ja hulknurki soovitud külgede arvuga.
keywords: joonista, joon, ristkülik, ring, hulknurk, nihe, sisemine nihe, raam, ääris, kaar, kõver, splain, sujuv, kaabel, tee, ümarus, raadius, tahk, korrusplaan, jalajälg, jaga, küljed, lõigud, kontuur, pliiats
from: b6d7b7dd
---

Kõik ModelCraftis algab lameda **tahuna**: pinnana, mida piiravad servad. Tahu saab otse joonistada tööriistadega {{ui:Ristkülik}}, {{ui:Ring}} või {{ui:Hulknurk}}, või joonistada ühe serva korraga tööriistaga {{ui:Joon}}. Tahud on need, millest [Lükka/tõmba](topic:push-pull) teeb tahked kehad.

## Ristküliku joonistamine

1. Vajuta {{key:R}}.
2. Klõpsa esimest nurka: maapinnal või mudeli mis tahes tahul.
3. Liiguta kursorit. Ristkülik jääb maapinnale (või tahule, millelt alustasid) ja väärtuskast ({{ui:Mõõdud}}) näitab selle laiust ja sügavust. Vihje ütleb „Ruut“, kui küljed on võrdsed.

   Teisele tasandile joonistamiseks osuta sellele: tahk, mis läbib esimest nurka, asetab ristküliku sellele tahule, ja tasandilt väljas oleva punkti haakumine (lõpp-punkt, serv, sinine telg) püstitab ristküliku mõlema nurga kaudu. Haakumine tagasi esimesele tasandile paneb selle uuesti lamama. Ühe tasandi hoidmiseks vajuta nooleklahvi: {{key:Up}} hoiab ristküliku tasasena (sinine tasand), {{key:Right}} punasel tasandil, {{key:Left}} rohelisel tasandil. Lukustuse eemaldamiseks vajuta sama klahvi uuesti.
4. Klõpsa vastasnurka või sisesta kaks mõõtu komaga eraldatult ja vajuta {{key:Enter}}: `4m,3m`, `4000,3000` millimeetrites mudelis või `12',10'6"` jalgades ja tollides.

   Tahk ilmub koos nelja ümbritseva servaga.

Sisestatud mõõdud lähevad suunda, kuhu osutasid: kui kursor on sisestamise ajal esimesest nurgast vasakul, kasvab ristkülik vasakule.

:::warning
Koma eraldab kaks mõõtu, seega ei saa seda kümnendkohana kasutada. Kirjuta `2.5m,3m`, mitte kunagi `2,5m`.
:::

## Ringi või hulknurga joonistamine

1. Vajuta {{key:C}} ringi või {{key:N}} hulknurga jaoks.
2. Külgede arvu muutmiseks sisesta see enne klõpsamist: `12s` (või ainult `12`) ja {{key:Enter}}. Ring algab 24 küljega, hulknurk 6-ga. Vihje näitab praegust arvu ja ModelCraft hoiab seda järgmise ringi jaoks, kuni muudad selle või vahetad tööriista.
3. Klõpsa keskpunkti maapinnal või tahul. Tahu keskele paigutamiseks osuta tahu keskele („Tahu keskpunkt“) või ühe selle serva keskele („Keskpunkt“), kusjuures kursor on tahu sees: ring joonistatakse sellele tahule, isegi pika kasti kitsale otsale.
4. Klõpsa raadiuse määramiseks või sisesta see ({{ui:Raadius}} väärtuskastis) ja vajuta {{key:Enter}}.

Ring on hulknurk paljude külgedega. Kui tõmbad ringi tööriistaga Lükka/tõmba üles, pehmendatakse selle küljed, nii et silinder näib ühtlase pinnana.

## Kaare joonistamine

1. Vajuta {{key:A}} ({{ui:Kaar}}).
2. Klõpsa kohta, kus kaar algab, seejärel kohta, kus ta lõpeb (või sisesta nende vaheline pikkus).
3. Liiguta kursorit, et kaar välja painutada, ja klõpsa. Vihje ütleb „Pool ring“, kui kõverus on pool otspunktide vahelisest kaugusest. Või sisesta, kui kaugele keskkoht ulatub: `2` ja {{key:Enter}}.

Kaare joonistamiseks mingi punkti ümber kasuta {{ui:Kaar keskpunktist}}: klõpsa keskpunkti, seejärel kohta, kus kaar algab (või sisesta raadius), ja seejärel kohta, kus ta lõpeb (või sisesta nurk kraadides, näiteks `90`). See haakub 15° sammudega.

Tahul alustatud kaar joonistatakse sellele tahule; muidu asub ta maapinnal või seisab püsti, kui tema kahe otsa kõrgused erinevad. Kaarel on 12 lõiku; joonistamise ajal sisesta `24s`, et neid rohkem saada. Kaared sulgevad tahke nagu jooned: ristküliku nurgast üle läbiv kaar jagab selle.

## Sujuva kõvera joonistamine

{{ui:Kõver}} joonistab sujuva joone, mis läbib iga klõpsatud punkti: kaabli, käsipuu tee või aia serva. See võib maapinnast lahkuda: punktid haakuvad nurkade, servade ja tahkudega kõikjal ning nooleklahvid lukustavad punase, rohelise või sinise nagu tööriistaga {{ui:Joon}}.

1. Klõpsa grupis {{ui:Joonistamine}} nuppu {{ui:Kõver}}.
2. Klõpsa punkte, mida kõver läbib. Sisesta `<0,0,1>` ja {{key:Enter}}, et saada punkt 1 ühiku võrra eelmisest kõrgemal; `[x,y,z]` täpse koha jaoks või pikkus punkti jaoks, mis asub nii kaugel kursori suunas.
3. Vajuta {{key:Enter}} või topeltklõpsa lõpetamiseks. Klõpsa esimest punkti uuesti, et kõver sulgeda. {{key:Backspace}} võtab viimase punkti tagasi.

Kõver valitakse ühe tükina. Muutmiseks vali see ja klõpsa aknas {{ui:Objekti teave}} nuppu {{ui:Muuda punkte}}: punktid kuvatakse ruutudena. Klõpsa ühele neist ja seejärel kohta, kuhu ta läheb (või sisesta `<dx,dy,dz>`). {{key:Esc}} paneb punkti tagasi ja lõpetab muutmise. Suletud lame kõver teeb tahu; kõver, mis piirab tahku, ei ole enam muudetav.

## Nihe: äär tahu sees või väljas

{{ui:Nihe}} kopeerib tahu kontuuri määratud kauguse võrra sissepoole (või väljapoole), raami, ääre, akna aluse või ekraani klaasi jaoks.

1. Vajuta {{key:F}} ja klõpsa tahku või vali esmalt tahk ja vajuta seejärel {{key:F}}.
2. Liiguta kursor tahu sisse sisemise kontuuri jaoks või välja välimise jaoks. Uus kontuur järgneb ja vihje ütleb, kui kaugele.
3. Klõpsa või sisesta kaugus ja vajuta {{key:Enter}}.

Tahk jaguneb kaheks: sisemine tahk ja selle ümber olev raam (või uus rõngas väljaspool). Lükka kumbagi kohe: ekraani puhul joonista kast, lükka see paksusele, nihuta esitahku 30 mm sissepoole ja lükka sisemist tahku natuke sisse klaasi jaoks. Tahu avad nihutatakse samuti ning kaar või ring jääb üheks (väiksemaks või suuremaks) kõveraks.

- **Topeltklõpsa** tahku tööriistaga {{ui:Nihe}}, et nihutada seda uuesti viimase kauguse võrra.
- **Servad:** vali ühes tasandis ühendatud servade ahel (näiteks L-kuju kaks joont), vajuta {{key:F}}, liiguta soovitud poolele ja sisesta kaugus: joonistatakse paralleelne koopia nurkadega kaldlõigetena.
- Kui kaugus on suurem, kui tahk lubab, ütleb ModelCraft seda ega joonista midagi.

## Kaared, ringid ja hulknurgad on kõverad

Klõpsa mis tahes kaare, ringi või hulknurga lõigule ja kogu kõver valitakse. {{ui:Objekti teave}} näitab siis selle raadiust, lõike, nurka (kaared) ja pikkust. Sisesta seal uus raadius, et see mõõtu muuta selle keskpunkti suhtes; tema tasandis joonistatud tahud järgivad. Kui kõvera tahku on lükatud või tõmmatud, jääb tema raadius samaks.

## Joonistamine joontega

1. Vajuta {{key:L}}.
2. Klõpsa kohta, kus joon algab.
3. Klõpsa kohta, kus ta lõpeb, või sisesta pikkus ja vajuta {{key:Enter}}. Sisestatud pikkus läheb suunas, mida kursor näitab.
4. Jätka klõpsamist. Iga klõps alustab järgmist joont eelmise lõpust.
5. Sule kontuur klõpsates uuesti esimest punkti. Kui jooned sulgevad lameda silmuse, täidetakse see tahuga ja tööriist lõpetab ahela. Vajuta {{key:Esc}}, et igal ajal peatada.

Kui joontele lähed lähedale, järgivad need punase, rohelise ja sinise suunda; joon muutub selles värvis ja vihje ütleb „Punasel teljel“. Suuna lukustamise ja punktidele haakumise kohta vaata [Järeldamine ja haakumine](topic:inference).

### Kuhu joon läheb, kui ta ei puuduta midagi

- Tahult alanud joon jääb selle tahu tasandile.
- Maapinnalt või tühjusest alanud joon jääb oma alguspunktiga samale tasemele. Kui vaatad mudelit servapealt, läheb ta selle asemel vaatajat näotavasse vertikaaltasandisse.
- Joone viimiseks täpsesse kohta sisesta punkt: `[x,y,z]` mudeli punkti jaoks või `<dx,dy,dz>` alguspunktist nihke jaoks. Vaata [Sisesta täpsed mõõtmed](topic:value-box).

## Tahu jagamine

Joonista tahule joon ühest servast teise (või servast servani läbi teiste joonte). Tahk jaguneb kaheks tahuks. Kumbki säilitab oma külje ja värvi. Sama toimib ristküliku või ringiga, mis on joonistatud tahule: kuju muutub suuremas tahus omaks tahuks, mis nüüd sisaldab auku.

Nii paigutad ruume korrusplaadile, akna seinale või trepiastme trepile: joonista kontuur tahule ja lükka või tõmba uus tahk.

## Valesti suunatud tahud

Igal tahul on esi- ja tagakülg. Tagakülg on sinakashall. Maapinnal joonistatud tahud on suunatud üles; teisele tahule joonistatud tahud on suunatud samamoodi nagu see tahk.

Kui tahk näitab tagakülge seal, kus ootad esikülge, vali see ja klõpsa aknas {{ui:Objekti teave}} nuppu {{ui:Pööra tahk ümber}}.

## Mida näed joonistamise ajal

- Värviline märgis seal, kuhu kursor haakub, ja selle nimi vihjes vasakus allservas.
- Joone või kuju eelvaade.
- Elav mõõt väärtuskastis. Saad seda igal ajal üle kirjutada.

## Kui kuju ei ole seal, kus oodasid

- Puuteekraanil vaata [Tõrkeotsing](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Kui joon haakus millegi kaugel taga, pööra vaadet veidi: tahu taga peidetud punktid ei haakukse kunagi, kuid tema servale jäävad punktid haakuvad.
- Vajuta {{key:Mod+Z}}, et tagasi võtta viimane kuju; üks tagasivõtmine eemaldab ühe joone või ühe kuju.
