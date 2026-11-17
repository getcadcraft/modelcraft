---
title: Vẽ mặt với đường thẳng, hình chữ nhật, vòng tròn và cung tròn
summary: Tạo mặt phẳng trên nền hoặc trên các mặt khác, chia chúng bằng đường thẳng, và vẽ vòng tròn và đa giác với số cạnh bạn muốn.
keywords: vẽ, đường thẳng, hình chữ nhật, vòng tròn, đa giác, dời song song, viền, khung, biên, cung tròn, đường cong, spline, mượt, cáp, đường dẫn, phình, bán kính, mặt, mặt bằng, dấu chân, chia, cạnh, đường viền, bút chì
from: b6d7b7dd
---

Mọi thứ trong ModelCraft đều bắt đầu từ một **mặt** phẳng: một bề mặt được khép kín bởi các cạnh. Bạn có thể vẽ trực tiếp một mặt bằng {{ui:Hình chữ nhật}}, {{ui:Vòng tròn}} hoặc {{ui:Đa giác}}, hoặc phác từng cạnh một bằng {{ui:Đường thẳng}}. Mặt là thứ mà [Đẩy/kéo](topic:push-pull) biến thành khối đặc.

## Vẽ hình chữ nhật

1. Nhấn {{key:R}}.
2. Nhấp góc thứ nhất: trên nền, hoặc trên bất kỳ mặt nào của mô hình.
3. Di chuyển con trỏ. Hình chữ nhật nằm trên nền (hoặc trên mặt bạn bắt đầu vẽ), và ô giá trị ({{ui:Kích thước}}) hiển thị chiều rộng và chiều sâu. Mẹo hiển thị "Hình vuông" khi các cạnh bằng nhau.

   Để vẽ trên một mặt phẳng khác, hãy trỏ vào nó: một mặt đi qua góc thứ nhất sẽ đặt hình chữ nhật lên mặt đó; và khi bắt vào một điểm nằm ngoài mặt phẳng (một điểm cuối, một cạnh, trục xanh dương), hình chữ nhật sẽ đứng thẳng qua cả hai góc. Bắt lại vào một điểm trên mặt phẳng thứ nhất thì nó nằm xuống lại. Để giữ một mặt phẳng, nhấn một phím mũi tên: {{key:Up}} giữ hình chữ nhật nằm ngang (mặt phẳng xanh dương), {{key:Right}} trên mặt phẳng đỏ, {{key:Left}} trên mặt phẳng xanh lá. Nhấn lại cùng phím để mở khóa.
4. Nhấp góc đối diện, hoặc nhập hai kích thước cách nhau bằng dấu phẩy rồi nhấn {{key:Enter}}: `4m,3m`, `4000,3000` trong mô hình milimét, hoặc `12',10'6"` theo feet và inch.

   Một mặt xuất hiện với bốn cạnh bao quanh.

Các kích thước nhập vào đi theo hướng bạn đang trỏ: nếu con trỏ nằm bên trái góc thứ nhất khi bạn nhập, hình chữ nhật sẽ mở rộng sang trái.

:::warning
Dấu phẩy phân tách hai kích thước, nên nó không thể là dấu thập phân. Hãy nhập `2.5m,3m`, không bao giờ nhập `2,5m`.
:::

## Vẽ vòng tròn hoặc đa giác

1. Nhấn {{key:C}} để vẽ vòng tròn hoặc {{key:N}} để vẽ đa giác.
2. Để đổi số cạnh, nhập số đó trước khi nhấp: `12s` (hoặc chỉ `12`) rồi {{key:Enter}}. Vòng tròn bắt đầu với 24 cạnh và đa giác với 6 cạnh. Mẹo hiển thị số hiện tại, và ModelCraft giữ số đó cho vòng tròn tiếp theo cho đến khi bạn đổi hoặc chuyển sang công cụ khác.
3. Nhấp tâm, trên nền hoặc trên một mặt. Để đặt tâm lên một mặt, trỏ vào giữa mặt ("Tâm của mặt") hoặc vào giữa một trong các cạnh của nó ("Điểm giữa") với con trỏ nằm ngay bên trong mặt đó: vòng tròn được vẽ trên mặt đó, ngay cả trên đầu hẹp của một hộp dài.
4. Nhấp để đặt bán kính, hoặc nhập bán kính ({{ui:Bán kính}} trong ô giá trị) rồi nhấn {{key:Enter}}.

Một vòng tròn là một đa giác có nhiều cạnh. Khi bạn kéo một vòng tròn lên bằng Đẩy/kéo, các cạnh của nó được làm mềm để hình trụ hiển thị như một bề mặt trơn liền.

## Vẽ cung tròn

