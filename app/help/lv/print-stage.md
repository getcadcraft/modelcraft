---
title: Vienumu novietošana drukas platformā un nosūtīšana uz printeri
summary: Pievienojiet bibliotēkas vienumus vai savu modeli printera platformai, sakārtojiet tos, apskatiet sagrieztos slāņus un nosūtiet drukas darbu pa USB vai tīklu vai saglabājiet G-code, bez STL faila eksportēšanas iepriekš.
keywords: drukas posms, 3d drukāšana, printeris, platforma, nosūtīt uz 3D printeri, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, bibliotēka, sakārtot, ietilpināt visu, slāņu priekšskatījums, aizpildījums, balsti, filaments, pla, petg, papildinājums, 3D drukas papildinājums
from: abcf5d7e
---

{{ui:Drukas posms}} izkārto lietas uz jūsu printera platformas, sagriež tās slāņos un nosūta uz printeri. Jums nav jāeksportē fails iepriekš. Tas pieder 3D drukas papildinājumam, kas ir ieslēgts pēc noklusējuma.

:::note
Ar šo vēl nekas nav izdrukāts uz reāla printera. Slicer ir jauns: vērojiet pirmās savas pirmās drukas pirmos slāņus un pirms nosūtīšanas izmantojiet slāņu priekšskatījumu.
:::

## Ko jūs darīsiet

Novietojiet modeli uz platformas, pārbaudiet, vai tas ietilpst, apskatiet sagrieztos slāņus un nosūtiet to uz printeri vai saglabājiet G-code.

## Soļi

1. Rīkjoslā noklikšķiniet uz {{ui:Drukas posms}}. Virs skata atveras kartīte, un punktēta kontūra parāda jūsu platformu.
2. Zem **Pievienot no bibliotēkas** meklēšanas lodziņā ierakstiet nosaukumu, nospiediet {{ui:Meklēt}} un rezultātā nospiediet {{ui:Pievienot}}. Vienums nonāk uz platformas pilnā izmērā vai samazināts, lai ietilptu. Jebkas, ko jau esat uzzīmējis vai importējis un ko redzat skatā, arī atrodas uz platformas.
3. Zem **Uz platformas** pārbaudiet katra vienuma izmēru. Vienums, kas atzīmēts kā **Ārpus platformas**, ir jāpārvieto. Pārvietojiet, pagrieziet un mērogojiet lietas skatā ar parastajiem rīkiem.
4. Nospiediet {{ui:Izkārtot uz platformas}}, lai izkliedētu vienumus, vai {{ui:Ietilpināt visu uz platformas}}, lai tos samazinātu līdz ietilpšanai.
5. Zem **Jūsu printeris** izvēlieties **Platformas izmērs** vai vienu no printera profiliem.
6. Zem **Drukas iestatījumi** izvēlieties **Materiālu**, **Kvalitāti** un **Aizpildījums %**, un atzīmējiet **Pievienot balstus zem izvirzījumiem**, ja forma tos prasa.
7. Nospiediet {{ui:Slāņu priekšskatījums}} un pārvietojiet slīdni **Slānis**, lai apskatītu sagrieztos slāņus. Ja vēlāk mainat posmu vai iestatījumus, nospiediet {{ui:Slāņu priekšskatījums}} vēlreiz.
8. Zem **Savienojums** izvēlieties {{ui:USB kabelis}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} vai {{ui:PrusaLink}}. USB gadījumā nospiediet {{ui:Savienoties}}. Tīkla printerim ierakstiet tā **Adresi** (un **API atslēgu**, ja tā tiek prasīta), tad nospiediet {{ui:Pārbaudīt savienojumu}}.
9. Nospiediet {{ui:Nosūtīt uz 3D printeri}}. Kartīte jautā, vai platforma ir brīva un vai ielādēts pareizais materiāls, un parāda laiku, materiālu un temperatūras. Apstipriniet, lai nosūtītu.

Jūs saņemsiet ziņu, ka printeris tiek palaists. {{ui:Apturēt drukāšanu}} izslēdz sildītājus, ventilatoru un motorus. Ja vēlaties tikai failu, nospiediet {{ui:Saglabāt G-code failu}}.

## Piezīmes

- USB prasa Chrome vai Edge datorā, un lapai jāpaliek atvērtai līdz drukas beigām. Aizverot to, plūsma tiek apturēta.
- Tīkla printerim jāatļauj šī vietne (Moonraker to pievieno `cors_domains`; OctoPrint ieslēdziet CORS un nokopējiet API atslēgu). Jūsu pārlūks var pieprasīt piekļuvi ierīcēm jūsu tīklā.
- Nekas nepieslēdzas un nekas netiek nosūtīts bez jūsu klikšķa.
- Slicer saraksts atrodas zem **Slicer**. {{ui:CadCraft pamata (iekļauts, ātrākais)}} ir iebūvēts. Kiri:Moto, PrusaSlicer, OrcaSlicer un Bambu Lab P2S ir atsevišķi papildinājumi, ko ieslēdzat kartītē vai zem {{ui:Iestatījumi}} › {{ui:Papildinājumi}}. PrusaSlicer un OrcaSlicer izmanto jūsu pašu kopiju un darbojas no CadCraft Studio datorā.
- Gabali, kas nav slēgti cieti ķermeņi, tiek izlaisti, un kartīte norāda, cik liela formas daļa tas ir.
- Sveķu printeriem skatiet [Sagriešana sveķu printerim](topic:resin-printing). Lai vispirms pārbaudītu vai labotu modeli, skatiet [Balsti, sienas biezums, iedobšana un labošana](topic:print-tools).
