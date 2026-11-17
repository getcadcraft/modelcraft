---
title: Hoạt họa mọi thuộc tính, tạo hình bằng đường cong và trộn clip
summary: Không gian làm việc Hoạt họa đặt khóa cho vị trí, góc xoay và kích thước của đối tượng, độ sáng, độ loe và màu của đèn, ống kính và khóa hình dạng của lưới; bộ xương uốn lưới bằng xương và trọng số đã vẽ; IK và ràng buộc khiến xương và đối tượng với tới, nhìn vào, sao chép, giữ trong giới hạn, treo từ hoặc đi theo đối tượng khác; vật rắn rơi, chồng lên nhau và va chạm rồi được bake thành khóa; bộ điều khiển đặt giá trị từ các giá trị khác; chế độ Đường cong của dòng thời gian tạo hình từng thay đổi bằng tay nắm Bézier và lặp lại, còn chế độ Clip lưu hoạt ảnh thành hành động để đặt lại và trộn.
keywords: vật lý, vật rắn, mô phỏng, rơi, trọng lực, va chạm, chồng, nảy, ma sát, bake, ik, động học ngược, ràng buộc, nhìn vào, theo dõi, sao chép vị trí, sao chép xoay, giới hạn xoay, giới hạn, con của, cha, đi theo đường dẫn, đường dẫn, cực, fabrik, chuỗi, bộ xương, rig, rigging, xương, khung xương, da, skinning, trọng số, vẽ trọng số, nhóm đỉnh, trọng số tự động, bone heat, tạo dáng, chế độ tạo dáng, dual quaternion, linear blend, khóa hình dạng, morph, biến dạng, khuôn mặt, biểu cảm, bộ điều khiển, driver, biểu thức, không gian làm việc hoạt họa, hoạt họa, hoạt ảnh, khóa, keyframe, thuộc tính, biến đổi, vị trí, xoay, tỷ lệ, đèn, độ sáng, màu, ống kính, góc nhìn, trình chỉnh sửa đồ thị, đường cong, bezier, tay nắm, tiếp tuyến, nội suy, chu kỳ, lặp, vòng lặp, qua lại, bù, bảng khóa, chọn khóa, chọn hộp, sao chép khóa, dán khóa, kéo giãn khóa, co giãn khóa, clip, hành động, nla, trộn, pha trộn, mức ảnh hưởng, stash
from: 16d8e12f
---

[Dòng thời gian](topic:animation) di chuyển camera cùng các nhóm và cấu kiện. Không gian làm việc **Hoạt họa** đặt khóa được nhiều hơn thế, còn dòng thời gian có thêm hai chế độ để tạo hình và tái sử dụng những gì bạn đã đặt khóa.

## Mở

Chọn {{ui:Animate}} trong danh sách không gian làm việc trên thanh công cụ. Dòng thời gian mở ra bên dưới khung nhìn, thanh công cụ hiển thị các nhóm của Hoạt họa ({{ui:Keys}}, {{ui:Play}}, {{ui:Timeline}}), và bảng bên phải liệt kê những gì bạn có thể đặt khóa tại đầu phát.

## Đặt khóa cho một thuộc tính

Bảng liệt kê, tại đầu phát:

- **Đối tượng đã chọn**: {{ui:Place}}, {{ui:Turn (°)}} và {{ui:Size}}, mỗi mục ba số. Nhập một số rồi nhấn {{key:Enter}}: giá trị được đặt khóa tại đầu phát và đối tượng di chuyển đến đó. Hình thoi bên cạnh một dòng đặt khóa cho giá trị hiện tại; hình thoi được tô đặc nghĩa là đã có khóa tại đầu phát.
- **Đèn**: {{ui:Brightness (lm)}}, {{ui:Spread (°)}} (đèn chiếu điểm) và {{ui:Colour}} của mỗi đèn.
- **Camera**: {{ui:Lens angle (°)}}, dùng để thu phóng trong lúc camera di chuyển.

