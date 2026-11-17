---
title: Nosūtīt apjoma modeli uz BimCraft
summary: Nododiet bīdīšanas/vilkšanas apjomus BimCraft kā apjoma opcijas, ar stāviem, pamatni, bruto stāvu platību un tilpumu, kas aprēķināti no katra ciets ķermeņa.
keywords: apjoms, masa, koncepts, opcijas, bimcraft, ifc, bim, bīdīšana vilkšana, stāvi, bruto stāvu platība, pamatne, tilpums, nosūtīt, nodot, ēkas masa, 2. posms
from: 73c51f3f
---

## Ko jūs darīsiet

Pārvērtiet ar bīdīšanu/vilkšanu modelētos blokus par apjoma opcijām, ko BimCraft saprot, lai koncepts turpinātos kā ēkas modelis.

## Pirms sākat

Katru masu padariet par **grupu** vai **komponenti** un dodiet tai nosaukumu. Katra kļūst par vienu opciju. Brīvā ģeometrija netiek nosūtīta.

## Nosūtīt

1. Atlasiet grupas, ko nosūtīt. Ja nekas nav atlasīts, tiek nosūtītas visas augstākā līmeņa grupas un komponentes.
2. Izvēlieties {{ui:Eksportēt}}, pēc tam {{ui:Apjoma modelis uz BimCraft…}}.
3. Ierakstiet {{ui:Opciju kopas nosaukums}} un {{ui:Stāva augstums}}.
4. Pārbaudiet sarakstu: katras opcijas stāvus, pamatni, bruto stāvu platību un tilpumu.
5. Izvēlieties **Nosūtīt uz BimCraft**, lai atvērtu BimCraft jaunā cilnē ar opcijām, vai {{ui:Saglabāt kā IFC}}, lai lejupielādētu failu un atvērtu to pašam.

BimCraft opcijas ir uzskaitītas sadaļā "Apjoma opcijas modelī", kur vienu var padarīt par pašreizējo opciju un izstrādāt sienās un grīdās.

## Kā cietais ķermenis kļūst par masu

- **Stāvi** ir ciet ķermeņa augstums, dalīts ar stāva augstumu, noapaļots, un vismaz viens. Tad stāvi vienādi dala ciet ķermeņa augstumu, tātad 10 m bloks ar 3 m stāviem ir 3 stāvi pa 3.33 m.
- **Stāva platība** ir paša ciet ķermeņa horizontālā griezuma laukums šī stāva līmenī. Bloks, kas atkāpjas, ir ar mazākiem augšējiem stāviem, un bruto stāvu platība ir to summa.
- **Pamatne** ir griezuma kontūra tieši virs ciet ķermeņa pamatnes.
- **Tilpums** ir paša ciet ķermeņa tilpums.

IFC failā katra opcija ir ēkas elementa vietturis (pamatne, pacelta līdz ciet ķermeņa augstumam) ar vienu telpu katram stāvam, kurā ir šī stāva bruto platība. Visas opcijas dala vienu ēku ar tik stāviem, cik ir augstākajai opcijai.

## Vienkāršotas formas

Vienkāršs taisns bloks tiek nodots tieši kā modelēts. Viss pārējais tāpat tiek nosūtīts, un sarakstā rakstīts, kāpēc forma ir vienkāršota:

- **Tā stāvi nav visi pamatnes izmērā** (tas atkāpjas vai slīpst): masa BimCraft ir pamatnes kontūra, pacelta līdz pilnam augstumam, bet stāvu platības un tilpums ir paša ciet ķermeņa.
- **Ciets ķermenis nav slēgts**: stāvi, kuru griezumu nevar noslēgt, netiek izmērīti un tiek skaitīti kā nulle. Noslēdziet ciet ķermeni ({{ui:Objekta informācija}} rāda "Ciets: Jā") pilniem rādītājiem.
- **Tās pamatnei ir vairāk nekā viena kontūra**: par pamatni izmanto lielāko.

## Noderīgi zināt

- {{ui:IFC BimCraft (.ifc)}} ir cits eksports: tas nosūta tikai formas un nosaukumus, bez stāviem vai platībām.
- Nekas netiek augšupielādēts. Fails tiek nodots BimCraft cilnei šajā datorā.
