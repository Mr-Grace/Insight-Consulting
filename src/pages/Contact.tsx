import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare,
  User,
  Linkedin,
  Facebook
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Nous sommes là pour vous accompagner dans votre transformation digitale
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>
              
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <p className="text-green-800">
                      Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-1" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Nos coordonnées
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Adresse</h3>
                      <p className="text-gray-600">
                        Sillikin village 63, avenue colonel mondjiba<br />
                        Kinshasa, République Démocratique du Congo
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">contact@insightconsulting.cd</p>
                      <p className="text-gray-600">info@insightconsulting.cd</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Téléphone & WhatsApp</h3>
                      <p className="text-gray-600">+243 971 938 715</p>
                      <a 
                        href="https://wa.me/243971938715" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors"
                      >
                        WhatsApp: +243 971 938 715
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Clock className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Horaires d'ouverture</h3>
                      <p className="text-gray-600">Lundi - Vendredi : 8h00 - 17h00</p>
                      <p className="text-gray-600">Samedi : 9h00 - 13h00</p>
                      <p className="text-gray-600">Dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Suivez-nous
                </h2>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-blue-700" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-blue-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre localisation
            </h2>
            <p className="text-xl text-gray-600">
              Nous sommes situés au cœur de Kinshasa
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <div className="text-gray-600">
                  <p className="font-semibold text-lg mb-2">Notre localisation</p>
                  <p className="mb-1">Sillikin village 63, avenue colonel mondjiba</p>
                  <p className="mb-4">Kinshasa, République Démocratique du Congo</p>
                  <p className="text-sm text-gray-500">
                    Carte Google Maps à intégrer avec clé API
                  </p>
                </div>
              </div>
            </div>
            
            {/* Instructions pour intégrer Google Maps */}
            <div className="p-4 bg-blue-50 border-t">
              <p className="text-sm text-blue-700">
                <strong>Pour intégrer Google Maps :</strong> Obtenez une clé API Google Maps et remplacez cette section par :
              </p>
              <code className="text-xs text-blue-600 block mt-2">
                &lt;iframe src="https://maps.app.goo.gl/rzidu1oVJ9c4DPrD7=..." width="100%" height="384"&gt;&lt;/iframe&gt;
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Comment nous trouver
            </h2>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Adresse complète</h3>
                <div className="space-y-2 text-gray-600">
                  <p>📍 Sillikin village 63</p>
                  <p>🛣️ Avenue colonel mondjiba</p>
                  <p>🏙️ Kinshasa</p>
                  <p>🇨🇩 République Démocratique du Congo</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Repères</h3>
                <div className="space-y-2 text-gray-600">
                  <p>• Proche de l'avenue colonel mondjiba</p>
                  <p>• Quartier Sillikin village</p>
                  <p>• Accessible en transport public</p>
                  <p>• Parking disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Combien de temps prend un projet de développement web ?
              </h3>
              <p className="text-gray-600">
                La durée varie selon la complexité du projet. Un site vitrine prend généralement 2-4 semaines, 
                tandis qu'une application web complexe peut prendre 2-6 mois.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Proposez-vous un support après la livraison ?
              </h3>
              <p className="text-gray-600">
                Oui, nous offrons un support technique et une maintenance continue pour tous nos projets. 
                Nous proposons différents plans de support selon vos besoins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Les formations sont-elles disponibles en français ?
              </h3>
              <p className="text-gray-600">
                Absolument ! Toutes nos formations sont dispensées en français et adaptées 
                au contexte professionnel local.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;