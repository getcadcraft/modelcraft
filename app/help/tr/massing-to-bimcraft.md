---
title: Kütleyi BimCraft'a gönderin
summary: Push/pull ile modellediğiniz kütleleri BimCraft'a kütle seçenekleri olarak aktarın; her katının, taban izinin, brüt kat alanının ve hacmin her katıdan hesaplanmasıyla.
keywords: kütle, kütle, konsept, seçenekler, bimcraft, ifc, bim, it/çek, katlar, kat, brüt kat alanı, taban izi, hacim, gönder, teslim et, yapı kütlesi, aşama 2
from: 73c51f3f
---

## Ne yapacaksınız

Push/pull ile modellediğiniz blokları BimCraft'ın anladığı kütle seçeneklerine dönüştürün; böylece konsept bir bina modeli olarak devam eder.

## Başlamadan önce

Her kütleyi bir **grup** ya da **bileşen** yapın ve ad verin. Her biri bir seçenek olur. Gruplanmamış serbest geometri gönderilmez.

## Gönderin

1. Gönderilecek grupları seçin. Hiçbir şey seçili değilken, en üst düzeydeki her grup ve bileşen gider.
2. {{ui:Dışa aktar}} seçeneğini, sonra {{ui:Kütleyi BimCraft'a aktar…}} seçeneğini seçin.
3. {{ui:Seçenek kümesinin adı}} ve {{ui:Kat yüksekliği}} değerlerini yazın.
4. Listeyi kontrol edin: her seçeneğin katları, taban izi, brüt kat alanı ve hacmi.
5. Seçenekleri içeren BimCraft'ı yeni bir sekmede açmak için **BimCraft'a gönder**'i seçin ya da dosyayı indirip orada kendiniz açmak için {{ui:IFC olarak kaydet}} seçeneğini seçin.

BimCraft'ta seçenekler "Modeldeki kütle seçenekleri" altında listelenir; buradan biri geçerli seçenek yapılıp duvarlara ve döşemelere geliştirilebilir.

## Bir katının kütleye nasıl dönüştüğü

- **Katlar**, katının yüksekliğinin kat yüksekliğine bölünüp yuvarlanmasıyla bulunur ve en az bir olur. Katlar sonra katının yüksekliğini eşit paylaşır; yani kat yüksekliği 3 m olan 10 m'lik bir blok, 3,33 m'lik 3 kat eder.
- **Bir katın alanı**, o katın seviyesindeki katının kendi yatay kesitinin alanıdır. Geri çekilen bir blokta üst katlar daha küçüktür ve brüt kat alanı bunların toplamıdır.
- **Taban izi**, katının tabanının hemen üstündeki kesitin dış hattıdır.
- **Hacim**, katının kendi hacmidir.

IFC dosyasında her seçenek bir IfcBuildingElementProxy'dir (taban izi katının yüksekliğine kadar yükseltilmiş) ve her kat için o katın brüt alanını taşıyan bir mekân vardır. Tüm seçenekler tek bir binayı paylaşır; en yüksek seçenek kadar katla.

## Basitleştirilmiş şekiller

Düz, dik bir blok olduğu gibi gider. Diğer her şey de gönderilir; liste şeklinin neden basitleştirildiğini söyler:

- **Katlarının hepsi tabanının boyutunda değilse** (geri çekilir ya da eğimlidir): BimCraft'taki kütle, taban hattının tam yüksekliğe yükseltilmiş hâlidir; ama kat alanları ve hacim katının kendisine aittir.
- **Katı kapalı değilse**: kesiti kapatılamayan katlar ölçülmez ve hiçbir şey sayılmaz. Tam değerler için katıyı kapatın ({{ui:Öğe bilgisi}} "Katı: Evet" yazmalıdır).
- **Tabanının birden fazla dış hattı varsa**: en büyüğü taban izi olarak kullanılır.

## Bilmeniz iyi olacaklar

- {{ui:BimCraft için IFC (.ifc)}} ayrı bir dışa aktarmadır: yalnızca şekilleri ve adları gönderir; kat ya da alan bilgisi yoktur.
- Hiçbir şey yüklenmez. Dosya, bu bilgisayardaki BimCraft sekmesine verilir.
