---
title: Chuyển từ các phần mềm dựng hình khác
summary: Thói quen mô hình hóa bằng đẩy/kéo ánh xạ sang ModelCraft như thế nào, từng phím một, và những khác biệt dễ gây nhầm.
keywords: chuyển đổi, di chuyển, quen thuộc, khác biệt, mô hình đẩy kéo, skp, phím tắt, thói quen, so sánh, hộp số đo, cây đối tượng, thông tin đối tượng
from: 74ffd4ac
---

Nếu bạn đã dựng hình trong SketchUp, ModelCraft sẽ quen thuộc: cùng ý tưởng về mặt và đẩy/kéo, cùng ký tự công cụ, một ô giá trị để gõ vào mà không cần nhấp, suy luận với các trục đỏ, xanh lá và xanh dương, nhóm, cấu kiện, một cây đối tượng, thông tin đối tượng và cảnh. Trang này liệt kê những gì ánh xạ trực tiếp và, quan trọng hơn, những gì thì không.

## Thói quen vẫn giữ nguyên

| Bạn quen | Trong ModelCraft |
|---|---|
| Nhấn Space để Chọn, L Đường thẳng, R Hình chữ nhật, C Vòng tròn | Giống nhau: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Nhấn P Đẩy/kéo, M Di chuyển, Q Xoay, S Tỷ lệ, E Tẩy, T Thước dây | Giống nhau: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Nhấn O Xoay quanh, H Di chuyển khung nhìn, Z Thu phóng, Shift+Z Thu phóng phạm vi | Giống nhau: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Nhấn G để tạo cấu kiện | Giống nhau: {{key:G}}. {{key:Shift+G}} tạo nhóm |
| Gõ vào hộp Đo lường mà không cần nhấp vào nó | Giống nhau, trong ô giá trị ở dưới cùng. Nhấn {{key:Enter}} |
| Gõ `4m,3m` cho hình chữ nhật, `12s` cho các cạnh | Giống nhau |
| Gõ `3x` hoặc `/3` sau một lệnh Di chuyển có sao chép | Giống nhau; `*3` cũng được |
| Gõ `[x,y,z]` hoặc `<dx,dy,dz>` cho một điểm hay độ dịch | Giống nhau |
| Gõ một số không có đơn vị trong mô hình đơn vị inch kiến trúc và nhận inch | Giống nhau |
| Kéo giữa để xoay quanh, Shift+kéo giữa để di chuyển khung nhìn, lăn chuột để thu phóng tại con trỏ | Giống nhau |
| Nhấp đúp với Đẩy/kéo để lặp lại khoảng cách | Giống nhau |
| Phím mũi tên để khóa đỏ, xanh lá, xanh dương và song song | Giống nhau: {{key:Right}} đỏ, {{key:Left}} xanh lá, {{key:Up}} xanh dương, {{key:Down}} song song |
| Giữ Shift để khóa một suy luận | Giống nhau |
| Ctrl (Option trên Mac) để sao chép khi di chuyển | {{key:Ctrl}}, {{key:Mod}} hoặc {{key:Alt}}, trên mọi máy tính |
| Shift để chuyển đổi, Ctrl để thêm, Shift+Ctrl để bỏ khỏi vùng chọn | Các phím giống nhau; trên Mac hãy dùng {{key:Mod}} ở chỗ ghi Ctrl |
| Cửa sổ kéo từ trái sang phải, cắt từ phải sang trái | Giống nhau |
| Công cụ Kích thước để ghi chú độ dài | {{key:D}}, và hơn thế nữa: nhập một độ dài mới vào một kích thước và mô hình thay đổi kích cỡ theo. Xem [Kích thước và thay đổi kích cỡ](topic:dimensions) |
| Nhấp đúp vào một mặt để chọn mặt cùng cạnh; nhấp ba lần để chọn tất cả những gì nối liền | Giống nhau |
| Vẽ một đường qua một mặt để tách nó; xóa một cạnh giữa hai mặt đồng phẳng để nối lại | Giống nhau |
| Đẩy một hình chữ nhật cửa sổ xuyên qua tường để cắt nó | Giống nhau |
| Mặt phía sau có màu xám xanh; Đảo ngược mặt | Cùng màu; {{ui:Reverse face}} trong {{ui:Entity info}} |
| Cảnh là các thẻ phía trên khung nhìn, Page Up và Page Down | Giống nhau, với {{ui:Play}} trong bảng {{ui:Scenes}} |
| Bóng từ ngày, giờ, vĩ độ và kinh độ, với hướng bắc màu xanh lá | Giống nhau, trong bảng {{ui:Style}} |

