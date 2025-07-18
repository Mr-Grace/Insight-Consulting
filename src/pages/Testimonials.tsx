import React from 'react';
import { Star, Quote, Users, Building, GraduationCap } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Marie Kabila",
      company: "PME Textile Kinshasa",
      role: "Directrice Générale",
      content: "Insight Consulting a transformé notre gestion commerciale. Grâce à leur solution web, nous avons augmenté notre productivité de 40% et amélioré notre relation client.",
      rating: 5,
      category: "PME"
    },
    {
      name: "Dr. Joseph Mbuyi",
      company: "Clinique Santé Plus",
      role: "Directeur Médical",
      content: "L'équipe d'Insight Consulting nous a accompagnés dans la digitalisation de notre système de rendez-vous. Leur professionnalisme et leur compréhension du secteur médical nous ont convaincus.",
      rating: 5,
      category: "Santé"
    },
    {
      name: "Carine Nkumu",
      company: "Institut Supérieur de Commerce",
      role: "Responsable Formation",
      content: "Les formations en analyse de données dispensées par Insight Consulting ont permis à nos étudiants d'acquérir des compétences très recherchées sur le marché du travail.",
      rating: 5,
      category: "Éducation"
    },
    {
      name: "Patrick Luaba",
      company: "Coopérative Agricole COPAKI",
      role: "Président",
      content: "Le système de gestion développé par Insight Consulting nous permet de mieux suivre nos productions et d'optimiser nos ventes. Un investissement rentable pour notre coopérative.",
      rating: 5,
      category: "Agriculture"
    },
    {
      name: "Sylvie Mukendi",
      company: "Freelance Marketing Digital",
      role: "Consultante Marketing",
      content: "J'ai suivi la formation Python chez Insight Consulting. L'approche pratique et adaptée au contexte local m'a permis d'automatiser mes tâches et d'améliorer mes services.",
      rating: 5,
      category: "Formation"
    },
    {
      name: "Emmanuel Tshisekedi",
      company: "ONG Développement Durable",
      role: "Coordinateur Projets",
      content: "Insight Consulting nous a aidés à créer un système de suivi-évaluation numérique. Leur expertise technique et leur engagement social font la différence.",
      rating: 5,
      category: "ONG"
    }
  ];

  const stats = [
    { label: "Clients satisfaits", value: "98%", icon: Users },
    { label: "Projets livrés à temps", value: "95%", icon: Building },
    { label: "Taux de recommandation", value: "92%", icon: Star }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Témoignages Clients
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Découvrez ce que nos clients pensent de nos services
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-3xl font-bold text-blue-700 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Retours d'expérience de nos partenaires à travers différents secteurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 relative">
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-blue-200" />
                </div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm font-medium text-blue-700">{testimonial.company}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    <span className="bg-blue-100 px-2 py-1 rounded-full">{testimonial.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Études de cas
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez quelques-unes de nos réalisations marquantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mb-6">
                <Building className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transformation digitale d'une PME textile</h3>
              <p className="text-gray-600 mb-4">
                Mise en place d'un système de gestion intégré pour une entreprise textile, 
                incluant gestion des stocks, facturation et suivi client.
              </p>
              <div className="text-sm text-blue-700 font-medium">
                Résultat : +40% de productivité, -60% d'erreurs administratives
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mb-6">
                <GraduationCap className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Programme de formation en analyse de données</h3>
              <p className="text-gray-600 mb-4">
                Formation de 50 jeunes professionnels aux outils d'analyse de données 
                et de business intelligence sur 6 mois.
              </p>
              <div className="text-sm text-blue-700 font-medium">
                Résultat : 85% de taux de placement professionnel
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à rejoindre nos clients satisfaits ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider
          </p>
          <a
            href="https://wa.me/243971938715"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Discuter sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;