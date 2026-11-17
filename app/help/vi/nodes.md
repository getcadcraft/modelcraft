---
title: Nút: xây dựng mô hình bằng cách nối dây
summary: Nối số vào điểm, điểm vào đường cong, đường cong vào bề mặt. Đổi một số và mọi thứ phía sau sẽ dựng lại. Mỗi nút cũng là một dòng CraftScript, và đồ thị được lưu trong tệp.
keywords: nút, trình soạn nút, lập trình trực quan, tham số, đồ thị, dây nối, cổng, tự do, nurbs, chuyển tiếp, đùn, quay tròn, vòng tròn, đường cong, bề mặt, chuỗi, dải, ngẫu nhiên, danh sách, script, craftscript, grasshopper
from: 9c8e254f
---

**Trình soạn Nút** dựng hình học bằng cách nối các hộp với nhau. Mỗi hộp (một nút) làm một việc nhỏ: tạo một số, một điểm, một vòng tròn, một chuyển tiếp. Bạn nối kết quả của nút này vào đầu vào của nút kế tiếp, và mô hình sẽ theo đó khi bạn đổi một số ở đầu.

Mở nó từ bảng bên phải: {{ui:Nodes}} › {{ui:Nodes…}}. Tệp đã có đồ thị sẽ tự mở nó. Đây là một cửa sổ nằm trên khung nhìn 3D: kéo thanh tiêu đề để di chuyển, kéo góc để đổi kích thước.

## Nối dây

1. Chọn một nút từ danh sách bên trái (gõ vào ô tìm kiếm để thu hẹp; <kbd>Enter</kbd> thêm kết quả đầu tiên). Nút sẽ xuất hiện giữa vùng vẽ.
2. Kéo từ chấm tròn **đầu ra** bên phải của một nút đến chấm tròn **đầu vào** bên trái của nút khác. Chấm chuyển xanh khi khớp và đỏ khi không; đưa con trỏ lên để xem lý do.
3. Đầu vào không nối với gì sẽ hiển thị một ô cho giá trị gõ tay. Gõ một số rồi nhấn <kbd>Tab</kbd>: kết quả sẽ dựng lại.
4. Vòng tròn nhỏ trên thanh tiêu đề của nút là **mắt** của nó. Nút có mắt bật sẽ được vẽ trong khung nhìn 3D: dạng đường cho đường cong, tô bóng cho bề mặt, chấm cho điểm.

Kéo nút bằng thanh tiêu đề. Kéo nền để di chuyển khung, lăn chuột để thu phóng. <kbd>Delete</kbd> xóa nút đã chọn. {{ui:Tidy}} sắp các nút thành cột, {{ui:Fit}} đưa tất cả vào khung nhìn, {{ui:Undo}} và {{ui:Redo}} đi lùi và tiến qua các thao tác chỉnh sửa của bạn.

## Kiểu và đơn vị

Cổng có kiểu: số, có/không, điểm, vectơ, đường cong, bề mặt, lưới, khối đặc, hoặc "geometry" cho bất kỳ loại nào trong số đó. Điểm có thể đưa vào đầu vào vectơ và ngược lại. Số có đơn vị: **độ dài** tính bằng milimét, **góc** tính bằng độ. Một độ dài không thể đưa vào một góc, và độ dài nhân độ dài (một diện tích) bị từ chối, nên dây sai sẽ bị chặn ngay khi bạn nối.

Chấm vuông là một **danh sách**. Khi một danh sách đi vào đầu vào giá trị đơn, nút chạy một lần cho mỗi phần tử, và kết quả trở thành một danh sách. Danh sách ngắn hơn sẽ lặp lại phần tử cuối. Ví dụ, một **Chuỗi** các chiều cao nối vào **Di chuyển** sẽ tạo ra một chồng bản sao.

## Khối đặc và phép Boolean như nút

Nhóm **Khối đặc** tạo các vật thể kín từ cùng bề mặt chính xác như bảng Bề mặt: **Khối hộp**, **Khối trụ** và **Khối cầu** (kích thước tính bằng mm), **Hợp**, **Trừ** và **Giao** (khối thứ hai lấy từ khối thứ nhất; dung sai là mức các tam giác của bộ tính toán khối có thể lệch khỏi bề mặt chính xác), **Bo góc giữa các mặt** (các mặt theo số thứ tự trong khối, 1 là mặt đầu tiên; một bán kính và, nếu lớn hơn 0, một bán kính ở cuối), **Thể tích khối** (mm³) và **Khối sang lưới** (để xem hoặc chuyển thành mô hình). Khối đặc có kiểu cổng riêng: điểm hoặc số không thể nối vào đầu vào khối, và chấm sẽ đỏ. Các nút Boolean và Bo góc dùng bộ tính toán khối riêng của chương trình, được nạp lần đầu khi trình soạn mở.

## Lỗi

Nút không làm được việc của nó sẽ nói lý do dưới tên, bằng chữ đỏ ("Bán kính phải lớn hơn không."), và các nút sau nó sẽ chờ. Cùng thông báo đó cũng là một mục trong bảng Lỗi, nên bạn có thể tìm thấy từ đó.

## Mỗi nút là một dòng script

Nhấn {{ui:Script}} để xem đồ thị dưới dạng CraftScript: một dòng cho mỗi nút, chẳng hạn `n3 = nd_circle(n2, n1, [0 0 1]);`. Sửa văn bản rồi nhấn {{ui:Make the graph from this script}} để đưa nó về thành đồ thị. Các hàm `nd_` này cũng hoạt động trong CraftScript của PartCraft, nên một đồ thị có thể được chạy, lặp hoặc kiểm thử ở đó. Số ngẫu nhiên luôn nhận một **hạt giống**, nên cùng một đồ thị cho cùng kết quả trên mọi máy tính.

## Lưu cùng tệp

Đồ thị được lưu trong tệp mô hình. Các nút tự tạo đường cong, bề mặt và lưới của riêng chúng: chúng không thay đổi các mặt của mô hình cho đến khi bạn yêu cầu.

## Chuyển thành mô hình

Bật mắt của một nút tạo bề mặt hoặc lưới, rồi nhấn {{ui:Bake to model}} trong cửa sổ Nút. Mỗi bề mặt hoặc lưới đang hiển thị sẽ thành một nhóm mặt trong mô hình, tính bằng mét, và bạn có thể chỉnh sửa như bất kỳ thứ gì khác. Đây là một bước hoàn tác. Đồ thị vẫn còn, nhưng bản sao không còn theo nó nữa: đổi một số rồi chuyển lại để có bản mới. Điểm và đường cong không phải khối đặc nên bị bỏ qua, và thông báo sẽ cho biết có bao nhiêu.
