
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Dumbbell, Trophy, MessageSquare, Apple, Heart, Users } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-fitness-purple text-white p-1.5 rounded-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M6 8H5a4 4 0 0 0 0 8h1"></path>
              <path d="M8 6h8"></path>
              <path d="M8 18h8"></path>
              <path d="M12 8v8"></path>
            </svg>
          </div>
          <span className="font-bold text-xl text-fitness-dark">FitForge</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-600 hover:text-fitness-purple transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-fitness-purple transition-colors">Testimonials</a>
          <a href="#pricing" className="text-gray-600 hover:text-fitness-purple transition-colors">Pricing</a>
          <Link to="/dashboard" className="text-fitness-purple hover:text-fitness-purple/80 font-medium">Log in</Link>
          <Link to="/dashboard">
            <Button className="bg-fitness-purple hover:bg-fitness-purple/90">Get Started</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Link to="/dashboard">
            <Button className="bg-fitness-purple hover:bg-fitness-purple/90">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-fitness-dark">
            Transform Your Fitness Journey with <span className="text-fitness-purple">FitForge</span>
          </h1>
          <p className="text-lg text-gray-600">
            Experience the perfect blend of gamified fitness, AI coaching, and community challenges designed to keep you motivated and engaged like never before.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link to="/dashboard">
              <Button className="w-full sm:w-auto bg-fitness-purple hover:bg-fitness-purple/90 h-12 px-6 rounded-lg font-medium flex items-center justify-center">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#features">
              <Button variant="outline" className="w-full sm:w-auto border-fitness-purple text-fitness-purple hover:bg-fitness-purple/10 h-12 px-6 rounded-lg font-medium">
                Learn More
              </Button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
            <img 
              src="https://img.freepik.com/free-photo/people-gym_23-2149175223.jpg?size=626&ext=jpg" 
              alt="FitForge app showcase" 
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <p className="text-sm font-medium">Join 10,000+ users transforming their fitness</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-fitness-orange rounded-full p-4 shadow-lg animate-pulse-glow">
            <Trophy className="h-8 w-8 text-white" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-fitness-dark">Gamified Fitness Experience</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your workout routine from boring to exciting with features designed to keep you motivated and engaged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover-card">
              <div className="w-14 h-14 bg-fitness-purple/10 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="h-7 w-7 text-fitness-purple" />
              </div>
              <h3 className="text-xl font-bold text-fitness-dark mb-3">Daily Challenges</h3>
              <p className="text-gray-600">
                Complete daily, weekly, and monthly challenges to earn rewards and track your progress over time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover-card">
              <div className="w-14 h-14 bg-fitness-purple/10 rounded-lg flex items-center justify-center mb-6">
                <Dumbbell className="h-7 w-7 text-fitness-purple" />
              </div>
              <h3 className="text-xl font-bold text-fitness-dark mb-3">Personalized Workouts</h3>
              <p className="text-gray-600">
                Get workout plans tailored to your goals, fitness level, and available equipment.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover-card">
              <div className="w-14 h-14 bg-fitness-purple/10 rounded-lg flex items-center justify-center mb-6">
                <Apple className="h-7 w-7 text-fitness-purple" />
              </div>
              <h3 className="text-xl font-bold text-fitness-dark mb-3">Nutrition Guidance</h3>
              <p className="text-gray-600">
                Access meal plans and nutritional advice personalized to your dietary preferences and goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover-card">
              <div className="w-14 h-14 bg-fitness-purple/10 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="h-7 w-7 text-fitness-purple" />
              </div>
              <h3 className="text-xl font-bold text-fitness-dark mb-3">AI Fitness Coach</h3>
              <p className="text-gray-600">
                Chat with our AI coach for instant guidance, form corrections, and motivational support.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover-card">
              <div className="w-14 h-14 bg-fitness-purple/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-fitness-purple" />
              </div>
              <h3 className="text-xl font-bold text-fitness-dark mb-3">Community Support</h3>
              <p className="text-gray-600">
                Connect with like-minded fitness enthusiasts, join teams, and compete in group challenges.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover-card">
              <div className="w-14 h-14 bg-fitness-purple/10 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-fitness-purple" />
              </div>
              <h3 className="text-xl font-bold text-fitness-dark mb-3">Health Tracking</h3>
              <p className="text-gray-600">
                Monitor your progress with comprehensive health metrics and personalized insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-fitness-dark">What Our Users Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their fitness journey with FitForge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="User" className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-bold">Sarah M.</h4>
                  <p className="text-sm text-gray-500">Lost 15lbs in 8 weeks</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The gamification aspect of FitForge keeps me coming back daily. I've never stuck with a fitness app this long before!"
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-bold">James K.</h4>
                  <p className="text-sm text-gray-500">Gained 10lbs muscle</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The AI coach feels like having a personal trainer in my pocket. It's helped me perfect my form and prevent injuries."
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-bold">Michelle T.</h4>
                  <p className="text-sm text-gray-500">Completed 30 challenges</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The community challenges keep me motivated. I've made fitness friends and we push each other to reach our goals!"
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-fitness-dark">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your fitness journey and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-fitness-dark">Free</h3>
              <div className="my-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fitness-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Basic workout library
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fitness-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Track progress
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fitness-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Join public challenges
                </li>
              </ul>
              <Link to="/dashboard">
                <Button variant="outline" className="w-full border-fitness-purple text-fitness-purple hover:bg-fitness-purple/10">
                  Get Started
                </Button>
              </Link>
            </div>

            <div className="bg-fitness-purple text-white p-8 rounded-xl shadow-lg relative transform scale-105">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-fitness-orange text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
              </div>
              <h3 className="text-xl font-bold">Premium</h3>
              <div className="my-4">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="opacity-80">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  All free features
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Personalized workout plans
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Nutrition guidance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Limited AI coaching
                </li>
              </ul>
              <Link to="/dashboard">
                <Button className="w-full bg-white text-fitness-purple hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-fitness-dark">Pro</h3>
              <div className="my-4">
                <span className="text-4xl font-bold">$19.99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fitness-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  All premium features
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fitness-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unlimited AI coaching
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fitness-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom challenge creation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-fitness-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Advanced analytics
                </li>
              </ul>
              <Link to="/dashboard">
                <Button variant="outline" className="w-full border-fitness-purple text-fitness-purple hover:bg-fitness-purple/10">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-fitness-purple to-fitness-blue rounded-2xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already transformed their health and fitness with FitForge's gamified approach.
            </p>
            <Link to="/dashboard">
              <Button className="bg-white text-fitness-purple hover:bg-gray-100 h-12 px-8 rounded-lg font-medium">
                Start Your Free Trial
              </Button>
            </Link>
            <p className="mt-4 text-sm opacity-80">No credit card required. 14-day free trial.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-fitness-purple text-white p-1.5 rounded-lg">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M6 8H5a4 4 0 0 0 0 8h1"></path>
                    <path d="M8 6h8"></path>
                    <path d="M8 18h8"></path>
                    <path d="M12 8v8"></path>
                  </svg>
                </div>
                <span className="font-bold text-xl text-fitness-dark">FitForge</span>
              </div>
              <p className="text-gray-600 max-w-xs">
                Transforming fitness through gamification, AI coaching, and community challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-bold text-fitness-dark uppercase mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-600 hover:text-fitness-purple">Features</a></li>
                  <li><a href="#pricing" className="text-gray-600 hover:text-fitness-purple">Pricing</a></li>
                  <li><Link to="/dashboard" className="text-gray-600 hover:text-fitness-purple">Dashboard</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-fitness-dark uppercase mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-fitness-purple">Help Center</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-fitness-purple">Contact Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-fitness-purple">Privacy</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-fitness-dark uppercase mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-fitness-purple">Instagram</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-fitness-purple">Twitter</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-fitness-purple">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 FitForge. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-fitness-purple">Terms</a>
              <a href="#" className="text-gray-500 hover:text-fitness-purple">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-fitness-purple">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
