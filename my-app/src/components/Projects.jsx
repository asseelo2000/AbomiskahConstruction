import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, MapPin, Users } from 'lucide-react';

// ✅ Local fallback Button component
const Button = ({ children, className = '', ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Projects = ({ currentLanguage = 'en' }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const content = {
    en: {
      title: 'Our Projects',
      subtitle: 'Building Excellence Across Diverse Sectors',
      description:
        'Explore our portfolio of successful projects spanning residential, commercial, and industrial sectors.',
      filters: [
        { key: 'all', label: 'All Projects' },
        { key: 'residential', label: 'Residential' },
        { key: 'commercial', label: 'Commercial' },
        { key: 'industrial', label: 'Industrial' }
      ],
      viewMore: 'View Project Details',
      projects: [
        {
          id: 1,
          title: 'Luxury Residential Complex',
          category: 'residential',
          location: 'Downtown District',
          year: '2023',
          client: 'Private Developer',
          description:
            'A premium residential development featuring 120 luxury apartments with modern amenities and sustainable design.',
          image: '/images/projects/LuxuryResidentialComplex.jpg',
          pdf: 'pdfs/projects/djibouti-equipment.pdf',
          images: [
            '/images/projects/LuxuryResidentialComplex.jpg',
            '/images/projects/LuxuryResidentialComplex2.jpg'
          ],
          stats: {
            units: '120 Units',
            area: '15,000 m²',
            duration: '18 Months'
          }
        },
        {
          id: 2,
          title: 'Corporate Headquarters',
          category: 'commercial',
          location: 'Business District',
          year: '2023',
          client: 'Tech Corporation',
          description:
            'Modern 15-story office building with state-of-the-art facilities and energy-efficient systems.',
          image: '/images/projects/CorporateHeadquarters.jpg',
          pdf: 'pdfs/projects/djibouti-equipment.pdf',
          images: [
            '/images/projects/CorporateHeadquarters.jpg',
            '/images/projects/CorporateHeadquarters2.jpg'
          ],
          stats: {
            floors: '15 Floors',
            area: '25,000 m²',
            duration: '24 Months'
          }
        },
        {
          id: 3,
          title: 'Manufacturing Facility',
          category: 'industrial',
          location: 'Industrial Zone',
          year: '2022',
          client: 'Manufacturing Corp',
          description:
            'Large-scale manufacturing plant with advanced automation systems and safety features.',
          image: '/images/projects/ManufacturingFacility.jpg',
          pdf: 'pdfs/projects/djibouti-equipment.pdf',
          images: [
            '/images/projects/ManufacturingFacility.jpg',
            '/images/projects/ManufacturingFacility2.jpg'
          ],
          stats: {
            capacity: '50,000 Units/Month',
            area: '40,000 m²',
            duration: '30 Months'
          }
        }
      ]
    },
    ar: {
      title: 'مشاريعنا',
      subtitle: 'بناء التميز عبر قطاعات متنوعة',
      description:
        'استكشف محفظة مشاريعنا الناجحة التي تمتد عبر القطاعات السكنية والتجارية والصناعية.',
      filters: [
        { key: 'all', label: 'جميع المشاريع' },
        { key: 'residential', label: 'سكني' },
        { key: 'commercial', label: 'تجاري' },
        { key: 'industrial', label: 'صناعي' }
      ],
      viewMore: 'عرض تفاصيل المشروع',
      projects: [
        {
          id: 1,
          title: 'مجمع سكني فاخر',
          category: 'residential',
          location: 'منطقة وسط المدينة',
          year: '2023',
          client: 'مطور خاص',
          description:
            'مشروع سكني متميز يضم 120 شقة فاخرة مع وسائل الراحة الحديثة والتصميم المستدام.',
          image: '/images/projects/LuxuryResidentialComplex.jpg',
          pdf: 'pdfs/projects/djibouti-equipment.pdf',
          images: [
            '/images/projects/LuxuryResidentialComplex.jpg',
            '/images/projects/LuxuryResidentialComplex2.jpg'
          ],
          stats: {
            units: '120 وحدة',
            area: '15,000 م²',
            duration: '18 شهر'
          }
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;
  const filteredProjects =
    activeFilter === 'all'
      ? currentContent.projects
      : currentContent.projects.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">{currentContent.title}</h2>
          <p className="text-xl text-blue-600 font-medium mb-2">{currentContent.subtitle}</p>
          <p className="text-gray-500 max-w-2xl mx-auto">{currentContent.description}</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {currentContent.filters.map(filter => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`border ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-blue-600 to-red-500 text-white'
                  : 'border-blue-500 text-blue-600 hover:bg-blue-50'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-xl shadow-lg bg-white overflow-hidden hover:shadow-xl transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="grid grid-cols-2 text-sm text-gray-700 mb-4">
                  {Object.entries(project.stats).map(([key, val]) => (
                    <div key={key} className="bg-gray-50 p-2 rounded text-center">
                      {val}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Users className="w-4 h-4" />
                  <span>{project.client}</span>
                </div>

                {/* Open Details Dialog */}
                <Button
                  onClick={() => setSelectedProject(project)}
                  className="w-full border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center gap-2"
                >
                  {currentContent.viewMore}
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-100 to-red-100 p-10 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">
            {currentLanguage === 'ar' ? 'مهتم بمشروع مماثل؟' : 'Interested in a Similar Project?'}
          </h3>
          <p className="text-gray-600 mb-6">
            {currentLanguage === 'ar'
              ? 'دعنا نناقش كيف يمكننا تحقيق رؤيتك. اتصل بنا للحصول على استشارة مخصصة.'
              : "Let's discuss how we can bring your vision to life. Contact us for a personalized consultation."}
          </p>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-red-500 text-white px-6 py-3 rounded-lg hover:shadow-lg"
          >
            {currentLanguage === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
          </Button>
        </div>
      </div>

      {/* Project Details Dialog */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-gray-800 p-8 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            dir={currentLanguage === "ar" ? "rtl" : "ltr"}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-6 text-center">
              {selectedProject.title}
            </h2>

            {/* PDF Viewer */}
            {selectedProject.pdf && (
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">
                  {currentLanguage === "ar" ? "ملف PDF" : "Detailed PDF"}
                </h3>
                <iframe
                  src={`/${selectedProject.pdf}`}
                  className="w-full h-96 border-2 border-gray-300 rounded-lg"
                  title="Project PDF"
                />
              </div>
            )}

            {/* Image Gallery */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {currentLanguage === "ar" ? "معرض الصور" : "Image Gallery"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedProject.images.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
