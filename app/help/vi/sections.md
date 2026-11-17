---
title: Mặt phẳng cắt: cắt mở mô hình
summary: Đặt một mặt phẳng cắt để nhìn vào bên trong mô hình, trượt nó qua, đảo chiều hoặc tắt lát cắt.
keywords: mặt cắt, mặt phẳng cắt, lát cắt, cắt, cắt mở, cắt xén, bên trong, mặt bằng, lát, mặt cắt ngang
from: 28c3a645
---

Một mặt phẳng cắt cắt mở mô hình, để bạn nhìn và làm việc bên trong nó: mặt bằng của một ngôi nhà, bên trong một tủ. Mô hình không bị thay đổi; lát cắt chỉ là một khung nhìn.

## Đặt một mặt phẳng

1. Nhấp {{ui:Mặt cắt}} trong nhóm {{ui:Camera}}.
2. Nhấp vào một mặt. Mặt phẳng được đặt trên mặt đó, với bốn mũi tên hướng về bạn.

   Nhấp ra ngoài mọi mặt để có một mặt phẳng vuông góc với hướng bạn nhìn nhiều nhất. Nhấn một phím mũi tên trước để dựng nó vuông góc với đỏ ({{key:Right}}), xanh lá ({{key:Left}}) hoặc xanh dương ({{key:Up}}) thay thế.

Phía mà các mũi tên hướng tới là phần **bị cắt bỏ**. Một mặt phẳng đặt trên một mặt thì chưa cắt gì cả: hãy trượt nó vào trong mô hình.

## Trượt, đảo chiều, tắt

Nhấp vào đường viền của mặt phẳng để chọn nó. Trong {{ui:Thông tin đối tượng}}:

- {{ui:Dọc theo mũi tên}} cho biết nó nằm ở đâu. Gõ một khoảng cách mới và nhấn {{key:Enter}} để trượt nó qua mô hình; gõ `-1m` trên một mặt phẳng bạn đã đặt trên một mặt trước sẽ đưa nó vào trong mô hình 1 m.
- {{ui:Đảo chiều}} lật các mũi tên, để phía bên kia bị cắt bỏ.
- {{ui:Đang hoạt động (cắt mô hình)}}: một lần chỉ một mặt phẳng cắt. Đánh dấu hộp của mặt phẳng khác, hoặc đặt một mặt phẳng mới, và mặt đó sẽ cắt thay.
- Đổi tên trong {{ui:Tên}}; xóa bằng {{key:Delete}} hoặc {{ui:Tẩy}}.

Chỗ mặt phẳng đi qua một khối đặc kín, lát cắt được tô đầy bằng màu tối. Hình học không kín (một mặt đơn, một hộp hở) được cắt nhưng không được tô đầy.

## Hiện và ẩn

Trong {{ui:Khung nhìn}}:

- {{ui:Hiện mặt phẳng cắt}} ẩn đường viền và mũi tên của các mặt phẳng (lát cắt vẫn còn).
- {{ui:Hiện các lát cắt}} tắt lát cắt và hiển thị toàn bộ mô hình, mà không xóa các mặt phẳng.

[Chế độ trình bày](topic:styles-shadows#presentation-view) cũng ẩn các đường viền.

## Điều cần biết

- Phần bị cắt bỏ không thể được nhấp vào hay bắt điểm, nên bạn có thể vẽ lên những gì lát cắt cho thấy.
- Các mặt phẳng cắt, mặt nào đang hoạt động và hai công tắc được lưu trong tệp ModelCraft. Mỗi thay đổi là một bước hoàn tác.
- Khi xuất, luôn có toàn bộ mô hình: mặt cắt là một khung nhìn, không phải một chỉnh sửa.
