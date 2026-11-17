---
title: Thẻ: hiện và ẩn các nhóm đối tượng
summary: Gắn thẻ cho nhóm và cấu kiện, chẳng hạn Nội thất hoặc Tường, rồi ẩn hoặc hiện mọi thứ có thẻ đó cùng một lúc.
keywords: thẻ, lớp, hiện, ẩn, hiển thị, sắp xếp, nội thất, tường, chưa gắn thẻ, đổi tên thẻ, xóa thẻ
from: c1a95a05
---

Thẻ là một tên bạn đặt cho nhóm và cấu kiện, chẳng hạn **Nội thất**, **Tường** hoặc **Công trường**, để bạn có thể ẩn hoặc hiện mọi thứ có thẻ đó cùng một lúc. Thẻ tương ứng với thứ mà các chương trình CAD gọi là lớp. Để ẩn từng đối tượng một, xem [Ẩn, cô lập và hiện lại](topic:hide-isolate).

## Tạo thẻ

1. Trong {{ui:Thẻ}} ở bên phải, nhấp {{ui:Thêm thẻ}}.
2. Nhập tên của nó và nhấn {{key:Enter}}.

Để đổi tên một thẻ, nhấp tên của nó trong {{ui:Thẻ}}, nhập tên mới và nhấn {{key:Enter}}. Hai thẻ không được trùng tên.

## Gắn thẻ cho nhóm và cấu kiện

1. Chọn một hoặc nhiều nhóm hoặc cấu kiện.
2. Trong {{ui:Thông tin đối tượng}}, chọn thẻ trong {{ui:Gắn thẻ}}. {{ui:Thẻ mới…}} tạo một thẻ mới và gắn nó cho vùng chọn.

{{ui:Chưa gắn thẻ}} gỡ thẻ đi. Số bên cạnh mỗi thẻ trong {{ui:Thẻ}} cho biết có bao nhiêu nhóm và cấu kiện đang có thẻ đó.

Gắn thẻ cho nhóm và cấu kiện, không phải cho mặt và cạnh rời: hãy vẽ trước những thứ bạn muốn gắn thẻ thành nhóm (chọn chúng, rồi nhấn {{key:Shift+G}}).

## Ẩn và hiện

Nhấp biểu tượng con mắt bên cạnh một thẻ. Mọi thứ có thẻ đó sẽ biến khỏi tầm nhìn, dù nằm ở đâu trong mô hình (kể cả bên trong các nhóm khác), và nhấp cũng như bắt điểm sẽ bỏ qua chúng. Nhấp con mắt lần nữa để hiện chúng. Các thứ {{ui:Chưa gắn thẻ}} luôn được hiển thị.

Nếu bạn đang chỉnh sửa bên trong một nhóm có thẻ bạn ẩn, nhóm đó sẽ đóng lại.

## Xóa thẻ

Nhấp biểu tượng thùng rác bên cạnh thẻ. Những thứ có thẻ đó trở thành {{ui:Chưa gắn thẻ}}, và được hiển thị.

## Lưu ý

- Thẻ, tên của chúng và thẻ nào đang ẩn được lưu trong tệp ModelCraft. Sao chép một nhóm có thẻ sang mô hình khác sẽ mang theo thẻ của nó.
- Ẩn và hiện một thẻ, cũng như mọi thay đổi khác về thẻ, là một bước hoàn tác.
- Khi xuất, mọi thứ đều được bao gồm, kể cả các thẻ đang ẩn, giống như các thứ đang ẩn.
- Các lớp trong bản vẽ mặt bằng DWG và DXF chưa được nhập dưới dạng thẻ: toàn bộ bản vẽ được nhập thành một nhóm.
