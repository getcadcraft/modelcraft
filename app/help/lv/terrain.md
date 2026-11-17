---
title: Reljefs: zeme no horizontālēm un tās veidošana
summary: Izveidojiet zemi no horizontāļu līnijām vai kā režģi, pēc tam paceliet un nolaidiet to ar mīkstu otu.
keywords: reljefs, zeme, ainava, topogrāfija, horizontāles, horizontāļu līnijas, teritorija, nogāze, kalns, uzkalns, smilšu kaste, smoove, veidot, vertikālā plānošana, TIN
from: 407652b3
---

Reljefs ir zeme, kas veidota no trijstūriem, tāpēc tā var sekot jebkurai formai. Tā ir grupa: veiciet dubultklikšķi, lai to rediģētu.

## No horizontālēm

1. Iegūstiet horizontāļu līnijas to augstumos: zīmējiet tās vai [importējiet teritorijas plānu](topic:site-plan) un pārvietojiet katru horizontāli līdz tās līmenim.
2. Atlasiet tās (visas malas visās horizontālēs).
3. {{ui:Rediģēšana}} › {{ui:Vairāk}} › {{ui:Reljefs no atlasītajām horizontālēm}}.

ModelCraft savieno horizontāļu punktus ar trijstūriem (TIN) un mīkstina katru malu iekšpusē, lai zeme nokrāsotos gludi. Pašas līnijas paliek; izdzēsiet vai paslēpiet tās, kad tās vairs nav vajadzīgas. Ļoti blīvas horizontāles tiek samazinātas līdz 8 000 punktiem.

## Režģis veidošanai

{{ui:Rediģēšana}} › {{ui:Vairāk}} › {{ui:Reljefa režģis…}} pieprasa platumu, dziļumu un šūnas izmēru, pēc tam novieto plakanu trijstūru režģi tur, kur noklikšķināt tā stūri. Mazākas šūnas ļauj veidot gludāk, bet rada vairāk virsmu (ne vairāk kā 200 × 200 šūnas).

## Veidošana: pacelt un nolaist zemi

1. Veiciet dubultklikšķi uz reljefa, lai to atvērtu.
2. {{ui:Rediģēšana}} › {{ui:Vairāk}} › {{ui:Veidot reljefu}}. Aplis parāda otu zemē zem rādītāja.
3. Velciet uz augšu, lai paceltu zemi zem otas, vai uz leju, lai to nolaistu. Vidus pārvietojas visvairāk, un zeme mīkstini samazinās līdz nullei apļa malā, tāpēc uzkalni un ieplakas iznāk gludi.

Lai uzkalnam piešķirtu precīzu augstumu, noklikšķiniet vienu reizi, pēc tam ierakstiet augstumu, piemēram, `1.5m` (mīnuss nolaiž), un nospiediet {{key:Enter}}. Lai mainītu otu, pirms klikšķināšanas ierakstiet garumu: `5m` piešķir otai 5 m rādiusu.

Katra veidošana ir viens atsaukšanas solis.

## Svarīgi zināt

- Veidošana pārvieto tikai trijstūru virsmas, tāpēc katra virsma paliek plakana. Ar roku zīmētas virsmas (taisnstūri, daudzstūri) nav reljefs: rīks par to informē.
- Veidošana pārvieto punktus tieši uz augšu un uz leju; tā nepievieno punktus. Smalkākai detaļai izveidojiet režģi ar mazākām šūnām.
- Reljefs tiek eksportēts kā jebkura cita grupa. IFC formātā tas ir ēkas elementa proxy, kā jebkas cits.
