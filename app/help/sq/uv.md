---
title: Vendos UV-të e një rrjete
summary: Shëno qepjet, shpalos, projekto dhe mblidh koordinatat e teksturës së një rrjete në punëtorinë UV, dhe kontrollo me një shabllon kuadratesh dhe ngjyrat e shtrirjes.
keywords: uv, uv-të, shpalos, shpalosje, qepje, teksturë, koordinata teksture, atlas, mblidh, mbledhje, ishull, ishuj, kuadrate, shtrirje, shtrembërim, projeksion kutie, projeksion cilindri, projeksion sfere, konformale, bazuar në kënd, lscm, abf
from: 00028f20
---

Një teksturë është një foto e sheshtë; një rrjetë nuk është e sheshtë. **UV-të** e saj tregojnë ku ndodhet secili cep i secilës sipërfaqe mbi foto. Punëtoria UV i krijon: e pret rrjetën përgjatë **qepjeve**, shtrin copat e sheshtë (**shpalos**), dhe i vendos brenda katrorit (**mblidh**).

## Hape

Zgjidh një rrjetë dhe zgjidh {{ui:UV}} në listën {{ui:Hapësirë pune}}. Një grup ose komponent bëhet fillimisht rrjetë, ashtu si në punëtorinë e rrjetës. Pamja 3D lëviz në gjysmën e majtë; **redaktori UV** në të djathtë tregon sipërfaqet e rrjetës të shtrira mbi katrorin e teksturës. Përzgjedhja funksionon si në punëtorinë e rrjetës, dhe çfarë përzgjedh në njërën pamje është e përzgjedhur edhe në tjetrën.

## Shëno qepjet

Qepjet janë vendet ku rrjeta mund të priten; shfaqen të kuqe në të dyja pamjet.

- Zgjidh skajet ({{ui:Skaj}}, ose {{key:2}}) dhe shtyp {{ui:Shëno qepjen}} ({{key:Ctrl+E}}). {{ui:Pastro qepjen}} ({{key:Ctrl+Shift+E}}) i heq ato.
- {{ui:Qepje te të prehtat}} shëno çdo skaj të mprehtë dhe çdo skaj ku sipërfaqet takohen me më shumë se 60°: një kuti ndahet në gjashtë anët e saj.
- {{ui:Qepje nga UV-të}} shëno qepje aty ku UV-të tashmë çahen, për shembull pas një projeksioni.

Një copë e mbyllur ka nevojë për qepje për t'u shtrirë e sheshtë: një top ka nevojë për të paktën një prerje, një tub për një prerje përgjatë gjatësisë së tij.

## Shpalos

Zgjidh sipërfaqet që do të shtrihen (ose asnjë, për të gjithë rrjetën) dhe shtyp {{ui:Shpalos}} ({{key:U}}). Çdo copë midis qepjeve shtrihet e sheshtë, duke ruajtur këndet e saj sa më saktë (shtrirje e bazuar në kënd), pastaj copat mblidhen brenda katrorit. {{ui:Konformale}} shpalos me hartat konforme të katrorëve më të vegjël: më shpejt, pak më pak e saktë te copat shumë të lakuara. Një formë që mund të bëhet nga një fletë e sheshtë, si ana e një cilindri e prerë një herë, shpalosët pa asnjë shtrembërim fare.

## Projekto

Për format e thjeshta një projeksion shpesh mjafton:

| Projeksioni | Çfarë bën |
| --- | --- |
| {{ui:Kuti}} | Çdo sipërfaqe në anën e kutisë me të cilën përballet më shumë |
| {{ui:Cilindër}} | Rreth boshtit blu: horizontalisht është këndi rreth, vertikalisht lartësia |
| {{ui:Sferë}} | Nga qendra: horizontalisht është këndi rreth, vertikalisht gjerësia gjeografike |
| {{ui:Nga pamja}} | Ashtu si duken sipërfaqet tani në pamjen 3D |

Një sipërfaqe te kalimi i cilindrit ose i sferës mbahet në një copë të vetme, kështu që UV-të e saj mund të dalin pak përtej skajit të djathtë të katrorit; teksturat përsëriten aty.

## Rendit

- {{ui:Mblidh}} i vendos copat (ishujt) brenda katrorit me një madhësi texeli, secila e kthyer për të zënë sa më pak vend. Paneli cakton hapësirën që mbetet midis tyre.
- {{ui:Rrotullo 90°}} dhe {{ui:Pasqyro}} kthejnë ose pasqyrojnë UV-të e sipërfaqeve të përzgjedhura.
- Në redaktorin UV, tërhiq një sipërfaqe të përzgjedhur për të zhvendosur UV-të e përzgjedhjes, ose drejto treguesin mbi redaktor dhe shtyp {{key:R}} ose {{key:S}}, pastaj lëviz për t'i kthyer ose zmadhuar (një klikim e mban, {{key:Esc}} anulon). {{key:G}} zhvendos pa tërhequr. Kliko dy herë mbi një sipërfaqe (ose {{key:L}}) për të zgjedhur gjithë ishullin e saj. Rrota e miut zmadhon; tërhiq me butonin e mesit ose të djathtë për të lëvizur; {{key:F}} e përshtat përsëri katrorin.

Çdo ndryshim është një hap zhbërjeje.

## Kontrollo

- {{ui:Kuadrate}} shfaq një shabllon kuadratesh të etiketuar mbi rrjetë sipas UV-ve të saj: kuadrate të barabarta dhe katrore tregojnë se tekstura shtrihet në mënyrë të njëtrajtshme; etiketat tregojnë drejtimin.
- {{ui:Shtrirje}} ngjyros çdo sipërfaqe sipas sa e shtrembërojnë UV-të e saj: blu asnjë, përmes jeshiles, deri te e kuqja shumë. Paneli zgjedh nëse mat **këndet e përkulura** apo **madhësinë e ndryshuar**, dhe tregon mesataren.

Shih edhe [Redakto një rrjetë](topic:mesh-edit), [Rrjetat](topic:meshes) dhe [Modifikuesit në një rrjetë](topic:modifiers).
