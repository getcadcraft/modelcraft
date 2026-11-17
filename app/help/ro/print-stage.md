---
title: Așezarea lucrurilor pe patul de imprimare și trimiterea lor la o imprimantă
summary: Adăugați elemente din Bibliotecă sau propriul model pe patul imprimantei, aranjați-le, priviți straturile feliate și trimiteți imprimarea prin USB sau prin rețea, ori salvați G-code-ul, fără a exporta mai întâi un fișier STL.
keywords: imprimare 3D, etapă de imprimare, imprimantă 3D, pat, trimitere la imprimantă 3D, program de feliere, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, bibliotecă, aranjare, potrivire totală, previzualizare straturi, umplere, suporturi, filament, pla, petg, supliment, supliment imprimare 3D
from: abcf5d7e
---

{{ui:Etapa de imprimare}} așază lucrurile pe patul imprimantei, le feliază și le trimite la imprimantă. Nu exportați mai întâi un fișier. Ține de suplimentul Imprimare 3D, care este activat implicit.

:::note
Nimic nu a fost încă imprimat cu aceasta pe o imprimantă reală. Programul de feliere este nou: urmăriți primele straturi ale primei imprimări și folosiți previzualizarea straturilor înainte de a trimite.
:::

## Ce se face

Se așază un model pe pat, se verifică dacă încape, se privesc straturile feliate și se trimite la o imprimantă sau se salvează G-code-ul.

## Pași

1. Faceți clic pe {{ui:Etapa de imprimare}} în bara de instrumente. Se deschide o fișă peste vizualizare, iar un contur întrerupt arată patul.
2. Sub **Adăugare din Bibliotecă**, tastați un nume în caseta de căutare, apăsați {{ui:Căutare}} și apăsați {{ui:Adăugare}} la un rezultat. Elementul ajunge pe pat la dimensiunea reală sau micșorat, ca să încapă. Orice ați desenat sau importat deja și se vede în vizualizare este și el pe pat.
3. Sub **Pe pat**, verificați dimensiunea fiecărui element. Un element marcat **În afara patului** trebuie mutat. Mutați, rotiți și scalați lucrurile în vizualizare cu uneltele obișnuite.
4. Apăsați {{ui:Aranjare pe pat}} ca să împrăștiați elementele, sau {{ui:Potrivire totală pe pat}} ca să le micșorați până încap.
5. Sub **Imprimanta**, alegeți dimensiunea **Pat** sau unul dintre profilele imprimantei.
6. Sub **Setări de imprimare**, alegeți **Material**, **Calitate** și **Umplere %**, și bifați **Adăugare suporturi sub porțiunile în consolă** dacă forma le cere.
7. Apăsați {{ui:Previzualizare straturi}} și mutați glisorul **Strat** ca să priviți straturile feliate. Dacă modificați etapa sau setările după aceea, apăsați din nou {{ui:Previzualizare straturi}}.
8. Sub **Conexiune**, alegeți {{ui:Cablu USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} sau {{ui:PrusaLink}}. Pentru USB apăsați {{ui:Conectare}}. Pentru o imprimantă în rețea, tastați **Adresa** ei (și **Cheia API**, dacă o cere), apoi apăsați {{ui:Testare conexiune}}.
9. Apăsați {{ui:Trimitere la imprimanta 3D}}. Fișa întreabă dacă patul este liber și dacă materialul potrivit este încărcat, și arată timpul, materialul și temperaturile. Confirmați ca să trimiteți.

Primiți un mesaj că imprimanta pornește. {{ui:Oprire imprimare}} oprește încălzitoarele, ventilatorul și motoarele. Dacă doriți doar un fișier, apăsați {{ui:Salvare G-code în schimb}}.

## Note

- USB necesită Chrome sau Edge pe computer, iar pagina trebuie să rămână deschisă până se termină imprimarea. Închiderea ei oprește fluxul.
- O imprimantă în rețea trebuie să permită accesul acestui site (în Moonraker adăugați-l în `cors_domains`; în OctoPrint activați CORS și copiați o cheie API). Browserul poate cere permisiunea de a ajunge la dispozitivele din rețea.
- Nimic nu se conectează și nu trimite fără un clic.
- Lista programelor de feliere este sub **Program de feliere**. {{ui:CadCraft de bază (inclus, cel mai rapid)}} este integrat. Kiri:Moto, PrusaSlicer, OrcaSlicer și Bambu Lab P2S sunt suplimente separate, pe care le activați din fișă sau din {{ui:Setări}} › {{ui:Suplimente}}. PrusaSlicer și OrcaSlicer folosesc propria copie instalată și lucrează din CadCraft Studio, pe computer.
- Piesele care nu sunt solide închise sunt lăsate din imprimare, iar fișa arată ce parte din formă reprezintă acestea.
- Pentru imprimantele cu rășină, vedeți [Feliere pentru o imprimantă cu rășină](topic:resin-printing). Pentru a verifica sau a repara mai întâi un model, vedeți [Suporturi, grosimea peretelui, golire și reparare](topic:print-tools).
