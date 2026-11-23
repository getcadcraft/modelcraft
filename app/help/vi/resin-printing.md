---
title: Cắt lớp cho máy in nhựa lỏng
summary: Cắt lớp phần in trên bàn in cho máy in nhựa lỏng, làm rỗng và gia cố chi tiết, xem các lớp, lưu tệp của máy in và tìm độ phơi sáng bằng thử phơi sáng.
keywords: nhựa lỏng, in nhựa lỏng, gợi ý độ nghiêng, cốc hút, lực bóc, gia cố, sla, msla, dlp, trình cắt lớp, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, làm rỗng, lỗ thoát khí, đế nổi, giá đỡ, thử phơi sáng, thang phơi sáng, hiệu chuẩn, lớp, tiện ích bổ sung
from: 8cc12858
---

Các tiện ích bổ sung nhựa lỏng cắt những gì có trên bàn in thành ảnh lớp cho màn hình máy in của bạn, và lưu tệp mà máy in đọc. Chúng miễn phí, không có gì bị khóa, và tắt cho đến khi bạn bật lên.

:::note
Chưa có tệp nào được nạp vào máy in thật. Các tệp chỉ được đọc lại bởi trình đọc riêng của CadCraft, và các giá đỡ là mới. Kiểm tra các lớp, rồi chạy bản in đầu tiên bằng tay.
:::

## Bạn sẽ làm gì

Cắt lớp một chi tiết cho nhựa lỏng, kiểm tra các lớp, lưu tệp và chép sang máy in.

## Các bước

1. Mở {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}} và bật tiện ích bổ sung trình cắt lớp nhựa lỏng cùng tiện ích cho định dạng tệp của máy in (Elegoo GOO, SL1, Chitubox hoặc Anycubic). Bạn cũng có thể nhấn {{ui:Thêm in nhựa lỏng}} trên thẻ Giai đoạn in.
2. Đặt chi tiết lên bàn in như trong [Đặt vật thể lên bàn in](topic:print-stage), rồi chọn {{ui:Nhựa lỏng}} bên cạnh **In bằng**.
3. Trong **Cài đặt in nhựa lỏng**, chọn **Máy in** và **Nhựa lỏng** của bạn. Thẻ hiển thị kích thước màn hình tính bằng điểm ảnh. Đây là kích thước do nhà sản xuất công bố, nên bạn nên kiểm tra máy của mình; bạn có thể sửa chúng trong mục Tùy chỉnh.
4. Đặt **Chiều cao lớp (mm)**, **Phơi sáng (s)** và **Phơi sáng lớp đáy (s)**. Các con số cho mỗi loại nhựa chỉ là điểm xuất phát.
5. Chọn **Làm rỗng, có lỗ thoát khí** nếu bạn muốn chi tiết rỗng, rồi đặt **Thành (mm)** và **Độ rộng lỗ (mm)**.
6. Chọn **Giá đỡ và đế nổi**, rồi chọn **Mật độ giá đỡ**: Nhẹ, Vừa hoặc Dày.
7. Chọn **Định dạng tệp**. Nếu thẻ báo chưa có định dạng nào được thêm, nhấn nút có chữ Thêm và tên định dạng.
8. Nhấn {{ui:Xem trước lớp}} và kéo thanh trượt **Lớp**. Các mảnh lơ lửng được khoanh tròn. Dòng dưới đó cho biết số lớp, thời gian và lượng nhựa tính bằng mL, gam, cùng chi phí.
9. Nhấn {{ui:Lưu tệp in}}, kiểm tra phần tóm tắt rồi nhấn {{ui:Lưu}}. Chép tệp sang máy in.

## Độ nghiêng, cốc hút, thanh gia cố và số lực bóc

Bốn mục này là ước tính từ hình dạng của chi tiết. Chưa mục nào được thử trên máy in thật, nên nên coi mỗi mục là gợi ý và xem các lớp.

1. Nhấn {{ui:Gợi ý độ nghiêng}} dưới **Độ nghiêng (độ)**. CadCraft thử các độ nghiêng từ 0 đến 60 độ và chọn độ có lớp lớn nhất nhỏ nhất, bề mặt nhô ra ít nhất và không có cốc hút. Nó đặt **Độ nghiêng (độ)** và cho biết những gì đã tìm thấy. Trọng số chấm điểm do chúng tôi đặt, không phải của nhà sản xuất máy in.
2. Sau khi nhấn {{ui:Xem trước lớp}}, một cảnh báo sẽ nêu tên các khoang chỉ mở về phía màng. Khoang như vậy có thể giữ lực hút khi một lớp bị bóc. Nghiêng chi tiết hoặc thêm một lỗ. Các hốc hẹp hơn kích thước ô được nêu trong cảnh báo sẽ không được nhận diện.
3. Khi **Giá đỡ và đế nổi** được bật, chọn **Gia cố giá đỡ cao** để thêm thanh ngang giữa các cột mảnh và cao.
4. Dòng dưới bản xem trước cho biết lớp lớn nhất tính bằng cm2. Nó chỉ hiển thị lực nếu bạn nhập **Ứng suất bóc tách bạn đo được** trong **Lớp đáy, nâng và tốc độ**. Nếu không có số đo riêng, nó chỉ hiển thị diện tích.

## Tìm độ phơi sáng

1. Bật tiện ích bổ sung thử phơi sáng trong {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}}.
2. Nhấn {{ui:Đặt chi tiết thử lên bàn in}}.
3. Nhấn {{ui:Lưu thang phơi sáng}}. Bạn nhận được một tệp cho mỗi độ phơi sáng, trong một tệp zip.
4. In từng tệp bằng cùng loại nhựa, và giữ độ phơi sáng cho các cột mảnh và lỗ thông rõ nhất.

## Ghi chú

- Việc cắt lớp chạy nền, nên trang vẫn dùng được với một bàn in lớn.
- Các mảnh không phải khối kín sẽ bị bỏ qua, và thẻ sẽ nêu điều đó.
- Nếu máy in từ chối một tệp, thẻ định dạng có các tùy chọn cho những gì định dạng để trống. Đổi một tùy chọn, lưu lại, và cho chúng tôi biết tùy chọn nào hiệu quả.
- Phiên bản Anycubic 517 và 518 chưa được ghi.
