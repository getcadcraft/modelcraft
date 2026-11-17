---
title: Vedeți modelul pe șantier cu un telefon Android (AR)
summary: Ridicați un telefon Android cu Chrome și vedeți modelul la mărime reală peste camera foto, aliniat la clădire prin două puncte în care staționați, cu o lentilă raze X și o reverificare rapidă la următoarea vizită. Pentru vizualizare, nu pentru trasare.
keywords: ar, realitate augmentată, telefon, android, chrome, webxr, pe șantier, șantier, amplasament, cameră, mărime reală, raze X, aliniere, aliniază, reverificare, arcore
from: 0f43b50b
---

{{ui:Vizualizare pe teren (AR, telefon)}} din meniul {{ui:Vederi}} arată modelul la mărimea lui reală peste camera telefonului. Funcționează pe un **telefon Android cu Chrome**, pe o pagină sigură (https), acolo unde telefonul acceptă AR. Pe un iPhone sau iPad, pe un calculator sau pe o aplicație Android care doar arată o pagină web, opțiunea spune de ce nu poate porni; folosiți vederea 3D acolo sau deschideți această pagină în Chrome pe telefon.

**Un telefon este pentru vizualizare.** Nu măsurați, nu trasați și nu tăiați nimic din ce arată ecranul: telefonul se abate pe măsură ce mergeți, iar eroarea de indicare crește odată cu distanța de cele două puncte pe care le-ați aliniat (câțiva centimetri lângă ele, mai mult departe). Nimic de aici nu are precizie topografică.

## Alinierea modelului

1. Deschideți modelul pe telefon și alegeți {{ui:Vizualizare pe teren (AR, telefon)}}. Permiteți accesul la cameră.
2. Panoul de jos numește primul punct (un colț de la sol al modelului). Stați acolo, pe șantier, îndreptați cercul verde spre sol și atingeți {{ui:Plasare punct}}.
3. Mergeți la al doilea punct, la cel puțin jumătate de metru distanță (cu cât mai departe, cu atât potrivirea este mai bună), și faceți la fel.
4. Modelul apare la mărime reală, rotit și mutat ca să se potrivească cu cele două locuri. Panoul arată cât de bine concordă cele două puncte.

{{ui:Reluare de la început}} șterge punctele. Alinierea se păstrează în fișierul modelului, astfel că data următoare când deschideți modelul pe teren pornește deja aliniat.

## Lentila raze X

{{ui:Lentilă raze X}} arată întregul model într-o cutie în fața telefonului (cam un metru și jumătate lățime și trei metri adâncime) și doar o umbră slabă în rest, ca să vedeți ce se află în spatele unui perete fără să pierdeți peretele real.

## Următoarea vizită

Stați la primul punct și atingeți {{ui:Reverificare}}, apoi {{ui:Plasare punct}}. Sub 5 centimetri de abatere, alinierea se păstrează. Până la jumătate de metru, modelul se mută cu diferența. Mai mult de atât, panoul cere să indicați din nou cele două locuri.

## Ieșire

{{ui:Ieșire din AR}} încheie sesiunea. Imaginea camerei rămâne în browser: nimic nu se încarcă.
