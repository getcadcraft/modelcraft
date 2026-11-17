---
title: Redakto një rrjetë në hapësirën e punës Rrjetë
summary: Përzgjidh kulmet, skajet dhe sipërfaqet e një rrjete, zhvendosi dhe ekstrudo, fut brenda, pjerrëzo, pri, bashko, mbush dhe ura ato, me çdo stil tastesh.
keywords: rrjetë, mënyra e redaktimit, hapësira e punës rrjetë, kulm, kulme, skaj, skaje, sipërfaqe, ekstrudo, fut brenda, pjerrëzo, prerje lakuese, thikë, ndaj në dy, vrulli, bashko, tret, mbush, mbush me rrjetë, urë, ndaj, rrëshqit, redaktim proporcional, rënie, hapësirë pune
from: 92a372dd
---

Hapësira e punës **Rrjetë** redakton një [rrjetë](topic:meshes) pikë për pikë: kulmet, skajet dhe sipërfaqet. Gjeometria shtyj/tërhiq mbetet në hapësirën e punës **Model**.

## Hape

- Zgjidh {{ui:Rrjetë}} te lista {{ui:Hapësirë pune}} në të majtë të shiritit të veglave. Rrjeta e përzgjedhur hapet për redaktim; një grup ose komponent i përzgjedhur shndërrohet fillimisht në rrjetë (një hap zhbërjeje).
- Ose kliko dy herë një rrjetë, ose, me tastet e modelueve, përzgjidhe dhe shtyp {{key:Tab}}.
- Pa asgjë të përzgjedhur, paneli ofron rrjeta për t'u shtuar: plan, rrjetë, kub, rreth, cilindër, kon, sferë, ico sferë dhe torus. Një e re shkon aty ku shikon pamja dhe hapet për redaktim.

{{ui:Kthehu te Model}} (ose lista, {{key:Tab}} me tastet e modelueve, {{key:Esc}} pa asgjë të përzgjedhur me tastet shtyj/tërhiq) kthehet te Model me rrjetën e përzgjedhur. Ndërsa hapësira Rrjetë është e hapur, pjesa tjetër e modelit zbehet dhe veglat e vizatimit të Model-it hiqen mënjanë.

## Përzgjidh

| Bëje | Për |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Përzgjidh kulme, skaje ose sipërfaqe |
| Kliko | Përzgjidh një; {{key:Shift}}+klikim shton ose heq |
| Tërhiq një kuti | Përzgjidh çfarë është brenda dhe e shikueshme; {{key:Shift}} shton, {{key:Ctrl}} heq |
| {{key:Alt}}+klikim mbi një skaj, ose kliko dy herë mbi të | Unaza e vet e skajeve (një unazë sipërfaqesh në mënyrën e sipërfaqeve; i gjithë kufiri te një skaj i hapur) |
| {{key:Ctrl}}+{{key:Alt}}+klikim mbi një skaj | Unaza tërthore e skajeve |
| Trefish klikim | Gjithçka e bashkuar me të |

Grupi {{ui:Përzgjidh}} ka gjithashtu {{ui:Të gjitha}}, {{ui:Të lidhura}}, {{ui:Lak}}, {{ui:Unazë}}, {{ui:Më shumë}} dhe {{ui:Më pak}}.

## Zhvendos, rrotullo, shkallë

