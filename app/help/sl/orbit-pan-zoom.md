---
title: Orbitiranje, pomik in povečava
summary: Premikajte se okoli modela z miško, sledilno ploščico, zaslonom na dotik ali tipkovnico ter skočite na standardne poglede.
keywords: orbitiraj, pomik, povečava, dolg pritisk, tri prsti, dva prsta, tap, krmarjenje, kamera, pogled, vrtenje pogleda, sledilna ploščica, dotik, stisk, srednji gumb, obseg, perspektiva, vzporedno, zgornji pogled, iso
from: 10d4d33a
---

Kamero lahko premaknete kadarkoli, tudi med risanjem črte ali potiskanjem ploskve: orodje počaka tam, kjer je bilo.

## Z miško s tremi gumbi

| Za | Storite tole |
|---|---|
| Orbitiranje | Povlecite s srednjim gumbom (pritisnite kolesce) |
| Pomik | Povlecite z desnim gumbom ali držite {{key:Shift}} in povlecite s srednjim gumbom. Pritisk ali spust {{key:Shift}} med vlečenjem preklopi med orbitiranjem in pomikom |
| Povečava | Zavrtite kolesce. Povečuje proti ploskvi pod kazalcem ali proti točki pod njim na globini središča pogleda |
| Poglej ves model | {{key:Shift+Z}} ali {{ui:Obseg}} |

Orbitiranje zavrti pogled okoli dela modela pod kazalcem, tako da ta točka ostane na mestu, medtem ko se vse vrti okoli nje. Nad praznim prostorom se vrti okoli središča pogleda. Pomik ohrani točko, ki ste jo zgrabili, pod kazalcem.

Če želite vedno orbitirati okoli središča pogleda ali nastaviti hitrejše ali počasnejše orbitiranje in pomik, odprite {{ui:Nastavitve}} ({{key:Mod+,}}), zavihek {{ui:ModelCraft}}, **Orbitiranje in pomik**. Hitrosti veljajo za miško, sledilno ploščico, dotik in puščične tipke.

Desni klik brez vlečenja ne naredi nič; ModelCraft nima kontekstnega menija.

## Brez srednjega gumba

Uporabite orodja za kamero v orodni vrstici ali tipkovnico:

1. Pritisnite {{key:O}} (ali kliknite {{ui:Orbitiraj}}) in povlecite z levim gumbom za orbitiranje. Med vlečenjem držite {{key:Shift}} za pomik.
2. Pritisnite {{key:H}} (ali kliknite {{ui:Pomik (H)}}) in povlecite za pomik.
3. Pritisnite {{key:Z}} (ali kliknite {{ui:Povečava (Z)}}) in povlecite navzgor za povečavo, navzdol za pomanjšanje.
4. Pritisnite {{key:Space}}, da se vrnete na {{ui:Izberi}}, ali pritisnite tipko orodja, ki ga želite naslednjega.

Orodja za kamero nadomestijo orodje, ki ste ga uporabljali. Če se želite ozreti sredi operacije, ne da bi jo izgubili, uporabite tipkovnico:

- Puščične tipke orbitirajo.
- {{key:Shift}} s puščičnimi tipkami pomika.

