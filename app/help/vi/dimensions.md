---
title: Ghi kích thước và đổi kích cỡ những gì bạn đã vẽ
summary: Đặt kích thước giữa các góc, trên cung và vòng tròn, hoặc giữa hai cạnh; nhập một độ dài mới để đổi kích cỡ mô hình. Nhập lại độ dài của một cạnh, hoặc chiều rộng, chiều sâu, chiều cao của một nhóm trong Entity info.
keywords: kích thước, đổi kích cỡ, thay đổi kích cỡ, chỉnh kích cỡ, độ dài, chiều rộng, chiều sâu, chiều cao, kéo giãn, kích thước điều khiển, chú thích, đo, sau khi vẽ, bán kính, đường kính, góc, cung, vòng tròn, R, Ø
from: a1f815ec
---

Kích cỡ trong ModelCraft không cố định sau khi một thứ đã được vẽ. Một kích thước thể hiện một độ dài trên mô hình, và nhập một độ dài mới vào nó sẽ đổi kích cỡ mô hình cho khớp. Bạn cũng có thể nhập lại độ dài của một cạnh, hoặc chiều rộng, chiều sâu và chiều cao của một nhóm, trong {{ui:Entity info}}.

## Đặt một kích thước

1. Nhấn {{key:D}}, hoặc nhấp {{ui:Dimension}} trên thanh công cụ.
2. Nhấp vào một góc để đo từ đó. Nó bắt vào các góc, trung điểm và cạnh, như khi vẽ.
3. Nhấp vào góc thứ hai.

   Hoặc nhấp một lần vào một **cạnh** (gợi ý ghi "On edge") để ghi kích thước cho cả cạnh đó chỉ với một cú nhấp.
4. Đưa con trỏ đến nơi đường kích thước nên nằm, rồi nhấp. Bạn cũng có thể gõ khoảng lệch, chẳng hạn `0.5m`, rồi nhấn {{key:Enter}}.

   Đường kích thước giữ nằm ngang với một cạnh nằm ngang, trừ khi bạn đang nhìn nó từ bên cạnh. Với một cạnh đứng, nó nằm trong mặt phẳng thẳng đứng hướng về bạn nhiều nhất.

Thanh trạng thái ghi "Kích thước 4 m." Kích thước hiển thị độ dài theo đơn vị của mô hình và cập nhật khi bạn đổi đơn vị trong bộ chọn.

## Bán kính, đường kính và góc

Cùng công cụ {{ui:Dimension}} ghi kích thước cho các vật tròn và góc:

- **Một cung:** nhấp vào cung. Gợi ý ghi {{ui:Radius}}. Đưa con trỏ đến nơi văn bản nên đặt rồi nhấp: kích thước đọc là **R 1.5 m**.
- **Một vòng tròn:** nhấp vào vòng tròn. Bạn có một **đường kính** (**Ø 3 m**) với một đường thẳng qua vòng tròn đi qua tâm của nó. Đa giác cũng hoạt động tương tự, với các góc của chúng nằm trên vòng tròn.
- **Góc giữa hai cạnh:** nhấp vào một cạnh, rồi nhấp vào cạnh thứ hai gặp nó tại một góc (khi con trỏ đang ở trên nó, gợi ý ghi {{ui:Angle between the edges}}). Sau đó di chuyển vào góc bạn muốn và nhấp. Bên trong góc bạn có góc giữa các cạnh; di chuyển sang một bên và bạn có góc bên cạnh nó (chẳng hạn 150° thay vì 30°). Khoảng cách từ góc đến nơi bạn nhấp quyết định cung nằm ở đâu; hoặc nhập khoảng cách đó.

Để đổi một bán kính thành đường kính hoặc ngược lại, chọn kích thước rồi chọn trong {{ui:Show as}} thuộc {{ui:Entity info}}.

**Đổi kích cỡ bằng chúng:** nhập một bán kính hoặc đường kính mới ngay sau khi đặt một cái, hoặc chọn sau rồi nhập. Cung hoặc vòng tròn giữ nguyên tâm và đổi kích thước; một mặt mà nó bao quanh (một đĩa, đầu của một rãnh) đổi theo. Có hai trường hợp chỉ đo:

- **Kích thước góc** không bao giờ thay đổi mô hình. Để đổi một góc, hãy xoay các cạnh bằng {{ui:Rotate}}.
- **Vòng tròn ở đầu một hình trụ** (một vòng tròn bạn kéo bằng {{ui:Push/pull}}) không thể đổi kích cỡ từ kích thước của nó, vì các mặt bên sẽ phải đổi theo. Hãy đổi tỷ lệ hình trụ thay vào đó, quanh trục của nó.

## Đổi kích cỡ mô hình bằng một kích thước

Ngay sau khi đặt một kích thước, nhập một độ dài mới rồi nhấn {{key:Enter}}: `6m`, `12'`, `3500` trong một mô hình milimet. Mô hình đổi sang kích cỡ đó.

Sau này, vào bất kỳ lúc nào:

