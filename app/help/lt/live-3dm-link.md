---
title: Laikyti .3dm modelį gyvą
summary: Keiskite modelį programoje, kuri jį sukūrė, ir čia pamatysite pakeitimus – iš Rhino 8 ar Grasshopper apibrėžimo, be įrašymo ir importavimo iš naujo.
keywords: rhino, grasshopper, gyvoji nuoroda, gyvas ryšys, 3dm, nurbs, parametrinis, nuoroda, sinchronizavimas, scenarijus, nuorodinis modelis, siuntimas
from: 331b0a7e
---

Toliau modeliuokite ten, kur modeliuojate, o čia naudokite rezultatą: atvaizduokite jį, apšviekite arba kurkite aplink jį sceną. Kiekvienas pakeitimas kitoje programoje atnaujina vieną grupę ModelCraft.

:::note
Nuorodai reikia **CadCraft Studio** tame pačiame kompiuteryje. Naršyklės skirtukas ryšio neperima. Į internetą nieko nesiunčiama: scenarijus bendrauja su Studio šio kompiuterio adresu, naudodamas prieigos raktą.
:::

:::warning
Ši nuoroda išbandyta su scenarijaus failų rašytoju ir kitos programos pakaitalu, dar ne pačiame Rhino ar Grasshopper. Jei ten kas nors nepavyksta, praneškite mums, ką pranešė klaida.
:::

## Nustatymas

1. Studio programoje atidarykite ModelCraft. Skiltyje {{ui:Parametrai}} › {{ui:ModelCraft}} › {{ui:Asistentai}} pažymėkite **Leisti DI asistentams ir scenarijams naudoti ModelCraft**, tada – **Redaguoti**.
2. Studio programoje pasirinkite {{ui:Prijungti asistentą}}. Rodomas adresas ir raktas, kurį įklijuosite žemiau.
3. Atsisiųskite scenarijų: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Iš Rhino

1. Paleiskite `cadcraft_link.py` Rhino scenarijų redaktoriuje (Python 3 Rhino 8).
2. Pirmą kartą įklijuokite adresą ir raktą. Jie saugomi faile `.cadcraft-link.json` jūsų pagrindiniame aplanke, niekada modelyje. Studio kiekvieną kartą paleidžiant sukuria naują raktą, todėl tada scenarijus klaus iš naujo.

Visas modelis perkeliamas kaip viena grupė, pavadinta pagal dokumentą, pavyzdžiui „chair (linked)“. Vėliau kiekvienas pakeitimas perkeliamas, kai trumpam sustojate, ir siunčiami tik pakeisti objektai. Kad sustabdytumėte, paleiskite scenarijų dar kartą.

## Iš Grasshopper

Pirmiausia kartą paleiskite scenarijų Rhino, kad adresas ir raktas būtų įrašyti.

1. Pridėkite Scenarijaus komponentą (Python 3) ir įklijuokite į jį visą `cadcraft_link.py`.
2. Nustatykite šiuos įvesties duomenis: `G` (geometrija, su sąrašo prieiga), `N` (pavadinimas, neprivaloma), `On` (loginis perjungiklis) ir `Target` (neprivaloma: `model` arba `part`, jei abi programos atidarytos).
3. Nustatykite `On` į true.

Kiekvieną skaičiavimą `G` siunčiama ir pakeičia tai, ką komponentas siuntė paskutinį kartą, todėl vilkdami slankiklį čia atnaujinama grupė. Išvestis `a` nurodo, kas įvyko. Kiekvienas komponentas turi savo grupę.

## Ką galite daryti su grupe

- **Perkelkite ją, žymėkite ją, kurkite aplink ją.** Kur padėjote grupę ir jos žymę, ten jos ir lieka per kiekvieną atnaujinimą, kaip ir viskas šalia.
- **Nekeiskite jos viduje.** Kiekvienas atnaujinimas pakeičia tai, kas yra grupėje. Tuos objektus valdo kita programa.
- **Anuliavimas.** Atnaujinimai, vienas nuo kito ne vėliau kaip po dviejų sekundžių, sudaro vieną anuliavimo žingsnį, todėl {{key:Mod+Z}} atšaukia visą vilkimą. Kitas atnaujinimas vėl suderina modelį.
- **Įrašymas.** Įrašytas failas išsaugo nuorodą. Iš naujo atidarę failą, paleiskite scenarijų dar kartą, ir ta pati grupė atsinaujins.

## Kas perkeliama

Tinkleliai, polipaviršiai, paviršiai ir ištraukimai – kaip ekrane matomas tinklelis, SubD – kaip jo tinklelis, kreivės – kaip briaunos, blokai – kaip atskiri objektai, kur jie stovi (ne kaip komponentai), sluoksniai – kaip žymos, spalvos ir vienetai. Kaip jie čia atrodo, žr. [Importuoti .3dm modelį](topic:import-3dm-files).

Neperkeliama, su kiekio nurodymu kitoje programoje: taškai, tekstas, matmenys, šviesos ir panašūs objektai.

**Tik viena kryptimi.** Pakeitimai čia į kitą programą negrįžta.

## Jei kas nors nepavyksta

- **„Nė vienas ModelCraft ar PartCraft langas to neleidžia“:** atlikite 1 nustatymo žingsnį.
- **„Studio atmetė raktą“:** Studio buvo paleistas iš naujo. Nukopijuokite naują raktą ir paleiskite scenarijų dar kartą. Grasshopper atveju pirmiausia paleiskite jį Rhino.
- **„Nepavyksta pasiekti CadCraft Studio“:** Studio neveikia arba pasikeitė adresas.
