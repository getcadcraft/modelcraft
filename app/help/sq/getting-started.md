---
title: Fillo me ModelCraft
summary: Për çfarë shërben ModelCraft, si ta hapësh, dhe kutia jote e parë nga një drejtkëndësh deri te një model i ruajtur.
keywords: fillim, modeli i parë, fillo, mësim, hyrje, kuti, masivitet, 3d, shtyj tërhiq, fillim i shpejtë, i udhëzuar, udhëzues, fillestar, i ri në 3D
from: d47ad719
---

ModelCraft është një modelues 3D për projektimin fillestar: studime vëllimesh, plane dhomash, forma të shpejta ndërtesash dhe hijet që ato hedhin. Vizaton forma të sheshta, i tërheq lart në solide, dhe vazhdon të punosh mbi to duke vizatuar në faqet e tyre. Punon në shfletuesin tënd të uebit, dhe modelet e tua qëndrojnë në kompjuterin tënd.

Nëse ke përdorur SketchUp, shumica e asaj që di vazhdon të vlejë: të njëjtat shkronja të veglave, shtyj/tërhiq, një kuti vlerash për madhësi të sakta, grupe dhe komponentë. [Nga modelues të tjerë](topic:coming-from) liston çfarë është ndryshe.

## Hap ModelCraft

1. Hap ModelCraft në një version të tanishëm të Chrome, Edge, Firefox ose Safari. Shih [Shfletuesit dhe kompjuterët](common:browsers).
2. Prit që të shfaqet pamja 3D: një zonë e çelët (ose e errët) në mes, me një kartelë me titull "Fillo modelimin".

Ekrani ka një shirit veglash lart, {{ui:Pasqyra}} dhe {{ui:Komponentët}} në të majtë, pamjen 3D në mes, {{ui:Informacioni i entitetit}}, {{ui:Stili}} dhe {{ui:Skenat}} në të djathtë, dhe një shirit statusi poshtë me kutinë e vlerave dhe njësitë. [Ekrani i ModelCraft](topic:workspace) shpjegon çdo pjesë.

