---
title: Xoay quanh, di chuyển khung nhìn và thu phóng
summary: Di chuyển quanh mô hình bằng chuột, bàn di chuột, màn hình cảm ứng hoặc bàn phím, và nhảy đến các khung nhìn tiêu chuẩn.
keywords: xoay quanh, di chuyển, thu phóng, nhấn giữ, ba ngón, hai ngón, chạm, điều hướng, camera, khung nhìn, xoay khung nhìn, bàn di chuột, cảm ứng, chụm, nút giữa, phạm vi, phối cảnh, song song, khung nhìn trên, iso
from: 10d4d33a
---

Bạn có thể di chuyển camera bất cứ lúc nào, ngay cả giữa lúc vẽ một đường hay đẩy một mặt: công cụ sẽ chờ đúng vị trí đang dở.

## Với chuột ba nút

| Để | Làm như sau |
|---|---|
| Xoay quanh | Kéo bằng nút giữa (nhấn bánh xe) |
| Di chuyển khung nhìn | Kéo bằng nút phải, hoặc giữ {{key:Shift}} và kéo bằng nút giữa. Nhấn hoặc nhả {{key:Shift}} trong lúc kéo sẽ chuyển giữa xoay quanh và di chuyển khung nhìn |
| Thu phóng | Lăn bánh xe. Nó thu phóng về phía mặt dưới con trỏ, hoặc về điểm dưới nó ở độ sâu của tâm khung nhìn |
| Xem toàn bộ mô hình | {{key:Shift+Z}} hoặc {{ui:Extents}} |

Xoay quanh xoay khung nhìn quanh phần mô hình dưới con trỏ, nên điểm đó vẫn ở nguyên chỗ trong khi mọi thứ xoay quanh nó. Trên khoảng trống, nó xoay quanh tâm khung nhìn. Di chuyển khung nhìn giữ điểm bạn đã nắm dưới con trỏ.

Để luôn xoay quanh tâm khung nhìn, hoặc làm xoay quanh và di chuyển nhanh hơn hay chậm hơn, mở {{ui:Settings}} ({{key:Mod+,}}), thẻ {{ui:ModelCraft}}, **Xoay quanh và di chuyển khung nhìn**. Tốc độ áp dụng cho chuột, bàn di chuột, cảm ứng và phím mũi tên.

Nhấp chuột phải mà không kéo sẽ không làm gì; ModelCraft không có menu chuột phải.

## Không có nút giữa

Dùng các công cụ camera trên thanh công cụ, hoặc bàn phím:

1. Nhấn {{key:O}} (hoặc nhấp {{ui:Orbit}}) và kéo bằng nút trái để xoay quanh. Giữ {{key:Shift}} khi kéo để di chuyển khung nhìn.
2. Nhấn {{key:H}} (hoặc nhấp {{ui:Pan}}) và kéo để di chuyển khung nhìn.
3. Nhấn {{key:Z}} (hoặc nhấp {{ui:Zoom}}) và kéo lên để thu phóng vào, kéo xuống để thu phóng ra.
4. Nhấn {{key:Space}} để quay về {{ui:Select}}, hoặc nhấn phím của công cụ bạn muốn dùng tiếp theo.

Các công cụ camera thay thế công cụ bạn đang dùng. Để nhìn quanh giữa một thao tác mà không mất nó, dùng bàn phím:

- Phím mũi tên xoay quanh.
- {{key:Shift}} cùng phím mũi tên để di chuyển khung nhìn.

