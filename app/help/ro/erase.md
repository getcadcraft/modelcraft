---
title: Ștergerea și curățarea
summary: Ștergeți muchii, grupuri și ghidaje cu instrumentul de ștergere sau cu tasta Delete, unificați fețele divizate și corectați fețele orientate în direcția greșită.
keywords: ștergere, gumă, Delete, eliminare, unire, unire fețe, curățare, linii rătăcite, inversare față, spatele feței, anulare
from: 80b92a81
---

## Ștergerea cu instrumentul de ștergere

1. Apăsați {{key:E}} pentru {{ui:Ștergere}}.
2. Faceți clic pe o muchie, un grup sau o componentă, ori un ghidaj. Acesta se șterge.
3. Pentru a șterge mai multe, apăsați și trageți peste ele. Tot ce treceți peste este evidențiat, iar toate se șterg când eliberați.

Instrumentul de ștergere nu selectează fețe: o față dispare când ștergeți muchiile de care are nevoie. Fețele sunt ceea ce instrumentul parcurge pentru a găsi muchiile.

## Ce se întâmplă cu fețele

- **O muchie între două fețe din același plan** (o linie desenată peste o podea, de exemplu) dispare, iar cele două fețe **se unesc** într-una.
- **O muchie de care o față are nevoie ca să rămână închisă** (muchia unei cutii) ia cu ea fața. Ștergeți o muchie de sus a unei cutii și dispar partea de sus și o latură, rămânând o cutie deschisă.
- **Capetele libere** (punctele pe care nu le mai folosește nicio muchie) sunt curățate.

Ștergerea ultimei copii a unei componente elimină și componenta din panoul {{ui:Componente}}.

## Ștergerea cu tasta Delete

1. Selectați ce doriți să eliminați cu {{ui:Selectare}}.
2. Apăsați {{key:Delete}} sau {{key:Backspace}}.

Aceasta elimină și fețe. O față ștearsă astfel își lasă muchiile în urmă, așa că puteți șterge partea de sus a unei cutii și păstrați conturul ei, apoi desenați altceva acolo.

## Curățarea liniilor rătăcite pe o față plană

Dacă un perete sau o podea arată linii nedorite (rămase din desenare), ștergeți-le cu {{ui:Ștergere}}. Liniile situate în față dispar prin unire; fața rămâne.

## O față orientată în direcția greșită

O față văzută din spate este gri-albăstruie. Dacă o față apare gri-albăstruie pe exteriorul modelului:

1. Selectați fața.
2. Faceți clic pe {{ui:Inversare față}} din {{ui:Informații entitate}}.

Direcția fețelor contează cel mai mult la export: programele de randare, motoarele de joc și imprimantele 3D pot ascunde sau citi greșit fețele orientate spre interior.

## Anularea unei greșeli

{{key:Mod+Z}} anulează câte un pas, iar {{key:Mod+Y}} (sau {{key:Mod+Shift+Z}}) refac. O tragere cu instrumentul de ștergere este un singur pas, oricâte lucruri ar cuprinde. Bara de stare numește ce a fost anulat: „Ștergere anulată.”
