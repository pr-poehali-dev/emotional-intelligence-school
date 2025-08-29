import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Полезные статьи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Практические советы по развитию эмоционального интеллекта
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "5 признаков высокого эмоционального интеллекта у ребёнка",
              excerpt: "Как понять, что ваш ребёнок эмоционально развит и что можно улучшить",
              readTime: "5 мин",
              category: "Развитие"
            },
            {
              title: "Что делать, если ребёнок не может справиться с гневом",
              excerpt: "Практические техники, которые помогут ребёнку управлять яростью",
              readTime: "7 мин",
              category: "Практика"
            },
            {
              title: "Как научить ребёнка дружить: 7 важных навыков",
              excerpt: "Социальные навыки, которые помогут вашему ребёнку легко заводить друзей",
              readTime: "6 мин",
              category: "Общение"
            }
          ].map((article, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-muted-foreground text-xs">{article.readTime}</span>
                </div>
                <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center text-primary hover:text-primary/80">
                  <span className="text-sm font-medium mr-2">Читать далее</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;