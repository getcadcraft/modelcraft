---
title: Xoay và tỷ lệ
summary: Xoay vật quanh một điểm bằng cách nhấp hoặc nhập số độ, và đổi kích thước đều theo một hệ số.
keywords: tay nắm tỷ lệ, kéo giãn, không đều, theo từng trục, lật, đối xứng, bản sao đối xứng, lật theo, xoay, quay, góc, độ, thước đo góc, tỷ lệ, đổi kích thước, phóng to, thu nhỏ, hệ số, tỷ lệ đều
from: 45cdcb49
---

## Xoay

{{ui:Xoay}} ({{key:Q}}) quay vùng chọn quanh một điểm tâm. Cần ba lần nhấp: tâm, hướng bắt đầu, và hướng kết thúc.

1. Chọn thứ bạn muốn quay. Nếu chưa chọn gì, Xoay sẽ lấy thứ bạn nhấp đầu tiên.
2. Nhấn {{key:Q}}. Một vòng tròn đi theo con trỏ, cho thấy mặt phẳng bạn sẽ quay trong đó.
3. Nhấp vào tâm xoay.
   - Trên mặt đất hoặc khoảng trống, vòng tròn nằm phẳng (xanh dương): phép quay quanh một trục thẳng đứng, như xoay một tòa nhà trên khu đất.
   - Trên một mặt, vòng tròn nằm trong mặt phẳng của mặt đó: phép quay quanh hướng riêng của mặt. Nhấp lên tường để xoay thứ gì đó quanh một trục nằm ngang.
4. Nhấp một điểm để đặt nơi góc bắt đầu, chẳng hạn dọc một cạnh của thứ bạn đang xoay.
5. Di chuyển con trỏ quanh tâm. Góc hiển thị ở đầu con trỏ và trong ô giá trị ({{ui:Góc}}). Khi lại gần một mốc, góc bắt theo bước 15°.
6. Nhấp để kết thúc, hoặc nhập góc theo độ rồi nhấn {{key:Enter}}: `90`, `45`, `-30`.

   Góc dương quay ngược chiều kim đồng hồ, nhìn từ phía vòng tròn hướng tới.

Nhấn {{key:Ctrl}} (hoặc {{key:Alt}}) khi xoay để quay một **bản sao** và giữ bản gốc tại chỗ, như với Di chuyển; đầu con trỏ cho biết chế độ sao chép có bật không, và nhấn phím lần nữa để tắt. Gõ `3x` ngay sau một bản sao đã xoay để có thêm bản sao quanh cùng tâm.

Giống Di chuyển, xoay một phần hình học liên kết sẽ làm xoắn các mặt gắn vào nó. Nhóm các thứ trước để xoay nguyên khối.

:::note
Đầu con trỏ ghi phím mũi tên chọn trục xoay, nhưng trong bản dựng này chúng xoay góc nhìn thay vì trục xoay trước lần nhấp đầu tiên. Để chọn trục, nhấp tâm trên một mặt hướng về phía bạn muốn. Xem [Chưa xây dựng](topic:not-built-yet).
:::

## Tỷ lệ

{{ui:Tỷ lệ}} ({{key:S}}) đổi kích thước vùng chọn. Chọn thứ bạn muốn đổi kích thước trước, rồi nhấn {{key:S}}: các ô vuông nhỏ (tay nắm) xuất hiện ở các góc, các cạnh và giữa các cạnh của hộp của nó.

### Kéo giãn hoặc đổi tỷ lệ bằng tay nắm

- Tay nắm **góc** đổi tỷ lệ đều theo mọi hướng, quanh góc đối diện.
- Tay nắm ở giữa **cạnh** kéo giãn theo hướng đó, quanh cạnh đối diện: làm một hộp dài hơn mà không cao hơn.
- Tay nắm ở giữa **cạnh hộp** kéo giãn theo hai hướng đi qua nó.
- Giữ {{key:Ctrl}} khi nhấp tay nắm để đổi tỷ lệ quanh giữa hộp.

