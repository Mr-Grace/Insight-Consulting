import React from 'react';
import { ArrowRight, CheckCircle, Users, Zap, Target, Award, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Insight Consulting ?
            </h2>
            <p className="text-xl text-gray-600">
              Nos valeurs au service de votre succès
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4">
                <Zap className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Solutions technologiques de pointe adaptées aux défis africains
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Qualité et professionnalisme dans chaque projet
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proximité</h3>
              <p className="text-gray-600">
                Un accompagnement personnalisé et une présence locale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Projets réalisés</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <p className="text-blue-100">Clients satisfaits</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-blue-100">Années d'expérience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-blue-100">Formations dispensées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600">
              Solutions complètes pour votre transformation digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Développement Web & Mobile',
                description: 'Applications sur mesure pour votre entreprise',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
                icon: Target
              },
              {
                title: 'Business Intelligence',
                description: 'Analyse de données pour des décisions éclairées',
                image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
                icon: TrendingUp
              },
              {
                title: 'Conseil Informatique',
                description: 'Stratégie digitale et transformation numérique',
                image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
                icon: Users
              },
              {
                title: 'Formation Informatique',
                description: 'Montée en compétences de vos équipes',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
                icon: Award
              },
              {
                title: 'Maintenance & Réseaux',
                description: 'Support technique et infrastructure',
                image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
                icon: CheckCircle
              },
              {
                title: 'Gestion de réseaux sociaux',
                description: 'Community management et stratégie digitale',
                image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
                icon: Users
              },
              {
                title: 'Design graphique',
                description: 'Identité visuelle et supports de communication',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
                icon: Target
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-blue-600 rounded-full p-2">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour une consultation gratuite
          </p>
          <a
            href="https://wa.me/243971938715"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg">
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
        </div>
      </section>
    </div>
  );
};

export default Home;