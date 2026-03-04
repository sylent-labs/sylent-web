// ── Category types ──

type ServiceCategorySlug =
    | "engineering"
    | "cloud-infrastructure"
    | "product"
    | "fintech-commerce"
    | "ai-automation"
    | "talent";

interface ServiceCategory {
    slug: ServiceCategorySlug;
    label: string;
    description: string;
}

// ── Service types ──

interface ServiceSection {
    heading: string;
    body: string;
}

interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    category: ServiceCategorySlug;
    overview: string;
    techSections: ServiceSection[];
    techStack: string[];
    relatedSlugs: string[];
}

// ── Categories ──

const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        slug: "engineering",
        label: "Engineering",
        description:
            "Production-grade systems built for scale, security and long-term maintainability.",
    },
    {
        slug: "cloud-infrastructure",
        label: "Cloud & Infrastructure",
        description:
            "Reliable cloud architecture, automated pipelines and infrastructure that runs itself.",
    },
    {
        slug: "product",
        label: "Product",
        description:
            "Mobile-first applications, interface systems and product strategy that drives adoption.",
    },
    {
        slug: "fintech-commerce",
        label: "Fintech & Commerce",
        description:
            "Secure financial platforms, payment systems and commerce solutions built for compliance.",
    },
    {
        slug: "ai-automation",
        label: "AI & Automation",
        description:
            "Practical AI systems and workflow automation that solve real operational problems.",
    },
    {
        slug: "talent",
        label: "Talent",
        description:
            "Embedded engineering teams and technical leadership scaled to your needs.",
    },
];

// ── Services ──

