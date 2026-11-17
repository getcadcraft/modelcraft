---
title: Pehmennä ja tasoita reunat
summary: Piilota pintojen väliset särmät, jotka kohtaavat loivassa kulmassa, jotta kaarevat muodot näkyvät yhtenä sileänä pintana ModelCraft-sovelluksessa ja viedyissä tiedostoissa.
keywords: pehmennä, tasoita, pehmeät reunat, sileä varjostus, piilota särmät, fasetit, fasetoitu, kaareva, normaalit, kovenna, kulma
from: 52d32453
---

Kaareva muoto ModelCraft-sovelluksessa koostuu tasaisista pinnoista. Näiden pintojen väliset **pehmeät** särmät eivät piirry, ja niiden yhdistämät pinnat varjostetaan yhtenä sileänä pintana, joten 24-sivuinen sylinteri näyttää pyöreältä.

Kun vedät ympyrän ylös {{ui:Työnnä/vedä}}-työkalulla, sen sivut pehmennetään automaattisesti. Muille muodoille pehmennetään kulman mukaan.

## Pehmennä kulman mukaan

1. Valitse pehmennettävä: pinnat ja särmät tai ryhmä tai komponentti (kaikki sen särmät).
2. {{ui:Kohteen tiedot}}-kohdassa kirjoita kulma kenttään {{ui:Pehmennä enintään}}, esimerkiksi `20`, ja napsauta {{ui:Pehmennä}}.

Jokainen valinnan särmä, jonka kaksi pintaa kääntyvät tuon kulman verran tai vähemmän, muuttuu pehmeäksi; terävämmän käännöksen särmät muuttuvat kovaksi. 12-sivuisen prisman sivut kääntyvät 30° ja sen reunat 90°, joten `31` pehmentää vain sivut.

{{ui:Kovenna kaikki}} tekee jokaisesta valinnan särmästä jälleen kovan. Kukin on yksi kumoamisvaihe.

## Hyvä tietää

- Pehmennetään vain särmät, joiden välissä on tasan kaksi pintaa. Irralliset särmät pysyvät ennallaan.
- Sileä varjostus toimii vain pehmeiden särmien yli: pinta ilman pehmeää särmää varjostuu tasaisesti.
- Pehmeät särmät säilyvät ModelCraft-tiedostossa. **glTF (.glb)**- ja **OBJ**-viennit kantavat sileän varjostuksen (normaali kulmaa kohden), joten muut ohjelmat näyttävät saman pinnan. Collada ja STL vievät tasaisia pintoja.
- Pehmeät särmät on piilotettu kaikissa pintatyyleissä, myös {{ui:Röntgen}}- ja {{ui:Rautalanka}}-tyyleissä. Jos haluat nähdä ne, valitse muoto ja napsauta {{ui:Kovenna kaikki}}; kumoaminen palauttaa pehmennyksen.
