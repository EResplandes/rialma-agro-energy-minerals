import { Card, CardContent } from "@/components/ui/card";

const Sobre = () => {
  const timeline = [
    { year: "1989", event: "Fundação da RIALMA S/A", description: "Início das atividades no ramo agropecuário em Brasília, DF" },
    { year: "2000s", event: "Expansão Energética", description: "Especialização em PCHs - Pequenas Centrais Hidrelétricas" },
    { year: "2011", event: "Diversificação Eólica", description: "Entrada no segmento de energia eólica no Nordeste" },
    { year: "2017", event: "Leilão de Transmissão", description: "Vencedora de 3 lotes totalizando 500 km de linhas" },
    { year: "2024", event: "Rialma Fertilizantes", description: "Expansão para mineração e desenvolvimento de fertilizantes" }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Nossa História
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fundada há 35 anos em Brasília, a RIALMA S/A nasceu com o propósito de 
                contribuir para o desenvolvimento sustentável do Brasil através de 
                práticas inovadoras e responsáveis.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Iniciamos nossa jornada na agropecuária e, ao longo das décadas, 
                expandimos nossa atuação para os setores de energia renovável e mineração, 
                sempre mantendo nosso compromisso com a excelência e sustentabilidade.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hoje, somos reconhecidos como um dos principais grupos do setor energético 
                brasileiro, com presença consolidada em 8 estados e 62 municípios.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold min-w-[80px] text-center">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">{item.event}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/10 border border-primary/20">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Energia Limpa</h3>
            <p className="text-muted-foreground">Comprometidos com fontes renováveis e sustentáveis</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/20 border border-secondary/20">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Responsabilidade</h3>
            <p className="text-muted-foreground">Práticas sustentáveis em todos os nossos projetos</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/20 border border-accent/20">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Excelência</h3>
            <p className="text-muted-foreground">35 anos de tradição e qualidade comprovada</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;