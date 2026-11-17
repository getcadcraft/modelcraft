---
title: Közös modellezés a Live TeamWork-kel
summary: Ami változik a ModelCraft-ban, amíg a CadCraft Studio Live TeamWork munkamenetében van: mindenki csoportjai és komponensei egy modellben, ki alakíthat át mit egyszerre, a saját visszavonás, és csatlakozás böngészőből ugyanazon a hálózaton.
keywords: live, live teamwork, studio live, együtt, együttműködés, munkamenet, megosztás, csatlakozás, csoport, komponens, nyomás/húzás, kurzor, mutató, egymás látása, nevek, szín, kijelölés, visszavonás, házigazda
from: d8d2f282
---

## Mit fog megtudni

Mi történik egy modellel, amikor többen egyszerre dolgoznak rajta. A CadCraft Studio indítja és csatlakoztatja a Live TeamWork munkamenetet (Megosztás, Csatlakozás); ez az oldal magáról a modellről szól.

## Munka a saját csoportban

Mindenki ugyanazt a modellt szerkeszti, és a saját szerkesztései azonnal megjelennek. A változások összeolvadása attól függ, mit változtat:

- **Elhelyezett csoportok és komponensek mozgatása, elnevezése, színezése vagy elrejtése** összeolvad: ha két ember két csoportot mozgat, mindkettő megtartja a mozgatását.
- **Egy csoporton belüli geometria** (élei és lapjai: rajzolás, nyomás/húzás, törlés) egy egységet alkot. Ha két ember ugyanazt a csoportot egyszerre alakítja át, a második változtatás visszavonódik, és az állapotsor ezt jelzi. A különböző csoportok soha nem akadályozzák egymást.
- **Kötetlen geometria** (egy csoportban sem) a modell saját csoportja: egyszerre csak egy ember alakíthatja át.

Ezért érdemes megegyezni, ki melyik csoportban dolgozik, vagy kezdés előtt készíteni csoportot mindenki részének. A segédvonalak, méretek és metszősíkok egyenként olvadnak össze; a jelenetek, címkék, szintek és a rajztengelyek azé lesznek, aki legutóbb változtatta.

## Egymás látása

A munkamenetben mindenkinek saját színe van. Mindenki mutatója nyílként látszik a saját színében, mellette a nevével, a nézet mélységében, amelyet éppen néz, a kijelölt elemek körül pedig szaggatott doboz látszik a saját színében.

A mutatók, nevek és kijelölések csak a munkamenetre szólnak: soha nem mentődnek a fájlba, és senki visszavonásába sem kerülnek. Úgy csúsznak oda, ahol mindenki van, hogy lassú kapcsolaton is simák maradjanak.

## A visszavonás a saját munkáját vonja vissza

A {{key:Mod+Z}} a saját utolsó lépését vonja vissza, mások lépéseit érintetlenül hagyja. Ha azóta valaki ugyanazt változtatta, semmi sem vonódik vissza, és az állapotsor megmondja, ki.

## Csatlakozás böngészőből

Csapattárs Studio nélkül a házigazda kódja alatti képet beolvashatja telefonnal, táblagéppel vagy számítógéppel ugyanazon a hálózaton. A ModelCraft a böngészőben nyílik meg, és a házigazda modelljével telik meg, amint a házigazda beengedi. Meghívó hivatkozással valaki más hálózatról is csatlakozhat: a házigazdának Team Cloud Plan-előfizetéssel járó hely kell az alkalmazáshoz, mindenki más díjmentesen csatlakozik, a hivatkozás pedig csak addig működik, amíg a házigazda munkamenete nyitva van.

## A munkamenet vége

Csak a házigazda menti a modellt. Mindenki más egy el nem mentett példányt tart meg: mentse el, ha meg akarja tartani.
