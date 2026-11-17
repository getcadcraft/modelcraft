---
title: Grupid ja komponendid
summary: Hoia objektid üksteisest eraldi, muuda üht koopiat, et muuta kõiki, ja kasuta paneele Struktuur ja Komponendid.
keywords: grupp, komponent, loo grupp, loo komponent, lahuta, tee unikaalseks, struktuur, eksemplarid, koopiad, plokk, pesastatud, redigeeri gruppi, aseta
from: 7cb925f3
---

ModelCraftis kleepuvad vabad geomeetriad kokku: üksteist puudutavad jooned lõikuvad omavahel ja tahud, mis jagavad serva, liiguvad koos. See teeb joonistamise tahkudel võimalikuks, kuid tähendab ka seda, et kast, mis joonistatakse teise kasti vastu, ühineb sellega. **Grupid** ja **komponendid** hoiavad asju lahus.

- **Grupp** ümbritseb mõne geomeetria nii, et see käitub ühe objektina. Väljaspool seda ei saa miski sellega kleepuda.
- **Komponent** on grupp, mida saab paigutada mitu korda. Iga koopia jagab sama sisu: muuda üht ja kõik muutuvad. Kasuta komponente kõige korduva jaoks: aknad, postid, lauad, puud.

## Grupi või komponendi loomine

1. Vali geomeetria. Tahu kolmikklõps valib kogu ühendatud objekti; aknalohistamine valib kõik kasti sees olevad.
2. Grupi jaoks vajuta {{key:Shift+G}}, komponendi jaoks {{key:G}}. Võid klõpsata ka tööriistariba rühmas {{ui:Korrastamine}} nuppu {{ui:Group}} või {{ui:Component}}, või jaotises {{ui:Objekti teave}} valikut {{ui:Loo grupp (Shift+G)}} või {{ui:Loo komponent (G)}}.

   Olekuriba ütleb „Grupeeritud nimega Group#1.“ või „Loodi komponent Component#1.“, uus objekt on valitud ja ilmub paneelile {{ui:Struktuur}}.

3. Nime andmiseks kirjuta nimi jaotise {{ui:Objekti teave}} väljale {{ui:Nimi}} ja vajuta {{key:Enter}} või klõpsa mujale.

Tahu valimisel tulevad kaasa ka selle servad. Kui midagi pole valitud, ütleb olekuriba: „Vali kõigepealt geomeetria (lohista aken või tee kolmikklõps kõige ühendatud valimiseks).“

Gruppe saab grupeerida ka teistes gruppides: vali mitu gruppi ja vajuta {{key:Shift+G}}. Paneel {{ui:Struktuur}} näitab pesastust.

:::note
Klahvitähed vastavad SketchUpi vaikeseadetele: {{key:G}} teeb komponendi, {{key:Shift+G}} grupi.
:::

## Muutmine grupi või komponendi sees

1. Topeltklõpsa seda (vaates või paneelil {{ui:Struktuur}}) või vali see ja klõpsa jaotises {{ui:Objekti teave}} nuppu {{ui:Redigeeri}}.

   Ülejäänud mudel tuhmub, teljed liiguvad grupi enda telgedele ja paneel {{ui:Struktuur}} ütleb „Redigeerimisel: Model › Group#1“. Olekuriba ütleb „Redigeeritakse: Group#1. Sulgemiseks vajuta Esc või topeltklõpsa väljaspool.“

2. Joonista, lükka/tõmba, teisalda ja kustuta nagu tavaliselt. Kõik, mida teed, jääb grupi sisse.
3. Sulge see: vajuta {{key:Esc}} (kaks korda, kui midagi on valitud), topeltklõpsa tühjal alal või klõpsa paneelil {{ui:Struktuur}} nuppu {{ui:Sulge grupp}}.

Kui komponent on avatud, muutub iga selle koopia, kui töötad.

## Komponendi lisakoopiate paigutamine