1. Nhấn {{key:A}} ({{ui:Cung tròn}}).
2. Nhấp nơi cung tròn bắt đầu, rồi nhấp nơi nó kết thúc (hoặc nhập độ dài giữa hai điểm đó).
3. Di chuyển con trỏ để làm cung tròn phình ra, rồi nhấp. Mẹo hiển thị "Nửa vòng tròn" khi độ phình bằng nửa khoảng cách giữa hai đầu. Hoặc nhập khoảng cách từ giữa cung đến đường nối hai đầu: `2` rồi {{key:Enter}}.

Để vẽ cung tròn quanh một điểm, dùng {{ui:Cung tròn theo tâm}}: nhấp tâm, rồi nhấp nơi cung bắt đầu (hoặc nhập bán kính), rồi nhấp nơi nó kết thúc (hoặc nhập góc theo độ, chẳng hạn `90`). Nó bắt theo các bước 15°.

Cung tròn bắt đầu trên một mặt sẽ được vẽ trên mặt đó; nếu không, nó nằm trên nền, hoặc đứng thẳng khi hai đầu nằm ở hai độ cao khác nhau. Cung tròn có 12 đoạn; nhập `24s` trong khi vẽ để có nhiều đoạn hơn. Cung tròn cũng khép mặt như đường thẳng: một cung tròn cắt ngang góc của hình chữ nhật sẽ chia nó.

## Vẽ đường cong mượt

{{ui:Đường cong}} vẽ một đường thẳng mượt đi qua mọi điểm bạn nhấp: một sợi cáp, đường đi của tay vịn, mép vườn. Nó có thể rời khỏi nền: các điểm bắt vào góc, cạnh và mặt ở bất kỳ đâu, và các phím mũi tên khóa màu đỏ, xanh lá hoặc xanh dương như với {{ui:Đường thẳng}}.

1. Nhấp {{ui:Đường cong}} trong nhóm {{ui:Vẽ}}.
2. Nhấp các điểm mà đường cong đi qua. Nhập `<0,0,1>` rồi {{key:Enter}} cho một điểm cao hơn điểm cuối 1, `[x,y,z]` cho một vị trí chính xác, hoặc một độ dài cho một điểm cách đó bằng khoảng đó theo hướng con trỏ.
3. Nhấn {{key:Enter}} hoặc nhấp đúp để kết thúc. Nhấp lại điểm đầu tiên để khép đường cong. {{key:Backspace}} lấy lại điểm cuối cùng.

Một đường cong được chọn như một khối. Để đổi nó, chọn nó rồi nhấp {{ui:Sửa điểm}} trong {{ui:Thông tin đối tượng}}: các điểm của nó hiện dưới dạng ô vuông. Nhấp một điểm, rồi nhấp nơi nó đi tới (hoặc nhập `<dx,dy,dz>`). {{key:Esc}} đưa một điểm về vị trí cũ và kết thúc việc sửa. Một đường cong phẳng khép kín tạo thành một mặt; một đường cong viền một mặt thì không thể sửa nữa.

## Dời song song: viền bên trong hoặc bên ngoài một mặt

{{ui:Dời song song}} sao chép đường viền của một mặt ra cách một khoảng nhất định về phía bên trong (hoặc bên ngoài), dùng cho khung, viền, bậu cửa hoặc tấm kính của màn hình.

1. Nhấn {{key:F}} rồi nhấp mặt, hoặc chọn mặt trước rồi nhấn {{key:F}}.
2. Di chuyển con trỏ vào trong mặt để có đường viền bên trong, hoặc ra ngoài để có đường viền bên ngoài. Đường viền mới đi theo, và mẹo cho biết khoảng cách.
3. Nhấp, hoặc nhập khoảng cách rồi nhấn {{key:Enter}}.

Mặt bị tách thành hai: mặt bên trong và khung bao quanh nó (hoặc một vòng mới bên ngoài). Bạn có thể đẩy hoặc kéo một trong hai ngay lập tức: ví dụ với một màn hình, vẽ hộp, đẩy nó đến độ dày mong muốn, dời song song mặt trước vào trong 30 mm, rồi đẩy mặt bên trong vào một chút để làm kính. Các lỗ trên mặt cũng được dời song song, và một cung tròn hay vòng tròn vẫn là một đường cong (nhỏ hơn hoặc lớn hơn).

- **Nhấp đúp** một mặt bằng {{ui:Dời song song}} để dời nó theo khoảng cách lần trước.
- **Cạnh:** chọn một chuỗi các cạnh nối liền nằm trên cùng một mặt phẳng (ví dụ hai đường thẳng của chữ L), nhấn {{key:F}}, di chuyển về phía bạn muốn rồi nhập khoảng cách: một bản sao song song sẽ được vẽ, với các góc cắt vát.
- Khi khoảng cách lớn hơn mức mặt cho phép, ModelCraft sẽ báo và không vẽ gì.

