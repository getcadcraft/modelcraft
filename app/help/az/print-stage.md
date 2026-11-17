---
title: Çap masasına əşyalar qoyun və printerə göndərin
summary: Kitabxana elementlərini və ya öz modelinizi printerinizin masasına əlavə edin, yerləşdirin, dilimlənmiş qatlara baxın və çapı USB və ya şəbəkə ilə göndərin, ya da G-code-u saxlayın — əvvəlcə STL ixrac etmədən.
keywords: çap mərhələsi, 3d çap, printer, masa, 3D printerə göndər, slayser, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, kitabxana, yerləşdir, hamısını sığdır, qat önizləməsi, doldurma, dayaqlar, filament, pla, petg, əlavə, 3D çap əlavəsi
from: abcf5d7e
---

{{ui:Print stage}} printerinizin masasında əşyaları yerləşdirir, onları dilimləyir və printerə göndərir. Əvvəlcə fayl ixrac etmirsiniz. O, standart olaraq açıq olan 3D Çap əlavəsinə aiddir.

:::note
Bu ilə hələ real printerdə heç nə çap edilməyib. Slayser yenidir: ilk çapınızın ilk qatlarına baxın və göndərməzdən əvvəl qat önizləməsindən istifadə edin.
:::

## Nə edəcəksiniz

Modeli masaya qoyun, sığdığını yoxlayın, dilimlənmiş qatlara baxın və printerə göndərin və ya G-code-u saxlayın.

## Addımlar

1. Alətlər panelində {{ui:Print stage}} klikləyin. Görünüşün üstündə kart açılır və qırıq kontur masanızı göstərir.
2. **Kitabxanadan əlavə et** altında axtarış qutusuna ad yazın, {{ui:Search}} düyməsinə basın və nəticədə {{ui:Add}} düyməsinə basın. Element masaya tam ölçüdə düşür, ya da sığması üçün kiçilir. Artıq çəkdiyiniz və ya idxal etdiyiniz və görünüşdə gördüyünüz hər şey də masadadır.
3. **Masada** altında hər elementin ölçüsünü yoxlayın. **Masadan kənarda** işarələnmiş element köçürülməlidir. Əşyaları görünüşdə adi alətlərlə köçürün, fırladın və miqyaslayın.
4. Elementləri yaymaq üçün {{ui:Arrange on the bed}} düyməsinə basın, ya da sığana qədər kiçiltmək üçün {{ui:Fit all on the bed}} düyməsinə basın.
5. **Sizin printeriniz** altında **Masa** ölçüsünü və ya printer profillərindən birini seçin.
6. **Çap parametrləri** altında **Material**, **Keyfiyyət** və **Doldurma %** seçin və forma tələb edirsə **Konsol çıxıntıların altına dayaqlar əlavə et** qutusunu işarələyin.
7. {{ui:Preview layers}} düyməsinə basın və dilimlənmiş qatlara baxmaq üçün **Qat** sürgüsünü hərəkət etdirin. Bundan sonra masanı və ya parametrləri dəyişsəniz, {{ui:Preview layers}} düyməsinə yenidən basın.
8. **Bağlantı** altında {{ui:USB cable}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} və ya {{ui:PrusaLink}} seçin. USB üçün {{ui:Connect}} düyməsinə basın. Şəbəkə printeri üçün onun **Ünvanını** yazın (və soruşursa **API açarını**), sonra {{ui:Test the connection}} düyməsinə basın.
9. {{ui:Send to 3D printer}} düyməsinə basın. Kart masanın təmiz olub-olmadığını və düzgün materialın yüklənib-yüklənmədiyini soruşur və vaxtı, materialı və temperaturları göstərir. Göndərmək üçün təsdiq edin.

Printerin başladığına dair mesaj alırsınız. {{ui:Stop the print}} istiləşdiriciləri, ventilyatoru və motorları söndürür. Yalnız fayl istəyirsinizsə, {{ui:Save the G-code instead}} düyməsinə basın.

## Qeydlər

- USB kompüterdə Chrome və ya Edge tələb edir və səhifə çap bitənə qədər açıq qalmalıdır. Onu bağlasanız, axın dayanır.
- Şəbəkə printeri bu saytı buraxmalıdır (Moonraker-də onu `cors_domains`-ə əlavə edin; OctoPrint-də CORS-u açın və API açarını kopyalayın). Brauzeriniz şəbəkənizdəki cihazlara çatmağa icazə istəyə bilər.
- Siz klik etmədən heç nə qoşulmur və göndərilmir.
- Slayserlər siyahısı **Slayser** altındadır. {{ui:CadCraft basic (included, fastest)}} daxilində quraşdırılıb. Kiri:Moto, PrusaSlicer, OrcaSlicer və Bambu Lab P2S öz əlavələridir; onları karta və ya {{ui:Settings}} › {{ui:Add-ons}} altından açırsınız. PrusaSlicer və OrcaSlicer öz nüsxənizi istifadə edir və kompüterdə CadCraft Studio-dan işləyir.
- Bağlı bərk cisim olmayan parçalar kənarda qoyulur və kart formanın nə qədərinin bu olduğunu deyir.
- Qatran printerləri üçün [Qatran printeri üçün dilimləmə](topic:resin-printing) bölməsinə baxın. Modeli əvvəlcədən yoxlamaq və ya təmir etmək üçün [Dayaqlar, divar qalınlığı, oyma və təmir](topic:print-tools) bölməsinə baxın.
