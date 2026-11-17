---
title: Di chuyển, sao chép và tạo mảng
summary: Di chuyển đối tượng bằng cách nhấp hoặc theo khoảng cách chính xác, sao chép chúng bằng phím bổ trợ, và tạo một hàng các bản sao cách đều nhau.
keywords: di chuyển, sao chép, nhân bản, mảng, hàng, khoảng cách, chia, dời song song, kéo giãn, cột, lặp lại, sao chép nhiều bản
from: 280245fc
---

{{ui:Move}} ({{key:M}}) di chuyển mọi thứ đang được chọn từ điểm này sang điểm khác. Giữ phím bổ trợ sẽ biến thao tác thành sao chép, và sau khi sao chép bạn có thể gõ số lượng bản sao muốn thêm.

## Di chuyển một đối tượng

1. Chọn thứ bạn muốn di chuyển (xem [Chọn đối tượng](topic:select)). Nếu chưa chọn gì, {{ui:Move}} sẽ lấy đối tượng bạn nhấp vào.
2. Nhấn {{key:M}}.
3. Chỉ định một điểm để di chuyển từ đó. Chọn một vị trí có ý nghĩa, chẳng hạn một góc: điểm đó sẽ nằm đúng tại chỗ bạn nhấp tiếp theo.
4. Di chuyển con trỏ. Phần đã chọn sẽ đi theo. Nó bắt vào điểm, cạnh và các hướng trục đỏ, xanh lá, xanh dương như đường thẳng.
5. Nhấp vào vị trí điểm sẽ đến, hoặc gõ khoảng cách rồi nhấn {{key:Enter}}.

   Gợi ý trên thanh trạng thái sẽ quay lại "Chỉ định điểm để di chuyển từ…" cho lần di chuyển tiếp theo.

Khoảng cách gõ vào sẽ đi theo hướng bạn đang chỉ. Bạn cũng có thể gõ độ dời chính xác `<2m,0,0>` (2 m dọc trục đỏ), hoặc điểm đến chính xác cho điểm bạn đã chọn, `[0,0,0]` (gốc tọa độ). Xem [Nhập kích thước chính xác](topic:value-box).

Để chỉ di chuyển theo một trục, nhấn một phím mũi tên sau cú nhấp đầu tiên: {{key:Right}} khóa theo trục đỏ, {{key:Left}} theo trục xanh lá, {{key:Up}} theo trục xanh dương. Nhấn cùng mũi tên một lần nữa để mở khóa.

## Di chuyển một phần hình khối sẽ kéo giãn nó

Hình học chưa được nhóm thì liên kết với nhau. Nếu bạn chọn một mặt hoặc vài cạnh rồi di chuyển, các mặt nối với chúng sẽ kéo giãn theo. Di chuyển mặt trên của một hộp sang bên và hộp sẽ nghiêng; di chuyển một cạnh của mái và độ dốc mái sẽ thay đổi. Các mặt không còn giữ được phẳng sẽ gấp thành tam giác.

Để di chuyển toàn bộ một vật thể mà không kéo giãn, trước tiên chọn tất cả (nhấp ba lần), hoặc tốt hơn, tạo nhóm hoặc cấu kiện (xem [Nhóm và cấu kiện](topic:groups-components)).

## Sao chép một đối tượng

1. Chọn thứ bạn muốn sao chép.
2. Nhấn {{key:M}}.
3. Giữ {{key:Ctrl}} (hoặc {{key:Alt}}) rồi nhấp điểm để di chuyển từ đó. Trên Mac, {{key:Mod}} hoặc {{key:Alt}} cũng làm điều tương tự. Gợi ý ghi "Ctrl sẽ di chuyển thay vì", nghĩa là bạn đang sao chép.

   Bạn cũng có thể nhấn rồi thả {{key:Ctrl}} hoặc {{key:Alt}} sau cú nhấp đầu tiên để chuyển qua lại giữa di chuyển và sao chép.

4. Nhấp vào vị trí bản sao sẽ đến, hoặc gõ khoảng cách rồi nhấn {{key:Enter}}.

   Bản gốc vẫn ở chỗ cũ, và bản sao được chọn.

