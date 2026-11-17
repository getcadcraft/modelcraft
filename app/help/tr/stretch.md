---
title: Gerilen bileşenler
summary: Bir bileşenin bir kopyasını, parçaları kendi boyutlarını koruyarak daha geniş, derin ya da yüksek yapın: aynı ayaklara sahip daha uzun bir masa, rafları yayılmış daha yüksek bir kitaplık, direkleri tekrar eden bir korkuluk.
keywords: dinamik bileşen, gerilme, bileşeni yeniden boyutlandır, parametrik, adlandırılmış boyutlar, tekrar, dizi, ayaklar, raflar, korkuluk, kurallar, değişkenler
from: b4c40f43
---

Bir bileşeni ölçeklemek, içindeki her şeyi, ayakları ve kirişleri de dahil olmak üzere büyütür. **Bu kopyayı uzat** bir bileşenin genişliğini, derinliğini ya da yüksekliğini değiştirir; her parça bir kurala uyar: masa tablası büyür, ayakları kalınlığını korur ve uçlarda kalır.

Bu, her [başlangıç kütüphanesi](topic:starter) öğesinde olduğu gibi, parçalardan oluşan bileşenlerde çalışır; yani bileşenin içindeki gruplar ya da bileşenlerde.

## Bir kopyayı uzatın

1. Bileşeni seçin.
2. {{ui:Öğe bilgisi}} içinde {{ui:Bu kopyayı uzat…}} öğesine tıklayın.
3. Yeni {{ui:Genişlik (kırmızı)}}, {{ui:Derinlik (yeşil)}} ve {{ui:Yükseklik (mavi)}} değerlerini yazın ve {{ui:Gerilme}} öğesine tıklayın.

Yalnızca o kopya değişir: kendi başına bir bileşen olur ve hangi orijinalden geldiğini hatırlar. İstediğiniz zaman yeniden uzatabilirsiniz; her seferinde orijinalden yeniden hesaplanır, böylece hiçbir şey kayma yapmaz. Orijinalin diğer kopyaları olduğu gibi kalır.

## Kurallar

Bileşeni açın (çift tıklayın) ve parçalarından birini seçin. {{ui:Öğe bilgisi}} içinde kırmızı, yeşil ve mavi boyunca bir kuralla birlikte {{ui:Bileşen uzadığında}} görünür:

| Kural | Parça ne yapar | Örnek |
|---|---|---|
| {{ui:Gerilme}} | Bileşenle birlikte büyür; her iki yana olan mesafeleri korunur | Bir masa tablası |
| {{ui:Başta kal}} / {{ui:Sonda kal}} | Boyutunu ve o yana olan mesafesini korur | Ayaklar |
| {{ui:Oranla taşı}} | Boyutunu korur; ortası orantılı olarak hareket eder | Raflar, bir kapı kolu |
| {{ui:Oranla ölçekle}} | Yeri ve boyutu orantılı olarak değişir | Bir merdivenin basamakları |
| {{ui:Tekrar}} | Kopyalarını, {{ui:Her}} aralıkla, başladığı yerden öbür yana kadar oluşturur | Bir korkuluğun direkleri |

{{ui:Otomatik}} (başlangıç) bunu kendisi belirler ve hangisinin geçerli olduğunu gösterir: parça bileşeni kaplıyorsa {{ui:Gerilme}}, yaklaşık ortada duruyorsa {{ui:Oranla taşı}}, aksi halde daha yakın olduğu yanda kalır.

## Bilmeniz gerekenler

- Parçaların kendi şekilleri paylaşılır, bu yüzden uzatılmış bir kopya hafiftir. Bir parçayı düzenlemek onu her kopyada değiştirir.
- Uzatılmış bir kopya, orijinalin kurallarındaki ya da yerleşimindeki sonraki değişiklikleri izlemez: bunları almak için yeniden uzatın.
- Bileşende serbest çizilmiş yüzeyler (bir parça içinde değil) boyutlarını korur; onların da izlemesi için bunları bir parça yapın.
- Kurallar ve her kopyanın hangi orijinalden uzatıldığı ModelCraft dosyasına kaydedilir.
