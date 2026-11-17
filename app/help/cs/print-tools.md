---
title: Podpěry, tloušťka stěn, vydutí a oprava
summary: Ukáže, kde tisk potřebuje podpěry a přibližně kolik, najde stěny příliš tenké na tisk, vydutí díl na danou tloušťku stěn s odtokovými otvory a opraví síť se seznamem všech oprav.
keywords: 3D tisk, podpěry, náhled podpor, převis, stromové podpěry, sloupové podpěry, tloušťka stěn, tenké stěny, příliš tenké, tryska, vydutí, dutina, skořepina, odtokový otvor, pryskyřice, oprava, opravit síť, neuzavřená geometrie, obrácené plochy, otvory, malé skořepiny, samoprůnik, překrytí, spojit
from: 286bde26
---

Čtyři nástroje pro přípravu modelu na 3D tiskárnu. Otevřete {{ui:Export}} › {{ui:Zkontrolovat pro 3D tisk (STL nebo 3MF)…}}; v řádku **Nástroje pro tisk** v dialogu jsou {{ui:Náhled podpor}}, {{ui:Tloušťka stěn}}, {{ui:Vyduta}} a {{ui:Oprava}}. Každý se otevře jako karta nad zobrazením. {{ui:Zavřít}} (křížek) ji i s jejími značkami odstraní. Zobrazena je vždy jedna karta.

Každý nástroj pracuje nad tím, co se tiskne: nad výběrem, nebo nad vším viditelným, když nic vybráno není. {{ui:Vyduta}} a {{ui:Oprava}} potřebují vybranou jednu skupinu, komponentu nebo síť, protože ji mění.

## Náhled podpor

Plochy, které se odklánějí od svislé polohy víc než o **úhel převisu**, se vystínují červeně. Z nich se dolů k podložce, nebo na část modelu pod nimi, vykreslí jednoduché podpěry (oranžově).

- **Úhel převisu**: 45° je to, co většina tiskáren zvládne bez podpěry. Zvyšte jej pro tiskárnu, která dobře překlenuje.
- **Sloupy**: rovný sloupek každé 3 mm pod každým převisem. Odhad je počítá jako 15% vzor podpěr.
- **Strom**: blízké body se spojí do jednoho kmene pod jejich středem. Žádná větev se neodkloní víc než o 45°. Stromy obvykle spotřebují méně materiálu a dotýkají se podložky na méně místech.

Karta řekne, kolik plochy potřebuje podporu, kolik je bodů podpor a přibližně kolik materiálu zaberou. Podpěry stojící na modelu (ne na podložce) se počítají, protože na něm zanechají stopy. Pokud je v {{ui:Nastavení}} zvolena tisková podložka, pod modelem se vykreslí podložka.

:::note
Toto je náhled, ne slicer: skutečné podpěry rozhoduje váš slicer. Na velmi velkém převisu se body podpor rozprostřou šíře, aby náhled zůstal rychlý. Karta to řekne.
:::

## Tloušťka stěn

Každá plocha se změří přímo tělesem na druhou stranu. Stěny pod **nejtenčí přípustnou stěnou** jsou červené a stěny pod jedenapůlnásobkem jsou oranžové. Ty se vytisknou, ale mohou vyjít slabé.

Tenké oblasti jsou vypsány od nejtenčí, s uvedením, jak jsou tenké a jak velké jsou. {{ui:Zobrazit}} otočí kameru k nim.

Tiskárna nedokáže udělat stěnu tenčí než zhruba dvojnásobek šířky své trysky: 0.8 mm pro běžnou trysku 0.4 mm (výchozí). Pryskyřičné tiskárny zvládnou méně; zkontrolujte návod vaší tiskárny.

U velmi velkého modelu jen některé plochy vyšlou paprsek a ostatní převezmou tloušťku svých sousedů. Karta řekne, kolik jich bylo změřeno.

## Vydutí

Vydutí zachová vnější tvar a vybere vnitřek, takže stěny zůstanou tak silné, jak požadujete. Pryskyřicové tisky spotřebují méně pryskyřice a méně zatěžují tiskovou desku. Filamentové tisky spotřebují méně plastu, než by spotřeboval výplň.

