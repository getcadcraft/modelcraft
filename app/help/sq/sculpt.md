---
title: Skulpto një rrjetë
summary: Formo një rrjetë si argjilë me penela — vizato, argjilë, lëmo, kap, fryj, brazdë, shtrydh, sheshto — mbro pjesë me maskë, pasqyro përgjatë X, dhe shto detaj aty ku skulpton.
keywords: skulpturë, skulpto, penel, penela, argjilë, vizato, lëmo, kap, fryj, brazdë, shtrydh, sheshto, maskë, simetri, pasqyro, detaj, topologji dinamike, stilolaps, presion, tablet, stilus
from: 5477801a
---

Hapësira e punës {{ui:Skulpto}} formon një rrjetë me penela, si me argjilë: tërhiq mbi sipërfaqe dhe ajo ngrihet, zhytet, lemohet ose ndjek treguesin nën një penel të rrumbullakët, më fort në mes dhe duke u zbehur deri në zero te skaji.

## Nisja

Zgjidh një rrjetë dhe zgjidh {{ui:Skulpto}} te lista e hapësirës së punës. Një grup ose komponent bëhet së pari rrjetë, si në hapësirën Mesh. Penelat punojnë mbi kulmet e rrjetës, kështu që një rrjetë me më shumë kulme merr forma më të holla: ndaje së pari (me {{ui:Ndaj}} te hapësira Mesh, ose një modifikues Subdivision surface që aplikon), ose ndiz {{ui:Detaj}}.

## Penelat

| Penel | Tast | Çfarë bën |
| --- | --- | --- |
| {{ui:Vizato}} | {{key:D}} | Ngre sipërfaqen nën penel |
| {{ui:Argjilë}} | {{key:C}} | Ndërton shtresa të sheshta, duke mbushur së pari gropat |
| {{ui:Lëmo}} | {{key:S}} | Barazon gungat; mbaj {{key:Shift}} për të lemuar me çdo penel |
| {{ui:Kap}} | {{key:G}} | Tërheq sipërfaqen së bashku me treguesin |
| {{ui:Fryj}} | {{key:I}} | Fryhet sipërfaqja përgjatë drejtimit të vet |
| {{ui:Brazdë}} | {{key:Shift+C}} | Pre një brazdë të mprehtë |
| {{ui:Shtrydh}} | {{key:P}} | Tërheq sipërfaqen drejt mesit të penelit |
| {{ui:Sheshto}} | {{key:T}} | Shtyp sipërfaqen drejt planit të saj mesatar |
| {{ui:Maskë}} | {{key:M}} | Vizaton një maskë që mbron sipërfaqen nga penelat e tjerë |

Mbaj {{key:Ctrl}} ndërsa lëviz penelin për ta punuar nga ana tjetër (ul në vend që të ngrejë, një kreshtë në vend të brazdës, heq maskën), ose ndiz {{ui:Hiq}}.

## Madhësia dhe forca

Madhësia e penelit është në piksele në ekran, kështu që ndihet njëlloj sa larg zmadhon: {{key:[}} dhe {{key:]}} e bëjnë më të vogël dhe më të madh, {{key:Shift+[}} dhe {{key:Shift+]}} ndryshojnë forcën e tij. Paneli i shfaq të dyja.

Me stilolaps në një tablet, shtypja më fort e bën penelin më të madh dhe më të fortë; paneli i fik të dyja.

## Pasqyra, maska dhe detaji

- {{ui:Pasqyro X}} ({{key:X}}) skulpton të dy anët përgjatë së kuqes njëherësh, për fytyra dhe figura.
- Maska shfaqet më e errët ndërsa skulpton. {{ui:Pastro maskën}} ({{key:Alt+M}}) e heq, {{ui:Përmbys maskën}} ({{key:Ctrl+I}}) mban të maskuar atë që ishte e lirë dhe liron atë që ishte e maskuar. Maska mbahet me rrjetën.
- {{ui:Detaj}} shton trekëndësha aty ku skulpton: skajet më të gjata se madhësia e vendosur në panel (piksele në ekran) ndahen nën penel. Kërkon një rrjetë trekëndëshash dhe pyet për ta bërë një të tillë më parë.

Çdo goditje është një hap zhbërjeje.

:::note
Detaj vetëm shton trekëndësha; nuk heq ata që u bënë shumë të vegjël. Një Rirrjetëzim (hapësira Mesh) barazon përsëri tërë rrjetën.
:::

Shih edhe [Redakto një rrjetë](topic:mesh-edit), [Rrjetat](topic:meshes) dhe [Modifikuesit mbi një rrjetë](topic:modifiers).
