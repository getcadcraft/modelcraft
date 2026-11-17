---
title: Valaise malli lampuilla
summary: Aseta malliin lamput, kohdevalot ja valopaneelit, jotta renderöidyt kuvat voivat näyttää huoneet yöllä tai valaistut sisätilat pehmeillä varjoilla.
keywords: valo, valot, lamppu, lamput, valaistus, polttimo, kattovalo, kohdevalo, alasvalo, valopaneeli, aluevalo, luumenit, kirkkaus, värilämpötila, lämmin, yö, sisätila, renderöinti
from: c8d72cbc
---

Lamput valaisevat [renderöityjä kuvia](topic:render). Ne eivät muuta 3D-näkymää, jossa kukin lamppu näkyy pienenä merkkinä omassa värissään.

## Lisää lamppu

1. Napsauta oikealla olevassa osassa {{ui:Valot}} kohtaa {{ui:Lamppu}}, {{ui:Kohdevalo}} tai {{ui:Valopaneeli}}.
2. Napsauta kohtaa, johon se tulee. Kohdistus toimii kuten piirrettäessä.
   - Katossa tai seinässä **lamppu** roikkuu 25 cm pinnasta sille puolelle, jolta katsot. **Valopaneeli** on pinnalla ja säteilee pois pinnasta.
   - **Kohdevalo** vaatii kaksi napsautusta: ensin paikka, sitten kohde, johon se osoittaa.

Uusi lamppu on valittuna osassa {{ui:Valot}}, valmiina muokattavaksi.

## Muokkaa lamppua

Napsauta lampun nimeä osassa {{ui:Valot}} tai sen merkkiä näkymässä työkalulla {{ui:Valitse}}. Sitten:

| Asetus | Mitä se tekee |
|---|---|
| {{ui:Kirkkaus (luumenia)}} | Kuinka paljon valoa se antaa. Tavallinen kotipolttimo on noin 800 luumenia, kirkas kattopaneeli 3000 |
| {{ui:Väri}} | {{ui:Lämmin}} (kotipolttimo), {{ui:Neutraali}} tai {{ui:Päivänvalo}}, tai mikä tahansa väri |
| {{ui:Keila (astetta)}} | Kohdevalon kartio reunasta reunaan |
| {{ui:Lampun koko}}, {{ui:Leveys}}, {{ui:Syvyys}} | Isommat polttimot ja paneelit antavat pehmeämmät varjot |
| {{ui:Punainen (x)}}, {{ui:Vihreä (y)}}, {{ui:Korkeus}} | Missä se on |

Lampun nimen vieressä oleva valintaruutu kytkee sen päälle tai pois. {{ui:Poista valo}} poistaa sen. Jokainen muutos on yksi vaihe: {{key:Ctrl+Z}} kumoaa sen. Lamput tallentuvat `.modelcraft`-tiedostoon.

## Kuvat yöllä

Valitse {{ui:Renderöi kuva…}}-toiminnossa valintaruutu {{ui:Käytä toista päivämäärää ja aikaa tälle kuvalle}} ja valitse illan tunti. Kun aurinko on laskenut, taivas pimenee ja vain lamput valaisevat mallin. Jos kuva on liian tumma, nosta valintaikkunan {{ui:Kirkkaus}}-arvoa tai lisää lamppuja.

:::tip
Huoneesta sisältä katsottuna aseta kamera huoneeseen (kierrä ja lähennä, tai käytä [kohtausta](topic:scenes)), lisää lamppu kattoon ja renderöi yöllä. {{ui:Nopea}}-tilassa lampusta kaukana olevat nurkat jäävät tummemmiksi kuin valokuvassa. [Korkealaatuinen tila](topic:render#high-quality) antaa valon heijastua seinistä.
:::
