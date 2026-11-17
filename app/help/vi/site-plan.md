---
title: Dựng mô hình trên bản vẽ mặt bằng từ DWG hoặc DXF
summary: Nhập mặt bằng hoặc sơ đồ tầng CAD dưới dạng các đường trên mặt đất, trả lời câu hỏi về đơn vị, rồi vẽ theo chúng thành mặt và khối.
keywords: mặt bằng, dwg, dxf, cad, nhập, phác thảo, ảnh phác thảo, phác thảo tay, phác thảo trên giấy, ảnh, giấy, màu bút, khối động, trạng thái hiển thị, văn bản, tô bóng, spline, elip, mặt 3d, vẽ theo, sơ đồ tầng, lô đất, đường ranh giới, đơn vị, lớp nền, bối cảnh
from: 3415dc96
---

ModelCraft có thể nhập các đường của một bản vẽ CAD 2D, một mặt bằng hoặc một sơ đồ tầng, và đặt chúng trên mặt đất để bạn có thể mô hình trên đó.

## Nhập bản vẽ

1. Nhấp {{ui:Nhập}} trong nhóm {{ui:Tệp}} (hoặc thả tệp vào khung nhìn 3D).
2. Chọn một tệp `.dwg` hoặc `.dxf`.

   Một DWG lớn cần một lúc: thanh trạng thái hiển thị "Đang đọc plan.dwg…" cho đến khi nó được nhập xong.

3. Nếu bản vẽ không cho biết đơn vị của nó, một hộp thoại có tiêu đề "Đơn vị bản vẽ" hỏi: "Một đơn vị bản vẽ là gì?" Chọn {{ui:Inch}}, {{ui:Feet}}, {{ui:Milimét}} hoặc {{ui:Mét}}. Hầu hết mặt bằng ở Mỹ được vẽ bằng feet, bản vẽ kiến trúc bằng inch, và bản vẽ theo hệ mét bằng milimét.

   Bản vẽ đến dưới dạng một nhóm các cạnh trên mặt đất, được chọn, và khung nhìn thu phóng tới nó. Thanh trạng thái cho biết có bao nhiêu cạnh đã vào, ví dụ "Đã nhập site.dwg: 1697 cạnh trên mặt đất, trong một nhóm. Phân rã nó để vẽ trực tiếp lên nó."

## Những gì được nhập

- Đường thẳng, đa tuyến (kể cả các cung của chúng), vòng tròn và cung tròn, và các khối cùng mọi thứ trong chúng, chỉ từ **không gian mô hình**. Đường cong trở thành các đoạn thẳng ngắn.
- Đường thẳng, đa tuyến, cung tròn, vòng tròn, elip và spline nằm phẳng trên mặt đất, dưới dạng cạnh.
- **Tô bóng** trở thành các mặt trên mặt đất, với các đảo của chúng là lỗ, nên bạn có thể đẩy/kéo ngay một vùng đã tô bóng.
- **Mặt 3D** và các khối tô đặc trở thành mặt; mặt 3D giữ nguyên độ cao của chúng.
- **Văn bản** (văn bản một dòng, văn bản nhiều dòng và giá trị thuộc tính) được vẽ thành cạnh bằng một kiểu chữ nét đơn đơn giản, theo chiều cao, góc và căn lề riêng của văn bản. Phông chữ không phải của bản vẽ, nên các từ có thể dài hơn hoặc ngắn hơn một chút. Các ký tự mà kiểu chữ không có hình dạng sẽ được vẽ thành các ô nhỏ và được đếm.
- **Kích thước** được vẽ như bản vẽ hiển thị (các đường, mũi tên và văn bản của chúng, dưới dạng cạnh và mặt).
- **Khối động** được nhập như bản vẽ hiển thị: mỗi khối được đặt ở trạng thái hiển thị đã lưu cùng nó, và chỉ các đường của trạng thái đó. Thanh trạng thái liệt kê chúng cùng các trạng thái được hiển thị và các trạng thái khác mà mỗi khối có, ví dụ "Receptacle hiển thị là Duplex ×38, GFI ×7 (trạng thái: Duplex, GFI)". ModelCraft không chuyển trạng thái.
- **Khối đặc 3D, miền và vật thể** (dữ liệu ACIS của bản vẽ) được nhập thành các nhóm riêng: một khối đặc kín là khối đặc, một miền hoặc vật thể hở là các mặt. Các mặt phẳng được nhập nguyên vẹn; các mặt cong (trụ, nón, cầu, xuyến, các mặt spline đơn giản) đến dưới dạng các tam giác nhỏ có cạnh mềm giữa chúng, nên chỉ các cạnh của chính khối đặc hiển thị. Mặt thuộc loại bề mặt khác bị bỏ qua và được liệt kê: "Chưa vẽ (khối đặc 3D): …".
- Không được nhập: điểm, bảng, đa dẫn hướng, hình ảnh và các loại đối tượng khác. Thanh trạng thái liệt kê chúng theo loại, như "Chưa nhập: 12 POINT." Mọi thứ trên một bố cục (không gian giấy) cũng bị bỏ qua, và không được liệt kê.
- Lớp không được giữ: mọi đường đều đến như nhau.

