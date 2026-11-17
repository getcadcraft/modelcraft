---
title: Khối xem
summary: Nhấp vào một mặt, cạnh hoặc góc của khối ở góc khung nhìn để nhìn từ đó, kéo để xoay quanh, xoay vòng la bàn, quay quanh một khung nhìn đối diện mặt và về lại khung nhìn gốc.
keywords: khối xem, viewcube, khối, la bàn, bắc, khung nhìn gốc, khung nhìn tiêu chuẩn, trên, trước, phải, iso, góc, cạnh, xoay quanh, xoay khung nhìn, biểu tượng trục, chỉ báo góc, điều hướng
from: e1ec1347
---

Khối xem nằm ở góc trên bên phải của khung nhìn 3D. Nó xoay cùng khung nhìn, nên luôn cho biết bạn đang nhìn theo hướng nào: {{ui:Trên}} ở phía trên, {{ui:Trước}} quay về phía nam (bạn nhìn về phía bắc, dọc theo trục xanh lá, khi bạn nhìn vào nó), {{ui:Phải}} quay về phía đông (trục đỏ). Nó vẫn trong suốt cho đến khi bạn trỏ vào nó.

## Nhìn từ một mặt, một cạnh hoặc một góc

1. Trỏ vào khối. Phần dưới con trỏ sẽ sáng lên: giữa một mặt, một cạnh (nó sáng trên cả hai mặt chung cạnh đó) hoặc một góc (trên cả ba mặt).
2. Nhấp vào. Khung nhìn xoay để nhìn từ đó, giữ nguyên tâm và mức thu phóng.

Có 26 vị trí để nhấp: 6 mặt ({{ui:Trên}}, {{ui:Dưới}}, {{ui:Trước}}, {{ui:Sau}}, {{ui:Trái}}, {{ui:Phải}}), 12 cạnh và 8 góc. Một góc cho góc nhìn ba phần tư cổ điển; một cạnh nhìn ở giữa hai mặt.

Nhấp {{ui:Trước}} giống như {{ui:Khung nhìn}}, {{ui:Trước}} trên thanh công cụ, nhưng không vừa khung hình. {{ui:Khung nhìn}} vẫn thu phóng vừa toàn bộ mô hình.

## Xoay bằng cách kéo khối

Kéo khối để xoay khung nhìn, giống như xoay quanh trong chính khung nhìn. Một lần kéo không bao giờ bị coi là nhấp, nên bạn có thể nắm khối ở bất kỳ đâu.

## Vòng la bàn

Vòng dưới khối mang các chữ B, Đ, N và T.

- **Kéo vòng** để xoay mô hình quanh trục đứng, như thể nó đặt trên bàn xoay. Vòng đi theo con trỏ.
- **Nhấp vào một chữ cái** để nhìn từ phía đó, giữ nguyên độ nghiêng khi nhìn xuống. Trong khung nhìn thẳng từ trên xuống, chữ bạn nhấp sẽ nằm ở đáy màn hình.

## Khung nhìn đối diện mặt: mũi tên

Khi bạn nhìn thẳng vào một mặt, các mũi tên nhỏ xuất hiện quanh khối:

- Bốn **tam giác** đưa mặt ở phía đó ra phía trước: tam giác phía trên khối cho biết mặt đang ở trên cùng trước đó, và tương tự.
- Hai **mũi tên cong** ở góc trên bên phải xoay hình một phần tư vòng theo chiều kim đồng hồ hoặc ngược lại, mà không thay đổi mặt bạn đang nhìn. Dùng chúng để xoay mặt bằng sao cho một bức tường dài chạy ngang màn hình.

## Về nhà

Nút ngôi nhà ở góc trên bên trái của khối sẽ quay về khung nhìn {{ui:Đẳng trắc}} ba phần tư và vừa toàn bộ mô hình. {{key:Home}} cũng làm điều tương tự khi khối đang có tiêu điểm bàn phím.

## Bằng bàn phím

{{key:Tab}} đến khối, rồi:

| Phím | Chức năng |
|---|---|
| {{key:left}} / {{key:right}} | chọn một mặt, cạnh hoặc góc quanh khối, theo từng bước một phần tám vòng (trình đọc màn hình sẽ cho biết đó là gì) |
| {{key:up}} / {{key:down}} | chọn vị trí cao hơn hoặc thấp hơn, lên đến {{ui:Trên}} hoặc xuống đến {{ui:Dưới}} |
| {{key:Enter}} hoặc {{key:Space}} | nhìn từ vị trí đã chọn |
| {{key:Shift+left}} / {{key:Shift+right}} | xoay khung nhìn một phần tư vòng quanh trục đứng |
| {{key:Home}} | khung nhìn gốc |
| {{key:Esc}} | rời khỏi khối |

Các phím nhấn trên khối chỉ ở lại với khối: chúng không khởi động công cụ ModelCraft nào.

## Biểu tượng trục hoặc không có gì

Mở {{ui:Cài đặt}} ({{key:Mod+,}}), thẻ {{ui:ModelCraft}}, và đặt **Chỉ báo góc** thành {{ui:Khối xem}} (mặc định), {{ui:Biểu tượng trục}} (một dấu nhỏ X, Y, Z ở góc dưới bên trái: X đỏ, Y xanh lá, Z xanh dương) hoặc {{ui:Không có}}. Trình duyệt này ghi nhớ lựa chọn. Xem [Cài đặt ModelCraft](topic:settings#corner-indicator).

:::note
ModelCraft không có xoay nghiêng (roll): ngoài các khung nhìn thẳng từ trên xuống và thẳng từ dưới lên, phía trên trên màn hình luôn là phía trên trong mô hình. Khối và các mũi tên cong có thể xoay một khung nhìn mặt bằng; chúng không thể lật một khung nhìn cạnh để nằm trên cạnh của nó.
:::
