---
title: Dùng ModelCraft với trợ lý AI
summary: Cho phép trợ lý AI hoặc kịch bản của bạn xem mô hình và tạo các khối đặc đơn giản: quyền, kết nối qua CadCraft Studio và nhật ký hoạt động.
keywords: ai, trợ lý, tác nhân, mcp, giao thức ngữ cảnh mô hình, kịch bản, tự động hóa, mô hình hóa, hộp, trụ, kết xuất, hàng đợi kết xuất, quyền, ngắt kết nối, hoạt động
from: 629cd0b7
---

## Bạn sẽ học gì

Cách cho phép một trợ lý AI (hoặc một kịch bản bạn đã viết) làm việc với ModelCraft, và cách quyết định những gì nó được phép chạm vào.

ModelCraft **không có AI riêng** và không gửi gì đi đâu cả. Bạn tự chọn trợ lý: bất kỳ chương trình nào hỗ trợ Giao thức ngữ cảnh mô hình (MCP). ModelCraft chỉ cung cấp cho nó các công cụ, và bạn chọn công cụ nào.

## Bật

1. Mở {{ui:Cài đặt}} (biểu tượng bánh răng trên thanh ứng dụng, hoặc {{key:Mod+,}}) và chuyển đến thẻ {{ui:ModelCraft}}.
2. Trong mục {{ui:Trợ lý}}, chọn **Cho phép trợ lý AI và kịch bản dùng ModelCraft**. Mặc định là tắt cho đến khi bạn bật.
3. Chọn những gì nó được làm: **Đọc** đã được chọn sẵn; chỉ chọn **Chỉnh sửa**, **Lưu** hoặc **Xuất** khi bạn cần.

Các công cụ nằm ngoài quyền bạn đã chọn sẽ không được đưa cho trợ lý; nếu nó vẫn yêu cầu, ModelCraft sẽ từ chối và ghi lại trong nhật ký hoạt động. Tắt công tắc sẽ ngắt mọi kết nối cùng lúc; {{ui:Đặt lại cài đặt ModelCraft}} cũng tắt công tắc này.

## Kết nối trợ lý

Trợ lý kết nối qua **CadCraft Studio** trên máy tính của bạn: Studio chạy một máy chủ nhỏ mà chỉ máy tính này truy cập được, được bảo vệ bằng một mã token mà nó tạo mỗi lần khởi động. Trong Studio, chọn {{ui:Kết nối trợ lý}} và sao chép địa chỉ và mã token vào trợ lý của bạn (Studio hiển thị chính xác các cài đặt cần dán). Không bao giờ chia sẻ mã token.

:::note
Một thẻ trình duyệt không thể mở kết nối cho trợ lý: trong các ứng dụng trên trình duyệt, công tắc không có tác dụng cho đến khi bạn dùng CadCraft Studio trên máy tính của mình.
:::

## Bạn luôn kiểm soát

- **Mỗi thay đổi là một bước hoàn tác**, được gắn nhãn bằng tên mà trợ lý đặt cho nó (ví dụ "Trợ lý: box"). {{key:Mod+Z}} hoàn tác toàn bộ thay đổi gần nhất của trợ lý.
- **Bạn biết khi có trợ lý đang kết nối.** Một nút trên thanh ứng dụng hiển thị tên trợ lý khi đang kết nối; nhấn vào để xem nó được phép làm gì, hoặc để **Ngắt kết nối**.
- **Hoạt động.** {{ui:Cài đặt}} › {{ui:ModelCraft}} › {{ui:Trợ lý}} › {{ui:Hoạt động}} liệt kê mọi lệnh gọi: khi nào, công cụ nào, đã thực hiện hay bị từ chối. {{ui:Lưu nhật ký}} giữ một bản sao.

## Trợ lý có thể yêu cầu gì

