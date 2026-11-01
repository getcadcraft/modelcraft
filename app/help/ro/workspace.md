---
title: Ecranul ModelCraft
summary: Un tur al barei de instrumente, al panourilor de pe fiecare parte, al vizualizării 3D și al barei de stare, după numele de pe ecran.
keywords: ecran, aspect, bară de instrumente, panouri, structură arborescentă, informații entitate, stil, scene, bară de stare, casetă de valori, unități, interfață, tur
from: 4a9a4516
---

De sus în jos: bara de aplicații, bara de instrumente, cele trei coloane (panourile din stânga, vizualizarea 3D, panourile din dreapta) și bara de stare.

## Bara de aplicații

Bara subțire de sus aparține fiecărei aplicații CadCraft. Are numele și versiunea aplicației, {{ui:Despre ModelCraft}}, butonul de mod ecran și comutatorul {{ui:Hârtie}} / {{ui:Model}}.

- {{ui:Hârtie}} este tema luminoasă, iar {{ui:Model}} cea întunecată. Vizualizarea 3D își schimbă culorile să se potrivească; modelul nu se schimbă.
- Butonul de mod ecran (la început scrie {{ui:Ecran complet}}) și {{key:Ctrl+Shift+F}} trec prin trei moduri: normal, ecran complet și ecran complet cu barele ascunse. Cu barele ascunse, treceți cu indicatorul pe marginea de sus a ecranului (sau atingeți-o) ca să le aduceți înapoi. {{key:Esc}} iese din ecran complet.

:::note
{{key:Ctrl+Shift+F}} folosește tasta Ctrl pe orice calculator, și pe Mac. Pe iPhone, unde browserele nu au ecran complet, butonul doar ascunde și arată barele.
:::

## Bara de instrumente

Bara de instrumente este împărțită în grupuri etichetate. Treceți cu indicatorul peste un buton ca să vedeți numele și tasta lui.

