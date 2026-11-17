---
title: Grupet dhe komponentët
summary: Mbaji objektet të ndarë nga njëri-tjetri, redakto një kopje për t'i ndryshuar të gjitha, dhe përdor panelet Pasqyra dhe Komponentët.
keywords: grup, komponent, bëj grup, bëj komponent, çmonto, bëje unik, pasqyra, instancat, kopjet, bllok, të futura, redakto grupin, vendos
from: 7cb925f3
---

Gjeometria e lirë në ModelCraft ngjitet: vijat që prekin njëra-tjetrën ndahen mes tyre, dhe faqet që ndajnë një brinjë lëvizin bashkë. Kjo e bën të mundur vizatimin mbi faqe, por do të thotë edhe që një kuti e vizatuar kundër një kutie tjetër bashkohet me të. **Grupet** dhe **komponentët** i mbajnë gjërat të ndara.

- Një **grup** mbështjell disa gjeometri në mënyrë që të veprojë si një objekt i vetëm. Asgjë nga jashtë nuk mund t'i ngjitet.
- Një **komponent** është një grup që mund të vendoset shumë herë. Çdo kopje ndan të njëjtën përmbajtje: redakto një dhe të gjitha ndryshojnë. Përdor komponentët për çdo gjë të përsëritur: dritare, kolona, tavolina, pemë.

## Bëj një grup ose një komponent

1. Përzgjidh gjeometrinë. Një klikim i trefishtë mbi një faqe përzgjedh të gjithë objektin e lidhur; një tërheqje me dritare përzgjedh gjithçka brenda kutisë.
2. Shtyp {{key:Shift+G}} për një grup, ose {{key:G}} për një komponent. Mund të klikosh gjithashtu {{ui:Grup}} ose {{ui:Komponent}} në grupin {{ui:Organizo}} të shiritit të veglave, ose {{ui:Bëj grup (Shift+G)}} ose {{ui:Bëj komponent (G)}} te {{ui:Informacioni i entitetit}}.

   Shiriti i statusit thotë "U grupua si Group#1." ose "Komponenti Component#1 u krijua.", objekti i ri është i përzgjedhur, dhe shfaqet në {{ui:Pasqyra}}.

3. Për ta emërtuar, shkruaj një emër në fushën {{ui:Emri}} të {{ui:Informacioni i entitetit}} dhe shtyp {{key:Enter}} ose kliko diku tjetër.

Përzgjedhja e një faqeje sjell me vete brinjët e saj. Nëse nuk është përzgjedhur asgjë, shiriti i statusit thotë "Përzgjidh fillimisht pak gjeometri (tërhiq një dritare, ose klikim i trefishtë për të përzgjedhur gjithçka të lidhur)."

Mund të gruposh edhe grupe: përzgjidh disa grupe dhe shtyp {{key:Shift+G}}. {{ui:Pasqyra}} shfaq futjen njëri brenda tjetrit.

:::note
Shkronjat e tasteve përputhen me parazgjedhjet e SketchUp: {{key:G}} bën një komponent, {{key:Shift+G}} një grup.
:::

## Redakto brenda një grupi ose komponenti

1. Kliko dy herë mbi të (në pamje ose në {{ui:Pasqyra}}), ose përzgjidhe dhe kliko {{ui:Redakto}} te {{ui:Informacioni i entitetit}}.

   Pjesa tjetër e modelit zbehet, boshtet zhvendosen te boshtet e vetë grupit, dhe {{ui:Pasqyra}} lexon "Duke redaktuar: Model › Group#1". Shiriti i statusit thotë "Duke redaktuar Group#1. Esc ose klikim i dyfishtë jashtë e mbyll."

2. Vizato, shtyj/tërhiq, zhvendos dhe fshi si zakonisht. Gjithçka që bën mbetet brenda grupit.
3. Mbylle: shtyp {{key:Esc}} (dy herë nëse është përzgjedhur diçka), kliko dy herë në hapësirë boshe, ose kliko {{ui:Mbyll grupin}} në {{ui:Pasqyra}}.

Ndërsa një komponent është i hapur, çdo kopje e tij ndryshon ndërsa punon.

## Vendos më shumë kopje të një komponenti

