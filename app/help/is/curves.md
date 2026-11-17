---
title: Ferilhlutir
summary: Teiknaðu Bézier-, NURBS- og beinstrikaða ferla, gefðu þeim þykkt, breidd eða oddmjókkun, fylltu flata ferla, settu texta sem feril og breyttu þeim í möskva.
keywords: ferill, ferlar, bezier, nurbs, spline, slóð, rör, pípa, kapall, reipi, skáskurður, þrýsta út, mjókkun, halli, radíus, fylling, snið, texti, stafir, merki, ferill í möskva
from: 602bf077
---

**Ferilhlutur** er ferill sem býr til lögun: rör meðfram honum (skáskurður), band (þrýsta út), mjókkandi horn (mjókkun), eða — þegar hann er flatur og lokaður — fyllt plata eða stafir. Lögunin fylgir ferlinum: færðu punkt og rörið færist með. Þegar lögunin er rétt skaltu breyta henni í möskva.

## Bæta við ferli

Veldu {{ui:Ferill}} í vinnusvæðalistanum og ýttu á {{ui:Bæta við}}:

| Tegund | Hvað það er |
| --- | --- |
| Bézier-ferill, Bézier-hringur | Fer í gegnum punkta sína; hver punktur hefur tvö handföng sem stilla stefnu ferilsins |
| NURBS-ferill, NURBS-hringur, Slóð | Slétt, dregið í átt að punktum sínum (byrjar og endar á endapunktunum); hver punktur hefur vægi |
| Texti | Textinn þinn sem flatar, fylltar stafaútlínur |

Nýr ferill fær þunnt rör svo hægt sé að sjá hann og velja; stilltu dýpt skáskurðar á 0 fyrir bera ferilinn.

Þú getur líka byrjað frá einhverju sem þú hefur teiknað: veldu boga, hring, marghyrning eða teiknaðan feril í Líkans-vinnusvæðinu og ýttu á {{ui:Búa til ferilhlut}} í Upplýsingum um eind. Teiknuðu línurnar haldast.

## Breyta punktum

Tvísmelltu á ferilhlut (eða veldu hann og veldu {{ui:Ferill}}) til að breyta honum.

- Smelltu á punkt eða handfang (Shift bætir við eða tekur burt); dragðu það til að færa. Dragðu á tómt svæði til að velja með kassa.
- {{ui:Lengja}} ({{key:E}}, eða {{key:Ctrl}}+smellur) bætir punkti við á eftir völdum enda, við bendilinn.
- {{ui:Skipta upp}} ({{key:W}}) setur punkt milli hvers pars valinna nágranna; Bézier heldur lögun sinni.
- {{ui:Færa}}, {{ui:Snúa}} og {{ui:Mælikvarði}} færa valda punkta með bendlinum (ritlar {{key:G}} {{key:R}} {{key:S}}, push/pull-lyklar {{key:M}} {{key:Q}} {{key:S}}); smelltu til að halda, {{key:Esc}} til að hætta við.
- {{ui:Loka}} ({{key:C}}) lokar opnum ferli eða opnar lokuðum; {{ui:Snúa við}} ({{key:Shift+R}}) keyrir hann hina leiðina.
- Bézier-handföng: {{ui:Slétta}} ({{key:V}}) setur þau fyrir sléttan feril, {{ui:Horn}} ({{key:Shift+V}}) beinir þeim að nágrönnunum, {{ui:Frjálst}} ({{key:Alt+V}}) skilur þau eftir þar sem þú settir þau. Að draga handfang gerir það frjálst.
- {{ui:Bézier}}, {{ui:NURBS}} og {{ui:Beinar}} breyta gerð valinna ferla og halda punktunum.

Hver breyting er eitt skref í afturköllun.

## Lögun

Stillingarnar eru í spjaldinu (og í Upplýsingum um eind í Líkans-vinnusvæðinu):

- **Lögun:** þrívíddarferlar fara hvert sem er; flatur ferill helst í sínu plani og má fylla.
- **Fylla lokaða ferla** (flatt): útlínurnar verða að plötu; útlína inni í annarri er gat, svo stafir halda götunum sínum.
- **Þrýsta út:** hálf breidd bandsins (opnir eða þrívíddarferlar), eða hálf þykkt plötunnar (fyllt).
- **Dýpt skáskurðar** og **ávali:** kringlótt rör meðfram ferlinum (með útþrýstingi: ávalt band); á fylltri lögun, ávöl brún.
- **Loka endunum:** lok á opnu röri.
- **Mjókkun eftir honum:** skalar jafnt eftir hverjum ferli, til dæmis `1, 0.2` fyrir horn, `0, 1, 0` fyrir snældu.
- **Sléttleiki** og, fyrir NURBS, **stig**: hversu fínlega hann er teiknaður og hversu sléttur (2 beinn … 6 sléttastur).
- Með völdum punktum: **radíus** (þykkt rörsins þar, sinnum skáskurðinum), **halli** (snýr bandinu um ferilinn) og, fyrir NURBS, **vægi**.

Breytar virka ofan á ferilhlut eins og á möskva: Fylki eftir honum, Spegill, Subdivision-yfirborð. Sjá [Breytar á möskva](topic:modifiers).

## Breyta í möskva

{{ui:Í möskva}} (í Ferils-vinnusvæðinu eða í Upplýsingum um eind, {{ui:Ferill í möskva}}) gerir ferilhlutinn að því möskvaformi sem hann sýnir núna; breytar hans haldast ofan á. Síðan breytirðu honum í Möskva-vinnusvæðinu. Afturköllun snýr honum aftur.

Sjá einnig [Möskva](topic:meshes) og [Breyta möskva](topic:mesh-edit).