Khi một công cụ vẽ đang ở giữa thao tác (sau cú nhấp đầu tiên), phím mũi tên khóa hướng thay vì xoay quanh. Xem [Suy luận và bắt điểm](topic:inference#lock-a-direction).

## Trên bàn di chuột

Cách dễ nhất: mở {{ui:Settings}} ({{key:Mod+,}}), thẻ {{ui:ModelCraft}}, và đặt Cuộn thành **Bàn di chuột** (hoặc để "Tự xác định"). Khi đó vuốt hai ngón để xoay quanh, giữ {{key:Shift}} và vuốt để di chuyển khung nhìn, và chụm để thu phóng — không cần nút camera. Xem [Cài đặt ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Với Cuộn đặt thành **Bánh xe chuột**:

:::mac
- **Thu phóng:** cuộn bằng hai ngón, hoặc chụm. Cả hai đều thu phóng về phía con trỏ.
- **Di chuyển khung nhìn:** nhấn bằng hai ngón (nhấp phụ) và giữ ngón tay xuống khi kéo. Nếu nhấp bằng hai ngón không có tác dụng, bật "Nhấp phụ" trong **Cài đặt hệ thống**, rồi **Bàn di chuột**.
- **Xoay quanh:** nhấn {{key:O}} và kéo bằng một ngón, hoặc dùng phím mũi tên.
- Giữ {{key:Ctrl}} khi nhấp có thể không được tính là nhấp chuột phải trong ModelCraft, tùy trình duyệt: nó có thể hoạt động như một cú nhấp với {{key:Ctrl}} đang giữ. Hãy dùng nhấn bằng hai ngón để di chuyển khung nhìn.
:::

:::windows linux
- **Thu phóng:** cuộn bằng hai ngón. Chụm cũng thu phóng ở nơi trình điều khiển bàn di chuột gửi nó như một cuộn với {{key:Ctrl}}.
- **Di chuyển khung nhìn:** kéo bằng nút phải (trên nhiều bàn di chuột, nhấn góc dưới bên phải và kéo), hoặc nhấn {{key:H}} và kéo.
- **Xoay quanh:** nhấn {{key:O}} và kéo, hoặc dùng phím mũi tên.
:::

Với Bánh xe chuột, cuộn bằng hai ngón sẽ thu phóng; nó không di chuyển khung nhìn. Điều này ngược với nhiều trang web, và đó là cách bánh xe chuột hoạt động trong hầu hết các phần mềm mô hình hóa 3D.

:::tip
{{key:Space}} chọn công cụ {{ui:Select}} trong ModelCraft. Giữ {{key:Space}} và kéo sẽ không di chuyển khung nhìn, khác với một số ứng dụng khác.
:::

## Trên màn hình cảm ứng

:::touch
- **Một ngón** dùng công cụ hiện tại: **chạm** để nhấp, **nhấn và kéo** để vẽ hoặc kéo.
- Trong khi ngón của công cụ vẽ đang chạm, một **kính lúp** phía trên nó cho thấy những gì nằm dưới ngón, để bạn thấy điểm cuối, trung điểm hoặc cạnh mà nó bắt vào trước khi nhấc tay.
- **Giữ yên** nửa giây để hoàn tất việc công cụ đang làm, như {{key:Enter}} sẽ làm: một đường cong, một chuỗi đường thẳng. Khi không có gì đang diễn ra, giữ yên rồi kéo cùng ngón đó sẽ **xoay quanh** cho đến khi bạn nhấc tay.
- **Hai ngón** kéo cùng lúc để **di chuyển khung nhìn**; **chụm** để thu phóng. Cả hai hoạt động trong một cử chỉ.
- **Ba ngón** kéo cùng lúc để **xoay quanh**.
- Để đổi chúng (hai ngón xoay quanh, ba ngón di chuyển), mở {{ui:Settings}}, thẻ {{ui:ModelCraft}}, Màn hình cảm ứng.
- Đặt ngón thứ hai xuống sẽ **hủy** những gì ngón đầu tiên đã bắt đầu (một hình chữ nhật đang vẽ dở, một đẩy/kéo đang tiến hành). Nhấc các ngón và bắt đầu lại.
- Một thanh nhỏ ở dưới khung nhìn có **Xong** ({{key:Enter}}), **Hủy** ({{key:Esc}}) và **Hoàn tác**, dùng khi không có bàn phím.
- Bắt điểm và chọn xa hơn một chút so với chuột, và các nút lớn hơn, nên ngón tay có thể chạm trúng.
:::

:::mouse
Trên màn hình cảm ứng, một ngón dùng công cụ hiện tại (chạm để nhấp, giữ yên để hoàn tất, hoặc giữ yên rồi kéo để xoay quanh), hai ngón di chuyển khung nhìn và chụm để thu phóng, ba ngón xoay quanh, và một thanh nhỏ cung cấp Xong, Hủy và Hoàn tác.
:::

## Khung nhìn tiêu chuẩn

1. Nhấp {{ui:Views}} ở đầu bên phải thanh công cụ.
2. Chọn {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Right}}, {{ui:Back}}, {{ui:Left}} hoặc {{ui:Bottom}}.

Khung nhìn xoay đến hướng đó và vừa khít toàn bộ mô hình. {{ui:Front}} nhìn về phía bắc, dọc trục xanh lá; {{ui:Top}} nhìn thẳng xuống với phía bắc hướng lên.

Khối xem ở góc trên bên phải khung nhìn làm điều tương tự chỉ với một nhấp, cộng thêm các cạnh và góc, một vòng la bàn để xoay mô hình và một nút trang chủ. Xem [Khối xem](topic:view-cube).

## Phối cảnh và chiếu song song

Chọn {{ui:Views}}, rồi {{ui:Perspective}}. Dấu tích cho biết phối cảnh đang bật. Khi tắt, khung nhìn là phép chiếu song song (trực giao): các đường song song trong mô hình vẫn song song trên màn hình, điều bạn muốn với hình chiếu đứng từ {{ui:Front}} hoặc {{ui:Right}}. Thanh trạng thái hiển thị "Phối cảnh." hoặc "Phép chiếu song song."

Mỗi cảnh ghi nhớ nó có đang ở phối cảnh hay không. Xem [Lưu khung nhìn thành cảnh](topic:scenes).
