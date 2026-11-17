---
title: Chia đều cạnh hoặc đường cong thành các phần bằng nhau
summary: Chia một đường thẳng thành các đoạn bằng nhau, hoặc đặt cho cung tròn hay vòng tròn một số đoạn mới, bằng công cụ Chia đều.
keywords: chia đều, chia đều cạnh, phần bằng nhau, đoạn bằng nhau, tách cạnh, đoạn, subdivide, chia đều cạnh, đoạn cung tròn, đoạn vòng tròn, điểm dọc theo đường thẳng
from: 5c3ce3ed
---

{{ui:Chia đều}} cắt một cạnh thành các đoạn bằng nhau, với một góc ở mỗi điểm cắt. Dùng các góc đó để bắt điểm, để bắt đầu vẽ đường thẳng, hoặc để đẩy và kéo các phần của một mặt.

## Chia một cạnh

1. Nhấp {{ui:Chia đều}} trên thanh công cụ, hoặc chọn một cạnh rồi nhấp {{ui:Chia đều…}} trong {{ui:Thông tin đối tượng}}.
2. Trỏ vào cạnh. Các dấu cho biết vị trí sẽ cắt: khi trỏ ở giữa cạnh thì cạnh chia thành hai phần; di chuyển về phía một đầu để có nhiều phần hơn.
3. Nhấp để chia cạnh thành số phần đã hiển thị. Hoặc nhập một số, chẳng hạn `5` (hoặc `5s`, hoặc `/5`), rồi nhấn {{key:Enter}}: cạnh được chia ngay.

Các đoạn vẫn được chọn, và toàn bộ thao tác là một bước hoàn tác. Mặt có cạnh này giữ nguyên hình dạng và có thêm các góc mới.

## Chia cung tròn hoặc vòng tròn

Trỏ vào bất kỳ đoạn nào của cung tròn hoặc vòng tròn: nó được chia như một khối.

- Cung tròn hoặc vòng tròn mà không có góc nào khác dùng đến, nằm phẳng trên mặt của nó, sẽ **được vẽ lại với số đoạn đó** trên cung thật. Hai đầu vẫn ở nguyên vị trí, và nó vẫn là một đường cong, nên bạn vẫn có thể chọn bằng một nhấp và đổi bán kính trong {{ui:Thông tin đối tượng}}. Vòng tròn 24 cạnh chia thành 8 đoạn sẽ thành bát giác.
- Mọi đường cong khác (mép của một hình trụ đã kéo, đường cong vẽ bằng {{ui:Đường cong}}, cung tròn có đường thẳng nối vào góc) sẽ có các góc mới ở những khoảng cách bằng nhau dọc theo đường cong, và không có gì bị di chuyển.

## Với phím của modeler

Công cụ này giống nhau khi dùng phím của modeler (Cài đặt › ModelCraft › Phím tắt, hoặc kiểu menu Modeler). Ở đó nó nằm trong menu {{ui:Lưới (mesh)}} với tên {{ui:Chia đều cạnh (Subdivide)}}.

## Điều cần biết

- Số nhập vào đi từ 2 đến 1000; khi di chuyển con trỏ thì tối đa là 100.
- Đường cong vẽ bằng {{ui:Đường cong}} giữ nguyên các điểm của nó: sau khi {{ui:Sửa điểm}}, nó được vẽ lại từ các điểm đó và các góc mới sẽ mất.

Xem thêm [Vẽ mặt với đường thẳng, hình chữ nhật, vòng tròn và cung tròn](topic:draw-faces) và [Nhập kích thước chính xác trong ô giá trị](topic:value-box).
