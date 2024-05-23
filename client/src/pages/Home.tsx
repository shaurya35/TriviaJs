import { useEffect, useState } from 'react';
import Questions from '../components/Questions';

export default function Home() {
  const [questions, setQuestions] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/admin/questions');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setQuestions(json);
      } catch (err: any) {
        setError(err.message);
        console.error('Fetch error:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="questions">
        {error && <p>Error fetching data: {error}</p>}
        {questions ? (
          questions.map((question: any) => (
            <Questions key={question.id} question={question} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
