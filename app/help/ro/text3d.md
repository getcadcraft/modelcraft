---
title: Text 3D
summary: Adăugați litere într-un model ca fețe, plate sau pline, așezate pe orice față: un semn, un număr de casă, un nume pe o ușă.
keywords: text 3d, text, litere, scriere, semn, semnalistică, număr de casă, etichetă, gravare, font, cuvinte
from: 923f5d93
---

{{ui:Text 3D}} din grupul {{ui:Desenare}} creează scriere din fețe, pe care le puteți vopsi, împinge/trage sau tăia într-un solid.

## Adăugarea textului

1. Faceți clic pe {{ui:Text 3D}}.
2. Scrieți textul. Apăsați {{key:Enter}} în casetă pentru un al doilea rând.
3. Setați {{ui:Înălțimea literei}} (înălțimea unei litere mari, de exemplu `30cm` sau `1'`) și {{ui:Adâncime}}:
   - `0` dă **litere plate**: fețe așezate pe ceea ce le puneți deasupra, gata de vopsit sau de împins/tras.
   - O adâncime, de exemplu `5cm`, dă **litere pline**: solide închise, pe care le puteți folosi cu [uneltele pentru solide](topic:solids).
4. Faceți clic pe {{ui:Plasare}}, apoi faceți clic unde trebuie să ajungă textul.

Pe o față, textul stă pe acea față și se citește de la stânga la dreapta: pe un perete stă vertical; pe sol sau pe o masă stă culcat, de-a lungul roșului. Departe de orice față, stă pe sol.

Textul este o **componentă** care poartă numele lui, deci fiecare copie se schimbă dacă editați una, iar apare în lista {{ui:Componente}} pentru a fi plasată din nou.

## De reținut

- Literele sunt fontul cu o singură linie al ModelCraft, îngroșat: curat și lizibil, fără alegere de font încă.
- Literele, cifrele și semnele uzuale (inclusiv literele cu semne diacritice) sunt desenate; un caracter pe care fontul nu îl are apare ca o casetă mică.
- Pentru a schimba cuvintele, ștergeți textul și adăugați-l din nou.
- Pentru a grava scrierea într-o suprafață, faceți litere pline, plasați-le pe jumătate într-un grup solid și [scădeți-le](topic:solids).
