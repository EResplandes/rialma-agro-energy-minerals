import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              Política de Privacidade
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informações Gerais</h2>
                <p className="text-muted-foreground mb-4">
                  A RIALMA S/A está comprometida com a proteção da privacidade e dos dados pessoais de nossos usuários, 
                  clientes e parceiros, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Dados Coletados</h2>
                <p className="text-muted-foreground mb-4">
                  Coletamos apenas os dados necessários para a prestação de nossos serviços, incluindo:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Dados de identificação (nome, CPF/CNPJ, RG)</li>
                  <li>Dados de contato (telefone, e-mail, endereço)</li>
                  <li>Dados de navegação no site</li>
                  <li>Dados necessários para cumprimento de obrigações legais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Finalidade do Tratamento</h2>
                <p className="text-muted-foreground mb-4">
                  Os dados pessoais são tratados para as seguintes finalidades:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Prestação de serviços contratados</li>
                  <li>Comunicação com clientes e parceiros</li>
                  <li>Cumprimento de obrigações legais e regulatórias</li>
                  <li>Melhoria dos serviços oferecidos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Direitos dos Titulares</h2>
                <p className="text-muted-foreground mb-4">
                  Conforme a LGPD, você tem direito a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Confirmação da existência de tratamento</li>
                  <li>Acesso aos dados</li>
                  <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                  <li>Anonimização, bloqueio ou eliminação de dados</li>
                  <li>Portabilidade dos dados</li>
                  <li>Eliminação dos dados tratados com consentimento</li>
                  <li>Revogação do consentimento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Contato DPO</h2>
                <p className="text-muted-foreground mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados pessoais, 
                  entre em contato com nosso Encarregado de Proteção de Dados (DPO):
                </p>
                <p className="text-muted-foreground">
                  <strong>Email:</strong> dpo@rialma.com.br<br />
                  <strong>Telefone:</strong> +55 (11) 3000-0000
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;