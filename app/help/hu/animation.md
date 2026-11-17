---
title: A kamera és az objektumok animálása, és videó renderelése
summary: Állítson be kulcsokat a kamerának, valamint csoportoknak és komponenseknek egy idővonalon, játssza le őket a nézetben, és renderelje az animációt WebM videóvá a renderelő égboltjával, napjával és anyagaival.
keywords: animáció, animálás, idővonal, kulcskocka, kulcsok, kulcs képkocka, kameraútvonal, átrepülés, bejárás, végigsétálás, séta, videó, film, webm, videó renderelése, képkockák, képkockasebesség, fps, lejátszófej, automatikus kulcs, simítás, tartás, jelenetek, png-sorozat, mozgás
from: d3a58249
---

Az **idővonal** az időben mozgatja a kamerát és bármely csoportot vagy komponenst. **Kulcsokat** állít be (azt, hogy valami egy adott pillanatban hol van); a ModelCraft simán mozgatja a kulcsok között. Lejátszhatja a nézetben, majd ugyanazzal az éggel, nappal, anyagokkal és lámpákkal videóba renderelheti, mint [egy renderelt kép](topic:render).

## Az idővonal megnyitása

Kattintson a {{ui:Camera}} csoportban a {{ui:Views}} gombra, majd az {{ui:Animation timeline}} lehetőségre. Az idővonal a nézet alatt nyílik meg: felül a vezérlők, alatta egy **Kamera** sor, és minden mozgó csoportnak vagy komponensnek egy-egy sor. A rombuszok a kulcsok; a piros vonal a **lejátszófej**, vagyis az a pillanat, amely a nézetben látszik.

:::touch
Telefonon az idővonal szintén a nézet alatt nyílik meg. A vezérlői egy sorban vannak: oldalra húzva érheti el a többit; az idővonalat bezáró gomb a végénél marad.
:::

Húzza a csúszkát (vagy kattintson egy sorba), hogy a lejátszófejet mozgassa. A {{ui:Play}} a lejátszófejtől indítja a lejátszást, és lejátszás közben {{ui:Pause}} lesz; újbóli kattintásra megáll ott, ahol van. Az {{key:Space}} ugyanezt teszi, amíg az idővonal nyitva van (zárt idővonalnál a Space továbbra is a Kijelölés). A {{ui:Previous key}} és a {{ui:Next key}} a kulcsok között ugrál. Saját stílussal a lejátszás és szünet más billentyűre is kerülhet: {{ui:Settings}}, majd a menük, billentyűk és egér, a *Lejátszás vagy szünet az animációban* parancs.

## A kamera mozgatása

1. Mozgassa a lejátszófejet oda, ahol a felvétel kezdődik (0 s), állítsa be a nézetet, és kattintson a {{ui:Key camera}} gombra.
2. Mozgassa a lejátszófejet későbbre (mondjuk 4 s), forgassa, mozgassa vagy járja be a nézetet a következő állásig, és kattintson újra a {{ui:Key camera}} gombra.
3. Annyi kulcsot adjon hozzá, amennyit szeretne, majd kattintson a {{ui:Play}} gombra.

A kamera simán áthalad minden kulcson, és nyugalmi helyzetből indul és áll meg.

:::tip
Már van [jelenete](topic:scenes)? A {{ui:From scenes}} ezekből készít kameraútvonalat: minden jelenetnél megáll, majd a következőhöz mozog. Ha az idővonalon nincs kulcs, a {{ui:Render video…}} ezt magától elvégzi, így két vagy több jelenet elegendő egy bejárásvideóhoz.
:::

## Csoport vagy komponens mozgatása

1. Jelölje ki a csoportot vagy komponenst (csak a teljes csoportok és komponensek mozognak; előbb [hozzon létre csoportot](topic:groups-components)).
2. 0 s-nél kattintson a {{ui:Key selected}} gombra.
3. Mozgassa a lejátszófejet későbbre, [mozgassa, forgassa vagy léptékezze](topic:move-copy) a csoportot oda, ahová kerülnie kell, majd kattintson újra a {{ui:Key selected}} gombra.

A kulcsai között csúszik, fordul és nő. A forgatások a rövidebb úton mennek.

Az **Automatikus kulcs** megspórolja a 3. lépés kattintását: amíg a {{ui:Auto key}} be van kapcsolva, a kijelölt csoport vagy komponens, amelyet mozgat, forgat vagy léptékez, magától kap kulcsot a lejátszófejnél (és először egy kulcsot 0 s-nél, ott, ahol volt).

:::note
Az animált csoport mozgatása kulcs nélkül csak addig marad meg, amíg a lejátszófej el nem mozdul: a következő lejátszáskor vagy görgetéskor visszakerül oda, ahová a kulcsai teszik. Az állapotsor ezt jelzi. A megtartáshoz nyomja meg a {{ui:Key selected}} gombot.
:::

## Kulcsok módosítása

