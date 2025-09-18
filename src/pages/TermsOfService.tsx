import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>
            
            <h1 className="text-4xl font-bold mb-4">Termos de Uso</h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e usar o site da HIDROSPHERA, você concorda em cumprir e estar vinculado a estes 
                Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Descrição dos Serviços</h2>
              <p className="text-muted-foreground leading-relaxed">
                A HIDROSPHERA oferece serviços de consultoria ambiental, incluindo gestão de recursos hídricos, 
                tratamento de resíduos sólidos, energias renováveis e licenciamento ambiental. As informações 
                contidas neste site são meramente informativas e não constituem proposta comercial vinculante.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Uso Permitido</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>Você pode usar nosso site para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Acessar informações sobre nossos serviços</li>
                  <li>Entrar em contato conosco para solicitar orçamentos</li>
                  <li>Visualizar nossos projetos e estudos de caso</li>
                  <li>Obter informações sobre sustentabilidade e meio ambiente</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo deste site, incluindo textos, imagens, logos, gráficos, ícones e software, 
                é propriedade da HIDROSPHERA ou de seus licenciadores e é protegido por leis de direitos autorais 
                e outras leis de propriedade intelectual. O uso não autorizado é estritamente proibido.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Responsabilidades do Usuário</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>Ao usar nosso site, você concorda em:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Não usar o site para fins ilegais ou não autorizados</li>
                  <li>Não tentar acessar áreas restritas do sistema</li>
                  <li>Não transmitir vírus ou códigos maliciosos</li>
                  <li>Fornecer informações verdadeiras e atualizadas quando solicitado</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                A HIDROSPHERA não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais 
                decorrentes do uso ou incapacidade de usar este site. As informações são fornecidas "como estão" 
                sem garantias de qualquer tipo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Modificações dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em 
                vigor imediatamente após a publicação. O uso continuado do site após as modificações constitui 
                aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Lei Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais 
                competentes de Juiz de Fora, Minas Gerais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-muted-foreground">Email: hidrosphera@gmail.com</p>
                <p className="text-muted-foreground">Telefone: (32) 98411-1197</p>
                <p className="text-muted-foreground">Endereço: Juiz de Fora, MG</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;