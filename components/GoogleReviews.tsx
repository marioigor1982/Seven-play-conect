import React, { useEffect, useState } from 'react';

type Review = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
};

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/google-reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Erro ao buscar avaliações.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando avaliações...</p>;
  if (error) return <p>{error}</p>;
  if (!reviews.length) return <p>Nenhuma avaliação encontrada.</p>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-[#6A00B8]">Avaliações Google</h3>
      {reviews.map((review, idx) => (
        <div key={idx} className="mb-6 border-b pb-4 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-[#F88840]">{review.author_name}</span>
            <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
            <span className="text-xs text-gray-400 ml-2">{review.relative_time_description}</span>
          </div>
          <p className="text-gray-800">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews; 