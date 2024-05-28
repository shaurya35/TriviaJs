import React, { useEffect, useState } from "react";

interface Question {
  _id: string;
  level: string;
  content: string;
  code: string;
  options: string[];
}

const MediumQuestions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8080/admin/questions");

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`HTTP error! status: ${response.status} - ${text}`);
        }

        const data: Question[] = await response.json();

        // Filter questions to only include those with level "easy"
        const mediumQuestions = data.filter(
          (question) => question.level === "medium"
        );

        setQuestions(mediumQuestions);
      } catch (error) {
        setError((error as Error).message);
        console.error("Fetch error:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <div className="home">
        {error && <p className="error">{error}</p>}
        {questions &&
          questions.map((question) => (
            <div key={question._id}>
              <p>Level: {question.level}</p>
              <p>Content: {question.content}</p>
              <p>Code: {question.code}</p>
              <p>Options: {question.options.join(", ")}</p>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MediumQuestions;
