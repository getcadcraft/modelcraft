---
title: Sahneyi oyun motoruna gönderme
summary: Studio sahneyi bir Unreal Engine projesine yazabilir ve her gönderimde onu güncel tutar; kendi düzenlemeleriniz CadCraft'ın hiç yazmadığı bir katmanda durur. Onu açan eklenti henüz yayımlanmadı.
keywords: unreal, unreal engine, oyun motoru, bağlantı, gönder, usd sahnesi, proje, canlı, cine kamera, film render kuyruğu
from: 9a765cc2
---

CadCraft Studio'da Motor listesi, bir Unreal Engine projesine **bağlantı** tutabilir. Yalnızca tek yönde çalışır: CadCraft'tan Unreal'a.

## Sahneyi gönderme

1. Motor listesinde Unreal girişini seçin. İlk seferde Studio, proje klasörünüzü (`.uproject` dosyasını içeren) seçmenizi ister; bunu hatırlar.
2. {{ui:Gönder}} düğmesine tıklayın. Studio, proje içinde `CadCraft/<dosya adı>/` klasörünü yazar: sahneyi USD dosyası olarak, ayar dosyasını, ışık profillerini ve iki küçük katman dosyasını.
3. Modeli değiştirin, kaydedin ve yeniden gönderin. Yalnızca sahne ve ayar dosyası değiştirilir.

## Kendi düzenlemeleriniz güvende

Unreal'ın açtığı sahne (stage) bir kez oluşturulan küçük bir kök katmandır; altında iki katman vardır: en üstte **sizin katmanınız** (`<ad>.user.usda`, başta boş, CadCraft tarafından asla yeniden yazılmaz) ve altta CadCraft'ın sahnesi. Kendi katmanınıza kaydettiğiniz düzenlemeler, sahne yeniden gönderildiğinde de kalır. Unreal seviyesine yerleştirdiğiniz ışıklar ve diğer aktörler sahnenin dışındadır, onlara da dokunulmaz.

## Studio olmadan

Tarayıcıda veya Studio'nun Unreal'ı bulamadığı bir bilgisayarda, Motor listesinden **Unreal proje klasörü (.zip)** seçeneğini seçin ve {{ui:Render}} düğmesine tıklayın. Aynı klasörü bir zip olarak kaydeder: zip'i proje klasörünüzdeki `CadCraft` klasörüne açın. İlk kayıtta **Sahne dosyalarını dahil et** seçeneğini açık bırakın; sonraki kayıtlarda kapatın. Böylece zip yalnızca sahneyi ve ayar dosyasını içerir ve kendi katmanınız asla değiştirilmez.

:::note
Sahneyi açan, güneşi, lambaları, kameraları ve pozlamayı uygulayan, her göndermeyi izleyen ve bir kamerayı render eden Unreal eklentisi **henüz yayımlanmadı** ve Unreal'da henüz çalıştırılmadı. O zamana kadar Gönder dosyaları projeye koyar ve Unreal'ın kendi USD araçları bunları açabilir. İlk desteklenen sistem Windows'tur; macOS bunu izleyecek.
:::