## Cung tròn, vòng tròn và đa giác là đường cong

Nhấp vào bất kỳ đoạn nào của cung tròn, vòng tròn hoặc đa giác và toàn bộ đường cong được chọn. {{ui:Thông tin đối tượng}} khi đó hiển thị bán kính, số đoạn, góc (đối với cung tròn) và độ dài của nó. Nhập một bán kính mới ở đó để đổi kích thước quanh tâm; các mặt vẽ trên cùng mặt phẳng sẽ đi theo. Khi mặt của một đường cong đã được đẩy hoặc kéo, bán kính của nó được giữ nguyên.

## Vẽ bằng đường thẳng

1. Nhấn {{key:L}}.
2. Nhấp nơi đường thẳng bắt đầu.
3. Nhấp nơi nó kết thúc, hoặc nhập một độ dài rồi nhấn {{key:Enter}}. Độ dài nhập vào đi theo hướng con trỏ chỉ.
4. Tiếp tục nhấp. Mỗi lần nhấp bắt đầu đường thẳng tiếp theo từ điểm cuối của đường trước.
5. Khép đường viền bằng cách nhấp lại điểm đầu tiên. Khi các đường thẳng khép thành một vòng phẳng, vòng đó được lấp đầy bằng một mặt và công cụ dừng nối tiếp. Nhấn {{key:Esc}} để dừng bất cứ lúc nào.

Đường thẳng bám theo các hướng đỏ, xanh lá và xanh dương khi bạn đến gần chúng; đường thẳng đổi sang màu đó và mẹo hiển thị "Trên trục đỏ". Xem [Suy luận và bắt điểm](topic:inference) để biết cách khóa một hướng và bắt vào các điểm.

### Đường thẳng đi đâu khi không chạm vào gì

- Đường thẳng bắt đầu trên một mặt sẽ nằm trong mặt phẳng của mặt đó.
- Đường thẳng bắt đầu trên nền, hoặc trong khoảng trống, sẽ nằm ngang với điểm bắt đầu. Nếu bạn nhìn mô hình theo hướng cạnh, nó sẽ đi trong mặt phẳng đứng hướng về bạn.
- Để vẽ đường thẳng đến một vị trí chính xác, nhập một điểm: `[x,y,z]` cho một điểm trong mô hình, hoặc `<dx,dy,dz>` cho một khoảng lệch so với điểm bắt đầu. Xem [Nhập kích thước chính xác](topic:value-box).

## Tách một mặt

Vẽ một đường thẳng ngang qua một mặt, từ cạnh này đến cạnh kia (hoặc từ cạnh đến cạnh qua các đường thẳng khác). Mặt được tách thành hai mặt. Mỗi mặt giữ phía và màu của nó. Điều tương tự áp dụng với hình chữ nhật hoặc vòng tròn vẽ trên một mặt: hình đó trở thành một mặt riêng nằm trong mặt lớn hơn, và mặt lớn hơn lúc này có một lỗ.

Đây là cách bạn bố trí các phòng trên sàn, một cửa sổ trên tường, hoặc một bậc trên cầu thang: vẽ đường viền trên mặt, rồi đẩy hoặc kéo mặt mới.

## Mặt quay sai hướng

Mọi mặt đều có mặt trước và mặt sau. Mặt sau hiển thị màu xám xanh. Các mặt vẽ trên nền quay lên trên; các mặt vẽ trên một mặt khác quay cùng hướng với mặt đó.

Nếu một mặt hiển thị mặt sau ở chỗ bạn mong đợi mặt trước, chọn nó rồi nhấp {{ui:Đảo ngược mặt}} trong {{ui:Thông tin đối tượng}}.

## Những gì bạn thấy khi vẽ

- Một điểm đánh dấu màu nơi con trỏ bắt vào, và tên của nó trong mẹo ở góc dưới bên trái.
- Bản xem trước của đường thẳng hoặc hình.
- Kích thước trực tiếp trong ô giá trị. Bạn có thể nhập đè lên bất cứ lúc nào.

## Nếu hình không nằm ở chỗ bạn mong đợi

- Trên màn hình cảm ứng, xem [Khắc phục sự cố](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Nếu một đường thẳng bắt vào thứ gì đó ở xa phía sau, hãy xoay một chút: các điểm bị một mặt che khuất thì không bao giờ bắt, nhưng các điểm trên cạnh của nó thì có.
- Nhấn {{key:Mod+Z}} để hoàn tác hình vừa vẽ; mỗi lần hoàn tác bỏ đi một đường thẳng hoặc một hình.
