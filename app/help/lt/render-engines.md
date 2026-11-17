---
title: Pasirinkite programą, kuri nubraižo paveikslėlį
summary: Variklio pasirinkimas atvaizdavimo dialoge: mūsų pačių du varikliai, kitos programos CadCraft Studio ir ką žiniatinklis daro vietoj to.
keywords: atvaizdavimas, variklis, atvaizdavimo variklis, papildinys, įskiepis, studio, išorinė programa, nubraižyta, eilė, priedo variklis
from: be4b056a
---

{{ui:Atvaizduoti paveikslėlį…}} virš {{ui:Režimas}} turi **Variklio** pasirinkimą. Mūsų pačių du varikliai visada yra ir veikia visur; priedai gali pridėti daugiau, o CadCraft Studio sąraše yra ir programos, kurios perima sceną.

| Variklis | Ką jis daro | Kur |
|---|---|---|
| Įtaisytas: Greitas | Greitas vaizdas: dienos šviesa, minkšti šešėliai, stiklo ir metalo išvaizda, per kelias sekundes | Naršyklėje ir Studio |
| Įtaisytas: Kelio sekėjas | Šviesa atsispindi tarp paviršių jūsų grafinėje kortelėje ar procesoriuje, atvaizdavimo eilė ir kiti jūsų tinklo kompiuteriai | Naršyklėje ir Studio |
| Priedo variklis | Jis nubraižo ir grąžina paveikslėlį: žr. [Nubraižykite paveikslėlį kita programa](topic:render-other-program) | Naršyklėje (variklis, parašytas JavaScript) arba Studio (variklis, kuris paleidžia programą) |
| Programa, kuri perima sceną | Studio deda sceną į savo aplanką ir ją palaiko atnaujintą | Studio |
| Atidaryti … | Įrašo sceną ir atidaro ją programoje; nieko negrįžta: žr. [Atidarykite sceną kitoje programoje](topic:render-open-in) | Žiniatinklis įrašo failą |

## Kaip veikia pasirinkimas

- Pasirinkus Greitą ar Kelio sekėją, kartu pasikeičia ir {{ui:Režimas}}, ir atvirkščiai. Niekas kitas dialoge nesikeičia žmonėms, kurie niekada nenaudoja kito variklio.
- Variklis, kuris nepasiekiamas, lieka sąraše su priežastimi ("nerasta", "reikia naujesnės versijos"); jo negalite pasirinkti. Naršyklėje variklis, kuris veikia tik Studio, rodo "įrašo failą": tada {{ui:Atvaizduoti paveikslėlį…}} įrašo sceną ir jos nustatymus į failą, kurį nuvežate į tą programą.
- Pasirinkimas įrašomas kartu su failo atvaizdavimo nustatymais, o paskutinis pasirinktas variklis yra pradinis failams, kurie neturi savo pasirinkimo.
- Paveikslėlis iš kitos programos nurodo, kuri programa jį nubraižė ir jos versiją, dialoge ir atvaizdavimo eilėje. [Atvaizdavimo](topic:render) puslapio pažadai galioja tik **mūsų pačių** varikliams: kita programa šviesą, toną ir mėginius apdoroja savaip, todėl du vienos scenos paveikslėliai yra panašūs kameros, saulės, lempų ir ekspozicijos atžvilgiu, bet ne pikselis į pikselį.

## Ką gauna kiekvienas variklis

Scena kitai programai perduodama kaip **paketas**: modelis kaip USD failas (tas pats failas, kurį įrašo [Įrašyti kaip USD](topic:usd)), ir nustatymų failas, kuriame yra tai, kuo USD importuotojui negalima pasitikėti: tikslios medžiagų reikšmės, įjungtos lempos su galia ir šviesos profiliais, saulė, dangus, ekspozicija ir kamera tokia, kokią dialogas ją braižytų. Niekas niekur neįkeliama.

## Atvaizdavimo eilė

Paveikslėlis ar animacija kitai programai gali laukti [atvaizdavimo eilėje](topic:render#the-render-queue) kaip ir mūsų pačių; jos užduotis įsimena, kuriam varikliui ji skirta. Animacija programai perduodama vienu paleidimu.
