import React, { useState } from 'react';

import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';

// Import EmailJS
import emailjs from '@emailjs/browser';
// New imports for Google Maps
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';

const Contact = ({ currentLanguage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Let's Build Something Amazing Together",
      description: "Ready to start your construction project? Get in touch with our team for a free consultation and quote.",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        service: "Service Needed",
        message: "Project Details",
        submit: "Send Message",
        success: "Thank you! We'll get back to you soon."
      },
      services: [
        "Residential Construction",
        "Commercial Construction",
        "Industrial Construction",
        "Infrastructure Development",
        "Renovation & Remodeling",
        "Project Management"
      ],
      info: {
        address: {
          title: "Our Office",
          details: ["123 Construction Avenue", "Business District", "City, Country 12345"]
        },
        phone: {
          title: "Call Us",
          details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
        },
        email: {
          title: "Email Us",
          details: ["info@Abomiskah.com", "projects@Abomiskah.com"]
        },
        hours: {
          title: "Business Hours",
          details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"]
        }
      }
    },
    ar: {
      title: "اتصل بنا",
      subtitle: "دعنا نبني شيئاً مذهلاً معاً",
      description: "مستعد لبدء مشروع البناء الخاص بك؟ تواصل مع فريقنا للحصول على استشارة وعرض سعر مجاني.",
      form: {
        name: "الاسم الكامل",
        email: "عنوان البريد الإلكتروني",
        phone: "رقم الهاتف",
        service: "الخدمة المطلوبة",
        message: "تفاصيل المشروع",
        submit: "إرسال الرسالة",
        success: "شكراً لك! سنتواصل معك قريباً."
      },
      services: [
        "البناء السكني",
        "البناء التجاري",
        "البناء الصناعي",
        "تطوير البنية التحتية",
        "التجديد وإعادة التصميم",
        "إدارة المشاريع"
      ],
      info: {
        address: {
          title: "مكتبنا",
          details: ["123 شارع البناء", "الحي التجاري", "المدينة، البلد 12345"]
        },
        phone: {
          title: "اتصل بنا",
          details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
        },
        email: {
          title: "راسلنا",
          details: ["info@Abomiskah.com", "projects@Abomiskah.com"]
        },
        hours: {
          title: "ساعات العمل",
          details: ["الاثنين - الجمعة: 8:00 ص - 6:00 م", "السبت: 9:00 ص - 4:00 م", "الأحد: مغلق"]
        }
      }
    }
  };

  const currentContent = content[currentLanguage];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Map form data to EmailJS params (placeholders in template)
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_service: formData.service,
      user_message: formData.message,
    };

    // Send email via EmailJS
    emailjs.send(
      'service_1uyx2sh', // Replace with your EmailJS Service ID
      'template_vcwyzpu', // Replace with your EmailJS Template ID
      templateParams,
      'p7ObFVli4cIOiARkL' // Replace with your EmailJS User ID (public key)
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('There was an error sending your message. Please try again later.');
    });
  };

  // Load Google Maps API script
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ''
  });

  // Define the center coordinates (replace with your actual lat/lng)
  const center = {
    lat: 15.39010993519032,
    lng: 44.172359094137725
  };

  // Map container style (make it responsive)
  const mapContainerStyle = {
    width: '100%',
    height: '400px' // Adjust height as needed
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-50 to-red-50"
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl font-semibold text-blue-700 mb-6">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {currentContent.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-lg shadow-blue-200/40 hover:shadow-red-300/50 transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {currentLanguage === 'ar' ? 'أرسل لنا رسالة' : 'Send us a Message'}
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-red-600 mx-auto mb-4 animate-bounce" />
                <p className="text-lg text-red-600 font-semibold">
                  {currentContent.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    {currentContent.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={currentContent.form.name}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    {currentContent.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={currentContent.form.email}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    {currentContent.form.phone}
                  </label>
                  <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    // Allow only digits
                    const value = e.target.value.replace(/\D/g, '');
                    setFormData({ ...formData, phone: value });
                  }}
                  inputMode="numeric"          // Mobile keyboard shows numbers
                  pattern="[0-9]*"             // Prevents non-numeric input on desktop
                  placeholder={currentContent.form.phone}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition"
                  required
                />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    {currentContent.form.service}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition"
                  >
                    <option value="">{currentContent.form.service}</option>
                    {currentContent.services.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    {currentContent.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder={currentContent.form.message}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r from-blue-700 to-red-600 hover:from-red-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex justify-center items-center transition-transform duration-300 hover:scale-105 ${
                    currentLanguage === 'ar' ? 'flex-row-reverse' : ''
                  }`}
                >
                  {currentContent.form.submit}
                  <Send className={`w-5 h-5 ${currentLanguage === 'ar' ? 'mr-2' : 'ml-2'}`} />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {[
              {
                icon: MapPin,
                title: currentContent.info.address.title,
                details: currentContent.info.address.details,
              },
              {
                icon: Phone,
                title: currentContent.info.phone.title,
                details: currentContent.info.phone.details,
              },
              {
                icon: Mail,
                title: currentContent.info.email.title,
                details: currentContent.info.email.details,
              },
              {
                icon: Clock,
                title: currentContent.info.hours.title,
                details: currentContent.info.hours.details,
              }
            ].map(({ icon: Icon, title, details }, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-200/40 hover:shadow-red-300/50 transition-shadow duration-300 Abomiskah-hover-lift"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-red-600 rounded-lg flex items-center justify-center mr-4 transition-transform duration-300 hover:scale-110">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                </div>
                <div className="space-y-1">
                  {details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Map Integration (replaces placeholder) */}
        <div className="mt-16">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15} // Adjust zoom level as needed (higher = more zoomed in)
            >
              {/* Marker for the exact address */}
              <Marker position={center} />
            </GoogleMap>
          ) : (
            <div className="bg-gradient-to-br from-blue-100 to-red-100 h-64 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-700 mx-auto mb-4" />
                <p className="text-lg text-gray-600">
                  {currentLanguage === 'ar' ? 'جاري تحميل الخريطة...' : 'Loading Map...'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;