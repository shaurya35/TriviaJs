// import { useEffect, useState } from 'react';

// export default function Home() {

//   const [questions, setQuestions] = useState(null);

//   useEffect(() => {
//     const fetchQuestions = async () => {  
//       const response = await fetch('/admin/questions');
//       const data = await response.json();
//           console.log(data);

//       if(response.ok) {
//         setQuestions(data);
//       } 
//     }
//     fetchQuestions();
//   }, [])


//   return (
//     <div>
//       <div className="home">
//         {questions && (questions as any[]).map((question: any) => (
//           <p key={question._id}>{question.title}</p>
//         ))}
//       </div>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react';

interface Question {
  _id: string;
  content: string;
}

const Home: React.FC = () => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:8080/admin/questions');
        
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`HTTP error! status: ${response.status} - ${text}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data); 

        const filteredData: Question[] = data.map((question: any) => ({
          _id: question._id,
          content: question.content,
        }));

        console.log('Filtered data:', filteredData); // Log filtered data
        setQuestions(filteredData);
      } catch (error) {
        setError((error as Error).message);
        console.error('Fetch error:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <div className="home">
        {error && <p className="error">{error}</p>}
        {questions && questions.map((question) => (
          <div key={question._id}>
            <p>ID: {question._id}</p>
            <p>Code: {question.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;



