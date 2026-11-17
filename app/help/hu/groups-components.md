---
title: Csoportok és komponensek
summary: Tartsa szét a különálló objektumokat, szerkesszen egy példányt, hogy mindegyik megváltozzon, és használja a Vázlatnézet és a Komponensek panelt.
keywords: csoport, komponens, csoport létrehozása, komponens létrehozása, felbontás, egyedivé tétel, vázlatnézet, példányok, másolatok, blokk, beágyazott, csoport szerkesztése, elhelyezés
from: 7cb925f3
---

A laza geometria a ModelCraftban összetapad: az egymást érintő vonalak felosztják egymást, és az egy élen osztozó lapok együtt mozognak. Ez teszi lehetővé a lapokra rajzolást, de azt is jelenti, hogy egy másik doboz mellé rajzolt doboz egyesül vele. A **csoportok** és a **komponensek** tartják szét a dolgokat.

- A **csoport** geometriát fog közre, így az egy objektumként viselkedik. Kívülről semmi sem tapadhat hozzá.
- A **komponens** olyan csoport, amelyet többször el lehet helyezni. Minden példány ugyanazt a tartalmat használja: ha az egyiket szerkeszti, mindegyik megváltozik. Komponenseket használjon mindenre, ami ismétlődik: ablakok, oszlopok, asztalok, fák.

## Csoport vagy komponens létrehozása

1. Jelölje ki a geometriát. A lapon végzett hármas kattintás kijelöli a teljes összefüggő objektumot; a dobozos húzás mindent kijelöl, ami a dobozban van.
2. Csoporthoz nyomja meg a {{key:Shift+G}} billentyűt, komponenshez a {{key:G}} billentyűt. Az eszköztár {{ui:Rendezés}} csoportjában is kattinthat a {{ui:Csoport}} vagy a {{ui:Komponens}} gombra, vagy az {{ui:Entitásinfó}} panelen a {{ui:Csoport létrehozása (Shift+G)}} vagy a {{ui:Komponens létrehozása (G)}} elemre.

   Az állapotsor ezt írja: „Csoportba foglalva: Group#1.” vagy „Komponens létrehozva: Component#1.”, az új objektum kijelölődik, és megjelenik a {{ui:Vázlatnézet}} panelen.

3. A névadáshoz írja be a nevet az {{ui:Entitásinfó}} panel {{ui:Név}} mezőjébe, és nyomja meg az {{key:Enter}} billentyűt, vagy kattintson máshova.

Lap kijelölésekor az élei is kijelölődnek. Ha semmi sincs kijelölve, az állapotsor ezt írja: „Először jelöljön ki geometriát (húzzon ablakot, vagy hármas kattintással jelölje ki az összes összefüggő elemet).”

Csoportokat is csoportosíthat: jelöljön ki több csoportot, és nyomja meg a {{key:Shift+G}} billentyűt. A {{ui:Vázlatnézet}} panel mutatja a egymásba ágyazást.

:::note
A billentyűbetűk megegyeznek a SketchUp alapértelmezéseivel: a {{key:G}} komponenst, a {{key:Shift+G}} csoportot hoz létre.
:::

## Szerkesztés csoporton vagy komponensen belül

1. Kattintson rá duplán (a nézetben vagy a {{ui:Vázlatnézet}} panelen), vagy jelölje ki, és kattintson az {{ui:Entitásinfó}} panel {{ui:Szerkesztés}} gombjára.

   A modell többi része elhalványul, a tengelyek a csoport saját tengelyeire váltanak, a {{ui:Vázlatnézet}} panel pedig ezt mutatja: „Szerkesztés: Modell › Group#1”. Az állapotsor ezt írja: „Group#1 szerkesztése. Az Esc vagy a csoporton kívüli duplakattintás bezárja.”

2. Rajzoljon, húzza meg, mozgassa és törölje a megszokott módon. Minden, amit tesz, a csoporton belül marad.
3. Zárja be: nyomja meg az {{key:Esc}} billentyűt (kétszer, ha van kijelölt elem), kattintson duplán üres területre, vagy kattintson a {{ui:Csoport bezárása}} gombra a {{ui:Vázlatnézet}} panelen.

Amíg egy komponens meg van nyitva, minden példánya változik a munka közben.

## További példányok elhelyezése egy komponensből

