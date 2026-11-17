---
title: Cắt lát cho máy in resin
summary: Cắt lát bàn in của giai đoạn In cho máy in resin, làm rỗng và đỡ chi tiết, xem qua các lớp, lưu tệp của máy in, và tìm độ phơi sáng bằng bài kiểm tra phơi sáng.
keywords: resin, in resin, sla, msla, dlp, bộ cắt lát, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, rỗng, lỗ thoát khí, bệ đỡ, giá đỡ, kiểm tra phơi sáng, thang phơi sáng, hiệu chuẩn, lớp, tiện ích bổ sung
from: 83c394e1
---

Các tiện ích resin cắt lát những gì có trên bàn in thành các ảnh lớp cho màn hình của máy in, và lưu tệp mà máy in đọc. Chúng miễn phí, không có gì bị khóa, và tắt cho đến khi bạn bật chúng lên.

:::note
Chưa có tệp nào được nạp vào một máy in thật. Các tệp chỉ được đọc lại bởi trình đọc riêng của CadCraft, và các giá đỡ là mới. Hãy kiểm tra các lớp, và chạy lần in đầu tiên bằng tay.
:::

## Bạn sẽ làm gì

Cắt lát một chi tiết cho resin, kiểm tra các lớp, lưu tệp và sao chép nó sang máy in của bạn.

## Các bước

1. Mở {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}} và bật tiện ích cắt lát resin cùng tiện ích cho định dạng tệp của máy in (Elegoo GOO, SL1, Chitubox hoặc Anycubic). Bạn cũng có thể nhấn {{ui:Thêm in resin}} trên thẻ giai đoạn In.
2. Đặt chi tiết lên bàn in như trong [Đặt vật thể lên bàn in](topic:print-stage), rồi chọn {{ui:Resin}} bên cạnh **In bằng**.
3. Dưới **Cài đặt in resin**, chọn **Máy in** và **Resin** của bạn. Thẻ hiển thị kích thước màn hình tính bằng pixel. Đây là các kích thước công bố của nhà sản xuất, nên hãy kiểm tra máy của bạn; bạn có thể sửa chúng trong mục Tùy chỉnh.
4. Đặt **Chiều cao lớp (mm)**, **Thời gian phơi sáng (s)** và **Thời gian phơi sáng đáy (s)**. Các con số cho mỗi loại resin chỉ là điểm khởi đầu.
5. Đánh dấu **Làm rỗng, có lỗ thoát khí** nếu bạn muốn một chi tiết rỗng, rồi đặt **Thành (mm)** và **Độ rộng lỗ (mm)**.
6. Đánh dấu **Giá đỡ và bệ đỡ**, rồi chọn **Mật độ giá đỡ**: Nhẹ, Vừa hoặc Nặng.
7. Chọn **Định dạng tệp**. Nếu thẻ báo chưa thêm định dạng nào, nhấn nút có ghi Thêm và tên định dạng.
8. Nhấn {{ui:Xem trước các lớp}} và kéo thanh **Lớp**. Các mảnh lơ lửng được khoanh tròn. Dòng dưới nó cho biết số lớp, thời gian, và lượng resin tính bằng mL, gram và chi phí.
9. Nhấn {{ui:Lưu tệp in}}, kiểm tra bản tóm tắt rồi nhấn {{ui:Lưu}}. Sao chép tệp sang máy in của bạn.

## Tìm độ phơi sáng

1. Bật tiện ích kiểm tra phơi sáng trong {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}}.
2. Nhấn {{ui:Đặt chi tiết kiểm tra lên bàn in}}.
3. Nhấn {{ui:Lưu thang phơi sáng}}. Bạn nhận được một tệp cho mỗi độ phơi sáng, trong một tệp zip.
4. In từng tệp với cùng một loại resin, và giữ lại độ phơi sáng cho các cột mảnh và lỗ thông sắc nét nhất.

## Ghi chú

- Việc cắt lát chạy nền, nên trang vẫn dùng được với một tấm in lớn.
- Các mảnh không phải là khối đặc kín sẽ bị bỏ qua, và thẻ sẽ cho biết điều đó.
- Nếu máy in từ chối một tệp, thẻ định dạng có các tùy chọn cho những gì định dạng để ngỏ. Đổi một tùy chọn, lưu lại, và cho chúng tôi biết tùy chọn nào đã hoạt động.
- Các phiên bản Anycubic 517 và 518 chưa được ghi.
