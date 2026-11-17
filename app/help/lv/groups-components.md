---
title: Grupas un komponenti
summary: Neļaujiet objektiem saķerties kopā, rediģējiet vienu kopiju, lai mainītu visas, un izmantojiet paneļus Struktūra un Komponenti.
keywords: grupa, komponents, izveidot grupu, izveidot komponentu, sadalīt, padarīt unikālu, struktūra, gadījumi, kopijas, bloks, ligzdots, rediģēt grupu, ievietot
from: 7cb925f3
---

Brīva ģeometrija ModelCraft saķeras kopā: līnijas, kas krustojas, sadala viena otru, un virsmas, kurām ir kopīga mala, pārvietojas kopā. Tas ļauj zīmēt uz virsmām, bet nozīmē arī to, ka kaste, kas zīmēta pret citu kasti, ar to saplūst. **Grupas** un **komponenti** ļauj turēt lietas atsevišķi.

- **Grupa** ietver ģeometriju, lai tā darbotos kā viens objekts. Nekas ārpus tās nevar tai pielipt.
- **Komponents** ir grupa, ko var ievietot daudzas reizes. Visām kopijām ir vienāds saturs: rediģējot vienu, mainās visas. Komponentus izmantojiet visam, kas atkārtojas: logiem, kolonnām, galdiem, kokiem.

## Grupas vai komponenta izveide

1. Atlasiet ģeometriju. Trīskāršs klikšķis uz virsmas atlasa visu saistīto objektu; vilkšana ar logu atlasa visu kastē.
2. Nospiediet {{key:Shift+G}} grupai vai {{key:G}} komponentam. Varat arī rīkjoslas grupā „{{ui:Organize}}” noklikšķināt uz „{{ui:Group}}” vai „{{ui:Component}}”, vai sadaļā „{{ui:Entity info}}” izvēlēties „{{ui:Make group (Shift+G)}}” vai „{{ui:Make component (G)}}”.

   Statusa joslā rādās „Izveidota grupa Group#1.” vai „Izveidots komponents Component#1.”; jaunais objekts ir atlasīts un parādās sadaļā „{{ui:Outliner}}”.

3. Lai dotu nosaukumu, ierakstiet to laukā „{{ui:Name}}” sadaļā „{{ui:Entity info}}” un nospiediet {{key:Enter}} vai noklikšķiniet citur.

Ja atlasāt virsmu, līdz ar to atlasās arī tās malas. Ja nekas nav atlasīts, statusa joslā rādās: "Vispirms atlasiet ģeometriju (velciet logu vai veiciet trīskāršu klikšķi, lai atlasītu visu saistīto)."

Grupas var grupēt arī kopā: atlasiet vairākas grupas un nospiediet {{key:Shift+G}}. Sadaļā „{{ui:Outliner}}” redzama ligzdošana.

:::note
Taustiņu burti sakrīt ar programmas SketchUp noklusējumiem: {{key:G}} izveido komponentu, {{key:Shift+G}} – grupu.
:::

## Rediģēšana grupā vai komponentā

1. Veiciet dubultklikšķi uz tā (skatā vai sadaļā „{{ui:Outliner}}”) vai atlasiet to un noklikšķiniet „{{ui:Edit}}” sadaļā „{{ui:Entity info}}”.

   Pārējais modelis izbalē, asis pāriet uz grupas pašas asīm, un sadaļā „{{ui:Outliner}}” rādās "Rediģē: Model › Group#1". Statusa joslā rādās "Rediģē Group#1. Esc vai dubultklikšķis ārpus tā to aizver."

2. Zīmējiet, bīdiet, pārvietojiet un dzēsiet kā parasti. Viss, ko darāt, paliek grupas iekšpusē.
3. Aizveriet to: nospiediet {{key:Esc}} (divreiz, ja kaut kas ir atlasīts), veiciet dubultklikšķi uz tukšas vietas vai noklikšķiniet „{{ui:Close group}}” sadaļā „{{ui:Outliner}}”.

Kamēr komponents ir atvērts, katra tā kopija mainās, kamēr strādājat.

## Komponenta kopiju ievietošana