Nếu bản vẽ ở xa gốc tọa độ của nó (ví dụ tọa độ mặt phẳng bang), nó vẫn được nhập, nhưng có thể nằm xa gốc của ModelCraft. Bản vẽ vươn tới hơn 10.000 km từ gốc của nó sẽ bị từ chối: hãy dời bản vẽ gần 0,0 hơn trong chương trình CAD trước.

## Vẽ theo thành mặt

Các đường đã nhập hiếm khi tự khép gọn thành mặt. Có hai cách làm:

**Giữ mặt bằng làm lớp nền (khuyên dùng)**

1. Để mặt bằng là một nhóm riêng.
2. Vẽ công trình của bạn lên trên bằng {{ui:Hình chữ nhật}} và {{ui:Đường thẳng}}, bắt vào các góc của mặt bằng ("Điểm cuối") và các cạnh ("Trên cạnh").
3. Đẩy/kéo các mặt của bạn lên. Mặt bằng vẫn nguyên vẹn bên dưới, và bạn có thể xóa toàn bộ nhóm sau đó bằng một cú nhấp.

Bắt điểm hoạt động giữa các nhóm: bạn có thể bắt vào góc của mặt bằng mà không cần mở nó.

**Vẽ trên chính các đường của mặt bằng**

1. Chọn nhóm mặt bằng và nhấp {{ui:Phân rã}}. Các đường của nó trở thành các cạnh rời.
2. Ở nơi một đường bao khép kín nên là một mặt, vẽ một đường bằng {{ui:Đường thẳng}} đè lên bất kỳ cạnh nào của nó, từ góc tới góc. Khi đường bao khép kín và phẳng, mặt thường tự lấp đầy. Nếu không, hãy tìm chỗ hở hoặc chỗ chồng lên nhau trong đường bao và vẽ đè lên đó.
3. Đẩy/kéo nó.

Cách này hiệu quả nhất trên một mặt bằng sạch. Với một bản đo đạc đông đúc, vẽ lên trên sẽ nhanh hơn.

## Sự cố

- "Đây là DXF nhị phân. Lưu lại thành DXF ASCII rồi thử lại." Lưu lại DXF từ chương trình CAD dưới dạng ASCII (văn bản).
- "…không có đường thẳng, cung tròn hay vòng tròn nào trong không gian mô hình để nhập." Có thể bản vẽ toàn nằm trên các bố cục, hoặc toàn văn bản và tô bóng.
- "Không đọc được bản vẽ này (…). Có thể tệp bị hỏng, hoặc được lưu bằng phiên bản DWG mà trình đọc không hỗ trợ…" Phần trong ngoặc cho biết lý do, ví dụ "Phiên bản DWG AC1009 không được hỗ trợ". Hãy lưu nó thành DXF, hoặc thành DWG từ AutoCAD 2000 đến 2018, từ chương trình CAD.
- Mặt bằng sai kích thước: bạn đã chọn sai đơn vị. Hoàn tác ({{key:Mod+Z}}) và nhập lại, hoặc [thay đổi tỷ lệ](topic:rotate-scale) nhóm theo hệ số đúng (12 giữa feet và inch, 25.4 giữa inch và milimét).

Để biến các đường đồng mức thành mặt đất có thể điêu khắc, xem [Địa hình](topic:terrain).

## Từ ảnh phác thảo tay

**Tệp › Nhập ảnh phác thảo tay…** nhận một ảnh chụp bản phác thảo trên giấy (JPEG, PNG hoặc TIFF, chụp thẳng từ điện thoại cũng được) và tạo ra cùng loại cạnh trên mặt đất. Cho biết tờ giấy là loại nào (hoặc để nó tự tìm tờ giấy, mặc định là A4) và tỷ lệ của bản phác thảo, ví dụ 1 : 100. Cạnh của tờ giấy được tìm thấy và ảnh được nắn thẳng, mực được vẽ thành các đường và cung, và mỗi màu bút (đen, đỏ, xanh dương, xanh lục) trở thành một nhóm riêng có một thẻ (**Phác thảo đen**, **Phác thảo đỏ**, …), tất cả nằm trong một nhóm được đặt tên theo ảnh. Đó là một bước hoàn tác, và mọi thứ diễn ra trên máy tính này: không có gì được gửi đi đâu.

Khi không tìm được cạnh tờ giấy, toàn bộ ảnh được coi là tờ giấy và dòng trạng thái cho biết điều đó: hãy đo một thứ bạn biết và thay đổi tỷ lệ nhóm nếu nó sai. Vẽ các đường thành mặt như trên.
