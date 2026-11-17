---
title: Giữ mô hình .3dm liên kết trực tiếp
summary: Thay đổi mô hình trong chương trình đã tạo ra nó và thấy thay đổi tại đây, từ Rhino 8 hoặc một định nghĩa Grasshopper, mà không cần lưu và nhập lại.
keywords: rhino, grasshopper, liên kết trực tiếp, kết nối trực tiếp, 3dm, nurbs, tham số, liên kết, đồng bộ, kịch bản, mô hình tham chiếu, đẩy
from: 331b0a7e
---

Tiếp tục mô hình hóa ở nơi bạn mô hình hóa, và dùng kết quả tại đây: để kết xuất, chiếu sáng hoặc dàn dựng cảnh xung quanh nó. Mỗi thay đổi trong chương trình kia sẽ cập nhật một nhóm trong ModelCraft.

:::note
Liên kết cần **CadCraft Studio** trên cùng máy tính. Một thẻ trình duyệt không thể nhận kết nối. Không có gì đi qua internet: kịch bản nói chuyện với Studio tại địa chỉ riêng của máy tính này, kèm một mã thông báo.
:::

:::warning
Liên kết này đã được kiểm thử với bộ ghi tệp của kịch bản và một bản thay thế cho chương trình kia, chưa phải bên trong chính Rhino hoặc Grasshopper. Nếu có lỗi ở đó, hãy cho chúng tôi biết thông báo đó nói gì.
:::

## Thiết lập

1. Trong Studio, mở ModelCraft. Trong {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}}, chọn **Cho phép trợ lý AI và kịch bản sử dụng ModelCraft**, rồi **Chỉnh sửa**.
2. Trong Studio, chọn {{ui:Connect an assistant}}. Hộp thoại hiển thị địa chỉ và mã thông báo bạn sẽ dán ở bên dưới.
3. Tải kịch bản: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Từ Rhino

1. Chạy `cadcraft_link.py` trong trình soạn thảo kịch bản của Rhino (Python 3 trong Rhino 8).
2. Lần đầu, dán địa chỉ và mã thông báo. Chúng được lưu trong `.cadcraft-link.json` trong thư mục chính của bạn, không bao giờ nằm trong mô hình. Studio tạo một mã thông báo mới mỗi lần khởi động, nên khi đó kịch bản sẽ hỏi lại.

Toàn bộ mô hình được đưa vào như một nhóm, đặt tên theo tài liệu, ví dụ "chair (linked)". Sau đó, mỗi thay đổi được đưa vào khi bạn tạm dừng một chút, và chỉ những đối tượng đã thay đổi mới được gửi. Chạy lại kịch bản để dừng.

## Từ Grasshopper

Chạy kịch bản một lần trong Rhino trước, để địa chỉ và mã thông báo được lưu.

1. Thêm một thành phần Script (Python 3) và dán toàn bộ `cadcraft_link.py` vào đó.
2. Đặt các đầu vào này: `G` (hình học, với truy cập danh sách), `N` (tên, không bắt buộc), `On` (công tắc đúng/sai), và `Target` (không bắt buộc: `model` hoặc `part`, nếu cả hai ứng dụng đang mở).
3. Bật `On` thành đúng.

Mỗi lần giải sẽ gửi `G` và thay thế những gì thành phần đã gửi lần trước, nên khi kéo thanh trượt, nhóm ở đây sẽ được cập nhật. Đầu ra `a` của nó cho biết điều gì đã xảy ra. Mỗi thành phần có nhóm riêng.

## Những gì bạn làm được với nhóm

- **Di chuyển, gắn thẻ, xây dựng xung quanh.** Vị trí của nhóm và thẻ của nó được giữ qua mọi lần cập nhật, cũng như mọi thứ nằm bên cạnh.
- **Đừng chỉnh sửa bên trong nó.** Mỗi lần cập nhật thay thế nội dung bên trong nhóm. Chương trình kia sở hữu các đối tượng đó.
- **Hoàn tác.** Các cập nhật cách nhau trong vòng hai giây sẽ dùng chung một bước hoàn tác, nên {{key:Mod+Z}} thu hồi cả một lần kéo. Lần cập nhật tiếp theo sẽ đưa mô hình khớp lại.
- **Lưu.** Tệp đã lưu giữ liên kết. Chạy lại kịch bản sau khi mở lại tệp, và cùng nhóm đó sẽ được cập nhật.

## Những gì được đưa vào

Lưới, polysurface, bề mặt và phần đùn được đưa vào dưới dạng lưới bạn thấy trên màn hình, SubD dưới dạng lưới của nó, đường cong dưới dạng cạnh, khối dưới dạng đối tượng riêng ngay tại vị trí của chúng (không phải cấu kiện), lớp dưới dạng thẻ, cùng màu và đơn vị. Xem [Nhập tệp .3dm](topic:import-3dm-files) để biết những thứ này hiển thị ở đây như thế nào.

Không được đưa vào, kèm số lượng trong chương trình kia: điểm, văn bản, kích thước, đèn và các loại tương tự.

**Một chiều.** Thay đổi ở đây sẽ không được gửi ngược lại chương trình kia.

## Nếu có lỗi

- **"Không có cửa sổ ModelCraft hoặc PartCraft nào cho phép"**: làm bước 1 của phần thiết lập.
- **"Studio đã từ chối mã thông báo"**: Studio đã khởi động lại. Sao chép mã thông báo mới và chạy lại kịch bản. Với Grasshopper, chạy trong Rhino trước.
- **"Không thể kết nối với CadCraft Studio"**: Studio chưa chạy, hoặc địa chỉ đã thay đổi.
