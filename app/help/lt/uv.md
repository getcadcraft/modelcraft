---
title: Išdėstyti tinklelio UV
summary: Pažymėkite siūles, išskleiskite, projektuokite ir sudėkite tinklelio tekstūros koordinates UV darbo srityje ir patikrinkite jas šachmatų raštu bei tempimo spalvomis.
keywords: uv, uvs, išskleidimas, išskleisti, siūlė, siūlės, tekstūra, tekstūros koordinatės, atlasas, sudėti, sudėjimas, sala, salos, šachmatai, tempimas, iškraipymas, dėžės projekcija, cilindro projekcija, sferos projekcija, konforminis, kampais pagrįstas, lscm, abf
from: 00028f20
---

Tekstūra yra plokščias paveikslėlis, o tinklelis – ne plokščias. Jo **UV** nurodo, kur ant paveikslėlio yra kiekvienas kiekvieno paviršiaus kampas. UV darbo sritis juos sukuria: tinklelį perpjaunate išilgai **siūlių**, dalis išklojate plokščiai (**išskleisti**) ir sudedate į kvadratą (**sudėti**).

## Atidarymas

Pasirinkite tinklelį ir Darbo sričių sąraše pasirinkite {{ui:UV}}. Grupė ar komponentas pirmiausia tampa tinkleliu, kaip ir tinklelio darbo srityje. 3D vaizdas persikelia į kairę pusę; dešinėje esantis **UV redaktorius** rodo tinklelio paviršius, išdėstytus ant tekstūros kvadrato. Pasirinkimas veikia kaip tinklelio darbo srityje, o tai, ką pasirinkote viename vaizde, pasirenkama ir kitame.

## Siūlių žymėjimas

Siūlės – vietos, kur tinklelį galima perpjauti; jos abiejuose vaizduose rodomos raudonai.

- Pasirinkite kraštines ({{ui:Kraštinė}} arba {{key:2}}) ir paspauskite {{ui:Pažymėti siūlę}} ({{key:Ctrl+E}}). {{ui:Pašalinti siūlę}} ({{key:Ctrl+Shift+E}}) jas nuima.
- {{ui:Siūlės aštriose vietose}} pažymi kiekvieną aštrią kraštinę ir kiekvieną kraštinę, kur paviršiai susiduria didesniu nei 60° kampu: dėžė suskyla į šešias puses.
- {{ui:Siūlės iš UV}} pažymi siūles ten, kur UV jau nutrūksta, pavyzdžiui, po projekcijos.

Uždaryta dalis, kad gulėtų plokščiai, turi turėti siūlių: rutulys reikalauja bent vieno pjūvio, vamzdis – pjūvio išilgai jo ilgio.

## Išskleidimas

Pasirinkite paviršius, kuriuos norite išdėstyti (arba nieko – visam tinkleliui), ir paspauskite {{ui:Išskleisti}} ({{key:U}}). Kiekviena dalis tarp siūlių išklojama plokščiai, išlaikant kampus kiek galima tiksliau (plokščiavimas pagal kampus), tada dalys sudedamos į kvadratą. {{ui:Konformiškai}} vietoj to išskleidžia mažiausių kvadratų konforminiais atvaizdavimais: greičiau, bet šiek tiek mažiau tiksliai stipriai išlenktoms dalims. Forma, kurią galima pagaminti iš plokščios lakšto, pavyzdžiui, cilindro šoną, perpjautą vieną kartą, išsiskleidžia visiškai be tempimo.

## Projekcija

Paprastoms formoms dažnai pakanka projekcijos:

| Projekcija | Ką daro |
| --- | --- |
| {{ui:Dėžė}} | Kiekvienas paviršius – ant dėžės pusės, į kurią jis labiausiai nukreiptas |
| {{ui:Cilindras}} | Apie mėlyną ašį: skersai – kampas apie ašį, aukštyn – aukštis |
| {{ui:Sfera}} | Nuo centro: skersai – kampas apie ašį, aukštyn – platuma |
| {{ui:Iš vaizdo}} | Taip, kaip paviršiai dabar matomi 3D vaizde |

Paviršius, einantis per cilindro ar sferos sujungimą, laikomas vienoje dalyje, todėl jo UV gali šiek tiek išeiti už kvadrato dešiniojo krašto; tekstūros ten kartojasi.

## Išdėstymas

- {{ui:Sudėti}} sudeda dalis (salas) į kvadratą vienodu tekselio dydžiu, kiekviena pasukta taip, kad užimtų mažiausiai vietos. Skydelyje nustatomas tarpas tarp jų.
- {{ui:Pasukti 90°}} ir {{ui:Veidrodis}} pasuka arba atspindi pasirinktų paviršių UV.
- UV redaktoriuje vilkite pasirinktą paviršių, kad perkeltumėte pasirinkimo UV, arba nukreipkite žymeklį į redaktorių, paspauskite {{key:R}} ar {{key:S}}, tada judinkite, kad pasuktumėte ar keistumėte mastelį (spustelėjimas tai išsaugo, {{key:Esc}} atšaukia). {{key:G}} perkelia be vilkimo. Dukart spustelėkite paviršių (arba {{key:L}}), kad pasirinktumėte visą jo salą. Ratukas keičia mastelį; vilkite vidurine ar dešine pele, kad slinktumėte; {{key:F}} vėl pritaikys kvadratą.

Kiekvienas pakeitimas – vienas anuliavimo žingsnis.

## Patikrinimas

- {{ui:Šachmatai}} rodo pažymėtą šachmatų raštą ant tinklelio jo UV: vienodi, kvadratiniai langeliai reiškia, kad tekstūra guli tolygiai; žymos rodo, kuria kryptimi ji eina.
- {{ui:Tempimas}} nuspalvina kiekvieną paviršių pagal tai, kiek jį tempia jo UV: mėlyna – nieko, per žalią iki raudonos – daug. Skydelyje pasirenkama, ar tai matuoja **sulenktus kampus** ar **pakeistą dydį**, ir rodomas vidurkis.

Taip pat žr. [Redaguoti tinklelį](topic:mesh-edit), [Tinkleliai](topic:meshes) ir [Modifikatoriai tinklelyje](topic:modifiers).