- Kopeeri seda käsuga {{ui:Teisalda}} ja klahviga {{key:Ctrl}} (vt [Teisalda ja kopeeri](topic:move-copy)). Iga koopia on sama komponendi veel üks paigutus.
- Või klõpsa paneelil {{ui:Komponendid}} selle kõrval nuppu {{ui:Aseta}} ja siis kohta, kuhu see läheb. Selle lähtepunkt, kasti madalaim nurk ümber valitud asjade, mis komponenti tehes valiti, jõuab sinna, kuhu klõpsad. Tööriist naaseb seejärel valikule {{ui:Vali}}.

{{ui:Komponendid}} näitab, mitu koopiat on paigutatud („4×“), ja {{ui:Struktuur}} näitab koopiate arvu nime järel.

## Ümberpaigutamine paneelil Struktuur

Lohista rida paneelil {{ui:Struktuur}}, et muuta, kuhu see kuulub. Vaates ei liigu midagi: grupp jääb oma kohale mudelis.

- **Gruppi:** lase rea keskele grupi rea kohal (rida saab katkendjoone raami). See läheb sisse, viimaseks.
- **Teises järjekorras:** lase rea ülemisele või alumisele servale (ilmub joon). See läheb vahetult enne või pärast seda rida, samasse gruppi kui see rida, nii et ka sel viisil saad asja valitud kohas gruppi panna.
- **Välja kõige ülemisele tasemele:** lase paneeli {{ui:Struktuur}} pealkirjale. See läheb viimaseks.

Iga lohistamine on üks samm: {{key:Mod+Z}} paneb tagasi. {{key:Esc}} lohistamise ajal ei tilguta midagi. Gruppi ei saa paigutada iseendasse ega gruppi, mida see ise sisaldab. Lohistamine on välja lülitatud, kui väljal {{ui:Otsi nime järgi}} on tekst.

:::touch
Hoia sõrme mõni hetk rea peal, seejärel lohista. Kiire pühkimine kerib loendit.
:::

## Ühe koopia muutmine teistsuguseks

Vali koopia ja klõpsa jaotises {{ui:Objekti teave}} nuppu {{ui:Tee unikaalseks}} (see kuvatakse, kui komponent on paigutatud rohkem kui üks kord). See koopia saab oma definitsiooni, mille nimi on sama mis originaalil, aga uue numbriga. Muuda seda, ilma et puudutaksid teisi.

## Grupi muutmine komponendiks

Vali grupp ja klõpsa jaotises {{ui:Objekti teave}} nuppu {{ui:Loo komponent}}. See saab uue nime, näiteks Component#2, isegi kui sa grupile nime panid; sisesta nimi uuesti väljale {{ui:Nimi}}.

## Lahutamine

Vali grupp või komponent ja klõpsa nuppu {{ui:Lahuta}} (tööriistaribal või jaotises {{ui:Objekti teave}}). Selle sisu muutub samas kohas lahtiseks geomeetriaks ja kleepub kokku asjadega, mida puudutab. Selle sees olevad grupid jäävad gruppideks.

## Tahkis ja maht

Kui valid grupi või komponendi, näitab {{ui:Objekti teave}} **Tahkis: Jah**, kui selle tahud on suletud ilma tühimikuta (iga serv on jagatud täpselt kahe tahu vahel) ja selle sees pole pesastatud gruppe. Siis näitab see ka **mahtu**. Kast, sein, millesse on läbi lõigatud aken, ja tõmmatud silinder on tahkised; kast, mille ülemine tahk on kustutatud, ei ole.

## Kui viimane koopia kaob

Komponendi viimase koopia kustutamine eemaldab selle ka paneelilt {{ui:Komponendid}}. {{key:Mod+Z}} toob selle tagasi.

## Mida peaks teadma

- **Grupi** koopiad, mis on tehtud käsuga Teisalda, jagavad selles versioonis oma sisu, nagu komponendi koopiad: ühe muutmine muudab teisi. Et teha sellest iseseisev, klõpsa {{ui:Loo komponent}} ja seejärel {{ui:Tee unikaalseks}}. Vt [Tõrkeotsing](topic:troubleshooting#editing-one-group-changed-another).
- Komponendid ei lõika seintesse avasid ega kleepu tahkudele ning valmiskomponentide teeki ei ole. Teed need ise või impordid need.
- Imporditud failid tulevad grupina. Collada-failid säilitavad oma grupid ja komponendid enda sees.
