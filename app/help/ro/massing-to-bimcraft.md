---
title: Trimiterea volumetriei în BimCraft
summary: Trimiteți volumetriile făcute cu push/pull în BimCraft ca opțiuni de volumetrie, cu etajele, amprenta, suprafața brută și volumul calculate din fiecare solid.
keywords: volumetrie, masă, concept, opțiuni, bimcraft, ifc, bim, push pull, etaje, niveluri, suprafață brută, amprentă, volum, trimitere, predare, masă a clădirii, etapa 2
from: 73c51f3f
---

## Ce veți face

Transformați blocurile modelate cu push/pull în opțiuni de volumetrie pe care BimCraft le înțelege, ca mai departe conceptul să continue ca model de clădire.

## Înainte de a începe

Faceți din fiecare masă un **grup** sau o **componentă** și dați-i un nume. Fiecare devine o opțiune. Geometria liberă nu se trimite.

## Trimiterea

1. Selectați grupurile de trimis. Dacă nu este selectat nimic, pleacă fiecare grup și componentă de nivel superior.
2. Alegeți {{ui:Exportare}}, apoi {{ui:Volumetrie în BimCraft…}}.
3. Introduceți {{ui:Numele setului de opțiuni}} și {{ui:Înălțimea etajului}}.
4. Verificați lista: etajele, amprenta, suprafața brută și volumul fiecărei opțiuni.
5. Alegeți **Trimitere la BimCraft** pentru a deschide BimCraft într-o filă nouă, cu opțiunile, sau {{ui:Salvare ca IFC}} pentru a descărca fișierul și a-l deschide acolo singur.

În BimCraft, opțiunile sunt listate sub „Opțiuni de volumetrie din model”, unde una poate fi făcută opțiune curentă și dezvoltată în pereți și planșee.

## Cum devine un solid o masă

- **Etajele** sunt înălțimea solidului împărțită la înălțimea etajului, rotunjite, și cel puțin unul. Apoi etajele împart în mod egal înălțimea solidului, deci un bloc de 10 m cu etaje de 3 m are 3 etaje de 3.33 m.
- **Suprafața unui etaj** este aria secțiunii orizontale proprii a solidului la nivelul acelui etaj. Un bloc care se retrage are etajele de sus mai mici, iar suprafața brută este suma lor.
- **Amprenta** este conturul secțiunii chiar deasupra bazei solidului.
- **Volumul** este al solidului însuși.

În fișierul IFC, fiecare opțiune este un element proxy de clădire (amprenta ridicată la înălțimea solidului), cu un spațiu pe etaj care poartă suprafața brută a etajului. Toate opțiunile împart o singură clădire, cu atâtea niveluri câte are cea mai înaltă opțiune.

## Forme simplificate

Un bloc simplu, drept, trece exact cum a fost modelat. Orice altceva se trimite totuși, iar lista spune de ce forma lui este simplificată:

- **Nu toate etajele sale au mărimea bazei** (se retrage sau se înclină): masa din BimCraft este conturul bazei ridicat la înălțimea totală, dar suprafețele etajelor și volumul sunt ale solidului.
- **Solidul nu este închis**: etajele a căror secțiune nu poate fi închisă nu sunt măsurate și contează ca nimic. Închideți solidul ({{ui:Informații entitate}} afișează „Solid: Da”) pentru cifre complete.
- **Baza are mai mult de un contur**: se folosește cel mai mare ca amprentă.

## De reținut

- {{ui:IFC pentru BimCraft (.ifc)}} este o exportare diferită: trimite doar forme și nume, fără etaje sau suprafețe.
- Nimic nu se încarcă. Fișierul este predat filei BimCraft de pe acest calculator.
