---
title: Giao các mặt
summary: Vẽ các đường nơi các mặt cắt xuyên qua nhau, để bạn có thể đẩy, xóa hoặc sơn các phần.
keywords: giao, giao mặt, giao với mô hình, giao với vùng chọn, cắt, lỗ mở, lỗ, nối, đường nơi các mặt giao nhau, boolean
from: 6bc58526
---

Khi một hình đi xuyên qua một hình khác, ModelCraft không vẽ đường nơi các mặt của chúng gặp nhau: chúng chỉ chồng lên nhau. **Giao** vẽ các đường đó, dưới dạng cạnh, để các mặt tách ra tại đó. Sau đó bạn có thể đẩy/kéo, xóa hoặc sơn các phần.

Cả hai lệnh đều nằm trong {{ui:Chỉnh sửa}} › {{ui:Thêm}}.

## Giao với mô hình

Cắt những gì bạn chọn với **mọi mặt trên màn hình**.

Ví dụ, một dầm (một nhóm) xuyên qua một tường (một nhóm khác), và bạn muốn có một lỗ mở trên tường:

1. Nhấp đúp vào bức tường để mở nó, rồi chọn tất cả các mặt của nó ({{key:Ctrl+A}}).
2. {{ui:Chỉnh sửa}} › {{ui:Thêm}} › {{ui:Giao với mô hình}}.

Đường viền của dầm được vẽ trên cả hai mặt của tường, thành hai mặt mới. Đẩy một trong số chúng xuyên qua tường để tạo lỗ mở, rồi đóng tường lại.

## Giao với vùng chọn

Cắt các mặt, nhóm và cấu kiện đã chọn **chỉ với nhau**. Chọn ít nhất hai.

## Các đường được vẽ ở đâu

Các đường luôn được vẽ trong **ngữ cảnh đang mở**: trong mô hình khi không có nhóm nào đang mở, hoặc trong nhóm bạn đang sửa. Các nhóm và cấu kiện không mở sẽ không bị thay đổi. Vì vậy, để cắt các mặt của một nhóm, mở nhóm đó trước, như trong ví dụ trên.

## Điều cần biết

- Các mặt nằm trên cùng một mặt phẳng sẽ không được giao.
- Các đường khép một vòng trên một mặt sẽ tạo thành một mặt mới, như các đường vẽ thông thường.
- Mỗi lần giao là một bước hoàn tác. Nếu không có gì cắt nhau thì không có gì thay đổi.
- Với các hình khép kín, các [công cụ khối đặc](topic:solids) (Hợp, Trừ) làm toàn bộ việc trong một bước.