Medtem ko je orodje za risanje sredi operacije (po prvem kliku), puščične tipke zaklepajo smeri namesto orbitiranja. Glejte [Zaskakovanje in sklepanje](topic:inference#lock-a-direction).

## Na sledilni ploščici

Najlažje: odprite {{ui:Nastavitve}} ({{key:Mod+,}}), zavihek {{ui:ModelCraft}}, in pri Drsenje nastavite **Sledilna ploščica** (ali pustite „Ugotovi sam“). Nato drsite z dvema prstoma za orbitiranje, držite {{key:Shift}} in drsite za pomik, stisnite pa za povečavo – brez gumbov kamere. Glejte [Nastavitve ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Pri Drsenje **Kolesce miške**:

:::mac
- **Povečava:** drsite z dvema prstoma ali stisnite. Oboje povečuje proti kazalcu.
- **Pomik:** pritisnite z dvema prstoma (sekundarni klik) in držite prste na ploskvi med vlečenjem. Če dvoprstni klik ne naredi ničesar, vklopite „Sekundarni klik“ v **Sistemskih nastavitvah**, nato **Sledilna ploščica**.
- **Orbitiranje:** pritisnite {{key:O}} in povlecite z enim prstom ali uporabite puščične tipke.
- Držanje {{key:Ctrl}} med klikom morda ne šteje kot desni klik v ModelCraft, odvisno od brskalnika: lahko deluje kot klik z držanim {{key:Ctrl}}. Za pomik uporabite dvoprstni pritisk.
:::

:::windows linux
- **Povečava:** drsite z dvema prstoma. Stiskanje povečuje tudi tam, kjer gonilnik sledilne ploščice pošilja stisk kot drsenje s {{key:Ctrl}}.
- **Pomik:** povlecite z desnim gumbom (na številnih sledilnih ploščicah pritisnite spodnji desni kot in povlecite) ali pritisnite {{key:H}} in povlecite.
- **Orbitiranje:** pritisnite {{key:O}} in povlecite ali uporabite puščične tipke.
:::

Pri kolescu miške dvoprstno drsenje povečuje; ne pomika. To je obratno kot na mnogih spletnih straneh, tako pa se kolesce miške obnaša v večini 3D modelirnikov.

:::tip
{{key:Space}} izbere orodje {{ui:Izberi}} v ModelCraft. Držanje {{key:Space}} in vlečenje ne pomakne, kot to dela v nekaterih drugih aplikacijah.
:::

## Na zaslonu na dotik

:::touch
- **En prst** uporabi trenutno orodje: **tapnite** za klik, **pritisnite in povlecite** za risanje ali vlečenje.
- Medtem ko je prst orodja za risanje na zaslonu, **lupa** nad njim prikaže, kaj je pod prstom, da vidite krajišče, sredino ali rob, na katerega se zaskoči, preden dvignete prst.
- **Držite pri miru** pol sekunde, da dokončate, kar orodje počne, kot to naredi {{key:Enter}}: krivuljo ali verigo črt. Brez dejavnosti: če držite pri miru in nato povlečete isti prst, **orbitirate**, dokler ga ne dvignete.
- **Dva prsta**, povlečena skupaj, **pomikata**; **stisk** povečuje. Oboje deluje v enem gestu.
- **Trije prsti**, povlečeni skupaj, **orbitirajo**.
- Za zamenjavo (dva prsta orbitirata, trije pomikajo) odprite {{ui:Nastavitve}}, zavihek {{ui:ModelCraft}}, Zaslon na dotik.
- Postavitev drugega prsta **prekliče**, kar je začel prvi prst (napol narisan pravokotnik, potiskanje v teku). Dvignite prste in začnite znova.
- Majhna vrstica na dnu pogleda ima **Končano** ({{key:Enter}}), **Prekliči** ({{key:Esc}}) in {{ui:Razveljavi}}, kadar ni tipkovnice.
- Zajem in izbira segata malo dlje kot z miško, gumbi pa so večji, da jih prst zadene.
:::

:::mouse
Na zaslonu na dotik en prst uporablja trenutno orodje (tapnite za klik, držite pri miru za dokončanje ali držite pri miru in vlecite za orbitiranje), dva prsta pomikata in stisk povečuje, trije prsti orbitirajo, majhna vrstica pa ponuja Končano, Prekliči in Razveljavi.
:::

## Standardni pogledi

1. Kliknite {{ui:Pogledi}} na desnem koncu orodne vrstice.
2. Izberite {{ui:Izometrija}}, {{ui:Zgoraj}}, {{ui:Spredaj}}, {{ui:Desno}}, {{ui:Zadaj}}, {{ui:Levo}} ali {{ui:Spodaj}}.

Pogled se obrne v to smer in prilagodi celoten model. {{ui:Spredaj}} gleda proti severu, vzdolž zelene osi; {{ui:Zgoraj}} gleda naravnost navzdol s severom navzgor.

Kocka pogleda v zgornjem desnem kotu pogleda naredi isto z enim klikom, plus robove in vogale, prstan kompasa za vrtenje modela in gumb domov. Glejte [Kocko pogleda](topic:view-cube).

## Perspektivna in vzporedna projekcija

Izberite {{ui:Pogledi}}, nato {{ui:Perspektiva}}. Kljukica pomeni, da je perspektiva vklopljena. Ko je izklopljena, je pogled vzporedna (ortogonalna) projekcija: vzporedne črte v modelu ostanejo vzporedne tudi na zaslonu, kar želite za višine iz {{ui:Spredaj}} ali {{ui:Desno}}. Vrstica stanja pove „Perspektiva.“ ali „Vzporedna projekcija.“

Vsak prizor si zapomni, ali je bil v perspektivi. Glejte [Shranjevanje pogledov kot prizorov](topic:scenes).
