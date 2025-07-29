import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermosUso = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              Termos de Uso
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground mb-4">
                  Ao acessar e utilizar este site, você concorda em estar vinculado a estes Termos de Uso. 
                  Se não concordar com qualquer parte destes termos, não utilize nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso Permitido</h2>
                <p className="text-muted-foreground mb-4">
                  Este site é destinado ao uso comercial e informativo sobre os serviços da RIALMA S/A. 
                  É proibido:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Usar o site para fins ilegais</li>
                  <li>Interferir no funcionamento do site</li>
                  <li>Tentar acessar áreas restritas</li>
                  <li>Reproduzir conteúdo sem autorização</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Propriedade Intelectual</h2>
                <p className="text-muted-foreground mb-4">
                  Todo o conteúdo deste site, incluindo textos, imagens, logos e design, 
                  é de propriedade da RIALMA S/A e está protegido por leis de direitos autorais.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground mb-4">
                  A RIALMA S/A não se responsabiliza por danos diretos ou indiretos decorrentes 
                  do uso deste site, incluindo, mas não limitado a, perda de dados ou interrupção de negócios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Modificações</h2>
                <p className="text-muted-foreground mb-4">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As alterações entrarão em vigor imediatamente após a publicação no site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contato</h2>
                <p className="text-muted-foreground">
                  Para dúvidas sobre estes termos, entre em contato conosco:<br />
                  <strong>Email:</strong> legal@rialma.com.br<br />
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

export default TermosUso;