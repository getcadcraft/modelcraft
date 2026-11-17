---
title: Lưới
summary: Biến một nhóm hoặc cấu kiện thành lưới — loại đối tượng mà các công cụ nội dung 3D dùng để mô hình hóa — và chuyển ngược lại thành hình học đẩy/kéo.
keywords: lưới, các lưới, đa giác, n-gon, tứ giác, đỉnh, nửa cạnh, uv, chuyển thành lưới, chuyển thành hình học, chia nhỏ, điêu khắc, mô hình hóa, nội dung 3d
from: e32363e8
---

ModelCraft có hai loại hình học. **Hình học đẩy/kéo** là thứ bạn vẽ: các mặt phẳng dính vào nhau, cắt nhau và tự liền lại. Một **lưới** là loại đối tượng mà các công cụ nội dung 3D dùng để mô hình hóa: các mặt với số góc tùy ý, mỗi góc có thể mang tọa độ kết cấu riêng (UV), pháp tuyến và màu, và mỗi đỉnh mang các giá trị như trọng số. Lưới được đặt như một nhóm hoặc cấu kiện, và nằm cạnh hình học đẩy/kéo trong cùng một mô hình.

## Chuyển một nhóm hoặc cấu kiện thành lưới

1. Chọn một nhóm hoặc cấu kiện.
2. Trong {{ui:Entity info}}, nhấp {{ui:Convert to mesh}}.

Các mặt của nó trở thành các mặt của lưới (một mặt có lỗ sẽ vào dưới dạng tam giác), cạnh cứng giữ sắc nét, cạnh mềm được tô bóng mượt, và sơn, vật liệu cùng kết cấu đã nhập vẫn giữ trên các mặt của chúng. Các nhóm và cấu kiện bên trong được nối thành một lưới. Cạnh rời bị bỏ qua: lưới chỉ giữ các mặt. Mỗi vị trí đặt của cấu kiện đều hiển thị lưới. Đây là một bước hoàn tác.

## Thông tin đối tượng hiển thị gì

Chọn một lưới để xem các mặt, đỉnh và cạnh của nó, nó có phải là khối đặc kín hay không (và thể tích của nó), và kích thước khi đặt. Lưới có cạnh hở sẽ cho biết có bao nhiêu.

## Chuyển lưới trở lại thành hình học đẩy/kéo

Chọn lưới rồi nhấp {{ui:Convert to geometry}}. Các mặt phẳng trở lại như cũ; một mặt có các góc không cùng nằm trên một mặt phẳng sẽ trở lại thành tam giác. Cạnh sắc là cạnh cứng, các cạnh còn lại là cạnh mềm. {{ui:Explode}} đưa các mặt của lưới thẳng vào nhóm bao quanh nó.

## Điều cần biết

- Nhấp đúp vào một lưới để [chỉnh sửa đỉnh, cạnh và mặt của nó](topic:mesh-edit) trong không gian làm việc Lưới. Chuyển nó thành hình học để chỉnh bằng đẩy/kéo; di chuyển, xoay, tỷ lệ, sao chép, sơn, ẩn và gắn thẻ nó như mọi nhóm khác.
- Khi xuất, in 3D, kết xuất và VR, lưới được xem như các mặt của nó.
- Một tệp chứa lưới được lưu dưới dạng phiên bản mới hơn của tệp `.modelcraft`, nên ModelCraft 0.6 trở về trước không thể mở nó; tệp không có lưới vẫn mở bình thường như trước. Chuyển lưới thành hình học trước để chia sẻ tệp với người dùng phiên bản cũ.
- Hoàn tác trên lưới chỉ giữ những gì mỗi bước đã thay đổi, nên ngay cả lưới rất lớn cũng hoàn tác nhanh.

See also [Nhóm và cấu kiện](topic:groups-components) và [Chưa xây dựng](topic:not-built-yet).
