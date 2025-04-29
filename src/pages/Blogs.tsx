import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, ThumbsUp, MessageSquare } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  readTime: number;
  date: string;
  likes: number;
  comments: number;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  imageUrl,
  category,
  readTime,
  date,
  likes,
  comments
}) => {
  const getCategoryColor = () => {
    switch (category.toLowerCase()) {
      case 'nutrition':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'workout':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'motivation':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'recovery':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      case 'myth busters':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <Card className="overflow-hidden hover-card">
      <div className="relative h-48">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <Badge className={`absolute top-3 right-3 ${getCategoryColor()}`}>
          {category}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{readTime} min read</span>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex items-center text-gray-500">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>{comments}</span>
          </div>
        </div>
        <Button variant="ghost" className="text-fitness-purple hover:bg-fitness-purple/10">Read More</Button>
      </CardFooter>
    </Card>
  );
};

const Blogs: React.FC = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Fitness Blog</h1>
          <p className="text-gray-500">Stay informed with the latest fitness advice and tips</p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-fitness-purple to-fitness-blue animate-fade-in">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 p-6 md:p-8 text-white">
            <Badge className="bg-white/20 text-white hover:bg-white/30 mb-3">Featured</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">The Science of Muscle Growth: What Actually Works</h2>
            <p className="mb-4 max-w-2xl">Discover the evidence-backed strategies that truly drive muscle growth, and which popular methods are actually myths holding back your progress.</p>
            <div className="flex items-center gap-3">
              <img
                src="https://github.com/shadcn.png"
                alt="Author"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div>
                <div className="font-medium">Dr. Alex Johnson</div>
                <div className="text-sm text-white/70">Sport Scientist, PhD</div>
              </div>
            </div>
            <Button className="mt-4 bg-white text-fitness-purple hover:bg-white/90">Read Article</Button>
          </div>
          <img
            src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5017.jpg?size=626&ext=jpg"
            alt="Featured Article"
            className="w-full h-72 md:h-80 object-cover"
          />
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="workout">Workout</TabsTrigger>
            <TabsTrigger value="motivation">Motivation</TabsTrigger>
            <TabsTrigger value="recovery">Recovery</TabsTrigger>
            <TabsTrigger value="myth-busters">Myth Busters</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BlogPost
                title="10 Foods That Actually Boost Metabolism"
                excerpt="Contrary to popular belief, not all metabolism-boosting foods are spicy or require special preparation. Here are 10 common foods that science shows can genuinely increase your metabolic rate."
                imageUrl="https://img.freepik.com/free-photo/healthy-food-medical-equipment_23-2148108966.jpg?size=626&ext=jpg"
                category="Nutrition"
                readTime={6}
                date="Apr 22, 2025"
                likes={124}
                comments={18}
              />
              <BlogPost
                title="The Only 3 Exercises You Need for Full Body Strength"
                excerpt="Sometimes simplicity is best. These three fundamental compound movements can form the foundation of an effective strength training program for any fitness goal."
                imageUrl="https://img.freepik.com/free-photo/young-muscular-athlete-training-gym_155003-36369.jpg?size=626&ext=jpg"
                category="Workout"
                readTime={8}
                date="Apr 18, 2025"
                likes={256}
                comments={34}
              />
              <BlogPost
                title="How Sleep Quality Affects Muscle Recovery"
                excerpt="The relationship between sleep and muscle repair is stronger than most people realize. This article examines the latest research on sleep cycles and their direct impact on your gains."
                imageUrl="https://img.freepik.com/free-photo/woman-sleeping-bed-night-resting-comfortable-mattress_1150-21165.jpg?size=626&ext=jpg"
                category="Recovery"
                readTime={7}
                date="Apr 15, 2025"
                likes={189}
                comments={23}
              />
              <BlogPost
                title="Debunking 'No Pain, No Gain': The Truth About Exercise Pain"
                excerpt="The popular fitness mantra 'no pain, no gain' has led many down the path of injury. We explore what kind of discomfort is normal during exercise and what indicates potential harm."
                imageUrl="https://img.freepik.com/free-photo/athletic-man-woman-with-dumbbells_155003-11801.jpg?size=626&ext=jpg"
                category="Myth Busters"
                readTime={9}
                date="Apr 10, 2025"
                likes={312}
                comments={56}
              />
              <BlogPost
                title="Finding Your 'Why': Motivation That Lasts Beyond January"
                excerpt="Most fitness resolutions fail within weeks. Discover how to connect your exercise routine to deeper motivations that keep you consistent all year round."
                imageUrl="https://img.freepik.com/free-photo/person-holding-dumbbells_23-2149552345.jpg?size=626&ext=jpg"
                category="Motivation"
                readTime={5}
                date="Apr 5, 2025"
                likes={276}
                comments={42}
              />
              <BlogPost
                title="Intermittent Fasting: Beyond the Hype"
                excerpt="Is intermittent fasting a miracle approach or just another diet trend? We analyze the research to separate fact from fiction about this popular eating pattern."
                imageUrl="https://img.freepik.com/free-photo/selective-focus-shot-clock-with-vegetables-fruits-background_181624-57573.jpg?size=626&ext=jpg"
                category="Nutrition"
                readTime={10}
                date="Apr 1, 2025"
                likes={347}
                comments={63}
              />
            </div>
          </TabsContent>
          
          {/* Other tabs content would be similar */}
          <TabsContent value="nutrition" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BlogPost
                title="10 Foods That Actually Boost Metabolism"
                excerpt="Contrary to popular belief, not all metabolism-boosting foods are spicy or require special preparation. Here are 10 common foods that science shows can genuinely increase your metabolic rate."
                imageUrl="https://img.freepik.com/free-photo/healthy-food-medical-equipment_23-2148108966.jpg?size=626&ext=jpg"
                category="Nutrition"
                readTime={6}
                date="Apr 22, 2025"
                likes={124}
                comments={18}
              />
              <BlogPost
                title="Intermittent Fasting: Beyond the Hype"
                excerpt="Is intermittent fasting a miracle approach or just another diet trend? We analyze the research to separate fact from fiction about this popular eating pattern."
                imageUrl="https://img.freepik.com/free-photo/selective-focus-shot-clock-with-vegetables-fruits-background_181624-57573.jpg?size=626&ext=jpg"
                category="Nutrition"
                readTime={10}
                date="Apr 1, 2025"
                likes={347}
                comments={63}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Blogs;
