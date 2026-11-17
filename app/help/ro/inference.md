---
title: Inferență și agățare
summary: Ce înseamnă markerele colorate, care agățare are prioritate și cum blocați o direcție cu tastele săgeți sau cu Shift.
keywords: inferență, agățare, capăt, mijloc, centrul feței, centru, pe muchie, pe față, axă, axa roșie, axa verde, axa albastră, paralel, perpendicular, blocare, shift, agățare la obiect
from: e78984e9
---

Cât timp un instrument de desen sau de editare lucrează, ModelCraft se uită la ce se află sub indicator și se agață de cel mai util lucru din apropiere. Un marker arată ce a găsit, iar vârful din stânga jos îi dă numele.

## Markeri și indicii

| Indiciu | Marker | Se agață de |
|---|---|---|
| Capăt | Cerc verde | Capătul unei muchii |
| Mijloc | Cerc cyan | Mijlocul unei muchii |
| Centrul feței | Cerc albastru | Mijlocul feței de sub indicator |
| Punct de ghid | Gri | Un punct de ghid lăsat de ruletă |
| Origine | Ocru | Locul în care se întâlnesc axele roșie, verde și albastră |
| Pe axa roșie / Pe axa verde / Pe axa albastră | O linie în culoarea respectivă | O linie din punctul de start în direcția respectivă |
| Paralel cu muchia / Perpendicular pe muchie | Linie magenta | O linie din punctul de start, paralelă sau perpendiculară pe muchia reținută (vezi mai jos) |
| Blocat | Linie magenta | O direcție blocată cu o tastă săgeată sau cu {{key:Shift}} |
| Pe muchie | Pătrat roșu | Oriunde de-a lungul unei muchii |
| Pe ghid | Gri | Oriunde de-a lungul unei linii de ghid |
| Pe față | Romb albastru | Oriunde pe o față |
| Pe plan | niciunul | Planul pe care ați început, când indicatorul este deasupra spațiului gol |
| Pe sol | niciunul | Solul (planul roșu-verde), când nu este nimic altceva acolo |

Când o linie de axă din punctul de start taie o muchie sau un ghid, ModelCraft se agață de intersecție, iar vârful le numește pe amândouă, de exemplu „Pe axa roșie, pe muchie”.

## Care agățare câștigă

1. **Puncte** în jur de 12 pixeli: întâi capetele, apoi punctele de ghid, mijloacele, centrul feței de sub indicator și originea.
2. **Direcții** din punctul de start: axele roșie, verde și albastră, și paralel sau perpendicular pe muchia reținută.
3. **Pe o muchie** sau pe o linie de ghid.
4. **Pe o față.**
5. **Planul de desen** sau solul.

Lucrurile ascunse în spatele unei fețe nu se agață niciodată. Orbitați ca să vedeți punctul dorit.

## Desenați pe o față dintr-un punct

Un {{ui:Dreptunghi}}, {{ui:Cerc}} sau {{ui:Poligon}} început pe un colț, un mijloc, o muchie sau centrul unei fețe se desenează **în planul feței de sub indicator** și taie acea față. O muchie aparține la două fețe, deci partea muchiei pe care se află indicatorul decide: ca să desenați pe capătul unei cutii lungi, începeți din mijlocul uneia dintre muchiile sale, cu indicatorul chiar în interiorul fenței de capăt.

## Paralel și perpendicular

ModelCraft reține **ultima muchie peste care a trecut indicatorul înainte de primul clic**. A începe pe un colț sau pe o muchie contează ca trecere peste acea muchie. Odată ce instrumentul lucrează, celelalte muchii peste care treceți nu o înlocuiesc.

Ca să desenați o linie paralelă cu o muchie existentă:

1. Apăsați {{key:L}} și treceți cu indicatorul peste muchia pe care vreți să o urmați.
2. Mutați-vă la punctul de start, fără să treceți peste alte muchii pe drum dacă puteți, și faceți clic.
3. Mutați-vă în direcția paralelă cu acea muchie. Linia devine magenta, iar vârful spune „Paralel cu muchia”. Perpendicularul funcționează la fel, în planul pe care desenați.

Dacă s-a reținut muchia greșită, apăsați {{key:Esc}}, treceți peste muchia corectă și începeți din nou.

## Blocați o direcție

După primul clic al unui instrument, puteți păstra următorul punct pe o singură linie:

| Tastă | Blochează pe |
|---|---|
| {{key:Right}} | Axa roșie |
| {{key:Left}} | Axa verde |
| {{key:Up}} | Axa albastră (drept în sus) |
| {{key:Down}} | Paralel cu muchia reținută (vezi mai sus) |

Apăsați aceeași săgeată din nou ca să deblocați. Bara de stare afișează „Blocat pe axa roșie. Apăsați aceeași săgeată ca să deblocați.”

Cât timp este blocat, punctul alunecă de-a lungul liniei spre locul unde se află indicatorul și tot se aliniază cu punctele peste care treceți: treceți cu indicatorul peste colțul altei cutii ca să desenați o linie de-a lungul axei roșii exact până la acel colț.

**{{key:Shift}}** blochează direcția pe care sunteți agățat chiar acum (o axă sau o paralelă), atât timp cât îl țineți apăsat. Eliberați-l ca să deblocați.

Blocările funcționează în {{ui:Linie}}, {{ui:Dreptunghi}}, {{ui:Cerc}}, {{ui:Poligon}}, {{ui:Mutare}}, {{ui:Scalare}} și {{ui:Ruletă}}. Înainte de primul clic, tastele săgeți orbitează vizualizarea.

## În interiorul unui grup

Cât editați în interiorul unui grup sau al unei componente, axele sunt cele proprii grupului (se mișcă odată cu el și se rotesc odată cu el, dacă a fost rotit). Agățările tot găsesc puncte și muchii din afara grupului, așa că puteți alinia lucrurile cu restul modelului.