- **Kulcs kiválasztása**: kattintson a rombuszára: a lejátszófej odaugrik.
- **Kulcs mozgatása**: húzza a rombuszát a sorában, vagy használja a {{key:Left}} és {{key:Right}} billentyűt (egy képkocka; a {{key:Shift}}-tel tíz).
- **Törlés** a {{ui:Delete key}} gombbal (a kijelölt kulcs, vagy a lejátszófejnél lévő összes kulcs), vagy a {{key:Delete}} billentyűvel a kijelölt rombuszon.
- **Hogyan halad tovább**, a kijelölt kulcsra: {{ui:Smooth}} (görbe a környező kulcsokon át), {{ui:Steady}} (egyenes vonal egyenletes sebességgel), {{ui:Slow in and out}} (ezen a kulcson megáll), vagy {{ui:Hold}} (addig marad, amíg a következő kulcs nem jön).
- A **Length (s)** határozza meg, mennyi ideig tart az animáció; a végén túl beállított kulcs meghosszabbítja. A rövidítéshez előbb mozgassa vagy törölje a régi végen túli kulcsokat.
- A csoport sorában lévő **×** leállítja az animálását.

Az idővonalnak saját {{ui:Undo}} és {{ui:Redo}} gombja van: a modell visszavonása ({{key:Mod+Z}}) a modellt változtatja, nem a kulcsokat. Az animáció a `.modelcraft` fájlba mentődik. Az idővonal bezárásakor a mozgó csoportok az első pózukba kerülnek vissza.

## Videó renderelése

1. Kattintson az idővonal {{ui:Render video}} gombjára (vagy az {{ui:Export}} › {{ui:Render video…}} menüpontra).
2. Válassza ki a {{ui:Size}} értéket, a {{ui:Frame rate}} értéket, a {{ui:Quality of each frame}} értéket és a {{ui:File}} értéket.
3. Kattintson a {{ui:Render video}} gombra. Minden képkocka megjelenik, ahogy elkészül, az hátralévő idővel együtt.
4. Ha kész, kattintson a {{ui:Save video}} gombra.

A {{ui:Stop}} (vagy az {{key:Esc}}) korán befejezi; a {{ui:Save video}} ekkor az addig elkészült képkockákat rövidebb videóként menti.

Az égbolt, a nap, az anyagok, a lámpák és a fényerő azok, amelyeket a {{ui:Render a picture…}} menüben állított be: előbb ott állítsa be őket, egy állóképpel ellenőrizve. Minden képkocka ezen a számítógépen készül; semmi sem töltődik fel.

| Beállítás | Mit csinál |
|---|---|
| {{ui:Size}} | 480p, 720p HD, 1080p Full HD, vagy a nézet saját alakja (legfeljebb 1920 képpont széles) |
| {{ui:Frame rate}} | 24, 25, 30 vagy 60 képkocka másodpercenként. Kétszer annyi képkocka kétszer annyi ideig tart |
| {{ui:Quality of each frame}} | {{ui:Quick}} (4 menet), {{ui:Draft}} (16) vagy {{ui:Good}} (64): több menet simább árnyékokat és éleket ad |
| {{ui:File}} | {{ui:WebM video}}, {{ui:MP4 video (H.264)}} ahol a böngésző írni tudja, vagy {{ui:PNG pictures, one per frame (ZIP)}} videószerkesztőknek (és olyan böngészőkhöz, amelyekben nincs videókódoló) |

:::tip
Egy 10 másodperces, másodpercenként 30 képkockás videó 301 képkocka. Előbb próbálja ki a {{ui:Quick}} beállítást 480p-n a mozgás ellenőrzéséhez, majd a {{ui:Draft}} vagy {{ui:Good}} beállítással, nagyobb méretben renderelje.
:::

A WebM lejátszható böngészőkben és a VLC-ben, a videószerkesztők pedig átalakítják. Az {{ui:MP4 video (H.264)}} ott érhető el, ahol a böngésző írni tudja. A {{ui:Render video}} a gyors renderelőt használja; ha minden képkockát útkövetéssel szeretne renderelni, válassza ugyanabban a párbeszédpanelben az {{ui:Add this animation to the queue}} lehetőséget: a képkockák a [renderelési sorban](topic:render#the-render-queue) készülnek el, ehhez WebGPU szükséges.

:::firefox safari
Videó rendereléséhez olyan böngésző kell, amely maga kódolja a videót (WebCodecs): a friss Chrome, Edge, Firefox és a Safari 17 támogatja. Enélkül válassza a {{ui:PNG pictures, one per frame (ZIP)}} lehetőséget.
:::

## Tudnivalók

- Csak a teljes csoportok és komponensek mozognak. A síkok, a nap ideje és a stílus egyelőre nem változnak az idővel.
- Az [Jelenetek](topic:scenes) alatti {{ui:Export animation}} továbbra is a nézetet rögzíti úgy, ahogy a képernyőn van, valós időben; a {{ui:Render video}} minden képkockát az éggel, árnyékokkal és anyagokkal renderel.
