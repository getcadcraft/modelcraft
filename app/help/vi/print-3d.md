---
title: Chuẩn bị mô hình để in 3D
summary: Kiểm tra mô hình đã kín và các mặt hướng đúng chiều, xem kích thước, đế và phần nhô, sửa chỗ sai, và tải xuống dưới dạng STL hoặc 3MF cho trình cắt lớp của bạn.
keywords: in 3d, máy in, in, trình cắt lớp, stl, 3mf, kín nước, đóng kín, đa tạp, khối đặc, lỗ, lộn ngược, phần nhô, giá đỡ, đế, bàn in, milimét, xuất, sửa, sửa chữa, làm rỗng, kích thước bàn in, người mới bắt đầu, độ dày thành, công cụ in
from: 948e19af
---

Trình cắt lớp của máy in 3D cần một hình kín: không có lỗ, mọi mặt hướng ra ngoài, và không có gì tự xuyên qua chính nó. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} kiểm tra đúng điều đó trước khi bạn tải tệp về.

## Kiểm tra và tải xuống

1. Chọn những gì bạn muốn in: một hoặc nhiều nhóm hay cấu kiện, hoặc một số mặt. Khi không chọn gì, mọi thứ đang hiển thị sẽ được in.
2. Nhấp {{ui:Export}} trong nhóm {{ui:File}}, rồi {{ui:Check for 3D printing (STL or 3MF)…}}.

   Hộp thoại bắt đầu với một dòng: "Sẵn sàng in", số thứ cần sửa trước khi in, hoặc số thứ cần xem trước. Mỗi vấn đề có ba phần: điều gì sai, tại sao nó quan trọng, và cần làm gì. Sau đó là kích thước tính bằng milimét, thể tích, số tam giác và bàn in của bạn.

3. Nếu hộp thoại liệt kê các thứ cần sửa, nhấp {{ui:Fix what can be fixed}} (xem bên dưới). Kiểm tra sẽ chạy lại tự động.
4. Nhấp {{ui:Download 3MF}} hoặc {{ui:Download STL}}.

Những gì được in là những gì bạn thấy: các mặt ẩn, nhóm và cấu kiện ẩn, và mọi thứ trên thẻ ẩn đều bị bỏ qua. Kích thước luôn tính bằng milimét, đơn vị trình cắt lớp mong đợi, bất kể mô hình đang hiển thị đơn vị nào.

:::tip
Nên chọn 3MF khi trình cắt lớp của bạn đọc được nó: nó giữ màu và đơn vị. STL không có cả hai, và trình cắt lớp giả định milimét.
:::

## Kiểm tra tìm gì

Những thứ này làm hỏng hoặc ngăn việc in, và khiến hộp thoại báo "Chưa sẵn sàng in":

| Vấn đề | Nghĩa là gì | Cần làm gì |
|---|---|---|
| Một mặt chỉ ở một phía | Một lỗ: một cạnh có mặt ở một phía và không có gì ở phía kia | Vẽ mặt còn thiếu (một đường ngang khoảng hở thường khép lại), hoặc dùng {{ui:Fix}} (bên dưới) |
| Được chia sẻ bởi ba mặt trở lên | Các mặt gặp nhau ở một cánh hoặc một bức tường bên trong khối đặc | Xóa mặt bên trong |
| Các mặt hướng ngược nhau | Một số mặt hướng vào, một số hướng ra | Chọn các mặt hướng vào và nhấp {{ui:Reverse face}} trong {{ui:Entity info}} |
| Lộn ngược | Một chi tiết kín toàn bộ hướng vào trong | Chọn các mặt của nó và đảo chúng |
| Xuyên qua chính nó | Một chi tiết gập xuyên qua chính nó | {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}, rồi xóa phần bên trong. Xem [Giao các mặt](topic:intersect) |

Đây là các cảnh báo: mô hình vẫn in được, nhưng hãy xem qua trước.

