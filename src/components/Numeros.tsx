const Numeros = () => {
  const stats = [
    { number: "35", label: "Anos de Experiência", suffix: "+" },
    { number: "8", label: "Estados Brasileiros", suffix: "" },
    { number: "62", label: "Municípios", suffix: "" },
    { number: "8.100", label: "Toneladas de Carne/Ano", suffix: "" },
    { number: "240", label: "Mil Pessoas Alimentadas", suffix: "k" },
    { number: "2.000", label: "MW Eólicos Planejados", suffix: "" },
    { number: "500", label: "KM de Transmissão", suffix: "" },
    { number: "30", label: "MW Máximo por PCH", suffix: "" }
  ];

  return (
    <section id="numeros" className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-white/5"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Números que Impressionam
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Três décadas de crescimento sustentável e impacto positivo no Brasil
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                  <span className="text-primary-glow">{stat.suffix}</span>
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/80 text-lg max-w-4xl mx-auto leading-relaxed">
            Desde 1989, a RIALMA S/A tem sido pioneira em soluções sustentáveis, 
            contribuindo para o desenvolvimento energético, agropecuário e mineral do Brasil 
            com responsabilidade ambiental e social.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Numeros;