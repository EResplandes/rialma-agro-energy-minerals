import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import energiaEolica from "@/assets/energia-eolica.jpg";
import pchHidreletrica from "@/assets/pch-hidreletrica.jpg";
import agropecuaria from "@/assets/agropecuaria-gado.jpg";

const Segmentos = () => {
  const segmentos = [
    {
      title: "Energia",
      subtitle: "Geração, Transmissão e Comercialização",
      description: "Especialistas em PCHs e energia eólica, com mais de 2.000 MW planejados. Participação em leilões de transmissão com 500 km de linhas.",
      image: energiaEolica,
      highlights: ["PCHs até 30 MW", "2.000 MW eólicos planejados", "500 km de transmissão"]
    },
    {
      title: "Agropecuária",
      subtitle: "35 Anos de Tradição no Campo",
      description: "Produção de 8.100 toneladas de carne por ano, alimentando 240 mil pessoas. Cultivo de grãos e práticas pecuárias sustentáveis.",
      image: agropecuaria,
      highlights: ["8.100 ton/ano de carne", "240 mil pessoas alimentadas", "Práticas sustentáveis"]
    },
    {
      title: "Mineração",
      subtitle: "Rialma Fertilizantes",
      description: "Pesquisa e desenvolvimento de tecnologias para enriquecimento do solo, contribuindo para uma agricultura mais produtiva.",
      image: pchHidreletrica,
      highlights: ["P&D em fertilizantes", "Enriquecimento do solo", "Tecnologia avançada"]
    }
  ];

  return (
    <section id="segmentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos Segmentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Três décadas de experiência em setores estratégicos para o desenvolvimento do Brasil
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segmentos.map((segmento, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={segmento.image} 
                  alt={segmento.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{segmento.title}</h3>
                  <p className="text-sm opacity-90">{segmento.subtitle}</p>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {segmento.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {segmento.description}
                </p>
                
                <div className="space-y-2">
                  {segmento.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segmentos;