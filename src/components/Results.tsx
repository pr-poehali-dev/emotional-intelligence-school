import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Results = () => {
  return (
    <section id="results" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Результаты наших учеников</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные изменения, которые происходят с детьми после прохождения программ
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { metric: "92%", description: "детей стали спокойнее реагировать на стресс" },
            { metric: "85%", description: "улучшили отношения с родителями и друзьями" },
            { metric: "78%", description: "повысили успеваемость в школе" },
            { metric: "96%", description: "родителей отмечают положительные изменения" }
          ].map((result, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">{result.metric}</span>
              </div>
              <p className="text-muted-foreground">{result.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Впечатляющие результаты!</h3>
            <p className="text-muted-foreground mb-6">Ваш ребёнок тоже может достичь таких успехов</p>
            <Button size="lg" className="text-lg px-8">
              <Icon name="TrendingUp" size={20} className="mr-2" />
              Начать развитие ЭИ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;