---
title: Orbitare, pan și zoom
summary: Mișcați-vă în jurul modelului cu un mouse, un touchpad, un ecran tactil sau tastatura și săriți la vederi standard.
keywords: orbitare, pan, zoom, apăsare lungă, trei degete, două degete, atingere, navigare, cameră, vedere, rotire vedere, touchpad, tactil, ciupire, buton din mijloc, zoom extinderi, perspectivă, paralel, vedere de sus, iso
from: 10d4d33a
---

Puteți mișca camera oricând, chiar și în mijlocul desenării unei linii sau al împingerii unei fețe: unealta așteaptă unde era.

## Cu un mouse cu trei butoane

| Ca să | Faceți asta |
|---|---|
| Orbitați | Trageți cu butonul din mijloc (apăsați rotița) |
| Faceți pan | Trageți cu butonul din dreapta sau țineți {{key:Shift}} și trageți cu butonul din mijloc. Apăsarea sau eliberarea {{key:Shift}} în timpul unei trageri comută între orbitare și pan |
| Măriți | Rotiți rotița. Face zoom spre fața de sub indicator sau spre punctul de sub el, la adâncimea centrului vederii |
| Vedeți tot modelul | {{key:Shift+Z}} sau {{ui:Extinderi}} |

Orbitarea rotește vederea în jurul părții din model de sub indicator, astfel încât acel punct rămâne pe loc, în timp ce totul se rotește în jurul lui. Peste spațiul gol, vederea se rotește în jurul centrului ei. Panul păstrează punctul pe care l-ați apucat sub indicator.

Ca să orbitați mereu în jurul centrului vederii, sau ca să faceți orbitarea și panul mai rapide ori mai lente, deschideți {{ui:Setări}} ({{key:Mod+,}}), fila {{ui:ModelCraft}}, **Orbitare și pan**. Vitezele se aplică la mouse, touchpad, tactil și tastele săgeată.

Un clic dreapta fără tragere nu face nimic; ModelCraft nu are meniu la clic dreapta.

## Fără buton din mijloc

Folosiți uneltele de cameră din bara de instrumente sau tastatura:

1. Apăsați {{key:O}} (sau faceți clic pe {{ui:Orbitare}}) și trageți cu butonul stâng ca să orbitați. Țineți {{key:Shift}} în timpul tragerii ca să faceți pan.
2. Apăsați {{key:H}} (sau faceți clic pe {{ui:Pan}}) și trageți ca să faceți pan.
3. Apăsați {{key:Z}} (sau faceți clic pe {{ui:Zoom}}) și trageți în sus ca să măriți, în jos ca să micșorați.
4. Apăsați {{key:Space}} ca să reveniți la {{ui:Selectare}}, sau apăsați tasta uneltei pe care o doriți următoare.

Uneltele de cameră înlocuiesc unealta pe care o foloseați. Ca să priviți în jur în mijlocul unei operații fără s-o pierdeți, folosiți tastatura:

- Tastele săgeată orbitează.
- {{key:Shift}} cu tastele săgeată face pan.

