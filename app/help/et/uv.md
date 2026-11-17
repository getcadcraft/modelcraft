---
title: Paiguta võrgu UV-d
summary: Märgi õmblused, lahuta, projekteeri ja paki võrgu tekstuurikoordinaadid UV-tööruumis ning kontrolli neid kontrollruudustiku ja venitusvärvidega.
keywords: uv, uv-d, lahuta, lahtirullimine, õmblus, õmblused, tekstuur, tekstuurikoordinaadid, atlas, pakkimine, saar, saared, kontrollruudustik, venitus, moonutus, kasti projektsioon, silindri projektsioon, sfääri projektsioon, konformne, nurgapõhine, lscm, abf
from: 00028f20
---

Tekstuur on tasane pilt; võrk ei ole tasane. Selle **UV-d** ütlevad, kus iga tahu iga nurk asub pildil. UV-tööruum need loob: lõikad võrgu **õmbluste** kohalt lahti, lased tükid tasaseks (**lahuta**) ja sobitad need ruutu (**paki**).

## Ava see

Vali võrk ja vali tööruumi loendist {{ui:UV}}. Grupp või komponent muutub enne võrguks, nagu Võrgu tööruumis. 3D-vaade liigub vasakule poolele; paremal olev **UV-redaktor** näitab võrgu tahke paigutatuna tekstuuriruudule. Valimine toimib nagu Võrgu tööruumis ja mida valid ühes vaates, on valitud ka teises.

## Märgi õmblused

Õmblused on kohad, kus võrku võib lahti lõigata; need on mõlemas vaates punased.

- Vali servad ({{ui:Serv}} või {{key:2}}) ja vajuta {{ui:Märgi õmblus}} ({{key:Ctrl+E}}). {{ui:Eemalda õmblus}} ({{key:Ctrl+Shift+E}}) eemaldab need.
- {{ui:Õmblused teravatel servadel}} märgib iga terava serva ja iga serva, kus tahud kohtuvad rohkem kui 60° nurga all: kast laguneb kuueks küljeks.
- {{ui:Õmblused UV-de järgi}} märgib õmblused kohtadesse, kus UV-d juba katkevad, näiteks pärast projektsiooni.

Suletud tükk peab tasaseks lamamiseks saama õmblusi: pall vajab vähemalt ühte lõiget, toru lõiget piki pikkust.

## Lahuta

Vali tahud, mida paigutada (või ühtegi, kogu võrgu jaoks), ja vajuta {{ui:Lahuta}} ({{key:U}}). Iga õmbluste vahel olev tükk lamatakse tasaseks, säilitades nurgad nii täpsena kui võimalik (nurgapõhine lamendamine), seejärel pakitakse tükid ruutu. {{ui:Konformne}} lahutab selle asemel vähimruutude konformsete kaartidega: kiirem, tugevalt kumerate tükkide puhul veidi vähem täpne. Kuju, mis saab tehtud tasasest lehest, näiteks üks kord lõigatud silindri külg, lahtirullub ilma venituseta.

## Projekteeri

Lihtsate kujundite puhul piisab sageli projektsioonist:

| Projektsioon | Mida see teeb |
| --- | --- |
| {{ui:Box}} | Iga tahk kasti sellele küljele, mille poole ta enim vaatab |
| {{ui:Cylinder}} | Ümber sinise telje: laiuti on nurk ümber, üles on kõrgus |
| {{ui:Sphere}} | Keskpunktist: laiuti on nurk ümber, üles on laiuskraad |
| {{ui:From view}} | Nii nagu tahud on praegu 3D-vaates nähtavad |

Silindri või sfääri liitekohta ulatuv tahk jääb üheks tükiks, seega võivad selle UV-d ulatuda veidi ruudu parempoolsest servast üle; seal tekstuur kordub.

## Korrasta

- {{ui:Paki}} sobitab tükid (saared) ruutu ühe tekseli suurusega, igaüks pööratud nii, et võtaks kõige vähem ruumi. Paneel määrab nende vahele jääva ruumi.
- {{ui:Pööra 90°}} ja {{ui:Peegelda}} pööravad või peegeldavad valitud tahkude UV-sid.
- UV-redaktoris lohista valitud tahk, et valiku UV-sid liigutada, või osuta redaktorile, vajuta {{key:R}} või {{key:S}} ja liiguta, et neid pöörata või skaleerida (klõps kinnitab selle, {{key:Esc}} tühistab). {{key:G}} liigutab ilma lohistamata. Topeltklõps tahul (või {{key:L}}) valib kogu selle saare. Ratas suumib; lohista keskmise või parema nupuga, et nihutada; {{key:F}} sobitab ruudu uuesti.

Iga muudatus on üks tagasivõtmise samm.

## Kontrolli neid

- {{ui:Kontrollruudustik}} näitab võrgul selle UV-des märgistatud ruudustikku: ühtlased, ruudukujulised ruudud tähendavad, et tekstuur lamab ühtlaselt; sildid näitavad, mis suunas see kulgeb.
- {{ui:Venitus}} värvib iga tahu selle järgi, kui palju selle UV-d seda venitavad: sinine ei venita üldse, roheline vahepeal, punane palju. Paneel valib, kas see mõõdab **nurkade kõverdumist** või **suuruse muutumist**, ja näitab keskmist.

Vaata ka [Võrgu muutmine](topic:mesh-edit), [Võrgud](topic:meshes) ja [Võrgu modifikaatorid](topic:modifiers).