- **Các chi tiết riêng bị chồng lên nhau**, hoặc **chạm mặt với mặt**: trình cắt lớp thường gộp chúng thành một. Để có tệp gọn hơn, nối chúng bằng {{ui:Solids}} › {{ui:Union}}. Xem [Công cụ khối đặc](topic:solids).
- **Không có gì nằm phẳng ở đáy**: xoay mô hình để một mặt tựa lên bàn in, nếu không trình cắt lớp sẽ thêm giá đỡ hoặc bè.
- **Nghiêng ra hơn 45° so với phương thẳng đứng**: các mặt đó cần giá đỡ. Hộp thoại cho biết bao nhiêu phần bề mặt có vấn đề đó.
- **Nhỏ hơn 1 mm theo bất kỳ chiều nào**: có thể đã được mô hình hóa sai đơn vị. Kiểm tra đơn vị trong thanh trạng thái.

Chi tiết rỗng (một vỏ kín bên trong một vỏ khác) là bình thường: các mặt của nó hướng vào phần rỗng, và thể tích của nó được trừ đi.

## Sửa các vấn đề

Dưới **Vị trí các vấn đề**, hộp thoại nêu tên từng nhóm hoặc cấu kiện có lỗi (các mặt rời không nằm trong nhóm được liệt kê là "Mặt không nằm trong nhóm"), cùng điều gì sai trong nó. Một cấu kiện được đặt nhiều lần chỉ được liệt kê một lần: sửa nó là sửa mọi bản sao.

- {{ui:Show}} mở nhóm đó và chọn các cạnh và mặt sai, để chúng được tô sáng.
- {{ui:Fix what can be fixed}} sửa tất cả cùng lúc: nó khép các lỗ có cạnh nằm phẳng, xóa các mặt bên trong hình và các cạnh lạc, và lật các mặt cho đúng hướng ra ngoài. Đó là một bước: {{key:Mod+Z}} hoàn tác. Kiểm tra sau đó chạy lại và hiển thị những gì còn lại.

Các thứ nó không sửa được (một lỗ có cạnh không nằm phẳng, một chi tiết xuyên qua chính nó) vẫn nằm trong danh sách với việc cần làm thủ công. {{ui:Repair}} dưới **Công cụ in** đi xa hơn: nó khép các lỗ không phẳng, xóa các mảnh lạc và mặt trùng, và liệt kê mọi cách sửa. Xem [Giá đỡ, độ dày thành, làm rỗng và sửa chữa](topic:print-tools#repair). Bạn cũng có thể sửa từng nhóm một: chọn nó, rồi dùng {{ui:Show problems}} và {{ui:Fix}} trong {{ui:Entity info}}. Xem [Công cụ khối đặc](topic:solids).

## Chi tiết rỗng

{{ui:Hollow}} dưới **Công cụ in** làm rỗng một chi tiết với độ dày thành bạn nhập, với các lỗ thoát nước nơi bạn nhấp. Xem [Làm rỗng](topic:print-tools#hollow).

Bạn cũng có thể tự vẽ phần rỗng: một nhóm kín bên trong chi tiết, không chạm vào nó, với mọi mặt được đảo để hướng vào phần rỗng. Kiểm tra sẽ đếm nó là phần rỗng và trừ thể tích của nó; nó không được liệt kê như thứ cần sửa.

## Bàn in của máy in

Chọn kích thước bàn in của máy in trong {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:3D printer bed}}. Khi đó kiểm tra sẽ cảnh báo khi mô hình lớn hơn bàn in, xét theo cả hai cách xoay trên đó. Xem [Cài đặt](topic:settings#3d-printer-bed).

## Công cụ in

Dưới các phát hiện của hộp thoại, **Công cụ in** mở {{ui:Supports preview}} (giá đỡ đặt ở đâu và khoảng bao nhiêu), {{ui:Wall thickness}} (thành quá mỏng để in), {{ui:Hollow}} và {{ui:Repair}}. Xem [Giá đỡ, độ dày thành, làm rỗng và sửa chữa](topic:print-tools). {{ui:Split for printing}} cắt mô hình quá lớn so với bàn in thành các mảnh có chốt nối và khớp được đánh số: xem [Chia mô hình lớn để in](topic:print-split).

## Không được kiểm tra

Kiểm tra không cắt lớp: các chi tiết nhỏ mà đầu phun của bạn không vẽ được và các giá đỡ thật là việc của trình cắt lớp. Xem [Chưa xây dựng](topic:not-built-yet#3d-printing).