- Kopējiet to ar „{{ui:Move}}” un {{key:Ctrl}} (skatiet [Pārvietošana un kopēšana](topic:move-copy)). Katra kopija ir vēl viena tā paša komponenta novietojums.
- Vai arī noklikšķiniet „{{ui:Place}}” blakus tam sadaļā „{{ui:Components}}” un pēc tam noklikšķiniet, kur to novietot. Tā sākumpunkts (zemākais stūris kastē ap to, ko atlasījāt, veidojot komponentu) nonāk tur, kur noklikšķiniet. Pēc tam rīks atgriežas pie „{{ui:Select}}”.

Sadaļā „{{ui:Components}}” rādīts, cik kopiju ir ievietotas ("4×"), un sadaļā „{{ui:Outliner}}” skaits rādīts aiz nosaukuma.

## Pārkārtošana sadaļā Struktūra

Velciet rindu sadaļā „{{ui:Outliner}}”, lai mainītu tās vietu. Skatā nekas nepārvietojas: grupa paliek savā vietā modelī.

- **Grupā:** nometiet to uz grupas rindas vidus (rinda iegūst punktētu kontūru). Tas nonāk iekšā, beigās.
- **Citā secībā:** nometiet to uz rindas augšējās vai apakšējās malas (parādās līnija). Tas nonāk tieši pirms vai pēc šīs rindas tajā pašā grupā, kurā atrodas šī rinda, tātad arī tā var nonākt grupā izvēlētā vietā.
- **Līdz augstākajam līmenim:** nometiet to uz sadaļas „{{ui:Outliner}}” virsraksta. Tas nonāk beigās.

Katra nomešana ir viens solis: {{key:Mod+Z}} to atgriež. {{key:Esc}} vilkšanas laikā nekur nenomet. Grupa nevar nonākt pati sevī vai grupā, ko tā satur. Vilkšana ir izslēgta, kamēr laukā „{{ui:Find by name}}” ir teksts.

:::touch
Turiet pirkstu uz rindas brīdi, tad velciet to. Ātra pārvilkšana ritina sarakstu.
:::

## Viena kopija atšķirīga

Atlasiet kopiju un noklikšķiniet „{{ui:Make unique}}” sadaļā „{{ui:Entity info}}” (rādās, ja komponents ir ievietots vairāk nekā vienreiz). Šai kopijai ir sava definīcija ar oriģināla nosaukumu, bet ar jaunu numuru. Rediģējiet to, neskarot pārējās.

## Grupas pārvēršana par komponentu

Atlasiet grupu un noklikšķiniet „{{ui:Make component}}” sadaļā „{{ui:Entity info}}”. Tai tiek dots jauns nosaukums, piemēram, Component#2, pat ja grupu bijāt nosaukuši; ierakstiet nosaukumu vēlreiz laukā „{{ui:Name}}”.

## Sadalīšana

Atlasiet grupu vai komponentu un noklikšķiniet „{{ui:Explode}}” (rīkjoslā vai sadaļā „{{ui:Entity info}}”). Tā saturs kļūst par brīvu ģeometriju tajā pašā vietā un saķeras ar to, ko tas pieskaras. Grupas tajā paliek grupas.

## Cietviela un tilpums

Kad atlasāt grupu vai komponentu, sadaļā „{{ui:Entity info}}” rādās **Cietviela: Jā**, ja tā virsmas ir noslēgtas bez spraugām (katru malu dala tieši divas virsmas) un tajā nav ligzdotu grupu. Tad rādās arī **tilpums**. Kaste, siena ar izgrieztu logu un izvilkts cilindrs ir cietvielas; kaste bez augšējās virsmas nav.

## Kad pazūd pēdējā kopija

Dzēšot pēdējo komponenta kopiju, tas tiek noņemts arī no paneļa „{{ui:Components}}”. {{key:Mod+Z}} to atjauno.

## Ko vajadzētu zināt

- **Grupu** kopijas, kas veidotas ar „{{ui:Move}}”, šajā versijā dala saturu, tāpat kā komponentu kopijas: vienas rediģēšana maina citas. Lai padarītu vienu neatkarīgu, noklikšķiniet „{{ui:Make component}}”, tad „{{ui:Make unique}}”. Skatiet [Problēmu novēršana](topic:troubleshooting#editing-one-group-changed-another).
- Komponenti neizgriež atveres sienās un nelīp pie virsmām, un gatavu komponentu bibliotēkas nav. Jūs veidojat savus vai importējat tos.
- Importētie faili ienāk kā grupa. Collada faili saglabā savas grupas un komponentus tajā.
