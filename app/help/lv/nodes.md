---
title: Mezgli: modeļa veidošana, savienojot
summary: Savienojiet skaitļus ar punktiem, punktus ar līknēm, līknes ar virsmām. Mainiet skaitli, un viss pakārtotais tiek pārbūvēts. Katrs mezgls ir arī CraftScript rindiņa, un grafs tiek saglabāts failā.
keywords: mezgli, mezglu redaktors, vizuālā skriptēšana, parametrisks, grafs, vadi, porti, brīvforma, freeform, nurbs, lofts, izvilkšana, rotācija, aplis, līkne, virsma, sērija, diapazons, nejaušs, saraksts, skripts, craftscript, grasshopper
from: 9c8e254f
---

Redaktors **Mezgli** veido ģeometriju, savienojot kastītes. Katra kastīte (mezgls) veic vienu nelielu uzdevumu: izveido skaitli, punktu, apli, lofu. Vienas kastītes rezultātu savienojat ar nākamās ievadi, un modelis seko, kad maināt skaitli sākumā.

Atveriet to no labās puses paneļa: {{ui:Mezgli}} › {{ui:Mezgli…}}. Fails, kuram jau ir grafs, to atver pats. Tas ir logs virs 3D skata: velciet tā virsrakstjoslu, lai to pārvietotu, un stūri, lai mainītu izmēru.

## Savienošana

1. Izvēlieties mezglu no saraksta kreisajā pusē (ierakstiet meklēšanas laukā, lai sašaurinātu sarakstu; {{key:Enter}} pievieno pirmo atbilstību). Tas parādās kanvas vidū.
2. Velciet no apaļā **izejas** punktiņa labajā pusē viena mezgla uz apaļu **ievades** punktiņu kreisajā pusē cita mezgla. Punktiņš kļūst zaļš, ja savienojums ir pareizs, un sarkans, ja nav; uzvirziet rādītāju uz tā, lai redzētu iemeslu.
3. Ievade bez pieslēguma rāda lauciņu ierakstītai vērtībai. Ierakstiet skaitli un nospiediet {{key:Tab}}: rezultāts tiek pārbūvēts.
4. Mazais aplītis mezgla virsrakstjoslā ir tā **acs**. Mezgls ar ieslēgtu aci tiek attēlots 3D skatā: līknes kā līnijas, virsmas ēnotas, punkti kā punkti.

Velciet mezglu aiz virsrakstjoslas. Velciet fonu, lai pārvietotu skatu, pagrieziet ritenīti, lai tuvinātu. {{key:Delete}} dzēš atlasīto mezglu. {{ui:Sakārtot}} izkārto mezglus kolonnās, {{ui:Ietilpināt}} ievieto tos visus skatā, {{ui:Atsaukt}} un {{ui:Atkārtot}} pārvieto pa jūsu izmaiņām.

## Tipi un mērvienības

Portiem ir tips: skaitlis, jā/nē, punkts, vektors, līkne, virsma, tīkls, ciets ķermenis vai "ģeometrija" jebkuram no šiem. Punkts var padot vektora ievadi un otrādi. Skaitļiem ir mērvienība: **garums** ir milimetros, un **leņķis** ir grādos. Garums nevar padot leņķi, un garums, reizināts ar garumu (laukums), tiek noraidīts, tāpēc nepareizs vads tiek apturēts jau tad, kad to veidojat.

Kvadrātveida punktiņš ir **saraksts**. Kad saraksts nonāk vienas vērtības ievadē, mezgls darbojas katram vienumam atsevišķi, un tā rezultāts kļūst par sarakstu. Īsāks saraksts atkārto savu pēdējo vienumu. Piemēram, **Sērija** ar augstumiem, kas padota **Pārvietot**, izveido kopiju kaudzi.

## Cietie ķermeņi un Būla operācijas kā mezgli

Grupa **Cietie ķermeņi** veido slēgtus ķermeņus no tām pašām precīzajām virsmām, kas ir virsmu panelī: **Kastes ciets ķermenis**, **Cilindra ciets ķermenis** un **Lodes ciets ķermenis** (izmēri mm), **Apvienot**, **Atņemt** un **Krustot** (otrais ciets ķermenis tiek ņemts no pirmā; pielaide ir tas, cik tālu cieto ķermeņu dzinēja trijstūri var atrasties no precīzajām virsmām), **Noapaļojums starp virsmām** (virsmas pēc to numura cietajā ķermenī, 1 ir pirmā; rādiuss un, ja lielāks par 0, rādiuss beigās), **Cietā ķermeņa tilpums** (mm³) un **Ciets ķermenis līdz tīklam** (lai to redzētu vai pārnestu).

Cietajam ķermenim ir savs porta tips: punktu vai skaitli nevar pieslēgt cietā ķermeņa ievadei, un punktiņš paliek sarkans. Būla un noapaļojuma mezgli izmanto programmas pašu cieto ķermeņu dzinēju, kas tiek ielādēts, kad redaktors tiek atvērts pirmo reizi.

## Kļūdas

Mezgls, kas nevar izpildīt savu uzdevumu, zem sava nosaukuma sarkanā krāsā norāda iemeslu ("Rādiusam jābūt lielākam par nulli."), un tam sekojošie mezgli gaida. Tas pats ziņojums ir arī problēma panelī Problēmas, tāpēc to var atrast arī no turienes.

## Katrs mezgls ir skripta rindiņa

Nospiediet {{ui:Skripts}}, lai redzētu grafu kā CraftScript: viena rindiņa katram mezglam, piemēram, `n3 = nd_circle(n2, n1, [0 0 1]);`. Rediģējiet tekstu un nospiediet {{ui:Izveidot grafu no šī skripta}}, lai to atgrieztu kā grafu. Tās pašas `nd_` funkcijas darbojas arī CraftScript programmā PartCraft, tāpēc grafu var tur palaist, atkārtot vai pārbaudīt. Nejaušiem skaitļiem vienmēr nepieciešama **sēkla**, tāpēc viens un tas pats grafs visos datoros dod vienu un to pašu rezultātu.

## Saglabāts ar failu

Grafs tiek saglabāts modeļa failā. Mezgli veido savas līknes, virsmas un tīklus: tie nemaina modeļa virsmas, kamēr to nelūdzat.

## Pārnest modelī

Ieslēdziet acs ikonu mezglam, kurš veido virsmu vai tīklu, un pēc tam mezglu logā nospiediet {{ui:Pārnest modelī}}. Katra redzamā virsma vai tīkls kļūst par virsmu grupu modelī, metros, un to var rediģēt kā jebko citu. Tas ir viens atsaukšanas solis. Grafs paliek, bet kopija vairs neseko tam: mainiet skaitli un pārnesiet vēlreiz, lai iegūtu jaunu. Punkti un līknes nav cieti ķermeņi, tāpēc tie tiek izlaisti, un ziņojums norāda, cik to ir.
