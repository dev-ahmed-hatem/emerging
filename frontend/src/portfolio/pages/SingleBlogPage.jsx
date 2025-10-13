import Footer from "../../portfolio/components/Shared/Footer";
import { useNavigate } from "react-router";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Hash,
  ArrowRight,
  ArrowLeft,
  Share2,
  CornerDownLeft,
  Search,
} from "lucide-react";

// ********************************************
// ألوان الهوية المعتمدة (لضمان التناسق)
// ********************************************
const PRIMARY_DARK = "#123da0"; // الأزرق الداكن
const PRIMARY_LIGHT = "#1e60e6"; // الأزرق المتوسط
const ACCENT_COLOR = "#6de7fe"; // الفيروزي الفاتح
const BACKGROUND_DEEP = "#111827"; // خلفية داكنة جداً
const CARD_BACKGROUND = "#1f2937"; // لون خلفية البطاقة
const TEXT_LIGHT = "#f9fafb"; // لون النص الأساسي
const TEXT_HINT = "#d1d5db"; // لون تلميح خفيف

// ********************************************
// بيانات الأخبار الافتراضية (تم زيادة المحتوى التفصيلي بشكل كبير للخبر الأول)
// ********************************************
const allNewsItems = [
  {
    id: 1,
    title:
      "تدشين عضوية مجلس الجمعيات الأهلية ودوره في تحقيق رؤية 2030 وتنمية القطاع غير الربحي",
    description:
      "شهد الحدث التاريخي تدشين عضوية مجلس الجمعيات الأهلية بحضور عدد من كبار المسؤولين والمشايخ. يمثل هذا التدشين نقطة تحول مفصلية في مسيرة العمل الخيري والتنسيقي على مستوى المملكة...",
    date: "9 أغسطس 2023",
    imageUrl: "/news-01.jpg",
    category: "فعاليات كبرى",
    duration: "30 دقيقة قراءة",
    isFeatured: true,
    author: "سليمان العتيبي",
    authorBio:
      "خبير استراتيجي في العمل الخيري ومتخصص في حوكمة المنظمات غير الربحية، وعضو في اللجنة الإعلامية العليا.",
    tags: ["تدشين", "جمعيات", "رؤية 2030", "تنمية", "حوكمة", "استدامة"],
    content: [
      {
        type: "paragraph",
        text: "في خطوة تاريخية نحو تعزيز الشراكة المجتمعية وتحقيق أهداف التنمية المستدامة، شهدت الرياض تدشين عضوية مجلس الجمعيات الأهلية، بحضور عدد من كبار المسؤولين والمشايخ ورؤساء الجمعيات. يمثل هذا التدشين نقطة تحول مفصلية في مسيرة العمل الخيري والتنسيقي على مستوى المملكة، حيث يفتح آفاقًا جديدة للتعاون المثمر والبناء بين القطاعات المختلفة. هذا المجلس ليس مجرد هيكل تنظيمي، بل هو مظلة جامعة تهدف لتوحيد الرؤى والجهود.",
      },

      { type: "heading", text: "الفصل الأول: أهمية الدور التنسيقي للمجلس" },
      {
        type: "paragraph",
        text: "لطالما واجه القطاع غير الربحي تحديات تنظيمية ولوجستية تتعلق بتوحيد الجهود وتوزيع الموارد بكفاءة عالية وشفافية مطلقة. هذا المجلس الجديد يأتي ليتجاوز تلك التحديات الجذرية، مقدمًا إطارًا موحدًا يضمن تكامل الأدوار ويحقق أقصى استفادة من الطاقات البشرية والمالية المتوفرة في جميع مناطق المملكة، سواء في المدن الرئيسية أو المناطق النائية. الأثر المتوقع لهذه الخطوة هو مضاعفة كفاءة الإنفاق الخيري.",
      },
      {
        type: "paragraph",
        text: "عملية التنسيق تتطلب بنية تحتية رقمية قوية، وهو ما ركز عليه المجلس في خططه الأولية. التكنولوجيا ستلعب دوراً محورياً في ربط الجمعيات، وتبادل الخبرات، وتحديد الاحتياجات بشكل فوري وموثوق. هذا التحول الرقمي يضمن سرعة الاستجابة للمتغيرات المجتمعية والاقتصادية.",
      },
      {
        type: "quote",
        text: "أكد معالي وزير الشؤون الاجتماعية أن: 'الاستدامة هي جوهر عملنا. لا يمكن أن نبني قطاعاً متيناً دون أساس قوي من الحوكمة والشفافية. هذا المجلس هو الضامن لتطبيق أعلى معايير الجودة والامتثال في كل عمل خيري يتم تحت مظلته.'",
      },

      { type: "heading", text: "الفصل الثاني: المواءمة مع مستهدفات رؤية 2030" },
      {
        type: "paragraph",
        text: "تتوافق أهداف المجلس بشكل مباشر مع المحور الثالث من رؤية 2030، والمتعلق بـ **اقتصاد مزدهر ومجتمع حيوي**. يسعى المجلس إلى رفع مساهمة القطاع غير الربحي في الناتج المحلي الإجمالي، وزيادة نسبة المتطوعين، وتحسين جودة الحياة للفئات المستهدفة. يعد هذا التكامل الحكومي والخيري نموذجًا يحتذى به عالميًا في تحقيق التنمية الشاملة.",
      },
      {
        type: "list",
        items: [
          "زيادة الناتج المحلي: العمل على رفع مساهمة القطاع الثالث من 0.9% إلى 5% بحلول 2030.",
          "تمكين العمل التطوعي: الوصول إلى مليون متطوع سنوياً من خلال تفعيل منصات التطوع الوطنية.",
          "تطوير الكفاءات: إنشاء برامج تدريبية متقدمة لأكثر من 5000 قيادي في القطاع سنوياً.",
          "الشفافية والحوكمة: تطبيق مؤشرات قياس أداء صارمة لضمان الامتثال التام للأنظمة.",
        ],
      },
      {
        type: "paragraph",
        text: "تعتبر هذه الأرقام المستهدفة طموحة وتتطلب تضافر جهود كافة الشركاء. لذا، تم تشكيل لجان فرعية متخصصة في مجالات التمويل المستدام، وتطوير الموارد البشرية، والبحث والابتكار، لضمان تحقيق هذه المستهدفات بكفاءة وفعالية.",
      },

      {
        type: "heading",
        text: "الفصل الثالث: محاور الخطة الاستراتيجية للأعوام القادمة",
      },
      {
        type: "paragraph",
        text: "كشف العرض التقديمي المفصل للخطة الاستراتيجية عن أربعة محاور رئيسية سيعمل عليها المجلس خلال السنوات الخمس القادمة. هذه المحاور صُممت بناءً على دراسات معمقة للاحتياجات المجتمعية وأفضل الممارسات الدولية في إدارة الجمعيات الأهلية.",
      },
      {
        type: "quote",
        text: "صرح أحد أعضاء مجلس الإدارة: 'لم يعد العمل الخيري عملاً ارتجالياً، بل هو علم واستثمار اجتماعي. ولذلك، كان تركيزنا على بناء القدرات المؤسسية والمالية للجمعيات بدلاً من الاكتفاء بالدعم المباشر، لنضمن استمراريتها وقدرتها على خدمة المجتمع على المدى الطويل.'",
      },
      {
        type: "paragraph",
        text: "هذا التركيز على بناء القدرات يشمل تقديم الدعم التقني لتطوير منصات التبرعات، وتوفير الاستشارات القانونية والإدارية المتخصصة. كما سيتم إطلاق برنامج 'سفراء التنمية' لتدريب القيادات الشابة وتأهيلها لتولي مناصب إدارية في القطاع.",
      },

      {
        type: "heading",
        text: "الفصل الرابع: تحديات التحول الرقمي وآليات التغلب عليها",
      },
      {
        type: "paragraph",
        text: "يشكل التحول الرقمي تحدياً وفرصة في آن واحد. التحدي يكمن في ضمان جاهزية كافة الجمعيات للتعامل مع الأنظمة الجديدة، والفرصة تكمن في مضاعفة الشفافية وسهولة الوصول للمتبرعين والمستفيدين. وللتغلب على تحدي الجاهزية، سيتم تخصيص ميزانية ضخمة لبرامج الدعم التقني وتوفير الدورات المجانية في مجال إدارة البيانات والأمن السيبراني الخاص بالمنظمات غير الربحية.",
      },
      {
        type: "list",
        items: [
          "توفير منصة سحابية موحدة لإدارة المتبرعين والمستفيدين.",
          "عقد ورش عمل شهرية للتدريب على أدوات الحوكمة الرقمية.",
          "إنشاء مركز دعم فني على مدار الساعة لجميع الجمعيات الأعضاء.",
          "إطلاق مبادرة 'الجمعية الرقمية المثالية' لتحفيز الجمعيات على التبني الكامل للتقنية.",
        ],
      },
      {
        type: "paragraph",
        text: "النجاح في هذا التحول سيجعل القطاع السعودي الرائد إقليمياً في استخدام التقنية لخدمة الأهداف الخيرية والاجتماعية. هذا النجاح مرهون بالتزام القيادات بوضع الخطط التنفيذية التفصيلية ورصد الأداء بشكل مستمر ودقيق.",
      },
      {
        type: "paragraph",
        text: "تطلب الأمر أشهرًا من العمل المتواصل والدراسات الاستشارية للوصول إلى هذا النموذج المتكامل. ونحن اليوم نشهد ثمرة هذا الجهد المضني الذي يهدف إلى خدمة المواطن والمقيم وفقاً لأعلى المعايير العالمية في التنمية الاجتماعية.",
      },

      // إضافة محتوى إضافي لضمان التمرير
      { type: "heading", text: "إطلالة على الشراكات المستقبلية الواعدة" },
      {
        type: "paragraph",
        text: "في إطار التوسع في دائرة التأثير، أعلن المجلس عن بدء مفاوضات مع كبرى الشركات الوطنية والدولية لعقد شراكات استراتيجية طويلة الأمد. هذه الشراكات لن تقتصر على الدعم المالي، بل تشمل تبادل الخبرات، وتقديم الخدمات اللوجستية، وتخصيص نسبة من المسؤولية المجتمعية لتنفيذ مشاريع نوعية ذات أثر مستدام.",
      },
      {
        type: "quote",
        text: "لا يقتصر دور القطاع الخاص على توفير الوظائف، بل يمتد ليكون شريكاً أساسياً في بناء الوطن اجتماعياً واقتصادياً. الشراكة هي مفتاحنا للمستقبل.",
      },
      {
        type: "paragraph",
        text: "ومن المنتظر أن يتم التوقيع على أولى هذه الشراكات الكبرى في الربع الأول من العام القادم، حيث ستتركز الجهود على تمويل مشاريع التدريب المهني للشباب وتمكين الأسر المنتجة، مما يخلق دورة اقتصادية إيجابية ومستدامة داخل المجتمع. هذا النموذج من الشراكات يجسد مبدأ التكامل بين القطاعات.",
      },
      {
        type: "paragraph",
        text: "لقد تم تنظيم لقاءات تعريفية مكثفة مع الجهات المانحة لتعريفها بآلية عمل المجلس والفرص الاستثمارية الاجتماعية المتاحة. وقد أبدى عدد كبير من الجهات المانحة اهتماماً بالغاً بالانضمام إلى هذه المنظومة الجديدة، ما يعد مؤشراً قوياً على نجاح المبادرة.",
      },
    ],
  },
  {
    id: 2,
    title: "برعاية أمير حائل: 'مجلس الجمعيات الأهلية شريك تنموي'",
    description:
      "برعاية كريمة، أقيم الملتقى التنسيقي الأول في حائل لتعزيز دور الجمعيات كشريك تنموي فعال...",
    date: "30 نوفمبر 2023",
    imageUrl: "/news-02.jpg",
    category: "أخبار اللجنة",
    duration: "7 دقائق قراءة",
    isPopular: true,
    author: "محمد الشمري",
    authorBio: "مختص في الإعلام الرقمي وأرشفة الأخبار.",
    tags: ["حائل", "ملتقى", "شراكة", "تنمية"],
    content: [
      {
        type: "paragraph",
        text: "الملتقى التنسيقي الأول في حائل شهد إقبالاً كبيراً، مؤكداً على أهمية العمل المشترك لخدمة المجتمع. تم خلال الملتقى استعراض الفرص والتحديات، ووضع خطط تنفيذية لتعزيز الأداء العام للجمعيات في المنطقة الشمالية، مما يضمن وصول الدعم إلى مستحقيه بأعلى كفاءة وشفافية.",
      },
    ],
  },
  {
    id: 3,
    title: "زيارة خاصة لسدارة الأعمال الاجتماعية",
    description:
      "قام وفد من اللجنة بزيارة مركز سدارة لمناقشة آفاق التعاون المشترك في خدمة القرآن وأهله...",
    date: "30 نوفمبر 2023",
    imageUrl: "/news-03.jpg",
    category: "زيارات",
    duration: "5 دقائق قراءة",
    author: "فريق التحرير",
    authorBio: "فريق متخصص في تغطية الزيارات الميدانية واللقاءات الرسمية.",
    tags: ["زيارات", "سدارة", "تعاون", "قرآن"],
    content: [
      {
        type: "paragraph",
        text: "زيارة وفد اللجنة لمركز سدارة كانت مثمرة، حيث تم الاتفاق على عدة مبادرات مشتركة تهدف إلى توسيع نطاق المستفيدين من برامج تحفيظ القرآن، وتفعيل دور التقنية في التعليم عن بُعد، بما يتماشى مع التطورات التقنية الحالية.",
      },
    ],
  },
  {
    id: 4,
    title: "بدعم وتمكين الجمعيات 'ختام الملتقى الأول'",
    description:
      "اختتام فعاليات الملتقى الذي يهدف لتمكين الجمعيات وتقديم الدعم اللازم لرفع كفاءتها الإدارية والتشغيلية...",
    date: "10 ديسمبر 2023",
    imageUrl: "/news-04.jpg",
    category: "ملتقيات",
    duration: "8 دقائق قراءة",
    author: "أحمد الزهراني",
    authorBio: "كاتب متخصص في التقارير الختامية للملتقيات والفعاليات الكبرى.",
    tags: ["ملتقيات", "دعم", "تمكين", "كفاءة"],
    content: [
      {
        type: "paragraph",
        text: "شهد حفل الختام تكريم الجمعيات الأكثر تميزاً في تطبيق معايير الحوكمة. الملتقى خرج بتوصيات مهمة تتعلق بضرورة الاستثمار في الموارد البشرية وتوفير التدريب المستمر لرفع مستوى القيادات الإدارية في القطاع، وهو ما يعد خطوة أساسية لضمان الاستدامة المالية والتشغيلية.",
      },
    ],
  },
].sort((a, b) => new Date(b.date) - new Date(a.date));

