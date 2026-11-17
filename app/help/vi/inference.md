---
title: Suy luận và bắt điểm
summary: Các dấu màu có nghĩa gì, bắt điểm nào thắng, và cách khóa một hướng bằng phím mũi tên hoặc Shift.
keywords: suy luận, bắt điểm, bắt, điểm cuối, trung điểm, tâm mặt, trên cạnh, trên mặt, trục, trục đỏ, trục xanh lá, trục xanh dương, song song, vuông góc, khóa, shift, osnap
from: e78984e9
---

Khi một công cụ vẽ hoặc sửa đang hoạt động, ModelCraft nhìn vào những gì nằm dưới con trỏ và bắt vào thứ hữu ích nhất ở gần. Một dấu hiệu cho biết nó đã tìm thấy gì, và nhãn ở góc dưới bên trái gọi tên nó.

## Dấu hiệu và nhãn

| Nhãn | Dấu hiệu | Bắt vào |
|---|---|---|
| Điểm cuối | Vòng tròn xanh lá | Điểm cuối của một cạnh |
| Trung điểm | Vòng tròn xanh lam | Giữa một cạnh |
| Tâm mặt | Vòng tròn xanh dương | Giữa mặt nằm dưới con trỏ |
| Điểm dẫn hướng | Xám | Điểm dẫn hướng do thước dây để lại |
| Gốc | Vàng đất | Nơi các trục đỏ, xanh lá và xanh dương gặp nhau |
| Trên trục đỏ / Trên trục xanh lá / Trên trục xanh dương | Một đường màu đó | Một đường từ điểm bắt đầu theo hướng đó |
| Song song với cạnh / Vuông góc với cạnh | Đường đỏ tím | Đường từ điểm bắt đầu song song hoặc vuông góc với cạnh đã ghi nhớ (xem bên dưới) |
| Đã khóa | Đường đỏ tím | Một hướng bạn đã khóa bằng phím mũi tên hoặc {{key:Shift}} |
| Trên cạnh | Hình vuông đỏ | Bất kỳ đâu dọc theo một cạnh |
| Trên đường dẫn hướng | Xám | Bất kỳ đâu dọc theo đường dẫn hướng |
| Trên mặt | Hình thoi xanh dương | Bất kỳ đâu trên một mặt |
| Trên mặt phẳng | không có | Mặt phẳng bạn đã bắt đầu, khi con trỏ nằm trên khoảng trống |
| Trên mặt đất | không có | Mặt đất (mặt phẳng đỏ-xanh lá), khi không có gì khác ở đó |

Khi một đường trục từ điểm bắt đầu cắt một cạnh hoặc đường dẫn hướng, ModelCraft bắt vào điểm cắt và nhãn gọi tên cả hai, chẳng hạn "Trên trục đỏ, trên cạnh".

## Bắt điểm nào thắng

1. **Điểm** trong khoảng 12 pixel: điểm cuối trước, rồi điểm dẫn hướng, trung điểm, tâm mặt nằm dưới con trỏ và gốc.
2. **Hướng** từ điểm bắt đầu: các trục đỏ, xanh lá và xanh dương, và song song hoặc vuông góc với cạnh đã ghi nhớ.
3. **Trên một cạnh** hoặc một đường dẫn hướng.
4. **Trên một mặt.**
5. **Mặt phẳng vẽ**, hoặc mặt đất.

Những thứ bị ẩn sau một mặt không bao giờ bắt. Xoay quanh để thấy điểm bạn muốn.

## Vẽ trên một mặt từ một điểm

Một {{ui:Hình chữ nhật}}, {{ui:Vòng tròn}} hoặc {{ui:Đa giác}} bắt đầu tại một góc, một trung điểm, một cạnh hoặc tâm của một mặt sẽ được vẽ **trong mặt phẳng của mặt nằm dưới con trỏ**, và cắt mặt đó. Một cạnh thuộc về hai mặt, nên phía của cạnh mà con trỏ đang nằm sẽ quyết định: để vẽ trên đầu của một hộp dài, bắt đầu từ giữa một trong các cạnh của nó với con trỏ nằm ngay bên trong mặt đầu.

## Song song và vuông góc

ModelCraft ghi nhớ **cạnh cuối cùng mà con trỏ đi qua trước cú nhấp đầu tiên của bạn**. Bắt đầu tại một góc hoặc trên một cạnh được tính là đã đi qua cạnh đó. Khi công cụ đang hoạt động, các cạnh khác mà bạn rê qua sẽ không thay thế nó.

Để vẽ một đường thẳng song song với một cạnh có sẵn:

1. Nhấn {{key:L}} và rê con trỏ qua cạnh bạn muốn khớp theo.
2. Di chuyển đến điểm bắt đầu, nếu được thì không cắt các cạnh khác trên đường đi, rồi nhấp.
3. Di chuyển theo hướng song song với cạnh đó. Đường thẳng chuyển sang màu đỏ tím và nhãn ghi "Song song với cạnh". Vuông góc hoạt động tương tự, trong mặt phẳng bạn đang vẽ.

Nếu ghi nhớ nhầm cạnh, nhấn {{key:Esc}}, rê qua cạnh đúng, rồi bắt đầu lại.

## Khóa một hướng

Sau cú nhấp đầu tiên của một công cụ, bạn có thể giữ điểm tiếp theo trên một đường:

| Phím | Khóa vào |
|---|---|
| {{key:Right}} | Trục đỏ |
| {{key:Left}} | Trục xanh lá |
| {{key:Up}} | Trục xanh dương (thẳng đứng) |
| {{key:Down}} | Song song với cạnh đã ghi nhớ (xem trên) |

Nhấn lại cùng phím mũi tên để mở khóa. Thanh trạng thái ghi "Đã khóa vào trục đỏ. Nhấn lại cùng phím mũi tên để mở khóa."

Khi bị khóa, điểm trượt dọc theo đường về phía con trỏ đang ở, và vẫn thẳng hàng với các điểm bạn rê qua: rê qua góc của một hộp khác để vẽ một đường dọc theo màu đỏ đúng đến góc đó.

**{{key:Shift}}** khóa hướng mà bạn đang bắt vào ngay lúc đó (một trục, hoặc song song), trong suốt thời gian bạn giữ phím. Thả ra để mở khóa.

Khóa hoạt động trong {{ui:Đường thẳng}}, {{ui:Hình chữ nhật}}, {{ui:Vòng tròn}}, {{ui:Đa giác}}, {{ui:Di chuyển}}, {{ui:Tỷ lệ}} và {{ui:Thước dây}}. Trước cú nhấp đầu tiên, các phím mũi tên sẽ xoay khung nhìn thay thế.

## Bên trong nhóm

Khi bạn sửa bên trong một nhóm hoặc cấu kiện, các trục là trục riêng của nhóm (chúng di chuyển cùng nó, và xoay cùng nó nếu nó đã được xoay). Bắt điểm vẫn tìm được điểm và cạnh bên ngoài nhóm, nên bạn có thể căn thẳng hàng với phần còn lại của mô hình.