Nhấp một tay nắm, di chuyển con trỏ, rồi nhấp lần nữa; hoặc nhấp tay nắm và nhập hệ số (`2` nhân đôi, `0.5` giảm một nửa) rồi nhấn {{key:Enter}}. Để mỗi hướng có hệ số riêng, nhập ba số, cho đỏ, xanh lá và xanh dương: `2,1,0.5`. Bên trong một nhóm đang mở, các hướng là của riêng nhóm đó.

### Đổi tỷ lệ quanh điểm bất kỳ

Nhấp vào chỗ khác tay nắm để đổi tỷ lệ đều quanh một điểm bạn chọn. Cần ba lần nhấp:

1. Chọn thứ bạn muốn đổi kích thước. Nếu chưa chọn gì, Tỷ lệ sẽ lấy thứ bạn nhấp đầu tiên.
2. Nhấn {{key:S}}.
3. Nhấp điểm giữ nguyên (không nằm trên tay nắm), chẳng hạn một góc dưới.
4. Nhấp một điểm tham chiếu. Khoảng cách của nó đến điểm đầu tiên được tính là 1×.
5. Di chuyển con trỏ lại gần hoặc ra xa điểm đầu tiên. Hệ số hiển thị ở đầu con trỏ và trong ô giá trị ({{ui:Tỷ lệ}}).
6. Nhấp để kết thúc, hoặc nhập hệ số rồi nhấn {{key:Enter}}: `2` nhân đôi kích thước, `0.5` giảm một nửa.

### Đổi tỷ lệ về kích thước chính xác

Để một thứ có độ dài chính xác, tính hệ số: độ dài mới chia cho độ dài hiện tại. Ở chế độ ba lần nhấp, ô giá trị thực hiện phép tính, nên nhập `4.2/3.6` để một bức tường 3.6 m thành dài 4.2 m. Ô giá trị của tay nắm chỉ nhận số thường: tính hệ số trước (4.2 chia 3.6 là khoảng 1.1667). Chọn cạnh trước để đọc độ dài hiện tại trong {{ui:Thông tin đối tượng}}.

### Sửa một lần nhập có kích thước sai

Tệp OBJ không có đơn vị, nên một mô hình vẽ bằng milimét vào lớn gấp 1000 lần. Chọn nhóm đã nhập, nhấn {{key:S}}, nhấp một tay nắm góc, nhập `0.001` và nhấn {{key:Enter}}. Với mô hình vẽ bằng inch, nhập `0.0254`.

## Điều cần biết

- Đổi tỷ lệ quanh một điểm bằng ba lần nhấp là đều. Để kéo giãn theo một hướng, dùng tay nắm cạnh hoặc cạnh hộp (xem trên).
- Đổi tỷ lệ một nhóm hoặc thành phần chỉ thay đổi bản sao bạn đã đổi; các bản sao khác của thành phần giữ kích thước của chúng.
- Nhấn {{key:Esc}} trước lần nhấp cuối để hủy.

## Lật

{{ui:Chỉnh sửa}} › {{ui:Thêm}} › {{ui:Lật theo đỏ}}, {{ui:Lật theo xanh lá}} hoặc {{ui:Lật theo xanh dương}} đối xứng vùng chọn tại chỗ, qua giữa hộp của nó: cầu thang tay trái thành tay phải. Các mặt vẫn hướng ra ngoài, và một nhóm hoặc thành phần được đối xứng nguyên khối (phần bên trong không bị viết lại).

{{ui:Bản sao lật theo đỏ}} (và xanh lá, xanh dương) giữ bản gốc tại chỗ và đặt một bản sao đối xứng bên cạnh, qua phía xa của hộp vùng chọn: cánh cửa còn lại của một cặp, cánh còn lại của tòa nhà. Hình học rời chạm vào đó sẽ nối với bản gốc, như hình học chạm luôn làm; biến bản gốc thành nhóm trước để giữ chúng riêng.

Bên trong một nhóm đang mở, đỏ, xanh lá và xanh dương là các trục riêng của nhóm.
