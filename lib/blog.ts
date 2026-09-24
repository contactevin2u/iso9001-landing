/**
 * Blog posts. Paragraph and list strings support the inline **bold** and
 * [text](/href) markup rendered by components/Rich.tsx.
 *
 * Copy rules (Google Ads policy on this domain): no certification timelines,
 * no client counts, success rates or reviews, no comparisons with other consultants,
 * and we "prepare" clients for certification, never "certify" them.
 */

export type Block =
  | { h2: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { table: { head: string[]; rows: string[][] } }
  | { note: string }

export interface BlogPost {
  slug: string
  title: string
  /** <title> tag, kept under 60 characters. */
  seoTitle: string
  description: string
  keywords: string[]
  published: string
  updated: string
  /** Answer-first summary shown at the top (and quoted by AI answers). */
  summary: string[]
  body: Block[]
  faqs: { q: string; a: string }[]
  related: string[]
}

export const BLOG_AUTHOR = {
  name: 'Evin Lim',
  role: 'Founder and Managing Director, AA Alive Sdn Bhd',
  url: 'https://isoconsultantmalaysia.com/about',
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'iso-9001-mandatory-documents',
    title: 'ISO 9001 mandatory documents and records: the complete list',
    seoTitle: 'ISO 9001 Mandatory Documents and Records List',
    description:
      'Every document and record ISO 9001:2015 requires, clause by clause, plus the documents most companies add and what changes with ISO 9001:2026.',
    keywords: [
      'ISO 9001 mandatory documents',
      'ISO 9001 documented information',
      'ISO 9001 required records',
      'ISO 9001 documents list',
      'ISO 9001 quality manual',
    ],
    published: '2026-09-24',
    updated: '2026-09-24',
    summary: [
      'ISO 9001:2015 does not require a quality manual or a fixed set of procedures. It requires "documented information" in specific clauses.',
      'Three items must be maintained as documents: the QMS scope (4.3), the quality policy (5.2) and the quality objectives (6.2).',
      'About twenty types of records must be retained, including competence, calibration, supplier evaluation, internal audit, management review and corrective action records.',
      'ISO 9001:2026 keeps the same approach to documented information, so a well-built 2015 document set carries forward.',
    ],
    body: [
      { h2: 'Documented information: what the standard actually asks for' },
      {
        p: 'ISO 9001:2015 replaced the old terms "documents" and "records" with one term: **documented information**. The standard uses two phrases to tell you which is which:',
      },
      {
        ul: [
          '**"Maintain documented information"** means a document you keep up to date, such as a policy or a procedure.',
          '**"Retain documented information"** means a record: evidence that something happened, such as an audit report or a training record.',
        ],
      },
      {
        p: 'Clause 7.5.1(b) also asks for any other documented information your organisation decides it needs for the QMS to work. That is where most procedures and work instructions come from. The size of your company, the complexity of your processes and the competence of your people all affect how much you need.',
      },
      { h2: 'Documents you must maintain' },
      {
        table: {
          head: ['Clause', 'Document', 'What it covers'],
          rows: [
            ['4.3', 'Scope of the QMS', 'Products and services covered, sites, and justification for any requirement you say does not apply'],
            ['4.4', 'Information to support process operation', 'Whatever you need so processes run as planned (to the extent necessary)'],
            ['5.2', 'Quality policy', 'Top management commitment, available to staff and relevant interested parties'],
            ['6.2', 'Quality objectives', 'Measurable objectives for relevant functions and levels'],
            ['8.1', 'Operational planning information', 'Enough to be confident processes were carried out as planned'],
          ],
        },
      },
      { h2: 'Records you must retain' },
      {
        table: {
          head: ['Clause', 'Record'],
          rows: [
            ['4.4', 'Evidence that processes are carried out as planned'],
            ['7.1.5.1', 'Evidence that monitoring and measuring resources are fit for purpose'],
            ['7.1.5.2', 'Basis used for calibration or verification when no national or international standard exists'],
            ['7.2', 'Evidence of competence (qualifications, training, experience)'],
            ['8.1', 'Evidence that products and services conform to requirements'],
            ['8.2.3.2', 'Results of the review of customer requirements, and any new requirements'],
            ['8.3.2 – 8.3.6', 'Design and development records: planning, inputs, controls, outputs and changes (only if design applies)'],
            ['8.4.1', 'Evaluation, selection, monitoring and re-evaluation of external providers'],
            ['8.5.2', 'Unique identification of outputs, when traceability is a requirement'],
            ['8.5.3', 'Customer or external provider property that is lost, damaged or unsuitable'],
            ['8.5.6', 'Review of changes to production or service provision, who authorised them and any actions'],
            ['8.6', 'Release of products and services, including acceptance criteria and who authorised release'],
            ['8.7.2', 'Nonconforming outputs: description, actions taken, concessions and who decided'],
            ['9.1.1', 'Results of monitoring, measurement, analysis and evaluation'],
            ['9.2.2', 'Internal audit programme and audit results'],
            ['9.3.3', 'Management review results'],
            ['10.2.2', 'Nature of nonconformities, actions taken and results of corrective action'],
          ],
        },
      },
      {
        note: 'If a clause does not apply to you, for example design and development (8.3) for a company that only builds to customer drawings, you state and justify that in your QMS scope. The related records are then not needed.',
      },
      { h2: 'Documents most companies add, even though they are optional' },
      {
        p: 'Certification auditors cannot raise a nonconformity just because an optional document is missing. They check whether your processes are controlled and effective. In practice, most Malaysian SMEs find these documents make that easier to show:',
      },
      {
        ul: [
          '**Quality manual**: a short overview of the QMS, its processes and how they interact. Useful for new staff and customers, even though it is no longer mandatory.',
          '**Context and interested parties register**: supports clauses 4.1 and 4.2, and is where climate change is considered under the 2024 amendment.',
          '**Risk and opportunity register**: supports clause 6.1.',
          '**Procedures** for document control, internal audit, nonconformity and corrective action, purchasing, and control of nonconforming output.',
          '**Work instructions and forms** where a mistake would affect product or service quality.',
          '**Organisation chart and job descriptions** to show roles, responsibilities and authorities (clause 5.3).',
        ],
      },
      { h2: 'How to keep the document set lean' },
      {
        ol: [
          'Start from your real processes, not from a template. Document only what people need in order to do the work consistently.',
          'Use the records you already keep. Delivery orders, job sheets, inspection checklists and WhatsApp approvals can all be evidence if they are controlled.',
          'Give each document an owner, a version and an approval, and keep the current version where people work.',
          'Set retention periods for records that match customer, legal and warranty needs.',
          'Review the set at each management review and remove anything nobody uses.',
        ],
      },
      { h2: 'What changes with ISO 9001:2026' },
      {
        p: 'ISO 9001:2026 keeps the same approach to documented information and the same 10-clause structure. The main updates to plan for are in context (including climate change), risks and opportunities, and quality culture. See our [ISO 9001:2026 transition guide](/iso-9001-2026-transition) for details. For the clause-by-clause requirements, see [ISO 9001 requirements](/iso-9001-requirements).',
      },
    ],
    faqs: [
      {
        q: 'Is a quality manual mandatory in ISO 9001:2015?',
        a: 'No. ISO 9001:2015 removed the requirement for a quality manual. Many companies keep a short one because it helps explain the QMS to staff, customers and auditors.',
      },
      {
        q: 'How many mandatory procedures does ISO 9001:2015 require?',
        a: 'None by name. The 2008 version required six documented procedures. ISO 9001:2015 instead requires documented information in specific clauses and lets you decide which procedures you need.',
      },
      {
        q: 'Can ISO 9001 documents be electronic?',
        a: 'Yes. Documented information can be in any format or media, including cloud folders and software, as long as it is controlled, protected and available where it is needed.',
      },
      {
        q: 'How long should ISO 9001 records be kept?',
        a: 'ISO 9001 does not set a retention period. You decide it, based on customer contracts, legal requirements, product life and warranty periods, and record it in your document control process.',
      },
    ],
    related: ['iso-9001-internal-audit-checklist', 'iso-9001-quality-objectives-examples'],
  },
  {
    slug: 'iso-9001-internal-audit-checklist',
    title: 'ISO 9001 internal audit checklist: how to plan and run an internal audit',
    seoTitle: 'ISO 9001 Internal Audit Checklist and Guide',
    description:
      'A practical ISO 9001 internal audit checklist by clause, how to build an audit programme, and how to write findings your certification body will accept.',
    keywords: [
      'ISO 9001 internal audit checklist',
      'ISO 9001 internal audit',
      'internal audit procedure ISO 9001',
      'ISO 9001 clause 9.2',
      'internal auditor training Malaysia',
    ],
    published: '2026-09-24',
    updated: '2026-09-24',
    summary: [
      'Clause 9.2 of ISO 9001 requires planned internal audits that check whether the QMS meets your own requirements and ISO 9001, and whether it is effectively implemented.',
      'You need an audit programme, defined criteria and scope for each audit, objective and impartial auditors, reported results, and retained records.',
      'Before the first certification audit, a full internal audit cycle and a management review must be completed.',
      'Good internal audits follow processes and evidence, not just a clause checklist.',
    ],
    body: [
      { h2: 'What clause 9.2 requires' },
      {
        p: 'ISO 9001 clause 9.2 asks you to run internal audits at planned intervals. Each audit checks two things: does the QMS conform to your own requirements and to ISO 9001, and is it **effectively implemented and maintained**? To meet the clause you need to:',
      },
      {
        ul: [
          'Plan an **audit programme** covering frequency, methods, responsibilities and reporting, taking into account the importance of each process, changes, and previous audit results.',
          'Define the **criteria and scope** of each audit.',
          'Choose auditors who are **objective and impartial**. In practice, people should not audit their own work.',
          'Report results to relevant management.',
          'Take correction and corrective action without undue delay.',
          'Keep records of the programme and the audit results.',
        ],
      },
      { h2: 'Build a simple audit programme' },
      {
        p: 'Most SMEs use a one-page annual plan: processes down the side, months across the top. Higher-risk processes, and areas with customer complaints or past findings, are audited more often. Every clause and every process should be covered at least once in each audit cycle.',
      },
      {
        table: {
          head: ['Process', 'Owner', 'Key clauses', 'Priority'],
          rows: [
            ['Sales and contract review', 'Sales manager', '8.2', 'High if orders are often changed'],
            ['Purchasing and suppliers', 'Purchasing', '8.4', 'High if suppliers affect quality'],
            ['Production or service delivery', 'Operations', '8.5, 8.6, 8.7', 'High'],
            ['Calibration and equipment', 'QA / maintenance', '7.1.5', 'Medium'],
            ['Training and competence', 'HR', '7.2, 7.3', 'Medium'],
            ['Management and planning', 'Top management', '4, 5, 6, 9.3', 'Medium'],
            ['Complaints and improvement', 'QA', '9.1.2, 10', 'High if complaints are rising'],
          ],
        },
      },
      { h2: 'ISO 9001 internal audit checklist by clause' },
      { p: 'Use these questions as prompts, then follow the evidence. Ask to see records, not just descriptions.' },
      { h3: 'Context and leadership (clauses 4 and 5)' },
      {
        ul: [
          'Is the QMS scope documented, and does it match what the company actually does?',
          'Have internal and external issues, and interested parties and their requirements, been reviewed recently?',
          'Can staff explain the quality policy and how their job affects it?',
          'Are roles, responsibilities and authorities for the QMS assigned and understood?',
        ],
      },
      { h3: 'Planning (clause 6)' },
      {
        ul: [
          'Is there a current list of risks and opportunities, with actions and owners?',
          'Are quality objectives measurable, monitored and updated? Is there a plan for each one?',
          'Were changes to the QMS planned, rather than made ad hoc?',
        ],
      },
      { h3: 'Support (clause 7)' },
      {
        ul: [
          'Is measuring equipment calibrated or verified, labelled, and are results recorded?',
          'Are competence requirements defined for each role, and is there evidence staff meet them?',
          'Are documents controlled: current version in use, obsolete versions removed or marked?',
          'Are records legible, retrievable and protected?',
        ],
      },
      { h3: 'Operation (clause 8)' },
      {
        ul: [
          'Are customer requirements reviewed before accepting an order, and are changes recorded?',
          'Are suppliers evaluated, and is performance monitored and re-evaluated?',
          'Are work instructions available where needed and followed in practice?',
          'Is product or service released only after planned checks are done and authorised?',
          'Is nonconforming output identified, controlled and recorded?',
        ],
      },
      { h3: 'Performance evaluation and improvement (clauses 9 and 10)' },
      {
        ul: [
          'Is customer satisfaction monitored, and are the results used?',
          'Was the previous internal audit completed as planned, and are its findings closed?',
          'Did management review cover all required inputs and record decisions?',
          'For each nonconformity, was the root cause found and was the corrective action checked for effectiveness?',
        ],
      },
      { h2: 'Running the audit: five steps' },
      {
        ol: [
          '**Prepare.** Read the procedure, the last audit report and open actions for the area. Draft your questions.',
          '**Opening.** Agree the scope and timing with the process owner.',
          '**Collect evidence.** Interview, observe and sample records. Note what you saw: record numbers, dates and names of documents.',
          '**Evaluate.** Compare the evidence with the criteria. Classify each finding as a nonconformity, an observation or an opportunity for improvement.',
          '**Report and follow up.** Share findings at a short closing meeting, issue the report and track corrective actions to closure.',
        ],
      },
      { h2: 'How to write a good finding' },
      {
        p: 'A finding your certification body will respect has three parts: the **requirement**, the **evidence** and the **gap**. For example:',
      },
      {
        note: 'Requirement: clause 7.1.5.2 and procedure QP-07 require measuring equipment used for final inspection to be calibrated. Evidence: vernier caliper VC-03, in use at final inspection on 12 September, had a calibration due date of 30 June. Gap: equipment used for product release was past its calibration date.',
      },
      {
        p: 'Then follow the corrective action process described in our guide to [nonconformities and corrective action](/blog/iso-9001-nonconformity-corrective-action).',
      },
      { h2: 'Common mistakes' },
      {
        ul: [
          'Auditing only documents and never watching the work being done.',
          'Asking "do you have a procedure?" instead of "show me the last three times you did this".',
          'Writing vague findings with no objective evidence.',
          'Closing findings with a correction only (fixing the instance) and no corrective action (fixing the cause).',
          'Auditing your own department.',
        ],
      },
      {
        p: 'Internal auditor training is part of our [ISO 9001 consulting](/). For how the internal audit fits into the path to certification, see the [ISO 9001 certification process](/iso-9001-certification-process).',
      },
    ],
    faqs: [
      {
        q: 'How often should ISO 9001 internal audits be done?',
        a: 'ISO 9001 says "at planned intervals" and does not fix a frequency. Most companies cover every process and clause at least once a year, and audit high-risk or problem areas more often.',
      },
      {
        q: 'Who can be an ISO 9001 internal auditor?',
        a: 'Any competent employee who is objective and impartial, usually someone trained in ISO 9001 and audit techniques who does not audit their own work. Small companies sometimes use an external auditor to keep audits impartial.',
      },
      {
        q: 'Do I need an internal audit before the certification audit?',
        a: 'Yes. Certification bodies expect to see at least one complete internal audit cycle and a management review before the Stage 2 audit.',
      },
      {
        q: 'What is the difference between an internal audit and a certification audit?',
        a: 'An internal audit is done by you, or someone acting for you, to check your own QMS. A certification audit is done by an independent certification body, which decides whether to issue or keep your ISO 9001 certificate.',
      },
    ],
    related: ['iso-9001-nonconformity-corrective-action', 'iso-9001-management-review'],
  },
  {
    slug: 'iso-9001-management-review',
    title: 'ISO 9001 management review: required inputs, outputs and an agenda template',
    seoTitle: 'ISO 9001 Management Review: Inputs, Outputs, Agenda',
    description:
      'What ISO 9001 clause 9.3 requires from a management review, the inputs and outputs auditors check, a ready-to-use agenda, and how to keep the meeting useful.',
    keywords: [
      'ISO 9001 management review',
      'management review meeting agenda',
      'ISO 9001 clause 9.3',
      'management review inputs and outputs',
      'management review minutes template',
    ],
    published: '2026-09-24',
    updated: '2026-09-24',
    summary: [
      'Clause 9.3 requires top management to review the QMS at planned intervals to make sure it stays suitable, adequate, effective and aligned with the company’s strategic direction.',
      'The review must consider specific inputs, including previous actions, changes, performance data, resources, risks and improvement opportunities.',
      'Outputs must include decisions on improvement, changes to the QMS and resource needs, and the results must be kept as a record.',
      'Certification bodies expect at least one management review before the first certification audit.',
    ],
    body: [
      { h2: 'Why the management review matters' },
      {
        p: 'The management review is where top management looks at the whole quality management system and decides what to change. Auditors use it to judge leadership commitment (clause 5.1), so a meeting that only reads out numbers without any decisions is a common weakness.',
      },
      { h2: 'Required inputs (clause 9.3.2)' },
      {
        table: {
          head: ['Input', 'What to bring to the meeting'],
          rows: [
            ['Status of actions from previous reviews', 'Action list from the last minutes, with status'],
            ['Changes in external and internal issues', 'Market, regulation, customers, staff, technology, climate-related issues'],
            ['Customer satisfaction and feedback from interested parties', 'Survey results, complaints, compliments, returns'],
            ['Extent quality objectives were met', 'Objective scorecard: target vs actual'],
            ['Process performance and conformity of products and services', 'KPIs, reject and rework rates, on-time delivery'],
            ['Nonconformities and corrective actions', 'Open and closed NCs, repeat issues'],
            ['Monitoring and measurement results', 'Trends from clause 9.1 data'],
            ['Audit results', 'Internal and external audit findings'],
            ['Performance of external providers', 'Supplier ratings, late or rejected deliveries'],
            ['Adequacy of resources', 'People, equipment, infrastructure, work environment'],
            ['Effectiveness of actions on risks and opportunities', 'Risk register review'],
            ['Opportunities for improvement', 'Suggestions from staff, customers and audits'],
          ],
        },
      },
      { h2: 'Required outputs (clause 9.3.3)' },
      {
        p: 'The results of the review must include decisions and actions on:',
      },
      {
        ul: [
          'Opportunities for improvement.',
          'Any need for changes to the QMS.',
          'Resource needs.',
        ],
      },
      { p: 'You must retain documented information as evidence of the results. Minutes with an action list are the usual format.' },
      { h2: 'Management review agenda template' },
      {
        ol: [
          'Attendance and purpose of the meeting.',
          'Actions from the previous management review.',
          'Changes in context: internal and external issues, interested parties, climate change relevance.',
          'Quality objectives: results and whether targets remain right.',
          'Customer satisfaction, complaints and feedback.',
          'Process performance and product or service conformity.',
          'Nonconformities and corrective actions.',
          'Internal and external audit results.',
          'Supplier performance.',
          'Risks and opportunities: are actions working?',
          'Resources: people, training, equipment, infrastructure.',
          'Improvement opportunities and decisions.',
          'Action list: what, who, by when.',
        ],
      },
      { h2: 'Tips for a management review that auditors respect' },
      {
        ul: [
          '**Collect data first.** Ask each process owner for a one-page summary a week before.',
          '**Look at trends, not single figures.** One month of complaints tells you little; twelve months shows direction.',
          '**Record decisions with owners and dates.** An output without an owner is hard to show as effective at the next audit.',
          '**Link to strategy.** Clause 9.3.1 asks for alignment with strategic direction, so discuss growth plans, new customers or new products.',
          '**It does not have to be one meeting.** You can cover inputs across several management meetings, as long as all inputs are covered and recorded.',
        ],
      },
      { h2: 'ISO 9001:2026 note' },
      {
        p: 'ISO 9001:2026 puts more weight on top management promoting a quality culture and ethical behaviour. Expect auditors to look for this in management review discussions and decisions. Read the [ISO 9001:2026 transition guide](/iso-9001-2026-transition) for the other changes.',
      },
    ],
    faqs: [
      {
        q: 'How often should an ISO 9001 management review be held?',
        a: 'ISO 9001 says "at planned intervals". Most organisations hold at least one full review a year, and many small companies prefer twice a year so issues are picked up sooner.',
      },
      {
        q: 'Who should attend the management review?',
        a: 'Top management, meaning the person or group who directs the organisation, plus the people who own the key processes. The certification body will expect top management to be personally involved.',
      },
      {
        q: 'Can the management review be combined with other meetings?',
        a: 'Yes, as long as every required input is covered, outputs are decided and the results are recorded. Many companies combine it with ISO 14001 or ISO 45001 reviews in an integrated management system.',
      },
    ],
    related: ['iso-9001-quality-objectives-examples', 'iso-9001-internal-audit-checklist'],
  },
  {
    slug: 'iso-9001-nonconformity-corrective-action',
    title: 'ISO 9001 nonconformity and corrective action: major vs minor, root cause and closing findings',
    seoTitle: 'ISO 9001 Nonconformity and Corrective Action Guide',
    description:
      'The difference between major and minor nonconformities, correction vs corrective action, root cause analysis with 5 Whys, and how to close audit findings under ISO 9001.',
    keywords: [
      'ISO 9001 nonconformity',
      'major and minor nonconformity',
      'corrective action ISO 9001',
      'root cause analysis ISO 9001',
      'ISO 9001 clause 10.2',
      'CAPA ISO 9001',
    ],
    published: '2026-09-24',
    updated: '2026-09-24',
    summary: [
      'A nonconformity is a requirement that is not met: from ISO 9001, from a customer, from the law or from your own procedures.',
      'A correction fixes the problem you found. A corrective action removes the cause so it does not happen again. ISO 9001 clause 10.2 requires both where appropriate.',
      'At a certification audit, a major nonconformity must be closed with evidence before the certification body can issue or keep the certificate. A minor nonconformity needs an accepted action plan.',
      'Root cause analysis tools such as 5 Whys and fishbone diagrams help avoid actions that only treat symptoms.',
    ],
    body: [
      { h2: 'What counts as a nonconformity' },
      {
        p: 'A nonconformity is the non-fulfilment of a requirement. The requirement can come from ISO 9001 itself, a customer contract, a statutory or regulatory rule, or your own QMS documents. Nonconformities are found through internal audits, certification audits, customer complaints, inspections and day-to-day work.',
      },
      { h2: 'Major vs minor nonconformity' },
      {
        p: 'ISO 9001 does not grade nonconformities. Certification bodies do, following accreditation rules (ISO/IEC 17021-1). Definitions vary slightly between certification bodies, but the principle is the same:',
      },
      {
        table: {
          head: ['', 'Major nonconformity', 'Minor nonconformity'],
          rows: [
            ['Meaning', 'Affects the ability of the QMS to achieve its intended results', 'Does not affect that ability'],
            ['Typical examples', 'A required process is missing entirely; no internal audit or management review done; a pattern of product released without inspection', 'One training record missing; one document at an old revision; a single late supplier evaluation'],
            ['What the certification body needs', 'Correction and corrective action, verified before a certification decision (sometimes by a follow-up visit)', 'An accepted correction and corrective action plan, verified at the next audit'],
          ],
        },
      },
      {
        note: 'Several minor nonconformities against the same requirement can be raised as one major nonconformity, because together they show a system failure.',
      },
      { h2: 'Correction vs corrective action' },
      {
        ul: [
          '**Correction** deals with the immediate problem. Example: recalibrate the out-of-date caliper and check the products measured with it.',
          '**Corrective action** removes the cause. Example: find out why the calibration was missed, such as no reminder system, and fix that.',
        ],
      },
      { p: 'Auditors often reject responses that contain only a correction, or that give "retrain the operator" as the corrective action without showing why the training failed.' },
      { h2: 'The corrective action process in clause 10.2' },
      {
        ol: [
          '**React**: control and correct the nonconformity and deal with the consequences.',
          '**Evaluate the need for action**: review the nonconformity, find its causes, and check whether similar problems exist or could occur elsewhere.',
          '**Implement** the actions needed.',
          '**Review effectiveness**: after enough time has passed, check that the problem has not come back.',
          '**Update risks and opportunities** and make changes to the QMS if needed.',
          '**Keep records** of the nonconformity, the actions taken and the results.',
        ],
      },
      { h2: 'Root cause analysis with 5 Whys: a worked example' },
      { p: 'Finding: a customer received a batch with the wrong label.' },
      {
        ol: [
          'Why was the wrong label used? The operator picked the label for a similar product.',
          'Why did they pick the wrong one? Both labels are stored in the same unmarked tray.',
          'Why are they in the same tray? The new product was added without a change review of the packing area.',
          'Why was there no change review? The new product introduction checklist does not include packing and labelling.',
          'Why not? The checklist was written before the company started private-label packing.',
        ],
      },
      {
        p: 'Root cause: the new product introduction checklist is out of date. **Corrective action**: add packing and labelling to the checklist, separate and label the trays, and add a label check to final inspection. **Effectiveness check**: review labelling complaints and final inspection records over the following months.',
      },
      { h2: 'How to respond to certification audit findings' },
      {
        ul: [
          'Agree the facts at the closing meeting and make sure you understand each finding.',
          'Send the correction, root cause and corrective action plan in the format and within the period your certification body sets.',
          'For a major nonconformity, attach evidence that the actions are complete, such as updated procedures, training records and sample records.',
          'Keep all of it in your corrective action log so the auditor can follow it at the next surveillance audit.',
        ],
      },
      {
        p: 'We support clients through audit findings as part of our [ISO 9001 consulting](/). For how certification bodies run audits, see [ISO 9001 certification bodies in Malaysia](/iso-9001-certification-body-malaysia).',
      },
    ],
    faqs: [
      {
        q: 'Does ISO 9001 require preventive action?',
        a: 'Not as a separate clause. ISO 9001:2015 replaced preventive action with risk-based thinking in clause 6.1, so potential problems are handled through your risks and opportunities.',
      },
      {
        q: 'Can I still be certified with minor nonconformities?',
        a: 'Usually yes, once the certification body accepts your correction and corrective action plan. Major nonconformities must be closed and verified first.',
      },
      {
        q: 'What is an observation or opportunity for improvement?',
        a: 'A note from the auditor that is not a nonconformity. It points to something that could become a problem or could work better. You are not required to act on it, but auditors often check what you decided.',
      },
      {
        q: 'What is CAPA?',
        a: 'Corrective and preventive action. The term is common in ISO 13485 and GMP. In ISO 9001:2015 the equivalent is corrective action (clause 10.2) plus risk-based thinking (clause 6.1).',
      },
    ],
    related: ['iso-9001-internal-audit-checklist', 'iso-9001-mandatory-documents'],
  },
  {
    slug: 'iso-9001-quality-objectives-examples',
    title: 'ISO 9001 quality objectives: examples by department and how to set them',
    seoTitle: 'ISO 9001 Quality Objectives: Examples and How to Set',
    description:
      'What ISO 9001 clause 6.2 requires for quality objectives, SMART examples for sales, production, purchasing, service and HR, and a simple planning template.',
    keywords: [
      'ISO 9001 quality objectives examples',
      'quality objectives ISO 9001',
      'ISO 9001 clause 6.2',
      'KPI for ISO 9001',
      'measurable quality objectives',
    ],
    published: '2026-09-24',
    updated: '2026-09-24',
    summary: [
      'Clause 6.2 requires quality objectives for relevant functions, levels and processes that are consistent with the quality policy and measurable.',
      'Objectives must be monitored, communicated and updated, and each needs a plan: what will be done, resources, who is responsible, when it will be completed and how results will be evaluated.',
      'Good objectives come from customer requirements, past problems and business goals, not from a template.',
      'Quality objectives must be kept as documented information.',
    ],
    body: [
      { h2: 'What clause 6.2 requires' },
      { p: 'Your quality objectives must:' },
      {
        ul: [
          'Be consistent with the quality policy.',
          'Be measurable.',
          'Take applicable requirements into account.',
          'Be relevant to conformity of products and services and to customer satisfaction.',
          'Be monitored, communicated, and updated as appropriate.',
        ],
      },
      {
        p: 'For each objective you also plan **what** will be done, **what resources** are needed, **who** is responsible, **when** it will be completed and **how** results will be evaluated (clause 6.2.2).',
      },
      { h2: 'Examples of quality objectives by department' },
      {
        p: 'The targets below are placeholders. Set yours from your own baseline data, because an objective that is too easy or impossible to reach will not help you improve.',
      },
      {
        table: {
          head: ['Department', 'Objective', 'Measure'],
          rows: [
            ['Sales / customer service', 'Respond to customer enquiries within one working day', 'Share of enquiries answered on time'],
            ['Sales / customer service', 'Improve customer satisfaction', 'Average survey score; number of complaints per quarter'],
            ['Production', 'Reduce internal rejects and rework', 'Reject rate per month'],
            ['Production / logistics', 'Deliver orders on time and in full', 'On-time-in-full (OTIF) rate'],
            ['Quality', 'Close corrective actions on time', 'Share of CARs closed by due date'],
            ['Purchasing', 'Improve supplier quality', 'Supplier reject rate; late deliveries per supplier'],
            ['Service companies', 'Complete jobs without rework', 'Jobs needing a return visit per month'],
            ['HR / training', 'Keep staff competent for their roles', 'Share of planned training completed; competence gaps closed'],
            ['Maintenance', 'Reduce unplanned downtime', 'Hours of breakdown per month'],
          ],
        },
      },
      { h2: 'A simple objectives plan' },
      {
        table: {
          head: ['Objective', 'Action', 'Resources', 'Owner', 'Due', 'How evaluated'],
          rows: [
            ['Reduce reject rate from baseline', 'Add first-article check at machine set-up', 'Checklist, gauge, 1 hour of training', 'Production supervisor', 'End of quarter', 'Monthly reject report reviewed at management review'],
          ],
        },
      },
      { h2: 'How to choose the right objectives' },
      {
        ol: [
          'Start with what your customers complain about or measure you on.',
          'Look at your biggest internal costs of poor quality: rework, scrap, returns, repeat visits.',
          'Pick a small number of objectives that people can influence. Too many objectives and none get attention.',
          'Cascade: a company objective such as on-time delivery becomes a target for purchasing, production and dispatch.',
          'Review them at every [management review](/blog/iso-9001-management-review) and change them when they are achieved or no longer relevant.',
        ],
      },
      { h2: 'Mistakes auditors often see' },
      {
        ul: [
          '"Make every customer happy" with no way to measure it.',
          'Objectives copied from a template that nobody in the company tracks.',
          'No action plan: the objective exists but nothing was done to reach it.',
          'Objectives never updated, even after being met every month for years.',
          'Staff who cannot say which objective relates to their work.',
        ],
      },
      {
        p: 'Quality objectives are one of the documents ISO 9001 requires. See the full list in [ISO 9001 mandatory documents and records](/blog/iso-9001-mandatory-documents).',
      },
    ],
    faqs: [
      {
        q: 'How many quality objectives should a company have?',
        a: 'ISO 9001 does not set a number. Small companies often manage well with a handful of company-level objectives, broken down into targets for the departments that affect them.',
      },
      {
        q: 'What is the difference between a quality objective and a KPI?',
        a: 'A KPI is a measure you track. A quality objective is a target you commit to, with a plan to reach it. Many quality objectives use a KPI as their measure.',
      },
      {
        q: 'Is it a nonconformity if we miss a quality objective?',
        a: 'Not by itself. Auditors look at whether you monitored the objective, analysed why it was missed and took action. Ignoring a missed objective is more likely to lead to a finding.',
      },
    ],
    related: ['iso-9001-management-review', 'iso-9001-mandatory-documents'],
  },
  {
    slug: 'iso-9001-vs-iso-14001-vs-iso-45001',
    title: 'ISO 9001 vs ISO 14001 vs ISO 45001: which standard does your company need?',
    seoTitle: 'ISO 9001 vs ISO 14001 vs ISO 45001 Explained',
    description:
      'How ISO 9001 (quality), ISO 14001 (environment) and ISO 45001 (occupational health and safety) differ, what each one covers, and when an integrated management system makes sense.',
    keywords: [
      'ISO 9001 vs ISO 14001',
      'ISO 9001 vs ISO 45001',
      'ISO 9001 ISO 14001 ISO 45001 difference',
      'integrated management system Malaysia',
      'IMS ISO Malaysia',
    ],
    published: '2026-09-24',
    updated: '2026-09-24',
    summary: [
      'ISO 9001 covers quality: meeting customer requirements and improving customer satisfaction.',
      'ISO 14001 covers environmental management: controlling your environmental aspects and meeting environmental compliance obligations.',
      'ISO 45001 covers occupational health and safety: preventing work-related injury and ill health.',
      'All three share the same high-level clause structure, so they can be run together as an integrated management system (IMS).',
    ],
    body: [
      { h2: 'The three standards at a glance' },
      {
        table: {
          head: ['', 'ISO 9001', 'ISO 14001', 'ISO 45001'],
          rows: [
            ['Focus', 'Quality of products and services', 'Environmental performance', 'Occupational health and safety'],
            ['Main interested party', 'Customers', 'Community, regulators, customers', 'Workers and regulators'],
            ['Current edition', 'ISO 9001:2015 (ISO 9001:2026 published September 2026)', 'ISO 14001:2015', 'ISO 45001:2018'],
            ['Core risk tool', 'Risks and opportunities', 'Environmental aspects and impacts', 'Hazard identification and risk assessment (HIRARC)'],
            ['Key Malaysian laws it helps you manage', 'Customer and product requirements', 'Environmental Quality Act 1974 and its regulations', 'Occupational Safety and Health Act 1994 (as amended in 2022)'],
            ['Typical triggers', 'Customer or tender requirements, supplier registration', 'Customer supply-chain and ESG requirements, environmental risk', 'Customer or contractor requirements, workplace safety risk'],
          ],
        },
      },
      { h2: 'What they have in common' },
      {
        p: 'All three follow the ISO Harmonized Structure: the same 10 clauses, with the same core text for context, leadership, planning, support, performance evaluation and improvement. That means several elements can be shared:',
      },
      {
        ul: [
          'Context of the organisation and interested parties.',
          'Policy, roles, responsibilities and authorities.',
          'Risks and opportunities, and objectives.',
          'Competence, awareness, communication and documented information.',
          'Internal audit, management review, nonconformity and corrective action.',
        ],
      },
      { h2: 'Which one should you start with?' },
      {
        ul: [
          '**Start with ISO 9001** if customers, tenders or supplier registrations ask for a quality certificate, or if your main problems are errors, rework and complaints.',
          '**Consider ISO 14001** if customers ask about environmental management in supplier questionnaires or ESG reporting, or if your operations produce significant waste, emissions or effluent.',
          '**Consider ISO 45001** if your work involves significant safety hazards, such as construction, manufacturing and logistics, or if clients ask for it in contractor pre-qualification.',
        ],
      },
      {
        note: 'Always check your actual customer, tender or contract requirements before deciding. They are the most reliable guide to which certificate you need.',
      },
      { h2: 'Integrated management system (IMS)' },
      {
        p: 'An IMS runs two or three standards as one system: one manual, one set of shared procedures, one internal audit programme and one management review. Many certification bodies can also run combined audits. Companies choose an IMS to reduce duplicated paperwork and to manage quality, environment and safety decisions together.',
      },
      {
        p: 'If you already hold ISO 9001, adding ISO 14001 or ISO 45001 builds on the shared clauses you have in place. The new work is mostly in the standard-specific parts: environmental aspects and compliance obligations, or hazard identification, worker consultation and emergency preparedness.',
      },
      { h2: 'Where to go next' },
      {
        ul: [
          'ISO 9001 in Malaysia: [ISO 9001 certification Malaysia](/iso-9001-certification-malaysia).',
          'ISO 14001 and ESG: our sister site [esgiso.com](https://esgiso.com).',
          'Medical devices (ISO 13485): [iso13485.my](https://iso13485.my).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do I need ISO 9001 before ISO 14001 or ISO 45001?',
        a: 'No. Each standard can be certified on its own. Having ISO 9001 in place does make the others easier because the shared clauses are already working.',
      },
      {
        q: 'Can one certification body audit all three standards?',
        a: 'Yes, if it is accredited for each standard and your industry sector. Many offer combined or integrated audits.',
      },
      {
        q: 'Is ISO 45001 the same as OHSAS 18001?',
        a: 'ISO 45001 replaced OHSAS 18001. OHSAS 18001 certificates are no longer valid, so organisations moved to ISO 45001.',
      },
    ],
    related: ['iso-9001-mandatory-documents', 'iso-9001-management-review'],
  },
]

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function formatPostDate(iso: string) {
  return new Date(`${iso}T00:00:00+08:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kuala_Lumpur',
  })
}
