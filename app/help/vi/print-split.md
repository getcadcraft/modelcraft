---
title: Chia một mô hình lớn để in
summary: Cắt một mô hình quá lớn so với máy in thành các mảnh vừa bàn in, với chốt, khóa, mộng đuôi én, lỗ chốt gỗ hoặc lỗ nam châm và số của mối nối ở cả hai mặt, rồi tải xuống mọi mảnh và một tờ lắp ráp trong một tệp zip.
keywords: in 3d, chia, cắt nghiêng, cắt xiên, cắt góc, xiên, bộ chia, cắt, quá lớn, kích thước bàn in, thể tích in, mảnh, chi tiết, đầu nối, chốt tròn, chốt vuông, mộng đuôi én, chốt gỗ, nam châm, khe hở, dung sai, số chi tiết, lắp ráp, hình tách rời, zip, stl, 3mf, giấy phép, license, khóa USB, dongle
from: ee96ba77
---

Khi một mô hình lớn hơn bàn in của máy in, **Chia để in** sẽ cắt nó thành các mảnh vừa khít, thêm đầu nối để các mảnh khớp với nhau khi ghép lại, và khắc cùng một số lên cả hai mặt của mỗi mối nối. Mở {{ui:Xuất}} › {{ui:Kiểm tra in 3D (STL hoặc 3MF)…}}; dòng **Công cụ in** trong hộp thoại có {{ui:Chia để in}}. Lệnh này mở thành một thẻ nằm trên khung nhìn.