:::note
ModelCraft ka nevojë për WebGL, veçorinë e vizatimit 3D të shfletuesit tënd. Nëse mesi i ekranit mbetet bosh dhe veglat nuk bëjnë asgjë, shih [Zgjidhja e problemeve](topic:troubleshooting#the-3d-view-is-blank).
:::

## Kontrollo njësitë së pari

Shiko në këndin e poshtëm djathtas. Zgjedhësi i njësive tregon në çfarë njësish matën gjatësitë.

- Një model i ri nis në **këmbë dhe inç** kur shfletuesi yt është vendosur në Shtetet e Bashkuara (edhe Liberi dhe Mianmar), dhe në **milimetra** kudo tjetër.
- Për ta ndryshuar, zgjidh një njësi tjetër në zgjedhës: {{ui:ft dhe in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} ose {{ui:mm}}. Vetë modeli nuk ndryshon madhësi; ndryshon vetëm mënyra se si shfaqen gjatësitë dhe si lexohen numrat e thjeshtë.

Një numër që shkruan pa njësi përdor njësinë e modelit. Në një model me këmbë dhe inç, një numër i thjeshtë është **inç**, kështu që `120` do të thotë 10 këmbë.

## Lëre ModelCraft të udhëzojë modelin tënd të parë

I ri në 3D? Te kartela {{ui:Fillo modelimin}}, kliko {{ui:Modeli i parë i udhëzuar}} (është edhe te {{ui:Pamjet}}). Një kartelë e vogël të udhëzon nëpër katër hapa, nga një drejtkëndësh i sheshtë deri te një model gati për një printer 3D:

1. Vizato një drejtkëndësh në tokë.
2. Tërhiqe lart në një kuti.
3. Bëje kutinë një objekt (një grup).
4. Kontrollo për printim 3D, pastaj shkarko një skedar 3MF ose STL.

Kartela e shikon modelin, jo butonat: kalon te hapi tjetër kur hapi është kryer, çfarëdo mënyre të kesh përdorur, dhe kthehet një hap prapa kur zhbën. {{ui:Zgjidh mjetin}} e zgjedh mjetin për ty. Mbyllë në çdo kohë me {{ui:×}}.

## Vizato kutinë tënde të parë

1. Shtyp {{key:R}} për veglën {{ui:Drejtkëndësh}}, ose kliko {{ui:Drejtkëndësh}} në grupin {{ui:Vizato}} të shiritit të veglave.
2. Kliko një herë në tokë pranë mesit të pamjes. Ky është qoshja e parë.
3. Largo treguesin. Një drejtkëndësh e ndjek, dhe kutia e vlerave poshtë (me etiketën {{ui:Dimensionet}}) tregon madhësinë e tij.
4. Shkruaj madhësinë dhe shtyp {{key:Enter}}: për shembull `4m,3m`, ose `16',12'` në këmbë dhe inç. Nuk të duhet të klikosh më parë në kutinë e vlerave; shkrimi i një numri e dërgon atje.

   Merr një drejtkëndësh të sheshtë në tokë. Është një **faqe**: një sipërfaqe me skaje rreth saj.

5. Shtyp {{key:P}} për {{ui:Shtyj/tërhiq}}.
6. Kliko drejtkëndëshin, lëviz treguesin lart dhe kliko përsëri. Ose kliko drejtkëndëshin dhe shkruaj një lartësi, si `3m` ose `10'`, pastaj shtyp {{key:Enter}}.

   Drejtkëndëshi bëhet një kuti me majë, fund dhe katër anë.

7. Shtyp {{key:Space}} për t'u kthyer te {{ui:Përzgjidh}}, pastaj kliko majën e kutisë. {{ui:Informacioni i entitetit}} në të djathtë tregon sipërfaqen e saj.

:::tip
Mund edhe të tërheqësh në vend të dy klikimeve: shtyp te qoshja e parë, tërhiq dhe lësho te e dyta. Të dy mënyrat funksionojnë për çdo mjet vizatimi.
:::

## Shiko përreth

- **Orbito:** tërhiq me butonin e mesëm të miut (rrotën), ose shtyp {{key:O}} dhe tërhiq me butonin e majtë.
- **Lëviz pamjen:** tërhiq me butonin e djathtë, ose me butonin e mesëm ndërsa mban {{key:Shift}}.
- **Zmadhim:** rrotullo rrotën. Zmadhon drejt asaj që është nën treguesin.
- **Shiko gjithçka:** shtyp {{key:Shift+Z}}, ose kliko {{ui:Shtrirja}}.

Në një trackpad ose ekran prekjeje gjestet janë të ndryshme. Shih [Orbito, lëviz dhe zmadho](topic:orbit-pan-zoom).

## Zhbëj

Shtyp {{key:Mod+Z}} për të zhbërë dhe {{key:Mod+Y}} për të ribërë, ose përdor {{ui:Zhbëj}} dhe {{ui:Ribëj}} në shiritin e veglave. ModelCraft mban mend 200 hapat e fundit ndërsa modeli është i hapur. Historiku nuk ruhet në skedar.

## Ruaj modelin tënd

1. Kliko {{ui:Ruaj}} në grupin {{ui:Skedar}}, ose shtyp {{key:Mod+S}}.
2. Shfletuesi shkarkon një skedar me emrin e modelit tënd, si `Untitled.modelcraft`. Shiriti i statusit tregon ku shkoi: "U ruajt Untitled.modelcraft në shkarkimet e tua."

**Ruajtja është një shkarkim.** Çdo ruajtje krijon një kopje të re në dosjen e shkarkimeve; nuk e mbishkruan skedarin që hape. Për të mbajtur një dosje projekti të rregullt, zhvendose ose riemërto skedarin atje vetë. [Hap, ruaj, importo dhe eksporto](topic:files) shpjegon pse dhe çfarë të tjera mund të bësh.

:::warning
ModelCraft nuk ruan vetvetiu. Nëse mbyll skedën me ndryshime të paruajtura, shfletuesi pyet së pari ("Leave site?"). Zgjidh të qëndrosh, pastaj ruaj.
:::

## Merr ndihmë

Shtyp {{key:F1}} ose kliko {{ui:Ndihmë}} në shiritin e aplikacionit për ta hapur këtë ndihmë pranë modelit. Funksionon edhe pa lidhje. Shtyp {{key:F1}} përsëri, ose {{key:Esc}} brenda ndihmës, për ta mbyllur. Shih [Përdorimi i kësaj ndihme](common:help).

## Ku të shkosh më pas

- [Vizato faqe me vija, drejtkëndësha dhe rrathë](topic:draw-faces)
- [Shtyj dhe tërhiq faqet në solide](topic:push-pull)
- [Shkruaj madhësi të sakta në kutinë e vlerave](topic:value-box)
- [Çdo tast dhe veprim me miun](topic:keyboard)
