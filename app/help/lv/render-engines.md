---
title: Izvēlieties, kura programma zīmē attēlu
summary: Dzinēja izvēle renderēšanas dialogā - mūsu pašu divi dzinēji, citas programmas CadCraft Studio un tas, ko tīmeklis dara tā vietā.
keywords: renderēt, dzinējs, renderētājs, renderēšanas dzinējs, spraudnis, plugin, studio, ārēja programma, zīmē, rinda, papildinājuma dzinējs
from: be4b056a
---

{{ui:Renderēt attēlu…}} virs **Režīma** ir izvēle **Dzinējs**. Mūsu pašu divi dzinēji vienmēr ir pieejami un darbojas visur; papildinājumi var pievienot vairāk, un CadCraft Studio sarakstā ir arī programmas, kas pārņem ainu.

| Dzinējs | Ko tas dara | Kur |
|---|---|---|
| Iebūvēts: Fast | Ātrs attēls: dienas gaisma, mīkstas ēnas, stikla un metāla izskats, sekundēs | Pārlūks un Studio |
| Iebūvēts: Path tracer | Gaisma, kas atstarojas starp virsmām jūsu grafikas kartē vai procesorā, renderēšanas rinda un citi datori jūsu tīklā | Pārlūks un Studio |
| Papildinājuma dzinējs | Tas zīmē un atdod attēlu: skatiet [Zīmēt attēlu ar citu programmu](topic:render-other-program) | Pārlūks (dzinējs, kas rakstīts JavaScript) vai Studio (dzinējs, kas palaiž programmu) |
| Programma, kas pārņem ainu | Studio ievieto ainu savā mapē un uztur to sinhronizētu | Studio |
| Atvērt ar … | Saglabā ainu un atver to programmā; nekas neatgriežas: skatiet [Atvērt ainu citā programmā](topic:render-open-in) | Tīmeklis saglabā failu |

## Kā darbojas izvēle

- Izvēloties Fast vai Path tracer, mainās arī Režīms, un otrādi. Nekas cits dialogā nemainās cilvēkiem, kas nekad neizmanto citu dzinēju.
- Dzinējs, kas nav pieejams, paliek sarakstā ar iemeslu ("nav atrasts", "nepieciešama jaunāka versija"); to nevar izvēlēties. Pārlūkā dzinējs, kas darbojas tikai Studio, rāda "saglabā failu": {{ui:Renderēt attēlu…}} tad saglabā ainu un tās iestatījumus failā, ko nogādājat šai programmai.
- Izvēle tiek saglabāta kopā ar faila renderēšanas iestatījumiem, un pēdējais izvēlētais dzinējs ir sākuma dzinējs failiem, kuriem nav savas izvēles.
- Attēls no citas programmas norāda, kura programma to zīmēja un tās versiju, dialogā un renderēšanas rindā. Lapā [Renderēt](topic:render) dotie solījumi attiecas tikai uz **mūsu pašu** dzinējiem: cita programma apgaismo, toņo un paraugu ņem savā veidā, tāpēc divi viena attēla attēli ir līdzīgi kameras, saules, lampu un ekspozīcijas ziņā, bet nav pikseļu pa pikselim vienādi.

## Ko katrs dzinējs saņem

Aina citai programmai tiek nodota kā **pakotne**: modelis kā USD fails (tas pats fails, ko raksta [Saglabāt kā USD](topic:usd)), un iestatījumu fails, kurā ir tas, kam USD importētājam nevar uzticēties: precīzas materiālu vērtības, lampas, kas ieslēgtas ar savu jaudu un gaismas profiliem, saule, debesis, ekspozīcija un kamera tā, kā to zīmētu dialogs. Nekas nekur netiek augšupielādēts.

## Renderēšanas rinda

Attēls vai animācija citai programmai var gaidīt [renderēšanas rindā](topic:render#the-render-queue) tāpat kā mūsējie; tā uzdevums atceras, kuram dzinējam tas paredzēts. Animācija programmai tiek nodota vienā palaišanā.
