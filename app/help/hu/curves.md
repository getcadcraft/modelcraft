---
title: Görbeobjektumok
summary: Rajzoljon Bézier-, NURBS- és egyenes szakaszokból álló görbéket, adjon nekik vastagságot, szélességet vagy elvékonyodást, töltse ki a lapos görbéket, állítson be szöveget görbeként, és alakítsa őket hálóvá.
keywords: görbe, görbék, bézier, nurbs, spline, splinek, útvonal, cső, vezeték, kötél, ferdítés, lekerekítés, kihúzás, elkeskenyítés, dőlés, sugár, kitöltés, profil, szöveg, betűk, logó, görbe hálóvá
from: 602bf077
---

A **görbeobjektum** olyan görbe, amelyből alakzat lesz: cső a görbe mentén (lekerekítés), szalag (kihúzás), elkeskenyedő kürt (elkeskenyítés), vagy – ha lapos és zárt – kitöltött lemez vagy betűk. Az alakzat követi a görbét: ha mozgat egy pontot, a cső vele együtt mozog. Ha az alakzat megfelelő, alakítsa hálóvá.

## Görbe hozzáadása

Válassza a {{ui:Görbe}} lehetőséget a munkaterület-listában, és nyomja meg a {{ui:Hozzáadás}} gombot:

| Fajta | Mi ez |
| --- | --- |
| Bézier-görbe, Bézier-kör | Átmegy a pontjain; minden pontnak két karja van, amelyek a görbe irányát állítják |
| NURBS-görbe, NURBS-kör, Útvonal | Sima, a pontjai felé húzódik (a végpontjain kezdődik és végződik); minden pontnak van súlya |
| Szöveg | A szövege lapos, kitöltött betűkörvonalként |

Az új görbe vékony csövet kap, hogy látható és kijelölhető legyen; a lekerekítés mélységét állítsa 0-ra, ha csupasz görbét szeretne.

Kiindulhat egy már megrajzolt elemből is: jelöljön ki egy ívet, kört, sokszöget vagy megrajzolt görbét a Modell munkaterületen, majd nyomja meg az Entitásinfó panel {{ui:Görbeobjektum létrehozása}} gombját. A megrajzolt vonalak megmaradnak.

## A pontok szerkesztése

Kattintson duplán egy görbeobjektumra (vagy jelölje ki, és válassza a {{ui:Görbe}} lehetőséget), hogy szerkeszthesse.

- Kattintson egy pontra vagy karra (a Shift hozzáad vagy elvesz); húzza a mozgatásához. Üres helyen húzva dobozzal jelöljön ki.
- A {{ui:Meghosszabbítás}} ({{key:E}}, vagy {{key:Ctrl}}+kattintás) a kijelölt végén a mutatónál új pontot ad hozzá.
- A {{ui:Felosztás}} ({{key:W}}) pontot tesz minden két kijelölt szomszéd közé; a Bézier megtartja az alakját.
- A {{ui:Mozgatás}}, a {{ui:Forgatás}} és a {{ui:Léptékezés}} a kijelölt pontokat a mutatóval mozgatja (a modellező billentyűi a {{key:G}} {{key:R}} {{key:S}}, a tolás/húzás billentyűi az {{key:M}} {{key:Q}} {{key:S}}); kattintson a megtartáshoz, az {{key:Esc}} a visszavonáshoz.
- A {{ui:Bezárás}} ({{key:C}}) lezár egy nyitott splinet, vagy megnyit egy zártat; a {{ui:Megfordítás}} ({{key:Shift+R}}) fordított irányba futtatja.
- Bézier-karok: a {{ui:Simítás}} ({{key:V}}) sima görbéhez helyezi őket, a {{ui:Csúcs}} ({{key:Shift+V}}) a szomszédok felé mutatja, a {{ui:Szabad}} ({{key:Alt+V}}) ott hagyja, ahová tette. Egy kar húzása szabaddá teszi.
- A {{ui:Bézier}}, a {{ui:NURBS}} és a {{ui:Poli}} megváltoztatja a kijelölt splinek típusát, a pontok megtartásával.

Minden módosítás egy visszavonási lépés.

## Alak

A beállítások a panelen vannak (és a Modell munkaterület Entitásinfó paneljén):

- **Alak:** a 3D-s görbék bármerre mehetnek; a lapos görbe a saját síkjában marad, és kitölthető.
- **Zárt splinek kitöltése** (lapos): a körvonalakból lemez lesz; egy másik körvonalon belül lévő körvonal lyuk, így a betűk megtartják a lyukaikat.
- **Kihúzás:** a szalag szélességének fele (nyitott vagy 3D-s görbéknél), vagy a lemez vastagságának fele (kitöltve).
- **Lekerekítés mélysége** és **lekerekítettség:** kerek cső a görbe mentén (kihúzással: lekerekített szalag); kitöltött alakzatnál lekerekített él.
- **Végek lezárása:** kupakok egy nyitott csövön.
- **Elkeskenyítés a görbe mentén:** egyenletesen skálázza minden spline mentén, például `1, 0.2` egy kürthöz, `0, 1, 0` egy orsóhoz.
- **Simaság** és NURBS esetén a **rend**: milyen finoman rajzolódik, és milyen sima (2 egyenes … 6 legsimább).
- Kijelölt pontokkal: a **sugár** (a cső vastagsága ott, szorozva a lekerekítéssel), a **dőlés** (a szalagot a görbe körül elforgatja) és NURBS esetén a **súly**.

A módosítók a görbeobjektumon úgy működnek, mint a hálón: Tömb a görbe mentén, Tükrözés, Felosztott felület. Lásd [Módosítók egy hálón](topic:modifiers).

## Átalakítás hálóvá

A {{ui:Hálóvá}} (a Görbe munkaterületen vagy az Entitásinfóban a {{ui:Görbe hálóvá}}) a görbeobjektumot azzá a hálóvá alakítja, amelyet most mutat; a módosítói rajta maradnak. Ezután a Háló munkaterületen szerkessze. A visszavonás visszaalakítja.

Lásd még [Hálók](topic:meshes) és [Háló szerkesztése](topic:mesh-edit).
