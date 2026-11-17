---
title: Adăugarea unui motor de randare cu un supliment
summary: Ce poate adăuga un supliment în lista Motor din caseta Randare, permisiunea de care are nevoie ca să ruleze un program și ce verifică și ce întreabă Studio.
keywords: supliment, motor, motor de randare, dezvoltator, engine.run, permisiune, program, script, semnat, studio, api
from: cd7a39ba
---

Un supliment ({{ui:Setări}} › {{ui:Suplimente}}) poate adăuga un motor în lista Motor a {{ui:Randare imagine…}}. Textul complet pentru autorii de suplimente este secțiunea 16 din specificația suplimentelor; pe scurt:

- Suplimentul înregistrează un motor cu un id care începe cu al lui, un nume, setări opționale și **fie** un program de rulat, **fie** o funcție în JavaScript care desenează imaginea.
- Un motor care rulează un program are nevoie de permisiunea **`engine.run`**, afișată înainte de instalare și în Setări. Rulează doar în Studio; în browser apare ca un fișier de salvat.
- Suplimentul numește programul (un nume simplu de fișier, niciodată un shell), un script care este **în interiorul suplimentului semnat**, și argumente formate din substituenți și cuvinte simple. Studio găsește programul sau cere ca el să fie indicat o dată.
- Prima dată când un supliment rulează un program, **Studio întreabă într-o casetă proprie**: care supliment, ce program și că un script poate face orice poate face programul. Permiteți doar pentru un supliment de încredere. Răspunsul este reținut pentru acel supliment și program.
- Pachetul (scena ca USD și un fișier de setări, cu fișierul glTF când suplimentul îl cere) și scriptul suplimentului merg într-un dosar temporar nou, programul rulează acolo, iar imaginea revine marcată cu numele motorului suplimentului.

:::note
Suplimentele pot adăuga motoare de randare doar din versiunea 1.4 a API-ului de suplimente. Un exemplu lucrat pentru un program de randare deschis, din linia de comandă, este în depozitul său propriu; nu a fost încă rulat în acel program de randare.
:::
