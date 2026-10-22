// AUTO-GENERATED bởi scripts/gen-lessons.mjs — KHÔNG sửa tay. Chạy: node scripts/gen-lessons.mjs

export interface QuizQuestionData {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface LessonSidecar {
  checklist: string[];
  quiz: QuizQuestionData[];
}

export const LESSON_DATA: Record<string, LessonSidecar> = {
  "m01-generics-wildcard-pecs": {
    "checklist": [
      "Giải thích được vì sao generics trong Java là invariant và wildcard nới lỏng ở chiều nào.",
      "Áp dụng đúng PECS để chọn extends cho producer và super cho consumer.",
      "Giải thích được type erasure và ít nhất ba hệ quả thực tế của nó.",
      "Viết được method generic có bounded type parameter mà không cần cast.",
      "Xử lý được nhu cầu kiểm tra kiểu lúc runtime bằng Class token thay vì instanceof với kiểu tham số hoá.",
      "Nhận diện và loại bỏ được raw type trong code review.",
      "Đọc được chữ ký generic kiểu JpaRepository của Spring Data và suy ra entity type, id type."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Generics là invariant để bảo vệ an toàn kiểu: nếu List Integer là subtype của List Number thì có thể thêm Double vào một list thực chất chỉ chứa Integer.",
        "options": [
          "Có, vì Integer là subtype của Number",
          "Không, generics trong Java là invariant",
          "Có, nếu list là bất biến",
          "Không, vì Number là abstract"
        ],
        "question": "List của Integer có phải là subtype của List của Number không?"
      },
      {
        "answerIndex": 0,
        "explanation": "PECS: Producer Extends — tham số chỉ cho đọc dữ liệu ra dùng extends wildcard.",
        "options": [
          "? extends T",
          "? super T",
          "T chính xác",
          "Không khai báo kiểu"
        ],
        "question": "Tham số đóng vai trò producer, chỉ đọc dữ liệu ra, nên dùng wildcard nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "PECS: Consumer Super — tham số chỉ nhận dữ liệu vào dùng super wildcard để ghi được T và subtype của nó.",
        "options": [
          "? extends T",
          "? super T",
          "Raw type",
          "? không giới hạn"
        ],
        "question": "Tham số đóng vai trò consumer, chỉ nhận dữ liệu vào để ghi, nên dùng wildcard nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Compiler xoá thông tin generic sau khi kiểm tra; runtime chỉ còn raw type. Đó là type erasure.",
        "options": [
          "Thông tin generic được lưu trong từng object",
          "Mỗi kiểu tham số hoá tạo một class riêng",
          "Compiler xoá thông tin generic sau khi kiểm tra kiểu, runtime chỉ còn raw type",
          "Generics chỉ là cú pháp của IDE"
        ],
        "question": "Type erasure có nghĩa là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Không thể tạo instance hoặc mảng của type variable vì kiểu thật đã bị xoá ở runtime.",
        "options": [
          "new Object()",
          "new T() và new T[]",
          "new ArrayList() có raw type",
          "new String()"
        ],
        "question": "Việc nào sau đây KHÔNG làm được do type erasure?"
      },
      {
        "answerIndex": 1,
        "explanation": "Compiler không biết kiểu thật phía sau extends wildcard, nên mọi lệnh add phần tử cụ thể đều không an toàn và bị từ chối, trừ null.",
        "options": [
          "Được, nếu phần tử là Integer",
          "Không, compiler không biết kiểu thật phía sau wildcard nên từ chối ghi mọi phần tử cụ thể",
          "Được, nếu list còn trống",
          "Được, khi tắt cảnh báo unchecked"
        ],
        "question": "Có thêm được một Integer vào List có extends wildcard của Number không?"
      },
      {
        "answerIndex": 0,
        "explanation": "Khi đọc từ List super wildcard của Integer, compiler chỉ đảm bảo phần tử là Object, vì kiểu thật có thể là bất kỳ supertype nào của Integer.",
        "options": [
          "Object",
          "Integer",
          "Number",
          "Không đọc được gì cả"
        ],
        "question": "Đọc phần tử từ một List có super wildcard của Integer cho ta kiểu chắc chắn nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Raw type vô hiệu hoá kiểm tra kiểu của compiler cho biến đó, đẩy lỗi xuống runtime dưới dạng ClassCastException.",
        "options": [
          "Nó nhanh hơn generic đầy đủ",
          "Nó chỉ là cảnh báo về phong cách",
          "Nó tắt kiểm tra kiểu của compiler, đẩy lỗi thành ClassCastException ở runtime",
          "Nó bị cấm từ Java 21"
        ],
        "question": "Vì sao nên tránh raw type?"
      },
      {
        "answerIndex": 1,
        "explanation": "Class token là cách vòng chuẩn khi cần kiểm tra/tạo instance lúc runtime, vì type variable đã bị xoá.",
        "options": [
          "Dùng instanceof với kiểu tham số hoá cụ thể",
          "Truyền Class của T làm tham số để kiểm tra và tạo instance lúc runtime",
          "Dùng reflection đọc field private",
          "Tắt type erasure bằng JVM flag"
        ],
        "question": "Khi cần kiểm tra kiểu generic lúc runtime, cách tiếp cận chuẩn là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Id type là tham số thứ hai của JpaRepository khi khai báo interface repository.",
        "options": [
          "String",
          "ID được khai báo trong JpaRepository của T và ID",
          "Object",
          "Long trong mọi trường hợp"
        ],
        "question": "Spring Data suy ra kiểu của khoá chính của entity từ đâu khi khai báo repository?"
      }
    ]
  },
  "m01-optional-va-memory-model": {
    "checklist": [
      "Dùng Optional đúng cho kiểu trả về và tránh dùng cho field, tham số, phần tử collection.",
      "Thay được get() không kiểm tra bằng orElseThrow, orElseGet hoặc ifPresentOrElse phù hợp ngữ cảnh.",
      "Giải thích được quan hệ happens-before bằng ít nhất ba cơ chế thiết lập nó.",
      "Phân biệt được đảm bảo của volatile với tính nguyên tử của thao tác đọc-sửa-ghi.",
      "Mô tả được safe publication và vai trò của final field trong khởi tạo an toàn.",
      "Nhận diện được data race khi review một đoạn code chia sẻ trạng thái.",
      "Đề xuất được cách sửa bằng bất biến, AtomicReference hoặc cấu trúc concurrent phù hợp."
    ],
    "quiz": [
      {
        "answerIndex": 0,
        "explanation": "Optional được thiết kế chủ yếu làm kiểu trả về thể hiện kết quả có thể vắng mặt, ép caller xử lý trường hợp rỗng ngay tại điểm gọi.",
        "options": [
          "Kiểu trả về thể hiện kết quả có thể vắng mặt",
          "Field của entity",
          "Tham số của mọi method",
          "Phần tử bắt buộc trong collection"
        ],
        "question": "Optional được thiết kế chủ yếu cho vị trí nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "get() khi rỗng ném NoSuchElementException và bỏ qua hoàn toàn việc ép xử lý trường hợp vắng mặt, mất lợi ích chính của Optional.",
        "options": [
          "Nó chậm hơn orElse",
          "Nó tự trả về null",
          "Nó ném NoSuchElementException khi rỗng mà không ép caller xử lý trường hợp vắng mặt",
          "Nó không tồn tại trong Java 21"
        ],
        "question": "Vì sao gọi get() trên Optional mà không kiểm tra là anti-pattern?"
      },
      {
        "answerIndex": 1,
        "explanation": "orElseGet chỉ gọi supplier khi Optional rỗng, tránh tốn chi phí tạo giá trị thay thế không cần thiết như orElse.",
        "options": [
          "orElse",
          "orElseGet",
          "get",
          "ofNullable"
        ],
        "question": "Khi giá trị thay thế tốn kém để tạo, nên dùng method nào của Optional?"
      },
      {
        "answerIndex": 1,
        "explanation": "Happens-before là quan hệ thứ tự do JMM định nghĩa: nếu hành động A happens-before B thì kết quả của A được đảm bảo nhìn thấy bởi B.",
        "options": [
          "Thứ tự dòng code trong file nguồn",
          "Quan hệ đảm bảo một hành động của thread này được nhìn thấy bởi hành động của thread khác theo đặc tả JMM",
          "Thứ tự thực thi vật lý trên CPU",
          "Ưu tiên của thread"
        ],
        "question": "Quan hệ happens-before trong Java Memory Model có nghĩa là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Ghi volatile happens-before mọi lần đọc cùng biến đó sau đó; unlock một monitor happens-before lock cùng monitor tiếp theo. Cả hai đều thiết lập happens-before.",
        "options": [
          "Chỉ ghi volatile",
          "Chỉ unlock rồi lock cùng một monitor",
          "Cả ghi volatile và cặp unlock/lock cùng monitor đều thiết lập happens-before",
          "Không cơ chế nào trong các lựa chọn trên"
        ],
        "question": "Cơ chế nào sau đây thiết lập quan hệ happens-before?"
      },
      {
        "answerIndex": 1,
        "explanation": "volatile đảm bảo visibility và thứ tự quanh biến đó, nhưng đọc-sửa-ghi là ba bước tách rời, vẫn có thể chen nhau. Cần AtomicLong hoặc khoá.",
        "options": [
          "Có, volatile làm mọi thao tác đều nguyên tử",
          "Không, volatile chỉ đảm bảo visibility và thứ tự; thao tác tăng vẫn là đọc-sửa-ghi không nguyên tử",
          "Có, nếu biến là long",
          "Không, vì long không dùng được volatile"
        ],
        "question": "Một biến volatile long được tăng bằng toán tử ++ từ nhiều thread có an toàn không?"
      },
      {
        "answerIndex": 1,
        "explanation": "Safe publication là đưa reference tới thread khác qua cơ chế có happens-before: volatile, AtomicReference, khoá, collection concurrent, hoặc khởi tạo static an toàn.",
        "options": [
          "Gán reference vào một field thường bất kỳ",
          "Đưa reference qua volatile, AtomicReference, khoá hoặc collection concurrent để có happens-before",
          "Chỉ cần object đã khởi tạo xong",
          "In reference ra log"
        ],
        "question": "Safe publication của một object cho thread khác đòi hỏi điều gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "JMM đảm bảo final field của object khởi tạo đúng cách được nhìn thấy đúng bởi thread khác khi object được publication an toàn; điều kiện là constructor không để this thoát ra ngoài.",
        "options": [
          "final field không bao giờ được đọc bởi thread khác",
          "final field luôn tự đồng bộ mọi object",
          "final field được đảm bảo nhìn thấy đúng sau safe publication nếu constructor không để this thoát ra ngoài",
          "final field thay thế được volatile trong mọi trường hợp"
        ],
        "question": "Đảm bảo của final field trong JMM là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Data race là hai truy cập đồng thời cùng một biến, ít nhất một là ghi, và không có happens-before giữa chúng.",
        "options": [
          "Hai thread cùng đọc một biến final",
          "Hai truy cập đồng thời vào cùng biến, ít nhất một là ghi, không có happens-before giữa chúng",
          "Một thread ghi hai biến khác nhau",
          "Hai thread dùng hai biến khác nhau"
        ],
        "question": "Data race được định nghĩa như thế nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "Collection rỗng đã thể hiện không có phần tử; thêm Optional chỉ làm API khó dùng và dễ xuất hiện Optional field bị null.",
        "options": [
          "Vì List không chứa được Optional",
          "Vì Optional không serialize được trong List",
          "Vì compiler cấm điều đó",
          "Vì collection rỗng đã thể hiện ý nghĩa không có phần tử, bọc thêm Optional chỉ làm API khó dùng"
        ],
        "question": "Vì sao không nên bọc một collection vào trong Optional?"
      }
    ]
  },
  "m01-records-va-du-lieu-bat-bien": {
    "checklist": [
      "Khai báo được record với các component và hiểu accessor không có tiền tố get.",
      "Viết được compact constructor validate null, miền giá trị và chuẩn hoá dữ liệu.",
      "Copy phòng thủ được collection bằng List.copyOf, Set.copyOf hoặc Map.copyOf.",
      "Phân biệt được trường hợp dùng record làm DTO và trường hợp giữ JPA entity là class thường.",
      "Dùng được record làm request và response DTO trong Spring MVC với Jackson.",
      "Tạo được instance mới bằng method kiểu withX thay vì cố mutate record.",
      "Giải thích được vì sao DTO bất biến bảo vệ logic cộng điểm có idempotency key ở Nova Loyalty."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Record sinh field private final, canonical constructor, accessor mang tên component, cùng equals/hashCode/toString dựa trên toàn bộ component. Record không có setter.",
        "options": [
          "Setter cho từng component",
          "Field private final, canonical constructor, accessor, equals, hashCode và toString",
          "Constructor không tham số và proxy cho ORM",
          "Builder pattern tự động"
        ],
        "question": "Record trong Java 21 tự sinh ra những gì từ các component trong header?"
      },
      {
        "answerIndex": 0,
        "explanation": "Compact constructor bỏ qua danh sách tham số; bên trong khối, parameter mang tên component và compiler tự gán vào field khi khối kết thúc, nên đây là nơi đặt validation và chuẩn hoá.",
        "options": [
          "Không có danh sách tham số và compiler tự gán parameter vào field ở cuối khối",
          "Chạy sau khi object đã được dùng",
          "Không được ném exception",
          "Chỉ dùng cho interface"
        ],
        "question": "Compact constructor khác canonical constructor đầy đủ ở điểm nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Immutability của record là shallow: field không gán lại được nhưng nội dung của collection mutable vẫn đổi được. Cần List.copyOf trong compact constructor.",
        "options": [
          "Vì accessor trả về bản sao sâu tự động",
          "Vì record chỉ bất biến ở tầng field, object được tham chiếu tới vẫn mutable nếu không copy phòng thủ",
          "Vì List luôn đồng bộ hoá",
          "Vì equals dùng reference"
        ],
        "question": "Vì sao record chứa một List mutable vẫn có thể thay đổi nội dung?"
      },
      {
        "answerIndex": 2,
        "explanation": "List.copyOf tạo bản sao bất biến và từ chối phần tử null, cắt đứt liên kết với list gốc của caller.",
        "options": [
          "Gán thẳng reference",
          "Đặt field là static",
          "Copy bằng List.copyOf trong compact constructor",
          "Dùng synchronizedList"
        ],
        "question": "Cách chuẩn để biến một List đầu vào thành thành phần bất biến của record là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Hibernate cần tạo instance qua constructor không tham số, dùng proxy và thay đổi trạng thái managed entity. Record không đáp ứng các yêu cầu đó; hãy map entity sang record DTO.",
        "options": [
          "Record không serialize được",
          "Record là final, thiếu constructor không tham số và không hỗ trợ mutate có kiểm soát mà ORM cần",
          "Record không có equals",
          "Record không dùng được với PostgreSQL"
        ],
        "question": "Vì sao JPA entity thường không nên khai báo là record?"
      },
      {
        "answerIndex": 2,
        "explanation": "Jackson hỗ trợ record: deserialize bằng cách gọi canonical constructor với các component, serialize qua accessor.",
        "options": [
          "Setter được sinh ẩn",
          "Field injection qua reflection vào field final",
          "Canonical constructor và accessor của record",
          "Chỉ qua builder thủ công"
        ],
        "question": "Trong Spring Boot 3, Jackson bind JSON vào record bằng cơ chế nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Constructor thất bại nghĩa là không có instance nào tồn tại. Mọi instance của record do đó luôn thoả mãn các rule đã kiểm tra.",
        "options": [
          "Object được tạo với giá trị mặc định",
          "Object không được tạo ra, invariant của kiểu dữ liệu không bao giờ bị phá vỡ bởi một instance tồn tại",
          "Exception bị bỏ qua khi chạy Spring",
          "Chỉ field lỗi bị đặt null"
        ],
        "question": "Nếu validation trong compact constructor ném exception thì điều gì xảy ra?"
      },
      {
        "answerIndex": 1,
        "explanation": "Accessor của record mang đúng tên component, không có tiền tố get: memberId().",
        "options": [
          "getMemberId()",
          "memberId()",
          "fetchMemberId()",
          "this.memberId"
        ],
        "question": "Accessor của component memberId trong record được gọi như thế nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Với dữ liệu bất biến, thay đổi nghĩa là tạo instance mới. Method withX đóng gói việc này và đảm bảo compact constructor validate lại giá trị mới.",
        "options": [
          "Dùng reflection gán field",
          "Thêm setter vào record",
          "Tạo instance mới, ví dụ qua method withDelta, để validation chạy lại",
          "Sửa trực tiếp trong bộ nhớ của service"
        ],
        "question": "Muốn thay đổi delta của một ChangePointsRequest bất biến, cách đúng là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Record sinh equals/hashCode từ mọi component, phù hợp với vai trò value object: hai record bằng nhau khi mọi component bằng nhau.",
        "options": [
          "Chỉ dựa trên identity của object",
          "Dựa trên toàn bộ component của record",
          "Chỉ dựa trên component đầu tiên",
          "Không được sinh ra"
        ],
        "question": "equals và hashCode mặc định của record dựa trên điều gì?"
      }
    ]
  },
  "m01-sealed-interfaces-pattern-matching": {
    "checklist": [
      "Khai báo được sealed interface với mệnh đề permits đầy đủ.",
      "Chọn đúng final, sealed hoặc non-sealed cho từng subtype trực tiếp.",
      "Viết được switch expression dùng pattern matching và biến binding.",
      "Dùng được guard với mệnh đề when và sắp xếp thứ tự case hợp lệ.",
      "Giải thích được vì sao không nên thêm default vào switch trên sealed type.",
      "Xử lý được case null một cách tường minh trong switch.",
      "Nhận diện được trường hợp không nên dùng sealed type."
    ],
    "quiz": [
      {
        "answerIndex": 2,
        "explanation": "Sealed dùng permits để giới hạn tập subtype trực tiếp; compiler biết toàn bộ cây phân cấp.",
        "options": [
          "Từ khoá package-private",
          "Annotation @Closed",
          "Mệnh đề permits liệt kê các subtype được phép",
          "Field static final"
        ],
        "question": "Sealed interface giới hạn các subtype được phép bằng cơ chế nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Mọi subtype trực tiếp của sealed type bắt buộc tuyên bố là final, sealed hoặc non-sealed.",
        "options": [
          "public hoặc private",
          "final, sealed hoặc non-sealed",
          "abstract hoặc static",
          "transient hoặc volatile"
        ],
        "question": "Subtype trực tiếp của một sealed type bắt buộc phải chọn modifier nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Đó là giá trị cốt lõi của exhaustiveness: compiler liệt kê được subtype, thêm subtype sẽ làm switch chưa đầy đủ và lỗi biên dịch.",
        "options": [
          "Switch tự chạy nhanh gấp đôi",
          "Compiler báo lỗi ở mọi switch chưa xử lý subtype mới, buộc lập trình viên xử lý có ý thức",
          "Subtype mới bị bỏ qua ở runtime",
          "Phải viết lại toàn bộ interface"
        ],
        "question": "Khi thêm một subtype mới vào permits, điều gì xảy ra với các switch exhaustive trên sealed type đó?"
      },
      {
        "answerIndex": 2,
        "explanation": "default làm switch thoả mãn exhaustiveness theo cú pháp, nên việc thêm subtype không còn tạo lỗi biên dịch để nhắc xử lý.",
        "options": [
          "Compiler cấm default với switch",
          "Default làm switch chậm hơn",
          "Default che mất khả năng kiểm tra exhaustive theo subtype của compiler",
          "Default luôn ném exception"
        ],
        "question": "Vì sao thêm nhánh default vào switch trên sealed type thường là sai lầm?"
      },
      {
        "answerIndex": 0,
        "explanation": "Java 21 cho phép case null trong switch pattern matching để xử lý null tường minh thay vì NullPointerException mặc định.",
        "options": [
          "case null",
          "try-catch bên ngoài switch",
          "Nhánh default tự bắt null",
          "Không xử lý được null trong switch"
        ],
        "question": "Pattern matching cho switch trong Java 21 xử lý giá trị null của selector bằng cách nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "when thêm điều kiện lên pattern; case khớp khi pattern khớp và điều kiện guard đúng.",
        "options": [
          "Chạy một method trước switch",
          "Thêm điều kiện boolean lên một case pattern",
          "Khai báo biến mới cho selector",
          "Bắt exception trong case"
        ],
        "question": "Mệnh đề when trong một case pattern có vai trò gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Switch khớp theo thứ tự; case cụ thể hoặc có guard phải đứng trước case tổng quát cùng loại, nếu không sẽ unreachable.",
        "options": [
          "Thứ tự case không quan trọng",
          "Mọi case đều được thử đồng thời",
          "Case cụ thể và có guard phải đặt trước case tổng quát hơn",
          "Compiler tự sắp xếp lại case"
        ],
        "question": "Thứ tự các case trong switch pattern matching có ý nghĩa gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Record pattern deconstruct component của record ngay trong case, cho phép dùng các giá trị đã tách mà không gọi accessor thủ công.",
        "options": [
          "Tạo record mới từ case",
          "Deconstruct trực tiếp các component của record trong pattern",
          "Chuyển record thành Map",
          "Serialize record sang JSON"
        ],
        "question": "Record pattern cho phép làm gì ngay trong một case của switch?"
      },
      {
        "answerIndex": 2,
        "explanation": "non-sealed mở lại cây phân cấp: bất kỳ ai cũng kế thừa được subtype đó. Nên dùng hiếm và có chủ đích vì nó phá vỡ tính kín ở nhánh đó.",
        "options": [
          "Đóng hoàn toàn subtype",
          "Chỉ cho subtype trong cùng file",
          "Mở lại khả năng kế thừa tự do cho subtype đó",
          "Biến interface thành record"
        ],
        "question": "Modifier non-sealed trên một subtype có ý nghĩa gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Sealed hợp cho miền đóng do một team kiểm soát toàn bộ subtype. SPI/plugin cần interface mở để bên thứ ba tự implements.",
        "options": [
          "Mọi interface đều nên sealed",
          "Interface cho plugin/SPI để bên thứ ba mở rộng",
          "Interface chỉ có một method",
          "Interface trong thư viện toán học"
        ],
        "question": "Trường hợp nào sau đây KHÔNG phù hợp để dùng sealed interface?"
      }
    ]
  },
  "m01-stream-api-nang-cao": {
    "checklist": [
      "Dùng được groupingBy với downstream collector để tính tổng, đếm và map giá trị theo nhóm.",
      "Lồng được hai tầng groupingBy cho phân loại hai cấp.",
      "Dùng được teeing để lấy hai kết quả tổng hợp trong một lần duyệt.",
      "Giải thích được bốn thành phần supplier, accumulator, combiner, finisher của một Collector.",
      "Nhận diện được ít nhất ba cạm bẫy của parallel stream và nêu cách tránh.",
      "Chọn được maxBy/minBy và xử lý đúng Optional mà các collector này trả về.",
      "Đọc và tách được một stream dài thành nguồn, phép biến đổi và collector khi review code."
    ],
    "quiz": [
      {
        "answerIndex": 2,
        "explanation": "groupingBy phân nhóm theo classifier rồi áp dụng downstream collector như summingLong cho từng nhóm.",
        "options": [
          "toList()",
          "reduce()",
          "groupingBy kèm downstream collector như summingLong",
          "flatMap()"
        ],
        "question": "Muốn tổng điểm theo từng nguồn ví trong một lần duyệt stream, collector nào phù hợp nhất?"
      },
      {
        "answerIndex": 1,
        "explanation": "teeing chạy hai collector trên cùng stream và dùng merger hợp hai kết quả thành một giá trị cuối.",
        "options": [
          "Chia stream thành hai bản sao độc lập",
          "Chạy hai collector trong một lần duyệt và hợp nhất kết quả bằng một hàm merger",
          "Chạy stream song song trên hai pool",
          "Lặp lại stream hai lần tự động"
        ],
        "question": "Collectors.teeing làm gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Combiner hợp nhất hai container trung gian, điều bắt buộc khi stream chạy song song và được chia thành nhiều phần.",
        "options": [
          "Tạo container rỗng",
          "Hợp nhất hai container kết quả trung gian khi stream chạy song song",
          "Chuyển container thành kết quả cuối",
          "Lọc phần tử"
        ],
        "question": "Trong cấu trúc của một Collector, combiner có vai trò gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "maxBy/minBy trả về Optional vì stream có thể rỗng, không tồn tại phần tử cực trị.",
        "options": [
          "Long",
          "Phần tử gốc của stream",
          "Optional của phần tử cực trị",
          "List một phần tử"
        ],
        "question": "Downstream collector maxBy trả về kiểu gì cho mỗi nhóm?"
      },
      {
        "answerIndex": 1,
        "explanation": "Parallel stream dùng ForkJoinPool chung của JVM nên một tác vụ dài có thể ảnh hưởng các tác vụ song song khác trong cùng process.",
        "options": [
          "Nó luôn nhanh hơn tuần tự",
          "Nó dùng ForkJoinPool chung, nên tác vụ dài có thể ảnh hưởng các tác vụ song song khác trong cùng process",
          "Nó không hỗ trợ collector",
          "Nó tự tạo OS thread cho mỗi phần tử"
        ],
        "question": "Cạm bẫy lớn nhất của parallel stream trong một service Spring Boot là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Mutate bên ngoài phá vỡ mô hình collector có combiner đúng và không an toàn khi song song.",
        "options": [
          "Collector có combiner đúng, ví dụ summingLong hoặc reduce",
          "Một biến long bên ngoài được cộng trong forEach",
          "Một ArrayList dùng chung được thêm phần tử",
          "Field static của service"
        ],
        "question": "Cách thu gọn tổng an toàn cho cả stream tuần tự và song song là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Mỗi stream chỉ duyệt được một lần; terminal operation tiêu thụ nó. Cần tạo stream mới từ nguồn hoặc dùng teeing.",
        "options": [
          "Stream tự reset sau terminal operation",
          "Có thể dùng lại nếu gọi stream() lần nữa trên cùng biến",
          "Không, terminal operation đã tiêu thụ stream; dùng lại sẽ ném IllegalStateException",
          "Chỉ findFirst mới tiêu thụ stream"
        ],
        "question": "Một stream đã qua terminal operation có dùng lại được không?"
      },
      {
        "answerIndex": 1,
        "explanation": "mapping biến đổi phần tử trước khi đưa vào collector con, ví dụ chỉ lấy memberId vào list của từng nhóm trạng thái.",
        "options": [
          "Đổi classifier của nhóm",
          "Biến đổi phần tử trước khi đưa vào downstream collector",
          "Sắp xếp nhóm",
          "Gộp hai nhóm thành một"
        ],
        "question": "Downstream collector mapping có tác dụng gì trong groupingBy?"
      },
      {
        "answerIndex": 2,
        "explanation": "Chỉ cân nhắc song song khi phần tử nhiều, phép tính đủ nặng, nguồn splittable tốt và không có side-effect dùng chung trạng thái.",
        "options": [
          "Mọi danh sách trên 10 phần tử",
          "Khi muốn code trông hiện đại",
          "Khi số phần tử lớn, phép tính mỗi phần tử đủ nặng, nguồn splittable tốt và thao tác không có side-effect dùng chung",
          "Khi chạy trên virtual thread"
        ],
        "question": "Khi nào nên cân nhắc dùng parallel stream?"
      },
      {
        "answerIndex": 1,
        "explanation": "toMap mặc định ném IllegalStateException khi trùng khoá. Hàm merge function quyết định giữ lại hoặc hợp nhất giá trị nào.",
        "options": [
          "Phần tử sau tự ghi đè lặng lẽ",
          "toMap ném IllegalStateException nếu không cung cấp merge function",
          "toMap tự gộp thành list",
          "toMap bỏ qua phần tử trùng"
        ],
        "question": "Điều gì xảy ra khi Collectors.toMap gặp khoá trùng mà không có merge function?"
      }
    ]
  },
  "m01-virtual-threads-jep-444": {
    "checklist": [
      "Giải thích được carrier thread và cơ chế mount/unmount của virtual thread.",
      "Phân biệt được lợi ích của virtual thread cho I/O-bound và giới hạn với CPU-bound.",
      "Bật được virtual thread trong Spring Boot 3 bằng spring.threads.virtual.enabled.",
      "Nhận diện được pinning do synchronized và nêu được cách phát hiện qua sự kiện VirtualThreadPinned.",
      "Giải thích được vì sao không pool hoá virtual thread.",
      "Nêu được vai trò của connection pool và semaphore như van giới hạn sau khi bật virtual thread.",
      "Dùng được Executors.newVirtualThreadPerTaskExecutor cho tác vụ tự quản lý."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Virtual thread do JVM quản lý, nhiều virtual thread multiplex lên số ít carrier thread là platform thread.",
        "options": [
          "Một loại OS thread mới trong kernel",
          "Thread nhẹ do JVM quản lý, được mount lên carrier thread là platform thread",
          "Một dạng callback trong reactive programming",
          "Thread trong thread pool của servlet container"
        ],
        "question": "Virtual thread trong Java 21 là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Unmount giải phóng carrier cho việc khác; đó là cơ chế giúp chờ I/O trở nên rẻ.",
        "options": [
          "Thread bị huỷ và tạo lại từ đầu",
          "Stack bị xoá khỏi bộ nhớ",
          "Virtual thread được unmount khỏi carrier, nhường carrier cho thread khác cho tới khi I/O xong",
          "Carrier thread bị block theo"
        ],
        "question": "Khi virtual thread block ở thao tác I/O được hỗ trợ, JVM làm gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Pinning xảy ra khi block trong lúc giữ monitor synchronized hoặc trong native frame; JVM không unmount được.",
        "options": [
          "Virtual thread dùng quá nhiều bộ nhớ",
          "Virtual thread bị block trong khi giữ synchronized hoặc trong native code nên không unmount khỏi carrier được",
          "Hai virtual thread cùng tên",
          "Virtual thread chạy trên nhiều carrier cùng lúc"
        ],
        "question": "Pinning là hiện tượng gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Đặt spring.threads.virtual.enabled=true là cách Boot 3.3 hỗ trợ để các executor của framework dùng virtual thread.",
        "options": [
          "spring.main.reactive=true",
          "spring.threads.virtual.enabled=true",
          "server.threads.mode=virtual trong mọi trường hợp",
          "java.threads.virtual=on"
        ],
        "question": "Thuộc tính nào bật virtual thread trong Spring Boot 3.3.x?"
      },
      {
        "answerIndex": 0,
        "explanation": "Pool hoá giới hạn số virtual thread một cách nhân tạo, đi ngược mô hình mỗi task một virtual thread mới và rẻ.",
        "options": [
          "Vì virtual thread được thiết kế mỗi task một thread mới; pool hoá làm mất lợi ích concurrency",
          "Vì ExecutorService không hỗ trợ virtual thread",
          "Vì pool làm tăng bộ nhớ stack của OS thread",
          "Vì virtual thread không chạy được trong pool của Spring"
        ],
        "question": "Vì sao không nên pool hoá virtual thread như platform thread?"
      },
      {
        "answerIndex": 2,
        "explanation": "Virtual thread không tạo thêm CPU; tác vụ CPU-bound vẫn cần executor giới hạn theo số core.",
        "options": [
          "Mã hoá",
          "Xử lý ảnh nặng",
          "Chờ query database và chờ HTTP response từ service khác",
          "Tính hash mật khẩu hàng loạt"
        ],
        "question": "Workload nào KHÔNG được lợi từ virtual thread?"
      },
      {
        "answerIndex": 1,
        "explanation": "Thread không còn là nút thắt nên áp lực lộ ra ở pool/database; cần tune pool và thêm giới hạn concurrency đúng chỗ.",
        "options": [
          "Database tự nhanh hơn",
          "Toàn bộ áp lực dồn xuống connection pool và database, nút thắt thật sự lộ ra",
          "Kafka ngừng hoạt động",
          "CPU tăng tương ứng số thread"
        ],
        "question": "Sau khi bật virtual thread, điều gì thường xảy ra với connection pool?"
      },
      {
        "answerIndex": 1,
        "explanation": "Sự kiện JDK Flight Recorder jdk.VirtualThreadPinned ghi lại các lần pinning kèm stack trace để chẩn đoán.",
        "options": [
          "Actuator endpoint threads",
          "Sự kiện jdk.VirtualThreadPinned của JDK Flight Recorder",
          "Log của HikariCP",
          "Metric http.server.requests"
        ],
        "question": "Công cụ nào giúp phát hiện pinning khi chẩn đoán?"
      },
      {
        "answerIndex": 2,
        "explanation": "ReentrantLock không gây pinning khi block trong vùng khoá như synchronized, theo tài liệu JEP 444 cho JDK 21.",
        "options": [
          "CopyOnWriteArrayList",
          "volatile",
          "Thay synchronized bằng ReentrantLock ở đoạn code tự quản lý",
          "Thêm synchronized ở tầng cao hơn"
        ],
        "question": "Cách khắc phục pinning trong code tự quản lý là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Xuất phát từ Project Loom, JEP 444 đưa virtual thread thành tính năng chính thức trong Java 21.",
        "options": [
          "JEP 395",
          "JEP 444",
          "JEP 409",
          "JEP 441"
        ],
        "question": "JEP nào đưa virtual thread thành tính năng chính thức trong Java 21?"
      }
    ]
  },
  "m02-actuator-health-metrics": {
    "checklist": [
      "Bật và giới hạn được exposure của Actuator chỉ gồm endpoint vận hành cần thiết.",
      "Cấu hình được health group liveness và readiness tách biệt với thành phần đúng mục đích.",
      "Viết được một HealthIndicator riêng cho phụ thuộc nghiệp vụ.",
      "Phân biệt được Counter, Timer và Gauge và chọn đúng loại cho từng nhu cầu đo.",
      "Gắn được tag cho metric mà vẫn kiểm soát cardinality.",
      "Giải thích được vai trò của Micrometer như facade trên các hệ giám sát.",
      "Mô tả được mối nối giữa readiness state và graceful shutdown."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Theo mặc định, chỉ health và info được phơi qua HTTP; các endpoint khác phải bật có chủ đích.",
        "options": [
          "Tất cả endpoint",
          "Chỉ health và info",
          "Chỉ metrics",
          "Không endpoint nào"
        ],
        "question": "Theo mặc định, những endpoint Actuator nào được phơi qua HTTP?"
      },
      {
        "answerIndex": 2,
        "explanation": "Liveness chỉ phản ánh process còn sống; phụ thuộc ngoài thuộc readiness hoặc cảnh báo vì restart không chữa được lỗi bên ngoài.",
        "options": [
          "Mọi datasource và hệ thống ngoài",
          "Chỉ trạng thái bộ nhớ",
          "Chỉ trạng thái sống nội bộ của process, không phụ thuộc hệ thống ngoài",
          "Trạng thái của Kafka và CRM"
        ],
        "question": "Health group liveness nên chứa thành phần nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Readiness quyết định pod có nhận traffic hay không, nên gồm các kiểm tra cần thiết để phục vụ như datasource chính.",
        "options": [
          "Chỉ kiểm tra process còn chạy",
          "Các kiểm tra cần thiết để phục vụ traffic, ví dụ kết nối datasource chính",
          "Mọi kiểm tra kể cả hệ thống không thiết yếu",
          "Không kiểm tra gì"
        ],
        "question": "Health group readiness trả lời câu hỏi gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Counter chỉ tăng, dùng để đếm số sự kiện tích luỹ như số giao dịch thành công theo thời gian.",
        "options": [
          "Giá trị tức thời lên xuống tuỳ ý",
          "Thời lượng của một thao tác",
          "Số connection đang dùng",
          "Số sự kiện tích luỹ chỉ tăng theo thời gian"
        ],
        "question": "Counter trong Micrometer dùng cho loại đo nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Timer đo đồng thời thời lượng và số lần thực thi, nền tảng để tính latency và các phân vị.",
        "options": [
          "Đếm sự kiện",
          "Đo thời lượng kèm số lần thực thi của một thao tác",
          "Giá trị tức thời",
          "Tỷ lệ lỗi"
        ],
        "question": "Timer khác Counter ở điểm nào?"
      },
      {
        "answerIndex": 0,
        "explanation": "memberId có số giá trị gần như vô hạn, gắn làm tag sẽ nổ tổ hợp chuỗi thời gian ở hệ giám sát — vấn đề cardinality.",
        "options": [
          "Vì memberId có số giá trị phân biệt gần như vô hạn, gây nổ chuỗi thời gian ở hệ giám sát",
          "Vì tag không được là số",
          "Vì Micrometer cấm mọi tag nghiệp vụ",
          "Vì tag làm metric chậm"
        ],
        "question": "Vì sao không nên gắn memberId làm tag cho metric?"
      },
      {
        "answerIndex": 2,
        "explanation": "Micrometer là facade: code ghi metric qua một API chung, backend giám sát được chọn bằng registry mà không đổi code ứng dụng.",
        "options": [
          "Một hệ giám sát hoàn chỉnh",
          "Một định dạng log",
          "Một facade đo lường cho phép đổi hệ giám sát phía sau mà không đổi code ứng dụng",
          "Một thư viện vẽ biểu đồ"
        ],
        "question": "Micrometer đóng vai trò gì trong Spring Boot?"
      },
      {
        "answerIndex": 1,
        "explanation": "Khi graceful shutdown bắt đầu, readiness chuyển sang từ chối traffic để pod rút khỏi load balancer trước khi dừng hẳn.",
        "options": [
          "Liveness chuyển DOWN ngay lập tức",
          "Readiness chuyển sang từ chối traffic trước khi các thành phần dừng",
          "Mọi metric bị xoá",
          "Health endpoint bị tắt"
        ],
        "question": "Khi ứng dụng bắt đầu graceful shutdown, trạng thái availability thay đổi thế nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "env, heap dump chứa cấu hình và dữ liệu nhạy cảm; chúng phải được giới hạn nghiêm ngặt, không phơi công khai.",
        "options": [
          "Vì chúng làm chậm ứng dụng",
          "Vì chúng chỉ có ở bản trả phí",
          "Vì chúng không tồn tại trong Boot 3",
          "Vì chúng chứa thông tin nhạy cảm về cấu hình và bộ nhớ của ứng dụng"
        ],
        "question": "Vì sao endpoint env và heap dump nguy hiểm nếu phơi công khai?"
      },
      {
        "answerIndex": 1,
        "explanation": "Gauge thể hiện giá trị tức thời biến động lên xuống, ví dụ số connection đang hoạt động trong pool.",
        "options": [
          "Counter",
          "Gauge",
          "Timer",
          "Histogram tự chế bằng log"
        ],
        "question": "Loại metric nào phù hợp để thể hiện số connection đang được dùng của một pool tại một thời điểm?"
      }
    ]
  },
  "m02-configuration-properties-profiles": {
    "checklist": [
      "Khai báo được ConfigurationProperties dạng record với tiền tố theo miền.",
      "Bật được đăng ký properties bằng ConfigurationPropertiesScan.",
      "Thêm được validation để ứng dụng fail-fast khi cấu hình sai.",
      "Dùng được Duration cho các thuộc tính thời gian thay vì số thô không đơn vị.",
      "Giải thích được thứ tự ưu tiên giữa biến môi trường, file theo profile và file chung.",
      "Phân biệt được full mode của Configuration với lite mode của Component chứa Bean.",
      "Nhận diện được khi nào một vài Value đơn lẻ vẫn chấp nhận được và khi nào phải gom thành properties object."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "ConfigurationProperties bind cả cây thuộc tính cùng tiền tố vào một object có kiểu, review và validation được tại một chỗ.",
        "options": [
          "Vì nó ngắn hơn một dòng Value",
          "Vì nó gom cấu hình theo miền vào object có kiểu, validate được tập trung và fail-fast",
          "Vì Value bị cấm trong Boot 3",
          "Vì nó không cần file cấu hình"
        ],
        "question": "Lợi ích chính của ConfigurationProperties so với rải rác Value là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Thiếu cơ chế đăng ký, Boot không bind và không tạo bean cho class properties đó.",
        "options": [
          "Thêm Value mặc định",
          "Đặt class vào package config",
          "ConfigurationPropertiesScan trên application class hoặc EnableConfigurationProperties",
          "Thêm annotation Service"
        ],
        "question": "Để một class ConfigurationProperties được bind và trở thành bean, cần làm gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Biến môi trường và đối số dòng lệnh có độ ưu tiên cao hơn thuộc tính trong file, để vận hành ghi đè mà không sửa artifact.",
        "options": [
          "File cấu hình luôn thắng",
          "Biến môi trường và đối số dòng lệnh thắng thuộc tính trong file",
          "Giá trị mặc định trong code thắng tất cả",
          "File theo profile luôn thấp nhất"
        ],
        "question": "Khi cùng một khóa có ở cả biến môi trường và file cấu hình, giá trị nào thắng?"
      },
      {
        "answerIndex": 3,
        "explanation": "Ở full mode, class Configuration được proxy để lời gọi nội bộ tới method Bean khác cũng trả về singleton của container.",
        "options": [
          "Không có khác biệt",
          "Component tạo bean nhanh hơn",
          "Configuration cấm dùng Bean",
          "Configuration được proxy để lời gọi nội bộ tới method Bean cũng trả về cùng singleton của container"
        ],
        "question": "Khác biệt cốt lõi giữa Configuration và Component khi cả hai đều chứa method Bean là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Lite mode không proxy nên lời gọi nội bộ là lời gọi Java thường, tạo object mới không qua container.",
        "options": [
          "Compiler báo lỗi",
          "Hai lời gọi tạo hai instance khác nhau vì lời gọi nội bộ không qua proxy của container",
          "Container tự sửa thành Configuration",
          "Bean bị huỷ ngay"
        ],
        "question": "Trong một Component chứa các method Bean gọi lẫn nhau, điều gì xảy ra?"
      },
      {
        "answerIndex": 0,
        "explanation": "Profile gắn implementation hoặc cấu hình riêng cho một môi trường/nhóm, được kích hoạt qua spring.profiles.active hoặc biến môi trường.",
        "options": [
          "Nhãn để kích hoạt có điều kiện bean và tài liệu cấu hình theo môi trường hoặc nhóm tính năng",
          "Một loại bean scope",
          "Một cách đặt tên file log",
          "Một annotation bảo mật"
        ],
        "question": "Spring profile dùng để làm gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Validation trên properties giúp lỗi cấu hình lộ ra ngay lúc khởi động, ở gần nguyên nhân, thay vì lúc tính năng được dùng ở production.",
        "options": [
          "Để log đẹp hơn",
          "Để giảm bộ nhớ",
          "Để ứng dụng fail-fast lúc khởi động thay vì lỗi lặng lẽ ở runtime khi tính năng được dùng",
          "Để tự sửa cấu hình sai"
        ],
        "question": "Vì sao nên đặt validation trên ConfigurationProperties?"
      },
      {
        "answerIndex": 1,
        "explanation": "Boot binding hiểu các hậu tố đơn vị như s, ms cho Duration, giúp cấu hình tự mô tả và giảm lỗi nhầm đơn vị.",
        "options": [
          "Không, chỉ dùng được số nguyên",
          "Có, Boot bind các giá trị như 75s sang Duration qua cơ chế conversion của nó",
          "Chỉ khi thêm thư viện ngoài",
          "Duration phải khai báo bằng giây dạng long"
        ],
        "question": "Có bind được giá trị dạng 75s vào một component kiểu Duration không?"
      },
      {
        "answerIndex": 1,
        "explanation": "Cách viết kebab-case nhất quán theo miền rồi thành phần giúp file cấu hình đọc như bảng đối chiếu và dễ phát hiện khóa lạ.",
        "options": [
          "Viết hoa toàn bộ mọi khóa",
          "Kebab-case, nhóm theo miền rồi tới thành phần, nhất quán trên toàn bộ hệ thống",
          "Dùng tên biến Java nguyên văn",
          "Đánh số thứ tự các khóa"
        ],
        "question": "Quy ước đặt khóa cấu hình được khuyến nghị là gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Value phù hợp cho một vài giá trị đơn lẻ ít liên quan. Khi số lượng lớn và thuộc cùng miền, properties object thắng rõ rệt về kiểm soát.",
        "options": [
          "Luôn cấm Value",
          "Value chỉ dùng trong test",
          "Value luôn tốt hơn properties",
          "Một vài giá trị đơn lẻ không liên quan, dùng Value vẫn hợp lý; cấu hình theo miền nên gom vào properties object"
        ],
        "question": "Khi nào dùng Value vẫn là lựa chọn hợp lý?"
      }
    ]
  },
  "m02-ioc-di-bean-lifecycle": {
    "checklist": [
      "Giải thích được IoC và DI, ai sở hữu việc tạo object và vòng đời của nó.",
      "Chọn constructor injection làm mặc định và nêu được ít nhất ba lý do.",
      "Mô tả đúng thứ tự các giai đoạn vòng đời của singleton bean.",
      "Đặt được lifecycle callback bằng PostConstruct và PreDestroy đúng vị trí.",
      "Phân biệt được singleton, prototype và request scope, chọn scope phù hợp cho từng nhu cầu.",
      "Nhận diện được lỗi inject bean scope hẹp vào singleton và cách dùng ObjectProvider hoặc scoped proxy.",
      "Nhận diện được trạng thái theo request bị giữ sai trong singleton bean."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "IoC chuyển quyền tạo object và quản lý vòng đời từ code ứng dụng sang container; DI là hình thức cụ thể container dùng để đưa phụ thuộc vào object.",
        "options": [
          "Class tự tạo phụ thuộc bằng new",
          "Container tạo object và inject phụ thuộc vào nó theo nguyên tắc IoC/DI",
          "Mọi object đều là static",
          "Dùng reflection ở mọi nơi"
        ],
        "question": "Inversion of Control trong Spring có nghĩa là gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Constructor injection làm phụ thuộc hiển hình, đảm bảo object hợp lệ ngay khi tạo, cho phép field final và test bằng new thông thường.",
        "options": [
          "Vì nó ngắn nhất",
          "Vì nó giấu phụ thuộc tốt nhất",
          "Vì nó không cần constructor",
          "Vì phụ thuộc hiển hình, object luôn hợp lệ khi tạo xong, field đặt được final và dễ test không cần container"
        ],
        "question": "Vì sao constructor injection là lựa chọn mặc định được khuyến nghị?"
      },
      {
        "answerIndex": 1,
        "explanation": "PostConstruct chạy sau khi việc inject phụ thuộc của bean đó hoàn tất, khi bean đã sẵn sàng để thực thi logic khởi tạo.",
        "options": [
          "Trước khi constructor chạy",
          "Sau khi inject xong, trước khi bean phục vụ request",
          "Sau khi context đóng",
          "Khi bean bị huỷ"
        ],
        "question": "Method đánh dấu PostConstruct chạy ở thời điểm nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Singleton nghĩa là một instance cho mỗi bean definition trong một context, dùng chung mọi thread nên không được giữ trạng thái theo request.",
        "options": [
          "Một instance cho mỗi request",
          "Một instance cho mỗi thread",
          "Một instance cho mỗi bean definition trong một context, dùng chung cho mọi thread",
          "Một instance cho toàn bộ JVM kể cả nhiều context"
        ],
        "question": "Scope singleton trong Spring có nghĩa là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Prototype tạo instance mới mỗi lần được yêu cầu và container không quản lý bước huỷ của các instance đó.",
        "options": [
          "Một instance cho mỗi context con",
          "Mỗi lần được yêu cầu là một instance mới, container không quản lý việc huỷ",
          "Một instance cho mỗi request",
          "Instance được tạo lười luôn"
        ],
        "question": "Bean scope prototype khác singleton ở điểm nào?"
      },
      {
        "answerIndex": 0,
        "explanation": "Singleton chỉ inject một lần lúc khởi tạo, nên nó giữ đúng instance prototype đã nhận. Cần ObjectProvider hoặc scoped proxy để xin instance mới mỗi lần dùng.",
        "options": [
          "Vì singleton chỉ inject một lần; cần ObjectProvider hoặc scoped proxy để lấy instance mới mỗi lần dùng",
          "Vì prototype không inject được vào singleton",
          "Vì cần thêm annotation Async",
          "Vì prototype bị cấm trong web app"
        ],
        "question": "Inject trực tiếp bean prototype vào singleton sẽ gây hành vi gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Field injection giấu phụ thuộc và buộc test phải dùng reflection; class cũng có thể tồn tại khi chưa đủ phụ thuộc.",
        "options": [
          "Nó không được Spring hỗ trợ",
          "Nó làm bean khởi tạo chậm gấp đôi",
          "Nó giấu phụ thuộc, khó test không container và không đảm bảo bất biến",
          "Nó cấm dùng final ở mọi field khác"
        ],
        "question": "Nhược điểm chính của field injection là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Một constructor duy nhất được Spring tự dùng để inject mà không cần annotation; nhiều constructor mới cần chỉ định rõ.",
        "options": [
          "Luôn cần annotation trên constructor",
          "Không cần, Spring tự inject qua constructor duy nhất đó",
          "Cần cấu hình XML",
          "Cần đặt bean là prototype"
        ],
        "question": "Một class có đúng một constructor thì có cần đánh dấu annotation để Spring inject không?"
      },
      {
        "answerIndex": 3,
        "explanation": "PreDestroy chạy khi context đóng để bean giải phóng tài nguyên nó đang giữ.",
        "options": [
          "Khi bean được tạo",
          "Mỗi khi một method của bean được gọi",
          "Khi bean chuyển scope",
          "Khi ApplicationContext đóng, để bean giải phóng tài nguyên"
        ],
        "question": "Method đánh dấu PreDestroy được gọi khi nào và để làm gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Trạng thái theo request phải đi qua tham số hoặc bean request-scoped; giữ trong singleton là lỗi chia sẻ trạng thái giữa các thread kinh điển.",
        "options": [
          "Đặt field là volatile là đủ",
          "Không được giữ trong singleton; truyền qua tham số method hoặc dùng bean request-scoped qua proxy",
          "Đặt service thành prototype là cách duy nhất",
          "Đồng bộ hoá mọi method bằng synchronized là đủ an toàn trong mọi trường hợp"
        ],
        "question": "Trạng thái theo từng HTTP request nên được giữ ở đâu?"
      }
    ]
  },
  "m02-spring-boot-auto-configuration": {
    "checklist": [
      "Mô tả được cách Boot nạp auto-configuration từ file AutoConfiguration.imports.",
      "Phân biệt được các họ điều kiện theo class, theo bean, theo property và theo loại ứng dụng.",
      "Giải thích được nguyên tắc back-off và vai trò của ConditionalOnMissingBean.",
      "Đọc được condition report để xác định lý do một bean có hoặc không được tạo.",
      "Viết được một auto-configuration tối giản kèm properties riêng cho thư viện nội bộ.",
      "Nêu được khác biệt cấu trúc giữa module auto-configuration và module starter.",
      "Nhận diện được hệ quả của thứ tự xử lý: cấu hình người dùng đi trước auto-configuration."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Boot đọc danh sách class auto-configuration từ file AutoConfiguration.imports trong metadata của mỗi jar rồi áp dụng điều kiện lên chúng.",
        "options": [
          "Quét toàn bộ classpath tìm class có tên chứa Config",
          "Đọc file AutoConfiguration.imports trong mỗi thư viện và nạp các class được liệt kê",
          "Đọc cấu hình XML trung tâm",
          "Tự sinh cấu hình bằng reflection tại runtime"
        ],
        "question": "Spring Boot khám phá các class auto-configuration bằng cách nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "ConditionalOnMissingBean là cơ chế back-off: thư viện chỉ cung cấp bean mặc định khi ứng dụng chưa tự định nghĩa bean cùng loại.",
        "options": [
          "ConditionalOnClass",
          "ConditionalOnProperty",
          "ConditionalOnMissingBean",
          "ConditionalOnWebApplication"
        ],
        "question": "Annotation nào thực hiện nguyên tắc back-off, nhường cho bean do người dùng tự định nghĩa?"
      },
      {
        "answerIndex": 1,
        "explanation": "Condition report liệt kê positive/negative match kèm lý do cho từng auto-configuration, là bằng chứng trực tiếp cho việc điều tra.",
        "options": [
          "Stack trace của lần khởi động trước",
          "Condition evaluation report với các mục khớp và không khớp kèm lý do",
          "Danh sách dependency của Maven",
          "Log của web server"
        ],
        "question": "Công cụ nào cho biết chính xác vì sao một auto-configuration không tạo bean?"
      },
      {
        "answerIndex": 3,
        "explanation": "Việc xử lý sau cấu hình người dùng là có chủ đích: bean của người dùng tồn tại trước để các điều kiện MissingBean đánh giá đúng và back-off.",
        "options": [
          "Để auto-configuration luôn thắng",
          "Vì file imports được đọc cuối cùng theo thứ tự bảng chữ cái",
          "Không có thứ tự nào cả",
          "Để bean do người dùng định nghĩa có mặt trước, giúp auto-configuration back-off đúng qua điều kiện MissingBean"
        ],
        "question": "Vì sao auto-configuration được xử lý sau cấu hình do người dùng viết?"
      },
      {
        "answerIndex": 0,
        "explanation": "ConditionalOnClass kiểm tra sự có mặt của class trên classpath, cách starter tự nhận biết thư viện tích hợp có được dùng hay không.",
        "options": [
          "Một class có mặt trên classpath",
          "Một bean đã tồn tại",
          "Một khóa cấu hình có giá trị đúng",
          "Ứng dụng là web application"
        ],
        "question": "ConditionalOnClass đánh giá điều kiện dựa trên điều gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Thiếu back-off sẽ tạo hai bean cùng loại khi người dùng tự cấu hình, gây lỗi mơ hồ khi inject theo loại.",
        "options": [
          "Bean mặc định luôn thắng, không lỗi gì",
          "Ứng dụng lỗi hoặc mơ hồ khi inject vì có hai bean cùng loại: một của thư viện, một của người dùng",
          "Bean của người dùng bị xoá",
          "Auto-configuration bị tắt toàn bộ"
        ],
        "question": "Một auto-configuration thiếu ConditionalOnMissingBean cho bean mặc định sẽ gây hậu quả gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Starter chủ yếu là module gom dependency; phần auto-configuration nằm ở module riêng chứa class cấu hình và file imports.",
        "options": [
          "Starter chứa toàn bộ logic cấu hình",
          "Auto-configuration và starter là cùng một module luôn luôn",
          "Starter chủ yếu gom dependency, module auto-configuration riêng chứa class cấu hình và đăng ký imports",
          "Starter chỉ dùng cho ứng dụng web"
        ],
        "question": "Quan hệ giữa module starter và module auto-configuration là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Điều kiện mức class lọc cả class theo điều kiện tiên quyết; điều kiện mức bean quyết định từng bean cụ thể, gồm cả back-off theo tính năng.",
        "options": [
          "Chúng hoàn toàn giống nhau",
          "Điều kiện mức class lọc toàn bộ class, điều kiện mức bean quyết định từng bean riêng lẻ",
          "Điều kiện mức bean chạy trước khi nạp class",
          "Chỉ điều kiện mức class mới có tác dụng"
        ],
        "question": "Khác biệt giữa điều kiện mức class và điều kiện mức method bean là gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "ConditionalOnProperty đọc khóa cấu hình và giá trị của nó để quyết định, là công tắc bật tắt tính năng bằng cấu hình phổ biến.",
        "options": [
          "ConditionalOnClass",
          "ConditionalOnSingleCandidate",
          "ConditionalOnBean",
          "ConditionalOnProperty"
        ],
        "question": "Annotation nào bật tắt một tính năng dựa trên khóa cấu hình?"
      },
      {
        "answerIndex": 1,
        "explanation": "Endpoint conditions của Actuator phơi bày chính condition report đó ở môi trường được phép, cùng nguồn thông tin với bản log debug.",
        "options": [
          "Nó tự sửa cấu hình sai",
          "Nó phơi bày condition evaluation report để đọc lý do các điều kiện khớp hoặc không khớp",
          "Nó liệt kê mọi bean ở dạng mã nguồn",
          "Nó chỉ có ở bản thương mại"
        ],
        "question": "Endpoint conditions của Actuator giúp ích gì cho việc điều tra auto-configuration?"
      }
    ]
  },
  "m02-testcontainers": {
    "checklist": [
      "Khởi tạo được PostgreSQL container và Kafka container trong test bằng Testcontainers.",
      "Dùng được ServiceConnection để Boot tự nạp thông tin kết nối vào context test.",
      "Đọc được thông tin kết nối động từ container thay vì giả định cổng cố định.",
      "Tổ chức được vòng đời container dùng chung cho class/suite và cô lập dữ liệu giữa các test.",
      "Chờ được trạng thái sẵn sàng và kết quả bất đồng bộ theo điều kiện, không dùng sleep cố định.",
      "Giải thích được vì sao module chuyên biệt của từng hệ thống tốt hơn container tổng quát.",
      "Nêu được đánh đổi giữa tái sử dụng container khi phát triển và khởi động sạch trên CI."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Cổng host được chọn để tránh xung đột; code phải đọc thông tin kết nối thực tế từ container hoặc qua ServiceConnection.",
        "options": [
          "Cổng luôn cố định là 5432 và 9092",
          "Cổng host được map động, phải đọc từ container object sau khi khởi động",
          "Cổng do test tự chọn bất kỳ",
          "Container không dùng cổng"
        ],
        "question": "Khi Testcontainers khởi động một container, cổng trên máy host được xác định thế nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "ServiceConnection để Boot tự suy ra thông tin kết nối của container và nạp vào context test, loại bỏ glue code thủ công dễ sai.",
        "options": [
          "Tự viết lại JDBC URL",
          "Đánh dấu class test là Transactional",
          "Để Spring Boot tự suy ra và nạp thông tin kết nối của container vào context test",
          "Tắt auto-configuration"
        ],
        "question": "ServiceConnection trong Spring Boot 3 có tác dụng gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Kafka là ví dụ kinh điển: cổng mở trước khi broker sẵn sàng nhận message; cần chờ theo tín hiệu sẵn sàng thật như log của broker.",
        "options": [
          "Vì chờ lâu làm test chậm",
          "Vì cổng mở không đồng nghĩa hệ thống bên trong đã sẵn sàng, cần chờ đúng tín hiệu sẵn sàng của hệ thống đó",
          "Vì container không có cổng",
          "Vì Docker không báo trạng thái"
        ],
        "question": "Vì sao chỉ chờ cổng mở là không đủ với một số container?"
      },
      {
        "answerIndex": 3,
        "explanation": "sleep không gắn với điều kiện hoàn thành: vừa lãng phí thời gian, vừa vẫn có thể khẳng định trước khi consumer xử lý xong trên máy bận.",
        "options": [
          "sleep bị cấm trong JUnit",
          "sleep làm sai kết quả tính toán",
          "sleep chỉ chạy trên thread chính",
          "sleep không gắn với điều kiện hoàn thành thật: chậm mà vẫn có thể sai khi máy bận"
        ],
        "question": "Vì sao tránh dùng ngủ cố định để chờ consumer Kafka xử lý xong?"
      },
      {
        "answerIndex": 1,
        "explanation": "Khởi động container là chi phí lớn nhất; dùng chung container và cô lập dữ liệu bằng rollback/truncate/topic riêng cho tổng thời gian tốt hơn nhiều.",
        "options": [
          "Từng test method một container riêng",
          "Dùng chung cho cả class/suite, cô lập dữ liệu bằng rollback, truncate hoặc tài nguyên riêng",
          "Không bao giờ dọn container",
          "Chỉ một test duy nhất được dùng container"
        ],
        "question": "Tổ chức vòng đời container thế nào cho một suite nhiều test?"
      },
      {
        "answerIndex": 0,
        "explanation": "Reuse cần được bật tường minh ở cả thư viện và môi trường, và đánh đổi tính sạch tuyệt đối của môi trường test.",
        "options": [
          "Cần bật tường minh ở thư viện và môi trường, đánh đổi tính sạch của môi trường test",
          "Là mặc định trên mọi CI",
          "Chỉ áp dụng cho Kafka",
          "Làm test không cần Docker nữa"
        ],
        "question": "Tái sử dụng container giữa các lần chạy (reuse) có đặc điểm gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Module chuyên biệt cung cấp API và chiến lược chờ phù hợp hệ thống, ví dụ chờ log sẵn sàng của broker thay vì cổng mở.",
        "options": [
          "Nó nhỏ hơn",
          "Nó không cần Docker",
          "Nó cung cấp cấu hình mặc định và chiến lược chờ đúng với từng hệ thống",
          "Nó chạy nhanh gấp đôi luôn"
        ],
        "question": "Lợi ích của module Testcontainers chuyên biệt cho PostgreSQL/Kafka so với container tổng quát là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Chính sự trung thực của môi trường — đúng dialect, đúng hành vi broker — là giá trị của Testcontainers so với bản giả lập.",
        "options": [
          "Để test chạy nhanh hơn database nhúng",
          "Để kiểm chứng trên đúng hệ thống production dùng: dialect PostgreSQL và hành vi broker Kafka thật",
          "Để bỏ qua Docker",
          "Để thay thế mọi unit test"
        ],
        "question": "Mục đích chính của việc dùng database và broker thật trong test là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Không có Docker, Testcontainers không khởi động được; test nên được tách nhóm để bỏ qua rõ ràng thay vì đỏ khó hiểu.",
        "options": [
          "Test tự chuyển sang database nhúng",
          "Test không chạy được; nên tách nhóm test cần Docker để bỏ qua hoặc chạy ở môi trường có Docker",
          "Test tự tải Docker",
          "Không ảnh hưởng gì"
        ],
        "question": "Điều gì xảy ra nếu môi trường chạy test không có Docker?"
      },
      {
        "answerIndex": 3,
        "explanation": "Container thường được khai báo static để tồn tại xuyên suốt vòng đời class test, hoặc là bean trong cấu hình test dùng chung.",
        "options": [
          "Khai báo trong từng test method",
          "Khai báo local trong khối try",
          "Khai báo bằng biến instance không tĩnh luôn",
          "Khai báo static ở mức class hoặc dạng bean cấu hình test dùng chung cho suite"
        ],
        "question": "Khai báo container dùng chung cho cả class test thường đặt ở đâu?"
      }
    ]
  },
  "m02-testing-slice-tests": {
    "checklist": [
      "Phân biệt được phạm vi context của SpringBootTest, WebMvcTest và DataJpaTest.",
      "Viết được WebMvcTest dùng MockMvc khẳng định status và JSON bằng jsonPath.",
      "Cung cấp được phụ thuộc ngoài lát bằng MockBean trong slice test.",
      "Viết được DataJpaTest kiểm chứng mapping, query và ràng buộc duy nhất.",
      "Giải thích được giới hạn của database nhúng so với database production thật.",
      "Thiết kế được tháp test cân đối cho một service cụ thể.",
      "Giữ được test xác định: tự chuẩn bị dữ liệu, không phụ thuộc thứ tự và thời gian thực."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "WebMvcTest chỉ nạp tầng web: controller, converter, filter và cấu hình MVC; service phải được cung cấp dạng mock.",
        "options": [
          "Toàn bộ context như production",
          "Chỉ tầng web gồm controller, filter, converter và cấu hình MVC",
          "Chỉ tầng JPA",
          "Không nạp bean nào"
        ],
        "question": "WebMvcTest nạp phần nào của ApplicationContext?"
      },
      {
        "answerIndex": 2,
        "explanation": "Trong slice web, phụ thuộc ngoài lát không được nạp; MockBean đăng ký một mock vào context thay cho service thật.",
        "options": [
          "Autowired với bean thật",
          "Cấu hình XML riêng",
          "MockBean để container thay phụ thuộc ngoài lát bằng mock",
          "Tự new controller trong test"
        ],
        "question": "Trong WebMvcTest, service mà controller phụ thuộc được cung cấp bằng cách nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "DataJpaTest mặc định bọc mỗi test trong transaction và rollback ở cuối, giúp test độc lập về dữ liệu.",
        "options": [
          "Commit dữ liệu cho test sau dùng",
          "Mỗi test chạy trong transaction và rollback khi kết thúc",
          "Tắt transaction hoàn toàn",
          "Chia sẻ một transaction cho cả class"
        ],
        "question": "Hành vi transaction mặc định của DataJpaTest là gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Toàn context đắt nhất, chỉ đáng cho luồng đầu-cuối chính và kiểm tra cấu hình tổng thể — tầng đỉnh nhỏ nhất của tháp test.",
        "options": [
          "Kiểm chứng logic của một method",
          "Kiểm chứng mapping JPA",
          "Kiểm chứng validation của một DTO",
          "Kiểm chứng luồng đầu cuối và cấu hình tổng thể của ứng dụng"
        ],
        "question": "SpringBootTest toàn context phù hợp nhất cho nhu cầu nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "MockMvc đi qua toàn bộ chuỗi xử lý MVC như khi có server, chỉ thiếu tầng mạng thật.",
        "options": [
          "Chỉ gọi thẳng method của controller",
          "Gửi request mô phỏng qua filter, resolver, validation, handler và exception handling của MVC",
          "Mở cổng mạng thật trên localhost",
          "Chỉ serialize JSON"
        ],
        "question": "MockMvc kiểm chứng được điều gì mà gọi thẳng method controller không kiểm chứng được?"
      },
      {
        "answerIndex": 0,
        "explanation": "Database nhúng khác dialect và tính năng với PostgreSQL; query đặc thù có thể xanh ở test nhưng sai ở production.",
        "options": [
          "Dialect và tính năng đặc thù khác nhau, hành vi một số query và kiểu dữ liệu không giống hệt",
          "Database nhúng chậm hơn",
          "Database nhúng không hỗ trợ transaction",
          "Không có rủi ro gì"
        ],
        "question": "Vì sao database nhúng trong DataJpaTest không thay thế hoàn hảo PostgreSQL?"
      },
      {
        "answerIndex": 2,
        "explanation": "Security filter chain thuộc tầng web nên được nạp cùng slice; test phải cấu hình người dùng test và kỳ vọng rõ ràng cho cả nhánh bị từ chối.",
        "options": [
          "Security không liên quan tới WebMvcTest",
          "Chỉ cần tắt security trong mọi test",
          "Filter chain thuộc tầng web, test cần cấu hình người dùng test tường minh cho cả trường hợp được phép và bị từ chối",
          "Security chỉ chạy khi có server thật"
        ],
        "question": "Điều cần nhớ về security khi viết WebMvcTest là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Save vào repository phải flush để ràng buộc được kiểm tra ngay trong test, nếu không assertion về exception sẽ không bắt được lỗi.",
        "options": [
          "Ràng buộc chỉ kiểm tra khi ứng dụng khởi động",
          "Phải flush để câu lệnh thật sự chạm database và ràng buộc được kiểm tra ngay trong test",
          "Dùng sleep để chờ database",
          "Không thể kiểm chứng ràng buộc trong slice test"
        ],
        "question": "Muốn kiểm chứng một ràng buộc duy nhất trong DataJpaTest cần chú ý điều gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Chỉ mock phụ thuộc ngoài lát; mock chính đối tượng cần kiểm chứng làm test mất ý nghĩa vì mọi hành vi đều do ta định sẵn.",
        "options": [
          "Mock giúp test chạy nhanh",
          "Mock đối tượng cần kiểm chứng làm test xanh giả: hành vi bị kiểm chứng do chính mock định sẵn",
          "Mock bị cấm trong slice test",
          "Mock chỉ dùng cho controller"
        ],
        "question": "Vì sao không nên mock chính đối tượng đang cần kiểm chứng?"
      },
      {
        "answerIndex": 3,
        "explanation": "jsonPath khẳng định trên từng trường của body JSON trả về, kết hợp với kiểm tra status của response.",
        "options": [
          "So sánh chuỗi toàn bộ body",
          "Đọc body bằng ObjectMapper thủ công",
          "Chỉ kiểm tra status",
          "Khẳng định giá trị của từng đường dẫn trong JSON body trả về"
        ],
        "question": "jsonPath trong MockMvc dùng để làm gì?"
      }
    ]
  },
  "m03-hibernate-6-mapping-fetch": {
    "checklist": [
      "Ánh xạ được entity với identifier, cột và quan hệ đúng annotation cốt lõi.",
      "Đặt được LAZY tường minh cho collection và các quan hệ nhiều-một, một-một.",
      "Giải thích được vì sao mặc định EAGER của JPA là cái bẫy hiệu năng.",
      "Cấu hình được batch fetching bằng BatchSize hoặc default_batch_fetch_size.",
      "Chọn được equals và hashCode an toàn cho entity có field mutable.",
      "So sánh được sequence và identity về khả năng batch insert trên PostgreSQL.",
      "Giải thích được tác hại của open-in-view và cách chữa gốc lỗi nạp lười."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Mặc định JPA: quan hệ to-one là EAGER, to-many là LAZY. Mặc định EAGER cho to-one là nguồn nạp dây chuyền kinh điển.",
        "options": [
          "Mọi quan hệ đều LAZY",
          "Quan hệ to-one mặc định EAGER, to-many mặc định LAZY",
          "Mọi quan hệ đều EAGER",
          "Fetch type không có mặc định"
        ],
        "question": "Mặc định fetch type của JPA cho các loại quan hệ là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Thực hành chuẩn là LAZY ở mọi quan hệ và nạp chủ động dữ liệu cần thiết ở tầng query, để số query có thể dự đoán.",
        "options": [
          "EAGER cho mọi quan hệ nhỏ",
          "LAZY chỉ cho collection",
          "LAZY tường minh cho mọi quan hệ, nạp dữ liệu cần thiết ở tầng query",
          "Không đặt fetch type, dùng mặc định"
        ],
        "question": "Thực hành được khuyến nghị cho fetch type trong hệ hiệu năng cao là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Batch fetching nạp collection của tối đa N entity cha đang được quản lý trong một lần, giảm mạnh số query mà không đổi ngữ nghĩa.",
        "options": [
          "Nạp trước mọi collection khi entity được tạo",
          "Nạp collection lười theo lô cho nhiều entity cha đang có trong persistence context trong một lần chạm",
          "Gộp nhiều transaction thành một",
          "Đọc dữ liệu từ cache thay vì database"
        ],
        "question": "Batch fetching hoạt động thế nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "Khi hashCode dựa trên field mutable thay đổi, entity đã nằm trong Set trở nên không tìm thấy được — phá vỡ hợp đồng của hash collection.",
        "options": [
          "Không có hậu quả",
          "Entity bị xoá khỏi database",
          "Set tự sắp xếp lại",
          "hashCode thay đổi sau khi entity vào Set làm entity không còn tìm thấy được trong Set đó"
        ],
        "question": "Dựa hashCode của entity trên một field mutable gây hậu quả gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Identity ép insert ngay để lấy khoá, phá vỡ khả năng gom batch; sequence cho phép lấy khoá trước nên batch hoá được.",
        "options": [
          "Identity nhanh hơn ở mọi mặt",
          "Identity buộc insert từng dòng để biết khoá nên vô hiệu hoá batch insert; sequence lấy khoá trước nên gom batch được",
          "Sequence không dùng được với PostgreSQL",
          "Hai chiến lược giống hệt nhau"
        ],
        "question": "Khác biệt giữa sequence và identity đối với batch insert là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Hibernate cần khởi tạo entity qua constructor không tham số khi nạp từ database hoặc tạo proxy.",
        "options": [
          "Để Spring inject phụ thuộc vào entity",
          "Để người dùng không tạo được entity",
          "Để Hibernate khởi tạo instance khi nạp dữ liệu và tạo proxy",
          "Để serialization JSON hoạt động"
        ],
        "question": "Vì sao entity cần constructor không tham số?"
      },
      {
        "answerIndex": 1,
        "explanation": "open-in-view giữ persistence context và connection mở tới tầng render, che giấu nhu cầu nạp dữ liệu chưa được giải quyết trong transaction của service.",
        "options": [
          "Nó tắt transaction",
          "Nó giữ persistence context mở qua tầng render, che giấu việc service chưa nạp đủ dữ liệu trong transaction của mình",
          "Nó làm mất dữ liệu",
          "Nó chỉ ảnh hưởng tới test"
        ],
        "question": "Vì sao nên tắt spring.jpa.open-in-view trong các service hiệu năng cao?"
      },
      {
        "answerIndex": 0,
        "explanation": "BatchSize đặt ngay trên collection hoặc class cần nạp theo lô, phạm vi áp dụng hẹp và rõ ràng theo từng quan hệ.",
        "options": [
          "Trên collection hoặc entity cần nạp lười theo lô",
          "Trên method của controller",
          "Trong file cấu hình của web server",
          "Trên repository interface"
        ],
        "question": "Annotation BatchSize được đặt ở đâu?"
      },
      {
        "answerIndex": 2,
        "explanation": "Version phục vụ optimistic locking: Hibernate kiểm tra và tăng version mỗi lần cập nhật, phát hiện xung đột ghi đồng thời.",
        "options": [
          "Đánh dấu cột là khoá chính",
          "Chỉ để hiển thị phiên bản dữ liệu cho người dùng",
          "Phục vụ optimistic locking, được kiểm tra và tăng khi entity được cập nhật",
          "Đánh dấu cột không được cập nhật"
        ],
        "question": "Trường đánh dấu Version trong entity có vai trò gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Proxy lười cho quan hệ một-một ở phía không sở hữu khoá ngoại có các giới hạn kỹ thuật riêng trong Hibernate; cần đối chiếu tài liệu phiên bản khi gặp trường hợp này.",
        "options": [
          "Mọi quan hệ đều lười hoàn hảo như nhau",
          "Phía không sở hữu khoá ngoại của quan hệ một-một có giới hạn về proxy lười, cần đối chiếu tài liệu của phiên bản sử dụng",
          "Quan hệ một-một không hỗ trợ LAZY",
          "LAZY bị cấm ở quan hệ một-một"
        ],
        "question": "Điểm cần lưu ý về fetch LAZY cho quan hệ một-một là gì?"
      }
    ]
  },
  "m03-hikaricp-tuning": {
    "checklist": [
      "Giải thích được vì sao pool vượt quá năng lực database làm latency tệ hơn thay vì tốt hơn.",
      "Cấu hình được maximumPoolSize và minimumIdle theo mô hình pool cố định.",
      "Phân biệt và đặt đúng connectionTimeout, maxLifetime, idleTimeout, keepaliveTime.",
      "Bật được leakDetectionThreshold và đọc stack trace nó ghi để truy nơi giữ connection.",
      "Đọc được metric pool: connection đang dùng, thread đang chờ, thời gian chờ lấy connection.",
      "Phân biệt được ba gốc rễ cạn pool: query chậm, leak và trần quá thấp.",
      "Tính được ngân sách connection ở quy mô fleet cho cả 5 pool của Nova Loyalty."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Số connection hữu ích bị chặn bởi năng lực đồng thời của database; vượt quá mức đó, query tranh chấp nhau, latency tăng và connection bị giữ lâu hơn.",
        "options": [
          "Pool lớn luôn nhanh hơn vì nhiều connection hơn",
          "Số connection hữu ích bị chặn bởi năng lực đồng thời thật của database; vượt quá sẽ tăng tranh chấp và latency",
          "Pool chỉ bị giới hạn bởi bộ nhớ của JVM",
          "Kích thước pool không ảnh hưởng latency"
        ],
        "question": "Vì sao pool quá lớn có thể làm hệ thống chậm hơn?"
      },
      {
        "answerIndex": 2,
        "explanation": "Thực hành phổ biến với HikariCP là minimumIdle bằng maximumPoolSize để tránh dao động tạo/hủy connection và giữ hành vi dự đoán được.",
        "options": [
          "Luôn đặt minimumIdle bằng 0",
          "Đặt minimumIdle lớn hơn maximumPoolSize",
          "Đặt bằng maximumPoolSize để pool có kích thước cố định",
          "Không có quan hệ nào"
        ],
        "question": "Thực hành phổ biến cho minimumIdle trong HikariCP là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "connectionTimeout là thời gian thread chờ lấy connection tối đa trước khi nhận exception, van bảo vệ chống chờ vô hạn.",
        "options": [
          "Tuổi thọ tối đa của một connection",
          "Thời gian tối đa một thread chờ lấy connection trước khi nhận exception",
          "Chu kỳ kiểm tra connection rỗi",
          "Thời gian một query được phép chạy"
        ],
        "question": "connectionTimeout có ý nghĩa gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "maxLifetime nên thấp hơn giới hạn phía dưới một khoảng an toàn để pool chủ động thay connection trước khi bị cắt đột ngột.",
        "options": [
          "Cao hơn nhiều để ít thay connection",
          "Bằng đúng giới hạn của database",
          "Không liên quan tới giới hạn phía dưới",
          "Thấp hơn giới hạn tối đa phía database hoặc mạng một khoảng an toàn"
        ],
        "question": "maxLifetime nên được đặt thế nào so với giới hạn sống của connection phía database/mạng?"
      },
      {
        "answerIndex": 0,
        "explanation": "Leak detection chỉ ghi log kèm stack trace của nơi lấy connection khi nó bị giữ quá ngưỡng; nó không thu hồi connection.",
        "options": [
          "Ghi log kèm stack trace của nơi lấy connection khi connection bị giữ quá ngưỡng, không tự thu hồi",
          "Tự đóng connection bị leak",
          "Tự khởi động lại pool",
          "Báo cáo qua email cho quản trị viên"
        ],
        "question": "leakDetectionThreshold làm gì khi một connection bị giữ quá lâu?"
      },
      {
        "answerIndex": 1,
        "explanation": "Ba phân biệt chính: trần chạm + giữ dài do công việc thật là query chậm; tăng đơn điệu không giảm là leak; giữ bình thường nhưng đồng thời vượt trần mới là trần thấp.",
        "options": [
          "Cả ba đều chữa bằng tăng pool",
          "Connection giữ dài bất thường là query chậm, số đang dùng tăng đơn điệu không giảm là leak, giữ bình thường mà vẫn thiếu mới là trần thấp",
          "Chỉ dựa vào số request mỗi giây",
          "Không phân biệt được"
        ],
        "question": "Làm sao phân biệt query chậm, leak và trần pool quá thấp khi cạn pool?"
      },
      {
        "answerIndex": 2,
        "explanation": "Ngân sách connection thuộc cả fleet: kích thước pool nhân số pod, tính trên mọi pool trỏ về cùng database.",
        "options": [
          "Kích thước pool của một pod",
          "Số connection của database ở trạng thái rỗi",
          "Tổng bằng kích thước pool nhân số pod trên mọi pool trỏ về cùng một database",
          "Số request đồng thời tối đa"
        ],
        "question": "Ngân sách connection cần tính ở quy mô nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Keepalive kiểm tra nhẹ connection rỗi còn sống, hữu ích khi tường lửa hoặc NAT cắt kết nối im lặng sau một thời gian.",
        "options": [
          "Để tăng kích thước pool tự động",
          "Để kiểm tra định kỳ connection rỗi còn sống khi mạng hoặc tường lửa có thể cắt kết nối im lặng",
          "Để thay thế maxLifetime",
          "Để ghi log mọi lần lấy connection"
        ],
        "question": "keepaliveTime hữu ích trong tình huống nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "idleTimeout chỉ có tác dụng với phần connection vượt minimumIdle; pool cố định không có phần vượt đó nên thông số này không còn vai trò thực tế.",
        "options": [
          "Nó huỷ cả pool",
          "Nó quyết định connectionTimeout",
          "Nó tăng gấp đôi khi pool cố định",
          "Nó không còn tác dụng thực tế vì không có connection nào vượt mức tối thiểu để bị loại"
        ],
        "question": "Khi pool cố định với minimumIdle bằng maximumPoolSize, idleTimeout có vai trò gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Thread chờ tăng là tín hiệu mọi người thấy, nhưng quyết định đúng cần thêm: mức dùng trần và thời gian giữ connection, để tránh tăng pool mù quáng.",
        "options": [
          "Chỉ số này luôn đồng nghĩa phải tăng pool",
          "Nó cho biết áp lực chờ, nhưng phải kết hợp mức dùng trần và thời gian giữ connection để quyết định gốc rễ",
          "Nó không liên quan tới pool",
          "Nó chỉ tăng khi database chết"
        ],
        "question": "Metric số thread đang chờ lấy connection cho biết điều gì?"
      }
    ]
  },
  "m03-locking-va-flyway": {
    "checklist": [
      "Giải thích được cơ chế kiểm tra version của optimistic locking và thời điểm xung đột bị phát hiện.",
      "Xử lý được OptimisticLockException bằng thử lại toàn bộ đơn vị công việc trong transaction mới có giới hạn.",
      "Phân biệt được các mode khóa bi quan qua annotation Lock và giới hạn của chúng trong một transaction.",
      "Chọn được cơ chế khóa theo mức tranh chấp, độ dài đơn vị công việc và chi phí làm lại.",
      "Viết được tên file migration Flyway đúng mẫu với version 14 chữ số theo thời gian.",
      "Giải thích được checksum và vì sao migration đã áp dụng là bất biến.",
      "Nêu được cách mỗi database trong hệ multi-datasource giữ bộ migration và bảng lịch sử riêng."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Hibernate thêm điều kiện version bằng giá trị lúc đọc vào câu cập nhật; chạm 0 dòng nghĩa là đã có transaction khác sửa trước và xung đột được báo.",
        "options": [
          "Khóa dòng ngay khi đọc",
          "Kiểm tra cột version vẫn bằng giá trị lúc đọc trong câu cập nhật, tăng version khi ghi thành công",
          "So sánh toàn bộ các cột của entity",
          "Dùng một bảng khóa riêng của ứng dụng"
        ],
        "question": "Optimistic locking bằng Version phát hiện xung đột bằng cách nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Thử lại phải bắt đầu từ bước đọc trong transaction mới để lấy trạng thái và version mới nhất; dùng lại entity cũ sẽ xung đột tiếp hoặc ghi đè.",
        "options": [
          "Thử lại chính entity cũ ngay lập tức không giới hạn",
          "Tắt version và ghi thẳng",
          "Làm lại toàn bộ đơn vị công việc từ bước đọc trong một transaction mới, với số lần thử có giới hạn",
          "Chờ một giây rồi ghi lại cùng câu lệnh"
        ],
        "question": "Khi gặp OptimisticLockException, cách xử lý đúng cho thao tác ngắn là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "PESSIMISTIC_WRITE ánh xạ tới khóa ghi kiểu FOR UPDATE, ngăn transaction khác sửa và tuỳ trường hợp ngăn đọc có khóa tới khi transaction kết thúc.",
        "options": [
          "Không lấy khóa nào",
          "Lấy khóa ghi của database ngay khi đọc và giữ tới cuối transaction",
          "Chỉ tăng version",
          "Khóa ở tầng ứng dụng bằng synchronized"
        ],
        "question": "Khóa bi quan PESSIMISTIC_WRITE làm gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Pessimistic chỉ tồn tại trong một transaction liên tục; chỉnh sửa ngắt quãng qua nhiều request cần version đi cùng dữ liệu của optimistic locking.",
        "options": [
          "Khi cần thông lượng cao nhất",
          "Khi tranh chấp rất thấp",
          "Khi muốn tránh mọi exception",
          "Khi dữ liệu được đọc ở một request và ghi ở một request khác sau đó"
        ],
        "question": "Trường hợp nào bắt buộc dùng optimistic thay vì pessimistic?"
      },
      {
        "answerIndex": 0,
        "explanation": "Quy ước Nova dùng version 14 chữ số yyyyMMddHHmmss để tránh trùng giữa các nhánh song song và giữ thứ tự theo thời gian tạo.",
        "options": [
          "Để gần như không bao giờ trùng version khi nhiều nhánh tạo migration song song, đồng thời giữ thứ tự theo thời gian",
          "Vì Flyway yêu cầu đúng 14 chữ số",
          "Để tên file ngắn hơn",
          "Để giấu thời gian tạo migration"
        ],
        "question": "Vì sao Nova dùng version 14 chữ số theo thời gian cho migration Flyway?"
      },
      {
        "answerIndex": 1,
        "explanation": "Checksum lệch cho thấy nội dung file khác với lúc được áp dụng; Flyway coi đây là can thiệp vào lịch sử và dừng lại để bảo vệ schema.",
        "options": [
          "Flyway tự chạy lại migration đó",
          "Ứng dụng từ chối khởi động cho tới khi lịch sử và nội dung file khớp lại, và cách sửa đúng là viết migration mới",
          "Checksum được tự cập nhật lặng lẽ",
          "Chỉ môi trường dev mới kiểm tra checksum"
        ],
        "question": "Điều gì xảy ra khi sửa nội dung một migration đã được áp dụng?"
      },
      {
        "answerIndex": 2,
        "explanation": "Mẫu đúng gồm tiền tố V, version, hai dấu gạch dưới, mô tả ngắn ngăn cách gạch dưới và đuôi .sql.",
        "options": [
          "migration-2026-add-wallet.sql",
          "V1.wallet.sql",
          "V20261022103000__create_points_wallet.sql",
          "20261022103000-create-wallet.sql"
        ],
        "question": "Tên file nào đúng quy ước versioned migration của Flyway trong bài?"
      },
      {
        "answerIndex": 1,
        "explanation": "Thứ tự khóa nhất quán theo id loại bỏ vòng chờ, nguyên nhân trực tiếp của deadlock giữa các transaction.",
        "options": [
          "Tăng kích thước pool",
          "Luôn lấy khóa các dòng theo cùng một thứ tự cố định, ví dụ tăng dần theo id",
          "Tắt mọi transaction khác",
          "Dùng mức cô lập thấp nhất"
        ],
        "question": "Biện pháp chính để giảm deadlock khi dùng khóa bi quan là gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Bảng lịch sử là sổ ghi của Flyway trên chính database đó: version nào đã chạy, khi nào, checksum bao nhiêu và thành công hay không.",
        "options": [
          "Danh sách người dùng của database",
          "Nhật ký query chậm",
          "Cấu hình pool",
          "Bản ghi các migration đã áp dụng trên database đó kèm version và checksum"
        ],
        "question": "Bảng lịch sử schema của Flyway ghi lại điều gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Trong hệ 5 database, mỗi database có bộ migration và lịch sử riêng; thay đổi xuyên database là nhiều migration được điều phối ở tầng phát hành.",
        "options": [
          "Một bộ migration chung cho cả 5 database",
          "Mỗi database có bộ migration và bảng lịch sử riêng, thay đổi xuyên database được điều phối ở tầng phát hành",
          "Chỉ database core mới cần migration",
          "Migration được chạy bằng tay trên từng pod"
        ],
        "question": "Trong hệ multi-datasource, migration Flyway được tổ chức thế nào?"
      }
    ]
  },
  "m03-multi-datasource-khong-jta": {
    "checklist": [
      "Liệt kê được bộ ba bean riêng cho mỗi datasource: DataSource, EntityManagerFactory, TransactionManager.",
      "Tách được package entity và repository riêng cho từng database và gắn đúng các Ref.",
      "Đánh dấu được cụm Primary và chỉ định rõ manager ở các biên không mặc định.",
      "Dùng đúng Transactional với thuộc tính transactionManager cho database không mặc định.",
      "Giải thích được vì sao hai Transactional khác manager là hai transaction độc lập không truyền bá.",
      "Thiết kế được một luồng xuyên database bằng Outbox, idempotency và thao tác bù trừ.",
      "Nhận diện được lỗi self-invocation làm annotation transaction vô hiệu."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Không JTA nghĩa là mọi transaction là local trên một database; không tồn tại atomic commit bao nhiều database, nên cần mẫu bù trừ và nhất quán cuối cùng.",
        "options": [
          "Mỗi database có pool riêng",
          "Không có atomic commit xuyên database, mỗi transaction chỉ là local trên một database",
          "Không dùng được Transactional",
          "Mọi database phải cùng một máy chủ"
        ],
        "question": "Multi-datasource không JTA có nghĩa cốt lõi là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Mỗi database cần trọn bộ ba riêng gắn với nhau; thiếu một thành phần là cụm không hoạt động được đúng.",
        "options": [
          "Chỉ DataSource riêng, dùng chung mọi thứ còn lại",
          "DataSource và TransactionManager riêng, EntityManagerFactory dùng chung",
          "DataSource, EntityManagerFactory và TransactionManager riêng cho từng database",
          "Chỉ cần nhiều JDBC URL trong một cấu hình"
        ],
        "question": "Một cụm datasource độc lập gồm những thành phần nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Thuộc tính transactionManager của Transactional chỉ định bean quản lý transaction cho biên đó; không chỉ định nghĩa là dùng manager mặc định/chính.",
        "options": [
          "Đặt tên pool trùng tên manager",
          "Chỉ định thuộc tính transactionManager của annotation Transactional",
          "Thêm một annotation Configuration",
          "Dùng Propagation.REQUIRES_NEW"
        ],
        "question": "Để một method chạy transaction trên database không mặc định, cần làm gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Hai manager khác nhau tạo hai transaction trên hai connection độc lập; rollback phía ngoài không hoàn lại phần đã commit phía trong.",
        "options": [
          "Spring tự hợp nhất chúng thành một",
          "Transaction trong bị cấm",
          "Cả hai bị rollback cùng nhau luôn",
          "Hai transaction độc lập: rollback ở transaction ngoài không hoàn lại phần đã commit ở transaction trong"
        ],
        "question": "Hai method Transactional với hai manager khác nhau được gọi lồng nhau sẽ hành xử thế nào?"
      },
      {
        "answerIndex": 0,
        "explanation": "Primary phân giải các điểm inject không chỉ định khi có nhiều bean cùng loại, tránh lỗi mơ hồ lúc khởi động.",
        "options": [
          "Để khi có nhiều bean cùng loại, các điểm dùng mặc định không chỉ định phân giải được về cụm chính",
          "Để pool của cụm chính lớn hơn",
          "Để tắt các cụm còn lại",
          "Để đánh dấu database quan trọng nhất cho người đọc"
        ],
        "question": "Vai trò của đánh dấu Primary trên một cụm datasource là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Package chồng lấn làm entity đăng ký vào nhiều persistence unit và repository nối sai cụm; tách package theo database là kỷ luật bắt buộc.",
        "options": [
          "Cho code gọn hơn",
          "Để entity và repository của từng database không bị quét lẫn vào persistence unit của nhau",
          "Vì Spring bắt buộc tên package phải chứa tên database",
          "Để dễ đặt tên file"
        ],
        "question": "Vì sao phải tách package entity và repository theo từng database?"
      },
      {
        "answerIndex": 2,
        "explanation": "Thu hẹp dữ liệu cần atomic vào một database, phần lan truyền dùng Outbox và idempotency là bộ mẫu chuẩn thay cho XA.",
        "options": [
          "Thêm một Transactional bao ngoài cùng",
          "Tăng timeout của mọi transaction",
          "Thu hẹp biên atomic vào một database, phần còn lại dùng Outbox, idempotency và bù trừ",
          "Chuyển mọi ghi sang bất đồng bộ không cần đảm bảo"
        ],
        "question": "Mẫu thiết kế đúng cho luồng nghiệp vụ xuyên database trong mô hình này là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Self-invocation không qua proxy nên annotation của method đích, gồm cả chỉ định manager, không được áp dụng.",
        "options": [
          "Vì method private bị cấm dùng Transactional",
          "Vì lời gọi nội bộ trong cùng class không đi qua proxy của Spring nên annotation trên method đích vô hiệu",
          "Vì hai manager không được khai báo cùng lúc",
          "Vì cần thêm annotation Async"
        ],
        "question": "Vì sao tự gọi một method Transactional trong cùng class làm mất tác dụng của annotation?"
      },
      {
        "answerIndex": 3,
        "explanation": "Audit tách riêng để việc ghi dấu vết không tranh chấp và không bị rollback theo transaction nghiệp vụ chính, đồng thời có chính sách lưu trữ riêng.",
        "options": [
          "Vì audit không cần transaction",
          "Vì JTA yêu cầu vậy",
          "Vì audit dùng database khác loại",
          "Để ghi dấu vết độc lập với transaction nghiệp vụ: không bị rollback theo nghiệp vụ và không tranh chấp tài nguyên với core"
        ],
        "question": "Nova Loyalty tách datasource audit riêng vì lợi ích gì trong mô hình này?"
      },
      {
        "answerIndex": 1,
        "explanation": "Boot chỉ tự cấu hình một cụm mặc định; khi tự khai báo nhiều cụm, trách nhiệm khai báo đầy đủ và gắn kết đúng thuộc về ứng dụng.",
        "options": [
          "Boot tự nhân bản cụm mặc định theo số JDBC URL",
          "Khi tự khai báo các cụm riêng, ứng dụng tiếp quản toàn bộ cấu hình mà auto-configuration từng làm cho cụm mặc định",
          "Boot cấm nhiều datasource",
          "Chỉ cần khai báo các DataSource"
        ],
        "question": "Khi tự cấu hình multi-datasource, quan hệ với auto-configuration của Boot là gì?"
      }
    ]
  },
  "m03-n-plus-1-fetch-strategies": {
    "checklist": [
      "Nhận diện được chữ ký của N+1 trong log SQL: một query chính và hàng loạt query giống nhau khác tham số id.",
      "Đo được số query cho một kịch bản bằng thống kê Hibernate trước và sau khi sửa.",
      "Áp dụng được JOIN FETCH cho một quan hệ của một truy vấn cụ thể.",
      "Dùng được EntityGraph để tái sử dụng đồ thị nạp ở nhiều query.",
      "Chọn được DTO projection cho nhu cầu chỉ đọc cần ít cột.",
      "Giải thích được rủi ro tích Descartes khi fetch join nhiều collection.",
      "Xử lý được phân trang kết hợp fetch join collection bằng kỹ thuật hai bước lấy id trước."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "N+1 là một query nạp N entity cha cộng thêm một query cho quan hệ lười của từng entity cha, tổng 1 + N query.",
        "options": [
          "Một query chạy N lần do retry",
          "Một query nạp N entity cha rồi mỗi entity phát thêm một query cho quan hệ lười, tổng 1 cộng N query",
          "N query chạy song song có chủ đích",
          "Một query join N bảng"
        ],
        "question": "Bài toán N+1 được định nghĩa thế nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Một query chính nối tiếp hàng loạt query giống hệt nhau chỉ khác tham số id là dấu hiệu đặc trưng của việc nạp lười trong vòng lặp.",
        "options": [
          "Một câu SQL bị lỗi cú pháp",
          "Nhiều câu SQL khác nhau chạy xen kẽ",
          "Một query chính rồi hàng loạt query giống nhau chỉ khác tham số id, lặp theo số entity",
          "Không có query nào trong log"
        ],
        "question": "Chữ ký nhận diện N+1 trong log SQL là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "generate_statistics cho số statement định lượng để khẳng định trước/sau và viết test đếm query có ngưỡng cụ thể.",
        "options": [
          "Đặt log ở mức TRACE cho mọi package",
          "Bật generate_statistics của Hibernate và đọc số statement cho kịch bản cố định",
          "Đếm thủ công bằng mắt mỗi lần chạy",
          "Dựa vào cảm nhận thời gian phản hồi"
        ],
        "question": "Cách đo N+1 có bằng chứng định lượng là gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Join đồng thời nhiều collection tạo tích Descartes, kết quả phình to và với bag Hibernate không xử lý an toàn được.",
        "options": [
          "Hibernate tự tối ưu hoàn hảo",
          "Kết quả bị sắp xếp lại",
          "Chỉ tốn thêm một query",
          "Tích Descartes làm phình kết quả, có thể gây lỗi với nhiều bag được fetch cùng lúc"
        ],
        "question": "Fetch join hai collection cùng lúc gây rủi ro gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Một entity chiếm nhiều dòng sau join nên phân trang phải tách: lấy id theo trang ở database, rồi fetch đầy đủ cho các id đó.",
        "options": [
          "Tăng kích thước trang lên gấp đôi",
          "Tách hai bước: phân trang lấy id ở database, rồi fetch đầy đủ dữ liệu cho các id đó không phân trang nữa",
          "Đổi sang EAGER",
          "Bỏ phân trang hoàn toàn"
        ],
        "question": "Khi cần vừa phân trang vừa fetch join một collection, cách xử lý đúng là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Load graph giữ các quan hệ có fetch type EAGER theo mapping ngoài những gì liệt kê, còn fetch graph coi mọi thứ không liệt kê là lười.",
        "options": [
          "Fetch graph coi quan hệ không liệt kê là lười, load graph giữ nguyên fetch type theo mapping cho phần không liệt kê",
          "Chúng giống hệt nhau",
          "Load graph luôn nhanh hơn",
          "Fetch graph chỉ dùng cho một entity"
        ],
        "question": "EntityGraph có hai loại fetch graph và load graph khác nhau ở điểm nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Projection chỉ lấy đúng cột cần, không entity, không dirty checking, không nạp lười — phù hợp nhất cho nhu cầu chỉ đọc.",
        "options": [
          "JOIN FETCH",
          "EntityGraph",
          "DTO projection bằng constructor expression",
          "Batch fetching"
        ],
        "question": "Chiến lược nào phù hợp nhất cho màn hình chỉ đọc cần số ít cột và tổng hợp?"
      },
      {
        "answerIndex": 1,
        "explanation": "EAGER là quyết định toàn cục trên mapping, làm mọi query khác cũng phải kéo đồ thị quan hệ không cần thiết.",
        "options": [
          "EAGER bị cấm trong Hibernate 6",
          "Vì EAGER áp dụng toàn cục cho mọi truy vấn qua mapping đó, khiến các query không cần dữ liệu vẫn phải nạp quan hệ",
          "Vì EAGER chậm hơn LAZY ở mọi query đơn lẻ",
          "Vì EAGER không hoạt động với collection"
        ],
        "question": "Vì sao không nên chữa N+1 bằng cách đổi mapping sang EAGER?"
      },
      {
        "answerIndex": 1,
        "explanation": "Batch fetching giữ query gốc, chỉ đổi cách nạp lười thành theo lô — hợp khi join làm phình dữ liệu hoặc query có nhiều biến thể.",
        "options": [
          "Khi chỉ có đúng một query duy nhất trong hệ thống",
          "Khi dữ liệu con cần cho mọi entity cha nhưng join sẽ phình kết quả hoặc query có nhiều biến thể",
          "Khi không dùng được JPQL",
          "Khi cần phân trang trong bộ nhớ"
        ],
        "question": "Batch fetching là lựa chọn tốt trong tình huống nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "Test đếm query biến N+1 thành lỗi đỏ trong CI ngay khi code thay đổi làm tăng số query vượt ngưỡng.",
        "options": [
          "Không thể kiểm chứng số query trong test",
          "Chỉ kiểm chứng được bằng tay ở production",
          "Dựa vào thời gian chạy test",
          "Khẳng định số query tối đa cho một kịch bản cố định để hồi quy bị bắt ngay trong CI"
        ],
        "question": "Viết test đếm query mang lại lợi ích gì?"
      }
    ]
  },
  "m04-cors-csrf-cho-api": {
    "checklist": [
      "Cấu hình CORS với origin cụ thể, không dùng wildcard khi có credentials.",
      "Bật được CORS trong SecurityFilterChain để preflight không bị chặn 401.",
      "Giải thích được preflight OPTIONS và khi nào trình duyệt gửi nó.",
      "Nêu được vì sao API thuần bearer token có thể tắt CSRF có cơ sở.",
      "Nhận diện được trường hợp tắt CSRF là sai: API vẫn chấp nhận cookie.",
      "Phân biệt được đánh đổi bảo mật giữa cookie-based auth và header bearer token."
    ],
    "quiz": [
      {
        "answerIndex": 0,
        "explanation": "CORS là thỏa thuận giữa trình duyệt và máy chủ về việc JS khác origin có được đọc response hay không; client không phải trình duyệt không bị CORS ràng buộc.",
        "options": [
          "Cơ chế của trình duyệt, máy chủ cho biết origin nào được đọc response",
          "Cách load balancer chọn backend",
          "Một cơ chế mã hóa dữ liệu trên đường truyền",
          "Một loại token chống CSRF"
        ],
        "question": "CORS chủ yếu bảo vệ điều gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Header tùy biến như Authorization khiến request không còn là simple request, trình duyệt phải hỏi trước bằng preflight OPTIONS.",
        "options": [
          "Khi method là GET đơn giản không header tùy biến",
          "Chỉ khi response là JSON",
          "Khi cookie sắp hết hạn",
          "Khi request có header tùy biến như Authorization hoặc method không đơn giản"
        ],
        "question": "Khi nào trình duyệt gửi preflight request?"
      },
      {
        "answerIndex": 2,
        "explanation": "Đặc tả cấm kết hợp wildcard origin với credentials vì nó cho mọi trang web đọc response mang danh tính nạn nhân.",
        "options": [
          "Vì trình duyệt sẽ cache vĩnh viễn cấu hình đó",
          "Vì máy chủ không parse được dấu sao",
          "Vì mọi origin đều được đọc response mang credential của nạn nhân",
          "Vì wildcard làm chậm preflight"
        ],
        "question": "Vì sao không được dùng wildcard origin kèm allowCredentials?"
      },
      {
        "answerIndex": 0,
        "explanation": "CSRF dựa trên việc cookie được trình duyệt tự đính kèm; token trong header thì phải do client chủ động thêm, trang độc hại không có token đó.",
        "options": [
          "Vì trình duyệt không tự đính kèm header Authorization, còn cookie thì tự được gửi kèm",
          "Vì JWT không bao giờ hết hạn",
          "Vì CSRF chỉ tấn công được database",
          "Vì trình duyệt chặn mọi request khác origin"
        ],
        "question": "Vì sao API thuần bearer token trong header thường không bị CSRF kinh điển?"
      },
      {
        "answerIndex": 3,
        "explanation": "Khi cookie được chấp nhận làm xác thực, bề mặt CSRF quay lại đầy đủ; phải bật CSRF token hoặc cơ chế tương đương cho phần đó.",
        "options": [
          "Không sao vì đã có CORS",
          "Tắt luôn xác thực cookie là lỗi bảo mật khác",
          "Chỉ cần đổi tên cookie",
          "Phải bật lại cơ chế CSRF token cho phần dùng cookie hoặc tách bề mặt xác thực"
        ],
        "question": "Nếu cùng API cũng chấp nhận session cookie, quyết định tắt CSRF sẽ thế nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Security filter chạy trước MVC; nếu CORS không được bật trong chain, preflight chết ở tầng filter trước khi tới controller.",
        "options": [
          "Vì preflight dùng giao thức khác",
          "Vì preflight bị filter bảo mật xử lý trước controller, nên CORS phải bật trong SecurityFilterChain",
          "Vì gateway luôn xóa header Origin",
          "Vì annotation CORS chỉ áp dụng cho GET"
        ],
        "question": "Vì sao phải bật CORS trong SecurityFilterChain thay vì chỉ gắn ở controller?"
      },
      {
        "answerIndex": 1,
        "explanation": "Máy chủ cần cho phép đúng origin, method và các header mà client sẽ gửi, nếu không trình duyệt chặn request thật.",
        "options": [
          "Phiên bản TLS của trình duyệt",
          "Origin, method và header được phép như Authorization và Content-Type",
          "Chỉ địa chỉ IP của client",
          "Kích thước tối đa của request body"
        ],
        "question": "Preflight response cần khẳng định những gì để request thật được gửi?"
      },
      {
        "answerIndex": 2,
        "explanation": "maxAge cho trình duyệt cache kết quả preflight trong khoảng thời gian đó, giảm số lần hỏi lại cho các request tương tự.",
        "options": [
          "Thời gian session cookie tồn tại",
          "Thời gian sống của JWT",
          "Thời gian trình duyệt cache kết quả preflight",
          "Thời gian máy chủ giữ kết nối TCP"
        ],
        "question": "Thuộc tính maxAge trong CORS để làm gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Cookie cần HttpOnly, Secure, SameSite để giảm XSS/CSRF; bearer token do JS quản lý thì rủi ro chính là XSS đọc được token.",
        "options": [
          "Cookie an toàn hơn vì trình duyệt tự gửi",
          "Cookie có bề mặt CSRF và cần thuộc tính bảo vệ riêng; token do JS giữ có rủi ro chính là bị đọc khi có XSS",
          "Cookie và token trong header có rủi ro giống hệt nhau",
          "Token trong header luôn an toàn tuyệt đối"
        ],
        "question": "Đánh đổi đúng giữa cookie auth và bearer token trong header là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "CORS không phải tường lửa cho máy chủ; client ngoài trình duyệt vẫn gọi được API, việc bảo vệ thật nằm ở xác thực và phân quyền.",
        "options": [
          "Thay thế hoàn toàn cho JWT",
          "Chặn mọi client không phải trình duyệt",
          "Không, CORS chỉ điều tiết trình duyệt, bảo vệ thật vẫn là xác thực và phân quyền ở máy chủ",
          "Mã hóa toàn bộ traffic"
        ],
        "question": "CORS có ngăn được công cụ dòng lệnh gọi API của bạn không?"
      }
    ]
  },
  "m04-jwt-once-per-request-filter": {
    "checklist": [
      "Viết được filter kế thừa OncePerRequestFilter đọc header Authorization dạng Bearer.",
      "Verify được chữ ký JWT trước khi tin bất kỳ claim nào.",
      "Kiểm tra được exp, iss và xử lý clock skew có cấu hình rõ ràng.",
      "Ánh xạ được sub, scope và roles thành principal và authority nhất quán.",
      "Đảm bảo SecurityContext được dọn sau mỗi request kể cả khi có lỗi.",
      "Giải thích được vì sao nên ưu tiên OAuth2 Resource Server JwtDecoder cho service mới."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Ba phần là header, payload (claims) và signature, mã hóa Base64URL và ngăn bằng dấu chấm.",
        "options": [
          "Header, footer và checksum",
          "Header, payload và signature",
          "Issuer, audience và key",
          "Chỉ có payload và signature"
        ],
        "question": "Một JWT dạng compact gồm những phần nào?"
      },
      {
        "answerIndex": 0,
        "explanation": "Chữ ký chứng minh token do issuer đáng tin phát hành và không bị sửa; đọc claim trước khi verify là tin vào dữ liệu chưa được chứng thực.",
        "options": [
          "Verify chữ ký và các điều kiện như exp, iss trước",
          "Chỉ decode payload bằng Base64",
          "Kiểm tra độ dài chuỗi token",
          "Tìm token trong database session"
        ],
        "question": "Việc đầu tiên phải làm trước khi tin claims của JWT là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "sub là định danh của chủ thể token, thường dùng làm principal trong Authentication.",
        "options": [
          "Thời điểm token hết hạn",
          "Tên thuật toán ký",
          "Định danh chủ thể của token, thường là user hoặc member id",
          "Danh sách audience"
        ],
        "question": "Claim sub thường được dùng làm gì trong SecurityContext?"
      },
      {
        "answerIndex": 1,
        "explanation": "exp là thời điểm hết hạn, iss là issuer phát hành. Cả hai đều phải được đối chiếu với kỳ vọng của resource server.",
        "options": [
          "exp là key id, iss là thuật toán",
          "exp là thời điểm hết hạn, iss là bên phát hành token",
          "exp là scope, iss là role",
          "Cả hai chỉ mang tính thông tin, không cần kiểm tra"
        ],
        "question": "Claim exp và iss cho biết điều gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Clock skew cho phép sai lệch đồng hồ nhỏ giữa các máy chủ để token không bị từ chối oan, nhưng giá trị lớn sẽ nới cửa sổ lạm dụng.",
        "options": [
          "Tốc độ mạng giữa gateway và service",
          "Số lần retry khi verify thất bại",
          "Dung lượng cache JWKS",
          "Độ lệch đồng hồ cho phép khi kiểm tra exp và nbf"
        ],
        "question": "Clock skew trong verify JWT là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "OncePerRequestFilter dùng attribute đánh dấu để logic lọc chỉ chạy một lần cho mỗi request dù có nhiều loại dispatch.",
        "options": [
          "Đảm bảo doFilterInternal chỉ chạy một lần cho mỗi request",
          "Tự động tạo mới token sau mỗi request",
          "Chạy filter song song trên nhiều thread",
          "Thay thế hoàn toàn AuthorizationFilter"
        ],
        "question": "OncePerRequestFilter giải quyết vấn đề gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Scope thường được ánh xạ thành authority tiền tố SCOPE_, còn roles tùy biến thường thành ROLE_ để dùng với hasRole và PreAuthorize.",
        "options": [
          "Giữ nguyên chuỗi gốc không tiền tố",
          "Mã hóa lại thành một token mới",
          "Ánh xạ scope thành SCOPE_ và role thành ROLE_ theo quy ước của hệ thống",
          "Bỏ qua scope và roles, chỉ dùng sub"
        ],
        "question": "Scope và roles trong token thường được ánh xạ thành authority thế nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Thread được container tái sử dụng; nếu không dọn, request sau trên cùng thread có thể thấy danh tính của request trước.",
        "options": [
          "Vì JWT sẽ tự hết hạn nếu không dọn",
          "Vì thread được tái sử dụng cho request khác và context có thể rò rỉ danh tính",
          "Vì bộ nhớ của JVM bị đầy ngay lập tức",
          "Vì gateway yêu cầu header mới"
        ],
        "question": "Vì sao phải dọn SecurityContext sau mỗi request?"
      },
      {
        "answerIndex": 2,
        "explanation": "Resource Server tự quản lý JWKS, chọn key theo kid, verify chữ ký và các điều kiện chuẩn, giảm bề mặt lỗi so với code tự chế.",
        "options": [
          "Vì nó không cần verify chữ ký",
          "Vì nó tạo token thay cho authorization server",
          "Vì nó tự tải JWKS, chọn key theo kid và verify theo chuẩn, ít lỗi hơn tự viết",
          "Vì nó cho phép bỏ qua kiểm tra exp"
        ],
        "question": "Vì sao nên ưu tiên OAuth2 Resource Server JwtDecoder thay vì tự verify thủ công?"
      },
      {
        "answerIndex": 3,
        "explanation": "Filter tùy biến phải được neo bằng addFilterBefore so với một filter chuẩn để chạy trước bước phân quyền và đúng thứ tự xác thực.",
        "options": [
          "Đăng ký làm bean controller",
          "Đặt sau AuthorizationFilter",
          "Chạy ngoài filter chain của Spring Security",
          "Dùng addFilterBefore so với filter xác thực chuẩn trong SecurityFilterChain"
        ],
        "question": "Custom JWT filter nên được đăng ký vào chain bằng cách nào?"
      }
    ]
  },
  "m04-method-security": {
    "checklist": [
      "Bật được method security bằng @EnableMethodSecurity trên lớp cấu hình.",
      "Viết được @PreAuthorize kiểm tra hasRole, hasAuthority và điều kiện sở hữu đối tượng.",
      "Giải thích được khác biệt giữa phân quyền theo URL và phân quyền ở tầng service.",
      "Nhận diện và ngăn được lỗ hổng IDOR trên ví điểm.",
      "Tránh được lỗi tự gọi method trong cùng class làm mất hiệu lực proxy.",
      "Đóng gói logic kiểm tra phức tạp vào bean riêng để dễ test thay vì nhồi vào SpEL."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Từ Spring Security 6, @EnableMethodSecurity là annotation hiện đại để bật method security với PreAuthorize/PostAuthorize.",
        "options": [
          "@EnableWebSecurity",
          "@EnableMethodSecurity",
          "@Secured ở mức class",
          "Một bean XML riêng"
        ],
        "question": "Annotation nào bật method security trong Spring Security 6?"
      },
      {
        "answerIndex": 3,
        "explanation": "PreAuthorize đánh giá trước khi method chạy; nếu sai, method không được thực thi và AccessDeniedException được ném.",
        "options": [
          "Chỉ khi ghi log",
          "Sau khi method trả kết quả",
          "Song song với logic nghiệp vụ",
          "Trước khi method chạy, để chặn lời gọi thiếu quyền"
        ],
        "question": "@PreAuthorize đánh giá biểu thức SpEL vào thời điểm nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "IDOR là thao tác trực tiếp lên đối tượng qua id do client cung cấp mà không kiểm tra quyền sở hữu.",
        "options": [
          "Quên đặt mật khẩu cho database",
          "CORS cấu hình sai origin",
          "Token hết hạn giữa chừng",
          "Dùng id của người khác trong request để thao tác lên dữ liệu của họ mà không bị kiểm tra sở hữu"
        ],
        "question": "Lỗ hổng IDOR trong ngữ cảnh ví điểm là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Lớp URL không biết chủ sở hữu của ví; kiểm tra sở hữu cần dữ liệu nghiệp vụ và thuộc tầng service.",
        "options": [
          "Vì SpEL chạy nhanh hơn filter",
          "Vì quyết định cần biết chủ sở hữu của đối tượng, thông tin chỉ có ở tầng nghiệp vụ",
          "Vì controller không nhận được JWT",
          "Vì gateway đã kiểm tra hết mọi thứ"
        ],
        "question": "Vì sao phân quyền trên đối tượng phải đặt ở tầng service thay vì chỉ ở filter chain?"
      },
      {
        "answerIndex": 0,
        "explanation": "Method security dựa trên AOP proxy; lời gọi this.method() không đi qua proxy nên annotation không được áp dụng.",
        "options": [
          "Vì lời gọi nội bộ bỏ qua AOP proxy của Spring",
          "Vì transaction luôn tắt method security",
          "Vì annotation bị xóa khi biên dịch",
          "Vì SpEL không hỗ trợ gọi nội bộ"
        ],
        "question": "Vì sao tự gọi method có @PreAuthorize trong cùng class lại nguy hiểm?"
      },
      {
        "answerIndex": 2,
        "explanation": "hasRole kiểm tra authority dạng ROLE_ cộng tên role; hasAuthority kiểm tra chuỗi authority nguyên văn như points:adjust.",
        "options": [
          "hasAuthority mạnh hơn vì tự verify JWT",
          "hasRole dùng cho URL, hasAuthority dùng cho database",
          "hasRole tự thêm tiền tố ROLE_, hasAuthority so khớp authority nguyên văn",
          "Chúng là một, không khác gì nhau"
        ],
        "question": "Khác biệt giữa hasRole và hasAuthority là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Logic dài và có truy vấn nên đóng gói vào bean có thể unit test, SpEL chỉ giữ lời gọi ngắn gọn tới bean đó.",
        "options": [
          "Viết tất cả vào một chuỗi SpEL thật dài",
          "Đóng gói vào một bean kiểm tra riêng và gọi từ SpEL",
          "Kiểm tra thủ công trong từng controller",
          "Bỏ kiểm tra và tin gateway"
        ],
        "question": "Khi điều kiện phân quyền phức tạp và cần truy vấn dữ liệu, cách làm được khuyến nghị là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "AccessDeniedException từ tầng method security được tầng web ánh xạ thành 403 Forbidden.",
        "options": [
          "403 Forbidden",
          "500 trong mọi trường hợp",
          "302 chuyển hướng login",
          "200 kèm thông điệp mềm"
        ],
        "question": "Khi @PreAuthorize thất bại, kết quả HTTP đúng cho API là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Kết hợp cả hai mới đúng: role CUSTOMER cho biết loại người gọi, điều kiện sở hữu đảm bảo ví thuộc về chính họ (hoặc họ là quản trị viên).",
        "options": [
          "Chỉ cần đăng nhập thành công",
          "Không cần rule vì đã có idempotency",
          "Cần role phù hợp và điều kiện chủ sở hữu hoặc authority quản trị",
          "Chỉ cần hasRole CUSTOMER"
        ],
        "question": "Để khách chỉ xem được ví của chính mình, rule cần kết hợp điều gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "PostAuthorize kiểm tra trên kết quả trả về hoặc đối tượng sau khi method chạy, hữu ích khi quyền phụ thuộc vào dữ liệu kết quả.",
        "options": [
          "Chỉ dùng cho annotation Secured",
          "Kiểm tra trước khi proxy được tạo",
          "Đánh giá trên kết quả trả về sau khi method chạy",
          "Thay thế cho PreAuthorize trong mọi trường hợp"
        ],
        "question": "@PostAuthorize khác @PreAuthorize ở điểm nào?"
      }
    ]
  },
  "m04-migrate-handler-interceptor-sang-filter-chain": {
    "checklist": [
      "Lập được bảng kiểm kê toàn bộ hành vi của HandlerInterceptor và custom annotation cũ.",
      "Viết được ma trận test đối chứng cho các ca token và role trước khi migrate.",
      "Dựng được SecurityFilterChain mới ở chế độ shadow và so sánh quyết định với cơ chế cũ.",
      "Khóa được bảng ánh xạ role/permission sang authority chuẩn có test riêng.",
      "Lập kế hoạch cắt chuyển theo nhóm route tăng dần rủi ro kèm tiêu chí rollback.",
      "Tách được đợt nâng Java/namespace khỏi đợt migrate bảo mật."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Interceptor thuộc tầng MVC và chạy muộn, chỉ với handler; filter chain chạy ở tầng servlet filter, rất sớm và cho mọi loại request.",
        "options": [
          "Chúng chạy cùng một tầng, chỉ khác tên gọi",
          "Interceptor chạy trong Spring MVC sau servlet filter; SecurityFilterChain chạy ở tầng servlet filter, sớm hơn nhiều",
          "Filter chain chỉ chạy sau controller",
          "Interceptor luôn chạy trước mọi filter"
        ],
        "question": "Khác biệt vị trí cốt lõi giữa HandlerInterceptor và SecurityFilterChain là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Kiểm kê đầy đủ annotation, nguồn danh tính, mã lỗi và path bỏ qua là đặc tả hành vi để đối chứng sau migration.",
        "options": [
          "Viết ngay filter chain mới",
          "Xóa interceptor cũ để buộc phải migrate",
          "Lập bản đồ toàn bộ hành vi hiện tại của cơ chế cũ",
          "Nâng Java lên 21 trước mọi việc"
        ],
        "question": "Bước đầu tiên đúng đắn khi migrate cơ chế bảo mật legacy là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Lỗi phân quyền thường âm thầm mở quyền chứ không gây crash; chỉ test đối chứng theo ma trận mới phát hiện được lệch hành vi.",
        "options": [
          "Vì lỗi phân quyền hiếm khi gây crash mà thường mở quyền âm thầm, cần test ghi lại hành vi hiện tại để so sánh",
          "Vì framework yêu cầu test mới cho biên dịch",
          "Vì test giúp tăng tốc độ chạy filter",
          "Vì tài liệu chính thức bắt buộc"
        ],
        "question": "Vì sao test đối chứng lại quan trọng bậc nhất trong migration bảo mật?"
      },
      {
        "answerIndex": 3,
        "explanation": "Shadow cho phép chain mới ra quyết định và ghi log nhưng chưa thực thi việc chặn, để so sánh lệch trên traffic thật một cách an toàn.",
        "options": [
          "Chạy chain mới trên một máy chủ khác không có traffic",
          "Tắt toàn bộ bảo mật để quan sát",
          "Sao lưu database trước khi migrate",
          "Chain mới xác thực và ghi log quyết định nhưng quyết định cuối cùng vẫn do cơ chế cũ, để so sánh lệch"
        ],
        "question": "Chế độ shadow trong giai đoạn dual-run nghĩa là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Cắt theo mức rủi ro tăng dần giới hạn phạm vi ảnh hưởng của mỗi đợt và cho phép rollback từng phần.",
        "options": [
          "Cắt route quản trị trước vì ít người dùng",
          "Sắp route theo rủi ro tăng dần: công khai, nghiệp vụ thường, rồi mới quản trị và giao dịch điểm",
          "Cắt toàn bộ cùng lúc vào cuối tuần",
          "Cắt theo thứ tự alphabet của path"
        ],
        "question": "Thứ tự cắt chuyển route được khuyến nghị là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "hasRole kỳ vọng authority có tiền tố ROLE_; lệch tiền tố là lỗi ánh xạ phổ biến nhất khi chuyển từ cơ chế tự chế.",
        "options": [
          "Role bị hết hạn cùng token",
          "Framework tự đổi tên role sau mỗi lần deploy",
          "Tiền tố ROLE_ giữa cơ chế cũ và mới không khớp khiến hasRole cho kết quả sai",
          "Người dùng đổi mật khẩu trong lúc migrate"
        ],
        "question": "Rủi ro lệch ánh xạ role phổ biến nhất đến từ đâu?"
      },
      {
        "answerIndex": 0,
        "explanation": "Filter chain áp dụng cho cả error dispatch, static resource và actuator, trong khi interceptor chỉ chạy với handler MVC.",
        "options": [
          "Đúng, bề mặt áp dụng của filter rộng hơn interceptor nên phải quyết định hành vi cho các bề mặt này có chủ đích",
          "Không, hai cơ chế áp dụng cho đúng cùng tập request",
          "Chỉ khác với WebSocket",
          "Filter chain không chạy cho actuator"
        ],
        "question": "Nhận định nào đúng về bề mặt áp dụng sau migration?"
      },
      {
        "answerIndex": 1,
        "explanation": "Mỗi đợt thay đổi lớn cần test đối chứng và khả năng rollback riêng; dồn chung khiến việc truy vết lỗi gần như không thể.",
        "options": [
          "Vì giấy phép của Java 21 yêu cầu vậy",
          "Vì khi lỗi xảy ra sẽ không truy được nó thuộc về thay đổi runtime, namespace hay bảo mật",
          "Vì build sẽ chậm hơn",
          "Vì Spring Security không chạy được trên Java 21"
        ],
        "question": "Vì sao nên tách nâng cấp Java/namespace khỏi migrate bảo mật?"
      },
      {
        "answerIndex": 3,
        "explanation": "Lưới an toàn là cùng một bộ test đối chứng phải đạt trên cơ chế mới, trừ các khác biệt đã được ghi nhận là chủ đích.",
        "options": [
          "Số lượng dòng code giảm xuống",
          "Không còn annotation nào trong codebase",
          "Thời gian build nhanh hơn",
          "Cùng bộ test đối chứng cho kết quả tương đương, trừ khác biệt đã được ghi rõ là chủ đích"
        ],
        "question": "Tiêu chí hoàn thành một đợt cắt chuyển là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Mỗi nhóm route cần có công tắc cấu hình để quay lại cơ chế cũ riêng cho nhóm đó mà không ảnh hưởng phần đã ổn định.",
        "options": [
          "Xóa ngay code cũ sau khi cắt",
          "Chỉ rollback được toàn bộ hệ thống",
          "Có công tắc theo nhóm route để quay lại cơ chế cũ cho đúng nhóm đó",
          "Không cần rollback vì đã có shadow"
        ],
        "question": "Kế hoạch rollback tốt cho migration theo nhóm route cần gì?"
      }
    ]
  },
  "m04-security-filter-chain-filter-order": {
    "checklist": [
      "Khai báo được bean SecurityFilterChain bằng authorizeHttpRequests và requestMatchers.",
      "Giải thích được thứ tự filter chính và vị trí của AuthorizationFilter trong chain.",
      "Tách được nhiều chain bằng securityMatcher và @Order mà không chain nào nuốt chain khác.",
      "Đặt được SessionCreationPolicy.STATELESS cho API dùng JWT.",
      "Sắp xếp được rule từ cụ thể đến tổng quát và kết thúc bằng rule mặc định fail closed.",
      "Nêu được cách kiểm chứng thứ tự filter và hành vi 401/403 bằng test."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Spring Security 6 dùng component-based configuration: bean SecurityFilterChain, không kế thừa lớp cấu hình cũ.",
        "options": [
          "Kế thừa một lớp adapter và override method cấu hình",
          "Khai báo bean SecurityFilterChain và mô tả rule bằng DSL",
          "Viết servlet filter thuần và đăng ký trong web.xml",
          "Cấu hình toàn bộ bằng annotation trên controller"
        ],
        "question": "Trong Spring Security 6, cách cấu hình chuẩn cho bảo mật HTTP là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "FilterChainProxy xét các chain theo thứ tự; chain đầu tiên khớp sẽ xử lý request, các chain sau không chạy nữa.",
        "options": [
          "Chạy tất cả các chain theo thứ tự ngẫu nhiên",
          "Gộp mọi chain thành một chain duy nhất",
          "Chọn chain đầu tiên khớp với request và chỉ chạy chain đó",
          "Chọn chain có nhiều rule nhất"
        ],
        "question": "Khi một request đến, FilterChainProxy chọn chain như thế nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Phân quyền cần biết người gọi là ai và có authority nào, nên nó chạy sau bước xác thực đã điền SecurityContext.",
        "options": [
          "Trước filter xác thực",
          "Sau khi danh tính đã được xác lập bởi filter xác thực",
          "Thay thế hoàn toàn filter xác thực",
          "Chỉ chạy khi request không có token"
        ],
        "question": "Filter phân quyền AuthorizationFilter nên chạy ở đâu so với filter xác thực?"
      },
      {
        "answerIndex": 0,
        "explanation": "Rule khớp đầu tiên thắng. Một permitAll tổng quát đặt ở đầu sẽ làm vô hiệu mọi rule chặt phía dưới.",
        "options": [
          "Vì rule được đánh giá theo thứ tự viết, rule đầu tiên khớp sẽ quyết định",
          "Vì rule viết sau luôn ghi đè file cấu hình",
          "Vì framework tự sắp xếp theo độ dài path",
          "Thứ tự không quan trọng, framework luôn chọn rule chặt nhất"
        ],
        "question": "Vì sao thứ tự khai báo rule trong authorizeHttpRequests lại quan trọng?"
      },
      {
        "answerIndex": 3,
        "explanation": "securityMatcher giới hạn chain chỉ khớp với nhóm path nhất định, tránh việc một chain nuốt request của chain khác.",
        "options": [
          "Mã hóa mật khẩu người dùng",
          "Tạo JWT cho client",
          "Chuyển hướng HTTP sang HTTPS",
          "Giới hạn phạm vi request mà chain đó áp dụng"
        ],
        "question": "securityMatcher trên một chain dùng để làm gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "STATELESS nghĩa là framework không tạo và không dùng HTTP session; mỗi request tự xác thực bằng token đi kèm.",
        "options": [
          "ALWAYS",
          "IF_REQUIRED",
          "STATELESS",
          "NEVER kèm session cookie"
        ],
        "question": "Với API stateless dùng JWT, nên chọn SessionCreationPolicy nào?"
      },
      {
        "answerIndex": 0,
        "explanation": "@Order sắp xếp danh sách chain trong FilterChainProxy; chain order nhỏ hơn được xét khớp trước.",
        "options": [
          "Thứ tự xét khớp của các chain, order nhỏ được xét trước",
          "Thứ tự khởi tạo bean trong database",
          "Mức độ ưu tiên của user role",
          "Thứ tự chạy của controller"
        ],
        "question": "Khi có nhiều SecurityFilterChain bean, @Order quyết định điều gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Fail closed nghĩa là path chưa được liệt kê rõ ràng thì bị từ chối hoặc ít nhất phải xác thực, thay vì mặc định mở.",
        "options": [
          "anyRequest().permitAll() để tránh chặn nhầm",
          "Không khai báo rule mặc định",
          "anyRequest().denyAll() hoặc yêu cầu authenticated cho mọi path chưa liệt kê",
          "Tắt toàn bộ security khi có path lạ"
        ],
        "question": "Cách fail closed đúng cho chain mặc định là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Bạn không quản lý toàn bộ thứ tự mặc định; chỉ cần neo custom filter tương đối so với một filter chuẩn như filter xác thực bearer token.",
        "options": [
          "Tự sắp xếp toàn bộ filter mặc định bằng tay",
          "Dùng addFilterBefore, addFilterAfter hoặc addFilterAt so với một filter chuẩn đã biết",
          "Đặt filter vào controller bằng annotation",
          "Đăng ký filter càng nhiều nơi càng chắc chắn"
        ],
        "question": "Khi thêm custom filter, cách chỉ định vị trí được khuyến nghị là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "401 Unauthorized gắn với thiếu hoặc sai xác thực; 403 Forbidden gắn với đã biết danh tính nhưng authority không đủ cho rule.",
        "options": [
          "401 và 403 là một, chỉ khác thông điệp",
          "401 do database lỗi, 403 do mạng lỗi",
          "401 nghĩa là chưa xác thực hoặc token không hợp lệ; 403 nghĩa là đã xác thực nhưng không đủ quyền",
          "403 chỉ xảy ra với actuator"
        ],
        "question": "Khác biệt giữa 401 và 403 trong chain cho thấy điều gì?"
      }
    ]
  },
  "m05-dns-service-discovery-load-balancer": {
    "checklist": [
      "Giải thích được cách DNS trong Kubernetes phân giải tên Service thành địa chỉ của Service hoặc pod.",
      "Phân biệt được service discovery phía server và phía client.",
      "Tách bạch được readiness probe và liveness probe cùng hậu quả khi nhầm lẫn.",
      "So sánh được load balancer L4 và L7 theo khả năng định tuyến.",
      "Chọn được thuật toán chia tải phù hợp cho từng kịch bản traffic.",
      "Cấu hình được Actuator readiness group và probe trong YAML Kubernetes."
    ],
    "quiz": [
      {
        "answerIndex": 2,
        "explanation": "Trong cùng namespace, tên ngắn của Service phân giải qua DNS của cluster tới địa chỉ của Service đó.",
        "options": [
          "Địa chỉ của node chạy pod đầu tiên",
          "Địa chỉ IP của một pod cố định",
          "Địa chỉ ảo (ClusterIP) của Service, hoặc danh sách IP pod với headless service",
          "Địa chỉ gateway bên ngoài cluster"
        ],
        "question": "Tên DNS của một Service trong Kubernetes thường phân giải thành gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Server-side discovery để hạ tầng (Service/LB) chọn backend; client-side bắt ứng dụng tự lấy danh sách instance và tự chọn.",
        "options": [
          "Hai tên gọi của cùng một cơ chế",
          "Server-side: hạ tầng chọn pod đích qua địa chỉ ổn định; client-side: ứng dụng tự lấy danh sách và tự chọn",
          "Chỉ khác nhau ở giao thức DNS",
          "Client-side do Kubernetes làm, server-side do ứng dụng làm"
        ],
        "question": "Khác biệt giữa service discovery phía server và phía client là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Readiness quyết định pod có nằm trong danh sách endpoint nhận traffic của Service hay không.",
        "options": [
          "Pod có được cấp thêm CPU hay không",
          "Pod có nằm trong danh sách nhận traffic của Service hay không",
          "Pod có bị xóa khỏi cluster hay không",
          "Image của pod có được pull hay không"
        ],
        "question": "Readiness probe quyết định điều gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Liveness kiểm tra tiến trình còn sống để quyết định khởi động lại; đưa phụ thuộc bên ngoài vào đây gây vòng lặp giết pod khi downstream chậm.",
        "options": [
          "Liveness quyết định khởi động lại pod, readiness quyết định pod có nhận traffic hay không",
          "Readiness dùng cho database, liveness dùng cho Kafka",
          "Liveness chạy trước readiness một lần duy nhất",
          "Chúng là một, chỉ khác tên trong YAML"
        ],
        "question": "Liveness probe khác readiness probe ở điểm nào?"
      },
      {
        "answerIndex": 0,
        "explanation": "L7 hiểu HTTP nên định tuyến được theo path như các route của gateway, còn L4 chỉ nhìn kết nối ở tầng vận chuyển.",
        "options": [
          "L7 hiểu HTTP và định tuyến theo path/header được, L4 chỉ chia theo kết nối tầng vận chuyển",
          "L4 dùng cho nội bộ, L7 bắt buộc dùng cho Kafka",
          "L4 nhanh hơn nên luôn tốt hơn cho mọi API",
          "L7 không cần load balancer phần cứng"
        ],
        "question": "Khác biệt chính giữa load balancer L4 và L7 là gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Khi thời gian xử lý chênh lệch lớn, least connections tránh dồn thêm việc vào pod đang bận nhất, điều round robin không nhìn thấy.",
        "options": [
          "Consistent hashing theo thời gian trong ngày",
          "Sticky theo IP client",
          "Round robin luôn tốt nhất trong mọi trường hợp",
          "Least connections, vì nó ưu tiên pod đang ít bận hơn"
        ],
        "question": "Thuật toán chia tải nào hợp khi thời gian xử lý request chênh lệch lớn giữa các request?"
      },
      {
        "answerIndex": 3,
        "explanation": "IP của pod thay đổi theo vòng đời; gọi qua tên Service để hạ tầng duy trì endpoint đúng theo readiness.",
        "options": [
          "Vì IP của pod là bí mật bảo mật",
          "Vì DNS nhanh hơn IP trực tiếp",
          "Vì Kubernetes cấm gọi theo IP",
          "Vì pod có IP thay đổi theo vòng đời, phải gọi qua tên DNS ổn định của Service"
        ],
        "question": "Vì sao không nên cứng địa chỉ IP của pod trong cấu hình client?"
      },
      {
        "answerIndex": 2,
        "explanation": "Cache DNS dài ở phía client khiến nó tiếp tục dùng địa chỉ cũ sau khi backend đã thay đổi, gây lỗi rải rác khó tái hiện.",
        "options": [
          "Trình duyệt chặn mọi request nội bộ",
          "DNS sẽ tự xóa Service",
          "Client tiếp tục gọi địa chỉ cũ sau khi backend thay đổi trong một thời gian",
          "Pod mới không khởi động được"
        ],
        "question": "Cache DNS phía client quá lâu gây hậu quả gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Headless service không có ClusterIP; DNS trả trực tiếp danh sách IP pod để client tự làm discovery và chọn đích.",
        "options": [
          "Service không cấp ClusterIP, DNS trả thẳng danh sách IP của các pod",
          "Service chỉ dùng cho traffic bên ngoài",
          "Service tự động bật mTLS",
          "Service không có selector"
        ],
        "question": "Headless service khác Service thường ở điểm nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Sticky/consistent hashing giữ một khóa về cùng backend, đánh đổi phân bổ đều; chỉ dùng khi có trạng thái cục bộ thật sự cần nó.",
        "options": [
          "Khi mọi request đều giống hệt nhau",
          "Khi thực sự có trạng thái cục bộ gắn với một khóa như member id, chấp nhận đánh đổi độ đều của tải",
          "Khi muốn giảm số lượng pod",
          "Mặc định cho mọi API nội bộ"
        ],
        "question": "Khi nào nên dùng sticky hoặc consistent hashing?"
      }
    ]
  },
  "m05-grpc-vs-rest": {
    "checklist": [
      "So sánh được gRPC và REST về contract, định dạng dữ liệu, streaming và khả năng gỡ lỗi.",
      "Giải thích được protobuf dùng số trường làm danh tính và kỷ luật reserved khi xóa trường.",
      "Nêu được bốn kiểu lời gọi của gRPC gồm unary và ba kiểu streaming.",
      "Quyết định được giao thức theo việc client có nằm ngoài tầm kiểm soát hay không.",
      "Đặt được deadline cho mọi lời gọi gRPC theo kỷ luật timeout chung.",
      "Tính đủ chi phí vận hành của gRPC gồm gateway, giám sát và công cụ gỡ lỗi."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "gRPC định nghĩa hợp đồng bằng file .proto của Protocol Buffers và sinh stub cho cả client và server.",
        "options": [
          "OpenAPI dạng YAML",
          "Protocol Buffers qua file .proto",
          "JSON Schema viết tay",
          "WSDL của SOAP"
        ],
        "question": "gRPC định nghĩa hợp đồng bằng gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "gRPC được thiết kế trên HTTP/2 nên dùng multiplexing và là nền cho streaming hai chiều.",
        "options": [
          "HTTP/1.0",
          "TCP thuần không có HTTP",
          "WebSocket tự chế",
          "HTTP/2"
        ],
        "question": "gRPC chạy trên giao thức vận chuyển nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "Ngoài unary, gRPC có server streaming, client streaming và bidirectional streaming ngay trong mô hình của nó.",
        "options": [
          "Streaming nhanh hơn luôn trong mọi trường hợp",
          "Không cần quản lý deadline",
          "Tự động tương thích ngược mọi thay đổi schema",
          "Hỗ trợ streaming phía server, phía client và hai chiều ngay trong mô hình"
        ],
        "question": "Điểm khác biệt thật sự của gRPC so với REST cho traffic nội bộ là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Số trường là danh tính thật trong dữ liệu nhị phân; tái dùng số đã xóa khiến client cũ diễn giải sai dữ liệu một cách âm thầm.",
        "options": [
          "Vì số trường bị giới hạn ở mức mười",
          "Vì file proto sẽ không biên dịch được",
          "Vì số trường là danh tính thật của dữ liệu, tái dùng sẽ làm client cũ đọc sai ý nghĩa",
          "Vì trình duyệt không đọc được số trùng"
        ],
        "question": "Vì sao không được tái dùng số trường đã xóa trong protobuf?"
      },
      {
        "answerIndex": 0,
        "explanation": "Bề mặt công khai cần tính phổ quát và công cụ sẵn có của REST/JSON/OpenAPI vì người tích hợp nằm ngoài kiểm soát của team.",
        "options": [
          "Vì đối tác nằm ngoài tầm kiểm soát, REST phổ quát và dễ tích hợp, dễ thử hơn nhiều",
          "Vì gRPC bị cấm dùng trên internet",
          "Vì gateway không định tuyến được gRPC trong mọi trường hợp",
          "Vì REST luôn nhanh hơn ở mọi tải"
        ],
        "question": "Vì sao API công khai cho đối tác của Nova nên giữ REST?"
      },
      {
        "answerIndex": 0,
        "explanation": "Dữ liệu nhị phân không đọc trực tiếp được như JSON; cần công cụ có file proto hoặc reflection để diễn giải khi gỡ lỗi và giám sát.",
        "options": [
          "Khó đọc trực tiếp khi gỡ lỗi, cần công cụ hiểu proto hoặc reflection",
          "Nhị phân không đi qua được load balancer",
          "Nhị phân luôn bị trình duyệt chặn",
          "Nhị phân làm mất khả năng dùng TLS"
        ],
        "question": "Đánh đổi chính của dữ liệu nhị phân trong gRPC là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Deadline là ngân sách thời gian của một lời gọi gRPC; thiếu nó, lời gọi có thể treo và gây quá tải dây chuyền như thiếu timeout HTTP.",
        "options": [
          "Deadline chỉ áp dụng cho streaming",
          "Đúng, deadline là timeout của lời gọi gRPC và phải được đặt cho mọi lời gọi",
          "JVM tự đặt deadline tối ưu cho mọi lời gọi",
          "Không, gRPC không bao giờ treo"
        ],
        "question": "Nhận định deadline trong gRPC là tương đương timeout ở HTTP có đúng không?"
      },
      {
        "answerIndex": 3,
        "explanation": "Trình duyệt không có hỗ trợ tự nhiên cho gRPC gốc; bề mặt web thường cần gRPC-Web kèm lớp chuyển đổi hoặc một API REST riêng.",
        "options": [
          "Trình duyệt đã thay thế hoàn toàn REST bằng gRPC",
          "Chỉ cần đổi cổng là trình duyệt gọi được",
          "Trình duyệt gọi gRPC gốc tốt hơn REST",
          "Cần thêm lớp chuyển đổi như gRPC-Web hoặc gateway REST vì trình duyệt không gọi gRPC gốc một cách tự nhiên"
        ],
        "question": "Trình duyệt web và gRPC có quan hệ thế nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Streaming hữu ích khi một phía cần nhận một dòng sự kiện liên tục thay vì hỏi-đáp từng lần, ví dụ cập nhật số dư theo thời gian thực nội bộ.",
        "options": [
          "Khi client là đối tác bên ngoài dùng trình duyệt",
          "Khi cần thử API nhanh bằng dòng lệnh",
          "Khi cần truyền một dòng sự kiện liên tục giữa hai service nội bộ, ví dụ cập nhật số dư theo thời gian thực",
          "Khi hợp đồng thay đổi mỗi ngày"
        ],
        "question": "Khi nào streaming của gRPC thực sự đáng giá cho Nova?"
      },
      {
        "answerIndex": 0,
        "explanation": "Cả hai phía cần test hợp đồng và kỷ luật versioning; khác biệt nằm ở cách phát hiện vỡ, không ở việc có cần kỷ luật hay không.",
        "options": [
          "Cả hai đều cần test hợp đồng và kỷ luật tiến hóa schema, chỉ khác cách phát hiện lỗi",
          "gRPC tự sửa mọi thay đổi phá vỡ",
          "REST không bao giờ vỡ hợp đồng",
          "Chỉ cần chọn đúng giao thức một lần là xong"
        ],
        "question": "Về tiến hóa hợp đồng, kết luận đúng là gì?"
      }
    ]
  },
  "m05-http2-tls-termination": {
    "checklist": [
      "So sánh được HTTP/1.1 và HTTP/2 về multiplexing, HPACK và số kết nối.",
      "Giải thích được vì sao HTTP/2 vẫn còn head-of-line blocking ở tầng TCP.",
      "Mô tả được TLS termination và phân biệt với re-encryption.",
      "Nêu được hệ quả bảo mật khi đoạn nội bộ sau LB chạy HTTP thuần.",
      "Trình bày được mTLS ở mức nhập môn và tiền đề hạ tầng để triển khai nó.",
      "Cấu hình được Spring Boot bật HTTP/2 và SSL bằng application.yml."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Multiplexing cho nhiều stream độc lập chạy đồng thời trên cùng một kết nối, frame có thể xen kẽ theo stream id.",
        "options": [
          "Nén toàn bộ body của mọi response",
          "Cho nhiều stream chạy đồng thời trên một kết nối TCP duy nhất",
          "Mở thêm nhiều kết nối TCP hơn HTTP/1.1",
          "Tự động mã hóa dữ liệu hai lần"
        ],
        "question": "Multiplexing trong HTTP/2 là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "HPACK nén header bằng bảng tĩnh và động chia sẻ giữa hai phía, giảm mạnh header lặp lại giữa các request.",
        "options": [
          "Thuật toán mã hóa body",
          "Cách đặt tên stream",
          "Cơ chế nén header bằng bảng tĩnh và bảng động",
          "Giao thức thay thế cho TLS"
        ],
        "question": "HPACK dùng để làm gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Ở tầng ứng dụng HTTP/2 không còn chặn, nhưng mất gói TCP vẫn chặn phân phối dữ liệu cho mọi stream trên kết nối.",
        "options": [
          "Đúng, vì mất gói ở tầng TCP vẫn ảnh hưởng mọi stream trên cùng kết nối",
          "Không, HTTP/2 không dùng TCP",
          "Chỉ đúng với HTTP/1.1",
          "Head-of-line blocking đã bị xóa ở mọi tầng"
        ],
        "question": "Nhận định HTTP/2 vẫn còn head-of-line blocking ở tầng TCP có đúng không?"
      },
      {
        "answerIndex": 3,
        "explanation": "Termination nghĩa là TLS của client kết thúc tại LB/gateway; hop tiếp theo có thể là HTTP thuần hoặc TLS mới tùy cấu hình.",
        "options": [
          "TLS bị tắt trên toàn hệ thống",
          "Client tự giải mã response",
          "Backend giữ nguyên chứng thư của client",
          "Kết nối TLS từ client kết thúc tại LB hoặc gateway, đoạn sau được chuyển tiếp theo quyết định cấu hình"
        ],
        "question": "TLS termination tại load balancer nghĩa là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Re-encryption là việc LB kết thúc TLS phía client rồi mở một kết nối TLS mới tới backend, giữ mã hóa cho cả hai hop.",
        "options": [
          "Giải mã rồi gửi HTTP thuần vào nội bộ",
          "Mã hóa lại bằng một kết nối TLS mới từ LB tới backend sau khi termination",
          "Lưu chứng thư vào database",
          "Tắt TLS ở client"
        ],
        "question": "Re-encryption khác termination thuần ở điểm nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Nếu đoạn sau LB là HTTP thuần, dữ liệu dạng rõ trong đoạn đó; quyết định này cần biên mạng kiểm soát được và tài liệu rõ ràng.",
        "options": [
          "Không có hệ quả gì đáng kể",
          "Backend tự biết chứng thư của client",
          "Dữ liệu chạy dạng rõ trong đoạn nội bộ đó và phải được quản trị như một quyết định bảo mật có chủ đích",
          "Client sẽ bị trình duyệt chặn"
        ],
        "question": "Hệ quả quan trọng nhất khi đoạn LB tới backend chạy HTTP thuần là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Trong mTLS, client cũng trình chứng thư và server xác thực nó, nên cả hai phía đều được xác thực ở tầng vận chuyển.",
        "options": [
          "Cả hai phía đều xác thực nhau bằng chứng thư",
          "Chỉ server trình chứng thư như TLS thường",
          "mTLS là mã hóa body hai lần",
          "mTLS thay thế hoàn toàn cho mọi token ở tầng ứng dụng trong mọi trường hợp"
        ],
        "question": "mTLS khác TLS một chiều ở điểm nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Bắt tay đầy đủ có chi phí vòng đi về và tính toán; tái sử dụng kết nối và session resumption giảm chi phí lặp lại này.",
        "options": [
          "Vì mỗi request bắt buộc dùng một chứng thư mới",
          "Vì bắt tay đầy đủ tốn thêm vòng đi về, nên tái sử dụng kết nối và nối lại phiên giúp giảm chi phí",
          "Vì TLS chỉ chạy được một lần mỗi ngày",
          "Vì HTTP/2 cấm bắt tay TLS"
        ],
        "question": "Vì sao chi phí bắt tay TLS cần được quản lý ở traffic tần suất cao?"
      },
      {
        "answerIndex": 3,
        "explanation": "Quản lý chứng thư tập trung tại LB/gateway là lợi ích vận hành lớn: một điểm cấp phát, xoay vòng và áp chính sách TLS.",
        "options": [
          "Để backend không cần xác thực nữa",
          "Để tăng số lượng kết nối TCP",
          "Để trình duyệt bỏ qua kiểm tra chứng thư",
          "Để quản lý chứng thư và chính sách TLS tập trung tại một điểm thay vì từng backend"
        ],
        "question": "Lợi ích vận hành chính của TLS termination tập trung là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "mTLS đòi hỏi hạ tầng cấp phát, xoay vòng và thu hồi chứng thư; thiếu nó, mTLS thủ công dễ gây outage và rủi ro bảo mật.",
        "options": [
          "Một load balancer đắt hơn",
          "Nhiều địa chỉ IP hơn",
          "Hạ tầng quản lý vòng đời chứng thư: cấp phát, xoay vòng tự động và thu hồi",
          "Một giao thức mới thay HTTP"
        ],
        "question": "Tiền đề quan trọng nhất trước khi triển khai mTLS là gì?"
      }
    ]
  },
  "m05-snat-conntrack-mat-client-ip": {
    "checklist": [
      "Giải thích được SNAT viết lại địa chỉ nguồn và vai trò của bảng conntrack.",
      "Nêu được hai đường đi phổ biến khiến pod mất IP thật của client.",
      "Thiết kế được chuỗi tin cậy cho X-Forwarded-For chỉ với proxy được kiểm soát.",
      "Cấu hình được server.forward-headers-strategy trong Spring Boot.",
      "Trình bày được đánh đổi của externalTrafficPolicy Local so với mặc định.",
      "Ưu tiên được khóa rate limit theo danh tính đã xác thực thay vì chỉ dựa vào IP."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "SNAT viết lại địa chỉ nguồn của gói tin, ví dụ thay IP client bằng IP của LB hoặc node trên đường tới pod.",
        "options": [
          "Mã hóa địa chỉ IP",
          "Viết lại địa chỉ nguồn của gói tin khi qua biên NAT",
          "Xóa mọi bản ghi conntrack",
          "Đổi cổng đích của kết nối"
        ],
        "question": "SNAT làm gì với gói tin?"
      },
      {
        "answerIndex": 2,
        "explanation": "Conntrack ghi ánh xạ dịch địa chỉ/cổng cho từng kết nối để gói trả lời được dịch ngược về đúng phía gốc.",
        "options": [
          "Lưu trữ chứng thư TLS",
          "Danh sách pod khỏe",
          "Bảng ánh xạ kết nối để gói trả lời được dịch ngược đúng đường về",
          "Hàng đợi message của Kafka"
        ],
        "question": "Bảng conntrack dùng để làm gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Với chính sách Cluster mặc định, SNAT trên đường chuyển tiếp khiến pod thấy IP của node thay vì IP của client.",
        "options": [
          "Đúng, traffic có thể bị SNAT khi chuyển giữa các node nên pod thấy IP node",
          "Không, Kubernetes luôn giữ IP gốc trong mọi chính sách",
          "Chỉ mất IP khi dùng HTTP/2",
          "Chỉ mất IP khi client dùng IPv6"
        ],
        "question": "Nhận định về externalTrafficPolicy mặc định (Cluster) và IP nguồn có đúng không?"
      },
      {
        "answerIndex": 3,
        "explanation": "Header này do phía gửi đặt được nên chỉ đáng tin khi hop biên tin cậy đã làm sạch/ghi đè giá trị client gửi và service chỉ nhận từ proxy đó.",
        "options": [
          "Vì header luôn được mã hóa",
          "Vì trình duyệt cấm đọc header này",
          "Vì header quá dài",
          "Vì bất kỳ client nào cũng tự đặt được header này, nên chỉ tin khi nó đến từ proxy tin cậy đã làm sạch giá trị giả"
        ],
        "question": "Vì sao không được tin X-Forwarded-For một cách vô điều kiện?"
      },
      {
        "answerIndex": 1,
        "explanation": "X-Forwarded-For là danh sách các địa chỉ theo thứ tự hop; phần tử đầu là IP gốc theo tuyên bố của hop đầu tiên đáng tin.",
        "options": [
          "Chỉ chứa IP của pod đích",
          "Danh sách địa chỉ qua từng hop proxy, phần tử đầu là IP gốc theo chuỗi",
          "Chỉ chứa IP của load balancer cuối cùng",
          "Một token đã ký bởi gateway"
        ],
        "question": "X-Forwarded-For chứa thông tin gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "forward-headers-strategy bật cơ chế của framework/container để xử lý header chuyển tiếp và cập nhật remote address, scheme, port cho request.",
        "options": [
          "Tự tạo header mới cho response",
          "Chặn mọi request có header chuyển tiếp",
          "Kích hoạt việc xử lý header chuyển tiếp để request thấy IP/scheme hiệu dụng đúng sau proxy",
          "Nén header bằng HPACK"
        ],
        "question": "server.forward-headers-strategy trong Spring Boot để làm gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Chính sách Local tránh nhu cầu SNAT khi pod nằm cùng node nhận traffic nên giữ được IP nguồn, đổi lại chỉ node có pod mới nhận traffic.",
        "options": [
          "Giữ được IP nguồn của client vì traffic tới pod cùng node không cần SNAT đảm bảo đường về",
          "Tự động bật mTLS cho mọi kết nối",
          "Tăng số pod trên mỗi node",
          "Xóa nhu cầu dùng DNS"
        ],
        "question": "Lợi ích chính của externalTrafficPolicy Local là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Khi chỉ node có pod mới nhận traffic, phân bổ không đều của pod giữa các node sẽ kéo theo phân bổ tải không đều.",
        "options": [
          "Chứng thư hết hạn nhanh hơn",
          "Tải có thể lệch vì chỉ node có pod mới nhận traffic bên ngoài, pod phân bố không đều thì tải không đều",
          "Kafka consumer bị rebalance",
          "DNS ngừng phân giải"
        ],
        "question": "Đánh đổi vận hành của externalTrafficPolicy Local là gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Remote address hiệu dụng thống nhất giúp mọi tầng dùng chung một IP; parse tay ở nhiều nơi tạo ra nhiều đáp án khác nhau cho cùng request.",
        "options": [
          "Vì getRemoteAddr nhanh hơn mọi cách khác",
          "Vì header thô không tồn tại trong Spring",
          "Vì parse tay giúp giả mạo IP dễ hơn",
          "Vì forward-headers-strategy đã xử lý header thành remote address hiệu dụng thống nhất cho toàn ứng dụng"
        ],
        "question": "Vì sao nên đọc IP qua getRemoteAddr sau khi bật forward headers thay vì tự parse header khắp nơi?"
      },
      {
        "answerIndex": 2,
        "explanation": "IP có thể dùng chung qua NAT và vẫn phụ thuộc chuỗi tin cậy; khóa theo member id đã xác thực chính xác và khó giả mạo hơn nhiều.",
        "options": [
          "Vì IP không bao giờ thay đổi",
          "Vì member id luôn là một địa chỉ IP",
          "Vì IP có thể dùng chung qua NAT và phụ thuộc chuỗi tin cậy, còn danh tính đã xác thực gắn đúng với chủ thể giao dịch",
          "Vì rate limit theo IP bị cấm hoàn toàn"
        ],
        "question": "Vì sao rate limiting nên ưu tiên khóa theo danh tính đã xác thực hơn IP?"
      }
    ]
  },
  "m05-tcp-handshake-keepalive-timeout": {
    "checklist": [
      "Mô tả được bắt tay ba bước SYN, SYN-ACK, ACK và vai trò của TIME_WAIT.",
      "Giải thích được lợi ích của keep-alive và connection pool với traffic service-to-service.",
      "Phân biệt được connect timeout, read timeout và ngân sách thời gian tổng.",
      "Cấu hình được RestClient với factory có timeout tách bạch cho từng downstream.",
      "Nêu được vì sao timeout của client phải nhỏ hơn timeout của gateway ở tầng trên.",
      "Nhận diện được dấu hiệu cạn ephemeral port và cách giảm thiểu bằng tái sử dụng kết nối."
    ],
    "quiz": [
      {
        "answerIndex": 2,
        "explanation": "Ba bước là SYN từ client, SYN-ACK từ server và ACK từ client; sau đó dữ liệu mới được truyền.",
        "options": [
          "GET, SYN, ACK",
          "SYN, ACK, FIN",
          "SYN, SYN-ACK, ACK",
          "ACK, SYN, SYN-ACK"
        ],
        "question": "Thứ tự đúng của bắt tay ba bước TCP là gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "TIME_WAIT giúp phía chủ động đóng đảm bảo tín hiệu đóng được nhận đủ và tránh gói lạc của kết nối cũ gây nhiễu kết nối mới.",
        "options": [
          "Trạng thái server từ chối kết nối",
          "Một lỗi rò rỉ bộ nhớ của kernel",
          "Trạng thái chờ sau khi gửi request HTTP",
          "Trạng thái phía chủ động đóng giữ lại để gói lạc không gây nhiễu và phía kia nhận đủ tín hiệu đóng"
        ],
        "question": "TIME_WAIT là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Keep-alive và pool giúp tránh chi phí bắt tay TCP (và TLS) cho mọi request, giảm độ trễ và áp lực cổng.",
        "options": [
          "Để thay thế hoàn toàn DNS",
          "Để trình duyệt hiển thị trang nhanh hơn",
          "Tránh phải bắt tay lại cho mỗi request, giảm độ trễ và số kết nối ngắn hạn",
          "Để mã hóa dữ liệu hai lần"
        ],
        "question": "Keep-alive và connection pool giúp ích điều gì nhất cho service gọi nhau tần suất cao?"
      },
      {
        "answerIndex": 3,
        "explanation": "Connect timeout giới hạn pha thiết lập kết nối TCP; read timeout giới hạn pha chờ dữ liệu sau khi kết nối đã mở.",
        "options": [
          "Cả hai là một, chỉ khác tên",
          "Connect timeout là cho DNS, read timeout là cho TLS",
          "Read timeout ngắn hơn luôn tự suy ra connect timeout",
          "Connect timeout cho pha thiết lập kết nối, read timeout cho pha chờ dữ liệu trả về"
        ],
        "question": "Khác biệt giữa connect timeout và read timeout là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Không có timeout khiến thread bị giữ vô hạn khi downstream treo, pool cạn dần và sự cố lan thành tê liệt toàn service.",
        "options": [
          "JVM tự đặt timeout sau một phút",
          "Thread xử lý có thể bị giữ vô hạn khi downstream treo, làm cạn pool và tê liệt service",
          "Client sẽ tự chuyển sang UDP",
          "Gateway sẽ tự sửa cấu hình client"
        ],
        "question": "Điều gì xảy ra nếu HTTP client không đặt timeout?"
      },
      {
        "answerIndex": 0,
        "explanation": "Mỗi kết nối ngắn hạn đều đi qua TIME_WAIT; số lượng lớn kết nối như vậy làm cạn dải cổng tạm của phía chủ động đóng.",
        "options": [
          "Phía chủ động đóng tích lũy quá nhiều TIME_WAIT và cạn ephemeral port",
          "TLS certificate hết hạn",
          "DNS cache hết hạn",
          "Database hết connection"
        ],
        "question": "Vì sao mở kết nối mới cho mọi request gây rủi ro ở tải cao?"
      },
      {
        "answerIndex": 0,
        "explanation": "Ngân sách lồng nhau phải giảm dần vào trong để tầng trong kết thúc trước khi tầng ngoài bỏ cuộc, tránh retry chồng và việc vô ích.",
        "options": [
          "Timeout của tầng trong nên nhỏ hơn timeout của gateway ở tầng ngoài",
          "Gateway không bao giờ có timeout",
          "Timeout càng dài càng an toàn ở mọi tầng",
          "Mọi tầng nên dùng đúng một con số giống hệt nhau"
        ],
        "question": "Quan hệ đúng giữa timeout của gateway và timeout của service phía sau là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "RestClient là lựa chọn đồng bộ hiện đại của Spring Framework 6, cấu hình qua request factory với timeout rõ ràng.",
        "options": [
          "Dùng RestClient của Spring Framework 6 và đặt timeout trên request factory",
          "Dùng HTTP client đồng bộ cũ với cấu hình mặc định",
          "Không dùng client nào, để framework tự đoán",
          "Tự mở Socket thuần cho mọi lời gọi"
        ],
        "question": "Trong Spring Framework 6, nên dùng client đồng bộ nào và cấu hình timeout ở đâu?"
      },
      {
        "answerIndex": 1,
        "explanation": "Read timeout dài không chữa được lỗi ở pha kết nối; tăng nó chỉ làm thread bị giữ lâu hơn khi lỗi ở pha khác.",
        "options": [
          "Chắc chắn hết lỗi ngay",
          "Không chữa được lỗi, mà còn giữ thread lâu hơn khi sự cố ở pha kết nối",
          "Server sẽ tự mở cổng",
          "Lỗi chuyển thành lỗi DNS"
        ],
        "question": "Tăng read timeout để chữa lỗi không thiết lập được kết nối sẽ ra sao?"
      },
      {
        "answerIndex": 1,
        "explanation": "Tách các pha DNS, connect, TLS và read trong số đo độ trễ giúp xác định đúng pha gây chậm thay vì tối ưu mò.",
        "options": [
          "Chỉ đo thời gian xử lý trong controller",
          "Tách riêng các pha DNS, connect, TLS và read khi đo độ trễ",
          "Đo bằng cảm nhận của người dùng cuối",
          "Cộng tất cả thành một con số duy nhất"
        ],
        "question": "Khi điều tra một lời gọi chậm, cách đo đúng là gì?"
      }
    ]
  },
  "m06-api-gateway-kong-routing": {
    "checklist": [
      "Phân biệt được Service, Route, Consumer và Plugin trong mô hình của Kong.",
      "Viết được file khai báo DB-less định tuyến ba nhóm /v4/{gs,os,ws}/* về đúng upstream.",
      "Gắn được plugin rate limiting ở mức route và nêu khóa đếm phù hợp.",
      "Giải thích được vì sao service vẫn phải tự verify JWT dù gateway đã kiểm tra ở biên.",
      "Nhận diện được rủi ro rate limit theo IP khi địa chỉ nguồn đã bị SNAT.",
      "Vẽ được ranh giới trách nhiệm đúng giữa gateway và service."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Route là điều kiện khớp traffic (path, host, method, header) và trỏ vào một Service đích.",
        "options": [
          "Một loại cơ sở dữ liệu của Kong",
          "Điều kiện khớp traffic gắn vào một Service để quyết định định tuyến",
          "Một chứng thư TLS",
          "Một người dùng đã đăng ký"
        ],
        "question": "Route trong Kong là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Service trong Kong là định nghĩa upstream đích với thông số kết nối, timeout và retry.",
        "options": [
          "Một nhóm người dùng",
          "Một upstream đích mà Route trỏ tới",
          "Một plugin bảo mật",
          "Một bản ghi DNS"
        ],
        "question": "Service trong Kong đại diện cho điều gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Phòng thủ nhiều lớp: traffic nội bộ không qua gateway vẫn vào được service, nên service phải tự verify và phân quyền.",
        "options": [
          "Đúng, vì traffic nội bộ có thể vòng qua gateway, service phải tự bảo vệ theo nguyên tắc nhiều lớp",
          "Chỉ cần khi service có API công khai riêng",
          "Sai, gateway đã đủ cho mọi trường hợp",
          "Chỉ cần với route vận hành"
        ],
        "question": "Nhận định service vẫn phải tự verify JWT dù gateway đã kiểm tra ở biên có đúng không?"
      },
      {
        "answerIndex": 0,
        "explanation": "Plugin có thể gắn ở mức toàn cục, Service, Route hoặc Consumer; mức cụ thể hơn thắng khi có xung đột áp dụng.",
        "options": [
          "Gắn được ở mức toàn cục, Service, Route hoặc Consumer, mức cụ thể hơn được ưu tiên",
          "Chỉ gắn được toàn cục",
          "Plugin không có mức áp dụng",
          "Chỉ gắn được theo Consumer"
        ],
        "question": "Plugin của Kong có thể gắn ở những mức nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "Trong giới hạn của khóa học, DB-less nghĩa là toàn bộ cấu hình nằm trong một file khai báo được nạp nguyên tử, quản lý qua Git như code.",
        "options": [
          "Kong tự sinh cấu hình từ traffic",
          "Kong chạy không cần cấu hình",
          "Chỉ dùng cho môi trường test",
          "Cấu hình nằm trong một file khai báo được nạp nguyên tử, không có database quản trị riêng"
        ],
        "question": "Chế độ declarative DB-less của Kong nghĩa là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Khi nguồn bị SNAT, mọi client mang cùng một IP đã dịch; khóa theo IP khiến giới hạn áp chung cho tất cả.",
        "options": [
          "Vì sau SNAT mọi request mang cùng IP đã dịch nên giới hạn áp chung và gây chặn oan",
          "Vì plugin rate limiting không hỗ trợ IP",
          "Vì IP thay đổi sau mỗi request HTTP",
          "Vì trình duyệt không gửi IP"
        ],
        "question": "Vì sao rate limit theo IP nguy hiểm trong kiến trúc của Nova?"
      },
      {
        "answerIndex": 3,
        "explanation": "Gateway mạnh ở chính sách cắt ngang tại biên; quyết định cần dữ liệu nghiệp vụ như quyền trên ví điểm thuộc về service.",
        "options": [
          "Toàn bộ bảo mật phải ở gateway, service không cần gì",
          "Gateway thay thế hoàn toàn DNS nội bộ",
          "Gateway nên chứa cả logic tính điểm",
          "Mọi chính sách cắt ngang ở biên: định tuyến, rate limit biên, gắn correlation id; quyết định nghiệp vụ chi tiết ở service"
        ],
        "question": "Việc nào thuộc về gateway, việc nào thuộc về service?"
      },
      {
        "answerIndex": 2,
        "explanation": "Consumer là danh tính phía gọi đã biết, cho phép áp chính sách và quota riêng theo đối tác hoặc ứng dụng.",
        "options": [
          "Một loại route đặc biệt",
          "Một pod chạy phía sau gateway",
          "Danh tính của phía gọi đã biết, dùng để áp chính sách và quota riêng",
          "Nhật ký traffic của gateway"
        ],
        "question": "Consumer trong Kong dùng để làm gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Vượt ngưỡng rate limit được trả 429 Too Many Requests kèm thông tin thử lại, theo chuẩn HTTP.",
        "options": [
          "404 như không tồn tại route",
          "200 kèm thông điệp cảnh báo",
          "500 trong mọi trường hợp",
          "429 Too Many Requests"
        ],
        "question": "Khi vượt ngưỡng rate limiting, client nên nhận mã nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Ba tiền tố gs, os, ws là ba bề mặt client khác nhau nên cần route và chính sách tách bạch, tránh một route rộng nuốt tất cả.",
        "options": [
          "Để tăng tốc độ DNS",
          "Chúng là ba bản sao dự phòng của cùng một service",
          "Chúng là ba bề mặt client khác nhau cần route và chính sách riêng, tách bạch để không chảy nhầm traffic",
          "Chỉ để URL trông gọn hơn"
        ],
        "question": "Vì sao Nova tách route theo ba tiền tố gs, os và ws?"
      }
    ]
  },
  "m06-idempotency-key-giao-dich-diem": {
    "checklist": [
      "Giải thích được idempotency và vai trò của key trong việc phân biệt retry với ý định mới.",
      "Thiết kế được bảng idempotency gồm key, fingerprint, stored response và retention.",
      "Đặt được unique constraint trên key và xử lý vi phạm như tín hiệu dedupe.",
      "Trả lại được đúng stored response cho request trùng thay vì xử lý lại.",
      "Cài đặt được trừ điểm từ 3 nguồn ví theo thứ tự ưu tiên trong một transaction.",
      "Áp dụng được CAS bằng @Version để tránh lost update khi cập nhật đồng thời."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Idempotent nghĩa là cùng một ý định được thực thi nhiều lần vẫn cho cùng một trạng thái cuối và kết quả tương đương lần đầu.",
        "options": [
          "Thao tác chạy nhanh hơn khi gọi lại",
          "Thao tác mà thực thi một lần hay nhiều lần với cùng danh tính ý định đều cho cùng kết quả cuối",
          "Thao tác không bao giờ thất bại",
          "Thao tác không cần xác thực"
        ],
        "question": "Một thao tác idempotent là thao tác thế nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Không có key, hai tình huống bấm lại vì tưởng lỗi và cố ý trừ lần hai trông giống hệt nhau ở phía server.",
        "options": [
          "Để giảm kích thước request",
          "Để trình duyệt cache được response",
          "Để server phân biệt các lần gửi là cùng một ý định hay là ý định khác nhau",
          "Để thay thế hoàn toàn cho JWT"
        ],
        "question": "Idempotency key giải quyết vấn đề phân biệt nào?"
      },
      {
        "answerIndex": 0,
        "explanation": "Check-then-act có race condition; chỉ unique constraint ở tầng database mới đảm bảo tính nguyên tử khi hai request đến đồng thời.",
        "options": [
          "Đúng, vì chỉ ràng buộc ở database mới nguyên tử khi hai request tới đồng thời",
          "Sai, kiểm tra trước là đủ nhanh",
          "Sai, unique constraint chỉ dùng cho khóa chính nghiệp vụ",
          "Đúng một nửa, chỉ cần khi có hơn hai request"
        ],
        "question": "Nhận định chỉ kiểm tra tồn tại là chưa đủ, phải có unique constraint có đúng không?"
      },
      {
        "answerIndex": 3,
        "explanation": "Cùng key khác fingerprint nghĩa là client dùng sai key cho một ý định khác; trả stored response của ý định cũ sẽ gây nhầm lẫn nguy hiểm.",
        "options": [
          "Tự sửa request cho khớp fingerprint cũ",
          "Xóa bản ghi cũ và xử lý lại từ đầu",
          "Bỏ qua fingerprint, luôn trả stored response",
          "Trả lỗi rõ ràng về việc dùng sai key thay vì trả stored response của ý định khác"
        ],
        "question": "Khi cùng key nhưng fingerprint của request khác nhau, server nên làm gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Stored response đảm bảo lần trùng nhận đúng status và body của lần đầu, giữ khả năng đối soát của client.",
        "options": [
          "Để tiết kiệm băng thông",
          "Để request trùng nhận lại đúng status và body gốc, phục vụ đối soát",
          "Để thay thế cho log hệ thống",
          "Stored response là không cần thiết nếu đã dedupe trạng thái"
        ],
        "question": "Vì sao phải lưu stored response cùng idempotency key?"
      },
      {
        "answerIndex": 2,
        "explanation": "CAS dùng version: update chỉ thành công khi version còn khớp với lúc đọc; không khớp nghĩa là đã có cập nhật khác chen vào.",
        "options": [
          "So sánh địa chỉ IP của hai request",
          "Khóa toàn bộ bảng trong suốt giao dịch",
          "Cập nhật chỉ thành công nếu version trong database vẫn bằng version đã đọc",
          "Tự động cộng dồn hai lần trừ mà không cần đọc lại"
        ],
        "question": "CAS bằng cột version ngăn lost update bằng cách nào?"
      },
      {
        "answerIndex": 0,
        "explanation": "Với xung đột version, transaction hiện tại dựa trên dữ liệu cũ; phải tải lại và tính lại toàn bộ hoặc báo xung đột, không sửa mò trong transaction đã hỏng.",
        "options": [
          "Tải lại dữ liệu và tính lại toàn bộ giao dịch, hoặc trả xung đột có kiểm soát",
          "Tăng version lên một rồi ghi đè vô điều kiện",
          "Bỏ qua lỗi và commit phần đã làm được",
          "Chờ một giây rồi ghi lại cùng giá trị"
        ],
        "question": "Khi CAS thất bại vì xung đột version, cách xử lý đúng là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Việc trừ phải phân bổ theo ưu tiên như dùng nguồn sắp hết hạn trước, và vẫn nằm trong cùng một local transaction của ví.",
        "options": [
          "Trừ đều một phần ba từ mỗi nguồn bất kể tính chất",
          "Trừ theo thứ tự ưu tiên nghiệp vụ như nguồn sắp hết hạn trước, trong cùng một transaction",
          "Trừ nguồn nào có số dư lớn nhất trước trong mọi trường hợp",
          "Tạo ba giao dịch độc lập để trừ từng nguồn"
        ],
        "question": "Trừ điểm từ ví 3 nguồn nên theo nguyên tắc nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "Cùng một tư duy dedupe bằng khóa duy nhất bền vững xuất hiện ở API key, event id của consumer và khóa saga/bước của saga participant.",
        "options": [
          "Chỉ ở API nhận giao dịch",
          "Chỉ ở Kafka consumer",
          "Chỉ trong saga orchestration",
          "Ở cả API bằng idempotency key, consumer bằng event id và saga bằng khóa theo saga và bước"
        ],
        "question": "Nguyên tắc idempotency xuất hiện ở những tầng nào của Nova?"
      },
      {
        "answerIndex": 2,
        "explanation": "Key thuộc về một ý định nghiệp vụ và được giữ nguyên qua mọi lần retry của ý định đó; đổi key là tuyên bố một ý định mới.",
        "options": [
          "Mỗi lần retry phải sinh một key mới",
          "Key do server sinh sau khi xử lý xong lần đầu",
          "Client sinh một key cho mỗi ý định và giữ nguyên key đó cho mọi lần thử lại của cùng ý định",
          "Key chính là JWT của người dùng"
        ],
        "question": "Ai sinh idempotency key và giữ nó qua các lần retry?"
      }
    ]
  },
  "m06-outbox-debezium-kafka": {
    "checklist": [
      "Giải thích được dual-write problem và vì sao không có atomic commit giữa DB và Kafka khi không dùng XA.",
      "Tự thiết kế được bảng outbox (id, aggregate, type, payload, timestamp) cho một nghiệp vụ mới.",
      "Viết được service ghi business data + outbox event trong cùng một @Transactional.",
      "Cấu hình được Debezium connector dạng JSON cho bảng outbox và nêu được ý nghĩa từng trường chính.",
      "Viết được consumer idempotent dùng bảng dedupe trong cùng transaction với nghiệp vụ.",
      "Nêu được chiến lược dọn dẹp outbox và cách theo dõi sức khỏe connector (heartbeat, lag).",
      "Mô tả được quy trình draining khi SIGTERM và vai trò của grace period 75 giây ở Nova Loyalty."
    ],
    "quiz": [
      {
        "question": "Vấn đề cốt lõi của dual-write khi ghi database và publish Kafka trong cùng một luồng nghiệp vụ là gì?",
        "options": [
          "Kafka không hỗ trợ publish từ Spring Boot",
          "Hai thao tác không nằm trong cùng một transaction, nên một thao tác có thể thành công còn thao tác kia thất bại, gây mất nhất quán",
          "Database không cho phép ghi đồng thời với Kafka producer",
          "Producer luôn gửi chậm hơn transaction commit"
        ],
        "answerIndex": 1,
        "explanation": "Database transaction và Kafka broker là hai hệ thống độc lập, không có atomic commit chung (khi không dùng XA/2PC). Nếu app crash sau khi commit DB nhưng trước khi publish, sự kiện bị mất vĩnh viễn."
      },
      {
        "question": "Trong Outbox pattern, sự kiện được ghi ở đâu tại thời điểm xử lý giao dịch nghiệp vụ?",
        "options": [
          "Gửi thẳng vào Kafka topic bằng producer",
          "Ghi vào một bảng outbox trong cùng database và cùng transaction với dữ liệu nghiệp vụ",
          "Ghi vào file log của application",
          "Lưu vào bộ nhớ của một relay service riêng"
        ],
        "answerIndex": 1,
        "explanation": "Điểm mấu chốt: business data và outbox event được ghi trong CÙNG một local transaction. Hoặc cả hai cùng commit, hoặc cả hai cùng rollback — không còn cửa sổ mất nhất quán."
      },
      {
        "question": "Debezium đọc thay đổi từ database bằng cơ chế nào?",
        "options": [
          "Polling bảng outbox bằng câu SELECT định kỳ",
          "Đọc transaction log (WAL/binlog) qua Change Data Capture (CDC)",
          "Trigger trong database gọi HTTP tới Debezium",
          "Spring Data repository event listener"
        ],
        "answerIndex": 1,
        "explanation": "Debezium là CDC connector: nó đọc transaction log của database (ví dụ WAL của PostgreSQL với logical decoding) và biến mỗi thay đổi thành sự kiện đưa vào Kafka, độ trễ thấp và không cần polling."
      },
      {
        "question": "Vì sao consumer phía CRM vẫn phải idempotent dù đã dùng Outbox + Debezium?",
        "options": [
          "Vì Kafka chỉ đảm bảo at-least-once trong thực tế, message có thể được deliver lại",
          "Vì Debezium luôn gửi trùng mọi sự kiện đúng hai lần",
          "Vì CRM không hỗ trợ transaction",
          "Vì consumer group luôn có đúng một consumer"
        ],
        "answerIndex": 0,
        "explanation": "Outbox + CDC cho at-least-once delivery: rebalance, retry hoặc crash sau khi xử lý nhưng trước khi commit offset đều khiến message bị deliver lại. Consumer phải tự dedupe, ví dụ bằng bảng processed event với khóa chính là event id."
      },
      {
        "question": "Cách dedupe phổ biến và an toàn cho idempotent consumer là gì?",
        "options": [
          "Giữ một HashSet event id trong bộ nhớ của consumer",
          "Insert event id vào bảng dedupe trong cùng transaction với thao tác nghiệp vụ; nếu vi phạm unique constraint thì bỏ qua message",
          "Tắt enable.auto.commit và không commit offset nữa",
          "Đặt max.poll.records = 1"
        ],
        "answerIndex": 1,
        "explanation": "Dedupe phải bền vững qua restart và phải atomic với nghiệp vụ. Insert vào bảng dedupe (unique/primary key trên event id) trong cùng transaction là cách chuẩn; giữ trong bộ nhớ sẽ mất khi pod restart."
      },
      {
        "question": "Sai lầm nào sau đây phá vỡ tính đảm bảo của Outbox pattern?",
        "options": [
          "Dọn dẹp các dòng outbox đã publish sau một thời gian lưu trữ",
          "Publish thêm một message trực tiếp tới Kafka bên trong transaction nghiệp vụ \"cho nhanh\"",
          "Đặt khóa chính của bảng outbox là UUID",
          "Dùng aggregate id làm Kafka message key"
        ],
        "answerIndex": 1,
        "explanation": "Publish trực tiếp trong transaction tái tạo đúng lỗi dual-write: message có thể tới Kafka trong khi transaction sau đó rollback, khiến downstream nhận sự kiện cho dữ liệu không hề tồn tại."
      },
      {
        "question": "Để giữ thứ tự sự kiện của cùng một aggregate (ví dụ cùng một ví điểm), nên làm gì?",
        "options": [
          "Dùng nhiều partition và không đặt key",
          "Dùng aggregate id làm message key để các sự kiện cùng aggregate vào cùng partition",
          "Tăng số lượng consumer lên gấp đôi",
          "Sắp xếp lại theo timestamp phía consumer là đủ trong mọi trường hợp"
        ],
        "answerIndex": 1,
        "explanation": "Kafka chỉ đảm bảo thứ tự trong một partition. Đặt key = aggregate id (thường được cấu hình trong Debezium routing) giúp mọi sự kiện của cùng một ví vào cùng partition và được tiêu thụ theo thứ tự."
      },
      {
        "question": "Khi pod nhận SIGTERM, graceful shutdown / draining đúng nghĩa là gì?",
        "options": [
          "Kill ngay mọi request đang xử lý để pod chết nhanh",
          "Ngừng nhận traffic và message mới, xử lý xong phần đang dở (hoặc tới giới hạn thời gian), commit offset, rồi mới thoát",
          "Tăng terminationGracePeriodSeconds lên vô hạn",
          "Scale deployment về 0 ngay lập tức"
        ],
        "answerIndex": 1,
        "explanation": "Draining = ngừng nhận việc mới nhưng hoàn tất việc đang dở trong giới hạn grace period (ở Nova Loyalty là 75 giây cho consumer). Spring Boot hỗ trợ qua spring.lifecycle.timeout-per-shutdown-phase và cơ chế shutdown của Kafka listener container."
      },
      {
        "question": "Bảng outbox tăng trưởng không kiểm soát sẽ gây hậu quả gì và xử lý thế nào?",
        "options": [
          "Không có hậu quả vì Debezium tự xóa dòng sau khi đọc",
          "Bảng phình to làm chậm query và tốn storage; cần job dọn dẹp định kỳ các dòng đã publish quá thời gian lưu trữ, kèm heartbeat/monitoring cho connector",
          "Kafka tự động truncate bảng outbox",
          "Chỉ cần thêm index là đủ, không cần dọn dẹp"
        ],
        "answerIndex": 1,
        "explanation": "Debezium không tự xóa dữ liệu nguồn. Cần chiến lược retention: xóa/archive các dòng đã gửi sau N ngày, và theo dõi trạng thái connector để phát hiện khi CDC bị dừng."
      },
      {
        "question": "Trường nào trong outbox event giúp consumer và việc truy vết (traceability) về sau?",
        "options": [
          "Chỉ cần payload, các trường còn lại là thừa",
          "event id (UUID), aggregate type/id, event type, payload, timestamp và trace/correlation id nếu có",
          "Chỉ cần timestamp",
          "Tên của developer tạo giao dịch"
        ],
        "answerIndex": 1,
        "explanation": "Event id dùng cho dedupe, aggregate id dùng làm key/thứ tự, event type để routing và versioning, payload là dữ liệu sự kiện, timestamp + correlation id phục vụ điều tra sự cố và tracing."
      }
    ]
  },
  "m06-retry-backoff-dlq-graceful-shutdown": {
    "checklist": [
      "Phân loại được lỗi tạm thời, lỗi vĩnh viễn và lỗi không rõ ràng trước khi đặt retry.",
      "Thiết kế được exponential backoff kèm jitter, trần chờ và ngân sách tổng.",
      "Cấu hình được DefaultErrorHandler với DeadLetterPublishingRecoverer cho Spring Kafka.",
      "Nêu được quy trình vận hành DLQ gồm theo dõi, chẩn đoán, sửa nguyên nhân và replay.",
      "Mô tả được các bước graceful shutdown trong ngân sách draining 75 giây.",
      "Đối chiếu được timeout-per-shutdown-phase trong ứng dụng với terminationGracePeriodSeconds của pod."
    ],
    "quiz": [
      {
        "answerIndex": 2,
        "explanation": "Lỗi tạm thời như chớp mạng hay quá tải ngắn hạn đáng retry; lỗi vĩnh viễn như payload hỏng retry bao nhiêu cũng cho cùng kết quả.",
        "options": [
          "Chỉ lỗi do người dùng gây ra mới đáng retry",
          "Mọi lỗi đều đáng retry như nhau",
          "Chỉ lỗi tạm thời mới đáng retry; lỗi vĩnh viễn phải tới xử lý cuối cùng như DLQ",
          "Retry hay không phụ thuộc vào kích thước message"
        ],
        "question": "Loại lỗi nào đáng retry?"
      },
      {
        "answerIndex": 0,
        "explanation": "Jitter là ngẫu nhiên cộng thêm vào thời gian chờ để các client không đồng loạt thử lại cùng một nhịp sau sự cố chung.",
        "options": [
          "Thành phần ngẫu nhiên trong thời gian chờ để tránh thundering herd khi nhiều client retry đồng loạt",
          "Một loại nén dữ liệu",
          "Tên của một loại exception trong Kafka",
          "Thuật toán chọn partition"
        ],
        "question": "Jitter trong backoff để làm gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Backoff hàm mũ làm khoảng chờ tăng dần và phải có trần, nếu không lần chờ cuối có thể dài vô lý.",
        "options": [
          "Sai, backoff luôn là chờ cố định",
          "Đúng một nửa, chỉ áp dụng cho HTTP client",
          "Sai, jitter thay thế hoàn toàn cho backoff",
          "Đúng, khoảng chờ tăng theo cấp số nhân và cần trần tối đa cùng ngân sách tổng"
        ],
        "question": "Nhận định về exponential backoff có đúng không?"
      },
      {
        "answerIndex": 0,
        "explanation": "DLQ/DLT giữ message hỏng kèm metadata để vận hành: chẩn đoán, sửa nguyên nhân và replay khi sẵn sàng.",
        "options": [
          "Hàng đợi/topic chứa message đã hết retry hoặc lỗi vĩnh viễn, kèm metadata lỗi để chẩn đoán và replay sau",
          "Cơ chế tăng tốc độ consumer",
          "Nơi xóa vĩnh viễn message hỏng",
          "Một partition dự phòng của topic chính"
        ],
        "question": "Dead Letter Queue trong hệ thống Kafka của Nova là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Không có DLQ, poison message sẽ được thử lại hoặc chặn đứng, khiến các message hợp lệ phía sau nó trong cùng partition không tiến lên được.",
        "options": [
          "Kafka tự sửa được payload hỏng",
          "Nó chặn tiến trình của partition, các message sau nó không được xử lý hoặc hệ thống quay vòng lỗi mãi",
          "Consumer tự tách nó sang một luồng riêng",
          "Message đó tự biến mất sau một ngày"
        ],
        "question": "Điều gì xảy ra với một poison message khi không có DLQ?"
      },
      {
        "answerIndex": 1,
        "explanation": "Metadata như topic/partition/offset gốc, loại exception và dấu vết lỗi giúp định vị và replay đúng message sau khi sửa nguyên nhân.",
        "options": [
          "Chỉ nội dung message gốc là đủ",
          "Thông tin định vị và chẩn đoán như topic, partition, offset gốc và loại exception đã xảy ra",
          "Không cần thông tin gì thêm",
          "Tên của developer viết consumer"
        ],
        "question": "Message vào DLQ cần mang theo thông tin gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Graceful shutdown là ngừng nhận việc mới nhưng hoàn tất việc đang dở trong grace period rồi mới đóng tài nguyên và thoát.",
        "options": [
          "Chỉ áp dụng cho web server, không liên quan Kafka listener",
          "Đúng, ngừng nhận việc mới, xử lý xong việc đang dở trong giới hạn rồi mới đóng và thoát",
          "Graceful shutdown do Kubernetes tự làm hết, ứng dụng không cần cấu hình",
          "Sai, graceful nghĩa là giết tiến trình thật nhanh"
        ],
        "question": "Nhận định về graceful shutdown có đúng không?"
      },
      {
        "answerIndex": 0,
        "explanation": "Ngân sách trong ứng dụng phải nằm gọn trong grace period của pod (ở Nova là 75 giây cho consumer), nếu không SIGKILL cắt ngang giữa chừng.",
        "options": [
          "Tổng ngân sách drain của ứng dụng cộng trừ hao phải nằm gọn trong terminationGracePeriodSeconds của pod",
          "Grace period của pod phải ngắn hơn shutdown của ứng dụng",
          "Chúng không liên quan tới nhau",
          "Chỉ cần cấu hình đúng một trong hai phía"
        ],
        "question": "Quan hệ giữa ngân sách shutdown của ứng dụng và grace period của pod là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Retry một thao tác không rõ kết quả mà thao tác không idempotent có thể nhân đôi tác dụng, ví dụ cộng điểm hai lần.",
        "options": [
          "Chỉ cần tăng số lần retry là đủ",
          "Lỗi không rõ ràng tự chuyển thành lỗi vĩnh viễn",
          "Chỉ retry an toàn khi thao tác là idempotent, vì phía nhận có thể đã xử lý xong trước khi response bị mất",
          "Retry luôn an toàn trong mọi trường hợp"
        ],
        "question": "Vì sao lỗi không rõ kết quả là nhóm nguy hiểm nhất khi retry?"
      },
      {
        "answerIndex": 3,
        "explanation": "Ngân sách tổng ngăn việc các lớp retry lồng nhau nhân thời gian chờ vượt quá timeout của tầng gọi ngoài cùng.",
        "options": [
          "Vì framework bắt buộc khai báo bốn con số",
          "Để log có thêm một con số đẹp",
          "Để DLQ nhận message nhanh hơn",
          "Để tổng thời gian của mọi lớp retry lồng nhau vẫn nhỏ hơn timeout của tầng gọi ngoài cùng"
        ],
        "question": "Vì sao chính sách retry cần ngân sách thời gian tổng?"
      }
    ]
  },
  "m06-saga-choreography-orchestration": {
    "checklist": [
      "Giải thích được saga là dãy local transaction kèm compensating transaction, không phải distributed transaction.",
      "So sánh được choreography và orchestration về điều phối, quan sát và coupling.",
      "Thiết kế được saga đổi quà với bước, bù trừ và trạng thái trung gian rõ ràng.",
      "Nêu được hệ quả của isolation yếu và cách dùng trạng thái nghiệp vụ để sống chung với nó.",
      "Xử lý được ca kết quả không rõ ràng bằng idempotency và truy vấn trạng thái trước khi bù trừ.",
      "Lưu được trạng thái saga bền vững để orchestrator khởi động lại vẫn tiếp tục đúng chỗ."
    ],
    "quiz": [
      {
        "answerIndex": 0,
        "explanation": "Saga là dãy local transaction; khi một bước thất bại, các bước đã xong được hoàn tác về mặt nghiệp vụ bằng compensating transaction.",
        "options": [
          "Dãy local transaction, khi lỗi thì chạy compensating transaction cho các bước đã hoàn thành",
          "Một transaction database duy nhất bao nhiều service",
          "Cơ chế sao lưu dữ liệu giữa các service",
          "Một loại khóa phân tán của Kafka"
        ],
        "question": "Saga giải quyết giao dịch đa service bằng cách nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "Bù trừ là một thao tác nghiệp vụ mới có ý nghĩa ngược (hoàn điểm), có audit riêng, không xóa lịch sử của thao tác gốc.",
        "options": [
          "Chạy lại đúng câu SQL ngược do database tự sinh",
          "Hoàn tác ở tầng Kafka bằng cách xóa message",
          "Xóa vật lý dòng dữ liệu của bước gốc",
          "Một thao tác nghiệp vụ mới có ý nghĩa ngược với bước gốc, có trạng thái và audit riêng"
        ],
        "question": "Compensating transaction là gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Choreography không có điều phối trung tâm; mỗi service phản ứng với sự kiện của bước trước và tự lo bù trừ của mình.",
        "options": [
          "Sai, choreography luôn có một orchestrator ẩn",
          "Choreography không cần sự kiện hay lệnh",
          "Choreography chỉ khác ở tên gọi của orchestrator",
          "Đúng, các service phản ứng theo sự kiện, không có orchestrator trung tâm"
        ],
        "question": "Nhận định về choreography có đúng không?"
      },
      {
        "answerIndex": 1,
        "explanation": "Orchestration lưu trạng thái tập trung nên truy vấn tiến trình và xử lý treo có một nơi rõ ràng để nhìn và can thiệp.",
        "options": [
          "Vì nó dùng ít service hơn hẳn",
          "Vì nó có một nơi lưu trạng thái toàn cục của saga để truy vấn, giám sát và tiếp tục sau khi khởi động lại",
          "Vì nó tự động có isolation như transaction đơn",
          "Vì nó không cần lưu trạng thái"
        ],
        "question": "Vì sao orchestration dễ quan sát hơn khi saga dài?"
      },
      {
        "answerIndex": 1,
        "explanation": "Saga không khóa dữ liệu trong suốt quá trình, nên trạng thái trung gian như điểm đã trừ nhưng quà chưa xác nhận là có thể nhìn thấy.",
        "options": [
          "Chỉ orchestrator mới thấy dữ liệu của saga",
          "Các service khác có thể nhìn thấy trạng thái trung gian của saga, phải thiết kế trạng thái nghiệp vụ rõ ràng để sống chung",
          "Trạng thái trung gian không bao giờ tồn tại",
          "Saga có isolation mạnh hơn transaction đơn database"
        ],
        "question": "Hệ quả isolation yếu của saga là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Thao tác không thu hồi được phải là bước cuối hoặc được thiết kế lại, nếu không saga không có cách hoàn tác khi bước sau nó thất bại.",
        "options": [
          "Đặt ở cuối saga hoặc thiết kế lại, vì không có bù trừ thật sự cho nó",
          "Chia nhỏ nó ra mọi bước",
          "Đặt ở bước đầu tiên để chắc chắn nó chạy",
          "Bỏ qua, saga tự xử lý được mọi thao tác"
        ],
        "question": "Thao tác không thể bù trừ nên được đặt ở đâu trong saga?"
      },
      {
        "answerIndex": 2,
        "explanation": "Khi kết quả không rõ, phải xác định sự thật bằng truy vấn trạng thái hoặc lệnh idempotent gửi lại an toàn trước khi bù trừ.",
        "options": [
          "Sai, hủy toàn bộ saga và bắt khách làm lại",
          "Không cần làm gì vì timeout tự giải quyết",
          "Đúng, cần truy vấn trạng thái hoặc lệnh idempotent để biết bước đã chạy hay chưa trước khi bù trừ",
          "Sai, cứ bù trừ ngay cho an toàn"
        ],
        "question": "Nhận định xử lý bước không rõ kết quả có đúng không?"
      },
      {
        "answerIndex": 2,
        "explanation": "Thứ tự bù trừ phải ngược thứ tự thực thi để gỡ các phụ thuộc theo chiều ngược lại, như giải phóng quà trước khi hoàn điểm tùy thiết kế bước.",
        "options": [
          "Thứ tự bất kỳ, không quan trọng",
          "Chỉ bù trừ bước cuối cùng",
          "Ngược thứ tự thực thi của các bước đã hoàn thành",
          "Cùng thứ tự với thứ tự thực thi"
        ],
        "question": "Bù trừ nên chạy theo thứ tự nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Khóa theo saga và bước giúp gửi lại lệnh an toàn: bước đã chạy sẽ cho kết quả cũ thay vì chạy lần hai.",
        "options": [
          "Để log đẹp hơn",
          "Để Kafka tự sắp xếp thứ tự",
          "Để lệnh và bù trừ của từng bước được idempotent, gửi lại không gây tác dụng lần hai",
          "Để giảm kích thước message"
        ],
        "question": "Vì sao lệnh của participant cần idempotency key theo saga và bước?"
      },
      {
        "answerIndex": 1,
        "explanation": "Nova không dùng JTA và có nhiều datasource độc lập nên không tồn tại transaction nguyên tử bao trọn các service/datasource đó.",
        "options": [
          "Vì điểm là dữ liệu quá nhạy cảm",
          "Vì các bước nằm ở các service và datasource khác nhau, Nova không dùng JTA nên không có transaction nguyên tử chung",
          "Vì Kafka không hỗ trợ transaction nào cả",
          "Vì Spring không có annotation transaction"
        ],
        "question": "Vì sao Nova không dùng một transaction phân tán kiểu XA cho đổi quà?"
      }
    ]
  },
  "m06-service-to-service-auth": {
    "checklist": [
      "Phân biệt được danh tính workload và danh tính chủ thể gốc trong một lời gọi nội bộ.",
      "Mô tả được grant client credentials và nguyên tắc scope least privilege cho từng service.",
      "Nêu được điều kiện để JWT nội bộ tự cấp được coi là an toàn.",
      "Giải thích được mTLS và token tầng ứng dụng bổ sung cho nhau thế nào.",
      "Thiết kế được token exchange giữ sub, thu hẹp aud và scope cho hop nội bộ.",
      "Nhận diện được hai lỗi truyền tiếp danh tính: vứt bỏ chủ thể gốc và forward nguyên token công khai."
    ],
    "quiz": [
      {
        "answerIndex": 1,
        "explanation": "Hai tầng là service nào đang gọi (workload) và thao tác làm thay mặt chủ thể nào (người dùng gốc); trộn chúng gây lỗi phân quyền và audit.",
        "options": [
          "Chỉ cần danh tính người dùng gốc là đủ",
          "Cần cả danh tính workload của service gọi và danh tính chủ thể gốc của thao tác",
          "Chỉ cần địa chỉ IP của pod gọi",
          "Cần một token dùng chung cho toàn hệ thống"
        ],
        "question": "Một lời gọi nội bộ đúng thiết kế cần mang những danh tính nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Client credentials cho service dùng danh tính của chính nó xin token ngắn hạn từ authorization server, mang scope nó cần.",
        "options": [
          "Người dùng gửi mật khẩu cho service trung gian",
          "Service dùng lại token của người dùng vô thời hạn",
          "Service dùng credential riêng của nó xin access token ngắn hạn với scope tối thiểu",
          "Hai service chia sẻ một bí mật tĩnh không bao giờ đổi"
        ],
        "question": "OAuth2 client credentials grant hoạt động thế nào cho service-to-service?"
      },
      {
        "answerIndex": 0,
        "explanation": "Least privilege nghĩa là mỗi service chỉ có scope cho đúng endpoint nó cần, giảm phạm vi thiệt hại khi một service bị xâm nhập.",
        "options": [
          "Đúng, scope tối thiểu theo đúng nhu cầu của từng service, thừa quyền là rủi ro",
          "Sai, mọi service nên có mọi scope cho tiện",
          "Chỉ áp dụng cho người dùng cuối",
          "Scope không liên quan tới bảo mật nội bộ"
        ],
        "question": "Nhận định về least privilege cho scope nội bộ có đúng không?"
      },
      {
        "answerIndex": 3,
        "explanation": "Token exchange đổi token gốc lấy token nội bộ ngắn hạn, giữ sub của chủ thể, thu hẹp aud/scope và ghi actor trung gian.",
        "options": [
          "Gửi credential của service và xóa mọi dấu vết người dùng",
          "Lưu token gốc vào database để dùng lại sau",
          "Forward nguyên token gốc cho mọi hop bất kể aud",
          "Đổi token gốc thành token nội bộ ngắn hạn, giữ sub, thu hẹp aud và scope, ghi rõ service trung gian"
        ],
        "question": "Token exchange giải quyết bài toán truyền tiếp danh tính thế nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Kiểm tra aud đảm bảo token chỉ được dùng ở đúng phía nhận nó được phát cho, chặn việc mang token công khai vào nội bộ.",
        "options": [
          "Để token ngắn hơn",
          "Để token phát cho một audience không bị dùng ở phía nhận khác",
          "Để tự động gia hạn token",
          "Để thay thế kiểm tra chữ ký"
        ],
        "question": "Vì sao phía nhận phải kiểm tra claim aud?"
      },
      {
        "answerIndex": 2,
        "explanation": "mTLS xác thực workload ở tầng vận chuyển bằng chứng thư; token mang quyền, scope và chủ thể ở tầng ứng dụng. Chúng bổ sung, không thay thế nhau.",
        "options": [
          "Chúng là một, có mTLS thì không cần token nữa",
          "Token làm cho mTLS thừa hoàn toàn",
          "mTLS xác thực workload ở tầng vận chuyển, token mang quyền và chủ thể ở tầng ứng dụng, hai lớp bổ sung cho nhau",
          "mTLS chỉ dùng cho trình duyệt"
        ],
        "question": "Quan hệ giữa mTLS và token tầng ứng dụng là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Một bí mật dùng chung không cho biết service nào đã gọi và một lần lộ sẽ mở toàn bộ mạng nội bộ.",
        "options": [
          "Đúng, nó xóa khả năng phân biệt workload và một lần lộ mở toàn mạng nội bộ",
          "Sai, đó là cách được khuyến nghị nhất",
          "Chỉ sai khi có hơn mười service",
          "Không liên quan tới audit"
        ],
        "question": "Nhận định một token tĩnh dùng chung cho mọi service là thiết kế nguy hiểm có đúng không?"
      },
      {
        "answerIndex": 1,
        "explanation": "JWT tự cấp chỉ an toàn khi khóa được xoay vòng, token rất ngắn hạn, iss/aud ghim chặt và mọi phía nhận verify đầy đủ.",
        "options": [
          "Luôn an toàn vì do chính team ký",
          "Chỉ an toàn khi quản lý và xoay vòng khóa đúng, token rất ngắn hạn, iss/aud ghim chặt và verify đầy đủ ở mọi phía nhận",
          "An toàn khi để bí mật ký trong file cấu hình của repo",
          "An toàn miễn là token có đủ claim"
        ],
        "question": "Khi nào JWT nội bộ tự cấp được coi là chấp nhận được?"
      },
      {
        "answerIndex": 3,
        "explanation": "Không có chủ thể gốc, phía cuối không phân quyền theo sở hữu được và audit ghi sai người chịu trách nhiệm của thao tác.",
        "options": [
          "Không mất gì đáng kể",
          "Chỉ mất khả năng cache",
          "Chỉ chậm hơn một chút",
          "Mất khả năng phân quyền theo chủ sở hữu ở phía cuối và audit ghi sai chủ thể"
        ],
        "question": "Vứt bỏ danh tính gốc ở hop giữa gây hậu quả gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Client secret của service phải đến từ kho bí mật của môi trường, được xoay vòng và không bao giờ nằm trong repo.",
        "options": [
          "Ghi cứng trong mã nguồn cho dễ deploy",
          "Chia sẻ chung một secret cho mọi môi trường",
          "Lấy từ kho bí mật của môi trường qua biến tham chiếu, xoay vòng được và không nằm trong repo",
          "Gửi kèm trong mọi request để service bạn tự đọc"
        ],
        "question": "Bí mật của client credentials nên được quản lý thế nào?"
      }
    ]
  },
  "m07-builder-pattern": {
    "checklist": [
      "Dựng được đối tượng bất biến nhiều trường tùy chọn bằng Builder fluent.",
      "Đặt được validation tập trung trong `build()` với thông điệp lỗi rõ ràng.",
      "Thiết lập được giá trị mặc định hợp lý cho các trường tùy chọn.",
      "Giải thích được rủi ro nhầm thứ tự tham số của constructor dài.",
      "Nhận biết được khi Builder là over-engineering so với record hoặc factory.",
      "Áp dụng được pattern cho criteria truy vấn trên datasource report của Nova Loyalty."
    ],
    "quiz": [
      {
        "question": "Validation của Builder nên đặt ở đâu để mọi đường tạo đối tượng đều được kiểm tra?",
        "options": [
          "Ở từng method setter của Builder",
          "Tập trung trong `build()`",
          "Ở service gọi Builder",
          "Ở database"
        ],
        "answerIndex": 1,
        "explanation": "build() là cổng duy nhất sinh đối tượng hoàn chỉnh, nên validation tập trung ở đó đảm bảo không đường nào lách qua được."
      },
      {
        "question": "Vấn đề chính của constructor có 8 tham số, nhiều tham số cùng kiểu, là gì?",
        "options": [
          "Java không hỗ trợ constructor dài",
          "Constructor không thể là private",
          "Dễ gọi nhầm thứ tự mà compiler không phát hiện",
          "Không thể đặt giá trị mặc định trong Java"
        ],
        "answerIndex": 2,
        "explanation": "Các tham số cùng kiểu hoán đổi vị trí vẫn biên dịch được, tạo bug âm thầm. Builder gọi theo tên nên loại bỏ rủi ro này."
      },
      {
        "question": "Đối tượng do Builder tạo nên có tính chất gì để an toàn khi dùng trong truy vấn dài?",
        "options": [
          "Bất biến sau khi tạo",
          "Mutable để tiện chỉnh sửa",
          "Luôn là singleton",
          "Phải kế thừa Builder"
        ],
        "answerIndex": 0,
        "explanation": "Bất biến giúp tiêu chí không thay đổi giữa chừng khi truy vấn đang chạy và an toàn khi chia sẻ giữa các thread."
      },
      {
        "question": "Fluent API tốt có đặc điểm nào?",
        "options": [
          "Mọi method đều tên một chữ cái",
          "Không cần giá trị mặc định",
          "Mỗi method trả về void",
          "Chuỗi lời gọi đọc như câu mô tả bằng ngôn ngữ nghiệp vụ"
        ],
        "answerIndex": 3,
        "explanation": "Tên method theo ngôn ngữ nghiệp vụ và trả về chính Builder giúp chuỗi gọi tự mô tả, người review đọc hiểu ngay."
      },
      {
        "question": "Khi nào Builder là lựa chọn thừa?",
        "options": [
          "Đối tượng có 6 trường tùy chọn",
          "Đối tượng chỉ có 2 trường bắt buộc và không có tùy chọn",
          "Cần validation tổ hợp nhiều trường",
          "Nhiều nơi gọi với các tổ hợp khác nhau"
        ],
        "answerIndex": 1,
        "explanation": "Ít trường và không có tổ hợp tùy chọn thì constructor hoặc static factory gọn hơn nhiều so với một class Builder riêng."
      },
      {
        "question": "Vì sao cần sao chép phòng thủ với trường dạng collection trong Builder?",
        "options": [
          "Để Builder chạy nhanh hơn",
          "Vì Java yêu cầu vậy",
          "Để dùng được record",
          "Để thay đổi sau này trên collection gốc không làm đối tượng đã build thay đổi theo"
        ],
        "answerIndex": 3,
        "explanation": "Đối tượng bất biến chỉ thật sự bất biến khi các thành phần mutable bên trong cũng được sao chép hoặc bọc bất biến."
      },
      {
        "question": "Giá trị mặc định nên được đặt ở đâu?",
        "options": [
          "Ở mỗi nơi gọi",
          "Trong database",
          "Trong Builder, để nơi gọi chỉ ghi rõ phần khác mặc định",
          "Không nên có mặc định"
        ],
        "answerIndex": 2,
        "explanation": "Mặc định tập trung trong Builder giúp lời gọi ngắn gọn và nhất quán; nơi gọi chỉ nêu phần đặc thù của báo cáo."
      },
      {
        "question": "Lỗi validate trong build() nên được truyền đạt thế nào?",
        "options": [
          "Ném exception kèm tên trường và điều kiện bị vi phạm",
          "Nuốt lỗi và trả về null",
          "Ghi log rồi vẫn tạo đối tượng",
          "Trả về đối tượng với giá trị sửa tự động"
        ],
        "answerIndex": 0,
        "explanation": "Thông điệp rõ ràng giúp người gọi sửa đúng trường sai ngay, thay vì mò mẫm từ một lỗi chung chung."
      },
      {
        "question": "Record của Java 21 có thay thế hoàn toàn Builder không?",
        "options": [
          "Có, trong mọi trường hợp",
          "Record không bất biến",
          "Không: record tốt cho dữ liệu bất biến đơn giản nhưng không giải quyết nhiều trường tùy chọn và mặc định",
          "Record không dùng được trong Spring"
        ],
        "answerIndex": 2,
        "explanation": "Record và Builder bổ sung nhau: record cho carrier đơn giản, Builder cho việc dựng đối tượng phức tạp có mặc định và validation tổ hợp."
      },
      {
        "question": "Dấu hiệu criteria đang bị nhồi quá nhiều trường là gì?",
        "options": [
          "Builder có đúng 5 method",
          "Không ai phân biệt được trường bắt buộc và tùy chọn, criteria dùng cho các báo cáo khác bản chất",
          "Có validation trong build",
          "Đối tượng là bất biến"
        ],
        "answerIndex": 1,
        "explanation": "Khi criteria trở thành túi trường dùng chung cho mọi báo cáo, nên tách theo nhóm báo cáo cùng bản chất."
      }
    ]
  },
  "m07-decorator-proxy-primary": {
    "checklist": [
      "Phân biệt được Decorator thủ công và proxy do Spring container tạo.",
      "Cài đặt được decorator caching và logging bọc quanh service mà không sửa service lõi.",
      "Dùng đúng qualifier và `@Primary` để kiểm soát việc tiêm bean.",
      "Giải thích được thứ tự bọc ảnh hưởng thế nào tới hành vi quan sát được.",
      "Nhận biết và tránh được lỗi self-invocation khi cần hành vi bọc.",
      "Thiết kế được cơ chế vô hiệu hóa cache đi kèm nghiệp vụ thay đổi điểm."
    ],
    "quiz": [
      {
        "question": "Decorator trong Spring thường được cài đặt bằng cách nào?",
        "options": [
          "Kế thừa service lõi và ghi đè mọi method",
          "Một bean cùng interface, giữ tham chiếu tới bean bên trong và ủy quyền sau khi thêm hành vi",
          "Sao chép code của service lõi",
          "Dùng static method tiện ích"
        ],
        "answerIndex": 1,
        "explanation": "Decorator giữ cùng interface và ủy quyền cho delegate: hành vi mới được thêm quanh lời gọi mà service lõi không hề biết."
      },
      {
        "question": "`@Primary` có tác dụng gì khi có nhiều bean cùng type?",
        "options": [
          "Xóa các bean còn lại khỏi context",
          "Bắt buộc mọi nơi gọi dùng bean đó kể cả khi có qualifier khác",
          "Đánh dấu bean mặc định được chọn khi nơi gọi không chỉ định qualifier",
          "Tăng độ ưu tiên khởi động của bean"
        ],
        "answerIndex": 2,
        "explanation": "Primary chỉ là lựa chọn mặc định khi thiếu thông tin chọn bean; qualifier tường minh tại điểm tiêm vẫn thắng."
      },
      {
        "question": "Trong chuỗi cache ngoài, logging trong, lần gọi trúng cache sẽ thế nào?",
        "options": [
          "Không đi qua logging decorator vì cache trả kết quả ngay",
          "Vẫn ghi log như lần đầu",
          "Ghi log hai lần",
          "Ném exception"
        ],
        "answerIndex": 0,
        "explanation": "Thứ tự bọc quyết định hành vi: lớp ngoài chặn trước thì các lớp trong không được thực thi cho lần gọi đó."
      },
      {
        "question": "Self-invocation gây vấn đề gì với cơ chế proxy và bọc bean?",
        "options": [
          "Làm ứng dụng không biên dịch được",
          "Tạo vòng lặp vô hạn",
          "Làm mất bean khỏi context",
          "Lời gọi nội bộ trong cùng bean không đi qua lớp bọc hay proxy bên ngoài"
        ],
        "answerIndex": 3,
        "explanation": "Proxy và decorator chỉ chặn lời gọi từ bên ngoài vào bean. Gọi nội bộ bằng tham chiếu trực tiếp sẽ bỏ qua lớp bọc."
      },
      {
        "question": "Khi nào qualifier tường minh tốt hơn dựa vào Primary?",
        "options": [
          "Khi chỉ có một bean duy nhất",
          "Khi các nơi gọi khác nhau cần các biến thể khác nhau một cách có chủ đích",
          "Khi muốn ẩn thiết kế khỏi người review",
          "Không bao giờ"
        ],
        "answerIndex": 1,
        "explanation": "Qualifier ghi rõ ý định ngay tại điểm tiêm, giúp review và bảo trì dễ hơn nhiều so với mặc định ẩn."
      },
      {
        "question": "Rủi ro lớn nhất của decorator caching tự chế là gì?",
        "options": [
          "Không dùng được interface",
          "Không thể ghi log",
          "Bắt buộc dùng nhiều datasource",
          "Thiếu cơ chế vô hiệu hóa khiến dữ liệu cũ sống lâu sau khi nghiệp vụ đã thay đổi dữ liệu"
        ],
        "answerIndex": 3,
        "explanation": "Cache tự chế phải tự lo eviction và thời gian sống. Thiếu eviction sau giao dịch trừ điểm là lỗi nghiệp vụ nghiêm trọng."
      },
      {
        "question": "Vì sao không nên sửa trực tiếp service lõi để thêm logging cho mọi method?",
        "options": [
          "Vì logging bị cấm trong service",
          "Vì service không được phép có Logger",
          "Vì trộn mối quan tâm cắt ngang vào nghiệp vụ làm service khó test và khó thay đổi chính sách log",
          "Vì log chỉ chạy trong controller"
        ],
        "answerIndex": 2,
        "explanation": "Tách logging thành decorator giữ service lõi tập trung vào nghiệp vụ và cho phép thay đổi chính sách log độc lập."
      },
      {
        "question": "Hai decorator bọc nhau tạo thành cấu trúc gì?",
        "options": [
          "Một chuỗi ủy quyền mà mỗi lớp thêm một hành vi trước hoặc sau lời gọi vào lớp trong",
          "Một class duy nhất hợp nhất",
          "Hai bean độc lập không liên quan",
          "Một vòng lặp phụ thuộc bị cấm"
        ],
        "answerIndex": 0,
        "explanation": "Mỗi decorator ủy quyền cho lớp trong sau khi thêm hành vi của mình, tạo chuỗi hành vi có thứ tự rõ ràng."
      },
      {
        "question": "Dấu hiệu lạm dụng Primary trong codebase là gì?",
        "options": [
          "Chỉ một bean được đánh dấu trong toàn hệ thống",
          "Dùng qualifier ở controller",
          "Nhiều module tự đánh dấu mặc định cho type dùng chung, gây mơ hồ khi hợp nhất",
          "Có test cho việc chọn bean"
        ],
        "answerIndex": 2,
        "explanation": "Primary là quyết định ở cấp ứng dụng, không phải cấp module. Nhiều mặc định cạnh tranh làm hành vi chọn bean khó dự đoán."
      },
      {
        "question": "Cách kiểm chứng chuỗi decorator hoạt động đúng thứ tự là gì?",
        "options": [
          "Đọc tên class theo thứ tự alphabet",
          "Viết test tích hợp đếm số lần delegate được gọi và kiểm tra log, cache qua các lần gọi liên tiếp",
          "Chỉ kiểm tra ứng dụng khởi động được",
          "Không thể kiểm chứng"
        ],
        "answerIndex": 1,
        "explanation": "Test hành vi qua nhiều lần gọi liên tiếp mới lộ được thứ tự bọc, eviction và self-invocation."
      }
    ]
  },
  "m07-enterprise-patterns-repository-specification-cqrs": {
    "checklist": [
      "Thiết kế được Repository đúng biên giới, không lộ chi tiết truy vấn ra tầng trên.",
      "Cài đặt và tổ hợp được Specification cho truy vấn động có nhiều tiêu chí.",
      "Giải thích được CQRS nhẹ khác CQRS đầy đủ ở những điểm nào.",
      "Nêu được cơ chế đồng bộ mô hình đọc và cách truyền đạt độ trễ cho người dùng báo cáo.",
      "Chỉ định đúng transaction manager cho datasource report trong hệ nhiều datasource không JTA.",
      "Đánh giá được khi nào Specification và CQRS nhẹ trở thành over-engineering."
    ],
    "quiz": [
      {
        "question": "Specification giải quyết vấn đề gì của repository?",
        "options": [
          "Tự động tạo bảng database",
          "Đóng gói từng điều kiện lọc thành khối có tên, tổ hợp động tại runtime thay vì bùng nổ method theo tổ hợp",
          "Thay thế hoàn toàn transaction",
          "Mã hóa dữ liệu báo cáo"
        ],
        "answerIndex": 1,
        "explanation": "Mỗi điều kiện là một specification độc lập; service tổ hợp chúng theo nhu cầu thực tế của từng truy vấn."
      },
      {
        "question": "CQRS nhẹ tại Nova Loyalty tách những gì?",
        "options": [
          "Tách mọi service thành hai tiến trình riêng",
          "Tách frontend khỏi backend",
          "Tách mô hình đọc và datasource báo cáo khỏi mô hình ghi giao dịch, trong cùng hệ thống",
          "Tách team dev thành hai team"
        ],
        "answerIndex": 2,
        "explanation": "Bản nhẹ chỉ tách mô hình và nơi lưu trữ cho đường đọc, đủ để bảo vệ đường ghi mà không gánh chi phí vận hành của CQRS đầy đủ."
      },
      {
        "question": "Hệ quả tất yếu của mô hình đọc đồng bộ bất đồng bộ là gì?",
        "options": [
          "Dữ liệu đọc có độ trễ so với dữ liệu ghi và phải được truyền đạt rõ ràng",
          "Dữ liệu đọc luôn mới hơn dữ liệu ghi",
          "Không thể truy vấn báo cáo theo thời gian thực trong mọi trường hợp",
          "Transaction ghi bị rollback thường xuyên"
        ],
        "answerIndex": 0,
        "explanation": "Eventual consistency ở đường đọc là cái giá của việc tách tải; cần hiển thị độ tươi dữ liệu và giám sát pipeline đồng bộ."
      },
      {
        "question": "Vì sao báo cáo không nên dùng chung pool với datasource core?",
        "options": [
          "Vì báo cáo không cần connection",
          "Vì JPA cấm dùng chung pool",
          "Vì báo cáo chỉ chạy ban đêm",
          "Vì truy vấn báo cáo nặng có thể chiếm hết connection và tài nguyên, làm chậm nghiệp vụ điểm"
        ],
        "answerIndex": 3,
        "explanation": "Tách pool và datasource giúp đặt giới hạn riêng, bảo vệ đường ghi tới hạn khỏi tải phân tích khó dự đoán."
      },
      {
        "question": "Trong hệ nhiều datasource không JTA, điều gì bắt buộc khi ghi transaction ở service báo cáo?",
        "options": [
          "Không cần chỉ định gì thêm",
          "Chỉ định đúng transaction manager của datasource report",
          "Bật phân tán hai pha cho mọi transaction",
          "Tắt transaction cho báo cáo"
        ],
        "answerIndex": 1,
        "explanation": "Không có JTA thì mỗi datasource có transaction manager riêng; chỉ định sai sẽ khiến transaction chạy trên datasource khác với dữ liệu đang thao tác."
      },
      {
        "question": "Specification tốt có đặc điểm nào?",
        "options": [
          "Chứa toàn bộ mọi điều kiện của mọi báo cáo trong một method",
          "Luôn trả về danh sách rỗng khi thiếu tham số mà không ai biết",
          "Phụ thuộc vào controller",
          "Nhỏ, có tên theo ngôn ngữ nghiệp vụ, test được độc lập và tổ hợp được"
        ],
        "answerIndex": 3,
        "explanation": "Tính lắp ghép chỉ có giá trị khi từng khối nhỏ, rõ nghĩa và kiểm chứng được riêng lẻ."
      },
      {
        "question": "Khi điều kiện lọc là null, specification trong bài xử lý thế nào và vì sao?",
        "options": [
          "Ném exception ngay",
          "Bỏ qua toàn bộ truy vấn",
          "Trả về điều kiện luôn đúng để tổ hợp không bị ảnh hưởng",
          "Tự thay bằng giá trị mặc định bất kỳ"
        ],
        "answerIndex": 2,
        "explanation": "Trả điều kiện trung tính giúp service tổ hợp thống nhất cho cả tiêu chí có và không được cung cấp."
      },
      {
        "question": "Repository nên lộ ra tầng trên những gì?",
        "options": [
          "Các thao tác theo ngôn ngữ miền nghiệp vụ, che giấu chi tiết lưu trữ bên trong",
          "Chi tiết câu truy vấn và connection",
          "Entity manager của JPA",
          "Tên bảng vật lý cho controller tự ghép"
        ],
        "answerIndex": 0,
        "explanation": "Repository là biên giới trừu tượng: tầng trên nói bằng nghiệp vụ, chi tiết truy vấn nằm sau biên giới đó."
      },
      {
        "question": "Dấu hiệu CQRS nhẹ đang bị lạm dụng là gì?",
        "options": [
          "Báo cáo có bộ lọc động",
          "Có datasource report riêng cho báo cáo nặng",
          "Hệ thống nhỏ, tải thấp nhưng vẫn dựng pipeline đồng bộ phức tạp và hai mô hình cho mọi entity",
          "Đội ngũ phàn nàn báo cáo làm chậm giao dịch"
        ],
        "answerIndex": 2,
        "explanation": "CQRS chỉ có lãi khi lợi ích tách tải và tối ưu đọc vượt chi phí đồng bộ, giám sát và độ trễ mà nó mang lại."
      },
      {
        "question": "Điểm giám sát quan trọng nhất của pipeline đồng bộ mô hình đọc là gì?",
        "options": [
          "Số lượng developer online",
          "Độ trễ đồng bộ và lỗi đồng bộ, kèm thời điểm đồng bộ thành công gần nhất",
          "Màu sắc dashboard",
          "Số lượng specification"
        ],
        "answerIndex": 1,
        "explanation": "Người dùng báo cáo cần biết dữ liệu tươi tới đâu; đội vận hành cần cảnh báo khi pipeline chậm hoặc lỗi."
      }
    ]
  },
  "m07-observer-application-event": {
    "checklist": [
      "Phát hành được sự kiện domain từ service mà không phụ thuộc vào listener cụ thể.",
      "Chọn đúng pha transaction cho listener phụ thuộc dữ liệu đã commit.",
      "Giải thích được hành vi đồng bộ mặc định và hệ quả lỗi của listener.",
      "Phân biệt được sự kiện trong tiến trình với Outbox và Kafka về độ bền vững.",
      "Thiết kế được chính sách lỗi riêng cho từng listener theo mức quan trọng.",
      "Áp dụng được pattern cho audit event trên datasource audit của Nova Loyalty."
    ],
    "quiz": [
      {
        "question": "Listener theo pha sau commit đảm bảo điều gì?",
        "options": [
          "Sự kiện luôn được gửi sang Kafka",
          "Listener chỉ chạy khi transaction của publisher đã commit thành công",
          "Listener chạy trước mọi listener khác",
          "Transaction không bao giờ rollback"
        ],
        "answerIndex": 1,
        "explanation": "Pha sau commit gắn vòng đời listener với kết quả thật của transaction, tránh ghi audit cho giao dịch đã rollback."
      },
      {
        "question": "Mặc định, listener sự kiện ứng dụng chạy thế nào?",
        "options": [
          "Luôn bất đồng bộ trên thread riêng",
          "Qua Kafka topic nội bộ",
          "Đồng bộ trên cùng thread với publisher",
          "Chỉ chạy khi khởi động ứng dụng"
        ],
        "answerIndex": 2,
        "explanation": "Mặc định là đồng bộ: publisher chờ listener xong và exception của listener lan ngược lên luồng chính."
      },
      {
        "question": "Sự kiện ứng dụng khác Outbox qua Kafka ở điểm cốt lõi nào?",
        "options": [
          "Sự kiện ứng dụng sống trong bộ nhớ tiến trình và không bền vững qua crash, Outbox bền vững nhờ ghi cùng transaction vào database",
          "Sự kiện ứng dụng dùng Java, Kafka dùng JSON",
          "Kafka không hỗ trợ nhiều listener",
          "Không khác nhau"
        ],
        "answerIndex": 0,
        "explanation": "Độ bền vững là khác biệt quyết định: tích hợp liên service cần Outbox, việc phụ nội bộ mới nên dùng sự kiện trong tiến trình."
      },
      {
        "question": "Publisher nên biết những gì về listener?",
        "options": [
          "Tên class của mọi listener",
          "Thứ tự chạy của listener",
          "Chính sách retry của từng listener",
          "Không cần biết listener nào tồn tại, chỉ phát hành sự kiện mô tả điều đã xảy ra"
        ],
        "answerIndex": 3,
        "explanation": "Tách publisher khỏi listener là bản chất của Observer: thêm việc phụ mới không đòi hỏi sửa publisher."
      },
      {
        "question": "Sự kiện nên được thiết kế dạng nào?",
        "options": [
          "Object mutable để listener sửa dần",
          "Dữ liệu bất biến mô tả sự thật đã xảy ra, đủ thông tin để listener tự xử lý",
          "Chỉ chứa id và bắt listener truy vấn lại mọi thứ trong mọi trường hợp",
          "Chứa tham chiếu tới entity đang gắn với session"
        ],
        "answerIndex": 1,
        "explanation": "Sự kiện bất biến mang đủ dữ kiện giúp listener độc lập, tránh lỗi do trạng thái thay đổi sau khi phát hành."
      },
      {
        "question": "Khi nào listener nên chạy bất đồng bộ?",
        "options": [
          "Luôn luôn, cho mọi listener",
          "Khi listener ghi audit bắt buộc",
          "Khi cần thứ tự tuyệt đối giữa các listener",
          "Khi việc phụ chậm, không quan trọng tức thời và lỗi của nó không được chặn nghiệp vụ chính"
        ],
        "answerIndex": 3,
        "explanation": "Bất đồng bộ đổi lấy độ trễ và độ phức tạp giám sát; chỉ nên dùng cho việc phụ không nằm trên đường tới hạn."
      },
      {
        "question": "Rủi ro dễ gặp nhất khi hệ thống có nhiều listener cho cùng sự kiện là gì?",
        "options": [
          "Không thể có quá một listener",
          "Sự kiện bị nhân bản thành message Kafka",
          "Luồng thực thi trở nên ẩn, khó lần vết toàn bộ việc xảy ra sau một hành động",
          "Publisher tự động bị xóa"
        ],
        "answerIndex": 2,
        "explanation": "Tính ẩn là trade-off của decoupling: cần log, đặt tên sự kiện rõ và tài liệu hóa danh sách listener quan trọng."
      },
      {
        "question": "Nếu không có transaction đang hoạt động, listener theo pha sau commit mặc định sẽ thế nào?",
        "options": [
          "Không chạy, trừ khi cấu hình cho phép chạy khi không có transaction",
          "Chạy ngay lập tức",
          "Ném lỗi biên dịch",
          "Tự tạo transaction mới và chạy"
        ],
        "answerIndex": 0,
        "explanation": "Listener gắn pha transaction cần một transaction để bám vào; thiếu transaction thì sự kiện bị bỏ qua nếu không bật phương án dự phòng."
      },
      {
        "question": "Audit tại Nova Loyalty nên dùng cơ chế nào?",
        "options": [
          "Listener thường cho nhanh",
          "Ghi audit trước khi cộng điểm",
          "Listener pha sau commit, ghi vào datasource audit",
          "Chỉ ghi log file là đủ cho audit"
        ],
        "answerIndex": 2,
        "explanation": "Audit phải phản ánh giao dịch đã thành sự thật: pha sau commit và datasource audit riêng là lựa chọn đúng."
      },
      {
        "question": "Exception trong một listener đồng bộ không quan trọng nên được xử lý thế nào?",
        "options": [
          "Để lan lên và rollback nghiệp vụ chính",
          "Listener tự bắt, ghi log và metric cảnh báo, không để hỏng nghiệp vụ chính",
          "Tắt toàn bộ listener khác",
          "Khởi động lại ứng dụng"
        ],
        "answerIndex": 1,
        "explanation": "Chính sách lỗi phải tường minh theo mức quan trọng: việc phụ tự cách ly lỗi của mình và để lại tín hiệu giám sát."
      }
    ]
  },
  "m07-strategy-qua-bean-map": {
    "checklist": [
      "Định nghĩa được interface strategy và tách mỗi quy tắc tính điểm thành một bean riêng.",
      "Giải thích được vì sao key của map bean chính là tên bean và cách đặt tên tường minh.",
      "Viết được service tra cứu strategy theo key và xử lý rõ ràng khi key không tồn tại.",
      "Viết được unit test độc lập cho từng strategy mà không cần khởi động Spring context.",
      "Nêu được ít nhất hai trade-off của Strategy so với chuỗi điều kiện đơn giản.",
      "Áp dụng được pattern cho bài toán tính điểm theo 3 nguồn ví của Nova Loyalty."
    ],
    "quiz": [
      {
        "question": "Key của map khi tiêm `Map<String, PointsCalculator>` vào constructor là gì?",
        "options": [
          "Tên class viết hoa toàn bộ",
          "Tên bean của từng implementation",
          "Thứ tự khai báo trong file cấu hình",
          "Tên package của implementation"
        ],
        "answerIndex": 1,
        "explanation": "Spring gom mọi bean cùng type vào map, key chính là tên bean. Vì vậy đặt tên bean tường minh giúp key khớp với mã loại giao dịch."
      },
      {
        "question": "Lợi ích chính của Strategy qua bean map so với chuỗi if/else là gì?",
        "options": [
          "Chạy nhanh hơn hẳn trong mọi trường hợp",
          "Không cần viết test nữa",
          "Thêm loại mới bằng cách thêm class mới, không sửa logic chọn và tính của loại cũ",
          "Tự động lưu database"
        ],
        "answerIndex": 2,
        "explanation": "Mỗi quy tắc nằm trong class riêng, service chỉ tra cứu theo key. Thêm loại giao dịch là thêm bean mới, giảm rủi ro regression."
      },
      {
        "question": "Khi key giao dịch không có trong map, hành vi đúng nhất là gì?",
        "options": [
          "Ném exception nghiệp vụ rõ ràng kèm thông tin loại giao dịch",
          "Trả về 0 điểm và tiếp tục",
          "Chọn strategy đầu tiên trong map",
          "Bỏ qua giao dịch và commit bình thường"
        ],
        "answerIndex": 0,
        "explanation": "Fallback im lặng làm mất điểm của khách mà không ai biết. Ném lỗi rõ ràng giúp phát hiện sớm cấu hình hoặc dữ liệu thiếu."
      },
      {
        "question": "Annotation nào đặt tên bean tường minh cho một strategy?",
        "options": [
          "Chỉ annotation trên interface",
          "Không có cách nào, phải dùng XML",
          "Annotation trên method main",
          "Annotation trên component kèm giá trị tên trong ngoặc"
        ],
        "answerIndex": 3,
        "explanation": "Đặt tên trong annotation của component giúp key của map ổn định, không phụ thuộc quy ước suy từ tên class."
      },
      {
        "question": "Strategy nên có đặc tính nào để dễ test nhất?",
        "options": [
          "Phụ thuộc vào nhiều service khác",
          "Thuần túy: nhận input, trả output, ít phụ thuộc bên ngoài",
          "Giữ state dùng chung giữa các request",
          "Tự mở transaction database riêng"
        ],
        "answerIndex": 1,
        "explanation": "Strategy thuần túy dễ viết unit test độc lập, không cần Spring context hay database."
      },
      {
        "question": "Khi nào KHÔNG nên dùng Strategy qua bean map?",
        "options": [
          "Khi có 5 loại giao dịch thay đổi độc lập",
          "Khi cần test từng quy tắc riêng",
          "Khi nhiều team cùng phát triển các loại khác nhau",
          "Khi chỉ có 2 nhánh ổn định, hiếm khi thay đổi"
        ],
        "answerIndex": 3,
        "explanation": "Với ít nhánh ổn định, pattern này tạo thêm class và độ gián tiếp không cần thiết. Đơn giản là một giá trị thiết kế."
      },
      {
        "question": "Muốn thêm loại giao dịch PARTNER mới, cần làm tối thiểu những gì?",
        "options": [
          "Sửa service, sửa mọi strategy cũ",
          "Đổi interface của mọi strategy",
          "Chỉ thêm một implementation mới với tên bean PARTNER",
          "Khởi động lại database"
        ],
        "answerIndex": 2,
        "explanation": "Nhờ cơ chế gom bean tự động, chỉ cần thêm implementation mới đúng tên bean, service tự tra cứu được."
      },
      {
        "question": "Vì sao nên sao chép map được tiêm vào thành bản sao bất biến trong constructor?",
        "options": [
          "Để tránh code khác sửa map sau khi service đã khởi tạo",
          "Để map tự sắp xếp theo key",
          "Để Spring tạo bean nhanh hơn",
          "Vì map gốc không dùng được sau constructor"
        ],
        "answerIndex": 0,
        "explanation": "Sao chép bất biến bảo vệ invariant của service: tập strategy cố định sau khởi tạo, tránh sửa đổi ngoài ý muốn."
      },
      {
        "question": "Test nào kiểm chứng tốt nhất việc chọn đúng strategy?",
        "options": [
          "Test khởi động toàn bộ ứng dụng",
          "Test chỉ kiểm tra bean tồn tại",
          "Test service với map chứa các strategy giả lập khác nhau theo key",
          "Không cần test lớp chọn strategy"
        ],
        "answerIndex": 2,
        "explanation": "Dùng stub strategy cho từng key giúp kiểm chứng logic tra cứu và nhánh lỗi mà không phụ thuộc công thức thật."
      },
      {
        "question": "Trade-off dễ thấy nhất của pattern này là gì?",
        "options": [
          "Mất khả năng dùng Spring DI",
          "Luồng thực thi gián tiếp hơn, phải tra cứu map mới biết code nào chạy",
          "Không thể viết bằng Java 21",
          "Bắt buộc dùng database riêng cho mỗi strategy"
        ],
        "answerIndex": 1,
        "explanation": "Độ gián tiếp là giá phải trả cho khả năng mở rộng: người đọc phải biết key mới lần ra được implementation thực thi."
      }
    ]
  },
  "m07-template-method": {
    "checklist": [
      "Phân biệt được bước khung cố định và bước biến thiên trong một quy trình import file.",
      "Cài đặt được abstract class với method khung `final` và hook method hợp lý.",
      "Viết được subclass mới mà không sửa class cha.",
      "Giải thích được khi nào nên chọn abstract method thay vì hook có mặc định.",
      "Nêu được trade-off giữa kế thừa của Template Method và composition của Strategy.",
      "Xử lý được lỗi từng dòng mà không làm hỏng toàn bộ file import."
    ],
    "quiz": [
      {
        "question": "Method khung trong Template Method nên được khai báo thế nào?",
        "options": [
          "Luôn là abstract",
          "Là `final` để subclass không phá vỡ trình tự chung",
          "Là static",
          "Không cần khai báo gì đặc biệt"
        ],
        "answerIndex": 1,
        "explanation": "Khai báo final bảo vệ khung thuật toán: subclass chỉ được tùy biến qua các bước con đã mở sẵn."
      },
      {
        "question": "Hook method khác abstract method ở điểm nào?",
        "options": [
          "Hook không được ghi đè",
          "Hook chỉ dùng cho interface",
          "Hook có cài đặt mặc định, subclass ghi đè khi cần; abstract method bắt buộc phải cài đặt",
          "Không khác nhau"
        ],
        "answerIndex": 2,
        "explanation": "Hook cho hành vi tùy chọn với mặc định hợp lý, abstract method ép subclass cài đặt bước bắt buộc."
      },
      {
        "question": "Trong bài toán import file đối tác, bước nào hợp làm bước riêng của subclass nhất?",
        "options": [
          "Parse từng dòng theo định dạng riêng của đối tác",
          "Ghi log tổng kết",
          "Đóng file sau khi đọc",
          "Đếm tổng số dòng lỗi"
        ],
        "answerIndex": 0,
        "explanation": "Parse là phần khác nhau thật sự giữa các đối tác; các bước còn lại thuộc khung chung nên nằm ở class cha."
      },
      {
        "question": "Nhược điểm lớn nhất của Template Method là gì?",
        "options": [
          "Không dùng được với Java 21",
          "Không thể viết unit test",
          "Bắt buộc phải có database",
          "Subclass gắn chặt vào class cha qua kế thừa, khó kết hợp nhiều biến thể"
        ],
        "answerIndex": 3,
        "explanation": "Kế thừa tạo liên kết cứng lúc biên dịch. Khi biến thể tổ hợp nhiều, composition bằng Strategy linh hoạt hơn."
      },
      {
        "question": "Vì sao quy trình import nên đọc file theo từng dòng thay vì nạp toàn bộ vào bộ nhớ?",
        "options": [
          "Vì file đối tác luôn nhỏ",
          "Để mức dùng bộ nhớ ổn định với file lớn và xử lý lỗi theo từng dòng",
          "Vì Java không đọc được file lớn",
          "Để dùng được nhiều thread hơn"
        ],
        "answerIndex": 1,
        "explanation": "Đọc streaming giúp bộ nhớ không phình theo kích thước file và cho phép ghi nhận lỗi từng dòng độc lập."
      },
      {
        "question": "Nếu một dòng trong file bị sai định dạng, hành vi hợp lý nhất là gì?",
        "options": [
          "Dừng toàn bộ import ngay lập tức trong mọi trường hợp",
          "Cộng 0 điểm và không ghi log",
          "Tự sửa dữ liệu rồi cộng điểm",
          "Ghi nhận lỗi của dòng đó và tiếp tục các dòng còn lại, theo chính sách đã thống nhất"
        ],
        "answerIndex": 3,
        "explanation": "Với file điểm đối tác, chính sách phổ biến là bỏ qua dòng lỗi, ghi vào tổng kết để đối soát sau, trừ khi lỗi thuộc header hoặc cấu trúc toàn cục."
      },
      {
        "question": "Template Method phù hợp nhất khi nào?",
        "options": [
          "Khi các biến thể không có bước chung nào",
          "Khi cần thay đổi hành vi tại runtime theo request",
          "Khi khung thuật toán ổn định và chỉ vài bước khác nhau giữa các biến thể",
          "Khi không muốn dùng class trừu tượng"
        ],
        "answerIndex": 2,
        "explanation": "Giá trị của pattern nằm ở khung chung ổn định; biến thiên được cô lập vào ít bước rõ ràng."
      },
      {
        "question": "Đặt method bước con ở mức truy cập nào là hợp lý?",
        "options": [
          "protected để chỉ subclass và cùng package dùng",
          "public để mọi nơi gọi tự do",
          "private để subclass không thấy",
          "Mặc định không khai báo"
        ],
        "answerIndex": 0,
        "explanation": "Protected giữ các bước con là chi tiết cài đặt của họ class, không phơi thành API công cộng."
      },
      {
        "question": "Cách kiểm chứng subclass mới không phá khung chung tốt nhất là gì?",
        "options": [
          "Chỉ test subclass mới",
          "Không cần test vì kế thừa đã đảm bảo",
          "Viết bộ test hợp đồng chạy cùng kịch bản cho mọi subclass",
          "Chỉ đọc code bằng mắt"
        ],
        "answerIndex": 2,
        "explanation": "Contract test chạy cùng kỳ vọng khung (header, lỗi dòng, tổng kết) cho mọi subclass giúp phát hiện lệch khung sớm."
      },
      {
        "question": "Khi số biến thể tăng và các bước bắt đầu tổ hợp chéo nhau, hướng refactor nên cân nhắc là gì?",
        "options": [
          "Thêm nhiều tầng kế thừa hơn",
          "Chuyển các bước biến thiên thành Strategy và dùng composition",
          "Gộp mọi subclass thành một class lớn",
          "Bỏ validate để đơn giản hóa"
        ],
        "answerIndex": 1,
        "explanation": "Composition tách các chiều biến thiên độc lập, tránh bùng nổ subclass theo tổ hợp."
      }
    ]
  },
  "m08-caching-caffeine-redis-cacheable": {
    "checklist": [
      "Phân biệt được cache trong tiến trình và cache phân tán theo độ trễ, nhất quán và chi phí vận hành.",
      "Cấu hình được Caffeine và Redis làm hai tầng cache với thời gian sống riêng.",
      "Dùng đúng bộ ba annotation đọc, ghi và xóa cache theo luồng nghiệp vụ.",
      "Tránh và chẩn đoán được lỗi self-invocation với annotation qua proxy.",
      "Thiết kế được khóa cache đầy đủ tham số cho dữ liệu nhiều nguồn ví.",
      "Gắn được vô hiệu hóa cache vào luồng ghi thay đổi điểm của Nova Loyalty."
    ],
    "quiz": [
      {
        "question": "Cache trong tiến trình như Caffeine thắng Redis ở điểm nào?",
        "options": [
          "Luôn nhất quán giữa các instance",
          "Độ trễ thấp nhất vì không cần một vòng mạng",
          "Không cần vô hiệu hóa bao giờ",
          "Dung lượng không giới hạn"
        ],
        "answerIndex": 1,
        "explanation": "Không qua mạng là lợi thế lớn nhất của tầng nội bộ. Cái giá là mỗi instance giữ bản sao riêng và có thể lệch nhau tạm thời."
      },
      {
        "question": "Self-invocation làm annotation cache thất bại vì lý do gì?",
        "options": [
          "Vì Caffeine không hỗ trợ annotation",
          "Vì khóa cache quá dài",
          "Vì lời gọi nội bộ không đi qua proxy của Spring nơi logic cache được áp dụng",
          "Vì Redis chưa khởi động"
        ],
        "answerIndex": 2,
        "explanation": "Cache abstraction hoạt động qua proxy quanh bean. Gọi nội bộ bằng tham chiếu trực tiếp bỏ qua hoàn toàn lớp proxy đó."
      },
      {
        "question": "Khóa cache cho dữ liệu điểm của Nova bắt buộc chứa gì ngoài mã thành viên?",
        "options": [
          "Nguồn ví, vì cùng một thành viên có 3 nguồn ví với dữ liệu khác nhau",
          "Tên developer",
          "Thời gian hiện tại",
          "Tên instance đang xử lý"
        ],
        "answerIndex": 0,
        "explanation": "Khóa thiếu tham số phân biệt kết quả sẽ trộn dữ liệu giữa các ví — lỗi nghiệp vụ nghiêm trọng dù cache chạy rất nhanh."
      },
      {
        "question": "Thời gian sống của cache nên được quyết định dựa trên cơ sở nào?",
        "options": [
          "Càng dài càng tốt để tiết kiệm database",
          "Mặc định của thư viện là đủ cho mọi trường hợp",
          "Kích thước file cấu hình",
          "Cửa sổ dữ liệu cũ tối đa mà nghiệp vụ chấp nhận được cho loại dữ liệu đó"
        ],
        "answerIndex": 3,
        "explanation": "TTL là hợp đồng nghiệp vụ về độ tươi. Dữ liệu số dư sau giao dịch cần kỷ luật vô hiệu hóa chặt hơn dữ liệu tham chiếu ít thay đổi."
      },
      {
        "question": "Luồng ghi thay đổi điểm phải làm gì với cache liên quan?",
        "options": [
          "Không cần làm gì, chờ hết thời gian sống",
          "Vô hiệu hóa hoặc cập nhật mục cache tương ứng như một phần của thiết kế luồng ghi",
          "Xóa toàn bộ mọi cache của hệ thống",
          "Tắt cache trong giờ cao điểm"
        ],
        "answerIndex": 1,
        "explanation": "Chờ TTL làm cửa sổ sai dữ liệu kéo dài tùy tiện. Luồng ghi là nơi biết chính xác dữ liệu nào vừa thay đổi."
      },
      {
        "question": "Hiện tượng dồn dập xuống database khi một khóa nóng hết hạn gọi là gì và xử lý thế nào?",
        "options": [
          "Cache warming, xử lý bằng cách tăng TTL vô hạn",
          "Lỗi self-invocation",
          "Hiện tượng bình thường không cần xử lý",
          "Nhiều request cùng nạp lại một khóa, cần đồng bộ việc nạp hoặc gia hạn sớm có kiểm soát"
        ],
        "answerIndex": 3,
        "explanation": "Khi khóa nóng trượt đồng loạt, database nhận cú sốc tải. Đồng bộ nạp theo khóa giúp chỉ một request đi nạp thật."
      },
      {
        "question": "Vì sao không nên cache giá trị null một cách mặc định?",
        "options": [
          "Null không lưu được vào Redis",
          "Null làm tăng độ trễ",
          "Cache null che giấu lỗi và biến truy vấn không tồn tại thành kết quả hợp lệ trong suốt thời gian sống",
          "Spring cấm cache null"
        ],
        "answerIndex": 2,
        "explanation": "Cần quyết định tường minh: cache vắng mặt có thể chống tấn công dò quét trong vài trường hợp, nhưng mặc định nuốt null sẽ che lỗi dữ liệu."
      },
      {
        "question": "Tỉ lệ trúng cache cao có đảm bảo cache đang đúng không?",
        "options": [
          "Không: khóa sai hoặc vô hiệu hóa thiếu vẫn cho dữ liệu sai với tỉ lệ trúng rất cao",
          "Có, tỉ lệ cao là đủ",
          "Chỉ cần thêm tỉ lệ trúng của Redis",
          "Đúng nếu độ trễ giảm"
        ],
        "answerIndex": 0,
        "explanation": "Hiệu quả và đúng đắn là hai trục khác nhau. Cache nhanh mà sai dữ liệu là lỗi nghiệp vụ, phải kiểm chứng bằng kịch bản ghi rồi đọc."
      },
      {
        "question": "Dữ liệu nào hợp với tầng Redis dùng chung hơn tầng Caffeine?",
        "options": [
          "Dữ liệu chỉ một instance dùng và chịu lệch dài",
          "Dữ liệu bí mật không được rời tiến trình trong mọi trường hợp",
          "Dữ liệu cần nhất quán tương đối giữa các instance và vô hiệu hóa tập trung",
          "Dữ liệu tính toán lại cực rẻ"
        ],
        "answerIndex": 2,
        "explanation": "Redis cho một bản dùng chung và điểm vô hiệu hóa tập trung, đổi lại là độ trễ mạng cho mỗi lần truy cập."
      },
      {
        "question": "Cách kiểm chứng cache hoạt động thật sau khi thêm annotation là gì?",
        "options": [
          "Đọc code và tin tưởng proxy",
          "Đo metric cache và số lần chạm database qua các lần gọi lặp lại, kèm kịch bản ghi rồi đọc",
          "Chỉ kiểm tra ứng dụng khởi động thành công",
          "Tăng thời gian sống rồi quan sát cảm tính"
        ],
        "answerIndex": 1,
        "explanation": "Annotation lỗi thường im lặng. Chỉ số đo hành vi qua nhiều lần gọi mới chứng minh cache thật sự có hiệu lực."
      }
    ]
  },
  "m08-connection-pool-sizing": {
    "checklist": [
      "Giải thích được vì sao pool quá lớn làm database và toàn hệ thống chậm hơn.",
      "Áp dụng được công thức heuristic làm điểm khởi đầu và nêu rõ giới hạn của nó.",
      "Lập được ngân sách timeout nối tiếp nhất quán qua gateway và các tầng trong.",
      "Cấu hình được pool riêng cho từng datasource theo đặc tính tải.",
      "Đọc được metric pool để phân biệt thiếu pool, truy vấn chậm và rò rỉ connection.",
      "Nêu được quy trình đo trước và sau khi thay đổi kích thước pool."
    ],
    "quiz": [
      {
        "question": "Công thức heuristic định cỡ pool nên được dùng thế nào?",
        "options": [
          "Là đáp án cuối cho mọi hệ thống",
          "Là điểm khởi đầu hợp lý, sau đó phải đo và chỉnh theo tải thật",
          "Chỉ áp dụng cho database nhỏ",
          "Thay thế hoàn toàn việc giám sát pool"
        ],
        "answerIndex": 1,
        "explanation": "Công thức từ tài liệu HikariCP giúp tránh hai cực đoan quá nhỏ hoặc quá lớn, nhưng đáp án thật nằm ở số đo của hệ thống cụ thể."
      },
      {
        "question": "Khi thread chờ connection tăng nhưng database đã bão hòa CPU, tăng pool sẽ ra sao?",
        "options": [
          "Chữa dứt điểm vấn đề",
          "Giảm CPU của database",
          "Chuyển hàng chờ sang database và thường làm độ trễ tổng thể tệ hơn",
          "Tự động làm truy vấn nhanh hơn"
        ],
        "answerIndex": 2,
        "explanation": "Connection nhiều hơn không tạo thêm năng lực xử lý. Gốc rễ thường là truy vấn chậm hoặc transaction giữ connection quá lâu."
      },
      {
        "question": "Nguyên tắc lập ngân sách timeout nối tiếp là gì?",
        "options": [
          "Tổng thời gian của các tầng trong cộng phần đệm phải nhỏ hơn timeout của tầng ngoài",
          "Mỗi tầng đặt timeout tùy ý",
          "Tầng trong luôn đặt timeout dài hơn tầng ngoài",
          "Chỉ gateway cần timeout"
        ],
        "answerIndex": 0,
        "explanation": "Ngân sách nối tiếp ngăn công việc vô ích sau khi request đã bị hủy và giúp lỗi lộ ra ở tầng gây chậm thật sự."
      },
      {
        "question": "Vì sao 5 datasource của Nova cần cấu hình pool riêng?",
        "options": [
          "Vì Spring bắt buộc cấu hình khác nhau",
          "Để file cấu hình dài hơn",
          "Vì mỗi pool cần một database khác nhau về hãng",
          "Vì đặc tính tải của giao dịch, báo cáo, legacy, quà và audit khác nhau rõ rệt"
        ],
        "answerIndex": 3,
        "explanation": "Một khuôn mẫu cho mọi tải sẽ làm đói nơi tới hạn hoặc dồn dập nơi mong manh. Cấu hình riêng kèm tên pool rõ ràng giúp vận hành đúng."
      },
      {
        "question": "Metric nào cho thấy pool đang trở thành nút cổ chai?",
        "options": [
          "Số lượng bean trong context",
          "Số thread đang chờ lấy connection tăng kèm thời gian chờ có phân vị cao",
          "Số dòng code của repository",
          "Kích thước file log"
        ],
        "answerIndex": 1,
        "explanation": "Thread chờ và thời gian chờ là tín hiệu trực tiếp của cạnh tranh connection, cần đọc cùng số connection đang hoạt động."
      },
      {
        "question": "Thread chờ tăng nhưng connection hoạt động chưa chạm trần gợi ý điều gì?",
        "options": [
          "Chắc chắn pool quá nhỏ",
          "Database đã tắt",
          "Cần tăng timeout của gateway",
          "Có thể có rò rỉ connection hoặc transaction giữ connection bất thường ở một đường code khác"
        ],
        "answerIndex": 3,
        "explanation": "Mẫu hình không nhất quán giữa các metric là manh mối chẩn đoán: phải lần theo nơi giữ connection lâu bất thường."
      },
      {
        "question": "Retry ảnh hưởng thế nào tới ngân sách timeout?",
        "options": [
          "Không ảnh hưởng",
          "Retry luôn làm hệ thống nhanh hơn",
          "Mỗi lần retry tiêu thêm ngân sách, retry không giới hạn sẽ nhân thời gian chờ trong sự cố",
          "Retry tự động rút ngắn timeout tầng trong"
        ],
        "answerIndex": 2,
        "explanation": "Retry phải có số lần, backoff và ngân sách riêng nằm trong tổng timeout của request, đặc biệt khi lỗi do quá tải."
      },
      {
        "question": "Vai trò của thời gian sống tối đa của connection trong pool là gì?",
        "options": [
          "Tái tạo connection định kỳ để tránh connection cũ kỹ, lỗi thời do thay đổi phía database hoặc mạng",
          "Trang trí cấu hình",
          "Tăng số connection tối đa",
          "Thay thế connection timeout"
        ],
        "answerIndex": 0,
        "explanation": "Connection sống quá lâu dễ gặp giới hạn phía database, firewall và thay đổi cấu hình mạng; tái tạo định kỳ giữ pool khỏe mạnh."
      },
      {
        "question": "Datasource legacy qua hệ Java 11 cũ cần chính sách pool thế nào?",
        "options": [
          "Pool thật lớn để dồn dập cho nhanh",
          "Không cần pool",
          "Pool nhỏ, timeout được tính rộng rãi hơn nhưng có giới hạn rõ, tránh dồn dập hệ cũ mong manh",
          "Dùng chung pool với core cho tiện"
        ],
        "answerIndex": 2,
        "explanation": "Hệ cũ khó đoán và mong manh: bảo vệ nó bằng đồng thời thấp và ngân sách timeout tường minh là ưu tiên."
      },
      {
        "question": "Bằng chứng nào cho thấy việc tăng pool là đúng quyết định?",
        "options": [
          "Cảm giác hệ thống nhanh hơn",
          "Độ trễ đầu-cuối và thời gian chờ connection cùng cải thiện trên cùng kịch bản tải, trong khi database chưa bão hòa",
          "Số connection tối đa trong cấu hình lớn hơn",
          "Không còn ai phàn nàn trong một giờ đầu"
        ],
        "answerIndex": 1,
        "explanation": "Quyết định pool phải được hậu thuẫn bằng số đo đầu-cuối, không phải bằng một metric đơn lẻ hay cảm tính."
      }
    ]
  },
  "m08-heap-sizing-trong-container": {
    "checklist": [
      "Tính được heap tối đa từ giới hạn container theo tỉ lệ phần trăm RAM.",
      "Giải thích được cơ chế ergonomics giúp JVM nhận biết giới hạn container.",
      "Phân biệt được ba loại hết bộ nhớ qua log, mã thoát và sự kiện nền tảng.",
      "Lập được ngân sách bộ nhớ đầy đủ gồm heap và mọi vùng ngoài heap.",
      "Viết được cấu hình triển khai nhất quán giữa image và giới hạn tài nguyên.",
      "Nêu được quy trình kiểm chứng cấu hình bộ nhớ bằng kịch bản tải thật."
    ],
    "quiz": [
      {
        "question": "Tham số tỉ lệ RAM cho heap hoạt động dựa trên cơ sở nào?",
        "options": [
          "Dung lượng RAM vật lý của máy host",
          "Giới hạn bộ nhớ của container mà JVM nhận biết được",
          "Kích thước file jar",
          "Số lượng pod đang chạy"
        ],
        "answerIndex": 1,
        "explanation": "JVM container-aware suy heap từ giới hạn cgroup của container. Đó là lý do cùng image cư xử nhất quán giữa các môi trường có giới hạn khác nhau."
      },
      {
        "question": "Dấu hiệu đặc trưng của pod bị nền tảng kill vì tổng bộ nhớ là gì?",
        "options": [
          "Log Java ghi rõ lỗi hết heap kèm stack trace",
          "Ứng dụng trả lỗi 500 cho mọi request",
          "Tiến trình biến mất không có log Java tương ứng và sự kiện nền tảng ghi nhận bị kill vì vượt giới hạn",
          "GC pause tăng dần trong nhiều giờ"
        ],
        "answerIndex": 2,
        "explanation": "Khi hệ thống kill tiến trình từ bên ngoài, JVM không có cơ hội ghi log. Phải đối chiếu sự kiện nền tảng và mã thoát."
      },
      {
        "question": "Vì sao không nên đặt heap bằng 100 phần trăm giới hạn container?",
        "options": [
          "Vì metaspace, direct memory, stack và native memory cũng cần bộ nhớ ngoài heap",
          "Vì JVM cấm điều đó",
          "Vì heap lớn làm chậm biên dịch",
          "Vì container không cho phép"
        ],
        "answerIndex": 0,
        "explanation": "Tổng bộ nhớ tiến trình luôn lớn hơn heap. Đặt heap bằng toàn bộ giới hạn đảm bảo tiến trình bị kill khi các vùng khác tăng lên."
      },
      {
        "question": "Lợi ích của việc để image mang chính sách tỉ lệ thay vì heap tuyệt đối là gì?",
        "options": [
          "Image nhẹ hơn",
          "Ứng dụng khởi động không cần JVM",
          "Không cần đặt giới hạn container nữa",
          "Cùng image thích nghi được với các giới hạn container khác nhau giữa các môi trường"
        ],
        "answerIndex": 3,
        "explanation": "Chính sách tỉ lệ tách quyết định tương đối khỏi con số tuyệt đối của từng môi trường, giảm lỗi cấu hình khi triển khai lại."
      },
      {
        "question": "Service dùng nhiều buffer mạng cần chú ý vùng bộ nhớ nào ngoài heap nhất?",
        "options": [
          "Metaspace",
          "Direct memory cho buffer ngoài heap",
          "Bộ nhớ của trình duyệt",
          "Swap của host"
        ],
        "answerIndex": 1,
        "explanation": "Buffer NIO và framework mạng thường cấp phát direct memory. Ngân sách cho vùng này phải được tính và giám sát riêng."
      },
      {
        "question": "Đặt request bộ nhớ thấp hơn nhiều so với limit gây hệ quả gì cần cân nhắc?",
        "options": [
          "Không có hệ quả nào",
          "JVM tự tắt ergonomics",
          "Heap tự động bằng limit",
          "Lập lịch và đảm bảo tài nguyên kém dự đoán hơn, pod dễ bị ảnh hưởng khi node chịu áp lực bộ nhớ"
        ],
        "answerIndex": 3,
        "explanation": "Request là cơ sở lập lịch và bảo đảm; chênh lệch lớn với thực dùng làm hành vi khi node quá tải khó lường."
      },
      {
        "question": "Khi tăng số thread nền tảng truyền thống, vùng nào tăng theo?",
        "options": [
          "Chỉ heap",
          "Chỉ metaspace",
          "Tổng stack của các thread, nằm ngoài heap",
          "Không vùng nào tăng"
        ],
        "answerIndex": 2,
        "explanation": "Mỗi platform thread giữ stack riêng ở native memory. Đây là một lý do virtual thread hấp dẫn cho workload chờ I/O."
      },
      {
        "question": "Cách kiểm chứng cấu hình heap trong container đáng tin nhất là gì?",
        "options": [
          "Chạy kịch bản tải đại diện trong container có đúng giới hạn production và quan sát tổng bộ nhớ tiến trình cùng GC log",
          "Đọc cấu hình và tin tưởng",
          "Hỏi ý kiến trên diễn đàn",
          "Đặt heap thật lớn rồi chờ sự cố"
        ],
        "answerIndex": 0,
        "explanation": "Chỉ tải đại diện trong đúng giới hạn mới lộ được tổng nhu cầu thật của mọi vùng bộ nhớ."
      },
      {
        "question": "Lỗi hết bộ nhớ heap trong log Java khác bị kill ở điểm nào?",
        "options": [
          "Không khác nhau",
          "Lỗi heap chỉ xảy ra ban đêm",
          "Lỗi heap do JVM chủ động ném khi heap đầy, tiến trình có cơ hội ghi log và xử lý; bị kill là hệ thống kết thúc tiến trình từ bên ngoài",
          "Bị kill luôn kèm stack trace Java đầy đủ"
        ],
        "answerIndex": 2,
        "explanation": "Phân biệt hai tình huống quyết định hướng sửa hoàn toàn khác nhau: tối ưu object sống hay lập lại ngân sách tổng."
      },
      {
        "question": "Ngân sách bộ nhớ tốt cần liệt kê những thành phần nào?",
        "options": [
          "Chỉ heap tối đa",
          "Heap, metaspace, direct memory, stack theo thread, bộ nhớ native của JVM và phần đệm an toàn",
          "Chỉ heap và CPU",
          "Dung lượng đĩa của container"
        ],
        "answerIndex": 1,
        "explanation": "Mọi vùng đều rút từ cùng một giới hạn container. Ngân sách thiếu thành phần nào thì thành phần đó trở thành nguyên nhân sự cố."
      }
    ]
  },
  "m08-jvm-memory-gc-g1-zgc": {
    "checklist": [
      "Vẽ và giải thích được đầy đủ các vùng bộ nhớ của tiến trình Java trong container.",
      "So sánh được G1 và ZGC theo pause, throughput, chi phí nền và quy mô heap.",
      "Bật và đọc được GC log, nhận diện được pause dài và dấu hiệu thiếu heap.",
      "Nêu được vì sao tham số pause mục tiêu của G1 là gợi ý chứ không phải cam kết.",
      "Trình bày được quy trình tự đo trước và sau khi đổi GC trên workload thật.",
      "Chọn và bảo vệ được GC cho từng loại service của Nova Loyalty."
    ],
    "quiz": [
      {
        "question": "Vùng bộ nhớ nào chứa metadata của class trong JVM hiện đại?",
        "options": [
          "Heap vùng trẻ",
          "Metaspace nằm ngoài heap",
          "Stack của main thread",
          "Direct buffer"
        ],
        "answerIndex": 1,
        "explanation": "Metaspace nằm ở native memory, ngoài heap. Quên vùng này là nguyên nhân phổ biến khi tính toán bộ nhớ container."
      },
      {
        "question": "Triết lý cốt lõi của ZGC là gì?",
        "options": [
          "Dừng toàn bộ ứng dụng lâu để dọn thật sạch",
          "Không bao giờ thu gom vùng già",
          "Thực hiện phần lớn công việc thu gom đồng thời với ứng dụng, đổi CPU nền lấy pause cực ngắn",
          "Chỉ thu gom khi heap đầy hoàn toàn"
        ],
        "answerIndex": 2,
        "explanation": "ZGC đánh đổi tài nguyên nền để pause không tỉ lệ với kích thước heap, phù hợp heap lớn và yêu cầu pause cực thấp thật sự."
      },
      {
        "question": "Tham số pause mục tiêu của G1 nên được hiểu thế nào?",
        "options": [
          "Gợi ý để bộ thu gom cân đối công việc, kết quả thật phải đo bằng GC log trên tải thật",
          "Cam kết cứng cho mọi chu kỳ thu gom",
          "Thông số chỉ có ý nghĩa khi debug",
          "Giá trị càng nhỏ càng tốt trong mọi trường hợp"
        ],
        "answerIndex": 0,
        "explanation": "Đặt mục tiêu quá tham vọng làm tăng chi phí thu gom mà không đảm bảo đạt được. Mọi con số đều tùy môi trường và phải tự đo."
      },
      {
        "question": "Tiến trình bị container kill dù heap chưa đầy, vùng nào có thể là thủ phạm?",
        "options": [
          "Chỉ có thể là heap",
          "Không vùng nào, đó là lỗi hệ điều hành",
          "Bộ nhớ của tiến trình khác",
          "Direct memory, metaspace, stack nhiều thread hoặc native memory vượt phần còn lại của giới hạn"
        ],
        "answerIndex": 3,
        "explanation": "Giới hạn container áp lên tổng bộ nhớ tiến trình. Giám sát chỉ heap sẽ mù trước các vùng ngoài heap."
      },
      {
        "question": "G1 chia heap thành các region nhằm mục đích gì?",
        "options": [
          "Để dùng nhiều tiến trình hơn",
          "Để thu gom có chọn lọc các vùng nhiều rác trước, cân bằng pause và throughput",
          "Để thay thế hoàn toàn vùng già",
          "Để tắt thu gom vùng trẻ"
        ],
        "answerIndex": 1,
        "explanation": "Region cho phép G1 ưu tiên dọn nơi có giá trị thu hồi cao nhất trong ngân sách pause đã chọn."
      },
      {
        "question": "Khi nào ZGC thường KHÔNG phải lựa chọn tốt?",
        "options": [
          "Heap lớn và yêu cầu pause cực thấp",
          "Khi đã đo và thấy G1 không đạt yêu cầu pause",
          "Khi dùng Java 21",
          "Service nhỏ, máy ít CPU, yêu cầu độ trễ ở mức thông thường"
        ],
        "answerIndex": 3,
        "explanation": "Chi phí CPU nền của ZGC cần được bù bởi lợi ích pause. Service nhỏ với yêu cầu thông thường thường tốt hơn với G1."
      },
      {
        "question": "Tín hiệu nào trong GC log đáng báo động nhất?",
        "options": [
          "Một chu kỳ thu gom vùng trẻ đơn lẻ",
          "GC log có nhiều dòng",
          "Pause tăng dần theo thời gian kèm thu gom vùng già liên tục mà heap sau thu gom không hạ",
          "Heap dùng đúng dung lượng đã cấp"
        ],
        "answerIndex": 2,
        "explanation": "Mẫu hình đó gợi ý rò rỉ hoặc sức chứa không đủ: rác thật sự sống ngày càng nhiều chứ không phải dao động tải bình thường."
      },
      {
        "question": "Cách đúng để quyết định đổi GC cho production là gì?",
        "options": [
          "Đặt giả thuyết, đo trước và sau trên cùng kịch bản tải thật bằng GC log và JFR, có phương án quay lui",
          "Sao chép cấu hình của hệ thống nổi tiếng",
          "Đổi ngay trên production và chờ phản hồi người dùng",
          "Chỉ dựa vào benchmark tổng hợp trên internet"
        ],
        "answerIndex": 0,
        "explanation": "Hiệu năng GC phụ thuộc workload và phần cứng cụ thể. Không có con số vay mượn nào thay được đo đạc trên hệ thống của mình."
      },
      {
        "question": "Virtual thread của Java 21 thay đổi điều gì về bộ nhớ?",
        "options": [
          "Làm heap không cần thu gom nữa",
          "Xóa bỏ metaspace",
          "Giảm mạnh chi phí stack cho workload nhiều kết nối chờ I/O, nhưng không đổi bản chất heap và các vùng khác",
          "Tự động tăng giới hạn container"
        ],
        "answerIndex": 2,
        "explanation": "Virtual thread giải quyết bài toán thread chờ, không phải bài toán object sống trong heap hay direct buffer."
      },
      {
        "question": "Vì sao GC log nên ghi ra file riêng với rotation?",
        "options": [
          "Để log trông chuyên nghiệp hơn",
          "Để phân tích chuỗi thời gian quanh sự cố mà không làm phình log ứng dụng và không mất dữ liệu cũ quá nhanh",
          "Vì JVM bắt buộc",
          "Để tắt log ứng dụng"
        ],
        "answerIndex": 1,
        "explanation": "GC log là dữ liệu chẩn đoán theo thời gian: tách file và rotation hợp lý giúp điều tra sự cố độ trễ đuôi hiệu quả."
      }
    ]
  },
  "m08-profiling-jfr-async-profiler": {
    "checklist": [
      "Khởi tạo, kiểm tra và dừng được một bản ghi JFR trên tiến trình đang chạy.",
      "Đọc đúng flame graph theo tỉ lệ mẫu và độ sâu stack.",
      "Phân biệt được khi cần JFR với khi cần mẫu CPU hoặc mẫu phân bổ bộ nhớ.",
      "Trình bày được quy trình điều tra endpoint chậm dựa trên bằng chứng.",
      "Nêu được các lỗi đọc số liệu profiling kinh điển và cách tránh.",
      "Xác minh được hiệu quả của thay đổi hiệu năng bằng đo lại cùng kịch bản."
    ],
    "quiz": [
      {
        "question": "Trong flame graph, chiều ngang của một ô thể hiện điều gì?",
        "options": [
          "Thứ tự thời gian xuất hiện của method",
          "Tỉ lệ số mẫu mà stack chứa method đó chiếm trong tổng số mẫu",
          "Số dòng code của method",
          "Độ ưu tiên của thread"
        ],
        "answerIndex": 1,
        "explanation": "Ô càng rộng nghĩa là stack đó xuất hiện trong càng nhiều mẫu. Trục ngang không phải thời gian; muốn xem thời gian phải dùng dữ liệu sự kiện như JFR."
      },
      {
        "question": "JFR mạnh nhất ở khả năng nào?",
        "options": [
          "Thay thế hoàn toàn hệ thống log",
          "Tự động sửa điểm nóng",
          "Ghi nhiều loại sự kiện của JVM trên cùng trục thời gian với chi phí thấp để tương quan khi điều tra",
          "Đo độ trễ mạng giữa các service"
        ],
        "answerIndex": 2,
        "explanation": "Giá trị của JFR là bức tranh đa sự kiện có tương quan thời gian: GC, khóa, phân bổ và mẫu thực thi nằm chung một bản ghi."
      },
      {
        "question": "Bước đầu tiên đúng khi điều tra endpoint chậm theo cơn là gì?",
        "options": [
          "Khoanh vùng cửa sổ thời gian và phạm vi bị ảnh hưởng, liệt kê giả thuyết rồi mới thu thập bằng chứng",
          "Sửa ngay method bị nghi ngờ nhất",
          "Tăng tài nguyên cho mọi service",
          "Khởi động lại toàn bộ hệ thống"
        ],
        "answerIndex": 0,
        "explanation": "Điều tra hiệu quả bắt đầu bằng phạm vi và giả thuyết. Thu thập bừa bãi ngoài cửa sổ sự cố cho dữ liệu vô ích."
      },
      {
        "question": "Một method rất rộng trong flame graph có luôn là thủ phạm không?",
        "options": [
          "Luôn luôn",
          "Không bao giờ",
          "Chỉ đúng khi method đó nằm ở lá của stack",
          "Không: nó có thể là điểm tập hợp của nhiều đường gọi hợp lệ, cần đọc ngữ cảnh stack và bản chất công việc"
        ],
        "answerIndex": 3,
        "explanation": "Phải phân biệt nơi thời gian cháy với nơi gây ra việc cháy. Đọc chuỗi stack và đối chiếu nghiệp vụ mới kết luận được."
      },
      {
        "question": "Khi nghi ngờ áp lực phân bổ bộ nhớ gây thu gom rác thường xuyên, nên thu mẫu loại nào?",
        "options": [
          "Chỉ mẫu CPU",
          "Mẫu phân bổ kết hợp sự kiện thu gom trong JFR",
          "Chỉ log ứng dụng",
          "Chỉ metric mạng"
        ],
        "answerIndex": 1,
        "explanation": "Mẫu phân bổ chỉ ra nơi cấp phát nhiều; ghép với sự kiện GC trong cùng cửa sổ mới chứng minh được chuỗi nhân quả."
      },
      {
        "question": "Vì sao phải giới hạn thời lượng và dung lượng của bản ghi JFR?",
        "options": [
          "Để file đẹp hơn",
          "Vì JFR chỉ ghi được đúng một phút",
          "Để ẩn dữ liệu khỏi đội vận hành",
          "Để việc thu thập không tự gây sự cố đĩa hoặc kéo dài vô hạn trên production"
        ],
        "answerIndex": 3,
        "explanation": "Công cụ chẩn đoán cũng tiêu tài nguyên. Kỷ luật giới hạn giúp profiling an toàn trên hệ thống đang có sự cố."
      },
      {
        "question": "Sai lầm đọc flame graph kinh điển nhất là gì?",
        "options": [
          "Đọc ô rộng là nơi cháy nhiều thời gian",
          "Đọc stack từ gốc tới lá",
          "Đọc trục ngang như trục thời gian và kết luận thứ tự xảy ra của các method",
          "Đối chiếu flame graph với JFR"
        ],
        "answerIndex": 2,
        "explanation": "Thứ tự trái phải trong flame graph là do sắp xếp mẫu, không mang ý nghĩa thời gian. Nhầm lẫn này dẫn tới kết luận nhân quả sai."
      },
      {
        "question": "Sau khi sửa điểm nóng, bước bắt buộc để kết luận là gì?",
        "options": [
          "Đo lại bằng cùng kịch bản và cùng cách thu thập để so sánh trước và sau",
          "Đóng sự cố ngay",
          "Xóa bản ghi cũ",
          "Tăng gấp đôi tài nguyên"
        ],
        "answerIndex": 0,
        "explanation": "Không có đo lại cùng điều kiện thì không có bằng chứng thay đổi thật sự hiệu quả; cảm giác nhanh hơn không phải dữ liệu."
      },
      {
        "question": "Khi nào nên ưu tiên async-profiler hơn chỉ dùng JFR?",
        "options": [
          "Khi không có quyền truy cập tiến trình",
          "Khi sự cố nằm ở database là chính",
          "Khi cần mẫu stack gồm cả tầng native với chi phí rất thấp và flame graph trực quan",
          "Không bao giờ, hai công cụ xung đột nhau"
        ],
        "answerIndex": 2,
        "explanation": "Hai công cụ bổ sung nhau: async-profiler mạnh ở mẫu stack liên tục gồm native, JFR mạnh ở sự kiện JVM có trục thời gian."
      },
      {
        "question": "Bản ghi vòng tròn hoặc thu thập kích hoạt theo cảnh báo giải quyết vấn đề gì?",
        "options": [
          "Làm flame graph đẹp hơn",
          "Bắt đúng khoảnh khắc của sự cố theo cơn vốn biến mất trước khi con người kịp thu thập thủ công",
          "Thay thế hệ thống cảnh báo",
          "Giảm nhu cầu lưu trữ log"
        ],
        "answerIndex": 1,
        "explanation": "Sự cố thoáng qua cần cơ chế bắt tại trận. Đây là lý do các hệ thống production giữ dữ liệu chẩn đoán dạng vòng đệm."
      }
    ]
  },
  "m09-alert-rules-va-slo": {
    "checklist": [
      "Định nghĩa được SLI và SLO kèm cửa sổ đo cho các dịch vụ trọng điểm.",
      "Tính được ngân sách lỗi từ SLO và diễn giải được tốc độ tiêu thụ ngân sách.",
      "Viết được alert rules có thời gian chờ, nhãn mức độ và tóm tắt rõ triệu chứng.",
      "Hiệu chỉnh được ngưỡng bằng số đo thật thay vì sao chép từ hệ thống khác.",
      "Soạn được runbook tối thiểu đi kèm mỗi cảnh báo production.",
      "Phân biệt được cảnh báo triệu chứng hướng người dùng với cảnh báo nguyên nhân nội bộ."
    ],
    "quiz": [
      {
        "question": "SLI khác SLO ở điểm nào?",
        "options": [
          "Không khác nhau",
          "SLI là chỉ số đo được từ số liệu thật, SLO là ngưỡng mục tiêu cam kết cho chỉ số đó trong một cửa sổ thời gian",
          "SLI do đội kỹ thuật đặt, SLO do máy tự tính",
          "SLO là một loại dashboard"
        ],
        "answerIndex": 1,
        "explanation": "Đo lường và cam kết là hai việc khác nhau: SLI cho con số, SLO cho chuẩn để đánh giá con số đó và suy ra ngân sách lỗi."
      },
      {
        "question": "Ngân sách lỗi được dùng để quyết định điều gì?",
        "options": [
          "Số lượng developer cần tuyển",
          "Dung lượng đĩa cho log",
          "Mức độ mạo hiểm phát hành được phép: ngân sách còn nhiều thì phát hành nhanh, gần cạn thì ưu tiên ổn định",
          "Số lượng dashboard cần vẽ"
        ],
        "answerIndex": 2,
        "explanation": "Ngân sách lỗi biến độ tin cậy thành một nguồn lực quản trị được, cân bằng tốc độ thay đổi với cam kết dịch vụ."
      },
      {
        "question": "Vì sao rule tỉ lệ lỗi cần điều kiện mẫu số tối thiểu?",
        "options": [
          "Để tránh tỉ lệ giả cao trên lượng request quá nhỏ, đặc biệt giờ thấp điểm",
          "Để biểu thức trông phức tạp hơn",
          "Vì Prometheus yêu cầu vậy",
          "Để rule chạy chậm lại"
        ],
        "answerIndex": 0,
        "explanation": "Một lỗi trên ba request là tỉ lệ rất cao nhưng không phải sự cố. Mẫu số tối thiểu giữ cảnh báo trung thực với trải nghiệm thật."
      },
      {
        "question": "Khoảng thời gian chờ cháy trong rule có tác dụng gì?",
        "options": [
          "Trì hoãn cảnh báo cho đỡ phiền",
          "Tăng độ chính xác của metrics",
          "Thay thế runbook",
          "Lọc nhiễu thoáng qua, chỉ cảnh báo khi điều kiện kéo dài đủ lâu để là tín hiệu thật"
        ],
        "answerIndex": 3,
        "explanation": "Thời gian chờ là thỏa thuận giữa tốc độ phát hiện và độ tin cậy của tín hiệu, phải chỉnh theo tính chất từng chỉ số."
      },
      {
        "question": "Rule lag cho CRM consumer cần lưu ý ngữ cảnh nào của Nova?",
        "options": [
          "Màu của dashboard",
          "Cửa sổ draining sau triển khai có thể tạo lag tạm thời có chủ đích, cần ngoại lệ hoặc ngưỡng theo ngữ cảnh",
          "Tên của người trực",
          "Số lượng topic trong cụm"
        ],
        "answerIndex": 1,
        "explanation": "Lag không đọc kèm ngữ cảnh vận hành sẽ cháy giả sau mỗi lần deploy, làm mòn niềm tin của ca trực rất nhanh."
      },
      {
        "question": "Một cảnh báo production được coi là chưa hoàn thành khi thiếu gì?",
        "options": [
          "Thiếu màu đỏ trên dashboard",
          "Thiếu người đặt tên rule",
          "Thiếu biểu đồ riêng",
          "Thiếu runbook hướng dẫn khoanh vùng và xử lý đi kèm"
        ],
        "answerIndex": 3,
        "explanation": "Cảnh báo là điểm bắt đầu của hành động con người. Không có runbook, thời gian xử lý phụ thuộc hoàn toàn vào trí nhớ cá nhân."
      },
      {
        "question": "Cảnh báo theo triệu chứng hướng người dùng tốt hơn cảnh báo nguyên nhân ở điểm nào?",
        "options": [
          "Nó luôn cháy sớm hơn",
          "Nó không cần metrics",
          "Nó cháy đúng khi trải nghiệm thật bị ảnh hưởng, tránh đánh thức vì các bất thường nội bộ chưa tác động tới ai",
          "Nó thay thế được điều tra nguyên nhân"
        ],
        "answerIndex": 2,
        "explanation": "Cảnh báo nguyên nhân vẫn có giá trị chẩn đoán, nhưng quyền đánh thức con người nên thuộc về tín hiệu gắn với trải nghiệm."
      },
      {
        "question": "Ngưỡng cảnh báo nên được hiệu chỉnh bằng dữ liệu nào?",
        "options": [
          "Phân phối số đo lịch sử của chính hệ thống được giám sát, review lại sau thay đổi kiến trúc",
          "Bài viết về hệ thống nổi tiếng khác",
          "Giá trị mặc định của công cụ",
          "Ý kiến của người trực lâu năm nhất mà không cần số liệu"
        ],
        "answerIndex": 0,
        "explanation": "Mọi hệ thống có phân phối tải và độ trễ riêng. Ngưỡng vay mượn là nguồn cháy giả và điểm mù kinh điển."
      },
      {
        "question": "Runbook tốt bắt đầu bằng phần nào?",
        "options": [
          "Danh sách người từng trực ca",
          "Lệnh khởi động lại toàn hệ thống",
          "Triệu chứng và cách xác nhận cảnh báo là thật trước khi làm bất cứ hành động nào",
          "Mẫu báo cáo sự cố"
        ],
        "answerIndex": 2,
        "explanation": "Xác nhận tín hiệu trước khi hành động tránh việc chữa một cảnh báo giả bằng thay đổi thật trên production."
      },
      {
        "question": "Sau một sự cố, việc hậu kiểm nào là bắt buộc với hệ thống cảnh báo?",
        "options": [
          "Xóa rule vừa cháy",
          "Đối chiếu diễn biến thật với rule, dashboard và runbook; sửa điểm mù đã lộ ra và ghi lại thay đổi",
          "Tăng mọi ngưỡng lên gấp đôi",
          "Không cần làm gì nếu dịch vụ đã hồi phục"
        ],
        "answerIndex": 1,
        "explanation": "Sự cố là bài kiểm tra đắt giá nhất của observability. Không hậu kiểm thì cùng một điểm mù sẽ gây hại lần nữa."
      }
    ]
  },
  "m09-ba-tru-cot-micrometer-prometheus": {
    "checklist": [
      "Phân biệt được ba trụ cột observability theo câu hỏi mà mỗi trụ cột trả lời.",
      "Tạo được counter, timer và gauge bằng Micrometer với tên và tag đúng quy ước.",
      "Giải thích được cơ chế scrape của Prometheus và vai trò của khoảng thời gian kéo.",
      "Nhận diện và tránh được lỗi bùng nổ cardinality do tag giá trị cao.",
      "Kiểm chứng được đường đi metrics từ endpoint tới truy vấn Prometheus.",
      "Bảo vệ được endpoint quản trị khỏi lộ ra ngoài gateway công cộng."
    ],
    "quiz": [
      {
        "question": "Trụ cột nào phù hợp nhất để đặt cảnh báo đánh thức đội trực?",
        "options": [
          "Logs chi tiết",
          "Metrics tổng hợp theo thời gian",
          "Traces của từng request",
          "Ảnh chụp màn hình dashboard"
        ],
        "answerIndex": 1,
        "explanation": "Metrics rẻ, liên tục và tổng hợp được theo cửa sổ thời gian nên là nền của cảnh báo. Logs và traces dùng để điều tra sau khi cảnh báo cháy."
      },
      {
        "question": "Counter trong Micrometer có đặc tính gì?",
        "options": [
          "Tăng giảm tùy ý",
          "Luôn phản ánh giá trị tức thời",
          "Chỉ tăng, dùng để đếm sự kiện tích lũy như số giao dịch",
          "Chỉ đo thời gian"
        ],
        "answerIndex": 2,
        "explanation": "Counter đơn điệu tăng; tỉ lệ theo thời gian được suy ra ở tầng truy vấn. Giá trị tức thời là việc của gauge, thời lượng là việc của timer."
      },
      {
        "question": "Vì sao không được đưa mã thành viên vào tag?",
        "options": [
          "Vì mỗi giá trị tag sinh một chuỗi thời gian riêng, cardinality vô hạn sẽ làm phình và sập hệ thống lưu trữ metrics",
          "Vì tag không chứa được số",
          "Vì Micrometer cấm tag dạng chuỗi",
          "Vì mã thành viên là dữ liệu bí mật duy nhất cần giấu"
        ],
        "answerIndex": 0,
        "explanation": "Bùng nổ cardinality là lỗi vận hành kinh điển nhất của metrics. Nhu cầu chi tiết theo cá thể thuộc về logs và traces."
      },
      {
        "question": "Timer cho biết những gì hơn một counter đơn thuần?",
        "options": [
          "Chỉ tổng số lần gọi",
          "Tên của người gọi",
          "Trạng thái của database",
          "Cả số lần và phân phối thời gian, gồm các phân vị độ trễ"
        ],
        "answerIndex": 3,
        "explanation": "Timer ghi nhận phân phối thời lượng nên mới thấy được phần đuôi độ trễ mà giá trị trung bình che giấu."
      },
      {
        "question": "Prometheus lấy metrics bằng cơ chế nào?",
        "options": [
          "Ứng dụng đẩy từng mẫu lên Prometheus",
          "Prometheus chủ động kéo từ endpoint HTTP theo chu kỳ đã cấu hình",
          "Đọc trực tiếp file log của ứng dụng",
          "Qua Kafka topic chuyên dụng"
        ],
        "answerIndex": 1,
        "explanation": "Mô hình kéo giúp Prometheus biết target còn sống hay không qua chính lần kéo và giữ cấu hình tập trung ở phía giám sát."
      },
      {
        "question": "Gauge phù hợp đo đại lượng nào sau đây?",
        "options": [
          "Tổng số giao dịch từ khi khởi động",
          "Tổng số lỗi tích lũy",
          "Thời gian xử lý một request",
          "Số connection đang hoạt động của pool tại thời điểm lấy mẫu"
        ],
        "answerIndex": 3,
        "explanation": "Gauge phản ánh giá trị tức thời lên xuống tự do, rất hợp cho mức dùng tài nguyên như connection, hàng đợi và heap."
      },
      {
        "question": "Sau khi cấu hình scrape, kiểm chứng tối thiểu gồm những gì?",
        "options": [
          "Chỉ nhìn file cấu hình không lỗi cú pháp",
          "Khởi động lại toàn bộ hệ thống",
          "Endpoint trả dữ liệu, target được Prometheus nhận ở trạng thái hoạt động, truy vấn mẫu trả chuỗi số thật",
          "Chờ một tuần rồi xem dashboard"
        ],
        "answerIndex": 2,
        "explanation": "Ba bước kiểm chứng khép kín đường đi của dữ liệu; thiếu bước nào cũng có thể để lại một hệ thống giám sát trống rỗng."
      },
      {
        "question": "Endpoint metrics cần được đối xử thế nào về bảo mật?",
        "options": [
          "Chỉ expose trong mạng quản trị và yêu cầu xác thực như endpoint quản trị khác",
          "Mở công khai qua gateway cho tiện",
          "Không cần quan tâm vì metrics không nhạy cảm",
          "Đặt mật khẩu yếu dùng chung"
        ],
        "answerIndex": 0,
        "explanation": "Metrics lộ cấu trúc nội bộ và thông tin vận hành. Chúng phải nằm sau lớp bảo vệ, không đi qua route công cộng của gateway."
      },
      {
        "question": "Tag tốt có đặc điểm nào?",
        "options": [
          "Tập giá trị vô hạn và chi tiết tối đa",
          "Luôn chứa mã định danh của người dùng để tiện tra cứu",
          "Tập giá trị hữu hạn, nhỏ và ổn định như route, kết quả, tên datasource",
          "Thay đổi theo từng request"
        ],
        "answerIndex": 2,
        "explanation": "Tag là chiều cắt lát tổng hợp: hữu hạn và ổn định là điều kiện bắt buộc để hệ thống metrics sống được lâu dài."
      },
      {
        "question": "Khi độ trễ trung bình đẹp nhưng khách vẫn phàn nàn chậm, nên nhìn số nào?",
        "options": [
          "Tổng số request",
          "Phân vị cao của timer cho đúng route bị phàn nàn",
          "Số lượng instance",
          "Thời gian khởi động ứng dụng"
        ],
        "answerIndex": 1,
        "explanation": "Trải nghiệm xấu tập trung ở phần đuôi phân phối. Phân vị cao theo từng route là nơi sự thật về độ trễ nằm."
      }
    ]
  },
  "m09-grafana-dashboard": {
    "checklist": [
      "Thiết kế được dashboard theo thứ tự điều tra sự cố với 4 hàng rõ vai trò.",
      "Viết được truy vấn phân vị độ trễ, heap, pool và consumer lag từ metrics có thật.",
      "Đóng gói và nhập lại được dashboard dạng JSON vào Grafana.",
      "Dùng được biến mẫu để một dashboard phục vụ nhiều service và datasource.",
      "Nhận diện được panel trang trí và tín hiệu giả do mẫu số nhỏ.",
      "Đặt được ngưỡng tham chiếu và hành động gợi ý cho từng panel quan trọng."
    ],
    "quiz": [
      {
        "question": "Tiêu chí quan trọng nhất của một panel trên dashboard ca trực là gì?",
        "options": [
          "Màu sắc đẹp",
          "Trả lời một câu hỏi vận hành cụ thể và gợi ra hành động khi bất thường",
          "Chiếm nhiều diện tích",
          "Dùng loại đồ thị hiếm gặp"
        ],
        "answerIndex": 1,
        "explanation": "Panel không gợi hành động là trang trí. Dashboard ca trực được chấm bằng tốc độ khoanh vùng sự cố, không phải vẻ đẹp."
      },
      {
        "question": "Vì sao panel tỉ lệ lỗi phải đi cùng panel lưu lượng?",
        "options": [
          "Để dashboard cân đối",
          "Vì Grafana bắt buộc",
          "Để phân biệt lỗi thật trên tải lớn với tỉ lệ giả cao trên mẫu số quá nhỏ",
          "Để tiết kiệm panel"
        ],
        "answerIndex": 2,
        "explanation": "Tỉ lệ không có ngữ cảnh mẫu số sẽ đánh lừa ca trực, đặc biệt vào giờ thấp điểm của Nova."
      },
      {
        "question": "Consumer lag tăng ngay sau deploy có thể là hiện tượng gì trước tiên cần kiểm chứng?",
        "options": [
          "Consumer đang draining và khởi động lại theo kế hoạch, cần đối chiếu cửa sổ triển khai",
          "Chắc chắn là tắc nghẽn nghiêm trọng",
          "Database đã đầy",
          "Gateway sai route"
        ],
        "answerIndex": 0,
        "explanation": "Lag phải được đọc theo ngữ cảnh vận hành: deploy và draining 75 giây của CRM consumer tạo lag tạm thời có chủ đích."
      },
      {
        "question": "Lợi ích của biến mẫu service trong dashboard là gì?",
        "options": [
          "Làm JSON dài hơn",
          "Tự động tạo metrics mới",
          "Thay thế hệ thống cảnh báo",
          "Một dashboard dùng chung cho nhiều service mà không sao chép và sửa tay từng bản"
        ],
        "answerIndex": 3,
        "explanation": "Biến mẫu biến dashboard thành sản phẩm dùng lại được, giảm sai lệch giữa các bản sao cho từng service."
      },
      {
        "question": "Vì sao dashboard nên được lưu dạng JSON trong repo?",
        "options": [
          "Để Grafana chạy nhanh hơn",
          "Để thay đổi dashboard được review, có lịch sử và khôi phục được như code",
          "Vì Grafana không có giao diện sửa",
          "Để ẩn dashboard khỏi ca trực"
        ],
        "answerIndex": 1,
        "explanation": "Dashboard as code giúp mọi thay đổi có lý do, được review và đồng bộ giữa các môi trường."
      },
      {
        "question": "Panel heap nào cho tín hiệu đáng lo hơn?",
        "options": [
          "Heap dao động răng cưa và hạ sau mỗi chu kỳ thu gom",
          "Heap dùng ở mức thấp ổn định",
          "Heap bằng đúng một nửa trần trong giờ cao điểm",
          "Heap tăng đều, sau thu gom vẫn không hạ và tiến dần tới trần"
        ],
        "answerIndex": 3,
        "explanation": "Đường chân heap sau thu gom tăng đều là dấu hiệu object sống tích lũy, khác hẳn dao động khỏe mạnh theo tải."
      },
      {
        "question": "Khi pool của một datasource nghẽn, panel nào khoanh vùng nhanh nhất?",
        "options": [
          "Panel CPU tổng của node",
          "Panel số lượng pod",
          "Panel connection đang hoạt động và thread chờ tách theo tên pool",
          "Panel lưu lượng HTTP tổng"
        ],
        "answerIndex": 2,
        "explanation": "Chiều tách theo tên pool chỉ thẳng datasource gây nghẽn trong 5 datasource, rút ngắn bước khoanh vùng đầu tiên."
      },
      {
        "question": "Đặt cùng một cửa sổ thời gian cho toàn dashboard quan trọng vì lý do gì?",
        "options": [
          "Để tương quan giữa nghiệp vụ, JVM, pool và lag đều hợp lệ trên cùng một sự cố",
          "Để mọi panel đẹp như nhau",
          "Vì Grafana không cho đặt khác nhau",
          "Để giảm tải truy vấn"
        ],
        "answerIndex": 0,
        "explanation": "Tương quan sai cửa sổ thời gian là nguồn kết luận sai kinh điển trong điều tra sự cố."
      },
      {
        "question": "Đơn vị hiển thị sai trên panel độ trễ gây hậu quả gì?",
        "options": [
          "Không có hậu quả",
          "Grafana tự sửa đơn vị",
          "Ca trực đọc nhầm mili giây thành giây và ra quyết định sai mức độ nghiêm trọng",
          "Chỉ ảnh hưởng thẩm mỹ"
        ],
        "answerIndex": 2,
        "explanation": "Đơn vị là một phần của dữ liệu. Nhầm đơn vị trong lúc sự cố biến dashboard thành nguồn gây hại."
      },
      {
        "question": "Bước cuối để một dashboard mới được coi là hoàn thành là gì?",
        "options": [
          "Vẽ xong và chụp ảnh lưu trữ",
          "Thử dùng nó điều tra một sự cố mẫu hoặc sự cố đã qua và sửa những điểm làm chậm khoanh vùng",
          "Chia sẻ link cho toàn công ty",
          "Đặt làm trang chủ Grafana"
        ],
        "answerIndex": 1,
        "explanation": "Dashboard phải được kiểm chứng bằng bài toán thật: ca trực dùng nó tìm ra tầng sự cố nhanh hơn cách cũ."
      }
    ]
  },
  "m09-opentelemetry-tracing-kafka-propagation": {
    "checklist": [
      "Đọc được waterfall của một trace và chỉ ra đường tới hạn cùng span bất thường.",
      "Inject và extract được ngữ cảnh W3C qua header của Kafka record.",
      "Giải thích được vì sao biên bất đồng bộ là nơi trace dễ đứt nhất và cách phòng ngừa.",
      "Tương quan được log, metric và trace bằng cùng định danh truy vết.",
      "Chọn được chính sách lấy mẫu giữ lại các hành trình chậm bất thường.",
      "Thiết kế được lan truyền ngữ cảnh cho đường Outbox của Nova Loyalty kèm đánh đổi rõ ràng."
    ],
    "quiz": [
      {
        "question": "Span trong tracing là gì?",
        "options": [
          "Một dòng log có cấu trúc",
          "Một đoạn công việc có tên, thời lượng và thuộc tính, nằm trong cây quan hệ cha con của một trace",
          "Một chuỗi thời gian trong Prometheus",
          "Một phân vùng của Kafka topic"
        ],
        "answerIndex": 1,
        "explanation": "Trace là cả hành trình, span là từng đoạn việc. Waterfall của các span cho thấy thời gian cháy ở đâu và theo quan hệ nhân quả nào."
      },
      {
        "question": "Ngữ cảnh truy vết qua Kafka được mang theo bằng thành phần nào của record?",
        "options": [
          "Key của record",
          "Tên topic",
          "Header của record theo chuẩn lan truyền W3C",
          "Offset của record"
        ],
        "answerIndex": 2,
        "explanation": "Header là carrier chuẩn cho ngữ cảnh khi đi qua hệ nhắn tin: producer inject, consumer extract để nối đúng cây trace."
      },
      {
        "question": "Điều gì xảy ra nếu consumer bỏ qua bước extract ngữ cảnh?",
        "options": [
          "Consumer mở một trace mới rời rạc, hành trình bị đứt tại biên bất đồng bộ",
          "Trace vẫn nối đúng nhờ offset",
          "Kafka tự nối trace",
          "Span của producer bị xóa"
        ],
        "answerIndex": 0,
        "explanation": "Không extract thì không có span cha để nối. Đứt trace tại biên hàng đợi là lỗi triển khai phổ biến nhất của tracing phân tán."
      },
      {
        "question": "Đường tới hạn của một trace là gì?",
        "options": [
          "Chuỗi span có tên dài nhất",
          "Span ở tầng database",
          "Mọi span lá cộng lại",
          "Chuỗi span quyết định tổng thời lượng của hành trình, nơi tối ưu mới có tác dụng thật"
        ],
        "answerIndex": 3,
        "explanation": "Tối ưu ngoài đường tới hạn không rút ngắn trải nghiệm đầu-cuối. Waterfall giúp tập trung đúng chuỗi quyết định đó."
      },
      {
        "question": "Vì sao đường Outbox qua Debezium làm lan truyền ngữ cảnh khó hơn đường producer trực tiếp?",
        "options": [
          "Vì Kafka không có header",
          "Vì mắt xích chuyển tiếp không chạy code ứng dụng để inject, ngữ cảnh phải được lưu kèm sự kiện hoặc tái tạo có kỷ luật",
          "Vì Debezium xóa mọi dữ liệu",
          "Vì Outbox không dùng được tracing"
        ],
        "answerIndex": 1,
        "explanation": "Debezium đọc log database và tạo record theo cấu hình. Ngữ cảnh muốn sống sót qua mắt xích này phải trở thành dữ liệu đi kèm sự kiện."
      },
      {
        "question": "Thuộc tính span nên tuân thủ nguyên tắc nào về cardinality?",
        "options": [
          "Càng chi tiết theo từng giao dịch càng tốt cho mọi thuộc tính",
          "Không đặt thuộc tính nào cả",
          "Chỉ đặt thuộc tính dạng số",
          "Giữ ở mức kiểm soát được cho các chiều phân tích, tránh biến mọi mã định danh thành chiều truy vấn chính"
        ],
        "answerIndex": 3,
        "explanation": "Thuộc tính là dữ kiện của span, không phải hệ chỉ mục vô hạn. Lạm dụng cardinality cao làm hệ truy vết phình và chậm."
      },
      {
        "question": "Lấy mẫu ưu tiên phần đuôi giải quyết vấn đề gì?",
        "options": [
          "Giảm số span trong mỗi trace",
          "Tăng tốc độ xử lý của Kafka",
          "Giữ lại các hành trình chậm bất thường vốn bị lấy mẫu ngẫu nhiên đều bỏ qua",
          "Thay thế cảnh báo độ trễ"
        ],
        "answerIndex": 2,
        "explanation": "Sự cố nằm ở phần đuôi. Chính sách lấy mẫu phải thiên vị giữ lại đúng những hành trình đáng điều tra nhất."
      },
      {
        "question": "Vòng điều tra khép kín giữa ba trụ cột diễn ra thế nào?",
        "options": [
          "Từ metric thấy cửa sổ sự cố, lấy trace mẫu trong cửa sổ, rồi dùng định danh truy vết để đọc log chi tiết của đúng hành trình",
          "Chỉ nhìn dashboard là đủ",
          "Đọc toàn bộ log của mọi service",
          "Chờ người dùng gửi thêm thông tin"
        ],
        "answerIndex": 0,
        "explanation": "Ba trụ cột mạnh khi nối được với nhau bằng thời gian và định danh chung, thay vì là ba hệ thống rời nhau."
      },
      {
        "question": "Thời gian chờ của message trong Kafka nên xuất hiện thế nào trong trace?",
        "options": [
          "Bỏ qua vì không thuộc service nào",
          "Tính vào span của gateway",
          "Là một phần thời lượng được thể hiện qua quan hệ span sản xuất và span tiêu thụ, không để biến mất khỏi bức tranh đầu-cuối",
          "Cộng dồn vào mọi span con"
        ],
        "answerIndex": 2,
        "explanation": "Nếu thời gian chờ vô hình, tổng độ trễ đầu-cuối sẽ không khớp tổng các span xử lý và đội ngũ kết luận sai về nút thắt."
      },
      {
        "question": "Bằng chứng nào cho thấy lan truyền ngữ cảnh qua Kafka đã đúng?",
        "options": [
          "Producer gửi được message",
          "Một trace duy nhất chứa cả span gateway, span service, span sản xuất và span tiêu thụ của CRM cho cùng một giao dịch kiểm chứng",
          "Consumer xử lý được message",
          "Log hai phía đều có chữ kafka"
        ],
        "answerIndex": 1,
        "explanation": "Kiểm chứng đầu-cuối bằng một giao dịch thật và một cây trace liền mạch là tiêu chuẩn hoàn thành của bài toán lan truyền."
      }
    ]
  },
  "m09-structured-logging-mdc": {
    "checklist": [
      "Cấu hình được Logback xuất JSON với các trường chuẩn và trường MDC đã chọn.",
      "Đặt và dọn MDC đúng vòng đời cho luồng xử lý đồng bộ qua filter.",
      "Xử lý được việc sao chép ngữ cảnh MDC khi chuyển sang xử lý bất đồng bộ.",
      "Áp dụng được danh sách vệ sinh log cho dữ liệu nhạy cảm và mức log.",
      "Tương quan được log với trace bằng cùng định danh truy vết.",
      "Giải thích được vì sao định danh tương quan quan trọng hơn địa chỉ mạng sau SNAT."
    ],
    "quiz": [
      {
        "question": "MDC là cơ chế gì?",
        "options": [
          "Một database nhỏ trong JVM",
          "Bản đồ ngữ cảnh gắn với thread đang xử lý, được mẫu log tự động đưa vào mọi dòng log của luồng đó",
          "Một loại encoder JSON",
          "Hàng đợi log bất đồng bộ"
        ],
        "answerIndex": 1,
        "explanation": "MDC giúp mọi dòng log trong một luồng tự mang định danh chung mà không cần truyền tham số qua từng method."
      },
      {
        "question": "Việc bắt buộc khi kết thúc xử lý một request là gì với MDC?",
        "options": [
          "Để nguyên cho request sau dùng lại",
          "Sao chép MDC vào database",
          "Dọn sạch MDC trong khối đảm bảo luôn chạy, tránh rò ngữ cảnh sang thread được tái sử dụng",
          "Tắt logger của thread"
        ],
        "answerIndex": 2,
        "explanation": "Thread pool tái sử dụng thread cho nhiều request. Không dọn MDC là lỗi tương quan log kinh điển và rất khó phát hiện."
      },
      {
        "question": "Khi chuyển sang xử lý bất đồng bộ, MDC cư xử thế nào?",
        "options": [
          "Không tự đi theo, phải sao chép ngữ cảnh tường minh sang luồng xử lý mới",
          "Tự đi theo task sang thread mới",
          "Biến mất khỏi cả thread gốc",
          "Được JVM đồng bộ tự động"
        ],
        "answerIndex": 0,
        "explanation": "MDC gắn với thread. Mọi bước nhảy thread — executor, reactive, hàng đợi — đều cần chiến lược mang ngữ cảnh tường minh."
      },
      {
        "question": "Trường nào nên là trường riêng trong log JSON thay vì nhồi vào thông điệp?",
        "options": [
          "Mức log",
          "Tên service",
          "Dấu thời gian",
          "Các dữ kiện cần lọc và đếm như loại giao dịch, kết quả và tên datasource"
        ],
        "answerIndex": 3,
        "explanation": "Trường riêng mới truy vấn và tổng hợp được. Thông điệp dành cho con người đọc, trường dành cho máy phân tích."
      },
      {
        "question": "Quy tắc vệ sinh quan trọng nhất với dữ liệu nhạy cảm là gì?",
        "options": [
          "Ghi đầy đủ để điều tra cho dễ",
          "Không ghi token, mật khẩu và dữ liệu cá nhân không cần thiết; chỉ ghi trường đã được duyệt",
          "Mã hóa log bằng thuật toán tự chế",
          "Chỉ ghi dữ liệu nhạy cảm vào ban đêm"
        ],
        "answerIndex": 1,
        "explanation": "Log được sao chép, lưu lâu và nhiều người xem hơn dữ liệu gốc. Rò rỉ qua log là một trong các rò rỉ khó thu hồi nhất."
      },
      {
        "question": "Vì sao địa chỉ IP không phải định danh tương quan đáng tin tại Nova?",
        "options": [
          "Vì IPv6 quá dài",
          "Vì log không lưu được địa chỉ IP",
          "Vì gateway cấm ghi IP",
          "Vì SNAT sau load balancer làm mất IP thật của client, nhiều client dùng chung một địa chỉ nguồn"
        ],
        "answerIndex": 3,
        "explanation": "Đó là lý do Nova gắn định danh request và định danh truy vết ngay ở biên vào thay vì truy vết theo địa chỉ mạng."
      },
      {
        "question": "Mức log lỗi nên dành cho trường hợp nào?",
        "options": [
          "Mọi ngoại lệ kể cả lỗi dữ liệu đầu vào đã dự kiến",
          "Thông tin tiến trình bình thường",
          "Sự cố thật sự cần con người chú ý hoặc hành động",
          "Chi tiết gỡ lỗi tạm thời"
        ],
        "answerIndex": 2,
        "explanation": "Lạm dụng mức lỗi làm mòn kênh tín hiệu. Ý nghĩa từng mức phải là thỏa ước chung của cả team vận hành."
      },
      {
        "question": "Log trong vòng lặp nóng cần kỷ luật gì?",
        "options": [
          "Tổng hợp thành một dòng tổng kết theo lô, hoặc lấy mẫu, tránh một dòng cho mỗi phần tử",
          "Ghi mọi phần tử để đủ chi tiết",
          "Tắt toàn bộ log của service",
          "Chỉ ghi khi có lỗi biên dịch"
        ],
        "answerIndex": 0,
        "explanation": "Một dòng cho mỗi phần tử trong lô lớn làm ngập đĩa, tốn chi phí tập hợp và che mất tín hiệu thật trong sự cố."
      },
      {
        "question": "Định danh nào nối log với trace của cùng một hành trình?",
        "options": [
          "Tên của developer",
          "Số cổng của service",
          "Định danh truy vết được đặt vào MDC và xuất hiện trong cả log lẫn span",
          "Tên file log"
        ],
        "answerIndex": 2,
        "explanation": "Cùng một định danh xuất hiện ở hai trụ cột là chiếc cầu cho phép nhảy từ log tới trace và ngược lại khi điều tra."
      },
      {
        "question": "Kiểm chứng cấu hình log có cấu trúc đạt yêu cầu bằng cách nào?",
        "options": [
          "Đọc file cấu hình và gật đầu",
          "Chạy một giao dịch kiểm chứng và xác nhận dòng JSON có đủ trường chuẩn, đúng định danh và không chứa dữ liệu bị cấm",
          "Xem log có dài hay không",
          "Đếm số appender đã khai báo"
        ],
        "answerIndex": 1,
        "explanation": "Cấu hình log rất dễ sai lặng lẽ ở encoder và mẫu trường. Chỉ dòng log thật của giao dịch kiểm chứng mới là bằng chứng."
      }
    ]
  },
  "m10-resilience4j-circuit-breaker-bulkhead": {
    "checklist": [
      "Giải thích được ba trạng thái Closed, Open, HalfOpen và điều kiện chuyển trạng thái.",
      "Cấu hình được circuit breaker bằng YAML gồm ngưỡng lỗi, ngưỡng chậm, cửa sổ và thời gian chờ.",
      "Cấu hình được bulkhead dạng semaphore với giới hạn riêng cho từng dependency.",
      "Viết được fallback method đúng chữ ký kèm tham số exception và có test cho đường fallback.",
      "Phân biệt được exception nên ghi nhận và exception nên bỏ qua của breaker.",
      "Phân tích được kịch bản cascading failure và vị trí đặt breaker/bulkhead để chặn nó."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "Ở trạng thái Open, breaker từ chối ngay bằng exception chuyên dụng mà không chạm tới đối tác, giúp đối tác có thời gian hồi phục và giải phóng tài nguyên phía gọi.",
        "options": [
          "Tiếp tục gọi đối tác nhưng ghi log nhiều hơn",
          "Chuyển mọi request sang hàng đợi vô hạn",
          "Tắt toàn bộ service",
          "Từ chối ngay lập tức mà không gọi đối tác, để đối tác có thời gian hồi phục"
        ],
        "question": "Khi circuit breaker ở trạng thái Open, lời gọi được xử lý thế nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "Lời gọi chậm chiếm giữ thread/connection lâu dài và là nguyên nhân chính của sụp đổ dây chuyền, nên Resilience4j cho phép coi chậm như một dạng lỗi qua hai ngưỡng này.",
        "options": [
          "sliding-window-size",
          "permitted-number-of-calls-in-half-open-state",
          "register-health-indicator",
          "slow-call-duration-threshold và slow-call-rate-threshold"
        ],
        "question": "Cặp tham số nào biến 'lời gọi chậm' thành tín hiệu mở breaker?"
      },
      {
        "answerIndex": 0,
        "explanation": "Nova Loyalty cần fallback nghiệp vụ đã được chấp nhận: số dư cache có đánh dấu stale, hoặc xếp yêu cầu vào hàng đợi xử lý bù — không phải dữ liệu bịa lặng lẽ.",
        "options": [
          "Trả số dư đã cache kèm đánh dấu dữ liệu có thể cũ, hoặc xếp yêu cầu vào hàng đợi xử lý sau",
          "Trả số dư bằng 0 để giao diện không lỗi",
          "Tự cộng điểm ước lượng",
          "Ẩn lỗi và báo thành công giả"
        ],
        "question": "Fallback tốt cho thao tác lấy số dư điểm khi CRM sập nên làm gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Fallback được tra cứu qua cơ chế proxy/annotation; sai chữ ký thường chỉ nổ lúc runtime. Vì vậy phải có test ép đường fallback chạy thật.",
        "options": [
          "Fallback sai chữ ký luôn bị trình biên dịch chặn",
          "Fallback sai chữ ký có thể chỉ phát hiện được lúc runtime khi breaker mở",
          "Fallback không cần khớp kiểu trả về",
          "Fallback luôn chạy trên thread riêng nên không lỗi"
        ],
        "question": "Vì sao lỗi chữ ký fallback method đặc biệt nguy hiểm?"
      },
      {
        "answerIndex": 2,
        "explanation": "Bulkhead giới hạn mức đồng thời theo từng dependency: một đối tác chậm chỉ được chiếm phần sức chứa đã cấp cho nó, không nuốt sức chứa của dependency khác.",
        "options": [
          "Đếm tỷ lệ lỗi theo thời gian",
          "Tự động mở khi tỷ lệ lỗi vượt ngưỡng",
          "Giới hạn số lời gọi đồng thời vào một dependency để nó không nuốt hết sức chứa của cả service",
          "Mã hóa dữ liệu truyền đi"
        ],
        "question": "Bulkhead bảo vệ hệ thống theo cơ chế nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Nếu không có số liệu tối thiểu, vài lời gọi lỗi ngẫu nhiên lúc lưu lượng thấp có thể mở breaker oan và chặn cả traffic khỏe.",
        "options": [
          "wait-duration-in-open-state",
          "minimum-number-of-calls",
          "max-concurrent-calls",
          "failure-rate-threshold đặt một mình"
        ],
        "question": "Tham số nào tránh việc breaker mở oan khi lưu lượng quá thấp?"
      },
      {
        "answerIndex": 2,
        "explanation": "Lỗi validation do client gửi sai dữ liệu không nói lên sức khỏe đối tác. Tính nó vào tỷ lệ lỗi sẽ làm breaker mở oan.",
        "options": [
          "Timeout khi gọi CRM",
          "Lỗi kết nối tới đối tác",
          "Lỗi validation do client gửi dữ liệu sai",
          "Lỗi 5xx từ đối tác"
        ],
        "question": "Exception nào nên được đưa vào danh sách bỏ qua của breaker?"
      },
      {
        "answerIndex": 1,
        "explanation": "HalfOpen là giai đoạn thăm dò có kiểm soát: một số ít lời gọi thử quyết định breaker đóng lại hay mở tiếp, tránh dội toàn bộ traffic vào đối tác vừa hồi phục.",
        "options": [
          "Breaker tắt hoàn toàn mọi giám sát",
          "Breaker cho một số ít lời gọi thử đi qua để quyết định đóng lại hay mở tiếp",
          "Mọi request đều được nhân đôi",
          "Bulkhead tự động tăng giới hạn"
        ],
        "question": "Trạng thái HalfOpen có vai trò gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Annotation của Spring Cloud Circuit Breaker hoạt động qua proxy/AOP; method tự gọi nội bộ trong cùng bean sẽ bỏ qua proxy nên breaker không hề chạy.",
        "options": [
          "Đúng — lời gọi nội bộ cùng class bỏ qua proxy nên annotation không có tác dụng",
          "Sai — annotation luôn chạy kể cả khi tự gọi nội bộ",
          "Đúng — nhưng chỉ vì thiếu Actuator",
          "Sai — cần thêm Kafka mới chạy"
        ],
        "question": "Khẳng định 'đặt annotation lên method rồi tự gọi nội bộ trong cùng class vẫn được bảo vệ' đúng hay sai?"
      },
      {
        "answerIndex": 1,
        "explanation": "Bài học khóa phiên bản ở Resilience4j 2.x đi cùng Spring Cloud 2023.0.x và Spring Boot 3.3.x.",
        "options": [
          "Resilience4j 1.x",
          "Resilience4j 2.x",
          "Hystrix bản mới nhất",
          "Không cần thư viện chịu lỗi"
        ],
        "question": "Dòng phiên bản Resilience4j được dùng trong bài là gì?"
      }
    ]
  },
  "m10-resilience4j-rate-time-limiter": {
    "checklist": [
      "Cấu hình được RateLimiter với limitForPeriod, limitRefreshPeriod và timeoutDuration đúng ngữ nghĩa.",
      "Giải thích được vì sao @TimeLimiter cần kiểu trả về bất đồng bộ như CompletableFuture.",
      "Nêu được cách đặt trần thời gian cho lời gọi đồng bộ bằng timeout của RestClient kết hợp ngưỡng chậm của breaker.",
      "Mô tả được thứ tự aspect mặc định khi xếp chồng nhiều cơ chế chịu lỗi và hệ quả của từng vị trí.",
      "Thiết kế được chính sách giới hạn tần suất theo định danh xác thực thay vì theo IP khi có SNAT.",
      "Phân biệt được bảo vệ chiều vào cho API đối tác và giới hạn chiều ra tôn trọng hạn ngạch của phía bên kia."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "TimeLimiter của Resilience4j qua Spring AOP được thiết kế cho method trả về kiểu future. Method đồng bộ cần timeout ở tầng HTTP client và ngưỡng gọi chậm của breaker.",
        "options": [
          "Bất kỳ kiểu trả về nào",
          "Chỉ kiểu void",
          "Chỉ kiểu String",
          "CompletableFuture hoặc kiểu bất đồng bộ tương đương"
        ],
        "question": "Với Spring AOP, @TimeLimiter yêu cầu kiểu trả về nào để có hiệu lực đúng?"
      },
      {
        "answerIndex": 3,
        "explanation": "timeoutDuration bằng 0 nghĩa là không chờ slot: request vượt hạn ngạch bị từ chối ngay — lựa chọn phổ biến cho API đối tác cần phản hồi nhanh và rõ ràng.",
        "options": [
          "Chờ vô hạn tới khi có slot",
          "Chờ đúng một chu kỳ làm mới",
          "Nhân đôi hạn ngạch",
          "Từ chối ngay lập tức"
        ],
        "question": "Trong RateLimiter, timeoutDuration bằng 0 có nghĩa là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Sau SNAT, mọi đối tác dùng chung địa chỉ nguồn của thiết bị mạng. Giới hạn theo IP sẽ gộp tất cả vào một rổ; phải dùng API key/client id đã xác thực.",
        "options": [
          "IP bị SNAT gộp chung nên không còn định danh được từng đối tác; phải giới hạn theo API key hoặc client id",
          "IP luôn là định danh tốt nhất",
          "Vì đối tác không có địa chỉ IP",
          "Vì rate limiter không hỗ trợ IP"
        ],
        "question": "Vì sao không nên giới hạn tần suất theo IP cho API đối tác của Nova Loyalty?"
      },
      {
        "answerIndex": 1,
        "explanation": "Thứ tự aspect quyết định ngữ nghĩa tổng hợp. Resilience4j khuyến nghị thứ tự bọc từ ngoài vào trong bắt đầu bằng Retry rồi CircuitBreaker, RateLimiter, TimeLimiter, Bulkhead — luôn đối chiếu với docs của bản 2.x đang dùng.",
        "options": [
          "Thứ tự hoàn toàn ngẫu nhiên mỗi lần khởi động",
          "Có thứ tự mặc định được khuyến nghị và có thể tùy biến qua cấu hình aspect order",
          "Annotation nào viết trước trong file nguồn thì chạy trước một cách đảm bảo",
          "Chỉ một annotation được phép trên một method"
        ],
        "question": "Khi xếp chồng nhiều annotation chịu lỗi, điều nào đúng về thứ tự aspect?"
      },
      {
        "answerIndex": 2,
        "explanation": "Với đường đồng bộ, trần thời gian thật nằm ở connect/read timeout của HTTP client (RestClient) cộng với khả năng phát hiện gọi chậm của circuit breaker.",
        "options": [
          "Tăng heap cho JVM",
          "Chỉ cần thêm @TimeLimiter là đủ",
          "Đặt connect timeout và read timeout ở HTTP client, kết hợp ngưỡng gọi chậm của circuit breaker",
          "Tắt rate limiter"
        ],
        "question": "Để đặt trần thời gian cho lời gọi HTTP đồng bộ, cách đúng là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "limitRefreshPeriod 1s và limitForPeriod 50 cho phép trung bình 50 request/giây theo từng cửa sổ giây, bị từ chối ngay khi vượt nếu timeoutDuration bằng 0.",
        "options": [
          "50 request mỗi phút",
          "50 request được phép trong mỗi chu kỳ làm mới dài 1 giây",
          "Tối đa 50 thread đồng thời",
          "50 lần retry cho mỗi request"
        ],
        "question": "Cấu hình limitForPeriod 50 với limitRefreshPeriod 1 giây có nghĩa là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Hạn ngạch do phía bên kia áp lên là ràng buộc ngoài tầm kiểm soát: vượt nó có thể bị khóa tích hợp. Rate limiter chiều ra giúp Nova Loyalty tự giữ mình dưới trần đó.",
        "options": [
          "Để tăng tốc độ gọi ra tối đa",
          "Rate limiter chiều ra không có tác dụng thực tế",
          "Tôn trọng hạn ngạch mà CRM/đối tác áp lên Nova Loyalty, tránh bị khóa hoặc bị chặn ở phía bên kia",
          "Thay thế cho xác thực"
        ],
        "question": "Rate limiter ở chiều gọi ra (outbound) bảo vệ điều gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "cancelRunningFuture cho phép yêu cầu hủy tác vụ nền khi quá thời hạn, thay vì để nó chạy tiếp và tiêu tốn tài nguyên vô ích sau khi kết quả đã không còn cần.",
        "options": [
          "Đúng — time limiter yêu cầu hủy future đang chạy khi hết timeout thay vì để nó chạy tiếp",
          "Sai — future không bao giờ bị hủy",
          "Đúng — nhưng chỉ áp dụng cho rate limiter",
          "Sai — tham số này dùng để tăng timeout"
        ],
        "question": "Tham số cancelRunningFuture của TimeLimiter có vai trò gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "HTTP 429 là mã trạng thái chuẩn cho việc bị giới hạn tần suất — client đối tác cần nhận tín hiệu rõ ràng để backoff thay vì retry dội bão.",
        "options": [
          "200 kèm thân rỗng",
          "429 Too Many Requests",
          "404 Not Found",
          "301 Redirect"
        ],
        "question": "Khi request bị rate limiter từ chối ở tầng API, mã trạng thái phù hợp nhất để trả về là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Retry ở lớp ngoài cùng có thể nhân lượng request lên nhiều lần trước khi các lớp trong nhìn thấy, làm hạn ngạch thực tế bị vượt xa con số đã thiết kế nếu không tính toán tổng hợp.",
        "options": [
          "Retry luôn bị cấm khi có rate limiter",
          "Retry không ảnh hưởng gì tới hạn ngạch",
          "Retry có thể khuếch đại lượng request; phải tính tổng hợp với vị trí của retry trong chuỗi aspect",
          "Chỉ cần tăng limitForPeriod là đủ trong mọi trường hợp"
        ],
        "question": "Tương tác nguy hiểm giữa Retry và RateLimiter khi xếp chồng là gì?"
      }
    ]
  },
  "m10-spring-cloud-config": {
    "checklist": [
      "Giải thích được vai trò của Config Server và Config Client trong kiến trúc Spring Cloud.",
      "Phân biệt được config import hiện đại với bootstrap context đời cũ.",
      "Cấu hình được client lấy cấu hình theo application name, profile và label kèm fail-fast.",
      "Đánh giá được khi nào nên và không nên dùng @RefreshScope.",
      "Nêu được lý do không đưa secret plaintext lên Git của Config Server.",
      "Mô tả được chiến lược retry và sẵn sàng cao cho Config Server trên đường khởi động."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "Từ Spring Boot 2.4, config data API là cơ chế chuẩn; với Spring Cloud hiện nay client khai báo spring.config.import dạng configserver:... thay vì dựa vào bootstrap context đời cũ.",
        "options": [
          "Tạo thư mục bootstrap riêng không cần import",
          "Copy file cấu hình vào từng service lúc build",
          "Đọc cấu hình qua biến môi trường duy nhất",
          "Dùng khóa spring.config.import trỏ tới Config Server"
        ],
        "question": "Cách khai báo được khuyến nghị hiện nay để Config Client lấy cấu hình từ Config Server là gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Release train Spring Cloud 2023.0.x được xây dựng để tương thích với Spring Boot 3.3.x — luôn nêu rõ cặp phiên bản này khi báo cáo môi trường.",
        "options": [
          "Spring Boot 2.7.x",
          "Spring Boot 4.x",
          "Spring Boot 1.5.x",
          "Spring Boot 3.3.x"
        ],
        "question": "Spring Cloud 2023.0.x tương thích với dòng Spring Boot nào theo bài học?"
      },
      {
        "answerIndex": 1,
        "explanation": "RefreshScope tạo lại bean giữa lúc ứng dụng đang chạy. Bean dữ liệu thuần thì an toàn; bean giữ pool, connection hoặc cache ấm có thể gây hành vi khó lường.",
        "options": [
          "Làm tăng kích thước image",
          "Bean bị hủy và tạo lại khi refresh, nguy hiểm nếu bean giữ state hoặc tài nguyên như connection",
          "Bắt buộc phải dùng Kafka",
          "Không tương thích với Actuator"
        ],
        "question": "Trade-off chính của @RefreshScope là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Datasource và connection pool là tài nguyên hạ tầng có vòng đời riêng; thay đổi chúng cần rolling restart có kiểm soát, không phải refresh nóng.",
        "options": [
          "Thông điệp bảo trì hiển thị cho người dùng",
          "Feature flag bật tắt đổi quà",
          "URL và pool size của các datasource HikariCP",
          "Số ngày báo trước khi điểm hết hạn"
        ],
        "question": "Nhóm cấu hình nào KHÔNG nên kỳ vọng refresh động tại Nova Loyalty?"
      },
      {
        "answerIndex": 1,
        "explanation": "Fail-fast giúp lỗi cấu hình lộ ra ngay lúc khởi động thay vì âm thầm chạy sai môi trường — đặc biệt nguy hiểm nếu giá trị mặc định trỏ về dev.",
        "options": [
          "Service khởi động nhanh hơn bình thường",
          "Service dừng khởi động nếu không lấy được cấu hình bắt buộc thay vì chạy với giá trị mặc định sai",
          "Config Server trả lỗi 404 cho mọi request",
          "Client bỏ qua mọi profile"
        ],
        "question": "Fail-fast trong Config Client có ý nghĩa gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Lịch sử Git gần như không thể xóa sạch bí mật đã commit. Secret cần hệ thống chuyên dụng với vòng đời và quyền truy cập riêng.",
        "options": [
          "Commit secret plaintext vì repo là private",
          "Mã hóa qua loa rồi commit cả khóa giải mã cùng chỗ",
          "Không đưa secret thật lên Git; dùng Kubernetes Secret hoặc hệ thống quản lý secret chuyên dụng inject lúc runtime",
          "Đổi tên file thành .hidden là đủ an toàn"
        ],
        "question": "Đâu là cách xử lý secret đúng khi dùng Config Server với backend Git?"
      },
      {
        "answerIndex": 1,
        "explanation": "Label mặc định thường là branch chính; client có thể yêu cầu label cụ thể để ghim vào một trạng thái cấu hình đã kiểm chứng.",
        "options": [
          "Tên developer",
          "Branch hoặc tag của repository cấu hình",
          "Số thứ tự của service",
          "Region triển khai"
        ],
        "question": "Label trong Config Server thường ánh xạ tới khái niệm nào của backend Git?"
      },
      {
        "answerIndex": 1,
        "explanation": "Actuator env cho thấy property source nào đang thắng và giá trị hiệu lực, giúp gỡ lỗi drift cấu hình có bằng chứng thay vì đoán.",
        "options": [
          "Đoán qua tên file",
          "Dùng Actuator endpoint env để xem nguồn và giá trị của từng khóa",
          "Chỉ nhìn log dòng đầu tiên",
          "Hỏi người deploy"
        ],
        "question": "Làm sao kiểm chứng cấu hình hiệu lực sau khi service khởi động?"
      },
      {
        "answerIndex": 1,
        "explanation": "Retry có backoff chỉ xử lý sự cố thoáng qua. Nếu Config Server nằm trên đường khởi động của mọi service, nó vẫn cần được chạy ở chế độ sẵn sàng cao.",
        "options": [
          "Thay thế hoàn toàn nhu cầu chạy Config Server sẵn sàng cao",
          "Chống dao động mạng ngắn khi nhiều service khởi động đồng loạt, dùng backoff để tránh dồn dập",
          "Tự động sửa cấu hình sai",
          "Cho phép bỏ qua fail-fast"
        ],
        "question": "Retry khi lấy cấu hình lúc khởi động có tác dụng gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Một điểm quản lý duy nhất kèm lịch sử versioning giúp phát hiện và truy vết thay đổi cấu hình — vấn đề lớn nhất khi cấu hình rải rác theo từng repo.",
        "options": [
          "Xóa bỏ nhu cầu dùng profile",
          "Giảm drift giữa môi trường và có truy vết thay đổi cấu hình qua versioning của backend",
          "Tự động sinh code nghiệp vụ",
          "Thay thế hoàn toàn CI/CD"
        ],
        "question": "Khi số service tăng, lợi ích cốt lõi của quản lý cấu hình tập trung là gì?"
      }
    ]
  },
  "m10-spring-cloud-gateway-vs-kong": {
    "checklist": [
      "Định nghĩa được route gồm id, URI, predicate và filter trong Spring Cloud Gateway.",
      "Viết được route bằng YAML và bằng RouteLocator Java cho cùng một nhu cầu.",
      "So sánh được Spring Cloud Gateway và Kong trên ít nhất 4 trục kiến trúc/vận hành.",
      "Giải thích được vì sao không được đưa logic nghiệp vụ loyalty vào gateway.",
      "Mô tả được bài toán SNAT làm mất client IP và vai trò có điều kiện của header chuyển tiếp.",
      "Đưa ra được quyết định gateway cho Nova Loyalty kèm điều kiện đảo ngược quyết định."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "Predicate quyết định route có khớp request hay không (path, header, method...); filter mới là thành phần biến đổi request/response trên đường đi.",
        "options": [
          "Filter quyết định route có khớp request hay không",
          "Predicate tự gọi xuống backend",
          "Cả hai đều chỉ dùng để ghi log",
          "Predicate quyết định route có khớp request hay không, filter biến đổi request/response"
        ],
        "question": "Trong Spring Cloud Gateway, predicate và filter khác nhau ở điểm nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "Nova Loyalty dùng ba nhóm tiền tố /v4/gs, /v4/os, /v4/ws phía sau gateway — đây là dữ kiện gốc để thiết kế predicate.",
        "options": [
          "/api/v1/*",
          "/loyalty/** duy nhất cho mọi service",
          "Không có tiền tố cố định",
          "/v4/{gs,os,ws}/* phân theo nhóm service"
        ],
        "question": "Tiền tố định tuyến hiện tại của Nova Loyalty tại gateway là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Thực hiện I/O chặn trên luồng reactive sẽ chiếm giữ event loop và làm sụp thông lượng — lỗi kinh điển khi viết custom filter.",
        "options": [
          "Filter thực hiện lời gọi chặn (blocking) trên luồng reactive",
          "Filter dùng quá nhiều bộ nhớ cache",
          "Filter có tên dài",
          "Filter được khai báo bằng YAML thay vì Java"
        ],
        "question": "Sai lầm nghiêm trọng nhất khi viết custom filter cho gateway reactive là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Kong chạy độc lập khỏi JVM và hệ sinh thái cấu hình của service, phục vụ tốt kiến trúc đa ngôn ngữ nhưng thêm một stack vận hành riêng.",
        "options": [
          "Kong là thư viện Java chạy trong cùng JVM với service",
          "Kong chỉ hoạt động với Spring Boot",
          "Kong là gateway độc lập với hệ sinh thái plugin và cấu hình riêng, không gắn với ngôn ngữ của service",
          "Kong thay thế hoàn toàn load balancer"
        ],
        "question": "Điểm khác biệt nền tảng của Kong so với Spring Cloud Gateway là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Chỉ header từ các proxy đã kiểm soát mới đáng tin; client có thể tự bịa header nếu gateway tin mọi nguồn — lỗ hổng kinh điển khi xử lý X-Forwarded-For.",
        "options": [
          "Luôn tin vì header này không thể giả mạo",
          "Chỉ tin khi request đến qua đúng chuỗi proxy tin cậy đã cấu hình",
          "Bỏ qua hoàn toàn và cấm mọi proxy",
          "Dùng địa chỉ của gateway làm client IP"
        ],
        "question": "Nên xử lý header X-Forwarded-For thế nào khi có SNAT phía sau load balancer?"
      },
      {
        "answerIndex": 2,
        "explanation": "Route khai báo bằng Java có thể được kiểm thử như code thường và tái sử dụng predicate tùy biến — đổi lại route bớt trực quan với người vận hành.",
        "options": [
          "YAML luôn nhanh hơn Java",
          "Java bắt buộc cho mọi route",
          "Java phù hợp khi cần logic khớp phức tạp và unit test cho route",
          "YAML không được Spring Cloud Gateway hỗ trợ"
        ],
        "question": "Khi nào định tuyến bằng Java RouteLocator phù hợp hơn YAML?"
      },
      {
        "answerIndex": 0,
        "explanation": "Cộng điểm, quy đổi quà là luật nghiệp vụ thuộc service; gateway chỉ nên giữ routing, auth ở edge và các quan tâm cắt ngang thuần kỹ thuật.",
        "options": [
          "Đúng vậy — gateway chứa luật nghiệp vụ sẽ thành điểm nghẽn thay đổi và deploy",
          "Đúng, và nên cộng điểm ngay tại gateway cho nhanh",
          "Sai hoàn toàn, gateway không bao giờ được chứa bất kỳ filter nào",
          "Chỉ sai khi dùng Kong"
        ],
        "question": "Vì sao không nên đặt luật cộng điểm/đổi quà vào gateway?"
      },
      {
        "answerIndex": 1,
        "explanation": "SNAT nằm ở tầng mạng/load balancer phía trước gateway. Thay gateway mà không xử lý chuỗi proxy và header thì địa chỉ nguồn vẫn là của thiết bị mạng.",
        "options": [
          "Đúng, gateway mới sẽ tự khôi phục client IP",
          "Sai — mất client IP do SNAT là bài toán của cả chuỗi proxy/LB, không tự hết khi đổi gateway",
          "Đúng nếu bật thêm Actuator",
          "Sai vì Kafka sẽ khôi phục IP"
        ],
        "question": "Khẳng định 'đổi sang Spring Cloud Gateway sẽ tự sửa lỗi mất client IP' đúng hay sai?"
      },
      {
        "answerIndex": 2,
        "explanation": "Khi hệ sinh thái gồm nhiều ngôn ngữ/stack, một gateway độc lập như Kong thường thắng thế so với gateway gắn chặt vào Spring.",
        "options": [
          "Toàn bộ backend là Java và route cần đi cùng pipeline test của service",
          "Team muốn viết filter bằng Java",
          "Hệ thống có nhiều stack ngoài Java và cần plugin edge có sẵn phong phú, vận hành độc lập",
          "Chỉ có một service duy nhất"
        ],
        "question": "Trường hợp nào nghiêng về giữ Kong cho Nova Loyalty?"
      },
      {
        "answerIndex": 1,
        "explanation": "Migrate gateway chạm vào mọi đường vào của hệ thống — rủi ro cao. Quyết định cần dữ kiện vận hành thật và điều kiện đảo ngược rõ ràng, không dựa trên sở thích.",
        "options": [
          "Hỏi ý kiến cộng đồng rồi chọn theo đa số",
          "Có bằng chứng về nhu cầu thực tế, chi phí vận hành hai lựa chọn và điều kiện đảo ngược quyết định",
          "Chọn công nghệ mới hơn theo năm phát hành",
          "Chọn theo ngôn ngữ của gateway"
        ],
        "question": "Quyết định gateway nên dựa trên cơ sở nào?"
      }
    ]
  },
  "m11-deployment-service-ingress-probes": {
    "checklist": [
      "Viết được Deployment, Service, Ingress hoàn chỉnh với selector và nhãn khớp nhau.",
      "Phân biệt được hậu quả khi readiness thất bại so với khi liveness thất bại.",
      "Nối được probes tới đúng health group liveness và readiness của Actuator.",
      "Giải thích được vì sao liveness không được kiểm tra phụ thuộc bên ngoài như database.",
      "Suy ra được tham số thời gian của probe từ hành vi khởi động thật của ứng dụng.",
      "Thiết kế được readiness hợp lý cho service có nhiều datasource như Nova Loyalty."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "Readiness thất bại chỉ rút pod khỏi danh sách nhận traffic của Service. Liveness thất bại liên tục mới khiến Kubernetes giết và tạo lại container.",
        "options": [
          "Pod bị giết và tạo lại ngay",
          "Toàn bộ Deployment bị xóa",
          "Ingress tự động đổi route sang service khác",
          "Pod bị rút khỏi danh sách nhận traffic của Service nhưng không bị giết"
        ],
        "question": "Khi readiness probe thất bại, điều gì xảy ra với pod?"
      },
      {
        "answerIndex": 3,
        "explanation": "Health group liveness của Actuator chỉ phản ánh trạng thái sống nội tại của ứng dụng — đúng thứ liveness probe cần, không lẫn phụ thuộc bên ngoài.",
        "options": [
          "Nhóm health tổng hợp mọi phụ thuộc",
          "Nhóm metrics",
          "Nhóm info",
          "Nhóm liveness chỉ phản ánh trạng thái sống nội tại của ứng dụng"
        ],
        "question": "Liveness probe nên trỏ tới health group nào của Actuator?"
      },
      {
        "answerIndex": 0,
        "explanation": "Đó là sự cố oan kinh điển: một sự cố phụ thuộc bị khuếch đại thành sự cố toàn hệ vì mọi pod đều bị giết cùng lúc và không pod nào kịp phục vụ kể cả khi database hồi phục.",
        "options": [
          "Đúng — mọi pod bị giết dây chuyền khi database chập chờn, biến sự cố phụ thuộc thành sự cố toàn hệ thống",
          "Sai — đây là cách làm được khuyến nghị",
          "Đúng — nhưng chỉ khi dùng Ingress",
          "Sai — liveness không bao giờ khởi động lại container"
        ],
        "question": "Khẳng định 'đặt liveness kiểm tra database sẽ gây khởi động lại dây chuyền' đúng hay sai?"
      },
      {
        "answerIndex": 1,
        "explanation": "Startup probe bảo vệ giai đoạn khởi động: chừng nào nó chưa thành công, các probe khác chưa bắt đầu đếm thất bại — sạch hơn việc nới lỏng liveness cho mọi giai đoạn.",
        "options": [
          "Tăng số replica",
          "Startup probe — nó vô hiệu các probe khác cho tới khi ứng dụng khởi động xong lần đầu",
          "Cho pod nhiều RAM hơn",
          "Dùng Ingress thay cho Service"
        ],
        "question": "Cơ chế nào của Kubernetes sinh ra để bảo vệ ứng dụng khởi động chậm?"
      },
      {
        "answerIndex": 2,
        "explanation": "Nova Loyalty phân nhóm API theo tiền tố /v4/gs, /v4/os, /v4/ws phía sau gateway/ingress — manifest phải ánh xạ đúng các tiền tố này.",
        "options": [
          "/api/points/**",
          "/internal/**",
          "/v4/os/** cho nhóm online service (cùng họ với /v4/gs và /v4/ws)",
          "/health/**"
        ],
        "question": "Tiền tố Ingress nào khớp với kiến trúc hiện tại của Nova Loyalty?"
      },
      {
        "answerIndex": 1,
        "explanation": "Service định tuyến tới pod qua selector. Lệch nhãn nghĩa là không có đầu cuối nào phía sau Service dù pod vẫn chạy — kiểm tra danh sách đầu cuối là bước chẩn đoán đầu tiên.",
        "options": [
          "Sai phiên bản API của Ingress",
          "Selector của Service không khớp nhãn trên pod template",
          "Thiếu biến môi trường timezone",
          "Image chưa được đẩy lên registry"
        ],
        "question": "Pod chạy khỏe nhưng Service không có đầu cuối nào — nguyên nhân cấu hình kinh điển nhất là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Readiness nên phản ánh các phụ thuộc mà thiếu nó request chắc chắn thất bại, ví dụ datasource core. Kiểm tra cả các datasource phụ trợ sẽ rút traffic của service chính vì lỗi không liên quan.",
        "options": [
          "Không kiểm tra phụ thuộc nào cả",
          "Kiểm tra toàn bộ 5 datasource trong mọi trường hợp",
          "Kiểm tra các phụ thuộc trọng yếu cho luồng nghiệp vụ của service đó, ví dụ datasource core với service điểm",
          "Chỉ kiểm tra dung lượng đĩa"
        ],
        "question": "Readiness của service điểm tại Nova Loyalty nên kiểm tra điều gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Thời gian phát hiện treo tối đa xấp xỉ độ trễ ban đầu cộng tích của chu kỳ kiểm tra với ngưỡng thất bại — con số phải được suy ra và ghi lại khi thiết kế probe.",
        "options": [
          "Chỉ phụ thuộc vào số replica",
          "Bởi độ trễ ban đầu, chu kỳ kiểm tra và ngưỡng số lần thất bại liên tiếp",
          "Chỉ phụ thuộc vào kích thước image",
          "Không thể suy ra từ manifest"
        ],
        "question": "Thời gian để liveness phát hiện một pod treo được quyết định bởi đâu?"
      },
      {
        "answerIndex": 2,
        "explanation": "Thuật ngữ đúng trong Kubernetes là đầu cuối (endpoints) của Service. Selector rỗng hoặc lệch nhãn là nguyên nhân hàng đầu khiến danh sách này trống.",
        "options": [
          "Danh sách node của cluster",
          "Danh sách image trong registry",
          "Danh sách đầu cuối (endpoints) mà Service đang định tuyến tới",
          "Danh sách secret của namespace"
        ],
        "question": "Khi điều tra lỗi Service không nhận traffic, cần kiểm tra danh sách nào đầu tiên?"
      },
      {
        "answerIndex": 0,
        "explanation": "Deployment đảm bảo trạng thái mong muốn về số replica và thực hiện rolling update khi template thay đổi; Service và Ingress không quản lý vòng đời pod.",
        "options": [
          "Đúng — Deployment đảm bảo số replica và thực thi rolling update khi template thay đổi",
          "Sai — Service mới quản lý vòng đời pod",
          "Đúng — nhưng chỉ cho ứng dụng không trạng thái dạng cron",
          "Sai — Ingress quản lý vòng đời pod"
        ],
        "question": "Khẳng định 'Deployment quản lý vòng đời và số lượng pod' đúng hay sai?"
      }
    ]
  },
  "m11-dockerfile-multi-stage-layered-jar": {
    "checklist": [
      "Giải thích được lợi ích của multi-stage build đối với kích thước và an toàn của image.",
      "Kể được bốn lớp của layered jar và thứ tự copy đúng vào image runtime.",
      "Viết được Dockerfile multi-stage dùng layertools với người dùng không đặc quyền.",
      "Giải thích được vì sao entrypoint phải ở dạng exec để Java nhận trực tiếp SIGTERM.",
      "Dự đoán được layer nào thay đổi khi chỉ sửa code ứng dụng.",
      "Nêu được cách kiểm chứng image cuối không chứa công cụ build, mã nguồn và không chạy bằng root."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "Stage cuối chỉ chứa JRE tối thiểu và artifact cần chạy, không mang theo JDK đầy đủ, Maven hay mã nguồn — nhỏ hơn và ít bề mặt tấn công hơn.",
        "options": [
          "Vì image cuối chứa nhiều công cụ hơn",
          "Vì multi-stage tự nén file jar",
          "Vì Docker bỏ qua các layer của stage build",
          "Vì stage runtime chỉ chứa JRE tối thiểu và artifact, tách khỏi công cụ build"
        ],
        "question": "Vì sao multi-stage build cho image runtime nhỏ và an toàn hơn?"
      },
      {
        "answerIndex": 3,
        "explanation": "Spring Boot chia jar thành dependencies, snapshot dependencies, loader và application. Lớp application chứa code của bạn và thay đổi thường xuyên nhất nên copy sau cùng.",
        "options": [
          "Chỉ một lớp duy nhất chứa tất cả",
          "Hai lớp: code và config",
          "Mỗi dependency là một lớp riêng",
          "Bốn lớp: dependencies, loader, snapshot dependencies và application"
        ],
        "question": "Layered jar của Spring Boot gồm những lớp nào?"
      },
      {
        "answerIndex": 0,
        "explanation": "Docker cache theo layer theo thứ tự: thay đổi ở một layer làm vô hiệu các layer phía sau nó. Copy layer ổn định trước giúp chúng được giữ trong cache.",
        "options": [
          "Đúng — layer ít thay đổi phải copy trước, layer application copy sau cùng",
          "Sai — thứ tự copy không ảnh hưởng cache",
          "Đúng — nhưng phải copy application trước tiên",
          "Sai — chỉ cần copy đúng một lần là đủ"
        ],
        "question": "Thứ tự copy các layer vào image cuối ảnh hưởng thế nào tới cache?"
      },
      {
        "answerIndex": 1,
        "explanation": "Entrypoint dạng mảng JSON chạy Java như tiến trình chính (PID 1 trong container) nên tín hiệu của Kubernetes tới thẳng Java.",
        "options": [
          "Để Dockerfile ngắn hơn",
          "Để Java là tiến trình chính và nhận trực tiếp tín hiệu như SIGTERM",
          "Để shell có thể ghi log đẹp hơn",
          "Vì dạng chuỗi không được Docker hỗ trợ"
        ],
        "question": "Vì sao entrypoint nên viết ở dạng exec (mảng JSON)?"
      },
      {
        "answerIndex": 2,
        "explanation": "Layertools là chế độ tích hợp trong chính Spring Boot launcher, dùng để list và extract các layer của jar ngay trong Dockerfile.",
        "options": [
          "Một plugin của Kubernetes",
          "Một daemon riêng chạy cạnh container",
          "Chế độ của Spring Boot launcher dùng để liệt kê và trích xuất các layer của file jar",
          "Một tính năng của Maven giúp tải dependency"
        ],
        "question": "Layertools trong hệ sinh thái Spring Boot là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Chạy bằng người dùng chuyên dụng không đặc quyền giảm thiệt hại khi ứng dụng bị khai thác; đây là thực hành bảo mật nền tảng cho container.",
        "options": [
          "Chỉ mang tính hình thức",
          "Giảm mức độ thiệt hại nếu ứng dụng bị khai thác, theo nguyên tắc đặc quyền tối thiểu",
          "Giúp ứng dụng chạy nhanh hơn",
          "Bắt buộc để Docker build thành công"
        ],
        "question": "Việc tạo người dùng không đặc quyền trong image có ý nghĩa gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Bản thân file jar không thay đổi: điểm khác là Dockerfile tách artifact thành các thư mục layer rồi copy từng phần, thay vì copy nguyên khối vào một layer.",
        "options": [
          "Layered jar nén tốt hơn nhiều lần",
          "Layered jar không cần JRE để chạy",
          "Dockerfile trích xuất jar thành các thư mục layer và copy từng layer để tận dụng cache",
          "Layered jar chỉ chạy được trên Kubernetes"
        ],
        "question": "Khác biệt thực tế của cách làm layered jar so với copy nguyên jar là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Base image runtime nên là JRE 21 tối thiểu từ nhà cung cấp đáng tin cậy và được vá thường xuyên — JDK đầy đủ chỉ thuộc về stage build.",
        "options": [
          "Đúng — JRE 21 tối thiểu, được vá thường xuyên, không chứa công cụ build",
          "Sai — phải dùng JDK đầy đủ ở runtime để debug",
          "Đúng — nhưng nên dùng image hệ điều hành đầy đủ nhất có thể",
          "Sai — base image không ảnh hưởng tới bảo mật"
        ],
        "question": "Stage runtime nên dùng base image nào cho Nova Loyalty trên Java 21?"
      },
      {
        "answerIndex": 1,
        "explanation": "Module khóa phiên bản ở Java 21 và Spring Boot 3.3.x; Dockerfile phải bám đúng cặp phiên bản này ở cả stage build và runtime.",
        "options": [
          "Java 8 và Spring Boot 2.7",
          "Java 21 và Spring Boot 3.3.x",
          "Java 17 và Spring Boot 3.0",
          "Bất kỳ phiên bản nào mới nhất tại thời điểm build"
        ],
        "question": "Cặp phiên bản nền tảng của nền tảng học này là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "src chứa mã nguồn chỉ thuộc về stage build. Image cuối chứa mã nguồn vừa phình to vừa lộ tài sản trí tuệ và có thể chứa dữ liệu nhạy cảm.",
        "options": [
          "Để tăng tốc độ build",
          "Vì mã nguồn giúp debug ở production",
          "Vì image production chỉ nên chứa những gì cần để chạy; mã nguồn làm tăng kích thước và lộ bề mặt không cần thiết",
          "Vì Docker cấm copy thư mục src"
        ],
        "question": "Vì sao không nên copy thư mục mã nguồn vào stage runtime?"
      }
    ]
  },
  "m11-hpa-configmap-secret": {
    "checklist": [
      "Viết được HPA theo CPU với min/max replica và cửa sổ ổn định khi giảm.",
      "Giải thích được vì sao HPA cần resources.requests để tính tỷ lệ sử dụng.",
      "Phân biệt được ConfigMap và Secret cùng hai cách đưa vào pod.",
      "Nêu rõ giới hạn bảo mật thật của Secret và các lớp bảo vệ bổ sung cần có.",
      "Giải thích được khác biệt giữa cập nhật file mount và việc ứng dụng tự nạp lại cấu hình.",
      "Thiết kế được mô hình một image cho mọi môi trường tại Nova Loyalty."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "Tỷ lệ sử dụng CPU của HPA được tính so với requests đã khai báo. Không có requests, tỷ lệ không xác định được và HPA không co giãn.",
        "options": [
          "Thiếu Ingress",
          "Số replica ban đầu quá ít",
          "Thiếu Secret trong namespace",
          "Chưa khai báo resources.requests cho CPU trong spec của pod"
        ],
        "question": "HPA theo CPU sẽ không hoạt động nếu thiếu điều kiện nào?"
      },
      {
        "answerIndex": 3,
        "explanation": "Base64 chỉ là cách trình bày dữ liệu nhị phân dưới dạng văn bản. Ai đọc được đối tượng Secret đều giải mã được ngay — bảo mật thật đến từ quyền truy cập, mã hóa lúc nghỉ và kỷ luật vận hành.",
        "options": [
          "Được mã hóa mạnh đầu cuối",
          "Không thể đọc được nếu không có khóa riêng của ứng dụng",
          "Tự động bị xóa sau khi pod đọc",
          "Chỉ được mã hóa dạng base64 — ai đọc được đối tượng đều xem được nội dung"
        ],
        "question": "Mức bảo vệ mặc định của dữ liệu trong Kubernetes Secret là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Kubernetes cập nhật nội dung file được mount từ ConfigMap theo thời gian, nhưng ứng dụng đang chạy không tự đọc lại nếu không có cơ chế refresh/nạp lại chủ đích.",
        "options": [
          "Đúng — file được cập nhật dần, nhưng ứng dụng vẫn cần cơ chế nạp lại chủ đích mới áp dụng giá trị mới",
          "Sai — file không bao giờ được cập nhật",
          "Đúng — và Spring Boot luôn tự nạp lại ngay lập tức",
          "Sai — biến môi trường cũng tự cập nhật theo"
        ],
        "question": "Khẳng định 'đổi ConfigMap qua file mount là ứng dụng tự áp dụng ngay' đúng hay sai?"
      },
      {
        "answerIndex": 1,
        "explanation": "Credential của các datasource tại Nova Loyalty là dữ liệu nhạy cảm điển hình thuộc về Secret, tách khỏi ConfigMap chứa cấu hình vận hành thông thường.",
        "options": [
          "ConfigMap vì tiện sửa",
          "Secret, với quyền đọc bị siết chặt và không in ra log",
          "Biến môi trường ghi cứng trong Dockerfile",
          "Trong file cấu hình commit cùng mã nguồn"
        ],
        "question": "Mật khẩu của datasource core nên nằm ở đâu?"
      },
      {
        "answerIndex": 2,
        "explanation": "Cửa sổ ổn định khi giảm giúp HPA chờ tín hiệu thấp bền vững trước khi cắt replica, tránh giật cục tăng/giảm liên tục theo dao động ngắn hạn.",
        "options": [
          "Để tăng replica nhanh hơn",
          "Để tiết kiệm bộ nhớ của chính HPA",
          "Để tránh giảm replica giật cục theo dao động ngắn hạn của metric",
          "Để tắt hoàn toàn việc giảm replica"
        ],
        "question": "Cửa sổ ổn định (stabilization window) khi giảm replica có tác dụng gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Một image bất biến được kiểm chứng một lần rồi chạy ở mọi môi trường mới đảm bảo 'test ở staging' có ý nghĩa với production. Cấu hình khác nhau đi qua ConfigMap/Secret.",
        "options": [
          "Mỗi môi trường build một image riêng cho chắc chắn",
          "Build một image bất biến cho mọi môi trường; cấu hình theo môi trường đi qua ConfigMap và Secret",
          "Chỉ cần một image cho production, các môi trường khác tùy ý",
          "Nhúng cả ba bộ cấu hình vào image rồi chọn bằng tên file"
        ],
        "question": "Nguyên tắc 'build một lần, deploy mọi nơi' phát biểu điều gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Service có thể nghẽn vì pool kết nối cạn hoặc hàng đợi dài trong khi CPU thấp. Metric đúng phải bám nút thắt thật, có thể cần metric tùy biến như số request đang xử lý.",
        "options": [
          "HPA theo CPU luôn đủ cho mọi ứng dụng",
          "CPU thấp đồng nghĩa hệ thống đang nhàn",
          "CPU có thể vẫn thấp khi nút thắt nằm ở pool kết nối hoặc hàng đợi — cần quan sát nút thắt thật và cân nhắc metric tùy biến",
          "Chỉ cần tăng max replica là giải quyết mọi nút thắt"
        ],
        "question": "Vì sao HPA theo CPU có thể không đủ cho một service Spring Boot?"
      },
      {
        "answerIndex": 1,
        "explanation": "Tại Nova Loyalty, credential của cả 5 datasource (core, gift, report, legacy, audit) đều là dữ liệu nhạy cảm và thuộc về Secret theo từng môi trường.",
        "options": [
          "Chỉ datasource core vì các datasource khác không quan trọng",
          "Cả 5 datasource: core, gift, report, legacy và audit",
          "Không có datasource nào cần Secret",
          "Chỉ datasource legacy"
        ],
        "question": "Những credential datasource nào của Nova Loyalty cần đi qua Secret?"
      },
      {
        "answerIndex": 2,
        "explanation": "SPRING_PROFILES_ACTIVE là cách chuẩn để kích hoạt profile của Spring Boot qua biến môi trường trong container.",
        "options": [
          "Đổi tên image theo profile",
          "Mount thêm một thư mục rỗng",
          "Đặt biến môi trường SPRING_PROFILES_ACTIVE trong spec của pod",
          "Sửa file cấu hình trong image đang chạy"
        ],
        "question": "Cách kích hoạt Spring profile trong container trên Kubernetes là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "maxReplicas là trần bảo vệ chi phí và bảo vệ cả các hệ thống phía sau (như database) khỏi bị chính cơ chế co giãn khuếch đại tải.",
        "options": [
          "Đúng — nó là trần chi phí và cũng bảo vệ các hệ thống phía sau khỏi bị quá tải bởi chính việc tăng replica",
          "Sai — maxReplicas càng lớn càng luôn tốt",
          "Đúng — nhưng chỉ có tác dụng về mặt hiển thị",
          "Sai — HPA bỏ qua maxReplicas khi tải cao"
        ],
        "question": "Khẳng định 'maxReplicas là một trần bảo vệ chứ không chỉ là con số kỹ thuật' đúng hay sai?"
      }
    ]
  },
  "m11-jvm-flags-trong-container": {
    "checklist": [
      "Phân biệt được phạm vi áp dụng của JAVA_TOOL_OPTIONS và JDK_JAVA_OPTIONS.",
      "Giải thích được cơ chế JVM nhận biết giới hạn bộ nhớ của container trên Java 21.",
      "Cấu hình được heap bằng MaxRAMPercentage và nêu được lý do tránh ghim cứng giá trị tuyệt đối.",
      "Mô tả được hiện tượng OOMKilled và cách phân biệt với lỗi hết heap của JVM.",
      "Nêu được biện pháp chuẩn hóa timezone cho nghiệp vụ theo giờ Asia/Saigon.",
      "Nhận diện được triệu chứng khởi động chậm liên quan tới nguồn entropy."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "MaxRAMPercentage suy ra heap từ giới hạn RAM của container nên cùng một cấu hình chạy đúng ở nhiều môi trường có limit khác nhau.",
        "options": [
          "Đặt -Xmx bằng đúng số RAM của máy chủ vật lý",
          "Không đặt gì và để JVM dùng mặc định của máy chủ vật lý",
          "Đặt heap bằng tổng RAM của cả node Kubernetes",
          "Dùng MaxRAMPercentage để heap là một tỷ lệ của RAM container"
        ],
        "question": "Cách đặt heap bền vững nhất khi limit của container thay đổi giữa các môi trường?"
      },
      {
        "answerIndex": 3,
        "explanation": "OOMKilled là việc nhân hệ điều hành giết tiến trình vượt limit của container. Khác với lỗi hết heap, nó thường không để lại ngoại lệ Java trong log.",
        "options": [
          "JVM tự ném ngoại lệ hết heap",
          "Ứng dụng ghi log lỗi rồi tự thoát",
          "Kubernetes khởi động lại node",
          "Tiến trình bị nhân hệ điều hành giết vì tổng bộ nhớ vượt giới hạn của container"
        ],
        "question": "OOMKilled trong Kubernetes nghĩa là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "JAVA_TOOL_OPTIONS được mọi tiến trình Java trong môi trường đọc, kể cả công cụ; JDK_JAVA_OPTIONS tập trung cho riêng lệnh java launcher nên sạch hơn cho ứng dụng.",
        "options": [
          "Đúng — JAVA_TOOL_OPTIONS áp dụng cho mọi tiến trình Java, JDK_JAVA_OPTIONS chỉ cho lệnh java launcher",
          "Sai — cả hai hoàn toàn giống hệt nhau",
          "Đúng — nhưng JAVA_TOOL_OPTIONS chỉ dùng cho Maven",
          "Sai — JDK_JAVA_OPTIONS áp dụng cho mọi tiến trình kể cả không phải Java"
        ],
        "question": "Khẳng định về JAVA_TOOL_OPTIONS và JDK_JAVA_OPTIONS nào là đúng?"
      },
      {
        "answerIndex": 1,
        "explanation": "Nova Loyalty tính điểm hết hạn và báo cáo theo giờ Việt Nam. Container mặc định UTC sẽ gây sai lệch dữ liệu lặng lẽ nếu không chuẩn hóa timezone tường minh.",
        "options": [
          "UTC vì container luôn mặc định UTC và không đổi được",
          "Asia/Saigon đặt tường minh cho JVM, nhất quán với quy ước lưu trữ ở database",
          "Giờ của máy của developer",
          "Không cần quan tâm timezone khi đã dùng kiểu dữ liệu có múi giờ"
        ],
        "question": "Timezone nào cần được đặt tường minh cho service của Nova Loyalty?"
      },
      {
        "answerIndex": 2,
        "explanation": "Ngoài heap còn metaspace, thread stack, direct buffer của các client như Kafka và vùng nhớ native. Nhiều datasource và pool tại Nova Loyalty khiến phần này đáng kể.",
        "options": [
          "Chỉ heap mới tốn RAM thật",
          "Ngoài heap không tồn tại trong container",
          "Metaspace, thread stack, bộ đệm trực tiếp và bộ nhớ native cũng nằm trong giới hạn của container",
          "Kubernetes tự cấp thêm RAM cho phần ngoài heap"
        ],
        "question": "Vì sao heap không được chiếm 100 phần trăm RAM của container?"
      },
      {
        "answerIndex": 1,
        "explanation": "Các bản JDK hiện đại mặc định đọc giới hạn từ cơ chế container của hệ điều hành, thay vì đọc thông số của máy chủ vật lý như thời kỳ đầu.",
        "options": [
          "JVM không bao giờ biết về container",
          "JVM trên Java 21 mặc định nhận biết container và đọc giới hạn CPU/bộ nhớ của container",
          "Phải cài thêm agent riêng mới nhận biết được",
          "Chỉ nhận biết khi chạy trên một cloud cụ thể"
        ],
        "question": "Hành vi nhận biết container của JVM trên Java 21 là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Treo ở giai đoạn khởi tạo bảo mật mà không có lỗi rõ ràng là dấu hiệu kinh điển của việc chờ entropy. Cần xác minh theo tài liệu JDK thay vì áp dụng mẹo truyền miệng.",
        "options": [
          "Thiếu Actuator",
          "Sai timezone",
          "Nguồn entropy khan hiếm khiến thao tác ngẫu nhiên an toàn bị chặn chờ",
          "Hết hạn ngạch của rate limiter"
        ],
        "question": "Triệu chứng nào gợi ý vấn đề entropy khi khởi động trong container?"
      },
      {
        "answerIndex": 1,
        "explanation": "Công cụ in flags của JVM cho thấy giá trị hiệu lực cuối cùng sau mọi lớp ghi đè — bằng chứng tin cậy nhất khi điều tra cấu hình JVM.",
        "options": [
          "Đoán qua Dockerfile",
          "Dùng công cụ in cờ hiệu lực của JVM (ví dụ PrintFlagsFinal) để xem giá trị cuối cùng đang áp dụng",
          "Nhìn vào kích thước file jar",
          "Hỏi người viết Dockerfile"
        ],
        "question": "Cách kiểm chứng cờ JVM đang hiệu lực một cách đáng tin cậy nhất là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Đó là bài học khóa phiên bản xuyên suốt nền tảng: Java 21 đi cùng Spring Boot 3.3.x. Dockerfile và cờ JVM phải bám cặp này.",
        "options": [
          "Java 11 với Boot 2.7",
          "Java 17 với Boot 3.2",
          "Java 21 với Boot 3.3.x",
          "Java 22 với Boot 4.x"
        ],
        "question": "Theo chuẩn của nền tảng học này, cặp Java và Spring Boot đang dùng là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Khi cùng một tham số xuất hiện ở nhiều kênh, kênh tường minh trên dòng lệnh thường có tiếng nói cuối cùng — nhưng hãy verify với docs của bản JDK đang dùng vì bài học đã cảnh báo chi tiết này.",
        "options": [
          "Đúng theo nguyên tắc chung — đối số tường minh trên dòng lệnh thường có ưu tiên cuối cùng, cần đối chiếu docs của bản JDK",
          "Sai — biến môi trường luôn thắng mọi thứ",
          "Đúng — và Dockerfile luôn thắng dòng lệnh",
          "Sai — không bao giờ xảy ra ghi đè"
        ],
        "question": "Nguyên tắc chung về ưu tiên khi cùng một cờ xuất hiện ở nhiều nơi?"
      }
    ]
  },
  "m11-prestop-graceful-shutdown-k8s": {
    "checklist": [
      "Vẽ được chuỗi sự kiện đầy đủ khi pod bị xóa, từ rút đầu cuối tới SIGKILL.",
      "Giải thích được vai trò chờ lan truyền của hook preStop dạng ngủ ngắn.",
      "Phát biểu được bất đẳng thức ngân sách: preStop cộng draining cộng đệm phải nằm trong terminationGracePeriodSeconds.",
      "Cấu hình được server.shutdown graceful và thời gian chờ tắt theo giai đoạn ở Spring Boot.",
      "Căn chỉnh được manifest cho ngân sách draining 75 giây của consumer CRM tại Nova Loyalty.",
      "Nêu được vì sao entrypoint dạng exec là điều kiện để SIGTERM tới được tiến trình Java."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "75 giây là ngân sách draining ở tầng ứng dụng của Nova Loyalty cho consumer CRM (ngừng poll mới, xử lý xong message đang dở, commit offset) — dữ kiện gốc xuyên suốt Module 06 và bài này.",
        "options": [
          "Thời gian build image tối đa",
          "Thời gian timeout mặc định của Kubernetes",
          "Thời gian chờ của liveness probe",
          "Ngân sách draining ở tầng ứng dụng của consumer CRM tại Nova Loyalty kể từ tín hiệu tắt"
        ],
        "question": "Con số 75 giây ở Nova Loyalty gắn với điều gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Cả hook preStop và quá trình tắt của ứng dụng đều chạy trong cửa sổ terminationGracePeriodSeconds. Nó là trần tổng, không phải thời gian cộng thêm sau preStop.",
        "options": [
          "Chỉ tính từ sau khi preStop chạy xong",
          "Được cộng thêm vào thời gian draining của ứng dụng",
          "Không liên quan tới preStop",
          "Là tổng ngân sách chứa cả thời gian chạy preStop lẫn thời gian tắt của ứng dụng trước khi SIGKILL xuất hiện"
        ],
        "question": "Mối quan hệ giữa preStop và terminationGracePeriodSeconds là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Việc rút pod khỏi danh sách đầu cuối cần thời gian lan truyền tới các thành phần định tuyến. Ngủ ngắn ở preStop giúp traffic mới gần như ngừng hẳn trước khi ứng dụng nhận SIGTERM.",
        "options": [
          "Để JVM có thời gian khởi động GC",
          "Để việc rút pod khỏi danh sách đầu cuối kịp lan truyền, tránh request mới bay vào pod sắp tắt",
          "Để tiết kiệm chi phí hạ tầng",
          "Vì Kubernetes bắt buộc mọi hook phải ngủ"
        ],
        "question": "Vì sao preStop của web service thường là một lệnh ngủ ngắn?"
      },
      {
        "answerIndex": 2,
        "explanation": "server.shutdown graceful khiến máy chủ web ngừng nhận kết nối mới nhưng chờ request đang xử lý hoàn tất trong giới hạn giai đoạn vòng đời.",
        "options": [
          "server.port đổi sang cổng khác",
          "Ứng dụng từ chối mọi request ngay khi nhận tín hiệu, kể cả đang xử lý dở",
          "Máy chủ ngừng nhận kết nối mới nhưng chờ request đang xử lý hoàn tất — đó là server.shutdown ở chế độ graceful của Spring Boot",
          "Kafka tự động commit mọi offset"
        ],
        "question": "Chế độ tắt từ tốn của Spring Boot làm gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Thiếu ngân sách, pod bị SIGKILL giữa chừng: offset Kafka chưa commit nên message bị xử lý lại. Idempotency cứu dữ liệu nhưng cái giá là xử lý trùng không cần thiết sau mỗi lần deploy.",
        "options": [
          "Không có hậu quả gì",
          "Consumer bị giết cứng trước khi commit offset, message bị xử lý lại hàng loạt ở instance khác",
          "Kafka tự xóa topic",
          "Pod không bao giờ bị xóa nữa"
        ],
        "question": "Hậu quả nếu terminationGracePeriodSeconds nhỏ hơn ngân sách draining 75 giây?"
      },
      {
        "answerIndex": 0,
        "explanation": "Shell làm tiến trình chính sẽ nhận tín hiệu thay cho Java và thường không chuyển tiếp đúng cách — lỗi đã được cảnh báo từ bài Dockerfile với entrypoint dạng exec.",
        "options": [
          "Đúng — shell là tiến trình chính nên nhận tín hiệu thay Java và thường không chuyển tiếp đúng cách",
          "Sai — shell luôn chuyển tiếp hoàn hảo",
          "Đúng — nhưng chỉ đúng với consumer Kafka",
          "Sai — SIGTERM luôn tới mọi tiến trình con"
        ],
        "question": "Khẳng định 'entrypoint qua shell có thể khiến Java không nhận được SIGTERM' đúng hay sai?"
      },
      {
        "answerIndex": 2,
        "explanation": "10 cộng 75 cộng 15 bằng 100 giây — đúng con số trong manifest mẫu của bài. Đặt đúng 75 sẽ khiến phần preStop ăn mất thời gian draining thật.",
        "options": [
          "75 giây",
          "85 giây",
          "100 giây",
          "Không giới hạn"
        ],
        "question": "Với preStop 10 giây, draining 75 giây và đệm 15 giây, terminationGracePeriodSeconds tối thiểu là bao nhiêu?"
      },
      {
        "answerIndex": 1,
        "explanation": "Mốc đáng tin duy nhất là diễn tập tắt thật trên môi trường giống production, đo thời gian thực tế và lượng xử lý trùng — manifest đúng cú pháp không đảm bảo đúng hành vi.",
        "options": [
          "Đọc lại manifest ba lần",
          "Diễn tập xóa pod trên môi trường giống production và đo thời gian tắt thật cùng số message bị xử lý lại",
          "Chỉ kiểm tra cú pháp YAML",
          "Hỏi team hạ tầng là đủ"
        ],
        "question": "Cách kiểm chứng đáng tin cậy nhất cho thiết kế graceful shutdown là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Phase cao khiến thành phần này dừng muộn trong chuỗi tắt của context (theo quy ước phase của SmartLifecycle) — phù hợp để điều phối việc ngừng nhận việc mới trước khi các thành phần khác đóng. Hãy đối chiếu ngữ nghĩa phase với docs khi áp dụng.",
        "options": [
          "Thứ tự khai báo bean trong file cấu hình",
          "Mức độ ưu tiên của thread",
          "Thứ tự khởi động/dừng của thành phần trong vòng đời của Spring context",
          "Số lượng replica"
        ],
        "question": "Trong SmartLifecycle, giá trị phase quyết định điều gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Kafka tại Nova Loyalty được khóa ở bản 3.8 trong toàn bộ nền tảng học — cấu hình consumer và hành vi tắt phải bám theo tài liệu của bản này.",
        "options": [
          "Đúng — nền tảng khóa Kafka ở bản 3.8",
          "Sai — Kafka ở bản 2.8",
          "Đúng — nhưng chỉ cho môi trường dev",
          "Sai — không có khóa phiên bản nào cho Kafka"
        ],
        "question": "Khẳng định 'Kafka của Nova Loyalty được khóa ở phiên bản 3.8 trong nền tảng này' đúng hay sai?"
      }
    ]
  },
  "m12-flyway-trong-pipeline": {
    "checklist": [
      "Giải thích được ba lý do migration chạy trong pipeline thay vì lúc ứng dụng khởi động.",
      "Áp dụng được quy ước đặt tên migration 14 chữ số và nguyên tắc bất biến của migration đã chạy.",
      "Mô tả được vai trò của bảng lịch sử và checksum trong kiểm chứng của Flyway.",
      "Thiết kế được thứ tự migrate cho 5 datasource và hành vi dừng ngay khi một datasource thất bại.",
      "Phát biểu được kỷ luật tương thích hai chiều cho cửa sổ giữa migrate và triển khai ứng dụng mới.",
      "Mô tả được quy trình xử lý khi migration thất bại mà không sửa tay lặng lẽ trên production."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "Chạy trong pipeline cho tính đơn điểm theo thời gian, điểm dừng rõ ràng khi lỗi và thứ tự kiểm soát được so với việc triển khai ứng dụng.",
        "options": [
          "Vì ứng dụng không thể chứa thư viện Flyway",
          "Để pipeline chạy chậm hơn cho an toàn",
          "Vì Kubernetes cấm chạy migration trong pod",
          "Để migration chạy đúng một lần bởi một tác nhân tại thời điểm xác định, tách lỗi schema khỏi lỗi ứng dụng và kiểm soát thứ tự so với triển khai"
        ],
        "question": "Lý do cốt lõi khiến Nova Loyalty chạy Flyway trong pipeline là gì?"
      },
      {
        "answerIndex": 3,
        "explanation": "Tiền tố 14 chữ số là dấu thời gian đầy đủ (năm tới giây) — thứ tự dứt khoát, tránh đụng độ số phiên bản khi nhiều người làm song song.",
        "options": [
          "Số thứ tự 2 chữ số",
          "Mã hash của nội dung file",
          "Số của ticket yêu cầu thay đổi",
          "Dấu thời gian 14 chữ số theo năm, tháng, ngày, giờ, phút, giây"
        ],
        "question": "Quy ước đặt tên migration của Nova Loyalty dùng tiền tố phiên bản nào?"
      },
      {
        "answerIndex": 0,
        "explanation": "Một khi đã áp dụng ở môi trường dùng chung, file migration là một phần của lịch sử. Sửa nó sẽ làm lệch checksum và phá vỡ tính nhất quán giữa các môi trường.",
        "options": [
          "Đúng — migration đã chạy là bất biến; thay đổi phải đi qua một migration mới",
          "Sai — có thể sửa nếu thay đổi nhỏ",
          "Đúng — nhưng chỉ áp dụng cho datasource core",
          "Sai — chỉ tên file là bất biến, nội dung sửa được"
        ],
        "question": "Khẳng định 'migration đã chạy thì không được sửa nội dung' đúng hay sai?"
      },
      {
        "answerIndex": 1,
        "explanation": "Flyway đối chiếu checksum của file hiện tại với giá trị đã ghi lúc áp dụng. Lệch checksum là bằng chứng một file đã chạy bị can thiệp và quá trình phải dừng.",
        "options": [
          "Dung lượng database vượt ngưỡng",
          "Checksum của file migration hiện tại không khớp với checksum đã ghi trong bảng lịch sử khi áp dụng",
          "Tên file chứa ký tự đặc biệt",
          "Số lượng migration vượt giới hạn"
        ],
        "question": "Lỗi lệch checksum của Flyway báo hiệu điều gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "5 datasource của Nova Loyalty là core, gift, report, legacy và audit — không dùng JTA, mỗi datasource có tập migration và bảng lịch sử riêng.",
        "options": [
          "core, gift, report, billing, search",
          "core, gift, cache, legacy, audit",
          "core, gift, report, legacy, audit",
          "core, crm, report, legacy, audit"
        ],
        "question": "Năm datasource của Nova Loyalty là những datasource nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Dừng ngay là hành vi đúng: tiếp tục sẽ tạo ra trạng thái nửa vời giữa các datasource và che giấu điểm gãy thật cần điều tra trước khi đi tiếp.",
        "options": [
          "Bỏ qua và tiếp tục các datasource còn lại",
          "Dừng toàn bộ bước migrate, xác định trạng thái thật của datasource gãy và không triển khai ứng dụng mới",
          "Tự động chạy ngược mọi migration đã xong",
          "Đánh dấu pipeline thành công để triển khai kịp tiến độ"
        ],
        "question": "Khi migrate cho một datasource thất bại giữa chừng, pipeline nên làm gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Đó là kỷ luật tương thích hai chiều: schema mới phải phục vụ được cả ứng dụng cũ trong cửa sổ triển khai. Thay đổi phá vỡ phải chia nhiều bước qua nhiều bản phát hành.",
        "options": [
          "Ứng dụng mới được triển khai trước migration",
          "Không tồn tại cửa sổ như vậy",
          "Ứng dụng cũ vẫn chạy trên schema mới — migration bắt buộc phải tương thích ngược với phiên bản đang chạy",
          "Kubernetes tự đồng bộ hai phía"
        ],
        "question": "Cửa sổ giữa lúc migrate xong và lúc ứng dụng mới lên chạy đặt ra yêu cầu gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Thêm cột cho phép rỗng, thêm bảng mới và thêm chỉ mục là các thay đổi cộng thêm không phá vỡ code đang chạy — thuộc nhóm an toàn cho cửa sổ triển khai.",
        "options": [
          "Đổi tên cột mà code đang dùng",
          "Thêm cột mới cho phép rỗng và thêm chỉ mục",
          "Xóa cột không còn thấy trong giao diện",
          "Thắt chặt ràng buộc không rỗng lên cột đang có dữ liệu rỗng"
        ],
        "question": "Thay đổi schema nào an toàn nhất cho cửa sổ triển khai?"
      },
      {
        "answerIndex": 2,
        "explanation": "Không có nút khôi phục schema vạn năng. Xử lý đúng gồm xác định trạng thái thật, sửa bằng migration mới hoặc quy trình được ghi chép, và lưu lại bài học cho team.",
        "options": [
          "Xóa bảng lịch sử của Flyway cho sạch",
          "Sửa tay trực tiếp trên production rồi quên đi",
          "Xác định trạng thái thật của database, dừng triển khai, xử lý bằng migration mới hoặc quy trình sửa chữa được ghi chép",
          "Chạy lại pipeline nhiều lần cho tới khi tự qua"
        ],
        "question": "Cách xử lý đúng khi một migration gãy ở production là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Flyway tắt phía ứng dụng tránh hai chủ sở hữu cùng chạy migration. Tại Nova Loyalty, chủ sở hữu duy nhất là pipeline — cần tắt tường minh thay vì trông vào mặc định.",
        "options": [
          "Đúng — hai chủ sở hữu cùng migrate gây tranh khóa và áp dụng hai đường; phải chốt pipeline là chủ sở hữu duy nhất và tắt phía ứng dụng",
          "Sai — chạy hai nơi càng an toàn",
          "Đúng — nhưng chỉ cần tắt ở môi trường dev",
          "Sai — tranh khóa không thể xảy ra"
        ],
        "question": "Khẳng định 'pipeline và ứng dụng cùng tự migrate là nguy hiểm' đúng hay sai?"
      }
    ]
  },
  "m12-github-actions-pipeline": {
    "checklist": [
      "Giải thích được mô hình workflow, job, step và runner của GitHub Actions.",
      "Viết được workflow tách job test và job build image với quan hệ phụ thuộc rõ ràng.",
      "Thực hành được kỷ luật secret: chỉ qua kho secret, không bao giờ in ra log.",
      "Khai báo được quyền tối thiểu cho token tự động của workflow.",
      "Ghim được các action bên thứ ba ở phiên bản cụ thể đã kiểm chứng.",
      "Thiết kế được tag và digest truy vết được cho image, phục vụ triển khai và rollback."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "Mặc định mọi job chạy song song. Muốn image chỉ sinh ra từ code đã qua kiểm thử, job build phải khai báo phụ thuộc vào job test để chỉ chạy khi test thành công.",
        "options": [
          "Thứ tự viết trong file quyết định thứ tự chạy",
          "Job có tên ngắn hơn chạy trước",
          "Job build luôn tự chờ job test",
          "Quan hệ phụ thuộc được khai báo giữa các job (job sau chỉ chạy khi job trước thành công)"
        ],
        "question": "Điều gì đảm bảo job build image chỉ chạy sau khi job test đạt?"
      },
      {
        "answerIndex": 3,
        "explanation": "Secret chỉ được cấp qua kho secret và cơ chế truyền chuyên dụng. In ra log hay ghi cứng vào file đều làm lộ credential cho bất kỳ ai đọc được log hoặc repo.",
        "options": [
          "Ghi vào file workflow nhưng đặt trong comment",
          "In ra log một lần để debug rồi xóa sau",
          "Chia sẻ qua kênh chat của team cho tiện",
          "Chỉ lấy từ kho secret của GitHub và truyền qua cơ chế dành riêng, không bao giờ in ra log"
        ],
        "question": "Cách xử lý secret đúng trong GitHub Actions là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Ghim phiên bản cố định khiến hành vi của pipeline không bị thay đổi lặng lẽ bởi một bản phát hành mới của action phía nhà cung cấp.",
        "options": [
          "Để action tải nhanh hơn",
          "Để hành vi pipeline không bị thay đổi lặng lẽ khi nhà cung cấp phát hành bản mới",
          "Vì GitHub bắt buộc về mặt cú pháp",
          "Để log hiển thị đẹp hơn"
        ],
        "question": "Vì sao phải ghim phiên bản cụ thể cho action bên thứ ba?"
      },
      {
        "answerIndex": 2,
        "explanation": "Digest là định danh theo nội dung, bất biến. Tag có thể bị trỏ lại; rollback và triển khai an toàn phải bám vào digest của đúng image đã kiểm chứng.",
        "options": [
          "Tên ngắn gọn",
          "Định danh theo nội dung, bất biến, trỏ tới đúng image đã build và kiểm chứng",
          "Số thứ tự của lần chạy workflow",
          "Tên của người bấm nút triển khai"
        ],
        "question": "Digest của image có giá trị gì đối với triển khai và rollback?"
      },
      {
        "answerIndex": 0,
        "explanation": "Theo nguyên tắc đặc quyền tối thiểu, token chỉ có các quyền thật sự cần cho công việc của workflow — ví dụ đọc mã nguồn và ghi package khi đẩy image.",
        "options": [
          "Đúng — chỉ cấp đúng các quyền workflow cần, ví dụ đọc mã nguồn và ghi package khi cần đẩy image",
          "Sai — nên cấp toàn quyền để tránh lỗi thiếu quyền",
          "Đúng — nhưng quyền mặc định vốn đã tối thiểu sẵn",
          "Sai — token tự động không có khái niệm quyền"
        ],
        "question": "Khẳng định 'token tự động của workflow nên được cấp quyền tối thiểu' đúng hay sai?"
      },
      {
        "answerIndex": 1,
        "explanation": "Khóa theo nội dung của các file POM đảm bảo cache chỉ được tái dùng khi tập dependency không đổi; dependency đổi thì cache tự vô hiệu.",
        "options": [
          "Ngày chạy pipeline",
          "Nội dung của các file pom.xml để cache vô hiệu đúng khi dependency thay đổi",
          "Tên của developer",
          "Số lượng module trong dự án"
        ],
        "question": "Cache của Maven trong pipeline nên khóa theo điều gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Tag theo commit truy vết được image về đúng mã nguồn đã kiểm thử; tag phiên bản phục vụ cho phát hành chính thức. Cả hai cùng trỏ một digest trong một lần phát hành đúng chuẩn.",
        "options": [
          "Chỉ dùng một nhãn latest cho mọi lần build",
          "Đặt tên theo cảm hứng của người release",
          "Tag theo mã commit cho mọi lần build, cộng tag phiên bản khi phát hành, và ghi lại digest",
          "Đặt tên theo ngày tháng là đủ"
        ],
        "question": "Chiến lược tag image đúng chuẩn cho Nova Loyalty là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Job build và push cần điều kiện để phân biệt sự kiện push lên nhánh chính (được đẩy image phát hành) với pull request (chỉ kiểm chứng, không đẩy bản phát hành).",
        "options": [
          "Vì pull request không chạy được job nào cả",
          "Để pull request chỉ kiểm chứng mà không đẩy image phát hành lên registry",
          "Để tiết kiệm dung lượng của runner",
          "Vì Docker không build được trong pull request"
        ],
        "question": "Vì sao job đẩy image cần điều kiện phân biệt push và pull request?"
      },
      {
        "answerIndex": 2,
        "explanation": "Một lệnh Maven tới pha verify đã bao phủ compile, test, package và các kiểm tra ở verify — đúng như phân tích chồng pha ở bài Maven lifecycle.",
        "options": [
          "mvn -B test package verify deploy",
          "mvn -B clean install -DskipTests",
          "mvn -B verify",
          "Không có lệnh nào, phải gọi từng pha riêng"
        ],
        "question": "Lệnh Maven nào trong pipeline bao phủ cả biên dịch, unit test và kiểm chứng?"
      },
      {
        "answerIndex": 1,
        "explanation": "Theo tài liệu chính thức, thư mục .github/workflows trong repository là nơi chứa các file workflow YAML của GitHub Actions.",
        "options": [
          "Thư mục gốc của repository với tên bất kỳ",
          "Thư mục dành riêng cho workflow trong cây thư mục của GitHub trong repository",
          "Trong thư mục target sau khi build",
          "Trong phần cài đặt của organization, không nằm trong repo"
        ],
        "question": "File workflow của GitHub Actions nằm ở đâu trong repository?"
      }
    ]
  },
  "m12-maven-build-lifecycle": {
    "checklist": [
      "Kể đúng thứ tự các pha chính của vòng đời mặc định và giải thích được tính chồng pha.",
      "Phân biệt được pha, plugin và goal trong mô hình build của Maven.",
      "Mô tả được vai trò của parent POM trong quản lý phiên bản tập trung cho multi-module.",
      "Giải thích được thứ tự build giữa các module do reactor suy ra từ quan hệ phụ thuộc.",
      "Dự đoán được artifact sinh ra ở pha package cho một service Spring Boot.",
      "Nêu được lý do coi CI là trọng tài cuối cùng khi kết quả build local và CI khác nhau."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "Vòng đời của Maven chạy tuần tự từ đầu tới pha được yêu cầu. Yêu cầu verify là đã bao gồm validate, compile, test và package trước nó.",
        "options": [
          "Chỉ đúng pha verify",
          "Chỉ các pha được khai báo trong pom.xml",
          "Các pha chạy song song ngẫu nhiên",
          "Mọi pha từ đầu vòng đời tới pha được yêu cầu, theo thứ tự cố định"
        ],
        "question": "Khi yêu cầu Maven chạy pha verify, điều gì thực sự diễn ra?"
      },
      {
        "answerIndex": 3,
        "explanation": "Pha chỉ là cột mốc trong vòng đời; plugin thực thi công việc cụ thể thông qua các goal được gắn vào pha.",
        "options": [
          "Ba tên gọi khác nhau của cùng một khái niệm",
          "Pha là file cấu hình, goal là thư mục đích",
          "Goal luôn chạy trước pha",
          "Pha là cột mốc của vòng đời, plugin là thành phần làm việc thật qua các goal gắn vào pha"
        ],
        "question": "Quan hệ giữa pha (phase), plugin và goal là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Pha package đóng gói artifact phân phối được; với Spring Boot, plugin của Boot tái đóng gói thành jar chạy được kèm dependency.",
        "options": [
          "validate",
          "package",
          "compile",
          "deploy"
        ],
        "question": "Pha nào đóng gói ứng dụng thành artifact phân phối được?"
      },
      {
        "answerIndex": 2,
        "explanation": "Quản lý phiên bản tập trung ở parent là cách khóa đồng loạt Java 21 và Spring Boot 3.3.x cho mọi service của Nova Loyalty tại một điểm duy nhất.",
        "options": [
          "Từng module con tự chọn phiên bản riêng cho linh hoạt",
          "Chỉ khai báo trong Dockerfile",
          "Parent POM quản lý tập trung phiên bản qua quản lý dependency và quản lý plugin; module con không ghi lại phiên bản",
          "Phiên bản được quyết bởi kho lưu trữ local"
        ],
        "question": "Trong dự án multi-module, phiên bản dependency nên được quản lý ở đâu?"
      },
      {
        "answerIndex": 0,
        "explanation": "Reactor sắp xếp thứ tự build dựa trên quan hệ phụ thuộc giữa các module trong cùng dự án, đảm bảo module nền được build trước.",
        "options": [
          "Đúng — reactor suy ra thứ tự từ quan hệ phụ thuộc giữa các module",
          "Sai — thứ tự build là ngẫu nhiên",
          "Đúng — nhưng chỉ khi mọi module có cùng tên",
          "Sai — developer phải tự chạy từng module theo đúng thứ tự"
        ],
        "question": "Khẳng định 'Maven reactor tự suy ra thứ tự build giữa các module' đúng hay sai?"
      },
      {
        "answerIndex": 1,
        "explanation": "Vì pha sau bao hàm mọi pha trước, bước verify tự chạy lại test. Thiết kế CI chồng lệnh kiểu này là nguyên nhân phổ biến làm CI chậm gần gấp đôi.",
        "options": [
          "Do Maven luôn chạy test hai lần theo thiết kế",
          "Vì bước chạy tới pha cao hơn tự thực thi lại mọi pha trước nó, gồm cả pha test",
          "Do CI tự nhân đôi mọi bước",
          "Do test bị khai báo hai lần trong pom.xml"
        ],
        "question": "Vì sao một pipeline có bước mvn test rồi mvn verify lại chạy unit test hai lần?"
      },
      {
        "answerIndex": 2,
        "explanation": "Pha install cài artifact vào kho local của máy build phục vụ các dự án khác trên cùng máy. Deploy mới là bước đưa lên kho từ xa để chia sẻ rộng rãi.",
        "options": [
          "deploy",
          "verify",
          "install",
          "package"
        ],
        "question": "Pha nào cài artifact vào kho lưu trữ local?"
      },
      {
        "answerIndex": 1,
        "explanation": "Artifact lạ hoặc cũ trong kho local làm kết quả build phụ thuộc vào lịch sử của từng máy. Môi trường sạch của CI cho kết quả khách quan và có tính tái lập.",
        "options": [
          "Vì máy CI luôn mạnh hơn máy cá nhân",
          "Vì CI dùng môi trường sạch, không bị kho local nhiễm artifact lạ chi phối kết quả",
          "Vì developer thường quên lưu file",
          "Vì Maven trên CI chạy phiên bản khác"
        ],
        "question": "Vì sao CI được coi là trọng tài cuối cùng cho kết quả build?"
      },
      {
        "answerIndex": 2,
        "explanation": "nova-common là thư viện dùng chung; nova-points và nova-gift phụ thuộc vào nó nên reactor xếp nó lên đầu chuỗi build.",
        "options": [
          "nova-points vì nó chứa API chính",
          "nova-gift vì tên của nó đứng trước theo bảng chữ cái",
          "nova-common vì các module còn lại phụ thuộc vào nó",
          "Cả ba build đồng thời không theo thứ tự"
        ],
        "question": "Trong cấu trúc Nova Loyalty ở bài, module nào được build đầu tiên?"
      },
      {
        "answerIndex": 1,
        "explanation": "Kiểm tra rẻ và nhanh phải gắn vào pha sớm để lỗi lộ ra ngay; gắn ở pha muộn khiến pipeline lãng phí toàn bộ thời gian của các pha trước chỉ để phát hiện một lỗi định dạng.",
        "options": [
          "Gắn mọi kiểm tra vào pha deploy cho chắc chắn",
          "Gắn vào pha sớm nhất có thể thực thi nó, để lỗi rẻ tiền lộ ra trước khi tốn thời gian cho các pha sau",
          "Gắn vào pha test vì đó là pha duy nhất chạy được kiểm tra",
          "Không gắn vào pha nào, chạy thủ công ngoài Maven"
        ],
        "question": "Nên gắn một kiểm tra định dạng mã nguồn rẻ tiền vào pha nào?"
      }
    ]
  },
  "m12-versioning-rollback": {
    "checklist": [
      "Phân biệt được phiên bản API, phiên bản artifact theo semantic versioning và định danh build theo commit/digest.",
      "Giải thích được khi nào tăng major, minor và patch cho một service.",
      "Thực thi được rollback bằng rollout undo theo revision và bằng cách ghim lại digest đã biết là tốt.",
      "Giải thích được vì sao database không có thao tác rollback tổng quát như ứng dụng không trạng thái.",
      "Phát biểu được chiến lược sửa tiến và vai trò của tương thích hai chiều đối với khả năng quay lui.",
      "Soạn được biên bản phát hành có sẵn đường lui cho một đợt phát hành của Nova Loyalty."
    ],
    "quiz": [
      {
        "answerIndex": 3,
        "explanation": "Thay đổi phá vỡ hợp đồng mà bên phụ thuộc đang dùng là lý do tăng major theo semantic versioning — bất kể quy mô code thay đổi lớn hay nhỏ.",
        "options": [
          "Tăng patch vì chỉ bỏ một trường",
          "Tăng minor vì thêm/bớt trường đều là thay đổi nhỏ",
          "Không cần tăng phiên bản nếu có ghi chú phát hành",
          "Tăng major vì đây là thay đổi phá vỡ tính tương thích của hợp đồng API"
        ],
        "question": "Bỏ một trường khỏi phản hồi API mà đối tác đang dùng cần tăng thành phần nào của semantic versioning?"
      },
      {
        "answerIndex": 3,
        "explanation": "Digest được suy ra từ nội dung của image nên bất biến. Tag là con trỏ có thể được gán lại cho nội dung khác bởi một lần build sau.",
        "options": [
          "Tag dài hơn digest",
          "Tag được ký số còn digest thì không",
          "Không có khác biệt thực tế",
          "Digest là định danh theo nội dung và bất biến; tag có thể bị trỏ lại sang nội dung khác"
        ],
        "question": "Khác biệt quyết định giữa tag và digest của image là gì?"
      },
      {
        "answerIndex": 1,
        "explanation": "Cơ chế quay về revision trước là thao tác rollback chuẩn của Deployment trên Kubernetes, đưa pod về đúng template của revision được chọn.",
        "options": [
          "Xóa toàn bộ namespace rồi tạo lại",
          "Dùng cơ chế quay về revision trước của Deployment (rollout undo)",
          "Sửa trực tiếp từng pod đang chạy",
          "Tăng số replica của bản mới"
        ],
        "question": "Cách quay lui một Deployment trên Kubernetes về bản trước là gì?"
      },
      {
        "answerIndex": 2,
        "explanation": "Dữ liệu tích lũy và có thể đã bị bản mới biến đổi theo cách bản cũ không hiểu. Không tồn tại hoàn tác tổng quát cho trạng thái, nên chiến lược chủ đạo là sửa tiến.",
        "options": [
          "Vì database luôn sao lưu mỗi giây",
          "Vì rollback database thực ra dễ hơn ứng dụng",
          "Vì dữ liệu mang trạng thái tích lũy và dữ liệu do bản mới ghi ra có thể không tương thích với bản cũ — không có hoàn tác tổng quát an toàn",
          "Vì Kubernetes cấm chạm vào database"
        ],
        "question": "Vì sao rollback của database khác hẳn rollback của ứng dụng?"
      },
      {
        "answerIndex": 1,
        "explanation": "Fix forward giữ hệ thống ở trạng thái dữ liệu hiện tại và vá bằng thay đổi mới có kiểm soát, thay vì cố quay ngược trạng thái — lựa chọn chuẩn khi hỏng nằm ở tầng dữ liệu.",
        "options": [
          "Quay toàn hệ thống về bản sao lưu cũ nhất",
          "Sửa tiến: giữ nguyên trạng thái dữ liệu hiện tại và vá bằng một migration hoặc bản phát hành mới có kiểm soát",
          "Tắt toàn bộ dịch vụ vô thời hạn",
          "Xóa dữ liệu phát sinh sau phát hành"
        ],
        "question": "Chiến lược sửa tiến (fix forward) nghĩa là gì?"
      },
      {
        "answerIndex": 0,
        "explanation": "Tương thích hai chiều là điều kiện tiên quyết: bản ứng dụng cũ phải sống được với schema mới thì việc quay lui ứng dụng mới thật sự là đường lui an toàn.",
        "options": [
          "Đúng — bản cũ chỉ quay lui an toàn khi schema mới vẫn tương thích với nó",
          "Sai — rollback ứng dụng không liên quan gì tới schema",
          "Đúng — nhưng chỉ đúng với datasource báo cáo",
          "Sai — Kubernetes tự kiểm tra tương thích trước khi cho quay lui"
        ],
        "question": "Khẳng định 'kỷ luật tương thích hai chiều của migration là điều kiện để rollback ứng dụng an toàn' đúng hay sai?"
      },
      {
        "answerIndex": 2,
        "explanation": "revisionHistoryLimit quyết định số revision cũ được Deployment giữ lại. Giữ quá ít sẽ làm mất điểm quay lui trước khi cửa sổ quan sát sự cố kết thúc.",
        "options": [
          "Số lượng pod tối đa",
          "Thời gian chờ của probe",
          "Số revision cũ được giữ lại làm điểm quay lui cho Deployment",
          "Số lần retry của pipeline"
        ],
        "question": "Tham số giới hạn lịch sử revision của Deployment ảnh hưởng gì tới rollback?"
      },
      {
        "answerIndex": 1,
        "explanation": "Họ tiền tố /v4/* ở gateway là hợp đồng API mà đối tác phụ thuộc — khác với phiên bản artifact của từng service phía sau nó.",
        "options": [
          "Phiên bản artifact của service điểm",
          "Hợp đồng API công khai mà đối tác và các hệ thống khác phụ thuộc vào",
          "Digest của image hiện tại",
          "Phiên bản của Kubernetes đang chạy"
        ],
        "question": "Tiền tố /v4/* tại gateway của Nova Loyalty thuộc khái niệm phiên bản nào?"
      },
      {
        "answerIndex": 2,
        "explanation": "Khôi phục từ bản sao lưu đánh đổi bằng việc mất mọi dữ liệu phát sinh sau điểm sao lưu — cái giá đó chỉ đáng trả khi dữ liệu đã hỏng ở mức không sửa tiến được.",
        "options": [
          "Luôn là lựa chọn đầu tiên khi có sự cố",
          "Không bao giờ được phép dùng",
          "Là lựa chọn cuối cùng khi dữ liệu hỏng tới mức không sửa tiến được, vì nó đánh đổi bằng dữ liệu phát sinh sau điểm sao lưu",
          "Chỉ dùng cho môi trường dev"
        ],
        "question": "Khôi phục database từ bản sao lưu nên được nhìn nhận thế nào?"
      },
      {
        "answerIndex": 1,
        "explanation": "Đường lui tốt được thiết kế trước: biên bản chứa sẵn định danh bản trước và thao tác cụ thể, diễn tập định kỳ biến thao tác thành phản xạ thay vì ứng biến.",
        "options": [
          "Thuê thêm người trực đêm",
          "Có biên bản phát hành chứa sẵn đường lui cho từng đợt và diễn tập thao tác quay lui định kỳ",
          "Viết thêm tài liệu sau sự cố",
          "Tăng ngân sách hạ tầng"
        ],
        "question": "Điều gì biến rollback từ ứng biến thành thao tác vận hành bình tĩnh?"
      }
    ]
  }
};