## Sao chép, cắt, dán và nhân bản

- {{key:Mod+C}} sao chép phần đã chọn, {{key:Mod+X}} cắt (sao chép rồi xóa). {{ui:Copy}} và {{ui:Paste}} cũng là nút trong nhóm {{ui:Edit}} của thanh công cụ, còn {{ui:More}} bên cạnh có cắt, dán tại chỗ và nhân bản.
- {{key:Mod+V}} dán: đường viền của bản sao đi theo con trỏ, bắt điểm như mọi công cụ khác, và một cú nhấp sẽ đặt nó xuống với góc thấp nhất tại đó. {{key:Esc}} hủy.
- {{key:Mod+Shift+V}} dán tại chỗ, đúng vị trí bản sao được lấy ra, hữu ích khi đưa thứ gì đó vào một nhóm bạn đang mở.
- {{key:Mod+D}} ({{key:Shift+D}} trong kiểu Modeler) nhân bản: một bản sao được tạo và đi theo con trỏ ngay lập tức; nhấp để đặt xuống, gõ khoảng cách, hoặc nhấn {{key:Esc}} để bỏ. Ngay sau đó, gõ `3x` để có thêm nhiều bản sao liên tiếp.

Một nhóm được dán sẽ thành nhóm mới. Một cấu kiện được dán là một vị trí khác của cùng cấu kiện, nên sửa một bản vẫn thay đổi tất cả. Bản sao cũng được dán vào thẻ ModelCraft khác trong trình duyệt này (khi đó chúng được đưa vào như các định nghĩa mới ở đó).

## Một hàng bản sao

Ngay sau khi sao chép, khi {{ui:Move}} vẫn là công cụ đang dùng:

- Gõ `3x` (hoặc `*3`) rồi nhấn {{key:Enter}} để có ba bản sao liên tiếp, mỗi bản cách nhau cùng khoảng cách như bản sao đầu tiên. Bạn nhận được ba bản sao mới ngoài bản gốc.
- Gõ `/3` rồi nhấn {{key:Enter}} để chia thay vì: ba bản sao trải đều từ bản gốc đến nơi bạn đặt bản sao đầu tiên, bản cuối nằm đúng chỗ đó. Dùng cách này để lấp một khoảng: đặt một bản sao ở đầu xa, rồi chia.

Bạn có thể gõ số khác ngay sau đó: `5x` thay thế hàng `3x`. Gợi ý nhắc: "Đã sao chép. Gõ 3x để có thêm nhiều bản sao liên tiếp, hoặc /3 để chia khoảng cách."

### Ví dụ: cột cách nhau 6 mét

1. Tạo một cột và biến nó thành cấu kiện ({{key:G}}), để sau này mọi bản sao đều thay đổi cùng lúc.
2. Nhấn {{key:M}}, giữ {{key:Ctrl}} và nhấp vào góc đáy của cột.
3. Di chuyển dọc trục đỏ, gõ `6m`, rồi {{key:Enter}}.
4. Gõ `4x` và {{key:Enter}}. Bạn có năm cột, cách nhau 6 m.

## Lưu ý

- Nhấn {{key:Esc}} trước cú nhấp thứ hai để hủy; mọi thứ sẽ trở về vị trí cũ.
- {{ui:Move}} hoạt động bên trong nhóm bạn đang chỉnh sửa. Để di chuyển cả nhóm, đóng nhóm trước rồi chọn nó từ bên ngoài.
- Khi {{ui:Collide}} được bật (góc dưới bên phải, và trong [cài đặt ModelCraft](topic:settings#solids-stop-where-they-touch)), một lần di chuyển sẽ dừng lại khi phần đã chọn chạm vào một khối khác thay vì xuyên qua. Nhấp {{ui:Collide}} để tắt cho lần di chuyển cần xuyên qua.
- Để đưa một bản sao vào nhóm khác: sao chép nó, mở nhóm kia, rồi dán ({{key:Mod+Shift+V}} giữ nó ở cùng vị trí).
