---
title: Stili un saules ēnas
summary: Parādiet modeli ēnotu, kā paslēptās līnijas, kā karkasu vai caurspīdīgu, un pētiet ēnas, ko tas met jebkurā datumā, laikā un vietā.
keywords: prezentācijas skats, tīrs skats, paslēpt palīglīnijas, paslēpt asis, stils, ēnots, paslēptās līnijas, karkass, rentgens, malas, ēnas, saule, saules izpēte, datums, laiks, ģeogrāfiskais platums, ģeogrāfiskais garums, laika josla, ziemeļi
from: 09c95329
---

Panelis {{ui:Stils}} pa labi maina to, kā modelis tiek zīmēts. Nekas tajā nemaina pašu modeli, un tas nav iekļauts atsaukšanā. Katra [aina](topic:scenes) atceras savu stilu, un fails atceras stilu, kāds bija, kad to saglabājāt.

## Virsmas

Izvēlieties vienu sarakstā {{ui:Virsmas}}:

| Stils | Izskatās kā |
|---|---|
| {{ui:Ēnots}} | Cietas virsmas, mīksti apgaismotas. Virsmas, kas redzamas no aizmugures, ir zilgani pelēkas. Importētās krāsas ir redzamas. |
| {{ui:Paslēptās līnijas}} | Virsmas fona krāsā ar malām tumšā krāsā: tīrs līniju zīmējums bez paslēptajām līnijām. Balts uz {{ui:Papīrs}}, tumšs uz {{ui:Modelis}}. |
| {{ui:Karkass}} | Tikai malas. Virsmas netiek zīmētas, bet tās joprojām skaitās, kad noklikšķiniet un piesaistāties: caur tām nevar atlasīt. |
| {{ui:Rentgens}} | Caurspīdīgas virsmas, lai redzētu, kas ir aiz vai iekšā. Kā karkasā, klikšķi un piesaistes joprojām apstājas pie tuvākās virsmas. |

{{ui:Rādīt malas}} ieslēdz vai izslēdz malas visos stilos, izņemot {{ui:Karkass}}. Ja tās ir izslēgtas, {{ui:Paslēptās līnijas}} rāda gandrīz neko, jo tās virsmas sakrīt ar fonu. Mīkstās malas, piemēram, izvilkta riņķa sāni, nekad netiek zīmētas.

## Ieslēdziet saules ēnas

1. Atzīmējiet {{ui:Saules ēnas}}. Saules iestatījumi zem tā kļūst aktīvi, un modelis met ēnas uz sevi un uz zemes.
2. Iestatiet vietu:
   - {{ui:Ģeogrāfiskais platums}}: ziemeļi ir pozitīvi, dienvidi negatīvi (Ņujorka ir aptuveni 40.7, Sidneja aptuveni -33.9).
   - {{ui:Ģeogrāfiskais garums}}: austrumi ir pozitīvi, rietumi negatīvi (Ņujorka ir aptuveni -74.0).
   - {{ui:UTC nobīde}}: vietas nobīde no UTC stundās, piemēram, `-5` Ņujorkai ziemā. ModelCraft nepiemēro vasaras laiku; lietojiet `-4` Ņujorkai vasarā.
3. Iestatiet {{ui:Datums}} (mēnesis un diena) un velciet {{ui:Laiks}} slīdni. Laiks mainās 15 minūšu soļos un parādās blakus slīdnim, piemēram, "3:00 pm".

Līnija zem iestatījumiem norāda, kur atrodas saule, piemēram, "Saule 52° augstumā, 250° no ziemeļiem. Ziemeļi ir zaļā ass." Naktī tur rakstīts "Šajā laikā saule ir zem horizonta."

Jauns modelis sākas ar sauli 21. jūnijā plkst. 3:00 pm, platumu 40, garumu -105 un UTC nobīdi -7.

## Pagrieziet modeli uz ziemeļiem

ModelCraft ziemeļi vienmēr ir **zaļā ass**. Lai pētītu reālu vietu, pagrieziet modeli tā, lai tā ziemeļu puse būtu vērsta zaļās ass virzienā: atlasiet visu ({{key:Mod+A}}), nospiediet {{key:Q}}, noklikšķiniet centru uz zemes un pagrieziet to par vietas leņķi no ziemeļiem (skatiet [Pagriezt un mērogot](topic:rotate-scale)).

## Saules izpēte

1. Iestatiet vietu un datumu.
2. Pievienojiet ainu ({{ui:Pievienot ainu}} sadaļā {{ui:Ainas}}).
3. Pārvietojiet laika slīdni un pēc tam pievienojiet vēl vienu ainu. Atkārtojiet katrai stundai, kuru vēlaties.
4. Noklikšķiniet uz {{ui:Atskaņot}}, lai pārlaistu tās. Skatiet [Saglabāt skatus kā ainas](topic:scenes).

## Svarīgi zināt

- Ēnas var izskatīties robainas ļoti lielam modelim, jo viena ēnu karte aptver visu modeli.
- Ēnas netiek zīmētas stilā {{ui:Karkass}}.
- Saules pozīcija seko NOAA saules aprēķinam un ir precīza līdz daļai no grāda, kas pietiek apjomu izpētei. Atmosfēras refrakcija netiek ņemta vērā, tāpēc ļoti zemi saules leņķi saullēktā un saulrietā var būt nedaudz neprecīzi.

## Prezentācijas skats

{{ui:Skati}} › {{ui:Prezentācijas skats}} (vai {{key:Shift+P}}) rāda tikai modeli: asis, palīglīnijas un palīgpunktus, griezuma plakņu kontūras (griezums paliek), lampu atzīmes, atvērtas grupas kasti, piesaistes atzīmes un padomus, un atlases izcēlumu. Tas viss tiek noņemts. Izmantojiet to, lai skaidri apskatītu modeli vai pirms ekrānuzņēmuma. Rīki joprojām darbojas un joprojām piesaistās; vienkārši atzīmes neredzat. Nospiediet {{key:Shift+P}} vēlreiz, lai tās atgrieztu. Izmēri paliek, jo tie ir rasējuma daļa. Kamēr rediģējat grupas iekšpusi, pārējais modelis vairs nebāl: tas rādās tāds, kāds ir, ieskaitot tekstūras.
