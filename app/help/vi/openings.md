---
title: Cắt lỗ mở xuyên qua tường
summary: Vẽ một cửa sổ hoặc cửa đi trên tường có độ dày rồi đẩy nó xuyên qua, để tường có một lỗ thật.
keywords: cửa sổ, cửa đi, lỗ mở, lỗ, tường, cắt, đẩy xuyên qua, khoảng rỗng, độ dày, mặt đứng
from: 6b22f32c
---

Một lỗ mở cần một bức tường có hai mặt: một hộp, hoặc một bức tường bạn tạo bằng cách kéo lên một hình chữ nhật dài và mỏng. Một mặt đơn đứng riêng không có gì để đẩy xuyên qua.

## Tạo một bức tường để luyện tập

1. Nhấn {{key:R}}, nhấp một góc trên mặt đất và gõ `6m,0.3m` (hoặc `20',12"`), rồi {{key:Enter}}.
2. Nhấn {{key:P}}, nhấp vào hình chữ nhật và gõ `3m` (hoặc `10'`), rồi {{key:Enter}}.

Bạn có một bức tường dày 300 mm (12 in).

## Vẽ lỗ mở

1. Xoay quanh để thấy cạnh dài của bức tường.
2. Nhấn {{key:R}}.
3. Di chuột lên mặt của bức tường, rồi nhấp vào nơi góc dưới của cửa sổ sẽ đặt. Gợi ý ghi "Trên mặt".
4. Gõ chiều rộng và chiều cao của cửa sổ, chẳng hạn `1.2m,1.5m` (hoặc `4',5'`), và nhấn {{key:Enter}}.

   Cửa sổ là một mặt riêng nằm trong mặt tường, và mặt tường giờ có một lỗ xung quanh nó.

Để đặt nó ở một khoảng cách chính xác từ góc và sàn, trước hết dùng [đường dẫn hướng](topic:guides-measure): với {{ui:Tape}}, kéo các đường dẫn hướng ra khỏi cạnh đáy và cạnh cuối của tường, rồi bắt đầu hình chữ nhật tại nơi hai đường dẫn cắt nhau (gợi ý ghi "Trên đường dẫn").

## Đẩy xuyên qua

1. Nhấn {{key:P}}.
2. Nhấp vào mặt cửa sổ và đẩy nó vào tường.
3. Di chuyển cho đến khi nó dừng ở mặt sau, rồi nhấp. Hoặc gõ độ dày tường, `300` (hoặc `12`), và nhấn {{key:Enter}}.

   ModelCraft dừng ở mặt phía sau và mở nó: tường giờ có một lỗ thông suốt, với bốn mặt bên (hai bên, đỉnh và ngưỡng) bao quanh. {{ui:Entity info}} vẫn gọi bức tường là một khối đặc kín khi nó nằm trong nhóm.

Nếu bạn đẩy ít hơn toàn bộ độ dày, bạn sẽ có một hốc lõm thay vì một lỗ xuyên.

## Cửa đi

Vẽ hình chữ nhật bắt đầu từ cạnh đáy của mặt tường (gợi ý ghi "Trên cạnh" hoặc "Điểm cuối"), để lỗ mở chạm sàn. Đẩy xuyên qua theo cách tương tự.

## Nhiều cửa sổ cùng kích thước

1. Tạo lỗ mở đầu tiên.
2. Với các lỗ tiếp theo, vẽ các hình chữ nhật, rồi nhấp đúp vào từng cái bằng {{ui:Push/pull}}: nhấp đúp sẽ lặp lại khoảng cách cuối cùng. Xem [Đẩy và kéo](topic:push-pull#repeat-the-last-distance).

## Nếu không cắt xuyên qua được

- Hình chữ nhật phải được vẽ **trên** mặt tường. Nếu nó được vẽ lơ lửng trước mặt tường, nó là một mặt riêng: hoàn tác và vẽ lại, bắt đầu trên mặt.
- Lần đẩy dừng ở mặt đầu tiên phía sau lỗ mở. Nếu có thứ khác cản đường bên trong tường (một mặt bên trong còn sót từ lần vẽ trước), nó sẽ dừng ở đó; xóa các cạnh của mặt đó rồi thử lại.
- Hình học nằm trong một nhóm riêng sẽ không bị cắt. Mở nhóm chứa tường và vẽ lỗ mở bên trong nó.
