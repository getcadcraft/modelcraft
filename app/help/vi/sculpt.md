---
title: Điêu khắc một lưới (mesh)
summary: Tạo hình lưới như đất sét bằng các cọ — vẽ, đất sét, làm mượt, kéo, phồng, nếp gấp, bóp, san phẳng — bảo vệ các phần bằng mặt nạ, đối xứng qua X, và thêm chi tiết ở nơi bạn điêu khắc.
keywords: điêu khắc, cọ, cọ vẽ, đất sét, vẽ, làm mượt, kéo, phồng, nếp gấp, bóp, san phẳng, mặt nạ, đối xứng, gương, chi tiết, topology động, bút, áp lực, bảng vẽ, bút cảm ứng
from: 5477801a
---

Không gian làm việc Điêu khắc tạo hình một lưới bằng cọ, như đất sét: kéo trên bề mặt và nó nổi lên, lún xuống, làm mượt hoặc đi theo con trỏ dưới một cọ tròn, mạnh nhất ở giữa và mờ dần tới mép.

## Bắt đầu

Chọn một lưới và chọn {{ui:Điêu khắc}} trong danh sách Không gian làm việc. Một nhóm hoặc thành phần trước hết trở thành một lưới, như trong không gian làm việc Lưới. Cọ làm việc trên các đỉnh của lưới, nên một lưới có nhiều đỉnh hơn cho hình dạng mịn hơn: hãy chia nhỏ nó trước (nút {{ui:Chia nhỏ}} của không gian làm việc Lưới, hoặc một bộ sửa đổi Subdivision surface mà bạn Áp dụng), hoặc bật {{ui:Chi tiết}}.

## Cọ

| Cọ | Phím | Tác dụng |
| --- | --- | --- |
| {{ui:Vẽ}} | {{key:D}} | Nâng bề mặt dưới cọ |
| {{ui:Đất sét}} | {{key:C}} | Đắp các lớp phẳng, lấp đầy các chỗ lõm trước |
| {{ui:Làm mượt}} | {{key:S}} | Làm phẳng các chỗ gồ; giữ {{key:Shift}} để làm mượt với bất kỳ cọ nào |
| {{ui:Kéo}} | {{key:G}} | Kéo bề mặt đi theo con trỏ |
| {{ui:Phồng}} | {{key:I}} | Phình bề mặt ra theo hướng riêng của nó |
| {{ui:Nếp gấp}} | {{key:Shift+C}} | Khía một rãnh sắc |
| {{ui:Bóp}} | {{key:P}} | Kéo bề mặt về phía giữa cọ |
| {{ui:San phẳng}} | {{key:T}} | Ép bề mặt về mặt phẳng trung bình của nó |
| {{ui:Mặt nạ}} | {{key:M}} | Tô một mặt nạ bảo vệ bề mặt khỏi các cọ khác |

Giữ {{key:Ctrl}} khi kéo nét để làm ngược lại (hạ xuống thay vì nâng, một sống thay vì một rãnh, gỡ mặt nạ), hoặc bật {{ui:Bớt đi}}.

## Kích thước và độ mạnh

Kích thước cọ tính bằng pixel trên màn hình, nên cảm giác như nhau dù bạn thu phóng xa đến đâu: {{key:[}} và {{key:]}} làm nó nhỏ hơn và lớn hơn, {{key:Shift+[}} và {{key:Shift+]}} đổi độ mạnh. Bảng hiện cả hai.

Với bút trên bảng vẽ, ấn mạnh hơn làm cọ lớn hơn và mạnh hơn; bảng sẽ tắt cả hai.

## Đối xứng, mặt nạ và chi tiết

- {{ui:Đối xứng X}} ({{key:X}}) điêu khắc cả hai phía qua đỏ cùng lúc, dành cho khuôn mặt và hình người.
- Mặt nạ hiện tối hơn khi bạn điêu khắc. {{ui:Xóa mặt nạ}} ({{key:Alt+M}}) gỡ nó đi, {{ui:Đảo mặt nạ}} ({{key:Ctrl+I}}) che những gì đang tự do và giải phóng những gì đã bị che. Mặt nạ được giữ cùng với lưới.
- {{ui:Chi tiết}} thêm tam giác ở nơi bạn điêu khắc: các cạnh dài hơn kích thước đặt trong bảng (pixel trên màn hình) được chia dưới cọ. Nó cần một lưới tam giác, và sẽ hỏi có tạo một lưới như vậy trước không.

Mỗi nét là một bước hoàn tác.

:::note
Chi tiết chỉ thêm tam giác; nó không bớt những cái đã trở nên rất nhỏ. Một Remesh (trong không gian làm việc Lưới) làm đều lại toàn bộ lưới.
:::

Xem thêm [Chỉnh sửa lưới](topic:mesh-edit), [Lưới](topic:meshes) và [Bộ sửa đổi trên lưới](topic:modifiers).
