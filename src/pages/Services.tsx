import React from 'react';
import { 
  Monitor, 
  BarChart3, 
  Settings, 
  GraduationCap, 
  Wrench, 
  Code, 
  Smartphone, 
  Database,
  TrendingUp,
  Users,
  BookOpen,
  Calculator,
  PieChart,
  Network,
  Shield
} from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Solutions complètes pour votre transformation digitale
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Développement Web & Mobile */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                  alt="Développement Web & Mobile"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Monitor className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Développement Web & Mobile</h2>
                <p className="text-gray-600 mb-6">
                  Création d'applications web et mobiles sur mesure pour optimiser vos processus métier 
                  et améliorer l'expérience de vos clients.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Code className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Sites web responsive</span>
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Applications mobiles</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Systèmes de gestion</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Solutions sécurisées</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Intelligence */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                  alt="Business Intelligence"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Intelligence & Analyse de données</h2>
                <p className="text-gray-600 mb-6">
                  Transformez vos données en insights exploitables pour prendre des décisions stratégiques 
                  éclairées et optimiser vos performances.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Tableaux de bord</span>
                  </div>
                  <div className="flex items-center">
                    <PieChart className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Rapports personnalisés</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Data warehousing</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Analyse prédictive</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseil informatique */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                  alt="Conseil informatique"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conseil informatique & Transformation digitale</h2>
                <p className="text-gray-600 mb-6">
                  Accompagnement stratégique pour définir et mettre en œuvre votre roadmap digitale, 
                  optimiser vos processus et moderniser votre infrastructure IT.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Audit IT</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Stratégie digitale</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Optimisation processus</span>
                  </div>
                  <div className="flex items-center">
                    <Network className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Architecture système</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance informatique */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                  alt="Maintenance informatique"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Maintenance informatique & Réseaux</h2>
                <p className="text-gray-600 mb-6">
                  Support technique complet pour maintenir vos systèmes informatiques en parfait état 
                  de fonctionnement et assurer la continuité de vos activités.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Maintenance préventive</span>
                  </div>
                  <div className="flex items-center">
                    <Network className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Gestion réseau</span>
                  </div>
                  <div className="flex items-center">
                    <Wrench className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Support technique</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Sauvegarde données</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gestion de réseaux sociaux et design */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                  alt="Gestion de réseaux sociaux"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestion de réseaux sociaux</h2>
                <p className="text-gray-600 mb-6">
                  Développez votre présence digitale et engagez votre communauté avec nos services 
                  de gestion professionnelle de réseaux sociaux.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Community management</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Création de contenu</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Analyse de performance</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Stratégie digitale</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Design graphique */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                  alt="Design graphique"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <PieChart className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Design graphique & Identité visuelle</h2>
                <p className="text-gray-600 mb-6">
                  Créez une identité visuelle forte et professionnelle avec nos services de design graphique 
                  pour tous vos supports de communication.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <PieChart className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Logo & identité visuelle</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Supports marketing</span>
                  </div>
                  <div className="flex items-center">
                    <Monitor className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Design web & UI/UX</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="text-sm">Charte graphique</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 rounded-full p-4 mr-4">
                <GraduationCap className="h-10 w-10 text-blue-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Formation Informatique</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Développez les compétences numériques de vos équipes avec nos formations pratiques 
              et adaptées au contexte professionnel africain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programmation Python */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-32 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
                  alt="Programmation Python"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2">
                  <div className="bg-blue-600 rounded-full p-2">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-center">Programmation avec Python</h3>
                <p className="text-gray-600 text-center text-sm">
                  Maîtrisez les fondamentaux de Python pour l'automatisation et l'analyse de données
                </p>
              </div>
            </div>

            {/* Machine Learning */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-32 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
                  alt="Machine Learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2">
                  <div className="bg-blue-600 rounded-full p-2">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-center">Introduction au Machine Learning</h3>
                <p className="text-gray-600 text-center text-sm">
                  Découvrez les concepts de base de l'intelligence artificielle et ses applications
                </p>
              </div>
            </div>

            {/* SQL et BDD */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-32 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
                  alt="SQL et bases de données"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2">
                  <div className="bg-blue-600 rounded-full p-2">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-center">SQL et gestion de bases de données</h3>
                <p className="text-gray-600 text-center text-sm">
                  Apprenez à manipuler et analyser vos données avec SQL
                </p>
              </div>
            </div>

            {/* Outils bureautiques */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-32 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
                  alt="Outils bureautiques"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2">
                  <div className="bg-blue-600 rounded-full p-2">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-center">Excel, Google Workspace, Power BI</h3>
                <p className="text-gray-600 text-center text-sm">
                  Maîtrisez les outils essentiels pour l'analyse et la visualisation de données
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'une solution sur mesure ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <a 
            href="https://wa.me/243971938715" 
            target="_blank" 
            className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contacter sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;