{{ui:Key transform}} (hoặc {{key:I}}) đặt khóa cho vị trí, góc xoay và kích thước của mọi nhóm hoặc cấu kiện đã chọn cùng lúc; {{ui:Key camera}} (hoặc {{key:K}}) đặt khóa cho camera. Khi bật {{ui:Auto key}}, nhóm có vị trí, góc xoay và kích thước được đặt khóa theo cách này sẽ nhận thêm một khóa mới mỗi khi bạn di chuyển nó.

Góc xoay gồm ba góc, quanh trục X, rồi Y, rồi Z. Góc xoay đặt khóa vượt quá 180° vẫn tiếp tục theo cùng chiều (190° vẫn là 190°, không phải −170°), nhờ đó một bánh xe có thể quay nhiều vòng.

:::tip
Nhóm được đặt khóa bằng {{ui:Key selected}} trên dòng thời gian sẽ có các khóa vị trí toàn phần. Nút đường cong trên dòng của nhóm sẽ chuyển chúng thành đường cong vị trí, góc xoay và kích thước (cùng một vị trí tại mọi khóa) để bạn tạo hình trong {{ui:Curves}}.
:::

## Khóa hình dạng (morph)

**Khóa hình dạng** là một hình khác của cùng một [lưới](topic:meshes): nụ cười trên khuôn mặt, chỗ phình của cánh cửa, một chiếc lá bị uốn. Thanh trượt của nó pha trộn từ lưới như hiện có (0) đến hình dạng đó (1); nhiều khóa cộng dồn lại với nhau.

1. Chọn một lưới trong không gian làm việc Hoạt họa: bảng hiển thị {{ui:Shape keys}} của nó.
2. Nhấp {{ui:Add shape key}}. ModelCraft chuyển sang [không gian làm việc Lưới](topic:mesh-edit) với khóa mới đang được chỉnh sửa: di chuyển điểm, đùn, điêu khắc — biến lưới thành hình dạng bạn muốn.
3. Quay lại {{ui:Animate}} và nhấp {{ui:Done}}. Lưới trở về như cũ, còn khóa giữ thay đổi của bạn.

Sau đó kéo thanh trượt của khóa (hoặc nhập một giá trị) để pha trộn nó. Hình thoi đặt khóa giá trị tại đầu phát, nên một khóa có thể lớn dần và mờ đi theo thời gian; khi đã có một dải khóa, giá trị mới được đặt khóa tại đầu phát. Bút chì chỉnh sửa lại hình dạng của khóa (lưới hiển thị đầy đủ hình dạng cho đến khi nhấp {{ui:Done}}; {{ui:Cancel}} giữ khóa như cũ), con mắt tắt khóa, thùng rác xóa khóa.

Đỉnh bạn thêm khi chỉnh sửa một khóa thuộc về chính lưới: nó giữ nguyên vị trí bạn đặt, trong mọi hình dạng.

:::note
Khóa hình dạng làm lưới thay đổi trước [bộ sửa đổi](topic:modifiers) của nó: bộ sửa đổi Chia nhỏ làm mượt hình dạng đã pha trộn. Ảnh và video kết xuất hiển thị các khóa ở từng khung hình.
:::

## Bộ xương: xương uốn lưới

**Bộ xương** là một tập hợp xương nằm bên trong một [lưới](topic:meshes). Tạo dáng cho xương, lưới sẽ đi theo, mỗi điểm theo đúng mức mà **trọng số** của nó quy định.

