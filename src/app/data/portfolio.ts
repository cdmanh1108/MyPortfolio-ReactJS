export interface PortfolioData {
  name: string;
  title: string;
  objective: {
    title: string;
    description: string;
  };
  education: {
    title: string;
    items: Array<{
      degree: string;
      school: string;
      period: string;
      details?: string;
      languageLevel?: string;
    }>;
  };
  technicalSkills: {
    mainTitle: string;
    title: string;
    categories: Array<{
      name: string;
      skills: string[];
    }>;
  };
  softSkills: {
    title: string;
    skills: string[];
  };
  projects: {
    title: string;
    items: Array<{
      slug: string;
      name: string;
      description: string;
      overview: string;
      technologies: string[];
      role: string;
      teamSize: string;
      duration: string;
      contributions: string[];
      highlights: string[];
      challenges: string[];
      outcomes: string[];
      website?: string;
      github?: string;
      link?: string;
    }>;
  };
  experience: {
    title: string;
    items: Array<{
      position: string;
      company: string;
      period: string;
      responsibilities: string[];
    }>;
  };
  certificates: {
    title: string;
    items: Array<{
      name: string;
      issuer: string;
      date: string;
      expiry?: string;
      image?: string;
      link?: string;
    }>;
  };
  contact: {
    email: string;
    phone: string;
    github?: string;
    linkedin?: string;
  };
}

