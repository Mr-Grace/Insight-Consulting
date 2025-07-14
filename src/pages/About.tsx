import React from 'react';
import { Target, Users, Zap, Award, Globe, TrendingUp, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos d'Insight Consulting
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Votre partenaire de confiance pour la transformation digitale
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Notre Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nous accompagnons les PME, institutions et jeunes professionnels dans leur transformation digitale à Kinshasa. 
              Notre objectif est de démocratiser l'accès aux technologies numériques et de permettre à chaque organisation 
              de tirer parti des opportunités offertes par l'innovation technologique.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Fondateur
            </h2>
            <p className="text-xl text-gray-600">
              Une vision entrepreneuriale au service de l'innovation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-96 md:h-full">
                    <img 
                      src="/public/IMG-20240522-WA0009.jpg" 
                      alt="Fondateur d'Insight Consulting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mb-4">
                      <User className="h-10 w-10 text-blue-700" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Grace ILUNGA
                    </h3>
                    <p className="text-lg text-blue-700 font-semibold mb-4">
                      Fondateur & Directeur Général
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Passionné par l'innovation technologique et le développement numérique en Afrique, 
                      notre fondateur a créé Insight Consulting avec la vision de démocratiser l'accès 
                      aux technologies modernes pour les entreprises congolaises.
                    </p>
                    <p>
                      Fort de plusieurs années d'expérience dans le secteur IT, il accompagne aujourd'hui 
                      les PME, institutions et professionnels dans leur transformation digitale, 
                      en proposant des solutions adaptées au contexte local.
                    </p>
                    <p>
                      Sa mission : faire d'Insight Consulting un acteur incontournable de l'écosystème 
                      numérique à Kinshasa et contribuer au développement technologique de la RDC.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">5+</div>
                      <p className="text-sm text-gray-600">Années d'expérience</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">50+</div>
                      <p className="text-sm text-gray-600">Projets menés</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                <Zap className="h-12 w-12 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Nous restons à la pointe des technologies pour offrir des solutions modernes et efficaces, 
                adaptées aux réalités du marché africain.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                <Award className="h-12 w-12 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                Nous nous engageons à fournir des services de haute qualité, 
                avec un niveau de professionnalisme irréprochable.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                <Users className="h-12 w-12 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Proximité</h3>
              <p className="text-gray-600">
                Nous privilégions une relation de confiance avec nos clients, 
                basée sur l'écoute et l'accompagnement personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Insight Consulting en chiffres
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">50+</div>
              <p className="text-gray-600">Projets réalisés</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">30+</div>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">5+</div>
              <p className="text-gray-600">Années d'expérience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">100+</div>
              <p className="text-gray-600">Formations dispensées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Approche
            </h2>
            <p className="text-xl text-gray-600">
              Une méthodologie éprouvée pour garantir votre succès
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyse</h3>
              <p className="text-gray-600">
                Compréhension approfondie de vos besoins et défis spécifiques
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Stratégie</h3>
              <p className="text-gray-600">
                Élaboration d'une roadmap personnalisée pour atteindre vos objectifs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exécution</h3>
              <p className="text-gray-600">
                Mise en œuvre rigoureuse avec suivi continu et optimisation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;