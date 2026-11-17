---
title: Salvarea vizualizărilor ca scene
summary: Salvați o cameră și un stil ca scenă, actualizați și redenumiți-o, iar treceți pas cu pas sau redați scenele pentru a prezenta un proiect.
keywords: scenă, vizualizare, vizualizare salvată, cameră, prezentare, animație, redare, diaporamă, page up, page down, file, plimbare virtuală
from: 38680d6e
---

O **scenă** reține o poziție a camerei, un stil și ce este ascuns: de unde priviți, perspectivă sau paralel, stilul fețelor, muchiile, setările soarelui, grupurile ascunse, [etichetele](topic:tags) dezactivate și tăietura de secțiune. Scenele se salvează în fișierul `.modelcraft`.

## Adăugarea unei scene

1. Setați vizualizarea: orbitați, măriți, alegeți un stil, setați soarele.
2. În panoul {{ui:Scenes}} din dreapta, faceți clic pe {{ui:Add scene}}.

   Scena apare în listă, numită „Scena 1”, „Scena 2” și așa mai departe, și ca filă deasupra vizualizării 3D. Bara de stare spune „Scena 1 salvată: această cameră, stilul și ce este ascuns.”

## Trecerea la o scenă

- Faceți clic pe fila sa deasupra vizualizării 3D sau pe numele ei din lista {{ui:Scenes}}.
- Sau apăsați {{key:PageDown}} pentru scena următoare și {{key:PageUp}} pentru cea anterioară. {{ui:Next}} și {{ui:Previous}} de sub listă fac același lucru.

Camera glisează spre scenă în puțin peste o jumătate de secundă. Dacă ați setat calculatorul să reducă mișcarea, camera sare direct acolo.

## Modificarea, redenumirea sau ștergerea unei scene

Fiecare scenă din listă are trei butoane mici după nume:

- **Actualizare** (săgețile circulare): salvează camera, stilul și ce este ascuns în scenă. „Scena 2 actualizată.”
- **Redenumire** (creionul): deschide o casetă „Redenumire scenă”. Tastați noul nume și faceți clic pe {{ui:Save}}.
- **Ștergere** (coșul de gunoi): elimină scena. „Scena 2 ștearsă. Ctrl+Z o readuce.”

Adăugarea, actualizarea, redenumirea și ștergerea scenelor sunt pași de anulare, ca modificările modelului.

## Blocarea camerei unei scene

Când redați aceeași vizualizare iar și iar pe măsură ce proiectul se schimbă, blocați camera acelei scene, astfel că vizualizarea nu se mai mută din greșeală.

1. În lista {{ui:Scenes}}, faceți clic pe butonul de **blocare** (lacătul deschis) după numele scenei. Acesta se închide, iar fila scenei deasupra vizualizării 3D arată un mic lacăt. Bara de stare spune „Scena 2: cameră blocată.”
2. Mergeți la scenă oricând vreți să randați: camera revine exact la vizualizarea salvată, astfel că imaginile făcute din ea se aliniază cu cele anterioare.

Cât timp camera este blocată, **Actualizare** salvează în continuare stilul și ce este ascuns în scenă, dar camera rămâne unde era, chiar dacă ați orbitat în altă parte. Faceți clic din nou pe lacăt pentru a debloca; atunci Actualizare salvează din nou vizualizarea curentă. Blocarea și deblocarea sunt pași de anulare, iar blocarea se salvează în fișierul `.modelcraft`.

## Prezentare

1. Adăugați două sau mai multe scene.
2. Faceți clic pe {{ui:Play}} sub listă. ModelCraft trece la scena următoare la câteva secunde și revine la prima după ultima.
3. Faceți clic pe {{ui:Stop}} (același buton) sau apăsați {{key:Esc}} pentru a opri.

Pentru un studiu al soarelui, adăugați câte o scenă pe oră, cu doar {{ui:Time}} schimbat, apoi redați-le. Vezi [Stiluri și umbre de soare](topic:styles-shadows#a-sun-study).

Pentru a prezenta fără bare, apăsați de două ori {{key:Ctrl+Shift+F}}: ecran complet, apoi ecran complet cu barele ascunse. Filele scenelor rămân deasupra vizualizării.

## Ce arată o scenă

O scenă reține ce era ascuns când ați salvat-o: grupurile și componentele pe care le-ați [ascuns](topic:hide-isolate), [etichetele](topic:tags) dezactivate și planul de [secțiune](topic:sections) care taie. Trecerea la scenă ascunde și arată din nou aceste lucruri. Astfel, o scenă poate arăta toată casa, următoarea casa fără eticheta acoperișului, iar următoarea o secțiune prin ea.

Fețele și muchiile libere ascunse nu fac parte din scene. Trecerea la o scenă nu face un pas de anulare. Scenele salvate de o versiune anterioară a ModelCraft lasă ce este ascuns cum este; faceți clic pe Actualizare pentru a-l salva în ele.

## Exportul unei animații

{{ui:Export animation}}, sub listă, redă scenele de la prima la ultima, mutând camera lin între ele, și salvează filmul ca video **WebM** (două secunde de deplasare și o scurtă pauză pentru fiecare scenă). Înregistrează vizualizarea așa cum o vedeți, la dimensiunea ei pe ecran, în [vizualizarea de prezentare](topic:styles-shadows#presentation-view) (fără axe, ghiduri sau selecție). Apăsați {{key:Esc}} sau faceți clic din nou pe buton pentru a opri fără salvare. WebM se redă în browsere și în VLC, iar editoarele video îl pot converti.

Pentru o plimbare randată (cer, soare, umbre, materiale) la o dimensiune aleasă, folosiți în schimb {{ui:Render video…}}: fără chei de animație, ia scenele în ordine ca drum al camerei. Vezi [Animarea camerei și a obiectelor](topic:animation).

## Lucruri de știut

- Schimbarea stilului sau mutarea camerei după ce ați trecut la o scenă nu schimbă scena până nu faceți clic pe Actualizare.
- Scenele nu se exportă în Collada, OBJ, glTF, STL sau IFC.