## Những khác biệt dễ gây nhầm

### Lưu là tải xuống

Không có lệnh Lưu nào ghi đè tệp bạn đã mở, không có hộp thoại Lưu thành với tên, không có tự động lưu và không có tệp sao lưu. {{ui:Save}} ({{key:Mod+S}}) tải xuống một tệp `.modelcraft` mới mỗi lần, thường vào thư mục tải xuống của bạn. Hãy lưu thường xuyên, và tự đổi tên hoặc di chuyển các tệp. Xem [Mở, lưu, nhập và xuất](topic:files).

### Có nhập tệp .skp nhưng không lưu chúng

{{ui:Import}} đọc tệp SketchUp bằng bộ đọc riêng của ModelCraft, ngay trong trang: nhóm, cấu kiện, màu, kết cấu trên mặt, thẻ và cạnh mềm được chuyển sang. Xem [Định dạng tệp chi tiết](topic:formats#skp-files). ModelCraft không thể lưu `.skp`: để quay lại, hãy xuất Collada từ ModelCraft rồi nhập vào SketchUp.

### Không có menu chuột phải

Kéo chuột phải để di chuyển khung nhìn; nhấp chuột phải không làm gì. Các lệnh bạn tìm trong menu ngữ cảnh nằm trong {{ui:Entity info}} ({{ui:Reverse face}}, {{ui:Edit}}, {{ui:Explode}}, {{ui:Make unique}}, {{ui:Make component}}) và trong nhóm {{ui:Organize}} của thanh công cụ.

### Đơn vị nằm trong thanh trạng thái

Không có Model Info hay lựa chọn mẫu. Bộ chọn đơn vị nằm ở góc dưới bên phải. Mô hình mới bắt đầu bằng feet và inch ở Hoa Kỳ, và bằng milimet ở nơi khác, theo cài đặt ngôn ngữ của trình duyệt. Số thập phân luôn dùng dấu chấm: `2.5m`, không bao giờ `2,5m`, vì dấu phẩy luôn ngăn cách các giá trị.

### Tô màu có vật liệu riêng

{{ui:Paint}} ({{key:B}}) tô màu đặc và các vật liệu trong mục {{ui:Materials}}: gạch, ốp tường, lợp mái, gỗ, đá và nhiều loại khác, do ModelCraft vẽ. Hiện bạn chưa thể tải ảnh của riêng mình làm vật liệu; kết cấu đi kèm các tệp nhập vào vẫn được giữ. Xem [Tô bằng màu và vật liệu](topic:paint).

### Tỷ lệ đồng đều, không có tay nắm

Tỷ lệ không hiển thị hộp có tay nắm. Nhấp vào điểm giữ nguyên, một điểm tham chiếu, rồi nhập kích thước mới hoặc hệ số đã gõ. Nó luôn co giãn đều theo mọi hướng. Để kéo dài theo một hướng, đẩy/kéo hoặc di chuyển một mặt, hoặc gõ lại chiều rộng, chiều sâu, chiều cao của một nhóm trong {{ui:Entity info}}, hoặc [đổi kích cỡ bằng một kích thước](topic:dimensions).

### Xoay chọn mặt phẳng từ nơi bạn nhấp

Không có thước đo góc bám vào các mặt khi bạn rê con trỏ bằng phím mũi tên để chọn mặt phẳng. Nhấp vào tâm trên một mặt để xoay trong mặt phẳng của mặt đó, hoặc trên mặt đất để xoay quanh phương thẳng đứng. Các phím mũi tên xoay khung nhìn trước cú nhấp đầu tiên.

### Suy luận từ các điểm bạn lướt qua

ModelCraft bắt theo hướng trục từ **điểm bắt đầu của bạn**, và bắt theo các điểm, cạnh và mặt nằm dưới con trỏ. Nó không theo dõi một hướng từ một điểm bạn chỉ rê qua (suy luận "từ điểm" có nét chấm). Để thẳng hàng với một góc xa, hãy khóa trục bằng một phím mũi tên rồi rê đến góc đó: điểm đã khóa trượt để thẳng hàng với nó. Hoặc đặt một [đường dẫn hướng](topic:guides-measure).

### Song song dùng cạnh bạn đã lướt qua trước khi bắt đầu

Suy luận song song và vuông góc dùng cạnh cuối cùng mà con trỏ đã đi qua **trước cú nhấp đầu tiên**, không dùng các cạnh bạn rê qua khi đang vẽ. Xem [Suy luận và bắt điểm](topic:inference#parallel-and-perpendicular).

### Các bản sao của một nhóm được liên kết

Sao chép một nhóm bằng {{ui:Move}} tạo ra một vị trí thứ hai của cùng nhóm đó, nên sửa một bản thì cả hai đều thay đổi, giống như với cấu kiện. SketchUp làm các nhóm độc lập. Xem [Xử lý sự cố](topic:troubleshooting#editing-one-group-changed-another).

### Space không di chuyển khung nhìn

{{key:Space}} chọn {{ui:Select}}, như trong SketchUp. Trong một số ứng dụng web khác, giữ Space sẽ di chuyển khung nhìn; ở đây thì không. Thay vào đó hãy kéo chuột phải.

### Cuộn hai ngón tay để thu phóng

Trên bàn di chuột, đặt {{ui:Settings}} › {{ui:ModelCraft}} › Scrolling thành Trackpad: hai ngón tay xoay quanh, {{key:Shift}} và hai ngón tay di chuyển khung nhìn, chụm lại để thu phóng. Xem [Xoay, di chuyển và thu phóng](topic:orbit-pan-zoom#on-a-trackpad).

Nếu bạn quen phím của Blender hơn của SketchUp, hãy chọn kiểu menu {{ui:Modeler}}: {{key:G}}, {{key:R}} và {{key:S}} tác động đồng thời lên vùng chọn, {{key:E}} đùn (đẩy/kéo), {{key:Shift+D}} nhân bản, và một thanh menu ở đầu (File, Edit, View, Select, Add, Object, Mesh) thay thế thanh công cụ. Nếu bạn đến từ SketchUp, kiểu {{ui:Push-pull}} cho một thanh menu tương tự riêng của nó trên cùng các ký tự công cụ. Xem [Menu, phím và chuột](topic:menus-keys-and-mouse).

### Các khối rắn đẩy vào nhau không cắt nhau

Đẩy/kéo cắt xuyên qua mặt phía sau trong cùng một đối tượng, nhưng hai khối rắn riêng biệt bị đẩy vào nhau thì không giao nhau. Không có Intersect Faces và không có Solid Tools.

### Những thứ còn thiếu

Vẽ tự do, Cắt, Tách và Vỏ ngoài, vật liệu ảnh riêng, tiện ích mở rộng, và công cụ bố cục cho tờ vẽ không có trong bản dựng này. [Chưa xây dựng](topic:not-built-yet) liệt kê những gì nên làm thay thế.

## Phím tắt do trình duyệt giữ

ModelCraft chạy trong trình duyệt, nên một số phím tắt thuộc về trình duyệt chứ không thuộc ứng dụng. {{key:Mod+N}} mở một cửa sổ trình duyệt (hãy dùng {{ui:New}}), và {{key:Mod+W}} đóng thẻ. Nếu có thay đổi chưa lưu, trình duyệt sẽ hỏi trước khi đóng. Xem [Phím, chuột và bàn di chuột](common:keys#shortcuts-the-browser-keeps).
