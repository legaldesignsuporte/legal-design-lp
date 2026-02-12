import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Gift, Zap, Shield } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * DESIGN PHILOSOPHY: Elegant Classical Contemporary
 * - Serif typography (Playfair Display) for sophistication
 * - Cream background with deep blue and rich gold accents
 * - Refined spacing and subtle animations
 * - Professional yet modern aesthetic for legal professionals
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 3);
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const GuaranteeSeals = () => (
    <div className="flex flex-col gap-3 items-center mt-6 pt-6 border-t border-border">
      <div className="flex items-center justify-center gap-2">
        <Shield className="w-6 h-6 text-accent" />
        <span className="text-sm font-semibold text-primary">Garantia de 7 Dias</span>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        100% de devolucao do dinheiro se nao estiver satisfeito
      </p>
    </div>
  );

  const CountdownTimer = ({ variant = "default" }: { variant?: "default" | "accent" }) => {
    const bgClass = variant === "accent" ? "bg-accent/10 border border-accent" : "bg-background border border-border";
    const textClass = variant === "accent" ? "text-accent" : "text-primary";
    return (
      <div className={`flex gap-4 justify-center items-center ${bgClass} rounded-sm p-6`}>
        <div className="text-center">
          <div className={`text-3xl font-bold ${textClass}`}>{timeLeft.days}</div>
          <div className="text-xs font-semibold text-muted-foreground uppercase">Dias</div>
        </div>
        <div className="text-2xl font-light text-muted-foreground">:</div>
        <div className="text-center">
          <div className={`text-3xl font-bold ${textClass}`}>{String(timeLeft.hours).padStart(2, "0")}</div>
          <div className="text-xs font-semibold text-muted-foreground uppercase">Horas</div>
        </div>
        <div className="text-2xl font-light text-muted-foreground">:</div>
        <div className="text-center">
          <div className={`text-3xl font-bold ${textClass}`}>{String(timeLeft.minutes).padStart(2, "0")}</div>
          <div className="text-xs font-semibold text-muted-foreground uppercase">Minutos</div>
        </div>
        <div className="text-2xl font-light text-muted-foreground">:</div>
        <div className="text-center">
          <div className={`text-3xl font-bold ${textClass}`}>{String(timeLeft.seconds).padStart(2, "0")}</div>
          <div className="text-xs font-semibold text-muted-foreground uppercase">Segundos</div>
        </div>
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">Legal Design</div>
          <div className="hidden md:flex gap-8">
            <a href="#beneficios" className="text-foreground hover:text-accent transition-colors">
              Benefícios
            </a>
            <a href="#produtos" className="text-foreground hover:text-accent transition-colors">
              Produtos
            </a>
            <a href="#faq" className="text-foreground hover:text-accent transition-colors">
              Dúvidas
            </a>
            <a href="#contato" className="text-foreground hover:text-accent transition-colors">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://private-us-east-1.manuscdn.com/sessionFile/ei9hXKJ6hqSuHewVyFWXM3/sandbox/G7gEr6IOpM1iumHf6mnuMu-img-1_1770753530000_na1fn_aGVyby1sZWdhbC1kZXNpZ24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZWk5aFhLSjZocVN1SGV3VnlGV1hNMy9zYW5kYm94L0c3Z0VyNklPcE0xaXVtSGY2bW51TXUtaW1nLTFfMTc3MDc1MzUzMDAwMF9uYTFmbl9hR1Z5Ynkxc1pXZGhiQzFrWlhOcFoyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pebMFjak9bLxLDr5mLGMdTau-79RzqMzok1iaKGLhzQWEEB~RwY5NBlHut5UEeAZ1eUCCFSJ2Iz5KV-XFsq-QK6PiSWVj9yiHSntLG4~EkxDDYtm~KsYkveN-OUPOK7VgvSvj3QIZY2RAUD-ldtyaUGcHioq-A94PfHZb0g9pgi4QuWC7j6KIXENlio2YKYzrFYGiit8X2Qa7BIbdFPr2noXBDENjv5NT78H2MCBIc09GwfoiuNp9xM6m39LSmS-NqJm2cUTXjvTu9-nA9V831fqmqgD956ZbWWbkeFcGV7tS-YcWanfSUBojzpLHk~ErA5AHvwzyltsJ~rKtYAjdg__')",
          }}
        />
        <div className="relative container py-20 md:py-32 flex flex-col items-center text-center">
          <div className="mb-6 inline-block">
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase">
              Oferta por 3 dias apenas!
            </span>
          </div>
          <h1 className="font-display text-primary mb-6 max-w-3xl">
            Transforme seus documentos jurídicos com <span className="text-accent">Legal Design</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl leading-relaxed">
            Guia completo de inovação para advogados. Aprenda a aplicar Legal Design na prática e eleve sua advocacia a um novo nível de profissionalismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="flex flex-col items-center gap-3">
            <a
              href="https://pay.kiwify.com.br/9SEhh4q"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-elegant inline-flex items-center justify-center gap-2"
            >
              Acesso Imediato <ArrowRight className="w-5 h-5" />
            </a>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-semibold text-primary">Garantia de 7 Dias</span>
              </div>
            </div>
            <a
              href="#beneficios"
              className="btn-outline-elegant inline-flex items-center justify-center gap-2"
            >
              Saiba Mais
            </a>
          </div>
          <div className="mt-12 w-full max-w-2xl">
            <CountdownTimer />
          </div>
          <div className="text-sm text-muted-foreground mt-8">
            ✓ Acesso imediato após a compra | ✓ Garantia de satisfação | ✓ Suporte por email
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-primary mb-4">Por que Legal Design?</h2>
            <div className="divider-gold w-24 mx-auto mb-6" />
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Descubra como Legal Design pode transformar seus documentos e sua prática jurídica
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 gap-12 mb-16"
            style={{
              backgroundImage:
                "url('https://private-us-east-1.manuscdn.com/sessionFile/ei9hXKJ6hqSuHewVyFWXM3/sandbox/G7gEr6IOpM1iumHf6mnuMu-img-2_1770753524000_na1fn_YmVuZWZpdHMtc2VjdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZWk5aFhLSjZocVN1SGV3VnlGV1hNMy9zYW5kYm94L0c3Z0VyNklPcE0xaXVtSGY2bW51TXUtaW1nLTJfMTc3MDc1MzUyNDAwMF9uYTFmbl9ZbVZ1WldacGRITXRjMlZqZEdsdmJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=a9GDevlhcyfJx7jFoye4xK1ql~IK~6F9SxAr06XgbhigF0tij8JHhH3Qz5yimnwf1vE5wdNXIsVqKrQm6V548p15KJmu-NkHpJpgjcqLWYEhP8wU~sWi3uJH84kUm1ZmkQiX7mEOVa2EjKGQWzp~k-Q-qtzf-ceVL~X9b4t-boliRZ3RQDAT4Ug4S5-5HqJjzGYsMtYhbugK4qcqoYve2NBi3HZP1jDwyxhd1crXudVtUWeA1tauBfx9MwODxtGDm6g7wpNNe7RIs5S8oMWQyr6dLS1vIeG1-eAffnwbTn-Vukpb06gsImqymwSRc9Bd854ttQaj2zd64zKrs1cJ7Q__')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="space-y-8">
              {[
                {
                  icon: Zap,
                  title: "Modernize seus Documentos",
                  description:
                    "Aprenda técnicas profissionais para transformar documentos jurídicos complexos em textos claros, elegantes e persuasivos.",
                },
                {
                  icon: CheckCircle2,
                  title: "Aumente a Confiança do Cliente",
                  description:
                    "Documentos bem formatados e visualmente atraentes transmitem profissionalismo e aumentam a percepção de valor.",
                },
                {
                  icon: Gift,
                  title: "Diferencie sua Prática",
                  description:
                    "Destaque-se da concorrência oferecendo um serviço jurídico que une excelência técnica com design refinado.",
                },
                {
                  icon: ArrowRight,
                  title: "Economize Tempo",
                  description:
                    "Com modelos prontos e técnicas comprovadas, você reduz o tempo de preparação de documentos sem perder qualidade.",
                },
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <Icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-subheading text-primary mb-2">{benefit.title}</h3>
                      <p className="text-foreground">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-primary mb-4">Seus Produtos</h2>
            <div className="divider-gold w-24 mx-auto mb-6" />
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Escolha o pacote que melhor se adequa às suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Product */}
            <div className="md:col-span-1 card-elegant p-8 border-2 border-accent">
              <div className="mb-6">
                <h3 className="font-subheading text-primary mb-2">Legal Design na Prática</h3>
                <p className="text-sm text-muted-foreground mb-4">Guia Completo de Inovação</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">R$ 19,90</span>
                <p className="text-xs text-muted-foreground mt-2">E-book completo em PDF</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Guia completo com 50+ páginas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Exemplos práticos e casos reais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Técnicas aplicáveis imediatamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Acesso vitalício ao material</span>
                </li>
              </ul>

              <a
                href="https://pay.kiwify.com.br/9SEhh4q"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-elegant w-full text-center block"
              >
                Comprar Agora
              </a>
              <GuaranteeSeals />
            </div>

            {/* Order Bump 1 */}
            <div className="md:col-span-1 card-elegant p-8">
              <div className="mb-6">
                <div className="inline-block bg-accent text-primary px-3 py-1 rounded text-xs font-semibold mb-3">
                  ORDER BUMP
                </div>
                <h3 className="font-subheading text-primary mb-2">Kit Profissional de Modelos</h3>
                <p className="text-sm text-muted-foreground mb-4">16 Petições Editáveis + Manual</p>
              </div>

              <div className="mb-6">
                <span className="text-2xl font-bold text-secondary">Adicione por apenas</span>
                <div className="text-3xl font-bold text-accent mt-2">R$ 37,00</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">16 modelos de petições editáveis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Manual de utilização completo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Pronto para usar em seus casos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Atualizações futuras incluídas</span>
                </li>
              </ul>

              <a
                href="https://pay.kiwify.com.br/mhlMxR4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-elegant w-full text-center block"
              >
                Adicionar ao Carrinho
              </a>
              <GuaranteeSeals />
            </div>

            {/* Order Bump 2 */}
            <div className="md:col-span-1 card-elegant p-8">
              <div className="mb-6">
                <div className="inline-block bg-secondary text-primary-foreground px-3 py-1 rounded text-xs font-semibold mb-3">
                  ORDER BUMP
                </div>
                <h3 className="font-subheading text-primary mb-2">Legal Design Lucrativo</h3>
                <p className="text-sm text-muted-foreground mb-4">Contrato + Estratégia de Captação</p>
              </div>

              <div className="mb-6">
                <span className="text-2xl font-bold text-secondary">Adicione por apenas</span>
                <div className="text-3xl font-bold text-accent mt-2">R$ 19,90</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Contrato de prestação de serviços</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">E-book: Como captar clientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Estratégias de marketing jurídico</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Monetize seu conhecimento em Legal Design</span>
                </li>
              </ul>

              <a
                href="https://pay.kiwify.com.br/vrAyYJn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-elegant w-full text-center block"
              >
                Adicionar ao Carrinho
              </a>
              <GuaranteeSeals />
            </div>
          </div>

          <div className="mt-16 space-y-6">
            <div className="p-8 bg-accent/10 rounded-sm border-2 border-accent">
              <p className="text-center text-lg text-foreground mb-6">
                <span className="font-semibold text-primary">Oferta Relâmpago:</span> Válida por apenas
                <span className="text-accent font-semibold"> 3 dias</span>!
              </p>
              <CountdownTimer variant="accent" />
              <p className="text-center text-sm text-muted-foreground mt-4">
                Não perca! Esta oferta especial expira em:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-32 bg-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-primary mb-4">Tem Dúvidas?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entre em contato conosco e responderemos suas perguntas em até 24 horas.
            </p>
            <div className="divider-gold w-24 mx-auto mt-6" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card-elegant p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block bg-accent/20 p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-subheading text-primary mb-2">Envie-nos um Email</h3>
                <p className="text-muted-foreground mb-6">
                  Clique no botão abaixo para enviar suas dúvidas diretamente para nosso email de suporte.
                </p>
              </div>

              <a
                href="mailto:legaldesignsuporte@gmail.com?subject=Dúvida sobre Legal Design&body=Olá, tenho uma dúvida sobre os produtos de Legal Design."
                className="block w-full bg-primary text-primary-foreground font-semibold py-4 px-6 rounded-sm text-center transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 mb-6"
              >
                Enviar Email de Dúvida
              </a>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="font-semibold text-primary">Email:</span> legaldesignsuporte@gmail.com
                </p>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Respondemos em até 24 horas durante dias úteis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-primary mb-4">O que Advogados Dizem</h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dra. Ana Silva",
                specialty: "Direito Cível",
                text: "Legal Design transformou minha prática. Meus clientes agora percebem muito mais valor nos meus serviços. Recomendo!",
              },
              {
                name: "Dr. Carlos Mendes",
                specialty: "Direito Empresarial",
                text: "Os modelos do kit profissional economizaram horas do meu tempo. Qualidade impecável e fácil de customizar.",
              },
              {
                name: "Dra. Fernanda Costa",
                specialty: "Direito Trabalhista",
                text: "Comecei a oferecer serviços de Legal Design como diferencial. Minha receita aumentou significativamente.",
              },
              {
                name: "Dr. Roberto Oliveira",
                specialty: "Direito Administrativo",
                text: "O guia é completo e prático. Aplicar Legal Design foi mais fácil do que imaginava. Excelente investimento!",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-6 bg-background rounded-sm border border-border">
                <div className="mb-4">
                  <p className="text-foreground italic">"{testimonial.text}"</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-background">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-primary mb-4">Dúvidas Frequentes</h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Como funciona o acesso após a compra?",
                a: "Após a compra na Kiwify, você receberá um email com o link de acesso imediato. Todos os materiais estarão disponíveis para download em formato PDF.",
              },
              {
                q: "Posso usar os modelos em minha prática jurídica?",
                a: "Sim! Todos os modelos são totalmente editáveis e podem ser customizados para seus casos específicos. Você tem direito de uso vitalício.",
              },
              {
                q: "Há garantia de satisfação?",
                a: "Sim, oferecemos garantia de 7 dias. Se não estiver satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.",
              },
              {
                q: "Preciso de conhecimentos técnicos para usar os materiais?",
                a: "Não! O guia é escrito em linguagem clara e prática. Os modelos vêm com manual explicativo passo a passo.",
              },
              {
                q: "Os materiais são atualizados?",
                a: "Sim, fazemos atualizações periódicas. Quem compra tem acesso a todas as versões futuras sem custo adicional.",
              },
              {
                q: "Como faço para tirar dúvidas após a compra?",
                a: "Oferecemos suporte por email. Você receberá um endereço de contato junto com o acesso aos materiais.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="card-elegant overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-background transition-colors text-left"
                >
                  <h3 className="font-subheading text-primary">{faq.q}</h3>
                  <span className={`text-accent text-2xl transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <p className="text-foreground">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-heading text-primary-foreground mb-6">Pronto para Transformar sua Advocacia?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Nao perca esta oportunidade de elevar sua pratica juridica a um novo patamar de profissionalismo e inovacao.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://pay.kiwify.com.br/9SEhh4q"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-sm transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Acesso Imediato <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-2 text-primary-foreground text-sm">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Garantia de 7 Dias</span>
            </div>
          </div>
          <p className="text-sm mt-6 opacity-90">
            Acesso vitalicio | Suporte por email
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-primary mb-4">Legal Design</h3>
              <p className="text-sm text-muted-foreground">
                Transformando a prática jurídica através do design e inovação.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Produtos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#produtos" className="text-muted-foreground hover:text-accent">
                    E-book Completo
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="text-muted-foreground hover:text-accent">
                    Kit de Modelos
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="text-muted-foreground hover:text-accent">
                    Legal Design Lucrativo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-accent">
                    Dúvidas Frequentes
                  </a>
                </li>
                <li>
                  <a href="mailto:legaldesignsuporte@gmail.com" className="text-muted-foreground hover:text-accent">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
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
