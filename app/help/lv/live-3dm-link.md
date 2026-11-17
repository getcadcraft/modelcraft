---
title: Turiet .3dm modeli sinhronizētu
summary: Mainiet modeli programmā, kurā to izveidojāt, un redziet izmaiņas šeit — no Rhino 8 vai Grasshopper definīcijas —, bez atkārtotas saglabāšanas un importēšanas.
keywords: rhino, grasshopper, tiešā saite, tiešais savienojums, 3dm, nurbs, parametrisks, saite, sinhronizācija, skripts, atsauces modelis, nosūtīšana
from: 331b0a7e
---

Turpiniet modelēt tur, kur modelējat, un rezultātu izmantojiet šeit: lai to renderētu, apgaismotu vai veidotu ap to ainu. Katra izmaiņa otrā programmā atjaunina vienu grupu ModelCraft.

:::note
Saitei vajag **CadCraft Studio** tajā pašā datorā. Pārlūka cilne nevar uzturēt savienojumu. Nekas netiek sūtīts internetā: skripts sazinās ar Studio šī datora pašu adresi, izmantojot pilnvaru.
:::

:::warning
Šī saite ir pārbaudīta ar skripta failu rakstītāju un aizstājēju otrai programmai, bet vēl ne pašā Rhino vai Grasshopper. Ja tur kaut kas neizdodas, pastāstiet mums, ko tas teica.
:::

## Iestatīšana

1. Studio atveriet ModelCraft. Sadaļā {{ui:Iestatījumi}} › {{ui:ModelCraft}} › {{ui:Asistenti}} atzīmējiet **Ļaut MI asistentiem un skriptiem izmantot ModelCraft**, pēc tam **Rediģēt**.
2. Studio izvēlieties {{ui:Savienot palīgu}}. Tiek parādīta adrese un pilnvara, ko ielīmēsiet zemāk.
3. Lejupielādējiet skriptu: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## No Rhino

1. Palaidiet `cadcraft_link.py` Rhino skriptu redaktorā (Python 3 Rhino 8).
2. Pirmo reizi ielīmējiet adresi un pilnvaru. Tās tiek glabātas failā `.cadcraft-link.json` jūsu mājas mapē, nekad modelī. Studio katru reizi, kad tas sākas, izveido jaunu pilnvaru, tādēļ skripts tad jautā atkārtoti.

Viss modelis tiek pārnests kā viena grupa, nosaukta pēc dokumenta, piemēram, "chair (linked)". Pēc tam katra izmaiņa tiek pārnesta, kad uz brīdi apstājaties, un tiek sūtīti tikai mainītie objekti. Lai apturētu, palaidiet skriptu vēlreiz.

## No Grasshopper

Vispirms vienreiz palaidiet skriptu Rhino, lai adrese un pilnvara tiktu saglabātas.

1. Pievienojiet komponenti Script (Python 3) un ielīmējiet tajā visu `cadcraft_link.py`.
2. Iestatiet tai šādas ieejas: `G` (ģeometrija, ar saraksta piekļuvi), `N` (nosaukums, neobligāts), `On` (būla pārslēdzējs) un `Target` (neobligāts: `model` vai `part`, ja abas lietotnes ir atvērtas).
3. Iestatiet `On` uz patiesu.

Katrs aprēķins nosūta `G` un aizstāj to, ko komponente nosūtīja pēdējo reizi, tādēļ, velkot slīdni, šeit tiek atjaunināta grupa. Tās izvade `a` norāda, kas notika. Katrai komponentei ir sava grupa.

## Ko darīt ar grupu

- **Pārvietojiet, atzīmējiet, veidojiet ap to.** Kur novietojat grupu un tās atzīmi, tas paliek pāri katrai atjaunināšanai, tāpat kā viss blakus tai.
- **Nerediģējiet tās iekšpusē.** Katra atjaunināšana aizstāj grupas saturu. Šos objektus pārvalda otra programma.
- **Atsaukšana.** Atjauninājumi, kas notiek divu sekunžu laikā viens no otra, veido vienu atsaukšanas soli, tādēļ {{key:Mod+Z}} atsauc visu vilkšanu. Nākamā atjaunināšana atgriež modeli atbilstoši.
- **Saglabāšana.** Saglabātais fails saglabā saiti. Pēc tā atkārtotas atvēršanas palaidiet skriptu vēlreiz, un tā pati grupa tiks atjaunināta.

## Kas tiek pārnests

Tīkli, polivirsmas, virsmas un izvilkumi kā tīkls, kāds redzams ekrānā; SubD kā savs tīkls; līknes kā malas; bloki kā atsevišķi objekti tur, kur tie stāv (nevis kā komponentes); slāņi kā atzīmes, krāsas un mērvienības. Skatiet [Importēt .3dm modeli](topic:import-3dm-files), lai uzzinātu, kā tie šeit parādās.

Netiek pārnesti, un otrā programmā tiek rādīts to skaits: punkti, teksts, izmēri, gaismas un tamlīdzīgi.

**Tikai vienā virzienā.** Izmaiņas šeit netiek nosūtītas atpakaļ otrai programmai.

## Ja kaut kas noiet greizi

- **"Neviens ModelCraft vai PartCraft logs to neatļauj":** veiciet iestatīšanas 1. soli.
- **"Studio noraidīja pilnvaru":** Studio ir restartēts. Nokopējiet jauno pilnvaru un palaidiet skriptu vēlreiz. Grasshopper gadījumā vispirms palaidiet to Rhino.
- **"Nevar sazināties ar CadCraft Studio":** Studio nedarbojas vai adrese ir mainījusies.
