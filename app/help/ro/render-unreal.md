---
title: Trimiterea scenei către un motor de joc
summary: Studio poate scrie scena într-un proiect Unreal Engine și o păstrează sincronizată la fiecare trimitere; modificările proprii se află într-un strat pe care CadCraft nu-l scrie niciodată. Modulul care o deschide nu a fost lansat încă.
keywords: unreal, unreal engine, motor de joc, legătură, trimitere, scenă usd, proiect, live, cameră cine, coadă de randare video
from: 9a765cc2
---

În CadCraft Studio, lista Motor poate păstra o **legătură** către un proiect Unreal Engine. Într-un singur sens: de la CadCraft către Unreal.

## Trimiterea scenei

1. Alegeți intrarea Unreal din lista Motor. Prima dată, Studio cere să alegeți dosarul proiectului (cel cu fișierul `.uproject`); îl reține.
2. Faceți clic pe {{ui:Send}}. Studio scrie `CadCraft/<file name>/` în proiect: scena ca fișier USD, fișierul de setări, profilele de lumină și două fișiere mici de strat.
3. Modificați modelul, salvați și trimiteți din nou. Se înlocuiesc doar scena și fișierul de setări.

## Modificările proprii sunt în siguranță

Scena deschisă de Unreal este un strat rădăcină mic, creat o singură dată, cu două straturi sub el: **modificările proprii** deasupra (`<name>.user.usda`, gol la început, niciodată rescris de CadCraft) și scena CadCraft dedesubt. Modificările salvate în stratul propriu rămân la o nouă trimitere a scenei. Luminile și celelalte actori pe care îi plasați în nivelul Unreal sunt în afara scenei și nici ele nu sunt atinse.

## Fără Studio

În browser sau pe un calculator unde Studio nu găsește Unreal, alegeți **Dosarul proiectului Unreal (.zip)** în lista Motor și faceți clic pe {{ui:Render}}. Se salvează același dosar ca arhivă zip: dezarhivați-o în dosarul `CadCraft` al proiectului. Lăsați bifată **Includere fișierele scenei** la prima salvare; debifați-o la salvările următoare, astfel încât arhiva să conțină doar scena și fișierul de setări, iar stratul propriu să nu fie înlocuit niciodată.

:::note
Modulul Unreal care deschide scena, aplică soarele, lămpile, camerele și expunerea, urmărește fiecare trimitere și randează o cameră **nu este încă lansat** și nu a fost rulat în Unreal. Până atunci, {{ui:Send}} pune fișierele în proiect, iar instrumentele USD ale Unreal le pot deschide. Windows este primul sistem; macOS urmează.
:::
