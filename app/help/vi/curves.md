---
title: Đối tượng đường cong
summary: Vẽ đường cong Bézier, NURBS và đường cong đoạn thẳng, đặt cho chúng độ dày, độ rộng hoặc độ thu hẹp, tô các đường cong phẳng, đặt văn bản làm đường cong, và chuyển chúng thành lưới.
keywords: đường cong, bezier, nurbs, spline, đường dẫn, ống, đường ống, cáp, dây thừng, vát mép, đùn, thu hẹp, nghiêng, bán kính, tô, mặt cắt, văn bản, chữ, logo, đường cong thành lưới
from: 602bf077
---

Một **đối tượng đường cong** là một đường cong tạo thành hình: một ống dọc theo nó (vát mép), một dải (đùn), một sừng thu hẹp dần (thu hẹp), hoặc — khi nó phẳng và khép kín — một tấm đặc hoặc các chữ cái. Hình theo đường cong: di chuyển một điểm và ống di chuyển theo. Khi hình đã đúng, hãy chuyển nó thành lưới.

## Thêm đường cong

Chọn {{ui:Curve}} trong danh sách Không gian làm việc và nhấn {{ui:Add}}:

| Loại | Đó là gì |
| --- | --- |
| Đường cong Bézier, Vòng tròn Bézier | Đi qua các điểm của nó; mỗi điểm có hai tay nắm đặt hướng của đường cong |
| Đường cong NURBS, Vòng tròn NURBS, Path | Mượt, được vẽ hướng về các điểm (bắt đầu và kết thúc tại các điểm cuối); mỗi điểm có một trọng số |
| Text | Văn bản của bạn dưới dạng các đường viền chữ phẳng, được tô |

Một đường cong mới có một ống mỏng để có thể nhìn thấy và chọn được; đặt độ sâu vát mép về 0 để có một đường cong trần.

Bạn cũng có thể bắt đầu từ thứ đã vẽ: chọn một cung, một vòng tròn, một đa giác hoặc một đường cong đã vẽ trong không gian làm việc Mô hình, rồi nhấn {{ui:Make a curve object}} trong Entity info. Các đường đã vẽ vẫn còn nguyên.

## Chỉnh sửa các điểm

Nhấp đúp vào một đối tượng đường cong (hoặc chọn nó và chọn {{ui:Curve}}) để chỉnh sửa.

- Nhấp vào một điểm hoặc tay nắm (Shift để thêm hoặc bớt); kéo để di chuyển nó. Kéo trên khoảng trống để chọn bằng một hộp.
- {{ui:Extend}} ({{key:E}}, hoặc {{key:Ctrl}}+nhấp) thêm một điểm sau đầu mút đã chọn, tại con trỏ.
- {{ui:Subdivide}} ({{key:W}}) đặt một điểm giữa mỗi cặp láng giềng đã chọn; một Bézier giữ nguyên hình dạng của nó.
- {{ui:Move}}, {{ui:Turn}}, {{ui:Scale}} di chuyển các điểm đã chọn theo con trỏ (phím của kiểu modeler là {{key:G}} {{key:R}} {{key:S}}, phím đẩy/kéo là {{key:M}} {{key:Q}} {{key:S}}); nhấp để giữ lại, {{key:Esc}} để hủy.
- {{ui:Close}} ({{key:C}}) khép một spline mở hoặc mở một spline khép kín; {{ui:Reverse}} ({{key:Shift+R}}) chạy nó theo chiều ngược lại.
- Tay nắm Bézier: {{ui:Smooth}} ({{key:V}}) đặt chúng cho một đường cong mượt, {{ui:Corner}} ({{key:Shift+V}}) hướng chúng về các láng giềng, {{ui:Free}} ({{key:Alt+V}}) để chúng nằm nơi bạn đặt. Kéo một tay nắm sẽ làm nó thành tự do.
- {{ui:Bézier}}, {{ui:NURBS}} và {{ui:Poly}} đổi loại của các spline đã chọn, giữ nguyên các điểm.

Mỗi thay đổi là một bước hoàn tác.

## Hình dạng

Các cài đặt nằm trong bảng (và trong Entity info ở không gian làm việc Mô hình):

- **Shape:** đường cong 3D đi theo mọi hướng; một đường cong phẳng nằm trong mặt phẳng riêng và có thể được tô.
- **Fill closed splines** (phẳng): các đường viền trở thành một tấm; một đường viền nằm trong một đường viền khác là một lỗ, nên các chữ giữ được lỗ của mình.
- **Extrude:** bằng một nửa độ rộng của dải (đường cong mở hoặc 3D), hoặc một nửa độ dày của tấm (đã tô).
- **Bevel depth** và **roundness:** một ống tròn dọc theo đường cong (với đùn: một dải bo tròn); trên một hình đã tô, một cạnh bo tròn.
- **Close the ends:** nắp ở hai đầu của một ống mở.
- **Taper along it:** co giãn đều dọc theo mỗi spline, chẳng hạn `1, 0.2` cho một sừng, `0, 1, 0` cho một thoi.
- **Smoothness** và, với NURBS, **order**: đường cong được vẽ mịn đến đâu, và mượt đến đâu (2 là thẳng … 6 là mượt nhất).
- Khi có các điểm được chọn: **radius** (độ dày của ống tại đó, nhân với vát mép), **tilt** (xoay dải quanh đường cong) và, với NURBS, **weight**.

Các bộ sửa đổi hoạt động trên một đối tượng đường cong như trên một lưới: Array dọc theo nó, Mirror, Subdivision surface. Xem [Bộ sửa đổi trên lưới](topic:modifiers).

## Chuyển thành lưới

{{ui:To mesh}} (trong không gian làm việc Đường cong hoặc trong Entity info, {{ui:Curve to mesh}}) biến đối tượng đường cong thành lưới mà nó đang hiển thị; các bộ sửa đổi của nó vẫn nằm trên. Sau đó chỉnh sửa trong không gian làm việc Lưới. Hoàn tác sẽ đổi nó trở lại.

Xem thêm [Lưới](topic:meshes) và [Chỉnh sửa lưới](topic:mesh-edit).