const SERVICES: Service[] = [
    // ═══ ENGINEERING ═══
    {
        slug: "full-stack-development",
        title: "Full-Stack Development",
        shortDescription:
            "Production-ready applications across web and mobile, from MVP to scale.",
        category: "engineering",
        overview:
            "We design and build complete applications from the ground up. That means frontend interfaces, backend APIs, databases, authentication, admin panels and everything in between. We handle iOS, Android and web under one roof so your product ships as a single cohesive system, not a collection of disconnected pieces.\n\nOur teams have shipped financial platforms, insurance portals, booking systems, e-commerce stores and internal enterprise tools. Every build starts with architecture. We define the data model, API contracts and deployment strategy before writing the first line of application code. The result is software that works on day one and scales without rewrites.",
        techSections: [
            {
                heading: "Architecture Approach",
                body: "We use a modular monolith or microservices pattern depending on scale requirements. For most early-stage products, a well-structured monolith with clean domain boundaries is faster to ship and easier to maintain. We split into services only when traffic patterns, team size or deployment requirements demand it. Every project starts with an architecture decision record that documents the reasoning.",
            },
            {
                heading: "Frontend Stack",
                body: "React and Next.js for web applications with server-side rendering, static generation or client-side rendering depending on the page requirements. React Native for cross-platform mobile apps targeting iOS and Android from a single codebase. TypeScript everywhere with strict mode enabled. Tailwind CSS for styling with a component-based design system.",
            },
            {
                heading: "Backend Stack",
                body: "Python with FastAPI or Django REST Framework for API services. Node.js with Express or Fastify when the project demands JavaScript end-to-end. PostgreSQL or MySQL for relational data. Firebase or MongoDB when document storage fits the domain. Redis for caching and session management. All APIs follow OpenAPI specification with auto-generated documentation.",
            },
            {
                heading: "Authentication and Authorization",
                body: "Role-based access control built into every application from the start. We implement JWT-based auth flows, OAuth2 integrations, multi-factor authentication and session management. For enterprise clients, we integrate with SSO providers like Okta, Auth0 and Azure AD. Permission models are defined at the data layer, not just the UI.",
            },
        ],
        techStack: [
            "React",
            "Next.js",
            "React Native",
            "TypeScript",
            "Python",
            "FastAPI",
            "Django",
            "PostgreSQL",
            "Redis",
            "Tailwind CSS",
        ],
        relatedSlugs: [
            "backend-systems-architecture",
            "mobile-first-app-development",
            "database-architecture",
        ],
    },
    {
        slug: "backend-systems-architecture",
        title: "Backend Systems Architecture",
        shortDescription:
            "Scalable backend systems for fintech, insurance, enterprise and high-traffic applications.",
        category: "engineering",
        overview:
            "Backend architecture is where most projects either succeed or collapse under their own weight. We design systems that handle real production load without falling apart. That means proper separation of concerns, clear API boundaries, efficient database access patterns and infrastructure that scales horizontally when traffic spikes.\n\nWe have built backend systems for fintech platforms processing thousands of transactions per minute, insurance systems managing complex policy logic, and enterprise tools serving organizations with thousands of users. Every system ships with monitoring, logging and alerting baked in from the start.",
        techSections: [
            {
                heading: "System Design",
                body: "We start with domain-driven design to identify bounded contexts and service boundaries. Data flow diagrams map every read and write path through the system. We identify hot paths early and design caching strategies before they become performance bottlenecks. Every system gets a capacity plan that estimates load at 1x, 10x and 100x current traffic.",
            },
            {
                heading: "API Layer",
                body: "RESTful APIs with consistent resource naming, proper HTTP status codes, pagination, filtering and versioning. GraphQL when the frontend needs flexible data fetching across multiple entities. gRPC for internal service-to-service communication where latency matters. All APIs are documented, tested and monitored.",
            },
            {
                heading: "Data Processing",
                body: "Asynchronous job processing with Celery, Bull or custom queue consumers depending on the stack. Event-driven architectures using message brokers like RabbitMQ or Apache Kafka for systems that need decoupled, reliable message delivery. Batch processing pipelines for data transformation, reporting and ETL workflows.",
            },
            {
                heading: "Observability",
                body: "Structured logging with correlation IDs across every service boundary. Application performance monitoring with distributed tracing. Custom dashboards for business metrics alongside technical health. Alerting that pages on-call engineers before users notice degradation, not after.",
            },
        ],
        techStack: [
            "Python",
            "FastAPI",
            "Django",
            "Node.js",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "Kafka",
            "Docker",
            "Celery",
        ],
        relatedSlugs: [
            "api-microservices-design",
            "database-architecture",
            "monitoring-logging",
        ],
    },
    {
        slug: "api-microservices-design",
        title: "API & Microservices Design",
        shortDescription:
            "Clean API contracts and microservices that communicate reliably at scale.",
        category: "engineering",
        overview:
            "APIs are the contracts between systems. When they are poorly designed, every team that depends on them pays the cost in bugs, workarounds and wasted time. We design APIs that are consistent, well-documented and built to evolve without breaking existing consumers.\n\nFor systems that have outgrown a monolith, we help decompose into microservices with clear ownership boundaries, independent deployment pipelines and reliable inter-service communication. We do not split services for the sake of it. Every service boundary has to justify its operational complexity.",
        techSections: [
            {
                heading: "API Design Standards",
                body: "Every API starts with a contract definition before any implementation. OpenAPI 3.x specs for REST, schema-first design for GraphQL. Consistent naming conventions, error response formats and pagination patterns across all endpoints. API versioning strategy defined upfront so breaking changes never surprise consumers.",
            },
            {
                heading: "Service Decomposition",
                body: "We decompose monoliths along domain boundaries, not technical layers. Each service owns its data store and exposes functionality through well-defined APIs. We use the strangler fig pattern for gradual migration rather than risky big-bang rewrites. Service boundaries are validated against actual team structure and deployment cadence.",
            },
            {
                heading: "Inter-Service Communication",
                body: "Synchronous calls via REST or gRPC with circuit breakers, retries and timeouts. Asynchronous messaging via event buses for operations that do not need immediate responses. Saga patterns for distributed transactions that span multiple services. Service mesh for observability and traffic management in larger deployments.",
            },
            {
                heading: "Testing Strategy",
                body: "Contract testing between services using Pact or similar tools to catch breaking changes before deployment. Integration test suites that run against real service dependencies in staging environments. Load testing with realistic traffic patterns to validate performance under pressure.",
            },
        ],
        techStack: [
            "OpenAPI",
            "GraphQL",
            "gRPC",
            "REST",
            "Docker",
            "Kubernetes",
            "RabbitMQ",
            "Kafka",
            "Pact",
            "Istio",
        ],
        relatedSlugs: [
            "backend-systems-architecture",
            "devops-ci-cd",
            "full-stack-development",
        ],
    },
    {
        slug: "database-architecture",
        title: "Database Architecture",
        shortDescription:
            "Data models, migration strategies and query optimization for production systems.",
        category: "engineering",
        overview:
            "Your database is the foundation everything else sits on. Get it wrong and you spend the next two years working around bad schema decisions. We design data models that reflect your actual business domain, optimize query patterns for your real access paths and build migration strategies that let your schema evolve without downtime.\n\nWe work across relational databases, document stores, key-value caches and search engines. The choice depends on your data shape, access patterns and consistency requirements, not on what is trending on Hacker News.",
        techSections: [
            {
                heading: "Schema Design",
                body: "Normalized relational schemas for transactional systems where data integrity matters. Denormalized read models for high-throughput query patterns. We design indexes based on actual query plans, not guesswork. Every table gets a documented purpose, and every foreign key relationship maps to a real business rule.",
            },
            {
                heading: "Migration Strategy",
                body: "Zero-downtime schema migrations using expand-contract patterns. Version-controlled migration files that run in CI/CD pipelines. Backward-compatible changes deployed independently from application code. Rollback procedures tested before every production migration.",
            },
            {
                heading: "Performance Optimization",
                body: "Query analysis using EXPLAIN plans and slow query logs. Index tuning based on actual production workloads, not synthetic benchmarks. Connection pooling configuration, read replica routing and caching layer design. We have cut query times from seconds to milliseconds on production systems serving millions of rows.",
            },
            {
                heading: "Multi-Store Architecture",
                body: "PostgreSQL or MySQL for transactional data. Redis for caching, sessions and rate limiting. Elasticsearch for full-text search and analytics. Firebase or MongoDB for document-oriented data. Each store chosen for its strengths, with clear data flow between them and consistency guarantees documented.",
            },
        ],
        techStack: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Redis",
            "Elasticsearch",
            "Firebase",
            "Prisma",
            "SQLAlchemy",
            "Flyway",
            "pgBouncer",
        ],
        relatedSlugs: [
            "backend-systems-architecture",
            "cost-optimization",
            "full-stack-development",
        ],
    },

    // ═══ CLOUD & INFRASTRUCTURE ═══
    {
        slug: "aws-azure-deployments",
        title: "AWS & Azure Deployments",
        shortDescription:
            "Cloud architecture on AWS and Azure designed for reliability, security and cost control.",
        category: "cloud-infrastructure",
        overview:
            "We deploy production systems on AWS and Azure with architectures built for the actual scale you need today, with clear paths to grow. No over-provisioned clusters burning money on idle resources. No under-provisioned setups that fall over during your first marketing push.\n\nEvery deployment gets infrastructure-as-code, automated provisioning, proper networking with security groups and VPCs, and monitoring from day one. We have managed cloud environments for startups running on a few hundred dollars a month and enterprises spending six figures on compute.",
        techSections: [
            {
                heading: "Infrastructure as Code",
                body: "All infrastructure defined in Terraform or AWS CDK. No manual console changes in production. Every resource is version-controlled, peer-reviewed and reproducible. Environment parity between staging and production so deployments behave the same everywhere.",
            },
            {
                heading: "Networking and Security",
                body: "VPC design with proper subnet segmentation, security groups and network ACLs. Private subnets for application servers and databases. Public subnets only for load balancers and bastion hosts. TLS everywhere. Secrets management via AWS Secrets Manager or Azure Key Vault.",
            },
            {
                heading: "Compute Strategy",
                body: "EC2 or Azure VMs for workloads that need persistent compute. ECS/Fargate or Azure Container Instances for containerized services. Lambda or Azure Functions for event-driven workloads. Auto-scaling groups configured with sensible thresholds based on actual load testing, not default settings.",
            },
            {
                heading: "Cost Management",
                body: "Right-sizing recommendations based on actual utilization data. Reserved instance planning for predictable workloads. Spot instance strategies for fault-tolerant batch processing. Monthly cost reviews with actionable recommendations. We have reduced client cloud bills by 40-60% without sacrificing performance.",
            },
        ],
        techStack: [
            "AWS",
            "Azure",
            "Terraform",
            "AWS CDK",
            "Docker",
            "EC2",
            "ECS",
            "Lambda",
            "S3",
            "CloudFront",
        ],
        relatedSlugs: [
            "devops-ci-cd",
            "cost-optimization",
            "monitoring-logging",
        ],
    },
    {
        slug: "devops-ci-cd",
        title: "DevOps & CI/CD",
        shortDescription:
            "Automated build, test and deployment pipelines that ship code safely and fast.",
        category: "cloud-infrastructure",
        overview:
            "If deploying your application requires a checklist, a prayer and someone staying late on a Friday, your process is broken. We build CI/CD pipelines that run tests, build artifacts, deploy to staging, run integration checks and promote to production with a single merge to main.\n\nOur pipelines catch bugs before they reach users, enforce code quality standards automatically and give your team confidence that every deployment is safe to ship. We have set up pipelines for teams of 3 and teams of 50, from simple static sites to multi-service architectures with database migrations.",
        techSections: [
            {
                heading: "Pipeline Architecture",
                body: "GitHub Actions or GitLab CI for pipeline orchestration. Multi-stage pipelines with lint, type-check, unit test, build, integration test, deploy-to-staging and promote-to-production stages. Each stage gates the next. Failed tests block deployment automatically.",
            },
            {
                heading: "Release Strategy",
                body: "Tag-based releases for versioned deployments. Blue-green or canary deployments for zero-downtime releases. Feature flags for decoupling deployment from release. Rollback procedures that execute in under 60 seconds. Every release has a changelog generated from commit history.",
            },
            {
                heading: "Containerization",
                body: "Multi-stage Docker builds optimized for small image sizes and fast build times. Docker Compose for local development parity. Container registries with image scanning for vulnerability detection. Kubernetes or ECS for container orchestration in production.",
            },
            {
                heading: "Developer Experience",
                body: "Local development environments that mirror production as closely as possible. Pre-commit hooks for formatting and linting. Branch protection rules that require passing checks before merge. Automated dependency updates with security patch prioritization.",
            },
        ],
        techStack: [
            "GitHub Actions",
            "GitLab CI",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Helm",
            "ArgoCD",
            "AWS ECS",
            "Nginx",
            "Caddy",
        ],
        relatedSlugs: [
            "aws-azure-deployments",
            "monitoring-logging",
            "backend-systems-architecture",
        ],
    },
    {
        slug: "monitoring-logging",
        title: "Monitoring & Logging",
        shortDescription:
            "Observability systems that catch problems before your users do.",
        category: "cloud-infrastructure",
        overview:
            "You cannot fix what you cannot see. We build observability systems that give your team real-time visibility into application health, performance trends and error patterns. When something goes wrong at 2am, your on-call engineer gets a clear alert with context, not a vague notification that something might be off.\n\nWe have built monitoring stacks for financial platforms where a 30-second outage means lost transactions, and for consumer apps where slow page loads mean lost users. The approach scales from a single service to a distributed architecture with dozens of components.",
        techSections: [
            {
                heading: "Logging Architecture",
                body: "Structured JSON logging with consistent field names across all services. Correlation IDs that trace a request from the load balancer through every service it touches. Log aggregation via ELK stack, Datadog or Azure Monitor. Log retention policies that balance cost with debugging needs.",
            },
            {
                heading: "Metrics and Dashboards",
                body: "Application metrics exported via Prometheus or StatsD. Infrastructure metrics from cloud provider monitoring. Business metrics tracked alongside technical health. Dashboards built in Grafana or Datadog that answer real operational questions, not vanity displays with charts nobody reads.",
            },
            {
                heading: "Alerting",
                body: "Alert thresholds based on statistical baselines, not arbitrary numbers. PagerDuty or Opsgenie integration for on-call routing. Alert fatigue prevention through proper severity classification and deduplication. Runbooks linked to every alert so the on-call engineer knows exactly what to check first.",
            },
            {
                heading: "Distributed Tracing",
                body: "OpenTelemetry instrumentation across service boundaries. Trace visualization for identifying slow dependencies and bottleneck services. Sampling strategies that capture enough data for debugging without overwhelming storage. Integration with existing APM tools like New Relic, Datadog or Jaeger.",
            },
        ],
        techStack: [
            "Prometheus",
            "Grafana",
            "Datadog",
            "ELK Stack",
            "OpenTelemetry",
            "PagerDuty",
            "Azure Monitor",
            "Jaeger",
            "Sentry",
            "CloudWatch",
        ],
        relatedSlugs: [
            "devops-ci-cd",
            "aws-azure-deployments",
            "backend-systems-architecture",
        ],
    },
    {
        slug: "cost-optimization",
        title: "Cost Optimization",
        shortDescription:
            "Cloud cost audits and optimization that cut waste without cutting performance.",
        category: "cloud-infrastructure",
        overview:
            "Most companies are overpaying for cloud by 30-50%. Oversized instances running at 10% utilization, unused EBS volumes nobody remembers creating, NAT gateways processing traffic that could route differently. We audit your cloud spend, identify the waste and implement changes that reduce your bill while maintaining or improving performance.\n\nThis is not about being cheap. It is about spending money where it actually matters. We redirect savings into the infrastructure investments that improve reliability and user experience.",
        techSections: [
            {
                heading: "Cost Audit Process",
                body: "Full inventory of active resources across all accounts and regions. Utilization analysis for compute, storage and networking. Identification of orphaned resources, unused reservations and over-provisioned services. Cost allocation tagging to attribute spend to specific products, teams or environments.",
            },
            {
                heading: "Compute Optimization",
                body: "Right-sizing recommendations based on actual CPU and memory utilization over 30+ days. Reserved instance or savings plan analysis for predictable workloads. Spot instance strategies for fault-tolerant batch processing. Graviton or ARM-based instance migration for compatible workloads at lower cost.",
            },
            {
                heading: "Storage and Data Transfer",
                body: "S3 lifecycle policies for automatic tiering of infrequently accessed data. EBS volume right-sizing and snapshot cleanup. Data transfer cost analysis with CDN optimization. Database storage optimization through compression, archival strategies and read replica consolidation.",
            },
            {
                heading: "Ongoing Governance",
                body: "Budget alerts and spending anomaly detection. Monthly cost review cadence with trend analysis. Tagging enforcement policies. Automated cleanup of development and staging resources on schedules. Cost-aware architecture reviews for new feature deployments.",
            },
        ],
        techStack: [
            "AWS Cost Explorer",
            "Azure Cost Management",
            "CloudHealth",
            "Terraform",
            "AWS Trusted Advisor",
            "Spot.io",
            "S3 Intelligent Tiering",
            "Reserved Instances",
        ],
        relatedSlugs: [
            "aws-azure-deployments",
            "monitoring-logging",
            "devops-ci-cd",
        ],
    },

    // ═══ PRODUCT ═══
    {
        slug: "mobile-first-app-development",
        title: "Mobile-First App Development",
        shortDescription:
            "iOS and Android apps built from a single codebase with native performance.",
        category: "product",
        overview:
            "We build mobile applications that feel native on both iOS and Android while sharing a single codebase. React Native lets us ship to both platforms simultaneously without the cost of maintaining two separate engineering teams. Your users get smooth animations, fast load times and platform-appropriate interactions.\n\nEvery app starts mobile. Not as an afterthought, not as a responsive wrapper around a desktop design. Mobile-first means the core experience is designed for touch, for variable network conditions and for screens that fit in your pocket. Desktop is the enhancement, not the other way around.",
        techSections: [
            {
                heading: "Cross-Platform Architecture",
                body: "React Native with TypeScript for shared business logic and UI components across iOS and Android. Native modules for platform-specific functionality like biometric auth, push notifications and camera access. Expo for rapid development and over-the-air updates when the project scope allows it.",
            },
            {
                heading: "Performance",
                body: "60fps animations using the native driver. Lazy loading for screens and heavy components. Image optimization with proper caching strategies. Memory profiling and leak detection as part of the development workflow. Startup time optimization through code splitting and deferred initialization.",
            },
            {
                heading: "Offline Capability",
                body: "Local data persistence with SQLite or WatermelonDB for offline-first applications. Background sync that reconciles local changes with the server when connectivity returns. Optimistic UI updates that keep the app responsive regardless of network conditions.",
            },
            {
                heading: "Distribution",
                body: "App Store and Google Play submission with proper metadata, screenshots and compliance documentation. TestFlight and internal distribution for beta testing. CI/CD pipelines that build, sign and distribute automatically. Over-the-air updates for JavaScript bundle changes without full app store review cycles.",
            },
        ],
        techStack: [
            "React Native",
            "TypeScript",
            "Expo",
            "iOS",
            "Android",
            "SQLite",
            "Firebase",
            "Fastlane",
            "CodePush",
            "Detox",
        ],
        relatedSlugs: [
            "full-stack-development",
            "ux-interface-systems",
            "design-systems",
        ],
    },
    {
        slug: "ux-interface-systems",
        title: "UX & Interface Systems",
        shortDescription:
            "Product experience design that drives adoption, not just aesthetics.",
        category: "product",
        overview:
            "We do not design pretty pictures. We design interfaces that people actually use. That means understanding user behavior, mapping task flows, reducing cognitive load and testing assumptions against real usage data. The best interface is one that gets out of the way and lets users accomplish their goal with minimum friction.\n\nOur design process is engineering-informed. Every design decision accounts for implementation complexity, performance impact and accessibility requirements. We do not hand off pixel-perfect mockups that are impossible to build. We design systems that ship.",
        techSections: [
            {
                heading: "Research and Discovery",
                body: "User interviews and task analysis to understand actual workflows, not assumed ones. Competitive analysis focused on interaction patterns, not visual trends. Information architecture that reflects how users think about their data, not how the database stores it. Wireframes and prototypes tested with real users before any visual design begins.",
            },
            {
                heading: "Interaction Design",
                body: "Micro-interactions that provide immediate feedback for user actions. Loading states that communicate progress and maintain perceived performance. Error states that explain what went wrong and how to fix it. Transitions that guide attention and establish spatial relationships between views.",
            },
            {
                heading: "Accessibility",
                body: "WCAG 2.1 AA compliance as a baseline, not an afterthought. Semantic HTML, proper heading hierarchy, keyboard navigation and screen reader testing. Color contrast ratios verified for all text and interactive elements. Focus management for modals, drawers and dynamic content.",
            },
            {
                heading: "Figma to Code",
                body: "Component-based design files that map directly to React components. Design tokens for colors, spacing, typography and shadows shared between Figma and code. Auto-layout configurations that match CSS flexbox and grid behavior. Handoff documentation that specifies responsive behavior, interaction states and edge cases.",
            },
        ],
        techStack: [
            "Figma",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "Storybook",
            "Radix UI",
            "WCAG 2.1",
            "Chromatic",
        ],
        relatedSlugs: [
            "design-systems",
            "mobile-first-app-development",
            "product-strategy",
        ],
    },
    {
        slug: "design-systems",
        title: "Design Systems",
        shortDescription:
            "Shared component libraries that keep your product consistent as you scale.",
        category: "product",
        overview:
            "When your product grows past a handful of screens, inconsistency creeps in. Buttons that look different on every page. Spacing that varies between sections. Colors that drift from the brand. A design system fixes this by establishing a single source of truth for every UI element in your product.\n\nWe build design systems as living code, not static documentation that goes stale. Every component is implemented in React, tested across viewports, documented with examples and published as a package your team imports directly.",
        techSections: [
            {
                heading: "Token Architecture",
                body: "Design tokens defined as CSS custom properties and TypeScript constants. Color scales, spacing scales, typography scales and shadow systems that maintain visual consistency. Semantic token aliases that separate intent from value so themes and brand updates propagate automatically.",
            },
            {
                heading: "Component Library",
                body: "Primitive components (Button, Input, Card, Badge) built with Radix UI or headless patterns for accessibility. Compound components for complex patterns (DataTable, CommandPalette, DatePicker). Every component accepts className for composability and follows consistent prop interfaces.",
            },
            {
                heading: "Documentation",
                body: "Storybook for interactive component documentation with usage examples, prop tables and visual regression snapshots. Guidelines for when to use which component and how to compose them. Contribution guidelines so your team can extend the system without breaking consistency.",
            },
            {
                heading: "Distribution",
                body: "Published as an internal npm package with semantic versioning. Changelog generated from commits. Breaking changes documented with migration guides. Chromatic or Percy for visual regression testing on every pull request.",
            },
        ],
        techStack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Storybook",
            "Radix UI",
            "Chromatic",
            "npm",
            "Figma",
        ],
        relatedSlugs: [
            "ux-interface-systems",
            "full-stack-development",
            "product-strategy",
        ],
    },
    {
        slug: "product-strategy",
        title: "Product Strategy",
        shortDescription:
            "Technical product roadmaps that align engineering effort with business outcomes.",
        category: "product",
        overview:
            "Building the wrong thing fast is still building the wrong thing. We help teams define what to build, in what order and why. That means translating business goals into technical requirements, prioritizing features based on impact and effort, and creating roadmaps that your engineering team can actually execute.\n\nWe have guided products from initial concept to market launch and helped established products refocus after years of feature creep. The goal is always the same: ship the smallest thing that delivers the most value, then iterate based on real usage data.",
        techSections: [
            {
                heading: "Discovery and Scoping",
                body: "Stakeholder interviews to align on business objectives and success metrics. Market analysis focused on differentiation opportunities, not feature parity checklists. Technical feasibility assessment for key product ideas. Scope definition that separates must-have from nice-to-have with clear criteria.",
            },
            {
                heading: "Roadmap Development",
                body: "Quarterly roadmaps with clear milestones and dependencies. Each milestone delivers user-facing value, not just technical progress. Effort estimation based on actual engineering capacity, not wishful thinking. Buffer built in for discovery work, tech debt and the unexpected.",
            },
            {
                heading: "MVP Definition",
                body: "Feature prioritization using impact vs effort frameworks. User story mapping to identify the minimum path through the product that delivers value. Prototype testing to validate core assumptions before committing engineering resources. Launch criteria that define what done looks like.",
            },
            {
                heading: "Metrics and Iteration",
                body: "Analytics instrumentation planned alongside feature development. Key metrics defined before launch so you know what success looks like. Post-launch review cadence to assess feature adoption and identify friction points. Data-informed iteration rather than opinion-driven feature requests.",
            },
        ],
        techStack: [
            "Figma",
            "Linear",
            "Notion",
            "Amplitude",
            "Mixpanel",
            "Google Analytics",
            "Miro",
            "Jira",
        ],
        relatedSlugs: [
            "ux-interface-systems",
            "full-stack-development",
            "mobile-first-app-development",
        ],
    },

    // ═══ FINTECH & COMMERCE ═══
    {
        slug: "banking-applications",
        title: "Banking Applications",
        shortDescription:
            "Digital banking platforms with secure transactions, wallet systems and compliance-ready architecture.",
        category: "fintech-commerce",
        overview:
            "We build digital banking platforms that handle real money with the security and reliability that demands. From wallet systems and fund transfers to loan applications and account management, every feature is built with regulatory compliance, audit trails and transaction integrity as first-class concerns.\n\nOur banking applications serve real users processing real transactions. We understand that a bug in a banking app is not a minor inconvenience. It is a financial event that affects trust, compliance and potentially regulatory standing.",
        techSections: [
            {
                heading: "Transaction Architecture",
                body: "ACID-compliant transaction processing with proper isolation levels. Double-entry bookkeeping patterns for accurate financial records. Idempotent API design to prevent duplicate transactions from retries. Reconciliation systems that catch discrepancies between internal ledgers and external payment providers.",
            },
            {
                heading: "Security",
                body: "End-to-end encryption for sensitive data in transit and at rest. Multi-factor authentication with biometric support on mobile. Session management with automatic timeout and device fingerprinting. Fraud detection hooks for transaction monitoring. PCI DSS compliance considerations built into the architecture from day one.",
            },
            {
                heading: "Compliance",
                body: "Comprehensive audit logging for every financial operation. KYC workflow integration with identity verification providers. Transaction reporting capabilities for regulatory requirements. Data retention policies that satisfy both compliance mandates and privacy regulations.",
            },
            {
                heading: "Integration",
                body: "Payment gateway integration with providers like Stripe, PayMongo and Dragonpay. Bank API integration for fund transfers and balance inquiries. Webhook processing for real-time transaction status updates. Retry logic and dead-letter queues for failed external calls.",
            },
        ],
        techStack: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Stripe",
            "React Native",
            "Docker",
            "AWS",
            "Celery",
            "Encryption",
        ],
        relatedSlugs: [
            "payment-integrations",
            "backend-systems-architecture",
            "full-stack-development",
        ],
    },
    {
        slug: "payment-integrations",
        title: "Payment Integrations",
        shortDescription:
            "Payment gateway integration, wallet systems and transaction processing for any platform.",
        category: "fintech-commerce",
        overview:
            "We integrate payment systems that work. Stripe for global card processing, PayMongo for Southeast Asian markets, Dragonpay for Philippine banking channels, and whatever provider your market requires. Every integration handles the edge cases that trip up junior implementations: failed webhooks, partial captures, refund flows, currency conversion and dispute management.\n\nPayment integration is not just about charging a card. It is about building a complete financial flow that handles success, failure, retry and reconciliation gracefully.",
        techSections: [
            {
                heading: "Provider Integration",
                body: "Direct API integration with payment providers using official SDKs and webhook handlers. Abstraction layer that lets you switch or add providers without rewriting application logic. Support for credit cards, digital wallets, bank transfers, QR payments and buy-now-pay-later depending on market requirements.",
            },
            {
                heading: "Webhook Processing",
                body: "Idempotent webhook handlers that process payment events exactly once even when providers send duplicates. Signature verification for every incoming webhook. Dead-letter queues for failed webhook processing with automated retry. Event sourcing for complete payment lifecycle tracking.",
            },
            {
                heading: "Subscription and Recurring Billing",
                body: "Subscription lifecycle management including trials, upgrades, downgrades and cancellations. Dunning flows for failed recurring payments with configurable retry schedules. Prorated billing for mid-cycle plan changes. Invoice generation and delivery.",
            },
            {
                heading: "Reconciliation",
                body: "Automated reconciliation between internal transaction records and provider settlement reports. Discrepancy detection and alerting. Refund tracking across provider and internal systems. Financial reporting with proper accounting period boundaries.",
            },
        ],
        techStack: [
            "Stripe",
            "PayMongo",
            "Dragonpay",
            "Python",
            "Node.js",
            "PostgreSQL",
            "Redis",
            "Webhooks",
            "REST APIs",
        ],
        relatedSlugs: [
            "banking-applications",
            "e-commerce-systems",
            "backend-systems-architecture",
        ],
    },
    {
        slug: "e-commerce-systems",
        title: "E-Commerce Systems",
        shortDescription:
            "Online stores and marketplaces built for conversion, inventory management and scale.",
        category: "fintech-commerce",
        overview:
            "We build e-commerce systems that sell. Not just product catalogs with a cart, but complete commerce platforms with inventory management, order fulfillment workflows, customer segmentation and conversion optimization built in. Whether you are selling physical products, digital goods or subscriptions, the system handles your specific commerce model.\n\nOur e-commerce builds range from Shopify customizations for fast launches to fully custom platforms for businesses with complex pricing, multi-warehouse inventory or marketplace dynamics.",
        techSections: [
            {
                heading: "Product and Catalog",
                body: "Flexible product modeling that handles simple products, variants, bundles, configurable items and digital goods. Category hierarchies with faceted navigation. Search powered by Elasticsearch or Algolia for instant, relevant results. Content management for product descriptions, images and promotional content.",
            },
            {
                heading: "Cart and Checkout",
                body: "Cart persistence across sessions and devices. Multi-step checkout optimized for mobile conversion. Address validation and shipping rate calculation. Discount and coupon engine supporting percentage, fixed amount, free shipping and buy-one-get-one rules. Tax calculation with proper jurisdiction handling.",
            },
            {
                heading: "Order Management",
                body: "Order lifecycle from placement through fulfillment and delivery. Multi-warehouse inventory allocation with backorder handling. Shipping label generation and tracking integration. Return and refund workflow automation. Order status notifications via email and SMS.",
            },
            {
                heading: "Analytics and Optimization",
                body: "Conversion funnel tracking from product view to purchase. Abandoned cart recovery automation. A/B testing framework for product pages and checkout flow. Customer lifetime value analysis and cohort reporting. Inventory forecasting based on sales velocity.",
            },
        ],
        techStack: [
            "Shopify",
            "Next.js",
            "React",
            "Stripe",
            "Algolia",
            "PostgreSQL",
            "Redis",
            "Node.js",
            "Elasticsearch",
        ],
        relatedSlugs: [
            "payment-integrations",
            "full-stack-development",
            "ux-interface-systems",
        ],
    },
    {
        slug: "insurance-platforms",
        title: "Insurance Platforms",
        shortDescription:
            "Policy management, claims processing and underwriting systems for insurance providers.",
        category: "fintech-commerce",
        overview:
            "Insurance software has unique complexity. Policy lifecycles, premium calculations, claims adjudication, agent management and regulatory reporting all need to work together without gaps. We build insurance platforms that handle this complexity with clean domain models and reliable processing.\n\nWe have built systems for life insurance, property insurance and health insurance providers. Each vertical has its own rules, but the engineering principles are the same: accurate calculations, complete audit trails, proper state management and integration with external data sources.",
        techSections: [
            {
                heading: "Policy Management",
                body: "Policy lifecycle management from quote through issuance, renewal and cancellation. Premium calculation engines that implement complex underwriting rules. Policy document generation with proper versioning. Endorsement processing for mid-term policy changes with premium adjustment.",
            },
            {
                heading: "Claims Processing",
                body: "Claims intake with document upload and validation. Automated claims routing based on type, amount and policy terms. Adjudication workflow with approval chains and escalation rules. Settlement calculation and payment disbursement. Fraud detection integration for flagging suspicious claims.",
            },
            {
                heading: "Agent and Distribution",
                body: "Agent portal with commission tracking and performance dashboards. Multi-tier distribution hierarchy support. Quote comparison tools for agents selling multiple products. Lead management and pipeline tracking. White-label capabilities for distribution partners.",
            },
            {
                heading: "Compliance and Reporting",
                body: "Regulatory reporting with configurable report templates. Data retention policies aligned with insurance regulations. Audit logging for every policy and claims action. Privacy controls for personal health and financial information. Integration with industry data exchanges and verification services.",
            },
        ],
        techStack: [
            "Python",
            "Django",
            "PostgreSQL",
            "React",
            "Celery",
            "Redis",
            "Docker",
            "AWS",
            "PDF Generation",
        ],
        relatedSlugs: [
            "banking-applications",
            "backend-systems-architecture",
            "full-stack-development",
        ],
    },

    // ═══ AI & AUTOMATION ═══
    {
        slug: "custom-ai-assistants",
        title: "Custom AI Assistants",
        shortDescription:
            "AI-powered assistants built on your data for customer support, internal ops and knowledge access.",
        category: "ai-automation",
        overview:
            "We build AI assistants that actually know your business. Not generic chatbots that hallucinate answers, but systems grounded in your documentation, your processes and your data. When a customer asks a question, the assistant pulls from verified sources and provides accurate, contextual responses.\n\nThese are practical tools, not science projects. Every assistant we build has measurable success criteria: tickets deflected, response time reduced, information access improved. If the AI cannot demonstrably outperform a well-organized FAQ, we will tell you that.",
        techSections: [
            {
                heading: "Retrieval-Augmented Generation",
                body: "RAG pipelines that ground AI responses in your actual documentation and data. Vector databases for semantic search across knowledge bases. Chunking and embedding strategies optimized for your content type. Source attribution so users can verify every answer against the original document.",
            },
            {
                heading: "Conversation Design",
                body: "Multi-turn conversation handling with context retention. Graceful fallback to human agents when confidence is low. Conversation analytics to identify gaps in the knowledge base. Guardrails that prevent the assistant from making claims outside its training data.",
            },
            {
                heading: "Integration",
                body: "Deployment as a widget on your website, in your mobile app or inside internal tools. Integration with helpdesk platforms like Zendesk, Intercom or Freshdesk. Slack and Teams integration for internal knowledge assistants. API access for embedding AI capabilities into custom workflows.",
            },
            {
                heading: "Evaluation and Improvement",
                body: "Automated evaluation pipelines that test response quality against curated question-answer pairs. User feedback collection for continuous improvement. A/B testing between model configurations and prompt strategies. Regular knowledge base refresh cycles to keep responses current.",
            },
        ],
        techStack: [
            "LangChain",
            "OpenAI",
            "Claude",
            "Pinecone",
            "Weaviate",
            "Python",
            "FastAPI",
            "Redis",
            "PostgreSQL",
        ],
        relatedSlugs: [
            "knowledge-based-systems",
            "workflow-automation",
            "backend-systems-architecture",
        ],
    },
    {
        slug: "knowledge-based-systems",
        title: "Knowledge-Based Systems",
        shortDescription:
            "Structured knowledge repositories with intelligent search and automated content organization.",
        category: "ai-automation",
        overview:
            "Most companies have critical knowledge scattered across Google Docs, Confluence pages, Slack threads and individual email inboxes. We build systems that consolidate, structure and surface this knowledge so your team can find what they need in seconds instead of hours.\n\nThese are not just search engines. They understand relationships between documents, track knowledge freshness and proactively surface relevant information based on what a user is working on.",
        techSections: [
            {
                heading: "Knowledge Ingestion",
                body: "Automated content ingestion from multiple sources: documentation platforms, wikis, ticketing systems, code repositories and file storage. Content parsing that preserves structure, metadata and relationships. Incremental sync that detects changes and updates the knowledge base without full reprocessing.",
            },
            {
                heading: "Semantic Search",
                body: "Vector embedding-based search that understands intent, not just keywords. Hybrid search combining semantic similarity with keyword matching for best results. Faceted filtering by source, date, author and content type. Search analytics that reveal what people look for and what they cannot find.",
            },
            {
                heading: "Knowledge Graph",
                body: "Relationship mapping between documents, topics, teams and projects. Automatic topic extraction and categorization. Dependency tracking between documents so outdated references are flagged. Visual knowledge maps for exploring connected information.",
            },
            {
                heading: "Maintenance",
                body: "Freshness scoring that flags stale content for review. Ownership assignment so every piece of knowledge has a responsible maintainer. Automated gap analysis that identifies topics with insufficient documentation. Usage analytics to prioritize content investment where it matters most.",
            },
        ],
        techStack: [
            "Python",
            "Pinecone",
            "Weaviate",
            "Elasticsearch",
            "LangChain",
            "PostgreSQL",
            "FastAPI",
            "React",
        ],
        relatedSlugs: [
            "custom-ai-assistants",
            "data-pipelines",
            "workflow-automation",
        ],
    },
    {
        slug: "workflow-automation",
        title: "Workflow Automation",
        shortDescription:
            "Automated business processes that eliminate manual work and reduce human error.",
        category: "ai-automation",
        overview:
            "If your team is copying data between spreadsheets, sending manual status update emails or following a 47-step checklist to onboard a new client, those are workflows waiting to be automated. We identify repetitive processes, map the decision logic and build systems that execute them reliably without human intervention.\n\nAutomation is not about replacing people. It is about freeing them from work that machines do better: repetitive data entry, status tracking, notification routing and report generation. Your team focuses on judgment calls and relationship building. The system handles everything else.",
        techSections: [
            {
                heading: "Process Analysis",
                body: "Workflow mapping to document current manual processes step by step. Identification of decision points, exception paths and approval gates. ROI analysis comparing automation investment against ongoing manual labor cost. Prioritization based on frequency, error rate and business impact.",
            },
            {
                heading: "Automation Architecture",
                body: "Event-driven workflows triggered by data changes, schedules or external events. State machine patterns for multi-step processes with clear status transitions. Retry logic and error handling for steps that depend on external services. Human-in-the-loop gates for decisions that require judgment.",
            },
            {
                heading: "Integration Layer",
                body: "API integration with your existing tools: CRM, ERP, accounting software, communication platforms. Webhook listeners for real-time triggers from external systems. Data transformation and validation between systems with different formats. Custom connectors for legacy systems without modern APIs.",
            },
            {
                heading: "Monitoring and Reporting",
                body: "Dashboard showing workflow execution status, success rates and processing times. Alert on workflow failures with enough context to diagnose the issue. Audit trail for every automated action. Performance trending to identify workflows that are slowing down or failing more frequently.",
            },
        ],
        techStack: [
            "Python",
            "Celery",
            "Redis",
            "FastAPI",
            "PostgreSQL",
            "n8n",
            "Zapier",
            "AWS Lambda",
            "Docker",
        ],
        relatedSlugs: [
            "custom-ai-assistants",
            "data-pipelines",
            "backend-systems-architecture",
        ],
    },
    {
        slug: "data-pipelines",
        title: "Data Pipelines",
        shortDescription:
            "ETL pipelines, data warehousing and analytics infrastructure for data-driven decisions.",
        category: "ai-automation",
        overview:
            "Your data is only valuable if it is clean, accessible and timely. We build pipelines that extract data from your operational systems, transform it into analysis-ready formats and load it into warehouses where your team can actually query it. No more asking engineering to pull a report. No more spreadsheet exports that are stale by the time they arrive.\n\nOur pipelines handle everything from simple daily syncs between two systems to complex multi-source data warehousing with real-time streaming components.",
        techSections: [
            {
                heading: "ETL Architecture",
                body: "Extract-Transform-Load pipelines with clear separation of concerns. Incremental loading that processes only changed records, not full table scans. Schema evolution handling so pipeline changes do not break downstream consumers. Data quality checks at every stage with automated alerting on anomalies.",
            },
            {
                heading: "Data Warehousing",
                body: "Dimensional modeling for analytics-friendly data structures. Slowly changing dimension handling for historical tracking. Materialized views and pre-aggregations for common query patterns. Query performance optimization through proper partitioning and indexing strategies.",
            },
            {
                heading: "Streaming",
                body: "Real-time data processing with Apache Kafka or AWS Kinesis for use cases that cannot wait for batch cycles. Stream processing with windowed aggregations and event-time handling. Exactly-once semantics for critical financial or transactional data. Backpressure management for variable-rate data sources.",
            },
            {
                heading: "Orchestration",
                body: "Pipeline scheduling and dependency management with Airflow or Prefect. DAG-based workflow definitions with clear data lineage. Failure recovery with checkpoint-based restarts. SLA monitoring with alerting when pipelines miss their delivery windows.",
            },
        ],
        techStack: [
            "Python",
            "Apache Airflow",
            "Apache Kafka",
            "PostgreSQL",
            "BigQuery",
            "dbt",
            "AWS Kinesis",
            "Spark",
            "Prefect",
            "Snowflake",
        ],
        relatedSlugs: [
            "knowledge-based-systems",
            "monitoring-logging",
            "backend-systems-architecture",
        ],
    },

    // ═══ TALENT ═══
    {
        slug: "embedded-engineers",
        title: "Embedded Engineers",
        shortDescription:
            "Senior engineers integrated into your team, working on your codebase, at your pace.",
        category: "talent",
        overview:
            "Sometimes you do not need a new product built from scratch. You need more hands on your existing codebase. We embed senior engineers directly into your team. They attend your standups, follow your processes, commit to your repos and ship alongside your people.\n\nThese are not junior developers reading documentation for the first time. Our embedded engineers have production experience across multiple tech stacks and industries. They ramp up fast because they have seen codebases like yours before.",
        techSections: [
            {
                heading: "How It Works",
                body: "We start with a technical assessment of your codebase, tooling and team structure. We match you with engineers who have direct experience in your stack and domain. Engineers onboard onto your systems with access to your repos, comms and project management tools. They are managed day-to-day by your team leads, with Sylent providing performance oversight and technical support.",
            },
            {
                heading: "Skill Profiles",
                body: "Full-stack engineers comfortable with React, Node.js, Python or your specific stack. Backend specialists for systems programming, API design and database optimization. Frontend engineers with production experience in React, Next.js and modern CSS. Mobile developers shipping React Native apps to both app stores.",
            },
            {
                heading: "Engagement Models",
                body: "Full-time dedicated engineers for long-term projects. Part-time engagement for supplemental capacity during sprints. Time-boxed engagements for specific features or projects with defined scope. Flexible scaling to add or reduce capacity as project needs change.",
            },
            {
                heading: "Quality Assurance",
                body: "Regular code review of work produced by embedded engineers. Bi-weekly check-ins between Sylent and your team leads to assess fit and performance. Knowledge transfer documentation maintained throughout the engagement. Clean handoff process when the engagement concludes.",
            },
        ],
        techStack: [
            "React",
            "Next.js",
            "TypeScript",
            "Python",
            "Node.js",
            "React Native",
            "PostgreSQL",
            "AWS",
            "Docker",
        ],
        relatedSlugs: [
            "dedicated-remote-teams",
            "technical-leadership",
            "full-stack-development",
        ],
    },
    {
        slug: "dedicated-remote-teams",
        title: "Dedicated Remote Teams",
        shortDescription:
            "Full engineering teams assembled, managed and scaled for your product.",
        category: "talent",
        overview:
            "When you need more than individual engineers, we assemble and manage complete engineering teams. Frontend, backend, QA, DevOps and project management, configured for your specific product requirements. You get a team that operates as an extension of your organization, not a black-box agency that delivers code over the wall.\n\nWe handle hiring, onboarding, retention, performance management and knowledge continuity. You focus on product direction and business strategy.",
        techSections: [
            {
                heading: "Team Composition",
                body: "Teams structured around your product needs, not standard packages. Typical configurations include frontend and backend engineers, a QA engineer and a technical lead. Larger teams add DevOps, mobile specialists and dedicated project management. Composition adjusts as the project evolves through different phases.",
            },
            {
                heading: "Operations",
                body: "Teams operate in your timezone with 4-6 hours of overlap with your core team. Daily standups, sprint planning and retrospectives following your methodology. Direct communication via Slack, Teams or your preferred platform. Transparent time tracking and regular productivity reporting.",
            },
            {
                heading: "Knowledge Management",
                body: "Documentation standards that prevent knowledge silos. Cross-training between team members so no single person is a bottleneck. Architecture decision records for major technical choices. Onboarding playbooks that get new team members productive within their first week.",
            },
            {
                heading: "Scaling",
                body: "Ramp-up timelines of 2-4 weeks for additional engineers. Ramp-down with proper knowledge transfer and handoff documentation. Surge capacity for deadline-driven phases. Long-term team stability with low turnover through competitive compensation and career development.",
            },
        ],
        techStack: [
            "Agile",
            "Scrum",
            "Linear",
            "Jira",
            "Slack",
            "GitHub",
            "Confluence",
            "Notion",
        ],
        relatedSlugs: [
            "embedded-engineers",
            "technical-leadership",
            "product-strategy",
        ],
    },
    {
        slug: "technical-leadership",
        title: "Technical Leadership",
        shortDescription:
            "Fractional CTOs, tech leads and engineering managers for teams that need senior guidance.",
        category: "talent",
        overview:
            "Not every company needs a full-time CTO. But every engineering team needs technical leadership. We provide fractional CTOs, technical leads and engineering managers who bring senior-level guidance without the full-time executive salary. They set technical direction, review architecture decisions, mentor your engineers and keep the team shipping.\n\nOur technical leaders have built and scaled engineering organizations. They know when to invest in infrastructure, when to take shortcuts and when to push back on product requests that will create technical debt your team cannot afford.",
        techSections: [
            {
                heading: "Technical Direction",
                body: "Technology stack evaluation and selection based on team capabilities and project requirements. Architecture review and approval for major system changes. Technical debt assessment with prioritized remediation roadmaps. Build vs buy analysis for key platform decisions.",
            },
            {
                heading: "Team Development",
                body: "Code review practices that improve quality and grow junior engineers. Engineering career ladder development with clear promotion criteria. Interview process design for technical hiring. Performance assessment frameworks that measure output, growth and collaboration.",
            },
            {
                heading: "Process",
                body: "Sprint and release cadence optimization. Incident response process development. On-call rotation setup and escalation procedures. Engineering metrics that measure team health without becoming surveillance. Retrospective facilitation that drives real process improvements.",
            },
            {
                heading: "Stakeholder Communication",
                body: "Translation between technical constraints and business requirements. Realistic timeline estimation that accounts for complexity and unknowns. Technical risk communication to non-technical stakeholders. Regular engineering health reports for executive leadership.",
            },
        ],
        techStack: [
            "Architecture Review",
            "Team Building",
            "Agile",
            "OKRs",
            "Engineering Metrics",
            "Technical Strategy",
        ],
        relatedSlugs: [
            "embedded-engineers",
            "dedicated-remote-teams",
            "product-strategy",
        ],
    },
];

// ── Lookup helpers ──

export function getServiceBySlug(slug: string): Service | undefined {
    return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(
    category: ServiceCategorySlug
): Service[] {
    return SERVICES.filter((s) => s.category === category);
}

export function getRelatedServices(service: Service): Service[] {
    return service.relatedSlugs
        .map((slug) => SERVICES.find((s) => s.slug === slug))
        .filter((s): s is Service => s !== undefined);
}

export function getAllServiceSlugs(): string[] {
    return SERVICES.map((s) => s.slug);
}

export { SERVICE_CATEGORIES, SERVICES };
export type { Service, ServiceCategory, ServiceCategorySlug, ServiceSection };
