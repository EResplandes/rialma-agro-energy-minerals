import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, TrendingUp } from "lucide-react";

const RelacaoInvestidores = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Relação com Investidores
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transparência e informações relevantes para nossos investidores
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Relatórios Financeiros</CardTitle>
                  <CardDescription>
                    Demonstrações financeiras e relatórios trimestrais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Relatórios
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Agenda de Eventos</CardTitle>
                  <CardDescription>
                    Assembleias, conferências e eventos corporativos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Ver Calendário
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Performance</CardTitle>
                  <CardDescription>
                    Indicadores de performance e resultados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Ver Dados
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16">
              <Card>
                <CardHeader>
                  <CardTitle>Contato - Relação com Investidores</CardTitle>
                  <CardDescription>
                    Entre em contato conosco para mais informações
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p><strong>Email:</strong> investidores@rialma.com.br</p>
                    <p><strong>Telefone:</strong> +55 (11) 3000-0000</p>
                    <p><strong>Endereço:</strong> São Paulo - SP</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RelacaoInvestidores;