În stânga, lista {{ui:Spațiu de lucru}} schimbă la ce servesc bara de instrumente și panoul din dreapta: {{ui:Model}} (modelare prin împingere/tragere, turul de mai jos), {{ui:Plasă}} ([editați o plasă](topic:mesh-edit)), {{ui:Curbă}} ([obiecte-curbă](topic:curves)), {{ui:UV}} ([așezați UV-urile](topic:uv)), {{ui:Sculptare}} ([sculptați](topic:sculpt)), {{ui:Umbrire}} ([materiale făcute cu noduri](topic:shading)), {{ui:Animație}} ([animați](topic:animate)) și {{ui:Randare}} ([randare în vizualizare](topic:render#render-in-the-view)).

| Grup | Butoane |
|---|---|
| Fișier | {{ui:Nou}}, {{ui:Deschidere}}, {{ui:Salvare}}, {{ui:Import}}, {{ui:Exportare}} (un meniu de formate) |
| Desenare | {{ui:Linie}} ({{key:L}}), {{ui:Dreptunghi}} ({{key:R}}), {{ui:Cerc}} ({{key:C}}), {{ui:Poligon}} ({{key:N}}) |
| Modificare | {{ui:Selectare}} ({{key:Space}}), {{ui:Împinge/Trage}} ({{key:P}}), {{ui:Mutare}} ({{key:M}}), {{ui:Rotire}} ({{key:Q}}), {{ui:Scalare}} ({{key:S}}), {{ui:Ștergere}} ({{key:E}}), {{ui:Ruletă}} ({{key:T}}) |
| Organizare | {{ui:Componentă}} ({{key:G}}), {{ui:Grup}} ({{key:Shift+G}}), {{ui:Descompunere}} |
| Editare | {{ui:Anulare}} ({{key:Mod+Z}}), {{ui:Refacere}} ({{key:Mod+Y}}), {{ui:Copiere}} ({{key:Mod+C}}), {{ui:Lipire}} ({{key:Mod+V}}), {{ui:Mai multe}} (un meniu: decupare, copiere, lipire, lipire în aceeași poziție {{key:Mod+Shift+V}}, duplicare {{key:Mod+D}}, ștergere, selectare totală, anularea selecției și stilul de taste) |
| Cameră | {{ui:Orbitare}} ({{key:O}}), {{ui:Pan}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Extinderi}} ({{key:Shift+Z}}), {{ui:Vederi}} (un meniu) |

Tastele afișate sunt cele pentru împingere/tragere; cu stilul Modelator ales în [Setările ModelCraft](topic:settings), indicațiile arată în schimb acele taste. Instrumentul folosit apare apăsat. Pe un ecran îngust, bara de instrumente derulează lateral.

Meniul {{ui:Vederi}} are {{ui:Izometric}}, {{ui:Sus}}, {{ui:Față}}, {{ui:Dreapta}}, {{ui:Spate}}, {{ui:Stânga}} și {{ui:Jos}}, fiecare încadrat pe model, și {{ui:Perspectivă}}, care trece între proiecție în perspectivă și proiecție paralelă.

## Vizualizarea 3D

Mijlocul ecranului. Liniile roșie, verde și albastră sunt axele: roșie și verde stau pe sol, albastra arată în sus, iar **nordul este axa verde**. Locul unde se întâlnesc este originea.

- La pornire, un card intitulat „{{ui:Începeți modelarea}}” enumeră primele taste. Dispare când alegeți un instrument de desenare sau faceți clic în vizualizare.
- Cât timp lucrează un instrument, vizualizarea arată **markere de inferență**: forme colorate mici unde indicatorul se agață (un cerc verde la un capăt, unul cyan la un mijloc, un pătrat roșu pe o muchie, un romb albastru pe o față). Vedeți [Inferența și agățarea](topic:inference).
- Lucrurile selectate devin albastre. O față văzută din spate este gri-albastră.
- Când deschideți un grup ca să-l editați, tot ce este în afara lui se estompează, iar axele se mută pe axele proprii ale grupului.
- Când un model are scene, o linie de file cu scene apare de-a lungul sus al vizualizării.
- Trageți un fișier oriunde pe vizualizare ca să-l deschideți sau importați.

## Panourile din stânga

**{{ui:Structură arborescentă}}** enumeră grupurile și componentele din model, cuibărite cum sunt în model. O componentă folosită de mai multe ori arată de câte ori, cum ar fi „Fereastră (4)”.

- Faceți clic pe un nume ca să-l selectați. Faceți dublu-clic ca să-l deschideți pentru editare.
- **Căutare după nume** (apare când există două sau mai multe grupuri) păstrează doar rândurile al căror nume se potrivește, cu grupurile în care se află. {{key:Esc}} o golește.
- **Ochiul** de la capătul unui rând ascunde sau arată grupul sau componenta respectivă (ca {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Ascundere}}). O pictogramă de etichetă înseamnă că este ascunsă de [eticheta](topic:tags) ei.
- **Redenumire pe loc:** faceți clic pe un rând, apoi apăsați {{key:F2}}, scrieți și apăsați {{key:Enter}} ({{key:Esc}} păstrează numele vechi).
- **Trageți un rând** pe mijlocul rândului altui grup ca să-l mutați în acel grup, pe marginea de sus sau de jos a unui rând ca să-l puneți chiar înainte sau după acel rând, sau pe titlul {{ui:Structură arborescentă}} ca să-l mutați la nivelul de sus. Rămâne unde este în model și își păstrează culoarea, eticheta și numele. Un grup nu poate intra în el însuși. Fiecare mutare este un singur pas de anulare. Vedeți [Rearanjarea în Structură arborescentă](topic:groups-components#rearrange-in-the-outliner).
- Cât editați în interiorul unui grup, o linie spune „Editare: Model › …”, iar apare butonul {{ui:Închidere grup}}. Închide toate nivelurile deschise deodată.

**{{ui:Componente}}** enumeră fiecare definiție de componentă, cu câte copii sunt plasate („3×”) și un buton {{ui:Plasare}} care adaugă o altă copie acolo unde faceți clic.

## Panourile din dreapta

**{{ui:Informații entitate}}** descrie ce este selectat. Titlul se schimbă ca să spună ce anume este:

| Titlu | Arată | Butoane |
|---|---|---|
| Model (nimic selectat) | Fețe, muchii, grupuri, componente și câte sunt plasate, ghiduri, dimensiunea totală | {{ui:Ștergere toate ghidurile}} (când există ghiduri) |
| Față | Aria, numărul de găuri | {{ui:Inversare față}} |
| Muchie | Lungimea | niciunul |
| Grup sau Componentă | Numele (scrieți ca să redenumiți), de câte ori este plasat, dacă este un solid închis, volumul și dimensiunea | {{ui:Editare}}, {{ui:Descompunere}}, {{ui:Creare unică}} (o componentă plasată de mai multe ori), {{ui:Creare componentă}} (un grup) |
| Punct de ghid sau linie de ghid | nimic | {{ui:Ștergere}} |
| Mai multe lucruri | Câte fețe, muchii, grupuri și ghiduri, aria totală a fețelor | {{ui:Creare componentă (G)}}, {{ui:Creare grup (Shift+G)}} |

**{{ui:Stil}}** stabilește cum este desenat modelul: {{ui:Fețe}} ({{ui:Umbrit}}, {{ui:Linie ascunsă}}, {{ui:Cadru de sârmă}}, {{ui:Raze X}}), {{ui:Afișare muchii}} și {{ui:Umbre de la soare}} cu data, ora și locul soarelui. Vedeți [Stiluri și umbre de la soare](topic:styles-shadows).

**{{ui:Scene}}** salvează vederi: {{ui:Adăugare scenă}}, lista de scene și {{ui:Anterioară}}, {{ui:Redare}} și {{ui:Următoare}}. Vedeți [Salvarea vederilor ca scene](topic:scenes).

## Bara de stare

De-a lungul josului, de la stânga la dreapta:

1. **Sfatul**: ce vrea instrumentul în continuare, sau de ce se agață indicatorul („Capăt”, „Pe axa roșie”).
2. **Mesajele**: ce s-a întâmplat („Anulată împingere/tragere.”, „Importat site.dxf: 1697 de muchii pe sol, într-un grup.”) sau de ce ceva nu a mers.
3. **Caseta de valori**: eticheta ei se schimbă cu instrumentul ({{ui:Lungime}}, {{ui:Cote}}, {{ui:Rază}}, {{ui:Laturi}}, {{ui:Distanță}}, {{ui:Unghi}}, {{ui:Scalare}}, {{ui:Decalare}}). Arată dimensiunea în timp real cât lucrați și primește ce scrieți. Vedeți [Scrieți dimensiuni exacte în caseta de valori](topic:value-box).
4. **Stilul de taste**: {{ui:Taste: Împinge/Trage}} sau {{ui:Taste: Modelator}} schimbă simultan comenzile de la tastatură și butoanele mouse-ului (la fel ca în [Setările ModelCraft](topic:settings)).
5. **{{ui:Agățare}} și {{ui:Coliziune}}**: agățarea la puncte, muchii și axe, iar solidele se opresc unde se ating. Barat = dezactivat. Faceți clic ca să comutați. Vedeți [Setările ModelCraft](topic:settings).
6. **Selectorul de unități**: unitatea în care se arată lungimile. Vedeți [Începeți](topic:getting-started#check-the-units-first).

## Pe un ecran îngust

Sub circa 760 de pixeli lățime (un telefon sau o fereastră îngustă), vizualizarea 3D ocupă ecranul. Bara de instrumente este un singur rând care derulează lateral, iar panourile se deschid ca foi din bara de jos a ecranului.
