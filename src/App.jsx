import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  Download, 
  Globe, 
  Phone, 
  MapPin, 
  Mail, 
  User, 
  Briefcase, 
  GraduationCap,
  Award,
  Languages,
  Menu,
  X,
  ChevronDown,
  Leaf,
  Sprout,
  TreePine
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Content in both languages
  const content = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        contact: 'Contact',
        switchLang: 'عربي'
      },
      hero: {
        name: 'Eng. Hany Shalaby',
        title: 'Agricultural Consultant & Director of Grapes, Vegetables, and Greenhouses Sector',
        bio: 'With 18+ years of hands-on experience in crop management, pest control, fertilization programs, and export standards, Eng. Hany El Shalaby provides professional support to agricultural businesses and farms across Egypt.',
        downloadCV: 'Download CV',
        switchToArabic: 'Switch to Arabic'
      },
      about: {
        title: 'About Me',
        education: {
          title: 'Education',
          degree: 'B.Sc. in Agriculture – Cairo University – 2006',
          description: 'Graduated with Good Grade, specializing in agricultural sciences with focus on crop management and sustainable farming practices.'
        },
        currentPosition: {
          title: 'Current Position',
          position: 'Director of the Grape, Vegetable and Greenhouse Sector',
          company: 'Orchard – Horticultural Crops Development Company',
          address: 'Address: K 113 Cairo–Alexandria Desert Road, New Cairo'
        },
        training: {
          title: 'Training Background',
          description: 'Desert land cultivation and pest control techniques from renowned agricultural experts.'
        },
        languages: {
          title: 'Languages',
          description: 'Fluent in English and skilled in Microsoft Office. Holds a valid driving license.'
        },
        previous: {
          title: 'Previous Roles',
          description: 'Director at Agri Egypt for Agricultural Investment & Freelance Consultant for Fruits and Vegetables'
        }
      },
      skills: {
        title: 'Practical Skills',
        subtitle: 'Comprehensive expertise in agricultural management, pest control, and export standards',
        list: [
          'Crop management for grapes, citrus, olives, and vegetables',
          'Developing fertilization and irrigation programs',
          'Calculating fertilizer requirements (units & PPM)',
          'Designing integrated pest control programs',
          'Identification of fungal, insect, nematode, and mite issues',
          'Recommending appropriate pesticides and application methods',
          'Training agricultural teams on best practices',
          'Differentiating between active substances in commercial pesticide names',
          'Managing harvesting, packing, and post-harvest processes',
          'Ensuring compliance with Arab and European export standards',
          'Handling quality documentation and export certifications'
        ]
      },
      experience: {
        title: 'Professional Experience',
        current: {
          position: 'Director – Grapes, Vegetables, and Greenhouses Sector',
          company: 'Orchard – Horticultural Crops Development Company',
          status: 'Current Position',
          address: 'Address: K 113 Cairo–Alexandria Desert Road, New Cairo',
          description: 'Leading the strategic development and management of grape, vegetable, and greenhouse operations. Responsible for implementing advanced agricultural techniques, ensuring quality standards, and optimizing crop yields across multiple facilities.'
        },
        previous: [
          {
            position: 'Director',
            company: 'Agri Egypt for Agricultural Investment',
            status: 'Previous Role',
            description: 'Managed agricultural investment projects and provided strategic guidance for sustainable farming initiatives. Developed comprehensive agricultural programs and supervised implementation of modern farming techniques.'
          },
          {
            position: 'Freelance Agricultural Consultant',
            company: 'Fruits and Vegetables Specialist',
            status: 'Previous Role',
            description: 'Provided expert consultation services to various agricultural businesses, focusing on fruit and vegetable cultivation, pest management, and export quality standards. Developed customized solutions for diverse agricultural challenges.'
          }
        ]
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Ready to discuss your agricultural project? Let\'s connect and explore how we can work together.',
        info: {
          title: 'Contact Information',
          phone: 'Phone',
          phoneNumber: '01006550028',
          location: 'Location',
          locationText: 'Station 2 Seeds – Abu Al Matamir – Beheira, Egypt',
          company: 'Company Address',
          companyAddress: 'Building 440, Al Nakheel Compound – New Cairo'
        },
        form: {
          title: 'Send a Message',
          name: 'Name',
          namePlaceholder: 'Your Name',
          email: 'Email',
          emailPlaceholder: 'your.email@example.com',
          message: 'Message',
          messagePlaceholder: 'Your message...',
          send: 'Send Message'
        }
      },
      footer: {
        name: 'Eng. Hany Shalaby',
        title: 'Agricultural Consultant & Technical Director',
        copyright: '© 2024 Eng. Hany Shalaby. All rights reserved.'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'نبذة عني',
        skills: 'المهارات',
        experience: 'الخبرة',
        contact: 'اتصل بي',
        switchLang: 'EN'
      },
      hero: {
        name: 'م. هاني شلبي',
        title: 'مستشار زراعي ومدير قطاع العنب والخضروات والصوب الزراعية',
        bio: 'مع أكثر من 18 عامًا من الخبرة العملية في إدارة المحاصيل ومكافحة الآفات وبرامج التسميد ومعايير التصدير، يقدم المهندس هاني الشلبي الدعم المهني للشركات والمزارع الزراعية في جميع أنحاء مصر.',
        downloadCV: 'تحميل السيرة الذاتية',
        switchToArabic: 'التبديل للإنجليزية'
      },
      about: {
        title: 'نبذة عني',
        education: {
          title: 'التعليم',
          degree: 'بكالوريوس الزراعة – جامعة القاهرة – 2006',
          description: 'تخرج بتقدير جيد، متخصص في العلوم الزراعية مع التركيز على إدارة المحاصيل وممارسات الزراعة المستدامة.'
        },
        currentPosition: {
          title: 'المنصب الحالي',
          position: 'مدير قطاع العنب والخضروات والصوب الزراعية',
          company: 'أورشارد – شركة تنمية المحاصيل البستانية',
          address: 'العنوان: ك 113 طريق القاهرة الإسكندرية الصحراوي، القاهرة الجديدة'
        },
        training: {
          title: 'الخلفية التدريبية',
          description: 'تقنيات زراعة الأراضي الصحراوية ومكافحة الآفات من خبراء زراعيين مشهورين.'
        },
        languages: {
          title: 'اللغات',
          description: 'يجيد اللغة الإنجليزية وماهر في برامج Microsoft Office. يحمل رخصة قيادة سارية.'
        },
        previous: {
          title: 'المناصب السابقة',
          description: 'مدير في أجري مصر للاستثمار الزراعي ومستشار مستقل للفواكه والخضروات'
        }
      },
      skills: {
        title: 'المهارات العملية',
        subtitle: 'خبرة شاملة في الإدارة الزراعية ومكافحة الآفات ومعايير التصدير',
        list: [
          'إدارة محاصيل العنب والحمضيات والزيتون والخضروات',
          'تطوير برامج التسميد والري',
          'حساب متطلبات الأسمدة (الوحدات و PPM)',
          'تصميم برامج المكافحة المتكاملة للآفات',
          'تحديد مشاكل الفطريات والحشرات والنيماتودا والعث',
          'التوصية بالمبيدات المناسبة وطرق التطبيق',
          'تدريب الفرق الزراعية على أفضل الممارسات',
          'التمييز بين المواد الفعالة في أسماء المبيدات التجارية',
          'إدارة عمليات الحصاد والتعبئة وما بعد الحصاد',
          'ضمان الامتثال لمعايير التصدير العربية والأوروبية',
          'التعامل مع وثائق الجودة وشهادات التصدير'
        ]
      },
      experience: {
        title: 'الخبرة المهنية',
        current: {
          position: 'مدير – قطاع العنب والخضروات والصوب الزراعية',
          company: 'أورشارد – شركة تنمية المحاصيل البستانية',
          status: 'المنصب الحالي',
          address: 'العنوان: ك 113 طريق القاهرة الإسكندرية الصحراوي، القاهرة الجديدة',
          description: 'قيادة التطوير الاستراتيجي وإدارة عمليات العنب والخضروات والصوب الزراعية. مسؤول عن تنفيذ التقنيات الزراعية المتقدمة وضمان معايير الجودة وتحسين إنتاجية المحاصيل عبر مرافق متعددة.'
        },
        previous: [
          {
            position: 'مدير',
            company: 'أجري مصر للاستثمار الزراعي',
            status: 'منصب سابق',
            description: 'إدارة مشاريع الاستثمار الزراعي وتقديم التوجيه الاستراتيجي لمبادرات الزراعة المستدامة. تطوير برامج زراعية شاملة والإشراف على تنفيذ تقنيات الزراعة الحديثة.'
          },
          {
            position: 'مستشار زراعي مستقل',
            company: 'متخصص في الفواكه والخضروات',
            status: 'منصب سابق',
            description: 'تقديم خدمات استشارية متخصصة لمختلف الشركات الزراعية، مع التركيز على زراعة الفواكه والخضروات وإدارة الآفات ومعايير جودة التصدير. تطوير حلول مخصصة للتحديات الزراعية المتنوعة.'
          }
        ]
      },
      contact: {
        title: 'تواصل معي',
        subtitle: 'مستعد لمناقشة مشروعك الزراعي؟ دعنا نتواصل ونستكشف كيف يمكننا العمل معًا.',
        info: {
          title: 'معلومات الاتصال',
          phone: 'الهاتف',
          phoneNumber: '01006550028',
          location: 'الموقع',
          locationText: 'محطة 2 بذور – أبو المطامير – البحيرة، مصر',
          company: 'عنوان الشركة',
          companyAddress: 'مبنى 440، مجمع النخيل – القاهرة الجديدة'
        },
        form: {
          title: 'إرسال رسالة',
          name: 'الاسم',
          namePlaceholder: 'اسمك',
          email: 'البريد الإلكتروني',
          emailPlaceholder: 'your.email@example.com',
          message: 'الرسالة',
          messagePlaceholder: 'رسالتك...',
          send: 'إرسال الرسالة'
        }
      },
      footer: {
        name: 'م. هاني شلبي',
        title: 'مستشار زراعي ومدير تقني',
        copyright: '© 2024 م. هاني شلبي. جميع الحقوق محفوظة.'
      }
    }
  };

  const t = isArabic ? content.ar : content.en;

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-green-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 animate-fadeInLeft">
              <Leaf className="h-8 w-8 text-olive-600 animate-pulse" />
              <span className="font-bold text-xl text-olive-800">{t.hero.name}</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'about', 'skills', 'experience', 'contact'].map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 transform hover:scale-105 ${
                    activeSection === section 
                      ? 'text-olive-600 font-semibold border-b-2 border-olive-600' 
                      : 'text-gray-600 hover:text-olive-600'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {section === 'hero' ? t.nav.home : t.nav[section]}
                </button>
              ))}
            </div>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsArabic(!isArabic)}
                className="border-olive-200 text-olive-700 hover:bg-olive-50 transition-all duration-300 transform hover:scale-105 animate-fadeInRight"
              >
                <Globe className="h-4 w-4 mr-2 animate-spin-slow" />
                {t.nav.switchLang}
              </Button>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-md text-olive-600 hover:bg-olive-50 transition-all duration-300 transform hover:scale-110"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-green-100 animate-slideDown">
              {['hero', 'about', 'skills', 'experience', 'contact'].map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-olive-600 hover:bg-olive-50 capitalize transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {section === 'hero' ? t.nav.home : t.nav[section]}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-olive-900/10 to-green-900/10 animate-float"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fadeInUp">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-olive-100 rounded-full mb-6 animate-bounce-slow">
              <Sprout className="h-16 w-16 text-olive-600 animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-olive-800 mb-4 animate-typewriter">
              {t.hero.name}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-olive-600 mb-6 font-medium animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              {t.hero.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '1s' }}>
              {t.hero.bio}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
            <Button 
              size="lg" 
              className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse-slow"
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 animate-bounce" />
              {t.hero.downloadCV}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-olive-200 text-olive-700 hover:bg-olive-50 px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => setIsArabic(!isArabic)}
            >
              <Globe className="mr-2 h-5 w-5 animate-spin-slow" />
              {t.hero.switchToArabic}
            </Button>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown className="h-8 w-8 text-olive-600 mx-auto animate-bounce cursor-pointer" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-olive-800 mb-4">{t.about.title}</h2>
            <div className="w-24 h-1 bg-olive-600 mx-auto animate-expandWidth"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <Card className="border-olive-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="h-8 w-8 text-olive-600 mr-3 animate-pulse" />
                    <h3 className="text-2xl font-semibold text-olive-800">{t.about.education.title}</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>{t.about.education.degree}</strong>
                  </p>
                  <p className="text-gray-600">
                    {t.about.education.description}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slideInRight">
              <Card className="border-olive-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Briefcase className="h-8 w-8 text-olive-600 mr-3 animate-pulse" />
                    <h3 className="text-2xl font-semibold text-olive-800">{t.about.currentPosition.title}</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-2">
                    <strong>{t.about.currentPosition.position}</strong>
                  </p>
                  <p className="text-olive-600 font-medium mb-4">
                    {t.about.currentPosition.company}
                  </p>
                  <p className="text-gray-600">
                    {t.about.currentPosition.address}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: t.about.training.title, description: t.about.training.description },
              { icon: Languages, title: t.about.languages.title, description: t.about.languages.description },
              { icon: User, title: t.about.previous.title, description: t.about.previous.description }
            ].map((item, index) => (
              <Card key={index} className="border-olive-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-olive-600 mx-auto mb-4 animate-pulse" />
                  <h4 className="text-xl font-semibold text-olive-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-green-50 to-olive-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-olive-800 mb-4">{t.skills.title}</h2>
            <div className="w-24 h-1 bg-olive-600 mx-auto mb-6 animate-expandWidth"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t.skills.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.skills.list.map((skill, index) => (
              <Card key={index} className="border-olive-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-olive-100 rounded-full flex items-center justify-center animate-pulse">
                      <TreePine className="h-4 w-4 text-olive-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{skill}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-olive-800 mb-4">{t.experience.title}</h2>
            <div className="w-24 h-1 bg-olive-600 mx-auto animate-expandWidth"></div>
          </div>

          <div className="space-y-8">
            <Card className="border-olive-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slideInLeft">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-olive-800 mb-2">
                      {t.experience.current.position}
                    </h3>
                    <p className="text-olive-600 font-medium text-lg">
                      {t.experience.current.company}
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-olive-100 text-olive-800 px-4 py-2 text-sm animate-pulse">
                    {t.experience.current.status}
                  </Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>{t.experience.current.address}</strong>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.experience.current.description}
                </p>
              </CardContent>
            </Card>

            {t.experience.previous.map((exp, index) => (
              <Card key={index} className="border-olive-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slideInRight" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-olive-800 mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-olive-600 font-medium text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="outline" className="border-olive-200 text-olive-700 px-4 py-2 text-sm">
                      {exp.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-olive-900 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6 animate-expandWidth"></div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slideInLeft">
              <h3 className="text-2xl font-semibold mb-8">{t.contact.info.title}</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 animate-fadeInUp">
                  <Phone className="h-6 w-6 text-green-300 animate-pulse" />
                  <div>
                    <p className="font-medium">{t.contact.info.phone}</p>
                    <p className="text-green-100">{t.contact.info.phoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <MapPin className="h-6 w-6 text-green-300 animate-pulse" />
                  <div>
                    <p className="font-medium">{t.contact.info.location}</p>
                    <p className="text-green-100">{t.contact.info.locationText}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <Briefcase className="h-6 w-6 text-green-300 animate-pulse" />
                  <div>
                    <p className="font-medium">{t.contact.info.company}</p>
                    <p className="text-green-100">{t.contact.info.companyAddress}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slideInRight">
              <h3 className="text-2xl font-semibold mb-8">{t.contact.form.title}</h3>
              <form className="space-y-6">
                <div className="animate-fadeInUp">
                  <label className="block text-sm font-medium mb-2">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <label className="block text-sm font-medium mb-2">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
                <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <label className="block text-sm font-medium mb-2">{t.contact.form.message}</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300"
                    placeholder={t.contact.form.messagePlaceholder}
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-white text-olive-800 hover:bg-green-50 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: '0.6s' }}
                >
                  {t.contact.form.send}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-olive-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-6 w-6 text-green-300 animate-pulse" />
            <span className="text-xl font-semibold">{t.footer.name}</span>
          </div>
          <p className="text-green-200">
            {t.footer.title}
          </p>
          <p className="text-green-300 text-sm mt-2">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