1. Vyberte skupinu, komponentu nebo síť, pak otevřete {{ui:Vyduta}}.
2. Nastavte **stěnu** (zpočátku 2 mm) a šířku **odtokových otvorů**.
3. U pryskyřicového tisku klikněte na {{ui:Umístit odtokový otvor}} a pak klikněte na vnější stranu modelu, kam má otvor jít: nízko, blízko tiskové podložky, aby pryskyřice odtekla. Umístěte tolik, kolik potřebujete. Každý se zobrazí jako modrý kruh a je uveden u {{ui:Odebrat}}.
4. {{ui:Náhled}} řekne, kolik vydutí odebere.
5. {{ui:Vydutit}} provede změnu jedním krokem, který vrátí {{key:Mod+Z}}.

Výsledkem je jedno uzavřené těleso, které kontrola pro 3D tisk přijme. ModelCraft ho nejdřív zkontroluje a nic nezmění, pokud by neprošlo. Tam, kde je model tenčí než dvě stěny, zůstane plný. Výsledkem je skupina, jejíž rovné plochy jsou jednotlivé plochy, takže s ní můžete dál modelovat pomocí {{ui:Tlač/tah}}. Zakřivený díl vydutý na jemné mřížce obvykle má příliš mnoho ploch a stane se místo toho sítí. Stavový řádek říká, který případ nastal.

:::tip
U většiny tvarů je vnitřek vnější plocha posunutá dovnitř přesně o stěnu. Tam, kde to rohy nebo tenké části znemožní, ModelCraft místo toho sleduje vnější tvar ve vzdálenosti stěny na jemné mřížce. Karta pak řekne, jak blízko to je (s přesností na zlomek milimetru).
:::

## Oprava

{{ui:Oprava}} prohlédne vybraný díl tak, jak by ho prohlédl slicer tiskárny. Bezpečně opraví to, co lze opravit, a vypíše každou opravu:

| Opraví | Co to znamená |
|---|---|
| Trojúhelníky bez plochy | vynechány |
| Trojúhelník nakreslený dvakrát | jedna kopie zůstane; plocha nakreslená zády k sobě sama (bez tloušťky) se odstraní |
| Volné kusy pod 0.5 mm | odstraněny |
| Trojúhelníky otočené špatným směrem | otočeny, aby odpovídaly sousedům |
| Otvory, rovné nebo ne | uzavřeny vějířem nových trojúhelníků ze středu každého otvoru |
| Díl je naruby | otočen ven (dutina uvnitř jiného dílu zůstane beze změny, protože má být obrácena dovnitř) |

{{ui:Opravit bezpečné}} udělá všechny jedním krokem, který vrátí {{key:Mod+Z}}, a stavový řádek vypíše každou opravu. Opravený díl se stane skupinou, jejíž rovné plochy jsou jednotlivé plochy. Pokud se stále neuzavře (zůstane něco pod **Ponecháno vám**), nebo by měl pro skupinu příliš mnoho ploch, stane se místo toho sítí. Její plochy zůstanou trojúhelníky, a rovné plochy stále vypadají rovně. Stavový řádek říká, který případ nastal. {{ui:Spojit překrývající se díly}} funguje stejně.

Co nejde bezpečně opravit, je uvedeno pod **Ponecháno vám** a v zobrazení označeno fialově, s {{ui:Zobrazit}}:

- **Hrany, kde se setkávají tři nebo více ploch**: rozhodněte, která plocha patří, a ostatní smažte.
- **Díl procházející sám sebou**: přesuňte nebo překreslete ten díl. Viz [Protnutí ploch](topic:intersect).
- **Otvory příliš velké nebo příliš zamotané na uzavření**: nakreslete plochy přes ně.
- **Oddělené díly, které se překrývají**: slicery je stejně sloučí. {{ui:Spojit překrývající se díly}} z nich udělá jedno uzavřené těleso. Přepočítá plochy tam, kde se stýkají, proto je to samostatné tlačítko, které se nikdy nespustí za vás.

U skupin tlač/tah můžete opravit i jednotlivě v {{ui:Informace o prvku}} › {{ui:Zobrazit problémy}} / {{ui:Opravit}}, což zachová plochy, které jste nakreslili. Viz [Nástroje těles](topic:solids).

Související: [Připravte model na 3D tisk](topic:print-3d) · [Styl pro začátečníky](topic:beginner) · [Ještě není hotovo](topic:not-built-yet#3d-printing)