- Másolja a {{ui:Mozgatás}} eszközzel és a {{key:Ctrl}} billentyűvel (lásd: [Mozgatás és másolás](topic:move-copy)). Minden másolat ugyanannak a komponensnek egy újabb elhelyezése.
- Vagy kattintson a {{ui:Komponensek}} panelen a mellette lévő {{ui:Elhelyezés}} gombra, majd kattintson oda, ahová kerülnie kell. Az eredetpontja (a kijelölt elemek körüli doboz legalsó sarka a létrehozáskor) oda kerül, ahová kattint. Az eszköz ezután visszatér a {{ui:Kijelölés}} eszközre.

A {{ui:Komponensek}} panel mutatja, hány példány van elhelyezve („4×”), a {{ui:Vázlatnézet}} panel pedig a darabszámot a név után.

## Átrendezés a Vázlatnézetben

Húzzon egy sort a {{ui:Vázlatnézet}} panelen, hogy megváltoztassa, hová tartozik. A nézetben semmi sem mozdul: a csoport megtartja a helyét a modellben.

- **Csoportba:** ejtse a csoport sorának közepére (a sor szaggatott keretet kap). Az a csoport végére kerül.
- **Más sorrendbe:** ejtse a sor felső vagy alsó szélére (ott egy vonal jelenik meg). Az adott sor elé vagy mögé kerül, ugyanabba a csoportba, mint az a sor, így egy kiválasztott helyen is csoportba kerülhet.
- **A legfelső szintre:** ejtse a {{ui:Vázlatnézet}} fejlécére. Az a lista végére kerül.

Minden áthelyezés egy lépés: a {{key:Mod+Z}} visszaállítja. Az {{key:Esc}} húzás közben semmit sem ejt le. Csoport nem kerülhet önmagába, és nem kerülhet abba a csoportba, amelyet tartalmaz. Húzás közben nincs lehetőség, ha a {{ui:Keresés név szerint}} mezőben szöveg van.

:::touch
Tartson ujjat egy sor fölött egy pillanatig, majd húzza el. A gyors húzás a listát görgeti.
:::

## Egy példány megkülönböztetése

Jelölje ki a példányt, és kattintson az {{ui:Entitásinfó}} panel {{ui:Egyedivé tétel}} gombjára (ez akkor látszik, ha a komponens többször van elhelyezve). Az a példány saját definíciót kap, az eredetihez hasonló névvel, új számmal. Szerkessze úgy, hogy a többit nem érinti.

## Csoport átalakítása komponenssé

Jelölje ki a csoportot, és kattintson az {{ui:Entitásinfó}} panel {{ui:Komponens létrehozása}} gombjára. Új nevet kap, például Component#2, akkor is, ha a csoportnak már adott nevet; írja be újra a nevet a {{ui:Név}} mezőbe.

## Felbontás

Jelöljön ki egy csoportot vagy komponenst, és kattintson a {{ui:Felbontás}} gombra (az eszköztáron vagy az {{ui:Entitásinfó}} panelen). A tartalma laza geometriává válik ott, ahol volt, és az érintett elemekhez tapad. A benne lévő csoportok csoportok maradnak.

## Test és térfogat

Ha csoportot vagy komponenst jelöl ki, az {{ui:Entitásinfó}} panel **Test: Igen** feliratot mutat, ha a lapjai zárt felületet alkotnak, nincs bennük rés (minden élt pontosan két lap oszt meg), és nincs beágyazott csoport. Ekkor a **térfogatot** is mutatja. Doboz, falon átvágott ablakkal rendelkező fal és húzott henger test; a felső lapját törölt doboz nem az.

## Amikor az utolsó példány eltűnik

Egy komponens utolsó példányának törlése eltávolítja a komponenst a {{ui:Komponensek}} panelről is. A {{key:Mod+Z}} visszahozza.

## Tudnivalók

- A **csoport** példányai, amelyeket mozgatással hoztak létre, ebben a verzióban megosztják a tartalmukat, akárcsak a komponens-példányok: az egyik szerkesztése a többit is megváltoztatja. Ha egyet függetleníteni szeretne, kattintson a {{ui:Komponens létrehozása}} gombra, majd az {{ui:Egyedivé tétel}} gombra. Lásd: [Hibaelhárítás](topic:troubleshooting#editing-one-group-changed-another).
- A komponensek nem vágnak nyílásokat a falakba, és nem tapadnak lapokhoz; nincs kész komponenseket tartalmazó könyvtár. Ön készíti őket, vagy importálja.
- Az importált fájlok csoportként érkeznek. A Collada-fájlok a saját csoportjaikat és komponenseiket megtartják bennük.