Cât timp o unealtă de desen este în mijlocul unei operații (după primul clic), tastele săgeată blochează direcții în loc să orbiteze. Vezi [Inferență și agățare](topic:inference#lock-a-direction).

## Pe touchpad

Cel mai ușor: deschideți {{ui:Setări}} ({{key:Mod+,}}), fila {{ui:ModelCraft}}, și setați Derulare pe **Touchpad** (sau lăsați „Determină automat”). Apoi glisați cu două degete ca să orbitați, țineți {{key:Shift}} și glisați ca să faceți pan și ciupiți ca să măriți, fără butoane de cameră. Vezi [setările ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Cu Derulare setată pe **Rotiță mouse**:

:::mac
- **Zoom:** derulați cu două degete sau ciupiți. Ambele fac zoom spre indicator.
- **Pan:** apăsați cu două degete (un clic secundar) și țineți degetele apăsate cât trageți. Activați „Clic secundar” în **Setări sistem**, apoi **Touchpad**, dacă clicul cu două degete nu face nimic.
- **Orbitare:** apăsați {{key:O}} și trageți cu un deget, sau folosiți tastele săgeată.
- Țineți {{key:Ctrl}} apăsat în timp ce faceți clic poate să nu conteze drept clic dreapta în ModelCraft, în funcție de browser: poate acționa ca un clic cu {{key:Ctrl}} ținut. Folosiți apăsarea cu două degete pentru pan.
:::

:::windows linux
- **Zoom:** derulați cu două degete. Ciupirea face zoom și acolo unde driverul touchpadului o trimite ca derulare cu {{key:Ctrl}}.
- **Pan:** trageți cu butonul din dreapta (pe multe touchpaduri, apăsați colțul din dreapta jos și trageți), sau apăsați {{key:H}} și trageți.
- **Orbitare:** apăsați {{key:O}} și trageți, sau folosiți tastele săgeată.
:::

Cu Rotiță mouse, derularea cu două degete face zoom; nu face pan. Este opusul multor pagini web, și așa se comportă rotița de mouse în majoritatea modelatoarelor 3D.

:::tip
{{key:Space}} alege unealta {{ui:Selectare}} în ModelCraft. Ținerea lui {{key:Space}} și tragerea nu fac pan, cum se întâmplă în alte aplicații.
:::

## Pe ecran tactil

:::touch
- **Un deget** folosește unealta curentă: **atingeți** pentru clic, **apăsați și trageți** pentru a desena sau a trage.
- Cât timp degetul unei unelte de desen este apăsat, o **lupă** deasupra lui arată ce este sub deget, ca să vedeți punctul final, mijlocul sau muchia la care se agață înainte să ridicați degetul.
- **Stați nemișcat** o jumătate de secundă ca să terminați ce face unealta, cum face {{key:Enter}}: o curbă, un lanț de linii. Fără nimic în desfășurare, stând nemișcat și apoi trăgând cu același deget, **orbitați** până ridicați degetul.
- **Două degete** trase împreună **fac pan**; **ciupiți** ca să măriți. Ambele merg într-un singur gest.
- **Trei degete** trase împreună **orbitează**.
- Ca să le schimbați (două degete orbitează, trei fac pan), deschideți {{ui:Setări}}, fila {{ui:ModelCraft}}, Ecran tactil.
- Punerea unui al doilea deget **anulează** ce a început primul deget (un dreptunghi pe jumătate desenat, o împingere sau tragere în curs). Ridicați degetele și începeți din nou.
- O bară mică la baza vederii are **Gata** ({{key:Enter}}), **Renunțare** ({{key:Esc}}) și {{ui:Anulare}}, pentru când nu există tastatură.
- Atingerea și selectarea ajung puțin mai departe decât cu mouse-ul, iar butoanele sunt mai mari, ca să le poată atinge un deget.
:::

:::mouse
Pe un ecran tactil, un deget folosește unealta curentă (atingeți pentru clic, stați nemișcat ca să terminați sau stați nemișcat și trageți ca să orbitați), două degete fac pan și ciupesc ca să măriți, trei degete orbitează, iar o bară mică oferă Gata, Renunțare și Anulare.
:::

## Vederi standard

1. Faceți clic pe {{ui:Vederi}} din capătul din dreapta al barei de instrumente.
2. Alegeți {{ui:Izometric}}, {{ui:Sus}}, {{ui:Față}}, {{ui:Dreapta}}, {{ui:Spate}}, {{ui:Stânga}} sau {{ui:Jos}}.

Vederea se întoarce spre acea direcție și potrivește tot modelul. {{ui:Față}} privește spre nord, de-a lungul axei verzi; {{ui:Sus}} privește drept în jos, cu nordul în sus.

Cubul de vedere din colțul din dreapta sus al vederii face același lucru dintr-un clic, plus muchii și colțuri, un inel de busolă ca să rotiți modelul și un buton de acasă. Vezi [Cubul de vedere](topic:view-cube).

## Perspectivă și proiecție paralelă

Alegeți {{ui:Vederi}}, apoi {{ui:Perspectivă}}. O bifă înseamnă că perspectiva este activă. Cu ea dezactivată, vederea este o proiecție paralelă (ortogonală): liniile paralele din model rămân paralele pe ecran, ceea ce doriți pentru elevațiile din {{ui:Față}} sau {{ui:Dreapta}}. Bara de stare spune „Perspectivă.” sau „Proiecție paralelă.”

Fiecare scenă ține minte dacă era în perspectivă. Vezi [Salvarea vederilor ca scene](topic:scenes).
