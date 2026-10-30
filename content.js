window.PORTFOLIO_CONTENT = {
  en: {
    meta: {
      title: "Saharath Lertkirawong — Product Builder",
      description: "Engineer, restaurant operator, and product builder turning real operational problems into production systems. Based in Bangkok."
    },
    brand: { role: "Product builder in Bangkok" },
    nav: { work: "Work", approach: "Approach", experience: "Experience", contact: "Contact" },
    hero: {
      status: "Available for Monday–Friday roles in Bangkok",
      line1: "I build systems from",
      line2: "real operational pain.",
      lede: "Engineer, restaurant operator, and product builder. I turn firsthand business problems into production tools — then validate them with real customers, real operations, and real numbers.",
      viewWork: "Explore the work",
      resume: "Resume PDF",
      panelLabel: "CURRENT FOCUS",
      panelText: "AI-assisted automation, API integrations, full-stack products, and technical problem solving."
    },
    proof: {
      liveProducts: "live production products",
      reviews: "combined restaurant reviews",
      project: "THB project delivered",
      views: "AI-assisted content views"
    },
    sections: {
      approachLabel: "Approach",
      aiLabel: "AI workflow",
      experienceLabel: "Experience",
      moreLabel: "More work"
    },
    approach: {
      eyebrow: "The operating advantage",
      title: "The product decisions come from using the system myself.",
      body: "I do not start with technology. I start with the customer conversation, the kitchen handoff, the payout mismatch, or the repetitive task that slows the business down. That operating context becomes the product requirement."
    },
    process: [
      { title: "Operate", text: "Work inside the real process: customers, orders, kitchen handoff, platform payouts, and daily costs." },
      { title: "Observe", text: "Find the repeated friction, trace the root cause, and decide what should — and should not — be automated." },
      { title: "Build", text: "Use TypeScript, Python, Supabase, APIs, and AI-assisted workflows to move from requirement to working product." },
      { title: "Validate", text: "Ship to production, compare system behavior with the operation, and improve it from real feedback." }
    ],
    work: {
      eyebrow: "Selected production systems",
      title: "Built for a business that cannot pause while the software catches up.",
      body: "Both products are live. Open them, inspect the experience, and ask me how each decision maps back to an operational problem.",
      problemLabel: "Operational problem",
      openLabel: "Open live product",
      liveLabel: "LIVE"
    },
    projects: [
      {
        number: "01",
        title: "Delivery Finance and Profit Automation",
        url: "https://fatcat.stream",
        displayUrl: "fatcat.stream",
        summary: "A restaurant finance workspace that turns scattered Grab and LINE MAN data into a daily operational and profitability signal.",
        problem: "Sales, fees, deductions, food cost, and net payouts lived across different platform reports. Manual consolidation was slow and made daily decisions harder.",
        outcomes: [
          "Consolidates platform sales, fees, deductions, and net payouts for management review.",
          "Automates daily collection, food-cost calculation, and profit reporting instead of spreadsheet work.",
          "Provides branch-level visibility and a reconciliation workflow designed around real restaurant operations."
        ],
        tags: ["TypeScript", "Python", "Supabase", "PostgreSQL", "Vercel", "Docker", "API integration"],
        visualNote: "Public product preview. Restaurant financial data remains protected behind authentication."
      },
      {
        number: "02",
        title: "Customer Ordering and Loyverse POS Integration",
        url: "https://order.fatcat.stream",
        displayUrl: "order.fatcat.stream",
        summary: "A direct mobile ordering product that keeps the restaurant's existing POS and kitchen workflow intact.",
        problem: "As direct orders grew, staff spent more time answering messages, confirming options, and entering each order into Loyverse by hand.",
        outcomes: [
          "Gives customers a menu, search, cart, LINE login, reorder, rewards, and order history experience.",
          "Sends confirmed orders into Loyverse so kitchen printing continues without replacing the operating system.",
          "Built from live restaurant operations with 190+ LINE MAN reviews at 4.8 and 60+ Grab reviews at 4.9."
        ],
        tags: ["TypeScript", "Supabase", "Vercel", "Loyverse API", "LINE login", "Product operations"],
        visualNote: "This is the real customer experience used for delivery-to-room ordering."
      }
    ],
    ai: {
      eyebrow: "AI is leverage, not the claim",
      title: "I use agents to shorten the distance from problem to validated product.",
      body: "Claude, Gemini, Codex, and Hermes Agent support requirements breakdown, implementation, debugging, code review, and documentation. I remain responsible for architecture, trade-offs, testing, and production behavior.",
      steps: [
        { strong: "Frame the problem", text: "from customer, operational, and business constraints." },
        { strong: "Break down the work", text: "with agent-assisted research and implementation planning." },
        { strong: "Build and review", text: "while checking the code, integration boundaries, and failure paths." },
        { strong: "Validate in production", text: "against the real workflow before calling the feature complete." }
      ]
    },
    experience: {
      eyebrow: "The foundation",
      title: "Engineering discipline before product building.",
      body: "Three years across electrical design, technical support, and project delivery built the habits I now bring to software: structured diagnosis, stakeholder coordination, documentation, and accountable handover.",
      roles: [
        {
          dates: "2024 — 2025",
          title: "Senior Support Engineer & Project Manager",
          company: "Entech Industrial Solution",
          detail: "Led end-to-end delivery of a 20M THB Robotics Lab, coordinating military, academic, vendor, and subcontractor stakeholders through technical acceptance."
        },
        {
          dates: "2023 — 2024",
          title: "Electrical Engineer",
          company: "Palmer & Turner Consultants Thailand",
          detail: "Designed power distribution, fire alarm, and CCTV systems for high-rise residential projects using AutoCAD, Revit, BIM coordination, and engineering calculations."
        },
        {
          dates: "2021 — 2023",
          title: "Technical Support Specialist",
          company: "Entech Industrial Solution",
          detail: "Supervised installations, supported clients including Reckitt and Chulabhorn Hospital, troubleshot field issues, and translated performance data into maintenance recommendations."
        }
      ]
    },
    more: {
      eyebrow: "The wider technical range",
      title: "Data, software, and applied AI projects.",
      body: "Selected repositories that show the learning path behind the production work."
    },
    repositories: [
      {
        title: "Data End-to-End Project",
        url: "https://github.com/OhmSaharath/data-end-to-end-project",
        description: "An end-to-end data project covering ingestion, transformation, storage, and analytics workflow design.",
        tags: ["Data engineering", "Pipeline", "Analytics"]
      },
      {
        title: "Data Engineering Bootcamp",
        url: "https://github.com/OhmSaharath/data-engineering-bootcamp",
        description: "Hands-on work with Spark, dbt, BigQuery, GCS, and Looker Studio from Skooldio Data Engineering Bootcamp Batch 5.",
        tags: ["Spark", "dbt", "BigQuery"]
      },
      {
        title: "SQL Data Warehouse",
        url: "https://github.com/OhmSaharath/sql-data-warehouse-project",
        description: "A structured SQL warehouse project focused on data modeling, transformation layers, and analytical readiness.",
        tags: ["SQL", "Data warehouse", "Modeling"]
      },
      {
        title: "Mini Workshop GenAI",
        url: "https://github.com/OhmSaharath/mini-workshop-genai",
        description: "Experiments and workshop material exploring practical generative AI workflows and application patterns.",
        tags: ["Generative AI", "Workshop", "Applied learning"]
      }
    ],
    contact: {
      eyebrow: "Let us talk about the problem",
      title: "Looking for a builder who understands both systems and operations?",
      body: "I am open to Monday–Friday roles in Bangkok across AI-assisted automation, full-stack products, API integration, technical solutions, project engineering, and technical support."
    },
    footer: {
      note: "Built from real work, documented for the next iteration.",
      top: "Back to top ↑"
    }
  },

  th: {
    meta: {
      title: "สหรัถ เลิศคีรีวงศ์ — Product Builder",
      description: "วิศวกร ผู้ดำเนินธุรกิจร้านอาหาร และ Product Builder ที่เปลี่ยนปัญหาหน้างานจริงให้เป็นระบบ Production"
    },
    brand: { role: "Product Builder ในกรุงเทพฯ" },
    nav: { work: "ผลงาน", approach: "แนวทาง", experience: "ประสบการณ์", contact: "ติดต่อ" },
    hero: {
      status: "พร้อมเริ่มงาน จันทร์–ศุกร์ ในกรุงเทพฯ",
      line1: "ผมสร้างระบบจาก",
      line2: "ปัญหาหน้างานจริง",
      lede: "วิศวกร ผู้ดำเนินธุรกิจร้านอาหาร และ Product Builder ผมเปลี่ยนปัญหาที่พบด้วยตัวเองให้เป็นเครื่องมือที่ใช้งานจริง แล้วตรวจสอบผลลัพธ์กับลูกค้า การทำงาน และตัวเลขจริง",
      viewWork: "ดูผลงาน",
      resume: "Resume PDF",
      panelLabel: "สิ่งที่กำลังมุ่งเน้น",
      panelText: "AI-assisted automation, การเชื่อมต่อ API, ผลิตภัณฑ์ Full-stack และการแก้ปัญหาทางเทคนิค"
    },
    proof: {
      liveProducts: "ผลิตภัณฑ์ที่ใช้งานจริง",
      reviews: "รีวิวร้านอาหารรวม",
      project: "บาท มูลค่าโครงการที่ส่งมอบ",
      views: "ยอดชมคอนเทนต์ที่ใช้ AI ช่วยผลิต"
    },
    sections: {
      approachLabel: "แนวทาง",
      aiLabel: "การใช้ AI",
      experienceLabel: "ประสบการณ์",
      moreLabel: "ผลงานเพิ่มเติม"
    },
    approach: {
      eyebrow: "ข้อได้เปรียบจากการลงมือทำธุรกิจ",
      title: "การตัดสินใจด้านผลิตภัณฑ์มาจากการใช้ระบบด้วยตัวเอง",
      body: "ผมไม่ได้เริ่มจากเทคโนโลยี แต่เริ่มจากบทสนทนากับลูกค้า การส่งออเดอร์เข้าครัว ยอดเงินที่ไม่ตรง หรือขั้นตอนซ้ำ ๆ ที่ทำให้ธุรกิจช้าลง บริบทจากหน้างานเหล่านี้จึงกลายเป็น Product Requirement"
    },
    process: [
      { title: "ลงมือทำ", text: "อยู่ในกระบวนการจริง ทั้งลูกค้า ออเดอร์ ครัว ยอดรับจากแพลตฟอร์ม และต้นทุนประจำวัน" },
      { title: "สังเกต", text: "หาจุดติดขัดที่เกิดซ้ำ วิเคราะห์สาเหตุ และตัดสินใจว่าอะไรควรหรือไม่ควรทำเป็นระบบอัตโนมัติ" },
      { title: "สร้าง", text: "ใช้ TypeScript, Python, Supabase, API และ AI-assisted workflow เปลี่ยนความต้องการเป็นผลิตภัณฑ์ที่ทำงานได้" },
      { title: "ตรวจสอบ", text: "นำขึ้น Production เปรียบเทียบกับงานจริง และปรับปรุงจาก Feedback ที่เกิดขึ้นจริง" }
    ],
    work: {
      eyebrow: "ระบบ Production ที่คัดเลือกมา",
      title: "สร้างให้ธุรกิจที่หยุดรอซอฟต์แวร์ไม่ได้",
      body: "ทั้งสองระบบเปิดใช้งานจริง สามารถกดเข้าไปดูประสบการณ์ใช้งาน และถามผมได้ว่าการตัดสินใจแต่ละอย่างเชื่อมกลับไปยังปัญหาหน้างานอย่างไร",
      problemLabel: "ปัญหาหน้างาน",
      openLabel: "เปิดระบบจริง",
      liveLabel: "ใช้งานจริง"
    },
    projects: [
      {
        number: "01",
        title: "ระบบรวมยอดเดลิเวอรีและคำนวณกำไร",
        url: "https://fatcat.stream",
        displayUrl: "fatcat.stream",
        summary: "พื้นที่ทำงานด้านการเงินสำหรับร้านอาหารที่เปลี่ยนข้อมูล Grab และ LINE MAN ที่กระจัดกระจายให้เป็นสัญญาณด้านการดำเนินงานและกำไรรายวัน",
        problem: "ยอดขาย ค่าธรรมเนียม รายการหัก ต้นทุนอาหาร และยอดรับสุทธิอยู่คนละรายงาน การรวมข้อมูลด้วยมือใช้เวลามากและทำให้ตัดสินใจรายวันได้ยาก",
        outcomes: [
          "รวมยอดขาย ค่าธรรมเนียม รายการหัก และยอดรับสุทธิจากแต่ละแพลตฟอร์มเพื่อใช้ตรวจสอบ",
          "ทำงานดึงข้อมูล คำนวณต้นทุนอาหาร และรายงานกำไรประจำวันโดยไม่ต้องรวม Spreadsheet ด้วยมือ",
          "แสดงข้อมูลระดับสาขาและมีขั้นตอน Reconciliation ที่ออกแบบจากการดำเนินงานของร้านจริง"
        ],
        tags: ["TypeScript", "Python", "Supabase", "PostgreSQL", "Vercel", "Docker", "API integration"],
        visualNote: "เปิดดูตัวผลิตภัณฑ์ได้ ส่วนข้อมูลการเงินจริงของร้านได้รับการปกป้องด้วยระบบยืนยันตัวตน"
      },
      {
        number: "02",
        title: "ระบบสั่งอาหารและเชื่อมต่อ Loyverse POS",
        url: "https://order.fatcat.stream",
        displayUrl: "order.fatcat.stream",
        summary: "ผลิตภัณฑ์สั่งอาหารบนมือถือที่รักษาระบบ POS และขั้นตอนการทำงานในครัวเดิมของร้านไว้",
        problem: "เมื่อลูกค้าสั่งตรงมากขึ้น พนักงานต้องใช้เวลาตอบข้อความ ยืนยันตัวเลือก และกรอกออเดอร์ลง Loyverse ทีละรายการ",
        outcomes: [
          "ลูกค้าใช้งานเมนู ค้นหา ตะกร้า LINE Login สั่งซ้ำ Rewards และประวัติการสั่งได้ด้วยตัวเอง",
          "ส่งออเดอร์ที่ยืนยันแล้วเข้า Loyverse เพื่อให้ระบบพิมพ์คำสั่งในครัวทำงานต่อได้โดยไม่ต้องเปลี่ยนระบบเดิม",
          "สร้างจากการดำเนินร้านจริงที่มีรีวิว LINE MAN 190+ รายการ คะแนน 4.8 และ Grab 60+ รายการ คะแนน 4.9"
        ],
        tags: ["TypeScript", "Supabase", "Vercel", "Loyverse API", "LINE login", "Product operations"],
        visualNote: "นี่คือประสบการณ์จริงที่ลูกค้าใช้สั่งอาหารเพื่อจัดส่งถึงห้องพัก"
      }
    ],
    ai: {
      eyebrow: "AI คือแรงทุ่น ไม่ใช่สิ่งที่ใช้อ้างเกินจริง",
      title: "ผมใช้ Agent เพื่อลดระยะทางจากปัญหาไปสู่ผลิตภัณฑ์ที่ตรวจสอบแล้ว",
      body: "Claude, Gemini, Codex และ Hermes Agent ช่วยแตก Requirements พัฒนา Debug Review Code และเขียนเอกสาร แต่ผมยังรับผิดชอบ Architecture การเลือก Trade-off การทดสอบ และพฤติกรรมของระบบบน Production",
      steps: [
        { strong: "กำหนดปัญหา", text: "จากข้อจำกัดของลูกค้า หน้างาน และธุรกิจ" },
        { strong: "แตกงาน", text: "ใช้ Agent ช่วยวิจัยและวางแผนการพัฒนา" },
        { strong: "สร้างและตรวจ", text: "พร้อมตรวจ Code จุดเชื่อมต่อ และเส้นทางที่ระบบอาจล้มเหลว" },
        { strong: "ตรวจบน Production", text: "เปรียบเทียบกับงานจริงก่อนถือว่า Feature เสร็จ" }
      ]
    },
    experience: {
      eyebrow: "รากฐานของการทำงาน",
      title: "วินัยทางวิศวกรรมก่อนเริ่มสร้างผลิตภัณฑ์",
      body: "ประสบการณ์กว่าสามปีด้านการออกแบบไฟฟ้า Technical Support และการส่งมอบโครงการ สร้างนิสัยที่ผมนำมาใช้กับซอฟต์แวร์ ได้แก่ การวิเคราะห์อย่างเป็นระบบ การประสานงาน การจัดทำเอกสาร และการส่งมอบที่รับผิดชอบต่อผลลัพธ์",
      roles: [
        {
          dates: "2024 — 2025",
          title: "Senior Support Engineer & Project Manager",
          company: "Entech Industrial Solution",
          detail: "ดูแลการส่งมอบ Robotics Lab มูลค่า 20 ล้านบาทตั้งแต่ต้นจนจบ ประสานงานหน่วยงานทหาร สถาบันการศึกษา Vendor และผู้รับเหมา จนผ่านการตรวจรับทางเทคนิค"
        },
        {
          dates: "2023 — 2024",
          title: "Electrical Engineer",
          company: "Palmer & Turner Consultants Thailand",
          detail: "ออกแบบระบบจ่ายไฟ Fire Alarm และ CCTV สำหรับโครงการอาคารพักอาศัย โดยใช้ AutoCAD, Revit, BIM Coordination และการคำนวณทางวิศวกรรม"
        },
        {
          dates: "2021 — 2023",
          title: "Technical Support Specialist",
          company: "Entech Industrial Solution",
          detail: "ควบคุมการติดตั้ง สนับสนุนลูกค้า เช่น Reckitt และโรงพยาบาลจุฬาภรณ์ แก้ปัญหาหน้างาน และแปลงข้อมูลประสิทธิภาพเป็นข้อเสนอแนะด้านการบำรุงรักษา"
        }
      ]
    },
    more: {
      eyebrow: "ขอบเขตทักษะที่กว้างขึ้น",
      title: "โปรเจกต์ด้านข้อมูล ซอฟต์แวร์ และการประยุกต์ใช้ AI",
      body: "Repository ที่คัดเลือกมาเพื่อแสดงเส้นทางการเรียนรู้เบื้องหลังงาน Production"
    },
    repositories: [
      {
        title: "Data End-to-End Project",
        url: "https://github.com/OhmSaharath/data-end-to-end-project",
        description: "โปรเจกต์ข้อมูลตั้งแต่การนำเข้า แปลง จัดเก็บ ไปจนถึงการออกแบบ Workflow สำหรับการวิเคราะห์",
        tags: ["Data engineering", "Pipeline", "Analytics"]
      },
      {
        title: "Data Engineering Bootcamp",
        url: "https://github.com/OhmSaharath/data-engineering-bootcamp",
        description: "ผลงานจาก Skooldio Data Engineering Bootcamp รุ่น 5 ที่ใช้ Spark, dbt, BigQuery, GCS และ Looker Studio",
        tags: ["Spark", "dbt", "BigQuery"]
      },
      {
        title: "SQL Data Warehouse",
        url: "https://github.com/OhmSaharath/sql-data-warehouse-project",
        description: "โปรเจกต์คลังข้อมูล SQL ที่มุ่งเน้น Data Modeling, Transformation Layer และความพร้อมสำหรับงานวิเคราะห์",
        tags: ["SQL", "Data warehouse", "Modeling"]
      },
      {
        title: "Mini Workshop GenAI",
        url: "https://github.com/OhmSaharath/mini-workshop-genai",
        description: "การทดลองและ Workshop เกี่ยวกับ Workflow ของ Generative AI และรูปแบบการนำไปใช้งานจริง",
        tags: ["Generative AI", "Workshop", "Applied learning"]
      }
    ],
    contact: {
      eyebrow: "มาคุยกันที่ปัญหา",
      title: "กำลังมองหาคนสร้างระบบที่เข้าใจทั้งเทคโนโลยีและหน้างานอยู่หรือไม่",
      body: "ผมเปิดรับงานจันทร์–ศุกร์ในกรุงเทพฯ ด้าน AI-assisted automation, Full-stack Product, API Integration, Technical Solution, Project Engineering และ Technical Support"
    },
    footer: {
      note: "สร้างจากงานจริง และมีเอกสารพร้อมสำหรับการพัฒนาครั้งต่อไป",
      top: "กลับขึ้นด้านบน ↑"
    }
  }
};