- Kopjoje me {{ui:Zhvendos}} dhe {{key:Ctrl}} (shih [Zhvendos dhe kopjo](topic:move-copy)). Çdo kopje është një vendosje tjetër e të njëjtit komponent.
- Ose kliko {{ui:Vendos}} pranë tij te paneli {{ui:Komponentët}}, pastaj kliko ku shkon. Origjina e tij, qoshja më e ulët e kutisë përreth asaj që përzgjodhe kur e bëre, vendoset aty ku kliko. Vegla kthehet pastaj te {{ui:Përzgjidh}}.

{{ui:Komponentët}} tregon sa kopje janë vendosur ("4×"), dhe {{ui:Pasqyra}} tregon numrin pas emrit.

## Rirenditja te Pasqyra

Tërhiq një rresht në {{ui:Pasqyra}} për ta ndryshuar vendin ku i përket. Asgjë nuk lëviz në pamje: një grup mban vendin e vet në model.

- **Brenda një grupi:** lësho mbi mesin e rreshtit të një grupi (rreshti merr një kontur me viza). Shkon brenda, në fund.
- **Në një renditje tjetër:** lësho mbi skajin e sipërm ose të poshtëm të një rreshti (shfaqet një vijë). Shkon menjëherë para ose pas atij rreshti, brenda të njëjtit grup me atë rresht, kështu që kjo e fut gjithashtu në një grup në një vend të zgjedhur.
- **Jashtë, në nivelin e sipërm:** lësho mbi titullin e {{ui:Pasqyra}}. Shkon në fund.

Çdo lëshim është një hap: {{key:Mod+Z}} e kthen mbrapsht. {{key:Esc}} gjatë tërheqjes nuk lëshon asgjë. Një grup nuk mund të futet brenda vetes ose brenda një grupi që përmban. Tërheqja është e çaktivizuar ndërsa {{ui:Gjej sipas emrit}} ka tekst.

:::touch
Mbaj një gisht mbi një rresht për një moment, pastaj tërhiqe. Një shkundje e shpejtë e lëviz listën.
:::

## Bëj një kopje të ndryshme

Përzgjidh kopjen dhe kliko {{ui:Bëje unik}} te {{ui:Informacioni i entitetit}} (shfaqet kur komponenti është vendosur më shumë se një herë). Ajo kopje merr përkufizimin e vet, me emër si origjinali me një numër të ri. Redakto atë pa prekur të tjerat.

## Kthe një grup në komponent

Përzgjidh grupin dhe kliko {{ui:Bëj komponent}} te {{ui:Informacioni i entitetit}}. Merr një emër të ri, si Component#2, edhe nëse e kishe emërtuar grupin; shkruaje emrin përsëri te {{ui:Emri}}.

## Çmonto

Përzgjidh një grup ose komponent dhe kliko {{ui:Çmonto}} (në shiritin e veglave ose te {{ui:Informacioni i entitetit}}). Përmbajtja e tij bëhet gjeometri e lirë në vendin ku ishte, dhe ngjitet me gjërat që prek. Grupet brenda tij mbeten grupe.

## Ngurtë dhe vëllim

Kur përzgjedh një grup ose komponent, {{ui:Informacioni i entitetit}} shfaq **I ngurtë: Po** nëse faqet e tij mbyllen pa boshllëqe (çdo brinjë ndahet nga saktësisht dy faqe) dhe nuk ka grupe të futura brenda tij. Atëherë shfaq edhe **vëllimin**. Një kuti, një mur me një dritare të prerë përmes tij, dhe një cilindër i tërhequr janë trupa të ngurtë; një kuti me krye të fshirë nuk është.

## Kur shkon kopja e fundit

Fshirja e kopjes së fundit të një komponenti e heq atë edhe nga paneli {{ui:Komponentët}}. {{key:Mod+Z}} e kthen mbrapsht.

## Gjëra për t'u ditur

- Kopjet e një **grupi** të bëra me {{ui:Zhvendos}} ndajnë përmbajtjen e tyre në këtë version, si bëjnë kopjet e komponentëve: redaktimi i një prej tyre ndryshon të tjerat. Për ta bërë një të pavarur, kliko {{ui:Bëj komponent}}, pastaj {{ui:Bëje unik}}. Shih [Zgjidhja e problemeve](topic:troubleshooting#editing-one-group-changed-another).
- Komponentët nuk prejnë hapje në mure dhe nuk ngjiten te faqet, dhe nuk ka bibliotekë komponentësh të gatshëm. Ti i bën vetë, ose i importon.
- Skedarët e importuar vijnë si grup. Skedarët Collada mbajnë brenda tyre grupet dhe komponentët e vet.