1. Với {{ui:Select}}, nhấp vào văn bản hoặc đường của kích thước. {{ui:Entity info}} ghi **Dimension** và hiển thị {{ui:Length}} của nó.
2. Nhập độ dài mới rồi nhấn {{key:Enter}}. Bạn có thể gõ thẳng vào ô giá trị, hoặc vào ô {{ui:Length}} trong {{ui:Entity info}}.

### Cái gì di chuyển

Góc thứ hai mà bạn nhấp sẽ di chuyển, và mọi thứ nằm xa hơn nó cũng vậy:

- **Cả hai góc trên cùng một khối** (chiều rộng của một hộp, chiều cao của một bức tường): phía có góc đang di chuyển trượt ra hoặc vào, và các mặt nối với nó được kéo dãn. Một hộp vẫn là một khối rắn khép kín, và bất cứ thứ gì nằm hoàn toàn ở phía đó, chẳng hạn một cấu kiện cửa sổ, cũng di chuyển theo.
- **Các góc trên hai khối riêng biệt** (khoảng hở giữa hai hộp): khối của góc đang di chuyển di chuyển nguyên vẹn, và khoảng hở thay đổi.
- **Góc đang di chuyển nằm trong một nhóm hoặc cấu kiện mà góc kia không nằm trong**: cả nhóm di chuyển.
- **Cả hai góc nằm trong cùng một nhóm hoặc cấu kiện**: nó được kéo giãn bên trong. Một cấu kiện thay đổi ở mọi nơi nó được đặt, như khi chỉnh sửa nó luôn làm.

Để đổi đầu nào di chuyển, chọn kích thước rồi chọn trong {{ui:Moves}} thuộc {{ui:Entity info}}:

| Lựa chọn | Điều xảy ra |
|---|---|
| {{ui:Second end}} (mặc định) | Đầu mà bạn nhấp thứ hai di chuyển |
| {{ui:First end}} | Đầu mà bạn nhấp thứ nhất di chuyển |
| {{ui:Both ends (centered)}} | Mỗi đầu di chuyển một nửa thay đổi, nên phần giữa không đổi |

### Khi việc đổi kích cỡ bị từ chối

ModelCraft không thay đổi gì và ghi lý do trong thanh trạng thái:

- "a face would bend out of its plane": kích thước chạy nghiêng qua hình. Hãy ghi kích thước dọc theo một cạnh, hoặc dọc theo đỏ, xanh lá hay xanh dương.
- "a face would shrink to nothing or turn inside out": độ dài mới quá ngắn so với hình.
- "the end that moves is not on a corner of the model": đầu di chuyển được đặt trong khoảng trống hoặc giữa một cạnh. Chọn đầu kia trong {{ui:Moves}}, hoặc đặt kích thước trên hai góc.
- "a length must be above zero": độ dài phải lớn hơn không.

Mỗi lần đổi kích cỡ là một bước: {{key:Mod+Z}} hoàn tác nó.

## Nhập lại kích cỡ trong Entity info

Bạn không phải lúc nào cũng cần một kích thước:

- **Một cạnh:** chọn nó. {{ui:Length}} của nó trong {{ui:Entity info}} là một hộp bạn có thể gõ vào. Gõ độ dài vào ô giá trị cũng được. Đầu nằm xa hơn theo đỏ, rồi xanh lá, rồi xanh dương sẽ di chuyển, và những gì nối với nó được kéo dãn. Ví dụ, nhập lại cạnh dưới phía trước của một hộp sẽ làm hộp rộng hơn về bên phải.
- **Một nhóm hoặc cấu kiện:** chọn nó. {{ui:Width (red)}}, {{ui:Depth (green)}} và {{ui:Height (blue)}} là các hộp. Mặt xa của nó (phải, sau, trên) di chuyển. Đây là các trục riêng của nhóm, trước mọi góc xoay bạn đã đặt cho nó.

Nhấn {{key:Enter}} để áp dụng, hoặc {{key:Esc}} để trả lại giá trị cũ.

## Kích thước theo mô hình

Một kích thước được gắn với hai góc mà nó được đặt trên (với góc: vào góc của nó và các đầu xa của hai cạnh; với bán kính hoặc đường kính: vào cung hoặc vòng tròn của nó). Di chuyển, đẩy/kéo hoặc đổi kích cỡ hình học, và kích thước sẽ đi theo và hiển thị độ dài mới. Nó vẫn được gắn khi bạn biến hình học thành một nhóm hoặc cấu kiện.

Nếu một đầu được đặt ở chỗ không phải góc (trên một mặt, hoặc trong khoảng trống), hoặc góc của nó bị xóa, đầu đó vẫn ở nơi cũ. Kích thước vẫn đo được, nhưng chỉ có thể đổi kích cỡ từ đầu kia.

## Xóa kích thước

- Một kích thước: chọn nó rồi nhấn {{key:Delete}}, hoặc nhấp vào nó bằng {{ui:Eraser}}.
- Tất cả kích thước: khi không có gì được chọn, nhấp {{ui:Delete all dimensions}} trong {{ui:Entity info}}.

Kích thước được lưu trong tệp `.modelcraft`. Chúng không được xuất sang các định dạng khác, vốn chỉ mang mô hình 3D. Một tệp có kích thước vẫn mở được trong ModelCraft cũ hơn, nhưng không có chúng.
