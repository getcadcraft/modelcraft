---
title: Menüüd, klahvid ja hiir
summary: Vali menüüstiil, mis sobib modelleerijaga, mida juba tunned, anna mis tahes käsule oma klahv, liiguta käske menüüde vahel ning sea, mida ratas ning hiire keskmine ja parem nupp teevad.
keywords: menüüstiil, menüüd, menüüriba, tööriistariba, kiirklahvid, klahvid, klahvistiil, klahvikaart, kohandamine, ümber määramine, hiir, ratas, pööra, suumi suund, keskmine nupp, parem nupp, orbiit, nihuta, eksport, import, ümberlülitamine, tuttav, push/pull, modelleerija
from: e56fce3d
---

ModelCraft'i tööriistad on samad, sõltumata sellest, kuidas neile jõuad. **Menüüstiil** määrab, kus need ekraanil asuvad, mida neid seal nimetatakse ja millised klahvid neid käivitavad. Vali see jaotises {{ui:Settings}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}}; muudatus on kohe nähtav ja see brauser mäletab seda.

## Stiilid

| Stiil | Mida saad |
|---|---|
| {{ui:ModelCraft}} | ModelCraft'i enda tööriistariba (Fail, Joonista, Muuda, Korrasta, Redigeeri, Kaamera) ja selle üheklahvilised kiirklahvid: {{key:L}} joon, {{key:R}} ristkülik, {{key:P}} tõmba-lükka, {{key:M}} teisalda, {{key:Q}} pööra, {{key:S}} mõõtkava, {{key:E}} kustutaja, {{key:O}} orbiit. Algne stiil. |
| {{ui:Push-pull}} | Menüüriba (Fail, Redigeeri, Vaade, Kaamera, Joonista, Tööriistad, Aken) ja rida peamisi tööriistu samade üheklahviliste kiirklahvidega. |
| {{ui:Modeler}} | Päisemenüüriba (Fail, Redigeeri, Vaade, Vali, Lisa, Objekt, Võrk) ja võrgumodelleerijate klahvid: {{key:W}} vali, {{key:G}} haara, {{key:R}} pööra ja {{key:S}} mõõtkava valikut korraga ({{key:X}}, {{key:Y}} või {{key:Z}} lukustab telje liikumise ajal), {{key:E}} tõmba-lükka, {{key:B}} ristkülik, {{key:X}} kustuta, {{key:A}} vali kõik, {{key:Alt+A}} ei midagi, {{key:Shift+D}} dubleeri, {{key:Mod+G}} grupp, {{key:H}} peida. Keskmine nupp orbiidib; {{key:Shift}} ja keskmine nupp nihutavad, {{key:Mod}} ja keskmine nupp suumivad; parem nupp tühistab selle, mida tööriist parasjagu teeb. |
| {{ui:Beginner}} | Riba, mille vahekaart {{ui:Make}} on mõned suured nupud: kujundid, mida lohistada, augud, teisalda, pööra ja muuda suurust, joonda, {{ui:Group}} (augud lõigatakse kujunditesse) ja 3D-printimise kontroll; kõik muud tööriistad vahekaardil {{ui:More tools}}. Parem nupp orbiidib, keskmine nupp nihutab. Vaata [Algaja stiil](topic:beginner). |

Klahvistiil, mida tunned {{ui:Keys}} järgi vaate all paremas nurgas ja {{ui:Edit}} › {{ui:More}} alt, on sama valik: modelleerija klahvide valimine valib stiili {{ui:Modeler}} ja tõmba-lükka klahvide valimine jätab selle ning valib stiili {{ui:ModelCraft}}. Kui oled vanemas versioonis valinud modelleerija klahvid, avaneb ModelCraft ühe korra ise stiilis {{ui:Modeler}}.

:::tip
Klahv, mis kuulub tõmba-lükka klahvide hulka, aga mille sinu stiil annab teisele käsule, ei tee midagi, ja olekurida ütleb, kuhu tema käsk läks („Modelleerijas on tõmba-lükka klahv E“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ja nooled säilitavad alati oma tähenduse, numbrid lähevad alati väärtuseväljale ning kui tööriist liigutab midagi, võidavad selle enda klahvid.
:::

## Tee see enda omaks

1. Vali stiil, mis on kõige lähemal sellele, mida tahad, ja klõpsa {{ui:Customize…}}.
2. Jaotises {{ui:Keys and menus}} leia käsk (otsinguväli aitab). Klõpsa {{ui:Add a key}} ja vajuta klahvi. Klahvi eemaldamiseks klõpsa sellel.
3. Menüüribaga stiili puhul liigutab {{ui:Where it sits}} käsu teise menüüsse või ainult klahvide peale {{ui:Keys only}}.
4. Jaotises {{ui:Mouse}} sea ratas ja see, mida nupud 3D-vaates teevad.
5. Anna sellele nimi ja klõpsa {{ui:Save}}.

Sisseehitatud stiili salvestamine teeb sinu enda koopia („My Modeler“); sisseehitatud stiil ei muutu kunagi. Sinu koopia loeb klahve samamoodi nagu stiil, millest ta alustas: stiilist {{ui:Modeler}} tehtud koopia hoiab haaramise, pööramise ja mõõtkava klahvid kohe töös.

## Hiir

- **Hiireratas**: {{ui:Scroll up zooms in}} (algne) või {{ui:Scroll up zooms out}}, ja kui kiiresti. Puuteplaadi nipsutus suumib alati nii, nagu sinu sõrmed liiguvad.
- **Lohistamine 3D-vaates**: {{ui:Each view's own}} jätab ModelCraft'i nupud (keskmine nupp orbiidib, parem nupp või {{key:Shift}} ja keskmine nupp nihutavad). Või sea keskmine ja parem nupp orbiidima, nihutama, suumima või ei tegema midagi; {{key:Shift}} koos nupuga vahetab orbiidi ja nihutuse. Vasak nupp kuulub alati kasutatavale tööriistale.
- **Puuteplaadid**: {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Scrolling}} otsustab endiselt, kas kaks sõrme orbiidivad (puuteplaat) või suumivad (hiir). Vaata [Orbiit, nihutus ja suum](topic:orbit-pan-zoom).

## Võta kaasa

{{ui:Export}} salvestab kasutusel oleva stiili väikese failina `.ccinput.json`; {{ui:Import…}} lisab ühe, teisest arvutist või kolleegilt. Imporditud fail saab viidata ainult ModelCraft'i enda käskudele: kõik muu jäetakse välja ja loetakse olekuribal. {{ui:Delete this style}} eemaldab ühe sinu enda stiilidest.

:::note
Need sätted jäävad sellesse brauserisse. {{ui:Use this style in every app}} stiilikaartide all teeb iga rakenduse avamise sobivas stiilis: {{ui:Push-pull}} läheb kokku teiste rakenduste menüüriba stiilidega. {{ui:Modeler}}-l teistes rakendustes vastet ei ole, seega jääb see ModelCraft'i valikuks.
:::

Seotud: [Klahvid ja hiire toimingud](topic:keyboard) · [ModelCraft'i sätted](topic:settings) · [Tulek teistest modelleerijatest](topic:coming-from)
