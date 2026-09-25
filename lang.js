/* ============================================
   LANG.JS v14 - الملف الكامل
   ============================================ */
console.log('lang.js v14 loaded');

(function () {
  'use strict';

  var T = {
    nav_home:     { ar: 'الرئيسية',      en: 'Home',         zh: '首页' },
    nav_build:    { ar: 'بناء قارب',     en: 'Build a Boat', zh: '造船' },
    nav_weather:  { ar: 'الطقس والمد',   en: 'Weather',      zh: '天气' },
    nav_books:    { ar: 'الكتب',         en: 'Books',        zh: '书籍' },
    nav_websites: { ar: 'المواقع',       en: 'Websites',     zh: '网站' },
    nav_youtube:  { ar: 'يوتيوب',        en: 'YouTube',      zh: '视频' },
    nav_glossary: { ar: 'المصطلحات',     en: 'Glossary',     zh: '术语' },

    footer_text: { ar: 'دليل البحر والقوارب', en: 'Ships & Boats Guide', zh: '船舶与船只指南' },

    search_ph: {
      ar: 'ابحث عن مصطلح بالعربي أو الإنجليزي...',
      en: 'Search by English or Arabic...',
      zh: '按英文或阿拉伯文搜索...'
    },

    gl_h1:       { ar: 'المصطلحات البحرية', en: 'Maritime Glossary', zh: '海事术语' },
    gl_subtitle: { ar: 'قاموس عربي / إنجليزي / صيني شامل', en: 'Arabic / English / Chinese Dictionary', zh: '阿拉伯语 / 英语 / 中文词典' },
    gl_empty:    { ar: 'لا توجد نتائج مطابقة', en: 'No matching results', zh: '没有匹配的结果' },

    gl_col1:    { ar: 'الإنجليزي', en: 'English',  zh: '英文' },
    gl_col2:    { ar: 'العربي',    en: 'Arabic',   zh: '阿拉伯语' },
    gl_col3:    { ar: 'الصيني',    en: 'Chinese',  zh: '中文' },
    gl_col_cat: { ar: 'القسم',     en: 'Section',  zh: '分类' },

    sec_vessels:   { ar: 'أنواع السفن والقوارب',       en: 'Types of Ships and Boats',     zh: '船舶和小船类型' },
    sec_parts:     { ar: 'أجزاء السفينة',               en: 'Parts of a Ship',              zh: '船舶部件' },
    sec_equipment: { ar: 'المعدات والأدوات',            en: 'Equipment and Tools',          zh: '设备和工具' },
    sec_nautical:  { ar: 'المصطلحات البحرية والملاحية', en: 'Maritime and Nautical Terms',  zh: '海事与航海术语' },
    sec_crew:      { ar: 'الطاقم والوظائف',             en: 'Crew and Roles',               zh: '船员和角色' },
    sec_verbs:     { ar: 'أفعال ومصطلحات التشغيل',      en: 'Operational Verbs and Terms',  zh: '操作动词与术语' },
    sec_extra:     { ar: 'مصطلحات بحرية إضافية',        en: 'Additional Maritime Terms',    zh: '其他海事术语' },

    /* ============ INDEX ============ */
    idx_h1:       { ar: 'دليل البحر والقوارب', en: 'Ships & Boats Guide', zh: '船舶与船只指南' },
    idx_subtitle: { ar: 'رحلتك تبدأ من هنا', en: 'Your journey starts here', zh: '你的旅程从这里开始' },
    idx_hero_p: {
      ar: 'رحلتك تبدأ هنا — كل ما تحتاجه لتعلم الإبحار وبناء القوارب: من المصطلحات البحرية إلى خطوات البناء، مرورًا بالطقس والمد والجزر وأفضل المصادر التعليمية.',
      en: 'Your journey starts here — everything you need to learn sailing and boat building: from maritime terms to build steps, weather, tides, and the best educational resources.',
      zh: '你的旅程从这里开始——学习航海和造船所需的一切：从海事术语到建造步骤、天气、潮汐以及最佳教育资源。'
    },
    idx_btn_build: { ar: 'ابدأ ببناء قارب', en: 'Start Building a Boat', zh: '开始造船' },
    idx_btn_gloss: { ar: 'تصفح المصطلحات', en: 'Browse Glossary', zh: '浏览术语' },
    idx_welcome_h3: { ar: 'مرحبًا بك في عالم البحر', en: 'Welcome to the World of the Sea', zh: '欢迎来到海洋世界' },
    idx_welcome_p1: {
      ar: 'هذا الدليل الشامل يجمع لك كل ما يحتاجه المبتدئ والمحترف في عالم القوارب والإبحار. سواء كنت تحلم ببناء قاربك الأول، أو تريد تعلم قراءة الطقس قبل الإبحار، أو تبحث عن أفضل المصادر التعليمية — كل شيء هنا.',
      en: 'This comprehensive guide brings you everything a beginner or professional needs in boats and sailing. Whether you dream of building your first boat, learning to read weather, or finding the best resources, it is all here.',
      zh: '这份综合指南为您汇集了船艇和航海领域初学者和专业人士所需的一切。无论您梦想建造第一艘船、学习阅读天气，还是寻找最佳教育资源——都在这里。'
    },
    idx_welcome_p2: {
      ar: 'اختر القسم الذي يناسبك من القائمة العلوية أو من البطاقات أدناه، وابدأ رحلتك البحرية.',
      en: 'Choose a section from the top menu or the cards below, and start your maritime journey.',
      zh: '从顶部菜单或下方卡片中选择一个部分，开始您的海洋之旅。'
    },
    idx_sec_h3: { ar: 'استكشف الأقسام', en: 'Explore Sections', zh: '探索部分' },
    idx_sec_p:  { ar: 'ستة أبواب لعالم البحر', en: 'Six doors to the sea', zh: '通往海洋的六扇门' },
    idx_c_build_h:   { ar: 'كيف تبني قارب؟', en: 'How to Build a Boat?', zh: '如何造船？' },
    idx_c_build_p:   { ar: '7 خطوات عملية من اختيار النوع والمواد حتى الاختبار المائي في البحر.', en: '7 practical steps from choosing type and materials to sea trial.', zh: '从选择类型和材料到海上试验的7个实用步骤。' },
    idx_c_weather_h: { ar: 'الطقس والمد والجزر', en: 'Weather & Tides', zh: '天气与潮汐' },
    idx_c_weather_p: { ar: 'لماذا السلامة تبدأ من قراءة الطقس قبل الإبحار، وكيف تقرأ المد.', en: 'Why safety starts with reading the weather before sailing, and how to read tides.', zh: '为什么安全从出海前阅读天气开始，以及如何阅读潮汐。' },
    idx_c_books_h:   { ar: 'كتب موثوقة', en: 'Trusted Books', zh: '值得信赖的书籍' },
    idx_c_books_p:   { ar: '6 مراجع أساسية لبناء القوارب مع المؤلفين وروابط أمازون.', en: '6 essential boat building references with authors and Amazon links.', zh: '6个必备造船参考资料，附作者和亚马逊链接。' },
    idx_c_web_h:     { ar: 'مواقع تعليمية', en: 'Educational Websites', zh: '教育网站' },
    idx_c_web_p:     { ar: 'أفضل 6 منصات عالمية لتعلم بناء القوارب والصيانة البحرية.', en: 'Top 6 global platforms for boat building and marine maintenance.', zh: '学习造船和海洋维护的6大全球平台。' },
    idx_c_yt_h:      { ar: 'قنوات يوتيوب', en: 'YouTube Channels', zh: 'YouTube 频道' },
    idx_c_yt_p:      { ar: 'قنوات حقيقية متخصصة تعرض مشاريع بناء قوارب من الصفر.', en: 'Real specialized channels showing boat building projects from scratch.', zh: '真正的专业频道，展示从零开始的造船项目。' },
    idx_c_gloss_h:   { ar: 'المصطلحات البحرية', en: 'Maritime Glossary', zh: '海事术语' },
    idx_c_gloss_p:   { ar: 'قاموس كامل بالعربي والإنجليزي مع بحث فوري داخل المصطلحات.', en: 'Complete Arabic/English dictionary with instant search.', zh: '完整的阿拉伯语/英语词典，支持即时搜索。' },
    idx_link:        { ar: 'تصفح القسم ←', en: 'Browse Section →', zh: '浏览部分 →' },
    idx_fact_h3: { ar: 'حقائق بحرية', en: 'Maritime Facts', zh: '海事事实' },
    idx_fact_p:  { ar: 'أرقام تدهشك عن عالم البحار', en: 'Amazing numbers about the seas', zh: '关于海洋的惊人数字' },
    idx_f1_label: { ar: 'ساعة بين كل مدّين — تقريبًا', en: 'hours between tides — approximately', zh: '每次潮汐之间的小时数——大约' },
    idx_f2_label: { ar: 'من سطح الأرض مغطى بالمياه', en: 'of Earth surface is water', zh: '的地球表面被水覆盖' },
    idx_f3_label: { ar: 'قبل الميلاد — أول سفينة شراعية', en: 'BC — first sailing ship', zh: '公元前——第一艘帆船' },
    idx_f4_label: { ar: 'أعمق نقطة في المحيطات (خندق ماريانا)', en: 'deepest point in oceans (Mariana Trench)', zh: '海洋最深处（马里亚纳海沟）' },
    idx_quote: {
      ar: '«البحر هو المصدر الوحيد للأمل الحقيقي — إنه يعطي ولا يطلب، ويحمل من يجرؤ على ركوبه إلى عوالم لا توصف.»',
      en: 'The sea is the only source of true hope — it gives without asking, and carries those who dare to ride it to indescribable worlds.',
      zh: '海洋是真正希望的唯一源泉——它给予而不索取，将敢于驾驭它的人带往无法描述的世界。'
    },
    idx_quote_author: { ar: '— مقولة بحرية متوارثة', en: '— Inherited maritime quote', zh: '—— 传承的海事格言' },

    /* ============ BUILD ============ */
    b_h1:       { ar: 'كيف تبني قارب؟', en: 'How to Build a Boat?', zh: '如何建造一艘船？' },
    b_subtitle: { ar: '7 خطوات من الفكرة إلى الماء', en: '7 steps from idea to water', zh: '从想法到水面的7个步骤' },
    b1_t: { ar: '1. اختيار نوع القارب والغرض', en: '1. Choose boat type & purpose', zh: '1. 选择船型与用途' },
    b1_d: { ar: 'حدّد أولًا: هل القارب للصيد، للتنقل، للرياضة، أم للرحلات الطويلة؟ كل غرض يفرض تصميمًا وحجمًا ومواد مختلفة. ارسم تصورًا مبدئيًا على ورق قبل أي خطوة عملية.', en: 'First decide: is the boat for fishing, transport, sport, or long trips? Each purpose imposes a different design, size and materials. Sketch a preliminary idea on paper before any practical step.', zh: '首先决定：这艘船是用于钓鱼、运输、运动还是长途旅行？每个用途都要求不同的设计、尺寸和材料。在任何实际步骤之前，先在纸上画出初步构想。' },
    b2_t: { ar: '2. اختيار المواد المناسبة', en: '2. Choose the right materials', zh: '2. 选择合适的材料' },
    b2_d: { ar: 'الخشب (تقليدي وجميل لكن يحتاج صيانة دورية)، الألياف الزجاجية Fiberglass (الأكثر شيوعًا وسهولة)، الألمنيوم (خفيف ومتين)، أو الخشب الرقائقي المقوّى بالإيبوكسي (مناسب للمبتدئين وأقل تكلفة).', en: 'Wood (traditional, beautiful, but requires maintenance), Fiberglass (most common, easiest), Aluminum (light, durable), or epoxy-reinforced plywood (beginner-friendly, cheaper).', zh: '木材（传统、美观但需要定期维护）、玻璃纤维（最常见、最易操作）、铝材（轻便、耐用），或环氧增强胶合板（适合初学者，成本较低）。' },
    b3_t: { ar: '3. التصميم والمخططات', en: '3. Design & Plans', zh: '3. 设计与图纸' },
    b3_d: { ar: 'احصل على مخططات (Plans) جاهزة من مصادر موثوقة مثل WoodenBoat أو Chesapeake Light Craft. المخطط يحدد الأبعاد، زوايا البدن، وسمك الألواح. لا تبدأ بدون مخطط دقيق.', en: 'Get ready plans from trusted sources like WoodenBoat or Chesapeake Light Craft. The plan defines dimensions, hull angles, and plank thickness. Never start without an accurate plan.', zh: '从 WoodenBoat 或 Chesapeake Light Craft 等可靠来源获取现成的图纸。图纸决定尺寸、船体角度和木板厚度。没有准确图纸就不要开始。' },
    b4_t: { ar: '4. بناء الهيكل (Hull)', en: '4. Build the Hull', zh: '4. 建造船体' },
    b4_d: { ar: 'يُبنى الهيكل إما بطريقة القشرة (Stitch and Glue) وهي الأسهل للمبتدئين، أو القوالب (Frame) للقوارب التقليدية. تُثبَّت الألواح ثم تُلحَم بالإيبوكسي والفيبرجلاس.', en: 'The hull is built either by Stitch and Glue (easiest for beginners) or Frame method for traditional boats. Panels are fixed then welded with epoxy and fiberglass.', zh: '船体可通过缝合-粘接法（对初学者最简单）或传统船只的框架法建造。板材固定后用环氧树脂和玻璃纤维粘合。' },
    b5_t: { ar: '5. العزل والطلاء', en: '5. Sealing & Painting', zh: '5. 密封与涂漆' },
    b5_d: { ar: 'بعد إتمام الهيكل، يُعزل بالإيبوكسي من الداخل والخارج لمنع تسرّب الماء، ثم يُطلى بطبقات من الطلاء البحري المضاد للماء والأشعة فوق البنفسجية.', en: 'After completing the hull, it is sealed with epoxy inside and out to prevent water leaks, then coated with marine paint resistant to water and UV rays.', zh: '完成船体后，内外均用环氧树脂密封以防漏水，然后涂上防水防紫外的海洋漆。' },
    b6_t: { ar: '6. التركيب الداخلي والتجهيز', en: '6. Interior & Rigging', zh: '6. 内部装配' },
    b6_d: { ar: 'تركيب المقاعد، الدفة (Rudder)، المجاذيف أو المحرك، خزان الوقود، وأدوات السلامة الإلزامية كسترة النجاة والمرساة وجهاز الاتصال.', en: 'Install seats, rudder, oars or engine, fuel tank, and mandatory safety equipment like life jacket, anchor, and communication device.', zh: '安装座椅、舵、桨或发动机、油箱，以及救生衣、锚和通讯设备等必备安全装备。' },
    b7_t: { ar: '7. الاختبار المائي (Sea Trial)', en: '7. Sea Trial', zh: '7. 海上试验' },
    b7_d: { ar: 'أول إنزال للماء يكون في مياه هادئة وبحضور شخص خبير. تأكد من عدم وجود تسرّب، توازن القارب، واستجابة التوجيه قبل أي رحلة طويلة.', en: 'The first launch should be in calm water with an experienced person present. Ensure no leaks, proper balance, and steering response before any long trip.', zh: '首次下水应在平静水域并有经验丰富的人在场。在任何长途旅行前，确认无泄漏、平衡良好、转向响应正常。' },

    /* ============ WEATHER ============ */
    w_h1:       { ar: 'الطقس والمد والجزر', en: 'Weather & Tides', zh: '天气与潮汐' },
    w_subtitle: { ar: 'السلامة تبدأ من قراءة الطقس', en: 'Safety starts with weather', zh: '安全从天气开始' },
    w1_t: { ar: 'لماذا معرفة الطقس ضرورية قبل البحر؟', en: 'Why is weather knowledge essential before sea?', zh: '为什么出海前了解天气至关重要？' },
    w1_d: { ar: 'البحر لا يرحم. الرياح المفاجئة، العواصف الرعدية، والضباب قد تحوّل رحلة هادئة إلى كارثة. قراءة الطقس ليست رفاهية بل شرط أساسي للسلامة.', en: 'The sea shows no mercy. Sudden winds, thunderstorms, and fog can turn a calm trip into a disaster. Reading weather is not a luxury but a safety requirement.', zh: '大海无情。突如其来的风、雷暴和大雾可能把平静的航行变成灾难。阅读天气不是奢侈，而是安全要求。' },
    w2_t: { ar: 'سرعة الرياح واتجاهها', en: 'Wind speed & direction', zh: '风速与风向' },
    w2_d: { ar: 'الرياح فوق 20 عقدة خطيرة على القوارب الصغيرة. راقب اتجاه الريح: الرياح البرية (Offshore) تدفعك بعيدًا عن الشاطئ، والرياح البحرية (Onshore) تدفعك نحوه.', en: 'Winds above 20 knots are dangerous for small boats. Watch wind direction: offshore winds push you away from shore, onshore winds push you toward it.', zh: '超过20节的风对小船是危险的。注意风向：离岸风将您推离海岸，向岸风将您推向岸边。' },
    w3_t: { ar: 'حالة البحر (Sea State)', en: 'Sea State', zh: '海况' },
    w3_d: { ar: 'يُقاس ارتفاع الأمواج: أقل من 0.5 م = هادئ، 1-2 م = متوسط، أكثر من 2 م = خطير للقوارب الصغيرة. راقب نشرات الأرصاد البحرية بانتظام.', en: 'Wave height is measured: under 0.5m = calm, 1-2m = moderate, over 2m = dangerous for small boats. Monitor marine forecasts regularly.', zh: '浪高测量：低于0.5米=平静，1-2米=中等，超过2米=对小船危险。定期监测海洋预报。' },
    w4_t: { ar: 'الضباب والرؤية الأفقية', en: 'Fog & Visibility', zh: '雾与能见度' },
    w4_d: { ar: 'الضباب يخفي المعالم ويجعل الملاحة صعبة. لا تُبحر إذا كانت الرؤية أقل من ميل بحري دون رادار و GPS يعملان بشكل سليم.', en: 'Fog hides landmarks and makes navigation difficult. Do not sail if visibility is under one nautical mile without working radar and GPS.', zh: '雾会遮挡地标并使航行困难。如果没有正常工作的雷达和GPS，能见度低于一海里时不要出海。' },
    w5_t: { ar: 'الطقس الرعدي والعواصف', en: 'Thunderstorms', zh: '雷暴' },
    w5_d: { ar: 'العواصف الرعدية سريعة التكوّن وقد ترافقها رياح قوية وأمطار غزيرة. راقب الرادار الجوي ولا تُبحر إذا كانت هناك احتمالية رعدية.', en: 'Thunderstorms form quickly and may bring strong winds and heavy rain. Monitor weather radar and do not sail if thunderstorms are possible.', zh: '雷暴形成迅速，可能带来强风和暴雨。监测天气雷达，如果有雷暴可能就不要出海。' },
    w6_t: { ar: 'المد والجزر (Tides)', en: 'Tides', zh: '潮汐' },
    w6_d: { ar: 'المد والجزر يغيّران عمق المياه. يجب معرفة موعد المد الأعلى والأدنى قبل الإبحار، خاصة في الموانئ الضحلة والخلجان.', en: 'Tides change water depth. You must know high and low tide times before sailing, especially in shallow harbors and bays.', zh: '潮汐会改变水深。出海前必须了解涨潮和退潮时间，尤其是在浅港和海湾。' },
    w7_t: { ar: 'قاعدة الساعات الاثنتي عشرة', en: 'The Twelve Hour Rule', zh: '十二小时规则' },
    w7_d: { ar: 'المد والجزر يحدثان عادة كل 12 ساعة و25 دقيقة تقريبًا. يمكن توقّع المد التالي بمعرفة وقت المد السابق تقريبًا.', en: 'Tides usually occur every 12 hours and 25 minutes. The next tide can be predicted by knowing the previous tide time.', zh: '潮汐通常每12小时25分钟发生一次。通过了解前一次潮汐时间可以预测下一次潮汐。' },
    w8_t: { ar: 'مصادر موثوقة للطقس البحري', en: 'Trusted marine weather sources', zh: '可靠的海上天气来源' },
    w8_d: { ar: 'استخدم مواقع مثل Windy، PredictWind، أو تطبيقات الأرصاد الوطنية. تحقق من التقرير قبل الإبحار بساعات وتحقق مرة أخرى قبل الانطلاق مباشرة.', en: 'Use sites like Windy, PredictWind, or national weather apps. Check the forecast hours before sailing and again just before departure.', zh: '使用 Windy、PredictWind 或国家气象应用等网站。出海前数小时查看预报，出发前再查看一次。' },

    /* ============ BOOKS ============ */
    bk_h1:       { ar: 'مكتبة البحر', en: 'Sea Library', zh: '海洋图书馆' },
    bk_subtitle: { ar: 'مجموعة مختارة من كتب البناء والملاحة والقصص البحرية', en: 'A curated collection of boat building, sailing and sea stories', zh: '精选的造船、航海和海洋故事书籍' },
    bk_penguin:  { ar: 'عرض على Penguin ←', en: 'View on Penguin →', zh: '在 Penguin 上查看 →' },
    bk1_type:    { ar: 'نوع الكتاب: رواية', en: 'Book type: Novel', zh: '书籍类型：小说' },
    bk2_type:    { ar: 'نوع الكتاب: تاريخ', en: 'Book type: History', zh: '书籍类型：历史' },
    bk3_type:    { ar: 'نوع الكتاب: هندسة بحرية', en: 'Book type: Marine Engineering', zh: '书籍类型：海洋工程' },
    bk4_type:    { ar: 'نوع الكتاب: بناء القوارب', en: 'Book type: Boat Building', zh: '书籍类型：造船' },
    bk5_type:    { ar: 'نوع الكتاب: مغامرة', en: 'Book type: Adventure', zh: '书籍类型：冒险' },
    bk6_type:    { ar: 'نوع الكتاب: قصة حقيقية', en: 'Book type: True Story', zh: '书籍类型：真实故事' },
    bk1_d: {
      ar: 'رواية مؤثرة عن صبي يبلغ 13 عامًا يحلم ببناء قارب، وتتحول رحلته إلى درس في الأمل والانتماء. وصلت للقائمة القصيرة لجائزة بوكر 2023.',
      en: 'A moving novel about a 13-year-old boy who dreams of building a boat, and whose journey becomes a lesson in hope and belonging. Shortlisted for the Booker Prize 2023.',
      zh: '一部感人的小说，讲述一个梦想造船的13岁男孩，他的旅程成为关于希望与归属的课程。入围2023年布克奖。'
    },
    bk2_d: {
      ar: 'تاريخ شامل للإبحار الفردي حول العالم، من الأيام الأولى إلى الرحلات الحديثة. رُشّح لجائزة المؤسسة البحرية لأفضل كتاب 2024.',
      en: 'A comprehensive history of solo sailing around the world, from the early days to modern voyages. Shortlisted for the Maritime Foundation Award for Best Book 2024.',
      zh: '一部关于单人环球航行的全面历史，从早期到现代航行。入围2024年海事基金会最佳图书奖。'
    },
    bk3_d: {
      ar: 'القصة المذهلة لبناء السفينة الحربية HMS Queen Elizabeth، وكيف بنى آلاف العمال واحدة من أعظم السفن في التاريخ.',
      en: 'The incredible story of building the warship HMS Queen Elizabeth, and how thousands of workers built one of the greatest ships in history.',
      zh: '建造军舰「伊丽莎白女王号」的惊人故事，以及数千名工人如何建造历史上最伟大的船只之一。'
    },
    bk4_d: {
      ar: 'رحلة داخل ورشة بناء قوارب شهيرة في مارثا فينيارد، لبناء قارب شراعي من الصفر. كتاب كلاسيكي عن الحرفة والصبر.',
      en: 'A journey inside a famous boatyard in Martha Vineyard, building a sailboat from scratch. A classic book about craftsmanship and patience.',
      zh: '深入玛莎葡萄园岛著名船厂的旅程，从零开始建造一艘帆船。一部关于工艺与耐心的经典著作。'
    },
    bk5_d: {
      ar: 'مغامرة حقيقية: بناء قارب جلدي تقليدي وإبحاره عبر المحيط الأطلسي، لإثبات إمكانية رحلة القديس بريندان الأسطورية.',
      en: 'A true adventure: building a traditional leather boat and sailing it across the Atlantic, to prove the feasibility of Saint Brendan legendary voyage.',
      zh: '真实的冒险：建造一艘传统皮革船并横渡大西洋，以证明圣布伦丹传奇航行的可行性。'
    },
    bk6_d: {
      ar: 'القصة الحقيقية لزوجين قررا بيع منزلهما وبناء قارب والإبحار إلى نيوزيلندا، لكن حوتًا يصطدم بقاربهما في منتصف المحيط الهادئ.',
      en: 'The true story of a couple who sold their house, built a boat, and sailed to New Zealand, but a whale struck their boat in the middle of the Pacific.',
      zh: '一对夫妇卖掉房子、建造船只并航行到新西兰的真实故事，但一头鲸鱼在太平洋中部撞上了他们的船。'
    },

    /* ============ WEBSITES ============ */
    ws_h1:       { ar: 'مواقع تعليمية عن بناء القوارب', en: 'Boat Building Websites', zh: '造船教育网站' },
    ws_subtitle: { ar: 'أفضل المنصات العالمية الموثوقة', en: 'Best trusted global platforms', zh: '最佳全球平台' },
    ws_stat1: { ar: 'مواقع مختارة', en: 'Selected sites', zh: '精选网站' },
    ws_stat2: { ar: 'مصادر مجانية', en: 'Free sources', zh: '免费来源' },
    ws_stat3: { ar: 'سنة خبرة مجمّعة', en: 'combined years of experience', zh: '累计经验年数' },
    ws_h2:    { ar: 'المواقع الموصى بها', en: 'Recommended Sites', zh: '推荐网站' },
    ws1_c: { ar: 'الولايات المتحدة', en: 'United States', zh: '美国' },
    ws1_d: { ar: 'مجلة ومنصة تعليمية متخصصة في القوارب الخشبية. تقدم دورات، مخططات، مقالات، وأرشيف فيديو ضخم.', en: 'Magazine and educational platform specialized in wooden boats. Offers courses, plans, articles, and a huge video archive.', zh: '专门针对木船的教育杂志和平台。提供课程、图纸、文章和庞大的视频档案。' },
    ws1_g1: { ar: 'مجلة', en: 'Magazine', zh: '杂志' },
    ws1_g2: { ar: 'دورات', en: 'Courses', zh: '课程' },
    ws1_g3: { ar: 'محتوى مجاني + مدفوع', en: 'Free + Paid', zh: '免费 + 付费' },
    ws2_c: { ar: 'الولايات المتحدة', en: 'United States', zh: '美国' },
    ws2_d: { ar: 'شركة تبيع مخططات قوارب جاهزة وقطع مفصّلة CNC، مع أدلة بناء مجانية مفصّلة على موقعهم.', en: 'Company selling ready boat plans and CNC-cut parts, with detailed free building guides on their site.', zh: '出售现成船只图纸和CNC切割零件的公司，其网站提供详细的免费建造指南。' },
    ws2_g1: { ar: 'مخططات', en: 'Plans', zh: '图纸' },
    ws2_g2: { ar: 'قطع CNC', en: 'CNC parts', zh: 'CNC 零件' },
    ws2_g3: { ar: 'أدلة مجانية', en: 'Free guides', zh: '免费指南' },
    ws3_c: { ar: 'الولايات المتحدة', en: 'United States', zh: '美国' },
    ws3_d: { ar: 'مكتبة فيديو تعليمية ضخمة لبناء القوارب والصيانة البحرية. أكثر من 1000 فيديو من خبراء عالميين.', en: 'Huge video library for boat building and marine maintenance. Over 1000 videos from world experts.', zh: '用于造船和海洋维护的大型视频库。来自世界专家的1000多个视频。' },
    ws3_g1: { ar: 'فيديو', en: 'Video', zh: '视频' },
    ws3_g2: { ar: 'صيانة', en: 'Maintenance', zh: '维护' },
    ws3_g3: { ar: 'اشتراك مدفوع', en: 'Paid subscription', zh: '付费订阅' },
    ws4_c: { ar: 'الولايات المتحدة (مين)', en: 'United States (Maine)', zh: '美国（缅因州）' },
    ws4_d: { ar: 'مدرسة متخصصة في دورات بناء القوارب الحضورية. دورات صيفية أسبوعية للمبتدئين والمتقدمين.', en: 'School specializing in on-site boat building courses. Weekly summer courses for beginners and advanced.', zh: '专门从事现场造船课程的学校。面向初学者和进阶者的每周夏季课程。' },
    ws4_g1: { ar: 'دورات حضورية', en: 'On-site courses', zh: '现场课程' },
    ws4_g2: { ar: 'صيفية', en: 'Summer', zh: '夏季' },
    ws4_g3: { ar: 'برسوم', en: 'Fees apply', zh: '收费' },
    ws5_c: { ar: 'عالمي', en: 'Global', zh: '全球' },
    ws5_d: { ar: 'أكبر منتدى عالمي لمصممي القوارب. تشارك فيه مخططات وتصاميم مجانية ونقاشات احترافية.', en: 'Largest global forum for boat designers. Features free plans, designs, and professional discussions.', zh: '全球最大的船只设计师论坛。提供免费图纸、设计和专业讨论。' },
    ws5_g1: { ar: 'منتدى', en: 'Forum', zh: '论坛' },
    ws5_g2: { ar: 'تصاميم', en: 'Designs', zh: '设计' },
    ws5_g3: { ar: 'مجاني', en: 'Free', zh: '免费' },
    ws6_c: { ar: 'عالمي', en: 'Global', zh: '全球' },
    ws6_d: { ar: 'مشاريع بناء قوارب بسيطة خطوة بخطوة، مع صور وشرح مفصّل. مثالية للمبتدئين وأصحاب الميزانية المحدودة.', en: 'Simple step-by-step boat building projects, with photos and detailed explanations. Ideal for beginners on a limited budget.', zh: '简单的分步造船项目，配有照片和详细说明。非常适合预算有限的初学者。' },
    ws6_g1: { ar: 'مشاريع', en: 'Projects', zh: '项目' },
    ws6_g2: { ar: 'مبتدئين', en: 'Beginners', zh: '初学者' },
    ws6_g3: { ar: 'مجاني', en: 'Free', zh: '免费' },
    ws_visit: { ar: 'زيارة الموقع ←', en: 'Visit Site →', zh: '访问网站 →' },

    /* ============ YOUTUBE ============ */
    yt_h1:       { ar: 'قنوات يوتيوب لبناء القوارب', en: 'Boat Building YouTube Channels', zh: '造船 YouTube 频道' },
    yt_subtitle: { ar: 'قنوات حقيقية متخصصة', en: 'Real specialized channels', zh: '真正的专业频道' },
    yt_visit:    { ar: 'زيارة القناة ←', en: 'Visit Channel →', zh: '访问频道 →' },
    yt1_d: { ar: 'قناة يقدمها Master Shipwright Louis Sauzedde، أكثر من 197 ألف مشترك. تغطي بناء القوارب الخشبية وإصلاحها.', en: 'Channel presented by Master Shipwright Louis Sauzedde, with over 197K subscribers. Covers wooden boat building and repair.', zh: '由船舶大师 Louis Sauzedde 主持的频道，拥有超过19.7万订阅者。涵盖木船建造和维修。' },
    yt2_d: { ar: 'قناة Bob Emser، يبني فيها القوارب الخشبية ويشرح التقنيات بأسلوب تعليمي ممتاز.', en: 'Bob Emser channel, where he builds wooden boats and explains techniques in an excellent educational style.', zh: 'Bob Emser 的频道，他在其中建造木船并以出色的教育风格解释技术。' },
    yt3_d: { ar: 'قناة Dan Lee، أحد أبرز بناة القوارب الشباب. أكثر من 50 ألف مشترك و7 ملايين مشاهدة.', en: 'Dan Lee channel, one of the most prominent young boat builders. Over 50K subscribers and 7M views.', zh: 'Dan Lee 的频道，最杰出的年轻造船者之一。超过5万订阅者和700万次观看。' },
    yt4_d: { ar: 'قناة توثّق مشروع بناء قارب من الصفر، مع أكثر من 97 حلقة مفصلة.', en: 'Channel documenting a boat building project from scratch, with over 97 detailed episodes.', zh: '记录从零开始造船项目的频道，包含超过97集详细内容。' },
    yt5_d: { ar: 'قناة توثّق بناء قارب من الخشب الرقائقي بالكامل، مثالية للمبتدئين.', en: 'Channel documenting the building of an entirely plywood boat, ideal for beginners.', zh: '记录完全用胶合板建造船只的频道，非常适合初学者。' },
    yt6_d: { ar: 'قناة تعليمية بالتعاون مع Tips from a Shipwright، تقدم مشاريع بناء وإصلاح بالتفصيل.', en: 'Educational channel in collaboration with Tips from a Shipwright, offering detailed build and repair projects.', zh: '与 Tips from a Shipwright 合作的教育频道，提供详细的建造和维修项目。' }
  };

  var SEC_KEY_MAP = {
    'أنواع السفن والقوارب': 'sec_vessels',
    'أجزاء السفينة': 'sec_parts',
    'المعدات والأدوات': 'sec_equipment',
    'المصطلحات البحرية والملاحية': 'sec_nautical',
    'الطاقم والوظائف': 'sec_crew',
    'أفعال ومصطلحات التشغيل': 'sec_verbs',
    'مصطلحات بحرية إضافية': 'sec_extra'
  };

  var NAV_ORDER = ['nav_home','nav_build','nav_weather','nav_books','nav_websites','nav_youtube','nav_glossary'];
  var currentLang = 'ar';

  try {
    var saved = localStorage.getItem('site-lang');
    if (saved === 'ar' || saved === 'en' || saved === 'zh') currentLang = saved;
  } catch (e) {}

  function translateAll() {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      if (T[key] && T[key][currentLang]) {
        el.textContent = T[key][currentLang];
      }
    }
  }

  function translateNav() {
    var links = document.querySelectorAll('nav a');
    for (var i = 0; i < links.length && i < NAV_ORDER.length; i++) {
      var key = NAV_ORDER[i];
      if (key && T[key] && T[key][currentLang]) links[i].textContent = T[key][currentLang];
    }
  }

  function translateSearch() {
    var inp = document.getElementById('search');
    if (inp && T.search_ph && T.search_ph[currentLang]) inp.placeholder = T.search_ph[currentLang];
  }

  function translateFooter() {
    var f = document.querySelector('footer');
    if (!f) return;
    var svg = f.querySelector('svg');
    var nodes = Array.prototype.slice.call(f.childNodes);
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeType === 3) f.removeChild(nodes[i]);
    }
    var txt = document.createTextNode(' ' + T.footer_text[currentLang] + ' ');
    if (svg) f.insertBefore(txt, svg);
    else f.appendChild(txt);
  }

  function translateTitle() {
    var h1 = document.querySelector('header h1[data-i18n]');
    if (h1) {
      var key = h1.getAttribute('data-i18n');
      if (T[key] && T[key][currentLang]) document.title = T[key][currentLang];
    }
  }

  function rebuildGlossary() {
    if (typeof window.sections === 'undefined') return;
    var container = document.getElementById('content');
    if (!container) return;

    var searchEl = document.getElementById('search');
    var q = (searchEl && searchEl.value ? searchEl.value : '').trim().toLowerCase();

    var rows = '';
    var total = 0;

    for (var i = 0; i < window.sections.length; i++) {
      var sec = window.sections[i];
      var secTitleRaw = sec.title;
      var secKey = SEC_KEY_MAP[secTitleRaw];
      var secTitle = (secKey && T[secKey] && T[secKey][currentLang]) ? T[secKey][currentLang] : secTitleRaw;

      for (var j = 0; j < sec.items.length; j++) {
        var it = sec.items[j];
        var en = it[0] || '';
        var ar = it[1] || '';
        var zh = it[2] || '';

        if (q) {
          var hay = (en + ' ' + ar + ' ' + zh).toLowerCase();
          if (hay.indexOf(q) === -1) continue;
        }

        total++;
        var arDir = (currentLang === 'ar') ? '' : 'direction:rtl;text-align:right;';
        var zhStyle = 'font-family:system-ui,sans-serif;';

        rows += '<tr>' +
          '<td class="en">' + en + '</td>' +
          '<td class="ar" style="' + arDir + '">' + ar + '</td>' +
          '<td class="zh" style="' + zhStyle + '">' + zh + '</td>' +
          '<td class="cat">' + secTitle + '</td>' +
        '</tr>';
      }
    }

    if (total === 0) {
      container.innerHTML = '<div style="text-align:center;padding:35px;color:#5c87b5;">' + T.gl_empty[currentLang] + '</div>';
      return;
    }

    var html = '';
    html += '<div class="table-wrap"><table>';
    html += '<thead><tr>' +
      '<th>' + T.gl_col1[currentLang] + '</th>' +
      '<th>' + T.gl_col2[currentLang] + '</th>' +
      '<th>' + T.gl_col3[currentLang] + '</th>' +
      '<th>' + T.gl_col_cat[currentLang] + '</th>' +
      '</tr></thead>';
    html += '<tbody>' + rows + '</tbody>';
    html += '</table></div>';

    container.innerHTML = html;
  }

  function addLangButtons() {
    var nav = document.querySelector('nav');
    if (!nav || nav.querySelector('.lang-switch')) return;

    var box = document.createElement('div');
    box.className = 'lang-switch';
    box.innerHTML =
      '<button data-lang="ar" title="العربية">ع</button>' +
      '<button data-lang="en" title="English">EN</button>' +
      '<button data-lang="zh" title="中文">中</button>';
    nav.appendChild(box);

    var btns = box.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) {
      (function(b){
        b.addEventListener('click', function(){ setLang(b.getAttribute('data-lang')); });
      })(btns[i]);
    }
  }

  function addLangStyles() {
    if (document.getElementById('lang-styles')) return;
    var css = document.createElement('style');
    css.id = 'lang-styles';
    css.textContent = '.lang-switch{display:flex;gap:4px;margin-right:8px;padding-right:8px;border-right:1px solid rgba(160,190,220,0.5);} .lang-switch button{font-family:Aref Ruqaa,serif;font-size:.8rem;color:#2a5486;background:rgba(255,255,255,0.4);border:1px solid rgba(160,190,220,0.4);border-radius:14px;padding:5px 10px;cursor:pointer;transition:all .25s;min-width:32px;} .lang-switch button:hover{background:rgba(111,149,189,0.25);} .lang-switch button.active{background:#6f95bd;color:#fff;border-color:#6f95bd;font-weight:700;} td.cat{color:#6f95bd;font-size:0.82rem;font-style:italic;} td.zh{color:#3a6288;font-size:1rem;} .book-type{color:#6f95bd;font-size:0.8rem;font-style:italic;margin-bottom:6px;}';
    document.head.appendChild(css);
  }

  function markActiveBtn() {
    var btns = document.querySelectorAll('.lang-switch button');
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].getAttribute('data-lang') === currentLang) btns[i].classList.add('active');
      else btns[i].classList.remove('active');
    }
  }

  function applyLangVisibility() {
    var els = document.querySelectorAll('[data-i18n-show]');
    for (var i = 0; i < els.length; i++) {
      var allowed = els[i].getAttribute('data-i18n-show').split(',');
      var show = false;
      for (var j = 0; j < allowed.length; j++) {
        if (allowed[j].trim() === currentLang) { show = true; break; }
      }
      els[i].style.display = show ? '' : 'none';
    }
  }

  function setLang(lang) {
    currentLang = lang;
    try { localStorage.setItem('site-lang', lang); } catch(e) {}
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    translateNav();
    translateAll();
    translateSearch();
    translateFooter();
    translateTitle();
    rebuildGlossary();
    markActiveBtn();
    applyLangVisibility();
  }

  function init() {
    addLangStyles();
    addLangButtons();
    setLang(currentLang);

    var searchInput = document.getElementById('search');
    if (searchInput) searchInput.addEventListener('input', rebuildGlossary);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();