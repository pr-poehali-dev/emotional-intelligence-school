import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Отзывы родителей</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            История семей, которые уже изменили жизнь своих детей
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Елена Морозова",
              child: "Дочь Софья, 8 лет",
              text: "После занятий дочь стала намного спокойнее. Истерики практически прекратились, и она научилась объяснять, что её беспокоит словами.",
              rating: 5
            },
            {
              name: "Дмитрий Волков",
              child: "Сын Максим, 12 лет",
              text: "Сын был очень замкнутым, но теперь легко заводит друзей и стал увереннее в себе. Оценки в школе тоже улучшились!",
              rating: 5
            },
            {
              name: "Анна Петрова",
              child: "Дочь Мария, 15 лет",
              text: "Подросток — это сложно, но 1 учебный год программы помог нам наладить отношения. Дочь стала более ответственной и понимающей.",
              rating: 5
            }
          ].map((review, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">{review.name}</CardTitle>
                <CardDescription>{review.child}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto border border-primary/20">
            <h3 className="text-xl font-bold mb-3">Читайте отзывы наших родителей!</h3>
            <p className="text-sm text-muted-foreground mb-4">Узнайте, как мы помогли другим семьям</p>
            <Button variant="outline" size="lg" className="w-full">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;