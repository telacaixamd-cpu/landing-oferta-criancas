'use client'

import { useState, useEffect } from 'react'
import { Star, Truck, CreditCard, Shield, Clock, Copy, Check } from 'lucide-react'

export default function RiHappyLanding() {
  const [copiedCoupon, setCopiedCoupon] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const copyCoupon = () => {
    navigator.clipboard.writeText('PRIMEIRACOMPRA')
    setCopiedCoupon(true)
    setTimeout(() => setCopiedCoupon(false), 2000)
  }

  const products = [
    {
      id: 1,
      name: "EXCLUSIVO - Bicicleta - Disney - Princesas - Ariel - Aro 14 - Bandeirante",
      price: "R$ 229,99",
      emoji: "🏷️",
      isExclusive: true
    },
    {
      id: 2,
      name: "Skatenet - Homem-Aranha - Bandeirante",
      price: "R$ 149,90",
      emoji: "🕷️"
    },
    {
      id: 3,
      name: "Patinete - Skatenet - Disney - Princesas - Rosa - Bandeirante",
      price: "R$ 149,90",
      emoji: "👑"
    },
    {
      id: 4,
      name: "EXCLUSIVO - Bicicleta De Equilíbrio - Fisher-Price - Baby",
      price: "R$ 165,90",
      emoji: "⭐",
      isBestSeller: true,
      isExclusive: true
    },
    {
      id: 5,
      name: "EXCLUSIVO - Bicicleta - Hot Wheels - Aro 14 - Bandeirante",
      price: "R$ 229,99",
      emoji: "🔥",
      isExclusive: true
    },
    {
      id: 6,
      name: "Girafa com Blocos Fisher-Price",
      price: "R$ 48,90",
      emoji: "🦒"
    }
  ]

  const testimonials = [
    {
      name: "Mariana S.",
      text: "Meu filho amou a bicicleta da Ri Happy! Chegou rápido e o atendimento foi ótimo!",
      stars: 5,
      avatar: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/639d51d8-b63b-4b27-b515-62867b849c6c.jpg"
    },
    {
      name: "Carlos A.",
      text: "Excelente qualidade e entrega super rápida. Recomendo muito!",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Paula M.",
      text: "Produtos originais e preços justos. Minha filha ficou encantada!",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD500]/10 to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b-4 border-[#FFD500]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-[#FFD500] to-[#E3000B] rounded-full flex items-center justify-center text-white font-bold text-xl">
              RH
            </div>
            <span className="text-2xl font-bold text-[#E3000B]">Ri Happy</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#E3000B] transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('ofertas')}
              className="text-gray-700 hover:text-[#E3000B] transition-colors font-medium"
            >
              Ofertas
            </button>
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-gray-700 hover:text-[#E3000B] transition-colors font-medium"
            >
              Mais Vendidos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-[#E3000B] transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          <button 
            onClick={() => scrollToSection('produtos')}
            className="bg-gradient-to-r from-[#E3000B] to-[#FFD500] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
          >
            Ver Ofertas
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD500]/20 via-[#009FE3]/10 to-[#E3000B]/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              🎉 O Dia das Crianças<br />
              <span className="bg-gradient-to-r from-[#E3000B] to-[#FFD500] bg-clip-text text-transparent">
                Ficou Muito Mais Divertido!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descontos imperdíveis nos brinquedos mais amados da Ri Happy!
            </p>

            <button 
              onClick={() => scrollToSection('produtos')}
              className="bg-gradient-to-r from-[#E3000B] to-[#FFD500] text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-[#FFD500]/50 animate-pulse"
            >
              Ver Produtos com Desconto 🎁
            </button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 text-6xl animate-bounce delay-100">🎈</div>
          <div className="absolute top-32 right-20 text-5xl animate-bounce delay-300">🧸</div>
          <div className="absolute bottom-20 left-20 text-4xl animate-bounce delay-500">🚗</div>
          <div className="absolute bottom-32 right-10 text-5xl animate-bounce delay-700">⚽</div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            O que nossos clientes dizem ❤️
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-[#FFD500]/10 to-[#009FE3]/10 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold text-[#E3000B]">{testimonial.name}</p>
                    <div className="flex">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFD500] text-[#FFD500]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-[#009FE3]/10 to-[#FFD500]/10 rounded-2xl hover:scale-105 transition-transform">
              <Truck className="w-12 h-12 text-[#009FE3] mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Frete Grátis</h3>
              <p className="text-gray-600 text-sm">Para todo o Brasil</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-[#E3000B]/10 to-[#FFD500]/10 rounded-2xl hover:scale-105 transition-transform">
              <CreditCard className="w-12 h-12 text-[#E3000B] mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">10% OFF no PIX</h3>
              <p className="text-gray-600 text-sm">Com cupom PRIMEIRACOMPRA</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-[#FFD500]/10 to-[#009FE3]/10 rounded-2xl hover:scale-105 transition-transform">
              <Shield className="w-12 h-12 text-[#FFD500] mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Produtos Originais</h3>
              <p className="text-gray-600 text-sm">Ri Happy</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-[#009FE3]/10 to-[#E3000B]/10 rounded-2xl hover:scale-105 transition-transform">
              <Clock className="w-12 h-12 text-[#009FE3] mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Entrega Rápida</h3>
              <p className="text-gray-600 text-sm">E segura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            🎯 Ofertas Especiais do Dia das Crianças
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Os brinquedos mais desejados com preços incríveis!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 ${
                  product.isBestSeller ? 'ring-4 ring-[#FFD500] relative' : ''
                }`}
              >
                {product.isBestSeller && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#E3000B] to-[#FFD500] text-white px-3 py-1 rounded-full text-sm font-bold z-10 animate-pulse">
                    🔥 Mais Vendido
                  </div>
                )}
                
                {product.isExclusive && (
                  <div className="absolute top-4 left-4 bg-[#009FE3] text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    EXCLUSIVO
                  </div>
                )}

                <div className="h-48 bg-gradient-to-br from-[#FFD500]/20 to-[#009FE3]/20 flex items-center justify-center">
                  <div className="text-6xl">{product.emoji}</div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg leading-tight">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#E3000B]">
                      {product.price}
                    </span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-[#E3000B] to-[#FFD500] text-white py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                    Comprar Agora 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-[#009FE3] to-[#FFD500] text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-110 transition-all duration-300 shadow-xl"
            >
              Ver Mais Ofertas 🎁
            </button>
          </div>
        </div>
      </section>

      {/* Coupon Section */}
      <section id="ofertas" className="py-16 bg-gradient-to-r from-[#FFD500] to-[#E3000B]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🎁 Use o cupom abaixo e ganhe 10% OFF no PIX na sua primeira compra!
          </h2>
          
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl">
            <p className="text-gray-600 mb-4 text-lg">Cupom de Desconto:</p>
            <div className="bg-gray-100 rounded-lg p-4 mb-6 border-2 border-dashed border-[#FFD500]">
              <span className="text-2xl font-bold text-[#E3000B] tracking-wider">
                PRIMEIRACOMPRA
              </span>
            </div>
            
            <button 
              onClick={copyCoupon}
              className="bg-gradient-to-r from-[#E3000B] to-[#FFD500] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center mx-auto space-x-2"
            >
              {copiedCoupon ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>Copiar Cupom</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gradient-to-r from-[#FFD500]/20 to-[#009FE3]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFD500] to-[#E3000B] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                RH
              </div>
              <span className="text-3xl font-bold text-[#E3000B]">Ri Happy</span>
            </div>
            
            <p className="text-gray-600 mb-6 text-lg">
              Fazendo a alegria das crianças há mais de 70 anos! 🎈
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold text-[#E3000B] mb-4 text-xl">Contato</h3>
              <p className="text-gray-600 mb-2">
                ✉️ atendimento@rihappy.com.br
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#E3000B] mb-4 text-xl">Empresa</h3>
              <p className="text-gray-600 mb-2">
                🏢 CNPJ: 58.731.662/0001-11
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#E3000B] mb-4 text-xl">Links</h3>
              <div className="space-y-2">
                <p className="text-gray-600 hover:text-[#E3000B] cursor-pointer transition-colors">
                  🌐 Política de Privacidade
                </p>
                <p className="text-gray-600 hover:text-[#E3000B] cursor-pointer transition-colors">
                  📋 Termos de Uso
                </p>
                <p className="text-gray-600 hover:text-[#E3000B] cursor-pointer transition-colors">
                  📞 Fale Conosco
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-8 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 Ri Happy. Todos os direitos reservados. Feito com ❤️ para as crianças do Brasil.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}