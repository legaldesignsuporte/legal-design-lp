
import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Check, BookOpen, FileText, Users } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "Quanto tempo leva para receber acesso ao e-book?",
      answer: "Você recebe acesso imediato após a compra! Um email com o link de download será enviado para seu email cadastrado na Kiwify.",
    },
    {
      question: "Posso usar os modelos de petições em meus casos reais?",
      answer: "Sim! Os 16 modelos de petições são totalmente editáveis e podem ser adaptados para seus casos específicos. Você tem total liberdade para usar e modificar.",
    },
    {
      question: "Qual é a garantia de satisfação?",
      answer: "Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.",
    },
    {
      question: "Os materiais são atualizados regularmente?",
      answer: "Sim! Você receberá atualizações gratuitas sempre que houver mudanças na legislação ou melhorias nos modelos.",
    },
    {
      question: "Posso compartilhar os materiais com outros advogados?",
      answer: "Os materiais são para uso pessoal. Cada advogado deve adquirir sua própria licença para ter acesso completo.",
    },
    {
      question: "Como funciona o suporte?",
      answer: "Você pode entrar em contato conosco via email em legaldesignsuporte@gmail.com. Respondemos em até 24 horas.",
    },
  ];

  const GuaranteeSeals = () => (
    <div className="flex items-center justify-center gap-2 mt-4 text-sm">
      <div className="flex items-center gap-1 text-accent">
        <Check size={16} />
        <span className="font-semibold">Garantia de 7 dias</span>
      </div>
      <span className="text-muted-foreground">ou seu dinheiro de volta</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">Legal Design</div>
          <div className="hidden md:flex gap-8">
            <a href="#beneficios" className="text-sm hover:text-primary transition">
              Benefícios
            </a>
            <a href="#produtos" className="text-sm hover:text-primary transition">
              Produtos
            </a>
            <a href="#faq" className="text-sm hover:text-primary transition">
              FAQ
            </a>
            <a href="#contato" className="text-sm hover:text-primary transition">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transforme seus documentos jurídicos com <span className="text-accent">Legal Design</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Eleve sua advocacia a um novo nível com técnicas comprovadas de design jurídico
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://pay.kiwify.com.br/9SEhh4q" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Acesso Imediato
                </Button>
              </a>
              <a href="#beneficios">
                <Button size="lg" variant="outline">
                  Saiba Mais
                </Button>
              </a>
            </div>
            <GuaranteeSeals />
            
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Por que escolher Legal Design?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Guia Completo de Inovação",
                description: "Aprenda as melhores práticas de design jurídico com exemplos reais e passo a passo",
              },
              {
                icon: FileText,
                title: "16 Modelos Editáveis",
                description: "Acesso a 16 petições profissionais que você pode customizar para seus casos",
              },
              {
                icon: Users,
                title: "Estratégias de Captação",
                description: "Descubra como usar legal design para atrair mais clientes para seu escritório",
              },
              {
                icon: Check,
                title: "Suporte Completo",
                description: "Dúvidas? Nosso time responde em até 24 horas via email",
              },
            ].map((benefit, i ) => (
              <div key={i} className="bg-background rounded-lg p-6 border border-border hover:border-accent transition">
                <benefit.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nossos Produtos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Product */}
            <div className="md:col-span-1 bg-card rounded-lg border-2 border-accent p-8 relative">
              <div className="absolute -top-4 left-6 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                Principal
              </div>
              <h3 className="text-2xl font-bold mb-2">Legal Design na Prática</h3>
              <p className="text-muted-foreground mb-6">Guia completo de inovação jurídica</p>
              <div className="text-4xl font-bold text-accent mb-6">R$ 19,90</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-accent" />
                  <span>E-book completo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-accent" />
                  <span>Exemplos práticos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-accent" />
                  <span>Acesso vitalício</span>
                </li>
              </ul>
              <a href="https://pay.kiwify.com.br/9SEhh4q" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-4">
                  Comprar Agora
                </Button>
              </a>
              <GuaranteeSeals />
            </div>

            {/* Order Bump 1 */}
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-2xl font-bold mb-2">Kit Profissional</h3>
              <p className="text-muted-foreground mb-6">16 petições editáveis + manual</p>
              <div className="text-4xl font-bold text-primary mb-6">R$ 37,00</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-accent" />
                  <span>16 modelos prontos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-accent" />
                  <span>100% editáveis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-accent" />
                  <span>Manual de uso</span>
                </li>
              </ul>
              <a href="https://pay.kiwify.com.br/mhlMxR4" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-primary hover:bg-primary/90 mb-4">
                  Comprar Agora
                </Button>
              </a>
              <GuaranteeSeals />
            </div>

            {/* Order Bump 2 */}
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-2xl font-bold mb-2">Legal Design Lucrativo</h3>
              <p className="text-muted-foreground mb-6">Contrato + estratégia de captação</p>
              <div className="text-4xl font-bold text-primary mb-6">R$ 19,90</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-accent" />
                  <span>Contrato pronto</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-accent" />
                  <span>Guia de captação</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} className="text-accent" />
                  <span>Estratégias comprovadas</span>
                </li>
              </ul>
              <a href="https://pay.kiwify.com.br/vrAyYJn" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-primary hover:bg-primary/90 mb-4">
                  Comprar Agora
                </Button>
              </a>
              <GuaranteeSeals />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dr. Carlos Silva",
                role: "Advogado Criminalista",
                text: "Legal Design transformou completamente minha prática. Meus clientes ficam impressionados com a qualidade dos documentos.",
              },
              {
                name: "Dra. Marina Costa",
                role: "Advogada Trabalhista",
                text: "Os modelos do kit profissional economizaram horas do meu tempo. Recomendo para todos os colegas!",
              },
              {
                name: "Dr. Felipe Oliveira",
                role: "Advogado Empresarial",
                text: "Consegui aumentar meus honorários em 40% após implementar as estratégias de legal design.",
              },
              {
                name: "Dra. Juliana Rocha",
                role: "Advogada Imobiliária",
                text: "O guia é prático e fácil de aplicar. Meus clientes agora entendem melhor os documentos.",
              },
            ].map((testimonial, i ) => (
              <div key={i} className="bg-background rounded-lg p-6 border border-border">
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/80 transition"
                >
                  <span className="font-semibold text-left">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-accent transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-background border-t border-border">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-32 bg-card/50">
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Tem Dúvidas?</h2>
          <p className="text-center text-muted-foreground mb-8">
            Entre em contato conosco! Respondemos em até 24 horas.
          </p>
          <div className="bg-background rounded-lg p-8 border border-border text-center">
            <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
            <p className="text-lg font-semibold mb-2">legaldesignsuporte@gmail.com</p>
            <p className="text-muted-foreground mb-6">Tempo de resposta: até 24 horas</p>
            <a href="mailto:legaldesignsuporte@gmail.com">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Enviar Email de Dúvida
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua advocacia?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Comece hoje com Legal Design na Prática e veja a diferença na qualidade dos seus documentos e na satisfação dos seus clientes.
          </p>
          <a href="https://pay.kiwify.com.br/9SEhh4q" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Acesso Imediato - R$ 19,90
            </Button>
          </a>
          <div className="mt-6 flex items-center justify-center gap-2 text-white">
            <Check size={18} />
            <span>Garantia de 7 dias ou seu dinheiro de volta</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Legal Design</h3>
              <p className="text-sm text-muted-foreground">
                Transformando documentos jurídicos com design inovador.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#beneficios" className="text-muted-foreground hover:text-primary transition">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="text-muted-foreground hover:text-primary transition">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-primary transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <p className="text-sm text-muted-foreground">legaldesignsuporte@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Legal Design. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
   );
}
