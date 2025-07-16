import {
  Mail,
  Phone,
  MapPin,
  Star,
  BookOpen,
  Users,
  Award,
  MessageSquare,
  Calendar,
  Globe,
  CheckCircle,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "./ui/carousel";
// import Autoplay from "embla-carousel-autoplay"

const EnglishTutorPortfolio = () => {
  const tutorData = {
    name: "English With Vidurshi",
    title: "Certified English Language Tutor",
    tagline: "Empowering students to master English with confidence",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616c9a05adb?w=400&h=400&fit=crop&crop=face",
    contact: {
      email: "test@email.com",
      phone: "+91 9876543210",
      location: "AHMEDABAD, INDIA",
    },
    about:
      "With over 8 years of experience teaching English to students of all ages and backgrounds, I specialize in helping learners develop strong communication skills, improve their grammar, and build confidence in speaking and writing. My personalized approach ensures each student receives tailored instruction that meets their unique learning needs.",
    specializations: [
      "Conversational English",
      "Business English",
      "Academic Writing",
      "IELTS/TOEFL Preparation",
      "Grammar & Vocabulary",
      "Pronunciation Training",
    ],
    experience: [
      {
        position: "Senior English Tutor",
        company: "Language Learning Center",
        duration: "2020 - Present",
        description:
          "Provide one-on-one and group tutoring sessions for international students and professionals.",
      },
      {
        position: "ESL Instructor",
        company: "Community College",
        duration: "2018 - 2020",
        description:
          "Taught English as a Second Language to diverse student populations with varying proficiency levels.",
      },
      {
        position: "Online English Tutor",
        company: "Global Language Academy",
        duration: "2016 - 2018",
        description:
          "Conducted virtual English lessons for students worldwide, focusing on conversational skills.",
      },
    ],
    education: [
      {
        degree: "Master of Arts in TESOL",
        institution: "Columbia University",
        year: "2016",
      },
      {
        degree: "Bachelor of Arts in English Literature",
        institution: "New York University",
        year: "2014",
      },
    ],
    certifications: [
      "TEFL Certification (120 hours)",
      "IELTS Preparation Specialist",
      "Business English Certificate",
      "Cambridge Teaching Qualification",
    ],
    testimonials: [
      {
        name: "Maria Rodriguez",
        role: "Business Professional",
        text: "Sarah helped me improve my business English skills significantly. Her teaching methods are clear and effective.",
        rating: 5,
      },
      {
        name: "David Chen",
        role: "University Student",
        text: "Thanks to Sarah's guidance, I passed my IELTS exam with a band score of 7.5. Highly recommend!",
        rating: 5,
      },
      {
        name: "Anna Kowalski",
        role: "Working Professional",
        text: "Sarah's patience and personalized approach made learning English enjoyable and productive.",
        rating: 5,
      },
    ],
    achievements: [
      "Helped 1000+ students achieve their English language goals",
      "95% success rate in IELTS/TOEFL preparation",
      "Featured speaker at English Language Teaching Conference 2023",
      "Developed innovative online curriculum for business English",
    ],
    services: [
      "Breakdown of what the tutor offers",

      "One-on-one sessions",

      "Group classes",

      "Exam preparation (IELTS, TOEFL, etc.)",

      "Business English",

      "Spoken English / Conversation Practice",

      "Pricing per session or package deals",
    ],
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-current" : "text-zinc-600"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-violet-400" />
              <span className="text-xl font-bold text-white">
                English With Vidurshi
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-300 hover:text-white hover:bg-zinc-800"
              >
                Contact
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-300 hover:text-white hover:bg-zinc-800"
              >
                Reviews
              </Button>
              <Button
                size="sm"
                className="bg-violet-600 hover:bg-violet-700 text-white"
              >
                Book Lesson
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-zinc-300 hover:text-white hover:bg-zinc-800"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className=" text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {tutorData.name}
              </h1>
              <p className="text-xl text-violet-400 mb-4">{tutorData.title}</p>
              <p className="text-lg text-zinc-300 mb-8 max-w-2xl">
                {tutorData.tagline}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-zinc-400" />
                  <span className="text-zinc-300">200+ Students Taught</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-zinc-400" />
                  <span className="text-zinc-300">8+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-zinc-300">4.9/5 Rating</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-700 text-white flex items-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white flex items-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Message</span>
                </Button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Avatar className="w-80 h-80 border-4 border-violet-400">
                <AvatarImage src={tutorData.image} alt={tutorData.name} />
                <AvatarFallback className="text-4xl bg-zinc-800 text-white">
                  Image
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-zinc-900 max-width-[80vw]">
        <div className="container mx-auto px-4">
          <div className=" gap-8">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-white">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  {tutorData.about}
                </p>

                <h3 className="text-lg font-semibold mb-4 text-white">
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {tutorData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <h3 className="text-lg ml-7 font-semibold mb-4 text-white">
                Specializations
              </h3>

              <CardContent>
                <div className="flex flex-wrap  gap-3">
                  {tutorData.specializations.map((spec, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="justify-start p-3 bg-zinc-700 text-zinc-200 hover:bg-zinc-600"
                    >
                      <BookOpen className="w-4 h-4 mr-2 text-violet-400" />
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <h3 className="text-lg font-semibold ml-7 mb-4 text-white">
                Certifications
              </h3>

              <CardContent>
                <div className="space-y-3">
                  {tutorData.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-violet-400" />
                      <span className="text-zinc-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4 grid grid-col-1 width-[80vw]">
          <Card className="bg-zinc-900 border-zinc-800 width-[80%] ">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                Professional Experience
              </CardTitle>
              <CardDescription className="text-zinc-400">
                My journey in English language education
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {tutorData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-violet-400 pl-6 pb-6"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.position}
                        </h3>
                        <p className="text-violet-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-zinc-600 text-zinc-300"
                      >
                        {exp.duration}
                      </Badge>
                    </div>
                    <p className="text-zinc-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services and Offerings Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Services</h2>
              <p className="text-zinc-400 text-lg">
                What my students say about their learning experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorData.services.map((service, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">
                          {service}
                        </h4>
                        
                      </div>
                    </div>
                    
                  </CardHeader>
                  
                </Card>
              ))}
            </div>

            {/* <Carousel
              className="w-full max-w-sm"
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className=" width-[80%]">
                {tutorData.services.map((service, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card key={index} className="bg-zinc-900 border-zinc-800">
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <div className="flex-1">
                              <h4 className="font-semibold text-white">
                                {service}
                              </h4>
                              
                            </div>
                          </div>
            
                        </CardHeader>
                        <CardContent>
                          <p className="text-zinc-300 italic">"{service}"</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> */}
          </div>
        </div>
      </section>

  

      {/* Testimonials Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Student Testimonials
              </h2>
              <p className="text-zinc-400 text-lg">
                What my students say about their learning experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorData.testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="border-2 border-violet-400">
                        <AvatarFallback className="bg-zinc-800 text-white">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-zinc-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-300 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-white">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Get in touch to start your English learning journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-violet-600/20 rounded-full">
                      <Mail className="w-5 h-5 text-violet-400" />
                    </div>
                    <span className="text-zinc-300">
                      {tutorData.contact.email}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-violet-600/20 rounded-full">
                      <Phone className="w-5 h-5 text-violet-400" />
                    </div>
                    <span className="text-zinc-300">
                      {tutorData.contact.phone}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-violet-600/20 rounded-full">
                      <MapPin className="w-5 h-5 text-violet-400" />
                    </div>
                    <span className="text-zinc-300">
                      {tutorData.contact.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-violet-600/20 rounded-full">
                      <Globe className="w-5 h-5 text-violet-400" />
                    </div>
                    <span className="text-zinc-300">
                      
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-zinc-400">
                  Tell me about your learning goals and I'll get back to you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-zinc-300">
                      Name
                    </label>
                    <Input
                      placeholder="Your name"
                      className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-zinc-300">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-zinc-300">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your learning goals..."
                      className="min-h-[100px] bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>
                  <Button
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                    onClick={() =>
                      alert("Message functionality would be implemented here")
                    }
                  >
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnglishTutorPortfolio;