Lệnh làm việc trên những gì được in: vùng chọn, hoặc mọi thứ đang hiện nếu không chọn gì. Phần được in phải là một khối đặc kín; nếu kiểm tra thấy lỗ hổng, hãy dùng [Sửa chữa](topic:print-tools#repair) trước.

Lệnh chạy trong ModelCraft, trên máy tính của bạn: không cần máy chủ giấy phép, không cần khóa USB, không tải lên gì cả.

## Cách cắt

- **Vừa bàn in, ít mảnh nhất**: nhập chiều rộng, chiều sâu và chiều cao của bàn in (ban đầu lấy từ {{ui:Cài đặt}} › ModelCraft › máy in 3D). Thẻ cho biết cần bao nhiêu mảnh và mỗi mảnh lớn cỡ nào; lệnh cắt mô hình thành các mảnh bằng nhau, ít mảnh nhất có thể vừa khít. Một mảnh có thể nằm nghiêng trong tệp nếu điều đó giúp nó vừa. Các đầu nối nhô ra khỏi một mảnh được tính vào kích thước của mảnh đó.
- **Tại các vị trí bạn nhập**: chọn trục để cắt ngang và nhập vị trí, tính bằng milimét từ đầu thấp của mô hình, cách nhau bằng dấu phẩy (`100, 200` tạo ra ba mảnh).
  **Nghiêng** xoay các đường cắt tới 60° quanh một trong hai trục còn lại (ví dụ, một đường cắt ngang Z nghiêng quanh X): mỗi đường cắt nghiêng đi qua đường giữa của mô hình tại vị trí của nó, cho các mảnh diện tích dán keo lớn hơn và giấu mối nối tốt hơn trên bề mặt dốc. Đầu nối vuông góc với mặt cắt.

Các mặt phẳng cắt được vẽ quanh mô hình bằng nét đứt khi thẻ đang mở.

## Đầu nối

Mỗi chỗ hai mảnh chạm nhau sẽ có đầu nối, được tự đặt ở nơi còn nhiều chỗ nhất: cách mặt ngoài ít nhất bằng **thành mỏng nhất** cộng với **khe hở** cộng với kích thước của chính đầu nối, và đủ xa mọi đường cắt khác để hai lỗ không bao giờ gặp nhau. Trên một mặt dài, hai đầu nối được đặt trải dọc theo mặt đó, để các mảnh không thể xoay.

- **Chốt tròn**: một chốt trên một mảnh (vát đầu), một lỗ trên mảnh kia.
- **Chốt vuông**: tương tự nhưng vuông, nên mảnh chỉ lắp được theo một chiều.
- **Mộng đuôi én**: một lưỡi trượt vào rãnh từ bên hông. Nơi một đầu của rãnh sẽ gặp một đường cắt khác, mộng đuôi én dừng lại trước và trượt vào từ đầu hở. Mộng đuôi én phù hợp với các đường cắt theo một hướng (một dãy lát cắt); trong lưới, hãy dùng chốt tròn hoặc chốt gỗ.
- **Lỗ chốt gỗ**: một lỗ ở mỗi bên; các chốt cũng được in (trong tệp zip).
- **Hốc nam châm**: một hốc ở mỗi bên cho nam châm tròn có đường kính và độ dày bạn nhập. Kiểm tra các cực trước khi dán chúng vào.
- **Không có (dán keo)**.

**Khe hở** là khoảng trống ở mỗi bên giữa một chốt và lỗ của nó (ban đầu là 0.2 mm). Giá trị này đúng với số bạn nhập: các lỗ tròn được làm lớn hơn một chút để chính các cạnh phẳng, không phải góc của chúng, giữ được khoảng hở đó. Hãy tăng khe hở nếu các chi tiết in ra bị chặt.

Khi một mối nối không đủ chỗ cho đầu nối (thành mỏng, vùng chạm nhỏ), thẻ sẽ báo điều đó: hãy dán mối nối đó.

## Số chi tiết

Khi bật **Khắc số mối nối trên cả hai mặt**, mỗi mối nối sẽ nhận số của hai mảnh của nó, ví dụ `3-4`, được khắc sâu 0.6 mm trên cả hai mặt, và đọc đúng chiều trên mỗi mặt. Các số bắt đầu với chiều cao 5 mm và nhỏ dần cho vừa, xuống còn 2.5 mm; mối nối nào không đủ chỗ cho số sẽ được liệt kê. Các mảnh được đánh số từ lớp dưới cùng trở lên.

## Xem trước, tải xuống, chia mô hình

1. {{ui:Xem trước}} cắt mô hình và cho biết có bao nhiêu mảnh, mối nối và đầu nối; mỗi mảnh có vượt qua kiểm tra in 3D và vừa bàn in hay không; và liệt kê kích thước từng mảnh. Một vòng tròn đánh dấu mỗi đầu nối và số trong khung nhìn.
2. {{ui:Tải xuống các mảnh (.zip)}} lưu một tệp zip: một tệp cho mỗi mảnh (STL hoặc 3MF, tùy bạn chọn trong **Tệp**), mỗi mảnh đứng trên bàn in; các chốt gỗ; và **tờ lắp ráp** — một hình các mảnh tách rời kèm số của chúng (`assembly.svg` và `assembly.png`) và danh sách các mảnh và mối nối (`assembly.txt`).
3. {{ui:Chia mô hình}} đặt các mảnh vào mô hình thay cho các nhóm hoặc cấu kiện đã chọn, được đặt tên như trên tờ lắp ráp, chỉ trong một bước: {{ui:Hoàn tác}} sẽ khôi phục bản gốc. Lệnh cần các nhóm hoặc cấu kiện cần chia được chọn; tải xuống thì làm việc với bất cứ thứ gì có thể in.

## Tự đặt lại các đầu nối

Sau khi xem trước, **Đặt đầu nối bằng tay** cho phép bạn chỉnh lại vị trí các đầu nối:

- {{ui:Di chuyển một cái}}: nhấp vào một vòng tròn đỏ trong khung nhìn (nó chuyển sang màu xanh lá), rồi nhấp vào vị trí nó cần đến trên mặt cắt.
- {{ui:Thêm một cái}}: nhấp trong khung nhìn tại vị trí đầu nối cần đặt. Đầu nối sẽ nằm trên mặt phẳng cắt mà cú nhấp của bạn chạm tới, giữa hai mảnh tại đó.
- {{ui:Gỡ một cái}}: nhấp vào một vòng tròn đỏ để bỏ đầu nối đó đi.

Mỗi thay đổi được kiểm tra lại như với các đầu nối tự động: vị trí quá gần đường viền, đường cắt khác hoặc đầu nối khác sẽ không được tạo, và thẻ sẽ cho biết điều đó. {{ui:Tự động lại}} sẽ quên các vị trí bạn đã đặt. Các vị trí này được giữ lại chừng nào mô hình, vùng chọn và các đường cắt còn nguyên như vậy.

Bản xem trước được giữ cho đến khi mô hình, vùng chọn hoặc một cài đặt thay đổi; khi đó thẻ sẽ yêu cầu bạn xem trước lại.

:::note
Mỗi mảnh được kiểm tra như kiểm tra in 3D sẽ kiểm tra trước khi bạn tải xuống. Phần mềm cắt lớp (slicer) của bạn vẫn quyết định cách mỗi mảnh được in: hãy xem từng mảnh ở đó, và in thử một mối nối trước để xem máy in của bạn xử lý khe hở thế nào.
:::