export const portfolioData: Record<"en" | "vi", PortfolioData> = {
  en: {
    name: "Chau Duc Manh",
    title: "Backend Developer",
    objective: {
      title: "Career Objective",
      description:
        "Fresher Backend Developer with hands-on experience building and deploying web applications using Node.js, Express.js, NestJS, SQL, NoSQL, Redis, Docker, AWS, and GCP. Experienced in designing RESTful APIs, authentication, payment integration, caching, and cloud deployment. Seeking a Backend Developer role where I can contribute to scalable systems, improve my backend engineering skills, and gradually develop toward DevOps and Vietnam-Korea bridge engineering in the long term.",
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Bachelor of Information Technology",
          school: "University of Information Technology - Vietnam National University (VNU-HCM)",
          period: "2022 - 2026",
          languageLevel: "TOEIC 725",
        },
      ],
    },
    technicalSkills: {
      mainTitle: "Skills",
      title: "Technical Skills",
      categories: [
        {
          name: "Frontend",
          skills: [
            "HTML",
            "CSS",
            "TailwindCSS",
            "React.js",
            "Next.js",
          ],
        },
        {
          name: "Backend",
          skills: [
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Express.js",
            "NestJS",
            "RESTful APIs",
            "Microservices",
            "RabbitMQ",
          ],
        },
        {
          name: "Database",
          skills: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Prisma",
            "TypeORM",
          ],
        },
        {
          name: "DevOps",
          skills: [
            "Linux",
            "Ubuntu",
            "Docker",
            "AWS",
            "GCP",
            "Jenkins CI/CD with GitHub",
          ],
        },
        {
          name: "Others",
          skills: ["Git/GitHub", "Postman", "Java Spring Boot"],
        },
      ],
    },
    softSkills: {
      title: "Soft Skills",
      skills: [
        "Able to read technical documents in English",
        "Strong communication",
        "Teamwork",
        "Self-learning",
        "Problem-solving skills",
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          slug: "order-food-platform",
          name: "DINE-IN & FOOD ORDERING SYSTEM",
          description:
            "Scalable food ordering and dine-in website with integrated payments and QR-code table session management.",
          overview:
            "A robust microservices-based food delivery platform offering an intuitive customer checkout experience, real-time order management, admin operational tools, and secure online payments.",
          technologies: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Microservices",
            "RabbitMQ",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Docker",
            "AWS",
          ],
          role: "Fullstack Developer",
          teamSize: "1",
          duration: "Dec 2025 - Present",
          contributions: [
            "Architected a NestJS microservices backend with RabbitMQ, Prisma, PostgreSQL, and Redis, applying Request-ID tracing for centralized logging and easier debugging across services.",
            "Implemented Role-Based Access Control (RBAC) with custom NestJS decorators and guards to manage roles for Admins, Staff, and Customers.",
            "Developed QR-code table session management, enabling dine-in customers to place orders by table while ensuring consistent session status and order synchronization.",
            "Integrated PayOS payment gateway with asynchronous RabbitMQ-based webhook processing to synchronize payment status reliably across services.",
            "Improved API performance with Redis caching, API pagination, and secure OTP storage.",
            "Deployed containerized microservices on AWS using ECS, ALB, RDS, Amazon MQ, S3/CloudFront, VPC, and Secrets Manager.",
          ],
          highlights: [
            "Microservices architecture with Request-ID tracing",
            "RBAC with custom decorators and guards",
            "QR-code table session management",
          ],
          challenges: [
            "Managing complex asynchronous communication and data consistency across microservices",
            "Ensuring reliable delivery of payment webhooks in a distributed system",
          ],
          outcomes: [
            "Successfully implemented a scalable and fault-tolerant order processing flow",
            "Improved observability and debugging with Request-ID tracing",
          ],
          github: "https://github.com/cdmanh1108/OrderFood-FE_NextJS-BE_NestJS_Microservices",
          website: "https://orderfood.chaumanh.site",
        },
        {
          slug: "weather-forecast-platform",
          name: "WEATHER FORECAST WEBSITE",
          description:
            "NestJS-based weather forecast website featuring city detection and global weather search.",
          overview:
            "A weather forecasting platform that supports authentication, automatic location detection, city-based weather retrieval, and detailed weather visualization.",
          technologies: [
            "React.js",
            "NestJS",
            "MySQL",
            "OpenWeather API",
            "Docker",
            "AWS",
          ],
          role: "Fullstack Developer",
          teamSize: "1",
          duration: "May 2025 - Jun 2025",
          contributions: [
            "Built modular NestJS backend services for Auth, User, City, and Weather modules using TypeORM and MySQL.",
            "Integrated OpenWeather APIs with reverse geocoding to support city detection, global weather search, and real-time weather data retrieval.",
            "Implemented secure JWT access/refresh authentication using httpOnly cookies, Passport strategies, guards, and centralized exception filters.",
            "Deployed the application on AWS with S3/CloudFront for frontend, Docker Compose/Nginx on EC2 for backend, and ACM/Route 53 for SSL/DNS management.",
          ],
          highlights: [
            "Modular NestJS backend services",
            "Reverse geocoding for city detection",
            "Secure JWT authentication with httpOnly cookies",
          ],
          challenges: [
            "Synchronizing geolocation and weather data without manual refresh",
            "Handling API limits and error states from OpenWeather API",
          ],
          outcomes: [
            "Delivered a stable full-stack weather application",
            "Successful deployment on AWS using Docker Compose and Nginx",
          ],
          github: "https://github.com/cdmanh1108/WeatherForecast-FE_ReactJS-BE_NestJS-DB_MYSQL",
          website: "https://weatherforecast.chaumanh.site",
        },
        {
          slug: "wtm-vintage-sport",
          name: "WTM VINTAGE SPORT - VINTAGE FOOTBALL SHIRTS",
          description:
            "A specialized e-commerce platform for vintage football shirts, optimized for search engines and user experience.",
          overview:
            "A high-performance e-commerce web application dedicated to selling vintage football shirts. The project focuses on advanced SEO techniques, clean UI/UX, and responsive design to maximize search visibility and customer engagement.",
          technologies: [
            "Next.js",
            "TailwindCSS",
            "TypeScript",
            "JSON-LD",
            "SEO (Metadata, OpenGraph, Schema.org)",
          ],
          role: "Frontend & SEO Developer",
          teamSize: "1",
          duration: "Mar 2025 - Jun 2025",
          contributions: [
            "Built a specialized web application for selling vintage football shirts with a clean and user-friendly interface using Next.js.",
            "Implemented advanced SEO strategies, including Next.js Metadata API, OpenGraph for social sharing, and JSON-LD (Schema.org) structured data to enhance search engine visibility.",
            "Developed a fully responsive UI with TailwindCSS, ensuring a seamless experience across all device types.",
            "Created comprehensive product listings, advanced search functionality, and a dedicated blog system for sports knowledge sharing.",
            "Optimized image assets and performance to ensure fast load times and high Core Web Vitals scores.",
          ],
          highlights: [
            "Advanced SEO & Structured Data integration",
            "High-performance Next.js architecture",
            "Responsive Design for all platforms",
          ],
          challenges: [
            "Balancing rich visual content with fast page load performance",
            "Implementing complex Schema.org structures for e-commerce and blog entities",
          ],
          outcomes: [
            "Improved search engine ranking and visibility through structured data",
            "Delivered a premium shopping experience for vintage sports enthusiasts",
          ],
          github: "https://github.com/ChauManh/SEO_SportEcommerce-NextJS",
          website: "https://www.aodaucodienwtm.com",
        },
        {
          slug: "ecommerce-platform",
          name: "E-COMMERCE WEBSITE",
          description:
            "Sports e-commerce website integrated with a RAG-based AI chatbot.",
          overview:
            "A sportswear e-commerce platform featuring advanced filtering, real-time notifications, payment, and an AI-powered chatbot.",
          technologies: [
            "React.js",
            "Express.js",
            "MongoDB",
            "Redis",
            "Firebase",
            "OpenAI API",
            "Socket.io",
            "PayOS",
            "Docker",
            "AWS",
          ],
          role: "Backend Leader",
          teamSize: "4",
          duration: "Feb 2025 - May 2025",
          contributions: [
            "Designed and implemented RESTful APIs for authentication, product, cart, order, and payment modules.",
            "Integrated PayOS with asynchronous webhook processing and real-time order status updates using Socket.io.",
            "Developed custom middlewares for JWT authentication, centralized error/response handling, and secure file uploads; integrated Firebase for Google OAuth 2.0.",
            "Improved API performance with Redis caching, API pagination, and secure OTP storage.",
            "Built a RAG-based AI chatbot using OpenAI API, text chunking, and embeddings for product recommendations.",
            "Deployed the system on AWS with EC2, Docker Compose, Nginx, S3/CloudFront, Jenkins CI/CD, ACM, and Route 53.",
          ],
          highlights: [
            "RAG-based AI chatbot integration",
            "Real-time order status with Socket.io",
            "Jenkins CI/CD pipeline for AWS deployment",
          ],
          challenges: [
            "Managing complex AWS infrastructure and CI/CD pipelines",
            "Implementing RAG-based chatbot with vector search",
          ],
          outcomes: [
            "Fully functional e-commerce platform with AI capabilities",
            "Automated deployment process with Jenkins",
          ],
          github: "https://github.com/cdmanh1108/SportEcommerce-FE_ReactJS-BE_ExpressJS-DB_Mongo",
          website: "https://sportecommerce.chaumanh.site/",
        },
        {
          slug: "music-streaming-platform",
          name: "MUSIC STREAMING PLATFORM",
          description:
            "Music streaming web application using Spotify API and Web Playback SDK for personalized listening experiences.",
          overview:
            "A music streaming web application using Spotify API and Web Playback SDK that allows users to listen to songs, manage playlists, follow artists, and personalize their profiles.",
          technologies: [
            "React.js",
            "TailwindCSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "Cloudinary",
          ],
          role: "Team Leader & Backend Developer",
          teamSize: "4",
          duration: "Sep 2024 - Jan 2025",
          contributions: [
            "Participated in database design and developed RESTful APIs for tracks, playlists management.",
            "Implemented authentication with JWT access/refresh tokens using custom middleware.",
            "Integrated Spotify API and Web Playback SDK for music streaming and playback control.",
            "Built a custom audio player-bar to replace the default Spotify playbar due to integration errors.",
            "Developed a FIFO-based track queue system for seamless music playback.",
          ],
          highlights: [
            "Integration with Spotify API & Web Playback SDK",
            "Custom-built audio player-bar",
            "FIFO track queue system",
          ],
          challenges: [
            "Handling integration errors with the default Spotify playbar",
            "Managing real-time playback state and queue synchronization",
          ],
          outcomes: [
            "Delivered a fully functional music streaming platform with personalized features",
            "Successfully bypassed Spotify's playbar limitations with a custom solution",
          ],
          github: "https://github.com/ChauManh/IE104-Music",
          link: "https://www.youtube.com/watch?v=iQ83y5W5djk&t=1831s",
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          position: "BACKEND DEVELOPER",
          company: "Diko Vina Co., Ltd",
          period: "Aug 2025 -- Dec 2025",
          responsibilities: [
            "Worked in an Agile/Scrum team to design and optimize the database architecture for an Interactive Gamified Photobooth Platform combining photo-taking, coupons, and game-based rewards.",
            "Designed and implemented core RESTful APIs using Express.js, PostgreSQL, and ORM for authentication, user management, coupon, and gift modules.",
            "Engineered an automated QR code module: handled photo uploads to Google Cloud Storage, generated 3-day signed URLs for secure access, and dynamically embedded them into QR codes.",
            "Integrated the KakaoTalk API to automate and streamline user messaging and notifications.",
            "Supported the deployment pipeline, containerized the backend for Google Cloud Run via Docker, managed the database with Cloud SQL, and deployed the frontend to Firebase Hosting.",
          ],
        },
        {
          position: "BACKEND DEVELOPER INTERN",
          company: "Diko Vina Co., Ltd",
          period: "Jun 2025 -- Jul 2025",
          responsibilities: [
            "Participated in onboarding and technical training, gaining familiarity with professional software development workflows.",
            "Practiced full-stack development by cloning existing websites, designing MySQL databases, building RESTful APIs with Express.js, and integrating APIs with the frontend team.",
          ],
        },
      ],
    },
    certificates: {
      title: "Certificates",
      items: [
        {
          name: "DevOps for Freshers",
          issuer: "DEVOPSEDU",
          date: "May 2025",
          image: "/images/devops-for-fresher.jpg",
          link: "https://devopsedu.vn/certificate/?cert_hash=6e0acb8eec02b9f1",
        },
        {
          name: "HTML CSS from Zero to Hero",
          issuer: "F8",
          date: "2024",
          image: "/images/HTML-CSS-Certificate.pdf",
          link: "https://fullstack.edu.vn/certificates/...",
        },
        {
          name: "Basic JavaScript",
          issuer: "F8",
          date: "2024",
          image: "/images/javascript-basic.pdf",
          link: "https://fullstack.edu.vn/certificates/...",
        },
      ],
    },
    contact: {
      email: "cdmanh1108@gmail.com",
      phone: "+84 367 485 383",
      github: "https://github.com/cdmanh1108",
      linkedin: "https://portfolio.chaumanh.site",
    },
  },
  vi: {
    name: "Châu Đức Mạnh",
    title: "Lập trình viên Backend",
    objective: {
      title: "Mục Tiêu Nghề Nghiệp",
      description:
        "Lập trình viên Backend mới tốt nghiệp (Fresher) với kinh nghiệm thực tế trong việc xây dựng và triển khai ứng dụng web sử dụng Node.js, Express.js, NestJS, SQL, NoSQL, Redis, Docker, AWS và GCP. Có kinh nghiệm thiết kế RESTful APIs, xác thực, tích hợp thanh toán, bộ nhớ đệm và triển khai đám mây. Đang tìm kiếm vai trò Lập trình viên Backend nơi tôi có thể đóng góp vào các hệ thống có khả năng mở rộng, cải thiện kỹ năng kỹ thuật backend và dần phát triển theo hướng DevOps và kỹ sư cầu nối Việt-Hàn trong tương lai dài hạn.",
    },
    education: {
      title: "Học Vấn",
      items: [
        {
          degree: "Cử nhân Công nghệ thông tin",
          school: "Trường Đại học Công nghệ Thông tin - Đại học Quốc gia TP.HCM (VNU-HCM)",
          period: "2022 - 2026",
          languageLevel: "TOEIC 725",
        },
      ],
    },
    technicalSkills: {
      mainTitle: "Kỹ Năng",
      title: "Kỹ Năng Chuyên Môn",
      categories: [
        {
          name: "Frontend",
          skills: [
            "HTML",
            "CSS",
            "TailwindCSS",
            "React.js",
            "Next.js",
          ],
        },
        {
          name: "Backend",
          skills: [
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Express.js",
            "NestJS",
            "RESTful APIs",
            "Microservices",
            "RabbitMQ",
          ],
        },
        {
          name: "Database",
          skills: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Prisma",
            "TypeORM",
          ],
        },
        {
          name: "DevOps",
          skills: [
            "Linux",
            "Ubuntu",
            "Docker",
            "AWS",
            "GCP",
            "Jenkins CI/CD với GitHub",
          ],
        },
        {
          name: "Khác",
          skills: ["Git/GitHub", "Postman", "Java Spring Boot"],
        },
      ],
    },
    softSkills: {
      title: "Kỹ Năng Mềm",
      skills: [
        "Có khả năng đọc tài liệu kỹ thuật bằng tiếng Anh",
        "Kỹ năng giao tiếp mạnh mẽ",
        "Làm việc nhóm",
        "Tự học",
        "Kỹ năng giải quyết vấn đề",
      ],
    },
    projects: {
      title: "Dự Án",
      items: [
        {
          slug: "order-food-platform",
          name: "HỆ THỐNG ĐẶT MÓN & ĂN TẠI CHỖ",
          description:
            "Trang web đặt món và ăn tại chỗ có khả năng mở rộng với tích hợp thanh toán và quản lý phiên bàn bằng mã QR.",
          overview:
            "Một nền tảng giao đồ ăn dựa trên microservices, cung cấp trải nghiệm thanh toán trực quan cho khách hàng, quản lý đơn hàng realtime, công cụ vận hành cho admin và thanh toán trực tuyến bảo mật qua PayOS.",
          technologies: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Microservices",
            "RabbitMQ",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Docker",
            "AWS",
          ],
          role: "Lập trình viên Fullstack",
          teamSize: "1",
          duration: "Th12/2025 - Hiện tại",
          contributions: [
            "Thiết kế kiến trúc backend microservices NestJS với RabbitMQ, Prisma, PostgreSQL và Redis, áp dụng Request-ID tracing để ghi log tập trung và gỡ lỗi dễ dàng hơn giữa các dịch vụ.",
            "Triển khai Kiểm soát truy cập dựa trên vai trò (RBAC) với các decorator và guard NestJS tùy chỉnh để quản lý vai trò cho Quản trị viên, Nhân viên và Khách hàng.",
            "Phát triển quản lý phiên bàn bằng mã QR, cho phép khách ăn tại chỗ đặt món theo bàn trong khi đảm bảo trạng thái phiên và đồng bộ hóa đơn hàng nhất quán.",
            "Tích hợp cổng thanh toán PayOS với xử lý webhook dựa trên RabbitMQ bất đồng bộ để đồng bộ hóa trạng thái thanh toán một cách tin cậy giữa các dịch vụ.",
            "Cải thiện hiệu suất API với bộ nhớ đệm Redis, phân trang API và lưu trữ OTP bảo mật.",
            "Triển khai các microservices đã được container hóa trên AWS sử dụng ECS, ALB, RDS, Amazon MQ, S3/CloudFront, VPC và Secrets Manager.",
          ],
          highlights: [
            "Kiến trúc Microservices với Request-ID tracing",
            "RBAC với các decorator và guard tùy chỉnh",
            "Quản lý phiên bàn bằng mã QR",
          ],
          challenges: [
            "Quản lý giao tiếp bất đồng bộ phức tạp và tính nhất quán dữ liệu giữa các microservices",
            "Đảm bảo độ tin cậy khi nhận và xử lý webhook thanh toán trong hệ thống phân tán",
          ],
          outcomes: [
            "Triển khai thành công luồng xử lý đơn hàng có khả năng mở rộng và chịu lỗi cao",
            "Cải thiện khả năng giám sát và gỡ lỗi với Request-ID tracing",
          ],
          github: "https://github.com/cdmanh1108/OrderFood-FE_NextJS-BE_NestJS_Microservices",
          website: "https://orderfood.chaumanh.site",
        },
        {
          slug: "weather-forecast-platform",
          name: "TRANG WEB DỰ BÁO THỜI TIẾT",
          description:
            "Trang web dự báo thời tiết dựa trên NestJS với tính năng phát hiện thành phố và tìm kiếm thời tiết toàn cầu.",
          overview:
            "Một nền tảng dự báo thời tiết hỗ trợ xác thực, tự động phát hiện vị trí, truy xuất thời tiết dựa trên thành phố và hiển thị chi tiết thời tiết.",
          technologies: [
            "React.js",
            "NestJS",
            "MySQL",
            "OpenWeather API",
            "Docker",
            "AWS",
          ],
          role: "Lập trình viên Fullstack",
          teamSize: "1",
          duration: "Th05/2025 - Th06/2025",
          contributions: [
            "Xây dựng các dịch vụ backend NestJS dạng module cho các module Auth, User, City và Weather sử dụng TypeORM và MySQL.",
            "Tích hợp OpenWeather API với reverse geocoding để hỗ trợ phát hiện thành phố, tìm kiếm thời tiết toàn cầu và truy xuất dữ liệu thời tiết thời gian thực.",
            "Triển khai xác thực JWT access/refresh an toàn sử dụng httpOnly cookies, Passport strategies, guards và các bộ lọc ngoại lệ tập trung.",
            "Triển khai ứng dụng trên AWS với S3/CloudFront cho frontend, Docker Compose/Nginx trên EC2 cho backend, và ACM/Route 53 để quản lý SSL/DNS.",
          ],
          highlights: [
            "Các dịch vụ backend NestJS dạng module",
            "Reverse geocoding để phát hiện thành phố",
            "Xác thực JWT an toàn với httpOnly cookies",
          ],
          challenges: [
            "Đồng bộ hóa vị trí và dữ liệu thời tiết mà không cần làm mới trang thủ công",
            "Xử lý giới hạn API và các trạng thái lỗi từ OpenWeather API",
          ],
          outcomes: [
            "Bàn giao ứng dụng thời tiết full-stack ổn định",
            "Triển khai thành công trên AWS sử dụng Docker Compose và Nginx",
          ],
          github: "https://github.com/cdmanh1108/WeatherForecast-FE_ReactJS-BE_NestJS-DB_MYSQL",
          website: "https://weatherforecast.chaumanh.site",
        },
        {
          slug: "wtm-vintage-sport",
          name: "WTM VINTAGE SPORT - ÁO BÓNG ĐÁ CỔ ĐIỂN",
          description:
            "Nền tảng thương mại điện tử chuyên biệt cho áo bóng đá cổ điển, tối ưu hóa công cụ tìm kiếm và trải nghiệm người dùng.",
          overview:
            "Một ứng dụng web thương mại điện tử hiệu suất cao dành riêng cho việc bán áo bóng đá cổ điển. Dự án tập trung vào các kỹ thuật SEO nâng cao, giao diện người dùng sạch sẽ và thiết kế responsive để tối đa hóa khả năng hiển thị trên công cụ tìm kiếm và sự tương tác của khách hàng.",
          technologies: [
            "Next.js",
            "TailwindCSS",
            "TypeScript",
            "JSON-LD",
            "SEO (Metadata, OpenGraph, Schema.org)",
          ],
          role: "Lập trình viên Frontend & SEO",
          teamSize: "1",
          duration: "Th03/2025 - Th06/2025",
          contributions: [
            "Xây dựng ứng dụng web chuyên dụng để bán áo bóng đá cổ điển với giao diện sạch sẽ và thân thiện với người dùng bằng Next.js.",
            "Triển khai các chiến lược SEO nâng cao, bao gồm Next.js Metadata API, OpenGraph để chia sẻ mạng xã hội và dữ liệu cấu trúc JSON-LD (Schema.org) để nâng cao khả năng hiển thị trên công cụ tìm kiếm.",
            "Phát triển giao diện người dùng phản hồi hoàn toàn (responsive) với TailwindCSS, đảm bảo trải nghiệm mượt mà trên mọi loại thiết bị.",
            "Tạo danh sách sản phẩm toàn diện, chức năng tìm kiếm nâng cao và hệ thống blog chuyên dụng để chia sẻ kiến thức thể thao.",
            "Tối ưu hóa tài nguyên hình ảnh và hiệu suất để đảm bảo thời gian tải trang nhanh và điểm số Core Web Vitals cao.",
          ],
          highlights: [
            "Tích hợp SEO nâng cao & Dữ liệu cấu trúc",
            "Kiến trúc Next.js hiệu suất cao",
            "Thiết kế Responsive cho mọi nền tảng",
          ],
          challenges: [
            "Cân bằng giữa nội dung hình ảnh phong phú và hiệu suất tải trang nhanh",
            "Triển khai cấu trúc Schema.org phức tạp cho các thực thể thương mại điện tử và blog",
          ],
          outcomes: [
            "Cải thiện thứ hạng và khả năng hiển thị trên công cụ tìm kiếm thông qua dữ liệu cấu trúc",
            "Mang lại trải nghiệm mua sắm cao cấp cho những người đam mê thể thao cổ điển",
          ],
          github: "https://github.com/ChauManh/SEO_SportEcommerce-NextJS",
          website: "https://www.aodaucodienwtm.com",
        },
        {
          slug: "ecommerce-platform",
          name: "TRANG WEB THƯƠNG MẠI ĐIỆN TỬ",
          description:
            "Trang web thương mại điện tử thể thao tích hợp chatbot AI dựa trên RAG.",
          overview:
            "Một nền tảng thương mại điện tử đồ thể thao với tính năng lọc nâng cao, thông báo thời gian thực, thanh toán và chatbot AI.",
          technologies: [
            "React.js",
            "Express.js",
            "MongoDB",
            "Redis",
            "Firebase",
            "OpenAI API",
            "Socket.io",
            "PayOS",
            "Docker",
            "AWS",
          ],
          role: "Trưởng nhóm Backend",
          teamSize: "4",
          duration: "Th02/2025 - Th05/2025",
          contributions: [
            "Thiết kế và triển khai các API RESTful cho các module xác thực, sản phẩm, giỏ hàng, đơn hàng và thanh toán.",
            "Tích hợp PayOS với xử lý webhook bất đồng bộ và cập nhật trạng thái đơn hàng thời gian thực sử dụng Socket.io.",
            "Phát triển các middleware tùy chỉnh cho xác thực JWT, xử lý phản hồi/lỗi tập trung và tải lên tệp an toàn; tích hợp Firebase cho Google OAuth 2.0.",
            "Cải thiện hiệu suất API với bộ nhớ đệm Redis, phân trang API và lưu trữ OTP bảo mật.",
            "Xây dựng chatbot AI dựa trên RAG sử dụng OpenAI API, chiết tách văn bản (text chunking) và embeddings để đề xuất sản phẩm.",
            "Triển khai hệ thống trên AWS với EC2, Docker Compose, Nginx, S3/CloudFront, Jenkins CI/CD, ACM và Route 53.",
          ],
          highlights: [
            "Tích hợp Chatbot AI dựa trên RAG",
            "Trạng thái đơn hàng thời gian thực với Socket.io",
            "Jenkins CI/CD pipeline để triển khai AWS",
          ],
          challenges: [
            "Quản lý hạ tầng AWS phức tạp và luồng CI/CD",
            "Triển khai chatbot dựa trên RAG với tìm kiếm vector",
          ],
          outcomes: [
            "Nền tảng thương mại điện tử đầy đủ chức năng với khả năng AI",
            "Quy trình triển khai tự động với Jenkins",
          ],
          github: "https://github.com/cdmanh1108/SportEcommerce-FE_ReactJS-BE_ExpressJS-DB_Mongo",
          website: "https://sportecommerce.chaumanh.site/",
        },
        {
          slug: "music-streaming-platform",
          name: "NỀN TẢNG STREAMING NHẠC",
          description:
            "Ứng dụng web nghe nhạc sử dụng Spotify API và Web Playback SDK mang lại trải nghiệm cá nhân hóa.",
          overview:
            "Một ứng dụng web streaming nhạc sử dụng Spotify API và Web Playback SDK cho phép người dùng nghe nhạc, quản lý danh sách phát, theo dõi nghệ sĩ và cá nhân hóa hồ sơ.",
          technologies: [
            "React.js",
            "TailwindCSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "Cloudinary",
          ],
          role: "Trưởng nhóm & Lập trình viên Backend",
          teamSize: "4",
          duration: "Th09/2024 - Th01/2025",
          contributions: [
            "Tham gia thiết kế cơ sở dữ liệu và phát triển các API RESTful cho quản lý bài hát và danh sách phát.",
            "Triển khai xác thực với JWT access/refresh tokens sử dụng middleware tùy chỉnh.",
            "Tích hợp Spotify API và Web Playback SDK để truyền phát nhạc và điều khiển phát nhạc.",
            "Xây dựng thanh trình phát âm thanh (player-bar) tùy chỉnh để thay thế trình phát mặc định của Spotify do lỗi tích hợp.",
            "Phát triển hệ thống hàng đợi bài hát dựa trên cơ chế FIFO để phát nhạc mượt mà.",
          ],
          highlights: [
            "Tích hợp Spotify API & Web Playback SDK",
            "Thanh trình phát nhạc tùy chỉnh",
            "Hệ thống hàng đợi bài hát FIFO",
          ],
          challenges: [
            "Xử lý các lỗi tích hợp với trình phát mặc định của Spotify",
            "Quản lý trạng thái phát nhạc thời gian thực và đồng bộ hàng đợi",
          ],
          outcomes: [
            "Bàn giao nền tảng streaming nhạc đầy đủ chức năng với các tính năng cá nhân hóa",
            "Giải quyết thành công giới hạn trình phát của Spotify bằng giải pháp tùy chỉnh",
          ],
          github: "https://github.com/ChauManh/IE104-Music",
          link: "https://www.youtube.com/watch?v=iQ83y5W5djk&t=1831s",
        },
      ],
    },
    experience: {
      title: "Kinh Nghiệm",
      items: [
        {
          position: "LẬP TRÌNH VIÊN BACKEND",
          company: "Công ty TNHH Diko Vina",
          period: "Th08/2025 -- Th12/2025",
          responsibilities: [
            "Làm việc trong nhóm Agile/Scrum để thiết kế và tối ưu hóa kiến trúc cơ sở dữ liệu cho Nền tảng Photobooth Tương tác Gamified kết hợp chụp ảnh, phiếu giảm giá và phần thưởng dựa trên trò chơi.",
            "Thiết kế và triển khai các API RESTful cốt lõi sử dụng Express.js, PostgreSQL và ORM cho các module xác thực, quản lý người dùng, phiếu giảm giá và quà tặng.",
            "Xây dựng module mã QR tự động: xử lý tải ảnh lên Google Cloud Storage, tạo URL đã ký 3 ngày để truy cập an toàn và nhúng động chúng vào mã QR.",
            "Tích hợp KakaoTalk API để tự động hóa và tinh giản việc gửi tin nhắn và thông báo cho người dùng.",
            "Hỗ trợ luồng triển khai (deployment pipeline), container hóa backend cho Google Cloud Run qua Docker, quản lý cơ sở dữ liệu với Cloud SQL và triển khai frontend lên Firebase Hosting.",
          ],
        },
        {
          position: "THỰC TẬP SINH LẬP TRÌNH VIÊN BACKEND",
          company: "Công ty TNHH Diko Vina",
          period: "Th06/2025 -- Th07/2025",
          responsibilities: [
            "Tham gia vào quá trình hội nhập và đào tạo kỹ thuật, làm quen với quy trình làm việc phát triển phần mềm chuyên nghiệp.",
            "Thực hành phát triển full-stack bằng cách nhân bản các trang web hiện có, thiết kế cơ sở dữ liệu MySQL, xây dựng các API RESTful với Express.js và tích hợp API với nhóm frontend.",
          ],
        },
      ],
    },
    certificates: {
      title: "Chứng Chỉ",
      items: [
        {
          name: "DevOps for Freshers",
          issuer: "DEVOPSEDU",
          date: "Th05/2025",
          image: "/images/devops-for-fresher.jpg",
          link: "https://devopsedu.vn/certificate/?cert_hash=6e0acb8eec02b9f1",
        },
        {
          name: "HTML CSS từ Zero đến Hero",
          issuer: "F8",
          date: "2024",
          image: "/images/HTML-CSS-Certificate.pdf",
          link: "https://fullstack.edu.vn/certificates/...",
        },
        {
          name: "JavaScript cơ bản",
          issuer: "F8",
          date: "2024",
          image: "/images/javascript-basic.pdf",
          link: "https://fullstack.edu.vn/certificates/...",
        },
      ],
    },
    contact: {
      email: "cdmanh1108@gmail.com",
      phone: "+84 367 485 383",
      github: "https://github.com/cdmanh1108",
      linkedin: "https://portfolio.chaumanh.site",
    },
  },
};