const sampleItem = allNewsItems[0]; // الخبر الذي سيتم عرضه افتراضياً (الخبر الطويل)

// ********************************************
// مكون شريط تقدم القراءة
// ********************************************
const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const scrollHandler = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    setProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-50 transition-all duration-150 shadow-lg"
      style={{
        backgroundColor: BACKGROUND_DEEP,
        boxShadow: `0 0 10px ${ACCENT_COLOR}50`,
      }}
    >
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          backgroundColor: ACCENT_COLOR,
          transition: "width 0.2s ease-out",
        }}
      />
    </div>
  );
};

// ----------------------------------------------------
// مكون عرض محتوى المقال
// ----------------------------------------------------
const ArticleContent = ({ content }) => (
  <div className="space-y-10 mt-10">
    {content.map((block, index) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p
              key={index}
              className="text-xl leading-relaxed text-justify"
              style={{ color: TEXT_HINT }}
            >
              {block.text}
            </p>
          );
        case "heading":
          return (
            <h3
              key={index}
              className="text-3xl font-extrabold pt-8 pb-4 border-b-2 mt-12"
              style={{ color: TEXT_LIGHT, borderColor: PRIMARY_LIGHT + "70" }}
            >
              {block.text}
            </h3>
          );
        case "list":
          return (
            <ul
              key={index}
              className="list-none space-y-4 pr-6 bg-gray-900/40 p-6 rounded-xl border border-gray-700"
            >
              {block.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-xl leading-relaxed"
                  style={{ color: TEXT_LIGHT }}
                >
                  <CornerDownLeft
                    size={20}
                    className="flex-shrink-0 ml-3 mt-1 transform rotate-90"
                    style={{ color: ACCENT_COLOR }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          );
        case "quote":
          return (
            <blockquote
              key={index}
              className="border-r-8 border-l-2 p-6 italic text-2xl font-light rounded-lg shadow-xl my-10"
              style={{
                borderRightColor: ACCENT_COLOR,
                borderLeftColor: PRIMARY_DARK,
                backgroundColor: CARD_BACKGROUND,
                color: TEXT_LIGHT,
              }}
            >
              <p className="leading-snug">{block.text}</p>
            </blockquote>
          );
        default:
          return null;
      }
    })}
  </div>
);

