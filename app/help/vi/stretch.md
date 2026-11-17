---
title: Cấu kiện kéo giãn được
summary: Làm cho một bản sao của cấu kiện rộng, sâu hoặc cao hơn trong khi các chi tiết giữ nguyên kích thước: một chiếc bàn dài hơn với cùng chân bàn, một kệ sách cao hơn với các kệ được giãn ra, một lan can có các trụ lặp lại.
keywords: cấu kiện động, kéo giãn, đổi kích thước cấu kiện, tham số, kích thước đặt tên, lặp lại, mảng, chân, kệ, lan can, quy tắc, biến
from: b4c40f43
---

Thay đổi tỷ lệ của một cấu kiện làm mọi thứ bên trong nó lớn lên, kể cả chân và thanh ngang. **Kéo giãn bản sao này** thay đổi chiều rộng, chiều sâu hoặc chiều cao của cấu kiện, trong khi mỗi chi tiết tuân theo một quy tắc: mặt bàn dài ra, còn các chân bàn giữ nguyên độ dày và vẫn nằm ở hai đầu.

Điều này hoạt động với các cấu kiện gồm nhiều chi tiết, tức là các nhóm hoặc cấu kiện nằm bên trong cấu kiện, như mọi thứ trong [thư viện khởi đầu](topic:starter).

## Kéo giãn một bản sao

1. Chọn cấu kiện.
2. Trong {{ui:Thông tin đối tượng}}, nhấp {{ui:Kéo giãn bản sao này…}}.
3. Nhập {{ui:Chiều rộng (đỏ)}}, {{ui:Chiều sâu (xanh lá)}} và {{ui:Chiều cao (xanh dương)}} mới, rồi nhấp {{ui:Độ co giãn}}.

Chỉ bản sao đó thay đổi: nó trở thành một cấu kiện riêng và ghi nhớ bản gốc mà nó được tạo từ. Bạn có thể kéo giãn lại bất cứ lúc nào, và nó sẽ được tính lại từ bản gốc, nên không bị lệch. Các bản sao khác của bản gốc giữ nguyên.

## Các quy tắc

Mở cấu kiện (nhấp đúp vào nó) và chọn một trong các chi tiết của nó. {{ui:Thông tin đối tượng}} hiển thị {{ui:Khi cấu kiện được kéo giãn}}, với một quy tắc theo đỏ, xanh lá và xanh dương:

| Quy tắc | Chi tiết làm gì | Ví dụ |
|---|---|---|
| {{ui:Độ co giãn}} | Lớn lên cùng cấu kiện; khoảng cách đến cả hai phía được giữ nguyên | Mặt bàn |
| {{ui:Giữ ở đầu}} / {{ui:Giữ ở cuối}} | Giữ nguyên kích thước và khoảng cách đến phía đó | Chân bàn |
| {{ui:Di chuyển theo tỷ lệ}} | Giữ nguyên kích thước; phần giữa di chuyển theo tỷ lệ | Kệ, tay nắm cửa |
| {{ui:Co giãn theo tỷ lệ}} | Vị trí và kích thước đều theo tỷ lệ | Các bậc của cầu thang |
| {{ui:Lặp lại}} | Tạo các bản sao của nó, cách đều nhau ({{ui:Mỗi}}), từ nơi nó bắt đầu đến phía xa | Các trụ của lan can |

{{ui:Tự động}} (mặc định) tự tính và cho biết quy tắc nào được dùng: {{ui:Độ co giãn}} khi chi tiết trải dài suốt cấu kiện, {{ui:Di chuyển theo tỷ lệ}} khi nó nằm gần giữa, còn lại nó giữ ở phía gần hơn.

## Lưu ý

- Hình dạng của các chi tiết được dùng chung, nên bản sao đã kéo giãn rất nhẹ. Chỉnh sửa một chi tiết sẽ thay đổi nó trong mọi bản sao.
- Bản sao đã kéo giãn không theo các thay đổi sau này về quy tắc hoặc bố cục của bản gốc: hãy kéo giãn lại để áp dụng chúng.
- Các mặt vẽ rời trong cấu kiện (không thuộc chi tiết nào) giữ nguyên kích thước; hãy biến chúng thành một chi tiết để chúng theo.
- Quy tắc và bản gốc mà mỗi bản sao được kéo giãn từ đó được lưu trong tệp ModelCraft.
