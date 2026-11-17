---
title: Stiluri și umbre de la soare
summary: Afișați modelul umbrit, ca linii ascunse, ca un cadru de sârmă sau transparent, și studiați umbrele pe care le proiectează la orice dată, oră și loc.
keywords: vedere de prezentare, vedere curată, ascundere ghiduri, ascundere axe, stil, umbrit, linie ascunsă, cadru de sârmă, raze x, muchii, umbre, soare, studiu solar, solar, dată, oră, latitudine, longitudine, fus orar, nord
from: 09c95329
---

Panoul {{ui:Stil}} din dreapta modifică modul în care este desenat modelul. Nimic din el nu schimbă modelul în sine și nu face parte din anulare. Fiecare [scenă](topic:scenes) își reține propriul stil, iar fișierul reține stilul pe care îl aveați la salvare.

## Fețe

Alegeți unul din lista {{ui:Fețe}}:

| Stil | Arată ca |
|---|---|
| {{ui:Umbrit}} | Fețe pline, luminate ușor. Fețele văzute din spate sunt albastru-gri. Culorile importate se văd. |
| {{ui:Linie ascunsă}} | Fețe în culoarea de fundal, cu muchii în cerneală: un desen de linii curat, cu liniile ascunse eliminate. Alb pe {{ui:Hârtie}}, închis pe {{ui:Model}}. |
| {{ui:Cadru de sârmă}} | Doar muchii. Fețele nu se desenează, dar tot contează la clic și la agățare: nu puteți selecta prin ele. |
| {{ui:Raze X}} | Fețe transparente, pentru a vedea ce este în spate sau în interior. Ca în cadrul de sârmă, clicurile și agățările se opresc tot la fața cea mai apropiată. |

{{ui:Afișare muchii}} activează sau dezactivează muchiile în fiecare stil, cu excepția lui {{ui:Cadru de sârmă}}. Dezactivată, {{ui:Linie ascunsă}} arată aproape nimic, deoarece fețele sale se confundă cu fundalul. Muchiile moi, cum sunt laturile unui cerc tras, nu se desenează niciodată.

## Activați umbrele de la soare

1. Bifați {{ui:Umbre de la soare}}. Setările soarelui de sub ea devin active, iar modelul proiectează umbre asupra lui însuși și pe sol.
2. Setați locul:
   - {{ui:Latitudine}}: nordul este pozitiv, sudul negativ (New York este aproximativ 40.7, Sydney aproximativ -33.9).
   - {{ui:Longitudine}}: estul este pozitiv, vestul negativ (New York este aproximativ -74.0).
   - {{ui:Decalaj UTC}}: decalajul locului față de UTC, în ore, de exemplu `-5` pentru New York iarna. ModelCraft nu aplică ora de vară; folosiți `-4` pentru New York vara.
3. Setați {{ui:Dată}} (lună și zi) și trageți cursorul {{ui:Oră}}. Ora se mișcă în pași de 15 minute și apare lângă cursor, de exemplu „3:00 pm”.

O linie sub setări arată unde se află soarele, de exemplu „Sun 52° up, 250° from north. North is the green axis.” Noaptea scrie „The sun is down at this time.”

Un model nou începe cu soarele pe 21 iunie la 3:00 pm, la latitudinea 40, longitudinea -105, decalajul UTC -7.

## Orientați modelul spre nord

Nordul ModelCraft este întotdeauna **axa verde**. Pentru a studia un loc real, rotiți modelul astfel încât latura lui de nord să fie orientată după verde: selectați tot ({{key:Mod+A}}), apăsați {{key:Q}}, faceți clic pe un centru pe sol și rotiți-l cu unghiul locului față de nord (vezi [Rotire și scalare](topic:rotate-scale)).

## Un studiu solar

1. Setați locul și data.
2. Adăugați o scenă ({{ui:Adăugare scenă}} în {{ui:Scene}}).
3. Mutați cursorul de oră, apoi adăugați altă scenă. Repetați pentru fiecare oră dorită.
4. Faceți clic pe {{ui:Redare}} pentru a parcurge scenele. Vezi [Salvarea vederilor ca scene](topic:scenes).

## De reținut

- Umbrele pot părea zimțate pe un model foarte mare, deoarece o singură hartă de umbre acoperă tot modelul.
- Umbrele nu se desenează în {{ui:Cadru de sârmă}}.
- Poziția soarelui urmează calculul solar NOAA și este exactă până la o fracțiune de grad, suficient pentru studii de volum. Refracția atmosferică este ignorată, deci unghiurile foarte joase ale soarelui, la răsărit și apus, pot fi ușor greșite.

## Vedere de prezentare

{{ui:Vederi}} › {{ui:Vedere de prezentare}} (sau {{key:Shift+P}}) arată doar modelul: axele, liniile și punctele de ghidare, conturul planurilor de secțiune (tăietura rămâne), marcajele lămpilor, cutia grupului deschis, marcajele și sfaturile de agățare și evidențierea selecției dispar. Folosiți-o pentru a privi clar modelul sau înainte de o captură de ecran. Uneltele funcționează în continuare și agață; doar nu vedeți marcajele. Apăsați din nou {{key:Shift+P}} pentru a le readuce. Cotele rămân, deoarece fac parte din desen. Cât timp editați în interiorul unui grup, restul modelului nu mai este estompat: se arată așa cum este, inclusiv texturile.
