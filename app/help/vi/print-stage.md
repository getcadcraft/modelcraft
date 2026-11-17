---
title: Đặt vật lên bàn in và gửi tới máy in
summary: Thêm mục Thư viện hoặc mô hình của riêng bạn lên bàn in của máy in, sắp xếp chúng, xem các lớp đã cắt, và gửi lệnh in qua USB hoặc mạng, hoặc lưu G-code, mà không cần xuất tệp STL trước.
keywords: giai đoạn in, in 3d, máy in, bàn in, gửi tới máy in 3d, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, thư viện, sắp xếp, vừa tất cả, xem trước lớp, infill, giá đỡ, sợi, pla, petg, tiện ích bổ sung, tiện ích in 3d
from: abcf5d7e
---

{{ui:Giai đoạn in}} sắp xếp các vật trên bàn in của máy in, cắt lớp chúng và gửi tới máy in. Bạn không cần xuất tệp trước. Nó thuộc tiện ích bổ sung In 3D, được bật mặc định.

:::note
Chưa có gì được in trên máy in thật bằng tính năng này. Phần mềm cắt lớp còn mới: hãy theo dõi các lớp đầu tiên của lần in đầu tiên, và dùng xem trước các lớp trước khi gửi.
:::

## Bạn sẽ làm gì

Đặt một mô hình lên bàn in, kiểm tra xem nó có vừa không, xem các lớp đã cắt, rồi gửi tới máy in hoặc lưu G-code.

## Các bước

1. Nhấp {{ui:Giai đoạn in}} trên thanh công cụ. Một thẻ mở ra trên khung nhìn và một đường viền nét đứt hiện bàn in của bạn.
2. Dưới **Thêm từ Thư viện**, gõ tên vào ô tìm kiếm, nhấn {{ui:Tìm kiếm}} và nhấn {{ui:Thêm}} ở một kết quả. Mục đó sẽ được đặt lên bàn in ở kích thước thật, hoặc thu nhỏ để vừa. Bất kỳ thứ gì bạn đã vẽ hoặc nhập và nhìn thấy trong khung nhìn cũng nằm trên bàn in.
3. Dưới **Trên bàn in**, kiểm tra kích thước của từng mục. Mục được đánh dấu **Ngoài bàn in** cần được di chuyển. Di chuyển, xoay và đổi tỷ lệ các vật trong khung nhìn bằng các công cụ thông thường.
4. Nhấn {{ui:Sắp xếp trên bàn in}} để trải các mục ra, hoặc {{ui:Vừa tất cả trên bàn in}} để thu nhỏ chúng cho đến khi vừa.
5. Dưới **Máy in của bạn**, chọn kích thước **Bàn in** hoặc một trong các hồ sơ máy in.
6. Dưới **Cài đặt in**, chọn **Vật liệu**, **Chất lượng** và **Độ đặc %**, và đánh dấu **Thêm giá đỡ dưới phần nhô ra** nếu hình dạng cần đến chúng.
7. Nhấn {{ui:Xem trước các lớp}} và kéo thanh trượt **Lớp** để xem qua các lớp đã cắt. Nếu sau đó bạn thay đổi giai đoạn hoặc cài đặt, hãy nhấn {{ui:Xem trước các lớp}} lần nữa.
8. Dưới **Kết nối**, chọn {{ui:Cáp USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} hoặc {{ui:PrusaLink}}. Với USB, nhấn {{ui:Kết nối}}. Với máy in mạng, nhập **Địa chỉ** của nó (và **API key** nếu được hỏi), rồi nhấn {{ui:Kiểm tra kết nối}}.
9. Nhấn {{ui:Gửi tới máy in 3D}}. Thẻ hỏi xem bàn in đã trống và đúng vật liệu đã được nạp chưa, đồng thời hiện thời gian, vật liệu và nhiệt độ. Xác nhận để gửi.

Bạn sẽ nhận được thông báo rằng máy in đang khởi động. {{ui:Dừng in}} sẽ tắt bộ gia nhiệt, quạt và động cơ. Nếu bạn chỉ muốn một tệp, hãy nhấn {{ui:Lưu G-code thay thế}}.

## Ghi chú

- USB cần Chrome hoặc Edge trên máy tính, và trang phải luôn mở cho đến khi in xong. Đóng trang sẽ dừng luồng dữ liệu.
- Máy in mạng phải cho phép trang này (trong Moonraker, thêm nó vào `cors_domains`; trong OctoPrint, bật CORS và sao chép một API key). Trình duyệt của bạn có thể hỏi quyền truy cập các thiết bị trong mạng.
- Không có gì kết nối hoặc gửi nếu bạn không nhấp.
- Danh sách phần mềm cắt lớp nằm dưới **Slicer**. {{ui:CadCraft basic (có sẵn, nhanh nhất)}} được tích hợp sẵn. Kiri:Moto, PrusaSlicer, OrcaSlicer và Bambu Lab P2S là các tiện ích bổ sung riêng mà bạn bật từ thẻ hoặc trong {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}}. PrusaSlicer và OrcaSlicer dùng bản sao của riêng bạn và hoạt động từ CadCraft Studio trên máy tính.
- Các mảnh không phải khối đặc kín sẽ bị bỏ qua, và thẻ cho bạn biết phần hình dạng đó chiếm bao nhiêu.
- Với máy in nhựa lỏng, xem [Cắt lớp cho máy in nhựa lỏng](topic:resin-printing). Để kiểm tra hoặc sửa mô hình trước, xem [Giá đỡ, độ dày thành, làm rỗng và sửa chữa](topic:print-tools).