1. Chọn lưới trong không gian làm việc Hoạt họa rồi nhấp {{ui:Add an armature}} trong bảng (hoặc {{ui:Add bone}} trong nhóm {{ui:Rig}}): xương đầu tiên chạy từ chân lưới lên giữa lưới.
2. Khi đã chọn một xương, {{ui:Add a child bone}} thêm xương kế tiếp từ đầu mút của nó. Đặt {{ui:Head}}, {{ui:Tip}}, {{ui:Roll (°)}} và {{ui:Hangs from}} của bất kỳ xương nào trong bảng; xương treo từ xương khác sẽ di chuyển cùng nó. Bỏ chọn {{ui:Moves the mesh}} cho xương chỉ dùng để điều khiển xương khác.
3. Nhấp {{ui:Automatic weights}}: mỗi xương giữ các điểm gần nó nhất, và phần giữ lan đều trên lưới, nên các điểm nằm giữa hai xương dùng chung. {{ui:Nearest bones only}} là cách chia nhanh hơn, cứng hơn.

**Tạo dáng** cho xương bằng {{ui:Pose}} ({{key:P}}): nhấp một xương để chọn, kéo để xoay nó quanh trục của khung nhìn, giữ {{key:Shift}} và kéo để di chuyển nó. Hoặc nhập {{ui:Place}}, {{ui:Turn (°)}} và {{ui:Size}} trong {{ui:Pose}}; góc xoay tính theo trục riêng của xương, từ vị trí nghỉ của nó. Hình thoi và {{ui:Key the whole pose}} đặt khóa cho dáng tại đầu phát; khi một xương đã có khóa, việc tạo dáng cho nó sẽ đặt khóa tại đó. {{ui:Reset this bone}} và {{ui:Reset the pose}} đưa xương về trạng thái nghỉ.