{{ui:Zhvendos}}, {{ui:Rrotullo}} dhe {{ui:Shkallë}} nisen nga treguesi: lëviz atë, pastaj kliko ose shtyp {{key:Enter}} për ta vendosur përzgjedhjen, ose {{key:Esc}} për ta anuluar. {{key:X}}, {{key:Y}} ose {{key:Z}} (ose tastet me shigjeta) kyçin një bosht. Shkruaj një distancë, një kënd ose një faktor për një vlerë të saktë — [llogaritjet](topic:value-box#calculations) funksionojnë gjithashtu.

**Redaktimi proporcional** ({{ui:Proporcional}}, ose paneli): kulmet pranë përzgjedhjes ndjekin një zhvendosje, më pak sa më larg janë, deri në rrezen që cakton, me rënien që zgjedh. Ndiz {{ui:Vetëm përgjatë rrjetës}} për të matur përgjatë skajeve dhe jo drejt për drejt.

{{ui:Rrëshqit}} zhvendos një unazë skajesh të përzgjedhur përgjatë skajeve pranë saj.

## Ndrysho formën

| Vegla | Bën |
|---|---|
| {{ui:Nxirr}} | Nxjerr sipërfaqet e përzgjedhura përgjatë normales së tyre, me sipërfaqe të reja anësore (ose krijon sipërfaqe nga skajet e hapura të kufirit). Shkruaj distancën |
| {{ui:Fut brenda}} | Një brez brenda konturit të sipërfaqeve të përzgjedhura; shtyp {{key:I}} sërish për çdo sipërfaqe veç e veç |
| {{ui:Pjerrëzo}} | Pret skajet e përzgjedhura (ose, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, kulmet) me një gjerësi; rrota ose tastet plus dhe minus shtojnë segmente për një skaj të rrumbullakosur |
| {{ui:Prerje lakuese}} | Shëno një skaj: unaza të reja tërthore në unazën e sipërfaqeve katërkëndëshe; rrota cakton sa janë; kliko për të prerë |
| {{ui:Thikë}} | Kliko pika mbi skaje ose qoshe; {{key:Enter}} pret drejt përtej sipërfaqeve ndërmjet tyre, ashtu siç i sheh |
| {{ui:Ndaj në dy}} | Vizato një vijë në ekran: sipërfaqet e përzgjedhura (ose të gjitha) priten përgjatë saj |
| {{ui:Vrulli}} | Rrotullon sipërfaqet e përzgjedhura ose skajet e hapura rreth boshtit blu, me hapa (rrota i cakton); një rrotullim i plotë mbyll |
| {{ui:Ndaj}} | Pret skajet e përzgjedhura në dysh; sipërfaqet e plota bëhen rrjetë |
| {{ui:Bashko}} | Kulmet e përzgjedhura bëhen një, në qendrën e tyre |
| {{ui:Tret}} | Heq përzgjedhjen por ruan sipërfaqen: sipërfaqet bashkohen |
| {{ui:Mbush}} | Një sipërfaqe përtej një kufiri të hapur të përzgjedhur (ose ndërmjet dy skajeve të hapura) |
| {{ui:Mbush me rrjetë}} | Mbush një kufi të hapur me një numër çift skajesh me një rrjetë katërkëndëshash |
| {{ui:Urë}} | Bashkon dy unaza skajesh të hapura të përzgjedhura me sipërfaqe |
| {{ui:Brazdë}} | Sa të mprehta mbeten skajet e përzgjedhura kur rrjeta lëmohet nga një sipërfaqe nënndarjeje: largohu nga qendra, përdor rrotën (hapa prej 0.1) ose shkruaj një vlerë 0 deri 1. Paneli tregon brazdën e skajeve të përzgjedhura dhe pranon edhe një vlerë të shkruar. Skajet me brazdë vizatohen me magjenta |
| {{ui:Kthim}}, {{ui:Lëmo}}, {{ui:Fshi}} | Kthen sipërfaqet përmbys; lëmon kulmet drejt fqinjëve të tyre; fshin sipas mënyrës së përzgjedhjes |

Çdo një është një hap zhbërjeje. Koordinatat e teksturës, ngjyrat dhe peshat kalojnë mbi sipërfaqet dhe kulmet e reja.

## Rindërto rrjetën

{{ui:Ri-mesh}} e bën rrjetën e tërë sërish si trekëndësha të barabartë me një madhësi, e kërkuar kur e shtyp (më e vogël do të thotë më e imët dhe më e ngadaltë). Mbyll vrimat, bashkon copat që mbivendosen, dhe rregullon një rrjetë që skulptura e ka shtrembëruar. Skajet e mprehta dalin pak të rrumbullakosura. UV, boja dhe brazdat fillojnë nga e para. Një hap zhbërjeje.

## Ri-topologji

Për të ndërtuar një rrjetë të re, më të pastër mbi një të detajuar (një skulpturë, një skanim), zgjidh atë të detajuarin nën {{ui:Ri-topologji}} › **Ndërto mbi** në panel, pastaj:

- **Kap pikat e zhvendosura mbi të:** pikat që zhvendos, dhe skajet që ekstrudon, bien mbi sipërfaqen e saj.
- **Vendos pikat e përzgjedhura mbi të** i zhvendos pikat e përzgjedhura mbi të tani (një hap zhbërjeje).
- **Shfaq skajet e kësaj rrjete përpara** vizaton rrjetën që po ndërton mbi sipërfaqe, që ta shohësh.

## Rregullo operacionin e fundit

Pas {{ui:Fut brenda}}, {{ui:Pjerrëzo}}, {{ui:Prerje lakuese}}, {{ui:Ndaj}}, {{ui:Lëmo}}, {{ui:Mbush me rrjetë}} ose {{ui:Vrulli}}, paneli tregon cilësimet e tij (gjerësia, segmentet, profili, prerjet …). Ndrysho një dhe operacioni bëhet sërish nga pika ku nisi, gjithsesi një hap zhbërjeje.

## Tastet

| | Tastet shtyj/tërhiq | Tastet e modelueve |
|---|---|---|
| Zhvendos, rrotullo, shkallë | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dy herë rrëshqet) |
| Ekstrudo, fut brenda | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Fshi | {{key:E}} ose {{key:Delete}} | {{key:X}} ose {{key:Delete}} |
| Brazdë | {{key:Shift+C}} | {{key:Shift+E}} |
| Përzgjidh të gjitha, asnjë, invertim | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Të dyja | {{key:Ctrl+B}} pjerrëzo, {{key:Ctrl+R}} prerje lakuese, {{key:K}} thikë | e njëjta, dhe {{key:F}} mbush, {{key:M}} bashko, {{key:Ctrl+X}} tret, {{key:L}} / {{key:Ctrl+L}} të lidhura, {{key:Alt+N}} kthim, {{key:O}} proporcional, {{key:Shift+V}} rrëshqitje kulmi |

Shih edhe [Rrjetat](topic:meshes), [Modifikuesit në një rrjetë](topic:modifiers) dhe [Nuk është ndërtuar ende](topic:not-built-yet).
