---
title: Stiliai ir saulės šešėliai
summary: Rodykite modelį šešėliuotą, kaip paslėptas linijas, karkasą ar permatomą, ir tirkite šešėlius, kuriuos jis meta bet kurią datą, laiką ir vietoje.
keywords: pristatymo vaizdas, švarus vaizdas, slėpti pagalbines linijas, slėpti ašis, stilius, šešėliuota, paslėptos linijos, karkasas, rentgenas, briaunos, šešėliai, saulė, saulės tyrimas, saulės padėtis, data, laikas, platuma, ilguma, laiko juosta, šiaurė
from: 09c95329
---

{{ui:Stilius}} skydelis dešinėje keičia, kaip piešiamas modelis. Jis nieko nekeičia pačiame modelyje ir nėra atšaukiamo veiksmo dalis. Kiekviena [scena](topic:scenes) prisimena savo stilių, o failas prisimena stilių, kuris buvo, kai įrašėte.

## Paviršiai

Pasirinkite vieną {{ui:Paviršiai}} sąraše:

| Stilius | Atrodo kaip |
|---|---|
| {{ui:Šešėliuota}} | Vientisi paviršiai, švelniai apšviesti. Paviršiai, matomi iš galo, yra mėlynai pilki. Rodomos importuotos spalvos. |
| {{ui:Paslėptos linijos}} | Paviršiai fono spalva, briaunos tamsiomis linijomis: švari linijinė schema be paslėptų linijų. Balta ant {{ui:Popierius}}, tamsi ant {{ui:Modelis}}. |
| {{ui:Karkasas}} | Tik briaunos. Paviršiai nepiešiami, bet jie vis tiek skaičiuojami spustelint ir prisikabinant: per juos negalima pasirinkti. |
| {{ui:Rentgenas}} | Permatomi paviršiai, kad matytumėte, kas yra už ar viduje. Kaip karkaso atveju, spustelėjimai ir prisikabinimai vis tiek sustoja ties artimiausiu paviršiumi. |

{{ui:Rodyti briaunas}} įjungia arba išjungia briaunas visuose stiliuose, išskyrus {{ui:Karkasas}}. Kai jos išjungtos, {{ui:Paslėptos linijos}} beveik nieko nerodo, nes jos paviršiai sutampa su fonu. Minkštos briaunos, pavyzdžiui, išstumto apskritimo šonai, niekada nepiešiamos.

## Įjunkite saulės šešėlius

1. Pažymėkite {{ui:Saulės šešėliai}}. Po juo esantys saulės nustatymai tampa aktyvūs, o modelis meta šešėlius pats ant savęs ir ant žemės.
2. Nustatykite vietą:
   - {{ui:Platuma}}: šiaurė teigiama, pietūs neigiami (Niujorkas maždaug 40.7, Sidnėjus maždaug -33.9).
   - {{ui:Ilguma}}: rytai teigiami, vakarai neigiami (Niujorkas maždaug -74.0).
   - {{ui:UTC poslinkis}}: vietos poslinkis nuo UTC valandomis, pavyzdžiui, `-5` Niujorkui žiemą. ModelCraft netaiko vasaros laiko; vasarą Niujorkui naudokite `-4`.
3. Nustatykite {{ui:Data}} (mėnesį ir dieną) ir vilkite {{ui:Laikas}} slankiklį. Laikas keičiasi 15 minučių žingsniais ir rodomas šalia slankiklio, pavyzdžiui, „3:00 pm“.

Eilutėje po nustatymais nurodoma, kur yra saulė, pavyzdžiui: „Sun 52° up, 250° from north. North is the green axis.“ Naktį ji rodo: „The sun is down at this time.“

Naujas modelis prasideda su saule birželio 21 d. 3:00 pm, platuma 40, ilguma -105, UTC poslinkis -7.

## Nukreipkite modelį į šiaurę

ModelCraft šiaurė visada yra **žalia ašis**. Norėdami ištirti tikrą vietovę, pasukite modelį taip, kad jo šiaurinė pusė būtų nukreipta išilgai žalios: pasirinkite viską ({{key:Mod+A}}), paspauskite {{key:Q}}, spustelėkite centrą ant žemės ir pasukite jį vietovės kampu nuo šiaurės (žr. [Sukti ir keisti mastelį](topic:rotate-scale)).

## Saulės tyrimas

1. Nustatykite vietą ir datą.
2. Pridėkite sceną ({{ui:Pridėti sceną}} srityje {{ui:Scenos}}).
3. Pajudinkite laiko slankiklį, tada pridėkite dar vieną sceną. Kartokite kiekvienai valandai, kurią norite.
4. Spustelėkite {{ui:Groti}}, kad peržiūrėtumėte jas. Žr. [Išsaugoti vaizdus kaip scenas](topic:scenes).

## Kas svarbu

- Labai dideliame modelyje šešėliai gali atrodyti dantyti, nes vienas šešėlių žemėlapis apima visą modelį.
- Šešėliai nepiešiami stiliuje {{ui:Karkasas}}.
- Saulės padėtis seka NOAA saulės skaičiavimą ir yra tiksli iki dalies laipsnio, o to pakanka apimties tyrimams. Atmosferos refrakcija ignoruojama, todėl labai žemi saulės kampai prie saulėtekio ir saulėlydžio gali šiek tiek skirtis.

## Pristatymo vaizdas

{{ui:Vaizdai}} › {{ui:Pristatymo vaizdas}} (arba {{key:Shift+P}}) rodo tik modelį: ašis, pagalbines linijas ir pagalbinius taškus, pjūvio plokštumų kontūrus (pats pjūvis lieka), šviestuvų žymes, atidarytos grupės dėžę, prisikabinimo žymes ir patarimus bei pasirinkimo paryškinimą – visa tai pašalinama. Naudokite jį, kad aiškiai pažiūrėtumėte modelį arba prieš ekrano nuotrauką. Įrankiai vis dar veikia ir vis dar prisikabina; tiesiog žymių nematote. Matmenys lieka, nes jie yra brėžinio dalis. Redaguojant grupės viduje, likusi modelio dalis nebeblunka: ji rodoma tokia, kokia yra, įskaitant tekstūras. Dar kartą paspauskite {{key:Shift+P}}, kad žymės grįžtų.
