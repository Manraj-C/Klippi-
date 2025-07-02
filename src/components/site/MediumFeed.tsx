import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  author: string;
  thumbnail: string;
  description: string;
}

const MediumFeed: React.FC = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumFeed = async () => {
      try {
        setLoading(true);
        // Using rss2json proxy to avoid CORS issues
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            'https://medium.com/feed/@klippiai'
          )}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Medium feed');
        }
        
        interface RssItem {
          title: string;
          pubDate: string;
          link: string;
          author: string;
          content: string;
          description: string;
        }

        interface RssResponse {
          status: string;
          items: RssItem[];
        }

        const data: RssResponse = await response.json();
        
        if (data.status === 'ok' && data.items) {
          // Process the posts to extract thumbnails
          const processedPosts = data.items.map((item) => {
            // Extract the first image from the content
            const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
            const thumbnail = imgMatch ? imgMatch[1] : null;
            
            return {
              title: item.title,
              pubDate: item.pubDate,
              link: item.link,
              author: item.author,
              thumbnail,
              description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
            };
          });
          
          setPosts(processedPosts.slice(0, 3)); // Show only the 3 latest posts
        }
      } catch (err) {
        console.error('Error fetching Medium feed:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMediumFeed();
  }, []);

  if (error) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-muted/50 rounded-t-lg"></div>
            <CardHeader>
              <div className="h-6 bg-muted/50 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-muted/30 rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-muted/30 rounded w-full mb-2"></div>
              <div className="h-4 bg-muted/30 rounded w-5/6"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <a 
          key={index} 
          href={post.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group"
        >
          <Card className="h-full flex flex-col transition-all hover:shadow-md">
            {post.thumbnail && (
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={post.thumbnail} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {post.title}
                <ArrowUpRight className="inline-block ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {new Date(post.pubDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{post.description}</p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default MediumFeed;
