---
title: Utilizarea ModelCraft cu un asistent AI
summary: Lăsați un asistent AI propriu sau un script să vadă modelul și să construiască solide simple: permisiuni, conectarea prin CadCraft Studio și jurnalul de activitate.
keywords: ai, asistent, agent, mcp, protocol de context al modelului, script, automatizare, modelare, cutie, cilindru, randare, coada de randare, permisiuni, deconectare, activitate
from: 629cd0b7
---

## Ce veți afla

Cum să lăsați un asistent AI (sau un script propriu) să lucreze cu ModelCraft și cum să decideți ce are voie să atingă.

ModelCraft nu are AI propriu și nu trimite nimic nicăieri. Aduceți asistentul: orice program care vorbește Model Context Protocol (MCP). ModelCraft îi oferă doar unelte, iar dumneavoastră alegeți care.

## Activarea

1. Deschideți {{ui:Setări}} (rotița din bara aplicației sau {{key:Mod+,}}) și mergeți la fila {{ui:ModelCraft}}.
2. Sub {{ui:Asistenți}}, bifați **Permiteți asistenților AI și scripturilor să folosească ModelCraft**. Este oprit până îl activați.
3. Alegeți ce are voie să facă: **Citire** este bifată de la început; bifați **Editare**, **Salvare** sau **Exportare** doar când aveți nevoie de ele.

Uneltele din afara permisiunilor bifate nu sunt oferite asistentului, iar dacă acesta cere totuși una, ModelCraft o refuză și o notează în jurnalul de activitate. Oprirea comutatorului încheie imediat toate conexiunile; {{ui:Resetare setări ModelCraft}} îl oprește și pe el.

## Conectarea asistentului

Asistenții se conectează prin **CadCraft Studio** de pe calculator: Studio pornește un server mic, accesibil doar acestui calculator, protejat printr-un token pe care îl generează de fiecare dată când pornește. În Studio, alegeți {{ui:Conectare asistent}} și copiați adresa și tokenul în asistent (Studio arată setările exacte de lipit). Nu partajați niciodată tokenul.

:::note
O filă de browser nu poate deschide o conexiune pentru un asistent: în aplicațiile din browser comutatorul nu are efect până nu folosiți CadCraft Studio pe calculator.
:::

## Rămâneți la control

- **Fiecare modificare este un singur pas de anulare**, etichetat cu numele pe care i-l dă asistentul (de exemplu „Asistent: box”). {{key:Mod+Z}} anulează în întregime ultima modificare a asistentului.
- **Știți când este conectat unul.** Un buton din bara aplicației indică asistentul cât timp este conectat; faceți clic pe el ca să vedeți ce are voie să facă sau ca să îl **Deconectați**.
- **Activitate.** {{ui:Setări}} › {{ui:ModelCraft}} › {{ui:Asistenți}} › {{ui:Activitate}} listează fiecare apel: când, ce unealtă, realizat sau refuzat. {{ui:Salvarea jurnalului}} păstrează o copie.

## Ce poate cere un asistent

| Unealtă | Permisiune | Ce face |
|---|---|---|
| `app_info`, `model_describe` | Citire | Unitatea modelului, dimensiunea și fiecare grup și componentă cu locul ei, dacă este solid închis și volumul său |
| `view_screenshot` | Citire | O imagine a vederii 3D așa cum apare |
| `box_add`, `cylinder_add` | Editare | O cutie sau un cilindru ca grup nou, la un loc și la o dimensiune date de utilizator sau de asistent („3m”, „10'” sau un număr în unitatea modelului) |
| `instance_move`, `instances_erase` | Editare | Mută sau șterge grupuri și componente |
| `faces_list`, `materials_list` | Citire | Fețele unui grup sau ale geometriei libere (direcția, aria și centrul fiecăreia); materialele și culorile cu care poate colora |
| `push_pull` | Editare | Împinge sau trage o față, așa cum face {{ui:Împinge/Trage}} |
| `paint` | Editare | Colorează fețe sau un grup întreg cu o culoare sau un material |
| `group_make` | Editare | Creează un grup sau o componentă din fețe și grupuri libere |
| `scene_add`, `scene_show` | Editare | Salvează vederea ca scenă; trece la o scenă salvată |
| `mesh_add` | Editare | Un obiect de plasă de la care să pornească (cub, sferă, cilindru …), așa cum îl adaugă spațiul de lucru {{ui:Plasă}} |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Citire / Editare | Stiva de modificatori a unei plase: oglindire, matrice, subdiviziune, teșire și restul; nimic nu se aplică definitiv |
| `usd_export` | Exportare | Modelul ca OpenUSD (.usda, .usdc sau .usdz), așa cum îl scrie salvarea modelului ca USD ([USD](topic:usd)); într-un dosar permis în Studio, altfel o descărcare |
| `render_still` | Exportare | O imagine randată a vederii sau a unei scene salvate, așa cum o face butonul {{ui:Randare}} din caseta {{ui:Randare}}, cu setările de randare ale modelului dacă nu cere altele (o presetare de scenă: exterior, interior, secțiune, noapte sau auto; rapid sau calitate înaltă, dimensiune, eșantioane, cer); un PNG pe care îl poate examina sau un fișier PNG, EXR ori de randare într-un dosar permis în Studio ([Randarea unei imagini](topic:render)) |
| `render_queue` | Exportare | Adaugă imagini de calitate înaltă în coada casetei Randare (vederea sau scenele salvate) și rulează coada; imaginile terminate merg într-un dosar permis sau rămân în {{ui:Coada de randare}} din caseta Randare. Are nevoie de WebGPU |
| `link_push` | Editare | Actualizează un model legat dintr-un alt program (vezi [Păstrarea unui model .3dm actualizat](topic:live-3dm-link)) |
| `link_status` | Citire | Spune dacă un model legat mai este acolo și când s-a actualizat ultima oară |
| `undo` | Editare | Anulează propriii pași |

Solidele create de un asistent intră ca grupuri, deci nu se unesc niciodată cu ce ați desenat. Nicio unealtă nu salvează modelul: salvarea rămâne la utilizator, iar exportul sau randarea cer bifată **Exportare**. O randare nu modifică modelul; randarea unei scene salvate mută vederea la ea, la fel ca {{ui:Scene}}.

## Dacă ceva nu funcționează

- **Asistentul nu vede uneltele ModelCraft:** verificați că comutatorul este pornit în această fereastră și că fereastra este deschisă în Studio.
- **„needs the edit permission”:** bifați **Editare** sub {{ui:Asistenți}}, apoi cereți din nou. Mesajul apare ca „Necesită permisiunea de editare”.
- **Erori „401” sau „token”:** tokenul s-a schimbat (Studio a fost repornit sau s-a făcut {{ui:Token nou}}). Copiați noul token în setările asistentului.

## Vezi și

- [Rețete pentru asistenții AI](common:assistants-recipes): exemple lucrate, fiecare cu uneltele pe care le apelează.