// ----------------------------------------------------
// مكون صندوق الكاتب
// ----------------------------------------------------
const AuthorBox = ({ author, authorBio }) => (
  <div
    className="mt-16 pt-8 border-t-2 border-dashed"
    style={{ borderColor: ACCENT_COLOR + "50" }}
  >
    <div
      className="p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0"
      style={{ backgroundColor: CARD_BACKGROUND }}
    >
      <div className="ml-6 flex-shrink-0">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold"
          style={{
            backgroundColor: PRIMARY_LIGHT,
            color: TEXT_LIGHT,
            border: `3px solid ${ACCENT_COLOR}`,
          }}
        >
          {author ? author.charAt(0) : "؟"}
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-1" style={{ color: ACCENT_COLOR }}>
          الكاتب: {author || "فريق التحرير"}
        </h4>
        <p className="text-lg leading-relaxed" style={{ color: TEXT_HINT }}>
          {authorBio}
        </p>
        <div className="mt-2 text-sm" style={{ color: PRIMARY_LIGHT }}>
          <span>تابع الكاتب: (قريباً)</span>
        </div>
      </div>
    </div>
  </div>
);

// ----------------------------------------------------
// مكون الأخبار ذات الصلة
// ----------------------------------------------------
const RelatedPosts = ({ currentPostId, newsItems, onSelect }) => {
  // جلب 3 أخبار عشوائية ومختلفة عن الخبر الحالي
  const related = newsItems
    .filter((item) => item.id !== currentPostId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-20 pt-8 border-t border-gray-700">
      <h3
        className="text-3xl font-extrabold mb-8"
        style={{ color: TEXT_LIGHT }}
      >
        أخبار قد تهمك
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {related.map((item) => (
          <div
            key={item.id}
            // **ملاحظة:** onSelect هنا يجب أن يكون دالة لتغيير حالة الخبر في المكون الأب
            onClick={() => onSelect(item)}
            className="p-4 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.03] shadow-lg"
            style={{ backgroundColor: CARD_BACKGROUND }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-32 object-cover rounded-lg mb-3"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/300x150/${PRIMARY_DARK.replace(
                  "#",
                  ""
                )}/${TEXT_LIGHT.replace("#", "")}?text=ذات+صلة`;
              }}
            />
            <p
              className="text-lg font-bold leading-snug line-clamp-2"
              style={{ color: ACCENT_COLOR }}
            >
              {item.title}
            </p>
            <span className="text-sm" style={{ color: TEXT_HINT }}>
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ----------------------------------------------------
// المكون الرئيسي: SingleBlogPage
// ----------------------------------------------------
/**
 * @param {Object} props
 * @param {Object} props.item - الخبر الحالي الذي سيتم عرضه.
 * @param {Function} props.onBack - دالة للعودة إلى صفحة القائمة.
 * @param {Array} props.newsItems - قائمة بجميع الأخبار لعرض الأخبار ذات الصلة.
 * @param {Function} props.onSelectPost - دالة لاختيار خبر آخر (للأخبار ذات الصلة).
 */
const SingleBlogPage = () => {
  if (!item || !item.content)
    return (
      <div
        className="w-full min-h-screen flex items-center justify-center p-8"
        style={{ backgroundColor: BACKGROUND_DEEP, color: TEXT_LIGHT }}
      >
        <p className="text-2xl">
          عفواً، لا يوجد محتوى لهذا الخبر أو لم يتم تحميله بشكل صحيح.
        </p>
      </div>
    );

  const navigate = useNavigate();

  const onBack = () => {
    navigate("/blogs");
  };

  const onBackToHome = () => {
    navigate("/");
  };

  return (
    <section
      className="w-full min-h-screen pb-16 pt-8 px-4 sm:px-6 lg:px-8"
      style={{
        direction: "rtl",
        backgroundColor: BACKGROUND_DEEP,
        fontFamily: "Inter, Tahoma, sans-serif",
        color: TEXT_LIGHT,
      }}
    >
      {/* شريط التقدم يظهر في أعلى الصفحة عند التمرير */}
      <ReadingProgressBar />

      <div className="container mx-auto max-w-4xl">
        {/* زر العودة */}
        <button
          onClick={onBack}
          className="flex items-center text-lg font-bold mb-8 mt-12 transition-colors duration-200 cursor-pointer"
          style={{ color: ACCENT_COLOR }}
        >
          <ArrowRight size={20} className="ml-2" />
          العودة إلى المدونة
        </button>

        <button
          onClick={onBackToHome}
          className="flex items-center text-lg font-bold transition-colors duration-200 cursor-pointer hover:opacity-80"
          style={{ color: ACCENT_COLOR }}
        >
          <ArrowRight size={20} className="ml-2" />
          العودة إلى الرئيسية
        </button>

        {/* 1. عنوان المقال وبياناته الوصفية */}
        <header className="mb-12">
          <span
            className="inline-block px-4 py-1 text-sm font-bold rounded-full mb-4"
            style={{ backgroundColor: ACCENT_COLOR, color: BACKGROUND_DEEP }}
          >
            {item.category}
          </span>
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{ color: TEXT_LIGHT }}
          >
            {item.title}
          </h1>

          {/* معلومات النشر والكاتب */}
          <div
            className="flex flex-wrap gap-x-6 gap-y-2 text-lg font-medium py-4 border-y border-gray-700"
            style={{ color: TEXT_HINT }}
          >
            <div className="flex items-center">
              <User
                size={20}
                className="ml-2"
                style={{ color: PRIMARY_LIGHT }}
              />
              <span className="font-bold">{item.author || "فريق التحرير"}</span>
            </div>
            <div className="flex items-center">
              <Calendar
                size={20}
                className="ml-2"
                style={{ color: PRIMARY_LIGHT }}
              />
              <span>{item.date}</span>
            </div>
            <div className="flex items-center">
              <Clock
                size={20}
                className="ml-2"
                style={{ color: PRIMARY_LIGHT }}
              />
              <span>{item.duration}</span>
            </div>
            <div className="flex items-center ml-auto">
              <Share2
                size={20}
                className="ml-2 cursor-pointer hover:opacity-80 transition-opacity"
                style={{ color: ACCENT_COLOR }}
                title="مشاركة الخبر"
              />
            </div>
          </div>
        </header>

        {/* 2. الصورة الرئيسية للمقال */}
        <figure className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-auto object-cover max-h-[600px]"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/1200x500/${PRIMARY_DARK.replace(
                "#",
                ""
              )}/${TEXT_LIGHT.replace("#", "")}?text=صورة+رئيسية+للخبر`;
            }}
          />
        </figure>

        {/* 3. محتوى المقال التفصيلي */}
        <main>
          <ArticleContent content={item.content} />
        </main>

        {/* 4. صندوق الكاتب */}
        <AuthorBox author={item.author} authorBio={item.authorBio} />

        {/* 5. الكلمات المفتاحية */}
        <div
          className="mt-10 pt-4 flex flex-wrap items-center gap-4 text-sm font-semibold border-t border-gray-800"
          style={{ color: ACCENT_COLOR }}
        >
          <Hash size={18} />
          <span>الوسوم:</span>
          {(item.tags || []).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-base transition-colors duration-200 hover:bg-gray-700"
              style={{ backgroundColor: PRIMARY_DARK, color: TEXT_LIGHT }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 6. الأخبار ذات الصلة */}
        <RelatedPosts
          currentPostId={item.id}
          newsItems={newsItems}
          onSelect={onSelectPost}
        />

        {/* زر العودة النهائي */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-bold rounded-xl transition-all duration-300"
            style={{
              backgroundColor: PRIMARY_DARK,
              color: TEXT_LIGHT,
              border: `2px solid ${ACCENT_COLOR}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = ACCENT_COLOR;
              e.currentTarget.style.color = BACKGROUND_DEEP;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = PRIMARY_DARK;
              e.currentTarget.style.color = TEXT_LIGHT;
            }}
          >
            العودة إلى جميع الأخبار
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
