---
title: Lưu, mở và xuất USD
summary: Lưu toàn bộ mô hình dưới dạng USD (.usda, .usdc hoặc .usdz) mà không mất gì, mở lại, và nhập các cảnh USD từ chương trình 3D khác.
keywords: usd, usda, usdc, usdz, openusd, mô tả cảnh phổ quát, lưu thành, xuất, lắp ráp cảnh, trực quan kiến trúc, openpbr, materialx, gói
from: 73d299f9
---

USD là một định dạng cảnh mà nhiều chương trình 3D, kết xuất và trực quan kiến trúc dùng chung. ModelCraft ghi và đọc nó. `.modelcraft` vẫn là định dạng mà {{ui:Lưu}} ghi; USD là một lựa chọn trong {{ui:Lưu thành}}.

## Lưu dưới dạng USD

1. Chọn {{ui:Lưu thành}} trong nhóm {{ui:Tệp}} (hoặc nhấn {{key:Mod+Shift+S}}).
2. Chọn định dạng: {{ui:Văn bản (.usda)}} (dễ đọc, tốt cho quản lý phiên bản), {{ui:Nhị phân (.usdc)}} (nhỏ nhất và nhanh nhất) hoặc {{ui:Gói (.usdz)}} (một tệp duy nhất có kèm kết cấu bên trong).
3. Tệp được tải xuống (trong ứng dụng máy tính, bạn chọn nơi lưu).

Các lựa chọn tương tự nằm trong {{ui:Xuất}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Không mất gì

Mở một tệp USD mà ModelCraft đã lưu, bạn sẽ nhận lại đúng mô hình: các mặt với lỗ của chúng, cạnh mềm và cạnh ẩn, đường cong, nhóm và cấu kiện, thẻ, cảnh, kích thước, đường dẫn hướng, mặt phẳng cắt, đèn và khung nhìn. Các chương trình khác thấy cùng mô hình dưới dạng lưới, nhóm, bản mẫu cho cấu kiện, vật liệu, đèn và camera.

:::note
Nếu một chương trình khác thay đổi hình học của một nhóm hoặc cấu kiện, ModelCraft mở phần đó dưới dạng lưới với thay đổi được giữ lại, và cho biết nó đã đọc bao nhiêu phần theo cách đó. Một vị trí đặt được di chuyển hoặc xóa trong chương trình khác vẫn bị di chuyển hoặc xóa.
:::

## Mở hoặc nhập USD của người khác

- {{ui:Mở}} một tệp `.usd`, `.usda`, `.usdc` hoặc `.usdz` để bắt đầu một mô hình từ nó.
- {{ui:Nhập}} một tệp để thêm vào mô hình đang mở. Thả các tệp mà nó tham chiếu (các lớp khác, kết cấu) cùng với nó.

Lưới được nhập với pháp tuyến, tọa độ UV và màu sắc; hình học dùng chung được nhập dưới dạng cấu kiện; vật liệu dưới dạng màu tô; đèn dưới dạng đèn và camera dưới dạng cảnh. Kích thước được tính theo mét với trục Z hướng lên, bất kể đơn vị và trục hướng lên của tệp.

## Chưa có

Hoạt ảnh, bộ xương và đồ thị nút MaterialX chưa được đọc hoặc ghi dưới dạng USD. Hoạt ảnh và vật liệu nút riêng của ModelCraft được giữ trong một tệp USD mà nó đã lưu, để ModelCraft mở lại, nhưng các chương trình khác không thấy chúng. Các lớp mà tệp tham chiếu và ModelCraft không đọc được (ví dụ một tài liệu MaterialX) sẽ bị bỏ qua, kèm ghi chú.
