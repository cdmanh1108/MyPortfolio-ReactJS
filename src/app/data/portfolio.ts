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
    title: "Software Engineer",
    objective: {
      title: "Career Objective",
      description:
        "Fresher Software Engineer with nearly one year of hands-on experience building web applications. I am seeking a role where I can contribute in a global, multicultural environment, especially teams collaborating in English and Korean. My long-term goal is to grow into a DevOps Engineer or a Vietnam-Korea bridge engineer who connects technical execution with business needs.",
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Major: Information Technology",
          school: "University of Information Technology - VNUHCM (UIT)",
          period: "2022 - 2026",
          details: "GPA: 3.0/4.0",
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
            "JavaScript",
            "TypeScript",
            "ReactJS",
            "NextJS",
            "TailwindCSS",
          ],
        },
        {
          name: "Backend",
          skills: [
            "JavaScript",
            "NodeJS",
            "ExpressJS",
            "NestJS",
            "Java",
            "JavaSpringBoot",
            "Microservices",
          ],
        },
        {
          name: "Database",
          skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
        },
        {
          name: "DevOps",
          skills: [
            "Linux",
            "Docker",
            "AWS",
            "GCS",
            "Firebase",
            "Jenkins CI/CD",
          ],
        },
        {
          name: "Tools",
          skills: ["GitHub", "Postman"],
        },
      ],
    },
    softSkills: {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Time Management",
        "Adaptability",
        "Critical Thinking",
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          slug: "ecommerce-platform",
          name: "E-Commerce Platform",
          description:
            "Full-stack e-commerce platform with product catalog, cart, and payment integration.",
          overview:
            "A scalable online shopping platform focused on smooth checkout and reliable order processing. The project included user shopping flow, admin management, and payment operations.",
          technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
          role: "Full-Stack Developer",
          teamSize: "5 members",
          duration: "Jan 2024 - Apr 2024",
          contributions: [
            "Designed and implemented the shopping cart module",
            "Integrated Stripe payment gateway",
            "Built RESTful APIs for products and orders",
            "Delivered responsive UI with React and Tailwind CSS",
          ],
          highlights: [
            "Role-based admin dashboard for catalog and order workflow",
            "Reusable component system for product listing and checkout states",
            "Optimistic UI updates to improve cart interaction speed",
          ],
          challenges: [
            "Keeping cart state consistent between guest and authenticated users",
            "Handling failed or interrupted payment flows safely",
          ],
          outcomes: [
            "Reduced checkout drop-off by simplifying payment steps",
            "Improved page performance through lazy loading and query tuning",
          ],
          link: "#",
        },
        {
          slug: "task-management-app",
          name: "Task Management App",
          description:
            "Collaborative task management application with real-time updates and team workflows.",
          overview:
            "A productivity web app that allows teams to plan, prioritize, and track tasks with real-time collaboration and activity visibility.",
          technologies: [
            "Next.js",
            "PostgreSQL",
            "Socket.io",
            "Tailwind CSS",
            "Prisma",
          ],
          role: "Frontend Lead",
          teamSize: "4 members",
          duration: "Sep 2023 - Dec 2023",
          contributions: [
            "Led frontend architecture and component strategy",
            "Implemented real-time updates with Socket.io",
            "Built drag-and-drop board for task status flow",
            "Optimized rendering for better board performance",
          ],
          highlights: [
            "Kanban-style board with reusable task card patterns",
            "Activity feed for edits, comments, and assignment updates",
            "Responsive layout supporting both mobile and desktop planning",
          ],
          challenges: [
            "Managing frequent socket events without UI jitter",
            "Designing permission rules for team and project spaces",
          ],
          outcomes: [
            "Delivered smoother collaboration with near real-time feedback",
            "Improved task completion visibility for team leads",
          ],
          link: "#",
        },
        {
          slug: "weather-dashboard",
          name: "Weather Dashboard",
          description:
            "Interactive weather dashboard with charts and location-based forecasting.",
          overview:
            "A data-driven dashboard that visualizes weather metrics by location, helping users quickly understand trends and short-term forecasts.",
          technologies: ["React", "TypeScript", "Chart.js", "REST API"],
          role: "Solo Developer",
          teamSize: "1 member",
          duration: "Jun 2023 - Aug 2023",
          contributions: [
            "Integrated OpenWeather API for live weather data",
            "Built interactive charts for temperature and humidity trends",
            "Implemented geolocation and city search",
            "Created responsive UI for multiple breakpoints",
          ],
          highlights: [
            "Cached API responses to reduce repeated network calls",
            "Clear data cards for current weather and 7-day forecast",
            "Error states for API limits and unavailable locations",
          ],
          challenges: [
            "Normalizing weather units and timezone differences",
            "Keeping chart readability on small mobile screens",
          ],
          outcomes: [
            "Faster weather lookup experience with local caching",
            "Higher readability through simplified chart interaction",
          ],
          link: "#",
        },
        {
          slug: "social-media-analytics-tool",
          name: "Social Media Analytics Tool",
          description:
            "Analytics dashboard for social metrics tracking and insights generation.",
          overview:
            "A reporting solution that collects social data, aggregates trends, and helps teams identify high-performing content channels.",
          technologies: ["Vue.js", "Python", "FastAPI", "Redis", "Docker"],
          role: "Backend Developer",
          teamSize: "6 members",
          duration: "Mar 2023 - May 2023",
          contributions: [
            "Built Python pipeline for metrics aggregation",
            "Applied Redis caching strategy for report endpoints",
            "Developed FastAPI endpoints for analytics data",
            "Containerized services with Docker for deployment",
          ],
          highlights: [
            "Background jobs for scheduled analytics refresh",
            "Filtering by campaign, channel, and date range",
            "API contracts documented for frontend integration",
          ],
          challenges: [
            "Handling rate limits from third-party social APIs",
            "Balancing report freshness and compute cost",
          ],
          outcomes: [
            "Reduced API response time with caching and indexing",
            "Enabled more reliable weekly reporting workflows",
          ],
          link: "#",
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          position: "Backend Developer Intern",
          company: "Diko Vina Co., Ltd",
          period: "Jun 2025 - Jul 2025",
          responsibilities: [
            "Implemented backend modules for internal web systems",
            "Integrated RESTful APIs and validated data contracts",
            "Participated in sprint planning and daily standups",
            "Supported debugging and performance tuning tasks",
          ],
        },
        {
          position: "Backend Developer",
          company: "Diko Vina Co., Ltd",
          period: "Aug 2025 - Dec 2025",
          responsibilities: [
            "Contributed to microservices architecture for large-scale usage",
            "Collaborated in code reviews and implementation planning",
            "Supported CI/CD improvements to shorten release lead time",
            "Worked with product and QA to define technical scope",
          ],
        },
      ],
    },
    certificates: {
      title: "Certificates",
      items: [
        {
          name: "AWS Certified Solutions Architect",
          issuer: "Amazon Web Services",
          date: "March 2024",
          expiry: "March 2027",
          image: "aws-cert",
          link: "#",
        },
        {
          name: "DevOps for Freshers",
          issuer: "DEVOPSEDU",
          date: "May 2025",
          image: "/images/devops-for-fresher.jpg",
          link: "https://devopsedu.vn/certificate/?cert_hash=6e0acb8eec02b9f1",
        },
        {
          name: "React Advanced Patterns",
          issuer: "Frontend Masters",
          date: "November 2022",
          image: "react-cert",
          link: "#",
        },
      ],
    },
    contact: {
      email: "cdmanh1108@gmail.com",
      phone: "+84 367 485 383",
      github: "github.com/cdmanh1108",
      linkedin: "linkedin.com/in/chaumanh1108",
    },
  },
  vi: {
    name: "Châu Đức Mạnh",
    title: "Kỹ Sư Phần Mềm",
    objective: {
      title: "Mục Tiêu Nghề Nghiệp",
      description:
        "Fresher Software Engineer với gần 1 năm kinh nghiệm thực tế phát triển ứng dụng web. Tôi mong muốn được làm việc và đóng góp trong môi trường đa văn hóa, định hướng toàn cầu, đặc biệt ở các đội ngũ sử dụng tiếng Anh và tiếng Hàn. Mục tiêu dài hạn của tôi là phát triển theo hướng DevOps Engineer hoặc trở thành kỹ sư cầu nối Việt - Hàn, kết nối hiệu quả giữa kỹ thuật và nghiệp vụ.",
    },
    education: {
      title: "Học Vấn",
      items: [
        {
          degree: "Chuyên ngành Công nghệ thông tin",
          school: "Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM (UIT)",
          period: "2022 - 2026",
          details: "GPA: 3.0/4.0",
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
            "JavaScript",
            "TypeScript",
            "ReactJS",
            "NextJS",
            "TailwindCSS",
          ],
        },
        {
          name: "Backend",
          skills: [
            "JavaScript",
            "NodeJS",
            "ExpressJS",
            "NestJS",
            "Java",
            "JavaSpringBoot",
            "Microservices",
          ],
        },
        {
          name: "Database",
          skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
        },
        {
          name: "DevOps",
          skills: [
            "Linux",
            "Docker",
            "AWS",
            "GCS",
            "Firebase",
            "Jenkins CI/CD",
          ],
        },
        {
          name: "Công cụ",
          skills: ["GitHub", "Postman"],
        },
      ],
    },
    softSkills: {
      title: "Kỹ Năng Mềm",
      skills: [
        "Giải quyết vấn đề",
        "Làm việc nhóm",
        "Giao tiếp",
        "Quản lý thời gian",
        "Thích nghi",
        "Tư duy phản biện",
      ],
    },
    projects: {
      title: "Dự Án",
      items: [
        {
          slug: "ecommerce-platform",
          name: "Nền Tảng Thương Mại Điện Tử",
          description:
            "Nền tảng thương mại điện tử full-stack với danh mục sản phẩm, giỏ hàng và thanh toán.",
          overview:
            "Một hệ thống bán hàng trực tuyến có khả năng mở rộng, tập trung vào trải nghiệm mua sắm mượt mà và xử lý đơn hàng ổn định.",
          technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
          role: "Lập trình viên Full-Stack",
          teamSize: "5 thành viên",
          duration: "01/2024 - 04/2024",
          contributions: [
            "Thiết kế và triển khai module giỏ hàng",
            "Tích hợp cổng thanh toán Stripe",
            "Xây dựng RESTful API cho sản phẩm và đơn hàng",
            "Phát triển giao diện responsive bằng React và Tailwind CSS",
          ],
          highlights: [
            "Dashboard quản trị theo vai trò cho sản phẩm và đơn hàng",
            "Bộ component tái sử dụng cho danh sách sản phẩm và checkout",
            "Cập nhật UI theo hướng optimistic để thao tác giỏ hàng nhanh hơn",
          ],
          challenges: [
            "Đồng bộ trạng thái giỏ hàng giữa khách và người dùng đăng nhập",
            "Xử lý an toàn các tình huống thanh toán thất bại hoặc gián đoạn",
          ],
          outcomes: [
            "Giảm tỷ lệ rời bỏ ở bước thanh toán nhờ quy trình đơn giản hơn",
            "Cải thiện hiệu năng trang bằng lazy loading và tối ưu truy vấn",
          ],
          link: "#",
        },
        {
          slug: "task-management-app",
          name: "Ứng Dụng Quản Lý Công Việc",
          description:
            "Ứng dụng quản lý công việc cộng tác với cập nhật thời gian thực và quy trình nhóm.",
          overview:
            "Ứng dụng năng suất giúp nhóm lập kế hoạch, ưu tiên và theo dõi công việc với khả năng cộng tác gần thời gian thực.",
          technologies: [
            "Next.js",
            "PostgreSQL",
            "Socket.io",
            "Tailwind CSS",
            "Prisma",
          ],
          role: "Trưởng nhóm Frontend",
          teamSize: "4 thành viên",
          duration: "09/2023 - 12/2023",
          contributions: [
            "Dẫn dắt kiến trúc frontend và chiến lược component",
            "Triển khai cập nhật thời gian thực bằng Socket.io",
            "Xây dựng bảng kéo thả cho luồng trạng thái công việc",
            "Tối ưu render để tăng hiệu năng khi thao tác board",
          ],
          highlights: [
            "Bảng Kanban với mẫu thẻ công việc tái sử dụng",
            "Activity feed cho chỉnh sửa, bình luận và phân công",
            "Responsive tốt cho cả lập kế hoạch trên mobile và desktop",
          ],
          challenges: [
            "Kiểm soát nhiều sự kiện socket mà vẫn mượt UI",
            "Thiết kế quyền truy cập theo team và workspace",
          ],
          outcomes: [
            "Tăng độ mượt khi cộng tác nhờ phản hồi gần thời gian thực",
            "Giúp trưởng nhóm theo dõi tiến độ rõ ràng hơn",
          ],
          link: "#",
        },
        {
          slug: "weather-dashboard",
          name: "Bảng Điều Khiển Thời Tiết",
          description:
            "Dashboard thời tiết tương tác với biểu đồ dữ liệu và dự báo theo vị trí.",
          overview:
            "Dashboard trực quan hóa dữ liệu thời tiết theo vị trí, giúp người dùng nắm nhanh xu hướng và dự báo ngắn hạn.",
          technologies: ["React", "TypeScript", "Chart.js", "REST API"],
          role: "Lập trình viên độc lập",
          teamSize: "1 thành viên",
          duration: "06/2023 - 08/2023",
          contributions: [
            "Tích hợp OpenWeather API cho dữ liệu thời gian thực",
            "Xây dựng biểu đồ tương tác cho nhiệt độ và độ ẩm",
            "Triển khai định vị địa lý và tìm kiếm thành phố",
            "Thiết kế giao diện responsive đa thiết bị",
          ],
          highlights: [
            "Cache phản hồi API để giảm gọi mạng lặp lại",
            "Data card rõ ràng cho hiện tại và dự báo 7 ngày",
            "Xử lý trạng thái lỗi cho API limit và vị trí không hợp lệ",
          ],
          challenges: [
            "Chuẩn hóa đơn vị thời tiết và chênh lệch múi giờ",
            "Giữ biểu đồ dễ đọc trên màn hình nhỏ",
          ],
          outcomes: [
            "Tra cứu thời tiết nhanh hơn nhờ cache cục bộ",
            "Tăng khả năng đọc dữ liệu qua tương tác biểu đồ tối giản",
          ],
          link: "#",
        },
        {
          slug: "social-media-analytics-tool",
          name: "Công Cụ Phân Tích Mạng Xã Hội",
          description:
            "Dashboard phân tích để theo dõi chỉ số mạng xã hội và tạo insights.",
          overview:
            "Giải pháp báo cáo giúp thu thập dữ liệu mạng xã hội, tổng hợp xu hướng và hỗ trợ nhóm marketing tối ưu nội dung.",
          technologies: ["Vue.js", "Python", "FastAPI", "Redis", "Docker"],
          role: "Lập trình viên Backend",
          teamSize: "6 thành viên",
          duration: "03/2023 - 05/2023",
          contributions: [
            "Xây dựng pipeline Python cho tổng hợp dữ liệu",
            "Áp dụng Redis caching cho các endpoint báo cáo",
            "Phát triển FastAPI cho dữ liệu phân tích",
            "Container hóa dịch vụ bằng Docker để triển khai",
          ],
          highlights: [
            "Background jobs để làm mới dữ liệu định kỳ",
            "Bộ lọc theo chiến dịch, kênh và khoảng thời gian",
            "Tài liệu hóa API contract để frontend tích hợp nhanh",
          ],
          challenges: [
            "Xử lý giới hạn request từ social APIs bên thứ ba",
            "Cân bằng giữa độ mới dữ liệu và chi phí xử lý",
          ],
          outcomes: [
            "Giảm thời gian phản hồi API nhờ cache và indexing",
            "Ổn định quy trình báo cáo định kỳ cho đội ngũ",
          ],
          link: "#",
        },
      ],
    },
    experience: {
      title: "Kinh Nghiệm",
      items: [
        {
          position: "Intern Backend Developer",
          company: "Công ty TNHH Diko Vina",
          period: "06/2025 - 07/2025",
          responsibilities: [
            "Triển khai các module backend cho hệ thống nội bộ",
            "Tích hợp RESTful API và kiểm tra dữ liệu đầu vào/đầu ra",
            "Tham gia sprint planning và daily standup",
            "Hỗ trợ debug và tối ưu hiệu năng theo yêu cầu",
          ],
        },
        {
          position: "Backend Developer",
          company: "Công ty TNHH Diko Vina",
          period: "08/2025 - 12/2025",
          responsibilities: [
            "Tham gia phát triển kiến trúc microservices cho hệ thống quy mô lớn",
            "Phối hợp code review và lên kế hoạch triển khai",
            "Hỗ trợ cải thiện CI/CD để rút ngắn thời gian phát hành",
            "Làm việc cùng Product và QA để chốt phạm vi kỹ thuật",
          ],
        },
      ],
    },
    certificates: {
      title: "Chứng Chỉ",
      items: [
        {
          name: "AWS Certified Solutions Architect",
          issuer: "Amazon Web Services",
          date: "03/2024",
          expiry: "03/2027",
          image: "aws-cert",
          link: "#",
        },
        {
          name: "DevOps for Freshers",
          issuer: "DEVOPSEDU",
          date: "05/2025",
          image: "/images/devops-for-fresher.jpg",
          link: "https://devopsedu.vn/certificate/?cert_hash=6e0acb8eec02b9f1",
        },
        {
          name: "React Advanced Patterns",
          issuer: "Frontend Masters",
          date: "11/2022",
          image: "react-cert",
          link: "#",
        },
      ],
    },
    contact: {
      email: "cdmanh1108@gmail.com",
      phone: "+84 367 485 383",
      github: "github.com/cdmanh1108",
      linkedin: "linkedin.com/in/chaumanh1108",
    },
  },
};
