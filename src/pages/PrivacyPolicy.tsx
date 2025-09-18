import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
            
            <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Informações Gerais</h2>
              <p className="text-muted-foreground leading-relaxed">
                A HIDROSPHERA respeita sua privacidade e está comprometida com a proteção de seus dados pessoais. 
                Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações 
                em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Dados Coletados</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>Coletamos as seguintes categorias de dados:</p>
                <h3 className="text-lg font-medium">2.1 Dados fornecidos voluntariamente:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Número de telefone</li>
                  <li>Empresa/organização</li>
                  <li>Mensagens enviadas através de formulários de contato</li>
                </ul>
                
                <h3 className="text-lg font-medium mt-6">2.2 Dados coletados automaticamente:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Endereço IP</li>
                  <li>Tipo de navegador e dispositivo</li>
                  <li>Páginas visitadas e tempo de permanência</li>
                  <li>Data e horário de acesso</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Finalidade do Tratamento</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>Utilizamos seus dados para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Responder às suas solicitações e dúvidas</li>
                  <li>Fornecer orçamentos e propostas comerciais</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                  <li>Enviar informações sobre nossos serviços (com seu consentimento)</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                  <li>Prevenir fraudes e garantir a segurança do site</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Base Legal</h2>
              <p className="text-muted-foreground leading-relaxed">
                O tratamento de seus dados pessoais é fundamentado nas seguintes bases legais previstas na LGPD:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground mt-3">
                <li>Consentimento do titular</li>
                <li>Execução de contrato ou procedimentos preliminares</li>
                <li>Legítimo interesse da HIDROSPHERA</li>
                <li>Cumprimento de obrigação legal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. 
                Podemos compartilhar dados apenas nas seguintes situações:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground mt-3">
                <li>Com prestadores de serviços essenciais (hospedagem, análise de dados)</li>
                <li>Quando exigido por lei ou ordem judicial</li>
                <li>Para proteger nossos direitos legais</li>
                <li>Com seu consentimento expresso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Cookies e Tecnologias Similares</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação, 
                analisar o tráfego do site e personalizar conteúdo. Você pode gerenciar suas preferências 
                de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais 
                contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, 
                controles de acesso e monitoramento regular de segurança.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta 
                política ou conforme exigido por lei. Após esse período, os dados são eliminados ou anonimizados 
                de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Seus Direitos (LGPD)</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>Você tem os seguintes direitos em relação aos seus dados pessoais:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                  <li>Solicitar a portabilidade dos dados</li>
                  <li>Revogar o consentimento</li>
                  <li>Opor-se ao tratamento</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Alterações na Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos sobre alterações 
                significativas por meio do nosso site ou por e-mail. A data da última atualização está indicada 
                no início desta política.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contato e Encarregado de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, 
                entre em contato conosco:
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

export default PrivacyPolicy;