---
title: Bố trí UV của lưới
summary: Đánh dấu đường nối, trải phẳng, chiếu và xếp tọa độ texture của lưới trong không gian làm việc UV, rồi kiểm tra bằng ô cờ và màu độ co giãn.
keywords: uv, uvs, trải phẳng, đường nối, texture, tọa độ texture, atlas, xếp, đóng gói, đảo, ô cờ, co giãn, biến dạng, chiếu hộp, chiếu trụ, chiếu cầu, bảo giác, theo góc, lscm, abf
from: 00028f20
---

Texture là một hình ảnh phẳng; còn lưới thì không phẳng. **UV** của nó cho biết mỗi góc của mỗi mặt nằm ở đâu trên hình ảnh. Không gian làm việc UV tạo ra chúng: bạn cắt lưới ra dọc theo các **đường nối**, trải các mảnh phẳng (**trải phẳng**), rồi xếp chúng vào hình vuông (**xếp**).

## Mở

Chọn một lưới và chọn {{ui:UV}} trong danh sách {{ui:Không gian làm việc}}. Một nhóm hoặc cấu kiện sẽ trở thành lưới trước, giống như trong không gian làm việc Lưới. Khung nhìn 3D chuyển sang nửa bên trái; **trình chỉnh sửa UV** ở bên phải hiển thị các mặt của lưới đã được trải trên hình vuông texture. Việc chọn hoạt động giống như trong không gian làm việc Lưới, và những gì bạn chọn ở khung nhìn này sẽ được chọn ở khung nhìn kia.

## Đánh dấu đường nối

Đường nối là nơi lưới có thể được cắt ra; chúng hiển thị màu đỏ ở cả hai khung nhìn.

- Chọn các cạnh ({{ui:Cạnh}}, hoặc {{key:2}}) và nhấn {{ui:Đánh dấu đường nối}} ({{key:Ctrl+E}}). {{ui:Xóa đường nối}} ({{key:Ctrl+Shift+E}}) sẽ gỡ chúng.
- {{ui:Đường nối tại góc sắc}} đánh dấu mọi cạnh sắc và mọi cạnh nơi các mặt gặp nhau ở góc lớn hơn 60°: một hộp sẽ được chia thành sáu mặt.
- {{ui:Đường nối từ UV}} đánh dấu các đường nối nơi UV đã bị đứt, ví dụ sau một phép chiếu.

Một khối kín cần đường nối để trải phẳng: một quả cầu cần ít nhất một đường cắt, một ống cần một đường cắt dọc theo chiều dài.

## Trải phẳng

Chọn các mặt cần trải (hoặc không chọn gì, để trải cả lưới) và nhấn {{ui:Trải phẳng}} ({{key:U}}). Mỗi mảnh giữa các đường nối được trải phẳng, giữ góc đúng nhất có thể (trải phẳng theo góc), rồi các mảnh được xếp vào hình vuông. {{ui:Bảo giác}} trải bằng ánh xạ bảo giác bình phương tối thiểu thay thế: nhanh hơn, nhưng kém chính xác hơn một chút trên các mảnh cong nhiều. Một hình có thể làm từ tấm phẳng, chẳng hạn mặt bên của trụ đã cắt một lần, sẽ trải mà không co giãn gì cả.

## Chiếu

Với các hình đơn giản, một phép chiếu thường là đủ:

| Phép chiếu | Chức năng |
| --- | --- |
| {{ui:Hộp}} | Mỗi mặt được chiếu lên cạnh của hộp mà nó hướng ra nhiều nhất |
| {{ui:Trụ}} | Quanh trục xanh dương: chiều ngang là góc quanh trục, chiều đứng là chiều cao |
| {{ui:Cầu}} | Từ tâm: chiều ngang là góc quanh trục, chiều đứng là vĩ độ |
| {{ui:Từ khung nhìn}} | Như các mặt đang được nhìn thấy trong khung nhìn 3D lúc này |

Một mặt nằm ngang chỗ nối của trụ hoặc cầu được giữ nguyên thành một mảnh, nên UV của nó có thể vượt quá một chút cạnh phải của hình vuông; texture sẽ lặp lại ở đó.

## Sắp xếp

- {{ui:Xếp}} đặt các mảnh (đảo) vào hình vuông ở một kích thước texel, mỗi mảnh được xoay để chiếm ít chỗ nhất. Bảng đặt khoảng trống còn lại giữa chúng.
- {{ui:Xoay 90°}} và {{ui:Đối xứng}} xoay hoặc lật UV của các mặt đã chọn.
- Trong trình chỉnh sửa UV, kéo một mặt đã chọn để di chuyển UV của vùng chọn, hoặc đưa con trỏ vào trình chỉnh sửa và nhấn {{key:R}} hoặc {{key:S}} rồi di chuyển để xoay hoặc thu phóng chúng (nhấp chuột để giữ lại, {{key:Esc}} để hủy). {{key:G}} di chuyển mà không cần kéo. Nhấp đúp vào một mặt (hoặc {{key:L}}) để chọn toàn bộ đảo của nó. Con lăn để thu phóng; kéo bằng nút giữa hoặc nút phải để di chuyển khung nhìn; {{key:F}} vừa khung hình vuông trở lại.

Mỗi thay đổi là một bước hoàn tác.

## Kiểm tra

- {{ui:Ô cờ}} hiển thị một ô cờ có nhãn trên lưới theo UV của nó: các ô đều và vuông nghĩa là texture được trải đều; các nhãn cho biết texture chạy theo hướng nào.
- {{ui:Độ co giãn}} tô màu từng mặt theo mức UV làm nó co giãn: xanh dương là không co giãn, qua xanh lá, đến đỏ là co giãn nhiều. Bảng chọn xem đo **góc bị bẻ** hay **kích thước thay đổi**, và hiển thị giá trị trung bình.

Xem thêm [Chỉnh sửa lưới](topic:mesh-edit), [Lưới](topic:meshes) và [Bộ điều chỉnh trên lưới](topic:modifiers).
