import type { HomeDict } from './home-types'

// English homepage copy. This is the source text for /ms and /zh: when a
// claim changes here, change it in home-ms.ts and home-zh.ts too.
const en: HomeDict = {
  meta: {
    title: 'ISO 9001 Certification Malaysia | Quality Management System',
    description:
      'ISO 9001 consultancy in Malaysia from RM 13,000. Our QMS consultants prepare you for certification by an accredited certification body. Free first consultation.',
  },
  whatsappText: {
    hero: 'Hi, I would like to enquire about ISO 9001 certification.',
    process: 'Hi, I would like to start the ISO 9001 certification process.',
    faq: 'Hi, I have a question about ISO 9001 certification.',
  },
  hero: {
    eyebrow: 'ISO 9001 consultants in Malaysia since 2016',
    title: 'ISO 9001 certification for Malaysian businesses',
    lead: 'We build your quality management system, write the documentation, train your team and prepare you for the certification body audit. Every project is led by founder Evin Lim.',
    cta: 'Get a free consultation',
    secondaryCta: 'See how it works',
    note: 'Free initial consultation by WhatsApp, phone or video. On-site visits anywhere in Malaysia are part of our paid packages.',
    facts: [
      { value: 'Since 2016', label: 'Consulting for Malaysian companies' },
      { value: 'From RM 13,000', label: 'Full consultancy packages' },
      { value: 'Nationwide', label: 'On-site visits in paid packages' },
      { value: 'ISO 9001:2015', label: 'Ready for the 2026 revision' },
    ],
    card: {
      title: 'QMS readiness file',
      preparedBy: 'Prepared by AA Alive',
      standardLabel: 'Standard',
      nextLabel: 'Next revision',
      clauses: [
        { no: '4', title: 'Context of the organization' },
        { no: '5', title: 'Leadership' },
        { no: '6', title: 'Planning' },
        { no: '7', title: 'Support' },
        { no: '8', title: 'Operation' },
        { no: '9', title: 'Performance evaluation' },
        { no: '10', title: 'Improvement' },
      ],
      prepared: 'Prepared',
      stage1: 'Stage 1 audit',
      stage1Desc: 'Document review',
      stage2: 'Stage 2 audit',
      stage2Desc: 'On-site implementation',
      caption: 'What we prepare with you, clause by clause, before the certification body audits your system.',
    },
  },
  trust: {
    intro: 'We prepare clients for audits by accredited certification bodies, including',
  },
  pain: {
    title: 'What changes when your quality system is certified',
    intro:
      'For many Malaysian companies, ISO 9001 is what stands between them and the next tender, vendor registration or supply contract. Here is the practical difference.',
    withoutHeading: 'Without ISO 9001',
    withHeading: 'With a certified QMS',
    withoutShort: 'Without',
    rows: [
      {
        without: 'Unable to respond when a tender or MNC supplier registration asks for ISO 9001',
        with: 'Able to respond to tenders and vendor registrations that ask for ISO 9001 certification',
      },
      {
        without: 'No independent evidence that your processes meet an international standard',
        with: 'A certificate from an accredited certification body that customers and auditors recognise',
      },
      {
        without: 'Rework, defects and inconsistent processes that quietly add cost',
        with: 'Documented processes and controls that reduce rework and repeat mistakes',
      },
      {
        without: 'Unclear roles and undocumented procedures when something goes wrong',
        with: 'Defined responsibilities, so every team member knows what is expected',
      },
      {
        without: 'Losing work to certified competitors, even with a better product or service',
        with: 'Competing on equal terms with certified companies in your industry',
      },
    ],
    footer: 'Not sure what ISO 9001 would take in your company? [Tell us about your situation](#contact).',
  },
  why: {
    title: 'Why work with AA Alive',
    intro:
      'We focus on ISO management system consulting: a clear method, published pricing, and direct access to the people doing the work.',
    reasons: [
      {
        title: 'Audit-ready before you apply',
        description:
          "We prepare your quality system, your records and your team for the certification audit. We don't put you forward until the documentation and objective evidence are actually in place.",
      },
      {
        title: 'A structured, staged method',
        description:
          'A structured, staged methodology, with the project timeline agreed after the gap analysis. We do the documentation work so your team can stay focused on their regular duties.',
      },
      {
        title: 'Founder-led consulting',
        description:
          'Work directly with Evin Lim and our senior consultants. Direct WhatsApp access to your consultant throughout the project.',
      },
      {
        title: 'Published, transparent pricing',
        description:
          'Consultancy packages from RM 13,000. We explain everything upfront: our consultancy fees, what is included, what is extra, and the certification body audit fees, which the certification body quotes separately.',
      },
      {
        title: 'Documentation written for you',
        description:
          "We don't just advise — we write your Quality Manual, SOPs, procedures, forms, and records. Customized to your actual operations.",
      },
      {
        title: 'Support after certification',
        description:
          'Every package includes a period of post-certification support (3 to 12 months, depending on the package) to help you maintain your QMS between certification body audits.',
      },
    ],
  },
  benefits: {
    title: 'Why ISO 9001 matters',
    intro:
      'What a certified quality management system can do for your business, and why Malaysian companies pursue ISO 9001.',
    items: [
      {
        title: 'Build customer trust',
        description:
          'Show customers and partners that quality is your priority with internationally recognized certification.',
        details:
          'ISO 9001 certification provides independent verification that your organization consistently meets customer requirements. Many Malaysian buyers and procurement teams ask for it before they will shortlist a supplier.',
      },
      {
        title: 'Respond to tender requirements',
        description:
          'ISO 9001 is often requested by larger buyers and in tenders. Certification lets you respond to those requests.',
        details:
          'Larger buyers, including multinational companies and GLCs, often ask supply chain partners for ISO 9001 certification, and it is often requested in government tenders. Requirements vary by buyer and tender.',
      },
      {
        title: 'Improve efficiency',
        description:
          'Streamline your processes, reduce waste, and eliminate errors through systematic quality management.',
        details:
          'The standard requires you to document processes, identify bottlenecks, and implement controls that reduce rework and waste.',
      },
      {
        title: 'Reduce costs',
        description:
          'Fewer mistakes mean lower costs. Efficient processes save time and resources across your organization.',
        details: 'A working QMS helps control cost through fewer defects, less rework and better use of resources.',
      },
      {
        title: 'Clearer roles for your team',
        description:
          'Clear processes and responsibilities help your team work more effectively and with greater satisfaction.',
        details:
          'ISO 9001 provides clear roles, responsibilities, and objectives for employees. Clear expectations make onboarding easier and reduce the friction that comes from unclear ownership.',
      },
      {
        title: 'Continual improvement',
        description:
          'Build a culture of ongoing improvement that keeps your business competitive and adaptable.',
        details:
          'The PDCA cycle embedded in ISO 9001 ensures your quality management system continuously evolves. Regular internal audits and management reviews identify opportunities for improvement, helping your organization adapt to customer and market changes.',
      },
    ],
    moreLink: 'Learn more about ISO 9001 benefits',
  },
  industries: {
    title: 'ISO 9001 for every Malaysian industry',
    intro:
      'We work with companies across many industries in Malaysia. Our consultants take the time to understand the requirements, regulations and challenges of your sector.',
    items: [
      {
        name: 'Manufacturing',
        description:
          'Metal fabrication, plastics, electronics, food processing, automotive parts. ISO 9001 is often requested by larger buyers, in tenders and by export customers.',
      },
      {
        name: 'Construction & Engineering',
        description:
          'Civil, mechanical, electrical engineering. ISO 9001 is often requested in construction tenders, including government infrastructure projects.',
      },
      {
        name: 'IT & Technology',
        description:
          'Software development, IT services, system integrators. ISO 9001 is often requested in government IT tenders and by GLC and corporate clients.',
      },
      {
        name: 'Healthcare & Medical',
        description:
          'Clinics, medical device suppliers, pharmaceutical distributors. Complements KKM and MDA requirements. Builds patient and partner confidence.',
      },
      {
        name: 'Oil & Gas',
        description:
          'Upstream, downstream, and support services. Oil and gas buyers often ask vendors for a quality management system aligned with ISO 9001.',
      },
      {
        name: 'Logistics & Warehousing',
        description:
          'Freight forwarding, 3PL, cold chain, distribution. Documented quality processes help reduce damage, delays and customer complaints.',
      },
      {
        name: 'Education & Training',
        description:
          'Private colleges, training providers, education groups. ISO 9001 provides a framework for institutional quality assurance.',
      },
      {
        name: 'Professional Services',
        description:
          'Consulting, legal, accounting, recruitment firms. Show corporate clients that ask for ISO 9001 how your firm manages quality.',
      },
    ],
    footer:
      "Don't see your industry? ISO 9001 applies to any organization with processes and customers, whatever its size or sector. [Discuss your industry with us](#contact).",
  },
  process: {
    title: 'How we prepare you for certification',
    intro:
      "A clear, step-by-step approach to prepare you for certification. The timeline depends on your readiness and the certification body's audit date, and is agreed after the gap analysis.",
    steps: [
      {
        title: 'Initial consultation',
        description: 'We assess your current operations and create a customized certification roadmap.',
        details:
          "During this free consultation, our ISO consultants will review your existing quality practices, understand your business operations, and explain the certification journey. We'll then send you a written proposal covering scope and investment. Paid work starts only after you accept it.",
      },
      {
        title: 'Gap analysis',
        description: 'We identify what you already have in place and what needs to be developed.',
        details:
          "Our comprehensive gap analysis compares your current practices against ISO 9001:2015 requirements. We'll document existing quality controls, identify compliance gaps, assess your processes and controls, and prioritize actions needed for certification. We then agree the project timeline with you, based on your readiness and the certification body's audit availability.",
      },
      {
        title: 'Documentation',
        description: 'We help you create all required QMS documentation tailored to your organization.',
        details:
          'Working closely with your team, we develop essential documents including: Quality Policy, Quality Manual, Process Procedures, Work Instructions, Forms and Records, and Control of Documents procedures. All documentation is customized for your specific operations.',
      },
      {
        title: 'Implementation',
        description: 'We help you build and document your quality management system.',
        details:
          'This phase involves putting your QMS into practice. We provide training for your staff on quality awareness and their roles, help establish monitoring and measurement systems, implement process controls, and ensure your team is ready to maintain the system independently.',
      },
      {
        title: 'Internal audit and management review',
        description: 'We conduct internal audits and prepare you for the certification audit.',
        details:
          'Our consultants perform a thorough internal audit to verify QMS effectiveness and identify any non-conformities. We train your internal audit team, facilitate management review meetings, and address any findings before the external certification audit.',
      },
      {
        title: 'Certification audit',
        description: 'We prepare you for the external audit and support you through the process.',
        details:
          'We help you select an accredited certification body (SIRIM, BSI, TUV, etc.) and prepare for the Stage 1 (documentation review) and Stage 2 (implementation audit) assessments. Our team is available to support you during the audits and help address any findings.',
      },
    ],
    cta: 'Start your ISO 9001 project',
    moreLink: 'View detailed certification process',
  },
  founder: {
    title: 'You work directly with the founder, not a junior consultant',
    intro: 'At AA Alive every client works directly with founder Evin Lim and our senior team.',
    subheading: 'Why Malaysian businesses work with Evin Lim',
    points: [
      {
        title: 'ISO consulting since 2016',
        text: 'Founded AA Alive Sdn Bhd in 2016 and leads its ISO 9001, ISO 14001 and ISO 45001 consulting work for Malaysian businesses.',
      },
      {
        title: 'Work across industries',
        text: 'We work with small and larger companies in manufacturing, construction, IT, healthcare, food processing and logistics.',
      },
      {
        title: 'A clear, staged plan',
        text: 'A structured method, with the project timeline agreed after the gap analysis. We do the documentation work so your team can stay focused on daily operations.',
      },
      {
        title: 'Direct WhatsApp access to the founder',
        text: 'No call centres or ticket systems: direct WhatsApp access to your consultant.',
      },
    ],
    role: 'Founder & Managing Director',
    linkedin: 'Connect on LinkedIn',
    quote: 'My team and I do it properly, at a fair price.',
    media:
      'Featured on BERNAMA TV (Ruang Bicara, July 2026) and in the Superbrands Malaysia CEO interviews. [Watch the interviews](/media)',
    cta: 'Chat with Evin directly',
  },
  whatIs: {
    title: 'What is ISO 9001?',
    intro:
      "**ISO 9001** is the world's most recognized quality management standard, published by the International Organization for Standardization (ISO). It provides a systematic framework for organizations to consistently deliver products and services that meet customer expectations and regulatory requirements. The version companies certify to today, **ISO 9001:2015**, emphasizes risk-based thinking, leadership commitment, and integration with business strategy. ISO published the next revision, **ISO 9001:2026**, in September 2026 — we build every QMS to ISO 9001:2015 and prepare it for the move to 2026.",
    structureTitle: 'The ISO 9001:2015 Standard Structure',
    structure:
      'ISO 9001:2015 follows the High-Level Structure (HLS) common to all ISO management system standards. This makes it easier to integrate with other certifications like [ISO 14001 (Environmental)](https://esgiso.com/iso-14001-requirements) and ISO 45001 (Occupational Health & Safety). The standard is organized into 10 clauses, with clauses 4-10 containing the requirements for certification.',
    pdcaTitle: 'The Plan-Do-Check-Act (PDCA) Cycle',
    pdcaIntro:
      'At the heart of ISO 9001 is the PDCA cycle, a continuous improvement methodology that ensures your [Quality Management System (QMS)](/quality-management-system-malaysia) evolves and improves over time:',
    pdca: [
      {
        label: 'Plan:',
        text: 'Establish quality objectives and processes needed to deliver results in accordance with customer requirements and organizational policies',
      },
      { label: 'Do:', text: 'Implement the processes as planned, including resource allocation and operational controls' },
      { label: 'Check:', text: 'Monitor and measure processes and products against policies, objectives, and requirements' },
      {
        label: 'Act:',
        text: 'Take actions to continually improve process performance based on audit findings, data analysis, and management reviews',
      },
    ],
    clausesTitle: 'Key Clauses of ISO 9001:2015',
    clauses: [
      { title: 'Clause 4: Context of the Organization', text: 'Understanding internal/external issues and stakeholder needs' },
      { title: 'Clause 5: Leadership', text: 'Top management commitment and quality policy' },
      { title: 'Clause 6: Planning', text: 'Risk assessment, opportunities, and quality objectives' },
      { title: 'Clause 7: Support', text: 'Resources, competence, awareness, and documentation' },
      { title: 'Clause 8: Operation', text: 'Product/service planning, design, production, and delivery' },
      { title: 'Clause 9: Performance Evaluation', text: 'Monitoring, internal audits, and management review' },
      { title: 'Clause 10: Improvement', text: 'Nonconformity, corrective actions, and continual improvement' },
    ],
    closing:
      "Whether you're a small business, manufacturing company, or service provider in Malaysia, ISO 9001 helps you streamline operations, reduce errors, ensure customer satisfaction, and build lasting trust with customers and partners. Learn more about the [benefits of ISO 9001 certification](/iso-9001-benefits).",
  },
  pricing: {
    title: 'ISO 9001 packages and pricing',
    intro:
      'Transparent consultancy pricing. Certification body audit fees are quoted separately. Every package covers our consultancy support from gap analysis to the certification audit.',
    cbNote:
      'Certification body (CB) audit fees are separate and typically range from RM 3,000 - RM 8,000 depending on organization size. We help you compare quotes from accredited CBs.',
    lastUpdated: 'Last updated:',
    mostPopular: 'Most Popular',
    getStarted: 'Get Started',
    contactUs: 'Contact Us',
    packages: [
      {
        name: 'SME Package',
        price: 'RM 13,000',
        description: 'For small businesses with 5-30 employees',
        features: [
          'Complete gap analysis assessment',
          'Full QMS documentation (Quality Manual, SOPs, Forms)',
          '2 on-site consultation visits',
          'Staff quality awareness training',
          'Internal audit support',
          'Certification audit preparation',
          'Audit day support',
          '3 months post-certification guidance',
        ],
        popular: false,
        custom: false,
      },
      {
        name: 'Professional Package',
        price: 'RM 22,000',
        description: 'For medium businesses with 30-100 employees',
        features: [
          'Everything in SME Package, plus:',
          'Advanced process mapping and optimization',
          '4 on-site consultation visits',
          'Departmental-level training workshops',
          'Risk assessment & mitigation planning',
          'KPI framework development',
          'Management review facilitation',
          '6 months post-certification support',
          'Surveillance audit preparation (Year 1)',
        ],
        popular: true,
        custom: false,
      },
      {
        name: 'Enterprise Package',
        price: 'Custom',
        description: 'For large organizations with 100+ employees or multi-site',
        features: [
          'Everything in Professional Package, plus:',
          'Multi-site coordination and harmonization',
          'Unlimited on-site consultation visits',
          'Executive leadership workshops',
          'Integrated Management System (ISO 14001, ISO 45001)',
          'Supplier quality management setup',
          'Digital QMS platform implementation',
          '12 months ongoing support',
          'Full recertification cycle management',
        ],
        popular: false,
        custom: true,
      },
    ],
    payment: 'Flexible payment plans are available. [Ask us about a plan that works for your budget](#contact).',
  },
  faq: {
    title: 'ISO 9001 certification in Malaysia: frequently asked questions',
    intro: 'Everything Malaysian businesses need to know about ISO 9001 certification, costs, timeline, and process.',
    items: [
      {
        question: 'How much does ISO 9001 certification cost in Malaysia in 2026?',
        summary: 'ISO 9001 certification consulting in Malaysia starts from RM 13,000 for SMEs. Here is the full pricing breakdown:',
        bullets: [
          'SME Package (5-30 employees): From RM 13,000',
          'Professional Package (30-100 employees): RM 22,000',
          'Enterprise Package (100+ employees): Custom pricing',
          'Includes: gap analysis, full documentation, staff training, internal audit, and audit preparation',
          'Certification body (CB) audit fees are separate: RM 3,000 - RM 8,000 depending on organization size',
          'We help you compare quotes from accredited CBs (SIRIM, BSI, TUV, SGS, etc.)',
        ],
        schemaAnswer:
          'ISO 9001 certification consulting in Malaysia starts from RM 13,000 for SMEs (5-30 employees). The Professional package for medium businesses (30-100 employees) is RM 22,000, and Enterprise packages are custom-priced. Prices include gap analysis, full documentation, staff training, internal audit, and certification audit preparation. CB audit fees are separate (RM 3,000 - RM 8,000).',
      },
      {
        question: 'How long does it take to get ISO 9001 certified in Malaysia?',
        summary: 'There is no fixed timeline. It depends on your readiness and on the certification body’s audit date:',
        bullets: [
          'Your starting point: which quality processes and records are already in place',
          'Organization size, scope and number of sites',
          'How quickly your team reviews and approves documentation',
          'The dates the certification body schedules for the Stage 1 and Stage 2 audits',
          'We agree the project timeline with you after the gap analysis',
          'We handle the documentation, process setup and audit preparation with your team',
        ],
        schemaAnswer:
          'ISO 9001 certification timelines in Malaysia depend on your organisation’s readiness, size and scope, and on the dates the certification body schedules the audits. We agree the project timeline with you after the gap analysis, and handle documentation, process setup and audit preparation with your team.',
      },
      {
        question: 'What is ISO 9001 certification and why do Malaysian businesses pursue it?',
        summary:
          "ISO 9001 is the world's most recognized Quality Management System (QMS) standard. Malaysian businesses pursue it because:",
        bullets: [
          'It is often requested by larger buyers and in tenders, including government, GLC and MNC supply-chain procurement',
          'It gives customers independent, accredited evidence of how you manage quality',
          'Documented processes help reduce errors, rework and waste',
          'Requirements vary by buyer and tender, so check the specific tender or vendor registration you are targeting',
        ],
        schemaAnswer:
          "ISO 9001 is the world's most recognized Quality Management System (QMS) standard. Malaysian businesses pursue it because it is often requested by larger buyers and in tenders, it gives customers independent evidence of how quality is managed, and documented processes help reduce errors and rework.",
      },
      {
        question: 'What are the key requirements of ISO 9001:2015?',
        summary: 'ISO 9001:2015 has 10 clauses, with clauses 4-10 containing certification requirements:',
        bullets: [
          'Clause 4 (Context): Understand your organization, stakeholders, and QMS scope',
          'Clause 5 (Leadership): Top management commitment and quality policy',
          'Clause 6 (Planning): Risk-based thinking and quality objectives',
          'Clause 7 (Support): Resources, competence, awareness, and documented information',
          'Clause 8 (Operation): Planning, design, production, and delivery controls',
          'Clause 9 (Performance Evaluation): Monitoring, internal audits, and management review',
          'Clause 10 (Improvement): Corrective actions and continual improvement',
          'The standard follows the Plan-Do-Check-Act (PDCA) cycle with emphasis on risk-based thinking',
        ],
        schemaAnswer:
          'ISO 9001:2015 has 10 clauses. Clauses 4-10 contain requirements: Context of the Organization, Leadership, Planning, Support, Operation, Performance Evaluation, and Improvement. The standard follows the Plan-Do-Check-Act (PDCA) cycle and emphasizes risk-based thinking.',
      },
      {
        question: 'What about ISO 9001:2026 — should I certify to 2015 or 2026?',
        summary:
          'ISO published ISO 9001:2026 in September 2026, but certification today is still to ISO 9001:2015. Here is what that means for you:',
        bullets: [
          'ISO 9001:2026 replaces ISO 9001:2015 after a three-year transition period (to around September 2029)',
          'Certification bodies must first be accredited to audit the new version, so 2026 certificates are expected from around mid-2027',
          'An ISO 9001:2015 certificate remains valid during the transition period',
          'The 2026 revision keeps the same 10-clause structure, so a well-built 2015 QMS carries over',
          'We build your QMS to ISO 9001:2015 and prepare it for the 2026 transition',
        ],
        schemaAnswer:
          'ISO published ISO 9001:2026 in September 2026, with a three-year transition period (to around September 2029). Certification bodies must first be accredited to audit the new version, so certification today is still to ISO 9001:2015, and 2015 certificates remain valid during the transition. The 2026 revision keeps the same 10-clause structure, so a well-built ISO 9001:2015 QMS carries over to 2026.',
      },
      {
        question: 'Do I need any prerequisites before getting ISO 9001?',
        summary: 'No prerequisites are needed. ISO 9001 is open to any organization of any size in any industry.',
        bullets: [
          'No previous certifications required',
          'No specific qualifications or minimum company age needed',
          'Works for any industry — manufacturing, construction, IT, services, healthcare, etc.',
          'If you plan to add ISO 14001 or ISO 45001 later, implementation is smoother since all share the same structure',
          'We support Integrated Management System (IMS) implementation covering multiple standards simultaneously',
        ],
        schemaAnswer:
          'No prerequisites are needed for ISO 9001 certification. It is open to any organization of any size in any industry. No previous certifications, specific qualifications, or minimum company age is required.',
      },
      {
        question: 'How often do I need to renew ISO 9001 certification?',
        summary: 'ISO 9001 certification is valid for 3 years with annual surveillance audits:',
        bullets: [
          'Year 1: Surveillance audit (smaller scope to verify ongoing compliance)',
          'Year 2: Surveillance audit',
          'Year 3: Recertification audit (comprehensive audit to renew for another 3 years)',
          'We can support you in maintaining your QMS and preparing for surveillance audits',
          'Post-certification support included for 3-12 months depending on your package',
        ],
        schemaAnswer:
          'ISO 9001 certification is valid for 3 years. You need surveillance audits in Year 1 and Year 2, and a full recertification audit in Year 3 to renew for another 3-year cycle.',
      },
      {
        question: 'What is the difference between ISO 9001 and other ISO standards like ISO 14001 and ISO 45001?',
        summary: 'Each ISO standard focuses on a different management area. Here is how they compare:',
        bullets: [
          'ISO 9001: Quality Management — ensuring products/services consistently meet customer requirements',
          'ISO 14001: Environmental Management — managing environmental impact and compliance',
          'ISO 45001: Occupational Health & Safety — protecting workers from workplace hazards',
          'All three share the same Annex SL structure, making integration straightforward',
          'Many Malaysian companies start with ISO 9001 as their foundation, then add others',
          'We can implement all three as a single Integrated Management System (IMS)',
        ],
        schemaAnswer:
          'ISO 9001 covers Quality Management, ISO 14001 covers Environmental Management, and ISO 45001 covers Occupational Health & Safety. All three share the same Annex SL structure and can be integrated into a single management system.',
      },
      {
        question: 'Which certification bodies (CBs) do you work with in Malaysia?',
        summary: 'We prepare clients for audits by the major accredited certification bodies in Malaysia, including:',
        bullets: [
          'SIRIM QAS International',
          'BSI (British Standards Institution)',
          'TUV SUD and TUV Rheinland',
          'SGS Malaysia',
          'Bureau Veritas',
          "DNV and Lloyd's Register",
          'All recommended CBs are accredited by recognized bodies (DSM Malaysia, UKAS UK)',
          'We help you choose a CB based on your industry, budget, and international recognition needs',
        ],
        schemaAnswer:
          "We prepare clients for audits by the major accredited certification bodies in Malaysia, including SIRIM QAS, BSI, TUV SUD, TUV Rheinland, SGS, Bureau Veritas, DNV, and Lloyd's Register. All are accredited by recognized accreditation bodies.",
      },
      {
        question: 'Does ISO 9001 help with government tenders in Malaysia?',
        summary: 'ISO 9001 is often requested in Malaysian government and GLC procurement, but requirements vary by tender:',
        bullets: [
          'Public works and infrastructure tenders often ask contractors for ISO 9001',
          'GLCs and larger buyers often ask vendors for ISO 9001 certification',
          'Always check the specific tender document or vendor registration requirements',
          'Certification helps you meet a tender requirement; the award decision rests with the buyer',
        ],
        schemaAnswer:
          'ISO 9001 certification is often requested in Malaysian government and GLC tenders and by larger buyers. Requirements vary by tender, so check the specific tender document or vendor registration. Certification helps you meet that requirement; the award decision rests with the buyer.',
      },
      {
        question: 'What happens during the ISO 9001 certification audit?',
        summary: 'The certification audit has two stages conducted by an accredited certification body:',
        bullets: [
          'Stage 1 (Documentation Review): Auditor reviews your QMS documentation for completeness — typically 1 day for SMEs',
          'Stage 2 (Implementation Audit): On-site verification that processes are followed in practice — 1-3 days depending on size',
          'Auditors interview staff, observe operations, and check records',
          'Minor non-conformities: you get 90 days to address them',
          'Preparation beforehand helps reduce audit findings',
        ],
        schemaAnswer:
          'The ISO 9001 certification audit has two stages: Stage 1 is a documentation review (1 day for SMEs) and Stage 2 is an on-site implementation audit (1-3 days). Auditors verify documentation completeness and that processes are followed in practice.',
      },
    ],
    stillQuestions: 'Still have questions about ISO 9001 certification?',
    cta: 'Ask us on WhatsApp',
  },
  answers: {
    title: 'ISO 9001 certification in Malaysia: quick answers',
    intro: 'Direct answers to the questions Malaysian businesses ask most before starting ISO 9001 certification.',
    items: [
      {
        question: 'How much does ISO 9001 certification cost in Malaysia?',
        answer:
          'ISO 9001 certification consulting in Malaysia costs from RM 13,000 for SMEs with 5–30 employees. The Professional package for organizations with 30–100 employees is RM 22,000, and Enterprise packages for 100+ employees are custom-quoted. These fees cover gap analysis, full QMS documentation, staff training, internal audit and certification audit preparation. Certification body audit fees are charged separately, typically RM 3,000 to RM 8,000 depending on organization size.',
      },
      {
        question: 'How long does ISO 9001 certification take in Malaysia?',
        answer:
          'ISO 9001 certification timelines in Malaysia depend on your organisation’s readiness, size and scope, and on the date the certification body schedules the audit. The timeline is agreed with you after the gap analysis. As consultants, we handle the documentation, process setup and audit preparation with your team.',
      },
      {
        question: 'What is the ISO 9001 certification process?',
        answer:
          'ISO 9001 certification in Malaysia follows five steps: (1) a free initial consultation, followed by a gap analysis of your current practices, (2) QMS documentation development, (3) implementation and staff training, (4) internal audit and management review, and (5) the certification body audit — Stage 1 reviews your documentation and Stage 2 verifies implementation on-site. Accredited certification bodies include SIRIM QAS, BSI, TUV, SGS, Bureau Veritas, DNV and Lloyd’s Register.',
      },
      {
        question: 'Who needs ISO 9001 certification in Malaysia?',
        answer:
          'ISO 9001 is often requested by larger buyers and in tenders, including government, GLC and MNC supply-chain procurement in Malaysia. Requirements vary by buyer and scheme, so check the specific tender or vendor registration you are targeting. There are no prerequisites: organizations of any size and industry can pursue certification.',
      },
    ],
    extra: {
      heading: 'Soalan Lazim dalam Bahasa Malaysia',
      lang: 'ms-MY',
      items: [
        {
          question: 'Berapakah kos pensijilan ISO 9001 di Malaysia?',
          answer:
            'Kos perundingan pensijilan ISO 9001 di Malaysia bermula dari RM 13,000 untuk PKS (5–30 pekerja). Pakej Professional untuk syarikat 30–100 pekerja ialah RM 22,000. Harga ini merangkumi analisis jurang, dokumentasi QMS lengkap, latihan kakitangan, audit dalaman dan persediaan audit pensijilan. Yuran badan pensijilan (SIRIM, BSI, TUV, SGS) dikenakan secara berasingan, biasanya RM 3,000 hingga RM 8,000.',
        },
        {
          question: 'Berapa lama tempoh untuk mendapatkan sijil ISO 9001?',
          answer:
            'Tempoh pensijilan bergantung pada tahap kesediaan syarikat anda dan tarikh audit yang ditetapkan oleh badan pensijilan. Jadual kerja dipersetujui bersama anda selepas analisis jurang. Konsultasi pertama adalah percuma: hubungi kami melalui WhatsApp di +60 10-206 2070.',
        },
      ],
    },
  },
  guidesHeading: 'ISO 9001 guides',
  contact: {
    title: "Let's discuss your certification",
    intro:
      'Share your details and one of our consultants will get back to you to understand your needs and answer any questions.',
    note: 'Your first consultation is free and without obligation (WhatsApp, phone or video). Paid work starts only after you accept a written proposal.',
    email: 'Email',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    chatWithUs: 'Chat with us',
    form: {
      name: 'Full Name',
      namePlaceholder: 'Your name',
      company: 'Company Name',
      companyPlaceholder: 'Your company',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      messagePlaceholder: 'Tell us about your certification needs...',
      submit: 'Send via WhatsApp',
    },
  },
}

export default en