**Vẽ trọng số** ({{key:W}}) cho xương đã chọn: lưới hiển thị ở trạng thái nghỉ, mỗi mặt được tô theo mức xương đó giữ nó — đỏ là giữ hết, xanh là không giữ. Vẽ để thêm sự giữ ({{key:Mod}} để bớt, {{key:Shift}} để làm mượt); {{ui:Size (px)}} và {{ui:Strength}} đặt cỡ và độ mạnh của cọ. Với {{ui:Keep each point's weights adding up to 1}}, khi bạn cho một xương nhiều hơn thì các xương khác sẽ giảm đi tương ứng. Mỗi nét vẽ là một bước hoàn tác của mô hình.

{{ui:Skin}} chọn cách một điểm nằm giữa các xương di chuyển: {{ui:Linear (fast)}} pha trộn chuyển động của các xương và làm hơi co lại khớp đang gập; {{ui:Dual quaternion (keeps volume at joints)}} thay vào đó xoay điểm quanh khớp, nên khuỷu tay hay đầu gối giữ được độ dày (khi đó {{ui:Size}} của xương không làm da bị kéo giãn).

:::note
Khóa hình dạng được tính trước, rồi đến bộ xương, rồi đến [bộ sửa đổi](topic:modifiers). Khung nhìn, ảnh và video đều hiển thị lưới đã tạo dáng; trọng số của lưới được lưu cùng lưới, còn xương và dáng của chúng được lưu cùng hoạt ảnh.
:::

## IK và ràng buộc

**Ràng buộc** làm xương hoặc đối tượng chuyển động theo một quy tắc, sau các khóa của nó. Chọn đối tượng (hoặc, trong bộ xương, chọn xương) rồi thêm một ràng buộc trong {{ui:Ràng buộc của …}}; nhiều ràng buộc chạy theo thứ tự liệt kê (các mũi tên đổi thứ tự), và mỗi ràng buộc có {{ui:How much}} (từ 0 đến 1, đặt khóa bằng hình thoi như mọi thuộc tính) cùng một công tắc bật/tắt.

| Ràng buộc | Dùng cho | Tác dụng |
|---|---|---|
| {{ui:Reach (IK)}} | Xương | Xương và các xương mà nó treo từ ({{ui:Bones in the chain}}) gập lại để đầu của nó với tới mục tiêu. Với hai xương và một {{ui:Pole (the bend points to it)}}, khuỷu tay hay đầu gối hướng về cực; chuỗi dài hơn gập mượt. Ngoài tầm với, chuỗi hướng thẳng về mục tiêu. |
| {{ui:Look at}} | Cả hai | Xoay sao cho {{ui:Axis that points}} hướng vào mục tiêu, đồng thời giữ {{ui:Axis kept up}} gần hướng lên nhất có thể. |
| {{ui:Copy transforms}} | Cả hai | Lấy vị trí, góc xoay hoặc kích thước của mục tiêu — những mục được đánh dấu. |
| {{ui:Limits}} | Cả hai | Giữ vị trí, góc xoay (độ) hoặc kích thước của chính nó trong khoảng {{ui:min}} đến {{ui:max}} cho từng trục; để trống một cặp để trục đó tự do. |
| {{ui:Child of}} | Cả hai | Di chuyển cùng mục tiêu như thể nó treo từ mục tiêu, tính từ vị trí của cả hai khi bạn chọn mục tiêu. |
| {{ui:Follow path}} | Đối tượng | Nằm trên một [đối tượng đường cong](topic:curves) tại {{ui:Along the curve}} (0 là điểm đầu, 1 là điểm cuối; đặt khóa để nó chạy dọc theo), và với {{ui:Turn along the curve}} thì quay theo đường cong. |

Mục tiêu có thể là một đối tượng khác trong nhóm đang mở, một xương của cùng bộ xương, hoặc {{ui:A point}} mà bạn nhập (điểm của đối tượng tính theo tọa độ của mô hình, điểm của xương tính theo tọa độ của lưới của nó). Với chân IK, đặt mục tiêu ở vị trí bàn chân nên đến và đặt khóa cho mục tiêu, hoặc đặt khóa cho {{ui:How much}} để chuyển chân từ khóa này sang khóa kia giữa IK và các khóa khác.

:::tip
Đối tượng nhìn vào một đối tượng đang đi theo đường dẫn sẽ thấy nó đúng trên đường dẫn: ModelCraft tính các mục tiêu trước, bất kể thứ tự của các đối tượng.
:::

## Vật lý: rơi, chồng và va chạm

Cho đối tượng rơi và va vào nhau, rồi giữ kết quả dưới dạng khóa.

1. Chọn một nhóm, cấu kiện hoặc lưới và đặt {{ui:Rigid body}} của nó trong {{ui:Physics}}: {{ui:Falls and collides}} (đối tượng di chuyển) hoặc {{ui:Stays put, gets in the way}} (một cái bàn, một bức tường, một cái dốc). Với một vật rơi, đặt {{ui:Shape}} của nó là {{ui:Box (its bounds)}} hoặc {{ui:Ball (round its bounds)}}, cùng {{ui:Mass (kg)}}, {{ui:Friction}} và {{ui:Bounce}} (0 là đập xuống không nảy, 1 là nảy lên cao bằng độ cao cũ).
2. Trong {{ui:The whole model}}, đặt {{ui:From (s)}} và {{ui:To (s)}}, {{ui:Gravity (m/s², down)}}, và có hay không {{ui:A ground to land on}} (cùng độ cao của nó).
3. Nhấp {{ui:Bake physics}} (trong bảng hoặc nhóm {{ui:Physics}}). Mỗi đối tượng rơi nhận một khóa vị trí, góc xoay và kích thước tại mỗi khung hình giữa hai thời điểm; phát nó như mọi hoạt họa khác.

Bake lại sẽ thay các khóa đó; {{ui:Remove baked keys}} gỡ chúng đi. Các đối tượng bắt đầu ở trạng thái nghỉ, nơi các khóa, đường cong và ràng buộc của chúng đặt chúng tại {{ui:From (s)}} (chuyển động đã đặt khóa trước đó không tiếp tục sang lúc rơi). {{ui:Steps a frame}} lớn hơn giúp chồng cao ổn định hơn; thanh trạng thái cho biết nếu có thứ gì vẫn còn chuyển động ở cuối.

:::note
Hình dạng là hộp và quả cầu quanh khung bao của từng đối tượng; một hộp chạm bằng các góc, trung điểm cạnh và trung điểm mặt, nên các hộp chồng lên nhau và đổ như bạn mong đợi. Vải, chất lỏng, khớp nối giữa các đối tượng và hình dạng chính xác chưa được xây dựng.
:::

## Bộ điều khiển

**Bộ điều khiển** đặt giá trị cho khóa hình dạng từ các thứ khác thay vì nhập bằng tay: mở bộ điều khiển của một khóa (nút máy tính), viết một **biểu thức**, rồi gán cho từng tên trong đó thứ nó đọc ({{ui:Reads}}): thời gian tính bằng giây, khung hình, vị trí, góc xoay hoặc kích thước của một đối tượng theo X, Y hoặc Z, độ sáng của một đèn, hoặc một khóa hình dạng khác. Ví dụ, khi `v` đọc góc xoay của một cánh cửa quanh Z, `clamp(v / 90, 0, 1)` mở dần một hình dạng khi cửa mở.

Biểu thức dùng số, tên, `+ - * / % ^` và dấu ngoặc, cùng các hàm `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` với `pi` và `e`. Lỗi sẽ được chỉ ra và không thay đổi gì. Thanh trượt của khóa được điều khiển hiển thị giá trị của bộ điều khiển; bộ điều khiển được ưu tiên hơn dải khóa cho đến khi bạn gỡ nó.

## Chọn và thay đổi khóa (chế độ Khóa)

{{ui:Keys}} hiển thị một hàng cho mỗi dải: camera, mỗi nhóm đang chuyển động, và mỗi thuộc tính ("Lamp 2 · Brightness (lm)"; khóa thuộc tính có hình tròn).

- Nhấp một khóa để chọn; {{key:Shift}}-nhấp hoặc {{key:Mod}}-nhấp để thêm hoặc bớt khóa khỏi vùng chọn. Kéo với {{key:Shift}} qua các hàng để vẽ một hộp chọn mọi khóa trong đó.
- Kéo một khóa đã chọn để di chuyển tất cả; {{key:Left}} / {{key:Right}} di chuyển một khung hình ({{key:Shift}}: mười khung hình).
- {{key:Mod+C}} sao chép các khóa đã chọn, {{key:Mod+V}} dán chúng từ đầu phát lên cùng các dải (một thẻ ModelCraft khác cũng có thể dán chúng).
- {{ui:Stretch}} trải các khóa đã chọn ra xa đầu phát theo số bên cạnh (2 là xa gấp đôi; 0.5 là kéo lại gần).
- Danh sách độ mượt đặt cách mọi khóa đã chọn chuyển động sang khóa kế tiếp.

## Tạo hình đường cong (chế độ Đường cong)

{{ui:Curves}} là đồ thị của từng số theo thời gian: thời gian theo chiều ngang, giá trị theo chiều dọc. Đánh dấu các đường cong cần hiển thị trong danh sách bên trái (X, Y và Z lần lượt là đỏ, xanh lá và xanh dương).

- Nhấp một khóa (một hình vuông) để chọn, {{key:Shift}}-nhấp để chọn thêm, hoặc kéo một hộp. Kéo một khóa đã chọn để đổi thời gian và giá trị của nó; khi chọn nhiều khóa, kéo sẽ di chuyển chúng dọc theo thời gian.
- Khóa đã chọn hiển thị hai **tay nắm**. Kéo một tay nắm để tạo hình đường cong ở phía đó. {{ui:Handles}} cho biết chúng hoạt động thế nào: {{ui:Automatic}} (một đường cong mượt đi qua các khóa xung quanh), {{ui:Pointing at the next key}}, {{ui:Aligned}} (hai tay nắm nằm trên một đường thẳng, nên đường cong không có góc gập) hoặc {{ui:Free}}.
- {{ui:From the chosen keys}} đặt cách mỗi khóa đã chọn chuyển sang khóa kế tiếp: {{ui:Curve (handles)}}, {{ui:Smooth}}, {{ui:Steady}}, {{ui:Slow in and out}} hoặc {{ui:Hold}}.
- {{ui:Before}} và {{ui:After}} đặt cách đường cong hoạt động bên ngoài các khóa của nó: {{ui:Hold}} (giữ giá trị đầu hoặc cuối), {{ui:Repeat}}, {{ui:Back and forth}}, hoặc {{ui:Repeat and carry on}} (mỗi lần lặp bắt đầu tại chỗ lần trước kết thúc: bánh xe tiếp tục lăn, người đi bộ tiếp tục bước).
- Bánh xe chuột thu phóng ({{key:Mod}}: chỉ giá trị; {{key:Shift}}: chỉ thời gian); kéo bằng nút giữa hoặc giữ {{key:Alt}} để di chuyển khung nhìn; {{ui:Show all}} hoặc {{key:Home}} vừa khít mọi đường cong đang hiển thị. Nhấp vào khoảng trống để đưa đầu phát đến đó. {{key:Delete}} xóa các khóa đã chọn.

Các tay nắm không được cắt chéo nhau theo thời gian, nên một đường cong không bao giờ chạy ngược.

## Tái sử dụng hoạt ảnh (chế độ Clip)

**Clip** phát một hoạt ảnh đã lưu (một **hành động**) trên dòng thời gian. Các clip được trộn theo thứ tự, các hàng thấp hơn đè lên các hàng cao hơn; các dải của chính dòng thời gian nằm trên mọi clip.

1. Đặt khóa cho các nhóm và đèn như thường lệ, rồi nhấp {{ui:Make a clip}} trong {{ui:Clips}} và đặt tên cho hành động. Các dải trở thành hành động, và một clip phát nó tại chỗ chúng đã nằm (camera vẫn ở trên dòng thời gian).
2. Để dùng lại, chọn hành động rồi nhấp {{ui:Add clip}}: một clip mới bắt đầu tại đầu phát.
3. Kéo một clip dọc hàng để di chuyển nó; nhấp vào clip để đặt {{ui:Start (s)}}, {{ui:Speed}} (2 là nhanh gấp đôi), {{ui:Repeats}}, {{ui:How much}} (0 đến 1), {{ui:Mix}} ({{ui:Replace}}, hoặc {{ui:Add on top}} lên các clip trước nó), {{ui:Outside the clip}} (không gì, giữ cuối clip, hoặc giữ cả hai đầu) và {{ui:Mute}}. Các mũi tên đổi thứ tự; thùng rác xóa clip (một hành động không còn clip nào dùng sẽ bị xóa theo).

Clip có {{ui:How much}} nhỏ hơn mức tối đa sẽ pha trộn với những gì nằm bên dưới nó: clip trước nó, hoặc đèn hay vị trí như đang có khi không có hoạt ảnh.

## Thành phần nào chạy ở đâu

| Thành phần | Trong khung nhìn | Trong video kết xuất |
|---|---|---|
| Khóa camera, góc ống kính khi có khóa camera | Có | Có |
| Vị trí, góc xoay và kích thước (khóa, đường cong, clip) | Có | Có |
| Độ sáng, độ loe và màu của đèn | Có | Chưa: video dùng đèn như chúng đang có khi bắt đầu (xem [những gì chưa xây dựng](topic:not-built-yet)) |
| Góc ống kính khi không có khóa camera | Có | Chưa: hãy đặt khóa cho camera luôn |
| Khóa hình dạng và bộ điều khiển | Có | Có |
| Bộ xương (lưới đã tạo dáng) | Có | Có |
| IK và ràng buộc | Có | Có |
| Vật lý đã bake (khóa) | Có | Có |

Mọi thứ được lưu trong tệp `.modelcraft` cùng phần còn lại của hoạt ảnh, và {{ui:Undo}} cùng {{ui:Redo}} của dòng thời gian hoàn tác bất kỳ thay đổi nào trong số đó.