| Công cụ | Quyền | Chức năng |
|---|---|---|
| `app_info`, `model_describe` | Đọc | Đơn vị, kích thước của mô hình, và mọi nhóm cùng cấu kiện với vị trí của chúng, việc chúng có phải khối đặc kín hay không và thể tích của chúng |
| `view_screenshot` | Đọc | Ảnh chụp khung nhìn 3D như đang hiển thị |
| `box_add`, `cylinder_add` | Chỉnh sửa | Một hộp hoặc một trụ làm nhóm mới, tại vị trí và kích thước do bạn hoặc trợ lý đưa ra ("3m", "10'" hoặc một số theo đơn vị của mô hình) |
| `instance_move`, `instances_erase` | Chỉnh sửa | Di chuyển hoặc xóa nhóm và cấu kiện |
| `faces_list`, `materials_list` | Đọc | Các mặt của một nhóm hoặc của hình học rời (hướng, diện tích và tâm của từng mặt); các vật liệu và màu mà nó có thể tô |
| `push_pull` | Chỉnh sửa | Đẩy hoặc kéo một mặt, giống như {{ui:Đẩy/kéo}} làm |
| `paint` | Chỉnh sửa | Tô một mặt hoặc cả một nhóm bằng một màu hoặc một vật liệu |
| `group_make` | Chỉnh sửa | Tạo một nhóm hoặc cấu kiện từ các mặt rời và nhóm |
| `scene_add`, `scene_show` | Chỉnh sửa | Lưu khung nhìn thành cảnh; chuyển đến một cảnh đã lưu |
| `mesh_add` | Chỉnh sửa | Một đối tượng lưới để bắt đầu (lập phương, cầu, trụ …), như không gian làm việc Lưới thêm vào |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Đọc / Chỉnh sửa | Chồng bộ điều chỉnh của một lưới: đối xứng, mảng, chia nhỏ bề mặt, vát cạnh và các loại khác; không có gì được áp dụng vĩnh viễn |
| `usd_export` | Xuất | Mô hình dưới dạng OpenUSD (.usda, .usdc hoặc .usdz), như cách lưu mô hình thành USD ghi ra ([USD](topic:usd)); vào một thư mục bạn đã cho phép trong Studio, nếu không thì là tải xuống |
| `render_still` | Xuất | Ảnh đã kết xuất của khung nhìn hoặc của một cảnh đã lưu, như nút {{ui:Kết xuất}} trong hộp thoại {{ui:Kết xuất}} tạo ra, với cài đặt Kết xuất của bạn trừ khi nó yêu cầu cài đặt khác (một mẫu cảnh: ngoại thất, nội thất, mặt cắt, ban đêm hoặc tự động; nhanh hoặc chất lượng cao, kích thước, số mẫu, bầu trời); một PNG để nó xem, hoặc một tệp PNG, EXR hay tệp kết xuất trong thư mục bạn đã cho phép trong Studio ([Kết xuất ảnh](topic:render)) |
| `render_queue` | Xuất | Thêm ảnh chất lượng cao vào hàng đợi của hộp thoại Kết xuất (khung nhìn, hoặc các cảnh đã lưu) và chạy hàng đợi; các ảnh hoàn thành đi vào thư mục bạn đã cho phép, hoặc ở lại trong {{ui:Hàng đợi kết xuất}} của hộp thoại Kết xuất để bạn xem. Cần WebGPU |
| `link_push` | Chỉnh sửa | Cập nhật một mô hình được liên kết từ chương trình khác (xem [Giữ mô hình .3dm trực tiếp](topic:live-3dm-link)) |
| `link_status` | Đọc | Cho biết mô hình được liên kết còn đó hay không và lần cập nhật gần nhất vào lúc nào |
| `undo` | Chỉnh sửa | Hoàn tác các bước do chính nó thực hiện |

Khối đặc do trợ lý tạo ra được đưa vào dưới dạng nhóm, nên chúng không bao giờ gộp với những gì bạn đã vẽ. Không có công cụ nào lưu mô hình: việc lưu vẫn do bạn quyết định, còn xuất hoặc kết xuất cần chọn **Xuất**. Kết xuất không thay đổi gì trong mô hình; kết xuất một cảnh đã lưu sẽ chuyển khung nhìn đến cảnh đó, giống như {{ui:Cảnh}} làm.

## Nếu có gì đó không hoạt động

- **Trợ lý không thấy công cụ ModelCraft nào:** kiểm tra công tắc đã bật trong cửa sổ này chưa, và cửa sổ đã mở trong Studio chưa.
- **"cần quyền chỉnh sửa":** chọn **Chỉnh sửa** trong {{ui:Trợ lý}}, rồi yêu cầu lại.
- **Lỗi "401" hoặc liên quan đến mã token:** mã token đã thay đổi (Studio khởi động lại, hoặc {{ui:Mã token mới}}). Sao chép mã mới vào cài đặt của trợ lý.

## Xem thêm

- [Công thức cho trợ lý AI](common:assistants-recipes): các ví dụ có sẵn, mỗi ví dụ kèm các công cụ nó gọi.
